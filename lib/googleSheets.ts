import { google } from 'googleapis';

export const SHEET_NAMES = {
  jobs: 'Sheet1',
  gmail: 'gmail',
  apply: 'Apply Control Center',
};

export type SheetRow = Record<string, string>;

function normalizeHeader(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, '_');
}

function getAuthClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error('Missing Google credentials. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY.');
  }

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
}

export async function getSheetRows(sheetName: string): Promise<SheetRow[]> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error('Missing GOOGLE_SHEET_ID in environment variables.');
  }

  const sheets = google.sheets({ version: 'v4', auth: getAuthClient() });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName,
  });

  const values = response.data.values ?? [];
  if (values.length < 2) return [];

  const [rawHeaders, ...rows] = values;
  const headers = rawHeaders.map((h) => normalizeHeader(String(h)));

  return rows.map((row) => {
    const item: SheetRow = {};
    headers.forEach((header, index) => {
      item[header] = String(row[index] ?? '').trim();
    });
    return item;
  });
}

export async function getDashboardData() {
  const [jobs, emails, applications] = await Promise.all([
    getSheetRows(SHEET_NAMES.jobs),
    getSheetRows(SHEET_NAMES.gmail),
    getSheetRows(SHEET_NAMES.apply),
  ]);

  return { jobs, emails, applications };
}

import { RecruiterEmailsTable } from '@/components/RecruiterEmailsTable';
import { getSheetRows, SHEET_NAMES } from '@/lib/googleSheets';

export default async function EmailsPage() {
  const rows = await getSheetRows(SHEET_NAMES.gmail);
  return <div className="space-y-4"><h2 className="text-xl font-semibold">Recruiter Email Leads</h2><RecruiterEmailsTable rows={rows} /></div>;
}

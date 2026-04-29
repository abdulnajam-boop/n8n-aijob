import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SHEET_NAMES } from '@/lib/googleSheets';

export default function SettingsPage() {
  return <Card><CardHeader><CardTitle>Data Source Settings</CardTitle></CardHeader><CardContent><ul className="space-y-2 text-sm"><li><strong>Google Sheet ID:</strong> {process.env.GOOGLE_SHEET_ID || 'Not configured'}</li><li><strong>Jobs sheet:</strong> {SHEET_NAMES.jobs}</li><li><strong>Emails sheet:</strong> {SHEET_NAMES.gmail}</li><li><strong>Apply sheet:</strong> {SHEET_NAMES.apply}</li></ul></CardContent></Card>;
}

import { FollowUpsTable } from '@/components/FollowUpsTable';
import { isFollowUpDue } from '@/lib/dashboardMetrics';
import { getSheetRows, SHEET_NAMES } from '@/lib/googleSheets';

export default async function FollowUpsPage() {
  const rows = await getSheetRows(SHEET_NAMES.apply);
  return <div className="space-y-4"><h2 className="text-xl font-semibold">Follow-ups Due</h2><FollowUpsTable rows={rows.filter(isFollowUpDue)} /></div>;
}

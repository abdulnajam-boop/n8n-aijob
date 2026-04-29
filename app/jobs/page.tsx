import { JobsTable } from '@/components/JobsTable';
import { getDashboardData } from '@/lib/googleSheets';

export default async function JobsPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const { jobs, applications } = await getDashboardData();
  const all = [...jobs, ...applications].filter((row) => {
    const score = Number(row.score || row.match_score || 0);
    const minScore = Number(searchParams.min_score || 0);
    const src = String(searchParams.source || '').toLowerCase();
    const loc = String(searchParams.location || '').toLowerCase();
    const status = String(searchParams.status || '').toLowerCase();
    return score >= minScore && (!src || (row.source || '').toLowerCase().includes(src)) && (!loc || (row.location || '').toLowerCase().includes(loc)) && (!status || (row.status || row.apply_status || '').toLowerCase().includes(status));
  });
  return <div className="space-y-4"><h2 className="text-xl font-semibold">All Jobs</h2><JobsTable rows={all} /></div>;
}

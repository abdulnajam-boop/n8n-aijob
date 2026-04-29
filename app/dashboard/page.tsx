import { FollowUpsTable } from '@/components/FollowUpsTable';
import { JobsTable } from '@/components/JobsTable';
import { MetricCard } from '@/components/MetricCard';
import { RecruiterEmailsTable } from '@/components/RecruiterEmailsTable';
import { getMetrics, isFollowUpDue, isHighMatch } from '@/lib/dashboardMetrics';
import { getDashboardData } from '@/lib/googleSheets';

export default async function DashboardPage() {
  try {
    const { jobs, emails, applications } = await getDashboardData();
    const metrics = getMetrics(jobs, emails, applications);
    return <div className="space-y-8"><section className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">{Object.entries(metrics).map(([k,v])=><MetricCard key={k} title={k.replace(/([A-Z])/g,' $1')} value={v} />)}</section><section><h2 className="mb-3 text-lg font-semibold">Recent High Match Jobs</h2><JobsTable rows={[...jobs,...applications].filter(isHighMatch).slice(0,10)} /></section><section><h2 className="mb-3 text-lg font-semibold">Recruiter Email Leads</h2><RecruiterEmailsTable rows={emails.slice(0,10)} /></section><section><h2 className="mb-3 text-lg font-semibold">Follow-ups Due</h2><FollowUpsTable rows={applications.filter(isFollowUpDue)} /></section></div>;
  } catch (error) {
    return <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">{(error as Error).message}</div>;
  }
}

import { SheetRow } from './googleSheets';

const yes = (value?: string) => (value ?? '').toLowerCase() === 'yes';
const toNum = (value?: string) => Number(value ?? 0);
const includes = (value: string | undefined, target: string) => (value ?? '').toLowerCase().includes(target.toLowerCase());

export function isHighMatch(row: SheetRow) {
  return toNum(row.score || row.match_score) >= 70;
}

export function isFollowUpDue(row: SheetRow) {
  if (yes(row.follow_up)) return false;
  const raw = row.follow_up_date;
  if (!raw) return false;
  const due = new Date(raw);
  if (Number.isNaN(due.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  return due <= today;
}

export function getMetrics(jobs: SheetRow[], emails: SheetRow[], applications: SheetRow[]) {
  const totalJobsFound = jobs.length + applications.length;
  const highMatchJobs = [...jobs, ...applications].filter(isHighMatch).length;
  const recruiterEmails = emails.filter((r) => includes(r.source, 'gmail') || includes(r.job_lead_type, 'recruiter')).length;
  const draftsCreated = emails.filter((r) => includes(r.reply_status, 'drafted')).length;
  const appliedJobs = applications.filter((r) => yes(r.applied) || includes(r.apply_status, 'applied')).length;
  const followUpsDue = applications.filter(isFollowUpDue).length;

  return { totalJobsFound, highMatchJobs, recruiterEmails, draftsCreated, appliedJobs, followUpsDue };
}

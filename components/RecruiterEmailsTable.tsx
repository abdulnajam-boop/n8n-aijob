import { SheetRow } from '@/lib/googleSheets';
import { StatusBadge } from './StatusBadge';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from './ui/table';

export function RecruiterEmailsTable({ rows }: { rows: SheetRow[] }) {
  return <div className="overflow-x-auto rounded-xl border bg-white"><Table><TableHead><TableRow><TableHeaderCell>Sender</TableHeaderCell><TableHeaderCell>Role</TableHeaderCell><TableHeaderCell>Company</TableHeaderCell><TableHeaderCell>Work Mode</TableHeaderCell><TableHeaderCell>Score</TableHeaderCell><TableHeaderCell>Reply Status</TableHeaderCell></TableRow></TableHead><TableBody>{rows.map((r, i)=><TableRow key={i}><TableCell>{r.sender || r.email_sender || '-'}</TableCell><TableCell>{r.role || r.job_title || '-'}</TableCell><TableCell>{r.company || '-'}</TableCell><TableCell>{r.work_mode || '-'}</TableCell><TableCell>{r.score || r.match_score || '-'}</TableCell><TableCell><StatusBadge value={r.reply_status} /></TableCell></TableRow>)}</TableBody></Table></div>;
}

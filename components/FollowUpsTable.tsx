import { SheetRow } from '@/lib/googleSheets';
import { StatusBadge } from './StatusBadge';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from './ui/table';

export function FollowUpsTable({ rows }: { rows: SheetRow[] }) {
  return <div className="overflow-x-auto rounded-xl border bg-white"><Table><TableHead><TableRow><TableHeaderCell>Role</TableHeaderCell><TableHeaderCell>Company</TableHeaderCell><TableHeaderCell>Follow-up Date</TableHeaderCell><TableHeaderCell>Applied</TableHeaderCell><TableHeaderCell>Follow-up</TableHeaderCell></TableRow></TableHead><TableBody>{rows.map((r, i)=><TableRow key={i}><TableCell>{r.job_title || r.role || '-'}</TableCell><TableCell>{r.company || '-'}</TableCell><TableCell>{r.follow_up_date || '-'}</TableCell><TableCell><StatusBadge value={r.applied || r.apply_status} /></TableCell><TableCell><StatusBadge value={r.follow_up} /></TableCell></TableRow>)}</TableBody></Table></div>;
}

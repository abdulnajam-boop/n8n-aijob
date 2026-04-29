import { SheetRow } from '@/lib/googleSheets';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from './ui/table';
import { StatusBadge } from './StatusBadge';

export function JobsTable({ rows }: { rows: SheetRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <Table>
        <TableHead><TableRow><TableHeaderCell>Role</TableHeaderCell><TableHeaderCell>Company</TableHeaderCell><TableHeaderCell>Location</TableHeaderCell><TableHeaderCell>Source</TableHeaderCell><TableHeaderCell>Score</TableHeaderCell><TableHeaderCell>Status</TableHeaderCell></TableRow></TableHead>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={`${r.role}-${i}`}>
              <TableCell>{r.job_title || r.role || '-'}</TableCell>
              <TableCell>{r.company || '-'}</TableCell>
              <TableCell>{r.location || '-'}</TableCell>
              <TableCell>{r.source || '-'}</TableCell>
              <TableCell>{r.score || r.match_score || '-'}</TableCell>
              <TableCell><StatusBadge value={r.apply_status || r.status || r.applied} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

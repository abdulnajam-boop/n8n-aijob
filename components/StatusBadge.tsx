import { Badge } from './ui/badge';

export function StatusBadge({ value }: { value?: string }) {
  const val = value || 'Unknown';
  const lower = val.toLowerCase();
  const tone = lower.includes('applied') || lower.includes('yes')
    ? 'bg-emerald-100 text-emerald-700'
    : lower.includes('draft')
      ? 'bg-blue-100 text-blue-700'
      : lower.includes('follow') || lower.includes('due')
        ? 'bg-amber-100 text-amber-700'
        : 'bg-slate-100 text-slate-700';

  return <Badge className={tone}>{val}</Badge>;
}

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function MetricCard({ title, value }: { title: string; value: number }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent><p className="text-3xl font-semibold">{value}</p></CardContent>
    </Card>
  );
}

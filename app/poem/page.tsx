import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default async function PoemPage() {
  console.log('[Page] Fetching poem data...');
  const res = await fetch('http://localhost:3000/api/poem', {
    next: { revalidate: 0 }
  });
  const data = await res.json() as { title: string; lines: string[] };

  console.log('[Page] Poem data:', data);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <Card className="max-w-xl w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-center">
            {data.lines.map((line, idx) => (
              <p key={idx} className="text-lg leading-relaxed ">
                {line}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

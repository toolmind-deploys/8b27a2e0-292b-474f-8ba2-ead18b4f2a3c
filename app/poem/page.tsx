import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default async function PoemPage() {
  console.log('[Page] Fetching poem data...');
  const res = await fetch('http://localhost:3000/api/poem', {
    next: { revalidate: 0 }
  });
  const data = (await res.json()) as { title: string; lines: string[] };

  console.log('[Page] Poem data:', data);

  return (
    <main className="flex items-center justify-center min-h-screen p-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 opacity-40 blur-3xl -z-10" />

      <Card className="max-w-xl w-full shadow-2xl border border-slate-200 hover:shadow-cyan-500/50 transition-shadow duration-300 bg-white/90">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold mt-2">
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-center mb-4">
            {data.lines.map((line, idx) => (
              <p key={idx} className="text-lg leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default async function CatPage() {
  console.log('[CatPage] Fetching cat data...');
  const res = await fetch('http://localhost:3000/api/cat', {
    next: { revalidate: 0 }
  });
  const data = await res.json() as {
    cats: { id: number; name: string; description: string }[];
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <h1 className="mb-4 text-3xl font-bold text-center">Cat Collection</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {data.cats.map((cat) => (
          <Card key={cat.id} className="w-60 border shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">{cat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{cat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

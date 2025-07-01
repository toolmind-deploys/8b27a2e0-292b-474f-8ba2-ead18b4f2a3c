import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function FeedsPage() {
  console.log("[feeds/page.tsx] Rendering feeds page...");

  let data: any[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/feeds", {
      cache: "no-store"
    });
    data = await res.json();
    console.log("[feeds/page.tsx] Feeds data:", data);
  } catch (error) {
    console.error("[feeds/page.tsx] Error fetching feeds data:", error);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-200 py-8">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-700">Feeds</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((feed, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {feed.title || "Untitled Feed"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">{feed.description || "No description available."}</p>
                {feed.company && (
                  <p className="text-sm text-gray-500">Company: {feed.company}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}

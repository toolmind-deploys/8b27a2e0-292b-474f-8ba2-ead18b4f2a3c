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
    <main className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Feeds</h1>
      {data.map((feed, index) => (
        <Card key={index} className="mb-4 border shadow-sm">
          <CardHeader>
            <CardTitle>{feed.title || "Untitled Feed"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{feed.description || "No description"}</p>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}

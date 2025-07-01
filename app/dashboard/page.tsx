import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default async function DashboardPage() {
  console.log('[DashboardPage] Fetching dashboard data');

  const res = await fetch('http://localhost:3000/api/dashboard', {
    next: { revalidate: 0 }
  });
  const data = (await res.json()) as {
    stats: { id: number; label: string; value: string | number }[];
    recentActivities: { id: number; description: string }[];
  };

  console.log('[DashboardPage] Received data:', data);

  return (
    <main className="min-h-screen flex flex-col items-center p-6 gap-6 bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {data.stats.map(stat => (
          <Card key={stat.id} className="shadow-md border w-40">
            <CardHeader>
              <CardTitle className="text-center text-lg">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-center">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="max-w-md w-full">
        <Card className="shadow-md border">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            {data.recentActivities.map(activity => (
              <p key={activity.id} className="text-sm mb-2">- {activity.description}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

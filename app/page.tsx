import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  console.log('[HomePage] Rendering ToolMind AI introduction');

  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden p-6">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-cyan-100 to-pink-200 opacity-40 blur-2xl" />
      <Card className="max-w-2xl w-full shadow-xl border border-slate-200 bg-white/90 p-4">
        <CardHeader>
          <CardTitle className="text-3xl text-center mt-4">Welcome to ToolMind AI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4 mb-6">
            <p className="text-lg text-gray-700">
              ToolMind AI is a real-time coding companion that can assist you in building fast, efficient, and creative solutions.
            </p>
            <p className="text-sm text-gray-600">
              Discover a new way to collaborate on code, debug issues, and bring your ideas to life.
            </p>
            <p className="text-xs text-gray-400">Enjoy the power of instant AI-driven coding.</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

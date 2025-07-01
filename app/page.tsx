import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  console.log('[HomePage] Rendering the ToolMind AI intro page');

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 p-6">
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-to-br from-rose-100 via-sky-100 to-teal-200" />
      <Card className="max-w-xl w-full shadow-xl bg-white/90 border border-slate-50">
        <CardHeader>
          <CardTitle className="text-3xl text-center mt-4">Welcome to ToolMind AI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center mb-6">
            <p className="text-lg">
              ToolMind AI is your real-time coding companion, ready to assist with clarity and creativity.
            </p>
            <p>
              Explore how ToolMind AI can enhance your workflow, refine your code, and bring your ideas to life.
            </p>
            <p className="text-sm text-gray-500">Let's build something amazing together!</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

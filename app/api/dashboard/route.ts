import { NextResponse } from 'next/server';

export async function GET() {
  console.log('[API] Returning dummy dashboard data');

  return NextResponse.json({
    stats: [
      { id: 1, label: 'Projects', value: 12 },
      { id: 2, label: 'Tasks', value: 34 },
      { id: 3, label: 'Revenue', value: '$5,000' }
    ],
    recentActivities: [
      { id: 101, description: 'Finished setup of new repository' },
      { id: 102, description: 'Deployed project to staging' },
      { id: 103, description: 'Refactored user authentication flow' }
    ]
  });
}

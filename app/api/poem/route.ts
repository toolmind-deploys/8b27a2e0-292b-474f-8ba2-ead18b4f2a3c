import { NextResponse } from 'next/server';

export async function GET() {
  console.log('[API] Returning poem data');

  return NextResponse.json({
    title: 'A Peaceful Day',
    lines: [
      'The sun softly rises, painting gold on the horizon,',
      'Dancing shadows across dew-laden meadows,',
      'A whispered promise of a tranquil day.'
    ]
  });
}

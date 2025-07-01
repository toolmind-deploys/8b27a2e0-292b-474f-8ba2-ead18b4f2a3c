import { NextResponse } from 'next/server';

export async function GET() {
  console.log('[CatRoute] returning cat data...');

  return NextResponse.json({
    cats: [
      { id: 1, name: 'Fluffy', description: 'A friendly white cat' },
      { id: 2, name: 'Shadow', description: 'A shy black cat' }
    ]
  });
}

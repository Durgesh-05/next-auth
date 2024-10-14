import { NEXT_AUTH } from '@/app/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const session = await getServerSession(NEXT_AUTH);

  return NextResponse.json({ session });
};

import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'technical-posts.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const technicalPosts = JSON.parse(fileContents);

  return NextResponse.json(technicalPosts);
}
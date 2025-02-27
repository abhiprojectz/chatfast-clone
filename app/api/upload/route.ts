import { writeFile } from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { NextRequest, NextResponse } from 'next/server'
import path from 'path';
import fs from 'fs/promises';

export async function POST(request: NextRequest) {
  const is_use_supabaseStorage = 'false';               // USE SUPABASE STORAGE OR NOT 
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const extension = extname(file.name) // Get the file extension
  const randomFileName = `${uuidv4()}${extension}` // Generate a random filename with the proper extension

  try {
    await fs.readdir(path.join(process.cwd(), '/public', '/files'))
  } catch (error) {
    await fs.mkdir(path.join(process.cwd(), '/public', '/files'))
  }

  let path_file: string;
  const folderPath = path.join(process.cwd(), '/public/files')
  path_file = `${folderPath}/${randomFileName}` // New file path including folder and random filename

  await writeFile(path_file, buffer) // Write the file with the random filename to the user_files folder
  console.log(`open ${path_file} to see the uploaded file`)

  return NextResponse.json({ success: true })
}

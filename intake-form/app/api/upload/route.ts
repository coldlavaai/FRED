import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const questionId = formData.get('questionId') as string;
    const clientName = formData.get('clientName') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Create a unique filename
    const timestamp = Date.now();
    const sanitizedClientName = clientName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const sanitizedFileName = file.name.replace(/[^a-z0-9.-]/gi, '-').toLowerCase();
    const storagePath = `${sanitizedClientName}/${questionId}/${timestamp}-${sanitizedFileName}`;

    // Convert File to ArrayBuffer then to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('intake-files')
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: false
      });

    if (error) {
      console.error('Supabase storage error:', error);
      return NextResponse.json(
        { error: 'Failed to upload file to storage' },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('intake-files')
      .getPublicUrl(storagePath);

    return NextResponse.json(
      {
        success: true,
        url: publicUrl,
        path: storagePath
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    // Initialize Supabase client inside the function to ensure env vars are loaded
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const data = await request.json();

    // Merge other_responses into responses for complete data
    const completeResponses = {
      ...data.responses,
      _other_responses: data.other_responses || {}
    };

    // Insert into Supabase
    const { data: inserted, error } = await supabase
      .from('intake_responses')
      .insert([
        {
          project_name: data.project_name,
          client_name: data.client_name,
          submitted_at: data.submitted_at,
          responses: completeResponses,
          files_info: data.files_uploaded,
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save response' },
        { status: 500 }
      );
    }

    // TODO: Send email notification to oliver@coldlava.ai
    // (can integrate with SendGrid, Resend, or other email service)

    return NextResponse.json(
      { success: true, id: inserted[0].id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

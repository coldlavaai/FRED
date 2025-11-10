# Supabase Storage Setup for File Uploads

## Quick Setup (5 minutes)

### 1. Create Storage Bucket

1. Go to https://supabase.com/dashboard/project/pnusqkhylajieieboktt
2. Click **Storage** in the left sidebar
3. Click **Create a new bucket**
4. Enter bucket name: `intake-files`
5. Make it **Public** (so you can access uploaded files)
6. Click **Create bucket**

### 2. Set Storage Policies

Run this SQL in your Supabase SQL Editor:

```sql
-- Allow anyone to upload files (for form submissions)
CREATE POLICY "Allow public uploads"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'intake-files');

-- Allow authenticated users to read files (for you to view them)
CREATE POLICY "Allow authenticated reads"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'intake-files');

-- Allow public reads (so file URLs work)
CREATE POLICY "Allow public reads"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'intake-files');
```

### 3. Test It Works

After setup, test by uploading a file through the form. Files will be stored in paths like:
```
intake-files/
  └── fred-the-opportunity-broker/
      └── documents_templates/
          └── 1699876543210-terms.pdf
```

### Bucket Configuration

- **Name:** intake-files
- **Public:** Yes
- **File size limit:** Default (50MB per file is fine)
- **Allowed MIME types:** All (or restrict to: application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet)

## Accessing Uploaded Files

Once Fred submits the form, you can:

1. **View in Supabase Dashboard:**
   - Go to Storage → intake-files
   - Browse by client name folders

2. **View in Database:**
   - Query `intake_responses` table
   - Check `files_info` JSONB column
   - Contains file URLs you can click to download

3. **Direct URL Access:**
   - Files are publicly accessible via their URLs
   - Format: `https://pnusqkhylajieieboktt.supabase.co/storage/v1/object/public/intake-files/[path]`

## Security Notes

- Files are organized by client name for easy management
- Each file has a timestamp to prevent name conflicts
- Public bucket means anyone with the URL can access files
- For sensitive documents, consider making bucket private and using signed URLs
- Currently configured for ease of use (public) - can enhance security later if needed

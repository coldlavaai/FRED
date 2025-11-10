# Cold Lava - Project Intake Form

Professional client intake form for gathering project requirements. Built with Next.js 14, TypeScript, and Supabase.

**Client:** Fred - The Opportunity Broker
**Project:** CRM System

---

## Features

- ✅ **Configurable Questions** - Easy to customize via `questions-config.ts`
- ✅ **Multiple Question Types** - Text, textarea, select, multiselect, file uploads
- ✅ **Cold Lava Branding** - Professional branded design
- ✅ **Supabase Storage** - Secure response storage with search and filtering
- ✅ **Responsive Design** - Works on desktop and mobile
- ✅ **File Upload Support** - Accept document templates and other files
- ✅ **Progress Tracking** - Organized by sections
- ✅ **Validation** - Required field checking

---

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Styling:** Custom CSS with Cold Lava brand colors

---

## Quick Start

### 1. Install Dependencies

```bash
cd intake-form
npm install
```

### 2. Set Up Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the migration SQL:
   - Go to Supabase Dashboard → SQL Editor
   - Paste contents of `supabase-migration.sql`
   - Execute the SQL
3. Get your credentials:
   - Project Settings → API
   - Copy the URL and `service_role` key

### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization

### Modify Questions

Edit `questions-config.ts` to customize:

```typescript
export const questions: Question[] = [
  {
    id: "unique_id",
    section: "Section Name",
    question: "Your question here?",
    type: "text", // text, textarea, select, multiselect, file, number, email
    required: true,
    placeholder: "Optional placeholder",
    helpText: "Optional help text",
    options: ["Option 1", "Option 2"] // For select/multiselect only
  },
  // Add more questions...
];
```

### Update Client Info

In `questions-config.ts`:

```typescript
export const projectInfo = {
  clientName: "Client Name",
  projectName: "Project Name",
  contactEmail: "your-email@coldlava.ai"
};
```

### Branding/Colors

Edit `app/globals.css` to change colors:

```css
:root {
  --primary: #FF6B35; /* Main brand color */
  --primary-dark: #E5551E; /* Darker shade */
  --secondary: #1A1A1A; /* Background */
  /* ... more colors */
}
```

---

## Deployment

### Deploy to Vercel

1. **Connect Repository:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   cd intake-form
   vercel
   ```

2. **Add Environment Variables:**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `SUPABASE_SERVICE_ROLE_KEY`

3. **Deploy:**
   ```bash
   vercel --prod
   ```

Your form will be live at: `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to Vercel Project → Settings → Domains
2. Add custom domain (e.g., `intake.coldlava.ai`)
3. Update DNS records as instructed

---

## Viewing Responses

### Option 1: Supabase Dashboard

1. Go to Supabase Dashboard → Table Editor
2. Open `intake_responses` table
3. View all submissions with search and filters

### Option 2: Build Admin Panel

Create `app/admin/page.tsx` (requires authentication):

```typescript
// Fetch and display responses
const { data } = await supabase
  .from('intake_responses')
  .select('*')
  .order('submitted_at', { ascending: false });
```

---

## File Structure

```
intake-form/
├── app/
│   ├── api/
│   │   └── submit/
│   │       └── route.ts          # API endpoint for form submission
│   ├── thank-you/
│   │   └── page.tsx               # Thank you page
│   ├── globals.css                # Global styles + Cold Lava branding
│   ├── layout.tsx                 # Root layout with header/footer
│   └── page.tsx                   # Main intake form
├── questions-config.ts            # CUSTOMIZE QUESTIONS HERE
├── supabase-migration.sql         # Database schema
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── .env.local.example
├── .gitignore
└── README.md
```

---

## Reusing for Other Clients

1. **Copy the folder:**
   ```bash
   cp -r intake-form ../new-client-intake-form
   cd ../new-client-intake-form
   ```

2. **Update `questions-config.ts`:**
   - Change `projectInfo` (client name, project name)
   - Modify questions array
   - Add/remove sections as needed

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Share link with client**

That's it! The architecture is completely reusable.

---

## Database Schema

### Table: `intake_responses`

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `project_name` | TEXT | Project name |
| `client_name` | TEXT | Client name |
| `submitted_at` | TIMESTAMPTZ | When form was submitted |
| `responses` | JSONB | All form responses (structured) |
| `files_info` | JSONB | Info about uploaded files |
| `status` | TEXT | 'new', 'reviewed', 'archived' |
| `notes` | TEXT | Internal notes |
| `reviewed_by` | TEXT | Who reviewed it |
| `reviewed_at` | TIMESTAMPTZ | When it was reviewed |
| `created_at` | TIMESTAMPTZ | Row created |
| `updated_at` | TIMESTAMPTZ | Last updated |

---

## Security

- ✅ **Environment Variables:** Never commit `.env.local`
- ✅ **Service Role Key:** Keep secure (server-side only)
- ✅ **Row Level Security:** Enabled in Supabase
- ✅ **HTTPS Only:** Enforced by Vercel
- ✅ **Input Validation:** Client and server-side

---

## Future Enhancements

- [ ] Email notifications when form is submitted
- [ ] File upload to Supabase Storage (currently just logs file info)
- [ ] Admin dashboard to view/manage responses
- [ ] Export responses to CSV/PDF
- [ ] Form analytics (completion rate, time to complete)
- [ ] Multi-language support
- [ ] Save progress (draft responses)

---

## Support

**Questions or issues?**
Contact: oliver@coldlava.ai
Website: https://coldlava.ai

---

## License

© 2025 Cold Lava. All rights reserved.

This is a proprietary tool for Cold Lava client projects.

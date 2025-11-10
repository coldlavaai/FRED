# Fred Intake Form - Deployment Guide

**Status:** ✅ Form built and ready to deploy
**Location:** `/Users/oliver/FRED/intake-form/`
**GitHub:** https://github.com/coldlavaai/FRED

---

## What's Been Built

✅ Professional intake form with Cold Lava branding
✅ 40+ comprehensive questions covering all aspects
✅ Multiple question types (text, select, file upload, etc.)
✅ Mobile responsive design
✅ Supabase integration ready
✅ Form validation and error handling
✅ Thank you page with next steps

---

## Quick Deployment (15 minutes)

### Step 1: Set Up Supabase (5 minutes)

1. **Go to** [supabase.com](https://supabase.com) and sign in
2. **Create new project:**
   - Name: `fred-intake` (or whatever you want)
   - Database password: (choose a strong one)
   - Region: Closest to you (UK/EU)
   - Click "Create new project" (takes 2-3 mins)

3. **Run the migration:**
   - Wait for project to finish setting up
   - Go to **SQL Editor** (left sidebar)
   - Click "New query"
   - Open `/Users/oliver/FRED/intake-form/supabase-migration.sql`
   - Copy all the SQL and paste into Supabase SQL Editor
   - Click "Run" (bottom right)
   - You should see "Success. No rows returned"

4. **Get your credentials:**
   - Go to **Project Settings** → **API**
   - Copy these two values:
     - `Project URL` (looks like: `https://abc123.supabase.co`)
     - `service_role` key (under "Project API keys", click "Reveal" and copy)

### Step 2: Deploy to Vercel (5 minutes)

1. **Open terminal** in the intake-form directory:
   ```bash
   cd /Users/oliver/FRED/intake-form
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - "Set up and deploy...?" → Yes
   - "Which scope?" → coldlavaai (your account)
   - "Link to existing project?" → No
   - "What's your project's name?" → fred-intake-form
   - "In which directory is your code located?" → `./`
   - Vercel will build and deploy

4. **Add environment variables:**
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL production
   ```
   Paste your Supabase Project URL, hit Enter

   ```bash
   vercel env add SUPABASE_SERVICE_ROLE_KEY production
   ```
   Paste your service_role key, hit Enter

5. **Redeploy with environment variables:**
   ```bash
   vercel --prod
   ```

### Step 3: Test (2 minutes)

1. **Open the URL** Vercel gives you (e.g., `https://fred-intake-form.vercel.app`)
2. **Fill in a test submission** to make sure it works
3. **Check Supabase:**
   - Go to Supabase → Table Editor
   - Open `intake_responses` table
   - You should see your test submission

### Step 4: Send to Fred (1 minute)

Send Fred this message on WhatsApp:

```
Hi Fred,

Here's the project intake form to help us understand your requirements:

https://fred-intake-form.vercel.app

It should take about 15-20 minutes to complete. Your responses will help us create an accurate proposal with pricing and timeline.

Once you've submitted, we'll review and get back to you within 2-3 business days.

Any questions, just let me know!

Oliver
```

---

## Custom Domain (Optional)

If you want to use a custom domain like `fred.coldlava.ai`:

1. **In Vercel:**
   - Project Settings → Domains
   - Add domain: `fred.coldlava.ai`

2. **Update DNS:**
   - Go to your domain registrar (where coldlava.ai is registered)
   - Add DNS record as Vercel instructs

---

## Viewing Responses

**Option 1: Supabase Dashboard (Quick)**
- Go to Supabase → Table Editor → `intake_responses`
- See all submissions, search, filter
- Click any row to see full JSON responses

**Option 2: Export to Spreadsheet**
- In Supabase table view, click "Export" button
- Choose CSV or JSON
- Open in Excel/Google Sheets

**Option 3: Build Admin Panel (Later)**
- Can create `/app/admin/page.tsx` to view responses in the app
- Add authentication so only you can access
- Nicer UI than Supabase dashboard

---

## Customizing Questions (For Future Clients)

**To modify questions for Fred:**

Edit `/Users/oliver/FRED/intake-form/questions-config.ts`

**To reuse for another client:**

1. Copy the entire `intake-form` folder
2. Rename it (e.g., `new-client-intake-form`)
3. Edit `questions-config.ts`:
   - Update `projectInfo` (client name, project)
   - Modify `questions` array
4. Deploy to Vercel
5. Send link to new client

**The architecture is fully reusable!**

---

## Troubleshooting

**"Failed to submit form"**
- Check environment variables are set in Vercel
- Check Supabase credentials are correct
- Check Supabase project is not paused

**"Supabase error: relation does not exist"**
- You didn't run the migration SQL
- Go back to Step 1 and run the SQL

**Questions not showing correctly**
- Check `questions-config.ts` syntax
- Make sure all questions have required fields

**Vercel build failed**
- Check for TypeScript errors
- Make sure you ran `npm install` first

---

## What Happens After Fred Submits?

1. **Responses saved to Supabase** - You can view them immediately
2. **Fred sees thank you page** - With next steps outlined
3. **You review his answers** - Use them to finalize proposal
4. **You send him the £12k pricing doc** - With clear scope based on his needs

---

## Files Reference

| File | Purpose | You Should... |
|------|---------|---------------|
| `questions-config.ts` | All the questions | Edit this to change questions |
| `app/page.tsx` | Main form component | Usually don't need to edit |
| `app/globals.css` | Cold Lava styling | Edit to change colors/branding |
| `supabase-migration.sql` | Database schema | Run once in Supabase |
| `README.md` | Full documentation | Reference for details |
| `.env.local` | Local environment vars | Don't commit this! |

---

## Next Steps After Deployment

1. ✅ Deploy form (follow steps above)
2. ✅ Test with dummy submission
3. ✅ Send link to Fred
4. ⏳ Wait for Fred to submit (1-3 days)
5. ⏳ Review his responses in Supabase
6. ⏳ Finalize pricing based on his answers
7. ⏳ Send him the £12k proposal
8. ⏳ Discuss and close the deal

---

## Support

**Issues deploying?**
- Check the full README: `/Users/oliver/FRED/intake-form/README.md`
- Vercel docs: https://vercel.com/docs
- Supabase docs: https://supabase.com/docs

**Need help?**
I've documented everything, but if you get stuck, let me know what error you're seeing and I can help debug.

---

**Ready to deploy!** Follow the 3 steps above and you'll have the form live in 15 minutes. 🚀

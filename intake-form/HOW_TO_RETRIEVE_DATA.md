# How to Retrieve Form Submission Data

**Last Updated:** 2025-11-10

---

## Quick Access

Once Fred (or any client) submits the intake form, all data is stored in your Supabase database.

**Database:** `pnusqkhylajieieboktt.supabase.co`
**Table:** `intake_responses`
**Dashboard:** https://supabase.com/dashboard/project/pnusqkhylajieieboktt

---

## Option 1: View in Supabase Dashboard (Easiest)

1. Go to: https://supabase.com/dashboard/project/pnusqkhylajieieboktt
2. Click **"Table Editor"** in left sidebar
3. Select **"intake_responses"** table
4. You'll see all submissions with:
   - Submission ID
   - Project name (CRM System)
   - Client name (Fred - The Opportunity Broker)
   - Timestamp
   - Status (new/reviewed/completed)

5. **Click any row** to view full submission details including all 70+ response fields

---

## Option 2: Using Command Line (For Quick Checks)

### View All Submissions

```bash
source ~/.claude_credentials

node -e "
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  const { data, error } = await supabase
    .from('intake_responses')
    .select('id, client_name, project_name, created_at, status')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('ERROR:', error);
    return;
  }

  console.log('📊 Total Submissions:', data.length);
  console.log('');

  data.forEach((sub, i) => {
    console.log(\`\${i+1}. Client: \${sub.client_name}\`);
    console.log(\`   ID: \${sub.id}\`);
    console.log(\`   Submitted: \${sub.created_at}\`);
    console.log(\`   Status: \${sub.status}\`);
    console.log('');
  });
})();
"
```

### View Specific Submission Details

Replace `SUBMISSION_ID` with the actual ID:

```bash
source ~/.claude_credentials

node -e "
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  const { data, error } = await supabase
    .from('intake_responses')
    .select('*')
    .eq('id', 'SUBMISSION_ID')
    .single();

  if (error) {
    console.error('ERROR:', error);
    return;
  }

  console.log('✅ SUBMISSION FOUND');
  console.log('');
  console.log('Client:', data.client_name);
  console.log('Project:', data.project_name);
  console.log('Submitted:', data.created_at);
  console.log('');
  console.log('RESPONSES:');
  console.log(JSON.stringify(data.responses, null, 2));
})();
"
```

### View Latest Submission

```bash
source ~/.claude_credentials

node -e "
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  const { data, error } = await supabase
    .from('intake_responses')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('ERROR:', error);
    return;
  }

  console.log('🎯 LATEST SUBMISSION');
  console.log('');
  console.log('Client:', data.client_name);
  console.log('Submitted:', data.created_at);
  console.log('');
  console.log('Sample Responses:');
  Object.keys(data.responses).slice(0, 10).forEach(key => {
    console.log(\`  - \${key}: \${data.responses[key]}\`);
  });
  console.log('');
  console.log('Total fields captured:', Object.keys(data.responses).length);
})();
"
```

---

## Option 3: Export to JSON File

To save a submission as a JSON file for easy review:

```bash
source ~/.claude_credentials

node -e "
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  const { data, error } = await supabase
    .from('intake_responses')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('ERROR:', error);
    return;
  }

  const filename = \`fred-submission-\${new Date().toISOString().split('T')[0]}.json\`;
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  console.log('✅ Exported to:', filename);
})();
"
```

This creates a file like `fred-submission-2025-11-10.json` in your current directory.

---

## Database Schema

**Table:** `intake_responses`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Unique submission ID (auto-generated) |
| `created_at` | timestamp | When the submission was saved |
| `project_name` | text | "CRM System" |
| `client_name` | text | "Fred - The Opportunity Broker" |
| `submitted_at` | timestamp | When user clicked Submit |
| `responses` | jsonb | All form field answers (70+ fields) |
| `files_info` | jsonb | File upload metadata (if any) |
| `status` | text | "new", "reviewed", or "completed" |

---

## What Gets Captured

When Fred submits the form, you'll get all of these fields in the `responses` object:

### Deal Type Fields
- `crypto_fields`, `crypto_blockchain`, `crypto_additional`
- `gold_types`, `gold_fields`, `gold_additional`
- `banking_instruments`, `banking_fields_common`, `banking_fields_mt103`

### CRM Core
- `client_fields_essential`, `client_fields_additional`
- `pipeline_stages`, `pipeline_visualization`, `pipeline_automation`
- `communication_channels`, `communication_logging`, `communication_history`

### Financial & Currency
- `currencies_used`, `currency_conversion`
- `commission_tracking`, `commission_paymaster`

### Reporting & Analytics
- `dashboard_metrics`, `reports_needed`, `report_export`

### Documents & Verification
- `documents_id_types`, `documents_templates_which`
- `wallet_confirmation`, `wallet_screening_preference`

### Team & Access
- `team_size_now`, `team_size_future`
- `team_permissions`, `team_deal_assignment`

### Integration & Automation
- `integrations_email`, `integrations_api`, `integrations_other`
- `notifications_needed`, `notification_delivery`
- `esignature_preference`, `esignature_workflow`

### Security & Compliance
- `security_compliance`, `security_audit_trail`, `security_data_retention`

### Data Migration
- `existing_data`, `existing_data_volume`, `existing_data_format`

### Timeline & Success Metrics
- `timeline_preference`, `timeline_specific`
- `success_main_problem`, `success_must_have`, `success_nice_to_have`

**Plus any "Other" text fields** that appear when user selects custom options.

---

## Credentials Needed

All stored in `~/.claude_credentials`:

```bash
export NEXT_PUBLIC_SUPABASE_URL='https://pnusqkhylajieieboktt.supabase.co'
export SUPABASE_SERVICE_ROLE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

To load them in any terminal:
```bash
source ~/.claude_credentials
```

---

## Troubleshooting

### "No submissions found"
- Check you're looking at the right database (pnusqkhylajieieboktt)
- Verify Fred actually submitted (check form redirected to thank-you page)
- Try refreshing Supabase dashboard

### "Invalid API key"
- Run: `source ~/.claude_credentials`
- Verify: `echo $SUPABASE_SERVICE_ROLE_KEY`
- Should show: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### "Permission denied"
- Make sure using SERVICE_ROLE_KEY not ANON_KEY
- Service role key has full database access

---

## Email Notifications (Future Enhancement)

Currently, you need to manually check for submissions. Future enhancement could add:
- Email to oliver@coldlava.ai when form is submitted
- Include submission ID and link to dashboard
- Daily digest of new submissions

This is not implemented yet but can be added if needed.

---

**Questions?** Contact oliver@coldlava.ai

*Last tested: 2025-11-10*

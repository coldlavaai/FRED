# Phase 1 Scope - Fred CRM

**Price:** £12,000
**Timeline:** 10 weeks
**Focus:** Core CRM for managing clients, deals, and documents

---

## Core Principle

Build a **working CRM that replaces Fred's whiteboards** with a professional system for:
- Tracking clients and their information
- Managing deals across three sectors
- Storing and generating documents
- Preventing fraud through wallet tracking

**Keep it simple, functional, and scalable.**

---

## Feature List (What We're Building)

### 1. Client Management Module

**Purpose:** Replace scattered client information with centralized database

**Features:**
- Create/edit/delete clients
- Store client information:
  - Contact name (primary)
  - Business name
  - Email, phone, WhatsApp
  - Source/referral (who introduced them)
  - Country/location
  - Client type (Buyer/Seller/Both)
  - Sector preference (Crypto/Gold/Banking/Multiple)
- Upload and store documents:
  - CIS (Customer Information Sheet)
  - ID documents (passport, etc.)
  - Verification documents
  - Any other files
- View document history per client
- Add notes and activity log
- Search clients by name, email, business
- Filter clients by type, sector, source
- Client profile page showing all their deals and documents

**UI/UX:**
- List view of all clients (table with search/filter)
- Client detail page (profile with tabs for info/deals/documents)
- Simple forms for adding/editing
- Drag-and-drop file upload

---

### 2. Deal Management Module

**Purpose:** Replace whiteboard with digital deal tracking

**Three Deal Types:** Each with different fields

#### A. Cryptocurrency Deals
**Fields:**
- Deal ID (auto-generated)
- Client (buyer)
- Client (seller)
- Cryptocurrency type (BTC, ETH, USDT, etc. - dropdown)
- Quantity
- Price per coin
- Total value
- Buyer wallet address(es)
- Seller wallet address(es)
- Status (Active/Grey/Dead/Completed)
- Expected close date
- Actual close date
- Commission percentage
- Commission amount (auto-calculated)
- Commission recipients (list)
- Assigned to (team member)
- Created date
- Last updated
- Notes/activity log

#### B. Gold Deals
**Fields:**
- Deal ID (auto-generated)
- Client (buyer)
- Client (seller)
- Gold type (24k, 22k, bullion, etc. - dropdown)
- Quantity and unit (oz/kg/tonnes)
- Price per unit
- Total value
- Location/storage
- Delivery method
- Status (Active/Grey/Dead/Completed)
- Expected delivery date
- Actual delivery date
- Commission percentage
- Commission amount (auto-calculated)
- Commission recipients (list)
- Assigned to (team member)
- Created date
- Last updated
- Notes/activity log

#### C. Banking Deals
**Fields:**
- Deal ID (auto-generated)
- Client (buyer)
- Client (seller)
- Instrument type (MT 103, Treasury Bond, etc. - dropdown from Fred's list)
- Transaction amount
- Currency
- Bank details (sending/receiving)
- Reference numbers
- Status (Active/Grey/Dead/Completed)
- Expected settlement date
- Actual settlement date
- Commission percentage
- Commission amount (auto-calculated)
- Commission recipients (list)
- Assigned to (team member)
- Created date
- Last updated
- Notes/activity log

**Common Features Across All Deal Types:**
- Status workflow: Active → Grey (paused) → Dead (cancelled) OR → Completed
- Attach documents to deals
- Activity timeline (who did what when)
- Email/share deal summary
- Duplicate deal (for similar transactions)

**UI/UX:**
- Dashboard showing all deals with tabs (Crypto/Gold/Banking)
- Kanban board view (Active/Grey/Dead/Completed columns)
- List view (table with search/filter)
- Deal detail page (all info + documents + activity)
- Simple forms for creating/editing deals
- Quick filters (by status, by assigned person, by date range)

---

### 3. Wallet Address Tracking

**Purpose:** Prevent fraud by tracking wallet address history

**Features:**
- Store wallet addresses (linked to deals)
- Manual flagging:
  - Green (verified good)
  - Red (flagged bad/suspicious)
  - Amber (needs review)
  - Grey (unchecked)
- Search function: Enter wallet address → see all deals it's appeared in
- Alert when creating deal with a flagged wallet
- Notes per wallet (why was it flagged?)
- History view: Which deals used this wallet?
- Bulk wallet check (paste multiple addresses, see results)

**NOT Included (Phase 2):**
- ❌ Automated screening via API (Elliptic/Chainalysis)
- ❌ Real-time blockchain verification
- ❌ Automatic risk scoring

**UI/UX:**
- Wallet search page (enter address, see results)
- Wallet detail page (shows all associated deals)
- Flag button on wallet addresses throughout the system
- Color-coded indicators (green/red/amber/grey dots)
- Alert modal when flagged wallet detected

---

### 4. Document Generation & Management

**Purpose:** Auto-generate contracts from deal data, get them signed electronically

**5 Document Templates:**
1. Buyer booking confirmation
2. Seller booking confirmation
3. Terms agreement
4. Commission agreement
5. NDA

**How It Works:**
1. Fred provides existing Word/PDF templates
2. We convert to dynamic templates (using n8n)
3. Data auto-populates from CRM (client names, deal details, dates, amounts, etc.)
4. Generate PDF
5. Send for e-signature (DocuSign or similar)
6. Track signing status
7. Store signed document back in CRM

**Features:**
- Generate document from any deal (one-click)
- Preview before sending
- Send to client email for signature
- Track status: Sent/Viewed/Signed/Declined
- Resend reminders
- Store signed copies
- Download/print documents
- Document history per deal

**UI/UX:**
- "Generate Documents" button on deal page
- Select which document(s) to generate
- Review and edit if needed
- Send for signature
- Track status in deal timeline

---

### 5. Reporting & Analytics

**Purpose:** Get visibility into deal pipeline and performance

**Reports/Views:**
- **By Sector:**
  - All crypto deals
  - All gold deals
  - All banking deals

- **By Role:**
  - All buyers (crypto/gold/banking)
  - All sellers (crypto/gold/banking)

- **By Status:**
  - Active deals (value and count)
  - Grey/paused deals
  - Dead deals
  - Completed deals (by date range)

- **By Team Member:**
  - Deals assigned to each person
  - Performance metrics

- **Dashboard Widgets:**
  - Total active deals (count + value)
  - Deals by status (pie chart)
  - Recent activity (timeline)
  - Upcoming close dates
  - Commission earned (completed deals)
  - Flagged wallets count

**Export:**
- Export any view to Excel/CSV
- Print deal summaries
- Share reports via email/link

**UI/UX:**
- Dashboard (main landing page after login)
- Reports page (various filters and exports)
- Charts and visualizations
- Date range pickers

---

### 6. Security & User Management

**Purpose:** Keep data secure and control who can do what

**Authentication:**
- Email + password login
- 2-factor authentication (optional but recommended)
- Password reset via email
- Session management (auto-logout after inactivity)

**User Roles:**
- **Admin:** Full access (Fred)
  - Create/edit/delete everything
  - Manage users
  - View all deals
  - Access all features

- **Team Member:** Standard access
  - Create/edit clients and deals
  - View all deals
  - Cannot delete
  - Cannot manage users

- **Viewer:** Read-only (if needed)
  - View clients and deals
  - Cannot edit or delete
  - Cannot access sensitive documents

**Security Features:**
- Encrypted storage for sensitive data (wallet addresses, bank details)
- Audit log (tracks who did what when)
- Automatic backups (daily)
- SSL certificate (HTTPS)
- Data encryption in transit
- Row-level security (users see only what they should)

**UI/UX:**
- User management page (Admin only)
- Add/edit/deactivate users
- Assign roles
- View activity log

---

### 7. Search & Navigation

**Purpose:** Find anything quickly

**Global Search:**
- Search across clients, deals, documents
- Search by name, email, wallet address, deal ID
- Instant results as you type
- Recent searches saved

**Navigation:**
- Top menu: Dashboard / Clients / Deals / Wallets / Reports / Settings
- Breadcrumbs (show where you are)
- Quick actions (+ New Client, + New Deal buttons always visible)
- Notifications (alerts for flagged wallets, pending signatures, etc.)

---

## Technical Architecture

**Stack:**
- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Backend:** Next.js API routes (server components)
- **Database:** Supabase (PostgreSQL + auth + storage)
- **Automation:** n8n (document generation, workflows)
- **E-signature:** DocuSign or HelloSign (TBD based on Fred's preference)
- **Hosting:** Vercel (frontend) + Supabase Cloud (database)
- **Storage:** Supabase Storage (documents, files)

**Why This Stack:**
- Supabase saves 20+ hours (auth, RLS, encryption built-in)
- n8n saves 15+ hours (document generation, workflows)
- Next.js is fast, modern, scalable
- Vercel deployment is simple and reliable
- All tools Oliver already knows/uses

---

## Deliverables

**At the end of 10 weeks, Fred gets:**

1. **Working CRM system** (deployed and live)
2. **User accounts** (Fred + team members set up)
3. **Data imported** (if Fred has existing data)
4. **Documents configured** (5 templates converted and working)
5. **Training session** (1-2 hours via video call)
6. **User documentation** (written guide + videos)
7. **Source code** (Fred owns it)
8. **30 days support** (bug fixes, questions)

---

## What's NOT Included (Scope Boundaries)

**Not in Phase 1:**
- ❌ Automated wallet screening API
- ❌ Automated KYC verification
- ❌ Payment processing (commission sending)
- ❌ AI features (auto-grading, predictions)
- ❌ Mobile app (native iOS/Android)
- ❌ WhatsApp integration
- ❌ Advanced analytics/forecasting
- ❌ More than 5 document templates
- ❌ Integration with other software (unless discussed)
- ❌ On-premise hosting
- ❌ 24/7 support

**These can be Phase 2 if Fred wants them later.**

---

## Development Phases (10 Weeks)

### Weeks 1-2: Foundation
- Supabase setup (database, auth, storage)
- Next.js project scaffold
- Authentication working (login/logout)
- Basic UI framework
- User management

### Weeks 3-4: Core CRM
- Client management (CRUD)
- Client detail pages
- Document upload/storage
- Search and filtering

### Weeks 5-6: Deal Management
- Three deal types (Crypto/Gold/Banking)
- Deal creation and editing
- Status workflow
- Deal-client linking
- **Milestone Payment Trigger**

### Weeks 7-8: Wallet & Documents
- Wallet address tracking
- Wallet search and flagging
- Document generation (n8n)
- E-signature integration
- Document tracking

### Weeks 9-10: Reports, Testing, Launch
- Dashboard and reports
- Export functionality
- Testing and bug fixing
- Training and documentation
- Launch and handover
- **Final Payment**

---

## Success Criteria

**Phase 1 is successful if:**
- ✅ Fred can log in and use the system daily
- ✅ Whiteboards are replaced by CRM
- ✅ Client and deal data is organized and searchable
- ✅ Documents auto-generate and get signed
- ✅ Wallet addresses are tracked and searchable
- ✅ Team can collaborate in the system
- ✅ Reports show pipeline visibility
- ✅ System is secure and reliable

**If Fred says:** "I can't imagine going back to whiteboards" → We succeeded.

---

## Notes for Development

**For Oliver & Jacob:**

**Keep it simple:**
- Don't over-engineer
- Standard CRUD operations
- Clean, intuitive UI
- Fast and reliable

**Focus on usability:**
- Fred isn't technical - make it obvious
- Use familiar patterns (like other CRMs)
- Clear labels and instructions
- Good defaults

**Use what we know:**
- Supabase (saves time)
- n8n (Oliver already uses it)
- Next.js (modern, fast)
- Tailwind (rapid styling)

**Avoid scope creep:**
- Stick to the spec
- Note "nice to haves" for Phase 2
- Clear boundaries on what's included

**Ship in 10 weeks:**
- Weekly milestones
- Regular demos to Fred
- Iterate based on feedback
- Launch on time

---

**This scope keeps us at £12k, delivers real value, and sets up Phase 2 if Fred wants more later.**

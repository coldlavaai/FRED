# Follow-Up Questions for Fred - CRM Project

**Purpose:** To gather all necessary information for accurate pricing and timeline estimation
**Client:** Fred - The Opportunity Broker
**Date:** 2025-11-10
**Priority:** Send to Fred via WhatsApp group ASAP

---

## Section 1: Deal Structure & Data Requirements

### 1.1 Cryptocurrency Deals

For each crypto deal, please confirm all fields you need to track:

**Required Information:**
- [ ] Cryptocurrency type (BTC, ETH, USDT, etc.) - Do you need a predefined dropdown or free text?
- [ ] Quantity of coins
- [ ] Price per coin / Total deal value
- [ ] Buyer name and contact details
- [ ] Seller name and contact details
- [ ] Multiple wallet addresses per deal (buyer and seller wallets)
- [ ] Expected settlement date
- [ ] Actual settlement date (when deal closes)
- [ ] Deal notes/comments
- [ ] Status (Active/Grey/Dead/Completed)

**Questions:**
1. Are there any other crypto-specific fields we're missing?
2. Do you track which blockchain each transaction is on (e.g., ETH on Ethereum, USDC on Polygon)?
3. Do you need to track transaction hashes once deals complete?
4. Do you need to store proof of funds documents?
5. What triggers a deal moving from Active → Grey → Dead → Completed? (So we can potentially automate status changes)

### 1.2 Gold Deals

For each gold deal, please confirm all fields you need to track:

**Required Information:**
- [ ] Gold type/purity (24k, 22k, bullion, etc.) - Dropdown or free text?
- [ ] Quantity and unit (oz, kg, tonnes)
- [ ] Price per unit / Total deal value
- [ ] Buyer name and contact details
- [ ] Seller name and contact details
- [ ] Location/storage details
- [ ] Delivery method
- [ ] Expected delivery date
- [ ] Actual delivery date
- [ ] Deal notes/comments
- [ ] Status (Active/Grey/Dead/Completed)

**Questions:**
1. What gold types do you commonly deal with? (For dropdown options)
2. Do you need to track assay certificates or other verification docs?
3. Are there shipping/logistics details to track (freight forwarders, insurance, etc.)?
4. Do you track vault storage locations?
5. Any other gold-specific fields?

### 1.3 Banking Deals

**Critical - Need your input:**

1. Please provide a complete list of all banking instrument types you deal with:
   - MT 103 (mentioned)
   - Treasury Bonds (mentioned)
   - _[Please add all others]_

2. For each instrument type, what specific information needs to be captured?

   **Example for MT 103:**
   - Transaction amount
   - Currency
   - Sending bank
   - Receiving bank
   - SWIFT details
   - _[What else?]_

3. Are there common fields across all banking deals, or is each instrument type completely different?

4. Do you need to track:
   - [ ] Bank names and SWIFT codes
   - [ ] Transaction reference numbers
   - [ ] Maturity dates
   - [ ] Interest rates
   - [ ] Face value vs discounted value
   - [ ] Issuing authority
   - [ ] Verification documents required

5. What triggers a banking deal to move between statuses?

---

## Section 2: Client Management

### 2.1 Client Data Fields

Please confirm what information you need for each client:

**Confirmed:**
- [ ] Contact name (first/last)
- [ ] Business/organization name
- [ ] Source/referral (who introduced them)
- [ ] Client type (Buyer/Seller/Both)
- [ ] Sector preference (Crypto/Gold/Banking/Multiple)

**Please confirm if needed:**
- [ ] Email address
- [ ] Phone number (with country code)
- [ ] WhatsApp number (if different from phone)
- [ ] Secondary contact person
- [ ] Physical address
- [ ] Country/jurisdiction
- [ ] Company registration number (if applicable)
- [ ] Website
- [ ] Preferred communication method
- [ ] Language preference
- [ ] Time zone
- [ ] Date added to system
- [ ] Last contact date
- [ ] Internal notes (private, not visible to client)

### 2.2 Document Storage Per Client

**CIS (Customer Information Sheet):**
1. Do you have a standard CIS template you use?
2. What information does it contain? (So we can potentially auto-extract data)
3. File format: PDF, Word, Excel, or mixed?

**ID/Verification Documents:**
1. What types of ID do you accept?
   - [ ] Passport
   - [ ] Driver's license
   - [ ] National ID card
   - [ ] Business registration documents
   - [ ] Others?

2. Do you need to track:
   - [ ] ID expiry dates (with alerts before expiry)
   - [ ] ID verification status (Verified/Pending/Rejected)
   - [ ] Who verified the ID and when

**Other Documents:**
1. What other document types do you store per client?
   - [ ] Bank statements
   - [ ] Proof of funds
   - [ ] Proof of address
   - [ ] Business licenses
   - [ ] Financial statements
   - [ ] References/testimonials
   - [ ] Others?

2. File size limits - what's the largest file you typically deal with?
3. How long do you need to retain documents for compliance?

### 2.3 Client Grading/Verification

You mentioned wanting to grade clients (potentially with AI). Let's define the criteria:

**Grading Factors:**
1. Document completeness - assign points for each document submitted?
2. Deal history - weight by number of successful deals?
3. Payment behavior - how do you currently assess this?
4. Response time - do you track how quickly they respond to requests?
5. Any red flags - specific things that downgrade a client?

**Questions:**
1. Do you want a numerical score (e.g., 1-100) or a grade system (A/B/C/D/F)?
2. Should grading affect anything automatically (e.g., high-grade clients auto-approved for certain things)?
3. Can team members manually override AI grading?
4. Do clients ever see their own grade, or is it internal only?

---

## Section 3: Wallet Management

### 3.1 Wallet Address Tracking

1. How many wallet addresses typically per deal?
   - Buyer wallet(s)
   - Seller wallet(s)
   - Intermediary wallets
   - Other?

2. Do you need to differentiate wallet types?
   - [ ] Hot wallet
   - [ ] Cold wallet
   - [ ] Exchange wallet
   - [ ] Personal wallet
   - [ ] Business wallet

3. When you flag a wallet as "bad," what specifically are you flagging?
   - Suspected fraud
   - Known scammer
   - Stolen coins
   - Sanctioned address
   - Other?

4. Should the system prevent you from proceeding with a deal if a bad wallet is detected, or just warn you?

5. Do you need wallet balance checking (via blockchain API)?

### 3.2 Wallet Verification Services

1. Are there specific blockchain analysis services you use or want to integrate?
   - Chainalysis
   - Elliptic
   - CipherTrace
   - Others?
   - Or should we build a simple internal database only?

2. Budget for third-party API integrations (if applicable)?

---

## Section 4: Document Generation & Signing

### 4.1 Existing Templates

**Action Required:** Please provide your 5 existing document templates:
1. Buyer Booking Confirmation
2. Seller Booking Confirmation
3. Terms Agreement
4. Commission Agreement
5. NDA

**Format:** Word docs, PDFs, or other?

**Questions:**
1. Do these templates change often, or are they stable?
2. Should you be able to edit templates yourself in the system, or is that something you'd ask us to update?
3. Are there different versions for crypto vs gold vs banking, or universal templates?

### 4.2 Document Auto-Population

For each template, we need to know:
1. What fields need to be filled in from the CRM data?
   - Client name
   - Deal details
   - Dates
   - Values
   - Wallet addresses
   - Others?

2. Are there any complex calculations in the documents?
   - Commission splits (we know this one)
   - Currency conversions
   - Date calculations
   - Others?

### 4.3 Electronic Signature

1. Do you have a preferred e-signature platform?
   - DocuSign (most popular, but expensive)
   - HelloSign/Dropbox Sign
   - PandaDoc
   - Adobe Sign
   - Free alternative (like SignRequest)
   - Build our own simple solution

2. Budget for e-signature platform (monthly or per-document cost)?

3. Signing workflow:
   - Send document → client signs → auto-stores in CRM?
   - Need reminder emails if not signed?
   - Multiple signers per document (e.g., both buyer and seller)?

4. Do you need documents countersigned by Fred/team after client signs?

### 4.4 Document Sending

1. How should documents be sent to clients?
   - [ ] Email
   - [ ] WhatsApp
   - [ ] Download link
   - [ ] All of the above

2. Should the system track:
   - When document was sent
   - When it was viewed
   - When it was signed
   - Who sent it (team member)

---

## Section 5: Team & Users

### 5.1 Team Size

1. How many people will use the CRM initially?
2. How many people in 6 months? 12 months?
3. Are team members in different locations/time zones?

### 5.2 User Roles & Permissions

Do you need different permission levels?

**Examples:**
- **Admin** - Full access, can delete data, manage users
- **Manager** - Can view all deals, edit most things, no deletion
- **Sales/Broker** - Can view their own deals, add clients, limited editing
- **Viewer** - Read-only access to reports

**Questions:**
1. What roles do you envision?
2. Should some team members only see certain deal types (e.g., crypto specialist only sees crypto deals)?
3. Should there be any data that's hidden from junior team members (e.g., commission details)?

### 5.3 User Activity Tracking

Do you need to track:
- [ ] Who created each deal
- [ ] Who last modified each deal
- [ ] Full edit history (audit log)
- [ ] Login/logout times
- [ ] Activity reports per user (for management)

---

## Section 6: Reporting & Analytics

### 6.1 Required Reports

You mentioned:
- All crypto deals
- All gold deals
- All banking deals
- By buyer/seller
- By status

**Additional reports you might need:**
- [ ] Deal pipeline value (total $ in active deals)
- [ ] Commission earned by month/quarter/year
- [ ] Conversion rates (leads → closed deals)
- [ ] Average deal size
- [ ] Average deal duration (days from created to closed)
- [ ] Top performing clients (by deal count or value)
- [ ] Team performance (deals per person)
- [ ] Deal win/loss analysis

**Questions:**
1. Which of the above do you want in Phase 1?
2. Any other reports critical to your business?
3. Do you need scheduled reports (e.g., weekly summary emailed to you)?

### 6.2 Dashboard

When you log in, what do you want to see immediately?

**Potential dashboard widgets:**
- [ ] Total active deals (number and value)
- [ ] Deals closing this week
- [ ] Recent activity (new clients, deal updates)
- [ ] Commission earned (this month/year)
- [ ] Alerts/tasks (unsigned documents, missing info, etc.)
- [ ] Quick stats (total clients, total deals, win rate)

**Questions:**
1. Should different users see different dashboards?
2. Should dashboard be customizable?

---

## Section 7: Commission Management (Phase 2)

Even though this is Phase 2, let's understand it now:

### 7.1 Commission Structure

You mentioned typical structure:
- Mandate under buyer: 1.5%
- Mandate under seller: 1.5%
- Intermediaries: 1% (split)

**Questions:**
1. Is this structure always the same, or does it vary by deal?
2. What's the most complex commission split you've seen?
3. How many intermediaries typically (for the 1% split)?
4. Do percentages ever change based on deal size?
5. Are there flat fees in addition to percentages?

### 7.2 Payment Handling

1. For crypto deals paid in USDT:
   - What wallet will receive commission?
   - Do you send from that wallet, or separate sending wallet?
   - Do you need multi-sig approval for sending?

2. For gold/banking deals:
   - How are commissions paid (bank transfer, wire, other)?
   - Do you need to track multiple currencies?

3. Tax/reporting requirements:
   - Do you need to generate tax reports?
   - Need to track who receives what for tax purposes?

### 7.3 Payment Automation

1. Should commission split calculation be automatic when deal closes?
2. Should payments be automatic, or require manual approval?
3. Do you need invoicing (generate invoices for commission recipients)?
4. Need payment reminders (if someone hasn't been paid)?

---

## Section 8: Technical & Hosting

### 8.1 Hosting Preference

1. **Cloud-based (recommended):**
   - Accessible anywhere
   - Automatic backups
   - Scalable
   - Monthly hosting cost (~£50-200/month depending on usage)
   - Options: AWS, Vercel, Heroku, DigitalOcean

2. **On-premise/Self-hosted:**
   - You control the server
   - One-time setup cost
   - You handle backups
   - Security is your responsibility

**Which do you prefer?**

### 8.2 Data Security & Compliance

1. Where are your clients primarily based (for data jurisdiction)?
2. Do you need GDPR compliance?
3. Any other regulatory requirements we should know about?
4. Do you need data encryption at rest and in transit?
5. Need regular backups? How often?
6. Need disaster recovery plan?

### 8.3 Integrations

**Immediate needs:**
1. E-signature platform (covered above)
2. Email sending (transactional emails)
3. Any accounting software? (QuickBooks, Xero, etc.)
4. Any existing tools you want to integrate with?

**Future integrations:**
1. WhatsApp Business API (you mentioned WhatsApp group)
2. Blockchain APIs for wallet verification
3. Companies House API
4. Payment gateways

**Budget for third-party services?**

### 8.4 Mobile Access

1. Do you need a mobile app, or is mobile-responsive web enough?
2. Primary devices used (iPhone, Android, iPad, laptops)?
3. Do you need offline access, or always connected to internet?

---

## Section 9: Timeline & Budget

### 9.1 Timeline

1. When do you ideally want Phase 1 live?
   - ASAP (within 4 weeks)
   - Within 2 months
   - Within 3 months
   - Flexible

2. Are there any hard deadlines (regulatory, business reasons)?

3. Will you and your team be available for:
   - Regular check-ins (weekly?)
   - Testing and feedback
   - Providing content (templates, data, etc.)

### 9.2 Budget

To provide accurate pricing, we need to understand:

1. **Overall budget range:**
   - < £5,000
   - £5,000 - £10,000
   - £10,000 - £20,000
   - £20,000 - £50,000
   - £50,000+
   - Flexible/TBD

2. **Ongoing costs acceptable:**
   - Hosting: £50-200/month
   - E-signature: £10-50/month (depending on volume)
   - Blockchain APIs: £0-100/month (depending on usage)
   - Support/maintenance: £TBD/month or hourly

3. **Payment structure preference:**
   - Upfront payment
   - Milestone-based (e.g., 30% start, 40% mid, 30% completion)
   - Monthly retainer
   - Hybrid

### 9.3 Existing Data

1. Do you have any existing client/deal data to migrate?
2. What format is it in (Excel, Google Sheets, old CRM, paper)?
3. How much data (rough number of clients and deals)?
4. Quality of existing data (clean and organized, or messy)?

---

## Section 10: Success Criteria & Priorities

### 10.1 What Success Looks Like

In your own words:
1. What would make Phase 1 a success for you?
2. What's the #1 problem this CRM needs to solve?
3. What's the #2 problem?
4. What current pain point is most frustrating?

### 10.2 Feature Prioritization

If we had to cut features to meet timeline/budget, rank these in order of importance (1 = most critical, 10 = nice to have):

- [ ] Client management with document storage
- [ ] Deal tracking (all three types)
- [ ] Wallet address search/flagging
- [ ] Automated document generation
- [ ] E-signature integration
- [ ] Reporting and filtering
- [ ] User roles and permissions
- [ ] Client grading system
- [ ] Commission tracking (not payment, just tracking)
- [ ] Mobile responsiveness

### 10.3 Dealbreakers

Are there any features that, if not included, would make the system unusable for you?

---

## Section 11: Branding & Design

### 11.1 Visual Identity

1. Do you have a logo for "Fred the Opportunity Broker"?
2. Brand colors (if any)?
3. Any design preferences (modern, traditional, minimal, etc.)?
4. Any CRMs or software you like the look/feel of?

### 11.2 Naming

1. What should the CRM be called internally?
   - Fred CRM
   - Opportunity Broker CRM
   - Custom name?

---

## Section 12: Support & Training

### 12.1 Training

1. Will you need training sessions for your team?
2. Do you need user documentation/manual?
3. Video tutorials helpful?

### 12.2 Ongoing Support

After launch:
1. Do you need ongoing support/maintenance?
2. Preferred support method:
   - WhatsApp
   - Email
   - Phone
   - Video calls
   - Ticketing system

3. Response time expectations:
   - Same day for critical issues
   - Within 24 hours
   - Within 48 hours
   - Flexible

4. Who will be the main point of contact on your end?

---

## Section 13: Anything We Missed?

1. Is there anything important about your business/process we haven't covered?
2. Any concerns or questions about the project?
3. Any specific features you've seen in other software you want to incorporate?
4. Any features from our call you want to clarify or expand on?

---

## Next Steps

**From Cold Lava:**
1. Review your answers to these questions
2. Provide detailed cost estimate for Phase 1
3. Provide timeline estimate for Phase 1
4. Outline Phase 2 scope and pricing
5. Create technical specification document
6. Schedule kick-off meeting if you decide to proceed

**From Fred:**
1. Answer as many of these questions as possible (we understand some may need more thought)
2. Provide your 5 document templates
3. Confirm deal status this week (funding confirmation)
4. Let us know your target timeline and budget range

**Timeline:**
- We'll aim to get back to you with pricing by end of week
- Pending your deal confirmation

---

## How to Respond

Feel free to respond in the WhatsApp group with:
- **Quick answers** typed directly
- **Voice notes** if easier to explain
- **Documents** (templates, examples, etc.)
- **Screenshots** if you have examples to show
- **Questions** if anything is unclear

We know this is a lot - don't worry about answering everything in one go. We can have a follow-up call to discuss anything complex.

**Priority Questions (if you're short on time, answer these first):**

1. Complete list of banking deal types and what data each needs
2. Your 5 document templates
3. Team size (users)
4. Budget range
5. Ideal timeline
6. Top 3 most critical features for Phase 1

Looking forward to hearing from you!

**Oliver & Jacob**
**Cold Lava**
oliver@otdm.net | +44 151 541 6933

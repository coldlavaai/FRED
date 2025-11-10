# Requirements Summary - Fred CRM Project

**Client:** Fred - The Opportunity Broker
**Project Type:** Custom CRM for Trading/Brokerage Business
**Timeline:** ASAP (pending deal confirmation this week)
**Date:** 2025-11-10

---

## Business Overview

Fred operates a brokerage business dealing in three main sectors:
1. **Cryptocurrency** (buying/selling)
2. **Gold** (buying/selling)
3. **Banking Deals** (MT 103, treasury bonds, various instruments)

**Current Process:**
- Network-based lead generation (no formal sales process)
- Whiteboard-based deal tracking
- Manual document management
- Contact-led rather than company-led (most clients are non-English)
- No existing CRM or formal record-keeping system

---

## Phase 1 Requirements (MVP)

### 1. Client Management Module

**Core Fields:**
- Contact name (primary - contact-led approach)
- Business/organization name (secondary)
- Decision maker designation
- Source/referral tracking (who introduced them)
- CIS (Customer Information Sheet) storage
- ID and verification documents (KYC/DD)
- Client type: Buyer, Seller, or Both
- Sector preference: Crypto, Gold, Banking, or Multiple

**Client Grading System (AI-driven - future enhancement):**
- Based on document completeness
- Deal success/failure history
- Payment behavior
- Cooperation level
- Automatic scoring with manual override capability

### 2. Deal/Requirement Management

**Deal Types (Three Different Structures):**

**A. Cryptocurrency Deals**
- Deal type: Buy/Sell
- Cryptocurrency type (BTC, ETH, USDT, etc.)
- Quantity
- Price/rate
- Buyer details
- Seller details
- Wallet addresses (multiple per deal)
- Status: Active, Grey (paused), Dead, Completed
- Notes/activity log

**B. Gold Deals**
- Deal type: Buy/Sell
- Gold type/purity
- Quantity (oz/kg)
- Price per unit
- Buyer details
- Seller details
- Location/delivery details
- Status: Active, Grey, Dead, Completed
- Notes/activity log

**C. Banking Deals**
- Deal type (dropdown): MT 103, Treasury Bond, [Fred to provide full list]
- Transaction amount
- Currency
- Buyer details
- Seller details
- Instrument specifics (Fred will provide terminology)
- Status: Active, Grey, Dead, Completed
- Notes/activity log

**Universal Deal Features:**
- Deal ID (auto-generated)
- Created date
- Last modified date
- Assigned to (team member)
- Priority level (future)
- Deal value
- Expected close date
- Commission structure

### 3. Wallet Management System (Crypto-specific)

**Functionality:**
- Store wallet addresses against deals
- Manual flag setting (Good/Bad/Suspicious)
- Search functionality: Enter wallet address → returns history
  - If wallet has been used before: show all associated deals
  - Show flagging status (green/red/amber)
  - Alert if flagged as bad
- Build historical database of all wallets used
- Cross-reference against known bad wallet databases (future API integration)
- Notes field per wallet

**Use Case:**
Prevent fraud by identifying when the same wallet address appears in multiple deals, especially if previously flagged as suspicious or associated with failed deals.

### 4. Document Generation & Management

**Automated Documents (5 total):**

1. **Buyer Booking Confirmation**
   - Auto-populate from deal data
   - Send electronically for signature

2. **Seller Booking Confirmation**
   - Auto-populate from deal data
   - Send electronically for signature

3. **Terms Agreement**
   - Standard terms with deal specifics
   - Electronic signature

4. **Commission Agreement**
   - Show all parties involved
   - Display commission splits
   - Auto-calculate amounts
   - Electronic signature

5. **NDA**
   - Standard template
   - Electronic signature

**Document Requirements:**
- Fred will provide existing templates
- Need to be converted to auto-populate forms
- Electronic signature capability (DocuSign integration or similar)
- Store signed copies against deal/client
- Audit trail (who signed, when)
- Version control

**Additional Document Storage:**
- CIS documents
- ID documents (passport, driver's license, etc.)
- Bank statements
- Proof of funds
- Wire transfer receipts
- Any deal-related correspondence

### 5. Reporting & Filtering

**Required Reports/Views:**

**By Sector:**
- All crypto deals
- All gold deals
- All banking deals

**By Role:**
- All crypto buyers
- All crypto sellers
- All gold buyers
- All gold sellers
- All banking buyers
- All banking sellers

**By Status:**
- Active deals
- Grey/paused deals
- Dead deals
- Completed deals

**By Team Member:**
- Deals assigned to specific person
- Deal count by team member

**By Date Range:**
- Deals created in date range
- Deals closed in date range

**Export Functionality:**
- Export to Excel/CSV
- PDF reports
- Printable deal summaries

### 6. Search & Filter Capabilities

- Global search across all clients/deals
- Advanced filter combinations (e.g., "Active crypto seller deals in November")
- Wallet address search
- Client name search
- Deal ID search
- Date range filtering

---

## Phase 2 Requirements (Future Enhancements)

### Payment Master Module

**Commission Management:**
- Typical structure: 4% total commission on deal value
  - Mandate under buyer: 1.5%
  - Mandate under seller: 1.5%
  - Intermediaries: 1% (split among multiple people)

**Functionality:**
- List all commission recipients per deal
- Define percentage splits per person
- Calculate amounts automatically
- Receive payments (USDT for crypto, other currencies for gold/banking)
- Display "amounts owed" dashboard
- Send payments from system
- Payment history/audit trail
- Integration with wallets/payment systems

### AI-Driven Features

- Automatic client grading based on behavior patterns
- Risk assessment for deals
- Wallet address verification against public databases
- Document extraction from CIS (OCR)
- Automated follow-up suggestions

### Additional Future Features

- Deal prioritization system
- Team collaboration tools (comments, mentions)
- Email integration
- SMS notifications
- WhatsApp integration
- API for external systems
- Mobile app

---

## Technical Considerations

### Security Requirements

- Role-based access control (team members see different data)
- Encryption for sensitive documents
- Audit logs for all changes
- Secure document storage
- GDPR compliance (even for non-UK clients)
- Two-factor authentication

### Performance Requirements

- Fast search (sub-second response)
- Handle 1000+ clients
- Handle 5000+ deals
- Document storage: 10GB+ capacity
- Concurrent users: 5-10 initially

### Integration Requirements

**Immediate:**
- Document signing (DocuSign, HelloSign, or similar)
- File storage (AWS S3, similar)

**Future:**
- WhatsApp Business API (for Fred's current workflow)
- Blockchain APIs for wallet verification
- Companies House API (UK company lookups)
- Payment gateways (crypto and traditional)

### User Experience Requirements

- Simple, clean interface (not cluttered)
- Mobile-responsive design
- Quick data entry (keyboard shortcuts)
- Bulk actions capability
- Customizable dashboard
- One-click report generation

---

## Key Differentiators

Fred emphasized wanting to "break the mold" - do things the industry doesn't currently do:
- Formal CRM system (most brokers don't have one)
- Historical wallet tracking
- Automated document generation
- Commission transparency
- Client grading system
- Proper audit trails

---

## Questions/Unknowns (To Be Clarified)

1. Complete list of banking deal types for dropdown
2. Exact fields required for each deal type
3. Current document templates (to be provided by Fred)
4. Team size (how many users?)
5. Specific wallet verification requirements
6. Commission split variations (is it always the same structure?)
7. Preferred document signing solution
8. Email/notification preferences
9. Branding requirements (logo, colors)
10. Hosting preferences (cloud vs on-premise)
11. Budget range
12. Data migration requirements (if any existing data)

---

## Success Criteria

**Phase 1 (MVP) is successful if:**
- Can create and manage clients easily
- Can create and track deals across all three sectors
- Can generate and send documents for signing
- Can search wallet addresses and see history
- Can pull reports by sector/status
- Replaces whiteboards as primary deal tracking system
- Team can use it daily without friction

**Overall project success:**
- Reduces time spent on admin
- Prevents fraud through wallet tracking
- Creates audit trail for legal protection
- Enables team scaling (new members can onboard quickly)
- Provides visibility into deal pipeline
- Fred can't imagine working without it

---

## Comparable Systems

This is a niche system - closest comparables:
- Standard CRM (Salesforce, HubSpot) + heavy customization
- Commodity trading platforms (but those don't handle crypto/crypto-specific features)
- Custom-built trading desk systems

**Why off-the-shelf won't work:**
- Wallet address tracking is unique
- Document flow is specific to this industry
- Deal structure varies by type (crypto/gold/banking)
- Commission structures are non-standard
- Need contact-led rather than company-led approach

---

## Next Steps

1. ✅ Save call transcript
2. ✅ Create requirements summary
3. ⏳ Generate detailed follow-up questions
4. ⏳ Create technical specification
5. ⏳ Estimate pricing (Phase 1 vs Phase 2)
6. ⏳ Estimate timeline
7. ⏳ Wait for Fred's deal confirmation (this week)
8. ⏳ Send follow-up questions to Fred
9. ⏳ Schedule technical planning session with Jacob

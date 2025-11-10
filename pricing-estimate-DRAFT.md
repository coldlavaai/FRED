# Pricing Estimate - Fred CRM Project (DRAFT)

**Client:** Fred - The Opportunity Broker
**Date:** 2025-11-10
**Status:** DRAFT - Pending answers to follow-up questions
**Valid Until:** 2025-11-30

---

## ⚠️ Important Notice

This is a **DRAFT estimate** based on the initial discovery call. Final pricing will be provided once we receive answers to the follow-up questions, particularly:

- Complete banking deal type requirements
- Fred's 5 document templates
- Team size and user requirements
- Specific integration requirements
- Hosting preferences

**The final price may vary by ±20% based on these clarifications.**

---

## Phase 1: MVP (Core CRM)

### Included Features

**1. Client Management**
- Client database with contact-led structure
- Document storage (CIS, ID, verification docs)
- Source/referral tracking
- Client type and sector preferences
- Search and filtering
- Basic client grading (manual)

**2. Deal Management**
- Three deal types: Crypto, Gold, Banking
- Custom fields per deal type
- Deal status workflow (Active/Grey/Dead/Completed)
- Deal notes and activity log
- Deal assignment to team members
- Deal value and date tracking

**3. Wallet Management**
- Wallet address storage (linked to deals)
- Wallet search functionality
- Manual wallet flagging (Good/Bad/Suspicious)
- Wallet history view (all deals using a wallet)
- Alert system for flagged wallets

**4. Document Generation**
- 5 automated document templates:
  1. Buyer booking confirmation
  2. Seller booking confirmation
  3. Terms agreement
  4. Commission agreement
  5. NDA
- Auto-populate from CRM data
- PDF generation

**5. E-Signature Integration**
- Integration with e-signature platform (TBD)
- Send documents for signing
- Track signature status
- Store signed documents

**6. Reporting & Analytics**
- Filter deals by: Sector, Status, Date, Team member
- Export to Excel/CSV
- Basic dashboard with key metrics
- Quick stats (total clients, deals, etc.)

**7. User Management**
- User authentication (login/logout)
- Basic role-based access control (Admin vs User)
- User activity logging

**8. Search & Filtering**
- Global search across clients and deals
- Advanced filtering combinations
- Wallet address search

### Development Breakdown

| Component | Estimated Hours | Notes |
|-----------|----------------|-------|
| **Planning & Design** | 25-35 hours | Database schema, wireframes, architecture |
| **Backend Development** | 90-120 hours | Database, API, business logic |
| **Frontend Development** | 70-90 hours | UI/UX, forms, dashboards, reports |
| **Document System** | 20-30 hours | Template engine, PDF generation |
| **E-Signature Integration** | 15-20 hours | API integration, workflow |
| **Wallet System** | 15-20 hours | Search, flagging, history |
| **Testing & QA** | 25-35 hours | Manual and automated testing |
| **Deployment** | 10-15 hours | Server setup, SSL, domain config |
| **Documentation & Training** | 10-15 hours | User manual, training session |
| **Project Management** | 15-20 hours | Meetings, communication, admin |
| **TOTAL** | **295-400 hours** | |

### Pricing Options

**Option 1: Fixed Price**
- **£15,000 - £18,000** (depending on final complexity)
- Includes all Phase 1 features
- Up to 3 rounds of revisions
- 30-day post-launch support

**Option 2: Time & Materials**
- **£50/hour** (Oliver) + **£60/hour** (Jacob for complex backend work)
- Estimated total: £14,750 - £24,000 (295-400 hours)
- More flexible for scope changes
- Monthly invoicing

**Option 3: Hybrid**
- **£12,000 fixed** for core features
- **£50/hour** for additional features/changes beyond scope
- Good balance of predictability and flexibility

### Payment Terms (Fixed Price Example)

- **30% deposit** (£4,500-5,400) - Upon project start
- **40% milestone** (£6,000-7,200) - Upon completion of backend + basic UI
- **30% final** (£4,500-5,400) - Upon launch and acceptance

### Timeline Estimate

**Total Duration:** 8-12 weeks from project start

**Breakdown:**
- Weeks 1-2: Planning, design, architecture
- Weeks 3-6: Core development (backend + frontend)
- Weeks 7-9: Integrations (e-signature, document gen)
- Week 10: Testing and refinement
- Week 11: Training and documentation
- Week 12: Launch and support

**Dependencies:**
- Timely responses to questions/feedback
- Fred's document templates provided upfront
- Availability for weekly check-ins

---

## Ongoing Costs (Monthly)

### Essential Services

| Service | Cost/Month | Notes |
|---------|------------|-------|
| **Hosting** | £30-80 | VPS or cloud hosting (AWS/DigitalOcean) |
| **Database** | £0-30 | Included in hosting or separate if large |
| **E-Signature** | £10-40 | Depends on platform and volume |
| **SSL Certificate** | £0-10 | Often included with hosting |
| **Backups** | £5-15 | Automated daily backups |
| **Domain Name** | £1-2 | .com or .co.uk |
| **TOTAL** | **£46-177/month** | |

### Optional Services

| Service | Cost/Month | Notes |
|---------|------------|-------|
| **Support & Maintenance** | £200-500 | Bug fixes, minor updates, questions |
| **Blockchain API** | £0-100 | If wallet verification needed |
| **Email Sending** | £0-20 | Transactional emails (SendGrid, etc.) |
| **WhatsApp API** | £0-50 | If automating WhatsApp messages |
| **Monitoring/Uptime** | £10-30 | Server monitoring alerts |

---

## Phase 2: Advanced Features

### Features Not in Phase 1

**1. Payment Master Module**
- Commission calculation engine
- Multi-party payment splits
- Payment sending (USDT and fiat)
- Payment tracking and reconciliation
- Integration with wallets/payment gateways
- Invoicing for commission recipients

**2. AI-Driven Features**
- Automatic client grading based on behavior
- Risk assessment for deals
- Document data extraction (OCR from CIS)
- Wallet verification via third-party APIs

**3. Advanced Features**
- Deal prioritization system
- Advanced team collaboration (comments, @mentions)
- Email integration (sync emails to deals)
- SMS/WhatsApp notifications
- Mobile app (iOS/Android)
- API for external integrations

### Phase 2 Pricing Estimate

**Payment Master Module:** £5,000 - £8,000
**AI Features:** £4,000 - £7,000 (depending on complexity)
**Mobile App:** £8,000 - £15,000 (native) or £3,000 - £5,000 (web-based)
**Advanced Collaboration:** £3,000 - £5,000

**Total Phase 2:** £10,000 - £25,000 (depending on features selected)

---

## Additional One-Time Costs

| Item | Cost | Notes |
|------|------|-------|
| **Data Migration** | £500-2,000 | If importing existing data |
| **Custom Integrations** | £1,000-5,000 | Per major integration (accounting, etc.) |
| **Advanced Training** | £500-1,000 | On-site or extensive video sessions |
| **Custom Branding/Design** | £1,000-3,000 | If requiring bespoke UI design |

---

## Comparison to Alternatives

### Off-the-Shelf CRM (e.g., Salesforce, HubSpot)

**Pros:**
- Lower upfront cost (£25-150/user/month)
- Proven platform
- Regular updates

**Cons:**
- Won't have wallet tracking
- Won't have sector-specific deal structures
- Customization limited and expensive
- Monthly cost adds up (£300-1,800/month for 12 users)
- No ownership of platform

**Verdict:** Not suitable for Fred's specific needs

### Custom Development (What We're Proposing)

**Pros:**
- Built exactly for Fred's workflow
- Includes unique features (wallet tracking)
- You own the code
- Can modify anytime
- Lower ongoing costs

**Cons:**
- Higher upfront cost
- Longer initial build time
- Dependent on Cold Lava (mitigated by code ownership)

**Verdict:** Best fit for Fred's requirements

---

## Assumptions

This estimate assumes:

1. **Standard web application** (not mobile apps yet)
2. **Up to 20 users** initially
3. **Document templates** provided by Fred (we convert them, not create from scratch)
4. **Standard e-signature platform** (not building custom signature system)
5. **Cloud hosting** (not on-premise servers)
6. **Banking deal types:** 5-10 different types (if more, additional cost)
7. **No third-party blockchain API costs** in Phase 1 (manual wallet flagging only)
8. **Standard business hours support** (not 24/7)
9. **UK-based hosting** and GDPR compliance
10. **Reasonable revision rounds** (not unlimited iterations)

---

## What Could Increase Cost

- **Complex banking requirements:** If each banking instrument needs entirely different data models
- **Large team:** More than 20 users requiring complex permission systems
- **Advanced integrations:** If Fred has specific software to integrate with
- **Custom blockchain verification:** Building or licensing wallet verification beyond basic flagging
- **Extensive data migration:** If lots of messy existing data to clean and import
- **On-premise hosting:** If Fred wants to host on his own servers
- **24/7 support:** If requiring round-the-clock availability
- **Compliance requirements:** If specific financial regulations apply (e.g., FCA in UK)

---

## What Could Decrease Cost

- **Simpler banking requirements:** If banking deals use similar structure to crypto/gold
- **Standard features only:** If Fred is flexible on some nice-to-have features
- **Self-hosting:** If Fred can handle server management himself
- **Less complex commission:** If all deals use same commission structure
- **Existing templates are simple:** If documents don't require complex logic
- **Phased rollout:** If we can launch with fewer deal types and add later

---

## Recommended Approach

**Our Recommendation: Fixed Price Option 1**

**Phase 1:** £16,000 (mid-range estimate)
- Includes all core features
- 3 revision rounds
- 30-day post-launch support
- 10-week timeline

**Ongoing:** ~£100/month (hosting + e-signature + backups)

**Optional Support:** £250/month retainer (5 hours support/updates per month)

**Phase 2:** Discuss after 3-6 months of using Phase 1

### Why This Approach?

1. **Predictable cost** - Fred knows exactly what he's paying
2. **Defined scope** - Clear what's included and what's not
3. **Reasonable timeline** - 10 weeks to working product
4. **Room to grow** - Phase 2 adds advanced features once core is proven
5. **Low ongoing costs** - Monthly costs are manageable
6. **Owned system** - Fred owns the code, not locked into platform

---

## Payment Schedule (Recommended)

**Upon Agreement:**
- £4,800 (30%) - Deposit to begin work

**Week 5 (Backend Complete):**
- £6,400 (40%) - Core functionality visible

**Week 10 (Launch):**
- £4,800 (30%) - Final payment upon go-live

**Monthly (Ongoing):**
- £100 - Hosting and services
- £250 - Optional support retainer (if selected)

---

## Questions That Will Affect Final Price

Before we can firm up pricing, we need answers to:

1. **How many banking deal types?** (5-10 vs 20+ makes a difference)
2. **Team size?** (5 users vs 20 users affects infrastructure)
3. **Document complexity?** (Simple text fill-in vs complex calculations)
4. **E-signature preference?** (Affects integration complexity and monthly cost)
5. **Hosting preference?** (Cloud vs on-premise)
6. **Any existing systems to integrate?** (Accounting, email, etc.)
7. **Data to migrate?** (Clean Excel vs messy legacy data)

Once we have answers to the follow-up questions, we can provide a **firm fixed quote**.

---

## Next Steps

1. **Fred:** Review this estimate and provide feedback
2. **Fred:** Answer follow-up questions (especially priority ones)
3. **Cold Lava:** Refine estimate based on answers
4. **Both:** Confirm deal status this week
5. **Both:** Schedule kick-off call if proceeding
6. **Cold Lava:** Create detailed technical spec and project plan

---

## Questions About This Estimate?

Feel free to ask via WhatsApp group:
- Why does X cost what it does?
- Can we reduce cost by removing Y feature?
- What if we do Z differently?
- How does this compare to [other option]?

We're happy to adjust the approach to fit your budget and timeline.

**Oliver & Jacob**
**Cold Lava**
oliver@otdm.net | +44 151 541 6933

---

**Disclaimer:** This is an estimate, not a formal quote. Final pricing will be confirmed in writing after receiving answers to follow-up questions and reviewing Fred's document templates. Estimate valid for 30 days.

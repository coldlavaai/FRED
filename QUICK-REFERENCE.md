# Quick Reference - Fred CRM Project

**For:** Oliver & Jacob (Cold Lava Internal Use)

---

## TL;DR

**Client:** Fred - The Opportunity Broker
**Need:** Custom CRM for crypto/gold/banking brokerage business
**Unique Feature:** Wallet address tracking to prevent fraud
**Timeline:** ASAP (waiting on deal confirmation this week)
**Estimated Cost:** £15-18k for Phase 1 MVP

---

## What They Actually Need (Priority Order)

1. **Client database** with docs storage (replace current chaos)
2. **Deal tracking** for 3 sectors (replace whiteboards)
3. **Wallet search** to catch repeated/bad wallets (fraud prevention)
4. **Auto-generate 5 docs** from data (save time, create audit trail)
5. **Reports** by sector/status (visibility into pipeline)

**Phase 2 (later):** Payment master for commission splits

---

## Key Differentiators (Why This Isn't Standard CRM)

- **Contact-led, not company-led** (most clients are individuals, not businesses)
- **Wallet address tracking** (unique to crypto - no off-shelf CRM has this)
- **Three different deal structures** (crypto ≠ gold ≠ banking)
- **Commission tracking** is complex (mandates vs intermediaries, crypto vs fiat)
- **Most clients are non-English** (international, not UK-centric)

---

## Critical Info We Need From Fred

**Must Have Before Pricing:**
1. Complete list of banking deal types + what data each needs
2. His 5 document templates (to assess complexity)
3. Team size (affects infrastructure)
4. Budget range (to right-size solution)

**Nice to Have:**
1. Preferred e-signature platform
2. Hosting preference
3. Timeline constraints
4. Existing data to migrate

---

## Technical Stack (Initial Thoughts)

**Backend:**
- Node.js / Express (or Python/FastAPI)
- PostgreSQL (relational DB for complex queries)
- S3 or similar (document storage)

**Frontend:**
- React / Next.js (modern, fast, what we know)
- Tailwind CSS (rapid styling)

**Integrations:**
- DocuSign or HelloSign (e-signature)
- PDF generation library
- Blockchain API (phase 2)

**Hosting:**
- Vercel (frontend) + Railway/Render (backend)
- Or all on DigitalOcean/AWS

---

## Rough Time Estimate

**Phase 1: 8-12 weeks**

- Weeks 1-2: Planning, DB design, wireframes
- Weeks 3-6: Core dev (client mgmt, deals, wallets)
- Weeks 7-9: Docs generation, e-signature, reports
- Week 10: Testing, bug fixing
- Weeks 11-12: Training, launch

**Assumes:**
- Fred responds quickly to questions
- No major scope changes
- Weekly check-ins
- Templates provided upfront

---

## Pricing Strategy

**Option 1: Fixed £16k** (recommended)
- Clear scope, predictable cost
- 30/40/30 payment split
- 3 revision rounds included

**Option 2: T&M £50-60/hr**
- More flexible but unpredictable
- Could be £15-24k range
- Better if scope is unclear

**Option 3: Hybrid £12k + hourly**
- Core features fixed
- Extras billed hourly
- Balance of both approaches

**Ongoing: ~£100/month** (hosting, e-signature, backups)
**Optional: £250/month** support retainer (5hrs/month)

---

## Competitive Landscape

**Off-the-shelf CRMs (Salesforce, HubSpot, Pipedrive):**
- ✗ No wallet tracking
- ✗ Can't handle 3 different deal structures well
- ✗ Monthly cost adds up (£300-1800/mo for a team)
- ✓ Proven, stable platforms
- ✓ Regular updates

**Custom Development (Us):**
- ✓ Built exactly for their workflow
- ✓ Wallet tracking (unique selling point)
- ✓ Own the code
- ✓ Lower ongoing costs
- ✗ Higher upfront cost
- ✗ Depends on us (mitigated by code ownership)

**Verdict:** Custom is only option that meets their needs.

---

## Risks & Mitigations

**Risk 1: Fred's deals don't close this week**
- Mitigation: Low time investment until confirmed

**Risk 2: Banking requirements are very complex**
- Mitigation: Follow-up questions will clarify this

**Risk 3: Scope creep during development**
- Mitigation: Fixed price with clear inclusions/exclusions

**Risk 4: E-signature integration is difficult**
- Mitigation: Use well-documented platforms (DocuSign API)

**Risk 5: Fred can't pay full amount**
- Mitigation: Milestone payments, can discuss payment plan

---

## What to Send Fred (In Order)

1. ✅ **Follow-up questions** via WhatsApp (priority questions highlighted)
2. ⏳ **Pricing estimate** (once we have answers) - currently DRAFT
3. ⏳ **Technical spec** (once pricing agreed)
4. ⏳ **Contract/Agreement** (before starting work)

---

## Our Availability (Check This)

**Oliver:** Available to start?
**Jacob:** Available to start?

**Potential conflicts:**
- Greenstar project status?
- Detail Dynamics updates?
- Other client commitments?

**If we're busy:** Can we push to January? Or need to hire help?

---

## Questions for Fred in Follow-Up Call

*These are in the full follow-up doc, but key ones:*

1. "Walk us through your ideal day using the CRM - morning login to evening close"
2. "What's the most complex commission split you've seen?"
3. "How do you currently prevent fraud with wallets?" (establishes need)
4. "If we had to cut features to meet budget, what's non-negotiable?"
5. "What happens if we build this and then you can't sign clients?" (business risk)

---

## Nice-to-Haves That Could Be Quick Wins

- **WhatsApp integration** (since he already uses WhatsApp group)
- **Dark mode** (easy to add, professional touch)
- **Keyboard shortcuts** (power users love this)
- **Bulk import** from Excel (if he has existing data)
- **Email templates** (in addition to the 5 docs)

---

## Things We Should Definitely NOT Promise

- ✗ Blockchain wallet verification API in Phase 1 (too complex, save for Phase 2)
- ✗ Mobile app in Phase 1 (scope too large)
- ✗ Unlimited revisions (cap at 3 rounds)
- ✗ 24/7 support (not staffed for it)
- ✗ FCA compliance (if this is regulated, we're not qualified - ask lawyer)

---

## Revenue Potential for Cold Lava

**Phase 1:** £15-18k (one-time)
**Ongoing:** £100-350/month (hosting + optional support)
**Phase 2:** £10-25k (if they do it)
**Website:** £2-3k (he mentioned needing one)
**Referrals:** Fred likely knows other brokers who'd want similar

**12-month value:** £20-30k+ per client like this

**If this works well, we can:**
- Package as "Brokerage CRM" for other clients in this space
- Create a SaaS version (white-label)
- Use as case study for custom dev work

---

## Red Flags to Watch For

- Fred keeps adding features without budget discussion
- Documents aren't ready/don't exist yet
- Can't get straight answers on deal types
- Team size keeps growing ("oh actually we might have 50 users")
- Budget is much lower than estimate
- Asks for work to start before deposit
- Payment terms get weird

**If red flags appear:** Pause, discuss internally, don't over-commit.

---

## Success Metrics (How We Know It's Working)

**Development:**
- Weekly demos keep Fred engaged
- No major scope changes mid-project
- Payment milestones met on time
- Launch within 12 weeks

**Post-Launch:**
- Fred uses it daily (not reverting to whiteboards)
- Team adopts it (not just Fred)
- Catches a fraudulent wallet in first 3 months (proves ROI)
- Fred refers another client
- Fred proceeds with Phase 2

---

## Internal Notes

**This is a good project because:**
- Clear business need (not a "nice to have")
- Willing to pay properly (waiting on budget confirmation)
- Unique functionality (good portfolio piece)
- Ongoing revenue potential
- Greenfield project (no legacy tech debt)

**Concerns:**
- Industry is a bit murky (crypto/gold brokerage - is it legit?)
- Fred's business is pre-traction (waiting on deals to close)
- Scope could expand quickly if not managed

**Overall:** Proceed cautiously but optimistically. Good project if managed well.

---

## Action Items (Before Responding to Fred)

- [ ] Review follow-up questions doc (Oliver + Jacob)
- [ ] Confirm we can deliver in 10-12 weeks
- [ ] Confirm pricing feels right (£15-18k for this scope)
- [ ] Check our availability/capacity
- [ ] Agree on who leads what (Oliver = PM, Jacob = Backend?)
- [ ] Send follow-up questions to Fred
- [ ] Wait for his deal confirmation
- [ ] Set calendar reminder to follow up Friday if no update

---

Last Updated: 2025-11-10
Internal Use Only - Do Not Share With Client

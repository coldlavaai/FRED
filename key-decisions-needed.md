# Key Decisions Needed - Fred CRM Project

**Date:** 2025-11-10
**Context:** Fred is a middleman/broker connecting buyers with sellers. He does NOT handle the trades or money directly - just facilitates introductions and earns commission.

---

## CATEGORY 1: PRICING & SCOPE

### Decision 1.1: What's Our Price?
**Three Options:**

**Option A: £12,000** (Claude's "win the project" price)
- ✅ Most competitive
- ✅ Gets us in the door
- ❌ Zero contingency room
- ❌ Risk of overrun/loss

**Option B: £16,000** (Middle ground - RECOMMENDED)
- ✅ Realistic for complexity
- ✅ Room for contingency
- ✅ Still competitive
- ❌ Might be higher than Fred expects

**Option C: £18,000** (Conservative estimate)
- ✅ Safe buffer
- ✅ Covers full compliance features
- ❌ Might price us out
- ❌ Higher than Fred may expect for "CRM"

**QUESTION FOR OLIVER:** Which price feels right to you?

---

### Decision 1.2: What Goes in Phase 1?
**Since Fred is just a middleman (not regulated), we can simplify:**

**Definite YES for Phase 1:**
- ✅ Client management with document storage
- ✅ Deal tracking (3 sectors with different structures)
- ✅ Wallet address storage and manual flagging
- ✅ Document auto-generation (5 templates)
- ✅ E-signature integration
- ✅ Reporting and filtering
- ✅ Basic security (2FA, audit logs, encryption)

**Definite NO for Phase 1 (move to Phase 2):**
- ❌ Automated wallet screening API (Elliptic/Chainalysis) - £50-200/month ongoing
- ❌ Automated KYC verification API (Sumsub) - £1-3 per check
- ❌ Payment master (commission payment sending)
- ❌ AI-driven features

**QUESTION FOR OLIVER:** Do you agree with this Phase 1 scope?

---

## CATEGORY 2: TECHNICAL APPROACH

### Decision 2.1: Database - Supabase or Custom PostgreSQL?
**Regular Claude strongly recommends Supabase:**

**Supabase Pros:**
- ✅ Built-in authentication (saves 10-15 hours)
- ✅ Row Level Security out of the box (saves 10 hours)
- ✅ Encryption via Vault (saves 5-10 hours)
- ✅ Real-time features (useful for multi-user)
- ✅ Audit logging built-in (saves 5 hours)
- ✅ Auto-generated TypeScript types
- ✅ Oliver familiar with it? (from other projects)

**Supabase Cons:**
- ❌ Vendor lock-in (but can export PostgreSQL)
- ❌ Monthly cost: £25/month (vs £15/month generic VPS)
- ❌ Learning curve if Jacob hasn't used it

**Custom PostgreSQL Pros:**
- ✅ Full control
- ✅ Slightly cheaper hosting
- ✅ No vendor lock-in

**Custom PostgreSQL Cons:**
- ❌ Build auth from scratch (+10-15 hours)
- ❌ Build RLS from scratch (+10 hours)
- ❌ Build audit system (+5 hours)
- ❌ More development time overall

**Net Impact:** Supabase probably SAVES 20-30 hours = £1,000-1,500 in development cost, costs £10/month more in hosting.

**QUESTION FOR OLIVER & JACOB:** Supabase or custom PostgreSQL?

---

### Decision 2.2: Automation - n8n or Built-in?
**Regular Claude recommends n8n for document generation and workflows.**

**You already use n8n extensively (47+ workflows).**

**n8n Pros:**
- ✅ You know it well
- ✅ Visual workflow builder (Fred could modify flows himself)
- ✅ Easy to add new automations later
- ✅ Separates automation logic from app code
- ✅ Can reuse your existing infrastructure

**n8n Cons:**
- ❌ Additional hosting cost (£15-30/month VPS or use your existing instance)
- ❌ Another system to maintain
- ❌ API integration between Next.js and n8n

**Built-in (Next.js) Pros:**
- ✅ Everything in one system
- ✅ Easier deployment
- ✅ No separate infrastructure

**Built-in Cons:**
- ❌ Less flexible for Fred to modify
- ❌ More code to maintain
- ❌ Takes longer to build (+20 hours for PDF generation, templates, etc.)

**Net Impact:** Using n8n probably SAVES 15-20 hours development time, costs £15-30/month hosting (or use your existing instance).

**QUESTION FOR OLIVER & JACOB:** Use n8n or build automation into the app?

---

### Decision 2.3: Final Tech Stack
**Proposed (combining both approaches):**

```
Frontend:  Next.js 14 + TypeScript + Tailwind CSS
Backend:   Next.js API routes (server components)
Database:  Supabase (PostgreSQL + Auth + RLS)
Automation: n8n (document generation, workflows)
Storage:   Supabase Storage (documents, files)
Hosting:   Vercel (frontend) + Supabase Cloud (database)
E-sign:    DocuSign or HelloSign (TBD based on Fred's preference)
```

**Total Monthly Infrastructure Cost:** £80-100
- Vercel Pro: £20
- Supabase Pro: £25
- n8n (self-hosted): £15-30
- DocuSign: £10-20
- Monitoring/backups: £10

**QUESTION FOR OLIVER & JACOB:** Does this stack work for you?

---

## CATEGORY 3: TIMELINE & CAPACITY

### Decision 3.1: Can You Deliver in 10 Weeks?
**Breakdown:**
- Week 1-2: Planning, database design, auth setup, infrastructure
- Week 3-5: Core CRM (clients, deals, basic features)
- Week 6-7: Wallet system, document generation
- Week 8-9: Reporting, refinement, polish
- Week 10: Testing, training, launch

**This assumes:**
- Full-time focus (or close to it)
- Fred responds quickly to questions
- No major scope changes
- Templates and requirements provided upfront

**Realistic?** Given:
- Greenstar website status?
- Detail Dynamics ongoing work?
- Other commitments?
- Jacob's availability?

**QUESTION FOR OLIVER:** What's your realistic timeline? Can you start in 2 weeks and deliver in 10 weeks? Or is this a January-March project?

---

### Decision 3.2: Team Division
**Suggested:**
- **Oliver:** Project management, frontend (Next.js UI), client communication
- **Jacob:** Backend (API routes, database, integrations), n8n workflows

**OR:**
- **Oliver:** Everything (Jacob consulted as needed)
- **Jacob:** Not involved

**OR:**
- **Both:** Pair programming, shared responsibility

**QUESTION FOR OLIVER:** How are you and Jacob splitting this work?

---

## CATEGORY 4: BUSINESS DECISIONS

### Decision 4.1: What Do We Need From Fred BEFORE Committing?
**Critical Info:**
1. **Budget confirmation** - Is he thinking £5k, £10k, £15k, £20k+?
2. **Banking deal requirements** - Complete list of instrument types and data needs
3. **Document templates** - His 5 existing templates (to assess complexity)
4. **Deal confirmation** - Did his deals close this week? (Funding secured?)
5. **Timeline expectations** - Does he need it in 6 weeks or 6 months?

**QUESTION FOR OLIVER:** Should we:
- **Option A:** Send follow-up questions doc first, get answers, THEN price
- **Option B:** Have a 15-min call to discuss budget/timeline, THEN send questions
- **Option C:** Send pricing now (£16k) and questions, see what happens

**RECOMMENDED:** Option A - send questions, wait for answers, then finalize price.

---

### Decision 4.2: What If His Budget is Lower?
**Scenarios:**

**If Fred says: "I have £5,000 total"**
- **Response:** Offer stripped-down version:
  - Client management + basic deals only
  - No automation, no wallet system
  - Manual document creation
  - 4-week timeline
  - Or: politely decline

**If Fred says: "I have £8,000-10,000"**
- **Response:** Phase 1 Lite:
  - Core CRM features
  - Manual documents (no automation)
  - Basic wallet flagging
  - 6-week timeline
  - Phase 2 for automation (£6-8k more later)

**If Fred says: "I have £15,000-20,000"**
- **Response:** Full Phase 1 as planned (£16k)

**If Fred says: "I have £30,000+"**
- **Response:** Full Phase 1 + Phase 2 combined (£29k total)

**QUESTION FOR OLIVER:** What's your minimum price to make this worth it? (£10k? £12k? £15k?)

---

### Decision 4.3: Payment Structure
**Recommended (for £16k project):**
- **30% deposit:** £4,800 - Upon project start (week 0)
- **40% milestone:** £6,400 - Core features working (week 6)
- **30% final:** £4,800 - Launch and training (week 10)

**Alternative (if Fred prefers):**
- **50% upfront:** £8,000 - Before we start
- **50% on completion:** £8,000 - When it's done

**Alternative (if Fred needs payment plan):**
- **£2,000/month × 8 months** = £16,000 total
- Start work after first payment
- Ongoing payments while we develop + support

**QUESTION FOR OLIVER:** Which payment structure do you prefer?

---

## CATEGORY 5: RISK & LIABILITY

### Decision 5.1: Contract & Liability
**Since Fred is facilitating deals (not regulated), liability is lower but still exists:**

**What we need in the contract:**
1. ✅ **Software tools only** - We provide CRM software, not financial services
2. ✅ **No operational role** - Fred is responsible for all business decisions
3. ✅ **No automated decisions** - System doesn't auto-approve/reject deals
4. ✅ **Data protection** - We handle data securely, but Fred owns compliance
5. ✅ **Limitation of liability** - Cap at project value (£16k)
6. ✅ **IP ownership** - Fred owns the code (or we retain IP and grant license?)

**QUESTION FOR OLIVER:**
- Do you have a standard software development contract?
- Should we get this reviewed by a lawyer given the financial nature?
- Who owns the IP - Fred or Cold Lava?

---

### Decision 5.2: Insurance
**Do you need Professional Indemnity Insurance for this?**

**Probably not critical because:**
- Fred isn't regulated (as far as we know)
- He's not handling money
- We're just building software tools
- Standard contract limitations should cover us

**But might be worth considering if:**
- Fred IS handling large sums (even indirectly)
- You don't have business insurance already
- You want extra peace of mind

**QUESTION FOR OLIVER:** Do you have professional indemnity insurance? Should we get it for this project?

---

## CATEGORY 6: NEXT STEPS

### Decision 6.1: Immediate Action
**What do we do RIGHT NOW?**

**Option A: Send Follow-Up Questions (RECOMMENDED)**
- Send the `follow-up-questions.md` doc via WhatsApp
- Include budget range question
- Wait for Fred's answers (especially deal confirmation)
- Finalize pricing based on his responses
- **Timeline:** Answers in 3-5 days, then quote in 1 day

**Option B: Quick Discovery Call**
- Schedule 30-min call with Fred this week
- Ask top 10 questions verbally
- Gauge budget and timeline
- Follow up with written quote
- **Timeline:** Call in 2 days, quote in 1 day

**Option C: Send Quote Now**
- Finalize pricing at £16k
- Send formal proposal with estimate
- Include the follow-up questions as "information needed to proceed"
- **Timeline:** Quote today, wait for response

**QUESTION FOR OLIVER:** Which approach? A, B, or C?

---

### Decision 6.2: What If Fred Ghosts?
**Fred said "deals closing this week" - but what if:**
- Deals don't close → Fred disappears
- Deals close but he changes mind → Fred disappears
- Fred gets busy → No response for 2 weeks

**When do we follow up?**
- Friday (end of "this week") if no deal update?
- Next Monday if no response to questions?
- How many times before we move on?

**QUESTION FOR OLIVER:** What's your follow-up strategy?

---

## SUMMARY: The Actual Decisions You Need to Make

Cut through all the analysis - here are the 8 decisions:

### 1. **PRICE:** £12k, £16k, or £18k? → **My recommendation: £16k**

### 2. **TECH STACK:** Supabase + n8n or custom build? → **My recommendation: Supabase + n8n** (saves 30+ hours)

### 3. **TIMELINE:** 10 weeks realistic? → **Need your answer: Can you deliver by week of Jan 20?**

### 4. **PHASE 1 SCOPE:** Agree with my list above? → **Need your answer: Any changes?**

### 5. **MINIMUM PRICE:** What's your walk-away point? → **Need your answer: £10k? £12k? £15k?**

### 6. **PAYMENT TERMS:** 30/40/30 or 50/50 or payment plan? → **My recommendation: 30/40/30**

### 7. **NEXT ACTION:** Send questions, call Fred, or send quote? → **My recommendation: Send questions first**

### 8. **TEAM:** You solo or you + Jacob? → **Need your answer: Division of labor?**

---

## What I Need From You Right Now

**Just answer these 8 quick questions:**

1. Price preference: £12k, £16k, or £18k?
2. Supabase + n8n: Yes or No?
3. Can you realistically deliver in 10 weeks starting mid-November?
4. Phase 1 scope looks right: Yes or No?
5. Your minimum viable price?
6. Payment structure preference?
7. Should I send follow-up questions to Fred now?
8. Are you doing this solo or with Jacob?

Once I have these answers, I can:
- Finalize the follow-up questions doc (if needed)
- Update the pricing estimate
- Create a formal proposal
- Draft a contract outline

---

**Bottom line:** Since Fred is a middleman (not regulated), this is a **simpler, lower-risk project** than Regular Claude assumed. That's good news. We can price more competitively, have less compliance burden, and lower liability.

**My recommendation:** £16k, 10 weeks, Supabase + n8n, send follow-up questions first.

**What do you think?**

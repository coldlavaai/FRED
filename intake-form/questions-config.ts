export type QuestionType = 'text' | 'textarea' | 'select' | 'multiselect' | 'file' | 'number' | 'email';

export interface Question {
  id: string;
  section: string;
  question: string;
  type: QuestionType;
  required: boolean;
  options?: string[];
  placeholder?: string;
  helpText?: string;
  multipleFiles?: boolean;
}

export const projectInfo = {
  clientName: "Fred - The Opportunity Broker",
  projectName: "CRM System",
  contactEmail: "oliver@coldlava.ai"
};

export const questions: Question[] = [
  // PHASE 1: CORE CRM (MVP) - ESSENTIAL FOR BASIC OPERATIONS
  // =======================================================

  {
    id: "crypto_fields",
    section: "Phase 1: Cryptocurrency Deals (Core CRM)",
    question: "What fields do you need to track for crypto deals?",
    type: "textarea",
    required: true,
    placeholder: "e.g., cryptocurrency type, quantity, price, wallet addresses, settlement dates...",
    helpText: "IMPORTANT: Each field you list here needs database design, validation logic, and UI components. This directly impacts development time. Be thorough - it's easier to include fields now than add them later."
  },
  {
    id: "crypto_blockchain",
    section: "Phase 1: Cryptocurrency Deals (Core CRM)",
    question: "Do you need to track which blockchain each transaction is on?",
    type: "select",
    required: true,
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: "crypto_additional",
    section: "Phase 1: Cryptocurrency Deals (Core CRM)",
    question: "Any other crypto-specific requirements?",
    type: "textarea",
    required: false,
    placeholder: "e.g., transaction hashes, proof of funds documents, etc."
  },

  // Gold Deals
  {
    id: "gold_types",
    section: "Phase 1: Gold Deals (Core CRM)",
    question: "What types of gold do you commonly deal with?",
    type: "textarea",
    required: true,
    placeholder: "e.g., 24k, 22k, bullion, bars, coins...",
    helpText: "This will be used to create dropdown options"
  },
  {
    id: "gold_fields",
    section: "Phase 1: Gold Deals (Core CRM)",
    question: "What fields do you need to track for gold deals?",
    type: "textarea",
    required: true,
    placeholder: "e.g., quantity/unit, price, location, delivery method, storage details...",
    helpText: "Gold deals likely have different data requirements than crypto (physical location, shipping, purity/karats). Each deal type needs its own custom data model and interface."
  },
  {
    id: "gold_additional",
    section: "Phase 1: Gold Deals (Core CRM)",
    question: "Any other gold-specific requirements?",
    type: "textarea",
    required: false,
    placeholder: "e.g., assay certificates, shipping details, vault locations, etc."
  },

  // Banking Deals - CRITICAL
  {
    id: "banking_instruments",
    section: "Phase 1: Banking Deals (Core CRM)",
    question: "Complete list of ALL banking instrument types you deal with",
    type: "textarea",
    required: true,
    placeholder: "MT 103\nTreasury Bonds\n[Add all others, one per line]",
    helpText: "CRITICAL: Each banking instrument type requires a custom data schema and form. If you have 5 types, that's 5 separate interfaces to build. This is why banking complexity significantly impacts pricing."
  },
  {
    id: "banking_fields_common",
    section: "Phase 1: Banking Deals (Core CRM)",
    question: "What fields are common across ALL banking deals?",
    type: "textarea",
    required: true,
    placeholder: "e.g., transaction amount, currency, bank names, reference numbers...",
    helpText: "Fields that apply to every banking instrument type"
  },
  {
    id: "banking_fields_mt103",
    section: "Phase 1: Banking Deals (Core CRM)",
    question: "For MT 103 specifically, what additional fields are needed?",
    type: "textarea",
    required: true,
    placeholder: "e.g., SWIFT codes, sending/receiving bank details...",
  },
  {
    id: "banking_fields_other",
    section: "Phase 1: Banking Deals (Core CRM)",
    question: "For OTHER banking instruments, what unique fields are needed per type?",
    type: "textarea",
    required: true,
    placeholder: "List instrument type and its unique fields",
    helpText: "e.g., 'Treasury Bonds: maturity date, interest rate, face value'"
  },

  // Deal Pipeline & Workflow - CRITICAL FOR QUOTING
  {
    id: "pipeline_stages",
    section: "Phase 2: Deal Pipeline & Workflow (Automation)",
    question: "Confirm the deal stages you mentioned: Active, Grey (not active but not dead), Dead. Any other stages needed?",
    type: "textarea",
    required: true,
    placeholder: "You mentioned Active, Grey, and Dead. Are these correct? Any others like New, Matched, Pending Signatures, etc.?",
    helpText: "CRITICAL: Pipeline stages define your entire workflow and data architecture. Each stage needs: database state management, transition logic, permissions, notifications, and UI components. Adding stages later requires database migrations and code refactoring."
  },
  {
    id: "pipeline_visualization",
    section: "Phase 2: Deal Pipeline & Workflow (Automation)",
    question: "How do you want to view your deals?",
    type: "multiselect",
    required: true,
    options: [
      "Kanban board (drag deals between stages)",
      "List view with filters",
      "Calendar view by close date",
      "Pipeline forecast (deal value by stage)",
      "Not sure - recommend best option"
    ],
    helpText: "Select all that would be useful"
  },
  {
    id: "pipeline_automation",
    section: "Phase 2: Deal Pipeline & Workflow (Automation)",
    question: "What should happen automatically when a deal changes stage?",
    type: "multiselect",
    required: false,
    options: [
      "Send notification to me",
      "Send email to client",
      "Generate specific document",
      "Request e-signature",
      "Update deal probability/forecast",
      "Nothing - I'll handle it manually",
      "Other"
    ]
  },
  {
    id: "pipeline_automation_other",
    section: "Phase 2: Deal Pipeline & Workflow (Automation)",
    question: "Please describe other automation needs:",
    type: "textarea",
    required: false,
    placeholder: "Describe what else should happen automatically..."
  },

  // Communication & Activity Tracking
  {
    id: "communication_channels",
    section: "Phase 2: Communication & Notes (Automation)",
    question: "Besides WhatsApp (which we know you use), what other channels do you use?",
    type: "multiselect",
    required: false,
    options: [
      "Email",
      "Phone calls",
      "Video calls",
      "In-person meetings",
      "Telegram",
      "WhatsApp only",
      "Other"
    ],
    helpText: "Select all that apply"
  },
  {
    id: "communication_channels_other",
    section: "Phase 2: Communication & Notes (Automation)",
    question: "Please specify other communication channels:",
    type: "textarea",
    required: false,
    placeholder: "e.g., Signal, WeChat, etc."
  },
  {
    id: "communication_logging",
    section: "Phase 2: Communication & Notes (Automation)",
    question: "Do you want to log communications in the CRM?",
    type: "select",
    required: true,
    options: [
      "Yes - automatically if possible (e.g., email integration)",
      "Yes - but manual entry is fine",
      "Just need a notes field",
      "Not important",
      "Not sure"
    ]
  },
  {
    id: "communication_history",
    section: "Phase 2: Communication & Notes (Automation)",
    question: "What information should each communication log capture?",
    type: "multiselect",
    required: false,
    options: [
      "Date & time",
      "Communication type (call, email, WhatsApp, etc.)",
      "Summary/notes",
      "Attachments/files",
      "Next follow-up date",
      "Sentiment (positive, neutral, negative)"
    ],
    helpText: "Select all that would be useful"
  },

  // Financial & Currency
  {
    id: "currencies_used",
    section: "Phase 3: Financial & Currency (Advanced)",
    question: "What currencies do you deal in?",
    type: "textarea",
    required: true,
    placeholder: "e.g., USD, EUR, GBP, Bitcoin, Ethereum...",
    helpText: "List all currencies including fiat and crypto"
  },
  {
    id: "currency_conversion",
    section: "Phase 3: Financial & Currency (Advanced)",
    question: "Do you need automatic currency conversion?",
    type: "select",
    required: true,
    options: [
      "Yes - real-time exchange rates",
      "Yes - manual exchange rates I input",
      "No - I'll handle conversions externally",
      "Not sure"
    ],
    helpText: "Affects reporting accuracy if you deal in multiple currencies"
  },
  {
    id: "commission_tracking",
    section: "Phase 3: Financial & Currency (Advanced)",
    question: "Confirm commission structure: 3-4% total, mandates get 1.5% each, intermediaries get 1%. Are there any variations or exceptions?",
    type: "textarea",
    required: false,
    placeholder: "e.g., Different rates for gold vs crypto, special deals, etc.",
    helpText: "You mentioned the standard structure in the call - just confirm if there are any special cases"
  },
  {
    id: "commission_paymaster",
    section: "Phase 3: Financial & Currency (Advanced)",
    question: "For Phase 3 paymaster feature: confirm you want to receive commissions, list all recipients with splits, and send payments from within CRM?",
    type: "select",
    required: true,
    options: [
      "Yes - exactly as described in call",
      "Yes - but with modifications (explain below)",
      "Not priority for Phase 1",
      "Let's discuss this later"
    ],
    helpText: "Paymaster is complex: requires crypto wallet integration, transaction signing, blockchain interaction, split calculations, payment tracking, and security auditing. This is Phase 3 because it's advanced functionality requiring crypto payment infrastructure."
  },
  {
    id: "commission_paymaster_modifications",
    section: "Phase 3: Financial & Currency (Advanced)",
    question: "Please describe the modifications needed for paymaster feature:",
    type: "textarea",
    required: false,
    placeholder: "Explain how your needs differ from what was discussed..."
  },

  // Reporting & Analytics
  {
    id: "reports_needed",
    section: "Phase 3: Reporting & Analytics (Advanced)",
    question: "What reports/insights do you need?",
    type: "multiselect",
    required: true,
    options: [
      "Deals by status/stage",
      "Revenue forecast (pipeline value)",
      "Closed deals (won vs lost)",
      "Conversion rates",
      "Deal velocity (time to close)",
      "Commission earned",
      "Top performing clients",
      "Activity log (calls, emails made)",
      "Other"
    ],
    helpText: "Select all that would be valuable"
  },
  {
    id: "reports_needed_other",
    section: "Phase 3: Reporting & Analytics (Advanced)",
    question: "Please describe other reports/insights you need:",
    type: "textarea",
    required: false,
    placeholder: "Describe other reports that would be valuable..."
  },
  {
    id: "dashboard_metrics",
    section: "Phase 3: Reporting & Analytics (Advanced)",
    question: "What do you want to see on your main dashboard when you log in?",
    type: "textarea",
    required: true,
    placeholder: "e.g., Total pipeline value, deals closing this week, overdue follow-ups...",
    helpText: "Your at-a-glance metrics - what numbers matter most?"
  },
  {
    id: "report_export",
    section: "Phase 3: Reporting & Analytics (Advanced)",
    question: "Do you need to export data/reports?",
    type: "multiselect",
    required: false,
    options: [
      "Export to Excel/CSV",
      "Export to PDF",
      "Email scheduled reports",
      "Not needed"
    ]
  },

  // Notifications & Reminders
  {
    id: "notifications_needed",
    section: "Phase 2: Notifications & Reminders (Automation)",
    question: "What notifications/alerts do you need?",
    type: "multiselect",
    required: true,
    options: [
      "Deal hasn't moved in X days",
      "Client hasn't responded in X days",
      "Document pending signature",
      "Deal close date approaching",
      "Flagged wallet detected",
      "Daily/weekly summary digest",
      "Other"
    ],
    helpText: "Select all that would be useful"
  },
  {
    id: "notifications_needed_other",
    section: "Phase 2: Notifications & Reminders (Automation)",
    question: "Please describe other notifications/alerts you need:",
    type: "textarea",
    required: false,
    placeholder: "Describe other notifications that would be useful..."
  },
  {
    id: "notification_delivery",
    section: "Phase 2: Notifications & Reminders (Automation)",
    question: "How should you receive notifications?",
    type: "multiselect",
    required: true,
    options: [
      "Email",
      "WhatsApp",
      "SMS",
      "In-app only",
      "Desktop push notifications",
      "Not sure - recommend best option"
    ]
  },

  // Client Management
  {
    id: "client_fields_essential",
    section: "Phase 1: Client Management (Core CRM)",
    question: "Which client fields are ESSENTIAL for your business?",
    type: "multiselect",
    required: true,
    options: [
      "Contact name",
      "Business name",
      "Email",
      "Phone/WhatsApp",
      "Physical address",
      "Country",
      "Company registration number",
      "Website",
      "Time zone",
      "Language preference"
    ],
    helpText: "Select all that apply"
  },
  {
    id: "client_fields_additional",
    section: "Phase 1: Client Management (Core CRM)",
    question: "Any other client fields needed?",
    type: "textarea",
    required: false,
    placeholder: "List any additional fields not covered above"
  },

  // Documents
  {
    id: "documents_templates_which",
    section: "Phase 1: Document Templates (Core CRM)",
    question: "Which of these document templates do you already have?",
    type: "multiselect",
    required: false,
    options: [
      "Buyer booking",
      "Seller booking",
      "Terms and Conditions",
      "Commission agreement",
      "NDA",
      "CIS (Customer Information Sheet)",
      "None - we'll need to create them"
    ],
    helpText: "We may ask you to send these templates later. Document automation requires: parsing your templates, identifying dynamic fields, building data injection logic, and PDF generation."
  },
  {
    id: "documents_id_types",
    section: "Phase 1: Document Templates (Core CRM)",
    question: "What types of ID documents do you accept?",
    type: "multiselect",
    required: true,
    options: ["Passport", "Driver's license", "National ID card", "Business registration", "Other"],
    helpText: "Select all that apply"
  },
  {
    id: "documents_id_types_other",
    section: "Phase 1: Document Templates (Core CRM)",
    question: "Please specify other ID document types:",
    type: "textarea",
    required: false,
    placeholder: "e.g., Military ID, Residency permit, etc."
  },
  {
    id: "documents_other",
    section: "Phase 1: Document Templates (Core CRM)",
    question: "What other document types do you store per client?",
    type: "multiselect",
    required: true,
    options: [
      "Bank statements",
      "Proof of funds",
      "Proof of address",
      "Business licenses",
      "Financial statements",
      "References",
      "Other"
    ]
  },
  {
    id: "documents_other_specify",
    section: "Phase 1: Document Templates (Core CRM)",
    question: "Please specify other document types:",
    type: "textarea",
    required: false,
    placeholder: "e.g., Tax returns, incorporation documents, etc."
  },

  // Wallet Management
  {
    id: "wallet_confirmation",
    section: "Phase 1: Wallet Verification (Core CRM)",
    question: "Confirm wallet verification approach: Store all wallet addresses, manually flag good/bad ones, search function shows green/red when checking new addresses. Correct?",
    type: "select",
    required: true,
    options: [
      "Yes - exactly as described in call",
      "Yes - with modifications (explain below)",
      "Need to discuss further"
    ],
    helpText: "Wallet verification requires: secure storage, fast search indexing (for instant lookups), relationship mapping (wallet→deals→clients), and fraud detection UI. This is a unique feature that requires custom development."
  },
  {
    id: "wallet_confirmation_modifications",
    section: "Phase 1: Wallet Verification (Core CRM)",
    question: "Please describe the modifications needed for wallet verification:",
    type: "textarea",
    required: false,
    placeholder: "Explain how your needs differ from what was discussed..."
  },
  {
    id: "wallet_additional_fields",
    section: "Phase 1: Wallet Verification (Core CRM)",
    question: "Besides the wallet address and good/bad flag, what other info should we store with each wallet?",
    type: "multiselect",
    required: false,
    options: [
      "Date added",
      "Which deal it was associated with",
      "Who flagged it (team member)",
      "Notes about why it's flagged",
      "Blockchain type",
      "Client it belongs to",
      "Just wallet address and flag is enough"
    ]
  },
  {
    id: "wallet_screening_preference",
    section: "Phase 1: Wallet Verification (Core CRM)",
    question: "Future automated wallet screening (Phase 2) - interested?",
    type: "select",
    required: false,
    options: [
      "Yes - want this in Phase 2 (costs £0.10-0.50 per check)",
      "Maybe - tell me more later",
      "No - manual flagging is sufficient",
      "Not sure"
    ],
    helpText: "Optional future feature: API integration for real-time wallet risk assessment"
  },

  // E-Signature
  {
    id: "esignature_preference",
    section: "Phase 2: Electronic Signatures (Automation)",
    question: "E-signature platform preference",
    type: "select",
    required: true,
    options: [
      "DocuSign (£15-40/month)",
      "HelloSign/Dropbox Sign (cheaper)",
      "Other platform I already use",
      "No preference - you choose",
      "Build simple custom solution"
    ],
    helpText: "E-signature integration requires: API authentication, document upload/download logic, webhook handling for status updates, and error recovery. Each platform has different APIs, so this choice affects development complexity."
  },
  {
    id: "esignature_preference_other",
    section: "Phase 2: Electronic Signatures (Automation)",
    question: "Please specify the e-signature platform you already use:",
    type: "text",
    required: false,
    placeholder: "e.g., Adobe Sign, PandaDoc, etc."
  },
  {
    id: "esignature_workflow",
    section: "Phase 2: Electronic Signatures (Automation)",
    question: "Signature workflow requirements",
    type: "multiselect",
    required: true,
    options: [
      "Send document via email",
      "Track when viewed",
      "Track when signed",
      "Send reminder emails if not signed",
      "Multiple signers per document",
      "I need to countersign after client signs"
    ],
    helpText: "Select all that apply"
  },

  // Team & Users
  {
    id: "team_size_now",
    section: "Phase 1: Team & Users (Core CRM)",
    question: "How many people will use the CRM initially?",
    type: "number",
    required: true,
    placeholder: "Number of users"
  },
  {
    id: "team_size_future",
    section: "Phase 1: Team & Users (Core CRM)",
    question: "Expected team size in 12 months",
    type: "number",
    required: false,
    placeholder: "Number of users"
  },
  {
    id: "team_permissions",
    section: "Phase 1: Team & Users (Core CRM)",
    question: "Do you need different permission levels for team members?",
    type: "select",
    required: true,
    options: [
      "Yes - Admin, Team Member, Viewer roles",
      "Yes - but simpler (just Admin and User)",
      "No - everyone has same access",
      "Not sure"
    ]
  },
  {
    id: "team_deal_assignment",
    section: "Phase 1: Team & Users (Core CRM)",
    question: "How should deals be assigned to team members?",
    type: "select",
    required: false,
    options: [
      "Each deal has one owner",
      "Deals can be shared among multiple people",
      "Everyone sees all deals",
      "Not applicable - I'm the only user",
      "Not sure"
    ]
  },

  // Integrations & External Tools
  {
    id: "integrations_email",
    section: "Phase 2: Integrations & External Tools (Automation)",
    question: "Do you want to integrate your email?",
    type: "select",
    required: false,
    options: [
      "Yes - Gmail",
      "Yes - Outlook/Microsoft 365",
      "Yes - Other email provider",
      "No - manual entry is fine",
      "Not sure"
    ],
    helpText: "Email integration can automatically log emails with clients"
  },
  {
    id: "integrations_other",
    section: "Phase 2: Integrations & External Tools (Automation)",
    question: "What other tools do you currently use that might need to integrate?",
    type: "multiselect",
    required: false,
    options: [
      "Accounting software (QuickBooks, Xero, etc.)",
      "Payment processors",
      "Blockchain explorers (for wallet verification)",
      "Calendar (Google Calendar, Outlook)",
      "Zapier/Make for custom automations",
      "WhatsApp Business API",
      "None - CRM will be standalone",
      "Other"
    ]
  },
  {
    id: "integrations_other_specify",
    section: "Phase 2: Integrations & External Tools (Automation)",
    question: "Please specify other tools that need to integrate:",
    type: "textarea",
    required: false,
    placeholder: "List any other tools and how they should integrate..."
  },
  {
    id: "integrations_api",
    section: "Phase 2: Integrations & External Tools (Automation)",
    question: "Do you need API access for future integrations?",
    type: "select",
    required: false,
    options: [
      "Yes - important for future flexibility",
      "Maybe - not sure yet",
      "No - not needed",
      "What's an API?"
    ],
    helpText: "API allows external tools to connect to your CRM data"
  },

  // Security & Compliance
  {
    id: "security_compliance",
    section: "Phase 3: Security & Compliance (Advanced)",
    question: "Do you have specific compliance requirements?",
    type: "multiselect",
    required: false,
    options: [
      "KYC (Know Your Customer)",
      "AML (Anti-Money Laundering)",
      "GDPR (data protection)",
      "Financial regulations (FCA, SEC, etc.)",
      "Audit trail for all changes",
      "None that I'm aware of",
      "Not sure"
    ]
  },
  {
    id: "security_data_retention",
    section: "Phase 3: Security & Compliance (Advanced)",
    question: "How long do you need to retain client/deal data?",
    type: "select",
    required: false,
    options: [
      "Forever - never delete",
      "Archive after X years (specify below)",
      "Delete after deal closes",
      "Not sure - recommend best practice",
      "Depends on regulatory requirements"
    ]
  },
  {
    id: "security_data_retention_years",
    section: "Phase 3: Security & Compliance (Advanced)",
    question: "Please specify how many years to retain data:",
    type: "text",
    required: false,
    placeholder: "e.g., 7 years"
  },
  {
    id: "security_audit_trail",
    section: "Phase 3: Security & Compliance (Advanced)",
    question: "Do you need to track who changed what and when?",
    type: "select",
    required: false,
    options: [
      "Yes - full audit trail essential",
      "Just for sensitive fields (deal value, wallet addresses)",
      "Not important",
      "Not sure"
    ],
    helpText: "Useful for compliance and resolving disputes"
  },

  // Existing Data
  {
    id: "existing_data",
    section: "Phase 1: Existing Data (Core CRM)",
    question: "Do you have existing client/deal data to import?",
    type: "select",
    required: true,
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: "existing_data_format",
    section: "Phase 1: Existing Data (Core CRM)",
    question: "If yes, what format is your existing data in?",
    type: "select",
    required: false,
    options: ["Excel", "Google Sheets", "Another CRM", "Paper/whiteboard only", "Other"]
  },
  {
    id: "existing_data_format_other",
    section: "Phase 1: Existing Data (Core CRM)",
    question: "Please specify the data format:",
    type: "text",
    required: false,
    placeholder: "e.g., Access database, custom system, etc."
  },
  {
    id: "existing_data_volume",
    section: "Phase 1: Existing Data (Core CRM)",
    question: "Roughly how much data? (number of clients and deals)",
    type: "textarea",
    required: false,
    placeholder: "e.g., 50 clients, 30 active deals, 100 historical deals"
  },

  // Hosting & Access
  {
    id: "hosting_access",
    section: "Phase 3: Hosting & Access (Advanced)",
    question: "Where do you need to access the CRM from?",
    type: "multiselect",
    required: true,
    options: [
      "Office computers",
      "Home",
      "International locations",
      "Mobile devices",
      "Anywhere with internet"
    ],
    helpText: "Select all that apply"
  },
  {
    id: "hosting_mobile",
    section: "Phase 3: Hosting & Access (Advanced)",
    question: "How important is mobile access?",
    type: "select",
    required: true,
    options: [
      "Critical - must work well on mobile",
      "Nice to have - occasional mobile use",
      "Not important - mainly desktop"
    ]
  },

  // Timeline
  {
    id: "timeline_preference",
    section: "Phase 1: Timeline (Core CRM)",
    question: "When do you need the CRM live?",
    type: "select",
    required: true,
    options: [
      "ASAP (8-10 weeks from start)",
      "Flexible - within 3 months",
      "Specific date (explain below)",
      "No rush"
    ]
  },
  {
    id: "timeline_specific_date",
    section: "Phase 1: Timeline (Core CRM)",
    question: "Please specify the date and reason:",
    type: "textarea",
    required: false,
    placeholder: "e.g., Need by March 15 because..."
  },
  {
    id: "timeline_specific",
    section: "Phase 1: Timeline (Core CRM)",
    question: "If you have a specific deadline, what is it and why?",
    type: "textarea",
    required: false,
    placeholder: "e.g., Need by end of January for..."
  },


  // Success Criteria
  {
    id: "success_main_problem",
    section: "Phase 1: Success Criteria (Core CRM)",
    question: "What's the #1 biggest problem this CRM needs to solve for your business?",
    type: "textarea",
    required: true,
    placeholder: "e.g., I'm losing track of deals across WhatsApp and spreadsheets...",
    helpText: "Be specific - what's causing you the most pain right now?"
  },
  {
    id: "success_daily_usage",
    section: "Phase 1: Success Criteria (Core CRM)",
    question: "Describe your ideal daily workflow with the new CRM",
    type: "textarea",
    required: true,
    placeholder: "Walk us through a typical day - what would you do in the CRM? What tasks would become easier?",
    helpText: "Help us understand how you envision using this system every day"
  },
  {
    id: "success_must_have",
    section: "Phase 1: Success Criteria (Core CRM)",
    question: "Which 3-5 features are absolutely MUST-HAVE for launch?",
    type: "textarea",
    required: true,
    placeholder: "List only the features you can't go live without",
    helpText: "If we had to cut features to hit your deadline, what can't be touched?"
  },
  {
    id: "success_nice_to_have",
    section: "Phase 1: Success Criteria (Core CRM)",
    question: "Which features would be NICE-TO-HAVE but could wait for v2?",
    type: "textarea",
    required: false,
    placeholder: "Features that would be great but aren't deal-breakers",
    helpText: "These could be added in future updates after initial launch"
  },
  {
    id: "success_measurement",
    section: "Phase 1: Success Criteria (Core CRM)",
    question: "How will you measure success 3 months after launch?",
    type: "textarea",
    required: true,
    placeholder: "e.g., Closing 20% more deals, saving 10 hours per week, zero missed follow-ups...",
    helpText: "What specific outcomes would prove this was worth the investment?"
  },

  // Additional Info
  {
    id: "additional_requirements",
    section: "Phase 1: Additional Information (Core CRM)",
    question: "Anything else we should know?",
    type: "textarea",
    required: false,
    placeholder: "Any other requirements, concerns, or questions..."
  },
  {
    id: "questions_for_us",
    section: "Phase 1: Additional Information (Core CRM)",
    question: "Any questions for us?",
    type: "textarea",
    required: false,
    placeholder: "Ask us anything about the process, technology, etc."
  }
];

// Group questions by section for display
export const sections = Array.from(new Set(questions.map(q => q.section)));

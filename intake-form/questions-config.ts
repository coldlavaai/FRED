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
  // Section 1: Deal Structure
  {
    id: "crypto_fields",
    section: "Cryptocurrency Deals",
    question: "What fields do you need to track for crypto deals?",
    type: "textarea",
    required: true,
    placeholder: "e.g., cryptocurrency type, quantity, price, wallet addresses, settlement dates...",
    helpText: "List all the information you need to track for each cryptocurrency deal"
  },
  {
    id: "crypto_blockchain",
    section: "Cryptocurrency Deals",
    question: "Do you need to track which blockchain each transaction is on?",
    type: "select",
    required: true,
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: "crypto_additional",
    section: "Cryptocurrency Deals",
    question: "Any other crypto-specific requirements?",
    type: "textarea",
    required: false,
    placeholder: "e.g., transaction hashes, proof of funds documents, etc."
  },

  // Gold Deals
  {
    id: "gold_types",
    section: "Gold Deals",
    question: "What types of gold do you commonly deal with?",
    type: "textarea",
    required: true,
    placeholder: "e.g., 24k, 22k, bullion, bars, coins...",
    helpText: "This will be used to create dropdown options"
  },
  {
    id: "gold_fields",
    section: "Gold Deals",
    question: "What fields do you need to track for gold deals?",
    type: "textarea",
    required: true,
    placeholder: "e.g., quantity/unit, price, location, delivery method, storage details...",
    helpText: "List all the information you need to track for each gold deal"
  },
  {
    id: "gold_additional",
    section: "Gold Deals",
    question: "Any other gold-specific requirements?",
    type: "textarea",
    required: false,
    placeholder: "e.g., assay certificates, shipping details, vault locations, etc."
  },

  // Banking Deals - CRITICAL
  {
    id: "banking_instruments",
    section: "Banking Deals",
    question: "Complete list of ALL banking instrument types you deal with",
    type: "textarea",
    required: true,
    placeholder: "MT 103\nTreasury Bonds\n[Add all others, one per line]",
    helpText: "CRITICAL: List every type of banking instrument. We'll create a separate form for each."
  },
  {
    id: "banking_fields_common",
    section: "Banking Deals",
    question: "What fields are common across ALL banking deals?",
    type: "textarea",
    required: true,
    placeholder: "e.g., transaction amount, currency, bank names, reference numbers...",
    helpText: "Fields that apply to every banking instrument type"
  },
  {
    id: "banking_fields_mt103",
    section: "Banking Deals",
    question: "For MT 103 specifically, what additional fields are needed?",
    type: "textarea",
    required: true,
    placeholder: "e.g., SWIFT codes, sending/receiving bank details...",
  },
  {
    id: "banking_fields_other",
    section: "Banking Deals",
    question: "For OTHER banking instruments, what unique fields are needed per type?",
    type: "textarea",
    required: true,
    placeholder: "List instrument type and its unique fields",
    helpText: "e.g., 'Treasury Bonds: maturity date, interest rate, face value'"
  },

  // Deal Pipeline & Workflow - CRITICAL FOR QUOTING
  {
    id: "pipeline_stages",
    section: "Deal Pipeline & Workflow",
    question: "What stages does a deal go through from start to finish?",
    type: "textarea",
    required: true,
    placeholder: "e.g., Lead → Qualified → Proposal Sent → Negotiating → Closed Won / Closed Lost",
    helpText: "CRITICAL: This determines how we build your deal management interface"
  },
  {
    id: "pipeline_visualization",
    section: "Deal Pipeline & Workflow",
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
    section: "Deal Pipeline & Workflow",
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

  // Communication & Activity Tracking
  {
    id: "communication_channels",
    section: "Communication & Notes",
    question: "How do you primarily communicate with clients?",
    type: "multiselect",
    required: true,
    options: [
      "WhatsApp",
      "Email",
      "Phone calls",
      "Video calls",
      "In-person meetings",
      "Telegram",
      "Other"
    ],
    helpText: "Select all that apply"
  },
  {
    id: "communication_logging",
    section: "Communication & Notes",
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
    section: "Communication & Notes",
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
    section: "Financial & Currency",
    question: "What currencies do you deal in?",
    type: "textarea",
    required: true,
    placeholder: "e.g., USD, EUR, GBP, Bitcoin, Ethereum...",
    helpText: "List all currencies including fiat and crypto"
  },
  {
    id: "currency_conversion",
    section: "Financial & Currency",
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
    section: "Financial & Currency",
    question: "How do you calculate and track commissions?",
    type: "textarea",
    required: true,
    placeholder: "e.g., 5% of deal value, split 60/40 with partner, paid on completion...",
    helpText: "IMPORTANT: Describe your commission structure in detail"
  },
  {
    id: "commission_splits",
    section: "Financial & Currency",
    question: "Do you split commissions with partners or team members?",
    type: "select",
    required: true,
    options: [
      "Yes - need to track commission splits",
      "No - I keep all commission",
      "Sometimes - depends on the deal"
    ]
  },

  // Reporting & Analytics
  {
    id: "reports_needed",
    section: "Reporting & Analytics",
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
    id: "dashboard_metrics",
    section: "Reporting & Analytics",
    question: "What do you want to see on your main dashboard when you log in?",
    type: "textarea",
    required: true,
    placeholder: "e.g., Total pipeline value, deals closing this week, overdue follow-ups...",
    helpText: "Your at-a-glance metrics - what numbers matter most?"
  },
  {
    id: "report_export",
    section: "Reporting & Analytics",
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
    section: "Notifications & Reminders",
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
    id: "notification_delivery",
    section: "Notifications & Reminders",
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
    section: "Client Management",
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
    section: "Client Management",
    question: "Any other client fields needed?",
    type: "textarea",
    required: false,
    placeholder: "List any additional fields not covered above"
  },

  // Documents
  {
    id: "documents_templates",
    section: "Document Templates",
    question: "Upload your 5 existing document templates",
    type: "file",
    required: true,
    multipleFiles: true,
    helpText: "Buyer booking, Seller booking, Terms, Commission agreement, NDA"
  },
  {
    id: "documents_cis",
    section: "Document Templates",
    question: "Do you have a standard CIS (Customer Information Sheet) template?",
    type: "select",
    required: true,
    options: ["Yes - will provide", "No - need to create one", "Not sure what this is"]
  },
  {
    id: "documents_id_types",
    section: "Document Templates",
    question: "What types of ID documents do you accept?",
    type: "multiselect",
    required: true,
    options: ["Passport", "Driver's license", "National ID card", "Business registration", "Other"],
    helpText: "Select all that apply"
  },
  {
    id: "documents_other",
    section: "Document Templates",
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

  // Wallet Management
  {
    id: "wallet_volume",
    section: "Wallet Verification",
    question: "Roughly how many wallet addresses do you check per month?",
    type: "select",
    required: true,
    options: ["Less than 10", "10-50", "50-100", "100-500", "500+", "Not sure"]
  },
  {
    id: "wallet_screening_preference",
    section: "Wallet Verification",
    question: "Wallet screening preference",
    type: "select",
    required: true,
    options: [
      "Manual flagging only (Phase 1)",
      "Automated API screening (Phase 2 - costs £0.10-0.50 per check)",
      "Start manual, add automated later",
      "Not sure"
    ],
    helpText: "Automated screening requires ongoing costs but provides real-time risk assessment"
  },
  {
    id: "wallet_bad_flag",
    section: "Wallet Verification",
    question: "When you flag a wallet as 'bad', what does that mean?",
    type: "multiselect",
    required: true,
    options: [
      "Suspected fraud",
      "Known scammer",
      "Stolen coins",
      "Sanctioned address",
      "Deal went bad",
      "Other"
    ]
  },
  {
    id: "wallet_action",
    section: "Wallet Verification",
    question: "If a flagged wallet is detected, should the system:",
    type: "select",
    required: true,
    options: [
      "Just warn me (I decide what to do)",
      "Prevent deal from proceeding (I have to override)",
      "Just log it for my review later"
    ]
  },

  // E-Signature
  {
    id: "esignature_preference",
    section: "Electronic Signatures",
    question: "E-signature platform preference",
    type: "select",
    required: true,
    options: [
      "DocuSign (£15-40/month)",
      "HelloSign/Dropbox Sign (cheaper)",
      "Other platform I already use",
      "No preference - you choose",
      "Build simple custom solution"
    ]
  },
  {
    id: "esignature_workflow",
    section: "Electronic Signatures",
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
    section: "Team & Users",
    question: "How many people will use the CRM initially?",
    type: "number",
    required: true,
    placeholder: "Number of users"
  },
  {
    id: "team_size_future",
    section: "Team & Users",
    question: "Expected team size in 12 months",
    type: "number",
    required: false,
    placeholder: "Number of users"
  },
  {
    id: "team_permissions",
    section: "Team & Users",
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
    section: "Team & Users",
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
    section: "Integrations & External Tools",
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
    section: "Integrations & External Tools",
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
    id: "integrations_api",
    section: "Integrations & External Tools",
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
    section: "Security & Compliance",
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
    section: "Security & Compliance",
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
    id: "security_audit_trail",
    section: "Security & Compliance",
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
    section: "Existing Data",
    question: "Do you have existing client/deal data to import?",
    type: "select",
    required: true,
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: "existing_data_format",
    section: "Existing Data",
    question: "If yes, what format is your existing data in?",
    type: "select",
    required: false,
    options: ["Excel", "Google Sheets", "Another CRM", "Paper/whiteboard only", "Other"]
  },
  {
    id: "existing_data_volume",
    section: "Existing Data",
    question: "Roughly how much data? (number of clients and deals)",
    type: "textarea",
    required: false,
    placeholder: "e.g., 50 clients, 30 active deals, 100 historical deals"
  },

  // Hosting & Access
  {
    id: "hosting_access",
    section: "Hosting & Access",
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
    section: "Hosting & Access",
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
    section: "Timeline",
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
    id: "timeline_specific",
    section: "Timeline",
    question: "If you have a specific deadline, what is it and why?",
    type: "textarea",
    required: false,
    placeholder: "e.g., Need by end of January for..."
  },


  // Success Criteria
  {
    id: "success_main_problem",
    section: "Success Criteria",
    question: "What's the #1 biggest problem this CRM needs to solve for your business?",
    type: "textarea",
    required: true,
    placeholder: "e.g., I'm losing track of deals across WhatsApp and spreadsheets...",
    helpText: "Be specific - what's causing you the most pain right now?"
  },
  {
    id: "success_daily_usage",
    section: "Success Criteria",
    question: "Describe your ideal daily workflow with the new CRM",
    type: "textarea",
    required: true,
    placeholder: "Walk us through a typical day - what would you do in the CRM? What tasks would become easier?",
    helpText: "Help us understand how you envision using this system every day"
  },
  {
    id: "success_deal_lifecycle",
    section: "Success Criteria",
    question: "Walk through your ideal journey of a deal from start to finish",
    type: "textarea",
    required: true,
    placeholder: "From first contact with client → closing the deal → post-deal management",
    helpText: "What happens at each stage? Where do you need the CRM to help most?"
  },
  {
    id: "success_must_have",
    section: "Success Criteria",
    question: "Which 3-5 features are absolutely MUST-HAVE for launch?",
    type: "textarea",
    required: true,
    placeholder: "List only the features you can't go live without",
    helpText: "If we had to cut features to hit your deadline, what can't be touched?"
  },
  {
    id: "success_nice_to_have",
    section: "Success Criteria",
    question: "Which features would be NICE-TO-HAVE but could wait for v2?",
    type: "textarea",
    required: false,
    placeholder: "Features that would be great but aren't deal-breakers",
    helpText: "These could be added in future updates after initial launch"
  },
  {
    id: "success_measurement",
    section: "Success Criteria",
    question: "How will you measure success 3 months after launch?",
    type: "textarea",
    required: true,
    placeholder: "e.g., Closing 20% more deals, saving 10 hours per week, zero missed follow-ups...",
    helpText: "What specific outcomes would prove this was worth the investment?"
  },

  // Additional Info
  {
    id: "additional_requirements",
    section: "Additional Information",
    question: "Anything else we should know?",
    type: "textarea",
    required: false,
    placeholder: "Any other requirements, concerns, or questions..."
  },
  {
    id: "questions_for_us",
    section: "Additional Information",
    question: "Any questions for us?",
    type: "textarea",
    required: false,
    placeholder: "Ask us anything about the process, technology, etc."
  }
];

// Group questions by section for display
export const sections = Array.from(new Set(questions.map(q => q.section)));

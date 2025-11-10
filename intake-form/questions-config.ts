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
    section: "Timeline & Budget",
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
    section: "Timeline & Budget",
    question: "If you have a specific deadline, what is it and why?",
    type: "textarea",
    required: false,
    placeholder: "e.g., Need by end of January for..."
  },

  // Budget
  {
    id: "budget_range",
    section: "Timeline & Budget",
    question: "Budget range for this project",
    type: "select",
    required: true,
    options: [
      "Under £10,000",
      "£10,000 - £15,000",
      "£15,000 - £20,000",
      "£20,000+",
      "Flexible - depends on features"
    ],
    helpText: "This helps us tailor the solution to your investment level"
  },
  {
    id: "budget_monthly",
    section: "Timeline & Budget",
    question: "Comfortable with monthly infrastructure costs of £70-120?",
    type: "select",
    required: true,
    options: [
      "Yes - expected for cloud hosting",
      "Need to understand what this covers",
      "Too high - need cheaper options",
      "Not sure"
    ],
    helpText: "Covers hosting, database, e-signature, backups, SSL"
  },

  // Success Criteria
  {
    id: "success_criteria",
    section: "Success Criteria",
    question: "What would make this CRM a success for you?",
    type: "textarea",
    required: true,
    placeholder: "What's the #1 problem this needs to solve?",
    helpText: "Be as specific as possible"
  },
  {
    id: "success_features",
    section: "Success Criteria",
    question: "Which features are MUST-HAVE vs NICE-TO-HAVE?",
    type: "textarea",
    required: true,
    placeholder: "MUST-HAVE: [list]\nNICE-TO-HAVE: [list]",
    helpText: "This helps us prioritize if we need to phase the delivery"
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

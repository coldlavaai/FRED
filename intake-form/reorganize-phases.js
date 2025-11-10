const fs = require('fs');

const sectionMapping = {
  // Phase 1 - Core CRM
  "Phase 1: Cryptocurrency Deals (Core CRM)": "Phase 1: Cryptocurrency Deals (Core CRM)",
  "Gold Deals": "Phase 1: Gold Deals (Core CRM)",
  "Banking Deals": "Phase 1: Banking Deals (Core CRM)",
  "Client Management": "Phase 1: Client Management (Core CRM)",
  "Document Templates": "Phase 1: Document Templates (Core CRM)",
  "Wallet Verification": "Phase 1: Wallet Verification (Core CRM)",
  "Team & Users": "Phase 1: Team & Users (Core CRM)",
  "Existing Data": "Phase 1: Existing Data (Core CRM)",
  "Timeline": "Phase 1: Timeline (Core CRM)",
  "Success Criteria": "Phase 1: Success Criteria (Core CRM)",
  "Additional Information": "Phase 1: Additional Information (Core CRM)",

  // Phase 2 - Automation & Workflows
  "Deal Pipeline & Workflow": "Phase 2: Deal Pipeline & Workflow (Automation)",
  "Communication & Notes": "Phase 2: Communication & Notes (Automation)",
  "Electronic Signatures": "Phase 2: Electronic Signatures (Automation)",
  "Notifications & Reminders": "Phase 2: Notifications & Reminders (Automation)",
  "Integrations & External Tools": "Phase 2: Integrations & External Tools (Automation)",

  // Phase 3 - Advanced Features
  "Financial & Currency": "Phase 3: Financial & Currency (Advanced)",
  "Reporting & Analytics": "Phase 3: Reporting & Analytics (Advanced)",
  "Security & Compliance": "Phase 3: Security & Compliance (Advanced)",
  "Hosting & Access": "Phase 3: Hosting & Access (Advanced)"
};

let content = fs.readFileSync('questions-config.ts', 'utf8');

// Replace all section names
for (const [oldName, newName] of Object.entries(sectionMapping)) {
  const regex = new RegExp(`section: "${oldName}"`, 'g');
  content = content.replace(regex, `section: "${newName}"`);
}

fs.writeFileSync('questions-config.ts', content);
console.log('✅ Reorganized sections into phases');

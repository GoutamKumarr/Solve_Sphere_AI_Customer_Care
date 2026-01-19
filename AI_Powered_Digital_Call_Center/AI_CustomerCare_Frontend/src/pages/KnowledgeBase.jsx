import React from 'react';

const policies = [
  {
    id: 'p1',
    title: 'Dividend Distribution Policy',
    source: 'TCS Dividend Distribution Policy (Ver. 1.0) – TCS-Dividend-Distribution-Policy',
    sections: [
      { title: 'Policy Objective', type: 'paragraph', content: 'To provide shareholders predictable, transparent returns while ensuring long-term sustainable growth.' },
      {
        title: 'Dividend Philosophy', type: 'list', content: [
          'Regular annual dividends (interim + final)',
          'Occasional special dividends',
          'Dividend payout ratio is benchmarked against industry standards',
        ]
      },
      {
        title: 'Factors Considered – Internal', type: 'list', content: [
          'Net profit generated',
          'Cash balance and cash flow',
          'Current and future capital requirements: business expansion, modernization, mergers & acquisitions, investments in subsidiaries or associates',
        ]
      },
      {
        title: 'Factors Considered – External', type: 'list', content: [
          'Economic conditions',
          'Financing costs',
          'Government regulations',
          'Taxation policies',
        ]
      },
      {
        title: 'Utilization of Retained Earnings', type: 'list', content: [
          'Business growth and market expansion',
          'Research & development',
          'Capital expenditure (infrastructure, technology)',
          'Mergers and acquisitions',
          'Other strategic business needs',
        ]
      },
      {
        title: 'Circumstances When Dividend May Not Be Paid', type: 'list', content: [
          'Inadequate profits or cash balance',
          'Adverse market conditions',
          'Large upcoming capital requirements',
          'Regulatory or policy changes',
        ]
      },
      { title: 'Policy Governance', type: 'list', content: ['Reviewed periodically by the Board', 'Disclosed publicly on the company website'] },
    ]
  },
  {
    id: 'p2',
    title: 'Occupational Health and Safety (OH&S) Policy',
    source: 'TCS Occupational Health and Safety Policy (2021)',
    sections: [
      { title: 'Policy Objective', type: 'paragraph', content: 'To provide a safe, healthy, and secure working environment for employees, partners, and stakeholders.' },
      { title: 'Scope', type: 'paragraph', content: 'Applies to all global operations of TCS.' },
      {
        title: 'Core Commitments', type: 'list', content: [
          'Prevention of work-related injuries, illnesses, and near-misses',
          'Elimination of hazards and reduction of OH&S risks',
          'Compliance with applicable OH&S laws and regulations',
        ]
      },
      {
        title: 'People Focus', type: 'list', content: [
          'Employee participation in health & safety initiatives',
          'Shared responsibility between individuals and management',
          'Continuous OH&S awareness and training',
        ]
      },
      {
        title: 'Value Chain Safety', type: 'list', content: [
          'Engagement with suppliers and contractors to ensure safety',
          'Collaboration with clients to protect employees at client locations',
        ]
      },
      {
        title: 'Communication & Transparency', type: 'list', content: [
          'Policy communicated to all stakeholders',
          'OH&S performance reported through mandatory and voluntary disclosures',
        ]
      },
      {
        title: 'Continual Improvement', type: 'list', content: [
          'Periodic OH&S reviews',
          'Defined safety objectives and targets',
          'Allocation of adequate resources',
        ]
      },
    ]
  },
  {
    id: 'p3',
    title: 'Tata Code of Conduct',
    source: 'Tata Code of Conduct (2015)',
    sections: [
      { title: 'Purpose', type: 'paragraph', content: 'Defines ethical, legal, and professional standards governing all Tata companies and employees.' },
      { title: 'Core Values', type: 'list', content: ['Integrity', 'Responsibility', 'Excellence', 'Pioneering', 'Unity'] },
      {
        title: 'Ethical Principles', type: 'list', content: [
          'Zero tolerance for bribery and corruption',
          'Compliance with all applicable laws',
          'Respect for human rights, dignity, and diversity',
          'Transparent and truthful stakeholder communication',
        ]
      },
      {
        title: 'Employee Conduct', type: 'list', content: [
          'Equal opportunity and non-discrimination',
          'Zero tolerance for harassment',
          'Protection of privacy and personal data',
          'Prohibition of child labor and forced labor',
        ]
      },
      {
        title: 'Business Conduct', type: 'list', content: [
          'Fair competition and anti-trust compliance',
          'Protection of company and third-party assets',
          'Confidentiality and intellectual property protection',
          'Insider trading prohibition',
        ]
      },
      {
        title: 'Conflict of Interest', type: 'list', content: [
          'Mandatory disclosure of actual or potential conflicts',
          'Avoidance of personal benefit influencing business decisions',
        ]
      },
      {
        title: 'Reporting & Accountability', type: 'list', content: [
          'Safe mechanisms for raising concerns',
          'Protection against retaliation',
          'Disciplinary action for violations',
        ]
      },
    ]
  },
  {
    id: 'p4',
    title: 'Whistle Blower Policy',
    source: 'TCS Global Whistle Blower Policy (Version 9.0)',
    sections: [
      { title: 'Policy Objective', type: 'paragraph', content: 'Enable safe reporting of illegal, unethical, or policy-violating activities without fear of retaliation.' },
      { title: 'Applicability', type: 'list', content: ['Employees, Directors, Consultants, Interns, and Stakeholders', 'Applicable across all TCS subsidiaries globally'] },
      { title: 'What Can Be Reported', type: 'list', content: ['Violations of law', 'Breaches of Tata Code of Conduct', 'Fraud, corruption, insider trading, unethical practices'] },
      { title: 'Reporting Channels', type: 'list', content: ['Email to Chief Ethics Counsellor', 'Audit Committee Chairperson (in exceptional cases)', 'Written submissions allowed'] },
      { title: 'Investigation Process', type: 'list', content: ['Neutral, confidential investigation', 'Typically completed within 45 days', 'Managed by Ethics Counsellor or Audit Committee'] },
      { title: 'Protection to Whistle Blower', type: 'list', content: ['No retaliation, harassment, or discrimination', 'Confidentiality of identity (to the extent legally possible)', 'Protection extends to investigation participants'] },
      { title: 'Disqualification', type: 'paragraph', content: 'Protection not available for malicious or false complaints.' },
    ]
  },
];

function Section({ section }) {
  return (
    <div className="mt-4">
      <h4 className="font-semibold text-sm text-gray-200">{section.title}</h4>
      {section.type === 'paragraph' && (
        <p className="text-gray-400 text-sm mt-2">{section.content}</p>
      )}
      {section.type === 'list' && Array.isArray(section.content) && (
        <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
          {section.content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-6">
          Knowledge Base – Extracted Policies (TCS)
        </h1>
        <p className="text-gray-400 mb-8">Curated company policies with clear, scannable sections.</p>

        <div className="space-y-6">
          {policies.map((policy) => (
            <div key={policy.id} className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-semibold">{policy.title}</h3>
                <span className="text-xs text-gray-400">Source: {policy.source}</span>
              </div>
              <div className="mt-4 divide-y divide-gray-700">
                {policy.sections.map((s, i) => (
                  <div key={i} className="pt-4 first:pt-0">
                    <Section section={s} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;

// SetSail Client Portal — Featured Build section content.
//
// Approved PM copy and sanitized screenshots. Assets live in public/images
// and are referenced directly — do not duplicate or move them.
export const setsail = {
  eyebrow: 'Featured Build',
  name: 'SetSail Client Portal',

  description:
    'A client-first web app built for an organic social media agency after their clients found Monday.com difficult to use. SetSail gives clients a simpler place to review content, approve work, follow onboarding, and understand what is happening with their social media.',

  build: {
    label: 'Built from start to finish',
    copy:
      'I handled the project from planning and product structure through frontend, backend, authentication, database security, testing, and deployment.',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel'],
  },

  screenshots: {
    cover: {
      id: 'cover',
      label: 'SetSail agency overview on desktop',
      alt: 'SetSail agency overview screen showing client counts, onboarding status, pending approvals, intake, and upcoming work.',
      src: '/images/SCR-20260819-pwkj.png',
      width: 1920,
      height: 968,
    },
    primary: {
      id: 'primary',
      label: 'SetSail client dashboard',
      alt: 'SetSail client dashboard showing approvals, onboarding progress, reporting, content status, and client actions.',
      src: '/images/SCR-20260819-puhk.png',
      width: 1906,
      height: 969,
    },
    supporting: [
      {
        id: 'supporting-1',
        label: 'SetSail content approval screen',
        alt: 'SetSail content approval screen showing a social media post review with approve and request revision actions.',
        src: '/images/SCR-20260819-puve.png',
        width: 1920,
        height: 968,
      },
      {
        id: 'supporting-2',
        label: 'SetSail agency overview',
        alt: 'SetSail agency dashboard showing client counts, onboarding status, pending approvals, intake, and upcoming work.',
        src: '/images/SCR-20260819-pwkj.png',
        width: 1920,
        height: 968,
      },
    ],
    experience: {
      id: 'experience',
      label: 'Client dashboard on mobile',
      alt: 'SetSail client dashboard on mobile showing content going live today, upcoming posts awaiting approval, and wins and highlights.',
      src: '/images/iPhone-14-PRO-set-sail-mvp.vercel.app (11).png',
      width: 816,
      height: 1664,
    },
    build: [
      {
        id: 'client-workspace',
        label: 'Client workspace on mobile',
        alt: 'SetSail all-clients workspace on mobile showing searchable client cards, onboarding state, and pending actions.',
        src: '/images/iPhone-14-PRO-set-sail-mvp.vercel.app (2).png',
        width: 816,
        height: 1664,
      },
      {
        id: 'task-board',
        label: 'Task board on mobile',
        alt: 'SetSail task board on mobile showing task columns, assignees, and bottom navigation.',
        src: '/images/iPhone-14-PRO-set-sail-mvp.vercel.app (3).png',
        width: 816,
        height: 1664,
      },
    ],
  },

  details: {
    intro:
      'A client-first web app built for an organic social media agency after their clients found Monday.com difficult to use.',
    problem:
      'The agency was using Monday.com for content management, but their clients found it difficult to use.',
    solution:
      "SetSail was built around the agency's actual workflow so clients could review content, approve work, follow onboarding, and understand what was happening with their social media.",
    contribution:
      'I handled the project from planning and product structure through frontend, backend, authentication, database security, testing, and deployment.',
    clientExperience: [
      'Today dashboard',
      'Upcoming content',
      'Content approvals',
      'Social health KPIs',
      'Lifecycle status',
      'Onboarding',
      'Notifications',
    ],
    agencyExperience: [
      'Content management',
      'Reporting',
      'Intake',
      'Client updates',
      'Client status',
      'Task visibility',
    ],
    stack: [
      {
        label: 'Application',
        items: ['React', 'TypeScript', 'Vite'],
      },
      {
        label: 'Data and security',
        items: [
          'Supabase',
          'PostgreSQL',
          'Supabase Auth',
          'Row Level Security',
          'Supabase Storage',
          'RPC / PostgreSQL functions',
        ],
      },
      {
        label: 'Services and delivery',
        items: ['Supabase Edge Functions', 'Deno', 'Vercel', 'GitHub'],
      },
    ],
  },
}

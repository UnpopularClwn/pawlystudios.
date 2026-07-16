export const PROJECTS = [
  {
    slug: 'social-media-content',
    tag: 'Social Media, Graphic Design, Content Strategy',
    title: 'Social Media for 30+ Clients',
    summary:
      'I did not just post graphics. I built the entire workflow from zero. Strategy, content pillars, graphic design, scheduling, posting, reporting. Then I built the SOPs and approval process so a team could run it consistently across 30 to 40 clients without things falling apart.',
    delivered: [
      'Content strategy and pillars',
      'Graphic design and short-form video',
      'Scheduling and publishing',
      'Monthly reporting',
      'SOPs and an approval process the team still runs on',
    ],
    tools: ['Content strategy', 'Graphic design', 'Scheduling', 'Reporting'],
    media: [
      { src: '/images/social-graphic-01-feeling-stuck.jpeg', alt: 'Social media graphic: Feeling stuck even when you are fully booked' },
      { src: '/images/social-graphic-04-emotional-selling.jpeg', alt: 'Social media graphic: The emotional side of selling a home, for ACE HomeBuyers' },
      { src: '/images/social-graphic-06-build-a-funnel.jpeg', alt: 'Social media graphic: Build a funnel that books' },
      { src: '/images/social-graphic-11-cash-vs-listing.jpeg', alt: 'Social media graphic: Cash vs listing comparison, for ACE HomeBuyers' },
      { src: '/images/social-graphic-13-signs-time-to-sell.jpeg', alt: 'Social media graphic: 3 signs it is time to sell, for ACE HomeBuyers' },
      { src: '/images/social-graphic-09-turn-1-job-into-5.jpeg', alt: 'Social media graphic: Turn 1 job into 5' },
    ],
    links: [],
  },
  {
    slug: 'set-sail-client-portal',
    tag: 'Web App, React, Supabase, AI-Built, Client Portal',
    title: 'Set Sail — Replaced Monday.com',
    summary:
      'The team was using Monday.com. Clients hated it. It was confusing, approvals took forever, and nobody wanted to log in.',
    // "It is live" softened to "live and in testing" — no confirmed production status or
    // screenshots exist in the project yet. See docs/content-claims.md.
    extra:
      'So I built something else. A portal where clients swipe to approve or request changes. Reports generate automatically. The team tracks tasks and workload in one place. Built it with Claude Code, React, and Supabase. Live and in testing.',
    delivered: [
      'Swipe to approve or request changes',
      'Reports that generate automatically',
      'Task tracking and team workload in one place',
    ],
    tools: ['React', 'Supabase', 'Vercel', 'Claude Code'],
    media: [],
    mediaPlaceholder:
      'NEEDS YOUR INPUT: add real Set Sail screenshots (approval interface, dashboard, reporting view) or a short screen recording.',
    links: [{ label: 'View Live', url: null, note: 'NEEDS YOUR INPUT: confirm the live/testing URL to link here' }],
  },
]

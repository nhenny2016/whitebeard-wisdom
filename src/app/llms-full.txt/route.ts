import {
  aboutValues,
  approachPillars,
  bioSpotlight,
  bioTimeline,
  coachingFormats,
  coachingSupportAreas,
  contactPaths,
  faqs,
  freeGuide,
  gettingStartedSteps,
  outcomes,
  painPoints,
  signaturePrograms,
  siteConfig,
  stats,
  testimonials,
  wisdomArticles,
  workshopFormats,
  workshopTopics,
} from "@/lib/site";

const fullBrief = `# Whitebeard Wisdom — Full LLM Brief

## Brand

- Name: ${siteConfig.name}
- Legal: ${siteConfig.legalName}
- Slogan: ${siteConfig.slogan}
- Tagline: ${siteConfig.tagline}
- Mission: ${siteConfig.mission}
- Email: ${siteConfig.email}
- Phone: ${siteConfig.phone}
- URL: ${siteConfig.url}

## Coach

- Name: ${siteConfig.coach.name}
- Title: ${siteConfig.coach.title}
- Bio: ${siteConfig.coach.bio}
- Bio source: ${siteConfig.coach.bioSource}
- Advice: ${siteConfig.coach.advice}

## Bio timeline

${bioTimeline.map((item) => `- **${item.era} — ${item.title}**: ${item.description}`).join("\n")}

- Credentials: ${siteConfig.coach.credentials.join("; ")}

## Alumni spotlight highlights

${bioSpotlight.map((item) => `- **${item.question}**: ${item.answer}`).join("\n")}

## Stats

${stats.map((s) => `- ${s.value} ${s.label}`).join("\n")}

## Pain points addressed

${painPoints.map((p) => `- ${p.label}`).join("\n")}

## Approach pillars

${approachPillars.map((p) => `- **${p.title}**: ${p.description}`).join("\n")}

## Outcomes

${outcomes.map((o) => `- ${o}`).join("\n")}

## Signature programs

${signaturePrograms.map((p) => `- **${p.name}** | ${p.duration} | ${p.price} — ${p.summary}\n  Features: ${p.features.join("; ")}`).join("\n")}

## Coaching support areas

${coachingSupportAreas.map((a) => `- ${a}`).join("\n")}

## Coaching formats

${coachingFormats.map((f) => `- **${f.name}** (${f.length}) — ${f.fit}. ${f.support}`).join("\n")}

## Wisdom articles

${wisdomArticles.map((a) => `- **${a.title}** (${a.category}, ${a.date}): ${a.excerpt}`).join("\n")}

## Workshop topics

${workshopTopics.map((t) => `- ${t}`).join("\n")}

## Workshop formats

${workshopFormats.map((f) => `- ${f}`).join("\n")}

## About values

${aboutValues.map((v) => `- **${v.title}**: ${v.description}`).join("\n")}

## Contact paths

${contactPaths.map((p) => `- **${p.title}**: ${p.description}`).join("\n")}

## Getting started

${gettingStartedSteps.map((s) => `- ${s.step} **${s.title}**: ${s.description}`).join("\n")}

## Testimonials

${testimonials.map((t) => `- "${t.quote}" — ${t.author}, ${t.role}`).join("\n")}

## Free guide

${freeGuide.title}
${freeGuide.subtitle}
${freeGuide.bullets.map((b) => `- ${b}`).join("\n")}

## FAQ

${faqs.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}
`;

export function GET() {
  return new Response(fullBrief, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

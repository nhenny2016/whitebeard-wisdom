import { faqs, signaturePrograms, siteConfig, wisdomArticles } from "@/lib/site";

const brief = `# Whitebeard Wisdom

> ${siteConfig.slogan} — ${siteConfig.tagline}

${siteConfig.description}

## Contact

- Website: ${siteConfig.url}
- Email: ${siteConfig.email}
- Phone: ${siteConfig.phone}
- Coach: ${siteConfig.coach.name}, ${siteConfig.coach.title}
- Instagram: ${siteConfig.social.instagram}
- LinkedIn: ${siteConfig.social.linkedin}

## Key pages

- [Home](${siteConfig.url}/): Hero, programs, wisdom preview, testimonials, FAQ
- [Coaching](${siteConfig.url}/coaching): 1:1 life coaching, formats, support areas
- [Programs](${siteConfig.url}/programs): CLARITY, DEPTH, LEGACY signature programs
- [Wisdom](${siteConfig.url}/wisdom): Weekly articles on leadership and purpose
- [Workshops](${siteConfig.url}/workshops): Keynotes, workshops, executive retreats
- [About](${siteConfig.url}/about): Rodney Penn bio, timeline, credentials, values
- [Contact](${siteConfig.url}/contact): Wisdom Call booking, inquiry paths

## Signature programs

${signaturePrograms.map((p) => `- **${p.name}** (${p.duration}, ${p.price}): ${p.summary}`).join("\n")}

## Wisdom articles

${wisdomArticles.map((a) => `- **${a.title}** (${a.category}): ${a.excerpt}`).join("\n")}

## FAQ

${faqs.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}
`;

export function GET() {
  return new Response(brief, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

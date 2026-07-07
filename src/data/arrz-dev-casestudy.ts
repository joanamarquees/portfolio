import arrzHome from "../assets/projects/screens/arrz-home.png"
import arrzPixels from "../assets/projects/screens/arrz-pixel-art.png"
import arrzStack from "../assets/projects/screens/arrz-project-stack.png"
import type { CaseStudy } from "./types"

export const arrzDevCaseStudy: CaseStudy = {
	whatItIs:
		"A personal portfolio built for a friend, featuring a pixel-art aesthetic and scroll-driven animations.",
	whoFor:
		"André, as well as the developers, gamers, and connections in his network who check out his work.",
	role: "UX/UI & Frontend (React, GSAP)",
	tools: ["React", "GSAP"],
	timeline: "Apr 2025 – May 2025",
	outcome: null,
	problem:
		"André needed a portfolio that did more than just list his projects. He wanted something that truly represented him as a lover of games and tech. I needed to create something that felt like a personal space, not just a standard resume with links attached.",
	surfaces: null,
	beforeAfter: null,
	decisions: [
		{
			eyebrow: "Decision 01",
			hint: "Committing to a pixel-art identity",
			body: "I wanted the site to genuinely feel like André rather than dropping his content into a generic template. Since he loves games, I chose to build the entire UI around a pixel-art aesthetic using his favorite color, turning his personality into the site's visual language.",
			image: arrzPixels
		},
		{
			eyebrow: "Decision 02",
			hint: "Motion as the through-line",
			body: "To make the portfolio feel alive, I decided to use GSAP for the first time to add scroll-driven animations. Instead of sitting static, the site gains impact and motion as you scroll. It was a technical stretch for me, but I wanted the animations to feel natural and responsive.",
			image: arrzStack
		},
		{
			eyebrow: "Decision 03",
			hint: "Designing for a real person",
			body: "I consciously chose to design for a specific person instead of an abstract user, which really shifted my perspective. Every design choice had to pass the test of 'does this feel like André?' rather than just 'does this look good?' That constraint sharpened all my design decisions.",
			image: arrzHome
		}
	],
	tradeoffs:
		"By designing the site so tightly around one person's taste, I accepted that it wouldn't be reusable as a template. Every piece, from the pixel-art system to the animation timing, was built specifically for André. It was the right call for this brief, but it resulted in a one-off project rather than a scalable system.",
	lessons:
		"Learning GSAP from scratch taught me that motion is a core design decision, not just an effect you bolt onto a finished layout. I realized it needs to be planned alongside the visual identity from the very beginning, otherwise it feels disconnected from how the site communicates."
}

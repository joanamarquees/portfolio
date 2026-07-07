import synqAddPoll from "../assets/projects/screens/synq-add-poll.png"
import decisionAddEvents from "../assets/projects/screens/synq-decisions-add-drawer.png"
import decisionHotPlaces from "../assets/projects/screens/synq-decisions-hot-places.png"
import engageWithStrangers from "../assets/projects/screens/synq-gatherings.png"
import synqHome from "../assets/projects/screens/synq-home.png"
import synqSeeEvent from "../assets/projects/screens/synq-see-event.png"

import type { CaseStudy } from "./types"

export const synqcityCaseStudy: CaseStudy = {
	whatItIs:
		"A real-time, social city-events platform for discovering nearby events, restaurants, hotspots, and gatherings.",
	whoFor: "Everyone looking to explore their city and connect with others.",
	role: "Full UI (Figma) & some frontend (Tailwind)",
	tools: ["Figma", "React", "Tailwind", "React Together", "Croquet"],
	timeline: "24-hour hackathon · HackTogether · Nov 2024",
	outcome: { value: "4th", label: "of 70 participants · HackTogether 2024" },
	problem:
		"The hackathon required us to build on React Together by Multisynq, so whatever we made had to lean on live sync as a core mechanic. I worked in a team of two: my teammate drove the real-time architecture, I led the UI. We picked city discovery: help people step outside their routine and see what's actually happening around them right now, instead of scrolling a static listings page. 24 hours to get from that idea to a working product.",
	surfaces: null,
	beforeAfter: null,
	decisions: [
		{
			eyebrow: "Decision 01",
			hint: "Log what's happening, however it happens",
			body: "For sharing something in real time, we decided not to lock people into one format. A post could be plain text, a poll, a photo, or audio, allowing users to capture what was actually happening around them the fastest.",
			image: decisionAddEvents
		},
		{
			eyebrow: "Decision 02",
			hint: "Add a map, to show crowd not just location",
			body: "We chose to add a map view on top of the list, because the idea wasn't just to show where an event was, it was to show how crowded it was. Fire icons grow with how many people shared the same event, so 'hot places' are visible at a glance.",
			image: decisionHotPlaces
		},
		{
			eyebrow: "Decision 03",
			hint: "Filter for what you came to find",
			body: "We let people filter the feed by category: gatherings, events, street artists; so if someone opened the app already looking for something specific, they didn't have to scroll past everything else to find it.",
			image: engageWithStrangers
		}
	],
	screens: [
		{
			src: synqHome,
			aspect: "mobile",
			caption: "Browsing events by category"
		},
		{
			src: synqAddPoll,
			aspect: "mobile",
			caption: "Adding a poll"
		},
		{
			src: synqSeeEvent,
			aspect: "mobile",
			caption: "Event details"
		}
	],
	tradeoffs:
		"Building a full UI in 24 hours meant no room for user testing or exploring alternative directions, every screen was designed once and handed off. I prioritized covering the core flows (browsing events, posting, the live map) over polishing any single screen.",
	lessons:
		"The real lesson was how much a hard time constraint changes the way you design. 24 hours meant iterating fast with no time for polish, and it meant we sometimes designed features we already knew wouldn't get built."
}

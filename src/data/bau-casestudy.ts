import bauPoster from "../assets/projects/screens/bau-event-poster.png"
import discoverySnapshot from "../assets/projects/screens/bau-home-discovery.png"
import bauLogin from "../assets/projects/screens/bau-login.png"
import bauMap from "../assets/projects/screens/bau-map.png"
import bauPost from "../assets/projects/screens/bau-post.png"
import storeSnapshot from "../assets/projects/screens/bau-profile-tabs.png"
import buyTicket from "../assets/projects/screens/bau-ticket-buy.png"
import type { CaseStudy } from "./types"

export const bauCaseStudy: CaseStudy = {
	whatItIs:
		"A social app for artists: a single place to showcase their work, sell it and manage tickets for their own events.",
	whoFor:
		"Underground creative minds who currently have to stitch their presence together across multiple platforms.",
	role: "UX/UI design",
	tools: ["Figma"],
	timeline: "Mar 2025 - Apr 2025",
	outcome: null,
	problem:
		"Artists working across mediums like crochet, music, handmade jewelry, and pottery don't have a unified platform for their practice. Right now, they rely on Pinterest for visibility, Instagram to build an audience, and separate platforms for ticketing. I wanted to design a single space that treats all these elements as one cohesive practice.",
	surfaces: null,
	beforeAfter: null,
	decisions: [
		{
			eyebrow: "Decision 01",
			hint: "One profile, three jobs",
			body: "I decided that Baú needed to handle showcasing, selling, and ticketing under a single artist profile. I strongly believe artists shouldn't have to juggle multiple apps just to manage different parts of their work. This meant I had to design a profile structure flexible enough to support all three behaviors without any of them feeling bolted on as an afterthought.",
			image: storeSnapshot
		},
		{
			eyebrow: "Decision 02",
			hint: "A place for discovery not addition",
			body: "I decided that the home page should not be overwhelming or hold a infinite scroll, we choose it to held the bough tickets, say what was next on the users agenda and show some underground artists they may like. If they wanted to just see infinite art work from their artist, they should go to the discovery page and there scroll, or search for an artist",
			image: discoverySnapshot
		},
		{
			eyebrow: "Decision 03",
			hint: "Built-in events and ticketing",
			body: "I made ticketing a core part of the platform, rather than forcing artists to use external links. This benefits fans too: every ticket they buy across different artists lives in one place. For the first pass, I decided to focus entirely on the buyer's side—browsing an event and buying a ticket—because validating that fans would actually use a single app for their tickets felt more urgent than building out the creator's management tools.",
			image: buyTicket
		},
		{
			eyebrow: "Decision 04",
			hint: "A gig-poster look, not a neutral UI",
			body: "Because this was for artists, I let go of the neutral, I'd normally default to and leaned into something closer to a concert poster: a dark canvas, one loud purple as the only accent, and oversized display type on event announcements instead of a standard event card.",
			image: bauPoster
		}
	],
	screens: [
		{ src: bauMap, aspect: "mobile", caption: "Map view of saved events" },
		{ src: bauPost, aspect: "mobile", caption: "Post view" },
		{ src: bauLogin, aspect: "mobile", caption: "Login / sign up" }
	],
	tradeoffs:
		"By building for three distinct behaviors (showcasing, selling, and ticketing) inside one app, I accepted that none of them would get the deep feature set of a dedicated single-purpose app. I intentionally prioritized breadth over depth to see if users would value a unified ecosystem. Baú also never left Figma. Some flows are incomplete or don't fully hold together, which comes with the territory of using a project mainly to explore a much more expressive visual direction.",
	lessons:
		"I learned that having ambition without a clear wedge to get people in the door is risky. Asking artists and fans to abandon their habits on Instagram, Pinterest, and ticketing sites all at once was a huge ask. If I did this again, I'd validate a narrower slice of the app with real artists first, letting the rest of the product earn its way in."
}

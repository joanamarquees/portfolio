import businessAfter from "../assets/projects/screens/eec-business-after.png"
import businessBefore from "../assets/projects/screens/eec-business-before.png"
import businessReviews from "../assets/projects/screens/eec-business-reviews.png"
import businessStats from "../assets/projects/screens/eec-business-stats.png"
import customerBusinessPage from "../assets/projects/screens/eec-customer-business-page.png"
import customerBusinessPageScrolled from "../assets/projects/screens/eec-customer-business-scroll.png"
import mapDiscovery from "../assets/projects/screens/eec-map-first.png"
import twoSides from "../assets/projects/screens/eec-two-audiences.png"

import type { CaseStudy } from "./types"

export const escolheECalaCaseStudy: CaseStudy = {
	whatItIs:
		"A two-sided restaurant and food-business discovery platform. It features a customer app with map-based search and filters, plus a dashboard for businesses to manage their presence.",
	whoFor:
		"Small food-business owners chasing visibility without much time or tech skills, and anyone who wants to find a great place to eat or work without the guesswork.",
	role: "UX/UI design (Figma) & frontend (Next.js)",
	tools: ["Figma", "Next.js", "React", "TypeScript"],
	timeline: "Nov 2025 – present",
	outcome: null,
	problem:
		"Escolhe e Cala is a side project I've been building with a friend. We like to think of it as a mix between Google Maps and TripAdvisor, but built around much more specific filters: Does this place have plugs? Is it pet-friendly? Can I actually work from there? The idea came from two everyday frustrations we kept hearing about. First: people working in offices surrounded by restaurants had no easy way to know which one had the daily lunch special they wanted. Second: digital nomads needed to know if a place had Wi-Fi, plugs, and air conditioning before showing up. Existing map apps could point them to a location, but couldn't answer these highly specific questions.",
	surfaces: [
		{
			name: "Customer app",
			note: "Location-based discovery with both map and list views, heavily filtered by price, food type, facilities and much more. We built it specifically for the moment someone is deciding where to go right now."
		},
		{
			name: "Business dashboard",
			note: "A stats-first home screen focused on engagement and growth, keeping day-to-day admin work in its own space instead of the main view."
		}
	],
	beforeAfter: {
		before: {
			src: businessBefore,
			aspect: "auto",
			caption:
				"The original Home Screen with everything crammed together (occupancy, chat, profile, menu, reviews)"
		},
		after: {
			src: businessAfter,
			aspect: "auto",
			caption: "The dashboard-first redesign, putting stats and growth up front"
		},
		whatChanged:
			"Our original dashboard crammed everything together on one screen, which made it overwhelming for business owners to focus on what actually mattered. For the redesign, we chose to lead with stats and growth metrics, shifting all the necessary but infrequent tasks, like editing the menu or replying to reviews, into their own dedicated pages."
	},
	decisions: [
		{
			eyebrow: "Decision 01",
			hint: "Designing for two audiences at once",
			body: "We quickly realized that Escolhe e Cala only works if both sides show up: diners need enough businesses on the map, and businesses only update their info if it brings them customers. So, we made the choice to treat this as two distinct products sharing one database: a discovery app for customers, and a lightweight management tool for businesses.",
			image: twoSides
		},
		{
			eyebrow: "Decision 02",
			hint: "A map-first approach to discovery",
			body: "While users can still browse a list, we decided to build the core experience around a map. A highly rated restaurant 100km away isn't useful unless someone specifically asks for that range, so we scoped results tightly to the user's immediate area. We also made the filters go deep: if you have a peanut allergy, you need to confidently rule places out, not just sort them.",
			image: mapDiscovery
		},
		{
			eyebrow: "Decision 03",
			hint: "A dashboard that leads with stats, not admin",
			body: "After sitting with small business owners for a day, we saw how little spare time and tech patience they actually had. A screen demanding constant attention just wasn't going to work for them. That's the insight that drove the full dashboard rebuild you can see in the before/after above.",
			image: businessStats
		}
	],
	screens: [
		{ src: customerBusinessPage, aspect: "mobile", caption: "Customer view of business page" },
		{
			src: customerBusinessPageScrolled,
			aspect: "mobile",
			caption: "Customer view of business page scrolled"
		},
		{ src: businessReviews, aspect: "mobile", caption: "Business reviews" }
	],
	tradeoffs:
		"Since this is a side project we've been balancing with other work, we had to accept that progress would be interrupted. We chose to push the design and frontend to completion first rather than rushing a half-baked version live, which means the backend is still catching up.",
	lessons:
		"Rebuilding the dashboard taught me a tough lesson: more features on one screen isn't the same as a better tool. My first version handed business owners everything at once because it all seemed useful on paper. I just hadn't accounted for how little time they actually had to engage with it."
}

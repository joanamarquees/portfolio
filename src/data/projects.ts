//projects images
import bau from "../assets/projects/bau.png"
import escolhe_e_cala from "../assets/projects/escolhe-e-cala.png"
import kashbuddy from "../assets/projects/kashbuddy.png"
import portfolio_andre from "../assets/projects/portfolio-andre.png"
import synqcity from "../assets/projects/synqcity.png"

//case studies
import { arrzDevCaseStudy } from "./arrz-dev-casestudy"
import { bauCaseStudy } from "./bau-casestudy"
import { escolheECalaCaseStudy } from "./escolhe-e-cala-casestudy"
import { kashbuddyCaseStudy } from "./kashbuddy-casestudy"
import { synqcityCaseStudy } from "./synqcity-casestudy"

import type { Project } from "./types"

//projects listed in chronological order
export const projects: Project[] = [
	{
		title: `Escolhe e cala`,
		slug: "escolhe-e-cala",
		status: "(in production)",
		description: `A two-sided platform for discovering restaurants and food businesses. A customer
		app for finding places through map-based search and filters, paired with a dashboard for the
		businesses themselves. UX/UI in Figma with a Next.js frontend.`,
		image: escolhe_e_cala,
		alt: `Escolhe-e-Cala`, //no live URL yet
		link: null,
		slideFrom: "hiddenLeft",
		caseStudy: escolheECalaCaseStudy
	},
	{
		title: `Andre's portfolio`,
		slug: "arrz-dev",
		status: null,
		description: `A custom-built portfolio designed to showcase Andre's skills and projects.
    The goal was to create a sleek and interactive experience that highlights his work in a
    visually unique engaging way. `,
		image: portfolio_andre,
		alt: `Andre's portfolio`,
		link: "https://arrz.tudu.dev/",
		slideFrom: "hiddenRight",
		caseStudy: arrzDevCaseStudy
	},
	{
		title: "BAÚ",
		status: null,
		slug: "bau",
		description: `I'm currently developing a social media platform
      designed to give underground artists more visibility. It will be a space where they can showcase their work,
      share events, sell their art and products, and even offer tickets for their own events.`,
		image: bau,
		alt: "BAU Project",
		link: null, //no live URL
		slideFrom: "hiddenLeft",
		caseStudy: bauCaseStudy
	},
	{
		title: "Kashbuddy",
		slug: "kashbuddy",
		status: null,
		description: `I wanted a better way to keep track of my finances,
      so I built KashBuddy. It helps me monitor my income
      and expenses, categorize transactions, and manage
      finances across multiple bank accounts—all without
      paying for ad-free features and with a UI that suits
      my style.`,
		image: kashbuddy,
		alt: "Kashbuddy Project",
		link: "https://kashbuddy.tudu.dev/",
		slideFrom: "hiddenRight",
		caseStudy: kashbuddyCaseStudy
	},
	{
		title: "Synq City",
		slug: "synqcity",
		status: null,
		description: `For my first hackathon, HackTogether, I teamed
      up with my partner, André Santos, to create SynqCity, a social app designed to connect people. Our goal was
      to encourage users to step out of their comfort zones
      and explore underground events, new restaurants,
      trending hotspots, and social gatherings happening nearby.`,
		image: synqcity,
		alt: "Synq City Project",
		link: null, //no working live URL
		slideFrom: "hiddenLeft",
		caseStudy: synqcityCaseStudy
	}
]

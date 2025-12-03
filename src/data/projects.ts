import synqcity from "../assets/projects/synqcity.svg";
import kashbuddy from "../assets/projects/kashbuddy.svg";
import bau from "../assets/projects/bau.svg";
import portfolio_andre from "../assets/projects/portfolio-andre.svg";

export const projects = [
	{
		title: `Andre's portfolio`,
		status: null,
		description: `A custom-built portfolio designed to showcase Andre's skills and projects.
    The goal was to create a sleek and interactive experience that highlights his work in a
    visually unique engaging way. `,
		image: portfolio_andre,
		alt: `Andre's portfolio`,
		link: "https://arrz.tudu.dev/",
		slideFrom: "hiddenRight",
	},
	{
		title: "BAU",
		status: "(in production)",
		description: `I'm currently developing a social media platform
      designed to give underground artists more visibility. It will be a space where they can showcase their work,
      share events, sell their art and products, and even offer tickets for their own events.`,
		image: bau,
		alt: "BAU Project",
		link: null,
		slideFrom: "hiddenLeft",
	},
	{
		title: "Kashbuddy",
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
	},
	{
		title: "Synced City",
		status: null,
		description: `For my first hackathon, HackTogether, I teamed
      up with my partner, André Santos, to create SynqCity —a social app designed to connect people. Our goal was
      to encourage users to step out of their comfort zones
      and explore underground events, new restaurants,
      trending hotspots, and social gatherings happening nearby.`,
		image: synqcity,
		alt: "Synced City Project",
		link: "https://multisynq-hackathon-frontend.vercel.app/",
		slideFrom: "hiddenLeft",
	},
];

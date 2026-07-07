/** Image slot for a case study. Falls back to a placeholder if `src` isn't set. */
export type Screen = {
	src: string | null
	aspect: "desktop" | "mobile" | "auto"
	caption: string
}

/** A key design decision. */
export type Decision = {
	eyebrow: string
	hint?: string
	body: string
	image: string | null
}

/** TODO: maybe remove A headline stat shown in the hero (e.g. a hackathon placement). */
export type Outcome = {
	value: string
	label: string
}

export type CaseStudy = {
	whatItIs: string
	whoFor: string
	role: string
	tools: string[]
	timeline: string | null
	outcome: Outcome | null
	problem: string
	// Two product surfaces, for two-sided products; null otherwise
	surfaces: { name: string; note: string }[] | null
	// Before / after pair, for redesigns; null otherwise
	beforeAfter: { before: Screen; after: Screen; whatChanged: string } | null
	decisions: Decision[]
	screens?: Screen[]
	// What did I have to give up, work around, or leave for later?
	tradeoffs: string
	// With hindsight, what would I change? What did this teach me?
	lessons: string
}

export type Project = {
	title: string
	slug: string
	status: string | null
	description: string
	image: string
	alt: string
	link: string | null
	slideFrom: "hiddenLeft" | "hiddenRight"
	caseStudy: CaseStudy
}

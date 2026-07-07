/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { FiArrowUpRight } from "react-icons/fi"
import type { Screen } from "../data/types"
import { cn } from "../utils/utils"

/** Shared container width — generous, so wide screens are actually used. */
export const CONTAINER = "w-full px-[clamp(1.25rem,5vw,2.75rem)]"
export const SECTION_MAXW = "max-w-[88rem]"

/** One consistent section wrapper. */
export function CaseStudySection({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<section
			className={cn(
				CONTAINER,
				SECTION_MAXW,
				"flex flex-col py-[clamp(3rem,7vw,4rem)] gap-8 md:gap-10",
				className
			)}
		>
			{children}
		</section>
	)
}

/** Reveal-on-scroll wrapper, mirroring the slide-up motion used on the home page. */
export function RevealOnScroll({
	children,
	delay = 0,
	className
}: {
	children: ReactNode
	delay?: number
	className?: string
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.7, ease: "easeOut", delay }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

/** A small uppercase section label with a leading accent rule. */
export function SectionLabel({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-3 text-[#7b9cea] pb-5">
			<span className="h-px w-8 bg-[#7b9cea]/50" />
			<span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">{text}</span>
		</div>
	)
}

/** A button for linking to a live site. */
export function LiveSiteButton({ href, label }: { href: string; label: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="group inline-flex items-center gap-2 w-fit rounded-full bg-[#7b9cea] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#dae5ff]"
		>
			{label}
			<FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
		</a>
	)
}

/** True when a string is one of the bracketed narrative slots to be filled in. */
export const isTodo = (value: string) => value.trim().startsWith("[TODO")

/** Inline value that renders facts normally and TODO slots as a muted chip. */
export function TodoPlaceholderText({ value, className }: { value: string; className?: string }) {
	if (isTodo(value)) {
		return (
			<span
				className={cn("font-mono text-sm text-[#7b9cea]/80", className)}
				title="Placeholder — fill this in"
			>
				{value}
			</span>
		)
	}
	return <span className={className}>{value}</span>
}

/** A block-level narrative */
export function NarrativeBlock({
	accentText,
	bodyText
}: {
	accentText: string
	bodyText?: string
}) {
	return (
		<div className="flex flex-col gap-2 rounded-xl border border-dashed border-[#7b9cea]/30 bg-[#7b9cea]/[0.04] px-5 py-5">
			<p className="font-mono text-sm leading-relaxed text-[#7b9cea]/80 md:text-base">
				{accentText}
			</p>
			{bodyText && (
				<p className="text-sm md:text-base leading-relaxed tracking-wide text-gray-200">
					{bodyText}
				</p>
			)}
		</div>
	)
}

/** Small helper to group screens by their aspect ratio. */
export function groupByAspect(screens: Screen[]) {
	return screens.reduce<{ aspect: Screen["aspect"]; items: Screen[] }[]>((groups, screen) => {
		const last = groups[groups.length - 1]
		if (last && last.aspect === screen.aspect) {
			last.items.push(screen)
		} else {
			groups.push({ aspect: screen.aspect, items: [screen] })
		}
		return groups
	}, [])
}

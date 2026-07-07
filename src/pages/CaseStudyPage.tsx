import { motion } from "framer-motion"
import { FiArrowDown, FiArrowLeft, FiArrowUpRight } from "react-icons/fi"
import { Link, useParams } from "react-router-dom"

import myAvatar from "../assets/avatar.png"
import {
	CaseStudySection,
	CONTAINER,
	groupByAspect,
	LiveSiteButton,
	NarrativeBlock,
	RevealOnScroll,
	SectionLabel,
	TodoPlaceholderText
} from "../components/case-study-components"
import { ScreenFigure } from "../components/screen-figure"
import { projects } from "../data/projects"
import { cn } from "../utils/utils"

/** Shared container width — generous, so wide screens are actually used. */
const HERO_MAXW = "max-w-[100vw]"

function CaseStudyPage() {
	const { slug } = useParams()
	const projectIndex = projects.findIndex((p) => p.slug === slug)
	const project = projects[projectIndex]

	if (!project) {
		return (
			<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-black px-5 text-center font-sans text-white">
				<p className="text-2xl text-gray-300">This page doesn't exist.</p>
				<Link to="/" className="text-[#7b9cea] transition-colors hover:text-[#3F5CA2]">
					← back to portfolio
				</Link>
			</div>
		)
	}

	const caseStudy = project.caseStudy

	const isFirstProject = projectIndex === 0
	const isLastProject = projectIndex === projects.length - 1
	const previousProject = isFirstProject ? null : projects[projectIndex - 1]
	const nextProject = isLastProject ? null : projects[projectIndex + 1]

	return (
		<div className="flex min-h-svh flex-col items-center overflow-x-hidden bg-black font-sans text-white select-none">
			{/* Slim sticky top bar */}
			<header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-[clamp(1.25rem,5vw,2.75rem)] py-3 backdrop-blur-sm">
				<Link
					to="/"
					className="flex items-center gap-2.5 transition-opacity hover:opacity-80 sm:gap-3"
				>
					<img
						src={myAvatar}
						alt="Joana Marques"
						className="h-9 w-9 object-cover md:h-10 md:w-10"
					/>
					<span className="flex items-center gap-2 text-sm text-gray-200 md:text-base">
						<FiArrowLeft />
						<span className="hidden sm:inline">back to projects</span>
						<span className="sm:hidden">back</span>
					</span>
				</Link>

				{project.link && (
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-1.5 text-sm text-[#7b9cea] transition-colors hover:text-[#3F5CA2] md:text-base"
					>
						<span className="hidden sm:inline">visit live site</span>
						<span className="sm:hidden">live</span> <FiArrowUpRight />
					</a>
				)}
			</header>

			{/* Hero Section */}
			<section className="relative flex min-h-svh w-full items-end justify-center overflow-hidden md:items-center">
				<motion.div
					initial={{ opacity: 0, scale: 1.03 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.1, ease: "easeOut" }}
					className="pointer-events-none absolute inset-0"
				>
					<img
						src={project.image}
						alt={project.alt}
						className="absolute inset-0 px-5 h-full w-full object-contain object-top pt-20 md:left-auto md:right-0 md:w-[64%] md:object-right md:p-5 lg:w-[60%]"
					/>
					{/* Left-to-right gradient */}
					<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black to-transparent md:via-black/60 md:to-transparent" />
					{/* Top + bottom gradient */}
					<div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-black/10 via-transparent to-black/10 md:from-black/70 md:via-transparent md:to-black" />
				</motion.div>
				{/* Foreground content */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
					className={cn(
						"relative flex flex-col gap-6 pb-16 pt-0 md:pt-32 md:pb-24",
						CONTAINER,
						HERO_MAXW
					)}
				>
					<div className="flex max-w-2xl flex-col gap-6">
						<div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
							<span className="font-semibold uppercase tracking-[0.2em] text-[#7b9cea]">
								Case study
							</span>
							{project.status && (
								<span className="animate-pulse text-green-200">{project.status}</span>
							)}
						</div>

						<h1 className="bg-gradient-to-r from-[#dae5ff] via-[#7b9cea] to-[#dae5ff] bg-clip-text text-[clamp(2.75rem,8vw,6rem)] font-bold leading-none pb-1.5 text-transparent ">
							{project.title}
						</h1>

						<p className="max-w-xl text-[clamp(1.0625rem,2.2vw,1.375rem)] leading-relaxed text-gray-200">
							{caseStudy.whatItIs}
						</p>

						<div className="flex flex-col gap-2 text-base text-gray-300 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
							<span>
								<span className="text-gray-500">Role · </span>
								{caseStudy.role}
							</span>
							<span>
								<span className="text-gray-500">Timeline · </span>
								<TodoPlaceholderText value={caseStudy.timeline ?? "[TODO: timeline]"} />
							</span>
						</div>

						{project.link && <LiveSiteButton href={project.link} label="Visit live site" />}
					</div>
				</motion.div>
				{/* Scroll cue */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.8 }}
					className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-gray-400 sm:flex"
				>
					<span className="text-xs uppercase tracking-[0.2em]">scroll</span>
					<FiArrowDown className="animate-bounce" />
				</motion.div>
			</section>

			{/* Outcome banner (only when there's a hard number) */}
			{caseStudy.outcome && (
				<section className="flex w-full justify-center border-y border-[#7b9cea]/25 bg-gradient-to-b from-[#7b9cea]/[0.07] to-transparent">
					<div
						className={cn(
							"flex flex-col items-center gap-3 py-[clamp(3rem,7vw,5rem)] text-center sm:flex-row sm:justify-center sm:gap-8 md:gap-10",
							CONTAINER,
							HERO_MAXW
						)}
					>
						<span className="bg-gradient-to-r from-[#dae5ff] via-[#7b9cea] to-[#3f5ca2] bg-clip-text text-[clamp(3.25rem,9vw,5.5rem)] font-bold leading-none text-transparent">
							{caseStudy.outcome.value}
						</span>
						<span className="max-w-sm text-lg text-gray-300 sm:text-left md:text-xl">
							{caseStudy.outcome.label}
						</span>
					</div>
				</section>
			)}

			{/*  Overview */}
			<CaseStudySection>
				<RevealOnScroll>
					<SectionLabel text="Overview" />

					<dl className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{ label: "What it is", value: <TodoPlaceholderText value={caseStudy.whatItIs} /> },
							{ label: "Who it's for", value: <TodoPlaceholderText value={caseStudy.whoFor} /> },
							{ label: "My role", value: <TodoPlaceholderText value={caseStudy.role} /> }
						].map(({ label, value }) => (
							<div key={label} className="flex flex-col gap-2 border-t border-white/15 pt-4">
								<dt className="text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
									{label}
								</dt>
								<dd className="leading-relaxed text-gray-300">{value}</dd>
							</div>
						))}

						<div className="flex flex-col gap-3 border-t border-white/15 pt-4">
							<dt className="text-xs uppercase tracking-wider text-gray-500 sm:text-sm">Tools</dt>
							<dd className="flex flex-wrap gap-2">
								{caseStudy.tools.map((tool) => (
									<span
										key={tool}
										className="rounded-lg bg-[#7b9cea]/25 px-3 py-1.5 text-sm text-[#7b9cea]"
									>
										{tool}
									</span>
								))}
							</dd>
						</div>
					</dl>
				</RevealOnScroll>
			</CaseStudySection>

			{/*  Problem / context */}
			<CaseStudySection>
				<RevealOnScroll>
					<SectionLabel text="Problem / context" />
					<p className="text-[clamp(1.0625rem,2.2vw,1.375rem)] leading-relaxed tracking-wide font-light text-gray-200">
						{caseStudy.problem}
					</p>
				</RevealOnScroll>
			</CaseStudySection>

			{/*  Two-sided projects */}
			{caseStudy.surfaces && (
				<CaseStudySection>
					<RevealOnScroll>
						<SectionLabel text="Two sides, one product" />
					</RevealOnScroll>
					<div className="grid gap-6 md:grid-cols-2">
						{caseStudy.surfaces.map((surface) => (
							<RevealOnScroll key={surface.name}>
								<div className="flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8">
									<h3 className="text-[clamp(1.375rem,3vw,1.75rem)] font-semibold text-[#7b9cea]">
										{surface.name}
									</h3>
									<NarrativeBlock accentText={surface.note} />
								</div>
							</RevealOnScroll>
						))}
					</div>
				</CaseStudySection>
			)}

			{/*  Key design decisions */}
			<CaseStudySection>
				<RevealOnScroll>
					<SectionLabel text="Key design decisions" />
				</RevealOnScroll>

				<div className="flex flex-col gap-6 md:gap-16">
					{caseStudy.decisions.map((decision, decisionIndex) => {
						const isFlipped = decisionIndex % 2 === 1

						return (
							<RevealOnScroll
								key={decision.eyebrow}
								className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full"
							>
								<div className={cn("flex flex-1 flex-col gap-4 w-full", isFlipped && "md:order-2")}>
									<span className="bg-gradient-to-r from-[#dae5ff] via-[#3f5ca2] to-[#7b9cea] bg-clip-text text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-none text-transparent">
										{String(decisionIndex + 1).padStart(2, "0")}
									</span>
									{decision.hint && (
										<h3 className="text-[clamp(1.375rem,3vw,1.875rem)] font-semibold leading-snug text-white">
											{decision.hint}
										</h3>
									)}

									<NarrativeBlock accentText={decision.body} />
								</div>
								<div className={cn("w-full md:w-auto md:max-w-1/2", isFlipped ? "md:order-1" : "")}>
									<div className="flex items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] overflow-hidden p-2 sm:p-4">
										{decision.image ? (
											<img
												src={decision.image}
												alt={decision.eyebrow}
												className="max-h-[500px] md:max-h-[600px] max-w-full md:max-w-[45vw] lg:max-w-[40vw] object-contain rounded-lg"
											/>
										) : (
											<span className="font-mono text-xs text-gray-500 py-10 px-16">
												Image placeholder
											</span>
										)}
									</div>
								</div>
							</RevealOnScroll>
						)
					})}
				</div>
			</CaseStudySection>

			{/*  Before / after (redesigns only) */}
			{caseStudy.beforeAfter && (
				<CaseStudySection>
					<RevealOnScroll>
						<SectionLabel text="Before / after" />
					</RevealOnScroll>
					<div className="grid gap-8 md:grid-cols-2">
						<RevealOnScroll className="flex flex-col gap-3">
							<span className="text-sm uppercase tracking-wider text-gray-500">Before</span>
							<ScreenFigure screen={caseStudy.beforeAfter.before} index={0} />
						</RevealOnScroll>
						<RevealOnScroll delay={0.1} className="flex flex-col gap-3">
							<span className="text-sm uppercase tracking-wider text-[#7b9cea]">After</span>
							<ScreenFigure screen={caseStudy.beforeAfter.after} index={1} />
						</RevealOnScroll>
					</div>
					<RevealOnScroll>
						<NarrativeBlock
							accentText="what changed and why"
							bodyText={caseStudy.beforeAfter.whatChanged}
						/>
					</RevealOnScroll>
				</CaseStudySection>
			)}

			{/* ---------------------------------------------------------------- */}
			{/*  Selected screens                                                */}
			{/* ---------------------------------------------------------------- */}
			{caseStudy.screens && (
				<CaseStudySection>
					<RevealOnScroll>
						<SectionLabel text="Selected screens" />
						<h1 className="leading-relaxed text-gray-300">Here are some of the other screens</h1>
					</RevealOnScroll>
					{groupByAspect(caseStudy.screens).map((group, groupIndex) => (
						<div
							key={groupIndex}
							className={`grid gap-10 ${
								group.aspect === "mobile"
									? " grid-cols-2 md:grid-cols-3"
									: "grid-cols-1 md:grid-cols-2"
							}`}
						>
							{group.items.map((screen, screenIndex) => (
								<RevealOnScroll
									key={`${screen.caption}-${screenIndex}`}
									delay={(screenIndex % 2) * 0.1}
								>
									<ScreenFigure screen={screen} index={screenIndex} />
								</RevealOnScroll>
							))}
						</div>
					))}
				</CaseStudySection>
			)}

			{/*  Tradeoffs & Lessons */}
			<CaseStudySection>
				<div className="grid gap-12 md:grid-cols-2 md:gap-14">
					{/* Tradeoffs */}
					<RevealOnScroll className="flex flex-col gap-5">
						<SectionLabel text="Tradeoffs &amp; constraints" />
						<p className="text-sm md:text-base leading-relaxed tracking-wide text-gray-200">
							{caseStudy.tradeoffs}
						</p>
					</RevealOnScroll>

					{/* Lessons */}
					<RevealOnScroll delay={0.1} className="flex flex-col gap-5">
						<SectionLabel text="What I learned / would do differently" />
						<p className="text-sm md:text-base leading-relaxed tracking-wide text-gray-200">
							{caseStudy.lessons}
						</p>
					</RevealOnScroll>
				</div>
			</CaseStudySection>

			{/* Footer */}
			<CaseStudySection className="gap-12 md:gap-16 pb-10 sm:pb-20">
				{project.link && (
					<RevealOnScroll>
						<div className="flex flex-col items-center gap-6 rounded-2xl border border-white/15 bg-gradient-to-b from-[#7b9cea]/[0.07] to-transparent px-6 py-[clamp(2.75rem,6vw,3.5rem)] text-center">
							<h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold">See it for yourself</h2>
							<LiveSiteButton href={project.link} label={`Visit ${project.title}`} />
						</div>
					</RevealOnScroll>
				)}

				<div className="flex items-center justify-between border-t border-white/15 pt-8">
					{previousProject ? (
						<Link
							to={`/work/${previousProject.slug}`}
							className="group flex items-center gap-2 text-[#7b9cea] transition-colors hover:text-[#3F5CA2]"
						>
							<span className="transition-transform duration-300 group-hover:-translate-x-1">
								←
							</span>
							<span className="text-gray-500">previous</span> {previousProject.title}
						</Link>
					) : (
						<span className="h-2 w-2" />
					)}

					{nextProject ? (
						<Link
							to={`/work/${nextProject.slug}`}
							className="group flex items-center gap-2 text-[#7b9cea] transition-colors hover:text-[#3F5CA2] text-nowrap"
						>
							<span className="text-gray-500">next</span>
							{nextProject.title}
							<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
						</Link>
					) : (
						<span className="h-2 w-2" />
					)}
				</div>
			</CaseStudySection>
		</div>
	)
}

export default CaseStudyPage

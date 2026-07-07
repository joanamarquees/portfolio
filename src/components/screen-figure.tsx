import type { Screen } from "../data/types"
import { cn } from "../utils/utils"
import { isTodo, TodoPlaceholderText } from "./case-study-components"

const ASPECT_RATIO = {
	tall: "aspect-[9/19]",
	wide: "aspect-[16/10]"
} as const

/** Shared chrome shared by both frame variants. */
const FRAME_SURFACE = "overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/40"

/** A screen rendered inside a browser or phone frame, with a caption slot. */
export function ScreenFigure({ screen, index }: { screen: Screen; index: number }) {
	const figureLabel = `Fig.${String(index + 1).padStart(2, "0")}`

	const media = screen.src ? (
		<img
			src={screen.src}
			alt={isTodo(screen.caption) ? `${figureLabel} screen` : screen.caption}
			className={cn(
				"w-full",
				screen.aspect === "auto"
					? "h-auto object-contain rounded-xl"
					: "h-full object-cover object-top"
			)}
		/>
	) : (
		<div className="flex h-full w-full items-center justify-center bg-[#7b9cea]/[0.04]">
			<span className="font-mono text-xs text-[#7b9cea]/70">[MISSING: screen]</span>
		</div>
	)

	return (
		<figure className="flex flex-col gap-3">
			{/* Screen */}
			{screen.aspect === "auto" ? (
				<div className="w-full border border-dashed border-white/15 bg-white/[0.03] rounded-xl p-5">
					{media}
				</div>
			) : screen.aspect === "mobile" ? (
				<div
					className={cn(
						FRAME_SURFACE,
						"w-full max-w-[16rem] self-center rounded-[2rem] p-2 sm:max-w-[18rem]"
					)}
				>
					<div className={cn(ASPECT_RATIO.tall, "overflow-hidden rounded-[1.5rem]")}>{media}</div>
				</div>
			) : (
				<div className={cn(FRAME_SURFACE, "rounded-xl")}>
					<div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
						{[0, 1, 2].map((dot) => (
							<span key={dot} className="h-2.5 w-2.5 rounded-full bg-white/20" />
						))}
					</div>
					<div className={cn(ASPECT_RATIO.wide, "overflow-hidden")}>{media}</div>
				</div>
			)}

			{/* Caption */}
			<figcaption className="flex items-start gap-2 text-sm leading-relaxed text-gray-500">
				<span className="shrink-0 font-mono text-[#7b9cea]/60">{figureLabel}</span>
				<TodoPlaceholderText value={screen.caption} />
			</figcaption>
		</figure>
	)
}

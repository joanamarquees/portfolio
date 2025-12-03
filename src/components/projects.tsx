import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

import { IoClose } from "react-icons/io5";

export default function Projects() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [showAllProjects, setShowAllProjects] = useState(false);

	const projectLinks: Record<string, string> = {
		"/src/assets/projects/kashbuddy.svg": "https://kashbuddy.vercel.app/",
		"/src/assets/projects/synqcity.svg":
			"https://multisynq-hackathon-frontend.vercel.app/",
		"/src/assets/projects/portfolio-andre.svg": "https://arrz.tudu.dev/",
		// Add more project links as needed
	};

	const handleModalImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
		e.stopPropagation();
		if (selectedImage && projectLinks[selectedImage]) {
			window.open(projectLinks[selectedImage], "_blank");
		}
	};

	const slideVariants = {
		hiddenLeft: { x: "-100%", opacity: 0 },
		hiddenRight: { x: "100%", opacity: 0 },
		visible: { x: "0%", opacity: 1 },
	};

	useEffect(() => {
		if (selectedImage) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [selectedImage]);

	const ProjectItem = ({ project }: { project: (typeof projects)[0] }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: false });
		const isLeft = project.slideFrom === "hiddenRight";

		return (
			<motion.div
				key={project.title}
				ref={ref}
				initial={project.slideFrom}
				animate={isInView ? "visible" : project.slideFrom}
				variants={slideVariants}
				transition={{ duration: 0.9, ease: "easeOut" }}
				className="relative flex flex-col md:flex-row items-center gap-8"
			>
				{isLeft ? (
					<>
						<div className="text-center md:text-left w-full md:w-1/2 order-2">
							{project.link ? (
								<a
									href={project.link}
									className="text-4xl font-semibold text-[#7b9cea]"
								>
									{project.title}
								</a>
							) : (
								<h1 className="text-4xl font-semibold text-[#7b9cea]">
									{project.title}
								</h1>
							)}
							{project.status && (
								<p className="animate-pulse text-green-200">{project.status}</p>
							)}
							<p className="text-lg text-gray-400 mt-2">
								{project.description}
							</p>
						</div>
						<div className="w-6 h-6 rounded-full bg-transparent lg:bg-white hidden md:block absolute left-1/2 -translate-x-1/2"></div>
						<div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-none">
							<img
								src={project.image}
								alt={project.alt}
								className="w-full h-60 md:h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
								onClick={() => setSelectedImage(project.image)}
							/>
						</div>
					</>
				) : (
					<>
						<div className="text-center md:text-right w-full md:w-1/2 order-2 md:order-none">
							{project.link ? (
								<a
									href={project.link}
									className="text-4xl font-semibold text-[#7b9cea]"
								>
									{project.title}
								</a>
							) : (
								<h1 className="text-4xl font-semibold text-[#7b9cea]">
									{project.title}
								</h1>
							)}
							{project.status && (
								<p className="animate-pulse text-green-200">{project.status}</p>
							)}
							<p className="text-lg text-gray-400 mt-2">
								{project.description}
							</p>
						</div>
						<div className="w-6 h-6 rounded-full bg-transparent lg:bg-white hidden md:block absolute left-1/2 -translate-x-1/2"></div>
						<div className="w-full md:w-1/2 flex justify-center items-center order-1">
							<img
								src={project.image}
								alt={project.alt}
								className="w-full h-60 md:h-80 object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
								onClick={() => setSelectedImage(project.image)}
							/>
						</div>
					</>
				)}
			</motion.div>
		);
	};

	return (
		<section
			id="projects"
			className="min-h-screen pt-[15vh] md:pt-[22vh] px-5 md:px-20 pb-20 overflow-x-hidden"
		>
			<div className="relative flex justify-center">
				<div className="absolute h-full w-[3px] bg-transparent lg:bg-white/20"></div>
				<div className="flex flex-col w-full gap-16">
					{/* Always show the first 3 projects */}
					{projects.slice(0, 3).map((project) => (
						<ProjectItem key={project.title} project={project} />
					))}

					{/* Conditionally show the rest only when toggled */}
					{showAllProjects &&
						projects
							.slice(3)
							.map((project) => (
								<ProjectItem key={project.title} project={project} />
							))}

					{/* Fade Overlay */}
					{!showAllProjects && (
						<div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
					)}

					{/* Toggle button */}
					<div className="text-center mt-4 relative z-10">
						<button
							onClick={() => setShowAllProjects(!showAllProjects)}
							className="text-blue-400 hover:text-blue-200 transition mt-4 text-lg"
						>
							{showAllProjects ? "show less" : "show more"}
						</button>
					</div>
				</div>
			</div>

			{/* Image Modal */}
			<AnimatePresence mode="wait">
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						onClick={() => setSelectedImage(null)}
						className="max-w-screen max-h-screen fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
					>
						<IoClose
							onClick={(e) => {
								e.stopPropagation();
								setSelectedImage(null);
							}}
							className="absolute top-5 right-5 text-white hover:text-red-400 z-50 cursor-pointer"
							size={48}
							aria-label="Close image preview"
						/>

						<motion.img
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{
								duration: 0.5,
								ease: [0.16, 1, 0.3, 1],
								opacity: { duration: 0.2 },
							}}
							src={selectedImage}
							alt="Project Preview"
							className={`max-w-[80vw] h-full object-contain rounded-lg ${
								projectLinks[selectedImage] ? "cursor-pointer" : ""
							}`}
							onClick={handleModalImageClick}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}

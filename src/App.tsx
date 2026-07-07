import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import LandingPage from "./pages/LandingPage"

import "./App.css"
import "./styles/marquee.css"

/**
 * Resets the scroll position to the top whenever the route changes, so opening
 * a case study starts at the hero instead of inheriting the landing scroll.
 */
function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<LandingPage />} />
			</Routes>
		</>
	)
}

export default App

import accountsPage from "../assets/projects/screens/kashbuddy-accounts.png"
import categoriesDrawer from "../assets/projects/screens/kashbuddy-add-category.png"
import transactionDrawer from "../assets/projects/screens/kashbuddy-add-transaction.png"
import kashbuddyAfter from "../assets/projects/screens/kashbuddy-after.png"
import kashbuddyBefore from "../assets/projects/screens/kashbuddy-before.png"
import type { CaseStudy } from "./types"

export const kashbuddyCaseStudy: CaseStudy = {
	whatItIs:
		"A personal finance web app for tracking income and expenses, categorizing transactions, and managing multiple accounts.",
	whoFor:
		"Built first to solve my own problem: tracking income, expenses and multiple accounts without paying for an ad-free experience, and shaped from there for anyone who wants the same.",
	role: "Design (Figma) & development (React, Firebase)",
	tools: ["Figma", "React", "Tailwind", "Firebase"],
	timeline: "Oct 2024 – Jan 2025 (original build), revisited Mar – Apr 2026 (UI update)",
	outcome: null,
	problem:
		"Kashbuddy came out of a specific, recurring headache from splitting bills with friends as a student. Say I paid a €50 restaurant bill on my card. My bank would log that as €50 spent on food. Two friends would then pay me back into that same account, showing up as money in. A third might pay into a different account, again logged as money in there. A fourth might just hand me cash, which wouldn't show up anywhere at all. At the end of the month, my accounts would say I'd spent 50€ and gained 20€ in one place, and gained another €10 in another, when what I actually wanted to know was simple: I spent €10 on food this month. The other €40 was never a expense of mine to begin with; it just passed through my card to make splitting the bill easier. No budgeting app I looked at solved my problem, without having to link my bank accounts or pay to remove adds, so I decided to create my own and used it as a way to start my journey learning more about web apps.",
	surfaces: null,
	beforeAfter: {
		before: {
			src: kashbuddyBefore,
			aspect: "auto",
			caption: "The original UI"
		},
		after: {
			src: kashbuddyAfter,
			aspect: "auto",
			caption: "The rebuilt UI"
		},
		whatChanged:
			"The original UI was inconsistent across different pages: some had fully rounded buttons and cards, others were more rectangular. The settings page held options that would never be used in this app, with no way to see which email you were logged in with. On the accounts page, the back arrow sat on the right, which read as backwards. The rebuilt UI is consistent across all pages, with a clearer hierarchy of information and more intuitive navigation."
	},
	decisions: [
		{
			eyebrow: "Decision 01",
			hint: "Manual entry, by design",
			body: "The reimbursement problem above is exactly why Kashbuddy doesn't connect to any bank account directly. You can still add and track multiple accounts, but every transaction is entered by hand, on purpose. Automatic bank syncing would have imported all the noisy 'money in' entries from friends paying me back. Manual entry meant I could log the one number that actually mattered: what I genuinely spent, not what passed through my card on its way to someone else.",
			image: transactionDrawer
		},
		{
			eyebrow: "Decision 02",
			hint: "One networth, multi-accounts model",
			body: "The priority was seeing all my money at a glance, so the UI leads with one large total net worth figure. Below that, each connected account gets its own card showing that account's individual balance. The app answers 'how much do I have overall' first, and 'where is it' second.",
			image: accountsPage
		},
		{
			eyebrow: "Decision 03",
			hint: "Categories you define yourself",
			body: "I wanted to open the app at the end of the month and immediately see where my money had actually gone, not a generic breakdown that didn't match how I think about my own spending. So categories in Kashbuddy are fully custom: I can add a new one, rename it, or split it further, any time, rather than picking from a fixed list.",
			image: categoriesDrawer
		}
	],
	tradeoffs:
		"Because every entry is manual, Kashbuddy is only as accurate as I am about logging things. That's the direct tradeoff of skipping automatic syncing: more control over what counts as 'spending,' or 'income' at the cost of relying on my own habits to keep it accurate. I made a similar tradeoff on the backend: I didn't have much backend experience going in, so I used Firebase instead of building my own, which let me ship something reliable without spending the project learning backend infrastructure from scratch.",

	lessons:
		"The back-arrow fix is the real lesson here: my own logic: the panel opens from the left, so it should close from the right; was internally consistent but wrong, because it ignored how people actually expect navigation to behave. The back button belongs on the left, because that's the convention everywhere else. I only caught it by watching other people use the app, not by reasoning about it alone. It's a small UI change, but a good reminder that internal logic isn't a substitute for testing with real users."
}

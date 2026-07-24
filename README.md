# Click-Finder-App

### [Live Demo](https://sh00tn1ck29.github.io/Click-Finder-App/)

An analytical Single Page Application (SPA) built with React to track and display website user activity statistics. The project integrates with an external REST API to fetch user data and performance metrics dynamically, presenting them in an optimized, interactive table.

---

### Key Features

- **React Component Architecture:** Modular, maintainable structure built with React Hooks (`useState`, `useEffect`) and client-side routing via React Router (`HashRouter`).
- **Feature-Based Folder Structure:** Clean separation of concerns with dedicated shared components (`Header`, `Footer`, `Pagination`, `Reasons`) and isolated domain features (`stats`).
- **Dynamic Data Hydration:** Fetches a comprehensive user directory and merges it with individual statistical metrics on the fly via aggregate asynchronous REST API requests.
- **Interactive Pagination UI:** Custom pagination complete with dynamic page controls for seamless navigation across large data sets.
- **Responsive & Pixel Perfect:** Crafted strictly following Figma design layouts using a Mobile-First pipeline. Responsive adjustments handle everything from mobile screens up to wide desktops.

---

### Tech Stack

- **Framework & Routing:** [React](https://reactjs.org/) (Hooks, Component-Driven UI), [React Router](https://reactrouter.com/) (`HashRouter`)
- **Build Tooling & Quality:** [Vite](https://vitejs.dev/) (Lightning fast dev server & bundler), [ESLint](https://eslint.org/) (Code linting and formatting)
- **Styling:** [Sass (SCSS)](https://sass-lang.com/) (Modular `@use` architecture, custom mixins for responsive layouts)
- **Methodology:** [BEM Class Naming](https://en.bem.info/methodology/) (Block-Element-Modifier for scalable styles)
- **Logic & Async:** [Modern JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Native Fetch API, Promises lifecycle management)
- **Deployment:** [GitHub Pages](https://pages.github.com/) (`gh-pages`)

---

### Breakpoint Management

The interface is completely fluid and handles responsive layouts gracefully across three main viewports managed by custom SASS mixins:

- **Desktop:** `1400px` and above (Full expansive dataset views).
- **Tablet:** From `480px` up to `1400px` (Horizontal overflow container optimization for full data accessibility).
- **Mobile:** From `320px` to `480px` (Compact structural views optimized for smaller touchscreens).

---

### Author

- **Maksym Shavryhin** — _Main Developer_ ([GitHub Profile](https://github.com/sh00tn1ck29))

# My Developer Card

A responsive personal web page I built for the DearDev First-Week Learning Assignment. It introduces me as a DearDev member, shows the skills I'm learning, and features this page as my current project.

**Live demo:** https://your-link.vercel.app

## Features
- Responsive layout for phone, tablet and laptop, with a mobile menu
- Light/dark theme toggle that remembers my choice
- Clickable skill cards (HTML, CSS, JavaScript, Git, GitHub) that reveal and hide notes
- Greeting changer and a "copy a short intro" button
- Interactive ID card that tilts toward the pointer
- Keyboard accessible: skip link, visible focus states, semantic HTML, reduced-motion support

## Technologies
- **HTML5** for structure and semantic landmarks
- **CSS3** for Grid, Flexbox, CSS variables (theming), gradients and animation
- **Vanilla JavaScript** for events and DOM updates (no libraries, no build step)

## Run locally
1. Clone the repo: `git clone https://github.com/yatharthJhero/developer-card.git`
2. Open `index.html` in any modern browser. Nothing to install.

To personalise it, edit the `CONFIG` block at the top of `script.js` (name, GitHub URL, repository URL).

## What I learned
- HTML gives a page its structure, CSS styles it, and JavaScript makes it respond to clicks.
- CSS variables let one theme switch (dark/light) restyle the whole page.
- `addEventListener` and `classList` let a click change what's on screen, like the skill chips.
- Small, clearly named Git commits make a project's history easy to follow.
- Deploying (Vercel) publishes my files so anyone can open the page with a link.
- How HTML, CSS and JavaScript split the work: structure, style, behaviour.
- How CSS variables make a light/dark theme possible without duplicating styles.
- How `addEventListener` and the DOM let a click change what's on screen.
- How small, well-named Git commits tell the story of a project.

## Challenges faced
- My name and GitHub link were wrong in several files. I fixed them with Replace in Files in VS Code and corrected the Git remote URL.
- (Your challenge here, e.g. making the layout work on a phone, or getting the theme toggle to remember its state.)

## Future improvements
- Add a contact section that doesn't expose private details
- Add more projects as I build them
- Deploy with GitHub Pages and add a live link
- Improve based on peer review feedback

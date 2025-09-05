Alexandrea Mendoza — Portfolio

A small, fast portfolio to show my software work and the thinking behind it. It’s plain HTML/CSS with a little JS, no frameworks, and it runs great on GitHub Pages.

⸻

What’s in the repo
	•	index.html – homepage with project cards and quick links
	•	project-studio26.html – case study for The Studio 26 (e-commerce + class booking)
	•	project-fftc.html – case study for Folsom Family Tree Counseling (site migration + SEO)
	•	project-portfolio.html – how this site is built
	•	project-graphics.html – Graphics / 3D modeling & animation gallery (Maya focus)
	•	style.css – design tokens, layout, cards, gallery effects
	•	assets/ – images, logos, and media used on the pages

Coming soon: cards are in place for Crescendo Music Studio and Pacific Shade.

⸻

Get it running

No build step. Clone and open.

git clone <this-repo-url>
cd <repo>
# Option 1: open index.html in a browser
# Option 2: run a tiny static server (good for video autoplay policies)
python3 -m http.server 8000
# then visit http://localhost:8000

Deploying to GitHub Pages: set the repo to “Deploy from branch”, root folder, main.

⸻

Tech choices
	•	HTML first. Semantic structure, landmark roles, accessible nav/breadcrumbs.
	•	Modern CSS. Tokens in :root (colors/radius/shadows), grid/flex layouts, chips/tags/cards.
	•	Tiny JS. Clipboard helpers, subtle hover/zoom in the gallery, no heavy client code.
	•	Images & video. loading="lazy", responsive sizing, posters on videos when needed.

⸻

Pages at a glance
	•	The Studio 26 — E-commerce & Class Booking
Admin dashboards, bookings/products, Stripe + ShipStation, structured data, and QA notes.
	•	Folsom Family Tree Counseling — Site Migration & SEO
Domain/DNS recovery, rebuild, copywriting, local SEO; the main screenshot links to the live site.
	•	This Portfolio — Lightweight, Accessible UI
Tokens, cards, layout system, and the “why” behind keeping it simple.
	•	Graphics — 3D Modeling & Animation
Still-life studies modeled from scratch in Maya (UVs, materials, lighting), a surreal remix set,
an original character model, and two rigged animation clips. Blender/OpenGL sections are marked
“more info coming soon” so I can publish now and expand later.

⸻

Notes on performance & a11y
	•	No framework overhead; CSS and one small script.
	•	Color contrast, focus states, and keyboard-friendly controls.
	•	aria-label/aria-labelledby on cards and sections.
	•	Gallery uses CSS filter + transform for a quick brighten/zoom effect.

⸻

Folder hints

assets/
  3DMaya*.jpg / .jpeg / .mp4     # gallery media
  fftc-*.png                      # counseling case study images
  thestudio26*.png                # Studio 26 screens
  portfoliocard.jpg               # shared placeholder for “coming soon” cards


⸻

License & credits
	•	Code: MIT
	•	Images, videos, and client logos: © Alexandrea Mendoza and respective clients. Please don’t reuse without permission.
	•	Font: Inter via Google Fonts.

⸻

Contact
	•	Email: ammendo28@gmail.com
	•	LinkedIn: https://www.linkedin.com/in/ammendo28/

If you spot an issue or want more technical detail (e.g., shader snippets, JOGL loop, or test scripts), open an issue or send me a note.

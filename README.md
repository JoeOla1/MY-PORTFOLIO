# Joel Portfolio

A standalone responsive portfolio inspired by the supplied developer portfolio reference. It uses a dark interface, neon-lime accents, code-editor details, real project cards, a moving news ticker, timeline, testimonials, contact form, and a written no-photo profile panel.

## Run locally

Open `index.html` directly in a browser, or open the folder in VS Code and use the Live Server extension. No npm install or build tool is required.

## What was updated

The mobile navigation is now genuinely hidden until the Menu button is clicked. Typography has been increased for readability, especially on phones. The featured projects are now 5G Foods, Palms Regalia Apartments, and CarryWise. The 5G Foods card is clickable and opens the URL in its link placeholder. Palms Regalia Apartments and CarryWise are clearly marked as under development and are intentionally not clickable.

## Add the 5G Foods link

In `index.html`, find `YOUR-5G-FOODS-LINK-HERE` and replace it with the real deployed URL. The full 5G Foods card will then open that project in a new browser tab. The Palms Regalia card has no link yet, as requested.

## Edit your content

The main content lives in `index.html`. Your current contact details are `joeolamide6@gmail.com` and `+234 816 805 7869`. Replace project descriptions, skills, experience, testimonial text, social links, and location with your own information. Replace `assets/joel-resume.txt` with your real PDF resume and change the resume link in `index.html`.

The visual system is in `styles.css`, including the lime accent color, spacing, responsive breakpoints, card styling, larger typography, and mobile menu behavior. The interactions are in `script.js`: mobile navigation, scroll reveals, ticker pause on hover, testimonial controls, and contact-form feedback.

No portrait or personal image is included anywhere in this package. The reference’s picture area is replaced with a written terminal-style “no photo needed” profile panel. The clickable Joel logo in the footer returns to the homepage.

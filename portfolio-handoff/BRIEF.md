# Portfolio Site — Handoff Brief

This is a handoff from a Claude Cowork session to Claude Code. Everything below is context so the new session doesn't start blind. Read this whole file before changing anything.

## Who this is for

**Francis Cheng** (goes by "Francis Cheng" professionally; full name Francis Cheng Ter Yuen). Singapore-based instructional designer / L&D specialist, currently between full-time roles and building this portfolio to support his job search.

Real background (from his resume, use for accuracy, don't invent extra facts):
- Six years across curriculum management, training operations, and instructional design.
- Most recent role: **Lead Instructional Designer, ST Engineering Training & Simulations** (2023–2026) — led a team of instructional designers, scoped and storyboarded 100+ e-learning modules across defence, coding, corporate process, and ethics topics, worked directly with SMEs, rebuilt SOPs and QA processes.
- Prior role: **Curriculum Assistant Manager | Academic and Pastoral Counsellor, Textile and Fashion Industry Training Centre** (2019–2023) — LMS/TMS administration, SkillsFuture Singapore compliance, and counselling support for students.
- Education: BA Psychology (University of Washington), Honours in Psychological Science (James Cook University), Graduate Diploma in Counselling Psychology (College of Allied Educators). ACLP certified (Institute of Adult Learning).
- Also independently building **Kyneo**, an AI-assisted fitness app (React Native). **Do not feature Kyneo on this site.** Francis was explicit that he doesn't want a Kyneo link/button built yet — he'll ask for it when he's ready. Don't add it preemptively.

His psych/counselling background is *why* the featured project is a counselling simulation — it's a deliberate, real overlap, not a stretch.

## The featured project

**"Foundations of Supportive Counseling"** — a portfolio piece (explicitly not real client work, built to demonstrate skill), an Articulate Storyline 360 module teaching supportive counselling technique (open-ended questions, paraphrasing, reflecting feelings & validation, clarifying & summarising), ending in a branching counselling simulation. The learner plays a counsellor opposite "Jordan," a fictional client (a recovering drug user working on rebuilding his life). The branching activity has real stakes: two poor-technique choices in a row ends the session early; a shaky start can still be recovered with good technique later. There's a percentage score and outcome-based closing dialogue.

This project **is** the case study — see "Site structure" below for how it's told.

## Design direction (locked in — don't re-litigate unless Francis asks)

We went through two failed directions before landing here, so it's worth knowing what was rejected and why, so Claude Code doesn't accidentally reintroduce it:

**Rejected v1:** Warm near-black/brown background (#14110D), amber + teal two-accent palette, Instrument Serif italic display font. Francis's verdict: *"I find it ugly honestly, it doesn't feel original. Very AI based and the colouring isn't good."*

**Accepted direction (current):**
- **Dark navy, always** — background `#0B0F1A`, not brown, not black. This is a committed single-theme design, not a light/dark toggle. There was a real bug earlier where the page respected the visitor's system light-mode setting and silently showed a light palette — Francis was frustrated because it looked like his feedback wasn't being applied. The current file (`index.html` in this handoff) has that fixed: `html { color-scheme: dark; }` and no `prefers-color-scheme` media query at all. **Keep it that way** — don't reintroduce a light mode unless Francis explicitly asks for one.
- **One accent color**, not two: warm gold/amber, `#E2A13A` (hover state `#F0B24C`, ink-on-accent `#1A1206`). Used for buttons, the "special title" treatment (his phrase — meaning key words/names get colored gold), stage numbers, and the eyebrow labels.
- **Typography:** display headings in `Bricolage Grotesque` (weight 600–800, bold and confident, not delicate), body text in `Hanken Grotesk`, small labels/data/eyebrows in `Space Mono`. All loaded via Google Fonts `@import`. Francis pointed at reference sites with **bold sans-serif headlines**, not fine serif italics — that's why the display font changed from the rejected v1.
- **Two-tone name treatment:** in the hero, "Francis" renders in white/ink, "Cheng" renders in the gold accent — mirroring a reference design he liked where a first name and surname were colored differently.
- **Photo slot:** Francis wants an actual portrait of himself next to his name eventually, styled like the references (portrait to the right of the name/bio block). He doesn't have the photo ready yet, so the hero currently has a placeholder box (dashed border, "FC" monogram, "Photo coming soon" caption) sized and positioned where the real photo will go. When he supplies a photo, drop it in and remove the placeholder styling.
- **Reference designs he liked** (for tone/feel, not to copy literally): a dark, photo-anchored Carrd template with a minimal top nav ("HOME | ABOUT | CONTACT"), a small eyebrow label, a bold headline, and a single tan pill CTA; and a card-style personal intro with a two-tone name, portrait on the right, a row of small text links (social/contact) at the bottom left, and a pill "Get in touch" button at bottom right. The overall feel: sleek, moody, restrained, confident — not busy.
- **Avoid generic "AI portfolio" tells:** no purple/blue gradients, no centered-everything layout, no emoji as markers, no rounded-corner-on-literally-everything, no accent color used everywhere it could theoretically go. Restraint is the point.

## Site structure (current, agreed)

The site is **one page**, no separate "case study card" or "more projects" grid — those were built and then explicitly removed. Structure top to bottom:

**1. Nav.** Logo mark ("FC") + name, and two quick-access links on the right: **CDD** and **Module**. That's it. No Kyneo link, no generic "Get in touch" button here — Francis wants recruiters who are short on time to be able to jump straight to the CDD or the live module from the very top of the page.

**2. Hero.** Eyebrow ("Instructional Design · Singapore"), the two-tone name, a role line, a short bio paragraph that mentions he follows the **ADDIE model** (this is the bridge into the next section), the photo placeholder described above, and underneath the bio a simple contact row: **Resume · LinkedIn · Email** (plain text links separated by middot, not buttons). This row **is** the "get in touch" mechanism — there is deliberately no separate CTA button anymore; an earlier version had "View the case study" / "Get in touch" buttons and Francis asked for those removed.

**3. The ADDIE walkthrough — this is the whole "process + case study" section, combined.** Titled something like "How I built Foundations of Supportive Counseling." Francis was explicit that this should be **5 stages of ADDIE** laid out as **rows**, not a 4-box grid (an earlier draft used 4 equal columns and got reworked into rows). Implement and Evaluate are combined into one short row, so visually there are 4 rows for 5 stages. Each row: stage number + stage name on the left (sticky/aligned), description + supporting images/links on the right.

  - **01 — Analyse.** Reviewing raw material, meeting SMEs to define requirements and scope content, producing the **CDD (Content Design Document)** that maps the course flow, learning objectives framed with **Bloom's Taxonomy**. Media: a small inline SVG diagram of the real module's flow (Introduction → Core Techniques → Knowledge Checks → Branching Counselling Activity → Results & Score — this is accurate to the actual module, not decorative), plus two real screenshots (a content slide, and a knowledge-check question) — both included in this handoff's `images/` folder. Ends with a "Download the CDD" button — **currently a placeholder link, Francis needs to supply the real CDD file or a hosted link to it.**
  - **02 — Design.** Storyboarding: every screen planned and narration drafted before Storyline work starts; placeholder assets stand in for final art at this stage. Media: **two empty placeholder boxes, clearly marked "Storyboard screenshot — add here."** Francis doesn't have production-safe storyboard images ready — don't fill these with the final Storyline screenshots, that would misrepresent what a storyboard looks like. Wait for him to supply real ones.
  - **03 — Develop.** Building it for real: variables, triggers, and branching logic in Storyline, plus working with graphic designers or sourcing assets for the final visual look. Media: a real screenshot of the branching activity (in `images/branching-activity.jpg`). Ends with a "Launch the module" button — **currently a placeholder link, needs the real hosted module URL once Francis publishes it somewhere.**
  - **04–05 — Implement & Evaluate.** Deliberately short (Francis's instruction): working with the SME to deploy on their LMS, then testing the module's efficacy with real learners.

**4. Footer.** Name + role, the same Resume/LinkedIn/Email links, and a copyright line noting the case content is illustrative (it's a portfolio piece, not a real client engagement — this framing matters, don't drop it).

## What's still a placeholder / what Francis needs to supply

- The actual CDD file (or a hosted link to it) — "Download the CDD" currently points nowhere.
- A real resume file/link.
- His actual LinkedIn URL.
- The module itself hosted somewhere with a real URL (see the earlier conversation's notes on this: Storyline's Review 360 share links are **not** meant to be iframe-embedded or linked long-term without an active subscription — the plan was to export "Publish for Web" and self-host the static output, e.g. via Netlify, and link to that).
- Real storyboard screenshots for the Design row.
- An eventual professional photo of himself for the hero placeholder.

## Technical notes for whoever picks this up

- `index.html` in this handoff is the current, Francis-approved version. It's a single self-contained file: all CSS and JS inline, fonts via Google Fonts `@import`, no build step, no framework.
- **Known debt to fix early:** the three images currently used (content screenshot, knowledge-check screenshot, branching-activity screenshot) are embedded directly in the HTML as base64 `data:` URIs. That was necessary for previewing in the cloud session this was built in, but it means Francis can't swap a photo without editing code. **First real task for this session: restructure so images live as separate files in an `images/` folder and are referenced with normal `<img src="images/filename.jpg">` paths.** The three real image files are included in this handoff's `images/` folder already, named to match what they show (`content-nonverbal-techniques.jpg`, `check-understanding-q1.jpg`, `branching-activity.jpg`) — wire those in properly instead of the baked-in base64 versions.
- Mobile breakpoints already exist (~860px and ~600px) and were checked — keep testing at those widths after changes.
- No React, no build tooling, no CMS/automation layer (folder-watching, auto-tagging, job-post analysis, etc.) has been built and **none of that should be assumed as a goal for day one.** Francis was inspired by a much more elaborate Reddit setup, but the guidance he was given was to get a working, editable static site first, and treat automation as a later, optional layer if he wants it at all — not a prerequisite.
- Recommend `git init` in the project folder (if not already done) before making changes, so everything is diffable/revertable — Francis is new to this and that safety net matters to him.

## Tone reminders for whoever's helping him from here

Francis is not a developer. He's capable and a fast learner but new to code and can get anxious about breaking things (he specifically mentioned fear of this kind of tool affecting his other project, Kyneo — that's why this lives in a fully separate folder). He values being able to actually touch and edit his own site, not just receive polished output — prefer small, explainable changes he can follow over big opaque rewrites, and point out where in the file something lives so he can find it himself next time.

---
name: app-idea-visualizer
description: >
  Visualizes any app idea as an interactive feature map diagram AND delivers a structured
  feasibility reality check — separating what belongs in the MVP from the full vision, surfacing
  what to cut, and grounding the idea in what's actually buildable today with modern tooling.
  Use this skill whenever a user describes an app concept, startup idea, side project, or product
  vision they want to "think through", "test", or "sanity check". Trigger on phrases like:
  "I have an app idea", "what if I built X", "is this feasible", "help me think through this",
  "can this even be built", "reality check my idea", "what would it take to build X", "I'm
  thinking of making an app that...", "could a solo dev build this", "is my idea too ambitious",
  "what's the MVP of X". Adapts tone for developers (technical tradeoffs, stack names, architecture)
  vs. non-technical founders (plain language, cost/time framing). ALWAYS use when someone is
  thinking out loud about building something and wants grounding, structure, or validation.
---

# App Idea Visualizer

Turn a half-baked app idea into:

1. **An interactive feature map** — visual system diagram with complexity tiers
2. **A feasibility reality check** — MVP vs. full vision, what to cut, honest timeline

---

## Step 1: Extract the Idea

If the description is too vague (just a noun, or a theme without a user action), ask **one** question:

> "What's the core thing a user actually _does_ in this app?"

If the idea is clear enough to decompose, proceed directly — don't over-question.

**Detect user type from message language:**

- Stack names, API, latency, schema, monorepo → **Developer mode**: technical terms, architecture tradeoffs, library names
- Users, monetize, launch, investors, market fit → **Founder mode**: plain language, cost/time focus, avoid jargon
- Mixed or unknown → **Accessible technical**: brief inline explanations for non-obvious terms

---

## Step 2: Decompose the Idea

Before generating any output, mentally map the idea into layers:

```
App Concept
├── Core Action      → The ONE thing the user does (the reason the app exists)
├── Supporting       → What makes the core action work
├── Infrastructure   → Auth, storage, APIs, integrations, notifications
└── Nice-to-Haves    → Polishing features, v2+ scope
```

Assign each feature a **complexity tier**:

| Icon | Tier                 | Meaning                                                |
| ---- | -------------------- | ------------------------------------------------------ |
| 🟢   | **Straightforward**  | Well-solved patterns, existing libraries, fast to ship |
| 🟡   | **Moderate**         | Requires real design decisions, some custom logic      |
| 🔴   | **Hard / High Risk** | Novel problem, scaling concern, expensive to get right |
| ⚫   | **Defer**            | Not needed for MVP; adds scope without core value      |

---

## Step 3: Generate the Feature Map Artifact

Create an **interactive HTML artifact** using `show_widget`.

### Layout

- **Central node**: the core action (amber/highlighted)
- **Surrounding nodes**: supporting features, infrastructure, nice-to-haves
- **Color encoding**:
  - 🟢 = `c-teal` / green
  - 🟡 = `c-amber` / amber
  - 🔴 = `c-coral` / red
  - ⚫ = `c-gray` / muted gray
- **Legend** in bottom-left or as a static row
- Each node should be **clickable** with `sendPrompt()` prompting a deeper dive on that feature

### Aesthetic Direction

- Dark-leaning, blueprint/schematic feel
- Monospace labels for feature names
- Staggered fade-in animation on load (CSS `@keyframes` + `animation-delay`)
- Compact nodes (~140px wide), generous spacing
- No walls of text — each node label ≤ 4 words, subtitle ≤ 6 words
- A "complexity legend" row at the bottom

### Interaction

Every node should call `sendPrompt()` on click, with a context-aware prompt:

```js
sendPrompt(
  "Deep dive: how would I actually build [feature name] for [app name]?",
);
```

---

## Step 4: Write the Feasibility Analysis

After (or alongside) the visual, output this structured breakdown:

```
## Feasibility Check: [App Name]

**What this is**
[1–2 sentences. Plain description of what the app does and who it's for.]

**MVP — Build this first**
Only what's needed to validate the core idea. Be ruthless.
- [Feature] → 🟢 [why it's straightforward]
- [Feature] → 🟡 [what makes it non-trivial]

**Complexity flags**
Features that are harder than they look:
- [Feature] → 🔴 [the specific challenge: scaling, UX, cost, real-time, trust, etc.]

**Cut for now**
Things that *sound* essential but aren't for v1:
- [Feature] → ⚫ [why it's a v2 problem]

**What modern dev makes easy**
[2–3 specific things: tools, platforms, libraries that solve what used to be hard]

**What's still hard today**
[1–2 honest observations about gaps in the current ecosystem for this idea]

**Platform Recommendation**
Analyze whether the idea is better suited for Web, Mobile, or Both.
- Explain why specific features thrive on a specific platform (e.g., mobile for geolocation/camera access, web for complex data entry/dashboards).
- If "Both", explain the complexity of cross-platform syncing or state management.

**One-sentence verdict**
[Direct, honest, useful — not cheerleading, not doom. State what this actually is.]
```

---

## Step 5: Tone Adaptation

**Developer mode:**

- Name specific libraries: "Clerk for auth, not rolling your own"
- Flag architectural risks: "This requires consistent hashing if you shard"
- State tradeoffs precisely: "REST works fine here; WebSockets only if you need <500ms push"
- Mention infrastructure realities: cold start costs, DB connection limits, vendor lock-in
  **Founder / non-technical mode:**
- Translate concepts inline: "database (where your app's data lives)"
- Frame around cost and time, not complexity
- Name the risk clearly: "This feature is expensive because it requires human review at scale"
- Suggest when to hire vs. use no-code: "This can be built with Webflow + Airtable before you need a dev"

---

## Anti-Patterns

- ❌ **Hype** — never just validate the idea; surface the hard parts
- ❌ **Doom** — don't crush enthusiasm; be honest + constructive
- ❌ **Scope inflation** — only analyze features the user described
- ❌ **"It depends"** — always qualify with _on what_, and give the most likely answer
- ❌ **Dense nodes** — the diagram should be scannable in 10 seconds flat

---

## Output Checklist

Before responding, verify:

- [ ] Interactive HTML artifact generated with complexity-colored nodes
- [ ] Central node is the core user action
- [ ] Every feature has a tier assigned (🟢🟡🔴⚫)
- [ ] MVP is explicitly separated from full vision
- [ ] At least one "harder than it looks" flag surfaced
- [ ] At least one "modern tooling makes this easy" observation
- [ ] Timeline estimate included
- [ ] One-sentence verdict is present and direct
- [ ] Tone matches detected user type

---

## Example Trigger Prompts

- "I want to build a marketplace for freelance designers"
- "Is it feasible to build a real-time multiplayer whiteboard as a solo dev?"
- "I have an idea for an app that auto-generates onboarding flows using AI"
- "Reality check: can I build a food delivery app with a small team?"
- "What would it actually take to build something like Notion?"
- "I'm thinking of making a habit tracker with AI coaching — too ambitious?"

---
name: app-idea-visualizer
description: >
  Visualizes any app idea as an interactive feature map diagram AND delivers a structured
  feasibility reality check. Use this whenever a user wants to "think through" or "sanity check"
  an app concept.
---

# App Idea Visualizer

Turn a half-baked app idea into a visual feature map and a structured feasibility reality check.

## Workflow

Follow this sequence strictly:

### 1. Extract the Idea
Read `prompts/analyzer.md` to identify the core user action and user persona (Developer vs. Founder).

### 2. Decompose the Idea
Read `prompts/mapper.md` to map the idea into layers and assign complexity tiers (🟢🟡🔴⚫).

### 3. Generate Artifact
Use `scripts/artifact-gen.js` (load into context) to render the interactive feature map. 
Follow layout specifications in `templates/feature-map.html`.

### 4. Feasibility Analysis
Read `prompts/feasibility.md` to generate the structured breakdown and platform recommendation.

### 5. Standards & Best Practices
Adhere to the anti-patterns and checklists in `specs/templates.md` and `specs/process-and-principles.md`.

---

## Example Trigger Prompts

- "I want to build a marketplace for freelance designers"
- "Is it feasible to build a real-time multiplayer whiteboard as a solo dev?"
- "I have an idea for an app that auto-generates onboarding flows using AI"
- "Reality check: can I build a food delivery app with a small team?"
- "What would it actually take to build something like Notion?"
- "I'm thinking of making a habit tracker with AI coaching — too ambitious?"

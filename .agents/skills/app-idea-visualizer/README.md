# App Idea Visualizer Agent Skill

This skill turns high-level app ideas into structured visual feature maps and feasibility analyses, tailored to the user's persona (Founder vs. Developer).

## Features

- **Persona-based Analysis:** Adjusts language, technical depth, and focus based on user needs.
- **Feature Mapping:** Decomposes ideas into layers with assigned complexity tiers (🟢🟡🔴⚫).
- **Interactive Visualization:** Generates feature maps using embedded scripts and templates.
- **Feasibility Check:** Provides structured breakdowns including market/technical risks and platform recommendations.

## Prerequisites

- Gemini CLI installed and configured.
- Access to the skill directory within the `.agents/skills/app-idea-visualizer` path.

## Usage

Activate the skill and provide your app idea:
`@app-idea-visualizer "I have an idea for [YOUR APP IDEA]"`

The skill will follow a strict workflow:

1. Extract the idea.
2. Decompose into layers and complexity tiers.
3. Generate the artifact.
4. Provide a feasibility analysis.

## Development

- **Artifact Generation:** `scripts/artifact-gen.js`
- **Templates:** `templates/feature-map.html`
- **Specs:** `specs/templates.md`
- **Tests:** `tests/prompts.md`

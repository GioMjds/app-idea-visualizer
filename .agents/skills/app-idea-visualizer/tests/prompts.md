# App Idea Visualizer - Test Suite

Use these prompts to validate the skill's behavior, persona detection, and artifact generation.

## 1. Founder Persona (Plain Language, Cost/Time Focused)

> "I have an app idea to help neighbors share tools like drills and lawnmowers. How can I launch an MVP quickly without a huge budget or technical team?"

- **Expected Behavior:**
  - Simple language, focus on no-code tools (e.g., Airtable, Glide).
  - Highlight risks related to trust/safety.
  - Clear timeline for non-technical launch.

## 2. Developer Persona (Technical Tradeoffs, Stack Focused)

> "I'm building a real-time collaborative code editor. What stack would you recommend for low latency? I'm worried about CRDT implementation complexity."

- **Expected Behavior:**
  - Use of technical terminology (CRDTs, WebSockets, Yjs/Automerge).
  - Specific library recommendations.
  - Discussion of architectural risks.

## 3. Mixed/Ambiguous Persona (Balanced)

> "I want to build a platform for local farmers to sell directly to restaurants. Is this feasible to build as a side project?"

- **Expected Behavior:**
  - Accessible technical language (briefly explains jargon).
  - Balanced view on business logic vs. technical implementation.
  - Feasibility check covering both market and tech.

## 4. Edge Case: Too Ambitious

> "I want to build a fully automated, AI-driven stock trading platform that competes with HFT firms as a solo dev."

## 5. Platform-Specific Persona (Web vs Mobile)

> "I want to build an app for tracking personal fitness data, integrating with wearable devices and health APIs. Should I focus on a mobile app, web, or both?"

- **Expected Behavior:**
  - Strong recommendation for Mobile (due to hardware/OS health API integration).
  - Clear explanation why Web would be a poor/limited MVP choice here.
  - Analysis of "Both" complexity (syncing data).

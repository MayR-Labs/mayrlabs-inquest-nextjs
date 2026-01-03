# MayR Labs InQuest

## Overview

MayR Labs InQuest is a **personal, AI-assisted form management system** designed to turn human-written questions into structured, interactive digital forms.

The system exists to remove friction between _thinking_ and _collecting structured responses_. Instead of manually building forms field-by-field, an administrator provides questions in natural language. An AI model assists by translating those questions into a structured form schema, which is then reviewed, edited, stored, and distributed as an interactive form.

The system is intentionally **human-in-the-loop**. AI assists, but humans remain the final authority.

---

## Purpose

The core purpose of this project is to:

- Help a single administrator (or a small trusted group) rapidly create high-quality forms
- Use AI to handle structure, not decision-making
- Provide users with a simple, saveable, resumable form-filling experience
- Maintain clear ownership, access control, and lifecycle management of forms and responses

This is not a general-purpose Google Forms replacement.
It is a **precision tool** for people who ask thoughtful questions and want thoughtful answers.

---

## Guiding Principles

### 1. AI Assists, Humans Decide

AI is used to:

- Interpret natural language
- Suggest structure
- Generate initial schemas

AI is _never_ the source of truth. All generated schemas are previewed and may be modified before publication.

---

### 2. Schema-First Design

Every form is defined by a structured schema that describes:

- Questions
- Field types
- Validation rules
- Behavioural constraints

Rendering, persistence, and response handling are all downstream of the schema.

---

### 3. Identity Over Links

Forms are primarily **account-based**, not anonymous.
Users authenticate with Google, and access is granted based on identity, not obscurity of URLs.

Link-based open forms (poll-style access) are considered an optional future extension.

---

### 4. Lifecycle Awareness

Forms are not static artefacts. Each form has a lifecycle:

- Draft
- Active
- Locked
- Disabled

User responses respect this lifecycle at all times.

---

## High-Level System Flow

### Admin Flow (Form Creation)

1. Admin authenticates via Google
2. Admin accesses protected admin routes
3. Admin pastes or writes form questions in natural language
4. Questions are sent to an AI model for schema generation
5. Generated schema is previewed and edited by the admin
6. Final schema is stored for persistence
7. A unique form identifier is generated
8. Form is assigned to one or more recipient email addresses
9. Form link is shared with intended users

---

### User Flow (Form Completion)

1. User authenticates via Google
2. User accesses their list of assigned forms
3. User opens a form using its unique link
4. Form schema is fetched and rendered dynamically
5. User fills in responses
6. User may save progress at any point
7. User resumes later if needed
8. User submits the completed form
9. Submission is locked according to form rules

---

### Admin Flow (Form Management)

1. Admin views all forms via the admin dashboard
2. Admin can:
   - Search and filter forms
   - View responses
   - Edit schemas (when allowed)
   - Lock or disable forms
   - Control form availability

3. Admin actions are restricted to authorised accounts only

---

## Access Control Model

### Authentication

- Google OAuth is used for identity verification via Firebase

### Authorisation

- Admins are defined explicitly in persistent storage
- Admin privileges are role-based, not email-hardcoded
- Regular users only access forms assigned to their email

### Separation of Concerns

- Admin routes are fully isolated
- User routes cannot access management functionality
- Form visibility is strictly enforced server-side

---

## Data Model (Conceptual)

This system revolves around four conceptual entities:

- **Users**
  Authenticated individuals identified by email and role

- **Forms**
  Schema-defined structures with lifecycle states and recipients

- **Form Schemas**
  Structured definitions produced with AI assistance and human review

- **Responses**
  User-submitted or partially-saved data tied to a specific form and user

The database is treated as the single source of truth.

---

## Architecture Overview

At a conceptual level, the system is composed of:

- **Authentication Layer**
  Handles login and identity verification

- **Admin Interface**
  Manages schema creation, review, and lifecycle control

- **AI Integration Layer**
  Converts natural language into structured schema suggestions

- **Persistence Layer**
  Stores schemas, forms, users, and responses

- **Rendering Engine**
  Converts stored schemas into interactive user-facing forms

Each layer is intentionally decoupled to allow evolution without systemic rewrites.

---

## Intended Audience

This project is intended for:

- Developers who build internal tools
- Researchers, interviewers, and evaluators
- Individuals who frequently design structured questionnaires
- Builders who value clarity over feature bloat

It is not optimised for:

- Mass-market survey distribution
- Anonymous data harvesting
- Visual drag-and-drop form design

---

## Scope and Non-Goals

### Explicit Non-Goals

- No WYSIWYG form builder
- No AI-controlled permissions or access logic
- No automated decision-making based on responses
- No promise of zero-configuration SaaS deployment

This project values **intentional friction** where it prevents mistakes.

---

## Status

This project is under active development and experimentation.
It is designed to evolve carefully, with architecture preceding features.

---

## Closing Thought

MayR Labs InQuest exists because **questions deserve structure**, but structure should never suffocate thinking.

AI accelerates.
Humans decide.
Data endures.

---

If you want, next we can:

- Stress-test the architecture for edge cases
- Define the schema contract formally
- Or design the permissions model like a paranoid adult

Forward motion beats perfection — but clarity beats speed.

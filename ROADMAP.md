# Roadmap

This document outlines the development phases for **MayR Labs InQuest**.

## Phase 1: Foundation (Current)

- [ ] **Architecture Setup**: Establish strict Separation of Concerns (Server/Client/Hooks).
- [ ] **Data Model Design**: Define the formal schema for Forms, Questions, and Responses.
- [ ] **Authentication**: Implement Google OAuth via Firebase.
- [ ] **Infrastructure**: Setup basic persistence (Database) and API routes.

## Phase 2: Core Form Engine

- [ ] **Schema Generation (AI)**: Implement the AI service to convert natural language to form schema.
- [ ] **Form Rendering**: Create the dynamic form renderer based on schema.
- [ ] **Response Handling**: robust saving, validation, and submission of responses.
- [ ] **Lifecycle Management**: Implement Draft, Active, Locked, and Disabled states.

## Phase 3: Admin Dashboard

- [ ] **Dashboard UI**: List, filter, and manage forms.
- [ ] **Form Editor**: "Human-in-the-loop" UI for reviewing and editing AI-generated schemas.
- [ ] **Access Control**: Role-based access for Admins vs Users.

## Phase 4: Polish & Resilience

- [ ] **Stress Testing**: Edge case handling for complex forms.
- [ ] **Performance**: Optimization of rendering engine.
- [ ] **Security Audit**: Verify permissions model and data isolation.

## Future / Ideas

- [ ] **Poll-style Access**: Optional link-based open forms.
- [ ] **Analytics**: Aggregated views of response data.

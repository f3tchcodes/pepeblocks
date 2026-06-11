# Contributing to pepeblocks

Thank you for your interest in contributing to the Pepeblocks SDK! Following these guidelines helps ensure a smooth, efficient development process for everyone.

## Code of Conduct

By participating in this project, you agree to maintain a respectful, collaborative, and professional environment.

## Development Setup

To get started with development, clone the repository and set up your local workspace:

1. Fork and clone the repository.
2. Install the project dependencies:
```bash
npm install
```
3. Compile the TypeScript code to ensure the build pipeline works:
```bash
npm run build
```

## Branching Strategy

* Always branch off from the latest state of the `main` branch.
* Use explicit naming conventions for your development branches:
  * `feature/your-feature-name` for new functionality.
  * `bugfix/issue-description` for fixing errors.
  * `developmentX.Y.Z` for preparing planned milestone releases.

## Code Styles and Guidelines

* **Vanilla Philosophy:** Keep the codebase lightweight and performant. Avoid adding unnecessary high-level dependencies or heavy libraries. Use native solutions where possible.
* **TypeScript & Type Safety:** Ensure all network requests, responses, and method arguments are strictly typed using robust TypeScript interfaces.
* **Documentation:** If you add a new API endpoint or modify an existing one, update both the inline JSDoc comments in the `src/` folder and the companion reference guide inside `docs/docs.md`.

## Commit Messages

Keep your commit messages clear and descriptive. We suggest following simple semantic prefixes:
* `feat:` for new features or endpoints.
* `fix:` for bug fixes.
* `docs:` for documentation updates.
* `chore:` for updating build configurations or bumping project versions.

## Submitting a Pull Request

1. Push your local development branch to your forked repository.
2. Open a Pull Request (PR) against the primary `main` branch.
3. Provide a clear summary in your PR description detailing what changed and why.
4. Ensure your branch is fully merged up-to-date with `main` and has no merge conflicts before requesting a review.

# Contributing to Notion Sync

Thank you for your interest in contributing to Notion Sync! We welcome contributions from the community to help improve and expand this 100,000+ utility function enterprise-scale Notion library.

## Getting Started

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.
2. **Clone the Repo**: Clone your fork to your local machine.
3. **Install Dependencies**: Run `npm install` to install required dependencies.
4. **Environment Setup**: Copy `.env.example` to `.env` and provide your Notion API token for testing.

## Making Changes

- Create a new branch for your feature or bugfix (`git checkout -b feature/your-feature-name`).
- If you're modifying or adding tools, please note that all tools are generated dynamically in-memory via the `src/factory.js`. If you need to make structural changes or add new industry macros, modify the `NotionToolFactory` logic or the `src/ai-enhancements/industry-macros.js` rather than generating files.
- Ensure any new functionality is covered by tests in `test-factory.js` and the `tests/` directory.

## Testing

Run tests to ensure your changes didn't break existing functionality:
```bash
npm test
```

## Submitting a Pull Request

- Push your branch to your fork.
- Open a Pull Request against the `main` branch of the upstream repository.
- Provide a clear and detailed description of your changes, including any related issues.
- Your code should follow the existing style and pass all checks.

We appreciate your contributions and look forward to reviewing your PRs!

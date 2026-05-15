# Contributing to Notion Sync

Thank you for your interest in contributing to Notion Sync! We welcome contributions from the community to help improve and expand this enterprise-scale Notion library.

## Getting Started

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.
2. **Clone the Repo**: Clone your fork to your local machine.
3. **Install Dependencies**: Run `npm install` to install required dependencies.
4. **Environment Setup**: Copy `.env.example` to `.env` and provide your Notion API token for testing.

## Making Changes

- Create a new branch for your feature or bugfix (`git checkout -b feature/your-feature-name`).
- If you're modifying or adding tools, please note that the API is organized into domains in the `src/domains` directory. You can add new industry macros in `src/ai-enhancements/industry-macros.js` or enhance the SQL parsing in `src/ai-enhancements/sql-parser.js`.
- Ensure any new functionality is covered by tests in the `tests/` directory.

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

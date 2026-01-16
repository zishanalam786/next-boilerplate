# Next.js Boilerplate

A robust, enterprise-ready **Next.js 16** boilerplate featuring **Clean Architecture**, **SOLID principles**, and **Cross-Browser Testing**.

## 🚀 Features

*   **Framework**: Next.js 16 (App Router)
*   **Language**: TypeScript
*   **Architecture**: Modular Clean Architecture (Domain-Driven implementation)
*   **Design Patterns**: Factory, Repository, Dependency Injection (DI)
*   **Testing**:
    *   **Unit**: Jest + React Testing Library
    *   **E2E**: Playwright (configured for Chromium, Firefox, WebKit)
*   **Code Quality**: ESLint, Prettier, Husky (Git Hooks), Lint-Staged
*   **Core Utilities**: Centralized Logger, Environment Config, Standardized API Responses

## 📂 Project Structure

The project follows a strict separation of concerns:

```
src/
├── app/                 # Next.js App Router (Entry Points)
│   ├── api/             # API Routes
│   └── page.tsx         # Frontend UI
├── core/                # Shared Kernel (Utilities used everywhere)
│   ├── config/          # Environment variables management
│   ├── http/            # Standardized Response & Error Handling
│   └── logger/          # Logging abstraction
├── modules/             # Feature Modules (Domain Logic)
│   └── health/          # Example Module
│       ├── *.types.ts       # Contracts/Interfaces (DIP)
│       ├── *.service.ts     # Business Logic
│       ├── *.controller.ts  # Request Handling
│       └── *.factory.ts     # Dependency Injection Wiring
└── lib/                 # Shared Libraries
```

## 🛠️ Getting Started

### Prerequisites

*   Node.js 20+
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/zishanalam786/next-boilerplate.git
    cd boilerplate
    ```

2.  Install dependencies:
    ```bash
    npm install
    # This also installs Playwright browsers
    npx playwright install --with-deps
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## ✅ Running Tests

### Unit & Integration Tests (Jest)
Runs tests located in `tests/unit` and `tests/integration`.

```bash
npm run test
```

### End-to-End Tests (Playwright)
Runs cross-browser tests located in `tests/e2e`.

```bash
# Run headless (all browsers)
npx playwright test

# Run with UI Mode
npx playwright test --ui
```

## 🏗️ Architecture Explained

### The Flow of a Request
1.  **Route (`app/api/...`)**: Receives the HTTP request.
2.  **Factory**: Assembles the necessary classes (Controller + Service).
3.  **Controller**: Handles HTTP-specific logic (parsing body, headers) and calls the Service.
4.  **Service**: Executes business logic.
5.  **Response**: Returns a standardized JSON response via `ApiResponse`.

### Principles Used
*   **Single Responsibility**: Each file has one clear job (Service = Logic, Controller = HTTP).
*   **Dependency Inversion**: High-level modules depend on abstractions (Interfaces), not concrete implementations.
*   **Interface Segregation**: specific interfaces (like `IHealthService`) rather than bloated ones.


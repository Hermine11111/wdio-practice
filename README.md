# WDIO Automation Project

##  Description
This project contains automated tests for Practice Software Testing website using Cucumber BDD framework.

##  Test Scenarios
1. User login with valid credentials
2. View product details
3. Add product to cart
4. Search exact product

## 🛠 Tech Stack
- WebdriverIO
- Cucumber (BDD)
- Chai (expect)
- GitHub Actions (CI)

## ▶️ Run all Cucumber tests
```bash
npm test
```

## ▶️ Run tests by Cucumber tag
```bash
npm run suite:login
npm run suite:product
npm run suite:cart
npm run suite:search
npm run suite:smoke
```

##  Cucumber Tags
| Tag | Description |
|-----|-------------|
| `@smoke` | All smoke scenarios |
| `@login` | Login scenarios |
| `@product` | Product scenarios |
| `@cart` | Cart scenarios |
| `@search` | Search scenarios |

##   CI/CD
The project runs Cucumber tests on GitHub Actions for each tag in the CI pipeline. See `.github/workflows/cucumber-tests.yml`

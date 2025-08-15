# 🚀 Enterprise BDD Automation Framework
## Powered by Playwright · TypeScript · Cucumber · Allure

A robust, scalable, and modular web automation solution engineered for modern UI testing needs.  
This framework demonstrates best practices and cross-browser coverage on [saucedemo.com](https://www.saucedemo.com) — and can be extended for real-world enterprise-grade testing.

---

## 🛠️ Tech Stack

- **Playwright** (TypeScript): Fast, reliable browser automation (Chrome, Firefox, Safari, mobile emulation)
- **Cucumber.js**: BDD workflow using Gherkin feature files
- **Allure Reporting**: Real-time, rich test reporting and analytics
- **Jenkins**: Ready for CI/CD integration
- **Modular Design**: Page Objects, Test Data, Utilities
- **Extensible & Maintainable**: Easily add new platforms/tests!

---

## 📁 Project Structure (Maven-style)
```playwright-framework/
├── src/
│ ├── main/
│ │ ├── pageObjects/
│ │ └── utils/
│ └── test/
│ ├── features/ # Gherkin feature files
│ ├── step-definitions/ # Step definitions (TypeScript)
│ ├── resources/ # Test data/config (JSON/TS)
│ └── support/ # Custom test context/world
├── reports/ # Allure reports
├── Jenkinsfile # CI/CD pipeline config
├── .gitignore
├── package.json
├── README.md
```

---

## 🚦 Demo Coverage

- **Login**
- **Inventory and Cart**
- **Checkout and Order Confirmation**
- **Error Handling**

All implemented with maintainable Gherkin feature files and step definitions.

---

## 🔥 Quickstart

1. **Clone the Repo**

2. **Install Dependencies**

3. **Run All Tests (UI visible)**

- To run with browser UI: Set `headless: false` in `playwrightSetup.ts`.

4. **View Allure Report**


---

## 🧑‍💻 Configuration

- **Browsers:** Set or change browser in config file; supports Chrome, Firefox, Safari, devices.
- **Test Data:** All login, checkout, and expected message values managed in JSON/config files.
- **No hardcoding!** Easily modify parameters centrally.

---

## 🧩 Extend and Maintain

- Add new flows: Drop new feature files into `/features`.
- Scale or adapt to any web platform with modular Page Objects & Data Management.
- Integrate with Jenkins or other CI/CD pipelines via the provided `Jenkinsfile`.

---

## 📈 Reporting

- **Allure:** Generates rich HTML reports in `/reports`.
- Automatic test history, screenshots on failure, analytics, easy sharing.

---

## 🔎 Debugging Tips

- Run in headed mode (`headless: false`) for interactive tests.
- Use Playwright Inspector (`PWDEBUG=1`) for step-by-step debugging.
- All major errors and logs are centrally managed and easy to trace.

---

## 💡 About This Project

Created for web automation professionals and Upwork clients seeking:
- Enterprise-level structure
- Extensibility
- Readable BDD
- Impeccable reporting

Feel free to fork, extend, or reach out for enhancements!

---

## 📬 Contact

- **Upwork profile:** [Your Upwork Link]
- **GitHub:** [yourusername]

---

**_Happy Testing!_**



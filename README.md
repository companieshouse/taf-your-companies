# Node Playwright Starter Template

Test automation using playwright framework for the CH account services

## Table of Contents

- [Pre-requisites of tools needed to run this solution on a Machine](#pre-requisites-of-tools-needed-to-run-this-solution-on-a-machine)
- [Installation steps](#installation-steps)
- [Execute tests via Git Bash](#git-bash-execution)
- [Execute tests via Powershell](#powershell-execution)
- [Code Quality](#code-quality)
- [Test Summary](#test-summary)
- [Checking the report after running the tests](#checking-the-report-after-running-the-tests)
- [Contributing to the project](#contributing-to-the-project)

## Pre-requisites of tools needed to run this solution on a Machine:

Machine has the following already installed:

- Git (for example Git for windows https://gitforwindows.org/)
- Node.js 18 (https://nodejs.org/en/about/previous-releases)
- NPM (https://docs.npmjs.com/getting-started)
- IDE (for my testing I used Visual Studio Code https://code.visualstudio.com/download and this guide has been written from that POV but any IDE of users choice be fine)

## Installation steps:

1.  Ensure all pre-reqs have been installed from above section.
2.  Open VS Code
3.  Open the Terminal window
4.  Change directory in command prompt to required drive and folder that you want to install the Repo i.e. C:\ or C:\Automation (any folder of your choice)
5.  From the repository page on GitHub, click the green button labeled Clone or download, and in the “Clone with HTTPs” section, copy the URL for this repository. In VS Code or Git bash run a clone command:

        git@github.com:companieshouse/node-playwright-starter.git

6.  Once the repository has cloned open the new folder downloaded via IDE/VS Code using the "Open Folder" option and locating it via explorer
7.  Once IDE/VS Code is in the correct folder, open a terminal server and run command below which should pull down and install all the dependencies required:

        npm install

8.  Install Playwright explicitly, this is to make sure binaries pull down for Browsers. It's worth doing the following step

        npx playwright install

9.  There are recommended extensions which will also help. Press CTRL+Shift+X or go to the "Extensions" on the left

    ![alt text](<Readme Artifacts/image-2.png>)

10. ESLint - To make sure of consistency and correct syntax ESLint is being used. Search for ESLint and install

    ![alt text](<Readme Artifacts/image-1.png>)

11. Playwright Test for VSCode

    ![alt text](<Readme Artifacts/image-4.png>)

12. Prettier

    ![alt text](<Readme Artifacts/image-3.png>)

13. This completes the setup of Playwright and dependencies for running the solution

## Test Execution

### Git Bash Execution

By default VS Code will use Powershell for it's terminal so you will need to change this to use Bash by default.

When in the terminal view look for the "+" sign and press the down arrow "Launch profile" to see a selection of options.

![alt text](<Readme Artifacts/select_profile.jpg>)

From the dropdown select the "Select Default Profile" option

![alt text](<Readme Artifacts/default_profile_selection.jpg>)

By default the first option in the list will be Powershell. To change to Bash, select Git bash - this will now mean any new terminals will open in Bash.

![alt text](<Readme Artifacts/powershell_default.jpg>)

To confirm Bash is now default you can also double check via the "Launch Profile" dropdown and Git Bash should appear with (Default)

![alt text](<Readme Artifacts/bash_as_default.jpg>)

To execute tests against CI DEV in Git Bash

    ENVIRONMENT=cidev npx playwright test

![alt text](<Readme Artifacts/set_cidev_bash.jpg>)

To execute tests against Staging in Git Bash

    ENVIRONMENT=staging npx playwright test

![alt text](<Readme Artifacts/set_staging_bash.jpg>)

#### Execute tests via Playwright Headless Mode in Git Bash:

To run Playwright via Test Runner (Defined in Package.json under Scripts) run the below command:

    ENVIRONMENT=staging npm run test

#### Execute tests via Playwright Headed Mode in Git Bash:

To run tests in headed mode just for Chromium then the following command will work

    ENVIRONMENT=staging npm run test:chromium-headed

### Powershell Execution

By default VS Code will use Powershell for it's terminal unless you follow the above to set bash to default. If your preference is to use Powershell locally, then follow these instructions. To leverage the ability to choose an environment for tests to run, users will need set the environment variables prior to running the tests.

This can be achieved using the below commands first:

CIDEV

        $env:ENVIRONMENT="cidev"

This is how it will look in terminal

![alt text](<Readme Artifacts/set_cidev_ps.jpg>)

STAGING

        $env:ENVIRONMENT="staging"

This is how it will look in terminal

![alt text](<Readme Artifacts/set_staging_ps.jpg>)

#### Execute tests via Playwright Headless Mode:

To run Playwright via Test Runner (Defined in Package.json under Scripts) run the below command:

    npm run test

#### Execute tests via Playwright Headed Mode:

Alternatively, the tests can be run in a headed mode

To run all tests via headed mode run this command in terminal which also creates report output for each test (NOTE: Depending on configuration in playwright.config.ts this may open all browsers installed simultaneously ):

    npm run test:headed

To run tests in headed mode just for Chromium then the following command will work

    npm run test:chromium-headed

## Code quality

For code quality we will be using tools for linting. Linting is the process of checking the source code for Programmatic as well as Stylistic errors. This is most helpful in identifying some common and uncommon mistakes that are made during coding.

Tools we will use in this repository include ESLint, Prettier and Husky.

ESLint - One of the most widely used and popular linting tools for Javascript, Typescript etc. This will identify errors and give us the ability to fix those errors automatically using pre-defined rules.

Prettier - This tool will enforce consistent formatting across the tests.

Husky - To ensure consistency this repo now also uses Husky. Husky allows the automatic linting of any code changes prior to commits or a push to flag any issues that can then be resolved before it is committed to source control.

### Configuration

The commands to run Prettier and ESLint are defined under the scripts section of Package.json

![alt text](<Readme Artifacts/packagejson.jpg>)

Husky has been configured under the folder called Husky and the pre-commit file. In this file we can list the commands we want Husky to run prior to a commit. Currently setup to run both ESLint and Prettier before any commit.

![alt text](<Readme Artifacts/Husky.jpg>)

### Pre-Commit errors

As mentioned, prior to commiting your changes you may get ESLint or Prettier errors.

### ESLint errors or warnings prior to commit

In this scenario you made a change and tried to commit but when checking the Terminal window it throws an error and/or warning.

![alt text](<Readme Artifacts/eslint_error.jpg>)

Depending on the error there may need to be a manual change to the code but you can also try resolve issues by running the command below which may automatically fix the problem if it can.

    npm run lint:fix

Once the errors are fixed there may still be warning as per below

![alt text](<Readme Artifacts/eslint_warning.jpg>)

### ESLint success or no issues prior to commit

If all fixes have been applied or you have no ESLint issues then the terminal will show a message similar to below

![alt text](<Readme Artifacts/eslint_no_issues.jpg>)

### Prettier error or warning prior to commit

In this scenario you made a change and tried to commit but when checking the Terminal window it throws a warning regarding formatting.

![alt text](<Readme Artifacts/prettier warning.jpg>)

To resolve this issue we can run

    npm run prettier:fix

In the terminal it should show what files have been updated as can be seen in the image below

![alt text](<Readme Artifacts/prettier_fix.jpg>)

### Prettier success or no issues prior to commit

If all fixes have been applied or you have no prettier style issues then the terminal will show a message similar to below

![alt text](<Readme Artifacts/prettier_all_OK.jpg>)

## Test Summary:

The suite runs some basic tests on the CHS website using Playwright automation.

### Coverage Calculations

A file has been included called featureMap.yml. In this file we can map features and then get scripts to calculate the coverage for the suite prior to running the tests (note: it can also be run as it's own standalone test if % are needed without running all the tests.).

The format of the .yml is as follows

```
- page: "/pages/landingPage"
  features:
    cookies: true
    check links: false
```

The mappings can be thought of as key value pairs within the yaml files.

page: "/pages/landingPage": This line defines a new list with the URL path "/pages/landingPage".

features: This line starts a list of features associated with the current page as set above.

check links: false: This line is an example of a mapping which defines a feature/action named "check links" and sets its value to false which for example may be a placeholder for a feature not yet implemented or we just don't have tests that check the feature yet.

## Checking the report after running the tests:

### Results in Terminal or Test Results views using VS Code

After running any tests, the results will appear in both terminal and/or test results view of VS Code. We have configured a package called indent-list-reporter to make reading of the results slightly easier and it uses a set of simple keys to show what was run and the results for each spec file or test. As well as the overall status per test it gives a breakdown of time taken to run the test so it becomes a bit easier to spot any performance issues for tests via the IDE.

Screenshot below to illustrate how it will appear:

![alt text](<Readme Artifacts/list-reporter.jpg>)

### Playwright Report

Depending on configuration after each execution of a test or suite of tests Playwright will compile a report in HTML with details such as the time tests were run, results, execution time, etc.

The reports will either automatically appear in a browser launched on the users machine post test run or can be accessed by running a command such as via the terminal (note: it will be the same report generated):

    npx playwright show-report

The reports used currently are the built-in default Playwright reports and will look similar to the below, again clearly showing a breakdown of the tests executed:

![alt text](<Readme Artifacts/playwright_default_report.jpg>)

## Contributing to the project:

To contribute to the project please follow [Git flow](https://docs.github.com/en/get-started/quickstart/github-flow) and raise a PR.
Please make sure you're following best practices outlined [here](https://playwright.dev/docs/best-practices)

If you're new to Playwright automation please make use of Playwright's codegen for identifying page locators. To run codegen type the following:

```
npx playwright codegen playwright.dev
```

For more details, check out codegen [here](https://playwright.dev/docs/best-practices#use-codegen-to-generate-locators)

[def]: packagejson.png

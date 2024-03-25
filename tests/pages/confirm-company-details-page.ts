import { click } from '../../src/utils/action-utils';
import { expectElementToBeVisible, expectElementToHaveText, expectPageToHaveTitle } from '../../src/utils/assert-utils';
import { getText } from '../../src/utils/element-utils';
import { getLocator, getLocatorByLabel, getLocatorByRole } from '../../src/utils/locator-utils';

const languageSwitcher = () => getLocatorByLabel('Language switcher');
const backLink = () => getLocatorByRole('link', { name: 'Back' });
const heading = () => getLocatorByRole('heading', { name: 'Confirm this is the correct' });
const summaryList = () => getLocator('.govuk-summary-list');
const companyNumberInSummary = () => getLocator('.govuk-summary-list__value>>nth=1');
const continueButton = () => getLocatorByRole('button', { name: 'Confirm and continue' });
const chooseDifferentCompany = () => getLocatorByRole('link', { name: 'Choose a different company' });

export async function checkExpectedElementsAppear(number: string) {
  await expectPageToHaveTitle(`${await getText(heading())} - Find and update company information - GOV.UK`);
  await expectElementToBeVisible(languageSwitcher());
  await expectElementToBeVisible(backLink());
  await expectElementToBeVisible(heading());
  await expectElementToBeVisible(summaryList());
  await expectElementToHaveText(companyNumberInSummary(), number);
  await expectElementToBeVisible(continueButton());
  await expectElementToBeVisible(chooseDifferentCompany());
}

export async function confirmAndContinue() {
  await click(continueButton());
}

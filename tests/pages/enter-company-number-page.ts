import { fillAndEnter } from '../../src/utils/action-utils';
import { expectElementToBeVisible, expectPageToHaveTitle } from '../../src/utils/assert-utils';
import { getLocator, getLocatorByLabel, getLocatorByRole } from '../../src/utils/locator-utils';
import { getText } from '../../src/utils/element-utils';

const languageSwitcher = () => getLocatorByLabel('Language switcher');
const backLink = () => getLocatorByRole('link', { name: 'Back' });
const heading = () => getLocatorByRole('heading', { name: 'What is the company number?' });
const companyNumberInputField = () => getLocatorByRole('textbox');
const companyNumberDetails = () => getLocator('.govuk-details');
const continueButton = () => getLocatorByRole('button', { name: 'Continue' });

export async function checkExpectedElementAppear() {
  await expectPageToHaveTitle(`${await getText(heading())} - Find and update company information - GOV.UK`);
  await expectElementToBeVisible(languageSwitcher());
  await expectElementToBeVisible(backLink());
  await expectElementToBeVisible(heading());
  await expectElementToBeVisible(companyNumberInputField());
  await expectElementToBeVisible(companyNumberDetails());
  await expectElementToBeVisible(continueButton());
}

export async function enterCompanyNumber(number: string) {
  await fillAndEnter(companyNumberInputField(), number);
}

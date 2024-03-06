import { click } from '../../src/utils/action-utils';
import { expectElementToBeVisible, expectPageToHaveTitle } from '../../src/utils/assert-utils';
import { getText } from '../../src/utils/element-utils';
import { getLocatorByLabel, getLocatorByRole } from '../../src/utils/locator-utils';

const languageSwitcher = () => getLocatorByLabel('Language switcher');
const heading = () => getLocatorByRole('heading', { name: 'Success' });
const successBanner = () => getLocatorByRole('alert');
const viewCompaniesLink = () => getLocatorByRole('link', { name: 'View your companies' });

export async function checkExpectedElementsAppear() {
  await expectPageToHaveTitle(`${await getText(heading())} - Find and update company information - GOV.UK`);
  await expectElementToBeVisible(languageSwitcher());
  await expectElementToBeVisible(heading());
  await expectElementToBeVisible(successBanner());
  await expectElementToBeVisible(viewCompaniesLink());
}

export async function navigateToYourCompaniesPage() {
  await click(viewCompaniesLink());
}

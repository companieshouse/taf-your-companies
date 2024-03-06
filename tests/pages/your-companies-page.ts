import { click, gotoURL } from '../../src/utils/action-utils';
import {
  expectElementToBeVisible,
  expectElementToContainText,
  expectElementToHaveText,
  expectPageToHaveTitle,
} from '../../src/utils/assert-utils';
import { getLocatorByLabel, getLocatorByRole } from '../../src/utils/locator-utils';
import { Env } from '../../src/utils/env';
import { getText } from '../../src/utils/element-utils';

const languageSwitcher = () => getLocatorByLabel('Language switcher');
const heading = () => getLocatorByRole('heading', { name: 'Your companies' });
const addCompanyButton = () => getLocatorByRole('button', { name: 'Add a company' });
const yourCompaniesTable = () => getLocatorByRole('table');
const viewAndManageCompany = (companyNumber: string) =>
  getLocatorByRole('row', { name: `${companyNumber}` }).getByLabel('View and manage');

export async function navigateToYourCompaniesPage() {
  await gotoURL(Env.BASE_URL);
}

export async function checkExpectedElementsAppear() {
  await expectPageToHaveTitle(`${await getText(heading())} - Find and update company information - GOV.UK`);
  await expectElementToBeVisible(languageSwitcher());
  await expectElementToHaveText(heading(), 'Your companies');
  await expectElementToHaveText(addCompanyButton(), 'Add a company');
}

export async function checkExpectedElementsAppearWhenCompaniesExist() {
  await checkExpectedElementsAppear();
  await expectElementToBeVisible(yourCompaniesTable());
}

export async function checkCompanyExistsInTable(companyNumber: string) {
  await expectElementToContainText(yourCompaniesTable(), companyNumber);
}

export async function checkCompanyTableExists() {
  await expectElementToBeVisible(yourCompaniesTable());
}

export async function navigateToViewAndManageCompany(companyNumber: string) {
  await click(viewAndManageCompany(companyNumber));
}

export async function addACompany() {
  await click(addCompanyButton());
}

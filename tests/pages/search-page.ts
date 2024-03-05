//search-page.ts
import { click, fill, gotoURL } from '../../src/utils/action-utils';
import { expectElementToBeVisible, expectElementToHaveText } from '../../src/utils/assert-utils';
import { getLocator, getLocatorByRole } from '../../src/utils/locator-utils';
import { Env } from '../../src/utils/env';

const govLogo = () => getLocator('.govuk-header__logo');
const signInLink = () => getLocatorByRole('link', { name: 'Sign in / Register' });
const policiesLink = () => getLocatorByRole('link', { name: 'Policies' });
const searchHeadingXl = () => getLocator('start-searching');
const defaultText = () => getLocator('search-cta-label');
const searchInput = () => getLocator('#site-search-text');
const searchButton = () => getLocator('#search-submit');
const noResultsFound = () => getLocator('#no-results-heading');
const fileAbridgedFullAccLink = () => getLocatorByRole('link', { name: 'File abridged or full accounts' });
const otherDocsLink = () => getLocatorByRole('link', { name: 'Other document filings' });
const availabilityCheckerLink = () => getLocatorByRole('link', { name: 'Company name availability checker' });
const alphabetCompanySearchLink = () => getLocatorByRole('link', { name: 'Alphabetical company search' });
const dissolvedCompanySearchLink = () => getLocatorByRole('link', { name: 'Dissolved company search' });
const cookies = () => getLocatorByRole('button', { name: 'Accept analytics cookies' });
const hideCookies = () => getLocatorByRole('button', { name: 'Hide this message' });
const baseUrl: string = Env.BASE_URL || 'https://staging.company-information.service.gov.uk/'; //this will allow tests to be run on environments with different base URLs

export async function clickOnCookies() {
  await click(cookies());
  await click(hideCookies());
}

export async function navigateToSearchPage() {
  await gotoURL(baseUrl);
}

export async function checkExpectedTextAppear() {
  await expectElementToHaveText(searchHeadingXl(), 'Search the register');
  await expectElementToHaveText(defaultText(), 'Enter company name, number or officer name');
}

export async function invalidCompanySearch() {
  await click(searchInput());
  await fill(searchInput(), '121azzzzz');
  await click(searchButton());
  await expectElementToHaveText(noResultsFound(), 'No results found');
}

export async function checkLinksAppear() {
  await expectElementToBeVisible(govLogo());
  await expectElementToBeVisible(signInLink());
  await expectElementToBeVisible(policiesLink());
  await expectElementToBeVisible(fileAbridgedFullAccLink());
  await expectElementToBeVisible(otherDocsLink());
  await expectElementToBeVisible(availabilityCheckerLink());
  await expectElementToBeVisible(alphabetCompanySearchLink());
  await expectElementToBeVisible(dissolvedCompanySearchLink());
}

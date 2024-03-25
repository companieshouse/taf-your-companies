import { fillAndEnter } from '../../src/utils/action-utils';
import {
  expectElementToBeVisible,
  expectElementToContainText,
  expectPageToHaveTitle,
} from '../../src/utils/assert-utils';
import { getLocator, getLocatorByRole } from '../../src/utils/locator-utils';
import { getText } from '../../src/utils/element-utils';

const heading = () => getLocatorByRole('heading', { name: 'Company authentication' });
const companyDetail = () => getLocator('#company_details');
const authCodeInput = () => getLocatorByRole('textbox');
const authenticateButton = () => getLocatorByRole('button', { name: 'Authenticate' });
const requestAuthCode = () => getLocatorByRole('link', { name: 'Request an authentication code' });

export async function checkExpectedElementsAppear(number: string) {
  await expectPageToHaveTitle(await getText(heading()));
  await expectElementToBeVisible(heading());
  await expectElementToContainText(companyDetail(), number);
  await expectElementToBeVisible(authCodeInput());
  await expectElementToBeVisible(authenticateButton());
  await expectElementToBeVisible(requestAuthCode());
}

export async function enterAuthenticationCode(number: string) {
  await fillAndEnter(authCodeInput(), number);
}

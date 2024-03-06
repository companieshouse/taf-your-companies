import { click, fill, fillAndEnter } from '../../src/utils/action-utils';
import { getLocatorByLabel, getLocatorByRole } from '../../src/utils/locator-utils';

const email = () => getLocatorByLabel('Email address');
const password = () => getLocatorByLabel('Password');
const cookies = () => getLocatorByRole('button', { name: 'Accept analytics cookies' });
const hideCookies = () => getLocatorByRole('button', { name: 'Hide this message' });

export async function clickOnCookies() {
  await click(cookies());
  await click(hideCookies());
}

export async function login(userEmail: string, userPassword: string) {
  await fill(email(), userEmail);
  await fillAndEnter(password(), userPassword);
}

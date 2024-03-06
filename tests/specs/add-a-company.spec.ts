import { test } from '../../src/setup/page-setup';
import * as YourCompanies from '../pages/your-companies-page';
import * as LoginPage from '../pages/login-page';
import * as CompanyNumber from '../pages/enter-company-number-page';
import * as ConfirmCompany from '../pages/confirm-company-details-page';
import * as AuthenticationCode from '../pages/authentication-code-page';
import * as ConfirmedAddedCompany from '../pages/confirmation-company-added-page';
import { Env } from '../../src/utils/env';
import { axeTest } from '../../src/utils/axe-utils';
import { getPage } from '../../src/utils/page-utils';

test.describe('Add a company journey', () => {
  test.beforeEach(async ({}, testInfo) => {
    await YourCompanies.navigateToYourCompaniesPage();
    await LoginPage.clickOnCookies();
    if (testInfo.title.includes('first company')) {
      await LoginPage.login(Env.SECOND_EMAIL, Env.PASSWORD);
    } else {
      await LoginPage.login(Env.EMAIL, Env.PASSWORD);
    }
  });

  test('Your companies - add another company to your account', async () => {
    await YourCompanies.checkExpectedElementsAppearWhenCompaniesExist();
    await YourCompanies.addACompany();
    await CompanyNumber.checkExpectedElementAppear();
    await CompanyNumber.enterCompanyNumber(Env.COMPANY_NUMBER);
    await ConfirmCompany.checkExpectedElementsAppear(Env.COMPANY_NUMBER);
    await ConfirmCompany.confirmAndContinue();
    await AuthenticationCode.checkExpectedElementsAppear(Env.COMPANY_NUMBER);
    await AuthenticationCode.enterAuthenticationCode(Env.AUTH_CODE);
    await ConfirmedAddedCompany.checkExpectedElementsAppear();
    await ConfirmedAddedCompany.navigateToYourCompaniesPage();
    await YourCompanies.checkCompanyExistsInTable(Env.COMPANY_NUMBER);
  });

  test('Your companies - add first company to your account', async () => {
    await YourCompanies.checkExpectedElementsAppear();
    await YourCompanies.addACompany();
    await CompanyNumber.checkExpectedElementAppear();
    await CompanyNumber.enterCompanyNumber(Env.COMPANY_NUMBER);
    await ConfirmCompany.checkExpectedElementsAppear(Env.COMPANY_NUMBER);
    await ConfirmCompany.confirmAndContinue();
    await AuthenticationCode.checkExpectedElementsAppear(Env.COMPANY_NUMBER);
    await AuthenticationCode.enterAuthenticationCode(Env.AUTH_CODE);
    await ConfirmedAddedCompany.checkExpectedElementsAppear();
    await ConfirmedAddedCompany.navigateToYourCompaniesPage();
    await YourCompanies.checkCompanyTableExists();
    await YourCompanies.checkCompanyExistsInTable(Env.COMPANY_NUMBER);
  });

  test('Accessibility test for add a company journey @accessibility', async () => {
    await axeTest(getPage());
    await YourCompanies.addACompany();
    await axeTest(getPage());
    await CompanyNumber.enterCompanyNumber(Env.COMPANY_NUMBER);
    await axeTest(getPage());
    await ConfirmCompany.confirmAndContinue();
    await AuthenticationCode.enterAuthenticationCode(Env.AUTH_CODE);
    await axeTest(getPage());
  });
});

import { test } from '../../src/setup/page-setup'; // Import the test object from the page-setup module
import * as SearchPage from '../pages/search-page';

//AAA Pattern

// [Arrange]
// [Act]
// [Assert]

test.describe('Search page tests', () => {
  test.beforeEach(async () => {
    await SearchPage.navigateToSearchPage();
    await SearchPage.clickOnCookies();
  });

  test('Search page - confirm expected links appear', async () => {
    await SearchPage.checkLinksAppear();
  });

  test('Search page - search with invalid company number', async () => {
    await SearchPage.invalidCompanySearch();
  });
});

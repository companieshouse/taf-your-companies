import { Page, TestInfo, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export async function axeTest(page: Page, testInfo: TestInfo) {
  const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag22aa']).analyze();
  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json',
  });
  expect(accessibilityScanResults.violations).toEqual([]);
}

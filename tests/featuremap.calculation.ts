import { test as calculation } from '@playwright/test';
import { calculateYamlCoverage } from 'feature-map';

calculation('Feature Map', async () => {
  const runCalculationCoverage = process.env.CALCULATE_COVERAGE;
  if (runCalculationCoverage) {
    console.log('Calculating coverage');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await calculateYamlCoverage('./featureMap.yml' as string);
  } else {
    console.log('Skipping coverage calculation');
  }
});

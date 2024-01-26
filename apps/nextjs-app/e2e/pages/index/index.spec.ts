import { expect } from '@playwright/test';
import { test } from '../../fixture';

test.describe('Demo page', () => {
  test('should have the title in english by default', async ({ page }) => {
    await page.goto('/en');
    const title = await page.title();
    expect(title).toBe('Next.js');
  });
});

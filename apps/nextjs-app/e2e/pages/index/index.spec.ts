import { test, expect } from '@playwright/test';

test.describe('Demo page', () => {
  test('should have the title in english by default', async ({ page }) => {
    await page.goto('/en');
    const title = await page.title();
    expect(title).toBe('Next.js');
  });
});

import { test, expect } from '@playwright/test';

test('homepage check', async ({ page }) => {
  await page.goto('http://localhost:3001');

  await expect(page).toHaveTitle(/Boilerplate/);

  await expect(page.getByRole('heading', { name: 'Boilerplate' })).toBeVisible();
  await expect(page.getByText('Welcome to boilerplate!')).toBeVisible();
});

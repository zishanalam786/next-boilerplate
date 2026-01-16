import { test, expect } from '@playwright/test';

test('homepage has health check and user list', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Boilerplate/);

  await expect(page.getByRole('heading', { name: 'Boilerplate Testing' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Health Check' })).toBeVisible();

  await expect(page.getByText('UP')).toBeVisible();
});

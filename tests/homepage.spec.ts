import { test, expect } from '@playwright/test';

const URL = 'https://solcast.com.br';

test.describe('Homepage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('should display company logo', async ({ page }) => {
    await expect(page.locator('img[src*="Logotipo_Solcast"]')).toBeVisible();
  });

  test('should display main headline', async ({ page }) => {
    await expect(page.locator('.et_pb_text_inner p').first()).toBeVisible();
  });

  test('should display services section link', async ({ page }) => {
    await expect(page.locator('a[href*="servicos"]').first()).toBeVisible();
  });

  test('should display cases section link', async ({ page }) => {
    await expect(page.locator('a[href*="cases"]').first()).toBeVisible();
  });

  test('should display budget button', async ({ page }) => {
    await expect(page.locator('a[href="#contato"]').first()).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.locator('text=contato@solcast.com.br')).toBeVisible();
  });

});
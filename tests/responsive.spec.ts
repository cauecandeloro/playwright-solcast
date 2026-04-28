import { test, expect } from '@playwright/test';

const URL = 'https://solcast.com.br';

test.describe('Responsive', () => {

  test('should display hamburger menu on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(URL);
    await expect(page.locator('.mobile_menu_bar')).toBeVisible();
  });

  test('should display budget button on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(URL);
    await expect(page.locator('a[href="#contato"]').first()).toBeVisible();
  });

  test('should display logo on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(URL);
    await expect(page.locator('img[src*="Logotipo_Solcast"]')).toBeVisible();
  });

  test('should display desktop menu on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(URL);
    await expect(page.locator('.et-menu-nav')).toBeVisible();
  });

  test('should display logo on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(URL);
    await expect(page.locator('img[src*="Logotipo_Solcast"]')).toBeVisible();
  });

});
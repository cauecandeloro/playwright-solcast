import { test, expect } from '@playwright/test';

const URL = 'https://solcast.com.br';

test.describe('Navigation', () => {

  test('should load homepage successfully', async ({ page }) => {
    await page.goto(URL);
    await expect(page).toHaveURL(URL + '/');
    await expect(page).toHaveTitle(/Solcast/);
  });

  test('should navigate to Sobre nos page', async ({ page }) => {
    await page.goto(URL);
    await page.click('a[href*="sobre-nos"]');
    await expect(page).toHaveURL(`${URL}/sobre-nos/`);
  });

  test('should navigate to Servicos page', async ({ page }) => {
    await page.goto(URL);
    await page.click('a[href*="servicos"]');
    await expect(page).toHaveURL(`${URL}/servicos/`);
  });

  test('should navigate to Cases page', async ({ page }) => {
    await page.goto(URL);
    await page.click('a[href*="cases"]');
    await expect(page).toHaveURL(`${URL}/cases/`);
  });

  test('should navigate to Contato page', async ({ page }) => {
    await page.goto(URL);
    await page.click('a[href*="contato"]');
    await expect(page).toHaveURL(`${URL}/contato/`);
  });

});
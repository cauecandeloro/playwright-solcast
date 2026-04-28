import { test, expect } from '@playwright/test';

const URL = 'https://solcast.com.br/contato/';

test.describe('Contact Form', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.locator('#et_pb_contact_nome_0')).toBeVisible();
    await expect(page.locator('#et_pb_contact_telefone_0')).toBeVisible();
    await expect(page.locator('#et_pb_contact_e-mail_0')).toBeVisible();
    await expect(page.locator('#et_pb_contact_mensagem_0')).toBeVisible();
  });

  test('should display submit button', async ({ page }) => {
    await expect(page.locator('button[name="et_builder_submit_button"]')).toBeVisible();
  });

  test('should accept input in name field', async ({ page }) => {
    await page.fill('#et_pb_contact_nome_0', 'John Doe');
    await expect(page.locator('#et_pb_contact_nome_0')).toHaveValue('John Doe');
  });

  test('should accept input in phone field', async ({ page }) => {
    await page.fill('#et_pb_contact_telefone_0', '+55 16 99999-9999');
    await expect(page.locator('#et_pb_contact_telefone_0')).toHaveValue('+55 16 99999-9999');
  });

  test('should accept input in email field', async ({ page }) => {
    await page.fill('#et_pb_contact_e-mail_0', 'test@email.com');
    await expect(page.locator('#et_pb_contact_e-mail_0')).toHaveValue('test@email.com');
  });

  test('should accept input in message field', async ({ page }) => {
    await page.fill('#et_pb_contact_mensagem_0', 'This is a test message.');
    await expect(page.locator('#et_pb_contact_mensagem_0')).toHaveValue('This is a test message.');
  });

});
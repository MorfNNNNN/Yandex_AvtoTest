import { test, expect } from '@playwright/test'

test('user can log in', async ({ page }) => {
  await page.goto(process.env.BASE_URL ?? 'http://localhost:3000/login')
  await page.getByLabel('Email').fill('qa@example.test')
  await page.getByLabel('Password').fill('secret')
  await page.getByRole('button', { name: /sign in/i }).click()
  await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible()
})

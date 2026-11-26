import { test, expect } from '@playwright/test';

test('redbus', async ({ page }) => {

    // launch redbus
    await page.goto('https://www.redbus.in/');
    console.log('redbus opened');

    });

test('flipkart', async ({ page }) => {
    // launch flipkart

    await page.goto('https://www.flipkart.com/');
    console.log('flipkart opened');

});
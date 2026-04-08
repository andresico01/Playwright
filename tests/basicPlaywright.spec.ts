import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('');
}  );

test('How to interact with list of elements', async ({ page }) => {      
    await expect(page.getByTestId('cta-primary')).toHaveCount(3);

    // Get the count of elements with data-testid="cta-primary"
    const count = await page.getByTestId('cta-primary').count();
    console.log(`Number of elements with data-testid="cta-primary": ${count}`);

    // Then we can interact with the elements, for example, click on the first one using nth(0)
    await page.getByTestId('cta-primary').nth(0).click();

     /* 
    this implicitly waits is to can see the action in the video result, 
    but in real test we should avoid it and use expect to wait for the element to be visible or hidden
    */
    await page.waitForTimeout(1000);
    await page.getByTestId('close').click();

   

    // Or using first() method
    await page.getByTestId('cta-primary').first().click();
    /* 
    this implicitly waits is to can see the action in the video result, 
    but in real test we should avoid it and use expect to wait for the element to be visible or hidden
    */
    await page.waitForTimeout(1000);
    await page.getByTestId('close').click();

    
    // Or used filer to click on the element with specific text
    
    
    await page.getByTestId('cta-primary').filter({ hasText: 'Juar gratis' }).click();
    await page.getByTestId('close').click();
    /* 
    this implicitly waits is to can see the action in the video result, 
    but in real test we should avoid it and use expect to wait for the element to be visible or hidden
    */

    await page.waitForTimeout(1000);

    
});

test('How used expect and the diferente methods to do the validations', async ({ page, isMobile }) => {

    if (isMobile) {

        await page.getByTestId('riotbar:mobile:menu:button-open').click();
        await expect(page.getByTestId('riotbar:mobile:link-patch_notes')).toContainText('Notas de');
        await expect(page.getByTestId('masthead-logo')).toBeVisible();       
        await expect(page.getByTestId('riotbar:mobile:link-champions')).toHaveText('Campeones');
        await expect(page.locator('//div[@data-testid="blade-content"]//span[text()="Akali"]')).toHaveCount(1);

    }else {

        await expect(page.getByTestId('riotbar:desktopNav:link-internal-patch_notes')).toContainText('Notas de');
        await expect(page.getByTestId('masthead-logo')).toBeVisible();       
        await expect(page.getByTestId('riotbar:desktopNav:link-internal-champions')).toHaveText('Campeones');
        await expect(page.locator('//div[@data-testid="blade-content"]//span[text()="Akali"]')).toHaveCount(1);

    }
});

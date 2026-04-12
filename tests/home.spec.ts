import {test, expect} from '@playwright/test';
import { HomePage } from '@page/home.page';

test.describe('Home page tests', () => {        
    
    test.beforeEach(async ({ page }) => {
        await page.goto('');
    });

    test('How to interact with list of elements', async ({ page,isMobile }) => {
        const homePage = new HomePage(page, isMobile);
        if (isMobile) {
            await page.getByRole('button', { name: 'Aceptar todo' }).click();
            await page.getByTestId('riotbar:mobile:menu:button-open').click();
        }
        const noticias = await homePage.getNoticiasGame();
        await noticias.click();

        await expect(noticias).toBeVisible();
       
        await page.getByText('RIOT GAMES').first().click();

        await expect(page.getByText('MSI 2024').first()).toContainText('LA PRUEBA DE FUERZA DEFINITIVA | MSI 2024');
    });

});

import { test, expect } from '@playwright/test';
import { RiotPage } from '@page/riot.page'; 
import { HomePage } from '@page/home.page';
test.describe('Test group', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('riot page new', async ({ page,isMobile }) => {
    const riotPage = new RiotPage(page);
    const homePage = new HomePage(page, isMobile);
    if (isMobile) {
        await page.getByRole('button', { name: 'Aceptar todo' }).click();
        await page.getByTestId('riotbar:mobile:menu:button-open').click();
    }
    const noticias = await homePage.getNoticiasGame();
    await noticias.click();

    await expect(noticias).toBeVisible();
    
    await page.getByText('RIOT GAMES').first().click();
    await expect(await riotPage.getCard('MSI 2024')).toHaveText('LA PRUEBA DE FUERZA DEFINITIVA | MSI 2024');
  });

  [
    {name:'MSI 2024',expected:'LA PRUEBA DE FUERZA DEFINITIVA | MSI 2024'},
    {name:'Retransmisiones',expected:'Retransmisiones en Riot Mobile'},
    {name:'RiotX',expected:'RiotX Arcane: Hasta la próxima'}
  ].forEach(({ name, expected }) => {
    test(`testing all the cards with ${name}`, async ({ page,isMobile }) => {
      const riotPage = new RiotPage(page);
      const homePage = new HomePage(page, isMobile);
      if (isMobile) {
          await page.getByRole('button', { name: 'Aceptar todo' }).click();
          await page.getByTestId('riotbar:mobile:menu:button-open').click();
      }
      
      const noticias = await homePage.getNoticiasGame();
      await noticias.click();
      await expect(noticias).toBeVisible();
      await page.getByText('RIOT GAMES').first().click();
      await riotPage.clickVerMas();
      await expect(await riotPage.getCard(name)).toHaveText(expected);
     
    });
  });


});

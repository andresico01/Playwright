import { Locator, Page } from '@playwright/test';
import { boxedStep } from '@decorator/step';

export class RiotPage {
   
    private verMas: Locator;
    private cards: Locator;

    constructor(protected page: Page) {
        this.verMas = page.getByRole('button',{name : 'VER MÁS'});
        this.cards = page.getByTestId('card');
    }

    @boxedStep
    async clickVerMas() : Promise<void> {
        await this.verMas.click();
    }

    @boxedStep
    async getCard(name: string) : Promise<Locator> {
        return this.cards.getByText(name).first();
    }

    @boxedStep
    async clickOnCard(name: string) : Promise<void> {
        await this.cards.getByText(name).first().click();
    }




}
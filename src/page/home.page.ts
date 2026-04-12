import { Locator, Page } from '@playwright/test';
import { boxedStep } from '@decorator/step';


export class HomePage { 

    private juegoPage: Locator;
    private campeonesPage: Locator;
    private noticiasPage: Locator;
    private notaversionPage: Locator;
    private readonly testid: string = 'riotbar:desktopNav:link-internal-news';

      constructor(protected page: Page, protected isMobile?: boolean) {
        const noticesTestId = isMobile ? this.testid.replace('desktopNav', 'mobile').replace('internal-', '') : this.testid;
        this.juegoPage = page.getByTestId('juego-link');
        this.campeonesPage = page.getByTestId('campeones-link');
        this.noticiasPage = page.getByTestId(noticesTestId);
        this.notaversionPage = page.getByTestId('notaversion-link');
      }

    @boxedStep
    async getJuegoGame() : Promise<Locator> {
        return this.juegoPage;
    }  

    @boxedStep
    async getCampeonesGame() : Promise<Locator> {
        return this.campeonesPage;
    }

    @boxedStep
    async getNotaversionGame() : Promise<Locator> {
        return this.notaversionPage;
    }

    @boxedStep
    async getNoticiasGame() : Promise<Locator> {
        return this.noticiasPage;
    }

    @boxedStep  
    async selectNoticiaGame(option: string) : Promise<Locator> {
        return this.noticiasPage.getByText(option);
    }
        

    @boxedStep
    async searchElementByTestId(testId: string): Promise<Locator> {
    return this.page.getByTestId(testId);
    }


    @boxedStep
    async searchElementByLocator(selector: string): Promise<Locator> {
        return this.page.locator(selector);
    }   
    
  



}
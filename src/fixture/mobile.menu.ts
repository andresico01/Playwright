import { Locator } from '@playwright/test';




    /** 
       this function is used to select the menu in mobile view, it receives the locator of the menu button and a boolean indicating if it's mobile or not. If it's mobile, it clicks on the menu button, otherwise it does nothing.
    */
    export async function selectMenu(mobileMenu: Locator, isMobile: boolean ): Promise<void> {    
        if (!isMobile) return;
        await mobileMenu.click();
        
    }    

import { Page } from '@playwright/test';

export class NavigatePath {
    constructor(private readonly page: Page) { }

    async goto(path: string): Promise<void> {
        await this.page.goto(path);
    }
}



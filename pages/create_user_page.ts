import type { Page } from 'playwright';

export class CreateUserPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}
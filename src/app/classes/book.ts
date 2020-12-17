export class Book {
    title: string;
    authors?: string[];
    status?: boolean;
    constructor(title: string, authors?: string[], status?: boolean){
        this.title = title;
        this.authors = authors;
        this.status = status;
    }
}
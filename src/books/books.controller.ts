import { Controller, Delete, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    async getBooks() {
        return this.booksService.getBooks();
    }

    @Post()
    async createBook() {
        return this.booksService.createBook();
    }

    @Delete('/clear-table')
    async clearTable() {
        return this.booksService.clearTable();
    }
}

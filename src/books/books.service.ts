import { Injectable } from '@nestjs/common';
import prisma from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
    async getBooks() {
        return prisma.book.findMany();
    }

    async createBook() {
        return prisma.book.create({
            data: {
                date: new Date(),
                title: '123'
            }
        });
    }

    async clearTable() {
        return prisma.book.deleteMany();
    }
}

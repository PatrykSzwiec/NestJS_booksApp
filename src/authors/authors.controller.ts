import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get('/')
  getAll() {
    return this.authorsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const autho = await this.authorsService.getById(id);
    if (!autho) throw new NotFoundException('Author not found');
    return autho;
  }
}

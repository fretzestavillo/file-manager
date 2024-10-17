import { Controller, Get } from '@nestjs/common';
import { FileService } from './file.service';

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  getData() {
    return this.fileService.getData();
  }
}

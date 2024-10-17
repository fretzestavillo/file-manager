import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}

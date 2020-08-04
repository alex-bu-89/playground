import { Controller, Get, Header, Res, Response } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
// import * as JSZip from 'jszip';

@Controller('export')
export class ExportController {
  @Get()
  @Header('Content-Type', 'application/zip')
  @Header('Content-Disposition', 'attachment; filename=test.zip')
  exportZip(@Res() res: Response): any {
    const stream = fs.createReadStream(path.resolve(__dirname, '../../test.zip'));

    // @ts-ignore
    stream.pipe(res);
  }
}

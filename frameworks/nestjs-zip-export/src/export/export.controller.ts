import { Controller, Get, Header, Res, Response } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as archiver from 'archiver';

@Controller('export')
export class ExportController {
  @Get()
  @Header('Content-Type', 'application/zip')
  @Header('Content-Disposition', 'attachment; filename=test.zip')
  exportZip(@Res() res: Response): any {
    const archive = archiver('zip');

    // error handling
    archive.on('error', (err) => {
      throw err;
    });

    // end zipping
    archive.on('end', function() {
      console.log('---------- Archive wrote %d bytes', archive.pointer());
    });

    // json to export
    const jsonToZip = {"Hello": "World"};

    archive.append(JSON.stringify(jsonToZip), { name: 'someJsonExport.json' });
    archive.finalize(); 

    // const stream = fs.createReadStream(path.resolve(__dirname, '../../test.zip'));

    // stream magic
    // @ts-ignore
    archive.pipe(res);
  }
}

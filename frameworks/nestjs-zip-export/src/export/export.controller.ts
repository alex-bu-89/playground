import { Controller, Get, Header, Res } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as JSZip from 'jszip';

@Controller('export')
export class ExportController {
  @Get()
  @Header('Content-Type', 'application/zip')
  @Header('Content-Disposition', 'attachment')
  exportZip(): any {
    console.log('------ ', path.resolve(__dirname));
    return fs.createReadStream(path.resolve(__dirname, '../../test.zip'));

    // const zip = new JSZip();
    // zip.file("hello.txt", "Hello World\n");
    
    // let promise = null;
    // if (JSZip.support.uint8array) {
    //   promise = zip.generateAsync({type : "uint8array"});
    // } else {
    //   promise = zip.generateAsync({type : "string"});
    // }

    // console.log('------ ', promise);
    // const data = fs.createReadStream(path.join(__dirname, 'Hello world'));

    // data.pipe(response);
  }
}

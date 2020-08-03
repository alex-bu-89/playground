import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExportController } from './export/export.controller';

@Module({
  imports: [],
  controllers: [AppController, ExportController],
  providers: [AppService],
})
export class AppModule {}

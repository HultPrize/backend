import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FormsController],
  providers: [FormsService, DatabaseService],
})
export class FormsModule {}

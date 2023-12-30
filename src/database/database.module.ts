// database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'DATABASE_POOL',
      useFactory: async (configService: ConfigService) => {
        return new Pool({
          host: configService.get('POSTGRES_HOST', 'localhost'),
          port: configService.get('POSTGRES_PORT', 5432),
          user: configService.get('POSTGRES_USER', 'your_username'),
          password: configService.get('POSTGRES_PASSWORD', 'your_password'),
          database: configService.get('POSTGRES_DB', 'your_database'),
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['DATABASE_POOL'],
})
export class DatabaseModule {}

import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) {}

  async runQuery(query: string, params?: unknown[]) {
    return this.pool.query(query, params);
  }
}

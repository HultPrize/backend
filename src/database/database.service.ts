import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  connect() {
    throw new Error('Method not implemented.');
  }
  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) {}

  async runQuery(query: string, params?: unknown[]) {
    return this.pool.query(query, params);
  }
}

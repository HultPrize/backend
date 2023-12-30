import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Team } from './models/Team';

@Injectable()
export class FormsService {
  constructor(private readonly database: DatabaseService) {}

  async createTeam(newTeam: Team) {
    const { name, members } = newTeam;

    const result = await this.database.runQuery(
      'INSERT INTO teams (name, members) VALUES ($1, $2) RETURNING *',
      [name, members],
    );

    return result.rows[0];
  }
}

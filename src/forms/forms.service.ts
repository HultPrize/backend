import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Interested } from './models/Interested';
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

  async createInterested(newInterested: Interested) {
    const {
      first_name,
      last_name,
      email,
      phone,
      faculty,
      academic_level,
      is_external,
      university,
      sdg,
    } = newInterested;

    const result = await this.database.runQuery(
      'INSERT INTO member (first_name, last_name, email, phone, faculty, academic_level, is_external, university, sdg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        first_name,
        last_name,
        email,
        phone,
        faculty,
        academic_level,
        is_external,
        university,
        sdg,
      ],
    );

    return result.rows[0];
  }  
}

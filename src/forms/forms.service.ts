import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Interested } from './models/Interested';
import { Team } from './models/Team';

@Injectable()
export class FormsService {
  constructor(private readonly database: DatabaseService) {}
  
  async createTeam(newTeam: Team) {
    const {
      team_name,
      sdg,
    } = newTeam;

    const result = await this.database.runQuery(
      'INSERT INTO team (team_name, sdg) VALUES ($1, $2) RETURNING *',
      [
        team_name,
        sdg,
      ],
    );

    return result.rows[0];
  }

  async createLeader(newTeam: Team) {
    const {
      first_name,
      last_name,
      email,
      phone,
      faculty,
      academic_level,
      is_leader,
      team_name,
      is_external,
      university,
      sdg,
    } = newTeam;

    const result = await this.database.runQuery(
      'INSERT INTO member (first_name, last_name, email, phone, faculty, academic_level, is_leader, team_name, is_external, university, sdg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        first_name,
        last_name,
        email,
        phone,
        faculty,
        academic_level,
        is_leader,
        team_name,
        is_external,
        university,
        sdg,
      ],
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

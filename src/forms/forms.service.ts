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
      firstName,
      lastName,
      email,
      phone,
      faculty,
      academicLevel,
      isLeader,
      team,
      isExternal,
      university,
      sdg,
    } = newInterested;

    const result = await this.database.runQuery(
      'INSERT INTO INTERESADO (Nombre, Apellido, Correo, Telefono, Facultad, Nivel_Academico, Es_lider, Equipo, Externo, Universidad, SDGs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        firstName,
        lastName,
        email,
        phone,
        faculty,
        academicLevel,
        isLeader,
        team,
        isExternal,
        university,
        sdg,
      ],
    );

    return result.rows[0];
  }
}

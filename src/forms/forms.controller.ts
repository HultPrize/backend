import { Body, Controller, Logger, Post } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Team } from './models/Team';
import { Interested } from './models/Interested';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('teams')
  createTeam(@Body() body: Team) {
    return this.formsService.createTeam(body);
  }

  @Post('interested')
  createInterested(@Body() body: Interested) {
    Logger.log(body);
    return this.formsService.createInterested(body);
  }
}

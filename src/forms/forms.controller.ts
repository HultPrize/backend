import { Body, Controller, Post, Req } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Team } from './models/Team';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('teams')
  create(@Body() body: Team) {
    return this.formsService.createTeam(body);
  }
}

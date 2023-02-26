import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller(`/animals`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAnimals(@Req() request: Request): string {
    const q = request.query.q?.toString().toLowerCase() || '';
    const results = this.appService
      .getAnimals()
      .filter((animal) => animal.type.toLowerCase().includes(q));

    return JSON.stringify(results);
  }

  @Post()
  resetAnimals() {
    this.appService.resetAnimals();

    const results = this.appService.getAnimals();

    return JSON.stringify(results);
  }
}

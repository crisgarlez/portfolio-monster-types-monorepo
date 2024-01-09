import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MonsterTypesService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<any> {
    const response$ = await this.httpService.get(
      'http://localhost:3009/monster-types',
    );

    const response = await lastValueFrom(response$);

    console.log('response: ' + JSON.stringify(response.data));

    return response.data;
  }
}

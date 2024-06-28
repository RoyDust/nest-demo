import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getReq')
  getReq(@Req() request: Request, @Res() response: Response): any {
    console.log(request.headers);
    response.status(HttpStatus.OK).send();
    return {
      headers: request.headers,
    };
  }

  @Get('getId/:id?')
  getQuery(
    @Param('id') params: string,
    @Query() query: { value: number; qx: number },
  ): any {
    console.log('params', params);
    console.log('query', query);
    return {
      params,
      query,
    };
  }
}

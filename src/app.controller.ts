import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckIsMultiplesOfEleven } from './checkIsMultiplesOfEleven';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/isMultipleOfEleven')
  checkIsMultipleOfEleven(
    @Body('numbers') numbers: number[],
  ): CheckIsMultiplesOfEleven[] {
    return this.appService.checkIsMultipleOfEleven(numbers);
  }
}

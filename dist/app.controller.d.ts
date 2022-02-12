import { AppService } from './app.service';
import { CheckIsMultiplesOfEleven } from './checkIsMultiplesOfEleven';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    checkIsMultipleOfEleven(numbers: number[]): CheckIsMultiplesOfEleven[];
}

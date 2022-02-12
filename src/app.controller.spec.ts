import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return check if number is multiple of eleven', () => {
      const res = appController.checkIsMultipleOfEleven([112233]);
      expect(res[0]).toMatchObject({
        number: 112233,
        isMultiple: true,
      });
    });
  });
});
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('checkIsMultipleOfEleven', () => {
    it('is multiple property must be true', () => {
      const res = appService.checkIsMultipleOfEleven([323455693]);
      expect(res[0].isMultiple).toBe(true);
    });

    it('is multiple property must be false', () => {
      const res = appService.checkIsMultipleOfEleven([112234]);
      expect(res[0].isMultiple).toBe(false);
    });
  });

  describe('converStringArrayToNumber', () => {
    it('should convert string array to number array', () => {
      const res = appService.converStringArrayToNumber(['323455693', '123']);
      expect(res[0]).toBe(323455693);
      expect(res[1]).toBe(123);
    });
  });

  describe('convertStringToNumber', () => {
    it('should return number converted from string', () => {
      const res = appService.convertStringToNumber('123');
      expect(res).toBe(123);
    });

    it('should return 0 if input is undefided', () => {
      const res = appService.convertStringToNumber(undefined);
      expect(res).toBe(0);
    });

    it('should throw error if input is not a number', () => {
      try {
        appService.convertStringToNumber('test');
      } catch (error) {
        expect(error.message).toBe('this is not a number');
      }
    });
  });

  describe('sumNumbers', () => {
    it('should a array of numbers', () => {
      const res = appService.sumNumbers([1, 2, 3, undefined]);
      expect(res).toBe(6);
    });
  });

  describe('isMultipleOfEleven', () => {
    it('should return true for number multiple of eleven', () => {
      const res = appService.isMultipleOfEleven(33);
      expect(res).toBe(true);
    });

    it('should return false for number that is not multiple of eleven', () => {
      const res = appService.isMultipleOfEleven(51);
      expect(res).toBe(false);
    });
  });
});
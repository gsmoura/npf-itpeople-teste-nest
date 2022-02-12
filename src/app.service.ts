import { Injectable } from '@nestjs/common';
import { CheckIsMultiplesOfEleven } from './checkIsMultiplesOfEleven';

@Injectable()
export class AppService {
  checkIsMultipleOfEleven(numbers: number[]): CheckIsMultiplesOfEleven[] {
    try {
      return numbers.map((number) => {
        const array = [...number.toString()];
        const oddNumbersArray = array.filter((x, index) => index % 2 === 1);
        const evenNumbersArray = array.filter((x, index) => index % 2 === 0);
        const oddNumbers = this.converStringArrayToNumber(oddNumbersArray);
        const evenNumbers = this.converStringArrayToNumber(evenNumbersArray);
        const oddNumbersSum = this.sumNumbers(oddNumbers);
        const evenNumbersSum = this.sumNumbers(evenNumbers);
        return {
          number,
          isMultiple: this.isMultipleOfEleven(oddNumbersSum - evenNumbersSum),
        };
      });
    } catch (error) {
      throw new Error('Internal server error');
    }
  }

  converStringArrayToNumber(text: string[]): number[] {
    return text.map((x) => this.convertStringToNumber(x));
  }
  
  convertStringToNumber(text: string): number {
    if (!text) return 0;
    const converted = Number(text);
    if (isNaN(converted)) throw new Error('this is not a number');
    return converted;
  }

  sumNumbers(numbers: number[]): number {
    let total = 0;
    for (const number of numbers) if (number) total += number;
    return total;
  }

  isMultipleOfEleven(number: number): boolean {
    return number === 0 || number % 11 === 0;
  }
}

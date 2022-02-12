"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    checkIsMultipleOfEleven(numbers) {
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
        }
        catch (error) {
            throw new Error('Internal server error');
        }
    }
    converStringArrayToNumber(text) {
        return text.map((x) => this.convertStringToNumber(x));
    }
    convertStringToNumber(text) {
        if (!text)
            return 0;
        const converted = Number(text);
        if (isNaN(converted))
            throw new Error('this is not a number');
        return converted;
    }
    sumNumbers(numbers) {
        let total = 0;
        for (const number of numbers)
            if (number)
                total += number;
        return total;
    }
    isMultipleOfEleven(number) {
        return number === 0 || number % 11 === 0;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeService {

    constructor(
    ) { }

    get date(): Date {
        const date = new Date();

        return date;
    }

}


// ----------- unit test below ----------- //

import { TestBed } from '@angular/core/testing';

import { DateTimeService } from './date-time.service';

describe('DateTimeService', () => {

    let service: DateTimeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DateTimeService
            ]
        });

        service = TestBed.get(DateTimeService);
    });

    describe('get date', () => {

        it('should return a date', () => {
            // Arrange
            const expected = new Date().getUTCMilliseconds();

            // Act
            const actual = service.date.getUTCMilliseconds();

            // Assert
            expect(actual).toBeGreaterThanOrEqual(expected);
        });

    });

});
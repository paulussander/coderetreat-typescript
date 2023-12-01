import {CoordinateSanitizer, day1, day1_part2} from './day1';

describe('calibration detector', () => {
  it('detects the first and last number of each line, combines them', () => {
    const input = '4jjfvnn6lfi7v8ejj1';
    expect(new CoordinateSanitizer().processLine(input)).toEqual(41);
  });
  it('returns null if no number is present', () => {
    const input = 'jjfvnnlfgivejj';
    expect(new CoordinateSanitizer().processLine(input)).toEqual(NaN);
  });
 it('combines the same digit twice of only one digit is present', () => {
   const input = 'jjfvnnlfigvejj1';
     let actual = new CoordinateSanitizer().processLine(input);
     console.log(actual)
     expect(actual).toEqual(11);
  });

 it('combines the same digit twice of only one digit is present', () => {
   const input = 'jjfvnnlfivejj1';
     let actual = new CoordinateSanitizer().processLine(input);
     console.log(actual)
     expect(actual).toEqual(11);
  });
 it('detects the first and last number of each line, combines them', () => {
    const input = '4jjfvnn6lfi7v8ejj1';
    expect(new CoordinateSanitizer().processLineWithWords(input)).toEqual(41);
  });
  it('returns null if no number is present', () => {
    const input = 'jjfvnnlfgivejj';
    expect(new CoordinateSanitizer().processLineWithWords(input)).toEqual(NaN);
  });
 it('combines the same digit twice of only one digit is present', () => {
   const input = 'jjfvnnlfigvejj1';
     let actual = new CoordinateSanitizer().processLineWithWords(input);
     console.log(actual)
     expect(actual).toEqual(11);
  });

 it('can detect verbose digits is present', () => {
   const input = 'jjfvnnlfivejj1';
   console.log(input.includes("five"));
     let actual = new CoordinateSanitizer().processLineWithWords(input);
     console.log(actual)
     expect(actual).toEqual(51);
  });

 it('run day1', () => {
   console.log(day1());
  });

 it('run day1 - part 2', () => {
   console.log(day1_part2());
  });
});

import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort'
import genRandNum from '../scripts/genRandNum'

describe('Bubble Sort with filter', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.function;
  })

  it('should sort an array', () => {
    let numbers = [5, 0, 1, 3, 4, 2];
    let sorted = bubbleSort(numbers);

    expect(sorted).to.deep.equal([0, 1, 2, 3, 4, 5])
  })

  it('should sort large arrays', () => {
    let randomArray = genRandNum(500);
    let compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  })
  it('should sort negative numbers properly', () => {
    let numbers2 = [1, 0, -3, -467, 4];
    let sorted = bubbleSort(numbers2);

    expect(sorted).to.deep.equal([-467, -3, 0, 1, 4])
  })

})

import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort'
import genRandNum from '../scripts/genRandNum'

describe('Insertion Sort with filter', () => {
  it ('should be a function', () => {
    expect(insertionSort).to.be.function
  });

  it('should sort an array', () => {
    let numbers = [5, 0, 1, 3, 4, 2];
    let sorted = insertionSort(numbers);

    expect(sorted).to.deep.equal([0, 1, 2, 3, 4, 5])
  })

  it('should arrange letters alphabetically', () => {
    let letters = ['z', 't', 'g', 'h', 'a', 'b'];
    let sorted = insertionSort(letters);

    expect(sorted).to.deep.equal(['a', 'b', 'g', 'h', 't', 'z'])
  })

  it('should sort large arrays', () => {
    let randomArray = genRandNum(13000);
    let compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(insertionSort(randomArray)).to.deep.equal(compSorted);
  })
  it('should sort negative numbers properly', () => {
    let numbers2 = [1, 0, -3, -467, 4];
    let sorted = insertionSort(numbers2);

    expect(sorted).to.deep.equal([-467, -3, 0, 1, 4])
  })

})

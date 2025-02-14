import { NormalizeArticlesData } from './normalize-articles-data';

describe('NormalizeArticlesData utility function', () => {
  test('should return an empty array if no data is provided', () => {
    expect(NormalizeArticlesData()).toEqual([]);
  });
});

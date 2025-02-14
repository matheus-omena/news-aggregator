import { timeAgo } from '../utils/time-ago';

describe('timeAgo utility function', () => {
  test("should return 'Unknown date' if no date is provided", () => {
    expect(timeAgo()).toBe('Unknown date');
  });

  test('should return seconds ago for very recent dates', () => {
    const now = new Date();
    const fewSecondsAgo = new Date(now.getTime() - 5000).toISOString();
    expect(timeAgo(fewSecondsAgo)).toBe('5 sec ago');
  });

  test('should return minutes ago correctly', () => {
    const now = new Date();
    const tenMinutesAgo = new Date(now.getTime() - 10 * 60 * 1000).toISOString();
    expect(timeAgo(tenMinutesAgo)).toBe('10 min ago');
  });

  test('should return hours ago correctly', () => {
    const now = new Date();
    const threeHoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString();
    expect(timeAgo(threeHoursAgo)).toBe('3 hours ago');
  });

  test('should return days ago correctly', () => {
    const now = new Date();
    const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString();
    expect(timeAgo(fiveDaysAgo)).toBe('5 days ago');
  });
});

'use strict';

const WORDS_PER_MINUTE = 130;

/**
 * @param  {} params
 */
function time(string) {
  const WORDS = string.trim().split(/\s+/).length;

  if (WORDS === null || WORDS === 0) {
    return 0; // Return 0 as it will take zero mins to read
  }

  // If the amount of words is under the average 130 per minute
  if (WORDS <= WORDS_PER_MINUTE) {
    return 1;
  }

  // If the amount of words is over the average 130 per minute
  if (WORDS >= WORDS_PER_MINUTE) {
    return WORDS / WORDS_PER_MINUTE;
  }
}

exports.time = time;

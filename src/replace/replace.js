import {matchTable} from './replace.const';

/**
 * Replaces all ASCII style emoticon with an emoji
 * @param {String} string - Original string
 * @return {String} - String with replaced emoji
 */
export function replace(string) {
  for (const match of matchTable) {
    string = string.replace(match.regex, `$1${match.emoji}$3`);
  }
  return string;
}

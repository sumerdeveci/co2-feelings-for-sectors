import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
const emojiRegexGen = require('emoji-regex');

@Injectable()
export class FormService {
  /**
   * Only a single emoji is allowed, and single emoji only (no texts either)
   */
  singleEmojijValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return { notOnlyOneEmoji: { value: control.value } };

      const emojiRegex = emojiRegexGen()
      const matches = (control.value as string).match(emojiRegex) || [];

      // If more than 1 emoji exists or no emoji exists
      if (matches.length !== 1) return {
        notOnlyOneEmoji: { value: control.value }
      }

      const isOnlyOneEmoji = matches[0].length === control.value.length
      return isOnlyOneEmoji ? null : { notOnlyOneEmoji: { value: control.value } };
    }
  }
}
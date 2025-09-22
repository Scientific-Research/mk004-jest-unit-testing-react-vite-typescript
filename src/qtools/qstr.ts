import * as qstr from './qstr';

/**
 * Capitalize the first letter of a string.
 *
 * qstr.capitalizeFirstLetter("this is a sentence.");
 *
 * "This is a sentence."
 */
export const capitalizeFirstLetter = (line: string) => {
	return line.charAt(0).toUpperCase() + line.slice(1);
}

/**
 * Force a text to look like a sentence
 *
 * qstr.sentencize("this should be a sentence");
 *
 * "This should be a sentence."
 */
export const sentencize = (line: string) => {
	let r = line;
	const lastCharacter = qstr.getLastCharacter(r);
	if (!['.', '!', '?'].includes(lastCharacter)) {
		r += '.';	
	}
	r = qstr.capitalizeFirstLetter(r);
	return r;
}

/**
 * Returns the last character of a string.
 *
 * qstr.getLastCharacter("Welcome to this site.");
 *
 * "."
 */
export const getLastCharacter = (line: string) => {
	return line.charAt(line.length - 1);
}


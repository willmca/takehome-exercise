import { includes } from "lodash-es";

export function GET_DISPLAY_FROM_INPUT(input: string): string {
    const suffix: string = input.charAt(input.length - 1);
    let formattedValue: string = input;
    const includesDecimal: boolean = includes(input, '.');
    if (suffix) {
        switch (suffix) {
            case 'k': {
                // remove the suffix
                formattedValue = formattedValue.slice(0, -1);
                // if no decimal, just add 0s and commas
                if (!includesDecimal) {
                    formattedValue += ',000'
                } else {
                    // if decimal, split into 2 strings, before and after decimal
                    const splitValueByDecimal: string[] = formattedValue.split('.')
                    // 3 chars after decimal, zeroes to add + numbers after decimal should add to 3
                    const zeroesToAdd: number = 3 - splitValueByDecimal[1].length;
                    // Replace the decimal with a comma and add neeeded zeroes
                    formattedValue = formattedValue.replace('.', ',')
                    formattedValue += '0'.repeat(zeroesToAdd);
                }
                break
            }
            case 'm': {
                formattedValue = formattedValue.slice(0, -1);
                if (!includesDecimal) {
                    formattedValue += ',000,000'
                } else {
                    const splitValueByDecimal: string[] = formattedValue.split('.')
                    const zeroesToAdd: number = 6 - splitValueByDecimal[1].length;
                    formattedValue = formattedValue.replace('.', ',')
                    formattedValue += '0'.repeat(zeroesToAdd - 3);
                    formattedValue += ',000'
                }
                break
            }
            case 'b': {
                formattedValue = formattedValue.slice(0, -1);
                if (!includesDecimal) {
                    formattedValue += ',000,000,000'
                } else {
                    const splitValueByDecimal: string[] = formattedValue.split('.')
                    const zeroesToAdd: number = 9 - splitValueByDecimal[1].length;
                    formattedValue = formattedValue.replace('.', ',')
                    formattedValue += '0'.repeat(zeroesToAdd - 6);
                    formattedValue += ',000,000'
                }
                break
            }
            case 't': {
                formattedValue = formattedValue.slice(0, -1);
                if (!includesDecimal) {
                    formattedValue += ',000,000,000,000'
                } else {
                    const splitValueByDecimal: string[] = formattedValue.split('.')
                    const zeroesToAdd: number = 12 - splitValueByDecimal[1].length;
                    formattedValue = formattedValue.replace('.', ',')
                    formattedValue += '0'.repeat(zeroesToAdd - 9);
                    formattedValue += ',000,000,000'
                }
                break
            }
        }
    }
    return formattedValue;
}
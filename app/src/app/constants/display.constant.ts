import { includes } from "lodash-es";

export function GET_DISPLAY_FROM_INPUT(input: string): string {
    const suffix = input.charAt(input.length - 1);
    let formattedValue = input;
    const includesDecimal = includes(input, '.');
    if (suffix) {
        switch (suffix) {
            case 'k': {
                formattedValue = formattedValue.slice(0, -1);
                if (!includesDecimal) {
                    formattedValue += ',000'
                } else {
                    const splitValueByDecimal = formattedValue.split('.')
                    const zeroesToAdd = 3 - splitValueByDecimal[1].length;
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
                    const splitValueByDecimal = formattedValue.split('.')
                    const zeroesToAdd = 6 - splitValueByDecimal[1].length;
                    formattedValue = formattedValue.replace('.', ',')
                    formattedValue += '0'.repeat(zeroesToAdd);
                }
                break
            }
            case 'b': {
                formattedValue = formattedValue.slice(0, -1);
                if (!includesDecimal) {
                    formattedValue += ',000,000,000'
                } else {
                    const splitValueByDecimal = formattedValue.split('.')
                    const zeroesToAdd = 9 - splitValueByDecimal[1].length;
                    formattedValue = formattedValue.replace('.', ',')
                    formattedValue += '0'.repeat(zeroesToAdd);
                }
                break
            }
        }
    }
    return formattedValue;
}
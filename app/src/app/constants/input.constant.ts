import { find, includes, isNil, map } from "lodash-es";
import { SelectItem } from "primeng/api";

export const INPUT_OPTIONS: SelectItem[] = [
    {
        label: '250k',
        value: '250,000'
    },
    {
        label: '10m',
        value : '10,000,000'
    },
    {
        label: '.5b',
        value: '500,000,000'
    }
]

export function IS_VALID_INPUT(value: string): boolean {
    const acceptableValues = map(INPUT_OPTIONS, 'label');
    return (includes(acceptableValues, value))
}

export function GET_VALUE_FROM_LABEL(label: string): string {
    const matchingOption = find(INPUT_OPTIONS, (option => option.label === label));
    return isNil(matchingOption?.value) ? '' : matchingOption?.value
}

export function GET_LABEL_FROM_VALUE(value: string): string{
    const matchingOption = find(INPUT_OPTIONS, (option => option.value === value));
    return isNil(matchingOption?.label) ? '' : matchingOption?.label

}
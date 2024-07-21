export type Props = {
    type: string;
    messageError?: string;
    hasError?: boolean;
    handleOnFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleOnBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    maxSize?: number;
    name: string;
    classDiv?: string;
}
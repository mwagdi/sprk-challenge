import { ChangeEvent, FC } from 'react';

interface FormInputProps {
    label: string
    type: 'text' | 'number'
    name: string
    value?: string | number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FormInput: FC<FormInputProps> = ({ label, type, name, value, onChange }) => (
    <label>
        {label}
        <input type={type} name={name} value={value} onChange={onChange}/>
    </label>
);
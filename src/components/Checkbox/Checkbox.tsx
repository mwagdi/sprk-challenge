import { ChangeEvent, FC } from 'react';

interface CheckboxProps {
    label: string
    name: string
    checked?: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({ label, name, checked, onChange }) => (
    <label>
        <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
        />
        {label}
    </label>
);
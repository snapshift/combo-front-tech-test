import React, { FC, ReactNode, useCallback, useState } from "react"

type SearchBarType = {
    defaultValue?: string
    onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void
    label: ReactNode
    placeholder?:string
}

let timeout: any

export const SearchBar: FC<SearchBarType> = ({
    defaultValue, onChange, label, placeholder, onClick
}) => {
    const [value, setValue] = useState(defaultValue || '')

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            onChange(event.target.value, event)
        }, 500)

        setValue(event.target.value)
    }, [onChange])

    return (<div>
        <label htmlFor="label">{label}</label>
        <div>
        <input
            id="label"
            type="search"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
        </div>
    </div>)
}

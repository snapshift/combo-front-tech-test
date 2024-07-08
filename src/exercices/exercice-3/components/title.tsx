import React, { FC, ReactNode } from "react"

type TitleType = {
    title: ReactNode
    className?: string
}

export const Title: FC<TitleType> = ({
    className,
    title
}) => {
    return <h1 className={className}>{title}</h1>
}

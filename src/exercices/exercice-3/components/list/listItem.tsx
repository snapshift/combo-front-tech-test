import React, { FC } from 'react'

type ListItemType = {
    item: string
}

export const ListItem: FC<ListItemType> = ({
    item
}) => {
    return (<div className="border-b-2 border-neutral-300 p-4">
    <p>{item}</p>
  </div>)
}
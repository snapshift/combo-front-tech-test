import React, { FC, ReactElement } from 'react'
import { ListItem } from './listItem'

type ListType = {
    items: number[]
    loading?: boolean
}

export const List: FC<ListType> = ({
    items = [],
    loading = false
}) => {
    if (loading && !items.length) {
        return null
    }

    if (!items.length) {
        return (<div className='text-center text-orange-300'>
            The list is empty
        </div>)
    }

    return (<>
    {items.map(item => (<ListItem key={item} item={`${item}`} />))}
    </>)
}
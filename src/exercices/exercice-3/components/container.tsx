import React, { useEffect, useRef, useState } from 'react'
import { Title } from './title'
import { List } from './list/list'
import { SearchBar } from './ui/searchbar';
import { fetchData } from './api/api';
import { useScroll } from './tools/useScroll';

const initialIndexPage = 1

export const Container = () => {
    const [data, setData] = useState<number[]>([]);
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [cursor, setCursor] = useState<number>(initialIndexPage);

    useScroll(() => {
        if (!loading) {
            const newCursor = cursor + 1
            setCursor(newCursor)
            callAPI({ search, indexPage: newCursor})
        }
    })

    const callAPI = ({search, indexPage}: {search: string, indexPage: number}) => {
        setLoading(true)
        fetchData({search, cursor: indexPage})
        .then((newData) => setData(newData))
        .then(() => {
            setLoading(false)});
    }

    const handleChange = (value: string) => {
        setData([])
        setSearch(value)
        setCursor(initialIndexPage)
        callAPI({
            search: value, indexPage: initialIndexPage
        })
    }

    // mount the first time
    useEffect(() => {
        callAPI({search: '', indexPage: initialIndexPage})
    }, [])

    return (<div className="flex flex-col w-96 m-auto py-20 gap-10">
        <div className="flex gap-2 items-center">
            <SearchBar
                label="Search your items"
                onChange={handleChange}
                placeholder='Search your item'
            />
        </div>

        <div>
            <Title title="List of your items" className='text-2xl mb-2'/>
            <List items={data} loading={loading} />
            {loading && <div className="mt-3 text-orange-300 text-center">Loading...</div>}
        </div>
    </div>)
}
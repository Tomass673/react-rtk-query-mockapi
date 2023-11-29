import React from 'react'
import {BsArrowDown, BsArrowUp} from "react-icons/bs";

type SortOrderProps = {
    sortBy: string
    order: string
    setSortBy: React.Dispatch<React.SetStateAction<string>>
    setOrder: React.Dispatch<React.SetStateAction<string>>
}
const SortOrderButtons: (props: SortOrderProps) => JSX.Element = (props: SortOrderProps) => {
    function handleSortAndOrdering(sortValue: string){
        props.setSortBy(sortValue)
        if(props.order === 'asc'){
            props.setOrder('desc')
        } else if(props.order === 'desc'){
            props.setOrder('asc')
        }
    }
    return (
        <>
            <div className="flex flex-row gap-x-2 w-1/5 items-center my-8">
                <h3 className='text-l'>Sort by:</h3>
                <div className={'flex border-black flex-row items-center p-2 cursor-pointer rounded-lg ' + (props.sortBy === 'name' ? 'border-2' : 'border')} onClick={() => handleSortAndOrdering('name')}>
                    <div className={(props.sortBy === 'name' ? 'font-bold' : '')}>name</div>
                    {props.order === 'asc' ? <BsArrowUp />: <BsArrowDown />}
                </div>
                <div className={'flex border-black flex-row items-center p-2 cursor-pointer rounded-lg ' + (props.sortBy === 'price' ? 'border-2' : 'border')} onClick={() => handleSortAndOrdering('price')}>
                    <div className={(props.sortBy === 'price' ? 'font-bold' : '')}>price</div>
                    {props.order === 'asc' ? <BsArrowUp />: <BsArrowDown />}
                </div>
            </div>
        </>

    )
}

export default SortOrderButtons

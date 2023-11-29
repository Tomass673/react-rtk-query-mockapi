import React from 'react'
import {BsChevronRight, BsChevronLeft} from "react-icons/bs";

type PaginationButtonsProps = {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}
const PaginationButtons: (props: PaginationButtonsProps) => JSX.Element = (props: PaginationButtonsProps) => {
    return (
        <div className={'w-full flex justify-center items-center'}>
            {props.page === 2 && <button className={'bg-blue-600 rounded-full text-white p-4 block'} onClick={() => props.setPage(props.page - 1)}>
                <BsChevronLeft />
            </button>}
            {props.page === 1 && <button className={'bg-blue-600 rounded-full text-white p-4 block'} onClick={() => props.setPage(props.page + 1)}>
                <BsChevronRight />
            </button>}
        </div>
    )
}

export default PaginationButtons

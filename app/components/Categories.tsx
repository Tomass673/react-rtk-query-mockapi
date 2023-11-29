import React from 'react'

type PaginationButtonsProps = {
    activeCategory: string
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}
const PaginationButtons: (props: PaginationButtonsProps) => JSX.Element = (props: PaginationButtonsProps) => {
    return (
        <div className='flex items-center w-1/6 gap-x-1'>
            <div
                className={'p-2 cursor-pointer text-white rounded-lg ' + (props.activeCategory === 'electronics' ? 'bg-blue-700' : 'bg-blue-500')}
                onClick={() => props.setActiveCategory('electronics')}>Electronics
            </div>
            <div
                className={'p-2 cursor-pointer text-white rounded-lg ' + (props.activeCategory === 'clothes' ? 'bg-blue-700' : 'bg-blue-500')}
                onClick={() => props.setActiveCategory('clothes')}>Clothes
            </div>
            <div className={'p-2 cursor-pointer text-white rounded-lg ' + (props.activeCategory === 'food' ? 'bg-blue-700' : 'bg-blue-500')}
                 onClick={() => props.setActiveCategory('food')}>Food
            </div>
        </div>
    )
}

export default PaginationButtons

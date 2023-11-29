import Image from 'next/image'
import { FC } from 'react'
import useActions from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IProduct } from '../store/product/product.types'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
    const { addItem } = useActions()
    const {removeItem} = useActions()
    const { cart } = useTypedSelector(state => state)

    const isExistsInCart = cart.some(i => i.id === product.id)

    return (
        <div
            style={{ width: '48%' }}
            className='rounded-xl mb-5 p-3 shadow-sm bg-blue-100 flex flex-row justify-between'
        >
            <div className='text-center w-1/3'>
                <Image
                    src={product.image}
                    alt={product.name}
                    width='200'
                    height='200'
                    className='rounded-xl'
                />
            </div>
            <div className='w-1/3'>
                <div className={'flex flex-col ml-3'}>
                    <div className='text-blue-900 font-bold text-m overflow-hidden text-ellipsis whitespace-nowrap mr-5'>
                        {product.name}
                    </div>
                    <div className='text-lg text-blue-600'>${product.price}</div>
                </div>
            </div>
            <div className={'flex items-end justify-end w-1/3'}>
                <button
                    className='text-m text-white bg-blue-400 font-bold rounded-xl h-1/3 block p-3 hover:bg-blue-500'
                    onClick={() => isExistsInCart ? removeItem({id: product.id}) : addItem(product)}
                >
                    {isExistsInCart ? 'Remove from cart' : 'Add to cart'}
                </button>
            </div>

        </div>
    )
}

export default ProductItem

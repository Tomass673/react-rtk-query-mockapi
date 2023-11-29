import Image from 'next/image'
import {FC} from 'react'
import {BsCart, BsTrash, BsX} from 'react-icons/bs'
import useActions from '../hooks/useActions'
import {useOutside} from '../hooks/useOutside'
import {useTypedSelector} from '../hooks/useTypedSelector'

const Cart: FC = () => {
    const {ref, isShow, setIsShow} = useOutside(false)
    const {cart} = useTypedSelector(state => state)
    const {removeItem} = useActions()

    return (
        <>
            <button
                className='bg-blue-600 rounded-full text-white p-4 block fixed right-10 bottom-10 z-10'
                onClick={() => setIsShow(!isShow)}
            >
                {isShow ? <BsX size={24}/> : <BsCart size={24}/>}
            </button>

            {isShow && (
                <div
                    className='bg-white rounded-t-xl shadow-2xl fixed right-0 top-0 anim-cart z-20 py-7 px-5 w-1/6 h-full'
                    style={{minHeight: '45%'}}
                    ref={ref}
                >
                    {cart.length ? (
                        <>
                            {cart.map(product => (
                                <div
                                    key={`Cart item: ${product.id}`}
                                    className='flex items-center justify-between bg-blue-100 rounded-lg p-4 mb-4'
                                >
                                    <div className='w-3/4 flex items-center'>
                                        <div className='mr-4 flex items-center'>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={120}
                                                height={80}
                                                className='rounded-lg'
                                                layout={'fixed'}
                                            />
                                        </div>
                                        <div className='text-sm mr-4 w-3/4 '>
                                            <div
                                                className='overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-blue-900 mb-1'>
                                                {product.name}
                                            </div>
                                            <div className='text-blue-800'>${product.price}</div>
                                        </div>
                                    </div>
                                    <button onClick={() => removeItem({id: product.id})}>
                                        <BsTrash className='text-blue-600'/>
                                    </button>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div>Cart is empty</div>
                    )}
                </div>
            )}
        </>
    )
}

export default Cart

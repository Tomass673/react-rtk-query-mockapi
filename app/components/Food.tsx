import {FC, useState} from 'react'
import ProductItem from "./ProductItem";
import {useGetFoodQuery} from "../store/product/product.api";
import PaginationButtons from "./PaginationButtons";
import SortOrderButtons from "./SortOrderButtons";
import LoadingIndicator from "./LoadingIndicator";

const Food: FC = () => {
    const [page, setPage] = useState<number>(1)
    const [sortBy, setSortBy] = useState<string>('price')
    const [order, setOrder] = useState<string>('asc')
    const {data, isLoading, error} = useGetFoodQuery({limit: 5, page: page, sortBy: sortBy, order: order})
    if (error) {
        if ('status' in error) {
            // you can access all properties of `FetchBaseQueryError` here
            const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

            return (
                <div>
                    <div>An error has occurred:</div>
                    <div>{errMsg}</div>
                </div>
            )
        } else {
            // you can access all properties of `SerializedError` here
            return <div>{error.message}</div>
        }
    }
    return (
        <>
            {!isLoading && !error && <SortOrderButtons sortBy={sortBy} order={order} setSortBy={setSortBy} setOrder={setOrder}/>}
            {isLoading ? (
                <LoadingIndicator/>
            ) : error ? (
                <div className='text-red'>{error}</div>
            ) : (
                <div className='flex flex-wrap justify-between'>
                    {data?.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))}
                </div>
            )}
            {!isLoading && !error && <PaginationButtons page={page} setPage={setPage}/>}
        </>
    )
}

export default Food

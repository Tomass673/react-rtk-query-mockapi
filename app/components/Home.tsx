import {FC, useState} from 'react'
import Cart from './Cart'
import Electronics from "./Electronics";
import Clothes from "./Clothes";
import Food from "./Food";
import Categories from "./Categories";

const Home: FC = () => {
    const [activeCategory, setActiveCategory] = useState('electronics')
    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-2xl text-blue-800 font-bold'>
                    Products
                </h1>
                <Cart />
            </div>
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            {activeCategory === 'electronics' && <Electronics/>}
            {activeCategory === 'clothes' && <Clothes/>}
            {activeCategory === 'food' && <Food/>}
        </div>
    )
}

export default Home

import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import {  selectProducts, SET_PRODUCTS } from '../store/app.slice'
import { useAppSelector } from '../store/hooks'

const IndexPage = (props) => {
 const dispatch = useDispatch()
 const products:any = useAppSelector(selectProducts)

  useEffect(()=>{
    if(props.products){
      dispatch(SET_PRODUCTS(props.products))
    }
  },[])


return <Layout title="Home | Next.js + TypeScript Example">

  <div className="flex flex-col p-5 gap-4">
    <div className='h-10 shadow bg-gray-50 px-5 text-sm items-center flex justify-between '>
      <span>Show result 14 of 2500</span>
      <div className='flex h-full items-center'>
        <button className='px-2 h-8 bg-green-600 font-semibold rounded-l text-white'>Grid</button>
        <button className='px-2 h-8 bg-gray-50 rounded-r border'>List</button>
      </div>
    </div>
  <div className='grid grid-cols-5 gap-4 '>

{products && products.map((product, index)=>{
  return <div className='flex flex-col gap-4 bg-gray-50 items-center justify-center shadow p-5' key={index}>
          <div className='p-5'>
          <Image alt={product.title} src={product.image} height={150} width={120} />
            </div>
          <div className='text-left'>
            <h3 aria-label={product.title}  aria-labelledby={product.title}  className='text-sm'>{product.title.substring(0,50)}{product.title.length > 50 && "..."}</h3>
            <h4 className='text-xs font-bold  w-48'>{product.category}</h4>
 
              <p className=''>
              <span>Price:</span> ${product.price}
              </p>
            <div className='flex gap-1'>
            <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-2 rounded text-sm font-semibold py-1'>Add to Cart</button>
            <button className='bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-500 px-2 rounded text-sm font-semibold py-1'>Add to List</button>

            </div>
          </div>
        </div>
})}
</div>
  </div></Layout>
}


export async function getServerSideProps<GetServerSideProps>() {
  const res = await fetch("https://fakestoreapi.com/products?limit=14")
  const result = await res.json();
  // ...
  return {props:{products:result}}
}
export default IndexPage

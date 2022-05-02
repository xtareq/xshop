import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className='flex items-center h-14 shadow-lg bg-indigo-500 text-white'>
        <div className="logo pl-5">
          Logo
        </div>
        <div className="search flex-auto flex justify-center">
         <div className="max-w[400px]">
           <div className="flex min-w-[400px] h-8  border border-indigo-600 hover:border-indigo-800 hover:shadow-lg focus:border-indigo-700 rounded">
              <input placeholder='Search here...' type="text" className='w-full rounded-l outline-none text-gray-500 pl-2' />
              <button 
              className='px-2  bg-indigo-600 hover:bg-indigo-700 outline-none ring-0 border border-indigo-600 rounded-r'
              >
                Search
              </button>
           </div>
         </div>
        </div>
        <div className="menus pr-5 space-x-5">
          <Link href="/">
            <a>My Account</a>
          </Link>

          <Link href="/">
            <a>Cart ()</a>
          </Link>
        </div>


      </nav>
    </header>
    {children}
    <footer className=''>
      <div className='footer-uppder h-[250px] bg-indigo-500'>

      </div>
      <div className="footer-lower h-[50px] bg-indigo-600">

      <span>I&apos;m here to stay (Footer)</span>
      </div>

    </footer>
  </div>
)

export default Layout

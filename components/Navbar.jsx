import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Image from 'next/image'
import { useStateContext } from '../context/StateContext';
import { Cart } from './';
import { CartProvider, useCart } from "react-use-cart";



const Navbar = () => {

  const { showCart, setShowCart, totalQuantities, items } = useStateContext();
  const {
    isEmpty,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
  } = useCart();



  const [open, setOpen] = useState(false)

  return (
    <div className='
    max-w-7xl mx-auto
    '>
      <div className="bg-black ">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}


                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <Link href={page.href}>
                          <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                            {page.name}
                          </a>
                        </Link>

                      </div>
                    ))}
                  </div>




                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-black">


          <nav aria-label="Top" className="mx-auto  px-4">
            <div className="border-b border-zinc-900">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href='/'>
                    <>
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </>

                  </Link>

                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">


                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-base font-medium text-white hover:text-green-500"
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">



                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                  <button>

                  </button>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" onClick={() => setShowCart(true)} className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                        onClick={() => setShowCart(true)}
                      />
                      <span className="ml-2 text-base font-medium text-white group-hover:text-green-500">{items.length}</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {
        showCart && (
          <Cart />)
      }
    </div>



  )
}

export default Navbar



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },

  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


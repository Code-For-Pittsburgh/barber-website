
import React from 'react';
import logo from '../public/logo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='
      border-t border-zinc-900 mt-20
    ' aria-label="Site Footer" >
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
      >


        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <img
                className="h-10 w-auto text-red-600 "
                src="/logo.svg"
                alt=""
              />
            </div>

            <p
              className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul
              className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
            >
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" >
                  <Link href='/'>

                    Projects

                  </Link>
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" >
                  <Link href='/'>

                    Projects

                  </Link>
                </a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" >
                  <Link href='/'>

                    Projects

                  </Link>
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" >
                  <Link href='/'>

                    Projects

                  </Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>

  )
}

export default Footer


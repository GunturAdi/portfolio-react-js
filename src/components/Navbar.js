import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-transparent top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-slate-600 block py-6">
              MyPortFolio
            </a>
          </div>
          <div className="flex items-center px-4">
            <nav
              id="nav-menu"
              className=" absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group hover">
                  <a
                    href={`/`}
                    className="text-base text-dark py-2 mx-8 flex hover:underline-offset-4 hover:underline cursor-pointer"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href={`/portfolio`}
                    className="text-base text-dark py-2 mx-8 flex hover:underline-offset-4 hover:underline  cursor-pointer"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href={`/kontak`}
                    className="text-base text-dark py-2 mx-8 flex hover:underline-offset-4 hover:underline  dark:text-white cursor-pointer"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

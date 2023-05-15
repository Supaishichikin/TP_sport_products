import logo from "../assets/logo.jpg"

export default function HeaderNav(){

    return (
        <header>
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div>
        <a href="/login">
          <img width={50} height={50} src={logo}/>
        </a>
      </div>
      <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
          <ul
            className="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="/products">
                    Products
                </a>
            </li>
            <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="/cart">
                    Cart
                </a>
            </li>
            <li>
                <a
                    className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                    href="/register">
                    Sign Up
                </a>
            </li>
          </ul>
        </div>
    </nav>
  </header>
        
    )
}
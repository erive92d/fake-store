import auth from "../utils/auth"
import { useEffect, useState } from "react"
import { getMe } from "../utils/API"
import { Navbar } from "flowbite-react"
export function Navtab() {

  const [userData, setUserData] = useState({})


  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user)


      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [])


  return (
    // <Navbar
    //   className="border"
    //   fluid={true}
    // >
    //   <Navbar.Brand
    //     href="/"

    //   >
    //     <span style={{ fontSize: "40px" }} className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    //       <i class="fa fa-store"></i> Sahara
    //     </span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse>
    //     <Navbar.Link
    //       href="/"
    //       active={true}
    //     >
    //       Home
    //     </Navbar.Link>

    //     {auth.loggedIn() ? <>
    //       <Navbar.Link href="/cart">
    //         Cart {userData.orderCount >= 1 ? userData.orderCount : null}
    //       </Navbar.Link>

    //     </> : null}
    //     {auth.loggedIn() ? <Navbar.Link onClick={() => auth.logout()} href="/">
    //       Logout
    //     </Navbar.Link> : <Navbar.Link
    //       href="/login"
    //     >
    //       Log In
    //     </Navbar.Link>}

    //   </Navbar.Collapse>
    // </Navbar>


    <nav className="w-full bg-whiteborder-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sahara</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            {auth.loggedIn() ? <>
              <li>
                <a href="/cart" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart {orderLength >= 1 ? orderLength : null}</a>
              </li>
              <li>
                <a href="/profile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
              </li>  </> : null}
            {userData.username === "Owner" ? <li>
              <a href="/order" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Order</a>
            </li> : null}
            {auth.loggedIn() ? <li>
              <a href="/" onClick={() => auth.logout()} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
            </li> : <li>
              <a href="/login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
            </li>
            }

          </ul>
        </div>
      </div>
    </nav>

  )
}
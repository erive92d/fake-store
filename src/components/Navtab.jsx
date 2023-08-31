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
    <Navbar
      fluid={true}
    >
      <Navbar.Brand
        href="/"

      >
        <span style={{ fontSize: "30px" }} className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
          <i class="fa fa-store"></i> Sahara
        </span>
      </Navbar.Brand>
      {/* <NewCart /> */}
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          active={true}
        >
          <i class="fa-solid fa-house"></i>
        </Navbar.Link>


        {/* {auth.loggedIn() ? <>
          <Navbar.Link href="/cart">
            <i class="fa-solid fa-cart-shopping"></i> {userData.orderCount >= 1 ? userData.orderCount : null}
          </Navbar.Link> */}
        {/* <Navbar.Link href="/profile">
      Profile
    </Navbar.Link> */}
        {/* <Navbar.Link onClick={() => auth.logout()} href="/">
      Logout
    </Navbar.Link>
     */}
        {/* </> : null} */}
        {auth.loggedIn() ? <Navbar.Link onClick={() => auth.logout()} href="/">
          Logout
        </Navbar.Link> : <Navbar.Link
          href="/login"
        >
          Log In
        </Navbar.Link>}

      </Navbar.Collapse>

    </Navbar>


  )
}
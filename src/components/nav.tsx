import { faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBar = (
    () => {
    const router = useRouter()

    let route: string = router.pathname;
    if (route === "/") route="/home";
    return(
    <div>
          <ul>
            <li className="inline ml-5 mt-5">
              <Link href="https://github.com/realstealthninja">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
            </li>
            <li className="inline ml-5 mt-5">
              <Link href="https://www.instagram.com/realstealthninja/">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </li>
            <li className="inline ml-5 mt-5">
              <Link href="https://www.youtube.com/channel/UCRBu1hybrrioa8hZc5_Ggig">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </Link>
            </li>
            <li className="inline-block ml-5 mt-2 text-white bg-black opacity-20 pl-5 pr-5 pb-2 pt-2 rounded-xl">
              <Link href="/">home</Link>
            </li>
            <li className="inline-block ml-2 mt-2 text-white bg-black opacity-20 pl-5 pr-5 pb-2 pt-2 rounded-xl">
              <Link href="/about">about</Link>
            </li>
            <li className="inline-block align-middle text-center ml-5"><h1>{route}</h1 ></li>
            <li className="inline-block m-5 float-right ">
              <Link href="/">
                <Image src="/stealthysmile.png" width="30px" height="10px" />
              </Link>
            </li>
          </ul>
        </div>
    )}
);

export default NavBar
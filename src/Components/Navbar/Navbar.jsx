import { NavLink } from "react-router-dom";


const links = <>
    <li className="mr-5 -mt-2 hover:bg-lime-600 font-bold text-xl border"><NavLink to="/home">Home</NavLink></li>
    <li><NavLink>Listed Books</NavLink></li>
    <li className="ml-10"><NavLink>Pages to Read</NavLink></li>
</>


const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl">Boi Poka</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
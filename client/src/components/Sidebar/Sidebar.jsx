import { Link, NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                Andi Demi
            </Link>
            <nav className="nav-bar-wrapper">
                <NavLink
                    end
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'activeClassName' : undefined
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="35px"
                    >
                        <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                    </svg>
                </NavLink>
                <NavLink
                    end
                    to="/about"
                    className={`${({ isActive }) =>
                        isActive ? 'activeClassName' : undefined} about-link`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="39px"
                    >
                        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
                    </svg>
                </NavLink>
                <NavLink
                    end
                    to="/contact"
                    className={`${({ isActive }) =>
                        isActive ? 'activeClassName' : undefined} contact-link`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="38px"
                    >
                        <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                    </svg>
                </NavLink>
            </nav>
            <div className="icons-wrapper">
                <ul>
                    <li>
                        <a target="_blank" rel="noreferrer" href="/">
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="/">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="/">
                            Skype
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

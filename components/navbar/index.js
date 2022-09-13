import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-72 lg:w-96 inset-x-0 mx-auto top-8 z-50">
      <nav className="bg-red-800 px-6 lg:px-12 py-4 text-gray-300 font-semibold rounded-lg">
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/watchlist">
              <a>Watch List</a>
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <a>Movies</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

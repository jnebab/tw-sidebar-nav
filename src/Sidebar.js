export default function Sidebar({ show }) {
    console.log({ show })
  return (
    <aside className={`sidebar-container transform transition duration-200 ease-in-out md:translate-x-0 ${show ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* logo */}
      <a href="/" className="flex items-center space-x-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-3xl tracking-wide">NEWEB</span>
      </a>
      {/* sidebar */}
      <nav>
        <a
          href="#home"
          className="block py-2.5 px-4 hover:bg-red-700 transition duration-200"
        >
          Home
        </a>
        <a
          href="#about"
          className="block py-2.5 px-4 hover:bg-red-700 transition duration-200"
        >
          About
        </a>
        <a
          href="#features"
          className="block py-2.5 px-4 hover:bg-red-700 transition duration-200"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="block py-2.5 px-4 hover:bg-red-700 transition duration-200"
        >
          Pricing
        </a>
      </nav>
    </aside>
  );
}

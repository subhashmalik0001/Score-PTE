const NavigationMenu = ({ onNavClick }) => {
  const navigationItems = [
    "Home",
    "PTE Practice",
    "Courses",
    "Hand Outs",
  ]

  return (
    <nav className="bg-red-800">
      <div className="container mx-auto">
        <ul className="flex">
          {navigationItems.map((item) => (
            <li key={item} className="flex-1">
              <a
                href="#"
                className={`block px-4 py-3 text-center text-sm font-medium transition-colors duration-200 ${
                  item === "Support Team" ? "bg-red text-white" : "text-white hover:bg-red-700"
                }`}
                onClick={e => {
                  e.preventDefault();
                  onNavClick(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavigationMenu
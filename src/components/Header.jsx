import logo from '../assets/image.png'

const Header = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6">
          <div className="flex-shrink-0">
            <img src={logo} alt="ScorePTE Logo" className="xs:w-20 xs:h-20 w-24 h-24" />
          </div>
          <div className="text-center">
            <h1 className="xs:text-3xl text-5xl font-extrabold text-red-800 tracking-wide">Score PTE</h1>
            <p className="xs:text-sm text-base mt-2 text-gray-600">
              Established by Experts - Score Must Grow
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Promo Bar */}
      <div className="bg-[#2196f3] text-white text-xs text-center py-2 px-4 flex flex-col items-center justify-center uppercase tracking-widest font-medium">
        <div>
          20% OFF CODE: <span className="font-bold underline">PRIMETIME20</span> <a href="#" className="font-bold underline ml-1">SHOP NOW</a>
        </div>
        <div className="mt-1 normal-case tracking-normal font-normal">
          Sale Ends: <span className="font-bold">03hrs 29min 57sec</span>
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b px-8 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-[200px]">
          <Image src="/logo.svg" alt="The Wander Club Logo" width={160} height={32} priority />
        </div>
        {/* Nav Links */}
        <ul className="flex gap-8 font-semibold text-base flex-1 justify-center">
          <li className="text-blue-500 border-b-2 border-blue-500 pb-1">HOME</li>
          <li className="hover:text-blue-500 cursor-pointer">TOKENS</li>
          <li className="hover:text-blue-500 cursor-pointer">TOKEN HOLDERS</li>
          <li className="hover:text-blue-500 cursor-pointer">MERCH</li>
          <li className="hover:text-blue-500 cursor-pointer">THE CLUBHOUSE</li>
        </ul>
        {/* Search and Icons */}
        <div className="flex items-center gap-4 min-w-[320px] justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search (e.g. Mexico, Florida, Yellowstone)"
              className="border-2 border-teal-400 rounded-full px-4 py-1 w-72 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
              style={{ fontFamily: 'TT Norms Pro, Arial, Helvetica, sans-serif' }}
            />
            <Image src="/Search.svg" alt="Search" width={20} height={20} className="absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <Image src="/Customer.svg" alt="Customer" width={24} height={24} />
          <Image src="/Shopping Cart.svg" alt="Cart" width={24} height={24} />
        </div>
      </nav>
      {/* Hero Images */}
      <div className="flex justify-center gap-2 mt-6 px-8">
        <div className="w-1/3 aspect-[4/5] bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image 1</span>
        </div>
        <div className="w-1/3 aspect-[4/5] bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image 2</span>
        </div>
        <div className="w-1/3 aspect-[4/5] bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image 3</span>
        </div>
      </div>
      {/* Testimonial */}
      <div className="flex flex-col items-center mt-8">
        <div className="flex gap-1 mb-2">
          {/* Placeholder for 6 blue heart icons */}
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="w-5 h-5 bg-blue-400 rounded-full inline-block" />
          ))}
        </div>
        <span className="text-gray-700 font-medium">Loved by 500,000+ travelers.</span>
      </div>
      {/* Headline & CTA */}
      <div className="flex flex-col items-center mt-8 mb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Hold on to the places that hold your heart</h1>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full px-10 py-4 shadow-md transition-colors">Start Your Collection</button>
      </div>
    </div>
  );
}

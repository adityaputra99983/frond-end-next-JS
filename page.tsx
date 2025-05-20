import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: 'Modern Sofa',
      description: 'Elegant and comfortable 3-seater modern sofa',
      price: '$999.99',
      imageUrl: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/12/5/889534d8-4c8a-4c7f-8b7e-096f9743d3ef.jpg ',
    },
    {
      id: 2,
      name: 'Dining Table Set',
      description: 'Contemporary 6-seater dining table set',
      price: '$549.99',
      imageUrl: 'https://www.soho.id/1623-superlarge_default/meja-makan-igor-dining-table.jpg ',
    },
    {
      id: 3,
      name: 'Queen Size Bed',
      description: 'Luxurious queen size bed with storage',
      price: '$799.99',
      imageUrl: 'https://media.furniturevillage.co.uk/i/fv/PRODZFRSP000000000047555_emma_plus-diamond-hybrid-mattress__lifestyle? $medium$&fmt=auto&w=579',
    },
    {
      id: 4,
      name: 'Wardrobe Cabinet',
      description: 'Spacious 3-door wardrobe with mirror',
      price: '$449.99',
      imageUrl: 'https://lagomhomestore.com/cdn/shop/files/kursi-kayu-jati-solid-dengan-material-premium-loom-chair-lagom-home-store-teak-furniture-boutique-jati-furnitur-jakarta-41885069082860.png?v=1737472440 ',
    },
    {
      id: 5,
      name: 'Coffee Table',
      description: 'Modern glass top coffee table',
      price: '$199.99',
      imageUrl: 'https://images.tokopedia.net/img/cache/700/product-1/2020/3/18/7621886/7621886_9528292b-664f-48ac-a205-66df6b729f7f_720_720.jpg ',
    },
    {
      id: 6,
      name: 'Study Desk',
      description: 'Compact study desk with drawers',
      price: '$299.99',
      imageUrl: 'https://image.made-in-china.com/2f0j00sUNquQrCYDcp/Good-Price-Office-Home-Hotel-Bedroom-Furniture-Durable-Computer-Study-Desk.webp ',
    },
  ];

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Furniture Store</h1>
          <Link href="/" className="flex items-center text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Furniture Collection</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src={product.imageUrl.trim()}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Responsive footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="text-left mb-6 md:mb-0">
              <h4 className="text-lg font-bold hover:text-yellow-500 transition-colors">Contact Us</h4>
              <p className="mt-2 hover:text-yellow-400 transition-colors">Email: support@furnidecor.com</p>
              <p className="mt-2 hover:text-yellow-400 transition-colors">Phone: +1 234 567 890</p>
              <p className="mt-4">&copy; 2023 FurniDecor. All rights reserved.</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://linkedin.com" className="hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-red-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* Responsive footer images grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc" 
                   alt="Footer Furniture 1" 
                   className="w-24 h-24 object-cover rounded hover:opacity-75 transition-opacity"/>
              {/* Repeat for other images */}
              <img src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/2/28/0534cba8-be9e-4e57-81c2-8ab32cebd379.jpg" 
                   alt="Footer Furniture 1" 
                   className="w-24 h-24 object-cover rounded hover:opacity-75 transition-opacity"/>
              {/* Repeat for other images */}
              <img src="https://hips.hearstapps.com/hmg-prod/images/81dhypy18rl-ac-sl1500-1671477754.jpg?crop=1xw:1xh;center,top&resize=980:*" 
                   alt="Footer Furniture 1" 
                   className="w-24 h-24 object-cover rounded hover:opacity-75 transition-opacity"/>
              {/* Repeat for other images */}
              <img src="https://cdn.prod.website-files.com/5f2b10811da7064399ed3a1c/67640b5b33d1a8708c0843b2_1.webp" 
                   alt="Footer Furniture 1" 
                   className="w-24 h-24 object-cover rounded hover:opacity-75 transition-opacity"/>
              {/* Repeat for other images */}
              <img src="https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UF894,1000_QL80_.jpg" 
                   alt="Footer Furniture 1" 
                   className="w-24 h-24 object-cover rounded hover:opacity-75 transition-opacity"/>
              {/* Repeat for other images */}
              <img src="https://image.made-in-china.com/202f0j00dnvqkMYzkBbr/Modern-Bedroom-Home-House-Furniture-King-Size-Adult-Double-Storage-Wooden-Bed.webp" 
                   alt="Footer Furniture 1" 
                   className="w-24 h-24 object-cover rounded hover:opacity-75 transition-opacity"/>
              {/* Repeat for other images */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
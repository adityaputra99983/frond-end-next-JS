import React from 'react';
import './globals.css';
import Link from 'next/link';

export default function Home() {
 return (
      <main className="bg-green-400 min-h-screen">

      <header className="bg-green-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 hover:text-violet-800 transition-colors">Furniture</h1>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-600 hover:text-indigo-200 transition-colors font-bold">About</a></li>
              <li><Link href="/produk" className="text-gray-600 hover:text-indigo-300 transition-colors font-bold">Products</Link></li>
              <li><a href="#contak" className="text-gray-600 hover:text-indigo-200 transition-colors font-bold">Contact</a></li>
              <li>
                |
              </li>
              <li>
              <a href="https://github.com" className="text-gray-600 hover:text-indigo-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                </a>
              </li>
            </ul>
            
          </nav>
        </div>
      </header>

      {/* Hero section with responsive text */}
      <section className="bg-cover bg-center h-[48vh] sm:h-[60vh] relative" 
           style={{ 
         backgroundImage: "url('https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?semt=ais_hybrid&w=740')",
         backgroundAttachment: "fixed"
           }}>
        <div className="absolute inset-0 bg-opacity-50">
          <div className="h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold transform hover:scale-105 transition-transform">
        Transform Your Space
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
        Discover elegant furniture for every room in your home.
          </p>
          <Link href="/produk" 
        className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold 
         hover:bg-yellow-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        Shop Now
          </Link>
        </div>
          </div>
        </div>
      </section>

      {/* Product Categories section */}
      <section className="py-8 sm:py-12 md:py-16 bg-violet-200">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center hover:text-violet-300 transition-colors mb-4 sm:mb-8">
        Our Furniture Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {/* Modern Collection */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img 
            src="https://events.rumah123.com/wp-content/uploads/sites/38/2022/07/15150257/Gambar-furniture-minimalis-modern-coffee-table-multifunction.jpg" 
            alt="Modern Furniture"
            className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Modern Collection</h4>
          </div>
        </div>

        {/* Contemporary Collection */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img 
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126" 
            alt="Contemporary Furniture"
            className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Contemporary Collection</h4>
          </div>
        </div>

        {/* Classic Collection */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img 
            src="https://images.unsplash.com/photo-1618220179428-22790b461013" 
            alt="Classic Furniture"
            className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Classic Collection</h4>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Feedback section with responsive grid and hover effects */}
      <section id="feedback" className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center hover:text-violet-300 transition-colors">Customer Feedback</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feedback cards with hover effects */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img src="data:image/jpeg;base64,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" alt="Customer" className="w-12 h-12 rounded-full"/>
            <div className="ml-4">
          <h4 className="font-semibold">Roseanne Park</h4>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
            </div>
          </div>
          <p className="text-gray-600">Amazing quality furniture! The delivery was prompt and the assembly service was excellent.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img src="https://vz.cnwimg.com/wp-content/uploads/2019/11/Henry-Cavill.jpg" alt="Customer" className="w-12 h-12 rounded-full"/>
            <div className="ml-4">
          <h4 className="font-semibold">Henry Carvile</h4>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
            </div>
          </div>
          <p className="text-gray-600">Great selection of modern furniture. The quality exceeds expectations!</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <img src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/benaffleck.png" alt="Customer" className="w-12 h-12 rounded-full"/>
            <div className="ml-4">
          <h4 className="font-semibold">Ben Affleck</h4>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
            </div>
          </div>
          <p className="text-gray-600">Beautiful furniture and excellent customer service. Will definitely shop here again!</p>
        </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}

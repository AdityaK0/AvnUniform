// export default function Hero() {
//   return (
//     <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Professional Uniforms & Custom Apparels</h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             We are a distinguished manufacturer and wholesaler of Corporate Uniforms, Customized T-shirt Uniforms, Hotel
//             Uniforms, Hospital Uniforms, School Uniforms, Housekeeping Uniforms and Security Uniforms.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="#showcase"
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//             >
//               View Our Catalog
//             </a>
//             <a
//               href="#contact"
//               className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
//             >
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { HashLink } from 'react-router-hash-link';
export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Elevate Your Brand with <br className="hidden sm:block" />
            <span className="text-blue-600">Custom Uniform Solutions</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Premium manufacturer and wholesaler of corporate, hotel, hospital, school, housekeeping, and security uniforms — crafted with comfort, style, and durability.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#showcase"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition-all"
            >
              View Our Catalog
            </a>
               


            <a
              href="#contact"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium text-lg hover:border-gray-500 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Optional Background Pattern or Decorative Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  )
}

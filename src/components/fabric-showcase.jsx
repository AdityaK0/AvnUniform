export default function FabricShowcase() {
  const fabrics = [
    {
      name: "PP Fabric",
      gsm: "120GSM",
      description: "Lightweight and breathable fabric perfect for daily wear uniforms",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-008.jpg",
    },
    {
      name: "Micro Fabric",
      gsm: "180GSM",
      description: "Lightweight and breathable fabric perfect for daily wear uniforms",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-006.jpg",
    },
    {
      name: "Dry-Fit",
      gsm: "180GSM",
      description: "Moisture-wicking fabric ideal for active work environments",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-015.jpg",
    },
    {
      name: "Honey Comb",
      gsm: "180-200GSM",
      description: "Textured fabric with excellent breathability and comfort",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-018.jpg",
    },
    {
      name: "Spun Matty",
      gsm: "200-220GSM",
      description: "Durable fabric with smooth finish, perfect for professional wear",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-021.jpg",
    },
    {
      name: "PC Cotton",
      gsm: "200-220GSM",
      description: "Poly-cotton blend offering comfort and easy maintenance",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-024.jpg",
    },
    {
      name: "Polo Knit",
      gsm: "200GSM",
      description: "Classic polo fabric with excellent stretch and recovery",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-027.jpg",
    },
    {
      name: "Cotton Dry-Fit",
      gsm: "240GSM",
      description: "Premium cotton blend with moisture management properties",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-029.jpg",
    },
    {
      name: "Cotton Polo Tipping",
      gsm: "240GSM",
      description: "High-quality cotton polo with decorative tipping details",
      image: "/34_files/AVN Unifroms T-shirts Calalogue.pdf-image-031.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fabric Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium quality fabrics ranging from 180GSM to 240GSM for all your uniform needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fabrics.map((fabric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={fabric.image || "/placeholder.svg"}
                  alt={fabric.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{fabric.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{fabric.gsm}</div>
                <p className="text-sm text-gray-600">{fabric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client";

export default function Games() {
  const products = [
    {
      id: 1,
      name: "Valor Legends",
      description: "A fast-paced team shooter set in a futuristic world.",
      category: "Action",
      price: "Free",
      image: "https://via.placeholder.com/300x180?text=Valor+Legends",
    },
    {
      id: 2,
      name: "Mystic Realms",
      description: "Explore magical lands in this epic fantasy RPG.",
      category: "RPG",
      price: "$19.99",
      image: "https://via.placeholder.com/300x180?text=Mystic+Realms",
    },
    {
      id: 3,
      name: "Drift Kings",
      description: "Compete in high-speed races with stunning graphics.",
      category: "Racing",
      price: "Free",
      image: "https://via.placeholder.com/300x180?text=Drift+Kings",
    },
    {
      id: 4,
      name: "Valor Legends",
      description: "A fast-paced team shooter set in a futuristic world.",
      category: "Action",
      price: "Free",
      image: "https://via.placeholder.com/300x180?text=Valor+Legends",
    },
    {
      id: 5,
      name: "Mystic Realms",
      description: "Explore magical lands in this epic fantasy RPG.",
      category: "RPG",
      price: "$19.99",
      image: "https://via.placeholder.com/300x180?text=Mystic+Realms",
    },
    {
      id: 6,
      name: "Drift Kings",
      description: "Compete in high-speed races with stunning graphics.",
      category: "Racing",
      price: "Free",
      image: "https://via.placeholder.com/300x180?text=Drift+Kings",
    },
  ];

  const filterCategories = [
    "All",
    "Action",
    "RPG",
    "Racing",
    "Adventure",
    "Battle Royale",
    "Sandbox",
    "Shooter",
  ];

  return (
    <div className="min-h-screen  py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Our Games
      </h1>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {filterCategories.map((category, index) => (
          <button
            key={index}
            className="bg-gray-800 cursor-pointer px-4 py-2 rounded-4xl shadow hover:bg-purple-500 hover:text-black transition text-sm font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main DIv  */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Left Filter Sidebar */}
        <aside className="bg-gray-800 rounded-lg shadow p-6 space-y-6 h-fit">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-600">
              Categories
            </h3>
            <ul className="space-y-1  text-sm">
              <li>Action</li>
              <li>RPG</li>
              <li>Racing</li>
              <li>Adventure</li>
              <li>Battle Royale</li>
              <li>Sandbox</li>
              <li>Shooter</li>
            </ul>
          </div>

          {/* Price */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-600">
              Price
            </h3>
            <ul className="space-y-1  text-sm">
              <li>Free</li>
              <li>Paid</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-600">
              Features
            </h3>
            <ul className="space-y-1  text-sm">
              <li>Latest</li>
              <li>Old</li>
              <li>Famous</li>
            </ul>
          </div>
        </aside>

        {/* Game Cards */}
        <div className="  lg:col-span-3 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                <p className="mb-2 ">{product.description}</p>
                <div className="text-sm  mb-4">
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>
                    <strong>Price:</strong>{" "}
                    {product.price === "Free" ? (
                      <span className="text-green-600 font-semibold">
                        {product.price}
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        {product.price}
                      </span>
                    )}
                  </p>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition">
                  Click for Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

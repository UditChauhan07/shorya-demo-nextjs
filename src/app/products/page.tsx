"use client";

export default function Products() {
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

  return (
    <div className="min-h-screen  py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Our Games
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold  mb-1">{product.name}</h2>
              <p className="mb-2">{product.description}</p>

              <div className="text-sm text-gray-500 mb-4">
                <p>
                  <span className="font-semibold ">Category:</span>{" "}
                  {product.category}
                </p>
                <p>
                  <span className="font-semibold ">Price:</span>{" "}
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

              <button className="bg-purple-600 cursor-pointer w-full text-white px-4 py-2 rounded hover:bg-purple-500 transition">
                Click for Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

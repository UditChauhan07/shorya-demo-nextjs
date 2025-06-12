"use client";
import useCartStore from "../../store/useCartStore"; // adjust path if needed

export default function Cart() {
  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "Mystic Realms",
  //     price: 19.99,
  //     quantity: 1,
  //     image: "https://via.placeholder.com/100x60?text=Mystic+Realms",
  //   },
  //   {
  //     id: 2,
  //     name: "Drift Kings",
  //     price: 0.0,
  //     quantity: 1,
  //     image: "https://via.placeholder.com/100x60?text=Drift+Kings",
  //   },
  // ];

  const cartItems = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cartItems.reduce((sum: any, item: any) => {
    const price =
      typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;

    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen py-12 px-6 ">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold text-center text-purple-400 mb-10">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item:any) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-900 rounded shadow p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-14 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-400">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {typeof item.price === "number"
                      ? item.price === 0
                        ? "Free"
                        : `$${item.price.toFixed(2)}`
                      : item.price}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-gray-900 rounded shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">
              Summary
            </h2>
            <div className="flex justify-between mb-2 text-gray-300">
              <span>Subtotal</span>
              <span>{total === 0 ? "Free" : `$${total.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-300">
              <span>Shipping</span>
              <span>{total === 0 ? "Free" : "$4.99"}</span>
            </div>
            <hr className="mb-4 border-gray-700" />
            <div className="flex justify-between text-lg font-bold text-white">
              <span>Total</span>
              <span>
                {total === 0 ? "Free" : `$${(total + 4.99).toFixed(2)}`}
              </span>
            </div>
            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

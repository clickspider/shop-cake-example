import Navigation from '@/components/Navigation';
import CakeCard from '@/components/CakeCard';
import OrderForm from '@/components/OrderForm';

const featuredCakes = [
  {
    name: 'Classic Chocolate Dream',
    description: 'Rich chocolate layers with smooth ganache',
    price: 45,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
  },
  {
    name: 'Strawberry Delight',
    description: 'Fresh strawberries with vanilla cream',
    price: 48,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80',
  },
  {
    name: 'Caramel Fusion',
    description: 'Layers of caramel and chocolate heaven',
    price: 52,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <Navigation />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="logo text-6xl mb-6 text-white">Sweet Delights Bakery</h1>
            <p className="text-white text-xl mb-8">
              Crafting moments of joy with every slice
            </p>
            <a href="#order" className="cta-button">
              Order Your Custom Cake
            </a>
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section id="featured" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="logo text-4xl text-center mb-12">Featured Cakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake) => (
              <CakeCard key={cake.name} {...cake} />
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-24 px-4" style={{ backgroundColor: 'var(--form-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="logo text-4xl text-center mb-12">Custom Order</h2>
          <OrderForm />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="logo text-4xl mb-8">About Us</h2>
          <p className="text-lg mb-6">
            At Sweet Delights Bakery, we believe every celebration deserves the perfect cake. 
            Our master bakers craft each creation with love, using only the finest ingredients 
            to ensure every bite is memorable.
          </p>
          <p className="text-lg">
            From intimate gatherings to grand celebrations, we're here to make your 
            sweet dreams come true.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="logo text-2xl mb-4">Sweet Delights</h3>
            <p>Crafting sweet memories since 2010</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p>123 Baker Street</p>
            <p>Sweet Town, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
// src/components/Glasses/SmartGlasses.tsx  (or wherever you want to place it)
import  { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';







import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  badge?: string;
  name: string;
  type: string;           // Smart / AR / VR / MR
  display: string;
  processor: string;
  details: string[];
  price: string;
  monthlyPrice: string;
  colors: string[];
  image?: string;
}

export default function AccessoriesSmartglasses() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      const nowMobile = window.innerWidth < 832;
      setIsMobile(nowMobile);
      if (!nowMobile) {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    handleResize(); // initial check

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const products: Product[] = [
    {
      id: 1,
      badge: 'Popular',
      name: 'Ray-Ban Meta Smart Glasses',
      type: 'Smart Glasses',
      display: 'No display (open-ear audio + camera)',
      processor: 'Snapdragon AR1 Gen 1',
      details: [
        '12MP ultra-wide camera with 1080p video & livestream',
        'Open-ear speakers + 5 microphones for calls & music',
        'Meta AI voice assistant built-in',
        'IPX4 water/sweat resistance',
        'Up to 4 hours continuous use / 36 hours standby',
        'Touch controls & voice commands',
        'Classic Wayfarer & Headliner styles'
      ],
      price: '$299.00',
      monthlyPrice: '$24.92',
      colors: ['Gloss Black', 'Shiny Transparent', 'Wayfarer Matte Black'],
      image: '/assets/photos/ray-ban-meta-smart-glasses.jpg'
    },
    {
      id: 2,
      badge: 'AR Leader',
      name: 'Xreal Air 2 Ultra',
      type: 'AR Glasses',
      display: 'Micro-OLED 1080p per eye, 52° FOV',
      processor: 'Snapdragon XR2 Gen 2 (via connected device)',
      details: [
        'Spatial computing with 6DoF tracking & hand gestures',
        'Up to 500 nits brightness, 120Hz refresh rate',
        'Slim 80g design with adjustable nose pads',
        'Full-color AR overlay for productivity & gaming',
        'USB-C connection to phone/laptop/console',
        'Spatial anchors & 3D mapping',
        'Compatible with Android, iOS, Windows, Mac'
      ],
      price: '$699.00',
      monthlyPrice: '$58.25',
      colors: ['Black'],
      image: '/assets/photos/xreal-air-2-ultra.jpg'
    },
    {
      id: 3,
      badge: 'Premium MR',
      name: 'Apple Vision Pro',
      type: 'Mixed Reality Headset',
      display: 'Dual 4K micro-OLED (23M pixels total)',
      processor: 'M2 + R1 chip',
      details: [
        'Eye & hand tracking with no controllers',
        'Spatial Audio with dynamic head tracking',
        'High-resolution passthrough & immersive 3D video',
        'visionOS with thousands of spatial apps',
        'Up to 2 hours battery (external pack)',
        'Ultra-wide 100° FOV, micro-OLED displays',
        'Premium aluminum & glass build'
      ],
      price: '$3,499.00',
      monthlyPrice: '$291.58',
      colors: ['Space Gray'],
      image: '/assets/photos/apple-vision-pro.jpg'
    },
    {
      id: 4,
      badge: 'VR Best Seller',
      name: 'Meta Quest 3',
      type: 'Standalone VR / Mixed Reality',
      display: 'Dual LCD 2064×2208 per eye, 120Hz',
      processor: 'Snapdragon XR2 Gen 2',
      details: [
        'Full-color passthrough cameras for MR',
        'Pancake lenses & 110° horizontal FOV',
        'Hand & controller tracking (Touch Plus)',
        'Standalone – no PC required',
        'Up to 2.2 hours battery life',
        'Huge library of VR games & apps',
        'Mixed reality with depth sensor'
      ],
      price: '$499.99',
      monthlyPrice: '$41.67',
      colors: ['White'],
      image: '/assets/photos/meta-quest-3.jpg'
    }
  ];

  const considerations = [
    {
      title: 'AR Overlay & Spatial Computing',
      description: 'See digital content blended seamlessly with the real world — perfect for navigation, productivity, and gaming.',
      features: [
        'Full-color passthrough & 3D mapping',
        'Hand & eye tracking for natural interaction',
        'Spatial anchors & persistent objects',
        'Works with phones, laptops, or standalone'
      ],
      image: '/assets/photos/ar-overlay-experience.jpg'
    },
    {
      title: 'Immersive VR & Mixed Reality',
      description: 'Step into fully virtual worlds or enhance reality with massive high-resolution displays.',
      features: [
        '4K+ per-eye resolution & wide FOV',
        '120Hz+ refresh for smooth motion',
        'Inside-out tracking (no base stations)',
        'Huge app & game ecosystem'
      ],
      image: '/assets/photos/immersive-vr-world.jpg'
    },
    {
      title: 'Lightweight & Everyday Wearable',
      description: 'Designed to be worn like regular glasses — comfortable for hours of use.',
      features: [
        'Under 100g for most models',
        'Adjustable fit & prescription lens support',
        'Open-ear audio or private speakers',
        'All-day battery in smart models'
      ],
      image: '/assets/photos/lightweight-smart-glasses.jpg'
    },
    {
      title: 'AI & Smart Features',
      description: 'Built-in assistants, real-time translation, object recognition, and more.',
      features: [
        'Voice-activated AI (Meta AI, Siri, etc.)',
        'Live translation & navigation overlays',
        'Camera + AI for contextual help',
        'Seamless phone integration'
      ],
      image: '/assets/photos/spatial-computing.jpg'
    }
  ];

  const ProductCard = ({ product }: { product: Product }) => {
    const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
    const { addToCart } = useCart();
    const [buttonText, setButtonText] = useState('Add to Cart');

    return (
      <div style={{
        background: '#fbfbfd',
        borderRadius: '18px',
        padding: isMobile ? '24px 16px' : '32px 24px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {product.badge && (
          <span style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: '#00ff00', // Razer green accent (even for non-Razer)
            color: 'black',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '600',
            zIndex: 2
          }}>
            {product.badge}
          </span>
        )}

        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: isMobile ? '220px' : '260px',
              objectFit: 'contain',
              borderRadius: '12px',
              background: '#0a0a0a'
            }}
          />
        )}

        <div style={{ marginBottom: '12px' }}>
          <p style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '8px' }}>Select color</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {product.colors.map((color: string) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedColor === color ? '2px solid #00ff00' : '2px solid #d2d2d7',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: selectedColor === color ? '600' : '400'
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <h3 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '600', marginBottom: '6px' }}>
          {product.name}
        </h3>

        <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#1d1d1f', marginBottom: '4px' }}>
          {product.type} • {product.display}
        </p>

        <p style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '16px' }}>
          {product.processor}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
          {product.details.map((detail: string, index: number) => (
            <li
              key={index}
              style={{
                fontSize: '14px',
                color: '#6e6e73',
                marginBottom: '8px',
                paddingLeft: '16px',
                position: 'relative'
              }}
            >
              <span style={{ position: 'absolute', left: 0 }}>•</span>
              {detail}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <p style={{ fontSize: isMobile ? '26px' : '32px', fontWeight: '600', marginBottom: '4px' }}>
            {product.price}
          </p>
          <p style={{ fontSize: '14px', color: '#6e6e73' }}>
            or {product.monthlyPrice}/mo. for 12 mo.*
          </p>
        </div>

        <button
  onClick={() => {
    const priceNumber = Number(
      product.price.replace('$', '').replace(',', '')
    );

    addToCart({
      id: `ipad-${product.id}-${selectedColor.toLowerCase().replace(/\s+/g, '-')}`,
      productId: product.id,
      name: `iPad Pro • ${product.name}`,
      variant: selectedColor,
      
      price: priceNumber,
      image: product.image || '',
      details: {
        
      },
    });

    // Optional: nice feedback
    setButtonText('Added!');
    setTimeout(() => setButtonText('Add to Cart'), 1800);
  }}
  style={{
    width: '100%',
    marginTop: '20px',
    padding: '14px 24px',
    background: buttonText === 'Added!' ? '#34c759' : '#0071e3',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '17px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }}
>
  {buttonText}
</button>
      </div>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      flex: '1'
    }}>
      <Navbar
        isMobile={isMobile}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
        isMobile={isMobile}
      />

      <main style={{ paddingTop: '60px', flex: '1' }}>
        {/* Hero Section */}
        <div style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: isMobile ? '10px 20px' : '40px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: '600',
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Smart, AR & VR Glasses – See the future.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#cccccc',
            marginBottom: '24px'
          }}>
            From everyday smart eyewear to full spatial computing.
          </p>
          <button style={{
            background: '#00ff00',
            border: 'none',
            color: 'black',
            padding: '12px 32px',
            borderRadius: '12px',
            fontSize: '17px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Explore Collection
          </button>
        </div>

        {/* Products Grid */}
        <div style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: isMobile ? '20px' : '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Considerations Section */}
        <div style={{
          maxWidth: '980px',
          margin: '60px auto',
          padding: isMobile ? '20px' : '40px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : '40px',
            fontWeight: '600',
            marginBottom: '12px',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            What to consider when choosing smart/AR/VR glasses
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#cccccc',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Find the perfect fit for your lifestyle.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            {considerations.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#111111',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: '0 8px 32px rgba(0,255,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  border: '1px solid #00ff0044'
                }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '160px',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      background: '#000000'
                    }}
                  />
                )}

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  margin: '8px 0 0 0',
                  color: '#00ff00'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '16px',
                  color: '#cccccc',
                  margin: '8px 0 16px 0',
                  lineHeight: '1.4'
                }}>
                  {item.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '15px',
                        color: '#e0e0e0',
                        marginBottom: '10px',
                        paddingLeft: '24px',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#00ff00',
                        fontSize: '20px',
                        lineHeight: '1'
                      }}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer isMobile={isMobile} />
    </div>
  );
}
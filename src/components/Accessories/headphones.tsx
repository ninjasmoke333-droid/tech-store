// src/components/Headphones/Headphones.tsx  (or wherever you want to place it)
import  { useState, useEffect } from 'react';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';

// Replace these paths with your actual headphone images
import sonyXM5 from '../../assets/photos/sony-wh-1000xm5.jpg';
import steelseriesNova from '../../assets/photos/steelseries-arctis-nova-pro.jpg';
import airpodsPro from '../../assets/photos/airpods-pro-2.jpg';
import sennheiserMomentum from '../../assets/photos/sennheiser-momentum-4.jpg';

// Optional consideration images (replace with real ones if you have them)
import ancTech from '../../assets/photos/active-noise-cancellation.jpg';
import spatialAudio from '../../assets/photos/spatial-audio.jpg';
import batteryLife from '../../assets/photos/long-battery-headphones.jpg';
import gamingImmersion from '../../assets/photos/gaming-headset-immersion.jpg';

import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  badge?: string;
  name: string;
  type: string;           // Over-ear / Earbuds / Gaming / Audiophile
  driver: string;
  features: string;
  details: string[];
  price: string;
  monthlyPrice: string;
  colors: string[];
  image?: string;
}

export default function AccessoriesHeadphones() {
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
      badge: 'Best ANC',
      name: 'Sony WH-1000XM5',
      type: 'Wireless Over-Ear',
      driver: '30mm Carbon Fiber',
      features: 'Best-in-class ANC',
      details: [
        'Industry-leading active noise cancellation with Auto NC Optimizer',
        'LDAC hi-res audio & 360 Reality Audio support',
        'Up to 30 hours battery with ANC on',
        'Speak-to-Chat & Adaptive Sound Control',
        'Multipoint Bluetooth 5.2',
        'DSEE Extreme upscaling for compressed audio',
        'Soft synthetic leather earpads & foldable design'
      ],
      price: '$399.00',
      monthlyPrice: '$33.25',
      colors: ['Black', 'Silver', 'Midnight Blue'],
      image: sonyXM5
    },
    {
      id: 2,
      badge: 'Gaming Pro',
      name: 'SteelSeries Arctis Nova Pro Wireless',
      type: 'Wireless Gaming Headset',
      driver: '40mm Neodymium',
      features: 'Hi-Res + ANC',
      details: [
        'Dual wireless 2.4GHz + Bluetooth simultaneous',
        'Active noise cancellation & Transparency mode',
        'Hi-Res certified audio with 360° spatial sound',
        'Hot-swappable batteries (infinite playtime)',
        'Premium ski-goggle headband & memory foam earcups',
        'SteelSeries Sonar software with EQ & GameDAC Gen 2',
        'ClearCast Gen 2 mic with AI noise cancellation'
      ],
      price: '$349.99',
      monthlyPrice: '$29.17',
      colors: ['Black', 'White'],
      image: steelseriesNova
    },
    {
      id: 3,
      badge: 'Best Earbuds',
      name: 'Apple AirPods Pro 2',
      type: 'True Wireless Earbuds',
      driver: 'Custom Apple Driver',
      features: 'Adaptive ANC',
      details: [
        'Improved active noise cancellation (2× better)',
        'Adaptive Transparency & Conversation Awareness',
        'Personalized Spatial Audio with dynamic head tracking',
        'Up to 6 hours per charge / 30 hours with case',
        'IPX4 sweat & water resistant',
        'H2 chip for low latency & seamless Apple integration',
        'Touch controls & Find My with Precision Finding'
      ],
      price: '$249.00',
      monthlyPrice: '$20.75',
      colors: ['White'],
      image: airpodsPro
    },
    {
      id: 4,
      badge: 'Audiophile',
      name: 'Sennheiser Momentum 4 Wireless',
      type: 'Premium Over-Ear',
      driver: '42mm Dynamic',
      features: '60-hour battery',
      details: [
        'Exceptional 60-hour battery life with ANC on',
        'aptX Adaptive & aptX HD for hi-res wireless audio',
        'Adaptive ANC with wind noise suppression',
        'Sennheiser Smart Control app with EQ & podcast mode',
        'Soft leatherette earpads & foldable design',
        'Multipoint Bluetooth 5.2',
        'Outstanding soundstage & clarity'
      ],
      price: '$379.95',
      monthlyPrice: '$31.66',
      colors: ['Black Copper', 'White Silver'],
      image: sennheiserMomentum
    }
  ];

  const considerations = [
    {
      title: 'Active Noise Cancellation (ANC)',
      description: 'Block out distractions so you can focus on music, calls, or work — the best models adapt automatically.',
      features: [
        'Adaptive / Transparency modes',
        'Wind & voice detection',
        'Multiple levels of cancellation',
        'Low latency for video & gaming'
      ],
      image: ancTech
    },
    {
      title: 'Spatial & Immersive Audio',
      description: 'Feel sound move around you — perfect for movies, games, and music with 3D positioning.',
      features: [
        'Dolby Atmos / 360 Reality Audio',
        'Head-tracking spatial sound',
        'Wide soundstage & accurate imaging',
        'Hi-Res codecs (LDAC, aptX)'
      ],
      image: spatialAudio
    },
    {
      title: 'Battery Life & Charging',
      description: 'Go longer without recharging — some models offer days of use or instant power boosts.',
      features: [
        '30–60+ hours total playtime',
        'Fast charging (10 min = hours)',
        'Wireless charging support',
        'Hot-swappable batteries (gaming)'
      ],
      image: batteryLife
    },
    {
      title: 'Comfort & Gaming Features',
      description: 'Built for long sessions — lightweight, breathable, with low-latency wireless and clear mics.',
      features: [
        'Memory foam & adjustable fit',
        '2.4GHz ultra-low latency',
        'ClearCast / AI noise-canceling mics',
        'RGB & customizable controls'
      ],
      image: gamingImmersion
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
            background: '#00ff00',
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
          {product.type} • {product.driver}
        </p>

        <p style={{ fontSize: '16px', color: '#1d1d1f', marginBottom: '16px' }}>
          {product.features}
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
            Headphones & Earbuds – Sound without limits.
          </h1>
          <p style={{
            fontSize: isMobile ? '17px' : '21px',
            color: '#cccccc',
            marginBottom: '24px'
          }}>
            From immersive ANC to pure gaming audio.
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
            Explore Headphones
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
            What to consider when choosing headphones
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#cccccc',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Find your perfect sound experience.
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
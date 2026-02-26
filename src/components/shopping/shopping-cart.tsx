// src/components/shopping/shopping-cart.tsx
import  { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import Navbar from '../layout/navbar';
import MobileMenu from '../layout/mobilemenu';
import Footer from '../layout/footer';
import { useNavigate } from 'react-router-dom';
//import { X } from 'lucide-react';           // ← make sure this is imported

export default function ShoppingCart() {
  // Local state – same pattern as in AppleiPadPro
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Run once on mount (important for SSR/hydration edge cases)
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Cart logic
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();
  const subtotal = getCartTotal();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar
        isMobile={isMobile}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {isMobile && mobileMenuOpen && (
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          activeSubmenu={activeSubmenu}
          setActiveSubmenu={setActiveSubmenu}
          isMobile={isMobile}
        />
      )}

      <main
        style={{
          flex: 1,
          paddingTop: '60px', // space for fixed navbar
          backgroundColor: '#f5f5f7',
        }}
      >
        <div
          style={{
            maxWidth: '980px',
            margin: '0 auto',
            padding: isMobile ? '24px 16px' : '48px 24px',
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '36px' : '48px',
              fontWeight: 600,
              marginBottom: '32px',
              color: '#1d1d1f',
            }}
          >
            Bag
          </h1>

          {cart.length === 0 ? (
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '18px',
                padding: isMobile ? '48px 24px' : '64px 48px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              }}
            >
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: '#1d1d1f',
                }}
              >
                Your bag is empty.
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: '#6e6e73',
                  marginBottom: '32px',
                }}
              >
                There are no items in your bag.
              </p>
              <button
                onClick={() => navigate('/')}
                style={{
                  padding: '12px 28px',
                  backgroundColor: '#0071e3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '999px',
                  fontSize: '17px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '18px',
                  padding: isMobile ? '24px' : '32px',
                  marginBottom: '32px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                }}
              >
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: isMobile ? '24px' : '32px',
                      padding: '24px 0',
                      borderBottom:
                        index < cart.length - 1 ? '1px solid #d2d2d7' : 'none',
                    }}
                  >
                    {/* Image */}
                    <div style={{ flex: isMobile ? 'none' : '0 0 140px' }}>
                      <img
                        src={item.image || 'https://via.placeholder.com/140x140?text=Product'}
                        alt={item.name}
                        style={{
                          width: '100%',
                          height: isMobile ? '240px' : '140px',
                          objectFit: 'contain',
                          borderRadius: '12px',
                          backgroundColor: '#f5f5f7',
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: '19px',
                          fontWeight: 600,
                          marginBottom: '8px',
                        }}
                      >
                        {item.name}
                      </h3>

                      {item.variant && (
                        <p
                          style={{
                            fontSize: '15px',
                            color: '#6e6e73',
                            marginBottom: '4px',
                          }}
                        >
                          {item.variant}
                        </p>
                      )}

                      {item.details && (
                        <p
                          style={{
                            fontSize: '15px',
                            color: '#6e6e73',
                            lineHeight: 1.4,
                          }}
                        >
                          {[
                            item.details.chip,
                            item.details.display,
                            item.details.memory,
                            item.details.storage,
                          ]
                            .filter(Boolean)
                            .join(' • ')}
                        </p>
                      )}

                      {/* Quantity & Remove */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          marginTop: '20px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #d2d2d7',
                            borderRadius: '8px',
                            overflow: 'hidden',
                          }}
                        >
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            style={{
                              width: '44px',
                              height: '36px',
                              background: 'white',
                              border: 'none',
                              fontSize: '20px',
                              cursor: item.quantity > 1 ? 'pointer' : 'not-allowed',
                              opacity: item.quantity <= 1 ? 0.5 : 1,
                            }}
                          >
                            −
                          </button>
                          <span
                            style={{
                              width: '44px',
                              textAlign: 'center',
                              fontSize: '17px',
                              fontWeight: 500,
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              width: '44px',
                              height: '36px',
                              background: 'white',
                              border: 'none',
                              fontSize: '20px',
                              cursor: 'pointer',
                            }}
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            color: '#d1001f',
                            background: 'none',
                            border: 'none',
                            fontSize: '15px',
                            cursor: 'pointer',
                            padding: '8px 0',
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div
                      style={{
                        textAlign: isMobile ? 'left' : 'right',
                        minWidth: '120px',
                        marginTop: isMobile ? '12px' : 0,
                      }}
                    >
                      <p
                        style={{
                          fontSize: '19px',
                          fontWeight: 600,
                        }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p
                        style={{
                          fontSize: '13px',
                          color: '#6e6e73',
                        }}
                      >
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '18px',
                  padding: isMobile ? '24px' : '32px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px',
                    fontSize: '19px',
                    fontWeight: 600,
                  }}
                >
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <button
  onClick={() => navigate('/shopping/checkout')}
  style={{
    width: '100%',
    padding: '16px',
    backgroundColor: '#0071e3',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '17px',
    fontWeight: 600,
    cursor: 'pointer',
    marginBottom: '16px',
  }}
>
  Check Out
</button>

                <p
                  style={{
                    fontSize: '13px',
                    color: '#6e6e73',
                    textAlign: 'center',
                  }}
                >
                  Taxes and shipping will be calculated at checkout.
                </p>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer isMobile={isMobile} />
    </div>
  );
}
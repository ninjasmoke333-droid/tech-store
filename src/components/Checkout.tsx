// src/components/shopping/checkout.tsx
import React, { useState, useEffect } from 'react';
import { useCart } from './../context/CartContext';
import Navbar from './layout/navbar';
import MobileMenu from './layout/mobilemenu';
import Footer from './layout/footer';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Form states
  const [isGuest, setIsGuest] = useState(true);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');
  
  // Billing
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

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
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { cart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const subtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! (Demo only)');
    navigate('/');
  };

  if (cart.length === 0) {
    navigate('/shopping/shopping-cart');
    return null;
  }

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
          paddingTop: '60px',
          backgroundColor: '#f5f5f7',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
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
            Checkout
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 400px',
              gap: '32px',
            }}
          >
            {/* Left Column - Forms */}
            <div>
              {/* Account Section */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '18px',
                  padding: isMobile ? '24px' : '32px',
                  marginBottom: '24px',
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
                  Account
                </h2>

                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '24px',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    onClick={() => setIsGuest(true)}
                    style={{
                      flex: 1,
                      minWidth: '140px',
                      padding: '12px 24px',
                      backgroundColor: isGuest ? '#0071e3' : 'white',
                      color: isGuest ? 'white' : '#1d1d1f',
                      border: isGuest ? 'none' : '1px solid #d2d2d7',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    Guest Checkout
                  </button>
                  <button
                    onClick={() => setIsGuest(false)}
                    style={{
                      flex: 1,
                      minWidth: '140px',
                      padding: '12px 24px',
                      backgroundColor: !isGuest ? '#0071e3' : 'white',
                      color: !isGuest ? 'white' : '#1d1d1f',
                      border: !isGuest ? 'none' : '1px solid #d2d2d7',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    Sign In
                  </button>
                </div>

                {!isGuest && (
                  <div style={{ marginBottom: '16px' }}>
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#6e6e73',
                        marginBottom: '16px',
                      }}
                    >
                      Already have an account?{' '}
                      <a
                        href="#"
                        style={{
                          color: '#0071e3',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        Sign in
                      </a>{' '}
                      or{' '}
                      <a
                        href="#"
                        style={{
                          color: '#0071e3',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        create an account
                      </a>
                    </p>
                  </div>
                )}

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 500,
                      marginBottom: '8px',
                      color: '#1d1d1f',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d2d2d7',
                      borderRadius: '8px',
                      fontSize: '15px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '18px',
                    padding: isMobile ? '24px' : '32px',
                    marginBottom: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      marginBottom: '24px',
                      color: '#1d1d1f',
                    }}
                  >
                    Shipping Address
                  </h2>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '8px',
                          color: '#1d1d1f',
                        }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d2d2d7',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '8px',
                          color: '#1d1d1f',
                        }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d2d2d7',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '8px',
                        color: '#1d1d1f',
                      }}
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d2d2d7',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '8px',
                          color: '#1d1d1f',
                        }}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d2d2d7',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '8px',
                          color: '#1d1d1f',
                        }}
                      >
                        State
                      </label>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d2d2d7',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '8px',
                          color: '#1d1d1f',
                        }}
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d2d2d7',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '8px',
                        color: '#1d1d1f',
                      }}
                    >
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d2d2d7',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        boxSizing: 'border-box',
                        backgroundColor: 'white',
                      }}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '8px',
                        color: '#1d1d1f',
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d2d2d7',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '18px',
                    padding: isMobile ? '24px' : '32px',
                    marginBottom: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      marginBottom: '24px',
                      color: '#1d1d1f',
                    }}
                  >
                    Payment Information
                  </h2>

                  <div style={{ marginBottom: '16px' }}>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '15px',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={sameAsShipping}
                        onChange={(e) => setSameAsShipping(e.target.checked)}
                        style={{
                          marginRight: '8px',
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer',
                        }}
                      />
                      Billing address same as shipping
                    </label>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '8px',
                        color: '#1d1d1f',
                      }}
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d2d2d7',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '8px',
                        color: '#1d1d1f',
                      }}
                    >
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d2d2d7',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '8px',
                          color: '#1d1d1f',
                        }}
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d2d2d7',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '8px',
                          color: '#1d1d1f',
                        }}
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        placeholder="123"
                        maxLength={4}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d2d2d7',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Place Order Button - Mobile */}
                {isMobile && (
                  <button
                    type="submit"
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
                    Place Order - ${total.toFixed(2)}
                  </button>
                )}
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '18px',
                  padding: isMobile ? '24px' : '32px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  position: isMobile ? 'relative' : 'sticky',
                  top: isMobile ? 'auto' : '100px',
                }}
              >
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    marginBottom: '24px',
                    color: '#1d1d1f',
                  }}
                >
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div style={{ marginBottom: '24px' }}>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '16px',
                        paddingBottom: '16px',
                        borderBottom: '1px solid #f5f5f7',
                      }}
                    >
                      <img
                        src={item.image || 'https://via.placeholder.com/60'}
                        alt={item.name}
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'contain',
                          borderRadius: '8px',
                          backgroundColor: '#f5f5f7',
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: '15px',
                            fontWeight: 500,
                            marginBottom: '4px',
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{
                            fontSize: '13px',
                            color: '#6e6e73',
                            marginBottom: '4px',
                          }}
                        >
                          Qty: {item.quantity}
                        </p>
                        <p
                          style={{
                            fontSize: '15px',
                            fontWeight: 500,
                          }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Breakdown */}
                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '15px',
                    }}
                  >
                    <span style={{ color: '#6e6e73' }}>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '15px',
                    }}
                  >
                    <span style={{ color: '#6e6e73' }}>Shipping</span>
                    <span style={{ color: '#1d8a3a', fontWeight: 500 }}>
                      FREE
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                      fontSize: '15px',
                    }}
                  >
                    <span style={{ color: '#6e6e73' }}>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid #d2d2d7',
                      fontSize: '19px',
                      fontWeight: 600,
                    }}
                  >
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Place Order Button - Desktop */}
                {!isMobile && (
                  <button
                    type="submit"
                    form="checkout-form"
                    onClick={handleSubmit}
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
                    }}
                  >
                    Place Order
                  </button>
                )}

                <p
                  style={{
                    fontSize: '13px',
                    color: '#6e6e73',
                    textAlign: 'center',
                    marginTop: '16px',
                  }}
                >
                  By placing your order, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isMobile={isMobile} />
    </div>
  );
}
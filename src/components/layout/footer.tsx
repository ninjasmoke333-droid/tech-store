
import { Link } from 'react-router-dom';

// Define the props interface (this fixes type errors when passing isMobile)
interface FooterProps {
  isMobile: boolean;
}

export default function Footer({ isMobile }: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: '#f5f5f7',
        marginTop: '4rem',
        borderTop: '1px solid #d2d2d7',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '2rem 1rem' : '3rem 1rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Shop and Learn */}
          <div>
            <h4
              style={{
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '1rem',
                fontSize: '0.75rem',
              }}
            >
              Shop and Learn
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {[
                { name: 'Asus', path: '/asus/rog-zephyrus' },
                { name: 'Vivo', path: '/vivo/x300-series' },
                { name: 'Samsung', path: '/samsung/s25ultra' },
                { name: 'Xiaomi', path: '/xiaomi/xiaomi-17-ultra' },
              ].map(item => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      fontSize: '0.75rem',
                      color: '#6e6e73',
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TechStore links */}
          <div>
            <h4
              style={{
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '1rem',
                fontSize: '0.75rem',
              }}
            >
              TechStore
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {[
                { name: 'Find a Store', path: '/store/find-store' },
                { name: 'Technical Support', path: '/support/technical-support' },
                { name: 'Community', path: '/support/community' },
                { name: 'Contact Us', path: '/support/contact-us' },
              ].map(item => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      fontSize: '0.75rem',
                      color: '#6e6e73',
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* You can add more columns here if needed */}
        </div>

        {/* Bottom copyright + links */}
        <div
          style={{
            borderTop: '1px solid #d2d2d7',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p>© 2026 TechStore. All rights reserved.  THIS SITE IS FOR PORTFOLIO PURPOSES.  BUILT BY ADAM SACRO</p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Use', 'Sales Policy'].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: '0.75rem',
                  color: '#6e6e73',
                  textDecoration: 'none',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
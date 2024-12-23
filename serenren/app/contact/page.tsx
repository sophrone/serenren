import React from 'react';

const ContactPage = () => {
  return (
    <div style={{
      padding: 'var(--spacer-4)',
      maxWidth: '800px',
      margin: 'auto',
      backgroundColor: 'var(--bg-2)',
      borderRadius: 'var(--space-scale)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      animation: 'slideInFromLeft 1s ease-out' 
    }}>
      <style>
        {`
          @media (max-width: 768px) {
            div {
              padding: var(--spacer-2); 
            }

            h1 {
              font-size: var(--large); 
            }

            h2 {
              font-size: var(--medium); 
            }

            p {
              font-size: var(--small); 
            }

            a {
              display: block; 
              margin-bottom: var(--spacer-1); 
            }
          }

          @keyframes slideInFromLeft {
            from {
              transform: translateX(-100%); 
              opacity: 0; 
            }
            to {
              transform: translateX(0); 
              opacity: 1; 
            }
          }
        `}
      </style>

      <h1 style={{
        textAlign: 'center',
        fontSize: 'var(--x-large)',
        color: 'var(--black)',
        marginBottom: 'var(--spacer-0)',
      }}>Contact Us</h1>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-1)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        If you have any questions, feel free to reach out to us using the contact details below.
      </p>

      <h2 style={{
        fontSize: 'var(--larger)',
        color: 'var(--green)',
        marginTop: 'var(--spacer-3)',
      }}>Contact Details</h2>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-1)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        Email: <a href="mailto:estadore@gmail.com" style={{ color: '#28a745', textDecoration: 'none' }}>estadore@gmail.com</a>
      </p>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-1)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        Call/WhatsApp: <a href="tel:+2347036856573" style={{ color: '#28a745', textDecoration: 'none' }}>+2347036856573</a>
      </p>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-1)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        Store: Apple Plaza, Plot 2144, Ago Palace Way, Lagos.
      </p>

      <h2 style={{
        fontSize: 'var(--larger)',
        color: 'var(--green)',
        marginTop: 'var(--spacer-3)',
      }}>Follow Us</h2>
      <p style={{
        lineHeight: '1.5',
        marginBottom: 'var(--spacer-1)',
        color: 'var(--black)',
        fontSize: 'var(--medium)',
      }}>
        Connect with us on social media:
        <br />
        <a href="https://instagram.com/serenren__" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', textDecoration: 'none' }}>
          <svg width="24" height="24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <path d="M12 0c-3.313 0-3.74.012-5.043.072-1.303.059-2.247.26-2.74.44-.75.25-1.41.52-2.02 1.12-.61.61-.87 1.27-1.12 2.02-.18.493-.38 1.437-.44 2.74C.012 8.26 0 8.687 0 12s.012 3.74.072 5.043c.059 1.303.26 2.247.44 2.74.25.75.52 1.41 1.12 2.02.61.61 1.27.87 2.02 1.12.493.18 1.437.38 2.74.44C8.26 23.988 8.687 24 12 24s3.74-.012 5.043-.072c1.303-.059 2.247-.26 2.74-.44.75-.25 1.41-.52 2.02-1.12.61-.61.87-1.27 1.12-2.02.18-.493.38-1.437.44-2.74C23.988 15.74 24 15.313 24 12s-.012-3.74-.072-5.043c-.059-1.303-.26-2.247-.44-2.74-.25-.75-.52-1.41-1.12-2.02-.61-.61-1.27-.87-2.02-1.12C19.247.26 18.303.059 17 .072 15.74.012 15.313 0 12 0zm0 1.44c3.24 0 3.634.01 4.925.07 1.078.05 1.798.23 2.216.39.56.22.95.48 1.36.99.41.41.77.8.99 1.36.16.418.34 1.138.39 2.216.06 1.291.07 1.685.07 4.925s-.01 3.634-.07 4.925c-.05 1.078-.23 1.798-.39 2.216-.22.56-.48.95-.99 1.36-.41.41-.8.77-1.36.99-.418.16-1.138.34-2.216.39-1.291.06-1.685.07-4.925.07s-3.634-.01-4.925-.07c-1.078-.05-1.798-.23-2.216-.39-.56-.22-.95-.48-1.36-.99-.41-.41-.77-.8-.99-1.36-.16-.418-.34-1.138-.39-2.216C1.44 15.634 1.43 15.313 1.43 12s.01-3.634.07-4.925c.05-1.078.23-1.798.39-2.216.22-.56.48-.95.99-1.36.41-.41.8-.77 1.36-.99.418-.16 1.138-.34 2.216-.39C8.366 1.44 8.74 1.43 12 1.43zm0 3.667a8.33 8.33 0 1 0 0 16.667 8.33 8.33 0 0 0 0-16.667zm0 14.667a6.334 6.334 0 1 1 0-12.668 6.334 6.334 0 0 1 0 12.668zm6-14.667a1.44 1.44 0 1 0 0 2.878 1.44 1.44 0 0 0 0-2.878z"/>
          </svg>
          Instagram
        </a>
        <a href="https://web.facebook.com/profile.php?id=100081109714486" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', textDecoration: 'none' }}>
          <svg width="24" height="24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.35C0 23.403.597 24 1.325 24h21.35C23.403 24 24 23.403 24 22.675v-21.35C24 .597 23.403 0 22.675 0zM12 24V12h-3v-4h3V6.5c0-3.003 1.793-4.5 4.433-4.5 1.267 0 2.363.094 2.676.136v3.1h-1.839c-1.444 0-1.73.684-1.73 1.684V8h3.461l-.452 4h-3.009V24h-4z"/>
          </svg>
          Facebook
        </a> |
        
      </p>
    </div>
  );
};

export default ContactPage;

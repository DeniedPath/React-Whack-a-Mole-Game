import './globals.css' // We'll use this for global styles
import PropTypes from 'prop-types';

export const metadata = {
  title: 'Whack-a-Mole Game',
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

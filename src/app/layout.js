import LayoutProvider from "@/components/LayoutProvider";
import './globals.css';
import '@/stylesheets/commonClasses.css';

export const metadata = {
  title: 'Rent-A-Ride Express | Car Rental',
  description: 'affordable car rental services',
}

export default function RootLayout({ children }) {
  return (
      <LayoutProvider>
      <body>{children}</body>
      </LayoutProvider>
  )
}

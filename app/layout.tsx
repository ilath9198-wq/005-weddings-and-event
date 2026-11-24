import type { Metadata } from 'next';
import './globals.css';
import { ConsultationProvider } from '../components/ConsultationContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WeddingConsultationModal from '../components/WeddingConsultationModal';

export const metadata: Metadata = {
  title: 'THE GRAND AFFAIR | Luxury Weddings & Celebrations',
  description: 'Bespoke royal weddings, heritage palace celebrations, sculptural mandap décor, and destination event management across Udaipur, Jaipur, Goa, Lake Como, and Bali.',
  keywords: 'luxury wedding planner, Indian wedding, destination wedding, palace wedding, wedding decor, mandap design, wedding photography, THE GRAND AFFAIR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory-50 text-charcoal-900 min-h-screen flex flex-col font-sans selection:bg-gold-400 selection:text-burgundy-950">
        <ConsultationProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WeddingConsultationModal />
        </ConsultationProvider>
      </body>
    </html>
  );
}

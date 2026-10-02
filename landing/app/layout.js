import './globals.css';

export const metadata = {
  title: 'Levva — Mobilidade feita para Angola',
  description: 'Entregas e mobilidade pensadas para a realidade de Angola. Simples, próximas e feitas para o dia a dia.',
  keywords: ['Levva', 'Angola', 'Luanda', 'entregas', 'mobilidade', 'encomendas', 'transporte'],
  openGraph: {
    title: 'Levva — Mobilidade feita para Angola',
    description: 'Entregas e mobilidade pensadas para a realidade de Angola. Simples, próximas e feitas para o dia a dia.',
    url: 'https://www.levva.co.ao',
    siteName: 'Levva',
    locale: 'pt_AO',
    type: 'website',
  },
  icons: {
    icon: '/levva-pin.svg',
  },
};

export const viewport = {
  themeColor: '#122340',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/levva-pin.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}

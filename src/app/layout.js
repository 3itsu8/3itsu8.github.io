import localFont from 'next/font/local';
import './globals.css';
import Header from '../components/Header/index.jsx';

const LINESeedJP_OTF_Bd = localFont({
  src: './fonts/LINESeedJP_OTF_Bd.woff',
  variable: '--font-LINESeedJP_OTF_Bd',
});

export const metadata = {
  title: 'みつば',
  description: 'みつばのポートフォリオサイトになります',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${LINESeedJP_OTF_Bd.variable}`}>
        <Header />
        <div className="site-wrapper">{children}</div>
      </body>
    </html>
  );
}

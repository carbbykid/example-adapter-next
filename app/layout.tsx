import './globals.css';
import { Urbanist } from 'next/font/google';
import ToastProvider from '@/providers/toast-provider';

import ModalProvider from '@/providers/modal-provider';
import Provider from '@/components/ui/provider';
import Coin98AdapterModal from '@/components/ui/modal-adapter';
import ProviderNoneModal from '@/components/ui/provider-non-modal';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Coin98 adapter example',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ProviderNoneModal> */}
        <Provider>
          {/* <ToastProvider />
          // <ModalProvider /> */}
          <Coin98AdapterModal />
          {children}
        </Provider>
        {/* </ProviderNoneModal> */}
      </body>
    </html>
  );
}

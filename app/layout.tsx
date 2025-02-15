import './global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: '',
  description: ''
};

export default async function RootLayout(props: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html>
      <body>
        {props.modal}
        {props.children}
      </body>
    </html>
  );
}

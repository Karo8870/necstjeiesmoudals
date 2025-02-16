'use client';

import dynamic from 'next/dynamic';

export default function ModalWrapper({
  selectedModal
}: {
  selectedModal: string;
}) {
  if (!selectedModal) return null;

  const ModalComponent = dynamic(() => import(`./modals/${selectedModal}`), {
    loading() {
      return <>loding</>;
    }
  });

  return <ModalComponent />;
}

'use client';

import { lazy, Suspense } from 'react';

export default function ModalWrapper({
  selectedModal
}: {
  selectedModal: string;
}) {
  if (!selectedModal) return null;

  const ModalComponent = lazy(() => import(`./modals/${selectedModal}`));

  return (
    <Suspense fallback={null}>
      <ModalComponent />
    </Suspense>
  );
}

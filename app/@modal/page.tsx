import ModalWrapper from '@/modal-wrapper';

export default async function ({
  searchParams
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const selectedModal = (await searchParams)['modal'];

  return <ModalWrapper selectedModal={selectedModal} />;
}

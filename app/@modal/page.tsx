import Modal1 from './_modals/modal-1';
import Modal2 from './_modals/modal-2';
import Modal3 from './_modals/modal-3';

const modals = {
  'modal-1': Modal1,
  'modal-2': Modal2,
  'modal-3': Modal3
};

export default async function ({
  searchParams
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const selectedModal = (await searchParams)['modal'];

  if (selectedModal in modals) {
    return <>{modals[selectedModal as keyof typeof modals]()}</>;
  }

  return <></>;
}

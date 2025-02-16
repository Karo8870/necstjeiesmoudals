export default async function ({
  searchParams
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const selectedModal = (await searchParams)['modal'];

  try {
    return (
      <>
        {await (
          await import(`../../../components/modals/${selectedModal}`)
        ).default()}
      </>
    );
  } catch (e) {
    return <></>;
  }
}

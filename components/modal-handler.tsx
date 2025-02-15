export default function ({
                             parts
                         }: {
    parts: any
}) {

    console.log(parts)

    return <>{JSON.stringify(parts)}</>
}
import useSWR from 'swr'
import xml from "fast-xml-parser";

const fetcher = (...args) => fetch(...args).then(res => res.text())

function ReadCsv() {
  const { data, error } = useSWR('/test.xml', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const dataParsed = xml.parse(data);

  return (
    <>
      <pre>{JSON.stringify(dataParsed.any_name.person, null, 2)}</pre>
    </>
  )
}

export default ReadCsv

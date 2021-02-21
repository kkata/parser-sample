import useSWR from 'swr'
import csv from "comma-separated-values"

const fetcher = (...args) => fetch(...args).then(res => res.text())

function ReadCsv() {
  const { data, error } = useSWR('/dummy.csv', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const dataParsed = csv.parse(data, {
    cast: false,
    header: true,
  });

  return (
    <>
      <pre>{JSON.stringify(dataParsed, null, 2)}</pre>
    </>
  )
}

export default ReadCsv

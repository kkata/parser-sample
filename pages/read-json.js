import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function ReadJson() {
  const { data, error } = useSWR('/test.json', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <div>hello {data.glossary.title}!</div>
      <pre>{JSON.stringify(data.glossary, null, 2)}</pre>
    </>
  )
}

export default ReadJson

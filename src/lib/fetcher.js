export default async function fetcher(query) {
    const url = 'https://api.rorret.info/app/graphql'

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
    }

    const data = await fetch(url, options)
    const json = await data.json()
    return json
}

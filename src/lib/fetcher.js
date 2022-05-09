export default async function fetcher(query) {
    const url = 'https://api.rorret.info/app/graphql?query=' + query
    const data = await fetch(url)
    const json = await data.json()
    return json
}

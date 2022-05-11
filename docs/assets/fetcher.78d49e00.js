async function n(t){const a="https://api.rorret.info/app/graphql?query="+t;return await(await fetch(a,{cache:"force-cache",credentials:"omit"})).json()}export{n as f};

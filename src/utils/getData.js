// different proxies we should use:
// http://solace.ist.rit.edu/~dsbics/proxy/
// https://people.rit.edu/~dsbics/proxy/

const proxyServer = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';

// getting data from rest API, endPoint is the data I want. ex: 'about/' or 'people/'
async function getData(endPoint){
    const result = await fetch(`${proxyServer}${endPoint}`);

    return await result.json();
}


export default getData;
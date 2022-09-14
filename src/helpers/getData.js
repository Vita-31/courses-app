export async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    });

    return await response.json();
}
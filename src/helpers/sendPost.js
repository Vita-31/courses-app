export async function sendPost(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
    });
    if(!response.ok) {
        const data = await response.json();
        return Promise.reject({code: response.status, message: data})
    }

    return await response.json();
}
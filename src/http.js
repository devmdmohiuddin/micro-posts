class EasyHTTP {
    // Make an http get req
    async get(url) {
        const response = await fetch(url)
        const resData = await response.json()

        return resData
    }

    // Make an http post req
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = response.json()

        return resData
    }

     // Make an http put req
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json()

        return resData
    }

    // Make an http put req
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resData = await 'Resource Deleted...'

        return resData
    }
}

export const http = new EasyHTTP()
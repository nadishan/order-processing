import ky from "ky"

const kyInstance = ky.create({
    prefixUrl: import.meta.env.VITE_API_URL,
});

const httpClient = {
    post: (url: string, body: any) => kyInstance.post(url, {
            json: body
        }),
    get: (url: string) => kyInstance.get(url),
}

export default httpClient;
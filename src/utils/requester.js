export const request = async (url, data = null, ) => {
    // const controller = abortController || new AbortController();
    // const signal = controller.signal;

    const options = {}

    if (data){
        options['method'] = 'POST'
        options['headers'] = {'Content-type': 'application/json'};
        options['body'] = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const result = await response.json()
            throw new Error(result.error);
        }

        return response.json();
    } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("Request was aborted");
        } else {
            throw error;
        }
    }
};
export const request = async (url, abortController = null,  data = null, ) => {
    const controller = abortController || new AbortController();
    const signal = controller.signal;

    const options = { signal }

    if (data){
        options['headers'] = {'Content-type': 'application/json'};
        options['body'] = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
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
export const request = async (url, signal,  data = null, ) => {

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
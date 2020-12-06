class HttpRequestHelper {
    async request(url, method, options = {}) {
        // Ensure url is a string
        url = String(url);

        // Replace all url parameters (e.g. /foo/:id/bar) in the string
        Object
            .keys(options.params || {})
            .map(key => url = url.replace(key, options.params[key]));

        // Append query parameters if any
        const urlObj = new URL(url);
        Object
            .keys(options.queryParams || {})
            .map(key => urlObj.searchParams.append(key, options.queryParams[key]));

        // Set the content type, default to json
        const contentType = options.contentType || 'application/json';
        
        // Get body, convert it from json when application/json
        let body = options.body ? options.body : undefined;
        if(body && contentType == 'application/json') {
            body = JSON.stringify(body);
        }

        const fetchOptions = {
            method,
            headers: { 'Content-Type': contentType },
            redirect: 'follow',
            body
        };

        // Fetch
        const result = await fetch(urlObj, fetchOptions);
        if(contentType === 'application/json') {
            // WHen the content type is json, parse the result as json
            return await result.json()
        } else {
            return result;
        }
    }

    get(url, params = {}, queryParams = {}) {
        return this.request(url, 'GET', {
            params,
            queryParams
        });
    }

    post(url, params = {}, body = {}) {
        return this.request(url, 'POST', {
            params,
            body
        });
    }

    del(url, params = {}) {
        return this.request(url, 'DELETE', {
            params
        });
    }
}

module.exports = new HttpRequestHelper();
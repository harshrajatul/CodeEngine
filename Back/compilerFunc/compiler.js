const axios = require('axios');
const qs = require('qs');

async function submitCode(code, input) {
    try {
        const language = "py";
        const requestData = qs.stringify({
            code,
            language,
            input
        });

        const config = {
            method: 'post',
            url: 'https://api.codex.jaagrav.in',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: requestData,
        };

        const response = await axios(config);
        return response.data;

        // if (response.data.error)
        // {
        //     return response.data.error;
        // }
        // else if (response.data)
        // {
        //     return response.data;
        // }
        // else
        // {
        //     return { error: 'Unexpected response from compiler' };
        // }


    } catch (error) {
        console.error(error);
        throw new Error('Compiler Error');
    }
}

module.exports = { submitCode };

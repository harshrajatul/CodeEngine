const express = require('express');
const axios = require('axios');
const qs = require('qs');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/compile', async (req, res) => {
  try {
    const { code, language, input } = req.body;

    const requestData = qs.stringify({
      code,
      language,
      input,
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
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

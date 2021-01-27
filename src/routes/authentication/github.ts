import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.post('/api/github', async (req, res) => {
  const { code } = req.body;
  let token: String;
  try {
    const githubFirstReq = await axios({
      method: 'POST',
      url: 'https://github.com/login/oauth/access_token',
      data: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        token = response.data.access_token;
        console.log(response);
        res.header('content-type', 'application/json').json({ token });
      })
      .catch((err) => console.log(err));

    const githubSecondRequest = async () => {
      const URL = 'https://api.github.com/mhmtlgly';
      const AuthStr = `Bearer ${token}`;
      const response = await axios
        .get(URL, { headers: { Authorization: AuthStr } })
        .then((response) => {
          // If request is good...
          console.log(response.data);
        })
        .catch((error) => {
          console.log('error 3 ' + error);
        });
    };
  } catch (error) {
    console.log('github error');
    res.send('nix da');
  }
});

export default router;

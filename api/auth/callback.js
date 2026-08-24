function htmlResponse(scriptBody) {
  return `<!DOCTYPE html><html><body><script>${scriptBody}</script></body></html>`;
}

module.exports = async function handler(req, res) {
  const { code, error, error_description: errorDescription } = req.query;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (error) {
    const payload = JSON.stringify({ error, errorDescription });
    res.status(200).send(
      htmlResponse(`(function(){window.opener&&window.opener.postMessage('authorization:github:error:${payload}','*');window.close();})();`)
    );
    return;
  }

  if (!code) {
    res.status(400).send('Missing OAuth code');
    return;
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenRes.json();

  if (!data.access_token) {
    const payload = JSON.stringify({ error: data.error || 'token_error', errorDescription: data.error_description });
    res.status(200).send(
      htmlResponse(`(function(){window.opener&&window.opener.postMessage('authorization:github:error:${payload}','*');window.close();})();`)
    );
    return;
  }

  const success = JSON.stringify({ token: data.access_token, provider: 'github' });
  res.status(200).send(
    htmlResponse(`(function(){window.opener&&window.opener.postMessage('authorization:github:success:${success}','*');window.close();})();`)
  );
};

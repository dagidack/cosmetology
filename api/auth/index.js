function originFromReq(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${proto}://${host}`;
}

module.exports = function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('Missing GITHUB_CLIENT_ID');
    return;
  }

  const redirectUri = `${originFromReq(req)}/api/auth/callback`;
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('scope', 'repo,user');
  url.searchParams.set('redirect_uri', redirectUri);

  res.redirect(302, url.toString());
};

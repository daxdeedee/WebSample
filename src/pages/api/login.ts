export default (req: any, res: any) => {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'a_name=Gunn;Max-Age=3600;HttpOnly,Secure');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }
};

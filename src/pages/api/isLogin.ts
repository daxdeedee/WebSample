export default (req: any, res: any) => {
  console.log('tst!!!!!');
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
};

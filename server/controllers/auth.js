const login = async (req, res) => {
  console.log(req.body);
  return res.status(200).json({ msg: "Successfull" });
};

const register = () => {};

export { login, register };

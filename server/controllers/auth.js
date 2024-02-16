const login = async (req, res) => {
  console.log(req.body);
  res.cookie("auth", { id: 123 }, { path: "/", httpOnly: true });
  return res.status(200).json({ msg: "Successfull" });
};

const register = () => {};

export { login, register };

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config");

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      hashedPassword,
    ]);
    res.status(201).send("Usuário registrado com sucesso.");
  } catch (error) {
    res.status(500).send("Erro ao registrar usuário.");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Credenciais inválidas.");
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).send("Erro ao autenticar usuário.");
  }
};

module.exports = { register, login };

const pool = require("../config");

const createForm = async (req, res) => {
  const { nome, email, telefone, empresa } = req.body;

  // Verificação para garantir que os campos não estão vazios
  if (!nome || !email || !telefone || !empresa) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }

  try {
    console.log("dados: " + nome, email, telefone, empresa);

    // Inserção no banco de dados
    await pool.query(
      "INSERT INTO forms (nome, email, telefone, empresa) VALUES ($1, $2, $3, $4)",
      [nome, email, telefone, empresa]
    );

    res.status(201).send("Formulário criado com sucesso.");
  } catch (error) {
    console.error("Erro ao criar formulário:", error);
    res.status(500).send("Erro ao criar formulário.");
  }
};
const updateForm = async (req, res) => {
  const formId = req.params.id;
  const { nome, email, telefone, empresa } = req.body;

   // Verificação para garantir que os campos não estão vazios
   if (!nome || !email || !telefone || !empresa) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }

  try {
    // Atualização no banco de dados
    await pool.query(
      "UPDATE forms SET nome = $1, email = $2, telefone = $3, empresa = $4 WHERE id = $5",
      [nome, email, telefone, empresa, formId]
    );

    res.status(200).send("Formulário atualizado com sucesso."); 
  }
  catch (error) {
    console.error("Erro ao atualizar formulário:", error);
    res.status(500).send("Erro ao atualizar formulário.");
  }
};

const deleteForm = async (req, res) => {
  const formId = req.params.id;

  try {
    // Exclusão no banco de dados
    await pool.query("DELETE FROM forms WHERE id = $1", [formId]);

    res.status(200).send("Formulário excluído com sucesso."); 
  } catch (error) {
    console.error("Erro ao excluir formulário:", error);
    res.status(500).send("Erro ao excluir formulário.");  
  }
};

const getForms = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM forms"
    );
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar formulários:", error);
    res.status(500).send("Erro ao buscar formulários.");
  }
};

module.exports = { createForm, getForms, updateForm, deleteForm };

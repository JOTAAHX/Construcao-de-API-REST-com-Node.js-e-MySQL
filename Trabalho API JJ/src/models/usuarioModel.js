const db = require('../config/db');
async function listarTodos() {
 const [rows] = await db.query('SELECT id, nome, email FROM usuarios ORDER BY id');
 return rows;
}
async function criar(nome,email) {
 const [r] = await db.execute('INSERT INTO usuarios (nome,email) VALUES (?,?)',[nome,email]);
 return r.insertId;
}
async function atualizar(id,nome,email) {
 const [r] = await db.execute('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',[nome,email,id]);
 return r.affectedRows;
}
async function excluir(id) {
 const [r] = await db.execute('DELETE FROM usuarios WHERE id = ?',[id]);
 return r.affectedRows;
}
module.exports = { listarTodos, criar, atualizar, excluir };

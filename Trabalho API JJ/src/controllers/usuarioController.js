const model = require('../models/usuarioModel');
async function listar(req,res) {
 try { return res.status(200).json(await model.listarTodos()); }
 catch(e) { console.error(e); return res.status(500).json({mensagem:'Erro interno do servidor.'}); }
}
async function criar(req,res) {
 try {
  const {nome,email}=req.body;
  if(!nome || !email) return res.status(400).json({mensagem:'Informe nome e email.'});
  const id=await model.criar(nome,email);
  return res.status(201).json({mensagem:'Usuário cadastrado com sucesso.',usuario:{id,nome,email}});
 } catch(e) {
  console.error(e);
  if(e.code==='ER_DUP_ENTRY') return res.status(400).json({mensagem:'Este email já está cadastrado.'});
  return res.status(500).json({mensagem:'Erro interno do servidor.'});
 }
}
async function atualizar(req,res) {
 try {
  const {nome,email}=req.body;
  if(!nome || !email) return res.status(400).json({mensagem:'Informe nome e email.'});
  const n=await model.atualizar(req.params.id,nome,email);
  if(!n) return res.status(404).json({mensagem:'Usuário não encontrado ou nenhum dado alterado.'});
  return res.status(200).json({mensagem:'Usuário atualizado com sucesso.'});
 } catch(e) {
  console.error(e);
  if(e.code==='ER_DUP_ENTRY') return res.status(400).json({mensagem:'Este email já está cadastrado.'});
  return res.status(500).json({mensagem:'Erro interno do servidor.'});
 }
}
async function excluir(req,res) {
 try {
  const n=await model.excluir(req.params.id);
  if(!n) return res.status(404).json({mensagem:'Usuário não encontrado.'});
  return res.status(200).json({mensagem:'Usuário excluído com sucesso.'});
 } catch(e) { console.error(e); return res.status(500).json({mensagem:'Erro interno do servidor.'}); }
}
module.exports={listar,criar,atualizar,excluir};

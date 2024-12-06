const express = require("express")
const mysql = require("mysql2/pormise")
constconexao = mysql.createPool({
    database:"petshop marilene ",
    host:"localhost",
    password:"",
    user:"root"
})

const App = express() 

App.use(express.json())

App.listen(3000)
app.post("/add_paciente",  async function(req,res){
var nome = req.query.nome
var idade = req.query.idade
var id_categoria_animal = req.query.id_categoria_animal
var query = `INSERT INTO pacientes (nome, idade, id_categoria_animal, ...) VALUES ('${nome}', '${idade}', '${id_categoria_animal}')`;
connection.query(query,function(err,results,fields){
    if (err){
        console.log('erro na consulta:', err);
    }
    else{
        console.log('resultados', results);
    }

})
})

App.delete("/remove_pacientes", async function (req, res){
var nome = req.query.nome
var id_pacientes = req.query.id_pacientes
var query =` DELETE FROM pacientes where id_paciente =${id_pacientes}`;
onnection.query(query,function(err,results,fields){
    if (err){
        console.log('erro pacientes:', err);
    }
    else{
        console.log('resultados', results);
    }

})
})

App.put("/edit_pacientes", async function (req, res){

})




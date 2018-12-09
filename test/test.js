var supertest = require("supertest");
var should = require("should");

const Encomenda = require('../api/models/Encomenda');

var idItemDeProdutoEncontrado;

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8080");

// UNIT test begin

describe("Testes Unitarios ao ItemDeProduto.",function(){

  // #1 should return home page

  it("GET -> /api/itemDeProduto",function(done){
    // calling home page api
    server
    .get("/api/itemDeProduto")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      console.log("GET -> /api/itemDeProduto");
      // HTTP status should be 200
      if(res.status == 200) console.log("Status é 200! Passou no teste.");
      idItemDeProdutoEncontrado = res.body[0]._id;
      done();
    });
  });

  it("GET -> /api/itemDeProduto/{id}",function(done){
    // calling home page api
    server
    .get("/api/itemDeProduto/"+idItemDeProdutoEncontrado)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      console.log("GET -> /api/itemDeProduto/{id}");
      // HTTP status should be 200
      if(res.status == 200) console.log("Status é 200! Passou no teste.");
      done();
    });
  });

  it("Deve retornar 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  });

});
var ProductDto = function (produtoId, nome, descricao,materialAcabamentoId,height,width,depht,emptyArea,restrictionId,dimensionId) {
        this.produtoId = produtoId;
        this.nome = nome;
        this.descricao = descricao;
        this.materialAcabamentoId = materialAcabamentoId;
        this.height = height;
        this.width = width;
        this.depht = depht;
        this.emptyArea = emptyArea;
        this.restrictionId = restrictionId;
        this.dimensionId = dimensionId;
};
var ProductDto = function (produtoId, nome, descricao,materialAcabamentoId,emptyArea,restrictionId,dimensionId) {
        this.produtoId = produtoId;
        this.nome = nome;
        this.descricao = descricao;
        this.materialAcabamentoId = materialAcabamentoId;
        this.height = null;
        this.width = null;
        this.depht = null;
        this.emptyArea = emptyArea;
        this.restrictionId = restrictionId;
        this.dimensionId = dimensionId;
};
var ProductDto = function () {
        this.produtoId = null;
        this.nome = null;
        this.descricao = null;
        this.materialAcabamentoId = null;
        this.height = null;
        this.width = null;
        this.depht = null;
        this.emptyArea = null;
        this.restrictionId = null; 
        this.dimensionId = null;
};
var ProductDto = function (produtoId) {
        this.produtoId = produtoId;
      /*   this.nome = nome;
        this.descricao = descricao;
        this.materialAcabamentoId = materialAcabamentoId;
        this.height = height;
        this.width = width;
        this.depht = depht;
        this.restrictionId = restrictionId; */
};

module.exports = ProductDto;
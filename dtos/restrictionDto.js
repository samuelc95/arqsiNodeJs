var RestrictionDto = function (restrictionId, lenghtMax, heightMax,depthMax,lenghtMin,heightMin,depthMin) {
    this.restrictionId = restrictionId;
    this.lenghtMax = lenghtMax;
    this.heightMax = heightMax;
    this.depthMax = depthMax;
    this.lenghtMin = lenghtMin;
    this.heightMin = heightMin;
    this.depthMin = depthMin;
};
var RestrictionDto = function () {
    this.restrictionId = null;
    this.lenghtMax = null;
    this.heightMax = null;
    this.depthMax = null;
    this.lenghtMin = null;
    this.heightMin = null;
    this.depthMin = null;
};

module.exports = RestrictionDto;

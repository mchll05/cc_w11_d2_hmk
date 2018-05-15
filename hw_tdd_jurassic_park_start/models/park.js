const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
};

Park.prototype.addDinosaurToCollection = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaurFromCollection = function (dinosaur) {
  this.dinosaurCollection.shift(dinosaur);
};

Park.prototype.findDinosaurBySpecies = function (dinosaurHunt) {
  let foundDinos = [];
  for (dinosaur of this.dinosaurCollection){
    if (dinosaur.species === dinosaurHunt){
      foundDinos.push(dinosaur);
    }
  }
  return foundDinos;
}

Park.prototype.removeDinosaursBySpecies = function (species) {
    for (dinosaur of this.dinosaurCollection){
    if(dinosaur.species === species){
      this.dinosaurCollection.splice(dinosaur)
    }
  }
}

Park.protype.findMostPopularDino = function () {

}


module.exports = Park;

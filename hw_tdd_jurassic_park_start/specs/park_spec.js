const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaurCollection;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('steggasaurous', 'herbivore', 100);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaurCollection = [dinosaur1];
    park = new Park('Jurassic Park', 100, dinosaurCollection);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection;
    assert.strictEqual(park.dinosaurCollection.length, 1);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaurToCollection(dinosaur2);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaurFromCollection(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findDinosaurBySpecies('steggasaurous');
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeDinosaursBySpecies('steggasaurous');
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findMostPopularDino(dinosaur.species);
    assert.strictEqual(actual, 'steggasaurous');
  });

});

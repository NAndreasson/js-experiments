var expect = require('expect.js')
  , Calculator = require('../lib/calculator').Calculator
  ;

describe('Calculator', function() {

  describe('add', function() {
    var calculator = new Calculator()
      ;

    it('should return a number', function() {
      var result = calculator.add( 5, 3 );
      expect( result ).to.be.a('number');
    });

    it('should return 10', function() {
      var result = calculator.add( 8, 2 );
      expect( result ).to.equal( 10 );
    });

    it('should return -10', function() {
      var result = calculator.add( 10, -20 );
      expect( result ).to.equal( -10 );
    });
  });

  describe('subtract', function() {
    var calculator = new Calculator()
      ;

    it('should return a number', function() {
      var result = calculator.subtract( 5, 3 );
      expect( result ).to.be.a('number');
    });

    it('should return 6', function() {
      var result = calculator.subtract( 8, 2 );
      expect( result ).to.equal( 6 );
    });

    it('should return -10', function() {
      var result = calculator.subtract( 10, 20 );
      expect( result ).to.equal( -10 );
    });

  });

  describe('divide', function() {
    var calculator = new Calculator()
      ;

    it('should return a number', function() {
      var result = calculator.divide( 10, 2 );
      expect( result ).to.be.a('number');
    });

    it('should return 5', function() {
      var result = calculator.divide( 10, 2 );
      expect( result ).to.equal( 5 );
    });

    it('should return Infinity', function() {
      var result = calculator.divide( 10, 0 );
      expect( result ).to.equal( Infinity );
    });

  });

  describe('multiply', function() {
    var calculator = new Calculator()
      ;

    it('should return a number', function() {
      var result = calculator.multiply( 10, 2 );
      expect( result ).to.be.a('number');
    });

    it('should return 20', function() {
      var result = calculator.multiply( 10, 2 );
      expect( result ).to.equal( 20 );
    });

    it('should return 0', function() {
      var result = calculator.multiply( 10, 0 );
      expect( result ).to.equal( 0 );
    });

  });

});
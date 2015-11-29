'use strict';

var Lri = require('../index.js'),
    assert = require('chai').assert;

describe('index', function() {

    var size,
        lri;

    beforeEach(function() {
        size = 2;
        lri = new Lri(size);

        assert.isUndefined(lri.unshift(1));
        assert.isUndefined(lri.unshift(2));
    });

    describe('constructor', function() {

        it('should throw an exception on an invalid argument', function() {
            assert.throw(function() {
                new Lri(null)
            });

            assert.throw(function() {
                new Lri('a');
            });

            assert.throw(function() {
                new Lri(-1);
            });
        });

    });

    describe('#unshift()', function() {

        it('should drop the oldest inserted element once the max has been reached', function() {
            var el;

            assert.equal(lri.size(), size);

            assert.equal(lri.unshift(3), 1);

            assert.equal(lri.size(), size);

            el = lri.slice();

            assert.equal(el[0], 3);
            assert.equal(el[1], 2);
        })

    });

    describe('#shift()', function() {

        it('should remove and return the most recently inserted element', function() {
            assert.equal(lri.shift(), 2);
            assert.equal(lri.size(), size - 1);

            assert.equal(lri.shift(), 1);
            assert.equal(lri.size(), size - 2);

            assert.isUndefined(lri.shift());
            assert.equal(lri.size(), size - 2);
        });

    });

    describe('#peek()', function() {

        it('should return the most recently inserted element but NOT remove it', function() {
            assert.equal(lri.size(), size);

            assert.equal(lri.peek(), 2);

            assert.equal(lri.size(), size);

            lri.shift();

            assert.equal(lri.peek(), 1);

            lri.shift();

            assert.isUndefined(lri.peek());
        });

    });

    describe('#slice()', function() {

        it('should return the full collection when no parameters are provided', function() {
            var el;

            el = lri.slice();
            assert.equal(el.length, lri.size());
            assert.equal(el[0], 2);
            assert.equal(el[1], 1);
        });

        it('should return the bounded elements when bounds are provided', function() {
            var el;

            el = lri.slice(0, 1);
            assert.equal(el.length, 1);
            assert.equal(el[0], 2);
        });

    });

});
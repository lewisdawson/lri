'use strict';

var Lri;

/**
 * The constructor that, when invoked, initializes a new least recently inserted (lri) collection that's bound by the maxSize parameter.
 *
 * @param maxSize
 *          The max size to let the collection grow to
 * @returns An {@link Object} reference to all the publicly exposed functions
 * @constructor
 */
Lri = function(maxSize) {

    var arr;

    function init() {
        assertMaxSize();

        arr = [];
    }

    function assertMaxSize() {
        if (!maxSize || !(typeof maxSize === 'number') || maxSize <= 0) {
            throw Error('"maxSize" parameter must be an integer greater than zero!');
        }
    }

    /**
     * Removes and returns the first element of the collection.
     *
     * @returns The first element of the collection. If the collection is empty, <code>undefined</code> is returned.
     * @see {@link Array#shift}
     */
    function shift() {
        return arr.shift();
    }

    /**
     * Adds the parameter el to the front of the collection. If the collection has reached its capacity, the last
     * (oldest) element of the collection is removed and returned.
     *
     * @param el
     *          The element to add to the front of the collection.
     * @returns The element that was removed from the collection if the collection has reached capacity. If it has not
     *     reached capacity, <code>undefined</code> is returned.
     * @see {@link Array#unshift}
     */
    function unshift(el) {
        var popped;

        if (arr.length >= maxSize) {
            popped = arr.pop();
        }

        arr.unshift(el);

        return popped;
    }

    /**
     * @returns The current size of the collection.
     */
    function size() {
        return arr.length;
    }

    /**
     * An array (shallow copy) that represents the elements in the collection from the begin index to the end index.
     * Leaving the indexes blank with result in the entire collection being returned.
     *
     * @param begin
     *          The beginning index to slice from (inclusive)
     * @param end
     *          The ending index to slice to (exclusive)
     * @returns An array that represents the elements in the collection from the begin to the end
     * @see {@link Array#slice}
     */
    function slice(begin, end) {
        return arr.slice(begin, end);
    }

    /**
     * @returns The element most recently inserted into the collection, or <code>undefined</code> if the collection is empty.
     */
    function peek() {
        return size() > 0 ? arr.slice(0, 1)[0] : undefined;
    }

    init();

    return {
        shift: shift,
        unshift: unshift,
        size: size,
        slice: slice,
        peek: peek
    };

};

module.exports = Lri;
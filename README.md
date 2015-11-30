## lri

lri, which stands for "least recently inserted," is a simple collection (backed by an array) that can be used to store up to N number of elements without having to manage the removal of elements once the size of the collection has reached N. This can be useful in a number of situations where you only care about tracking a limited number of elements. Some examples include:

1. A collection that tracks the user's last 20 operations, so they can be undone/redone.
1. A collection that tracks the last 50 price stock price changes (i.e., last 50 ticks) so you can run calculations against the collection.

Once the max capacity of the collection has been reached, adding another element to the collection will evict the oldest element in the collection.

## Install

```
$ npm install lri
```

## Conventions

Given that this is essentially a glorified array wrapper with some added functionality, the naming conventions and functionality mimic [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) closely.

## Interface

### lri(maxSize)

The constructor that, when invoked, initializes a new lri collection that's bound by the *maxSize* parameter. The *maxSize* parameter must be a valid integer greater than zero.

### shift()

Removes and returns the first element of the collection. If the collection is empty, *undefined* is returned.

### unshift(el)

Adds the parameter *el* to the front of the collection. If the collection has reached its capacity, the last (oldest) element of the collection is removed and returned.

### size()

Returns the current size of the collection (i.e., the current number of elements).

### slice([begin[, end]])

An array (shallow copy) that represents the elements in the collection from the begin index to the end index. Leaving the indexes blank with result in the entire collection being returned. See [Array#slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice] for additional details.

### peek()

The element most recently inserted into the collection, or undefined if the collection is empty.

## Tests

lri has complete code coverage. To run the tests, do the following:

```
$ npm install
$ npm test
```

To view the coverage report (via Istanbul), do the following:

```
$ npm install
$ npm run coverage
```
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Parse JavaScript SDK
	 * Version: 1.5.0
	 * Built: Fri Jul 10 2015 17:05:46
	 * http://parse.com
	 *
	 * Copyright 2015 Parse, LLC
	 *
	 * Includes: Underscore.js
	 * Copyright 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
	 * Released under the MIT license.
	 */
	(function(root) {
	  root.Parse = root.Parse || {};
	  root.Parse.VERSION = "js1.5.0";
	}(this));
	//     Underscore.js 1.4.4
	//     http://underscorejs.org
	//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `global` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Establish the object that gets returned to break out of a loop iteration.
	  var breaker = {};
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var push             = ArrayProto.push,
	      slice            = ArrayProto.slice,
	      concat           = ArrayProto.concat,
	      toString         = ObjProto.toString,
	      hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeForEach      = ArrayProto.forEach,
	    nativeMap          = ArrayProto.map,
	    nativeReduce       = ArrayProto.reduce,
	    nativeReduceRight  = ArrayProto.reduceRight,
	    nativeFilter       = ArrayProto.filter,
	    nativeEvery        = ArrayProto.every,
	    nativeSome         = ArrayProto.some,
	    nativeIndexOf      = ArrayProto.indexOf,
	    nativeLastIndexOf  = ArrayProto.lastIndexOf,
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object via a string identifier,
	  // for Closure Compiler "advanced" mode.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.4.4';
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles objects with the built-in `forEach`, arrays, and raw objects.
	  // Delegates to **ECMAScript 5**'s native `forEach` if available.
	  var each = _.each = _.forEach = function(obj, iterator, context) {
	    if (obj == null) return;
	    if (nativeForEach && obj.forEach === nativeForEach) {
	      obj.forEach(iterator, context);
	    } else if (obj.length === +obj.length) {
	      for (var i = 0, l = obj.length; i < l; i++) {
	        if (iterator.call(context, obj[i], i, obj) === breaker) return;
	      }
	    } else {
	      for (var key in obj) {
	        if (_.has(obj, key)) {
	          if (iterator.call(context, obj[key], key, obj) === breaker) return;
	        }
	      }
	    }
	  };
	
	  // Return the results of applying the iterator to each element.
	  // Delegates to **ECMAScript 5**'s native `map` if available.
	  _.map = _.collect = function(obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	    each(obj, function(value, index, list) {
	      results[results.length] = iterator.call(context, value, index, list);
	    });
	    return results;
	  };
	
	  var reduceError = 'Reduce of empty array with no initial value';
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
	  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
	    var initial = arguments.length > 2;
	    if (obj == null) obj = [];
	    if (nativeReduce && obj.reduce === nativeReduce) {
	      if (context) iterator = _.bind(iterator, context);
	      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
	    }
	    each(obj, function(value, index, list) {
	      if (!initial) {
	        memo = value;
	        initial = true;
	      } else {
	        memo = iterator.call(context, memo, value, index, list);
	      }
	    });
	    if (!initial) throw new TypeError(reduceError);
	    return memo;
	  };
	
	  // The right-associative version of reduce, also known as `foldr`.
	  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
	  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
	    var initial = arguments.length > 2;
	    if (obj == null) obj = [];
	    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
	      if (context) iterator = _.bind(iterator, context);
	      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
	    }
	    var length = obj.length;
	    if (length !== +length) {
	      var keys = _.keys(obj);
	      length = keys.length;
	    }
	    each(obj, function(value, index, list) {
	      index = keys ? keys[--length] : --length;
	      if (!initial) {
	        memo = obj[index];
	        initial = true;
	      } else {
	        memo = iterator.call(context, memo, obj[index], index, list);
	      }
	    });
	    if (!initial) throw new TypeError(reduceError);
	    return memo;
	  };
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, iterator, context) {
	    var result;
	    any(obj, function(value, index, list) {
	      if (iterator.call(context, value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };
	
	  // Return all the elements that pass a truth test.
	  // Delegates to **ECMAScript 5**'s native `filter` if available.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
	    each(obj, function(value, index, list) {
	      if (iterator.call(context, value, index, list)) results[results.length] = value;
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, iterator, context) {
	    return _.filter(obj, function(value, index, list) {
	      return !iterator.call(context, value, index, list);
	    }, context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Delegates to **ECMAScript 5**'s native `every` if available.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = true;
	    if (obj == null) return result;
	    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
	    each(obj, function(value, index, list) {
	      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Delegates to **ECMAScript 5**'s native `some` if available.
	  // Aliased as `any`.
	  var any = _.some = _.any = function(obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = false;
	    if (obj == null) return result;
	    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
	    each(obj, function(value, index, list) {
	      if (result || (result = iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  };
	
	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
	    return any(obj, function(value) {
	      return value === target;
	    });
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, function(value){ return value[key]; });
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs, first) {
	    if (_.isEmpty(attrs)) return first ? null : [];
	    return _[first ? 'find' : 'filter'](obj, function(value) {
	      for (var key in attrs) {
	        if (attrs[key] !== value[key]) return false;
	      }
	      return true;
	    });
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.where(obj, attrs, true);
	  };
	
	  // Return the maximum element or (element-based computation).
	  // Can't optimize arrays of integers longer than 65,535 elements.
	  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
	  _.max = function(obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.max.apply(Math, obj);
	    }
	    if (!iterator && _.isEmpty(obj)) return -Infinity;
	    var result = {computed : -Infinity, value: -Infinity};
	    each(obj, function(value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed >= result.computed && (result = {value : value, computed : computed});
	    });
	    return result.value;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.min.apply(Math, obj);
	    }
	    if (!iterator && _.isEmpty(obj)) return Infinity;
	    var result = {computed : Infinity, value: Infinity};
	    each(obj, function(value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed < result.computed && (result = {value : value, computed : computed});
	    });
	    return result.value;
	  };
	
	  // Shuffle an array.
	  _.shuffle = function(obj) {
	    var rand;
	    var index = 0;
	    var shuffled = [];
	    each(obj, function(value) {
	      rand = _.random(index++);
	      shuffled[index - 1] = shuffled[rand];
	      shuffled[rand] = value;
	    });
	    return shuffled;
	  };
	
	  // An internal function to generate lookup iterators.
	  var lookupIterator = function(value) {
	    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
	  };
	
	  // Sort the object's values by a criterion produced by an iterator.
	  _.sortBy = function(obj, value, context) {
	    var iterator = lookupIterator(value);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value : value,
	        index : index,
	        criteria : iterator.call(context, value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index < right.index ? -1 : 1;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(obj, value, context, behavior) {
	    var result = {};
	    var iterator = lookupIterator(value || _.identity);
	    each(obj, function(value, index) {
	      var key = iterator.call(context, value, index, obj);
	      behavior(result, key, value);
	    });
	    return result;
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = function(obj, value, context) {
	    return group(obj, value, context, function(result, key, value) {
	      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
	    });
	  };
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = function(obj, value, context) {
	    return group(obj, value, context, function(result, key) {
	      if (!_.has(result, key)) result[key] = 0;
	      result[key]++;
	    });
	  };
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iterator, context) {
	    iterator = iterator == null ? _.identity : lookupIterator(iterator);
	    var value = iterator.call(context, obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = (low + high) >>> 1;
	      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
	    }
	    return low;
	  };
	
	  // Safely convert anything iterable into a real, live array.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if ((n != null) && !guard) {
	      return slice.call(array, Math.max(array.length - n, 0));
	    } else {
	      return array[array.length - 1];
	    }
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, (n == null) || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, output) {
	    each(input, function(value) {
	      if (_.isArray(value)) {
	        shallow ? push.apply(output, value) : flatten(value, shallow, output);
	      } else {
	        output.push(value);
	      }
	    });
	    return output;
	  };
	
	  // Return a completely flattened version of an array.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, []);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iterator, context) {
	    if (_.isFunction(isSorted)) {
	      context = iterator;
	      iterator = isSorted;
	      isSorted = false;
	    }
	    var initial = iterator ? _.map(array, iterator, context) : array;
	    var results = [];
	    var seen = [];
	    each(initial, function(value, index) {
	      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
	        seen.push(value);
	        results.push(array[index]);
	      }
	    });
	    return results;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(concat.apply(ArrayProto, arguments));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var rest = slice.call(arguments, 1);
	    return _.filter(_.uniq(array), function(item) {
	      return _.every(rest, function(other) {
	        return _.indexOf(other, item) >= 0;
	      });
	    });
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
	    return _.filter(array, function(value){ return !_.contains(rest, value); });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    var args = slice.call(arguments);
	    var length = _.max(_.pluck(args, 'length'));
	    var results = new Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(args, "" + i);
	    }
	    return results;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
	  // we need this function. Return the position of the first occurrence of an
	  // item in an array, or -1 if the item is not included in the array.
	  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, l = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
	    for (; i < l; i++) if (array[i] === item) return i;
	    return -1;
	  };
	
	  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var hasIndex = from != null;
	    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
	      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
	    }
	    var i = (hasIndex ? from : array.length);
	    while (i--) if (array[i] === item) return i;
	    return -1;
	  };
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = arguments[2] || 1;
	
	    var len = Math.max(Math.ceil((stop - start) / step), 0);
	    var idx = 0;
	    var range = new Array(len);
	
	    while(idx < len) {
	      range[idx++] = start;
	      start += step;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    var args = slice.call(arguments, 2);
	    return function() {
	      return func.apply(context, args.concat(slice.call(arguments)));
	    };
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context.
	  _.partial = function(func) {
	    var args = slice.call(arguments, 1);
	    return function() {
	      return func.apply(this, args.concat(slice.call(arguments)));
	    };
	  };
	
	  // Bind all of an object's methods to that object. Useful for ensuring that
	  // all callbacks defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var funcs = slice.call(arguments, 1);
	    if (funcs.length === 0) funcs = _.functions(obj);
	    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memo = {};
	    hasher || (hasher = _.identity);
	    return function() {
	      var key = hasher.apply(this, arguments);
	      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
	    };
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){ return func.apply(null, args); }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time.
	  _.throttle = function(func, wait) {
	    var context, args, timeout, result;
	    var previous = 0;
	    var later = function() {
	      previous = new Date;
	      timeout = null;
	      result = func.apply(context, args);
	    };
	    return function() {
	      var now = new Date;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	      } else if (!timeout) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, result;
	    return function() {
	      var context = this, args = arguments;
	      var later = function() {
	        timeout = null;
	        if (!immediate) result = func.apply(context, args);
	      };
	      var callNow = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if (callNow) result = func.apply(context, args);
	      return result;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = function(func) {
	    var ran = false, memo;
	    return function() {
	      if (ran) return memo;
	      ran = true;
	      memo = func.apply(this, arguments);
	      func = null;
	      return memo;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return function() {
	      var args = [func];
	      push.apply(args, arguments);
	      return wrapper.apply(this, args);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var funcs = arguments;
	    return function() {
	      var args = arguments;
	      for (var i = funcs.length - 1; i >= 0; i--) {
	        args = [funcs[i].apply(this, args)];
	      }
	      return args[0];
	    };
	  };
	
	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    if (times <= 0) return func();
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Object Functions
	  // ----------------
	
	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = nativeKeys || function(obj) {
	    if (obj !== Object(obj)) throw new TypeError('Invalid object');
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var values = [];
	    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
	    return values;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var pairs = [];
	    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    each(slice.call(arguments, 1), function(source) {
	      if (source) {
	        for (var prop in source) {
	          obj[prop] = source[prop];
	        }
	      }
	    });
	    return obj;
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj) {
	    var copy = {};
	    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	    each(keys, function(key) {
	      if (key in obj) copy[key] = obj[key];
	    });
	    return copy;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj) {
	    var copy = {};
	    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	    for (var key in obj) {
	      if (!_.contains(keys, key)) copy[key] = obj[key];
	    }
	    return copy;
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    each(slice.call(arguments, 1), function(source) {
	      if (source) {
	        for (var prop in source) {
	          if (obj[prop] == null) obj[prop] = source[prop];
	        }
	      }
	    });
	    return obj;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
	    if (a === b) return a !== 0 || 1 / a == 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className != toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, dates, and booleans are compared by value.
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return a == String(b);
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
	        // other numeric values.
	        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a == +b;
	      // RegExps are compared by their source patterns and flags.
	      case '[object RegExp]':
	        return a.source == b.source &&
	               a.global == b.global &&
	               a.multiline == b.multiline &&
	               a.ignoreCase == b.ignoreCase;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] == a) return bStack[length] == b;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0, result = true;
	    // Recursively compare objects and arrays.
	    if (className == '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size == b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Objects with different constructors are not equivalent, but `Object`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
	                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
	        return false;
	      }
	      // Deep compare objects.
	      for (var key in a) {
	        if (_.has(a, key)) {
	          // Count the expected number of properties.
	          size++;
	          // Deep compare each member.
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	      // Ensure that both objects contain the same number of properties.
	      if (result) {
	        for (key in b) {
	          if (_.has(b, key) && !(size--)) break;
	        }
	        result = !size;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) == '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    return obj === Object(obj);
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) == '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return !!(obj && _.has(obj, 'callee'));
	    };
	  }
	
	  // Optimize `isFunction` if appropriate.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj === 'function';
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj != +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iterators.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iterator, context) {
	    var accum = Array(n);
	    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // List of HTML entities for escaping.
	  var entityMap = {
	    escape: {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '"': '&quot;',
	      "'": '&#x27;',
	      '/': '&#x2F;'
	    }
	  };
	  entityMap.unescape = _.invert(entityMap.escape);
	
	  // Regexes containing the keys and values listed immediately above.
	  var entityRegexes = {
	    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
	    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
	  };
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  _.each(['escape', 'unescape'], function(method) {
	    _[method] = function(string) {
	      if (string == null) return '';
	      return ('' + string).replace(entityRegexes[method], function(match) {
	        return entityMap[method][match];
	      });
	    };
	  });
	
	  // If the value of the named property is a function then invoke it;
	  // otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return null;
	    var value = object[property];
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    each(_.functions(obj), function(name){
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\t':     't',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  _.template = function(text, data, settings) {
	    var render;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = new RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset)
	        .replace(escaper, function(match) { return '\\' + escapes[match]; });
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      }
	      if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      }
	      if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	      index = offset + match.length;
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + "return __p;\n";
	
	    try {
	      render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    if (data) return render(data, _);
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled function source as a convenience for precompilation.
	    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function, which will delegate to the wrapper.
	  _.chain = function(obj) {
	    return _(obj).chain();
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  _.extend(_.prototype, {
	
	    // Start chaining a wrapped Underscore object.
	    chain: function() {
	      this._chain = true;
	      return this;
	    },
	
	    // Extracts the result from a wrapped and chained object.
	    value: function() {
	      return this._wrapped;
	    }
	
	  });
	
	}).call(this);
	
	/*global _: false, $: false, localStorage: false, process: true,
	  XMLHttpRequest: false, XDomainRequest: false, exports: false,
	  require: false, setTimeout: true */
	(function(root) {
	  root.Parse = root.Parse || {};
	  /**
	   * Contains all Parse API classes and functions.
	   * @name Parse
	   * @namespace
	   *
	   * Contains all Parse API classes and functions.
	   */
	  var Parse = root.Parse;
	
	  var req = typeof(require) === 'function' ? require : null;
	  // Load references to other dependencies
	  if (typeof(XMLHttpRequest) !== 'undefined') {
	    Parse.XMLHttpRequest = XMLHttpRequest;
	  } else if (false) {
	    Parse.XMLHttpRequest = req('xmlhttprequest').XMLHttpRequest;
	  }
	  // Import Parse's local copy of underscore.
	  if (typeof(exports) !== 'undefined' && exports._) {
	    // We're running in a CommonJS environment
	    Parse._ = exports._.noConflict();
	    exports.Parse = Parse;
	  } else {
	    Parse._ = _.noConflict();
	  }
	
	  // If jQuery or Zepto has been included, grab a reference to it.
	  if (typeof($) !== "undefined") {
	    Parse.$ = $;
	  }
	
	  // Helpers
	  // -------
	
	  // Shared empty constructor function to aid in prototype-chain creation.
	  var EmptyConstructor = function() {};
	
	  // TODO: fix this so that ParseObjects aren't all called "child" in debugger.
	  // Helper function to correctly set up the prototype chain, for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var inherits = function(parent, protoProps, staticProps) {
	    var child;
	
	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && protoProps.hasOwnProperty('constructor')) {
	      child = protoProps.constructor;
	    } else {
	      /** @ignore */
	      child = function(){ parent.apply(this, arguments); };
	    }
	
	    // Inherit class (static) properties from parent.
	    Parse._.extend(child, parent);
	
	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    EmptyConstructor.prototype = parent.prototype;
	    child.prototype = new EmptyConstructor();
	
	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) {
	      Parse._.extend(child.prototype, protoProps);
	    }
	
	    // Add static properties to the constructor function, if supplied.
	    if (staticProps) {
	      Parse._.extend(child, staticProps);
	    }
	
	    // Correctly set child's `prototype.constructor`.
	    child.prototype.constructor = child;
	
	    // Set a convenience property in case the parent's prototype is
	    // needed later.
	    child.__super__ = parent.prototype;
	
	    return child;
	  };
	
	  // Set the server for Parse to talk to.
	  Parse.serverURL = "https://api.parse.com";
	
	  // Check whether we are running in Node.js.
	  if (typeof(process) !== "undefined" &&
	      process.versions &&
	      process.versions.node) {
	    Parse._isNode = true;
	  }
	
	  /**
	   * Call this method first to set up your authentication tokens for Parse.
	   * You can get your keys from the Data Browser on parse.com.
	   * @param {String} applicationId Your Parse Application ID.
	   * @param {String} javaScriptKey Your Parse JavaScript Key.
	   * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
	   */
	  Parse.initialize = function(applicationId, javaScriptKey, masterKey) {
	    if (masterKey) {
	      throw "Parse.initialize() was passed a Master Key, which is only " +
	        "allowed from within Node.js.";
	    }
	    Parse._initialize(applicationId, javaScriptKey);
	  };
	
	  /**
	   * Call this method first to set up master authentication tokens for Parse.
	   * This method is for Parse's own private use.
	   * @param {String} applicationId Your Parse Application ID.
	   * @param {String} javaScriptKey Your Parse JavaScript Key.
	   * @param {String} masterKey Your Parse Master Key.
	   */
	  Parse._initialize = function(applicationId, javaScriptKey, masterKey) {
	    Parse.applicationId = applicationId;
	    Parse.javaScriptKey = javaScriptKey;
	    Parse.masterKey = masterKey;
	    Parse._useMasterKey = false;
	  };
	
	  // If we're running in node.js, allow using the master key.
	  if (Parse._isNode) {
	    Parse.initialize = Parse._initialize;
	
	    Parse.Cloud = Parse.Cloud || {};
	    /**
	     * Switches the Parse SDK to using the Master key.  The Master key grants
	     * priveleged access to the data in Parse and can be used to bypass ACLs and
	     * other restrictions that are applied to the client SDKs.
	     * <p><strong><em>Available in Cloud Code and Node.js only.</em></strong>
	     * </p>
	     */
	    Parse.Cloud.useMasterKey = function() {
	      Parse._useMasterKey = true;
	    };
	  }
	
	  /**
	   * Returns prefix for Storage keys used by this instance of Parse.
	   * @param {String} path The relative suffix to append to it.
	   *     null or undefined is treated as the empty string.
	   * @return {String} The full key name.
	   */
	  Parse._getParsePath = function(path) {
	    if (!Parse.applicationId) {
	      throw "You need to call Parse.initialize before using Parse.";
	    }
	    if (!path) {
	      path = "";
	    }
	    if (!Parse._.isString(path)) {
	      throw "Tried to get a Storage path that wasn't a String.";
	    }
	    if (path[0] === "/") {
	      path = path.substring(1);
	    }
	    return "Parse/" + Parse.applicationId + "/" + path;
	  };
	
	  /**
	   * Returns a Promise that is resolved with the unique string for this app on
	   * this machine.
	   * Gets reset when Storage is cleared.
	   */
	  Parse._installationId = null;
	  Parse._getInstallationId = function() {
	    // See if it's cached in RAM.
	    if (Parse._installationId) {
	      return Parse.Promise.as(Parse._installationId);
	    }
	
	    // Try to get it from Storage.
	    var path = Parse._getParsePath("installationId");
	    return (Parse.Storage.getItemAsync(path)
	      .then(function(value) {
	        Parse._installationId = value;
	
	        if (!Parse._installationId || Parse._installationId === "") {
	          // It wasn't in Storage, so create a new one.
	          var hexOctet = function() {
	            return (
	              Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
	            );
	          };
	          Parse._installationId = (
	            hexOctet() + hexOctet() + "-" +
	            hexOctet() + "-" +
	            hexOctet() + "-" +
	            hexOctet() + "-" +
	            hexOctet() + hexOctet() + hexOctet());
	          return Parse.Storage.setItemAsync(path, Parse._installationId);
	        }
	
	        return Parse.Promise.as(Parse._installationId);
	      })
	    );
	  };
	
	  Parse._parseDate = function(iso8601) {
	    var regexp = new RegExp(
	      "^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})" + "T" +
	      "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})" +
	      "(.([0-9]+))?" + "Z$");
	    var match = regexp.exec(iso8601);
	    if (!match) {
	      return null;
	    }
	
	    var year = match[1] || 0;
	    var month = (match[2] || 1) - 1;
	    var day = match[3] || 0;
	    var hour = match[4] || 0;
	    var minute = match[5] || 0;
	    var second = match[6] || 0;
	    var milli = match[8] || 0;
	
	    return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
	  };
	
	  Parse._ajaxIE8 = function(method, url, data) {
	    var promise = new Parse.Promise();
	    var xdr = new XDomainRequest();
	    xdr.onload = function() {
	      var response;
	      try {
	        response = JSON.parse(xdr.responseText);
	      } catch (e) {
	        promise.reject(e);
	      }
	      if (response) {
	        promise.resolve(response);
	      }
	    };
	    xdr.onerror = xdr.ontimeout = function() {
	      // Let's fake a real error message.
	      var fakeResponse = {
	        responseText: JSON.stringify({
	          code: Parse.Error.X_DOMAIN_REQUEST,
	          error: "IE's XDomainRequest does not supply error info."
	        })
	      };
	      promise.reject(fakeResponse);
	    };
	    xdr.onprogress = function() {};
	    xdr.open(method, url);
	    xdr.send(data);
	    return promise;
	  };
	
	  Parse._useXDomainRequest = function() {
	    if (typeof(XDomainRequest) !== "undefined") {
	      // We're in IE 8+.
	      if ('withCredentials' in new XMLHttpRequest()) {
	        // We're in IE 10+.
	        return false;
	      }
	      return true;
	    }
	    return false;
	  };
	
	  // TODO(klimt): Get rid of success/error usage in website.
	  Parse._ajax = function(method, url, data, success, error) {
	    var options = {
	      success: success,
	      error: error
	    };
	
	    if (Parse._useXDomainRequest()) {
	      return Parse._ajaxIE8(method, url, data)._thenRunCallbacks(options);
	    }
	
	    var promise = new Parse.Promise();
	    var attempts = 0;
	
	    var dispatch = function() {
	      var handled = false;
	      var xhr = new Parse.XMLHttpRequest();
	
	      xhr.onreadystatechange = function() {
	        if (xhr.readyState === 4) {
	          if (handled) {
	            return;
	          }
	          handled = true;
	
	          if (xhr.status >= 200 && xhr.status < 300) {
	            var response;
	            try {
	              response = JSON.parse(xhr.responseText);
	            } catch (e) {
	              promise.reject(e);
	            }
	            if (response) {
	              promise.resolve(response, xhr.status, xhr);
	            }
	          } else if (xhr.status >= 500) { // Retry on 5XX
	            if (++attempts < 5) {
	              // Exponentially-growing delay
	              var delay = Math.round(
	                Math.random() * 125 * Math.pow(2, attempts)
	              );
	              setTimeout(dispatch, delay);
	            } else {
	              // After 5 retries, fail
	              promise.reject(xhr);
	            }
	          } else {
	            promise.reject(xhr);
	          }
	        }
	      };
	
	      xhr.open(method, url, true);
	      xhr.setRequestHeader('Content-Type', 'text/plain');  // avoid pre-flight.
	      if (Parse._isNode) {
	        // Add a special user agent just for request from node.js.
	        xhr.setRequestHeader("User-Agent",
	                             "Parse/" + Parse.VERSION +
	                             " (NodeJS " + process.versions.node + ")");
	      }
	      xhr.send(data);
	    };
	
	    dispatch();
	    return promise._thenRunCallbacks(options); 
	  };
	
	  // A self-propagating extend function.
	  Parse._extend = function(protoProps, classProps) {
	    var child = inherits(this, protoProps, classProps);
	    child.extend = this.extend;
	    return child;
	  };
	
	  /**
	   * Options:
	   *   route: is classes, users, login, etc.
	   *   objectId: null if there is no associated objectId.
	   *   method: the http method for the REST API.
	   *   dataObject: the payload as an object, or null if there is none.
	   *   useMasterKey: overrides whether to use the master key if set.
	   * @ignore
	   */
	  Parse._request = function(options) {
	    var route = options.route;
	    var className = options.className;
	    var objectId = options.objectId;
	    var method = options.method;
	    var useMasterKey = options.useMasterKey;
	    var sessionToken = options.sessionToken;
	    var dataObject = options.data;
	
	    if (!Parse.applicationId) {
	      throw "You must specify your applicationId using Parse.initialize.";
	    }
	
	    if (!Parse.javaScriptKey && !Parse.masterKey) {
	      throw "You must specify a key using Parse.initialize.";
	    }
	
	    // TODO: We can remove this check later, but it's useful for development.
	    if (route !== "batch" &&
	        route !== "classes" &&
	        route !== "events" &&
	        route !== "files" &&
	        route !== "functions" &&
	        route !== "login" &&
	        route !== "logout" &&
	        route !== "push" &&
	        route !== "requestPasswordReset" &&
	        route !== "rest_verify_analytics" &&
	        route !== "users" &&
	        route !== "jobs" &&
	        route !== "config" &&
	        route !== "sessions" &&
	        route !== "upgradeToRevocableSession") {
	      throw "Bad route: '" + route + "'.";
	    }
	
	    var url = Parse.serverURL;
	    if (url.charAt(url.length - 1) !== "/") {
	      url += "/";
	    }
	    url += "1/" + route;
	    if (className) {
	      url += "/" + className;
	    }
	    if (objectId) {
	      url += "/" + objectId;
	    }
	
	    dataObject = Parse._.clone(dataObject || {});
	    if (method !== "POST") {
	      dataObject._method = method;
	      method = "POST";
	    }
	
	    if (Parse._.isUndefined(useMasterKey)) {
	      useMasterKey = Parse._useMasterKey;
	    }
	
	    dataObject._ApplicationId = Parse.applicationId;
	    if (!useMasterKey) {
	      dataObject._JavaScriptKey = Parse.javaScriptKey;
	    } else if (!Parse.masterKey) {
	      throw new Error('Cannot use the Master Key, it has not been provided.');
	    } else {
	      dataObject._MasterKey = Parse.masterKey;
	    }
	
	    dataObject._ClientVersion = Parse.VERSION;
	
	    return Parse._getInstallationId().then(function(iid) {
	      dataObject._InstallationId = iid;
	
	      if (sessionToken) {
	        return Parse.Promise.as({ _sessionToken: sessionToken });
	      }
	      if (!Parse.User._canUseCurrentUser()) {
	        return Parse.Promise.as(null);
	      }
	
	      return Parse.User._currentAsync();
	    }).then(function(currentUser) {
	      if (currentUser && currentUser._sessionToken) {
	        dataObject._SessionToken = currentUser._sessionToken;
	      }
	
	      if (Parse.User._isRevocableSessionEnabled) {
	        dataObject._RevocableSession = '1';
	      }
	
	      var data = JSON.stringify(dataObject);
	
	      return Parse._ajax(method, url, data);
	    }).then(null, function(response) {
	      // Transform the error into an instance of Parse.Error by trying to parse
	      // the error string as JSON.
	      var error;
	      if (response && response.responseText) {
	        try {
	          var errorJSON = JSON.parse(response.responseText);
	          error = new Parse.Error(errorJSON.code, errorJSON.error);
	        } catch (e) {
	          // If we fail to parse the error text, that's okay.
	          error = new Parse.Error(
	              Parse.Error.INVALID_JSON,
	              "Received an error with invalid JSON from Parse: " +
	                  response.responseText);
	        }
	      } else {
	        error = new Parse.Error(
	            Parse.Error.CONNECTION_FAILED,
	            "XMLHttpRequest failed: " + JSON.stringify(response));
	      }
	      // By explicitly returning a rejected Promise, this will work with
	      // either jQuery or Promises/A semantics.
	      return Parse.Promise.error(error);
	    });
	  };
	
	  // Helper function to get a value from a Backbone object as a property
	  // or as a function.
	  Parse._getValue = function(object, prop) {
	    if (!(object && object[prop])) {
	      return null;
	    }
	    return Parse._.isFunction(object[prop]) ? object[prop]() : object[prop];
	  };
	
	  /**
	   * Converts a value in a Parse Object into the appropriate representation.
	   * This is the JS equivalent of Java's Parse.maybeReferenceAndEncode(Object)
	   * if seenObjects is falsey. Otherwise any Parse.Objects not in
	   * seenObjects will be fully embedded rather than encoded
	   * as a pointer.  This array will be used to prevent going into an infinite
	   * loop because we have circular references.  If seenObjects
	   * is set, then none of the Parse Objects that are serialized can be dirty.
	   */
	  Parse._encode = function(value, seenObjects, disallowObjects) {
	    var _ = Parse._;
	    if (value instanceof Parse.Object) {
	      if (disallowObjects) {
	        throw "Parse.Objects not allowed here";
	      }
	      if (!seenObjects || _.include(seenObjects, value) || !value._hasData) {
	        return value._toPointer();
	      }
	      if (!value.dirty()) {
	        seenObjects = seenObjects.concat(value);
	        return Parse._encode(value._toFullJSON(seenObjects),
	                             seenObjects,
	                             disallowObjects);
	      }
	      throw "Tried to save an object with a pointer to a new, unsaved object.";
	    }
	    if (value instanceof Parse.ACL) {
	      return value.toJSON();
	    }
	    if (_.isDate(value)) {
	      if (isNaN(value)) {
	        throw new Error('Cannot encode invalid Date');
	      }
	      return { "__type": "Date", "iso": value.toJSON() };
	    }
	    if (value instanceof Parse.GeoPoint) {
	      return value.toJSON();
	    }
	    if (_.isArray(value)) {
	      return _.map(value, function(x) {
	        return Parse._encode(x, seenObjects, disallowObjects);
	      });
	    }
	    if (_.isRegExp(value)) {
	      return value.source;
	    }
	    if (value instanceof Parse.Relation) {
	      return value.toJSON();
	    }
	    if (value instanceof Parse.Op) {
	      return value.toJSON();
	    }
	    if (value instanceof Parse.File) {
	      if (!value.url()) {
	        throw "Tried to save an object containing an unsaved file.";
	      }
	      return {
	        __type: "File",
	        name: value.name(),
	        url: value.url()
	      };
	    }
	    if (_.isObject(value)) {
	      var output = {};
	      Parse._objectEach(value, function(v, k) {
	        output[k] = Parse._encode(v, seenObjects, disallowObjects);
	      });
	      return output;
	    }
	    return value;
	  };
	
	  /**
	   * The inverse function of Parse._encode.
	   * TODO: make decode not mutate value.
	   */
	  Parse._decode = function(key, value) {
	    var _ = Parse._;
	    if (!_.isObject(value)) {
	      return value;
	    }
	    if (_.isArray(value)) {
	      Parse._arrayEach(value, function(v, k) {
	        value[k] = Parse._decode(k, v);
	      });
	      return value;
	    }
	    if (value instanceof Parse.Object) {
	      return value;
	    }
	    if (value instanceof Parse.File) {
	      return value;
	    }
	    if (value instanceof Parse.Op) {
	      return value;
	    }
	    if (value.__op) {
	      return Parse.Op._decode(value);
	    }
	    if (value.__type === "Pointer" && value.className) {
	      var pointer = Parse.Object._create(value.className);
	      pointer._finishFetch({ objectId: value.objectId }, false);
	      return pointer;
	    }
	    if (value.__type === "Object" && value.className) {
	      // It's an Object included in a query result.
	      var className = value.className;
	      delete value.__type;
	      delete value.className;
	      var object = Parse.Object._create(className);
	      object._finishFetch(value, true);
	      return object;
	    }
	    if (value.__type === "Date") {
	      return Parse._parseDate(value.iso);
	    }
	    if (value.__type === "GeoPoint") {
	      return new Parse.GeoPoint({
	        latitude: value.latitude,
	        longitude: value.longitude
	      });
	    }
	    if (key === "ACL") {
	      if (value instanceof Parse.ACL) {
	        return value;
	      }
	      return new Parse.ACL(value);
	    }
	    if (value.__type === "Relation") {
	      var relation = new Parse.Relation(null, key);
	      relation.targetClassName = value.className;
	      return relation;
	    }
	    if (value.__type === "File") {
	      var file = new Parse.File(value.name);
	      file._url = value.url;
	      return file;
	    }
	    Parse._objectEach(value, function(v, k) {
	      value[k] = Parse._decode(k, v);
	    });
	    return value;
	  };
	
	  Parse._arrayEach = Parse._.each;
	
	  /**
	   * Does a deep traversal of every item in object, calling func on every one.
	   * @param {Object} object The object or array to traverse deeply.
	   * @param {Function} func The function to call for every item. It will
	   *     be passed the item as an argument. If it returns a truthy value, that
	   *     value will replace the item in its parent container.
	   * @returns {} the result of calling func on the top-level object itself.
	   */
	  Parse._traverse = function(object, func, seen) {
	    if (object instanceof Parse.Object) {
	      seen = seen || [];
	      if (Parse._.indexOf(seen, object) >= 0) {
	        // We've already visited this object in this call.
	        return;
	      }
	      seen.push(object);
	      Parse._traverse(object.attributes, func, seen);
	      return func(object);
	    }
	    if (object instanceof Parse.Relation || object instanceof Parse.File) {
	      // Nothing needs to be done, but we don't want to recurse into the
	      // object's parent infinitely, so we catch this case.
	      return func(object);
	    }
	    if (Parse._.isArray(object)) {
	      Parse._.each(object, function(child, index) {
	        var newChild = Parse._traverse(child, func, seen);
	        if (newChild) {
	          object[index] = newChild;
	        }
	      });
	      return func(object);
	    }
	    if (Parse._.isObject(object)) {
	      Parse._each(object, function(child, key) {
	        var newChild = Parse._traverse(child, func, seen);
	        if (newChild) {
	          object[key] = newChild;
	        }
	      });
	      return func(object);
	    }
	    return func(object);
	  };
	
	  /**
	   * This is like _.each, except:
	   * * it doesn't work for so-called array-like objects,
	   * * it does work for dictionaries with a "length" attribute.
	   */
	  Parse._objectEach = Parse._each = function(obj, callback) {
	    var _ = Parse._;
	    if (_.isObject(obj)) {
	      _.each(_.keys(obj), function(key) {
	        callback(obj[key], key);
	      });
	    } else {
	      _.each(obj, callback);
	    }
	  };
	
	  // Helper function to check null or undefined.
	  Parse._isNullOrUndefined = function(x) {
	    return Parse._.isNull(x) || Parse._.isUndefined(x);
	  };
	}(this));
	
	/* global require: false, localStorage: false */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  
	  var Storage = {
	    async: false,
	  };
	
	  var hasLocalStorage = (typeof localStorage !== 'undefined');
	  if (hasLocalStorage) {
	    try {
	      localStorage.setItem('supported', true);
	      localStorage.removeItem('supported');
	    } catch(e) {
	      hasLocalStorage = false;
	    }
	  }
	  if (hasLocalStorage) {
	    Storage.getItem = function(path) {
	      return localStorage.getItem(path);
	    };
	
	    Storage.setItem = function(path, value) {
	      return localStorage.setItem(path, value);
	    };
	
	    Storage.removeItem = function(path) {
	      return localStorage.removeItem(path);
	    };
	
	    Storage.clear = function() {
	      return localStorage.clear();
	    };
	  } else if (true) {
	    var AsyncStorage;
	    try {
	      AsyncStorage = eval("require('AsyncStorage')"); // jshint ignore:line
	
	      Storage.async = true;
	
	      Storage.getItemAsync = function(path) {
	        var p = new Parse.Promise();
	        AsyncStorage.getItem(path, function(err, value) {
	          if (err) {
	            p.reject(err);
	          } else {
	            p.resolve(value);
	          }
	        });
	        return p;
	      };
	
	      Storage.setItemAsync = function(path, value) {
	        var p = new Parse.Promise();
	        AsyncStorage.setItem(path, value, function(err) {
	          if (err) {
	            p.reject(err);
	          } else {
	            p.resolve(value);
	          }
	        });
	        return p;
	      };
	
	      Storage.removeItemAsync = function(path) {
	        var p = new Parse.Promise();
	        AsyncStorage.removeItem(path, function(err) {
	          if (err) {
	            p.reject(err);
	          } else {
	            p.resolve();
	          }
	        });
	        return p;
	      };
	
	      Storage.clear = function() {
	        AsyncStorage.clear();
	      };
	    } catch (e) { }
	  }
	  if (!Storage.async && !Storage.getItem) {
	    var memMap = Storage.inMemoryMap = {};
	    Storage.getItem = function(path) {
	      if (memMap.hasOwnProperty(path)) {
	        return memMap[path];
	      }
	      return null;
	    };
	
	    Storage.setItem = function(path, value) {
	      memMap[path] = String(value);
	    };
	
	    Storage.removeItem = function(path) {
	      delete memMap[path];
	    };
	
	    Storage.clear = function() {
	      for (var key in memMap) {
	        if (memMap.hasOwnProperty(key)) {
	          delete memMap[key];
	        }
	      }
	    };
	  }
	
	  // We can use synchronous methods from async scenarios, but not vice-versa
	  if (!Storage.async) {
	    Storage.getItemAsync = function(path) {
	      return Parse.Promise.as(
	        Storage.getItem(path)
	      );
	    };
	
	    Storage.setItemAsync = function(path, value) {
	      Storage.setItem(path, value);
	      return Parse.Promise.as(value);
	    };
	
	    Storage.removeItemAsync = function(path) {
	      return Parse.Promise.as(
	        Storage.removeItem(path)
	      );
	    };
	  }
	
	  Parse.Storage = Storage;
	
	})(this);
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * @namespace Provides an interface to Parse's logging and analytics backend.
	   */
	  Parse.Analytics = Parse.Analytics || {};
	
	  _.extend(Parse.Analytics, /** @lends Parse.Analytics */ {
	    /**
	     * Tracks the occurrence of a custom event with additional dimensions.
	     * Parse will store a data point at the time of invocation with the given
	     * event name.
	     *
	     * Dimensions will allow segmentation of the occurrences of this custom
	     * event. Keys and values should be {@code String}s, and will throw
	     * otherwise.
	     *
	     * To track a user signup along with additional metadata, consider the
	     * following:
	     * <pre>
	     * var dimensions = {
	     *  gender: 'm',
	     *  source: 'web',
	     *  dayType: 'weekend'
	     * };
	     * Parse.Analytics.track('signup', dimensions);
	     * </pre>
	     *
	     * There is a default limit of 8 dimensions per event tracked.
	     *
	     * @param {String} name The name of the custom event to report to Parse as
	     * having happened.
	     * @param {Object} dimensions The dictionary of information by which to
	     * segment this event.
	     * @param {Object} options A Backbone-style callback object.
	     * @return {Parse.Promise} A promise that is resolved when the round-trip
	     * to the server completes.
	     */
	    track: function(name, dimensions, options) {
	      name = name || '';
	      name = name.replace(/^\s*/, '');
	      name = name.replace(/\s*$/, '');
	      if (name.length === 0) {
	        throw 'A name for the custom event must be provided';
	      }
	
	      _.each(dimensions, function(val, key) {
	        if (!_.isString(key) || !_.isString(val)) {
	          throw 'track() dimensions expects keys and values of type "string".';
	        }
	      });
	
	      options = options || {};
	      return Parse._request({
	        route: 'events',
	        className: name,
	        method: 'POST',
	        data: { dimensions: dimensions }
	      })._thenRunCallbacks(options);
	    }
	  });
	}(this));
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * @class Parse.Config is a local representation of configuration data that
	   * can be set from the Parse dashboard.
	   */
	  Parse.Config = function() {
	    this.attributes = {};
	    this._escapedAttributes = {};
	  };
	
	  /**
	   * Retrieves the most recently-fetched configuration object, either from
	   * memory or from local storage if necessary.
	   *
	   * @return {Parse.Config} The most recently-fetched Parse.Config if it
	   *     exists, else an empty Parse.Config.
	   */
	  Parse.Config.current = function() {
	    if (Parse.Config._currentConfig) {
	      return Parse.Config._currentConfig;
	    }
	
	    var config = new Parse.Config();
	
	    if (Parse.Storage.async) {
	      return config;
	    }
	
	    var configData = Parse.Storage.getItem(Parse._getParsePath(
	          Parse.Config._CURRENT_CONFIG_KEY));
	
	    if (configData) {  
	      config._finishFetch(JSON.parse(configData));
	      Parse.Config._currentConfig = config;
	    }
	    return config;
	  };
	
	  /**
	   * Gets a new configuration object from the server.
	   * @param {Object} options A Backbone-style options object.
	   * Valid options are:<ul>
	   *   <li>success: Function to call when the get completes successfully.
	   *   <li>error: Function to call when the get fails.
	   * </ul>
	   * @return {Parse.Promise} A promise that is resolved with a newly-created
	   *     configuration object when the get completes.
	   */
	  Parse.Config.get = function(options) {
	    options = options || {};
	
	    var request = Parse._request({
	      route: "config",
	      method: "GET",
	    });
	
	    return request.then(function(response) {
	      if (!response || !response.params) {
	        var errorObject = new Parse.Error(
	          Parse.Error.INVALID_JSON,
	          "Config JSON response invalid.");
	        return Parse.Promise.error(errorObject);
	      }
	
	      var config = new Parse.Config();
	      config._finishFetch(response);
	      Parse.Config._currentConfig = config;
	      return config;
	    })._thenRunCallbacks(options);
	  };
	
	  Parse.Config.prototype = {
	
	    /**
	     * Gets the HTML-escaped value of an attribute.
	     */
	    escape: function(attr) {
	      var html = this._escapedAttributes[attr];
	      if (html) {
	        return html;
	      }
	      var val = this.attributes[attr];
	      var escaped;
	      if (Parse._isNullOrUndefined(val)) {
	        escaped = '';
	      } else {
	        escaped = _.escape(val.toString());
	      }
	      this._escapedAttributes[attr] = escaped;
	      return escaped;
	    },
	
	    /**
	     * Gets the value of an attribute.
	     * @param {String} attr The name of an attribute.
	     */
	    get: function(attr) {
	      return this.attributes[attr];
	    },
	
	    _finishFetch: function(serverData) {
	      this.attributes = Parse._decode(null, _.clone(serverData.params));
	      if (!Parse.Storage.async) {
	        // We only provide local caching of config with synchronous Storage
	        Parse.Storage.setItem(
	            Parse._getParsePath(Parse.Config._CURRENT_CONFIG_KEY),
	            JSON.stringify(serverData));
	      }
	    }
	  };
	
	  Parse.Config._currentConfig = null;
	
	  Parse.Config._CURRENT_CONFIG_KEY = "currentConfig";
	
	}(this));
	
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Constructs a new Parse.Error object with the given code and message.
	   * @param {Number} code An error code constant from <code>Parse.Error</code>.
	   * @param {String} message A detailed description of the error.
	   * @class
	   *
	   * <p>Class used for all objects passed to error callbacks.</p>
	   */
	  Parse.Error = function(code, message) {
	    this.code = code;
	    this.message = message;
	  };
	
	  _.extend(Parse.Error, /** @lends Parse.Error */ {
	    /**
	     * Error code indicating some error other than those enumerated here.
	     * @constant
	     */
	    OTHER_CAUSE: -1,
	
	    /**
	     * Error code indicating that something has gone wrong with the server.
	     * If you get this error code, it is Parse's fault. Contact us at 
	     * https://parse.com/help
	     * @constant
	     */
	    INTERNAL_SERVER_ERROR: 1,
	
	    /**
	     * Error code indicating the connection to the Parse servers failed.
	     * @constant
	     */
	    CONNECTION_FAILED: 100,
	
	    /**
	     * Error code indicating the specified object doesn't exist.
	     * @constant
	     */
	    OBJECT_NOT_FOUND: 101,
	
	    /**
	     * Error code indicating you tried to query with a datatype that doesn't
	     * support it, like exact matching an array or object.
	     * @constant
	     */
	    INVALID_QUERY: 102,
	
	    /**
	     * Error code indicating a missing or invalid classname. Classnames are
	     * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
	     * only valid characters.
	     * @constant
	     */
	    INVALID_CLASS_NAME: 103,
	
	    /**
	     * Error code indicating an unspecified object id.
	     * @constant
	     */
	    MISSING_OBJECT_ID: 104,
	
	    /**
	     * Error code indicating an invalid key name. Keys are case-sensitive. They
	     * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
	     * @constant
	     */
	    INVALID_KEY_NAME: 105,
	
	    /**
	     * Error code indicating a malformed pointer. You should not see this unless
	     * you have been mucking about changing internal Parse code.
	     * @constant
	     */
	    INVALID_POINTER: 106,
	
	    /**
	     * Error code indicating that badly formed JSON was received upstream. This
	     * either indicates you have done something unusual with modifying how
	     * things encode to JSON, or the network is failing badly.
	     * @constant
	     */
	    INVALID_JSON: 107,
	
	    /**
	     * Error code indicating that the feature you tried to access is only
	     * available internally for testing purposes.
	     * @constant
	     */
	    COMMAND_UNAVAILABLE: 108,
	
	    /**
	     * You must call Parse.initialize before using the Parse library.
	     * @constant
	     */
	    NOT_INITIALIZED: 109,
	
	    /**
	     * Error code indicating that a field was set to an inconsistent type.
	     * @constant
	     */
	    INCORRECT_TYPE: 111,
	
	    /**
	     * Error code indicating an invalid channel name. A channel name is either
	     * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
	     * characters and starts with a letter.
	     * @constant
	     */
	    INVALID_CHANNEL_NAME: 112,
	
	    /**
	     * Error code indicating that push is misconfigured.
	     * @constant
	     */
	    PUSH_MISCONFIGURED: 115,
	
	    /**
	     * Error code indicating that the object is too large.
	     * @constant
	     */
	    OBJECT_TOO_LARGE: 116,
	
	    /**
	     * Error code indicating that the operation isn't allowed for clients.
	     * @constant
	     */
	    OPERATION_FORBIDDEN: 119,
	
	    /**
	     * Error code indicating the result was not found in the cache.
	     * @constant
	     */
	    CACHE_MISS: 120,
	
	    /**
	     * Error code indicating that an invalid key was used in a nested
	     * JSONObject.
	     * @constant
	     */
	    INVALID_NESTED_KEY: 121,
	
	    /**
	     * Error code indicating that an invalid filename was used for ParseFile.
	     * A valid file name contains only a-zA-Z0-9_. characters and is between 1
	     * and 128 characters.
	     * @constant
	     */
	    INVALID_FILE_NAME: 122,
	
	    /**
	     * Error code indicating an invalid ACL was provided.
	     * @constant
	     */
	    INVALID_ACL: 123,
	
	    /**
	     * Error code indicating that the request timed out on the server. Typically
	     * this indicates that the request is too expensive to run.
	     * @constant
	     */
	    TIMEOUT: 124,
	
	    /**
	     * Error code indicating that the email address was invalid.
	     * @constant
	     */
	    INVALID_EMAIL_ADDRESS: 125,
	
	    /**
	     * Error code indicating a missing content type.
	     * @constant
	     */
	    MISSING_CONTENT_TYPE: 126,
	
	    /**
	     * Error code indicating a missing content length.
	     * @constant
	     */
	    MISSING_CONTENT_LENGTH: 127,
	
	    /**
	     * Error code indicating an invalid content length.
	     * @constant
	     */
	    INVALID_CONTENT_LENGTH: 128,
	
	    /**
	     * Error code indicating a file that was too large.
	     * @constant
	     */
	    FILE_TOO_LARGE: 129,
	
	    /**
	     * Error code indicating an error saving a file.
	     * @constant
	     */
	    FILE_SAVE_ERROR: 130,
	
	    /**
	     * Error code indicating that a unique field was given a value that is
	     * already taken.
	     * @constant
	     */
	    DUPLICATE_VALUE: 137,
	
	    /**
	     * Error code indicating that a role's name is invalid.
	     * @constant
	     */
	    INVALID_ROLE_NAME: 139,
	
	    /**
	     * Error code indicating that an application quota was exceeded.  Upgrade to
	     * resolve.
	     * @constant
	     */
	    EXCEEDED_QUOTA: 140,
	
	    /**
	     * Error code indicating that a Cloud Code script failed.
	     * @constant
	     */
	    SCRIPT_FAILED: 141,
	
	    /**
	     * Error code indicating that a Cloud Code validation failed.
	     * @constant
	     */
	    VALIDATION_ERROR: 142,
	
	    /**
	     * Error code indicating that invalid image data was provided.
	     * @constant
	     */
	    INVALID_IMAGE_DATA: 150,
	
	    /**
	     * Error code indicating an unsaved file.
	     * @constant
	     */
	    UNSAVED_FILE_ERROR: 151,
	
	    /**
	     * Error code indicating an invalid push time.
	     */
	    INVALID_PUSH_TIME_ERROR: 152,
	
	    /**
	     * Error code indicating an error deleting a file.
	     * @constant
	     */
	    FILE_DELETE_ERROR: 153,
	
	    /**
	     * Error code indicating that the application has exceeded its request
	     * limit.
	     * @constant
	     */
	    REQUEST_LIMIT_EXCEEDED: 155,
	
	    /**
	     * Error code indicating an invalid event name.
	     */
	    INVALID_EVENT_NAME: 160,
	
	    /**
	     * Error code indicating that the username is missing or empty.
	     * @constant
	     */
	    USERNAME_MISSING: 200,
	
	    /**
	     * Error code indicating that the password is missing or empty.
	     * @constant
	     */
	    PASSWORD_MISSING: 201,
	
	    /**
	     * Error code indicating that the username has already been taken.
	     * @constant
	     */
	    USERNAME_TAKEN: 202,
	
	    /**
	     * Error code indicating that the email has already been taken.
	     * @constant
	     */
	    EMAIL_TAKEN: 203,
	
	    /**
	     * Error code indicating that the email is missing, but must be specified.
	     * @constant
	     */
	    EMAIL_MISSING: 204,
	
	    /**
	     * Error code indicating that a user with the specified email was not found.
	     * @constant
	     */
	    EMAIL_NOT_FOUND: 205,
	
	    /**
	     * Error code indicating that a user object without a valid session could
	     * not be altered.
	     * @constant
	     */
	    SESSION_MISSING: 206,
	
	    /**
	     * Error code indicating that a user can only be created through signup.
	     * @constant
	     */
	    MUST_CREATE_USER_THROUGH_SIGNUP: 207,
	
	    /**
	     * Error code indicating that an an account being linked is already linked
	     * to another user.
	     * @constant
	     */
	    ACCOUNT_ALREADY_LINKED: 208,
	
	    /**
	     * Error code indicating that the current session token is invalid.
	     * @constant
	     */
	    INVALID_SESSION_TOKEN: 209,
	
	    /**
	     * Error code indicating that a user cannot be linked to an account because
	     * that account's id could not be found.
	     * @constant
	     */
	    LINKED_ID_MISSING: 250,
	
	    /**
	     * Error code indicating that a user with a linked (e.g. Facebook) account
	     * has an invalid session.
	     * @constant
	     */
	    INVALID_LINKED_SESSION: 251,
	
	    /**
	     * Error code indicating that a service being linked (e.g. Facebook or
	     * Twitter) is unsupported.
	     * @constant
	     */
	    UNSUPPORTED_SERVICE: 252,
	
	    /**
	     * Error code indicating that there were multiple errors. Aggregate errors
	     * have an "errors" property, which is an array of error objects with more
	     * detail about each error that occurred.
	     * @constant
	     */
	    AGGREGATE_ERROR: 600,
	
	    /**
	     * Error code indicating the client was unable to read an input file.
	     * @constant
	     */
	    FILE_READ_ERROR: 601,
	
	    /**
	     * Error code indicating a real error code is unavailable because
	     * we had to use an XDomainRequest object to allow CORS requests in
	     * Internet Explorer, which strips the body from HTTP responses that have
	     * a non-2XX status code.
	     * @constant
	     */
	    X_DOMAIN_REQUEST: 602
	  });
	
	}(this));
	
	/*global _: false */
	(function() {
	  var root = this;
	  var Parse = (root.Parse || (root.Parse = {}));
	  var eventSplitter = /\s+/;
	  var slice = Array.prototype.slice;
	
	  /**
	   * @class
	   *
	   * <p>Parse.Events is a fork of Backbone's Events module, provided for your
	   * convenience.</p>
	   *
	   * <p>A module that can be mixed in to any object in order to provide
	   * it with custom events. You may bind callback functions to an event
	   * with `on`, or remove these functions with `off`.
	   * Triggering an event fires all callbacks in the order that `on` was
	   * called.
	   *
	   * <pre>
	   *     var object = {};
	   *     _.extend(object, Parse.Events);
	   *     object.on('expand', function(){ alert('expanded'); });
	   *     object.trigger('expand');</pre></p>
	   *
	   * <p>For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
	   * documentation</a>.</p>
	   */
	  Parse.Events = {
	    /**
	     * Bind one or more space separated events, `events`, to a `callback`
	     * function. Passing `"all"` will bind the callback to all events fired.
	     */
	    on: function(events, callback, context) {
	
	      var calls, event, node, tail, list;
	      if (!callback) {
	        return this;
	      }
	      events = events.split(eventSplitter);
	      calls = this._callbacks || (this._callbacks = {});
	
	      // Create an immutable callback list, allowing traversal during
	      // modification.  The tail is an empty object that will always be used
	      // as the next node.
	      event = events.shift();
	      while (event) {
	        list = calls[event];
	        node = list ? list.tail : {};
	        node.next = tail = {};
	        node.context = context;
	        node.callback = callback;
	        calls[event] = {tail: tail, next: list ? list.next : node};
	        event = events.shift();
	      }
	
	      return this;
	    },
	
	    /**
	     * Remove one or many callbacks. If `context` is null, removes all callbacks
	     * with that function. If `callback` is null, removes all callbacks for the
	     * event. If `events` is null, removes all bound callbacks for all events.
	     */
	    off: function(events, callback, context) {
	      var event, calls, node, tail, cb, ctx;
	
	      // No events, or removing *all* events.
	      if (!(calls = this._callbacks)) {
	        return;
	      }
	      if (!(events || callback || context)) {
	        delete this._callbacks;
	        return this;
	      }
	
	      // Loop through the listed events and contexts, splicing them out of the
	      // linked list of callbacks if appropriate.
	      events = events ? events.split(eventSplitter) : Object.keys(calls);
	      event = events.shift();
	      while (event) {
	        node = calls[event];
	        delete calls[event];
	        if (!node || !(callback || context)) {
	          event = events.shift();
	          continue;
	        }
	        // Create a new list, omitting the indicated callbacks.
	        tail = node.tail;
	        node = node.next;
	        while (node !== tail) {
	          cb = node.callback;
	          ctx = node.context;
	          if ((callback && cb !== callback) || (context && ctx !== context)) {
	            this.on(event, cb, ctx);
	          }
	          node = node.next;
	        }
	        event = events.shift();
	      }
	
	      return this;
	    },
	
	    /**
	     * Trigger one or many events, firing all bound callbacks. Callbacks are
	     * passed the same arguments as `trigger` is, apart from the event name
	     * (unless you're listening on `"all"`, which will cause your callback to
	     * receive the true name of the event as the first argument).
	     */
	    trigger: function(events) {
	      var event, node, calls, tail, args, all, rest;
	      if (!(calls = this._callbacks)) {
	        return this;
	      }
	      all = calls.all;
	      events = events.split(eventSplitter);
	      rest = slice.call(arguments, 1);
	
	      // For each event, walk through the linked list of callbacks twice,
	      // first to trigger the event, then to trigger any `"all"` callbacks.
	      event = events.shift();
	      while (event) {
	        node = calls[event];
	        if (node) {
	          tail = node.tail;
	          while ((node = node.next) !== tail) {
	            node.callback.apply(node.context || this, rest);
	          }
	        }
	        node = all;
	        if (node) {
	          tail = node.tail;
	          args = [event].concat(rest);
	          while ((node = node.next) !== tail) {
	            node.callback.apply(node.context || this, args);
	          }
	        }
	        event = events.shift();
	      }
	
	      return this;
	    }
	  };  
	
	  /**
	   * @function
	   */
	  Parse.Events.bind = Parse.Events.on;
	
	  /**
	   * @function
	   */
	  Parse.Events.unbind = Parse.Events.off;
	}.call(this));
	
	
	/*global navigator: false */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Creates a new GeoPoint with any of the following forms:<br>
	   *   <pre>
	   *   new GeoPoint(otherGeoPoint)
	   *   new GeoPoint(30, 30)
	   *   new GeoPoint([30, 30])
	   *   new GeoPoint({latitude: 30, longitude: 30})
	   *   new GeoPoint()  // defaults to (0, 0)
	   *   </pre>
	   * @class
	   *
	   * <p>Represents a latitude / longitude point that may be associated
	   * with a key in a ParseObject or used as a reference point for geo queries.
	   * This allows proximity-based queries on the key.</p>
	   *
	   * <p>Only one key in a class may contain a GeoPoint.</p>
	   *
	   * <p>Example:<pre>
	   *   var point = new Parse.GeoPoint(30.0, -20.0);
	   *   var object = new Parse.Object("PlaceObject");
	   *   object.set("location", point);
	   *   object.save();</pre></p>
	   */
	  Parse.GeoPoint = function(arg1, arg2) {
	    if (_.isArray(arg1)) {
	      Parse.GeoPoint._validate(arg1[0], arg1[1]);
	      this.latitude = arg1[0];
	      this.longitude = arg1[1];
	    } else if (_.isObject(arg1)) {
	      Parse.GeoPoint._validate(arg1.latitude, arg1.longitude);
	      this.latitude = arg1.latitude;
	      this.longitude = arg1.longitude;
	    } else if (_.isNumber(arg1) && _.isNumber(arg2)) {
	      Parse.GeoPoint._validate(arg1, arg2);
	      this.latitude = arg1;
	      this.longitude = arg2;
	    } else {
	      this.latitude = 0;
	      this.longitude = 0;
	    }
	
	    // Add properties so that anyone using Webkit or Mozilla will get an error
	    // if they try to set values that are out of bounds.
	    var self = this;
	    if (this.__defineGetter__ && this.__defineSetter__) {
	      // Use _latitude and _longitude to actually store the values, and add
	      // getters and setters for latitude and longitude.
	      this._latitude = this.latitude;
	      this._longitude = this.longitude;
	      this.__defineGetter__("latitude", function() {
	        return self._latitude;
	      });
	      this.__defineGetter__("longitude", function() {
	        return self._longitude;
	      });
	      this.__defineSetter__("latitude", function(val) {
	        Parse.GeoPoint._validate(val, self.longitude);
	        self._latitude = val;
	      });
	      this.__defineSetter__("longitude", function(val) {
	        Parse.GeoPoint._validate(self.latitude, val);
	        self._longitude = val;
	      });
	    }
	  };
	
	  /**
	   * @lends Parse.GeoPoint.prototype
	   * @property {float} latitude North-south portion of the coordinate, in range
	   *   [-90, 90].  Throws an exception if set out of range in a modern browser.
	   * @property {float} longitude East-west portion of the coordinate, in range
	   *   [-180, 180].  Throws if set out of range in a modern browser.
	   */
	
	  /**
	   * Throws an exception if the given lat-long is out of bounds.
	   */
	  Parse.GeoPoint._validate = function(latitude, longitude) {
	    if (latitude < -90.0) {
	      throw "Parse.GeoPoint latitude " + latitude + " < -90.0.";
	    }
	    if (latitude > 90.0) {
	      throw "Parse.GeoPoint latitude " + latitude + " > 90.0.";
	    }
	    if (longitude < -180.0) {
	      throw "Parse.GeoPoint longitude " + longitude + " < -180.0.";
	    }
	    if (longitude > 180.0) {
	      throw "Parse.GeoPoint longitude " + longitude + " > 180.0.";
	    }
	  };
	
	  /**
	   * Creates a GeoPoint with the user's current location, if available.
	   * Calls options.success with a new GeoPoint instance or calls options.error.
	   * @param {Object} options An object with success and error callbacks.
	   */
	  Parse.GeoPoint.current = function(options) {
	    var promise = new Parse.Promise();
	    navigator.geolocation.getCurrentPosition(function(location) {
	      promise.resolve(new Parse.GeoPoint({
	        latitude: location.coords.latitude,
	        longitude: location.coords.longitude
	      }));
	
	    }, function(error) {
	      promise.reject(error);
	    });
	
	    return promise._thenRunCallbacks(options);
	  };
	
	  Parse.GeoPoint.prototype = {
	    /**
	     * Returns a JSON representation of the GeoPoint, suitable for Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      Parse.GeoPoint._validate(this.latitude, this.longitude);
	      return {
	        "__type": "GeoPoint",
	        latitude: this.latitude,
	        longitude: this.longitude
	      };
	    },
	
	    /**
	     * Returns the distance from this GeoPoint to another in radians.
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	    radiansTo: function(point) {
	      var d2r = Math.PI / 180.0;
	      var lat1rad = this.latitude * d2r;
	      var long1rad = this.longitude * d2r;
	      var lat2rad = point.latitude * d2r;
	      var long2rad = point.longitude * d2r;
	      var deltaLat = lat1rad - lat2rad;
	      var deltaLong = long1rad - long2rad;
	      var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
	      var sinDeltaLongDiv2 = Math.sin(deltaLong / 2);
	      // Square of half the straight line chord distance between both points.
	      var a = ((sinDeltaLatDiv2 * sinDeltaLatDiv2) +
	               (Math.cos(lat1rad) * Math.cos(lat2rad) *
	                sinDeltaLongDiv2 * sinDeltaLongDiv2));
	      a = Math.min(1.0, a);
	      return 2 * Math.asin(Math.sqrt(a));
	    },
	
	    /**
	     * Returns the distance from this GeoPoint to another in kilometers.
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	    kilometersTo: function(point) {
	      return this.radiansTo(point) * 6371.0;
	    },
	
	    /**
	     * Returns the distance from this GeoPoint to another in miles.
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	    milesTo: function(point) {
	      return this.radiansTo(point) * 3958.8;
	    }
	  };
	}(this));
	
	/*global navigator: false */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  var PUBLIC_KEY = "*";
	
	  /**
	   * Creates a new ACL.
	   * If no argument is given, the ACL has no permissions for anyone.
	   * If the argument is a Parse.User, the ACL will have read and write
	   *   permission for only that user.
	   * If the argument is any other JSON object, that object will be interpretted
	   *   as a serialized ACL created with toJSON().
	   * @see Parse.Object#setACL
	   * @class
	   *
	   * <p>An ACL, or Access Control List can be added to any
	   * <code>Parse.Object</code> to restrict access to only a subset of users
	   * of your application.</p>
	   */
	  Parse.ACL = function(arg1) {
	    var self = this;
	    self.permissionsById = {};
	    if (_.isObject(arg1)) {
	      if (arg1 instanceof Parse.User) {
	        self.setReadAccess(arg1, true);
	        self.setWriteAccess(arg1, true);
	      } else {
	        if (_.isFunction(arg1)) {
	          throw "Parse.ACL() called with a function.  Did you forget ()?";
	        }
	        Parse._objectEach(arg1, function(accessList, userId) {
	          if (!_.isString(userId)) {
	            throw "Tried to create an ACL with an invalid userId.";
	          }
	          self.permissionsById[userId] = {};
	          Parse._objectEach(accessList, function(allowed, permission) {
	            if (permission !== "read" && permission !== "write") {
	              throw "Tried to create an ACL with an invalid permission type.";
	            }
	            if (!_.isBoolean(allowed)) {
	              throw "Tried to create an ACL with an invalid permission value.";
	            }
	            self.permissionsById[userId][permission] = allowed;
	          });
	        });
	      }
	    }
	  };
	
	  /**
	   * Returns a JSON-encoded version of the ACL.
	   * @return {Object}
	   */
	  Parse.ACL.prototype.toJSON = function() {
	    return _.clone(this.permissionsById);
	  };
	
	  Parse.ACL.prototype._setAccess = function(accessType, userId, allowed) {
	    if (userId instanceof Parse.User) {
	      userId = userId.id;
	    } else if (userId instanceof Parse.Role) {
	      userId = "role:" + userId.getName();
	    }
	    if (!_.isString(userId)) {
	      throw "userId must be a string.";
	    }
	    if (!_.isBoolean(allowed)) {
	      throw "allowed must be either true or false.";
	    }
	    var permissions = this.permissionsById[userId];
	    if (!permissions) {
	      if (!allowed) {
	        // The user already doesn't have this permission, so no action needed.
	        return;
	      } else {
	        permissions = {};
	        this.permissionsById[userId] = permissions;
	      }
	    }
	
	    if (allowed) {
	      this.permissionsById[userId][accessType] = true;
	    } else {
	      delete permissions[accessType];
	      if (_.isEmpty(permissions)) {
	        delete permissions[userId];
	      }
	    }
	  };
	
	  Parse.ACL.prototype._getAccess = function(accessType, userId) {
	    if (userId instanceof Parse.User) {
	      userId = userId.id;
	    } else if (userId instanceof Parse.Role) {
	      userId = "role:" + userId.getName();
	    }
	    var permissions = this.permissionsById[userId];
	    if (!permissions) {
	      return false;
	    }
	    return permissions[accessType] ? true : false;
	  };
	
	  /**
	   * Set whether the given user is allowed to read this object.
	   * @param userId An instance of Parse.User or its objectId.
	   * @param {Boolean} allowed Whether that user should have read access.
	   */
	  Parse.ACL.prototype.setReadAccess = function(userId, allowed) {
	    this._setAccess("read", userId, allowed);
	  };
	
	  /**
	   * Get whether the given user id is *explicitly* allowed to read this object.
	   * Even if this returns false, the user may still be able to access it if
	   * getPublicReadAccess returns true or a role that the user belongs to has
	   * write access.
	   * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	   * @return {Boolean}
	   */
	  Parse.ACL.prototype.getReadAccess = function(userId) {
	    return this._getAccess("read", userId);
	  };
	
	  /**
	   * Set whether the given user id is allowed to write this object.
	   * @param userId An instance of Parse.User or its objectId, or a Parse.Role..
	   * @param {Boolean} allowed Whether that user should have write access.
	   */
	  Parse.ACL.prototype.setWriteAccess = function(userId, allowed) {
	    this._setAccess("write", userId, allowed);
	  };
	
	  /**
	   * Get whether the given user id is *explicitly* allowed to write this object.
	   * Even if this returns false, the user may still be able to write it if
	   * getPublicWriteAccess returns true or a role that the user belongs to has
	   * write access.
	   * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	   * @return {Boolean}
	   */
	  Parse.ACL.prototype.getWriteAccess = function(userId) {
	    return this._getAccess("write", userId);
	  };
	
	  /**
	   * Set whether the public is allowed to read this object.
	   * @param {Boolean} allowed
	   */
	  Parse.ACL.prototype.setPublicReadAccess = function(allowed) {
	    this.setReadAccess(PUBLIC_KEY, allowed);
	  };
	
	  /**
	   * Get whether the public is allowed to read this object.
	   * @return {Boolean}
	   */
	  Parse.ACL.prototype.getPublicReadAccess = function() {
	    return this.getReadAccess(PUBLIC_KEY);
	  };
	
	  /**
	   * Set whether the public is allowed to write this object.
	   * @param {Boolean} allowed
	   */
	  Parse.ACL.prototype.setPublicWriteAccess = function(allowed) {
	    this.setWriteAccess(PUBLIC_KEY, allowed);
	  };
	
	  /**
	   * Get whether the public is allowed to write this object.
	   * @return {Boolean}
	   */
	  Parse.ACL.prototype.getPublicWriteAccess = function() {
	    return this.getWriteAccess(PUBLIC_KEY);
	  };
	  
	  /**
	   * Get whether users belonging to the given role are allowed
	   * to read this object. Even if this returns false, the role may
	   * still be able to write it if a parent role has read access.
	   * 
	   * @param role The name of the role, or a Parse.Role object.
	   * @return {Boolean} true if the role has read access. false otherwise.
	   * @throws {String} If role is neither a Parse.Role nor a String.
	   */
	  Parse.ACL.prototype.getRoleReadAccess = function(role) {
	    if (role instanceof Parse.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      return this.getReadAccess("role:" + role);
	    }
	    throw "role must be a Parse.Role or a String";
	  };
	  
	  /**
	   * Get whether users belonging to the given role are allowed
	   * to write this object. Even if this returns false, the role may
	   * still be able to write it if a parent role has write access.
	   * 
	   * @param role The name of the role, or a Parse.Role object.
	   * @return {Boolean} true if the role has write access. false otherwise.
	   * @throws {String} If role is neither a Parse.Role nor a String.
	   */
	  Parse.ACL.prototype.getRoleWriteAccess = function(role) {
	    if (role instanceof Parse.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      return this.getWriteAccess("role:" + role);
	    }
	    throw "role must be a Parse.Role or a String";
	  };
	  
	  /**
	   * Set whether users belonging to the given role are allowed
	   * to read this object.
	   * 
	   * @param role The name of the role, or a Parse.Role object.
	   * @param {Boolean} allowed Whether the given role can read this object.
	   * @throws {String} If role is neither a Parse.Role nor a String.
	   */
	  Parse.ACL.prototype.setRoleReadAccess = function(role, allowed) {
	    if (role instanceof Parse.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      this.setReadAccess("role:" + role, allowed);
	      return;
	    }
	    throw "role must be a Parse.Role or a String";
	  };
	  
	  /**
	   * Set whether users belonging to the given role are allowed
	   * to write this object.
	   * 
	   * @param role The name of the role, or a Parse.Role object.
	   * @param {Boolean} allowed Whether the given role can write this object.
	   * @throws {String} If role is neither a Parse.Role nor a String.
	   */
	  Parse.ACL.prototype.setRoleWriteAccess = function(role, allowed) {
	    if (role instanceof Parse.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      this.setWriteAccess("role:" + role, allowed);
	      return;
	    }
	    throw "role must be a Parse.Role or a String";
	  };
	
	}(this));
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * @class
	   * A Parse.Op is an atomic operation that can be applied to a field in a
	   * Parse.Object. For example, calling <code>object.set("foo", "bar")</code>
	   * is an example of a Parse.Op.Set. Calling <code>object.unset("foo")</code>
	   * is a Parse.Op.Unset. These operations are stored in a Parse.Object and
	   * sent to the server as part of <code>object.save()</code> operations.
	   * Instances of Parse.Op should be immutable.
	   *
	   * You should not create subclasses of Parse.Op or instantiate Parse.Op
	   * directly.
	   */
	  Parse.Op = function() {
	    this._initialize.apply(this, arguments);
	  };
	
	  Parse.Op.prototype = {
	    _initialize: function() {}
	  };
	
	  _.extend(Parse.Op, {
	    /**
	     * To create a new Op, call Parse.Op._extend();
	     */
	    _extend: Parse._extend,
	
	    // A map of __op string to decoder function.
	    _opDecoderMap: {},
	
	    /**
	     * Registers a function to convert a json object with an __op field into an
	     * instance of a subclass of Parse.Op.
	     */
	    _registerDecoder: function(opName, decoder) {
	      Parse.Op._opDecoderMap[opName] = decoder;
	    },
	
	    /**
	     * Converts a json object into an instance of a subclass of Parse.Op.
	     */
	    _decode: function(json) {
	      var decoder = Parse.Op._opDecoderMap[json.__op];
	      if (decoder) {
	        return decoder(json);
	      } else {
	        return undefined;
	      }
	    }
	  });
	
	  /*
	   * Add a handler for Batch ops.
	   */
	  Parse.Op._registerDecoder("Batch", function(json) {
	    var op = null;
	    Parse._arrayEach(json.ops, function(nextOp) {
	      nextOp = Parse.Op._decode(nextOp);
	      op = nextOp._mergeWithPrevious(op);
	    });
	    return op;
	  });
	
	  /**
	   * @class
	   * A Set operation indicates that either the field was changed using
	   * Parse.Object.set, or it is a mutable container that was detected as being
	   * changed.
	   */
	  Parse.Op.Set = Parse.Op._extend(/** @lends Parse.Op.Set.prototype */ {
	    _initialize: function(value) {
	      this._value = value;
	    },
	
	    /**
	     * Returns the new value of this field after the set.
	     */
	    value: function() {
	      return this._value;
	    },
	
	    /**
	     * Returns a JSON version of the operation suitable for sending to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return Parse._encode(this.value());
	    },
	
	    _mergeWithPrevious: function(previous) {
	      return this;
	    },
	
	    _estimate: function(oldValue) {
	      return this.value();
	    }
	  });
	
	  /**
	   * A sentinel value that is returned by Parse.Op.Unset._estimate to
	   * indicate the field should be deleted. Basically, if you find _UNSET as a
	   * value in your object, you should remove that key.
	   */
	  Parse.Op._UNSET = {};
	
	  /**
	   * @class
	   * An Unset operation indicates that this field has been deleted from the
	   * object.
	   */
	  Parse.Op.Unset = Parse.Op._extend(/** @lends Parse.Op.Unset.prototype */ {
	    /**
	     * Returns a JSON version of the operation suitable for sending to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return { __op: "Delete" };
	    },
	
	    _mergeWithPrevious: function(previous) {
	      return this;
	    },
	
	    _estimate: function(oldValue) {
	      return Parse.Op._UNSET;
	    }
	  });
	
	  Parse.Op._registerDecoder("Delete", function(json) {
	    return new Parse.Op.Unset();
	  });
	
	  /**
	   * @class
	   * An Increment is an atomic operation where the numeric value for the field
	   * will be increased by a given amount.
	   */
	  Parse.Op.Increment = Parse.Op._extend(
	      /** @lends Parse.Op.Increment.prototype */ {
	
	    _initialize: function(amount) {
	      this._amount = amount;
	    },
	
	    /**
	     * Returns the amount to increment by.
	     * @return {Number} the amount to increment by.
	     */
	    amount: function() {
	      return this._amount;
	    },
	
	    /**
	     * Returns a JSON version of the operation suitable for sending to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return { __op: "Increment", amount: this._amount };
	    },
	
	    _mergeWithPrevious: function(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof Parse.Op.Unset) {
	        return new Parse.Op.Set(this.amount());
	      } else if (previous instanceof Parse.Op.Set) {
	        return new Parse.Op.Set(previous.value() + this.amount());
	      } else if (previous instanceof Parse.Op.Increment) {
	        return new Parse.Op.Increment(this.amount() + previous.amount());
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },
	
	    _estimate: function(oldValue) {
	      if (!oldValue) {
	        return this.amount();
	      }
	      return oldValue + this.amount();
	    }
	  });
	
	  Parse.Op._registerDecoder("Increment", function(json) {
	    return new Parse.Op.Increment(json.amount);
	  });
	
	  /**
	   * @class
	   * Add is an atomic operation where the given objects will be appended to the
	   * array that is stored in this field.
	   */
	  Parse.Op.Add = Parse.Op._extend(/** @lends Parse.Op.Add.prototype */ {
	    _initialize: function(objects) {
	      this._objects = objects;
	    },
	
	    /**
	     * Returns the objects to be added to the array.
	     * @return {Array} The objects to be added to the array.
	     */
	    objects: function() {
	      return this._objects;
	    },
	
	    /**
	     * Returns a JSON version of the operation suitable for sending to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return { __op: "Add", objects: Parse._encode(this.objects()) };
	    },
	
	    _mergeWithPrevious: function(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof Parse.Op.Unset) {
	        return new Parse.Op.Set(this.objects());
	      } else if (previous instanceof Parse.Op.Set) {
	        return new Parse.Op.Set(this._estimate(previous.value()));
	      } else if (previous instanceof Parse.Op.Add) {
	        return new Parse.Op.Add(previous.objects().concat(this.objects()));
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },
	
	    _estimate: function(oldValue) {
	      if (!oldValue) {
	        return _.clone(this.objects());
	      } else {
	        return oldValue.concat(this.objects());
	      }
	    }
	  });
	
	  Parse.Op._registerDecoder("Add", function(json) {
	    return new Parse.Op.Add(Parse._decode(undefined, json.objects));
	  });
	
	  /**
	   * @class
	   * AddUnique is an atomic operation where the given items will be appended to
	   * the array that is stored in this field only if they were not already
	   * present in the array.
	   */
	  Parse.Op.AddUnique = Parse.Op._extend(
	      /** @lends Parse.Op.AddUnique.prototype */ {
	
	    _initialize: function(objects) {
	      this._objects = _.uniq(objects);
	    },
	
	    /**
	     * Returns the objects to be added to the array.
	     * @return {Array} The objects to be added to the array.
	     */
	    objects: function() {
	      return this._objects;
	    },
	
	    /**
	     * Returns a JSON version of the operation suitable for sending to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return { __op: "AddUnique", objects: Parse._encode(this.objects()) };
	    },
	
	    _mergeWithPrevious: function(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof Parse.Op.Unset) {
	        return new Parse.Op.Set(this.objects());
	      } else if (previous instanceof Parse.Op.Set) {
	        return new Parse.Op.Set(this._estimate(previous.value()));
	      } else if (previous instanceof Parse.Op.AddUnique) {
	        return new Parse.Op.AddUnique(this._estimate(previous.objects()));
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },
	
	    _estimate: function(oldValue) {
	      if (!oldValue) {
	        return _.clone(this.objects());
	      } else {
	        // We can't just take the _.uniq(_.union(...)) of oldValue and
	        // this.objects, because the uniqueness may not apply to oldValue
	        // (especially if the oldValue was set via .set())
	        var newValue = _.clone(oldValue);
	        Parse._arrayEach(this.objects(), function(obj) {
	          if (obj instanceof Parse.Object && obj.id) {
	            var matchingObj = _.find(newValue, function(anObj) {
	              return (anObj instanceof Parse.Object) && (anObj.id === obj.id);
	            });
	            if (!matchingObj) {
	              newValue.push(obj);
	            } else {
	              var index = _.indexOf(newValue, matchingObj);
	              newValue[index] = obj;
	            }
	          } else if (!_.contains(newValue, obj)) {
	            newValue.push(obj);
	          }
	        });
	        return newValue;
	      }
	    }
	  });
	
	  Parse.Op._registerDecoder("AddUnique", function(json) {
	    return new Parse.Op.AddUnique(Parse._decode(undefined, json.objects));
	  });
	
	  /**
	   * @class
	   * Remove is an atomic operation where the given objects will be removed from
	   * the array that is stored in this field.
	   */
	  Parse.Op.Remove = Parse.Op._extend(/** @lends Parse.Op.Remove.prototype */ {
	    _initialize: function(objects) {
	      this._objects = _.uniq(objects);
	    },
	
	    /**
	     * Returns the objects to be removed from the array.
	     * @return {Array} The objects to be removed from the array.
	     */
	    objects: function() {
	      return this._objects;
	    },
	
	    /**
	     * Returns a JSON version of the operation suitable for sending to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return { __op: "Remove", objects: Parse._encode(this.objects()) };
	    },
	
	    _mergeWithPrevious: function(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof Parse.Op.Unset) {
	        return previous;
	      } else if (previous instanceof Parse.Op.Set) {
	        return new Parse.Op.Set(this._estimate(previous.value()));
	      } else if (previous instanceof Parse.Op.Remove) {
	        return new Parse.Op.Remove(_.union(previous.objects(), this.objects()));
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },
	
	    _estimate: function(oldValue) {
	      if (!oldValue) {
	        return [];
	      } else {
	        var newValue = _.difference(oldValue, this.objects());
	        // If there are saved Parse Objects being removed, also remove them.
	        Parse._arrayEach(this.objects(), function(obj) {
	          if (obj instanceof Parse.Object && obj.id) {
	            newValue = _.reject(newValue, function(other) {
	              return (other instanceof Parse.Object) && (other.id === obj.id);
	            });
	          }
	        });
	        return newValue;
	      }
	    }
	  });
	
	  Parse.Op._registerDecoder("Remove", function(json) {
	    return new Parse.Op.Remove(Parse._decode(undefined, json.objects));
	  });
	
	  /**
	   * @class
	   * A Relation operation indicates that the field is an instance of
	   * Parse.Relation, and objects are being added to, or removed from, that
	   * relation.
	   */
	  Parse.Op.Relation = Parse.Op._extend(
	      /** @lends Parse.Op.Relation.prototype */ {
	
	    _initialize: function(adds, removes) {
	      this._targetClassName = null;
	
	      var self = this;
	
	      var pointerToId = function(object) {
	        if (object instanceof Parse.Object) {
	          if (!object.id) {
	            throw "You can't add an unsaved Parse.Object to a relation.";
	          }
	          if (!self._targetClassName) {
	            self._targetClassName = object.className;
	          }
	          if (self._targetClassName !== object.className) {
	            throw "Tried to create a Parse.Relation with 2 different types: " +
	                  self._targetClassName + " and " + object.className + ".";
	          }
	          return object.id;
	        }
	        return object;
	      };
	
	      this.relationsToAdd = _.uniq(_.map(adds, pointerToId));
	      this.relationsToRemove = _.uniq(_.map(removes, pointerToId));
	    },
	
	    /**
	     * Returns an array of unfetched Parse.Object that are being added to the
	     * relation.
	     * @return {Array}
	     */
	    added: function() {
	      var self = this;
	      return _.map(this.relationsToAdd, function(objectId) {
	        var object = Parse.Object._create(self._targetClassName);
	        object.id = objectId;
	        return object;
	      });
	    },
	
	    /**
	     * Returns an array of unfetched Parse.Object that are being removed from
	     * the relation.
	     * @return {Array}
	     */
	    removed: function() {
	      var self = this;
	      return _.map(this.relationsToRemove, function(objectId) {
	        var object = Parse.Object._create(self._targetClassName);
	        object.id = objectId;
	        return object;
	      });
	    },
	
	    /**
	     * Returns a JSON version of the operation suitable for sending to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      var adds = null;
	      var removes = null;
	      var self = this;
	      var idToPointer = function(id) {
	        return { __type: 'Pointer',
	                 className: self._targetClassName,
	                 objectId: id };
	      };
	      var pointers = null;
	      if (this.relationsToAdd.length > 0) {
	        pointers = _.map(this.relationsToAdd, idToPointer);
	        adds = { "__op": "AddRelation", "objects": pointers };
	      }
	
	      if (this.relationsToRemove.length > 0) {
	        pointers = _.map(this.relationsToRemove, idToPointer);
	        removes = { "__op": "RemoveRelation", "objects": pointers };
	      }
	
	      if (adds && removes) {
	        return { "__op": "Batch", "ops": [adds, removes]};
	      }
	
	      return adds || removes || {};
	    },
	
	    _mergeWithPrevious: function(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof Parse.Op.Unset) {
	        throw "You can't modify a relation after deleting it.";
	      } else if (previous instanceof Parse.Op.Relation) {
	        if (previous._targetClassName &&
	            previous._targetClassName !== this._targetClassName) {
	          throw "Related object must be of class " + previous._targetClassName +
	              ", but " + this._targetClassName + " was passed in.";
	        }
	        var newAdd = _.union(_.difference(previous.relationsToAdd,
	                                          this.relationsToRemove),
	                             this.relationsToAdd);
	        var newRemove = _.union(_.difference(previous.relationsToRemove,
	                                             this.relationsToAdd),
	                                this.relationsToRemove);
	
	        var newRelation = new Parse.Op.Relation(newAdd, newRemove);
	        newRelation._targetClassName = this._targetClassName;
	        return newRelation;
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },
	
	    _estimate: function(oldValue, object, key) {
	      if (!oldValue) {
	        var relation = new Parse.Relation(object, key);
	        relation.targetClassName = this._targetClassName;
	      } else if (oldValue instanceof Parse.Relation) {
	        if (this._targetClassName) {
	          if (oldValue.targetClassName) {
	            if (oldValue.targetClassName !== this._targetClassName) {
	              throw "Related object must be a " + oldValue.targetClassName +
	                  ", but a " + this._targetClassName + " was passed in.";
	            }
	          } else {
	            oldValue.targetClassName = this._targetClassName;
	          }
	        }
	        return oldValue;
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    }
	  });
	
	  Parse.Op._registerDecoder("AddRelation", function(json) {
	    return new Parse.Op.Relation(Parse._decode(undefined, json.objects), []);
	  });
	  Parse.Op._registerDecoder("RemoveRelation", function(json) {
	    return new Parse.Op.Relation([], Parse._decode(undefined, json.objects));
	  });
	
	}(this));
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Creates a new Relation for the given parent object and key. This
	   * constructor should rarely be used directly, but rather created by
	   * Parse.Object.relation.
	   * @param {Parse.Object} parent The parent of this relation.
	   * @param {String} key The key for this relation on the parent.
	   * @see Parse.Object#relation
	   * @class
	   *
	   * <p>
	   * A class that is used to access all of the children of a many-to-many
	   * relationship.  Each instance of Parse.Relation is associated with a
	   * particular parent object and key.
	   * </p>
	   */
	  Parse.Relation = function(parent, key) {
	    this.parent = parent;
	    this.key = key;
	    this.targetClassName = null;
	  };
	
	  Parse.Relation.prototype = {
	    /**
	     * Makes sure that this relation has the right parent and key.
	     */
	    _ensureParentAndKey: function(parent, key) {
	      this.parent = this.parent || parent;
	      this.key = this.key || key;
	      if (this.parent !== parent) {
	        throw "Internal Error. Relation retrieved from two different Objects.";
	      }
	      if (this.key !== key) {
	        throw "Internal Error. Relation retrieved from two different keys.";
	      }
	    },
	
	    /**
	     * Adds a Parse.Object or an array of Parse.Objects to the relation.
	     * @param {} objects The item or items to add.
	     */
	    add: function(objects) {
	      if (!_.isArray(objects)) {
	        objects = [objects];
	      }
	
	      var change = new Parse.Op.Relation(objects, []);
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	    },
	
	    /**
	     * Removes a Parse.Object or an array of Parse.Objects from this relation.
	     * @param {} objects The item or items to remove.
	     */
	    remove: function(objects) {
	      if (!_.isArray(objects)) {
	        objects = [objects];
	      }
	
	      var change = new Parse.Op.Relation([], objects);
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	    },
	
	    /**
	     * Returns a JSON version of the object suitable for saving to disk.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return { "__type": "Relation", "className": this.targetClassName };
	    },
	
	    /**
	     * Returns a Parse.Query that is limited to objects in this
	     * relation.
	     * @return {Parse.Query}
	     */
	    query: function() {
	      var targetClass;
	      var query;
	      if (!this.targetClassName) {
	        targetClass = Parse.Object._getSubclass(this.parent.className);
	        query = new Parse.Query(targetClass);
	        query._extraOptions.redirectClassNameForKey = this.key;
	      } else {
	        targetClass = Parse.Object._getSubclass(this.targetClassName);
	        query = new Parse.Query(targetClass);
	      }
	      query._addCondition("$relatedTo", "object", this.parent._toPointer());
	      query._addCondition("$relatedTo", "key", this.key);
	
	      return query;
	    }
	  };
	}(this));
	
	/*global window: false, process: false */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * A Promise is returned by async methods as a hook to provide callbacks to be
	   * called when the async task is fulfilled.
	   *
	   * <p>Typical usage would be like:<pre>
	   *    query.find().then(function(results) {
	   *      results[0].set("foo", "bar");
	   *      return results[0].saveAsync();
	   *    }).then(function(result) {
	   *      console.log("Updated " + result.id);
	   *    });
	   * </pre></p>
	   *
	   * @see Parse.Promise.prototype.then
	   * @class
	   */
	  Parse.Promise = function() {
	    this._resolved = false;
	    this._rejected = false;
	    this._resolvedCallbacks = [];
	    this._rejectedCallbacks = [];
	  };
	
	  _.extend(Parse.Promise, /** @lends Parse.Promise */ {
	
	    _isPromisesAPlusCompliant: false,
	
	    /**
	     * Returns true iff the given object fulfils the Promise interface.
	     * @return {Boolean}
	     */
	    is: function(promise) {
	      return promise && promise.then && _.isFunction(promise.then);
	    },
	
	    /**
	     * Returns a new promise that is resolved with a given value.
	     * @return {Parse.Promise} the new promise.
	     */
	    as: function() {
	      var promise = new Parse.Promise();
	      promise.resolve.apply(promise, arguments);
	      return promise;
	    },
	
	    /**
	     * Returns a new promise that is rejected with a given error.
	     * @return {Parse.Promise} the new promise.
	     */
	    error: function() {
	      var promise = new Parse.Promise();
	      promise.reject.apply(promise, arguments);
	      return promise;
	    },
	
	    /**
	     * Returns a new promise that is fulfilled when all of the input promises
	     * are resolved. If any promise in the list fails, then the returned promise
	     * will fail with the last error. If they all succeed, then the returned
	     * promise will succeed, with the results being the results of all the input
	     * promises. For example: <pre>
	     *   var p1 = Parse.Promise.as(1);
	     *   var p2 = Parse.Promise.as(2);
	     *   var p3 = Parse.Promise.as(3);
	     *
	     *   Parse.Promise.when(p1, p2, p3).then(function(r1, r2, r3) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	     *
	     * The input promises can also be specified as an array: <pre>
	     *   var promises = [p1, p2, p3];
	     *   Parse.Promise.when(promises).then(function(r1, r2, r3) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });
	     * </pre>
	     * @param {Array} promises a list of promises to wait for.
	     * @return {Parse.Promise} the new promise.
	     */
	    when: function(promises) {
	      // Allow passing in Promises as separate arguments instead of an Array.
	      var objects;
	      if (promises && Parse._isNullOrUndefined(promises.length)) {
	        objects = arguments;
	      } else {
	        objects = promises;
	      }
	
	      var total = objects.length;
	      var hadError = false;
	      var results = [];
	      var errors = [];
	      results.length = objects.length;
	      errors.length = objects.length;
	
	      if (total === 0) {
	        return Parse.Promise.as.apply(this, results);
	      }
	
	      var promise = new Parse.Promise();
	
	      var resolveOne = function() {
	        total = total - 1;
	        if (total === 0) {
	          if (hadError) {
	            promise.reject(errors);
	          } else {
	            promise.resolve.apply(promise, results);
	          }
	        }
	      };
	
	      Parse._arrayEach(objects, function(object, i) {
	        if (Parse.Promise.is(object)) {
	          object.then(function(result) {
	            results[i] = result;
	            resolveOne();
	          }, function(error) {
	            errors[i] = error;
	            hadError = true;
	            resolveOne();
	          });
	        } else {
	          results[i] = object;
	          resolveOne();
	        }
	      });
	
	      return promise;
	    },
	
	    /**
	     * Runs the given asyncFunction repeatedly, as long as the predicate
	     * function returns a truthy value. Stops repeating if asyncFunction returns
	     * a rejected promise.
	     * @param {Function} predicate should return false when ready to stop.
	     * @param {Function} asyncFunction should return a Promise.
	     */
	    _continueWhile: function(predicate, asyncFunction) {
	      if (predicate()) {
	        return asyncFunction().then(function() {
	          return Parse.Promise._continueWhile(predicate, asyncFunction);
	        });
	      }
	      return Parse.Promise.as();
	    }
	  });
	
	  _.extend(Parse.Promise.prototype, /** @lends Parse.Promise.prototype */ {
	
	    /**
	     * Marks this promise as fulfilled, firing any callbacks waiting on it.
	     * @param {Object} result the result to pass to the callbacks.
	     */
	    resolve: function(result) {
	      if (this._resolved || this._rejected) {
	        throw "A promise was resolved even though it had already been " +
	          (this._resolved ? "resolved" : "rejected") + ".";
	      }
	      this._resolved = true;
	      this._result = arguments;
	      var results = arguments;
	      Parse._arrayEach(this._resolvedCallbacks, function(resolvedCallback) {
	        resolvedCallback.apply(this, results);
	      });
	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    },
	
	    /**
	     * Marks this promise as fulfilled, firing any callbacks waiting on it.
	     * @param {Object} error the error to pass to the callbacks.
	     */
	    reject: function(error) {
	      if (this._resolved || this._rejected) {
	        throw "A promise was rejected even though it had already been " +
	          (this._resolved ? "resolved" : "rejected") + ".";
	      }
	      this._rejected = true;
	      this._error = error;
	      Parse._arrayEach(this._rejectedCallbacks, function(rejectedCallback) {
	        rejectedCallback(error);
	      });
	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    },
	
	    /**
	     * Adds callbacks to be called when this promise is fulfilled. Returns a new
	     * Promise that will be fulfilled when the callback is complete. It allows
	     * chaining. If the callback itself returns a Promise, then the one returned
	     * by "then" will not be fulfilled until that one returned by the callback
	     * is fulfilled.
	     * @param {Function} resolvedCallback Function that is called when this
	     * Promise is resolved. Once the callback is complete, then the Promise
	     * returned by "then" will also be fulfilled.
	     * @param {Function} rejectedCallback Function that is called when this
	     * Promise is rejected with an error. Once the callback is complete, then
	     * the promise returned by "then" with be resolved successfully. If
	     * rejectedCallback is null, or it returns a rejected Promise, then the
	     * Promise returned by "then" will be rejected with that error.
	     * @return {Parse.Promise} A new Promise that will be fulfilled after this
	     * Promise is fulfilled and either callback has completed. If the callback
	     * returned a Promise, then this Promise will not be fulfilled until that
	     * one is.
	     */
	    then: function(resolvedCallback, rejectedCallback) {
	      var promise = new Parse.Promise();
	
	      var wrappedResolvedCallback = function() {
	        var result = arguments;
	        if (resolvedCallback) {
	          if (Parse.Promise._isPromisesAPlusCompliant) {
	            try {
	              result = [resolvedCallback.apply(this, result)];
	            } catch (e) {
	              result = [Parse.Promise.error(e)];
	            }
	          } else {
	            result = [resolvedCallback.apply(this, result)];
	          }
	        }
	        if (result.length === 1 && Parse.Promise.is(result[0])) {
	          result[0].then(function() {
	            promise.resolve.apply(promise, arguments);
	          }, function(error) {
	            promise.reject(error);
	          });
	        } else {
	          promise.resolve.apply(promise, result);
	        }
	      };
	
	      var wrappedRejectedCallback = function(error) {
	        var result = [];
	        if (rejectedCallback) {
	          if (Parse.Promise._isPromisesAPlusCompliant) {
	            try {
	              result = [rejectedCallback(error)];
	            } catch (e) {
	              result = [Parse.Promise.error(e)];
	            }
	          } else {
	            result = [rejectedCallback(error)];
	          }
	          if (result.length === 1 && Parse.Promise.is(result[0])) {
	            result[0].then(function() {
	              promise.resolve.apply(promise, arguments);
	            }, function(error) {
	              promise.reject(error);
	            });
	          } else {
	            if (Parse.Promise._isPromisesAPlusCompliant) {
	              promise.resolve.apply(promise, result);
	            } else {
	              promise.reject(result[0]);
	            }
	          }
	        } else {
	          promise.reject(error);
	        }
	      };
	
	      var runLater = function(func) {
	        func.call();
	      };
	      if (Parse.Promise._isPromisesAPlusCompliant) {
	        if (typeof(window) !== 'undefined' && window.setTimeout) {
	          runLater = function(func) {
	            window.setTimeout(func, 0);
	          };
	        } else if (typeof(process) !== 'undefined' && process.nextTick) {
	          runLater = function(func) {
	            process.nextTick(func);
	          };
	        }
	      }
	
	      var self = this;
	      if (this._resolved) {
	        runLater(function() {
	          wrappedResolvedCallback.apply(self, self._result);
	        });
	      } else if (this._rejected) {
	        runLater(function() {
	          wrappedRejectedCallback(self._error);
	        });
	      } else {
	        this._resolvedCallbacks.push(wrappedResolvedCallback);
	        this._rejectedCallbacks.push(wrappedRejectedCallback);
	      }
	
	      return promise;
	    },
	
	    /**
	     * Add handlers to be called when the promise 
	     * is either resolved or rejected
	     */
	    always: function(callback) {
	      return this.then(callback, callback);
	    },
	
	    /**
	     * Add handlers to be called when the Promise object is resolved
	     */
	    done: function(callback) {
	      return this.then(callback);
	    },
	
	    /**
	     * Add handlers to be called when the Promise object is rejected
	     */
	    fail: function(callback) {
	      return this.then(null, callback);
	    },
	
	    /**
	     * Run the given callbacks after this promise is fulfilled.
	     * @param optionsOrCallback {} A Backbone-style options callback, or a
	     * callback function. If this is an options object and contains a "model"
	     * attributes, that will be passed to error callbacks as the first argument.
	     * @param model {} If truthy, this will be passed as the first result of
	     * error callbacks. This is for Backbone-compatability.
	     * @return {Parse.Promise} A promise that will be resolved after the
	     * callbacks are run, with the same result as this.
	     */
	    _thenRunCallbacks: function(optionsOrCallback, model) {
	      var options;
	      if (_.isFunction(optionsOrCallback)) {
	        var callback = optionsOrCallback;
	        options = {
	          success: function(result) {
	            callback(result, null);
	          },
	          error: function(error) {
	            callback(null, error);
	          }
	        };
	      } else {
	        options = _.clone(optionsOrCallback);
	      }
	      options = options || {};
	
	      return this.then(function(result) {
	        if (options.success) {
	          options.success.apply(this, arguments);
	        } else if (model) {
	          // When there's no callback, a sync event should be triggered.
	          model.trigger('sync', model, result, options);
	        }
	        return Parse.Promise.as.apply(Parse.Promise, arguments);
	      }, function(error) {
	        if (options.error) {
	          if (!_.isUndefined(model)) {
	            options.error(model, error);
	          } else {
	            options.error(error);
	          }
	        } else if (model) {
	          // When there's no error callback, an error event should be triggered.
	          model.trigger('error', model, error, options);
	        }
	        // By explicitly returning a rejected Promise, this will work with
	        // either jQuery or Promises/A semantics.
	        return Parse.Promise.error(error);
	      });
	    },
	
	    /**
	     * Adds a callback function that should be called regardless of whether
	     * this promise failed or succeeded. The callback will be given either the
	     * array of results for its first argument, or the error as its second,
	     * depending on whether this Promise was rejected or resolved. Returns a
	     * new Promise, like "then" would.
	     * @param {Function} continuation the callback.
	     */
	    _continueWith: function(continuation) {
	      return this.then(function() {
	        return continuation(arguments, null);
	      }, function(error) {
	        return continuation(null, error);
	      });
	    }
	
	  });
	
	}(this));
	
	/*jshint bitwise:false *//*global FileReader: true, File: true */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  var b64Digit = function(number) {
	    if (number < 26) {
	      return String.fromCharCode(65 + number);
	    }
	    if (number < 52) {
	      return String.fromCharCode(97 + (number - 26));
	    }
	    if (number < 62) {
	      return String.fromCharCode(48 + (number - 52));
	    }
	    if (number === 62) {
	      return "+";
	    }
	    if (number === 63) {
	      return "/";
	    }
	    throw "Tried to encode large digit " + number + " in base64.";
	  };
	
	  var encodeBase64 = function(array) {
	    var chunks = [];
	    chunks.length = Math.ceil(array.length / 3);
	    _.times(chunks.length, function(i) {
	      var b1 = array[i * 3];
	      var b2 = array[i * 3 + 1] || 0;
	      var b3 = array[i * 3 + 2] || 0;
	
	      var has2 = (i * 3 + 1) < array.length;
	      var has3 = (i * 3 + 2) < array.length;
	
	      chunks[i] = [
	        b64Digit((b1 >> 2) & 0x3F),
	        b64Digit(((b1 << 4) & 0x30) | ((b2 >> 4) & 0x0F)),
	        has2 ? b64Digit(((b2 << 2) & 0x3C) | ((b3 >> 6) & 0x03)) : "=",
	        has3 ? b64Digit(b3 & 0x3F) : "="
	      ].join("");
	    });
	    return chunks.join("");
	  };
	
	  /**
	   * Reads a File using a FileReader.
	   * @param file {File} the File to read.
	   * @param type {String} (optional) the mimetype to override with.
	   * @return {Parse.Promise} A Promise that will be fulfilled with a
	   *     base64-encoded string of the data and its mime type.
	   */
	  var readAsync = function(file, type) {
	    var promise = new Parse.Promise();
	
	    if (typeof(FileReader) === "undefined") {
	      return Parse.Promise.error(new Parse.Error(
	          Parse.Error.FILE_READ_ERROR,
	          "Attempted to use a FileReader on an unsupported browser."));
	    }
	
	    var reader = new FileReader();
	    reader.onloadend = function() {
	      if (reader.readyState !== 2) {
	        promise.reject(new Parse.Error(
	            Parse.Error.FILE_READ_ERROR,
	            "Error reading file."));
	        return;
	      }
	
	      var dataURL = reader.result;
	      var matches = /^data:([^;]*);base64,(.*)$/.exec(dataURL);
	      if (!matches) {
	        promise.reject(new Parse.Error(
	            Parse.Error.FILE_READ_ERROR,
	            "Unable to interpret data URL: " + dataURL));
	        return;
	      }
	
	      promise.resolve(matches[2], type || matches[1]);
	    };
	    reader.readAsDataURL(file);
	    return promise;
	  };
	
	  /**
	   * A Parse.File is a local representation of a file that is saved to the Parse
	   * cloud.
	   * @class
	   * @param name {String} The file's name. This will be prefixed by a unique
	   *     value once the file has finished saving. The file name must begin with
	   *     an alphanumeric character, and consist of alphanumeric characters,
	   *     periods, spaces, underscores, or dashes.
	   * @param data {Array} The data for the file, as either:
	   *     1. an Array of byte value Numbers, or
	   *     2. an Object like { base64: "..." } with a base64-encoded String.
	   *     3. a File object selected with a file upload control. (3) only works
	   *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
	   *        For example:<pre>
	   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
	   * if (fileUploadControl.files.length > 0) {
	   *   var file = fileUploadControl.files[0];
	   *   var name = "photo.jpg";
	   *   var parseFile = new Parse.File(name, file);
	   *   parseFile.save().then(function() {
	   *     // The file has been saved to Parse.
	   *   }, function(error) {
	   *     // The file either could not be read, or could not be saved to Parse.
	   *   });
	   * }</pre>
	   * @param type {String} Optional Content-Type header to use for the file. If
	   *     this is omitted, the content type will be inferred from the name's
	   *     extension.
	   */
	  Parse.File = function(name, data, type) {
	    this._name = name;
	
	    // Guess the content type from the extension if we need to.
	    var extension = /\.([^.]*)$/.exec(name);
	    if (extension) {
	      extension = extension[1].toLowerCase();
	    }
	    var specifiedType = type || '';
	
	    if (_.isArray(data)) {
	      this._source = Parse.Promise.as(encodeBase64(data), specifiedType);
	    } else if (data && data.base64) {
	      // if it contains data uri, extract based64 and the type out of it.
	      /*jslint maxlen: 1000*/
	      var dataUriRegexp = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/;
	      /*jslint maxlen: 80*/
	
	      var matches = dataUriRegexp.exec(data.base64);
	      if (matches && matches.length > 0) {
	        // if data URI with charset, there will have 4 matches.
	        this._source = Parse.Promise.as(
	          (matches.length === 4 ? matches[3] : matches[2]), matches[1]
	        );
	      } else {
	        this._source = Parse.Promise.as(data.base64, specifiedType);
	      }
	    } else if (typeof(File) !== "undefined" && data instanceof File) {
	      this._source = readAsync(data, type);
	    } else if (_.isString(data)) {
	      throw "Creating a Parse.File from a String is not yet supported.";
	    }
	  };
	
	  Parse.File.prototype = {
	
	    /**
	     * Gets the name of the file. Before save is called, this is the filename
	     * given by the user. After save is called, that name gets prefixed with a
	     * unique identifier.
	     */
	    name: function() {
	      return this._name;
	    },
	
	    /**
	     * Gets the url of the file. It is only available after you save the file or
	     * after you get the file from a Parse.Object.
	     * @return {String}
	     */
	    url: function() {
	      return this._url;
	    },
	
	    /**
	     * Saves the file to the Parse cloud.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} Promise that is resolved when the save finishes.
	     */
	    save: function(options) {
	      options= options || {};
	
	      var self = this;
	      if (!self._previousSave) {
	        self._previousSave = self._source.then(function(base64, type) {
	          var data = {
	            base64: base64,
	            _ContentType: type
	          };
	          return Parse._request({
	            route: "files",
	            className: self._name,
	            method: 'POST',
	            data: data,
	            useMasterKey: options.useMasterKey
	          });
	
	        }).then(function(response) {
	          self._name = response.name;
	          self._url = response.url;
	          return self;
	        });
	      }
	      return self._previousSave._thenRunCallbacks(options);
	    }
	  };
	
	}(this));
	
	// Parse.Object is analogous to the Java ParseObject.
	// It also implements the same interface as a Backbone model.
	// TODO: multiple dispatch for callbacks
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Creates a new model with defined attributes. A client id (cid) is
	   * automatically generated and assigned for you.
	   *
	   * <p>You won't normally call this method directly.  It is recommended that
	   * you use a subclass of <code>Parse.Object</code> instead, created by calling
	   * <code>extend</code>.</p>
	   *
	   * <p>However, if you don't want to use a subclass, or aren't sure which
	   * subclass is appropriate, you can use this form:<pre>
	   *     var object = new Parse.Object("ClassName");
	   * </pre>
	   * That is basically equivalent to:<pre>
	   *     var MyClass = Parse.Object.extend("ClassName");
	   *     var object = new MyClass();
	   * </pre></p>
	   *
	   * @param {Object} attributes The initial set of data to store in the object.
	   * @param {Object} options A set of Backbone-like options for creating the
	   *     object.  The only option currently supported is "collection".
	   * @see Parse.Object.extend
	   *
	   * @class
	   *
	   * <p>The fundamental unit of Parse data, which implements the Backbone Model
	   * interface.</p>
	   */
	  Parse.Object = function(attributes, options) {
	    // Allow new Parse.Object("ClassName") as a shortcut to _create.
	    if (_.isString(attributes)) {
	      return Parse.Object._create.apply(this, arguments);
	    }
	
	    attributes = attributes || {};
	    if (options && options.parse) {
	      attributes = this.parse(attributes);
	    }
	    var defaults = Parse._getValue(this, 'defaults');
	    if (defaults) {
	      attributes = _.extend({}, defaults, attributes);
	    }
	    if (options && options.collection) {
	      this.collection = options.collection;
	    }
	
	    this._serverData = {};  // The last known data for this object from cloud.
	    this._opSetQueue = [{}];  // List of sets of changes to the data.
	    this.attributes = {};  // The best estimate of this's current data.
	
	    this._hashedJSON = {};  // Hash of values of containers at last save.
	    this._escapedAttributes = {};
	    this.cid = _.uniqueId('c');
	    this.changed = {};
	    this._silent = {};
	    this._pending = {};
	    if (!this.set(attributes, {silent: true})) {
	      throw new Error("Can't create an invalid Parse.Object");
	    }
	    this.changed = {};
	    this._silent = {};
	    this._pending = {};
	    this._hasData = true;
	    this._previousAttributes = _.clone(this.attributes);
	    this.initialize.apply(this, arguments);
	  };
	
	  /**
	   * The ID of this object, unique within its class.
	   * @name id
	   * @type String
	   * @field
	   * @memberOf Parse.Object.prototype
	   */
	
	  /**
	   * The first time this object was saved on the server.
	   * @name createdAt
	   * @type Date
	   * @field
	   * @memberOf Parse.Object.prototype
	   */
	
	  /**
	   * The last time this object was updated on the server.
	   * @name updatedAt
	   * @type Date
	   * @field
	   * @memberOf Parse.Object.prototype
	   */
	
	  /**
	   * Saves the given list of Parse.Object.
	   * If any error is encountered, stops and calls the error handler.
	   *
	   * <pre>
	   *   Parse.Object.saveAll([object1, object2, ...], {
	   *     success: function(list) {
	   *       // All the objects were saved.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while saving one of the objects.
	   *     },
	   *   });
	   * </pre>
	   *
	   * @param {Array} list A list of <code>Parse.Object</code>.
	   * @param {Object} options A Backbone-style callback object.
	   * Valid options are:<ul>
	   *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	   *     be used for this request.
	   *   <li>sessionToken: A valid session token, used for making a request on
	   *       behalf of a specific user.
	   * </ul>
	   */
	  Parse.Object.saveAll = function(list, options) {
	    options = options || {};
	    return Parse.Object._deepSaveAsync(list, {
	      useMasterKey: options.useMasterKey,
	      sessionToken: options.sessionToken
	    })._thenRunCallbacks(options);
	  };
	
	  /**
	   * Destroy the given list of models on the server if it was already persisted.
	   * Optimistically removes each model from its collection, if it has one.
	   * If `wait: true` is passed, waits for the server to respond before removal.
	   *
	   * <p>Unlike saveAll, if an error occurs while deleting an individual model,
	   * this method will continue trying to delete the rest of the models if
	   * possible, except in the case of a fatal error like a connection error.
	   *
	   * <p>In particular, the Parse.Error object returned in the case of error may
	   * be one of two types:
	   *
	   * <ul>
	   *   <li>A Parse.Error.AGGREGATE_ERROR. This object's "errors" property is an
	   *       array of other Parse.Error objects. Each error object in this array
	   *       has an "object" property that references the object that could not be
	   *       deleted (for instance, because that object could not be found).</li>
	   *   <li>A non-aggregate Parse.Error. This indicates a serious error that
	   *       caused the delete operation to be aborted partway through (for
	   *       instance, a connection failure in the middle of the delete).</li>
	   * </ul>
	   *
	   * <pre>
	   *   Parse.Object.destroyAll([object1, object2, ...], {
	   *     success: function() {
	   *       // All the objects were deleted.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while deleting one or more of the objects.
	   *       // If this is an aggregate error, then we can inspect each error
	   *       // object individually to determine the reason why a particular
	   *       // object was not deleted.
	   *       if (error.code == Parse.Error.AGGREGATE_ERROR) {
	   *         for (var i = 0; i < error.errors.length; i++) {
	   *           console.log("Couldn't delete " + error.errors[i].object.id +
	   *             "due to " + error.errors[i].message);
	   *         }
	   *       } else {
	   *         console.log("Delete aborted because of " + error.message);
	   *       }
	   *     },
	   *   });
	   * </pre>
	   *
	   * @param {Array} list A list of <code>Parse.Object</code>.
	   * @param {Object} options A Backbone-style callback object.
	   * Valid options are:<ul>
	   *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	   *     be used for this request.
	   *   <li>sessionToken: A valid session token, used for making a request on
	   *       behalf of a specific user.
	   * </ul>
	   * @return {Parse.Promise} A promise that is fulfilled when the destroyAll
	   *     completes.
	   */
	  Parse.Object.destroyAll = function(list, options) {
	    options = options || {};
	
	    var triggerDestroy = function(object) {
	      object.trigger('destroy', object, object.collection, options);
	    };
	
	    var errors = [];
	    var destroyBatch = function(batch) {
	      var promise = Parse.Promise.as();
	
	      if (batch.length > 0) {
	        promise = promise.then(function() {
	          return Parse._request({
	            route: "batch",
	            method: "POST",
	            useMasterKey: options.useMasterKey,
	            sessionToken: options.sessionToken,
	            data: {
	              requests: _.map(batch, function(object) {
	                return {
	                  method: "DELETE",
	                  path: "/1/classes/" + object.className + "/" + object.id
	                };
	              })
	            }
	          });
	        }).then(function(responses, status, xhr) {
	          Parse._arrayEach(batch, function(object, i) {
	            if (responses[i].success && options.wait) {
	              triggerDestroy(object);
	            } else if (responses[i].error) {
	              var error = new Parse.Error(responses[i].error.code,
	                                          responses[i].error.error);
	              error.object = object;
	
	              errors.push(error);
	            }
	          });
	        });
	      }
	
	      return promise;
	    };
	
	    var promise = Parse.Promise.as();
	    var batch = [];
	    Parse._arrayEach(list, function(object, i) {
	      if (!object.id || !options.wait) {
	        triggerDestroy(object);
	      }
	
	      if (object.id) {
	        batch.push(object);
	      }
	
	      if (batch.length === 20 || i+1 === list.length) {
	        var thisBatch = batch;
	        batch = [];
	
	        promise = promise.then(function() {
	          return destroyBatch(thisBatch);
	        });
	      }
	    });
	
	    return promise.then(function() {
	      if (errors.length === 0) {
	        return true;
	      } else {
	        var error = new Parse.Error(Parse.Error.AGGREGATE_ERROR,
	                                    "Error deleting an object in destroyAll");
	        error.errors = errors;
	
	        return Parse.Promise.error(error);
	      }
	    })._thenRunCallbacks(options);
	  };
	
	  /**
	   * Fetches the given list of Parse.Object.
	   * If any error is encountered, stops and calls the error handler.
	   *
	   * <pre>
	   *   Parse.Object.fetchAll([object1, object2, ...], {
	   *     success: function(list) {
	   *       // All the objects were fetched.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while fetching one of the objects.
	   *     },
	   *   });
	   * </pre>
	   *
	   * @param {Array} list A list of <code>Parse.Object</code>.
	   * @param {Object} options A Backbone-style callback object.
	   * Valid options are:<ul>
	   *   <li>success: A Backbone-style success callback.
	   *   <li>error: An Backbone-style error callback.
	   * </ul>
	   */
	  Parse.Object.fetchAll = function(list, options) {
	    return Parse.Object._fetchAll(
	      list,
	      true
	    )._thenRunCallbacks(options);
	  };
	
	  /**
	   * Fetches the given list of Parse.Object if needed.
	   * If any error is encountered, stops and calls the error handler.
	   *
	   * <pre>
	   *   Parse.Object.fetchAllIfNeeded([object1, ...], {
	   *     success: function(list) {
	   *       // Objects were fetched and updated.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while fetching one of the objects.
	   *     },
	   *   });
	   * </pre>
	   *
	   * @param {Array} list A list of <code>Parse.Object</code>.
	   * @param {Object} options A Backbone-style callback object.
	   * Valid options are:<ul>
	   *   <li>success: A Backbone-style success callback.
	   *   <li>error: An Backbone-style error callback.
	   * </ul>
	   */
	  Parse.Object.fetchAllIfNeeded = function(list, options) {
	    return Parse.Object._fetchAll(
	      list,
	      false
	    )._thenRunCallbacks(options);
	  };
	
	  // Attach all inheritable methods to the Parse.Object prototype.
	  _.extend(Parse.Object.prototype, Parse.Events,
	           /** @lends Parse.Object.prototype */ {
	    _existed: false,
	
	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function(){},
	
	    /**
	     * Returns a JSON version of the object suitable for saving to Parse.
	     * @return {Object}
	     */
	    toJSON: function() {
	      var json = this._toFullJSON();
	      Parse._arrayEach(["__type", "className"],
	                       function(key) { delete json[key]; });
	      return json;
	    },
	
	    _toFullJSON: function(seenObjects) {
	      var json = _.clone(this.attributes);
	      Parse._objectEach(json, function(val, key) {
	        json[key] = Parse._encode(val, seenObjects);
	      });
	      Parse._objectEach(this._operations, function(val, key) {
	        json[key] = val;
	      });
	
	      if (_.has(this, "id")) {
	        json.objectId = this.id;
	      }
	      if (_.has(this, "createdAt")) {
	        if (_.isDate(this.createdAt)) {
	          json.createdAt = this.createdAt.toJSON();
	        } else {
	          json.createdAt = this.createdAt;
	        }
	      }
	
	      if (_.has(this, "updatedAt")) {
	        if (_.isDate(this.updatedAt)) {
	          json.updatedAt = this.updatedAt.toJSON();
	        } else {
	          json.updatedAt = this.updatedAt;
	        }
	      }
	      json.__type = "Object";
	      json.className = this.className;
	      return json;
	    },
	
	    /**
	     * Updates _hashedJSON to reflect the current state of this object.
	     * Adds any changed hash values to the set of pending changes.
	     */
	    _refreshCache: function() {
	      var self = this;
	      if (self._refreshingCache) {
	        return;
	      }
	      self._refreshingCache = true;
	      Parse._objectEach(this.attributes, function(value, key) {
	        if (value instanceof Parse.Object) {
	          value._refreshCache();
	        } else if (_.isObject(value)) {
	          var objectArray = false;
	          if (_.isArray(value)) {
	            // We don't cache arrays of Parse.Objects
	            _.each(value, function(arrVal) {
	              if (arrVal instanceof Parse.Object) {
	                objectArray = true;
	                arrVal._refreshCache();
	              }
	            });
	          }
	          if (!objectArray && self._resetCacheForKey(key)) {
	            self.set(key, new Parse.Op.Set(value), { silent: true });
	          }
	        }
	      });
	      delete self._refreshingCache;
	    },
	
	    /**
	     * Returns true if this object has been modified since its last
	     * save/refresh.  If an attribute is specified, it returns true only if that
	     * particular attribute has been modified since the last save/refresh.
	     * @param {String} attr An attribute name (optional).
	     * @return {Boolean}
	     */
	    dirty: function(attr) {
	      this._refreshCache();
	
	      var currentChanges = _.last(this._opSetQueue);
	
	      if (attr) {
	        return (currentChanges[attr] ? true : false);
	      }
	      if (!this.id) {
	        return true;
	      }
	      if (_.keys(currentChanges).length > 0) {
	        return true;
	      }
	      return false;
	    },
	
	    /**
	     * Returns an array of keys that have been modified since last save/refresh
	     * @return {Array of string}
	     */
	    dirtyKeys: function() {
	      return _.keys(_.last(this._opSetQueue));
	    },
	
	    /**
	     * Gets a Pointer referencing this Object.
	     */
	    _toPointer: function() {
	      if (!this.id) {
	        throw new Error("Can't serialize an unsaved Parse.Object");
	      }
	      return { __type: "Pointer",
	               className: this.className,
	               objectId: this.id };
	    },
	
	    /**
	     * Gets the value of an attribute.
	     * @param {String} attr The string name of an attribute.
	     */
	    get: function(attr) {
	      return this.attributes[attr];
	    },
	
	    /**
	     * Gets a relation on the given class for the attribute.
	     * @param String attr The attribute to get the relation for.
	     */
	    relation: function(attr) {
	      var value = this.get(attr);
	      if (value) {
	        if (!(value instanceof Parse.Relation)) {
	          throw "Called relation() on non-relation field " + attr;
	        }
	        value._ensureParentAndKey(this, attr);
	        return value;
	      } else {
	        return new Parse.Relation(this, attr);
	      }
	    },
	
	    /**
	     * Gets the HTML-escaped value of an attribute.
	     */
	    escape: function(attr) {
	      var html = this._escapedAttributes[attr];
	      if (html) {
	        return html;
	      }
	      var val = this.attributes[attr];
	      var escaped;
	      if (Parse._isNullOrUndefined(val)) {
	        escaped = '';
	      } else {
	        escaped = _.escape(val.toString());
	      }
	      this._escapedAttributes[attr] = escaped;
	      return escaped;
	    },
	
	    /**
	     * Returns <code>true</code> if the attribute contains a value that is not
	     * null or undefined.
	     * @param {String} attr The string name of the attribute.
	     * @return {Boolean}
	     */
	    has: function(attr) {
	      return !Parse._isNullOrUndefined(this.attributes[attr]);
	    },
	
	    /**
	     * Pulls "special" fields like objectId, createdAt, etc. out of attrs
	     * and puts them on "this" directly.  Removes them from attrs.
	     * @param attrs - A dictionary with the data for this Parse.Object.
	     */
	    _mergeMagicFields: function(attrs) {
	      // Check for changes of magic fields.
	      var model = this;
	      var specialFields = ["id", "objectId", "createdAt", "updatedAt"];
	      Parse._arrayEach(specialFields, function(attr) {
	        if (attrs[attr]) {
	          if (attr === "objectId") {
	            model.id = attrs[attr];
	          } else if ((attr === "createdAt" || attr === "updatedAt") &&
	                     !_.isDate(attrs[attr])) {
	            model[attr] = Parse._parseDate(attrs[attr]);
	          } else {
	            model[attr] = attrs[attr];
	          }
	          delete attrs[attr];
	        }
	      });
	    },
	
	    /**
	     * Copies the given serverData to "this", refreshes attributes, and
	     * clears pending changes;
	     */
	    _copyServerData: function(serverData) {
	      // Copy server data
	      var tempServerData = {};
	      Parse._objectEach(serverData, function(value, key) {
	        tempServerData[key] = Parse._decode(key, value);
	      });
	      this._serverData = tempServerData;
	
	      // Refresh the attributes.
	      this._rebuildAllEstimatedData();
	
	      // TODO (bklimt): Revisit clearing operations, perhaps move to revert.
	      // Clear out any changes the user might have made previously.
	      this._refreshCache();
	      this._opSetQueue = [{}];
	
	      // Refresh the attributes again.
	      this._rebuildAllEstimatedData();
	    },
	
	    /**
	     * Merges another object's attributes into this object.
	     */
	    _mergeFromObject: function(other) {
	      if (!other) {
	        return;
	      }
	
	      // This does the inverse of _mergeMagicFields.
	      this.id = other.id;
	      this.createdAt = other.createdAt;
	      this.updatedAt = other.updatedAt;
	
	      this._copyServerData(other._serverData);
	
	      this._hasData = true;
	    },
	
	    /**
	     * Returns the json to be sent to the server.
	     */
	    _startSave: function() {
	      this._opSetQueue.push({});
	    },
	
	    /**
	     * Called when a save fails because of an error. Any changes that were part
	     * of the save need to be merged with changes made after the save. This
	     * might throw an exception is you do conflicting operations. For example,
	     * if you do:
	     *   object.set("foo", "bar");
	     *   object.set("invalid field name", "baz");
	     *   object.save();
	     *   object.increment("foo");
	     * then this will throw when the save fails and the client tries to merge
	     * "bar" with the +1.
	     */
	    _cancelSave: function() {
	      var self = this;
	      var failedChanges = _.first(this._opSetQueue);
	      this._opSetQueue = _.rest(this._opSetQueue);
	      var nextChanges = _.first(this._opSetQueue);
	      Parse._objectEach(failedChanges, function(op, key) {
	        var op1 = failedChanges[key];
	        var op2 = nextChanges[key];
	        if (op1 && op2) {
	          nextChanges[key] = op2._mergeWithPrevious(op1);
	        } else if (op1) {
	          nextChanges[key] = op1;
	        }
	      });
	      this._saving = this._saving - 1;
	    },
	
	    /**
	     * Called when a save completes successfully. This merges the changes that
	     * were saved into the known server data, and overrides it with any data
	     * sent directly from the server.
	     */
	    _finishSave: function(serverData) {
	      // Grab a copy of any object referenced by this object. These instances
	      // may have already been fetched, and we don't want to lose their data.
	      // Note that doing it like this means we will unify separate copies of the
	      // same object, but that's a risk we have to take.
	      var fetchedObjects = {};
	      Parse._traverse(this.attributes, function(object) {
	        if (object instanceof Parse.Object && object.id && object._hasData) {
	          fetchedObjects[object.id] = object;
	        }
	      });
	
	      var savedChanges = _.first(this._opSetQueue);
	      this._opSetQueue = _.rest(this._opSetQueue);
	      this._applyOpSet(savedChanges, this._serverData);
	      this._mergeMagicFields(serverData);
	      var self = this;
	      Parse._objectEach(serverData, function(value, key) {
	        self._serverData[key] = Parse._decode(key, value);
	
	        // Look for any objects that might have become unfetched and fix them
	        // by replacing their values with the previously observed values.
	        var fetched = Parse._traverse(self._serverData[key], function(object) {
	          if (object instanceof Parse.Object && fetchedObjects[object.id]) {
	            return fetchedObjects[object.id];
	          }
	        });
	        if (fetched) {
	          self._serverData[key] = fetched;
	        }
	      });
	      this._rebuildAllEstimatedData();
	      this._saving = this._saving - 1;
	    },
	
	    /**
	     * Called when a fetch or login is complete to set the known server data to
	     * the given object.
	     */
	    _finishFetch: function(serverData, hasData) {
	      // TODO (bklimt): Revisit clearing operations, perhaps move to revert.
	      this._opSetQueue = [{}];
	
	      // Bring in all the new server data.
	      this._mergeMagicFields(serverData);
	      this._copyServerData(serverData);
	
	      this._hasData = hasData;
	    },
	
	    /**
	     * Applies the set of Parse.Op in opSet to the object target.
	     */
	    _applyOpSet: function(opSet, target) {
	      var self = this;
	      Parse._objectEach(opSet, function(change, key) {
	        target[key] = change._estimate(target[key], self, key);
	        if (target[key] === Parse.Op._UNSET) {
	          delete target[key];
	        }
	      });
	    },
	
	    /**
	     * Replaces the cached value for key with the current value.
	     * Returns true if the new value is different than the old value.
	     */
	    _resetCacheForKey: function(key) {
	      var value = this.attributes[key];
	      if (_.isObject(value) &&
	          !(value instanceof Parse.Object) &&
	          !(value instanceof Parse.File)) {
	        value = value.toJSON ? value.toJSON() : value;
	        var json = JSON.stringify(value);
	        if (this._hashedJSON[key] !== json) {
	          var wasSet = !!this._hashedJSON[key];
	          this._hashedJSON[key] = json;
	          return wasSet;
	        }
	      }
	      return false;
	    },
	
	    /**
	     * Populates attributes[key] by starting with the last known data from the
	     * server, and applying all of the local changes that have been made to that
	     * key since then.
	     */
	    _rebuildEstimatedDataForKey: function(key) {
	      var self = this;
	      delete this.attributes[key];
	      if (this._serverData[key]) {
	        this.attributes[key] = this._serverData[key];
	      }
	      Parse._arrayEach(this._opSetQueue, function(opSet) {
	        var op = opSet[key];
	        if (op) {
	          self.attributes[key] = op._estimate(self.attributes[key], self, key);
	          if (self.attributes[key] === Parse.Op._UNSET) {
	            delete self.attributes[key];
	          } else {
	            self._resetCacheForKey(key);
	          }
	        }
	      });
	    },
	
	    /**
	     * Populates attributes by starting with the last known data from the
	     * server, and applying all of the local changes that have been made since
	     * then.
	     */
	    _rebuildAllEstimatedData: function() {
	      var self = this;
	
	      var previousAttributes = _.clone(this.attributes);
	
	      this.attributes = _.clone(this._serverData);
	      Parse._arrayEach(this._opSetQueue, function(opSet) {
	        self._applyOpSet(opSet, self.attributes);
	        Parse._objectEach(opSet, function(op, key) {
	          self._resetCacheForKey(key);
	        });
	      });
	
	      // Trigger change events for anything that changed because of the fetch.
	      Parse._objectEach(previousAttributes, function(oldValue, key) {
	        if (self.attributes[key] !== oldValue) {
	          self.trigger('change:' + key, self, self.attributes[key], {});
	        }
	      });
	      Parse._objectEach(this.attributes, function(newValue, key) {
	        if (!_.has(previousAttributes, key)) {
	          self.trigger('change:' + key, self, newValue, {});
	        }
	      });
	    },
	
	    /**
	     * Sets a hash of model attributes on the object, firing
	     * <code>"change"</code> unless you choose to silence it.
	     *
	     * <p>You can call it with an object containing keys and values, or with one
	     * key and value.  For example:<pre>
	     *   gameTurn.set({
	     *     player: player1,
	     *     diceRoll: 2
	     *   }, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("currentPlayer", player2, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("finished", true);</pre></p>
	     *
	     * @param {String} key The key to set.
	     * @param {} value The value to give it.
	     * @param {Object} options A set of Backbone-like options for the set.
	     *     The only supported options are <code>silent</code>,
	     *     <code>error</code>, and <code>promise</code>.
	     * @return {Boolean} true if the set succeeded.
	     * @see Parse.Object#validate
	     * @see Parse.Error
	     */
	    set: function(key, value, options) {
	      var attrs, attr;
	      if (_.isObject(key) || Parse._isNullOrUndefined(key)) {
	        attrs = key;
	        Parse._objectEach(attrs, function(v, k) {
	          attrs[k] = Parse._decode(k, v);
	        });
	        options = value;
	      } else {
	        attrs = {};
	        attrs[key] = Parse._decode(key, value);
	      }
	
	      // Extract attributes and options.
	      options = options || {};
	      if (!attrs) {
	        return this;
	      }
	      if (attrs instanceof Parse.Object) {
	        attrs = attrs.attributes;
	      }
	
	      var self = this;
	      Parse._objectEach(attrs, function(unused_value, key) {
	        if (self.constructor.readOnlyAttributes &&
	          self.constructor.readOnlyAttributes[key]) {
	          throw new Error('Cannot modify readonly key: ' + key);
	        }
	      });
	
	      // If the unset option is used, every attribute should be a Unset.
	      if (options.unset) {
	        Parse._objectEach(attrs, function(unused_value, key) {
	          attrs[key] = new Parse.Op.Unset();
	        });
	      }
	
	      // Apply all the attributes to get the estimated values.
	      var dataToValidate = _.clone(attrs);
	      Parse._objectEach(dataToValidate, function(value, key) {
	        if (value instanceof Parse.Op) {
	          dataToValidate[key] = value._estimate(self.attributes[key],
	                                                self, key);
	          if (dataToValidate[key] === Parse.Op._UNSET) {
	            delete dataToValidate[key];
	          }
	        }
	      });
	
	      // Run validation.
	      if (!this._validate(attrs, options)) {
	        return false;
	      }
	
	      this._mergeMagicFields(attrs);
	
	      options.changes = {};
	      var escaped = this._escapedAttributes;
	      var prev = this._previousAttributes || {};
	
	      // Update attributes.
	      Parse._arrayEach(_.keys(attrs), function(attr) {
	        var val = attrs[attr];
	
	        // If this is a relation object we need to set the parent correctly,
	        // since the location where it was parsed does not have access to
	        // this object.
	        if (val instanceof Parse.Relation) {
	          val.parent = self;
	        }
	
	        if (!(val instanceof Parse.Op)) {
	          val = new Parse.Op.Set(val);
	        }
	
	        // See if this change will actually have any effect.
	        var isRealChange = true;
	        if (val instanceof Parse.Op.Set &&
	            _.isEqual(self.attributes[attr], val.value)) {
	          isRealChange = false;
	        }
	
	        if (isRealChange) {
	          delete escaped[attr];
	          if (options.silent) {
	            self._silent[attr] = true;
	          } else {
	            options.changes[attr] = true;
	          }
	        }
	
	        var currentChanges = _.last(self._opSetQueue);
	        currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);
	        self._rebuildEstimatedDataForKey(attr);
	
	        if (isRealChange) {
	          self.changed[attr] = self.attributes[attr];
	          if (!options.silent) {
	            self._pending[attr] = true;
	          }
	        } else {
	          delete self.changed[attr];
	          delete self._pending[attr];
	        }
	      });
	
	      if (!options.silent) {
	        this.change(options);
	      }
	      return this;
	    },
	
	    /**
	     * Remove an attribute from the model, firing <code>"change"</code> unless
	     * you choose to silence it. This is a noop if the attribute doesn't
	     * exist.
	     */
	    unset: function(attr, options) {
	      options = options || {};
	      options.unset = true;
	      return this.set(attr, null, options);
	    },
	
	    /**
	     * Atomically increments the value of the given attribute the next time the
	     * object is saved. If no amount is specified, 1 is used by default.
	     *
	     * @param attr {String} The key.
	     * @param amount {Number} The amount to increment by.
	     */
	    increment: function(attr, amount) {
	      if (_.isUndefined(amount) || _.isNull(amount)) {
	        amount = 1;
	      }
	      return this.set(attr, new Parse.Op.Increment(amount));
	    },
	
	    /**
	     * Atomically add an object to the end of the array associated with a given
	     * key.
	     * @param attr {String} The key.
	     * @param item {} The item to add.
	     */
	    add: function(attr, item) {
	      return this.set(attr, new Parse.Op.Add([item]));
	    },
	
	    /**
	     * Atomically add an object to the array associated with a given key, only
	     * if it is not already present in the array. The position of the insert is
	     * not guaranteed.
	     *
	     * @param attr {String} The key.
	     * @param item {} The object to add.
	     */
	    addUnique: function(attr, item) {
	      return this.set(attr, new Parse.Op.AddUnique([item]));
	    },
	
	    /**
	     * Atomically remove all instances of an object from the array associated
	     * with a given key.
	     *
	     * @param attr {String} The key.
	     * @param item {} The object to remove.
	     */
	    remove: function(attr, item) {
	      return this.set(attr, new Parse.Op.Remove([item]));
	    },
	
	    /**
	     * Returns an instance of a subclass of Parse.Op describing what kind of
	     * modification has been performed on this field since the last time it was
	     * saved. For example, after calling object.increment("x"), calling
	     * object.op("x") would return an instance of Parse.Op.Increment.
	     *
	     * @param attr {String} The key.
	     * @returns {Parse.Op} The operation, or undefined if none.
	     */
	    op: function(attr) {
	      return _.last(this._opSetQueue)[attr];
	    },
	
	    /**
	     * Clear all attributes on the model, firing <code>"change"</code> unless
	     * you choose to silence it.
	     */
	    clear: function(options) {
	      options = options || {};
	      options.unset = true;
	      var keysToClear = _.extend(this.attributes, this._operations);
	      return this.set(keysToClear, options);
	    },
	
	    /**
	     * Returns a JSON-encoded set of operations to be sent with the next save
	     * request.
	     */
	    _getSaveJSON: function() {
	      var json = _.clone(_.first(this._opSetQueue));
	      Parse._objectEach(json, function(op, key) {
	        json[key] = op.toJSON();
	      });
	      return json;
	    },
	
	    /**
	     * Returns true if this object can be serialized for saving.
	     */
	    _canBeSerialized: function() {
	      return Parse.Object._canBeSerializedAsValue(this.attributes);
	    },
	
	    /**
	     * Fetch the model from the server. If the server's representation of the
	     * model differs from its current attributes, they will be overriden,
	     * triggering a <code>"change"</code> event.
	     *
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the fetch
	     *     completes.
	     */
	    fetch: function(options) {
	      var self = this;
	      options = options || {};
	      var request = Parse._request({
	        method: 'GET',
	        route: "classes",
	        className: this.className,
	        objectId: this.id,
	        useMasterKey: options.useMasterKey,
	        sessionToken: options.sessionToken
	      });
	      return request.then(function(response, status, xhr) {
	        self._finishFetch(self.parse(response, status, xhr), true);
	        return self;
	      })._thenRunCallbacks(options, this);
	    },
	
	    /**
	     * Set a hash of model attributes, and save the model to the server.
	     * updatedAt will be updated when the request returns.
	     * You can either call it as:<pre>
	     *   object.save();</pre>
	     * or<pre>
	     *   object.save(null, options);</pre>
	     * or<pre>
	     *   object.save(attrs, options);</pre>
	     * or<pre>
	     *   object.save(key, value, options);</pre>
	     *
	     * For example, <pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }, {
	     *     success: function(gameTurnAgain) {
	     *       // The save was successful.
	     *     },
	     *     error: function(gameTurnAgain, error) {
	     *       // The save failed.  Error is an instance of Parse.Error.
	     *     }
	     *   });</pre>
	     * or with promises:<pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }).then(function(gameTurnAgain) {
	     *     // The save was successful.
	     *   }, function(error) {
	     *     // The save failed.  Error is an instance of Parse.Error.
	     *   });</pre>
	     *
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>wait: Set to true to wait for the server to confirm a successful
	     *   save before modifying the attributes on the object.
	     *   <li>silent: Set to true to avoid firing the `set` event.
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the save
	     *     completes.
	     * @see Parse.Error
	     */
	    save: function(arg1, arg2, arg3) {
	      var i, attrs, current, options, saved;
	      if (_.isObject(arg1) || Parse._isNullOrUndefined(arg1)) {
	        attrs = arg1;
	        options = arg2;
	      } else {
	        attrs = {};
	        attrs[arg1] = arg2;
	        options = arg3;
	      }
	
	      // Make save({ success: function() {} }) work.
	      if (!options && attrs) {
	        var extra_keys = _.reject(attrs, function(value, key) {
	          return _.include(["success", "error", "wait"], key);
	        });
	        if (extra_keys.length === 0) {
	          var all_functions = true;
	          if (_.has(attrs, "success") && !_.isFunction(attrs.success)) {
	            all_functions = false;
	          }
	          if (_.has(attrs, "error") && !_.isFunction(attrs.error)) {
	            all_functions = false;
	          }
	          if (all_functions) {
	            // This attrs object looks like it's really an options object,
	            // and there's no other options object, so let's just use it.
	            return this.save(null, attrs);
	          }
	        }
	      }
	
	      options = _.clone(options) || {};
	      if (options.wait) {
	        current = _.clone(this.attributes);
	      }
	
	      var setOptions = _.clone(options) || {};
	      if (setOptions.wait) {
	        setOptions.silent = true;
	      }
	      var setError;
	      setOptions.error = function(model, error) {
	        setError = error;
	      };
	      if (attrs && !this.set(attrs, setOptions)) {
	        return Parse.Promise.error(setError)._thenRunCallbacks(options, this);
	      }
	
	      var model = this;
	
	      // If there is any unsaved child, save it first.
	      model._refreshCache();
	
	      // TODO(klimt): Refactor this so that the save starts now, not later.
	
	      var unsavedChildren = [];
	      var unsavedFiles = [];
	      Parse.Object._findUnsavedChildren(model.attributes,
	                                        unsavedChildren,
	                                        unsavedFiles);
	      if (unsavedChildren.length + unsavedFiles.length > 0) {
	        return Parse.Object._deepSaveAsync(this.attributes, {
	          useMasterKey: options.useMasterKey,
	          sessionToken: options.sessionToken
	        }).then(function() {
	          return model.save(null, options);
	        }, function(error) {
	          return Parse.Promise.error(error)._thenRunCallbacks(options, model);
	        });
	      }
	
	      this._startSave();
	      this._saving = (this._saving || 0) + 1;
	
	      this._allPreviousSaves = this._allPreviousSaves || Parse.Promise.as();
	      this._allPreviousSaves = this._allPreviousSaves._continueWith(function() {
	        var method = model.id ? 'PUT' : 'POST';
	
	        var json = model._getSaveJSON();
	
	        var route = "classes";
	        var className = model.className;
	        if (model.className === "_User" && !model.id) {
	          // Special-case user sign-up.
	          route = "users";
	          className = null;
	        }
	        var request = Parse._request({
	          route: route,
	          className: className,
	          objectId: model.id,
	          method: method,
	          useMasterKey: options.useMasterKey,
	          sessionToken: options.sessionToken,
	          data: json
	        });
	
	        request = request.then(function(resp, status, xhr) {
	          var serverAttrs = model.parse(resp, status, xhr);
	          if (options.wait) {
	            serverAttrs = _.extend(attrs || {}, serverAttrs);
	          }
	          model._finishSave(serverAttrs);
	          if (options.wait) {
	            model.set(current, setOptions);
	          }
	          return model;
	
	        }, function(error) {
	          model._cancelSave();
	          return Parse.Promise.error(error);
	
	        })._thenRunCallbacks(options, model);
	
	        return request;
	      });
	      return this._allPreviousSaves;
	    },
	
	    /**
	     * Destroy this model on the server if it was already persisted.
	     * Optimistically removes the model from its collection, if it has one.
	     * If `wait: true` is passed, waits for the server to respond
	     * before removal.
	     *
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>wait: Set to true to wait for the server to confirm successful
	     *   deletion of the object before triggering the `destroy` event.
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the destroy
	     *     completes.
	     */
	    destroy: function(options) {
	      options = options || {};
	      var model = this;
	
	      var triggerDestroy = function() {
	        model.trigger('destroy', model, model.collection, options);
	      };
	
	      if (!this.id) {
	        return triggerDestroy();
	      }
	
	      if (!options.wait) {
	        triggerDestroy();
	      }
	
	      var request = Parse._request({
	        route: "classes",
	        className: this.className,
	        objectId: this.id,
	        method: 'DELETE',
	        useMasterKey: options.useMasterKey,
	        sessionToken: options.sessionToken
	      });
	      return request.then(function() {
	        if (options.wait) {
	          triggerDestroy();
	        }
	        return model;
	      })._thenRunCallbacks(options, this);
	    },
	
	    /**
	     * Converts a response into the hash of attributes to be set on the model.
	     * @ignore
	     */
	    parse: function(resp, status, xhr) {
	      var output = _.clone(resp);
	      _(["createdAt", "updatedAt"]).each(function(key) {
	        if (output[key]) {
	          output[key] = Parse._parseDate(output[key]);
	        }
	      });
	      if (!output.updatedAt) {
	        output.updatedAt = output.createdAt;
	      }
	      if (status) {
	        this._existed = (status !== 201);
	      }
	      return output;
	    },
	
	    /**
	     * Creates a new model with identical attributes to this one.
	     * @return {Parse.Object}
	     */
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },
	
	    /**
	     * Returns true if this object has never been saved to Parse.
	     * @return {Boolean}
	     */
	    isNew: function() {
	      return !this.id;
	    },
	
	    /**
	     * Call this method to manually fire a `"change"` event for this model and
	     * a `"change:attribute"` event for each changed attribute.
	     * Calling this will cause all objects observing the model to update.
	     */
	    change: function(options) {
	      options = options || {};
	      var changing = this._changing;
	      this._changing = true;
	
	      // Silent changes become pending changes.
	      var self = this;
	      Parse._objectEach(this._silent, function(attr) {
	        self._pending[attr] = true;
	      });
	
	      // Silent changes are triggered.
	      var changes = _.extend({}, options.changes, this._silent);
	      this._silent = {};
	      Parse._objectEach(changes, function(unused_value, attr) {
	        self.trigger('change:' + attr, self, self.get(attr), options);
	      });
	      if (changing) {
	        return this;
	      }
	
	      // This is to get around lint not letting us make a function in a loop.
	      var deleteChanged = function(value, attr) {
	        if (!self._pending[attr] && !self._silent[attr]) {
	          delete self.changed[attr];
	        }
	      };
	
	      // Continue firing `"change"` events while there are pending changes.
	      while (!_.isEmpty(this._pending)) {
	        this._pending = {};
	        this.trigger('change', this, options);
	        // Pending and silent changes still remain.
	        Parse._objectEach(this.changed, deleteChanged);
	        self._previousAttributes = _.clone(this.attributes);
	      }
	
	      this._changing = false;
	      return this;
	    },
	
	    /**
	     * Returns true if this object was created by the Parse server when the
	     * object might have already been there (e.g. in the case of a Facebook
	     * login)
	     */
	    existed: function() {
	      return this._existed;
	    },
	
	    /**
	     * Determine if the model has changed since the last <code>"change"</code>
	     * event.  If you specify an attribute name, determine if that attribute
	     * has changed.
	     * @param {String} attr Optional attribute name
	     * @return {Boolean}
	     */
	    hasChanged: function(attr) {
	      if (!arguments.length) {
	        return !_.isEmpty(this.changed);
	      }
	      return this.changed && _.has(this.changed, attr);
	    },
	
	    /**
	     * Returns an object containing all the attributes that have changed, or
	     * false if there are no changed attributes. Useful for determining what
	     * parts of a view need to be updated and/or what attributes need to be
	     * persisted to the server. Unset attributes will be set to undefined.
	     * You can also pass an attributes object to diff against the model,
	     * determining if there *would be* a change.
	     */
	    changedAttributes: function(diff) {
	      if (!diff) {
	        return this.hasChanged() ? _.clone(this.changed) : false;
	      }
	      var changed = {};
	      var old = this._previousAttributes;
	      Parse._objectEach(diff, function(diffVal, attr) {
	        if (!_.isEqual(old[attr], diffVal)) {
	          changed[attr] = diffVal;
	        }
	      });
	      return changed;
	    },
	
	    /**
	     * Gets the previous value of an attribute, recorded at the time the last
	     * <code>"change"</code> event was fired.
	     * @param {String} attr Name of the attribute to get.
	     */
	    previous: function(attr) {
	      if (!arguments.length || !this._previousAttributes) {
	        return null;
	      }
	      return this._previousAttributes[attr];
	    },
	
	    /**
	     * Gets all of the attributes of the model at the time of the previous
	     * <code>"change"</code> event.
	     * @return {Object}
	     */
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },
	
	    /**
	     * Checks if the model is currently in a valid state. It's only possible to
	     * get into an *invalid* state if you're using silent changes.
	     * @return {Boolean}
	     */
	    isValid: function() {
	      return !this.validate(this.attributes);
	    },
	
	    /**
	     * You should not call this function directly unless you subclass
	     * <code>Parse.Object</code>, in which case you can override this method
	     * to provide additional validation on <code>set</code> and
	     * <code>save</code>.  Your implementation should return
	     *
	     * @param {Object} attrs The current data to validate.
	     * @param {Object} options A Backbone-like options object.
	     * @return {} False if the data is valid.  An error object otherwise.
	     * @see Parse.Object#set
	     */
	    validate: function(attrs, options) {
	      if (_.has(attrs, "ACL") && !(attrs.ACL instanceof Parse.ACL)) {
	        return new Parse.Error(Parse.Error.OTHER_CAUSE,
	                               "ACL must be a Parse.ACL.");
	      }
	      var correct = true;
	      Parse._objectEach(attrs, function(unused_value, key) {
	        if (!(/^[A-Za-z][0-9A-Za-z_]*$/).test(key)) {
	          correct = false;
	        }
	      });
	      if (!correct) {
	        return new Parse.Error(Parse.Error.INVALID_KEY_NAME);
	      }
	      return false;
	    },
	
	    /**
	     * Run validation against a set of incoming attributes, returning `true`
	     * if all is well. If a specific `error` callback has been passed,
	     * call that instead of firing the general `"error"` event.
	     */
	    _validate: function(attrs, options) {
	      if (options.silent || !this.validate) {
	        return true;
	      }
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validate(attrs, options);
	      if (!error) {
	        return true;
	      }
	      if (options && options.error) {
	        options.error(this, error, options);
	      } else {
	        this.trigger('error', this, error, options);
	      }
	      return false;
	    },
	
	    /**
	     * Returns the ACL for this object.
	     * @returns {Parse.ACL} An instance of Parse.ACL.
	     * @see Parse.Object#get
	     */
	    getACL: function() {
	      return this.get("ACL");
	    },
	
	    /**
	     * Sets the ACL to be used for this object.
	     * @param {Parse.ACL} acl An instance of Parse.ACL.
	     * @param {Object} options Optional Backbone-like options object to be
	     *     passed in to set.
	     * @return {Boolean} Whether the set passed validation.
	     * @see Parse.Object#set
	     */
	    setACL: function(acl, options) {
	      return this.set("ACL", acl, options);
	    }
	
	  });
	
	  /**
	   * Returns the appropriate subclass for making new instances of the given
	   * className string.
	   */
	  Parse.Object._getSubclass = function(className) {
	    if (!_.isString(className)) {
	      throw "Parse.Object._getSubclass requires a string argument.";
	    }
	    var ObjectClass = Parse.Object._classMap[className];
	    if (!ObjectClass) {
	      ObjectClass = Parse.Object.extend(className);
	      Parse.Object._classMap[className] = ObjectClass;
	    }
	    return ObjectClass;
	  };
	
	  /**
	   * Creates an instance of a subclass of Parse.Object for the given classname.
	   */
	  Parse.Object._create = function(className, attributes, options) {
	    var ObjectClass = Parse.Object._getSubclass(className);
	    return new ObjectClass(attributes, options);
	  };
	
	  /**
	   * Returns a list of object ids given a list of objects.
	   */
	  Parse.Object._toObjectIdArray = function(list, omitObjectsWithData) {
	    if (list.length === 0) {
	      return Parse.Promise.as(list);
	    }
	
	    var error;
	    var className = list[0].className;
	    var objectIds = [];
	    for (var i = 0; i < list.length; i++) {
	      var object = list[i];
	      if (className !== object.className) {
	        error = new Parse.Error(Parse.Error.INVALID_CLASS_NAME,
	                                "All objects should be of the same class");
	        return Parse.Promise.error(error);
	      } else if (!object.id) {
	        error = new Parse.Error(Parse.Error.MISSING_OBJECT_ID,
	                                "All objects must have an ID");
	        return Parse.Promise.error(error);
	      } else if (omitObjectsWithData && object._hasData) {
	        continue;
	      }
	      objectIds.push(object.id);
	    }
	
	    return Parse.Promise.as(objectIds);
	  };
	
	  /**
	   * Updates a list of objects with fetched results.
	   */
	  Parse.Object._updateWithFetchedResults = function(list, fetched, forceFetch) {
	    var fetchedObjectsById = {};
	    Parse._arrayEach(fetched, function(object, i) {
	      fetchedObjectsById[object.id] = object;
	    });
	
	    for (var i = 0; i < list.length; i++) {
	      var object = list[i];
	      var fetchedObject = fetchedObjectsById[object.id];
	      if (!fetchedObject && forceFetch) {
	        var error = new Parse.Error(Parse.Error.OBJECT_NOT_FOUND,
	                                "All objects must exist on the server");
	        return Parse.Promise.error(error);
	      }
	
	      object._mergeFromObject(fetchedObject);
	    }
	
	    return Parse.Promise.as(list);
	  };
	
	  /**
	   * Fetches the objects given in list.  The forceFetch option will fetch all
	   * objects if true and ignore objects with data if false.
	   */
	  Parse.Object._fetchAll = function(list, forceFetch) {
	    if (list.length === 0) {
	      return Parse.Promise.as(list);
	    }
	
	    var omitObjectsWithData = !forceFetch;
	    return Parse.Object._toObjectIdArray(
	      list,
	      omitObjectsWithData
	    ).then(function(objectIds) {
	      var className = list[0].className;
	      var query = new Parse.Query(className);
	      query.containedIn("objectId", objectIds);
	      query.limit = objectIds.length;
	      return query.find();
	    }).then(function(results) {
	      return Parse.Object._updateWithFetchedResults(
	        list,
	        results,
	        forceFetch
	      );
	    });
	  };
	
	  // Set up a map of className to class so that we can create new instances of
	  // Parse Objects from JSON automatically.
	  Parse.Object._classMap = {};
	
	  Parse.Object._extend = Parse._extend;
	
	  /**
	   * Creates a new subclass of Parse.Object for the given Parse class name.
	   *
	   * <p>Every extension of a Parse class will inherit from the most recent
	   * previous extension of that class. When a Parse.Object is automatically
	   * created by parsing JSON, it will use the most recent extension of that
	   * class.</p>
	   *
	   * <p>You should call either:<pre>
	   *     var MyClass = Parse.Object.extend("MyClass", {
	   *         <i>Instance methods</i>,
	   *         initialize: function(attrs, options) {
	   *             this.someInstanceProperty = [],
	   *             <i>Other instance properties</i>
	   *         }
	   *     }, {
	   *         <i>Class properties</i>
	   *     });</pre>
	   * or, for Backbone compatibility:<pre>
	   *     var MyClass = Parse.Object.extend({
	   *         className: "MyClass",
	   *         <i>Instance methods</i>,
	   *         initialize: function(attrs, options) {
	   *             this.someInstanceProperty = [],
	   *             <i>Other instance properties</i>
	   *         }
	   *     }, {
	   *         <i>Class properties</i>
	   *     });</pre></p>
	   *
	   * @param {String} className The name of the Parse class backing this model.
	   * @param {Object} protoProps Instance properties to add to instances of the
	   *     class returned from this method.
	   * @param {Object} classProps Class properties to add the class returned from
	   *     this method.
	   * @return {Class} A new subclass of Parse.Object.
	   */
	  Parse.Object.extend = function(className, protoProps, classProps) {
	    // Handle the case with only two args.
	    if (!_.isString(className)) {
	      if (className && _.has(className, "className")) {
	        return Parse.Object.extend(className.className, className, protoProps);
	      } else {
	        throw new Error(
	            "Parse.Object.extend's first argument should be the className.");
	      }
	    }
	
	    // If someone tries to subclass "User", coerce it to the right type.
	    if (className === "User" && Parse.User._performUserRewrite) {
	      className = "_User";
	    }
	    protoProps = protoProps || {};
	    protoProps.className = className;
	
	    var NewClassObject = null;
	    if (_.has(Parse.Object._classMap, className)) {
	      var OldClassObject = Parse.Object._classMap[className];
	      // This new subclass has been told to extend both from "this" and from
	      // OldClassObject. This is multiple inheritance, which isn't supported.
	      // For now, let's just pick one.
	      NewClassObject = OldClassObject._extend(protoProps, classProps);
	    } else {
	      NewClassObject = this._extend(protoProps, classProps);
	    }
	    // Extending a subclass should reuse the classname automatically.
	    NewClassObject.extend = function(arg0) {
	      if (_.isString(arg0) || (arg0 && _.has(arg0, "className"))) {
	        return Parse.Object.extend.apply(NewClassObject, arguments);
	      }
	      var newArguments = [className].concat(Parse._.toArray(arguments));
	      return Parse.Object.extend.apply(NewClassObject, newArguments);
	    };
	
	    /**
	     * Creates a reference to a subclass of Parse.Object with the given id. This
	     * does not exist on Parse.Object, only on subclasses.
	     *
	     * <p>A shortcut for: <pre>
	     *  var Foo = Parse.Object.extend("Foo");
	     *  var pointerToFoo = new Foo();
	     *  pointerToFoo.id = "myObjectId";
	     * </pre>
	     *
	     * @name createWithoutData
	     * @param {String} id The ID of the object to create a reference to.
	     * @return {Parse.Object} A Parse.Object reference.
	     * @function
	     * @memberOf Parse.Object
	     */
	    NewClassObject.createWithoutData = function(id) {
	      var obj = new NewClassObject();
	      obj.id = id;
	      return obj;
	    };
	
	    Parse.Object._classMap[className] = NewClassObject;
	    return NewClassObject;
	  };
	
	  Parse.Object._findUnsavedChildren = function(object, children, files) {
	    Parse._traverse(object, function(object) {
	      if (object instanceof Parse.Object) {
	        object._refreshCache();
	        if (object.dirty()) {
	          children.push(object);
	        }
	        return;
	      }
	
	      if (object instanceof Parse.File) {
	        if (!object.url()) {
	          files.push(object);
	        }
	        return;
	      }
	    });
	  };
	
	  Parse.Object._canBeSerializedAsValue = function(object) {
	    // TODO(klimt): We should rewrite _traverse so that it can be used here.
	    if (object instanceof Parse.Object) {
	      return !!object.id;
	    }
	    if (object instanceof Parse.File) {
	      // Don't recurse indefinitely into files.
	      return true;
	    }
	
	    var canBeSerializedAsValue = true;
	
	    if (_.isArray(object)) {
	      Parse._arrayEach(object, function(child) {
	        if (!Parse.Object._canBeSerializedAsValue(child)) {
	          canBeSerializedAsValue = false;
	        }
	      });
	    } else if (_.isObject(object)) {
	      Parse._objectEach(object, function(child) {
	        if (!Parse.Object._canBeSerializedAsValue(child)) {
	          canBeSerializedAsValue = false;
	        }
	      });
	    }
	    return canBeSerializedAsValue;
	  };
	
	  /**
	   * @param {Object} object The root object.
	   * @param {Object} options: The only valid option is useMasterKey.
	   */
	  Parse.Object._deepSaveAsync = function(object, options) {
	    var unsavedChildren = [];
	    var unsavedFiles = [];
	    Parse.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);
	
	    var promise = Parse.Promise.as();
	    _.each(unsavedFiles, function(file) {
	      promise = promise.then(function() {
	        return file.save(options);
	      });
	    });
	
	    var objects = _.uniq(unsavedChildren);
	    var remaining = _.uniq(objects);
	
	    return promise.then(function() {
	      return Parse.Promise._continueWhile(function() {
	        return remaining.length > 0;
	      }, function() {
	
	        // Gather up all the objects that can be saved in this batch.
	        var batch = [];
	        var newRemaining = [];
	        Parse._arrayEach(remaining, function(object) {
	          // Limit batches to 20 objects.
	          if (batch.length > 20) {
	            newRemaining.push(object);
	            return;
	          }
	
	          if (object._canBeSerialized()) {
	            batch.push(object);
	          } else {
	            newRemaining.push(object);
	          }
	        });
	        remaining = newRemaining;
	
	        // If we can't save any objects, there must be a circular reference.
	        if (batch.length === 0) {
	          return Parse.Promise.error(
	            new Parse.Error(Parse.Error.OTHER_CAUSE,
	                            "Tried to save a batch with a cycle."));
	        }
	
	        // Reserve a spot in every object's save queue.
	        var readyToStart = Parse.Promise.when(_.map(batch, function(object) {
	          return object._allPreviousSaves || Parse.Promise.as();
	        }));
	        var batchFinished = new Parse.Promise();
	        Parse._arrayEach(batch, function(object) {
	          object._allPreviousSaves = batchFinished;
	        });
	
	        // Save a single batch, whether previous saves succeeded or failed.
	        return readyToStart._continueWith(function() {
	          return Parse._request({
	            route: "batch",
	            method: "POST",
	            useMasterKey: options.useMasterKey,
	            sessionToken: options.sessionToken,
	            data: {
	              requests: _.map(batch, function(object) {
	                var json = object._getSaveJSON();
	                var method = "POST";
	
	                var path = "/1/classes/" + object.className;
	                if (object.id) {
	                  path = path + "/" + object.id;
	                  method = "PUT";
	                }
	
	                object._startSave();
	
	                return {
	                  method: method,
	                  path: path,
	                  body: json
	                };
	              })
	            }
	          }).then(function(response, status, xhr) {
	            var error;
	            Parse._arrayEach(batch, function(object, i) {
	              if (response[i].success) {
	                object._finishSave(
	                  object.parse(response[i].success, status, xhr));
	              } else {
	                error = error || response[i].error;
	                object._cancelSave();
	              }
	            });
	            if (error) {
	              return Parse.Promise.error(
	                new Parse.Error(error.code, error.error));
	            }
	
	          }).then(function(results) {
	            batchFinished.resolve(results);
	            return results;
	          }, function(error) {
	            batchFinished.reject(error);
	            return Parse.Promise.error(error);
	          });
	        });
	      });
	    }).then(function() {
	      return object;
	    });
	  };
	
	}(this));
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Represents a Role on the Parse server. Roles represent groupings of
	   * Users for the purposes of granting permissions (e.g. specifying an ACL
	   * for an Object). Roles are specified by their sets of child users and
	   * child roles, all of which are granted any permissions that the parent
	   * role has.
	   *
	   * <p>Roles must have a name (which cannot be changed after creation of the
	   * role), and must specify an ACL.</p>
	   * @class
	   * A Parse.Role is a local representation of a role persisted to the Parse
	   * cloud.
	   */
	  Parse.Role = Parse.Object.extend("_Role", /** @lends Parse.Role.prototype */ {
	    // Instance Methods
	    
	    /**
	     * Constructs a new ParseRole with the given name and ACL.
	     * 
	     * @param {String} name The name of the Role to create.
	     * @param {Parse.ACL} acl The ACL for this role. Roles must have an ACL.
	     */
	    constructor: function(name, acl) {
	      if (_.isString(name) && (acl instanceof Parse.ACL)) {
	        Parse.Object.prototype.constructor.call(this, null, null);
	        this.setName(name);
	        this.setACL(acl);
	      } else {
	        Parse.Object.prototype.constructor.call(this, name, acl);
	      }
	    },
	    
	    /**
	     * Gets the name of the role.  You can alternatively call role.get("name")
	     * 
	     * @return {String} the name of the role.
	     */
	    getName: function() {
	      return this.get("name");
	    },
	    
	    /**
	     * Sets the name for a role. This value must be set before the role has
	     * been saved to the server, and cannot be set once the role has been
	     * saved.
	     * 
	     * <p>
	     *   A role's name can only contain alphanumeric characters, _, -, and
	     *   spaces.
	     * </p>
	     *
	     * <p>This is equivalent to calling role.set("name", name)</p>
	     * 
	     * @param {String} name The name of the role.
	     * @param {Object} options Standard options object with success and error
	     *     callbacks.
	     */
	    setName: function(name, options) {
	      return this.set("name", name, options);
	    },
	    
	    /**
	     * Gets the Parse.Relation for the Parse.Users that are direct
	     * children of this role. These users are granted any privileges that this
	     * role has been granted (e.g. read or write access through ACLs). You can
	     * add or remove users from the role through this relation.
	     * 
	     * <p>This is equivalent to calling role.relation("users")</p>
	     * 
	     * @return {Parse.Relation} the relation for the users belonging to this
	     *     role.
	     */
	    getUsers: function() {
	      return this.relation("users");
	    },
	    
	    /**
	     * Gets the Parse.Relation for the Parse.Roles that are direct
	     * children of this role. These roles' users are granted any privileges that
	     * this role has been granted (e.g. read or write access through ACLs). You
	     * can add or remove child roles from this role through this relation.
	     * 
	     * <p>This is equivalent to calling role.relation("roles")</p>
	     * 
	     * @return {Parse.Relation} the relation for the roles belonging to this
	     *     role.
	     */
	    getRoles: function() {
	      return this.relation("roles");
	    },
	    
	    /**
	     * @ignore
	     */
	    validate: function(attrs, options) {
	      if ("name" in attrs && attrs.name !== this.getName()) {
	        var newName = attrs.name;
	        if (this.id && this.id !== attrs.objectId) {
	          // Check to see if the objectId being set matches this.id.
	          // This happens during a fetch -- the id is set before calling fetch.
	          // Let the name be set in this case.
	          return new Parse.Error(Parse.Error.OTHER_CAUSE,
	              "A role's name can only be set before it has been saved.");
	        }
	        if (!_.isString(newName)) {
	          return new Parse.Error(Parse.Error.OTHER_CAUSE,
	              "A role's name must be a String.");
	        }
	        if (!(/^[0-9a-zA-Z\-_ ]+$/).test(newName)) {
	          return new Parse.Error(Parse.Error.OTHER_CAUSE,
	              "A role's name can only contain alphanumeric characters, _," +
	              " -, and spaces.");
	        }
	      }
	      if (Parse.Object.prototype.validate) {
	        return Parse.Object.prototype.validate.call(this, attrs, options);
	      }
	      return false;
	    }
	  });
	}(this));
	
	
	/*global _: false */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Creates a new instance with the given models and options.  Typically, you
	   * will not call this method directly, but will instead make a subclass using
	   * <code>Parse.Collection.extend</code>.
	   *
	   * @param {Array} models An array of instances of <code>Parse.Object</code>.
	   *
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are:<ul>
	   *   <li>model: The Parse.Object subclass that this collection contains.
	   *   <li>query: An instance of Parse.Query to use when fetching items.
	   *   <li>comparator: A string property name or function to sort by.
	   * </ul>
	   *
	   * @see Parse.Collection.extend
	   *
	   * @class
	   *
	   * <p>Provides a standard collection class for our sets of models, ordered
	   * or unordered.  For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#Collection">Backbone
	   * documentation</a>.</p>
	   */
	  Parse.Collection = function(models, options) {
	    options = options || {};
	    if (options.comparator) {
	      this.comparator = options.comparator;
	    }
	    if (options.model) {
	      this.model = options.model;
	    }
	    if (options.query) {
	      this.query = options.query;
	    }
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) {
	      this.reset(models, {silent: true, parse: options.parse});
	    }
	  };
	
	  // Define the Collection's inheritable methods.
	  _.extend(Parse.Collection.prototype, Parse.Events,
	      /** @lends Parse.Collection.prototype */ {
	
	    // The default model for a collection is just a Parse.Object.
	    // This should be overridden in most cases.
	    // TODO: think harder. this is likely to be weird.
	    model: Parse.Object,
	
	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function(){},
	
	    /**
	     * The JSON representation of a Collection is an array of the
	     * models' attributes.
	     */
	    toJSON: function() {
	      return this.map(function(model){ return model.toJSON(); });
	    },
	
	    /**
	     * Add a model, or list of models to the set. Pass **silent** to avoid
	     * firing the `add` event for every new model.
	     *
	     * @param {Array} models An array of instances of <code>Parse.Object</code>.
	     *
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are:<ul>
	     *   <li>at: The index at which to add the models.
	     *   <li>silent: Set to true to avoid firing the `add` event for every new
	     *   model.
	     * </ul>
	     */
	    add: function(models, options) {
	      var i, index, length, model, cid, id, cids = {}, ids = {};
	      options = options || {};
	      models = _.isArray(models) ? models.slice() : [models];
	
	      // Begin by turning bare objects into model references, and preventing
	      // invalid models or duplicate models from being added.
	      for (i = 0, length = models.length; i < length; i++) {
	        models[i] = this._prepareModel(models[i], options);
	        model = models[i];
	        if (!model) {
	          throw new Error("Can't add an invalid model to a collection");
	        }
	        cid = model.cid;
	        if (cids[cid] || this._byCid[cid]) {
	          throw new Error("Duplicate cid: can't add the same model " +
	                          "to a collection twice");
	        }
	        id = model.id;
	        if (!Parse._isNullOrUndefined(id) && (ids[id] || this._byId[id])) {
	          throw new Error("Duplicate id: can't add the same model " +
	                          "to a collection twice");
	        }
	        ids[id] = model;
	        cids[cid] = model;
	      }
	
	      // Listen to added models' events, and index models for lookup by
	      // `id` and by `cid`.
	      for (i = 0; i < length; i++) {
	        (model = models[i]).on('all', this._onModelEvent, this);
	        this._byCid[model.cid] = model;
	        if (model.id) {
	          this._byId[model.id] = model;
	        }
	      }
	
	      // Insert models into the collection, re-sorting if needed, and triggering
	      // `add` events unless silenced.
	      this.length += length;
	      index = Parse._isNullOrUndefined(options.at) ? 
	          this.models.length : options.at;
	      this.models.splice.apply(this.models, [index, 0].concat(models));
	      if (this.comparator) {
	        this.sort({silent: true});
	      }
	      if (options.silent) {
	        return this;
	      }
	      for (i = 0, length = this.models.length; i < length; i++) {
	        model = this.models[i];
	        if (cids[model.cid]) {
	          options.index = i;
	          model.trigger('add', model, this, options);
	        }
	      }
	      return this;
	    },
	
	    /**
	     * Remove a model, or a list of models from the set. Pass silent to avoid
	     * firing the <code>remove</code> event for every model removed.
	     *
	     * @param {Array} models The model or list of models to remove from the
	     *   collection.
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are: <ul>
	     *   <li>silent: Set to true to avoid firing the `remove` event.
	     * </ul>
	     */
	    remove: function(models, options) {
	      var i, l, index, model;
	      options = options || {};
	      models = _.isArray(models) ? models.slice() : [models];
	      for (i = 0, l = models.length; i < l; i++) {
	        model = this.getByCid(models[i]) || this.get(models[i]);
	        if (!model) {
	          continue;
	        }
	        delete this._byId[model.id];
	        delete this._byCid[model.cid];
	        index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	        this._removeReference(model);
	      }
	      return this;
	    },
	
	    /**
	     * Gets a model from the set by id.
	     * @param {String} id The Parse objectId identifying the Parse.Object to
	     * fetch from this collection.
	     */
	    get: function(id) {
	      return id && this._byId[id.id || id];
	    },
	
	    /**
	     * Gets a model from the set by client id.
	     * @param {} cid The Backbone collection id identifying the Parse.Object to
	     * fetch from this collection.
	     */
	    getByCid: function(cid) {
	      return cid && this._byCid[cid.cid || cid];
	    },
	
	    /**
	     * Gets the model at the given index.
	     *
	     * @param {Number} index The index of the model to return.
	     */
	    at: function(index) {
	      return this.models[index];
	    },
	
	    /**
	     * Forces the collection to re-sort itself. You don't need to call this
	     * under normal circumstances, as the set will maintain sort order as each
	     * item is added.
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are: <ul>
	     *   <li>silent: Set to true to avoid firing the `reset` event.
	     * </ul>
	     */
	    sort: function(options) {
	      options = options || {};
	      if (!this.comparator) {
	        throw new Error('Cannot sort a set without a comparator');
	      }
	      var boundComparator = _.bind(this.comparator, this);
	      if (this.comparator.length === 1) {
	        this.models = this.sortBy(boundComparator);
	      } else {
	        this.models.sort(boundComparator);
	      }
	      if (!options.silent) {
	        this.trigger('reset', this, options);
	      }
	      return this;
	    },
	
	    /**
	     * Plucks an attribute from each model in the collection.
	     * @param {String} attr The attribute to return from each model in the
	     * collection.
	     */
	    pluck: function(attr) {
	      return _.map(this.models, function(model){ return model.get(attr); });
	    },
	
	    /**
	     * When you have more items than you want to add or remove individually,
	     * you can reset the entire set with a new list of models, without firing
	     * any `add` or `remove` events. Fires `reset` when finished.
	     *
	     * @param {Array} models The model or list of models to remove from the
	     *   collection.
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are: <ul>
	     *   <li>silent: Set to true to avoid firing the `reset` event.
	     * </ul>
	     */
	    reset: function(models, options) {
	      var self = this;
	      models = models || [];
	      options = options || {};
	      Parse._arrayEach(this.models, function(model) {
	        self._removeReference(model);
	      });
	      this._reset();
	      this.add(models, {silent: true, parse: options.parse});
	      if (!options.silent) {
	        this.trigger('reset', this, options);
	      }
	      return this;
	    },
	
	    /**
	     * Fetches the default set of models for this collection, resetting the
	     * collection when they arrive. If `add: true` is passed, appends the
	     * models to the collection instead of resetting.
	     *
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are:<ul>
	     *   <li>silent: Set to true to avoid firing `add` or `reset` events for
	     *   models fetched by this fetch.
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, uses the Master Key for
	     *       this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     */
	    fetch: function(options) {
	      options = _.clone(options) || {};
	      if (options.parse === undefined) {
	        options.parse = true;
	      }
	      var collection = this;
	      var query = this.query || new Parse.Query(this.model);
	      return query.find({
	        useMasterKey: options.useMasterKey,
	        sessionToken: options.sessionToken
	      }).then(function(results) {
	        if (options.add) {
	          collection.add(results, options);
	        } else {
	          collection.reset(results, options);
	        }
	        return collection;
	      })._thenRunCallbacks(options, this);
	    },
	
	    /**
	     * Creates a new instance of a model in this collection. Add the model to
	     * the collection immediately, unless `wait: true` is passed, in which case
	     * we wait for the server to agree.
	     *
	     * @param {Parse.Object} model The new model to create and add to the
	     *   collection.
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are:<ul>
	     *   <li>wait: Set to true to wait for the server to confirm creation of the
	     *       model before adding it to the collection.
	     *   <li>silent: Set to true to avoid firing an `add` event.
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, uses the Master Key for
	     *       this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     */
	    create: function(model, options) {
	      var coll = this;
	      options = options ? _.clone(options) : {};
	      model = this._prepareModel(model, options);
	      if (!model) {
	        return false;
	      }
	      if (!options.wait) {
	        coll.add(model, options);
	      }
	      var success = options.success;
	      options.success = function(nextModel, resp, xhr) {
	        if (options.wait) {
	          coll.add(nextModel, options);
	        }
	        if (success) {
	          success(nextModel, resp);
	        } else {
	          nextModel.trigger('sync', model, resp, options);
	        }
	      };
	      model.save(null, options);
	      return model;
	    },
	
	    /**
	     * Converts a response into a list of models to be added to the collection.
	     * The default implementation is just to pass it through.
	     * @ignore
	     */
	    parse: function(resp, xhr) {
	      return resp;
	    },
	
	    /**
	     * Proxy to _'s chain. Can't be proxied the same way the rest of the
	     * underscore methods are proxied because it relies on the underscore
	     * constructor.
	     */
	    chain: function() {
	      return _(this.models).chain();
	    },
	
	    /**
	     * Reset all internal state. Called when the collection is reset.
	     */
	    _reset: function(options) {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	      this._byCid = {};
	    },
	
	    /**
	     * Prepare a model or hash of attributes to be added to this collection.
	     */
	    _prepareModel: function(model, options) {
	      if (!(model instanceof Parse.Object)) {
	        var attrs = model;
	        options.collection = this;
	        model = new this.model(attrs, options);
	        if (!model._validate(model.attributes, options)) {
	          model = false;
	        }
	      } else if (!model.collection) {
	        model.collection = this;
	      }
	      return model;
	    },
	
	    /**
	     * Internal method to remove a model's ties to a collection.
	     */
	    _removeReference: function(model) {
	      if (this === model.collection) {
	        delete model.collection;
	      }
	      model.off('all', this._onModelEvent, this);
	    },
	
	    /**
	     * Internal method called every time a model in the set fires an event.
	     * Sets need to update their indexes when models change ids. All other
	     * events simply proxy through. "add" and "remove" events that originate
	     * in other collections are ignored.
	     */
	    _onModelEvent: function(ev, model, collection, options) {
	      if ((ev === 'add' || ev === 'remove') && collection !== this) {
	        return;
	      }
	      if (ev === 'destroy') {
	        this.remove(model, options);
	      }
	      if (model && ev === 'change:objectId') {
	        delete this._byId[model.previous("objectId")];
	        this._byId[model.id] = model;
	      }
	      this.trigger.apply(this, arguments);
	    }
	
	  });
	
	  // Underscore methods that we want to implement on the Collection.
	  var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
	    'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
	    'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
	    'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
	    'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];
	
	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  Parse._arrayEach(methods, function(method) {
	    Parse.Collection.prototype[method] = function() {
	      return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
	    };
	  });
	
	  /**
	   * Creates a new subclass of <code>Parse.Collection</code>.  For example,<pre>
	   *   var MyCollection = Parse.Collection.extend({
	   *     // Instance properties
	   *
	   *     model: MyClass,
	   *     query: MyQuery,
	   *
	   *     getFirst: function() {
	   *       return this.at(0);
	   *     }
	   *   }, {
	   *     // Class properties
	   *
	   *     makeOne: function() {
	   *       return new MyCollection();
	   *     }
	   *   });
	   *
	   *   var collection = new MyCollection();
	   * </pre>
	   *
	   * @function
	   * @param {Object} instanceProps Instance properties for the collection.
	   * @param {Object} classProps Class properies for the collection.
	   * @return {Class} A new subclass of <code>Parse.Collection</code>.
	   */
	  Parse.Collection.extend = Parse._extend;
	
	}(this));
	
	/*global _: false, document: false */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Creating a Parse.View creates its initial element outside of the DOM,
	   * if an existing element is not provided...
	   * @class
	   *
	   * <p>A fork of Backbone.View, provided for your convenience.  If you use this
	   * class, you must also include jQuery, or another library that provides a
	   * jQuery-compatible $ function.  For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#View">Backbone
	   * documentation</a>.</p>
	   * <p><strong><em>Available in the client SDK only.</em></strong></p>
	   */
	  Parse.View = function(options) {
	    this.cid = _.uniqueId('view');
	    this._configure(options || {});
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	    this.delegateEvents();
	  };
	
	  // Cached regex to split keys for `delegate`.
	  var eventSplitter = /^(\S+)\s*(.*)$/;
	
	  // List of view options to be merged as properties.
	  // TODO: include objectId, createdAt, updatedAt?
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes',
	                     'className', 'tagName'];
	
	  // Set up all inheritable **Parse.View** properties and methods.
	  _.extend(Parse.View.prototype, Parse.Events,
	           /** @lends Parse.View.prototype */ {
	
	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',
	
	    /**
	     * jQuery delegate for element lookup, scoped to DOM elements within the
	     * current view. This should be prefered to global lookups where possible.
	     */
	    $: function(selector) {
	      return this.$el.find(selector);
	    },
	
	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function(){},
	
	    /**
	     * The core function that your view should override, in order
	     * to populate its element (`this.el`), with the appropriate HTML. The
	     * convention is for **render** to always return `this`.
	     */
	    render: function() {
	      return this;
	    },
	
	    /**
	     * Remove this view from the DOM. Note that the view isn't present in the
	     * DOM by default, so calling this method may be a no-op.
	     */
	    remove: function() {
	      this.$el.remove();
	      return this;
	    },
	
	    /**
	     * For small amounts of DOM Elements, where a full-blown template isn't
	     * needed, use **make** to manufacture elements, one at a time.
	     * <pre>
	     *     var el = this.make('li', {'class': 'row'},
	     *                        this.model.escape('title'));</pre>
	     */
	    make: function(tagName, attributes, content) {
	      var el = document.createElement(tagName);
	      if (attributes) {
	        Parse.$(el).attr(attributes);
	      }
	      if (content) {
	        Parse.$(el).html(content);
	      }
	      return el;
	    },
	
	    /**
	     * Changes the view's element (`this.el` property), including event
	     * re-delegation.
	     */
	    setElement: function(element, delegate) {
	      this.$el = Parse.$(element);
	      this.el = this.$el[0];
	      if (delegate !== false) {
	        this.delegateEvents();
	      }
	      return this;
	    },
	
	    /**
	     * Set callbacks.  <code>this.events</code> is a hash of
	     * <pre>
	     * *{"event selector": "callback"}*
	     *
	     *     {
	     *       'mousedown .title':  'edit',
	     *       'click .button':     'save'
	     *       'click .open':       function(e) { ... }
	     *     }
	     * </pre>
	     * pairs. Callbacks will be bound to the view, with `this` set properly.
	     * Uses event delegation for efficiency.
	     * Omitting the selector binds the event to `this.el`.
	     * This only works for delegate-able events: not `focus`, `blur`, and
	     * not `change`, `submit`, and `reset` in Internet Explorer.
	     */
	    delegateEvents: function(events) {
	      events = events || Parse._getValue(this, 'events');
	      if (!events) {
	        return;
	      }
	      this.undelegateEvents();
	      var self = this;
	      Parse._objectEach(events, function(method, key) {
	        if (!_.isFunction(method)) {
	          method = self[events[key]];
	        }
	        if (!method) {
	          throw new Error('Event "' + events[key] + '" does not exist');
	        }
	        var match = key.match(eventSplitter);
	        var eventName = match[1], selector = match[2];
	        method = _.bind(method, self);
	        eventName += '.delegateEvents' + self.cid;
	        if (selector === '') {
	          self.$el.bind(eventName, method);
	        } else {
	          self.$el.delegate(selector, eventName, method);
	        }
	      });
	    },
	
	    /**
	     * Clears all callbacks previously bound to the view with `delegateEvents`.
	     * You usually don't need to use this, but may wish to if you have multiple
	     * Backbone views attached to the same DOM element.
	     */
	    undelegateEvents: function() {
	      this.$el.unbind('.delegateEvents' + this.cid);
	    },
	
	    /**
	     * Performs the initial configuration of a View with a set of options.
	     * Keys with special meaning *(model, collection, id, className)*, are
	     * attached directly to the view.
	     */
	    _configure: function(options) {
	      if (this.options) {
	        options = _.extend({}, this.options, options);
	      }
	      var self = this;
	      _.each(viewOptions, function(attr) {
	        if (options[attr]) {
	          self[attr] = options[attr];
	        }
	      });
	      this.options = options;
	    },
	
	    /**
	     * Ensure that the View has a DOM element to render into.
	     * If `this.el` is a string, pass it through `$()`, take the first
	     * matching element, and re-assign it to `el`. Otherwise, create
	     * an element from the `id`, `className` and `tagName` properties.
	     */
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = Parse._getValue(this, 'attributes') || {};
	        if (this.id) {
	          attrs.id = this.id;
	        }
	        if (this.className) {
	          attrs['class'] = this.className;
	        }
	        this.setElement(this.make(this.tagName, attrs), false);
	      } else {
	        this.setElement(this.el, false);
	      }
	    }
	
	  });
	
	  /**
	   * @function
	   * @param {Object} instanceProps Instance properties for the view.
	   * @param {Object} classProps Class properies for the view.
	   * @return {Class} A new subclass of <code>Parse.View</code>.
	   */
	  Parse.View.extend = Parse._extend;
	
	}(this));
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * @class
	   *
	   * <p>A Parse.User object is a local representation of a user persisted to the
	   * Parse cloud. This class is a subclass of a Parse.Object, and retains the
	   * same functionality of a Parse.Object, but also extends it with various
	   * user specific methods, like authentication, signing up, and validation of
	   * uniqueness.</p>
	   */
	  Parse.User = Parse.Object.extend("_User", /** @lends Parse.User.prototype */ {
	    // Instance Variables
	    _isCurrentUser: false,
	
	
	    // Instance Methods
	    
	    /**
	     * Merges another object's attributes into this object.
	     */
	    _mergeFromObject: function(other) {
	      if (other.getSessionToken()) {
	        this._sessionToken = other.getSessionToken();      
	      }    
	      Parse.User.__super__._mergeFromObject.call(this, other);
	    },    
	
	    /**
	     * Internal method to handle special fields in a _User response.
	     */
	    _mergeMagicFields: function(attrs) {
	      if (attrs.sessionToken) {
	        this._sessionToken = attrs.sessionToken;
	        delete attrs.sessionToken;
	      }
	      Parse.User.__super__._mergeMagicFields.call(this, attrs);
	    },
	
	    /**
	     * Removes null values from authData (which exist temporarily for
	     * unlinking)
	     */
	    _cleanupAuthData: function() {
	      if (!this.isCurrent()) {
	        return;
	      }
	      var authData = this.get('authData');
	      if (!authData) {
	        return;
	      }
	      Parse._objectEach(this.get('authData'), function(value, key) {
	        if (!authData[key]) {
	          delete authData[key];
	        }
	      });
	    },
	
	    /**
	     * Synchronizes authData for all providers.
	     */
	    _synchronizeAllAuthData: function() {
	      var authData = this.get('authData');
	      if (!authData) {
	        return;
	      }
	
	      var self = this;
	      Parse._objectEach(this.get('authData'), function(value, key) {
	        self._synchronizeAuthData(key);
	      });
	    },
	
	    /**
	     * Synchronizes auth data for a provider (e.g. puts the access token in the
	     * right place to be used by the Facebook SDK).
	     */
	    _synchronizeAuthData: function(provider) {
	      if (!this.isCurrent()) {
	        return;
	      }
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	        provider = Parse.User._authProviders[authType];
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData');
	      if (!authData || !provider) {
	        return;
	      }
	      var success = provider.restoreAuthentication(authData[authType]);
	      if (!success) {
	        this._unlinkFrom(provider);
	      }
	    },
	
	    _handleSaveResult: function(makeCurrent) {
	      // Clean up and synchronize the authData object, removing any unset values
	      if (makeCurrent) {
	        this._isCurrentUser = true;
	      }
	      this._cleanupAuthData();
	      this._synchronizeAllAuthData();
	      // Don't keep the password around.
	      delete this._serverData.password;
	      this._rebuildEstimatedDataForKey("password");
	      this._refreshCache();
	      if (makeCurrent || this.isCurrent()) {
	        Parse.User._saveCurrentUser(this);
	      }
	    },
	
	    /**
	     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
	     * call linkWith on the user (even if it doesn't exist yet on the server).
	     */
	    _linkWith: function(provider, options) {
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	        provider = Parse.User._authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      if (_.has(options, 'authData')) {
	        var authData = this.get('authData') || {};
	        authData[authType] = options.authData;
	        this.set('authData', authData);
	
	        // Overridden so that the user can be made the current user.
	        var newOptions = _.clone(options) || {};
	        newOptions.success = function(model) {
	          model._handleSaveResult(true);
	          if (options.success) {
	            options.success.apply(this, arguments);
	          }
	        };
	        return this.save({'authData': authData}, newOptions);
	      } else {
	        var self = this;
	        var promise = new Parse.Promise();
	        provider.authenticate({
	          success: function(provider, result) {
	            self._linkWith(provider, {
	              authData: result,
	              success: options.success,
	              error: options.error
	            }).then(function() {
	              promise.resolve(self);
	            });
	          },
	          error: function(provider, error) {
	            if (options.error) {
	              options.error(self, error);
	            }
	            promise.reject(error);
	          }
	        });
	        return promise;
	      }
	    },
	
	    /**
	     * Unlinks a user from a service.
	     */
	    _unlinkFrom: function(provider, options) {
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	        provider = Parse.User._authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      var newOptions = _.clone(options);
	      var self = this;
	      newOptions.authData = null;
	      newOptions.success = function(model) {
	        self._synchronizeAuthData(provider);
	        if (options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return this._linkWith(provider, newOptions);
	    },
	
	    /**
	     * Checks whether a user is linked to a service.
	     */
	    _isLinked: function(provider) {
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData') || {};
	      return !!authData[authType];
	    },
	
	    /**
	     * Deauthenticates all providers.
	     */
	    _logOutWithAll: function() {
	      var authData = this.get('authData');
	      if (!authData) {
	        return;
	      }
	      var self = this;
	      Parse._objectEach(this.get('authData'), function(value, key) {
	        self._logOutWith(key);
	      });
	    },
	
	    /**
	     * Deauthenticates a single provider (e.g. removing access tokens from the
	     * Facebook SDK).
	     */
	    _logOutWith: function(provider) {
	      if (!this.isCurrent()) {
	        return;
	      }
	      if (_.isString(provider)) {
	        provider = Parse.User._authProviders[provider];
	      }
	      if (provider && provider.deauthenticate) {
	        provider.deauthenticate();
	      }
	    },
	
	    /**
	     * Signs up a new user. You should call this instead of save for
	     * new Parse.Users. This will create a new Parse.User on the server, and
	     * also persist the session on disk so that you can access the user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling signUp.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {Object} attrs Extra fields to set on the new user, or null.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled when the signup
	     *     finishes.
	     * @see Parse.User.signUp
	     */
	    signUp: function(attrs, options) {
	      var error;
	      options = options || {};
	
	      var username = (attrs && attrs.username) || this.get("username");
	      if (!username || (username === "")) {
	        error = new Parse.Error(
	            Parse.Error.OTHER_CAUSE,
	            "Cannot sign up user with an empty name.");
	        if (options && options.error) {
	          options.error(this, error);
	        }
	        return Parse.Promise.error(error);
	      }
	
	      var password = (attrs && attrs.password) || this.get("password");
	      if (!password || (password === "")) {
	        error = new Parse.Error(
	            Parse.Error.OTHER_CAUSE,
	            "Cannot sign up user with an empty password.");
	        if (options && options.error) {
	          options.error(this, error);
	        }
	        return Parse.Promise.error(error);
	      }
	
	      // Overridden so that the user can be made the current user.
	      var newOptions = _.clone(options);
	      newOptions.success = function(model) {
	        model._handleSaveResult(Parse.User._canUseCurrentUser());
	        if (options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return this.save(attrs, newOptions);
	    },
	
	    /**
	     * Logs in a Parse.User. On success, this saves the session to localStorage,
	     * so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling logIn.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {Object} options A Backbone-style options object.
	     * @see Parse.User.logIn
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login is complete.
	     */
	    logIn: function(options) {
	      if (!Parse.User._canUseCurrentUser()) {
	        throw new Error(
	          'It is not possible to log in on a server environment.'
	        );
	      }
	      var model = this;
	      options = options || {};
	      var request = Parse._request({
	        route: "login",
	        method: "GET",
	        useMasterKey: options.useMasterKey,
	        data: this.toJSON()
	      });
	      return request.then(function(resp, status, xhr) {
	        var serverAttrs = model.parse(resp, status, xhr);
	        model._finishFetch(serverAttrs);
	        model._handleSaveResult(true);
	        return model;
	      })._thenRunCallbacks(options, this);
	    },
	
	    /**
	     * @see Parse.Object#save
	     */
	    save: function(arg1, arg2, arg3) {
	      var i, attrs, current, options, saved;
	      if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
	        attrs = arg1;
	        options = arg2;
	      } else {
	        attrs = {};
	        attrs[arg1] = arg2;
	        options = arg3;
	      }
	      options = options || {};
	
	      var newOptions = _.clone(options);
	      newOptions.success = function(model) {
	        model._handleSaveResult(false);
	        if (options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return Parse.Object.prototype.save.call(this, attrs, newOptions);
	    },
	
	    /**
	     * @see Parse.Object#fetch
	     */
	    fetch: function(options) {
	      var newOptions = options ? _.clone(options) : {};
	      newOptions.success = function(model) {
	        model._handleSaveResult(false);
	        if (options && options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return Parse.Object.prototype.fetch.call(this, newOptions);
	    },
	
	    /**
	     * Returns true if <code>current</code> would return this user.
	     * @see Parse.User#current
	     */
	    isCurrent: function() {
	      return this._isCurrentUser;
	    },
	
	    /**
	     * Returns get("username").
	     * @return {String}
	     * @see Parse.Object#get
	     */
	    getUsername: function() {
	      return this.get("username");
	    },
	
	    /**
	     * Calls set("username", username, options) and returns the result.
	     * @param {String} username
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     * @see Parse.Object.set
	     */
	    setUsername: function(username, options) {
	      return this.set("username", username, options);
	    },
	
	    /**
	     * Calls set("password", password, options) and returns the result.
	     * @param {String} password
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     * @see Parse.Object.set
	     */
	    setPassword: function(password, options) {
	      return this.set("password", password, options);
	    },
	
	    /**
	     * Returns get("email").
	     * @return {String}
	     * @see Parse.Object#get
	     */
	    getEmail: function() {
	      return this.get("email");
	    },
	
	    /**
	     * Calls set("email", email, options) and returns the result.
	     * @param {String} email
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     * @see Parse.Object.set
	     */
	    setEmail: function(email, options) {
	      return this.set("email", email, options);
	    },
	
	    /**
	     * Checks whether this user is the current user and has been authenticated.
	     * @return (Boolean) whether this user is the current user and is logged in.
	     */
	    authenticated: function() {
	      return !!this._sessionToken &&
	          (Parse.User.current() && Parse.User.current().id === this.id);
	    },
	
	    /**
	     * Returns the session token for this user, if the user has been logged in,
	     * or if it is the result of a query with the master key. Otherwise, returns
	     * undefined.
	     * @return {String} the session token, or undefined
	     */
	    getSessionToken: function() {
	      return this._sessionToken;
	    },
	
	    /**
	     * Request a revocable session token to replace the older style of token.
	     * @param {Object} options A Backbone-style options object.
	     *
	     * @return {Parse.Promise} A promise that is resolved when the replacement
	     *   token has been fetched.
	     */
	    _upgradeToRevocableSession: function(options) {
	      options = options || {};
	      if (!Parse.User.current()) {
	        return Parse.Promise.as()._thenRunCallbacks(options);
	      }
	      var currentSession = Parse.User.current().getSessionToken();
	      if (Parse.Session._isRevocable(currentSession)) {
	        return Parse.Promise.as()._thenRunCallbacks(options);
	      }
	      return Parse._request({
	        route: 'upgradeToRevocableSession',
	        method: 'POST',
	        useMasterKey: options.useMasterKey,
	        sessionToken: currentSession
	      }).then(function(result) {
	        var session = new Parse.Session();
	        session._finishFetch(result);
	        var currentUser = Parse.User.current();
	        currentUser._sessionToken = session.getSessionToken();
	        Parse.User._saveCurrentUser(currentUser);
	      })._thenRunCallbacks(options);
	    },
	
	  }, /** @lends Parse.User */ {
	    // Class Variables
	
	    // The currently logged-in user.
	    _currentUser: null,
	
	    // Whether currentUser is known to match the serialized version on disk.
	    // This is useful for saving a localstorage check if you try to load
	    // _currentUser frequently while there is none stored.
	    _currentUserMatchesDisk: false,
	
	    // The localStorage key suffix that the current user is stored under.
	    _CURRENT_USER_KEY: "currentUser",
	
	    // The mapping of auth provider names to actual providers
	    _authProviders: {},
	
	    // Whether to rewrite className User to _User
	    _performUserRewrite: true,
	
	    // Whether to send a Revocable Session header
	    _isRevocableSessionEnabled: false,
	
	    // Whether to enable a memory-unsafe current user in node.js
	    _enableUnsafeCurrentUser: false,
	
	
	    // Class Methods
	
	    /**
	     * Signs up a new user with a username (or email) and password.
	     * This will create a new Parse.User on the server, and also persist the
	     * session in localStorage so that you can access the user using
	     * {@link #current}.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} username The username (or email) to sign up with.
	     * @param {String} password The password to sign up with.
	     * @param {Object} attrs Extra fields to set on the new user.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the signup completes.
	     * @see Parse.User#signUp
	     */
	    signUp: function(username, password, attrs, options) {
	      attrs = attrs || {};
	      attrs.username = username;
	      attrs.password = password;
	      var user = Parse.Object._create("_User");
	      return user.signUp(attrs, options);
	    },
	
	    /**
	     * Logs in a user with a username (or email) and password. On success, this
	     * saves the session to disk, so you can retrieve the currently logged in
	     * user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} username The username (or email) to log in with.
	     * @param {String} password The password to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     * @see Parse.User#logIn
	     */
	    logIn: function(username, password, options) {
	      var user = Parse.Object._create("_User");
	      user._finishFetch({ username: username, password: password });
	      return user.logIn(options);
	    },
	
	    /**
	     * Logs in a user with a session token. On success, this saves the session
	     * to disk, so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} sessionToken The sessionToken to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	    become: function(sessionToken, options) {
	      if (!Parse.User._canUseCurrentUser()) {
	        throw new Error(
	          'It is not secure to become a user on a node.js server environment.'
	        );
	      }
	      options = options || {};
	
	      var user = Parse.Object._create("_User");
	      return Parse._request({
	        route: "users",
	        className: "me",
	        method: "GET",
	        useMasterKey: options.useMasterKey,
	        sessionToken: sessionToken
	      }).then(function(resp, status, xhr) {
	        var serverAttrs = user.parse(resp, status, xhr);
	        user._finishFetch(serverAttrs);
	        user._handleSaveResult(true);
	        return user;
	
	      })._thenRunCallbacks(options, user);
	    },
	
	    /**
	     * Logs out the currently logged in user session. This will remove the
	     * session from disk, log out of linked services, and future calls to
	     * <code>current</code> will return <code>null</code>.
	     * @return {Parse.Promise} A promise that is resolved when the session is
	     *   destroyed on the server.
	     */
	    logOut: function() {
	      if (!Parse.User._canUseCurrentUser()) {
	        throw new Error(
	          'There is no current user user on a node.js server environment.'
	        );
	      }
	      return Parse.User._currentAsync().then(function(currentUser) {
	        var promise = Parse.Storage.removeItemAsync(
	          Parse._getParsePath(Parse.User._CURRENT_USER_KEY));
	
	        if (currentUser !== null) {
	          var currentSession = currentUser.getSessionToken();
	          if (Parse.Session._isRevocable(currentSession)) {
	            promise.then(function() {
	              return Parse._request({
	                route: 'logout',
	                method: 'POST',
	                sessionToken: currentSession
	              });
	            });
	          }
	          currentUser._logOutWithAll();
	          currentUser._isCurrentUser = false;
	        }
	        Parse.User._currentUserMatchesDisk = true;
	        Parse.User._currentUser = null;
	
	        return promise;
	      });
	    },
	
	    /**
	     * Requests a password reset email to be sent to the specified email address
	     * associated with the user account. This email allows the user to securely
	     * reset their password on the Parse site.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} email The email address associated with the user that
	     *     forgot their password.
	     * @param {Object} options A Backbone-style options object.
	     */
	    requestPasswordReset: function(email, options) {
	      options = options || {};
	      var request = Parse._request({
	        route: "requestPasswordReset",
	        method: "POST",
	        useMasterKey: options.useMasterKey,
	        data: { email: email }
	      });
	      return request._thenRunCallbacks(options);
	    },
	
	    /**
	     * Retrieves the currently logged in ParseUser with a valid session,
	     * either from memory or localStorage, if necessary.
	     * @return {Parse.Object} The currently logged in Parse.User.
	     */
	    current: function() {
	      if (!Parse.User._canUseCurrentUser()) {
	        throw new Error(
	          'There is no current user user on a node.js server environment.'
	        );
	      }
	      if (Parse.Storage.async) {
	        // We can't return the current user synchronously
	        Parse.User._currentAsync();
	        return Parse.User._currentUser;
	      }
	      
	      if (Parse.User._currentUser) {
	        return Parse.User._currentUser;
	      }
	
	      if (Parse.User._currentUserMatchesDisk) {
	        // TODO: Lazily log in anonymous user.
	        return Parse.User._currentUser;
	      }
	
	      // Load the user from local storage.
	      Parse.User._currentUserMatchesDisk = true;
	
	      var userData = Parse.Storage.getItem(Parse._getParsePath(
	          Parse.User._CURRENT_USER_KEY));
	      if (!userData) {
	        // TODO: Lazily log in anonymous user.
	        return null;
	      }
	      Parse.User._currentUser = Parse.Object._create("_User");
	      Parse.User._currentUser._isCurrentUser = true;
	
	      var json = JSON.parse(userData);
	      Parse.User._currentUser.id = json._id;
	      delete json._id;
	      Parse.User._currentUser._sessionToken = json._sessionToken;
	      delete json._sessionToken;
	      Parse.User._currentUser._finishFetch(json);
	
	      Parse.User._currentUser._synchronizeAllAuthData();
	      Parse.User._currentUser._refreshCache();
	      Parse.User._currentUser._opSetQueue = [{}];
	      return Parse.User._currentUser;
	    },
	
	    /**
	     * Retrieves the currently logged in ParseUser from asynchronous Storage.
	     * @return {Parse.Promise} A Promise that is resolved with the currently
	     *   logged in Parse User
	     */
	    _currentAsync: function() {
	      if (Parse.User._currentUser) {
	        return Parse.Promise.as(Parse.User._currentUser);
	      }
	
	      if (Parse.User._currentUserMatchesDisk) {
	        return Parse.Promise.as(Parse.User._currentUser);
	      }
	
	      // Load the user from Storage
	      return Parse.Storage.getItemAsync(Parse._getParsePath(
	        Parse.User._CURRENT_USER_KEY)).then(function(userData) {
	        if (!userData) {
	          return null;
	        }
	        Parse.User._currentUser = Parse.Object._create("_User");
	        Parse.User._currentUser._isCurrentUser = true;
	
	        var json = JSON.parse(userData);
	        Parse.User._currentUser.id = json._id;
	        delete json._id;
	        Parse.User._currentUser._sessionToken = json._sessionToken;
	        delete json._sessionToken;
	        Parse.User._currentUser._finishFetch(json);
	
	        Parse.User._currentUser._synchronizeAllAuthData();
	        Parse.User._currentUser._refreshCache();
	        Parse.User._currentUser._opSetQueue = [{}];
	        return Parse.User._currentUser;
	      });
	    },
	
	    /**
	     * Allow someone to define a custom User class without className
	     * being rewritten to _User. The default behavior is to rewrite
	     * User to _User for legacy reasons. This allows developers to
	     * override that behavior.
	     *
	     * @param {Boolean} isAllowed Whether or not to allow custom User class
	     */
	    allowCustomUserClass: function(isAllowed) {
	      this._performUserRewrite = !isAllowed;
	    },
	
	    /**
	     * Allow a legacy application to start using revocable sessions. If the
	     * current session token is not revocable, a request will be made for a new,
	     * revocable session.
	     * It is not necessary to call this method from cloud code unless you are
	     * handling user signup or login from the server side. In a cloud code call,
	     * this function will not attempt to upgrade the current token.
	     * @param {Object} options A Backbone-style options object.
	     *
	     * @return {Parse.Promise} A promise that is resolved when the process has
	     *   completed. If a replacement session token is requested, the promise
	     *   will be resolved after a new token has been fetched.
	     */
	    enableRevocableSession: function(options) {
	      options = options || {};
	      Parse.User._isRevocableSessionEnabled = true;
	      if (Parse.User._canUseCurrentUser() && Parse.User.current()) {
	        return Parse.User.current()._upgradeToRevocableSession(options);
	      }
	      return Parse.Promise.as()._thenRunCallbacks(options);
	    },
	
	    /**
	     *
	     */
	    enableUnsafeCurrentUser: function() {
	      Parse.User._enableUnsafeCurrentUser = true;
	    },
	
	    _canUseCurrentUser: function() {
	      return !Parse._isNode || Parse.User._enableUnsafeCurrentUser;
	    },
	
	    /**
	     * Persists a user as currentUser to localStorage, and into the singleton.
	     */
	    _saveCurrentUser: function(user) {
	      if (Parse.User._currentUser !== null &&
	          Parse.User._currentUser !== user) {
	        Parse.User.logOut();
	      }
	      user._isCurrentUser = true;
	      Parse.User._currentUser = user;
	      Parse.User._currentUserMatchesDisk = true;
	
	      var json = user.toJSON();
	      json._id = user.id;
	      json._sessionToken = user._sessionToken;
	      if (Parse.Storage.async) {
	        Parse.Storage.setItemAsync(
	          Parse._getParsePath(Parse.User._CURRENT_USER_KEY),
	          JSON.stringify(json));
	      } else {
	        Parse.Storage.setItem(
	          Parse._getParsePath(Parse.User._CURRENT_USER_KEY),
	          JSON.stringify(json));
	      }
	    },
	
	    _registerAuthenticationProvider: function(provider) {
	      Parse.User._authProviders[provider.getAuthType()] = provider;
	      // Synchronize the current user with the auth provider.
	      if (Parse.User.current()) {
	        Parse.User.current()._synchronizeAuthData(provider.getAuthType());
	      }
	    },
	
	    _logInWith: function(provider, options) {
	      var user = Parse.Object._create("_User");
	      return user._linkWith(provider, options);
	    }
	
	  });
	}(this));
	
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	
	  /**
	   * @class
	   *
	   * <p>A Parse.Session object is a local representation of a revocable session.
	   * This class is a subclass of a Parse.Object, and retains the same
	   * functionality of a Parse.Object.</p>
	   */
	  Parse.Session = Parse.Object.extend('_Session',
	  /** @lends Parse.Session.prototype */
	  {
	    /**
	     * Returns the session token string.
	     * @return {String}
	     */
	    getSessionToken: function() {
	      return this._sessionToken;
	    },
	
	    /**
	     * Internal method to handle special fields in a _Session response.
	     */
	    _mergeMagicFields: function(attrs) {
	      if (attrs.sessionToken) {
	        this._sessionToken = attrs.sessionToken;
	        delete attrs.sessionToken;
	      }
	      Parse.Session.__super__._mergeMagicFields.call(this, attrs);
	    },
	  }, /** @lends Parse.Session */ {
	
	    // Throw an error when modifying these read-only fields
	    readOnlyAttributes: {
	      createdWith: true,
	      expiresAt: true,
	      installationId: true,
	      restricted: true,
	      sessionToken: true,
	      user: true
	    },
	
	    /**
	     * Retrieves the Session object for the currently logged in session.
	     * @return {Parse.Promise} A promise that is resolved with the Parse.Session
	     *   object after it has been fetched.
	     */
	    current: function(options) {
	      options = options || {};
	
	      var session = Parse.Object._create('_Session');
	      var currentToken = Parse.User.current().getSessionToken();
	      return Parse._request({
	        route: 'sessions',
	        className: 'me',
	        method: 'GET',
	        useMasterKey: options.useMasterKey,
	        sessionToken: currentToken
	      }).then(function(resp, status, xhr) {
	        var serverAttrs = session.parse(resp, status, xhr);
	        session._finishFetch(serverAttrs);
	        return session;
	      })._thenRunCallbacks(options, session);
	    },
	
	    /**
	     * Determines whether a session token is revocable.
	     * @return {Boolean}
	     */
	    _isRevocable: function(token) {
	      return token.indexOf('r:') > -1;
	    },
	
	    /**
	     * Determines whether the current session token is revocable.
	     * This method is useful for migrating Express.js or Node.js web apps to
	     * use revocable sessions. If you are migrating an app that uses the Parse
	     * SDK in the browser only, please use Parse.User.enableRevocableSession()
	     * instead, so that sessions can be automatically upgraded.
	     * @return {Boolean}
	     */
	    isCurrentSessionRevocable: function() {
	      if (Parse.User.current() !== null) {
	        return Parse.Session._isRevocable(
	          Parse.User.current().getSessionToken()
	        );
	      }
	    }
	  });
	})(this);
	
	// Parse.Query is a way to create a list of Parse.Objects.
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Creates a new parse Parse.Query for the given Parse.Object subclass.
	   * @param objectClass -
	   *   An instance of a subclass of Parse.Object, or a Parse className string.
	   * @class
	   *
	   * <p>Parse.Query defines a query that is used to fetch Parse.Objects. The
	   * most common use case is finding all objects that match a query through the
	   * <code>find</code> method. For example, this sample code fetches all objects
	   * of class <code>MyClass</code>. It calls a different function depending on
	   * whether the fetch succeeded or not.
	   * 
	   * <pre>
	   * var query = new Parse.Query(MyClass);
	   * query.find({
	   *   success: function(results) {
	   *     // results is an array of Parse.Object.
	   *   },
	   *
	   *   error: function(error) {
	   *     // error is an instance of Parse.Error.
	   *   }
	   * });</pre></p>
	   * 
	   * <p>A Parse.Query can also be used to retrieve a single object whose id is
	   * known, through the get method. For example, this sample code fetches an
	   * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
	   * different function depending on whether the fetch succeeded or not.
	   * 
	   * <pre>
	   * var query = new Parse.Query(MyClass);
	   * query.get(myId, {
	   *   success: function(object) {
	   *     // object is an instance of Parse.Object.
	   *   },
	   *
	   *   error: function(object, error) {
	   *     // error is an instance of Parse.Error.
	   *   }
	   * });</pre></p>
	   * 
	   * <p>A Parse.Query can also be used to count the number of objects that match
	   * the query without retrieving all of those objects. For example, this
	   * sample code counts the number of objects of the class <code>MyClass</code>
	   * <pre>
	   * var query = new Parse.Query(MyClass);
	   * query.count({
	   *   success: function(number) {
	   *     // There are number instances of MyClass.
	   *   },
	   *
	   *   error: function(error) {
	   *     // error is an instance of Parse.Error.
	   *   }
	   * });</pre></p>
	   */
	  Parse.Query = function(objectClass) {
	    if (_.isString(objectClass)) {
	      objectClass = Parse.Object._getSubclass(objectClass);
	    }
	
	    this.objectClass = objectClass;
	
	    this.className = objectClass.prototype.className;
	
	    this._where = {};
	    this._include = [];
	    this._limit = -1; // negative limit means, do not send a limit
	    this._skip = 0;
	    this._extraOptions = {};
	  };
	
	  /**
	   * Constructs a Parse.Query that is the OR of the passed in queries.  For
	   * example:
	   * <pre>var compoundQuery = Parse.Query.or(query1, query2, query3);</pre>
	   *
	   * will create a compoundQuery that is an or of the query1, query2, and
	   * query3.
	   * @param {...Parse.Query} var_args The list of queries to OR.
	   * @return {Parse.Query} The query that is the OR of the passed in queries.
	   */
	  Parse.Query.or = function() {
	    var queries = _.toArray(arguments);
	    var className = null;
	    Parse._arrayEach(queries, function(q) {
	      if (_.isNull(className)) {
	        className = q.className;
	      }
	
	      if (className !== q.className) {
	        throw "All queries must be for the same class";
	      }
	    });
	    var query = new Parse.Query(className);
	    query._orQuery(queries);
	    return query;
	  };
	
	  Parse.Query.prototype = {
	    /**
	     * Constructs a Parse.Object whose id is already known by fetching data from
	     * the server.  Either options.success or options.error is called when the
	     * find completes.
	     *
	     * @param {String} objectId The id of the object to be fetched.
	     * @param {Object} options A Backbone-style options object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     */
	    get: function(objectId, options) {
	      var self = this;
	      self.equalTo('objectId', objectId);
	
	      var firstOptions = {};
	      if (options && _.has(options, 'useMasterKey')) {
	        firstOptions = { useMasterKey: options.useMasterKey };
	      }
	      if (options && _.has(options, 'sessionToken')) {
	        firstOptions.sessionToken = options.sessionToken;
	      }
	
	      return self.first(firstOptions).then(function(response) {
	        if (response) {
	          return response;
	        }
	
	        var errorObject = new Parse.Error(Parse.Error.OBJECT_NOT_FOUND,
	                                          "Object not found.");
	        return Parse.Promise.error(errorObject);
	
	      })._thenRunCallbacks(options, null);
	    },
	
	    /**
	     * Returns a JSON representation of this query.
	     * @return {Object} The JSON representation of the query.
	     */
	    toJSON: function() {
	      var params = {
	        where: this._where
	      };
	
	      if (this._include.length > 0) {
	        params.include = this._include.join(",");
	      }
	      if (this._select) {
	        params.keys = this._select.join(",");
	      }
	      if (this._limit >= 0) {
	        params.limit = this._limit;
	      }
	      if (this._skip > 0) {
	        params.skip = this._skip;
	      }
	      if (this._order !== undefined) {
	        params.order = this._order.join(",");
	      }
	
	      Parse._objectEach(this._extraOptions, function(v, k) {
	        params[k] = v;
	      });
	
	      return params;
	    },
	
	    /**
	     * Retrieves a list of ParseObjects that satisfy this query.
	     * Either options.success or options.error is called when the find
	     * completes.
	     *
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the results when
	     * the query completes.
	     */
	    find: function(options) {
	      var self = this;
	      options = options || {};
	
	      var request = Parse._request({
	        route: "classes",
	        className: this.className,
	        method: "GET",
	        useMasterKey: options.useMasterKey,
	        sessionToken: options.sessionToken,
	        data: this.toJSON()
	      });
	
	      return request.then(function(response) {
	        return _.map(response.results, function(json) {
	          var obj;
	          if (response.className) {
	            obj = new Parse.Object(response.className);
	          } else {
	            obj = new self.objectClass();
	          }
	          obj._finishFetch(json, true);
	          return obj;
	        });
	      })._thenRunCallbacks(options);
	    },
	
	    /**
	     * Counts the number of objects that match this query.
	     * Either options.success or options.error is called when the count
	     * completes.
	     *
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the count completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the count when
	     * the query completes.
	     */
	    count: function(options) {
	      var self = this;
	      options = options || {};
	
	      var params = this.toJSON();
	      params.limit = 0;
	      params.count = 1;
	      var request = Parse._request({
	        route: "classes",
	        className: self.className, 
	        method: "GET",
	        useMasterKey: options.useMasterKey,
	        sessionToken: options.sessionToken,
	        data: params
	      });
	
	      return request.then(function(response) {
	        return response.count;
	      })._thenRunCallbacks(options);
	    },
	
	    /**
	     * Retrieves at most one Parse.Object that satisfies this query.
	     *
	     * Either options.success or options.error is called when it completes.
	     * success is passed the object if there is one. otherwise, undefined.
	     *
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the object when
	     * the query completes.
	     */
	    first: function(options) {
	      var self = this;
	      options = options || {};
	
	      var params = this.toJSON();
	      params.limit = 1;
	      var request = Parse._request({
	        route: "classes",
	        className: this.className, 
	        method: "GET",
	        useMasterKey: options.useMasterKey,
	        sessionToken: options.sessionToken,
	        data: params
	      });
	
	      return request.then(function(response) {
	        return _.map(response.results, function(json) {
	          var obj;
	          if (response.className) {
	            obj = new Parse.Object(response.className);
	          } else {
	            obj = new self.objectClass();
	          }
	          obj._finishFetch(json, true);
	          return obj;
	        })[0];
	      })._thenRunCallbacks(options);
	    },
	
	    /**
	     * Returns a new instance of Parse.Collection backed by this query.
	     * @param {Array} items An array of instances of <code>Parse.Object</code>
	     *     with which to start this Collection.
	     * @param {Object} options An optional object with Backbone-style options.
	     * Valid options are:<ul>
	     *   <li>model: The Parse.Object subclass that this collection contains.
	     *   <li>query: An instance of Parse.Query to use when fetching items.
	     *   <li>comparator: A string property name or function to sort by.
	     * </ul>
	     * @return {Parse.Collection}
	     */
	    collection: function(items, options) {
	      options = options || {};
	      return new Parse.Collection(items, _.extend(options, {
	        model: this.objectClass,
	        query: this
	      }));
	    },
	
	    /**
	     * Sets the number of results to skip before returning any results.
	     * This is useful for pagination.
	     * Default is to skip zero results.
	     * @param {Number} n the number of results to skip.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    skip: function(n) {
	      this._skip = n;
	      return this;
	    },
	
	    /**
	     * Sets the limit of the number of results to return. The default limit is
	     * 100, with a maximum of 1000 results being returned at a time.
	     * @param {Number} n the number of results to limit to.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    limit: function(n) {
	      this._limit = n;
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that the Parse.Object must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    equalTo: function(key, value) {
	      if (_.isUndefined(value)) {
	        return this.doesNotExist(key);
	      } 
	
	      this._where[key] = Parse._encode(value);
	      return this;
	    },
	
	    /**
	     * Helper for condition queries
	     */
	    _addCondition: function(key, condition, value) {
	      // Check if we already have a condition
	      if (!this._where[key]) {
	        this._where[key] = {};
	      }
	      this._where[key][condition] = Parse._encode(value);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be not equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that must not be equalled.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    notEqualTo: function(key, value) {
	      this._addCondition(key, "$ne", value);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be less than the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    lessThan: function(key, value) {
	      this._addCondition(key, "$lt", value);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be greater than the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    greaterThan: function(key, value) {
	      this._addCondition(key, "$gt", value);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be less than or equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    lessThanOrEqualTo: function(key, value) {
	      this._addCondition(key, "$lte", value);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be greater than or equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    greaterThanOrEqualTo: function(key, value) {
	      this._addCondition(key, "$gte", value);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be contained in the provided list of values.
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    containedIn: function(key, values) {
	      this._addCondition(key, "$in", values);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * not be contained in the provided list of values.
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    notContainedIn: function(key, values) {
	      this._addCondition(key, "$nin", values);
	      return this;
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * contain each one of the provided list of values.
	     * @param {String} key The key to check.  This key's value must be an array.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    containsAll: function(key, values) {
	      this._addCondition(key, "$all", values);
	      return this;
	    },
	
	
	    /**
	     * Add a constraint for finding objects that contain the given key.
	     * @param {String} key The key that should exist.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    exists: function(key) {
	      this._addCondition(key, "$exists", true);
	      return this;
	    },
	
	    /**
	     * Add a constraint for finding objects that do not contain a given key.
	     * @param {String} key The key that should not exist
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    doesNotExist: function(key) {
	      this._addCondition(key, "$exists", false);
	      return this;
	    },
	
	    /**
	     * Add a regular expression constraint for finding string values that match
	     * the provided regular expression.
	     * This may be slow for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {RegExp} regex The regular expression pattern to match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    matches: function(key, regex, modifiers) {
	      this._addCondition(key, "$regex", regex);
	      if (!modifiers) { modifiers = ""; }
	      // Javascript regex options support mig as inline options but store them 
	      // as properties of the object. We support mi & should migrate them to
	      // modifiers
	      if (regex.ignoreCase) { modifiers += 'i'; }
	      if (regex.multiline) { modifiers += 'm'; }
	
	      if (modifiers && modifiers.length) {
	        this._addCondition(key, "$options", modifiers);
	      }
	      return this;
	    },
	
	    /**
	     * Add a constraint that requires that a key's value matches a Parse.Query
	     * constraint.
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    matchesQuery: function(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$inQuery", queryJSON);
	      return this;
	    },
	
	   /**
	     * Add a constraint that requires that a key's value not matches a
	     * Parse.Query constraint.
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    doesNotMatchQuery: function(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$notInQuery", queryJSON);
	      return this;
	    },
	
	
	    /**
	     * Add a constraint that requires that a key's value matches a value in
	     * an object returned by a different Parse.Query.
	     * @param {String} key The key that contains the value that is being
	     *                     matched.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    matchesKeyInQuery: function(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$select",
	                         { key: queryKey, query: queryJSON });
	      return this;
	    },
	
	    /**
	     * Add a constraint that requires that a key's value not match a value in
	     * an object returned by a different Parse.Query.
	     * @param {String} key The key that contains the value that is being
	     *                     excluded.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    doesNotMatchKeyInQuery: function(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$dontSelect",
	                         { key: queryKey, query: queryJSON });
	      return this;
	    },
	
	    /**
	     * Add constraint that at least one of the passed in queries matches.
	     * @param {Array} queries
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    _orQuery: function(queries) {
	      var queryJSON = _.map(queries, function(q) {
	        return q.toJSON().where;
	      });
	
	      this._where.$or = queryJSON;
	      return this;
	    },
	
	    /**
	     * Converts a string into a regex that matches it.
	     * Surrounding with \Q .. \E does this, we just need to escape \E's in
	     * the text separately.
	     */
	    _quote: function(s) {
	      return "\\Q" + s.replace("\\E", "\\E\\\\E\\Q") + "\\E";
	    },
	
	    /**
	     * Add a constraint for finding string values that contain a provided
	     * string.  This may be slow for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} substring The substring that the value must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    contains: function(key, value) {
	      this._addCondition(key, "$regex", this._quote(value));
	      return this;
	    },
	
	    /**
	     * Add a constraint for finding string values that start with a provided
	     * string.  This query will use the backend index, so it will be fast even
	     * for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} prefix The substring that the value must start with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    startsWith: function(key, value) {
	      this._addCondition(key, "$regex", "^" + this._quote(value));
	      return this;
	    },
	
	    /**
	     * Add a constraint for finding string values that end with a provided
	     * string.  This will be slow for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} suffix The substring that the value must end with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    endsWith: function(key, value) {
	      this._addCondition(key, "$regex", this._quote(value) + "$");
	      return this;
	    },
	
	    /**
	     * Sorts the results in ascending order by the given key.
	     * 
	     * @param {(String|String[]|...String} key The key to order by, which is a 
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    ascending: function() {
	      this._order = [];
	      return this.addAscending.apply(this, arguments);
	    },
	
	    /**
	     * Sorts the results in ascending order by the given key, 
	     * but can also add secondary sort descriptors without overwriting _order.
	     * 
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    addAscending: function(key) {
	      var self = this; 
	      if (!this._order) {
	        this._order = [];
	      }
	      Parse._arrayEach(arguments, function(key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        self._order = self._order.concat(key.replace(/\s/g, "").split(","));
	      });
	      return this;
	    },
	
	    /**
	     * Sorts the results in descending order by the given key.
	     * 
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    descending: function(key) {
	      this._order = [];
	      return this.addDescending.apply(this, arguments);
	    },
	
	    /**
	     * Sorts the results in descending order by the given key,
	     * but can also add secondary sort descriptors without overwriting _order.
	     * 
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    addDescending: function(key) {
	      var self = this; 
	      if (!this._order) {
	        this._order = [];
	      }
	      Parse._arrayEach(arguments, function(key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        self._order = self._order.concat(
	          _.map(key.replace(/\s/g, "").split(","), 
	            function(k) { return "-" + k; }));
	      });
	      return this;
	    },
	
	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given.
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    near: function(key, point) {
	      if (!(point instanceof Parse.GeoPoint)) {
	        // Try to cast it to a GeoPoint, so that near("loc", [20,30]) works.
	        point = new Parse.GeoPoint(point);
	      }
	      this._addCondition(key, "$nearSphere", point);
	      return this;
	    },
	
	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in radians) of results to
	     *   return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    withinRadians: function(key, point, distance) {
	      this.near(key, point);
	      this._addCondition(key, "$maxDistance", distance);
	      return this;
	    },
	
	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 3958.8 miles.
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in miles) of results to
	     *     return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    withinMiles: function(key, point, distance) {
	      return this.withinRadians(key, point, distance / 3958.8);
	    },
	
	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 6371.0 kilometers.
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in kilometers) of results
	     *     to return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    withinKilometers: function(key, point, distance) {
	      return this.withinRadians(key, point, distance / 6371.0);
	    },
	
	    /**
	     * Add a constraint to the query that requires a particular key's
	     * coordinates be contained within a given rectangular geographic bounding
	     * box.
	     * @param {String} key The key to be constrained.
	     * @param {Parse.GeoPoint} southwest
	     *     The lower-left inclusive corner of the box.
	     * @param {Parse.GeoPoint} northeast
	     *     The upper-right inclusive corner of the box.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    withinGeoBox: function(key, southwest, northeast) {
	      if (!(southwest instanceof Parse.GeoPoint)) {
	        southwest = new Parse.GeoPoint(southwest);
	      }
	      if (!(northeast instanceof Parse.GeoPoint)) {
	        northeast = new Parse.GeoPoint(northeast);
	      }
	      this._addCondition(key, '$within', { '$box': [southwest, northeast] });
	      return this;
	    },
	
	    /**
	     * Include nested Parse.Objects for the provided key.  You can use dot
	     * notation to specify which fields in the included object are also fetched.
	     * @param {String} key The name of the key to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    include: function() {
	      var self = this;
	      Parse._arrayEach(arguments, function(key) {
	        if (_.isArray(key)) {
	          self._include = self._include.concat(key);
	        } else {
	          self._include.push(key);
	        }
	      });
	      return this;
	    },
	
	    /**
	     * Restrict the fields of the returned Parse.Objects to include only the
	     * provided keys.  If this is called multiple times, then all of the keys
	     * specified in each of the calls will be included.
	     * @param {Array} keys The names of the keys to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	    select: function() {
	      var self = this;
	      this._select = this._select || [];
	      Parse._arrayEach(arguments, function(key) {
	        if (_.isArray(key)) {
	          self._select = self._select.concat(key);
	        } else {
	          self._select.push(key);
	        }
	      });
	      return this;
	    },
	
	    /**
	     * Iterates over each result of a query, calling a callback for each one. If
	     * the callback returns a promise, the iteration will not continue until
	     * that promise has been fulfilled. If the callback returns a rejected
	     * promise, then iteration will stop with that error. The items are
	     * processed in an unspecified order. The query may not have any sort order,
	     * and may not use limit or skip.
	     * @param {Function} callback Callback that will be called with each result
	     *     of the query.
	     * @param {Object} options An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     * @return {Parse.Promise} A promise that will be fulfilled once the
	     *     iteration has completed.
	     */
	    each: function(callback, options) {
	      options = options || {};
	
	      if (this._order || this._skip || (this._limit >= 0)) {
	        var error =
	          "Cannot iterate on a query with sort, skip, or limit.";
	        return Parse.Promise.error(error)._thenRunCallbacks(options);
	      }
	
	      var promise = new Parse.Promise();
	
	      var query = new Parse.Query(this.objectClass);
	      // We can override the batch size from the options.
	      // This is undocumented, but useful for testing.
	      query._limit = options.batchSize || 100;
	      query._where = _.clone(this._where);
	      query._include = _.clone(this._include);
	      if (this._select) {
	        query._select = _.clone(this._select);
	      }
	
	      query.ascending('objectId');
	
	      var findOptions = {};
	      if (_.has(options, "useMasterKey")) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (_.has(options, 'sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var finished = false;
	      return Parse.Promise._continueWhile(function() {
	        return !finished;
	
	      }, function() {
	        return query.find(findOptions).then(function(results) {
	          var callbacksDone = Parse.Promise.as();
	          Parse._.each(results, function(result) {
	            callbacksDone = callbacksDone.then(function() {
	              return callback(result);
	            });
	          });
	
	          return callbacksDone.then(function() {
	            if (results.length >= query._limit) {
	              query.greaterThan("objectId", results[results.length - 1].id);
	            } else {
	              finished = true;
	            }
	          });
	        });
	      })._thenRunCallbacks(options);
	    }
	  };
	
	}(this));
	
	/*global FB: false , console: false*/
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  var PUBLIC_KEY = "*";
	
	  var initialized = false;
	  var requestedPermissions;
	  var initOptions;
	  var provider = {
	    authenticate: function(options) {
	      var self = this;
	      FB.login(function(response) {
	        if (response.authResponse) {
	          if (options.success) {
	            options.success(self, {
	              id: response.authResponse.userID,
	              access_token: response.authResponse.accessToken,
	              expiration_date: new Date(response.authResponse.expiresIn * 1000 +
	                  (new Date()).getTime()).toJSON()
	            });
	          }
	        } else {
	          if (options.error) {
	            options.error(self, response);
	          }
	        }
	      }, {
	        scope: requestedPermissions
	      });
	    },
	    restoreAuthentication: function(authData) {
	      if (authData) {
	        var authResponse = {
	          userID: authData.id,
	          accessToken: authData.access_token,
	          expiresIn: (Parse._parseDate(authData.expiration_date).getTime() -
	              (new Date()).getTime()) / 1000
	        };
	        var newOptions = _.clone(initOptions);
	        newOptions.authResponse = authResponse;
	
	        // Suppress checks for login status from the browser.
	        newOptions.status = false;
	
	        // If the user doesn't match the one known by the FB SDK, log out.
	        // Most of the time, the users will match -- it's only in cases where
	        // the FB SDK knows of a different user than the one being restored
	        // from a Parse User that logged in with username/password.
	        var existingResponse = FB.getAuthResponse();
	        if (existingResponse &&
	            existingResponse.userID !== authResponse.userID) {
	          FB.logout();
	        }
	
	        FB.init(newOptions);
	      }
	      return true;
	    },
	    getAuthType: function() {
	      return "facebook";
	    },
	    deauthenticate: function() {
	      this.restoreAuthentication(null);
	    }
	  };
	
	  /**
	   * Provides a set of utilities for using Parse with Facebook.
	   * @namespace
	   * Provides a set of utilities for using Parse with Facebook.
	   */
	  Parse.FacebookUtils = {
	    /**
	     * Initializes Parse Facebook integration.  Call this function after you
	     * have loaded the Facebook Javascript SDK with the same parameters
	     * as you would pass to<code>
	     * <a href=
	     * "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	     * FB.init()</a></code>.  Parse.FacebookUtils will invoke FB.init() for you
	     * with these arguments.
	     *
	     * @param {Object} options Facebook options argument as described here:
	     *   <a href=
	     *   "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	     *   FB.init()</a>. The status flag will be coerced to 'false' because it
	     *   interferes with Parse Facebook integration. Call FB.getLoginStatus()
	     *   explicitly if this behavior is required by your application.
	     */
	    init: function(options) {
	      if (typeof(FB) === 'undefined') {
	        throw "The Facebook JavaScript SDK must be loaded before calling init.";
	      } 
	      initOptions = _.clone(options) || {};
	      if (initOptions.status && typeof(console) !== "undefined") {
	        var warn = console.warn || console.log || function() {};
	        warn.call(console, "The 'status' flag passed into" +
	          " FB.init, when set to true, can interfere with Parse Facebook" +
	          " integration, so it has been suppressed. Please call" +
	          " FB.getLoginStatus() explicitly if you require this behavior.");
	      }
	      initOptions.status = false;
	      FB.init(initOptions);
	      Parse.User._registerAuthenticationProvider(provider);
	      initialized = true;
	    },
	
	    /**
	     * Gets whether the user has their account linked to Facebook.
	     * 
	     * @param {Parse.User} user User to check for a facebook link.
	     *     The user must be logged in on this device.
	     * @return {Boolean} <code>true</code> if the user has their account
	     *     linked to Facebook.
	     */
	    isLinked: function(user) {
	      return user._isLinked("facebook");
	    },
	
	    /**
	     * Logs in a user using Facebook. This method delegates to the Facebook
	     * SDK to authenticate the user, and then automatically logs in (or
	     * creates, in the case where it is a new user) a Parse.User.
	     * 
	     * @param {String, Object} permissions The permissions required for Facebook
	     *    log in.  This is a comma-separated string of permissions.
	     *    Alternatively, supply a Facebook authData object as described in our
	     *    REST API docs if you want to handle getting facebook auth tokens
	     *    yourself.
	     * @param {Object} options Standard options object with success and error
	     *    callbacks.
	     */
	    logIn: function(permissions, options) {
	      if (!permissions || _.isString(permissions)) {
	        if (!initialized) {
	          throw "You must initialize FacebookUtils before calling logIn.";
	        }
	        requestedPermissions = permissions;
	        return Parse.User._logInWith("facebook", options);
	      } else {
	        var newOptions = _.clone(options) || {};
	        newOptions.authData = permissions;
	        return Parse.User._logInWith("facebook", newOptions);
	      }
	    },
	
	    /**
	     * Links Facebook to an existing PFUser. This method delegates to the
	     * Facebook SDK to authenticate the user, and then automatically links
	     * the account to the Parse.User.
	     *
	     * @param {Parse.User} user User to link to Facebook. This must be the
	     *     current user.
	     * @param {String, Object} permissions The permissions required for Facebook
	     *    log in.  This is a comma-separated string of permissions. 
	     *    Alternatively, supply a Facebook authData object as described in our
	     *    REST API docs if you want to handle getting facebook auth tokens
	     *    yourself.
	     * @param {Object} options Standard options object with success and error
	     *    callbacks.
	     */
	    link: function(user, permissions, options) {
	      if (!permissions || _.isString(permissions)) {
	        if (!initialized) {
	          throw "You must initialize FacebookUtils before calling link.";
	        }
	        requestedPermissions = permissions;
	        return user._linkWith("facebook", options);
	      } else {
	        var newOptions = _.clone(options) || {};
	        newOptions.authData = permissions;
	        return user._linkWith("facebook", newOptions);
	      }
	    },
	
	    /**
	     * Unlinks the Parse.User from a Facebook account. 
	     * 
	     * @param {Parse.User} user User to unlink from Facebook. This must be the
	     *     current user.
	     * @param {Object} options Standard options object with success and error
	     *    callbacks.
	     */
	    unlink: function(user, options) {
	      if (!initialized) {
	        throw "You must initialize FacebookUtils before calling unlink.";
	      }
	      return user._unlinkFrom("facebook", options);
	    }
	  };
	  
	}(this));
	
	/*global _: false, document: false, window: false, navigator: false */
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * History serves as a global router (per frame) to handle hashchange
	   * events or pushState, match the appropriate route, and trigger
	   * callbacks. You shouldn't ever have to create one of these yourself
	   * — you should use the reference to <code>Parse.history</code>
	   * that will be created for you automatically if you make use of 
	   * Routers with routes.
	   * @class
	   *   
	   * <p>A fork of Backbone.History, provided for your convenience.  If you 
	   * use this class, you must also include jQuery, or another library 
	   * that provides a jQuery-compatible $ function.  For more information,
	   * see the <a href="http://documentcloud.github.com/backbone/#History">
	   * Backbone documentation</a>.</p>
	   * <p><strong><em>Available in the client SDK only.</em></strong></p>
	   */
	  Parse.History = function() {
	    this.handlers = [];
	    _.bindAll(this, 'checkUrl');
	  };
	
	  // Cached regex for cleaning leading hashes and slashes .
	  var routeStripper = /^[#\/]/;
	
	  // Cached regex for detecting MSIE.
	  var isExplorer = /msie [\w.]+/;
	
	  // Has the history handling already been started?
	  Parse.History.started = false;
	
	  // Set up all inheritable **Parse.History** properties and methods.
	  _.extend(Parse.History.prototype, Parse.Events,
	           /** @lends Parse.History.prototype */ {
	
	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,
	
	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(windowOverride) {
	      var loc = windowOverride ? windowOverride.location : window.location;
	      var match = loc.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },
	
	    // Get the cross-browser normalized URL fragment, either from the URL,
	    // the hash, or the override.
	    getFragment: function(fragment, forcePushState) {
	      if (Parse._isNullOrUndefined(fragment)) {
	        if (this._hasPushState || forcePushState) {
	          fragment = window.location.pathname;
	          var search = window.location.search;
	          if (search) {
	            fragment += search;
	          }
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      if (!fragment.indexOf(this.options.root)) {
	        fragment = fragment.substr(this.options.root.length);
	      }
	      return fragment.replace(routeStripper, '');
	    },
	
	    /**
	     * Start the hash change handling, returning `true` if the current
	     * URL matches an existing route, and `false` otherwise.
	     */
	    start: function(options) {
	      if (Parse.History.started) {
	        throw new Error("Parse.history has already been started");
	      }
	      Parse.History.started = true;
	
	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options = _.extend({}, {root: '/'}, this.options, options);
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._wantsPushState = !!this.options.pushState;
	      this._hasPushState = !!(this.options.pushState && 
	                              window.history &&
	                              window.history.pushState);
	      var fragment = this.getFragment();
	      var docMode = document.documentMode;
	      var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) &&
	                   (!docMode || docMode <= 7));
	
	      if (oldIE) {
	        this.iframe = Parse.$('<iframe src="javascript:0" tabindex="-1" />')
	                      .hide().appendTo('body')[0].contentWindow;
	        this.navigate(fragment);
	      }
	
	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._hasPushState) {
	        Parse.$(window).bind('popstate', this.checkUrl);
	      } else if (this._wantsHashChange &&
	                 ('onhashchange' in window) &&
	                 !oldIE) {
	        Parse.$(window).bind('hashchange', this.checkUrl);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = window.setInterval(this.checkUrl,
	                                                    this.interval);
	      }
	
	      // Determine if we need to change the base url, for a pushState link
	      // opened by a non-pushState browser.
	      this.fragment = fragment;
	      var loc = window.location;
	      var atRoot  = loc.pathname === this.options.root;
	
	      // If we've started off with a route from a `pushState`-enabled browser,
	      // but we're currently in a browser that doesn't support it...
	      if (this._wantsHashChange && 
	          this._wantsPushState && 
	          !this._hasPushState &&
	          !atRoot) {
	        this.fragment = this.getFragment(null, true);
	        window.location.replace(this.options.root + '#' + this.fragment);
	        // Return immediately as browser will do redirect to new url
	        return true;
	
	      // Or if we've started out with a hash-based route, but we're currently
	      // in a browser where it could be `pushState`-based instead...
	      } else if (this._wantsPushState &&
	                 this._hasPushState && 
	                 atRoot &&
	                 loc.hash) {
	        this.fragment = this.getHash().replace(routeStripper, '');
	        window.history.replaceState({}, document.title,
	            loc.protocol + '//' + loc.host + this.options.root + this.fragment);
	      }
	
	      if (!this.options.silent) {
	        return this.loadUrl();
	      }
	    },
	
	    // Disable Parse.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      Parse.$(window).unbind('popstate', this.checkUrl)
	                     .unbind('hashchange', this.checkUrl);
	      window.clearInterval(this._checkUrlInterval);
	      Parse.History.started = false;
	    },
	
	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },
	
	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();
	      if (current === this.fragment && this.iframe) {
	        current = this.getFragment(this.getHash(this.iframe));
	      }
	      if (current === this.fragment) {
	        return false;
	      }
	      if (this.iframe) {
	        this.navigate(current);
	      }
	      if (!this.loadUrl()) {
	        this.loadUrl(this.getHash());
	      }
	    },
	
	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragmentOverride) {
	      var fragment = this.fragment = this.getFragment(fragmentOverride);
	      var matched = _.any(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	      return matched;
	    },
	
	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the
	    // history.
	    navigate: function(fragment, options) {
	      if (!Parse.History.started) {
	        return false;
	      }
	      if (!options || options === true) {
	        options = {trigger: options};
	      }
	      var frag = (fragment || '').replace(routeStripper, '');
	      if (this.fragment === frag) {
	        return;
	      }
	
	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._hasPushState) {
	        if (frag.indexOf(this.options.root) !== 0) {
	          frag = this.options.root + frag;
	        }
	        this.fragment = frag;
	        var replaceOrPush = options.replace ? 'replaceState' : 'pushState';
	        window.history[replaceOrPush]({}, document.title, frag);
	
	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this.fragment = frag;
	        this._updateHash(window.location, frag, options.replace);
	        if (this.iframe &&
	            (frag !== this.getFragment(this.getHash(this.iframe)))) {
	          // Opening and closing the iframe tricks IE7 and earlier
	          // to push a history entry on hash-tag change.
	          // When replace is true, we don't want this.
	          if (!options.replace) {
	            this.iframe.document.open().close();
	          }
	          this._updateHash(this.iframe.location, frag, options.replace);
	        }
	
	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        window.location.assign(this.options.root + fragment);
	      }
	      if (options.trigger) {
	        this.loadUrl(fragment);
	      }
	    },
	
	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var s = location.toString().replace(/(javascript:|#).*$/, '');
	        location.replace(s + '#' + fragment);
	      } else {
	        location.hash = fragment;
	      }
	    }
	  });
	}(this));
	
	/*global _: false*/
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * Routers map faux-URLs to actions, and fire events when routes are
	   * matched. Creating a new one sets its `routes` hash, if not set statically.
	   * @class
	   *
	   * <p>A fork of Backbone.Router, provided for your convenience.
	   * For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#Router">Backbone
	   * documentation</a>.</p>
	   * <p><strong><em>Available in the client SDK only.</em></strong></p>
	   */
	  Parse.Router = function(options) {
	    options = options || {};
	    if (options.routes) {
	      this.routes = options.routes;
	    }
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };
	
	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var namedParam    = /:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;
	
	  // Set up all inheritable **Parse.Router** properties and methods.
	  _.extend(Parse.Router.prototype, Parse.Events,
	           /** @lends Parse.Router.prototype */ {
	
	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function(){},
	
	    /**
	     * Manually bind a single named route to a callback. For example:
	     *
	     * <pre>this.route('search/:query/p:num', 'search', function(query, num) {
	     *       ...
	     *     });</pre>
	     */
	    route: function(route, name, callback) {
	      Parse.history = Parse.history || new Parse.History();
	      if (!_.isRegExp(route)) {
	        route = this._routeToRegExp(route);
	      } 
	      if (!callback) {
	        callback = this[name];
	      }
	      Parse.history.route(route, _.bind(function(fragment) {
	        var args = this._extractParameters(route, fragment);
	        if (callback) {
	          callback.apply(this, args);
	        }
	        this.trigger.apply(this, ['route:' + name].concat(args));
	        Parse.history.trigger('route', this, name, args);
	      }, this));
	      return this;
	    },
	
	    /**
	     * Whenever you reach a point in your application that you'd
	     * like to save as a URL, call navigate in order to update the
	     * URL. If you wish to also call the route function, set the 
	     * trigger option to true. To update the URL without creating
	     * an entry in the browser's history, set the replace option
	     * to true.
	     */
	    navigate: function(fragment, options) {
	      Parse.history.navigate(fragment, options);
	    },
	
	    // Bind all defined routes to `Parse.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) { 
	        return;
	      }
	      var routes = [];
	      for (var route in this.routes) {
	        if (this.routes.hasOwnProperty(route)) {
	          routes.unshift([route, this.routes[route]]);
	        }
	      }
	      for (var i = 0, l = routes.length; i < l; i++) {
	        this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
	      }
	    },
	
	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(namedParam, '([^\/]+)')
	                   .replace(splatParam, '(.*?)');
	      return new RegExp('^' + route + '$');
	    },
	
	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted parameters.
	    _extractParameters: function(route, fragment) {
	      return route.exec(fragment).slice(1);
	    }
	  });
	
	  /**
	   * @function
	   * @param {Object} instanceProps Instance properties for the router.
	   * @param {Object} classProps Class properies for the router.
	   * @return {Class} A new subclass of <code>Parse.Router</code>.
	   */
	  Parse.Router.extend = Parse._extend;
	}(this));
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	  var _ = Parse._;
	
	  /**
	   * @namespace Contains functions for calling and declaring
	   * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
	   * <p><strong><em>
	   *   Some functions are only available from Cloud Code.
	   * </em></strong></p>
	   */
	  Parse.Cloud = Parse.Cloud || {};
	
	  _.extend(Parse.Cloud, /** @lends Parse.Cloud */ {
	    /**
	     * Makes a call to a cloud function.
	     * @param {String} name The function name.
	     * @param {Object} data The parameters to send to the cloud function.
	     * @param {Object} options A Backbone-style options object
	     * options.success, if set, should be a function to handle a successful
	     * call to a cloud function.  options.error should be a function that
	     * handles an error running the cloud function.  Both functions are
	     * optional.  Both functions take a single argument.
	     * @return {Parse.Promise} A promise that will be resolved with the result
	     * of the function.
	     */
	    run: function(name, data, options) {
	      options = options || {};
	
	      var request = Parse._request({
	        route: "functions",
	        className: name,
	        method: 'POST',
	        useMasterKey: options.useMasterKey,
	        sessionToken: options.sessionToken,
	        data: Parse._encode(data, null, true)
	      });
	
	      return request.then(function(resp) {
	        return Parse._decode(null, resp).result;
	      })._thenRunCallbacks(options);
	    }
	  });
	}(this));
	
	(function(root) {
	  root.Parse = root.Parse || {};
	  var Parse = root.Parse;
	
	  Parse.Installation = Parse.Object.extend("_Installation");
	
	  /**
	   * Contains functions to deal with Push in Parse
	   * @name Parse.Push
	   * @namespace
	   */
	  Parse.Push = Parse.Push || {};
	
	  /**
	   * Sends a push notification.
	   * @param {Object} data -  The data of the push notification.  Valid fields
	   * are:
	   *   <ol>
	   *     <li>channels - An Array of channels to push to.</li>
	   *     <li>push_time - A Date object for when to send the push.</li>
	   *     <li>expiration_time -  A Date object for when to expire
	   *         the push.</li>
	   *     <li>expiration_interval - The seconds from now to expire the push.</li>
	   *     <li>where - A Parse.Query over Parse.Installation that is used to match
	   *         a set of installations to push to.</li>
	   *     <li>data - The data to send as part of the push</li>
	   *   <ol>
	   * @param {Object} options An object that has an optional success function,
	   * that takes no arguments and will be called on a successful push, and
	   * an error function that takes a Parse.Error and will be called if the push
	   * failed.
	   * @return {Parse.Promise} A promise that is fulfilled when the push request
	   *     completes.
	   */
	  Parse.Push.send = function(data, options) {
	    options = options || {};
	
	    if (data.where) {
	      data.where = data.where.toJSON().where;
	    }
	
	    if (data.push_time) {
	      data.push_time = data.push_time.toJSON();
	    }
	
	    if (data.expiration_time) {
	      data.expiration_time = data.expiration_time.toJSON();
	    }
	
	    if (data.expiration_time && data.expiration_interval) {
	      throw "Both expiration_time and expiration_interval can't be set";
	    }
	
	    var request = Parse._request({
	      route: 'push',
	      method: 'POST',
	      data: data,
	      useMasterKey: options.useMasterKey
	    });
	    return request._thenRunCallbacks(options);
	  };
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzUzMzQzNmQ2NzEyZmMxZTRlODIiLCJ3ZWJwYWNrOi8vLy4vfi9wYXJzZS9idWlsZC9wYXJzZS1sYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJwYWNrLXN0cmVhbS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7YUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsc0NBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHVDQUFzQyxtQkFBbUIsRUFBRTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxpREFBZ0QsbUNBQW1DO0FBQ25GLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZ0RBQStDLG1DQUFtQztBQUNsRixNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVELG1CQUFtQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsaUNBQWlDLEVBQUU7QUFDOUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxPQUFPO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsOEJBQThCLEVBQUU7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsK0JBQStCLEVBQUU7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyw4QkFBOEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFpQyw4QkFBOEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUgsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0MsbUJBQW1CLEVBQUU7QUFDN0QsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxXQUFVLEVBQUU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBLFdBQVU7QUFDVjtBQUNBLFdBQVUsRUFBRTtBQUNaO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBb0IsdUJBQXVCLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSx5QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsYUFBYTtBQUM1QjtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIscUJBQXFCO0FBQy9DLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLFdBQVc7QUFDMUI7QUFDQSxnQkFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLFdBQVc7QUFDMUI7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWdDLEdBQUcsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxlQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7O0FDNTVTRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVSIsImZpbGUiOiJ2ZW5kb3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKGNhbGxiYWNrcy5sZW5ndGgpXG4gXHRcdFx0Y2FsbGJhY2tzLnNoaWZ0KCkuY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0aWYobW9yZU1vZHVsZXNbMF0pIHtcbiBcdFx0XHRpbnN0YWxsZWRNb2R1bGVzWzBdID0gMDtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0Ly8gQXJyYXkgbWVhbnMgXCJsb2FkaW5nXCIsIGFycmF5IGNvbnRhaW5zIGNhbGxiYWNrc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MjowXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkLCBjYWxsYmFjaykge1xuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKVxuIFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIGFuIGFycmF5IG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0ucHVzaChjYWxsYmFjayk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtjYWxsYmFja107XG4gXHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gXHRcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuY2h1bmsuanNcIjtcbiBcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3NTMzNDM2ZDY3MTJmYzFlNGU4MlxuICoqLyIsIi8qIVxuICogUGFyc2UgSmF2YVNjcmlwdCBTREtcbiAqIFZlcnNpb246IDEuNS4wXG4gKiBCdWlsdDogRnJpIEp1bCAxMCAyMDE1IDE3OjA1OjQ2XG4gKiBodHRwOi8vcGFyc2UuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTUgUGFyc2UsIExMQ1xuICpcbiAqIEluY2x1ZGVzOiBVbmRlcnNjb3JlLmpzXG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEyIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBJbmMuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICByb290LlBhcnNlLlZFUlNJT04gPSBcImpzMS41LjBcIjtcbn0odGhpcykpO1xuLy8gICAgIFVuZGVyc2NvcmUuanMgMS40LjRcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIEluYy5cbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCBpbiB0aGUgYnJvd3Nlciwgb3IgYGdsb2JhbGAgb24gdGhlIHNlcnZlci5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gRXN0YWJsaXNoIHRoZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIHRvIGJyZWFrIG91dCBvZiBhIGxvb3AgaXRlcmF0aW9uLlxuICB2YXIgYnJlYWtlciA9IHt9O1xuXG4gIC8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLCBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGUsIEZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgICBzbGljZSAgICAgICAgICAgID0gQXJyYXlQcm90by5zbGljZSxcbiAgICAgIGNvbmNhdCAgICAgICAgICAgPSBBcnJheVByb3RvLmNvbmNhdCxcbiAgICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUZvckVhY2ggICAgICA9IEFycmF5UHJvdG8uZm9yRWFjaCxcbiAgICBuYXRpdmVNYXAgICAgICAgICAgPSBBcnJheVByb3RvLm1hcCxcbiAgICBuYXRpdmVSZWR1Y2UgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZSxcbiAgICBuYXRpdmVSZWR1Y2VSaWdodCAgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0LFxuICAgIG5hdGl2ZUZpbHRlciAgICAgICA9IEFycmF5UHJvdG8uZmlsdGVyLFxuICAgIG5hdGl2ZUV2ZXJ5ICAgICAgICA9IEFycmF5UHJvdG8uZXZlcnksXG4gICAgbmF0aXZlU29tZSAgICAgICAgID0gQXJyYXlQcm90by5zb21lLFxuICAgIG5hdGl2ZUluZGV4T2YgICAgICA9IEFycmF5UHJvdG8uaW5kZXhPZixcbiAgICBuYXRpdmVMYXN0SW5kZXhPZiAgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mLFxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQ7XG5cbiAgLy8gQ3JlYXRlIGEgc2FmZSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciB1c2UgYmVsb3cuXG4gIHZhciBfID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgICB0aGlzLl93cmFwcGVkID0gb2JqO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yICoqTm9kZS5qcyoqLCB3aXRoXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkIGByZXF1aXJlKClgIEFQSS4gSWYgd2UncmUgaW5cbiAgLy8gdGhlIGJyb3dzZXIsIGFkZCBgX2AgYXMgYSBnbG9iYWwgb2JqZWN0IHZpYSBhIHN0cmluZyBpZGVudGlmaWVyLFxuICAvLyBmb3IgQ2xvc3VyZSBDb21waWxlciBcImFkdmFuY2VkXCIgbW9kZS5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS40LjQnO1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgb2JqZWN0cyB3aXRoIHRoZSBidWlsdC1pbiBgZm9yRWFjaGAsIGFycmF5cywgYW5kIHJhdyBvYmplY3RzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZm9yRWFjaGAgaWYgYXZhaWxhYmxlLlxuICB2YXIgZWFjaCA9IF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobmF0aXZlRm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gbmF0aXZlRm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoXy5oYXMob2JqLCBrZXkpKSB7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0b3IgdG8gZWFjaCBlbGVtZW50LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbWFwYCBpZiBhdmFpbGFibGUuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlTWFwICYmIG9iai5tYXAgPT09IG5hdGl2ZU1hcCkgcmV0dXJuIG9iai5tYXAoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHZhciByZWR1Y2VFcnJvciA9ICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2UgJiYgb2JqLnJlZHVjZSA9PT0gbmF0aXZlUmVkdWNlKSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2UoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IHZhbHVlO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZVJpZ2h0YCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlUmlnaHQgJiYgb2JqLnJlZHVjZVJpZ2h0ID09PSBuYXRpdmVSZWR1Y2VSaWdodCkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvcik7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09ICtsZW5ndGgpIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaW5kZXggPSBrZXlzID8ga2V5c1stLWxlbmd0aF0gOiAtLWxlbmd0aDtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gb2JqW2luZGV4XTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCBvYmpbaW5kZXhdLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQ7XG4gICAgYW55KG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmaWx0ZXJgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZUZpbHRlciAmJiBvYmouZmlsdGVyID09PSBuYXRpdmVGaWx0ZXIpIHJldHVybiBvYmouZmlsdGVyKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuICFpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgfSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBldmVyeWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChuYXRpdmVFdmVyeSAmJiBvYmouZXZlcnkgPT09IG5hdGl2ZUV2ZXJ5KSByZXR1cm4gb2JqLmV2ZXJ5KGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIShyZXN1bHQgPSByZXN1bHQgJiYgaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID0gXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlU29tZSAmJiBvYmouc29tZSA9PT0gbmF0aXZlU29tZSkgcmV0dXJuIG9iai5zb21lKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocmVzdWx0IHx8IChyZXN1bHQgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiB2YWx1ZSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgdGFyZ2V0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgb2JqLmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBvYmouaW5kZXhPZih0YXJnZXQpICE9IC0xO1xuICAgIHJldHVybiBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXSkuYXBwbHkodmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuIHZhbHVlW2tleV07IH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMsIGZpcnN0KSB7XG4gICAgaWYgKF8uaXNFbXB0eShhdHRycykpIHJldHVybiBmaXJzdCA/IG51bGwgOiBbXTtcbiAgICByZXR1cm4gX1tmaXJzdCA/ICdmaW5kJyA6ICdmaWx0ZXInXShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgaWYgKGF0dHJzW2tleV0gIT09IHZhbHVlW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8ud2hlcmUob2JqLCBhdHRycywgdHJ1ZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgb3IgKGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICAvLyBDYW4ndCBvcHRpbWl6ZSBhcnJheXMgb2YgaW50ZWdlcnMgbG9uZ2VyIHRoYW4gNjUsNTM1IGVsZW1lbnRzLlxuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MDc5N1xuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNFbXB0eShvYmopKSByZXR1cm4gLUluZmluaXR5O1xuICAgIHZhciByZXN1bHQgPSB7Y29tcHV0ZWQgOiAtSW5maW5pdHksIHZhbHVlOiAtSW5maW5pdHl9O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBjb21wdXRlZCA+PSByZXN1bHQuY29tcHV0ZWQgJiYgKHJlc3VsdCA9IHt2YWx1ZSA6IHZhbHVlLCBjb21wdXRlZCA6IGNvbXB1dGVkfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWluID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0VtcHR5KG9iaikpIHJldHVybiBJbmZpbml0eTtcbiAgICB2YXIgcmVzdWx0ID0ge2NvbXB1dGVkIDogSW5maW5pdHksIHZhbHVlOiBJbmZpbml0eX07XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gaXRlcmF0b3IgPyBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkgOiB2YWx1ZTtcbiAgICAgIGNvbXB1dGVkIDwgcmVzdWx0LmNvbXB1dGVkICYmIChyZXN1bHQgPSB7dmFsdWUgOiB2YWx1ZSwgY29tcHV0ZWQgOiBjb21wdXRlZH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhbiBhcnJheS5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJhbmQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc2h1ZmZsZWQgPSBbXTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJhbmQgPSBfLnJhbmRvbShpbmRleCsrKTtcbiAgICAgIHNodWZmbGVkW2luZGV4IC0gMV0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGxvb2t1cCBpdGVyYXRvcnMuXG4gIHZhciBsb29rdXBJdGVyYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZSA6IGZ1bmN0aW9uKG9iail7IHJldHVybiBvYmpbdmFsdWVdOyB9O1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRvci5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IodmFsdWUpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSA6IHZhbHVlLFxuICAgICAgICBpbmRleCA6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYSA6IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IDwgcmlnaHQuaW5kZXggPyAtMSA6IDE7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCwgYmVoYXZpb3IpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IodmFsdWUgfHwgXy5pZGVudGl0eSk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgdmFyIGtleSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgYmVoYXZpb3IocmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZ3JvdXAob2JqLCB2YWx1ZSwgY29udGV4dCwgZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgICAoXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0gOiAocmVzdWx0W2tleV0gPSBbXSkpLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGdyb3VwKG9iaiwgdmFsdWUsIGNvbnRleHQsIGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgICBpZiAoIV8uaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0gPSAwO1xuICAgICAgcmVzdWx0W2tleV0rKztcbiAgICB9KTtcbiAgfTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvciA9PSBudWxsID8gXy5pZGVudGl0eSA6IGxvb2t1cEl0ZXJhdG9yKGl0ZXJhdG9yKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSAobG93ICsgaGlnaCkgPj4+IDE7XG4gICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W21pZF0pIDwgdmFsdWUgPyBsb3cgPSBtaWQgKyAxIDogaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBTYWZlbHkgY29udmVydCBhbnl0aGluZyBpdGVyYWJsZSBpbnRvIGEgcmVhbCwgbGl2ZSBhcnJheS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICByZXR1cm4gKG4gIT0gbnVsbCkgJiYgIWd1YXJkID8gc2xpY2UuY2FsbChhcnJheSwgMCwgbikgOiBhcnJheVswXTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoXG4gIC8vIGBfLm1hcGAuXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbikpO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBsYXN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmICgobiAhPSBudWxsKSAmJiAhZ3VhcmQpIHtcbiAgICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBNYXRoLm1heChhcnJheS5sZW5ndGggLSBuLCAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKipcbiAgLy8gY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBvdXRwdXQpIHtcbiAgICBlYWNoKGlucHV0LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgc2hhbGxvdyA/IHB1c2guYXBwbHkob3V0cHV0LCB2YWx1ZSkgOiBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBvdXRwdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29tcGxldGVseSBmbGF0dGVuZWQgdmVyc2lvbiBvZiBhbiBhcnJheS5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgW10pO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbiAgLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBBbGlhc2VkIGFzIGB1bmlxdWVgLlxuICBfLnVuaXEgPSBfLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGlzU29ydGVkKSkge1xuICAgICAgY29udGV4dCA9IGl0ZXJhdG9yO1xuICAgICAgaXRlcmF0b3IgPSBpc1NvcnRlZDtcbiAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpbml0aWFsID0gaXRlcmF0b3IgPyBfLm1hcChhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIDogYXJyYXk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGVhY2goaW5pdGlhbCwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICBpZiAoaXNTb3J0ZWQgPyAoIWluZGV4IHx8IHNlZW5bc2Vlbi5sZW5ndGggLSAxXSAhPT0gdmFsdWUpIDogIV8uY29udGFpbnMoc2VlbiwgdmFsdWUpKSB7XG4gICAgICAgIHNlZW4ucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJlc3VsdHMucHVzaChhcnJheVtpbmRleF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbiAgLy8gcGFzc2VkLWluIGFycmF5cy5cbiAgXy5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBfLmZpbHRlcihfLnVuaXEoYXJyYXkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gXy5ldmVyeShyZXN0LCBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gXy5pbmRleE9mKG90aGVyLCBpdGVtKSA+PSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7IH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIGxlbmd0aCA9IF8ubWF4KF8ucGx1Y2soYXJncywgJ2xlbmd0aCcpKTtcbiAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdHNbaV0gPSBfLnBsdWNrKGFyZ3MsIFwiXCIgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIGlmIChsaXN0ID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcGx5IHVzIHdpdGggaW5kZXhPZiAoSSdtIGxvb2tpbmcgYXQgeW91LCAqKk1TSUUqKiksXG4gIC8vIHdlIG5lZWQgdGhpcyBmdW5jdGlvbi4gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhblxuICAvLyBpdGVtIGluIGFuIGFycmF5LCBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgaW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICAvLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbiAgLy8gZm9yICoqaXNTb3J0ZWQqKiB0byB1c2UgYmluYXJ5IHNlYXJjaC5cbiAgXy5pbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlzU29ydGVkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICBpZiAodHlwZW9mIGlzU29ydGVkID09ICdudW1iZXInKSB7XG4gICAgICAgIGkgPSAoaXNTb3J0ZWQgPCAwID8gTWF0aC5tYXgoMCwgbCArIGlzU29ydGVkKSA6IGlzU29ydGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgPSBfLnNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2ldID09PSBpdGVtID8gaSA6IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtLCBpc1NvcnRlZCk7XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBsYXN0SW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICBfLmxhc3RJbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGZyb20pIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBoYXNJbmRleCA9IGZyb20gIT0gbnVsbDtcbiAgICBpZiAobmF0aXZlTGFzdEluZGV4T2YgJiYgYXJyYXkubGFzdEluZGV4T2YgPT09IG5hdGl2ZUxhc3RJbmRleE9mKSB7XG4gICAgICByZXR1cm4gaGFzSW5kZXggPyBhcnJheS5sYXN0SW5kZXhPZihpdGVtLCBmcm9tKSA6IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICB2YXIgaSA9IChoYXNJbmRleCA/IGZyb20gOiBhcnJheS5sZW5ndGgpO1xuICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBhcmd1bWVudHNbMl0gfHwgMTtcblxuICAgIHZhciBsZW4gPSBNYXRoLm1heChNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIHJhbmdlID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICB3aGlsZShpZHggPCBsZW4pIHtcbiAgICAgIHJhbmdlW2lkeCsrXSA9IHN0YXJ0O1xuICAgICAgc3RhcnQgKz0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICBpZiAoZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kICYmIG5hdGl2ZUJpbmQpIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBCaW5kIGFsbCBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXRcbiAgLy8gYWxsIGNhbGxiYWNrcyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBmdW5jcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSBmdW5jcyA9IF8uZnVuY3Rpb25zKG9iaik7XG4gICAgZWFjaChmdW5jcywgZnVuY3Rpb24oZikgeyBvYmpbZl0gPSBfLmJpbmQob2JqW2ZdLCBvYmopOyB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vID0ge307XG4gICAgaGFzaGVyIHx8IChoYXNoZXIgPSBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIga2V5ID0gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gXy5oYXMobWVtbywga2V5KSA/IG1lbW9ba2V5XSA6IChtZW1vW2tleV0gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuICAvLyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG4gIF8uZGVsYXkgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7IH0sIHdhaXQpO1xuICB9O1xuXG4gIC8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuICAvLyBjbGVhcmVkLlxuICBfLmRlZmVyID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiBfLmRlbGF5LmFwcGx5KF8sIFtmdW5jLCAxXS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCB0aW1lb3V0LCByZXN1bHQ7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gbmV3IERhdGU7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gbmV3IERhdGU7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCByZXN1bHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWltbWVkaWF0ZSkgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH07XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIHJhbiA9IGZhbHNlLCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyYW4pIHJldHVybiBtZW1vO1xuICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gW2Z1bmNdO1xuICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHdyYXBwZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZnVuY3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBmb3IgKHZhciBpID0gZnVuY3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJncyA9IFtmdW5jc1tpXS5hcHBseSh0aGlzLCBhcmdzKV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBhZnRlciBiZWluZyBjYWxsZWQgTiB0aW1lcy5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgaWYgKHRpbWVzIDw9IDApIHJldHVybiBmdW5jKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBuYXRpdmVLZXlzIHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogIT09IE9iamVjdChvYmopKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9iamVjdCcpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5c1trZXlzLmxlbmd0aF0gPSBrZXk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSB2YWx1ZXMucHVzaChvYmpba2V5XSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBwYWlycyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIHBhaXJzLnB1c2goW2tleSwgb2JqW2tleV1dKTtcbiAgICByZXR1cm4gcGFpcnM7XG4gIH07XG5cbiAgLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuICBfLmludmVydCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXN1bHRbb2JqW2tleV1dID0ga2V5O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuICAvLyBBbGlhc2VkIGFzIGBtZXRob2RzYFxuICBfLmZ1bmN0aW9ucyA9IF8ubWV0aG9kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcy5zb3J0KCk7XG4gIH07XG5cbiAgLy8gRXh0ZW5kIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIF8uZXh0ZW5kID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoa2V5IGluIG9iaikgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKCFfLmNvbnRhaW5zKGtleXMsIGtleSkpIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChvYmpbcHJvcF0gPT0gbnVsbCkgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgdmFyIGVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBIYXJtb255IGBlZ2FsYCBwcm9wb3NhbDogaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PSAxIC8gYjtcbiAgICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS4gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvclxuICAgICAgICAvLyBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuIGEgIT0gK2EgPyBiICE9ICtiIDogKGEgPT0gMCA/IDEgLyBhID09IDEgLyBiIDogYSA9PSArYik7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT0gK2I7XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb21wYXJlZCBieSB0aGVpciBzb3VyY2UgcGF0dGVybnMgYW5kIGZsYWdzLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgICAgcmV0dXJuIGEuc291cmNlID09IGIuc291cmNlICYmXG4gICAgICAgICAgICAgICBhLmdsb2JhbCA9PSBiLmdsb2JhbCAmJlxuICAgICAgICAgICAgICAgYS5tdWx0aWxpbmUgPT0gYi5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgICAgIGEuaWdub3JlQ2FzZSA9PSBiLmlnbm9yZUNhc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PSBiO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG4gICAgdmFyIHNpemUgPSAwLCByZXN1bHQgPSB0cnVlO1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChjbGFzc05hbWUgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBzaXplID0gYS5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaXplID09IGIubGVuZ3RoO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gZXEoYVtzaXplXSwgYltzaXplXSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzXG4gICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgKGFDdG9yIGluc3RhbmNlb2YgYUN0b3IpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiAoYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKF8uaGFzKGEsIGtleSkpIHtcbiAgICAgICAgICAvLyBDb3VudCB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlci5cbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICBpZiAoXy5oYXMoYiwga2V5KSAmJiAhKHNpemUtLSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9ICFzaXplO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgW10sIFtdKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLlxuICBlYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiAhIShvYmogJiYgXy5oYXMob2JqLCAnY2FsbGVlJykpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuXG4gIGlmICh0eXBlb2YgKC8uLykgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPSArb2JqO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdG9ycy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZW50aXR5TWFwID0ge1xuICAgIGVzY2FwZToge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgXCInXCI6ICcmI3gyNzsnLFxuICAgICAgJy8nOiAnJiN4MkY7J1xuICAgIH1cbiAgfTtcbiAgZW50aXR5TWFwLnVuZXNjYXBlID0gXy5pbnZlcnQoZW50aXR5TWFwLmVzY2FwZSk7XG5cbiAgLy8gUmVnZXhlcyBjb250YWluaW5nIHRoZSBrZXlzIGFuZCB2YWx1ZXMgbGlzdGVkIGltbWVkaWF0ZWx5IGFib3ZlLlxuICB2YXIgZW50aXR5UmVnZXhlcyA9IHtcbiAgICBlc2NhcGU6ICAgbmV3IFJlZ0V4cCgnWycgKyBfLmtleXMoZW50aXR5TWFwLmVzY2FwZSkuam9pbignJykgKyAnXScsICdnJyksXG4gICAgdW5lc2NhcGU6IG5ldyBSZWdFeHAoJygnICsgXy5rZXlzKGVudGl0eU1hcC51bmVzY2FwZSkuam9pbignfCcpICsgJyknLCAnZycpXG4gIH07XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICBfLmVhY2goWydlc2NhcGUnLCAndW5lc2NhcGUnXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgX1ttZXRob2RdID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoc3RyaW5nID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIHJldHVybiAoJycgKyBzdHJpbmcpLnJlcGxhY2UoZW50aXR5UmVnZXhlc1ttZXRob2RdLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gZW50aXR5TWFwW21ldGhvZF1bbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBwcm9wZXJ0eSBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0O1xuICAvLyBvdGhlcndpc2UsIHJldHVybiBpdC5cbiAgXy5yZXN1bHQgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHQnOiAgICAgJ3QnLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHR8XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIGRhdGEsIHNldHRpbmdzKSB7XG4gICAgdmFyIHJlbmRlcjtcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgICAgICAucmVwbGFjZShlc2NhcGVyLCBmdW5jdGlvbihtYXRjaCkgeyByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07IH0pO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICAgIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgICBcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIgK1xuICAgICAgc291cmNlICsgXCJyZXR1cm4gX19wO1xcblwiO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkgcmV0dXJuIHJlbmRlcihkYXRhLCBfKTtcbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIChzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJykgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbiwgd2hpY2ggd2lsbCBkZWxlZ2F0ZSB0byB0aGUgd3JhcHBlci5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfKG9iaikuY2hhaW4oKTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT0gJ3NoaWZ0JyB8fCBuYW1lID09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSBkZWxldGUgb2JqWzBdO1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgXy5leHRlbmQoXy5wcm90b3R5cGUsIHtcblxuICAgIC8vIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgICBjaGFpbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9jaGFpbiA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gICAgfVxuXG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuXG4vKmdsb2JhbCBfOiBmYWxzZSwgJDogZmFsc2UsIGxvY2FsU3RvcmFnZTogZmFsc2UsIHByb2Nlc3M6IHRydWUsXG4gIFhNTEh0dHBSZXF1ZXN0OiBmYWxzZSwgWERvbWFpblJlcXVlc3Q6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSxcbiAgcmVxdWlyZTogZmFsc2UsIHNldFRpbWVvdXQ6IHRydWUgKi9cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICAvKipcbiAgICogQ29udGFpbnMgYWxsIFBhcnNlIEFQSSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXG4gICAqIEBuYW1lIFBhcnNlXG4gICAqIEBuYW1lc3BhY2VcbiAgICpcbiAgICogQ29udGFpbnMgYWxsIFBhcnNlIEFQSSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXG4gICAqL1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuXG4gIHZhciByZXEgPSB0eXBlb2YocmVxdWlyZSkgPT09ICdmdW5jdGlvbicgPyByZXF1aXJlIDogbnVsbDtcbiAgLy8gTG9hZCByZWZlcmVuY2VzIHRvIG90aGVyIGRlcGVuZGVuY2llc1xuICBpZiAodHlwZW9mKFhNTEh0dHBSZXF1ZXN0KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBQYXJzZS5YTUxIdHRwUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2UgaWYgKHR5cGVvZihyZXF1aXJlKSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdHlwZW9mKHJlcXVpcmUuZW5zdXJlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBQYXJzZS5YTUxIdHRwUmVxdWVzdCA9IHJlcSgneG1saHR0cHJlcXVlc3QnKS5YTUxIdHRwUmVxdWVzdDtcbiAgfVxuICAvLyBJbXBvcnQgUGFyc2UncyBsb2NhbCBjb3B5IG9mIHVuZGVyc2NvcmUuXG4gIGlmICh0eXBlb2YoZXhwb3J0cykgIT09ICd1bmRlZmluZWQnICYmIGV4cG9ydHMuXykge1xuICAgIC8vIFdlJ3JlIHJ1bm5pbmcgaW4gYSBDb21tb25KUyBlbnZpcm9ubWVudFxuICAgIFBhcnNlLl8gPSBleHBvcnRzLl8ubm9Db25mbGljdCgpO1xuICAgIGV4cG9ydHMuUGFyc2UgPSBQYXJzZTtcbiAgfSBlbHNlIHtcbiAgICBQYXJzZS5fID0gXy5ub0NvbmZsaWN0KCk7XG4gIH1cblxuICAvLyBJZiBqUXVlcnkgb3IgWmVwdG8gaGFzIGJlZW4gaW5jbHVkZWQsIGdyYWIgYSByZWZlcmVuY2UgdG8gaXQuXG4gIGlmICh0eXBlb2YoJCkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBQYXJzZS4kID0gJDtcbiAgfVxuXG4gIC8vIEhlbHBlcnNcbiAgLy8gLS0tLS0tLVxuXG4gIC8vIFNoYXJlZCBlbXB0eSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBhaWQgaW4gcHJvdG90eXBlLWNoYWluIGNyZWF0aW9uLlxuICB2YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gVE9ETzogZml4IHRoaXMgc28gdGhhdCBQYXJzZU9iamVjdHMgYXJlbid0IGFsbCBjYWxsZWQgXCJjaGlsZFwiIGluIGRlYnVnZ2VyLlxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cbiAgLy8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcbiAgLy8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cbiAgdmFyIGluaGVyaXRzID0gZnVuY3Rpb24ocGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIHZhciBjaGlsZDtcblxuICAgIC8vIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIG5ldyBzdWJjbGFzcyBpcyBlaXRoZXIgZGVmaW5lZCBieSB5b3VcbiAgICAvLyAodGhlIFwiY29uc3RydWN0b3JcIiBwcm9wZXJ0eSBpbiB5b3VyIGBleHRlbmRgIGRlZmluaXRpb24pLCBvciBkZWZhdWx0ZWRcbiAgICAvLyBieSB1cyB0byBzaW1wbHkgY2FsbCB0aGUgcGFyZW50J3MgY29uc3RydWN0b3IuXG4gICAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogQGlnbm9yZSAqL1xuICAgICAgY2hpbGQgPSBmdW5jdGlvbigpeyBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICB9XG5cbiAgICAvLyBJbmhlcml0IGNsYXNzIChzdGF0aWMpIHByb3BlcnRpZXMgZnJvbSBwYXJlbnQuXG4gICAgUGFyc2UuXy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAvLyBTZXQgdGhlIHByb3RvdHlwZSBjaGFpbiB0byBpbmhlcml0IGZyb20gYHBhcmVudGAsIHdpdGhvdXQgY2FsbGluZ1xuICAgIC8vIGBwYXJlbnRgJ3MgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAgRW1wdHlDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG5cbiAgICAvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcbiAgICAvLyBpZiBzdXBwbGllZC5cbiAgICBpZiAocHJvdG9Qcm9wcykge1xuICAgICAgUGFyc2UuXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgc3RhdGljIHByb3BlcnRpZXMgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBpZiBzdXBwbGllZC5cbiAgICBpZiAoc3RhdGljUHJvcHMpIHtcbiAgICAgIFBhcnNlLl8uZXh0ZW5kKGNoaWxkLCBzdGF0aWNQcm9wcyk7XG4gICAgfVxuXG4gICAgLy8gQ29ycmVjdGx5IHNldCBjaGlsZCdzIGBwcm90b3R5cGUuY29uc3RydWN0b3JgLlxuICAgIGNoaWxkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNoaWxkO1xuXG4gICAgLy8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHkgaW4gY2FzZSB0aGUgcGFyZW50J3MgcHJvdG90eXBlIGlzXG4gICAgLy8gbmVlZGVkIGxhdGVyLlxuICAgIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH07XG5cbiAgLy8gU2V0IHRoZSBzZXJ2ZXIgZm9yIFBhcnNlIHRvIHRhbGsgdG8uXG4gIFBhcnNlLnNlcnZlclVSTCA9IFwiaHR0cHM6Ly9hcGkucGFyc2UuY29tXCI7XG5cbiAgLy8gQ2hlY2sgd2hldGhlciB3ZSBhcmUgcnVubmluZyBpbiBOb2RlLmpzLlxuICBpZiAodHlwZW9mKHByb2Nlc3MpICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICBwcm9jZXNzLnZlcnNpb25zICYmXG4gICAgICBwcm9jZXNzLnZlcnNpb25zLm5vZGUpIHtcbiAgICBQYXJzZS5faXNOb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIGZpcnN0IHRvIHNldCB1cCB5b3VyIGF1dGhlbnRpY2F0aW9uIHRva2VucyBmb3IgUGFyc2UuXG4gICAqIFlvdSBjYW4gZ2V0IHlvdXIga2V5cyBmcm9tIHRoZSBEYXRhIEJyb3dzZXIgb24gcGFyc2UuY29tLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBwbGljYXRpb25JZCBZb3VyIFBhcnNlIEFwcGxpY2F0aW9uIElELlxuICAgKiBAcGFyYW0ge1N0cmluZ30gamF2YVNjcmlwdEtleSBZb3VyIFBhcnNlIEphdmFTY3JpcHQgS2V5LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWFzdGVyS2V5IChvcHRpb25hbCkgWW91ciBQYXJzZSBNYXN0ZXIgS2V5LiAoTm9kZS5qcyBvbmx5ISlcbiAgICovXG4gIFBhcnNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhcHBsaWNhdGlvbklkLCBqYXZhU2NyaXB0S2V5LCBtYXN0ZXJLZXkpIHtcbiAgICBpZiAobWFzdGVyS2V5KSB7XG4gICAgICB0aHJvdyBcIlBhcnNlLmluaXRpYWxpemUoKSB3YXMgcGFzc2VkIGEgTWFzdGVyIEtleSwgd2hpY2ggaXMgb25seSBcIiArXG4gICAgICAgIFwiYWxsb3dlZCBmcm9tIHdpdGhpbiBOb2RlLmpzLlwiO1xuICAgIH1cbiAgICBQYXJzZS5faW5pdGlhbGl6ZShhcHBsaWNhdGlvbklkLCBqYXZhU2NyaXB0S2V5KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCBmaXJzdCB0byBzZXQgdXAgbWFzdGVyIGF1dGhlbnRpY2F0aW9uIHRva2VucyBmb3IgUGFyc2UuXG4gICAqIFRoaXMgbWV0aG9kIGlzIGZvciBQYXJzZSdzIG93biBwcml2YXRlIHVzZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwcGxpY2F0aW9uSWQgWW91ciBQYXJzZSBBcHBsaWNhdGlvbiBJRC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGphdmFTY3JpcHRLZXkgWW91ciBQYXJzZSBKYXZhU2NyaXB0IEtleS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hc3RlcktleSBZb3VyIFBhcnNlIE1hc3RlciBLZXkuXG4gICAqL1xuICBQYXJzZS5faW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFwcGxpY2F0aW9uSWQsIGphdmFTY3JpcHRLZXksIG1hc3RlcktleSkge1xuICAgIFBhcnNlLmFwcGxpY2F0aW9uSWQgPSBhcHBsaWNhdGlvbklkO1xuICAgIFBhcnNlLmphdmFTY3JpcHRLZXkgPSBqYXZhU2NyaXB0S2V5O1xuICAgIFBhcnNlLm1hc3RlcktleSA9IG1hc3RlcktleTtcbiAgICBQYXJzZS5fdXNlTWFzdGVyS2V5ID0gZmFsc2U7XG4gIH07XG5cbiAgLy8gSWYgd2UncmUgcnVubmluZyBpbiBub2RlLmpzLCBhbGxvdyB1c2luZyB0aGUgbWFzdGVyIGtleS5cbiAgaWYgKFBhcnNlLl9pc05vZGUpIHtcbiAgICBQYXJzZS5pbml0aWFsaXplID0gUGFyc2UuX2luaXRpYWxpemU7XG5cbiAgICBQYXJzZS5DbG91ZCA9IFBhcnNlLkNsb3VkIHx8IHt9O1xuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIHRoZSBQYXJzZSBTREsgdG8gdXNpbmcgdGhlIE1hc3RlciBrZXkuICBUaGUgTWFzdGVyIGtleSBncmFudHNcbiAgICAgKiBwcml2ZWxlZ2VkIGFjY2VzcyB0byB0aGUgZGF0YSBpbiBQYXJzZSBhbmQgY2FuIGJlIHVzZWQgdG8gYnlwYXNzIEFDTHMgYW5kXG4gICAgICogb3RoZXIgcmVzdHJpY3Rpb25zIHRoYXQgYXJlIGFwcGxpZWQgdG8gdGhlIGNsaWVudCBTREtzLlxuICAgICAqIDxwPjxzdHJvbmc+PGVtPkF2YWlsYWJsZSBpbiBDbG91ZCBDb2RlIGFuZCBOb2RlLmpzIG9ubHkuPC9lbT48L3N0cm9uZz5cbiAgICAgKiA8L3A+XG4gICAgICovXG4gICAgUGFyc2UuQ2xvdWQudXNlTWFzdGVyS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBQYXJzZS5fdXNlTWFzdGVyS2V5ID0gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcHJlZml4IGZvciBTdG9yYWdlIGtleXMgdXNlZCBieSB0aGlzIGluc3RhbmNlIG9mIFBhcnNlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBUaGUgcmVsYXRpdmUgc3VmZml4IHRvIGFwcGVuZCB0byBpdC5cbiAgICogICAgIG51bGwgb3IgdW5kZWZpbmVkIGlzIHRyZWF0ZWQgYXMgdGhlIGVtcHR5IHN0cmluZy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgZnVsbCBrZXkgbmFtZS5cbiAgICovXG4gIFBhcnNlLl9nZXRQYXJzZVBhdGggPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgaWYgKCFQYXJzZS5hcHBsaWNhdGlvbklkKSB7XG4gICAgICB0aHJvdyBcIllvdSBuZWVkIHRvIGNhbGwgUGFyc2UuaW5pdGlhbGl6ZSBiZWZvcmUgdXNpbmcgUGFyc2UuXCI7XG4gICAgfVxuICAgIGlmICghcGF0aCkge1xuICAgICAgcGF0aCA9IFwiXCI7XG4gICAgfVxuICAgIGlmICghUGFyc2UuXy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgdGhyb3cgXCJUcmllZCB0byBnZXQgYSBTdG9yYWdlIHBhdGggdGhhdCB3YXNuJ3QgYSBTdHJpbmcuXCI7XG4gICAgfVxuICAgIGlmIChwYXRoWzBdID09PSBcIi9cIikge1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICByZXR1cm4gXCJQYXJzZS9cIiArIFBhcnNlLmFwcGxpY2F0aW9uSWQgKyBcIi9cIiArIHBhdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgdW5pcXVlIHN0cmluZyBmb3IgdGhpcyBhcHAgb25cbiAgICogdGhpcyBtYWNoaW5lLlxuICAgKiBHZXRzIHJlc2V0IHdoZW4gU3RvcmFnZSBpcyBjbGVhcmVkLlxuICAgKi9cbiAgUGFyc2UuX2luc3RhbGxhdGlvbklkID0gbnVsbDtcbiAgUGFyc2UuX2dldEluc3RhbGxhdGlvbklkID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gU2VlIGlmIGl0J3MgY2FjaGVkIGluIFJBTS5cbiAgICBpZiAoUGFyc2UuX2luc3RhbGxhdGlvbklkKSB7XG4gICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5hcyhQYXJzZS5faW5zdGFsbGF0aW9uSWQpO1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBnZXQgaXQgZnJvbSBTdG9yYWdlLlxuICAgIHZhciBwYXRoID0gUGFyc2UuX2dldFBhcnNlUGF0aChcImluc3RhbGxhdGlvbklkXCIpO1xuICAgIHJldHVybiAoUGFyc2UuU3RvcmFnZS5nZXRJdGVtQXN5bmMocGF0aClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIFBhcnNlLl9pbnN0YWxsYXRpb25JZCA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghUGFyc2UuX2luc3RhbGxhdGlvbklkIHx8IFBhcnNlLl9pbnN0YWxsYXRpb25JZCA9PT0gXCJcIikge1xuICAgICAgICAgIC8vIEl0IHdhc24ndCBpbiBTdG9yYWdlLCBzbyBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAgICAgIHZhciBoZXhPY3RldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgTWF0aC5mbG9vcigoMStNYXRoLnJhbmRvbSgpKSoweDEwMDAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH07XG4gICAgICAgICAgUGFyc2UuX2luc3RhbGxhdGlvbklkID0gKFxuICAgICAgICAgICAgaGV4T2N0ZXQoKSArIGhleE9jdGV0KCkgKyBcIi1cIiArXG4gICAgICAgICAgICBoZXhPY3RldCgpICsgXCItXCIgK1xuICAgICAgICAgICAgaGV4T2N0ZXQoKSArIFwiLVwiICtcbiAgICAgICAgICAgIGhleE9jdGV0KCkgKyBcIi1cIiArXG4gICAgICAgICAgICBoZXhPY3RldCgpICsgaGV4T2N0ZXQoKSArIGhleE9jdGV0KCkpO1xuICAgICAgICAgIHJldHVybiBQYXJzZS5TdG9yYWdlLnNldEl0ZW1Bc3luYyhwYXRoLCBQYXJzZS5faW5zdGFsbGF0aW9uSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMoUGFyc2UuX2luc3RhbGxhdGlvbklkKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBQYXJzZS5fcGFyc2VEYXRlID0gZnVuY3Rpb24oaXNvODYwMSkge1xuICAgIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKFxuICAgICAgXCJeKFswLTldezEsNH0pLShbMC05XXsxLDJ9KS0oWzAtOV17MSwyfSlcIiArIFwiVFwiICtcbiAgICAgIFwiKFswLTldezEsMn0pOihbMC05XXsxLDJ9KTooWzAtOV17MSwyfSlcIiArXG4gICAgICBcIiguKFswLTldKykpP1wiICsgXCJaJFwiKTtcbiAgICB2YXIgbWF0Y2ggPSByZWdleHAuZXhlYyhpc284NjAxKTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgeWVhciA9IG1hdGNoWzFdIHx8IDA7XG4gICAgdmFyIG1vbnRoID0gKG1hdGNoWzJdIHx8IDEpIC0gMTtcbiAgICB2YXIgZGF5ID0gbWF0Y2hbM10gfHwgMDtcbiAgICB2YXIgaG91ciA9IG1hdGNoWzRdIHx8IDA7XG4gICAgdmFyIG1pbnV0ZSA9IG1hdGNoWzVdIHx8IDA7XG4gICAgdmFyIHNlY29uZCA9IG1hdGNoWzZdIHx8IDA7XG4gICAgdmFyIG1pbGxpID0gbWF0Y2hbOF0gfHwgMDtcblxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGkpKTtcbiAgfTtcblxuICBQYXJzZS5fYWpheElFOCA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsLCBkYXRhKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUGFyc2UuUHJvbWlzZSgpO1xuICAgIHZhciB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB4ZHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGRyLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB4ZHIub25lcnJvciA9IHhkci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIExldCdzIGZha2UgYSByZWFsIGVycm9yIG1lc3NhZ2UuXG4gICAgICB2YXIgZmFrZVJlc3BvbnNlID0ge1xuICAgICAgICByZXNwb25zZVRleHQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjb2RlOiBQYXJzZS5FcnJvci5YX0RPTUFJTl9SRVFVRVNULFxuICAgICAgICAgIGVycm9yOiBcIklFJ3MgWERvbWFpblJlcXVlc3QgZG9lcyBub3Qgc3VwcGx5IGVycm9yIGluZm8uXCJcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgICBwcm9taXNlLnJlamVjdChmYWtlUmVzcG9uc2UpO1xuICAgIH07XG4gICAgeGRyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgIHhkci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4ZHIuc2VuZChkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBQYXJzZS5fdXNlWERvbWFpblJlcXVlc3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mKFhEb21haW5SZXF1ZXN0KSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gV2UncmUgaW4gSUUgOCsuXG4gICAgICBpZiAoJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCkpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gSUUgMTArLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIFRPRE8oa2xpbXQpOiBHZXQgcmlkIG9mIHN1Y2Nlc3MvZXJyb3IgdXNhZ2UgaW4gd2Vic2l0ZS5cbiAgUGFyc2UuX2FqYXggPSBmdW5jdGlvbihtZXRob2QsIHVybCwgZGF0YSwgc3VjY2VzcywgZXJyb3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuXG4gICAgaWYgKFBhcnNlLl91c2VYRG9tYWluUmVxdWVzdCgpKSB7XG4gICAgICByZXR1cm4gUGFyc2UuX2FqYXhJRTgobWV0aG9kLCB1cmwsIGRhdGEpLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlID0gbmV3IFBhcnNlLlByb21pc2UoKTtcbiAgICB2YXIgYXR0ZW1wdHMgPSAwO1xuXG4gICAgdmFyIGRpc3BhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGFuZGxlZCA9IGZhbHNlO1xuICAgICAgdmFyIHhociA9IG5ldyBQYXJzZS5YTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlLCB4aHIuc3RhdHVzLCB4aHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA+PSA1MDApIHsgLy8gUmV0cnkgb24gNVhYXG4gICAgICAgICAgICBpZiAoKythdHRlbXB0cyA8IDUpIHtcbiAgICAgICAgICAgICAgLy8gRXhwb25lbnRpYWxseS1ncm93aW5nIGRlbGF5XG4gICAgICAgICAgICAgIHZhciBkZWxheSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDEyNSAqIE1hdGgucG93KDIsIGF0dGVtcHRzKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRpc3BhdGNoLCBkZWxheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBZnRlciA1IHJldHJpZXMsIGZhaWxcbiAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoeGhyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoeGhyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpOyAgLy8gYXZvaWQgcHJlLWZsaWdodC5cbiAgICAgIGlmIChQYXJzZS5faXNOb2RlKSB7XG4gICAgICAgIC8vIEFkZCBhIHNwZWNpYWwgdXNlciBhZ2VudCBqdXN0IGZvciByZXF1ZXN0IGZyb20gbm9kZS5qcy5cbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJVc2VyLUFnZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGFyc2UvXCIgKyBQYXJzZS5WRVJTSU9OICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKE5vZGVKUyBcIiArIHByb2Nlc3MudmVyc2lvbnMubm9kZSArIFwiKVwiKTtcbiAgICAgIH1cbiAgICAgIHhoci5zZW5kKGRhdGEpO1xuICAgIH07XG5cbiAgICBkaXNwYXRjaCgpO1xuICAgIHJldHVybiBwcm9taXNlLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpOyBcbiAgfTtcblxuICAvLyBBIHNlbGYtcHJvcGFnYXRpbmcgZXh0ZW5kIGZ1bmN0aW9uLlxuICBQYXJzZS5fZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcywgY2xhc3NQcm9wcykge1xuICAgIHZhciBjaGlsZCA9IGluaGVyaXRzKHRoaXMsIHByb3RvUHJvcHMsIGNsYXNzUHJvcHMpO1xuICAgIGNoaWxkLmV4dGVuZCA9IHRoaXMuZXh0ZW5kO1xuICAgIHJldHVybiBjaGlsZDtcbiAgfTtcblxuICAvKipcbiAgICogT3B0aW9uczpcbiAgICogICByb3V0ZTogaXMgY2xhc3NlcywgdXNlcnMsIGxvZ2luLCBldGMuXG4gICAqICAgb2JqZWN0SWQ6IG51bGwgaWYgdGhlcmUgaXMgbm8gYXNzb2NpYXRlZCBvYmplY3RJZC5cbiAgICogICBtZXRob2Q6IHRoZSBodHRwIG1ldGhvZCBmb3IgdGhlIFJFU1QgQVBJLlxuICAgKiAgIGRhdGFPYmplY3Q6IHRoZSBwYXlsb2FkIGFzIGFuIG9iamVjdCwgb3IgbnVsbCBpZiB0aGVyZSBpcyBub25lLlxuICAgKiAgIHVzZU1hc3RlcktleTogb3ZlcnJpZGVzIHdoZXRoZXIgdG8gdXNlIHRoZSBtYXN0ZXIga2V5IGlmIHNldC5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgUGFyc2UuX3JlcXVlc3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIHJvdXRlID0gb3B0aW9ucy5yb3V0ZTtcbiAgICB2YXIgY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgdmFyIG9iamVjdElkID0gb3B0aW9ucy5vYmplY3RJZDtcbiAgICB2YXIgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XG4gICAgdmFyIHVzZU1hc3RlcktleSA9IG9wdGlvbnMudXNlTWFzdGVyS2V5O1xuICAgIHZhciBzZXNzaW9uVG9rZW4gPSBvcHRpb25zLnNlc3Npb25Ub2tlbjtcbiAgICB2YXIgZGF0YU9iamVjdCA9IG9wdGlvbnMuZGF0YTtcblxuICAgIGlmICghUGFyc2UuYXBwbGljYXRpb25JZCkge1xuICAgICAgdGhyb3cgXCJZb3UgbXVzdCBzcGVjaWZ5IHlvdXIgYXBwbGljYXRpb25JZCB1c2luZyBQYXJzZS5pbml0aWFsaXplLlwiO1xuICAgIH1cblxuICAgIGlmICghUGFyc2UuamF2YVNjcmlwdEtleSAmJiAhUGFyc2UubWFzdGVyS2V5KSB7XG4gICAgICB0aHJvdyBcIllvdSBtdXN0IHNwZWNpZnkgYSBrZXkgdXNpbmcgUGFyc2UuaW5pdGlhbGl6ZS5cIjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBXZSBjYW4gcmVtb3ZlIHRoaXMgY2hlY2sgbGF0ZXIsIGJ1dCBpdCdzIHVzZWZ1bCBmb3IgZGV2ZWxvcG1lbnQuXG4gICAgaWYgKHJvdXRlICE9PSBcImJhdGNoXCIgJiZcbiAgICAgICAgcm91dGUgIT09IFwiY2xhc3Nlc1wiICYmXG4gICAgICAgIHJvdXRlICE9PSBcImV2ZW50c1wiICYmXG4gICAgICAgIHJvdXRlICE9PSBcImZpbGVzXCIgJiZcbiAgICAgICAgcm91dGUgIT09IFwiZnVuY3Rpb25zXCIgJiZcbiAgICAgICAgcm91dGUgIT09IFwibG9naW5cIiAmJlxuICAgICAgICByb3V0ZSAhPT0gXCJsb2dvdXRcIiAmJlxuICAgICAgICByb3V0ZSAhPT0gXCJwdXNoXCIgJiZcbiAgICAgICAgcm91dGUgIT09IFwicmVxdWVzdFBhc3N3b3JkUmVzZXRcIiAmJlxuICAgICAgICByb3V0ZSAhPT0gXCJyZXN0X3ZlcmlmeV9hbmFseXRpY3NcIiAmJlxuICAgICAgICByb3V0ZSAhPT0gXCJ1c2Vyc1wiICYmXG4gICAgICAgIHJvdXRlICE9PSBcImpvYnNcIiAmJlxuICAgICAgICByb3V0ZSAhPT0gXCJjb25maWdcIiAmJlxuICAgICAgICByb3V0ZSAhPT0gXCJzZXNzaW9uc1wiICYmXG4gICAgICAgIHJvdXRlICE9PSBcInVwZ3JhZGVUb1Jldm9jYWJsZVNlc3Npb25cIikge1xuICAgICAgdGhyb3cgXCJCYWQgcm91dGU6ICdcIiArIHJvdXRlICsgXCInLlwiO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBQYXJzZS5zZXJ2ZXJVUkw7XG4gICAgaWYgKHVybC5jaGFyQXQodXJsLmxlbmd0aCAtIDEpICE9PSBcIi9cIikge1xuICAgICAgdXJsICs9IFwiL1wiO1xuICAgIH1cbiAgICB1cmwgKz0gXCIxL1wiICsgcm91dGU7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgdXJsICs9IFwiL1wiICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAob2JqZWN0SWQpIHtcbiAgICAgIHVybCArPSBcIi9cIiArIG9iamVjdElkO1xuICAgIH1cblxuICAgIGRhdGFPYmplY3QgPSBQYXJzZS5fLmNsb25lKGRhdGFPYmplY3QgfHwge30pO1xuICAgIGlmIChtZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgICBkYXRhT2JqZWN0Ll9tZXRob2QgPSBtZXRob2Q7XG4gICAgICBtZXRob2QgPSBcIlBPU1RcIjtcbiAgICB9XG5cbiAgICBpZiAoUGFyc2UuXy5pc1VuZGVmaW5lZCh1c2VNYXN0ZXJLZXkpKSB7XG4gICAgICB1c2VNYXN0ZXJLZXkgPSBQYXJzZS5fdXNlTWFzdGVyS2V5O1xuICAgIH1cblxuICAgIGRhdGFPYmplY3QuX0FwcGxpY2F0aW9uSWQgPSBQYXJzZS5hcHBsaWNhdGlvbklkO1xuICAgIGlmICghdXNlTWFzdGVyS2V5KSB7XG4gICAgICBkYXRhT2JqZWN0Ll9KYXZhU2NyaXB0S2V5ID0gUGFyc2UuamF2YVNjcmlwdEtleTtcbiAgICB9IGVsc2UgaWYgKCFQYXJzZS5tYXN0ZXJLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSB0aGUgTWFzdGVyIEtleSwgaXQgaGFzIG5vdCBiZWVuIHByb3ZpZGVkLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhT2JqZWN0Ll9NYXN0ZXJLZXkgPSBQYXJzZS5tYXN0ZXJLZXk7XG4gICAgfVxuXG4gICAgZGF0YU9iamVjdC5fQ2xpZW50VmVyc2lvbiA9IFBhcnNlLlZFUlNJT047XG5cbiAgICByZXR1cm4gUGFyc2UuX2dldEluc3RhbGxhdGlvbklkKCkudGhlbihmdW5jdGlvbihpaWQpIHtcbiAgICAgIGRhdGFPYmplY3QuX0luc3RhbGxhdGlvbklkID0gaWlkO1xuXG4gICAgICBpZiAoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzKHsgX3Nlc3Npb25Ub2tlbjogc2Vzc2lvblRva2VuIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFQYXJzZS5Vc2VyLl9jYW5Vc2VDdXJyZW50VXNlcigpKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzKG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUGFyc2UuVXNlci5fY3VycmVudEFzeW5jKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbihjdXJyZW50VXNlcikge1xuICAgICAgaWYgKGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLl9zZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgZGF0YU9iamVjdC5fU2Vzc2lvblRva2VuID0gY3VycmVudFVzZXIuX3Nlc3Npb25Ub2tlbjtcbiAgICAgIH1cblxuICAgICAgaWYgKFBhcnNlLlVzZXIuX2lzUmV2b2NhYmxlU2Vzc2lvbkVuYWJsZWQpIHtcbiAgICAgICAgZGF0YU9iamVjdC5fUmV2b2NhYmxlU2Vzc2lvbiA9ICcxJztcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqZWN0KTtcblxuICAgICAgcmV0dXJuIFBhcnNlLl9hamF4KG1ldGhvZCwgdXJsLCBkYXRhKTtcbiAgICB9KS50aGVuKG51bGwsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAvLyBUcmFuc2Zvcm0gdGhlIGVycm9yIGludG8gYW4gaW5zdGFuY2Ugb2YgUGFyc2UuRXJyb3IgYnkgdHJ5aW5nIHRvIHBhcnNlXG4gICAgICAvLyB0aGUgZXJyb3Igc3RyaW5nIGFzIEpTT04uXG4gICAgICB2YXIgZXJyb3I7XG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGVycm9ySlNPTiA9IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICBlcnJvciA9IG5ldyBQYXJzZS5FcnJvcihlcnJvckpTT04uY29kZSwgZXJyb3JKU09OLmVycm9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcGFyc2UgdGhlIGVycm9yIHRleHQsIHRoYXQncyBva2F5LlxuICAgICAgICAgIGVycm9yID0gbmV3IFBhcnNlLkVycm9yKFxuICAgICAgICAgICAgICBQYXJzZS5FcnJvci5JTlZBTElEX0pTT04sXG4gICAgICAgICAgICAgIFwiUmVjZWl2ZWQgYW4gZXJyb3Igd2l0aCBpbnZhbGlkIEpTT04gZnJvbSBQYXJzZTogXCIgK1xuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBuZXcgUGFyc2UuRXJyb3IoXG4gICAgICAgICAgICBQYXJzZS5FcnJvci5DT05ORUNUSU9OX0ZBSUxFRCxcbiAgICAgICAgICAgIFwiWE1MSHR0cFJlcXVlc3QgZmFpbGVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICB9XG4gICAgICAvLyBCeSBleHBsaWNpdGx5IHJldHVybmluZyBhIHJlamVjdGVkIFByb21pc2UsIHRoaXMgd2lsbCB3b3JrIHdpdGhcbiAgICAgIC8vIGVpdGhlciBqUXVlcnkgb3IgUHJvbWlzZXMvQSBzZW1hbnRpY3MuXG4gICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBhIHZhbHVlIGZyb20gYSBCYWNrYm9uZSBvYmplY3QgYXMgYSBwcm9wZXJ0eVxuICAvLyBvciBhcyBhIGZ1bmN0aW9uLlxuICBQYXJzZS5fZ2V0VmFsdWUgPSBmdW5jdGlvbihvYmplY3QsIHByb3ApIHtcbiAgICBpZiAoIShvYmplY3QgJiYgb2JqZWN0W3Byb3BdKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBQYXJzZS5fLmlzRnVuY3Rpb24ob2JqZWN0W3Byb3BdKSA/IG9iamVjdFtwcm9wXSgpIDogb2JqZWN0W3Byb3BdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHZhbHVlIGluIGEgUGFyc2UgT2JqZWN0IGludG8gdGhlIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uLlxuICAgKiBUaGlzIGlzIHRoZSBKUyBlcXVpdmFsZW50IG9mIEphdmEncyBQYXJzZS5tYXliZVJlZmVyZW5jZUFuZEVuY29kZShPYmplY3QpXG4gICAqIGlmIHNlZW5PYmplY3RzIGlzIGZhbHNleS4gT3RoZXJ3aXNlIGFueSBQYXJzZS5PYmplY3RzIG5vdCBpblxuICAgKiBzZWVuT2JqZWN0cyB3aWxsIGJlIGZ1bGx5IGVtYmVkZGVkIHJhdGhlciB0aGFuIGVuY29kZWRcbiAgICogYXMgYSBwb2ludGVyLiAgVGhpcyBhcnJheSB3aWxsIGJlIHVzZWQgdG8gcHJldmVudCBnb2luZyBpbnRvIGFuIGluZmluaXRlXG4gICAqIGxvb3AgYmVjYXVzZSB3ZSBoYXZlIGNpcmN1bGFyIHJlZmVyZW5jZXMuICBJZiBzZWVuT2JqZWN0c1xuICAgKiBpcyBzZXQsIHRoZW4gbm9uZSBvZiB0aGUgUGFyc2UgT2JqZWN0cyB0aGF0IGFyZSBzZXJpYWxpemVkIGNhbiBiZSBkaXJ0eS5cbiAgICovXG4gIFBhcnNlLl9lbmNvZGUgPSBmdW5jdGlvbih2YWx1ZSwgc2Vlbk9iamVjdHMsIGRpc2FsbG93T2JqZWN0cykge1xuICAgIHZhciBfID0gUGFyc2UuXztcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQYXJzZS5PYmplY3QpIHtcbiAgICAgIGlmIChkaXNhbGxvd09iamVjdHMpIHtcbiAgICAgICAgdGhyb3cgXCJQYXJzZS5PYmplY3RzIG5vdCBhbGxvd2VkIGhlcmVcIjtcbiAgICAgIH1cbiAgICAgIGlmICghc2Vlbk9iamVjdHMgfHwgXy5pbmNsdWRlKHNlZW5PYmplY3RzLCB2YWx1ZSkgfHwgIXZhbHVlLl9oYXNEYXRhKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5fdG9Qb2ludGVyKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlLmRpcnR5KCkpIHtcbiAgICAgICAgc2Vlbk9iamVjdHMgPSBzZWVuT2JqZWN0cy5jb25jYXQodmFsdWUpO1xuICAgICAgICByZXR1cm4gUGFyc2UuX2VuY29kZSh2YWx1ZS5fdG9GdWxsSlNPTihzZWVuT2JqZWN0cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZW5PYmplY3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhbGxvd09iamVjdHMpO1xuICAgICAgfVxuICAgICAgdGhyb3cgXCJUcmllZCB0byBzYXZlIGFuIG9iamVjdCB3aXRoIGEgcG9pbnRlciB0byBhIG5ldywgdW5zYXZlZCBvYmplY3QuXCI7XG4gICAgfVxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBhcnNlLkFDTCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSlNPTigpO1xuICAgIH1cbiAgICBpZiAoXy5pc0RhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGVuY29kZSBpbnZhbGlkIERhdGUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFwiX190eXBlXCI6IFwiRGF0ZVwiLCBcImlzb1wiOiB2YWx1ZS50b0pTT04oKSB9O1xuICAgIH1cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQYXJzZS5HZW9Qb2ludCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSlNPTigpO1xuICAgIH1cbiAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIF8ubWFwKHZhbHVlLCBmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5fZW5jb2RlKHgsIHNlZW5PYmplY3RzLCBkaXNhbGxvd09iamVjdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChfLmlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnNvdXJjZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGFyc2UuUmVsYXRpb24pIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0pTT04oKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGFyc2UuT3ApIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0pTT04oKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGFyc2UuRmlsZSkge1xuICAgICAgaWYgKCF2YWx1ZS51cmwoKSkge1xuICAgICAgICB0aHJvdyBcIlRyaWVkIHRvIHNhdmUgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYW4gdW5zYXZlZCBmaWxlLlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX190eXBlOiBcIkZpbGVcIixcbiAgICAgICAgbmFtZTogdmFsdWUubmFtZSgpLFxuICAgICAgICB1cmw6IHZhbHVlLnVybCgpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHZhciBvdXRwdXQgPSB7fTtcbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKHZhbHVlLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgIG91dHB1dFtrXSA9IFBhcnNlLl9lbmNvZGUodiwgc2Vlbk9iamVjdHMsIGRpc2FsbG93T2JqZWN0cyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogVGhlIGludmVyc2UgZnVuY3Rpb24gb2YgUGFyc2UuX2VuY29kZS5cbiAgICogVE9ETzogbWFrZSBkZWNvZGUgbm90IG11dGF0ZSB2YWx1ZS5cbiAgICovXG4gIFBhcnNlLl9kZWNvZGUgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgdmFyIF8gPSBQYXJzZS5fO1xuICAgIGlmICghXy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIFBhcnNlLl9hcnJheUVhY2godmFsdWUsIGZ1bmN0aW9uKHYsIGspIHtcbiAgICAgICAgdmFsdWVba10gPSBQYXJzZS5fZGVjb2RlKGssIHYpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBhcnNlLk9iamVjdCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQYXJzZS5GaWxlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBhcnNlLk9wKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5fX29wKSB7XG4gICAgICByZXR1cm4gUGFyc2UuT3AuX2RlY29kZSh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5fX3R5cGUgPT09IFwiUG9pbnRlclwiICYmIHZhbHVlLmNsYXNzTmFtZSkge1xuICAgICAgdmFyIHBvaW50ZXIgPSBQYXJzZS5PYmplY3QuX2NyZWF0ZSh2YWx1ZS5jbGFzc05hbWUpO1xuICAgICAgcG9pbnRlci5fZmluaXNoRmV0Y2goeyBvYmplY3RJZDogdmFsdWUub2JqZWN0SWQgfSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHBvaW50ZXI7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5fX3R5cGUgPT09IFwiT2JqZWN0XCIgJiYgdmFsdWUuY2xhc3NOYW1lKSB7XG4gICAgICAvLyBJdCdzIGFuIE9iamVjdCBpbmNsdWRlZCBpbiBhIHF1ZXJ5IHJlc3VsdC5cbiAgICAgIHZhciBjbGFzc05hbWUgPSB2YWx1ZS5jbGFzc05hbWU7XG4gICAgICBkZWxldGUgdmFsdWUuX190eXBlO1xuICAgICAgZGVsZXRlIHZhbHVlLmNsYXNzTmFtZTtcbiAgICAgIHZhciBvYmplY3QgPSBQYXJzZS5PYmplY3QuX2NyZWF0ZShjbGFzc05hbWUpO1xuICAgICAgb2JqZWN0Ll9maW5pc2hGZXRjaCh2YWx1ZSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cbiAgICBpZiAodmFsdWUuX190eXBlID09PSBcIkRhdGVcIikge1xuICAgICAgcmV0dXJuIFBhcnNlLl9wYXJzZURhdGUodmFsdWUuaXNvKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLl9fdHlwZSA9PT0gXCJHZW9Qb2ludFwiKSB7XG4gICAgICByZXR1cm4gbmV3IFBhcnNlLkdlb1BvaW50KHtcbiAgICAgICAgbGF0aXR1ZGU6IHZhbHVlLmxhdGl0dWRlLFxuICAgICAgICBsb25naXR1ZGU6IHZhbHVlLmxvbmdpdHVkZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChrZXkgPT09IFwiQUNMXCIpIHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBhcnNlLkFDTCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFBhcnNlLkFDTCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5fX3R5cGUgPT09IFwiUmVsYXRpb25cIikge1xuICAgICAgdmFyIHJlbGF0aW9uID0gbmV3IFBhcnNlLlJlbGF0aW9uKG51bGwsIGtleSk7XG4gICAgICByZWxhdGlvbi50YXJnZXRDbGFzc05hbWUgPSB2YWx1ZS5jbGFzc05hbWU7XG4gICAgICByZXR1cm4gcmVsYXRpb247XG4gICAgfVxuICAgIGlmICh2YWx1ZS5fX3R5cGUgPT09IFwiRmlsZVwiKSB7XG4gICAgICB2YXIgZmlsZSA9IG5ldyBQYXJzZS5GaWxlKHZhbHVlLm5hbWUpO1xuICAgICAgZmlsZS5fdXJsID0gdmFsdWUudXJsO1xuICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuICAgIFBhcnNlLl9vYmplY3RFYWNoKHZhbHVlLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICB2YWx1ZVtrXSA9IFBhcnNlLl9kZWNvZGUoaywgdik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIFBhcnNlLl9hcnJheUVhY2ggPSBQYXJzZS5fLmVhY2g7XG5cbiAgLyoqXG4gICAqIERvZXMgYSBkZWVwIHRyYXZlcnNhbCBvZiBldmVyeSBpdGVtIGluIG9iamVjdCwgY2FsbGluZyBmdW5jIG9uIGV2ZXJ5IG9uZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIHRyYXZlcnNlIGRlZXBseS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZXZlcnkgaXRlbS4gSXQgd2lsbFxuICAgKiAgICAgYmUgcGFzc2VkIHRoZSBpdGVtIGFzIGFuIGFyZ3VtZW50LiBJZiBpdCByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlLCB0aGF0XG4gICAqICAgICB2YWx1ZSB3aWxsIHJlcGxhY2UgdGhlIGl0ZW0gaW4gaXRzIHBhcmVudCBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIHt9IHRoZSByZXN1bHQgb2YgY2FsbGluZyBmdW5jIG9uIHRoZSB0b3AtbGV2ZWwgb2JqZWN0IGl0c2VsZi5cbiAgICovXG4gIFBhcnNlLl90cmF2ZXJzZSA9IGZ1bmN0aW9uKG9iamVjdCwgZnVuYywgc2Vlbikge1xuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBQYXJzZS5PYmplY3QpIHtcbiAgICAgIHNlZW4gPSBzZWVuIHx8IFtdO1xuICAgICAgaWYgKFBhcnNlLl8uaW5kZXhPZihzZWVuLCBvYmplY3QpID49IDApIHtcbiAgICAgICAgLy8gV2UndmUgYWxyZWFkeSB2aXNpdGVkIHRoaXMgb2JqZWN0IGluIHRoaXMgY2FsbC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2Vlbi5wdXNoKG9iamVjdCk7XG4gICAgICBQYXJzZS5fdHJhdmVyc2Uob2JqZWN0LmF0dHJpYnV0ZXMsIGZ1bmMsIHNlZW4pO1xuICAgICAgcmV0dXJuIGZ1bmMob2JqZWN0KTtcbiAgICB9XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFBhcnNlLlJlbGF0aW9uIHx8IG9iamVjdCBpbnN0YW5jZW9mIFBhcnNlLkZpbGUpIHtcbiAgICAgIC8vIE5vdGhpbmcgbmVlZHMgdG8gYmUgZG9uZSwgYnV0IHdlIGRvbid0IHdhbnQgdG8gcmVjdXJzZSBpbnRvIHRoZVxuICAgICAgLy8gb2JqZWN0J3MgcGFyZW50IGluZmluaXRlbHksIHNvIHdlIGNhdGNoIHRoaXMgY2FzZS5cbiAgICAgIHJldHVybiBmdW5jKG9iamVjdCk7XG4gICAgfVxuICAgIGlmIChQYXJzZS5fLmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgUGFyc2UuXy5lYWNoKG9iamVjdCwgZnVuY3Rpb24oY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIHZhciBuZXdDaGlsZCA9IFBhcnNlLl90cmF2ZXJzZShjaGlsZCwgZnVuYywgc2Vlbik7XG4gICAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICAgIG9iamVjdFtpbmRleF0gPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuYyhvYmplY3QpO1xuICAgIH1cbiAgICBpZiAoUGFyc2UuXy5pc09iamVjdChvYmplY3QpKSB7XG4gICAgICBQYXJzZS5fZWFjaChvYmplY3QsIGZ1bmN0aW9uKGNoaWxkLCBrZXkpIHtcbiAgICAgICAgdmFyIG5ld0NoaWxkID0gUGFyc2UuX3RyYXZlcnNlKGNoaWxkLCBmdW5jLCBzZWVuKTtcbiAgICAgICAgaWYgKG5ld0NoaWxkKSB7XG4gICAgICAgICAgb2JqZWN0W2tleV0gPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuYyhvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYyhvYmplY3QpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGxpa2UgXy5lYWNoLCBleGNlcHQ6XG4gICAqICogaXQgZG9lc24ndCB3b3JrIGZvciBzby1jYWxsZWQgYXJyYXktbGlrZSBvYmplY3RzLFxuICAgKiAqIGl0IGRvZXMgd29yayBmb3IgZGljdGlvbmFyaWVzIHdpdGggYSBcImxlbmd0aFwiIGF0dHJpYnV0ZS5cbiAgICovXG4gIFBhcnNlLl9vYmplY3RFYWNoID0gUGFyc2UuX2VhY2ggPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrKSB7XG4gICAgdmFyIF8gPSBQYXJzZS5fO1xuICAgIGlmIChfLmlzT2JqZWN0KG9iaikpIHtcbiAgICAgIF8uZWFjaChfLmtleXMob2JqKSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGNhbGxiYWNrKG9ialtrZXldLCBrZXkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF8uZWFjaChvYmosIGNhbGxiYWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIG51bGwgb3IgdW5kZWZpbmVkLlxuICBQYXJzZS5faXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIFBhcnNlLl8uaXNOdWxsKHgpIHx8IFBhcnNlLl8uaXNVbmRlZmluZWQoeCk7XG4gIH07XG59KHRoaXMpKTtcblxuLyogZ2xvYmFsIHJlcXVpcmU6IGZhbHNlLCBsb2NhbFN0b3JhZ2U6IGZhbHNlICovXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgXG4gIHZhciBTdG9yYWdlID0ge1xuICAgIGFzeW5jOiBmYWxzZSxcbiAgfTtcblxuICB2YXIgaGFzTG9jYWxTdG9yYWdlID0gKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKTtcbiAgaWYgKGhhc0xvY2FsU3RvcmFnZSkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3VwcG9ydGVkJywgdHJ1ZSk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3VwcG9ydGVkJyk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBoYXNMb2NhbFN0b3JhZ2UgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGhhc0xvY2FsU3RvcmFnZSkge1xuICAgIFN0b3JhZ2UuZ2V0SXRlbSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXRoKTtcbiAgICB9O1xuXG4gICAgU3RvcmFnZS5zZXRJdGVtID0gZnVuY3Rpb24ocGF0aCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXRoLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIFN0b3JhZ2UucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwYXRoKTtcbiAgICB9O1xuXG4gICAgU3RvcmFnZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgQXN5bmNTdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBBc3luY1N0b3JhZ2UgPSBldmFsKFwicmVxdWlyZSgnQXN5bmNTdG9yYWdlJylcIik7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4gICAgICBTdG9yYWdlLmFzeW5jID0gdHJ1ZTtcblxuICAgICAgU3RvcmFnZS5nZXRJdGVtQXN5bmMgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHZhciBwID0gbmV3IFBhcnNlLlByb21pc2UoKTtcbiAgICAgICAgQXN5bmNTdG9yYWdlLmdldEl0ZW0ocGF0aCwgZnVuY3Rpb24oZXJyLCB2YWx1ZSkge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHAucmVqZWN0KGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHAucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9O1xuXG4gICAgICBTdG9yYWdlLnNldEl0ZW1Bc3luYyA9IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwID0gbmV3IFBhcnNlLlByb21pc2UoKTtcbiAgICAgICAgQXN5bmNTdG9yYWdlLnNldEl0ZW0ocGF0aCwgdmFsdWUsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHAucmVqZWN0KGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHAucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9O1xuXG4gICAgICBTdG9yYWdlLnJlbW92ZUl0ZW1Bc3luYyA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgdmFyIHAgPSBuZXcgUGFyc2UuUHJvbWlzZSgpO1xuICAgICAgICBBc3luY1N0b3JhZ2UucmVtb3ZlSXRlbShwYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBwLnJlamVjdChlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwLnJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH07XG5cbiAgICAgIFN0b3JhZ2UuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgQXN5bmNTdG9yYWdlLmNsZWFyKCk7XG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG4gIGlmICghU3RvcmFnZS5hc3luYyAmJiAhU3RvcmFnZS5nZXRJdGVtKSB7XG4gICAgdmFyIG1lbU1hcCA9IFN0b3JhZ2UuaW5NZW1vcnlNYXAgPSB7fTtcbiAgICBTdG9yYWdlLmdldEl0ZW0gPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICBpZiAobWVtTWFwLmhhc093blByb3BlcnR5KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiBtZW1NYXBbcGF0aF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgU3RvcmFnZS5zZXRJdGVtID0gZnVuY3Rpb24ocGF0aCwgdmFsdWUpIHtcbiAgICAgIG1lbU1hcFtwYXRoXSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFN0b3JhZ2UucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIGRlbGV0ZSBtZW1NYXBbcGF0aF07XG4gICAgfTtcblxuICAgIFN0b3JhZ2UuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBtZW1NYXApIHtcbiAgICAgICAgaWYgKG1lbU1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIG1lbU1hcFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIFdlIGNhbiB1c2Ugc3luY2hyb25vdXMgbWV0aG9kcyBmcm9tIGFzeW5jIHNjZW5hcmlvcywgYnV0IG5vdCB2aWNlLXZlcnNhXG4gIGlmICghU3RvcmFnZS5hc3luYykge1xuICAgIFN0b3JhZ2UuZ2V0SXRlbUFzeW5jID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMoXG4gICAgICAgIFN0b3JhZ2UuZ2V0SXRlbShwYXRoKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgU3RvcmFnZS5zZXRJdGVtQXN5bmMgPSBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICAgU3RvcmFnZS5zZXRJdGVtKHBhdGgsIHZhbHVlKTtcbiAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgU3RvcmFnZS5yZW1vdmVJdGVtQXN5bmMgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5hcyhcbiAgICAgICAgU3RvcmFnZS5yZW1vdmVJdGVtKHBhdGgpXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICBQYXJzZS5TdG9yYWdlID0gU3RvcmFnZTtcblxufSkodGhpcyk7XG5cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgLyoqXG4gICAqIEBuYW1lc3BhY2UgUHJvdmlkZXMgYW4gaW50ZXJmYWNlIHRvIFBhcnNlJ3MgbG9nZ2luZyBhbmQgYW5hbHl0aWNzIGJhY2tlbmQuXG4gICAqL1xuICBQYXJzZS5BbmFseXRpY3MgPSBQYXJzZS5BbmFseXRpY3MgfHwge307XG5cbiAgXy5leHRlbmQoUGFyc2UuQW5hbHl0aWNzLCAvKiogQGxlbmRzIFBhcnNlLkFuYWx5dGljcyAqLyB7XG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBvY2N1cnJlbmNlIG9mIGEgY3VzdG9tIGV2ZW50IHdpdGggYWRkaXRpb25hbCBkaW1lbnNpb25zLlxuICAgICAqIFBhcnNlIHdpbGwgc3RvcmUgYSBkYXRhIHBvaW50IGF0IHRoZSB0aW1lIG9mIGludm9jYXRpb24gd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBldmVudCBuYW1lLlxuICAgICAqXG4gICAgICogRGltZW5zaW9ucyB3aWxsIGFsbG93IHNlZ21lbnRhdGlvbiBvZiB0aGUgb2NjdXJyZW5jZXMgb2YgdGhpcyBjdXN0b21cbiAgICAgKiBldmVudC4gS2V5cyBhbmQgdmFsdWVzIHNob3VsZCBiZSB7QGNvZGUgU3RyaW5nfXMsIGFuZCB3aWxsIHRocm93XG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogVG8gdHJhY2sgYSB1c2VyIHNpZ251cCBhbG9uZyB3aXRoIGFkZGl0aW9uYWwgbWV0YWRhdGEsIGNvbnNpZGVyIHRoZVxuICAgICAqIGZvbGxvd2luZzpcbiAgICAgKiA8cHJlPlxuICAgICAqIHZhciBkaW1lbnNpb25zID0ge1xuICAgICAqICBnZW5kZXI6ICdtJyxcbiAgICAgKiAgc291cmNlOiAnd2ViJyxcbiAgICAgKiAgZGF5VHlwZTogJ3dlZWtlbmQnXG4gICAgICogfTtcbiAgICAgKiBQYXJzZS5BbmFseXRpY3MudHJhY2soJ3NpZ251cCcsIGRpbWVuc2lvbnMpO1xuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogVGhlcmUgaXMgYSBkZWZhdWx0IGxpbWl0IG9mIDggZGltZW5zaW9ucyBwZXIgZXZlbnQgdHJhY2tlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gZXZlbnQgdG8gcmVwb3J0IHRvIFBhcnNlIGFzXG4gICAgICogaGF2aW5nIGhhcHBlbmVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkaW1lbnNpb25zIFRoZSBkaWN0aW9uYXJ5IG9mIGluZm9ybWF0aW9uIGJ5IHdoaWNoIHRvXG4gICAgICogc2VnbWVudCB0aGlzIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgY2FsbGJhY2sgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IEEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIHJvdW5kLXRyaXBcbiAgICAgKiB0byB0aGUgc2VydmVyIGNvbXBsZXRlcy5cbiAgICAgKi9cbiAgICB0cmFjazogZnVuY3Rpb24obmFtZSwgZGltZW5zaW9ucywgb3B0aW9ucykge1xuICAgICAgbmFtZSA9IG5hbWUgfHwgJyc7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xccyokLywgJycpO1xuICAgICAgaWYgKG5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93ICdBIG5hbWUgZm9yIHRoZSBjdXN0b20gZXZlbnQgbXVzdCBiZSBwcm92aWRlZCc7XG4gICAgICB9XG5cbiAgICAgIF8uZWFjaChkaW1lbnNpb25zLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICBpZiAoIV8uaXNTdHJpbmcoa2V5KSB8fCAhXy5pc1N0cmluZyh2YWwpKSB7XG4gICAgICAgICAgdGhyb3cgJ3RyYWNrKCkgZGltZW5zaW9ucyBleHBlY3RzIGtleXMgYW5kIHZhbHVlcyBvZiB0eXBlIFwic3RyaW5nXCIuJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgcmV0dXJuIFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgcm91dGU6ICdldmVudHMnLFxuICAgICAgICBjbGFzc05hbWU6IG5hbWUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7IGRpbWVuc2lvbnM6IGRpbWVuc2lvbnMgfVxuICAgICAgfSkuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn0odGhpcykpO1xuXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgdmFyIF8gPSBQYXJzZS5fO1xuXG4gIC8qKlxuICAgKiBAY2xhc3MgUGFyc2UuQ29uZmlnIGlzIGEgbG9jYWwgcmVwcmVzZW50YXRpb24gb2YgY29uZmlndXJhdGlvbiBkYXRhIHRoYXRcbiAgICogY2FuIGJlIHNldCBmcm9tIHRoZSBQYXJzZSBkYXNoYm9hcmQuXG4gICAqL1xuICBQYXJzZS5Db25maWcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLl9lc2NhcGVkQXR0cmlidXRlcyA9IHt9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG1vc3QgcmVjZW50bHktZmV0Y2hlZCBjb25maWd1cmF0aW9uIG9iamVjdCwgZWl0aGVyIGZyb21cbiAgICogbWVtb3J5IG9yIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEByZXR1cm4ge1BhcnNlLkNvbmZpZ30gVGhlIG1vc3QgcmVjZW50bHktZmV0Y2hlZCBQYXJzZS5Db25maWcgaWYgaXRcbiAgICogICAgIGV4aXN0cywgZWxzZSBhbiBlbXB0eSBQYXJzZS5Db25maWcuXG4gICAqL1xuICBQYXJzZS5Db25maWcuY3VycmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChQYXJzZS5Db25maWcuX2N1cnJlbnRDb25maWcpIHtcbiAgICAgIHJldHVybiBQYXJzZS5Db25maWcuX2N1cnJlbnRDb25maWc7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZyA9IG5ldyBQYXJzZS5Db25maWcoKTtcblxuICAgIGlmIChQYXJzZS5TdG9yYWdlLmFzeW5jKSB7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIHZhciBjb25maWdEYXRhID0gUGFyc2UuU3RvcmFnZS5nZXRJdGVtKFBhcnNlLl9nZXRQYXJzZVBhdGgoXG4gICAgICAgICAgUGFyc2UuQ29uZmlnLl9DVVJSRU5UX0NPTkZJR19LRVkpKTtcblxuICAgIGlmIChjb25maWdEYXRhKSB7ICBcbiAgICAgIGNvbmZpZy5fZmluaXNoRmV0Y2goSlNPTi5wYXJzZShjb25maWdEYXRhKSk7XG4gICAgICBQYXJzZS5Db25maWcuX2N1cnJlbnRDb25maWcgPSBjb25maWc7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYSBuZXcgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEJhY2tib25lLXN0eWxlIG9wdGlvbnMgb2JqZWN0LlxuICAgKiBWYWxpZCBvcHRpb25zIGFyZTo8dWw+XG4gICAqICAgPGxpPnN1Y2Nlc3M6IEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZ2V0IGNvbXBsZXRlcyBzdWNjZXNzZnVsbHkuXG4gICAqICAgPGxpPmVycm9yOiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGdldCBmYWlscy5cbiAgICogPC91bD5cbiAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCBhIG5ld2x5LWNyZWF0ZWRcbiAgICogICAgIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHdoZW4gdGhlIGdldCBjb21wbGV0ZXMuXG4gICAqL1xuICBQYXJzZS5Db25maWcuZ2V0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIHJlcXVlc3QgPSBQYXJzZS5fcmVxdWVzdCh7XG4gICAgICByb3V0ZTogXCJjb25maWdcIixcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLnBhcmFtcykge1xuICAgICAgICB2YXIgZXJyb3JPYmplY3QgPSBuZXcgUGFyc2UuRXJyb3IoXG4gICAgICAgICAgUGFyc2UuRXJyb3IuSU5WQUxJRF9KU09OLFxuICAgICAgICAgIFwiQ29uZmlnIEpTT04gcmVzcG9uc2UgaW52YWxpZC5cIik7XG4gICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmVycm9yKGVycm9yT2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbmZpZyA9IG5ldyBQYXJzZS5Db25maWcoKTtcbiAgICAgIGNvbmZpZy5fZmluaXNoRmV0Y2gocmVzcG9uc2UpO1xuICAgICAgUGFyc2UuQ29uZmlnLl9jdXJyZW50Q29uZmlnID0gY29uZmlnO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9KS5fdGhlblJ1bkNhbGxiYWNrcyhvcHRpb25zKTtcbiAgfTtcblxuICBQYXJzZS5Db25maWcucHJvdG90eXBlID0ge1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgSFRNTC1lc2NhcGVkIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBlc2NhcGU6IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIHZhciBodG1sID0gdGhpcy5fZXNjYXBlZEF0dHJpYnV0ZXNbYXR0cl07XG4gICAgICBpZiAoaHRtbCkge1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH1cbiAgICAgIHZhciB2YWwgPSB0aGlzLmF0dHJpYnV0ZXNbYXR0cl07XG4gICAgICB2YXIgZXNjYXBlZDtcbiAgICAgIGlmIChQYXJzZS5faXNOdWxsT3JVbmRlZmluZWQodmFsKSkge1xuICAgICAgICBlc2NhcGVkID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlc2NhcGVkID0gXy5lc2NhcGUodmFsLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXNjYXBlZEF0dHJpYnV0ZXNbYXR0cl0gPSBlc2NhcGVkO1xuICAgICAgcmV0dXJuIGVzY2FwZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0ciBUaGUgbmFtZSBvZiBhbiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgIH0sXG5cbiAgICBfZmluaXNoRmV0Y2g6IGZ1bmN0aW9uKHNlcnZlckRhdGEpIHtcbiAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFBhcnNlLl9kZWNvZGUobnVsbCwgXy5jbG9uZShzZXJ2ZXJEYXRhLnBhcmFtcykpO1xuICAgICAgaWYgKCFQYXJzZS5TdG9yYWdlLmFzeW5jKSB7XG4gICAgICAgIC8vIFdlIG9ubHkgcHJvdmlkZSBsb2NhbCBjYWNoaW5nIG9mIGNvbmZpZyB3aXRoIHN5bmNocm9ub3VzIFN0b3JhZ2VcbiAgICAgICAgUGFyc2UuU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgUGFyc2UuX2dldFBhcnNlUGF0aChQYXJzZS5Db25maWcuX0NVUlJFTlRfQ09ORklHX0tFWSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzZXJ2ZXJEYXRhKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFBhcnNlLkNvbmZpZy5fY3VycmVudENvbmZpZyA9IG51bGw7XG5cbiAgUGFyc2UuQ29uZmlnLl9DVVJSRU5UX0NPTkZJR19LRVkgPSBcImN1cnJlbnRDb25maWdcIjtcblxufSh0aGlzKSk7XG5cblxuKGZ1bmN0aW9uKHJvb3QpIHtcbiAgcm9vdC5QYXJzZSA9IHJvb3QuUGFyc2UgfHwge307XG4gIHZhciBQYXJzZSA9IHJvb3QuUGFyc2U7XG4gIHZhciBfID0gUGFyc2UuXztcblxuICAvKipcbiAgICogQ29uc3RydWN0cyBhIG5ldyBQYXJzZS5FcnJvciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gY29kZSBhbmQgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgQW4gZXJyb3IgY29kZSBjb25zdGFudCBmcm9tIDxjb2RlPlBhcnNlLkVycm9yPC9jb2RlPi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgQSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3IuXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKiA8cD5DbGFzcyB1c2VkIGZvciBhbGwgb2JqZWN0cyBwYXNzZWQgdG8gZXJyb3IgY2FsbGJhY2tzLjwvcD5cbiAgICovXG4gIFBhcnNlLkVycm9yID0gZnVuY3Rpb24oY29kZSwgbWVzc2FnZSkge1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfTtcblxuICBfLmV4dGVuZChQYXJzZS5FcnJvciwgLyoqIEBsZW5kcyBQYXJzZS5FcnJvciAqLyB7XG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHNvbWUgZXJyb3Igb3RoZXIgdGhhbiB0aG9zZSBlbnVtZXJhdGVkIGhlcmUuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgT1RIRVJfQ0FVU0U6IC0xLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgc29tZXRoaW5nIGhhcyBnb25lIHdyb25nIHdpdGggdGhlIHNlcnZlci5cbiAgICAgKiBJZiB5b3UgZ2V0IHRoaXMgZXJyb3IgY29kZSwgaXQgaXMgUGFyc2UncyBmYXVsdC4gQ29udGFjdCB1cyBhdCBcbiAgICAgKiBodHRwczovL3BhcnNlLmNvbS9oZWxwXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiAxLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoZSBjb25uZWN0aW9uIHRvIHRoZSBQYXJzZSBzZXJ2ZXJzIGZhaWxlZC5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBDT05ORUNUSU9OX0ZBSUxFRDogMTAwLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoZSBzcGVjaWZpZWQgb2JqZWN0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgT0JKRUNUX05PVF9GT1VORDogMTAxLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHlvdSB0cmllZCB0byBxdWVyeSB3aXRoIGEgZGF0YXR5cGUgdGhhdCBkb2Vzbid0XG4gICAgICogc3VwcG9ydCBpdCwgbGlrZSBleGFjdCBtYXRjaGluZyBhbiBhcnJheSBvciBvYmplY3QuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgSU5WQUxJRF9RVUVSWTogMTAyLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIGEgbWlzc2luZyBvciBpbnZhbGlkIGNsYXNzbmFtZS4gQ2xhc3NuYW1lcyBhcmVcbiAgICAgKiBjYXNlLXNlbnNpdGl2ZS4gVGhleSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGFuZCBhLXpBLVowLTlfIGFyZSB0aGVcbiAgICAgKiBvbmx5IHZhbGlkIGNoYXJhY3RlcnMuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgSU5WQUxJRF9DTEFTU19OQU1FOiAxMDMsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgYW4gdW5zcGVjaWZpZWQgb2JqZWN0IGlkLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIE1JU1NJTkdfT0JKRUNUX0lEOiAxMDQsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgYW4gaW52YWxpZCBrZXkgbmFtZS4gS2V5cyBhcmUgY2FzZS1zZW5zaXRpdmUuIFRoZXlcbiAgICAgKiBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGFuZCBhLXpBLVowLTlfIGFyZSB0aGUgb25seSB2YWxpZCBjaGFyYWN0ZXJzLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIElOVkFMSURfS0VZX05BTUU6IDEwNSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyBhIG1hbGZvcm1lZCBwb2ludGVyLiBZb3Ugc2hvdWxkIG5vdCBzZWUgdGhpcyB1bmxlc3NcbiAgICAgKiB5b3UgaGF2ZSBiZWVuIG11Y2tpbmcgYWJvdXQgY2hhbmdpbmcgaW50ZXJuYWwgUGFyc2UgY29kZS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBJTlZBTElEX1BPSU5URVI6IDEwNixcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IGJhZGx5IGZvcm1lZCBKU09OIHdhcyByZWNlaXZlZCB1cHN0cmVhbS4gVGhpc1xuICAgICAqIGVpdGhlciBpbmRpY2F0ZXMgeW91IGhhdmUgZG9uZSBzb21ldGhpbmcgdW51c3VhbCB3aXRoIG1vZGlmeWluZyBob3dcbiAgICAgKiB0aGluZ3MgZW5jb2RlIHRvIEpTT04sIG9yIHRoZSBuZXR3b3JrIGlzIGZhaWxpbmcgYmFkbHkuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgSU5WQUxJRF9KU09OOiAxMDcsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhhdCB0aGUgZmVhdHVyZSB5b3UgdHJpZWQgdG8gYWNjZXNzIGlzIG9ubHlcbiAgICAgKiBhdmFpbGFibGUgaW50ZXJuYWxseSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBDT01NQU5EX1VOQVZBSUxBQkxFOiAxMDgsXG5cbiAgICAvKipcbiAgICAgKiBZb3UgbXVzdCBjYWxsIFBhcnNlLmluaXRpYWxpemUgYmVmb3JlIHVzaW5nIHRoZSBQYXJzZSBsaWJyYXJ5LlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIE5PVF9JTklUSUFMSVpFRDogMTA5LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYSBmaWVsZCB3YXMgc2V0IHRvIGFuIGluY29uc2lzdGVudCB0eXBlLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIElOQ09SUkVDVF9UWVBFOiAxMTEsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgYW4gaW52YWxpZCBjaGFubmVsIG5hbWUuIEEgY2hhbm5lbCBuYW1lIGlzIGVpdGhlclxuICAgICAqIGFuIGVtcHR5IHN0cmluZyAodGhlIGJyb2FkY2FzdCBjaGFubmVsKSBvciBjb250YWlucyBvbmx5IGEtekEtWjAtOV9cbiAgICAgKiBjaGFyYWN0ZXJzIGFuZCBzdGFydHMgd2l0aCBhIGxldHRlci5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBJTlZBTElEX0NIQU5ORUxfTkFNRTogMTEyLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgcHVzaCBpcyBtaXNjb25maWd1cmVkLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIFBVU0hfTUlTQ09ORklHVVJFRDogMTE1LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgdGhlIG9iamVjdCBpcyB0b28gbGFyZ2UuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgT0JKRUNUX1RPT19MQVJHRTogMTE2LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgdGhlIG9wZXJhdGlvbiBpc24ndCBhbGxvd2VkIGZvciBjbGllbnRzLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIE9QRVJBVElPTl9GT1JCSURERU46IDExOSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGUgcmVzdWx0IHdhcyBub3QgZm91bmQgaW4gdGhlIGNhY2hlLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIENBQ0hFX01JU1M6IDEyMCxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IGFuIGludmFsaWQga2V5IHdhcyB1c2VkIGluIGEgbmVzdGVkXG4gICAgICogSlNPTk9iamVjdC5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBJTlZBTElEX05FU1RFRF9LRVk6IDEyMSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IGFuIGludmFsaWQgZmlsZW5hbWUgd2FzIHVzZWQgZm9yIFBhcnNlRmlsZS5cbiAgICAgKiBBIHZhbGlkIGZpbGUgbmFtZSBjb250YWlucyBvbmx5IGEtekEtWjAtOV8uIGNoYXJhY3RlcnMgYW5kIGlzIGJldHdlZW4gMVxuICAgICAqIGFuZCAxMjggY2hhcmFjdGVycy5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBJTlZBTElEX0ZJTEVfTkFNRTogMTIyLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIGFuIGludmFsaWQgQUNMIHdhcyBwcm92aWRlZC5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBJTlZBTElEX0FDTDogMTIzLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlcXVlc3QgdGltZWQgb3V0IG9uIHRoZSBzZXJ2ZXIuIFR5cGljYWxseVxuICAgICAqIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIHJlcXVlc3QgaXMgdG9vIGV4cGVuc2l2ZSB0byBydW4uXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgVElNRU9VVDogMTI0LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgdGhlIGVtYWlsIGFkZHJlc3Mgd2FzIGludmFsaWQuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgSU5WQUxJRF9FTUFJTF9BRERSRVNTOiAxMjUsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgYSBtaXNzaW5nIGNvbnRlbnQgdHlwZS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBNSVNTSU5HX0NPTlRFTlRfVFlQRTogMTI2LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIGEgbWlzc2luZyBjb250ZW50IGxlbmd0aC5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBNSVNTSU5HX0NPTlRFTlRfTEVOR1RIOiAxMjcsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgYW4gaW52YWxpZCBjb250ZW50IGxlbmd0aC5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBJTlZBTElEX0NPTlRFTlRfTEVOR1RIOiAxMjgsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgYSBmaWxlIHRoYXQgd2FzIHRvbyBsYXJnZS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBGSUxFX1RPT19MQVJHRTogMTI5LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIGFuIGVycm9yIHNhdmluZyBhIGZpbGUuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgRklMRV9TQVZFX0VSUk9SOiAxMzAsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhhdCBhIHVuaXF1ZSBmaWVsZCB3YXMgZ2l2ZW4gYSB2YWx1ZSB0aGF0IGlzXG4gICAgICogYWxyZWFkeSB0YWtlbi5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBEVVBMSUNBVEVfVkFMVUU6IDEzNyxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IGEgcm9sZSdzIG5hbWUgaXMgaW52YWxpZC5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBJTlZBTElEX1JPTEVfTkFNRTogMTM5LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYW4gYXBwbGljYXRpb24gcXVvdGEgd2FzIGV4Y2VlZGVkLiAgVXBncmFkZSB0b1xuICAgICAqIHJlc29sdmUuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgRVhDRUVERURfUVVPVEE6IDE0MCxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IGEgQ2xvdWQgQ29kZSBzY3JpcHQgZmFpbGVkLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIFNDUklQVF9GQUlMRUQ6IDE0MSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IGEgQ2xvdWQgQ29kZSB2YWxpZGF0aW9uIGZhaWxlZC5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBWQUxJREFUSU9OX0VSUk9SOiAxNDIsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhhdCBpbnZhbGlkIGltYWdlIGRhdGEgd2FzIHByb3ZpZGVkLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIElOVkFMSURfSU1BR0VfREFUQTogMTUwLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIGFuIHVuc2F2ZWQgZmlsZS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBVTlNBVkVEX0ZJTEVfRVJST1I6IDE1MSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyBhbiBpbnZhbGlkIHB1c2ggdGltZS5cbiAgICAgKi9cbiAgICBJTlZBTElEX1BVU0hfVElNRV9FUlJPUjogMTUyLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIGFuIGVycm9yIGRlbGV0aW5nIGEgZmlsZS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBGSUxFX0RFTEVURV9FUlJPUjogMTUzLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgdGhlIGFwcGxpY2F0aW9uIGhhcyBleGNlZWRlZCBpdHMgcmVxdWVzdFxuICAgICAqIGxpbWl0LlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIFJFUVVFU1RfTElNSVRfRVhDRUVERUQ6IDE1NSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyBhbiBpbnZhbGlkIGV2ZW50IG5hbWUuXG4gICAgICovXG4gICAgSU5WQUxJRF9FVkVOVF9OQU1FOiAxNjAsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhhdCB0aGUgdXNlcm5hbWUgaXMgbWlzc2luZyBvciBlbXB0eS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBVU0VSTkFNRV9NSVNTSU5HOiAyMDAsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhhdCB0aGUgcGFzc3dvcmQgaXMgbWlzc2luZyBvciBlbXB0eS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBQQVNTV09SRF9NSVNTSU5HOiAyMDEsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhhdCB0aGUgdXNlcm5hbWUgaGFzIGFscmVhZHkgYmVlbiB0YWtlbi5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBVU0VSTkFNRV9UQUtFTjogMjAyLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgdGhlIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgRU1BSUxfVEFLRU46IDIwMyxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IHRoZSBlbWFpbCBpcyBtaXNzaW5nLCBidXQgbXVzdCBiZSBzcGVjaWZpZWQuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgRU1BSUxfTUlTU0lORzogMjA0LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYSB1c2VyIHdpdGggdGhlIHNwZWNpZmllZCBlbWFpbCB3YXMgbm90IGZvdW5kLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIEVNQUlMX05PVF9GT1VORDogMjA1LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYSB1c2VyIG9iamVjdCB3aXRob3V0IGEgdmFsaWQgc2Vzc2lvbiBjb3VsZFxuICAgICAqIG5vdCBiZSBhbHRlcmVkLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIFNFU1NJT05fTUlTU0lORzogMjA2LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYSB1c2VyIGNhbiBvbmx5IGJlIGNyZWF0ZWQgdGhyb3VnaCBzaWdudXAuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgTVVTVF9DUkVBVEVfVVNFUl9USFJPVUdIX1NJR05VUDogMjA3LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYW4gYW4gYWNjb3VudCBiZWluZyBsaW5rZWQgaXMgYWxyZWFkeSBsaW5rZWRcbiAgICAgKiB0byBhbm90aGVyIHVzZXIuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgQUNDT1VOVF9BTFJFQURZX0xJTktFRDogMjA4LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgdGhlIGN1cnJlbnQgc2Vzc2lvbiB0b2tlbiBpcyBpbnZhbGlkLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIElOVkFMSURfU0VTU0lPTl9UT0tFTjogMjA5LFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYSB1c2VyIGNhbm5vdCBiZSBsaW5rZWQgdG8gYW4gYWNjb3VudCBiZWNhdXNlXG4gICAgICogdGhhdCBhY2NvdW50J3MgaWQgY291bGQgbm90IGJlIGZvdW5kLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIExJTktFRF9JRF9NSVNTSU5HOiAyNTAsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhhdCBhIHVzZXIgd2l0aCBhIGxpbmtlZCAoZS5nLiBGYWNlYm9vaykgYWNjb3VudFxuICAgICAqIGhhcyBhbiBpbnZhbGlkIHNlc3Npb24uXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgSU5WQUxJRF9MSU5LRURfU0VTU0lPTjogMjUxLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgY29kZSBpbmRpY2F0aW5nIHRoYXQgYSBzZXJ2aWNlIGJlaW5nIGxpbmtlZCAoZS5nLiBGYWNlYm9vayBvclxuICAgICAqIFR3aXR0ZXIpIGlzIHVuc3VwcG9ydGVkLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqL1xuICAgIFVOU1VQUE9SVEVEX1NFUlZJQ0U6IDI1MixcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyB0aGF0IHRoZXJlIHdlcmUgbXVsdGlwbGUgZXJyb3JzLiBBZ2dyZWdhdGUgZXJyb3JzXG4gICAgICogaGF2ZSBhbiBcImVycm9yc1wiIHByb3BlcnR5LCB3aGljaCBpcyBhbiBhcnJheSBvZiBlcnJvciBvYmplY3RzIHdpdGggbW9yZVxuICAgICAqIGRldGFpbCBhYm91dCBlYWNoIGVycm9yIHRoYXQgb2NjdXJyZWQuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgQUdHUkVHQVRFX0VSUk9SOiA2MDAsXG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBjb2RlIGluZGljYXRpbmcgdGhlIGNsaWVudCB3YXMgdW5hYmxlIHRvIHJlYWQgYW4gaW5wdXQgZmlsZS5cbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKi9cbiAgICBGSUxFX1JFQURfRVJST1I6IDYwMSxcblxuICAgIC8qKlxuICAgICAqIEVycm9yIGNvZGUgaW5kaWNhdGluZyBhIHJlYWwgZXJyb3IgY29kZSBpcyB1bmF2YWlsYWJsZSBiZWNhdXNlXG4gICAgICogd2UgaGFkIHRvIHVzZSBhbiBYRG9tYWluUmVxdWVzdCBvYmplY3QgdG8gYWxsb3cgQ09SUyByZXF1ZXN0cyBpblxuICAgICAqIEludGVybmV0IEV4cGxvcmVyLCB3aGljaCBzdHJpcHMgdGhlIGJvZHkgZnJvbSBIVFRQIHJlc3BvbnNlcyB0aGF0IGhhdmVcbiAgICAgKiBhIG5vbi0yWFggc3RhdHVzIGNvZGUuXG4gICAgICogQGNvbnN0YW50XG4gICAgICovXG4gICAgWF9ET01BSU5fUkVRVUVTVDogNjAyXG4gIH0pO1xuXG59KHRoaXMpKTtcblxuLypnbG9iYWwgXzogZmFsc2UgKi9cbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3QgPSB0aGlzO1xuICB2YXIgUGFyc2UgPSAocm9vdC5QYXJzZSB8fCAocm9vdC5QYXJzZSA9IHt9KSk7XG4gIHZhciBldmVudFNwbGl0dGVyID0gL1xccysvO1xuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKiA8cD5QYXJzZS5FdmVudHMgaXMgYSBmb3JrIG9mIEJhY2tib25lJ3MgRXZlbnRzIG1vZHVsZSwgcHJvdmlkZWQgZm9yIHlvdXJcbiAgICogY29udmVuaWVuY2UuPC9wPlxuICAgKlxuICAgKiA8cD5BIG1vZHVsZSB0aGF0IGNhbiBiZSBtaXhlZCBpbiB0byBhbnkgb2JqZWN0IGluIG9yZGVyIHRvIHByb3ZpZGVcbiAgICogaXQgd2l0aCBjdXN0b20gZXZlbnRzLiBZb3UgbWF5IGJpbmQgY2FsbGJhY2sgZnVuY3Rpb25zIHRvIGFuIGV2ZW50XG4gICAqIHdpdGggYG9uYCwgb3IgcmVtb3ZlIHRoZXNlIGZ1bmN0aW9ucyB3aXRoIGBvZmZgLlxuICAgKiBUcmlnZ2VyaW5nIGFuIGV2ZW50IGZpcmVzIGFsbCBjYWxsYmFja3MgaW4gdGhlIG9yZGVyIHRoYXQgYG9uYCB3YXNcbiAgICogY2FsbGVkLlxuICAgKlxuICAgKiA8cHJlPlxuICAgKiAgICAgdmFyIG9iamVjdCA9IHt9O1xuICAgKiAgICAgXy5leHRlbmQob2JqZWN0LCBQYXJzZS5FdmVudHMpO1xuICAgKiAgICAgb2JqZWN0Lm9uKCdleHBhbmQnLCBmdW5jdGlvbigpeyBhbGVydCgnZXhwYW5kZWQnKTsgfSk7XG4gICAqICAgICBvYmplY3QudHJpZ2dlcignZXhwYW5kJyk7PC9wcmU+PC9wPlxuICAgKlxuICAgKiA8cD5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZVxuICAgKiA8YSBocmVmPVwiaHR0cDovL2RvY3VtZW50Y2xvdWQuZ2l0aHViLmNvbS9iYWNrYm9uZS8jRXZlbnRzXCI+QmFja2JvbmVcbiAgICogZG9jdW1lbnRhdGlvbjwvYT4uPC9wPlxuICAgKi9cbiAgUGFyc2UuRXZlbnRzID0ge1xuICAgIC8qKlxuICAgICAqIEJpbmQgb25lIG9yIG1vcmUgc3BhY2Ugc2VwYXJhdGVkIGV2ZW50cywgYGV2ZW50c2AsIHRvIGEgYGNhbGxiYWNrYFxuICAgICAqIGZ1bmN0aW9uLiBQYXNzaW5nIGBcImFsbFwiYCB3aWxsIGJpbmQgdGhlIGNhbGxiYWNrIHRvIGFsbCBldmVudHMgZmlyZWQuXG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGV2ZW50cywgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgdmFyIGNhbGxzLCBldmVudCwgbm9kZSwgdGFpbCwgbGlzdDtcbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBldmVudHMgPSBldmVudHMuc3BsaXQoZXZlbnRTcGxpdHRlcik7XG4gICAgICBjYWxscyA9IHRoaXMuX2NhbGxiYWNrcyB8fCAodGhpcy5fY2FsbGJhY2tzID0ge30pO1xuXG4gICAgICAvLyBDcmVhdGUgYW4gaW1tdXRhYmxlIGNhbGxiYWNrIGxpc3QsIGFsbG93aW5nIHRyYXZlcnNhbCBkdXJpbmdcbiAgICAgIC8vIG1vZGlmaWNhdGlvbi4gIFRoZSB0YWlsIGlzIGFuIGVtcHR5IG9iamVjdCB0aGF0IHdpbGwgYWx3YXlzIGJlIHVzZWRcbiAgICAgIC8vIGFzIHRoZSBuZXh0IG5vZGUuXG4gICAgICBldmVudCA9IGV2ZW50cy5zaGlmdCgpO1xuICAgICAgd2hpbGUgKGV2ZW50KSB7XG4gICAgICAgIGxpc3QgPSBjYWxsc1tldmVudF07XG4gICAgICAgIG5vZGUgPSBsaXN0ID8gbGlzdC50YWlsIDoge307XG4gICAgICAgIG5vZGUubmV4dCA9IHRhaWwgPSB7fTtcbiAgICAgICAgbm9kZS5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgbm9kZS5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsc1tldmVudF0gPSB7dGFpbDogdGFpbCwgbmV4dDogbGlzdCA/IGxpc3QubmV4dCA6IG5vZGV9O1xuICAgICAgICBldmVudCA9IGV2ZW50cy5zaGlmdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIG9uZSBvciBtYW55IGNhbGxiYWNrcy4gSWYgYGNvbnRleHRgIGlzIG51bGwsIHJlbW92ZXMgYWxsIGNhbGxiYWNrc1xuICAgICAqIHdpdGggdGhhdCBmdW5jdGlvbi4gSWYgYGNhbGxiYWNrYCBpcyBudWxsLCByZW1vdmVzIGFsbCBjYWxsYmFja3MgZm9yIHRoZVxuICAgICAqIGV2ZW50LiBJZiBgZXZlbnRzYCBpcyBudWxsLCByZW1vdmVzIGFsbCBib3VuZCBjYWxsYmFja3MgZm9yIGFsbCBldmVudHMuXG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudHMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB2YXIgZXZlbnQsIGNhbGxzLCBub2RlLCB0YWlsLCBjYiwgY3R4O1xuXG4gICAgICAvLyBObyBldmVudHMsIG9yIHJlbW92aW5nICphbGwqIGV2ZW50cy5cbiAgICAgIGlmICghKGNhbGxzID0gdGhpcy5fY2FsbGJhY2tzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIShldmVudHMgfHwgY2FsbGJhY2sgfHwgY29udGV4dCkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGlzdGVkIGV2ZW50cyBhbmQgY29udGV4dHMsIHNwbGljaW5nIHRoZW0gb3V0IG9mIHRoZVxuICAgICAgLy8gbGlua2VkIGxpc3Qgb2YgY2FsbGJhY2tzIGlmIGFwcHJvcHJpYXRlLlxuICAgICAgZXZlbnRzID0gZXZlbnRzID8gZXZlbnRzLnNwbGl0KGV2ZW50U3BsaXR0ZXIpIDogT2JqZWN0LmtleXMoY2FsbHMpO1xuICAgICAgZXZlbnQgPSBldmVudHMuc2hpZnQoKTtcbiAgICAgIHdoaWxlIChldmVudCkge1xuICAgICAgICBub2RlID0gY2FsbHNbZXZlbnRdO1xuICAgICAgICBkZWxldGUgY2FsbHNbZXZlbnRdO1xuICAgICAgICBpZiAoIW5vZGUgfHwgIShjYWxsYmFjayB8fCBjb250ZXh0KSkge1xuICAgICAgICAgIGV2ZW50ID0gZXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGxpc3QsIG9taXR0aW5nIHRoZSBpbmRpY2F0ZWQgY2FsbGJhY2tzLlxuICAgICAgICB0YWlsID0gbm9kZS50YWlsO1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICB3aGlsZSAobm9kZSAhPT0gdGFpbCkge1xuICAgICAgICAgIGNiID0gbm9kZS5jYWxsYmFjaztcbiAgICAgICAgICBjdHggPSBub2RlLmNvbnRleHQ7XG4gICAgICAgICAgaWYgKChjYWxsYmFjayAmJiBjYiAhPT0gY2FsbGJhY2spIHx8IChjb250ZXh0ICYmIGN0eCAhPT0gY29udGV4dCkpIHtcbiAgICAgICAgICAgIHRoaXMub24oZXZlbnQsIGNiLCBjdHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50ID0gZXZlbnRzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIG9uZSBvciBtYW55IGV2ZW50cywgZmlyaW5nIGFsbCBib3VuZCBjYWxsYmFja3MuIENhbGxiYWNrcyBhcmVcbiAgICAgKiBwYXNzZWQgdGhlIHNhbWUgYXJndW1lbnRzIGFzIGB0cmlnZ2VyYCBpcywgYXBhcnQgZnJvbSB0aGUgZXZlbnQgbmFtZVxuICAgICAqICh1bmxlc3MgeW91J3JlIGxpc3RlbmluZyBvbiBgXCJhbGxcImAsIHdoaWNoIHdpbGwgY2F1c2UgeW91ciBjYWxsYmFjayB0b1xuICAgICAqIHJlY2VpdmUgdGhlIHRydWUgbmFtZSBvZiB0aGUgZXZlbnQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50KS5cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudHMpIHtcbiAgICAgIHZhciBldmVudCwgbm9kZSwgY2FsbHMsIHRhaWwsIGFyZ3MsIGFsbCwgcmVzdDtcbiAgICAgIGlmICghKGNhbGxzID0gdGhpcy5fY2FsbGJhY2tzKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGFsbCA9IGNhbGxzLmFsbDtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdChldmVudFNwbGl0dGVyKTtcbiAgICAgIHJlc3QgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgIC8vIEZvciBlYWNoIGV2ZW50LCB3YWxrIHRocm91Z2ggdGhlIGxpbmtlZCBsaXN0IG9mIGNhbGxiYWNrcyB0d2ljZSxcbiAgICAgIC8vIGZpcnN0IHRvIHRyaWdnZXIgdGhlIGV2ZW50LCB0aGVuIHRvIHRyaWdnZXIgYW55IGBcImFsbFwiYCBjYWxsYmFja3MuXG4gICAgICBldmVudCA9IGV2ZW50cy5zaGlmdCgpO1xuICAgICAgd2hpbGUgKGV2ZW50KSB7XG4gICAgICAgIG5vZGUgPSBjYWxsc1tldmVudF07XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgdGFpbCA9IG5vZGUudGFpbDtcbiAgICAgICAgICB3aGlsZSAoKG5vZGUgPSBub2RlLm5leHQpICE9PSB0YWlsKSB7XG4gICAgICAgICAgICBub2RlLmNhbGxiYWNrLmFwcGx5KG5vZGUuY29udGV4dCB8fCB0aGlzLCByZXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IGFsbDtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICB0YWlsID0gbm9kZS50YWlsO1xuICAgICAgICAgIGFyZ3MgPSBbZXZlbnRdLmNvbmNhdChyZXN0KTtcbiAgICAgICAgICB3aGlsZSAoKG5vZGUgPSBub2RlLm5leHQpICE9PSB0YWlsKSB7XG4gICAgICAgICAgICBub2RlLmNhbGxiYWNrLmFwcGx5KG5vZGUuY29udGV4dCB8fCB0aGlzLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQgPSBldmVudHMuc2hpZnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9OyAgXG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgUGFyc2UuRXZlbnRzLmJpbmQgPSBQYXJzZS5FdmVudHMub247XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgUGFyc2UuRXZlbnRzLnVuYmluZCA9IFBhcnNlLkV2ZW50cy5vZmY7XG59LmNhbGwodGhpcykpO1xuXG5cbi8qZ2xvYmFsIG5hdmlnYXRvcjogZmFsc2UgKi9cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR2VvUG9pbnQgd2l0aCBhbnkgb2YgdGhlIGZvbGxvd2luZyBmb3Jtczo8YnI+XG4gICAqICAgPHByZT5cbiAgICogICBuZXcgR2VvUG9pbnQob3RoZXJHZW9Qb2ludClcbiAgICogICBuZXcgR2VvUG9pbnQoMzAsIDMwKVxuICAgKiAgIG5ldyBHZW9Qb2ludChbMzAsIDMwXSlcbiAgICogICBuZXcgR2VvUG9pbnQoe2xhdGl0dWRlOiAzMCwgbG9uZ2l0dWRlOiAzMH0pXG4gICAqICAgbmV3IEdlb1BvaW50KCkgIC8vIGRlZmF1bHRzIHRvICgwLCAwKVxuICAgKiAgIDwvcHJlPlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICogPHA+UmVwcmVzZW50cyBhIGxhdGl0dWRlIC8gbG9uZ2l0dWRlIHBvaW50IHRoYXQgbWF5IGJlIGFzc29jaWF0ZWRcbiAgICogd2l0aCBhIGtleSBpbiBhIFBhcnNlT2JqZWN0IG9yIHVzZWQgYXMgYSByZWZlcmVuY2UgcG9pbnQgZm9yIGdlbyBxdWVyaWVzLlxuICAgKiBUaGlzIGFsbG93cyBwcm94aW1pdHktYmFzZWQgcXVlcmllcyBvbiB0aGUga2V5LjwvcD5cbiAgICpcbiAgICogPHA+T25seSBvbmUga2V5IGluIGEgY2xhc3MgbWF5IGNvbnRhaW4gYSBHZW9Qb2ludC48L3A+XG4gICAqXG4gICAqIDxwPkV4YW1wbGU6PHByZT5cbiAgICogICB2YXIgcG9pbnQgPSBuZXcgUGFyc2UuR2VvUG9pbnQoMzAuMCwgLTIwLjApO1xuICAgKiAgIHZhciBvYmplY3QgPSBuZXcgUGFyc2UuT2JqZWN0KFwiUGxhY2VPYmplY3RcIik7XG4gICAqICAgb2JqZWN0LnNldChcImxvY2F0aW9uXCIsIHBvaW50KTtcbiAgICogICBvYmplY3Quc2F2ZSgpOzwvcHJlPjwvcD5cbiAgICovXG4gIFBhcnNlLkdlb1BvaW50ID0gZnVuY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIGlmIChfLmlzQXJyYXkoYXJnMSkpIHtcbiAgICAgIFBhcnNlLkdlb1BvaW50Ll92YWxpZGF0ZShhcmcxWzBdLCBhcmcxWzFdKTtcbiAgICAgIHRoaXMubGF0aXR1ZGUgPSBhcmcxWzBdO1xuICAgICAgdGhpcy5sb25naXR1ZGUgPSBhcmcxWzFdO1xuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdChhcmcxKSkge1xuICAgICAgUGFyc2UuR2VvUG9pbnQuX3ZhbGlkYXRlKGFyZzEubGF0aXR1ZGUsIGFyZzEubG9uZ2l0dWRlKTtcbiAgICAgIHRoaXMubGF0aXR1ZGUgPSBhcmcxLmxhdGl0dWRlO1xuICAgICAgdGhpcy5sb25naXR1ZGUgPSBhcmcxLmxvbmdpdHVkZTtcbiAgICB9IGVsc2UgaWYgKF8uaXNOdW1iZXIoYXJnMSkgJiYgXy5pc051bWJlcihhcmcyKSkge1xuICAgICAgUGFyc2UuR2VvUG9pbnQuX3ZhbGlkYXRlKGFyZzEsIGFyZzIpO1xuICAgICAgdGhpcy5sYXRpdHVkZSA9IGFyZzE7XG4gICAgICB0aGlzLmxvbmdpdHVkZSA9IGFyZzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGF0aXR1ZGUgPSAwO1xuICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xuICAgIH1cblxuICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHNvIHRoYXQgYW55b25lIHVzaW5nIFdlYmtpdCBvciBNb3ppbGxhIHdpbGwgZ2V0IGFuIGVycm9yXG4gICAgLy8gaWYgdGhleSB0cnkgdG8gc2V0IHZhbHVlcyB0aGF0IGFyZSBvdXQgb2YgYm91bmRzLlxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5fX2RlZmluZUdldHRlcl9fICYmIHRoaXMuX19kZWZpbmVTZXR0ZXJfXykge1xuICAgICAgLy8gVXNlIF9sYXRpdHVkZSBhbmQgX2xvbmdpdHVkZSB0byBhY3R1YWxseSBzdG9yZSB0aGUgdmFsdWVzLCBhbmQgYWRkXG4gICAgICAvLyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGZvciBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlLlxuICAgICAgdGhpcy5fbGF0aXR1ZGUgPSB0aGlzLmxhdGl0dWRlO1xuICAgICAgdGhpcy5fbG9uZ2l0dWRlID0gdGhpcy5sb25naXR1ZGU7XG4gICAgICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oXCJsYXRpdHVkZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX2xhdGl0dWRlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oXCJsb25naXR1ZGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9sb25naXR1ZGU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX19kZWZpbmVTZXR0ZXJfXyhcImxhdGl0dWRlXCIsIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBQYXJzZS5HZW9Qb2ludC5fdmFsaWRhdGUodmFsLCBzZWxmLmxvbmdpdHVkZSk7XG4gICAgICAgIHNlbGYuX2xhdGl0dWRlID0gdmFsO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9fZGVmaW5lU2V0dGVyX18oXCJsb25naXR1ZGVcIiwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIFBhcnNlLkdlb1BvaW50Ll92YWxpZGF0ZShzZWxmLmxhdGl0dWRlLCB2YWwpO1xuICAgICAgICBzZWxmLl9sb25naXR1ZGUgPSB2YWw7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBsZW5kcyBQYXJzZS5HZW9Qb2ludC5wcm90b3R5cGVcbiAgICogQHByb3BlcnR5IHtmbG9hdH0gbGF0aXR1ZGUgTm9ydGgtc291dGggcG9ydGlvbiBvZiB0aGUgY29vcmRpbmF0ZSwgaW4gcmFuZ2VcbiAgICogICBbLTkwLCA5MF0uICBUaHJvd3MgYW4gZXhjZXB0aW9uIGlmIHNldCBvdXQgb2YgcmFuZ2UgaW4gYSBtb2Rlcm4gYnJvd3Nlci5cbiAgICogQHByb3BlcnR5IHtmbG9hdH0gbG9uZ2l0dWRlIEVhc3Qtd2VzdCBwb3J0aW9uIG9mIHRoZSBjb29yZGluYXRlLCBpbiByYW5nZVxuICAgKiAgIFstMTgwLCAxODBdLiAgVGhyb3dzIGlmIHNldCBvdXQgb2YgcmFuZ2UgaW4gYSBtb2Rlcm4gYnJvd3Nlci5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRocm93cyBhbiBleGNlcHRpb24gaWYgdGhlIGdpdmVuIGxhdC1sb25nIGlzIG91dCBvZiBib3VuZHMuXG4gICAqL1xuICBQYXJzZS5HZW9Qb2ludC5fdmFsaWRhdGUgPSBmdW5jdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gICAgaWYgKGxhdGl0dWRlIDwgLTkwLjApIHtcbiAgICAgIHRocm93IFwiUGFyc2UuR2VvUG9pbnQgbGF0aXR1ZGUgXCIgKyBsYXRpdHVkZSArIFwiIDwgLTkwLjAuXCI7XG4gICAgfVxuICAgIGlmIChsYXRpdHVkZSA+IDkwLjApIHtcbiAgICAgIHRocm93IFwiUGFyc2UuR2VvUG9pbnQgbGF0aXR1ZGUgXCIgKyBsYXRpdHVkZSArIFwiID4gOTAuMC5cIjtcbiAgICB9XG4gICAgaWYgKGxvbmdpdHVkZSA8IC0xODAuMCkge1xuICAgICAgdGhyb3cgXCJQYXJzZS5HZW9Qb2ludCBsb25naXR1ZGUgXCIgKyBsb25naXR1ZGUgKyBcIiA8IC0xODAuMC5cIjtcbiAgICB9XG4gICAgaWYgKGxvbmdpdHVkZSA+IDE4MC4wKSB7XG4gICAgICB0aHJvdyBcIlBhcnNlLkdlb1BvaW50IGxvbmdpdHVkZSBcIiArIGxvbmdpdHVkZSArIFwiID4gMTgwLjAuXCI7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgR2VvUG9pbnQgd2l0aCB0aGUgdXNlcidzIGN1cnJlbnQgbG9jYXRpb24sIGlmIGF2YWlsYWJsZS5cbiAgICogQ2FsbHMgb3B0aW9ucy5zdWNjZXNzIHdpdGggYSBuZXcgR2VvUG9pbnQgaW5zdGFuY2Ugb3IgY2FsbHMgb3B0aW9ucy5lcnJvci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQW4gb2JqZWN0IHdpdGggc3VjY2VzcyBhbmQgZXJyb3IgY2FsbGJhY2tzLlxuICAgKi9cbiAgUGFyc2UuR2VvUG9pbnQuY3VycmVudCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQYXJzZS5Qcm9taXNlKCk7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgcHJvbWlzZS5yZXNvbHZlKG5ldyBQYXJzZS5HZW9Qb2ludCh7XG4gICAgICAgIGxhdGl0dWRlOiBsb2NhdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogbG9jYXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgfSkpO1xuXG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICB9O1xuXG4gIFBhcnNlLkdlb1BvaW50LnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgR2VvUG9pbnQsIHN1aXRhYmxlIGZvciBQYXJzZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgdG9KU09OOiBmdW5jdGlvbigpIHtcbiAgICAgIFBhcnNlLkdlb1BvaW50Ll92YWxpZGF0ZSh0aGlzLmxhdGl0dWRlLCB0aGlzLmxvbmdpdHVkZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcIl9fdHlwZVwiOiBcIkdlb1BvaW50XCIsXG4gICAgICAgIGxhdGl0dWRlOiB0aGlzLmxhdGl0dWRlLFxuICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgR2VvUG9pbnQgdG8gYW5vdGhlciBpbiByYWRpYW5zLlxuICAgICAqIEBwYXJhbSB7UGFyc2UuR2VvUG9pbnR9IHBvaW50IHRoZSBvdGhlciBQYXJzZS5HZW9Qb2ludC5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgcmFkaWFuc1RvOiBmdW5jdGlvbihwb2ludCkge1xuICAgICAgdmFyIGQyciA9IE1hdGguUEkgLyAxODAuMDtcbiAgICAgIHZhciBsYXQxcmFkID0gdGhpcy5sYXRpdHVkZSAqIGQycjtcbiAgICAgIHZhciBsb25nMXJhZCA9IHRoaXMubG9uZ2l0dWRlICogZDJyO1xuICAgICAgdmFyIGxhdDJyYWQgPSBwb2ludC5sYXRpdHVkZSAqIGQycjtcbiAgICAgIHZhciBsb25nMnJhZCA9IHBvaW50LmxvbmdpdHVkZSAqIGQycjtcbiAgICAgIHZhciBkZWx0YUxhdCA9IGxhdDFyYWQgLSBsYXQycmFkO1xuICAgICAgdmFyIGRlbHRhTG9uZyA9IGxvbmcxcmFkIC0gbG9uZzJyYWQ7XG4gICAgICB2YXIgc2luRGVsdGFMYXREaXYyID0gTWF0aC5zaW4oZGVsdGFMYXQgLyAyKTtcbiAgICAgIHZhciBzaW5EZWx0YUxvbmdEaXYyID0gTWF0aC5zaW4oZGVsdGFMb25nIC8gMik7XG4gICAgICAvLyBTcXVhcmUgb2YgaGFsZiB0aGUgc3RyYWlnaHQgbGluZSBjaG9yZCBkaXN0YW5jZSBiZXR3ZWVuIGJvdGggcG9pbnRzLlxuICAgICAgdmFyIGEgPSAoKHNpbkRlbHRhTGF0RGl2MiAqIHNpbkRlbHRhTGF0RGl2MikgK1xuICAgICAgICAgICAgICAgKE1hdGguY29zKGxhdDFyYWQpICogTWF0aC5jb3MobGF0MnJhZCkgKlxuICAgICAgICAgICAgICAgIHNpbkRlbHRhTG9uZ0RpdjIgKiBzaW5EZWx0YUxvbmdEaXYyKSk7XG4gICAgICBhID0gTWF0aC5taW4oMS4wLCBhKTtcbiAgICAgIHJldHVybiAyICogTWF0aC5hc2luKE1hdGguc3FydChhKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBHZW9Qb2ludCB0byBhbm90aGVyIGluIGtpbG9tZXRlcnMuXG4gICAgICogQHBhcmFtIHtQYXJzZS5HZW9Qb2ludH0gcG9pbnQgdGhlIG90aGVyIFBhcnNlLkdlb1BvaW50LlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBraWxvbWV0ZXJzVG86IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yYWRpYW5zVG8ocG9pbnQpICogNjM3MS4wO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgR2VvUG9pbnQgdG8gYW5vdGhlciBpbiBtaWxlcy5cbiAgICAgKiBAcGFyYW0ge1BhcnNlLkdlb1BvaW50fSBwb2ludCB0aGUgb3RoZXIgUGFyc2UuR2VvUG9pbnQuXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1pbGVzVG86IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yYWRpYW5zVG8ocG9pbnQpICogMzk1OC44O1xuICAgIH1cbiAgfTtcbn0odGhpcykpO1xuXG4vKmdsb2JhbCBuYXZpZ2F0b3I6IGZhbHNlICovXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgdmFyIF8gPSBQYXJzZS5fO1xuXG4gIHZhciBQVUJMSUNfS0VZID0gXCIqXCI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgQUNMLlxuICAgKiBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgdGhlIEFDTCBoYXMgbm8gcGVybWlzc2lvbnMgZm9yIGFueW9uZS5cbiAgICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgUGFyc2UuVXNlciwgdGhlIEFDTCB3aWxsIGhhdmUgcmVhZCBhbmQgd3JpdGVcbiAgICogICBwZXJtaXNzaW9uIGZvciBvbmx5IHRoYXQgdXNlci5cbiAgICogSWYgdGhlIGFyZ3VtZW50IGlzIGFueSBvdGhlciBKU09OIG9iamVjdCwgdGhhdCBvYmplY3Qgd2lsbCBiZSBpbnRlcnByZXR0ZWRcbiAgICogICBhcyBhIHNlcmlhbGl6ZWQgQUNMIGNyZWF0ZWQgd2l0aCB0b0pTT04oKS5cbiAgICogQHNlZSBQYXJzZS5PYmplY3Qjc2V0QUNMXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKiA8cD5BbiBBQ0wsIG9yIEFjY2VzcyBDb250cm9sIExpc3QgY2FuIGJlIGFkZGVkIHRvIGFueVxuICAgKiA8Y29kZT5QYXJzZS5PYmplY3Q8L2NvZGU+IHRvIHJlc3RyaWN0IGFjY2VzcyB0byBvbmx5IGEgc3Vic2V0IG9mIHVzZXJzXG4gICAqIG9mIHlvdXIgYXBwbGljYXRpb24uPC9wPlxuICAgKi9cbiAgUGFyc2UuQUNMID0gZnVuY3Rpb24oYXJnMSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLnBlcm1pc3Npb25zQnlJZCA9IHt9O1xuICAgIGlmIChfLmlzT2JqZWN0KGFyZzEpKSB7XG4gICAgICBpZiAoYXJnMSBpbnN0YW5jZW9mIFBhcnNlLlVzZXIpIHtcbiAgICAgICAgc2VsZi5zZXRSZWFkQWNjZXNzKGFyZzEsIHRydWUpO1xuICAgICAgICBzZWxmLnNldFdyaXRlQWNjZXNzKGFyZzEsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhcmcxKSkge1xuICAgICAgICAgIHRocm93IFwiUGFyc2UuQUNMKCkgY2FsbGVkIHdpdGggYSBmdW5jdGlvbi4gIERpZCB5b3UgZm9yZ2V0ICgpP1wiO1xuICAgICAgICB9XG4gICAgICAgIFBhcnNlLl9vYmplY3RFYWNoKGFyZzEsIGZ1bmN0aW9uKGFjY2Vzc0xpc3QsIHVzZXJJZCkge1xuICAgICAgICAgIGlmICghXy5pc1N0cmluZyh1c2VySWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlRyaWVkIHRvIGNyZWF0ZSBhbiBBQ0wgd2l0aCBhbiBpbnZhbGlkIHVzZXJJZC5cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5wZXJtaXNzaW9uc0J5SWRbdXNlcklkXSA9IHt9O1xuICAgICAgICAgIFBhcnNlLl9vYmplY3RFYWNoKGFjY2Vzc0xpc3QsIGZ1bmN0aW9uKGFsbG93ZWQsIHBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uICE9PSBcInJlYWRcIiAmJiBwZXJtaXNzaW9uICE9PSBcIndyaXRlXCIpIHtcbiAgICAgICAgICAgICAgdGhyb3cgXCJUcmllZCB0byBjcmVhdGUgYW4gQUNMIHdpdGggYW4gaW52YWxpZCBwZXJtaXNzaW9uIHR5cGUuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV8uaXNCb29sZWFuKGFsbG93ZWQpKSB7XG4gICAgICAgICAgICAgIHRocm93IFwiVHJpZWQgdG8gY3JlYXRlIGFuIEFDTCB3aXRoIGFuIGludmFsaWQgcGVybWlzc2lvbiB2YWx1ZS5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucGVybWlzc2lvbnNCeUlkW3VzZXJJZF1bcGVybWlzc2lvbl0gPSBhbGxvd2VkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKU09OLWVuY29kZWQgdmVyc2lvbiBvZiB0aGUgQUNMLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBQYXJzZS5BQ0wucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLmNsb25lKHRoaXMucGVybWlzc2lvbnNCeUlkKTtcbiAgfTtcblxuICBQYXJzZS5BQ0wucHJvdG90eXBlLl9zZXRBY2Nlc3MgPSBmdW5jdGlvbihhY2Nlc3NUeXBlLCB1c2VySWQsIGFsbG93ZWQpIHtcbiAgICBpZiAodXNlcklkIGluc3RhbmNlb2YgUGFyc2UuVXNlcikge1xuICAgICAgdXNlcklkID0gdXNlcklkLmlkO1xuICAgIH0gZWxzZSBpZiAodXNlcklkIGluc3RhbmNlb2YgUGFyc2UuUm9sZSkge1xuICAgICAgdXNlcklkID0gXCJyb2xlOlwiICsgdXNlcklkLmdldE5hbWUoKTtcbiAgICB9XG4gICAgaWYgKCFfLmlzU3RyaW5nKHVzZXJJZCkpIHtcbiAgICAgIHRocm93IFwidXNlcklkIG11c3QgYmUgYSBzdHJpbmcuXCI7XG4gICAgfVxuICAgIGlmICghXy5pc0Jvb2xlYW4oYWxsb3dlZCkpIHtcbiAgICAgIHRocm93IFwiYWxsb3dlZCBtdXN0IGJlIGVpdGhlciB0cnVlIG9yIGZhbHNlLlwiO1xuICAgIH1cbiAgICB2YXIgcGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zQnlJZFt1c2VySWRdO1xuICAgIGlmICghcGVybWlzc2lvbnMpIHtcbiAgICAgIGlmICghYWxsb3dlZCkge1xuICAgICAgICAvLyBUaGUgdXNlciBhbHJlYWR5IGRvZXNuJ3QgaGF2ZSB0aGlzIHBlcm1pc3Npb24sIHNvIG5vIGFjdGlvbiBuZWVkZWQuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlcm1pc3Npb25zID0ge307XG4gICAgICAgIHRoaXMucGVybWlzc2lvbnNCeUlkW3VzZXJJZF0gPSBwZXJtaXNzaW9ucztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxsb3dlZCkge1xuICAgICAgdGhpcy5wZXJtaXNzaW9uc0J5SWRbdXNlcklkXVthY2Nlc3NUeXBlXSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBwZXJtaXNzaW9uc1thY2Nlc3NUeXBlXTtcbiAgICAgIGlmIChfLmlzRW1wdHkocGVybWlzc2lvbnMpKSB7XG4gICAgICAgIGRlbGV0ZSBwZXJtaXNzaW9uc1t1c2VySWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBQYXJzZS5BQ0wucHJvdG90eXBlLl9nZXRBY2Nlc3MgPSBmdW5jdGlvbihhY2Nlc3NUeXBlLCB1c2VySWQpIHtcbiAgICBpZiAodXNlcklkIGluc3RhbmNlb2YgUGFyc2UuVXNlcikge1xuICAgICAgdXNlcklkID0gdXNlcklkLmlkO1xuICAgIH0gZWxzZSBpZiAodXNlcklkIGluc3RhbmNlb2YgUGFyc2UuUm9sZSkge1xuICAgICAgdXNlcklkID0gXCJyb2xlOlwiICsgdXNlcklkLmdldE5hbWUoKTtcbiAgICB9XG4gICAgdmFyIHBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9uc0J5SWRbdXNlcklkXTtcbiAgICBpZiAoIXBlcm1pc3Npb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBwZXJtaXNzaW9uc1thY2Nlc3NUeXBlXSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIHVzZXIgaXMgYWxsb3dlZCB0byByZWFkIHRoaXMgb2JqZWN0LlxuICAgKiBAcGFyYW0gdXNlcklkIEFuIGluc3RhbmNlIG9mIFBhcnNlLlVzZXIgb3IgaXRzIG9iamVjdElkLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGFsbG93ZWQgV2hldGhlciB0aGF0IHVzZXIgc2hvdWxkIGhhdmUgcmVhZCBhY2Nlc3MuXG4gICAqL1xuICBQYXJzZS5BQ0wucHJvdG90eXBlLnNldFJlYWRBY2Nlc3MgPSBmdW5jdGlvbih1c2VySWQsIGFsbG93ZWQpIHtcbiAgICB0aGlzLl9zZXRBY2Nlc3MoXCJyZWFkXCIsIHVzZXJJZCwgYWxsb3dlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSBnaXZlbiB1c2VyIGlkIGlzICpleHBsaWNpdGx5KiBhbGxvd2VkIHRvIHJlYWQgdGhpcyBvYmplY3QuXG4gICAqIEV2ZW4gaWYgdGhpcyByZXR1cm5zIGZhbHNlLCB0aGUgdXNlciBtYXkgc3RpbGwgYmUgYWJsZSB0byBhY2Nlc3MgaXQgaWZcbiAgICogZ2V0UHVibGljUmVhZEFjY2VzcyByZXR1cm5zIHRydWUgb3IgYSByb2xlIHRoYXQgdGhlIHVzZXIgYmVsb25ncyB0byBoYXNcbiAgICogd3JpdGUgYWNjZXNzLlxuICAgKiBAcGFyYW0gdXNlcklkIEFuIGluc3RhbmNlIG9mIFBhcnNlLlVzZXIgb3IgaXRzIG9iamVjdElkLCBvciBhIFBhcnNlLlJvbGUuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBQYXJzZS5BQ0wucHJvdG90eXBlLmdldFJlYWRBY2Nlc3MgPSBmdW5jdGlvbih1c2VySWQpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0QWNjZXNzKFwicmVhZFwiLCB1c2VySWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gdXNlciBpZCBpcyBhbGxvd2VkIHRvIHdyaXRlIHRoaXMgb2JqZWN0LlxuICAgKiBAcGFyYW0gdXNlcklkIEFuIGluc3RhbmNlIG9mIFBhcnNlLlVzZXIgb3IgaXRzIG9iamVjdElkLCBvciBhIFBhcnNlLlJvbGUuLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGFsbG93ZWQgV2hldGhlciB0aGF0IHVzZXIgc2hvdWxkIGhhdmUgd3JpdGUgYWNjZXNzLlxuICAgKi9cbiAgUGFyc2UuQUNMLnByb3RvdHlwZS5zZXRXcml0ZUFjY2VzcyA9IGZ1bmN0aW9uKHVzZXJJZCwgYWxsb3dlZCkge1xuICAgIHRoaXMuX3NldEFjY2VzcyhcIndyaXRlXCIsIHVzZXJJZCwgYWxsb3dlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSBnaXZlbiB1c2VyIGlkIGlzICpleHBsaWNpdGx5KiBhbGxvd2VkIHRvIHdyaXRlIHRoaXMgb2JqZWN0LlxuICAgKiBFdmVuIGlmIHRoaXMgcmV0dXJucyBmYWxzZSwgdGhlIHVzZXIgbWF5IHN0aWxsIGJlIGFibGUgdG8gd3JpdGUgaXQgaWZcbiAgICogZ2V0UHVibGljV3JpdGVBY2Nlc3MgcmV0dXJucyB0cnVlIG9yIGEgcm9sZSB0aGF0IHRoZSB1c2VyIGJlbG9uZ3MgdG8gaGFzXG4gICAqIHdyaXRlIGFjY2Vzcy5cbiAgICogQHBhcmFtIHVzZXJJZCBBbiBpbnN0YW5jZSBvZiBQYXJzZS5Vc2VyIG9yIGl0cyBvYmplY3RJZCwgb3IgYSBQYXJzZS5Sb2xlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgUGFyc2UuQUNMLnByb3RvdHlwZS5nZXRXcml0ZUFjY2VzcyA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRBY2Nlc3MoXCJ3cml0ZVwiLCB1c2VySWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgcHVibGljIGlzIGFsbG93ZWQgdG8gcmVhZCB0aGlzIG9iamVjdC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbGxvd2VkXG4gICAqL1xuICBQYXJzZS5BQ0wucHJvdG90eXBlLnNldFB1YmxpY1JlYWRBY2Nlc3MgPSBmdW5jdGlvbihhbGxvd2VkKSB7XG4gICAgdGhpcy5zZXRSZWFkQWNjZXNzKFBVQkxJQ19LRVksIGFsbG93ZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB0aGUgcHVibGljIGlzIGFsbG93ZWQgdG8gcmVhZCB0aGlzIG9iamVjdC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIFBhcnNlLkFDTC5wcm90b3R5cGUuZ2V0UHVibGljUmVhZEFjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlYWRBY2Nlc3MoUFVCTElDX0tFWSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSBwdWJsaWMgaXMgYWxsb3dlZCB0byB3cml0ZSB0aGlzIG9iamVjdC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbGxvd2VkXG4gICAqL1xuICBQYXJzZS5BQ0wucHJvdG90eXBlLnNldFB1YmxpY1dyaXRlQWNjZXNzID0gZnVuY3Rpb24oYWxsb3dlZCkge1xuICAgIHRoaXMuc2V0V3JpdGVBY2Nlc3MoUFVCTElDX0tFWSwgYWxsb3dlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSBwdWJsaWMgaXMgYWxsb3dlZCB0byB3cml0ZSB0aGlzIG9iamVjdC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIFBhcnNlLkFDTC5wcm90b3R5cGUuZ2V0UHVibGljV3JpdGVBY2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXcml0ZUFjY2VzcyhQVUJMSUNfS0VZKTtcbiAgfTtcbiAgXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB1c2VycyBiZWxvbmdpbmcgdG8gdGhlIGdpdmVuIHJvbGUgYXJlIGFsbG93ZWRcbiAgICogdG8gcmVhZCB0aGlzIG9iamVjdC4gRXZlbiBpZiB0aGlzIHJldHVybnMgZmFsc2UsIHRoZSByb2xlIG1heVxuICAgKiBzdGlsbCBiZSBhYmxlIHRvIHdyaXRlIGl0IGlmIGEgcGFyZW50IHJvbGUgaGFzIHJlYWQgYWNjZXNzLlxuICAgKiBcbiAgICogQHBhcmFtIHJvbGUgVGhlIG5hbWUgb2YgdGhlIHJvbGUsIG9yIGEgUGFyc2UuUm9sZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHJvbGUgaGFzIHJlYWQgYWNjZXNzLiBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEB0aHJvd3Mge1N0cmluZ30gSWYgcm9sZSBpcyBuZWl0aGVyIGEgUGFyc2UuUm9sZSBub3IgYSBTdHJpbmcuXG4gICAqL1xuICBQYXJzZS5BQ0wucHJvdG90eXBlLmdldFJvbGVSZWFkQWNjZXNzID0gZnVuY3Rpb24ocm9sZSkge1xuICAgIGlmIChyb2xlIGluc3RhbmNlb2YgUGFyc2UuUm9sZSkge1xuICAgICAgLy8gTm9ybWFsaXplIHRvIHRoZSBTdHJpbmcgbmFtZVxuICAgICAgcm9sZSA9IHJvbGUuZ2V0TmFtZSgpO1xuICAgIH1cbiAgICBpZiAoXy5pc1N0cmluZyhyb2xlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVhZEFjY2VzcyhcInJvbGU6XCIgKyByb2xlKTtcbiAgICB9XG4gICAgdGhyb3cgXCJyb2xlIG11c3QgYmUgYSBQYXJzZS5Sb2xlIG9yIGEgU3RyaW5nXCI7XG4gIH07XG4gIFxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdXNlcnMgYmVsb25naW5nIHRvIHRoZSBnaXZlbiByb2xlIGFyZSBhbGxvd2VkXG4gICAqIHRvIHdyaXRlIHRoaXMgb2JqZWN0LiBFdmVuIGlmIHRoaXMgcmV0dXJucyBmYWxzZSwgdGhlIHJvbGUgbWF5XG4gICAqIHN0aWxsIGJlIGFibGUgdG8gd3JpdGUgaXQgaWYgYSBwYXJlbnQgcm9sZSBoYXMgd3JpdGUgYWNjZXNzLlxuICAgKiBcbiAgICogQHBhcmFtIHJvbGUgVGhlIG5hbWUgb2YgdGhlIHJvbGUsIG9yIGEgUGFyc2UuUm9sZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHJvbGUgaGFzIHdyaXRlIGFjY2Vzcy4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAdGhyb3dzIHtTdHJpbmd9IElmIHJvbGUgaXMgbmVpdGhlciBhIFBhcnNlLlJvbGUgbm9yIGEgU3RyaW5nLlxuICAgKi9cbiAgUGFyc2UuQUNMLnByb3RvdHlwZS5nZXRSb2xlV3JpdGVBY2Nlc3MgPSBmdW5jdGlvbihyb2xlKSB7XG4gICAgaWYgKHJvbGUgaW5zdGFuY2VvZiBQYXJzZS5Sb2xlKSB7XG4gICAgICAvLyBOb3JtYWxpemUgdG8gdGhlIFN0cmluZyBuYW1lXG4gICAgICByb2xlID0gcm9sZS5nZXROYW1lKCk7XG4gICAgfVxuICAgIGlmIChfLmlzU3RyaW5nKHJvbGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXcml0ZUFjY2VzcyhcInJvbGU6XCIgKyByb2xlKTtcbiAgICB9XG4gICAgdGhyb3cgXCJyb2xlIG11c3QgYmUgYSBQYXJzZS5Sb2xlIG9yIGEgU3RyaW5nXCI7XG4gIH07XG4gIFxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdXNlcnMgYmVsb25naW5nIHRvIHRoZSBnaXZlbiByb2xlIGFyZSBhbGxvd2VkXG4gICAqIHRvIHJlYWQgdGhpcyBvYmplY3QuXG4gICAqIFxuICAgKiBAcGFyYW0gcm9sZSBUaGUgbmFtZSBvZiB0aGUgcm9sZSwgb3IgYSBQYXJzZS5Sb2xlIG9iamVjdC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbGxvd2VkIFdoZXRoZXIgdGhlIGdpdmVuIHJvbGUgY2FuIHJlYWQgdGhpcyBvYmplY3QuXG4gICAqIEB0aHJvd3Mge1N0cmluZ30gSWYgcm9sZSBpcyBuZWl0aGVyIGEgUGFyc2UuUm9sZSBub3IgYSBTdHJpbmcuXG4gICAqL1xuICBQYXJzZS5BQ0wucHJvdG90eXBlLnNldFJvbGVSZWFkQWNjZXNzID0gZnVuY3Rpb24ocm9sZSwgYWxsb3dlZCkge1xuICAgIGlmIChyb2xlIGluc3RhbmNlb2YgUGFyc2UuUm9sZSkge1xuICAgICAgLy8gTm9ybWFsaXplIHRvIHRoZSBTdHJpbmcgbmFtZVxuICAgICAgcm9sZSA9IHJvbGUuZ2V0TmFtZSgpO1xuICAgIH1cbiAgICBpZiAoXy5pc1N0cmluZyhyb2xlKSkge1xuICAgICAgdGhpcy5zZXRSZWFkQWNjZXNzKFwicm9sZTpcIiArIHJvbGUsIGFsbG93ZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdyBcInJvbGUgbXVzdCBiZSBhIFBhcnNlLlJvbGUgb3IgYSBTdHJpbmdcIjtcbiAgfTtcbiAgXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB1c2VycyBiZWxvbmdpbmcgdG8gdGhlIGdpdmVuIHJvbGUgYXJlIGFsbG93ZWRcbiAgICogdG8gd3JpdGUgdGhpcyBvYmplY3QuXG4gICAqIFxuICAgKiBAcGFyYW0gcm9sZSBUaGUgbmFtZSBvZiB0aGUgcm9sZSwgb3IgYSBQYXJzZS5Sb2xlIG9iamVjdC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbGxvd2VkIFdoZXRoZXIgdGhlIGdpdmVuIHJvbGUgY2FuIHdyaXRlIHRoaXMgb2JqZWN0LlxuICAgKiBAdGhyb3dzIHtTdHJpbmd9IElmIHJvbGUgaXMgbmVpdGhlciBhIFBhcnNlLlJvbGUgbm9yIGEgU3RyaW5nLlxuICAgKi9cbiAgUGFyc2UuQUNMLnByb3RvdHlwZS5zZXRSb2xlV3JpdGVBY2Nlc3MgPSBmdW5jdGlvbihyb2xlLCBhbGxvd2VkKSB7XG4gICAgaWYgKHJvbGUgaW5zdGFuY2VvZiBQYXJzZS5Sb2xlKSB7XG4gICAgICAvLyBOb3JtYWxpemUgdG8gdGhlIFN0cmluZyBuYW1lXG4gICAgICByb2xlID0gcm9sZS5nZXROYW1lKCk7XG4gICAgfVxuICAgIGlmIChfLmlzU3RyaW5nKHJvbGUpKSB7XG4gICAgICB0aGlzLnNldFdyaXRlQWNjZXNzKFwicm9sZTpcIiArIHJvbGUsIGFsbG93ZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdyBcInJvbGUgbXVzdCBiZSBhIFBhcnNlLlJvbGUgb3IgYSBTdHJpbmdcIjtcbiAgfTtcblxufSh0aGlzKSk7XG5cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBBIFBhcnNlLk9wIGlzIGFuIGF0b21pYyBvcGVyYXRpb24gdGhhdCBjYW4gYmUgYXBwbGllZCB0byBhIGZpZWxkIGluIGFcbiAgICogUGFyc2UuT2JqZWN0LiBGb3IgZXhhbXBsZSwgY2FsbGluZyA8Y29kZT5vYmplY3Quc2V0KFwiZm9vXCIsIFwiYmFyXCIpPC9jb2RlPlxuICAgKiBpcyBhbiBleGFtcGxlIG9mIGEgUGFyc2UuT3AuU2V0LiBDYWxsaW5nIDxjb2RlPm9iamVjdC51bnNldChcImZvb1wiKTwvY29kZT5cbiAgICogaXMgYSBQYXJzZS5PcC5VbnNldC4gVGhlc2Ugb3BlcmF0aW9ucyBhcmUgc3RvcmVkIGluIGEgUGFyc2UuT2JqZWN0IGFuZFxuICAgKiBzZW50IHRvIHRoZSBzZXJ2ZXIgYXMgcGFydCBvZiA8Y29kZT5vYmplY3Quc2F2ZSgpPC9jb2RlPiBvcGVyYXRpb25zLlxuICAgKiBJbnN0YW5jZXMgb2YgUGFyc2UuT3Agc2hvdWxkIGJlIGltbXV0YWJsZS5cbiAgICpcbiAgICogWW91IHNob3VsZCBub3QgY3JlYXRlIHN1YmNsYXNzZXMgb2YgUGFyc2UuT3Agb3IgaW5zdGFudGlhdGUgUGFyc2UuT3BcbiAgICogZGlyZWN0bHkuXG4gICAqL1xuICBQYXJzZS5PcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBQYXJzZS5PcC5wcm90b3R5cGUgPSB7XG4gICAgX2luaXRpYWxpemU6IGZ1bmN0aW9uKCkge31cbiAgfTtcblxuICBfLmV4dGVuZChQYXJzZS5PcCwge1xuICAgIC8qKlxuICAgICAqIFRvIGNyZWF0ZSBhIG5ldyBPcCwgY2FsbCBQYXJzZS5PcC5fZXh0ZW5kKCk7XG4gICAgICovXG4gICAgX2V4dGVuZDogUGFyc2UuX2V4dGVuZCxcblxuICAgIC8vIEEgbWFwIG9mIF9fb3Agc3RyaW5nIHRvIGRlY29kZXIgZnVuY3Rpb24uXG4gICAgX29wRGVjb2Rlck1hcDoge30sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBjb252ZXJ0IGEganNvbiBvYmplY3Qgd2l0aCBhbiBfX29wIGZpZWxkIGludG8gYW5cbiAgICAgKiBpbnN0YW5jZSBvZiBhIHN1YmNsYXNzIG9mIFBhcnNlLk9wLlxuICAgICAqL1xuICAgIF9yZWdpc3RlckRlY29kZXI6IGZ1bmN0aW9uKG9wTmFtZSwgZGVjb2Rlcikge1xuICAgICAgUGFyc2UuT3AuX29wRGVjb2Rlck1hcFtvcE5hbWVdID0gZGVjb2RlcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBqc29uIG9iamVjdCBpbnRvIGFuIGluc3RhbmNlIG9mIGEgc3ViY2xhc3Mgb2YgUGFyc2UuT3AuXG4gICAgICovXG4gICAgX2RlY29kZTogZnVuY3Rpb24oanNvbikge1xuICAgICAgdmFyIGRlY29kZXIgPSBQYXJzZS5PcC5fb3BEZWNvZGVyTWFwW2pzb24uX19vcF07XG4gICAgICBpZiAoZGVjb2Rlcikge1xuICAgICAgICByZXR1cm4gZGVjb2Rlcihqc29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKlxuICAgKiBBZGQgYSBoYW5kbGVyIGZvciBCYXRjaCBvcHMuXG4gICAqL1xuICBQYXJzZS5PcC5fcmVnaXN0ZXJEZWNvZGVyKFwiQmF0Y2hcIiwgZnVuY3Rpb24oanNvbikge1xuICAgIHZhciBvcCA9IG51bGw7XG4gICAgUGFyc2UuX2FycmF5RWFjaChqc29uLm9wcywgZnVuY3Rpb24obmV4dE9wKSB7XG4gICAgICBuZXh0T3AgPSBQYXJzZS5PcC5fZGVjb2RlKG5leHRPcCk7XG4gICAgICBvcCA9IG5leHRPcC5fbWVyZ2VXaXRoUHJldmlvdXMob3ApO1xuICAgIH0pO1xuICAgIHJldHVybiBvcDtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBBIFNldCBvcGVyYXRpb24gaW5kaWNhdGVzIHRoYXQgZWl0aGVyIHRoZSBmaWVsZCB3YXMgY2hhbmdlZCB1c2luZ1xuICAgKiBQYXJzZS5PYmplY3Quc2V0LCBvciBpdCBpcyBhIG11dGFibGUgY29udGFpbmVyIHRoYXQgd2FzIGRldGVjdGVkIGFzIGJlaW5nXG4gICAqIGNoYW5nZWQuXG4gICAqL1xuICBQYXJzZS5PcC5TZXQgPSBQYXJzZS5PcC5fZXh0ZW5kKC8qKiBAbGVuZHMgUGFyc2UuT3AuU2V0LnByb3RvdHlwZSAqLyB7XG4gICAgX2luaXRpYWxpemU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXcgdmFsdWUgb2YgdGhpcyBmaWVsZCBhZnRlciB0aGUgc2V0LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gdmVyc2lvbiBvZiB0aGUgb3BlcmF0aW9uIHN1aXRhYmxlIGZvciBzZW5kaW5nIHRvIFBhcnNlLlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFBhcnNlLl9lbmNvZGUodGhpcy52YWx1ZSgpKTtcbiAgICB9LFxuXG4gICAgX21lcmdlV2l0aFByZXZpb3VzOiBmdW5jdGlvbihwcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9lc3RpbWF0ZTogZnVuY3Rpb24ob2xkVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIGJ5IFBhcnNlLk9wLlVuc2V0Ll9lc3RpbWF0ZSB0b1xuICAgKiBpbmRpY2F0ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGRlbGV0ZWQuIEJhc2ljYWxseSwgaWYgeW91IGZpbmQgX1VOU0VUIGFzIGFcbiAgICogdmFsdWUgaW4geW91ciBvYmplY3QsIHlvdSBzaG91bGQgcmVtb3ZlIHRoYXQga2V5LlxuICAgKi9cbiAgUGFyc2UuT3AuX1VOU0VUID0ge307XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBBbiBVbnNldCBvcGVyYXRpb24gaW5kaWNhdGVzIHRoYXQgdGhpcyBmaWVsZCBoYXMgYmVlbiBkZWxldGVkIGZyb20gdGhlXG4gICAqIG9iamVjdC5cbiAgICovXG4gIFBhcnNlLk9wLlVuc2V0ID0gUGFyc2UuT3AuX2V4dGVuZCgvKiogQGxlbmRzIFBhcnNlLk9wLlVuc2V0LnByb3RvdHlwZSAqLyB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gdmVyc2lvbiBvZiB0aGUgb3BlcmF0aW9uIHN1aXRhYmxlIGZvciBzZW5kaW5nIHRvIFBhcnNlLlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHsgX19vcDogXCJEZWxldGVcIiB9O1xuICAgIH0sXG5cbiAgICBfbWVyZ2VXaXRoUHJldmlvdXM6IGZ1bmN0aW9uKHByZXZpb3VzKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2VzdGltYXRlOiBmdW5jdGlvbihvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuIFBhcnNlLk9wLl9VTlNFVDtcbiAgICB9XG4gIH0pO1xuXG4gIFBhcnNlLk9wLl9yZWdpc3RlckRlY29kZXIoXCJEZWxldGVcIiwgZnVuY3Rpb24oanNvbikge1xuICAgIHJldHVybiBuZXcgUGFyc2UuT3AuVW5zZXQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBBbiBJbmNyZW1lbnQgaXMgYW4gYXRvbWljIG9wZXJhdGlvbiB3aGVyZSB0aGUgbnVtZXJpYyB2YWx1ZSBmb3IgdGhlIGZpZWxkXG4gICAqIHdpbGwgYmUgaW5jcmVhc2VkIGJ5IGEgZ2l2ZW4gYW1vdW50LlxuICAgKi9cbiAgUGFyc2UuT3AuSW5jcmVtZW50ID0gUGFyc2UuT3AuX2V4dGVuZChcbiAgICAgIC8qKiBAbGVuZHMgUGFyc2UuT3AuSW5jcmVtZW50LnByb3RvdHlwZSAqLyB7XG5cbiAgICBfaW5pdGlhbGl6ZTogZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICB0aGlzLl9hbW91bnQgPSBhbW91bnQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFtb3VudCB0byBpbmNyZW1lbnQgYnkuXG4gICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgYW1vdW50IHRvIGluY3JlbWVudCBieS5cbiAgICAgKi9cbiAgICBhbW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Ftb3VudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gdmVyc2lvbiBvZiB0aGUgb3BlcmF0aW9uIHN1aXRhYmxlIGZvciBzZW5kaW5nIHRvIFBhcnNlLlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHsgX19vcDogXCJJbmNyZW1lbnRcIiwgYW1vdW50OiB0aGlzLl9hbW91bnQgfTtcbiAgICB9LFxuXG4gICAgX21lcmdlV2l0aFByZXZpb3VzOiBmdW5jdGlvbihwcmV2aW91cykge1xuICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgaW5zdGFuY2VvZiBQYXJzZS5PcC5VbnNldCkge1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlLk9wLlNldCh0aGlzLmFtb3VudCgpKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgaW5zdGFuY2VvZiBQYXJzZS5PcC5TZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZS5PcC5TZXQocHJldmlvdXMudmFsdWUoKSArIHRoaXMuYW1vdW50KCkpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2aW91cyBpbnN0YW5jZW9mIFBhcnNlLk9wLkluY3JlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlLk9wLkluY3JlbWVudCh0aGlzLmFtb3VudCgpICsgcHJldmlvdXMuYW1vdW50KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJPcCBpcyBpbnZhbGlkIGFmdGVyIHByZXZpb3VzIG9wLlwiO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZXN0aW1hdGU6IGZ1bmN0aW9uKG9sZFZhbHVlKSB7XG4gICAgICBpZiAoIW9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlICsgdGhpcy5hbW91bnQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIFBhcnNlLk9wLl9yZWdpc3RlckRlY29kZXIoXCJJbmNyZW1lbnRcIiwgZnVuY3Rpb24oanNvbikge1xuICAgIHJldHVybiBuZXcgUGFyc2UuT3AuSW5jcmVtZW50KGpzb24uYW1vdW50KTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBBZGQgaXMgYW4gYXRvbWljIG9wZXJhdGlvbiB3aGVyZSB0aGUgZ2l2ZW4gb2JqZWN0cyB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZVxuICAgKiBhcnJheSB0aGF0IGlzIHN0b3JlZCBpbiB0aGlzIGZpZWxkLlxuICAgKi9cbiAgUGFyc2UuT3AuQWRkID0gUGFyc2UuT3AuX2V4dGVuZCgvKiogQGxlbmRzIFBhcnNlLk9wLkFkZC5wcm90b3R5cGUgKi8ge1xuICAgIF9pbml0aWFsaXplOiBmdW5jdGlvbihvYmplY3RzKSB7XG4gICAgICB0aGlzLl9vYmplY3RzID0gb2JqZWN0cztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0cyB0byBiZSBhZGRlZCB0byB0aGUgYXJyYXkuXG4gICAgICogQHJldHVybiB7QXJyYXl9IFRoZSBvYmplY3RzIHRvIGJlIGFkZGVkIHRvIHRoZSBhcnJheS5cbiAgICAgKi9cbiAgICBvYmplY3RzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgSlNPTiB2ZXJzaW9uIG9mIHRoZSBvcGVyYXRpb24gc3VpdGFibGUgZm9yIHNlbmRpbmcgdG8gUGFyc2UuXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRvSlNPTjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4geyBfX29wOiBcIkFkZFwiLCBvYmplY3RzOiBQYXJzZS5fZW5jb2RlKHRoaXMub2JqZWN0cygpKSB9O1xuICAgIH0sXG5cbiAgICBfbWVyZ2VXaXRoUHJldmlvdXM6IGZ1bmN0aW9uKHByZXZpb3VzKSB7XG4gICAgICBpZiAoIXByZXZpb3VzKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIGlmIChwcmV2aW91cyBpbnN0YW5jZW9mIFBhcnNlLk9wLlVuc2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2UuT3AuU2V0KHRoaXMub2JqZWN0cygpKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgaW5zdGFuY2VvZiBQYXJzZS5PcC5TZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZS5PcC5TZXQodGhpcy5fZXN0aW1hdGUocHJldmlvdXMudmFsdWUoKSkpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2aW91cyBpbnN0YW5jZW9mIFBhcnNlLk9wLkFkZCkge1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlLk9wLkFkZChwcmV2aW91cy5vYmplY3RzKCkuY29uY2F0KHRoaXMub2JqZWN0cygpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcIk9wIGlzIGludmFsaWQgYWZ0ZXIgcHJldmlvdXMgb3AuXCI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9lc3RpbWF0ZTogZnVuY3Rpb24ob2xkVmFsdWUpIHtcbiAgICAgIGlmICghb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF8uY2xvbmUodGhpcy5vYmplY3RzKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmNvbmNhdCh0aGlzLm9iamVjdHMoKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBQYXJzZS5PcC5fcmVnaXN0ZXJEZWNvZGVyKFwiQWRkXCIsIGZ1bmN0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlLk9wLkFkZChQYXJzZS5fZGVjb2RlKHVuZGVmaW5lZCwganNvbi5vYmplY3RzKSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQWRkVW5pcXVlIGlzIGFuIGF0b21pYyBvcGVyYXRpb24gd2hlcmUgdGhlIGdpdmVuIGl0ZW1zIHdpbGwgYmUgYXBwZW5kZWQgdG9cbiAgICogdGhlIGFycmF5IHRoYXQgaXMgc3RvcmVkIGluIHRoaXMgZmllbGQgb25seSBpZiB0aGV5IHdlcmUgbm90IGFscmVhZHlcbiAgICogcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gICAqL1xuICBQYXJzZS5PcC5BZGRVbmlxdWUgPSBQYXJzZS5PcC5fZXh0ZW5kKFxuICAgICAgLyoqIEBsZW5kcyBQYXJzZS5PcC5BZGRVbmlxdWUucHJvdG90eXBlICovIHtcblxuICAgIF9pbml0aWFsaXplOiBmdW5jdGlvbihvYmplY3RzKSB7XG4gICAgICB0aGlzLl9vYmplY3RzID0gXy51bmlxKG9iamVjdHMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3RzIHRvIGJlIGFkZGVkIHRvIHRoZSBhcnJheS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIG9iamVjdHMgdG8gYmUgYWRkZWQgdG8gdGhlIGFycmF5LlxuICAgICAqL1xuICAgIG9iamVjdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBKU09OIHZlcnNpb24gb2YgdGhlIG9wZXJhdGlvbiBzdWl0YWJsZSBmb3Igc2VuZGluZyB0byBQYXJzZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgdG9KU09OOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7IF9fb3A6IFwiQWRkVW5pcXVlXCIsIG9iamVjdHM6IFBhcnNlLl9lbmNvZGUodGhpcy5vYmplY3RzKCkpIH07XG4gICAgfSxcblxuICAgIF9tZXJnZVdpdGhQcmV2aW91czogZnVuY3Rpb24ocHJldmlvdXMpIHtcbiAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzIGluc3RhbmNlb2YgUGFyc2UuT3AuVW5zZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZS5PcC5TZXQodGhpcy5vYmplY3RzKCkpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2aW91cyBpbnN0YW5jZW9mIFBhcnNlLk9wLlNldCkge1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlLk9wLlNldCh0aGlzLl9lc3RpbWF0ZShwcmV2aW91cy52YWx1ZSgpKSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzIGluc3RhbmNlb2YgUGFyc2UuT3AuQWRkVW5pcXVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2UuT3AuQWRkVW5pcXVlKHRoaXMuX2VzdGltYXRlKHByZXZpb3VzLm9iamVjdHMoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJPcCBpcyBpbnZhbGlkIGFmdGVyIHByZXZpb3VzIG9wLlwiO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZXN0aW1hdGU6IGZ1bmN0aW9uKG9sZFZhbHVlKSB7XG4gICAgICBpZiAoIW9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfLmNsb25lKHRoaXMub2JqZWN0cygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlIGNhbid0IGp1c3QgdGFrZSB0aGUgXy51bmlxKF8udW5pb24oLi4uKSkgb2Ygb2xkVmFsdWUgYW5kXG4gICAgICAgIC8vIHRoaXMub2JqZWN0cywgYmVjYXVzZSB0aGUgdW5pcXVlbmVzcyBtYXkgbm90IGFwcGx5IHRvIG9sZFZhbHVlXG4gICAgICAgIC8vIChlc3BlY2lhbGx5IGlmIHRoZSBvbGRWYWx1ZSB3YXMgc2V0IHZpYSAuc2V0KCkpXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF8uY2xvbmUob2xkVmFsdWUpO1xuICAgICAgICBQYXJzZS5fYXJyYXlFYWNoKHRoaXMub2JqZWN0cygpLCBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgUGFyc2UuT2JqZWN0ICYmIG9iai5pZCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoaW5nT2JqID0gXy5maW5kKG5ld1ZhbHVlLCBmdW5jdGlvbihhbk9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gKGFuT2JqIGluc3RhbmNlb2YgUGFyc2UuT2JqZWN0KSAmJiAoYW5PYmouaWQgPT09IG9iai5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghbWF0Y2hpbmdPYmopIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWUucHVzaChvYmopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGluZGV4ID0gXy5pbmRleE9mKG5ld1ZhbHVlLCBtYXRjaGluZ09iaik7XG4gICAgICAgICAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IG9iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFfLmNvbnRhaW5zKG5ld1ZhbHVlLCBvYmopKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZS5wdXNoKG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgUGFyc2UuT3AuX3JlZ2lzdGVyRGVjb2RlcihcIkFkZFVuaXF1ZVwiLCBmdW5jdGlvbihqc29uKSB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZS5PcC5BZGRVbmlxdWUoUGFyc2UuX2RlY29kZSh1bmRlZmluZWQsIGpzb24ub2JqZWN0cykpO1xuICB9KTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIFJlbW92ZSBpcyBhbiBhdG9taWMgb3BlcmF0aW9uIHdoZXJlIHRoZSBnaXZlbiBvYmplY3RzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gICAqIHRoZSBhcnJheSB0aGF0IGlzIHN0b3JlZCBpbiB0aGlzIGZpZWxkLlxuICAgKi9cbiAgUGFyc2UuT3AuUmVtb3ZlID0gUGFyc2UuT3AuX2V4dGVuZCgvKiogQGxlbmRzIFBhcnNlLk9wLlJlbW92ZS5wcm90b3R5cGUgKi8ge1xuICAgIF9pbml0aWFsaXplOiBmdW5jdGlvbihvYmplY3RzKSB7XG4gICAgICB0aGlzLl9vYmplY3RzID0gXy51bmlxKG9iamVjdHMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3RzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgYXJyYXkuXG4gICAgICogQHJldHVybiB7QXJyYXl9IFRoZSBvYmplY3RzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgYXJyYXkuXG4gICAgICovXG4gICAgb2JqZWN0czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gdmVyc2lvbiBvZiB0aGUgb3BlcmF0aW9uIHN1aXRhYmxlIGZvciBzZW5kaW5nIHRvIFBhcnNlLlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHsgX19vcDogXCJSZW1vdmVcIiwgb2JqZWN0czogUGFyc2UuX2VuY29kZSh0aGlzLm9iamVjdHMoKSkgfTtcbiAgICB9LFxuXG4gICAgX21lcmdlV2l0aFByZXZpb3VzOiBmdW5jdGlvbihwcmV2aW91cykge1xuICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgaW5zdGFuY2VvZiBQYXJzZS5PcC5VbnNldCkge1xuICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzIGluc3RhbmNlb2YgUGFyc2UuT3AuU2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2UuT3AuU2V0KHRoaXMuX2VzdGltYXRlKHByZXZpb3VzLnZhbHVlKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgaW5zdGFuY2VvZiBQYXJzZS5PcC5SZW1vdmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZS5PcC5SZW1vdmUoXy51bmlvbihwcmV2aW91cy5vYmplY3RzKCksIHRoaXMub2JqZWN0cygpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcIk9wIGlzIGludmFsaWQgYWZ0ZXIgcHJldmlvdXMgb3AuXCI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9lc3RpbWF0ZTogZnVuY3Rpb24ob2xkVmFsdWUpIHtcbiAgICAgIGlmICghb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gXy5kaWZmZXJlbmNlKG9sZFZhbHVlLCB0aGlzLm9iamVjdHMoKSk7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBzYXZlZCBQYXJzZSBPYmplY3RzIGJlaW5nIHJlbW92ZWQsIGFsc28gcmVtb3ZlIHRoZW0uXG4gICAgICAgIFBhcnNlLl9hcnJheUVhY2godGhpcy5vYmplY3RzKCksIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBQYXJzZS5PYmplY3QgJiYgb2JqLmlkKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IF8ucmVqZWN0KG5ld1ZhbHVlLCBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICAgICAgICByZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgUGFyc2UuT2JqZWN0KSAmJiAob3RoZXIuaWQgPT09IG9iai5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBQYXJzZS5PcC5fcmVnaXN0ZXJEZWNvZGVyKFwiUmVtb3ZlXCIsIGZ1bmN0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlLk9wLlJlbW92ZShQYXJzZS5fZGVjb2RlKHVuZGVmaW5lZCwganNvbi5vYmplY3RzKSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQSBSZWxhdGlvbiBvcGVyYXRpb24gaW5kaWNhdGVzIHRoYXQgdGhlIGZpZWxkIGlzIGFuIGluc3RhbmNlIG9mXG4gICAqIFBhcnNlLlJlbGF0aW9uLCBhbmQgb2JqZWN0cyBhcmUgYmVpbmcgYWRkZWQgdG8sIG9yIHJlbW92ZWQgZnJvbSwgdGhhdFxuICAgKiByZWxhdGlvbi5cbiAgICovXG4gIFBhcnNlLk9wLlJlbGF0aW9uID0gUGFyc2UuT3AuX2V4dGVuZChcbiAgICAgIC8qKiBAbGVuZHMgUGFyc2UuT3AuUmVsYXRpb24ucHJvdG90eXBlICovIHtcblxuICAgIF9pbml0aWFsaXplOiBmdW5jdGlvbihhZGRzLCByZW1vdmVzKSB7XG4gICAgICB0aGlzLl90YXJnZXRDbGFzc05hbWUgPSBudWxsO1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHZhciBwb2ludGVyVG9JZCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgUGFyc2UuT2JqZWN0KSB7XG4gICAgICAgICAgaWYgKCFvYmplY3QuaWQpIHtcbiAgICAgICAgICAgIHRocm93IFwiWW91IGNhbid0IGFkZCBhbiB1bnNhdmVkIFBhcnNlLk9iamVjdCB0byBhIHJlbGF0aW9uLlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXNlbGYuX3RhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgc2VsZi5fdGFyZ2V0Q2xhc3NOYW1lID0gb2JqZWN0LmNsYXNzTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGYuX3RhcmdldENsYXNzTmFtZSAhPT0gb2JqZWN0LmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgXCJUcmllZCB0byBjcmVhdGUgYSBQYXJzZS5SZWxhdGlvbiB3aXRoIDIgZGlmZmVyZW50IHR5cGVzOiBcIiArXG4gICAgICAgICAgICAgICAgICBzZWxmLl90YXJnZXRDbGFzc05hbWUgKyBcIiBhbmQgXCIgKyBvYmplY3QuY2xhc3NOYW1lICsgXCIuXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmplY3QuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVsYXRpb25zVG9BZGQgPSBfLnVuaXEoXy5tYXAoYWRkcywgcG9pbnRlclRvSWQpKTtcbiAgICAgIHRoaXMucmVsYXRpb25zVG9SZW1vdmUgPSBfLnVuaXEoXy5tYXAocmVtb3ZlcywgcG9pbnRlclRvSWQpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB1bmZldGNoZWQgUGFyc2UuT2JqZWN0IHRoYXQgYXJlIGJlaW5nIGFkZGVkIHRvIHRoZVxuICAgICAqIHJlbGF0aW9uLlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIGFkZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHJldHVybiBfLm1hcCh0aGlzLnJlbGF0aW9uc1RvQWRkLCBmdW5jdGlvbihvYmplY3RJZCkge1xuICAgICAgICB2YXIgb2JqZWN0ID0gUGFyc2UuT2JqZWN0Ll9jcmVhdGUoc2VsZi5fdGFyZ2V0Q2xhc3NOYW1lKTtcbiAgICAgICAgb2JqZWN0LmlkID0gb2JqZWN0SWQ7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB1bmZldGNoZWQgUGFyc2UuT2JqZWN0IHRoYXQgYXJlIGJlaW5nIHJlbW92ZWQgZnJvbVxuICAgICAqIHRoZSByZWxhdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICByZW1vdmVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHJldHVybiBfLm1hcCh0aGlzLnJlbGF0aW9uc1RvUmVtb3ZlLCBmdW5jdGlvbihvYmplY3RJZCkge1xuICAgICAgICB2YXIgb2JqZWN0ID0gUGFyc2UuT2JqZWN0Ll9jcmVhdGUoc2VsZi5fdGFyZ2V0Q2xhc3NOYW1lKTtcbiAgICAgICAgb2JqZWN0LmlkID0gb2JqZWN0SWQ7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gdmVyc2lvbiBvZiB0aGUgb3BlcmF0aW9uIHN1aXRhYmxlIGZvciBzZW5kaW5nIHRvIFBhcnNlLlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFkZHMgPSBudWxsO1xuICAgICAgdmFyIHJlbW92ZXMgPSBudWxsO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGlkVG9Qb2ludGVyID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgX190eXBlOiAnUG9pbnRlcicsXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogc2VsZi5fdGFyZ2V0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICBvYmplY3RJZDogaWQgfTtcbiAgICAgIH07XG4gICAgICB2YXIgcG9pbnRlcnMgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucmVsYXRpb25zVG9BZGQubGVuZ3RoID4gMCkge1xuICAgICAgICBwb2ludGVycyA9IF8ubWFwKHRoaXMucmVsYXRpb25zVG9BZGQsIGlkVG9Qb2ludGVyKTtcbiAgICAgICAgYWRkcyA9IHsgXCJfX29wXCI6IFwiQWRkUmVsYXRpb25cIiwgXCJvYmplY3RzXCI6IHBvaW50ZXJzIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJlbGF0aW9uc1RvUmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9pbnRlcnMgPSBfLm1hcCh0aGlzLnJlbGF0aW9uc1RvUmVtb3ZlLCBpZFRvUG9pbnRlcik7XG4gICAgICAgIHJlbW92ZXMgPSB7IFwiX19vcFwiOiBcIlJlbW92ZVJlbGF0aW9uXCIsIFwib2JqZWN0c1wiOiBwb2ludGVycyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkcyAmJiByZW1vdmVzKSB7XG4gICAgICAgIHJldHVybiB7IFwiX19vcFwiOiBcIkJhdGNoXCIsIFwib3BzXCI6IFthZGRzLCByZW1vdmVzXX07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRzIHx8IHJlbW92ZXMgfHwge307XG4gICAgfSxcblxuICAgIF9tZXJnZVdpdGhQcmV2aW91czogZnVuY3Rpb24ocHJldmlvdXMpIHtcbiAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzIGluc3RhbmNlb2YgUGFyc2UuT3AuVW5zZXQpIHtcbiAgICAgICAgdGhyb3cgXCJZb3UgY2FuJ3QgbW9kaWZ5IGEgcmVsYXRpb24gYWZ0ZXIgZGVsZXRpbmcgaXQuXCI7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzIGluc3RhbmNlb2YgUGFyc2UuT3AuUmVsYXRpb24pIHtcbiAgICAgICAgaWYgKHByZXZpb3VzLl90YXJnZXRDbGFzc05hbWUgJiZcbiAgICAgICAgICAgIHByZXZpb3VzLl90YXJnZXRDbGFzc05hbWUgIT09IHRoaXMuX3RhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgIHRocm93IFwiUmVsYXRlZCBvYmplY3QgbXVzdCBiZSBvZiBjbGFzcyBcIiArIHByZXZpb3VzLl90YXJnZXRDbGFzc05hbWUgK1xuICAgICAgICAgICAgICBcIiwgYnV0IFwiICsgdGhpcy5fdGFyZ2V0Q2xhc3NOYW1lICsgXCIgd2FzIHBhc3NlZCBpbi5cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3QWRkID0gXy51bmlvbihfLmRpZmZlcmVuY2UocHJldmlvdXMucmVsYXRpb25zVG9BZGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGF0aW9uc1RvUmVtb3ZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxhdGlvbnNUb0FkZCk7XG4gICAgICAgIHZhciBuZXdSZW1vdmUgPSBfLnVuaW9uKF8uZGlmZmVyZW5jZShwcmV2aW91cy5yZWxhdGlvbnNUb1JlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsYXRpb25zVG9BZGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGF0aW9uc1RvUmVtb3ZlKTtcblxuICAgICAgICB2YXIgbmV3UmVsYXRpb24gPSBuZXcgUGFyc2UuT3AuUmVsYXRpb24obmV3QWRkLCBuZXdSZW1vdmUpO1xuICAgICAgICBuZXdSZWxhdGlvbi5fdGFyZ2V0Q2xhc3NOYW1lID0gdGhpcy5fdGFyZ2V0Q2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gbmV3UmVsYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcIk9wIGlzIGludmFsaWQgYWZ0ZXIgcHJldmlvdXMgb3AuXCI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9lc3RpbWF0ZTogZnVuY3Rpb24ob2xkVmFsdWUsIG9iamVjdCwga2V5KSB7XG4gICAgICBpZiAoIW9sZFZhbHVlKSB7XG4gICAgICAgIHZhciByZWxhdGlvbiA9IG5ldyBQYXJzZS5SZWxhdGlvbihvYmplY3QsIGtleSk7XG4gICAgICAgIHJlbGF0aW9uLnRhcmdldENsYXNzTmFtZSA9IHRoaXMuX3RhcmdldENsYXNzTmFtZTtcbiAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWUgaW5zdGFuY2VvZiBQYXJzZS5SZWxhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgaWYgKG9sZFZhbHVlLnRhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlLnRhcmdldENsYXNzTmFtZSAhPT0gdGhpcy5fdGFyZ2V0Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIHRocm93IFwiUmVsYXRlZCBvYmplY3QgbXVzdCBiZSBhIFwiICsgb2xkVmFsdWUudGFyZ2V0Q2xhc3NOYW1lICtcbiAgICAgICAgICAgICAgICAgIFwiLCBidXQgYSBcIiArIHRoaXMuX3RhcmdldENsYXNzTmFtZSArIFwiIHdhcyBwYXNzZWQgaW4uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLnRhcmdldENsYXNzTmFtZSA9IHRoaXMuX3RhcmdldENsYXNzTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJPcCBpcyBpbnZhbGlkIGFmdGVyIHByZXZpb3VzIG9wLlwiO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgUGFyc2UuT3AuX3JlZ2lzdGVyRGVjb2RlcihcIkFkZFJlbGF0aW9uXCIsIGZ1bmN0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlLk9wLlJlbGF0aW9uKFBhcnNlLl9kZWNvZGUodW5kZWZpbmVkLCBqc29uLm9iamVjdHMpLCBbXSk7XG4gIH0pO1xuICBQYXJzZS5PcC5fcmVnaXN0ZXJEZWNvZGVyKFwiUmVtb3ZlUmVsYXRpb25cIiwgZnVuY3Rpb24oanNvbikge1xuICAgIHJldHVybiBuZXcgUGFyc2UuT3AuUmVsYXRpb24oW10sIFBhcnNlLl9kZWNvZGUodW5kZWZpbmVkLCBqc29uLm9iamVjdHMpKTtcbiAgfSk7XG5cbn0odGhpcykpO1xuXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgdmFyIF8gPSBQYXJzZS5fO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFJlbGF0aW9uIGZvciB0aGUgZ2l2ZW4gcGFyZW50IG9iamVjdCBhbmQga2V5LiBUaGlzXG4gICAqIGNvbnN0cnVjdG9yIHNob3VsZCByYXJlbHkgYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciBjcmVhdGVkIGJ5XG4gICAqIFBhcnNlLk9iamVjdC5yZWxhdGlvbi5cbiAgICogQHBhcmFtIHtQYXJzZS5PYmplY3R9IHBhcmVudCBUaGUgcGFyZW50IG9mIHRoaXMgcmVsYXRpb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhpcyByZWxhdGlvbiBvbiB0aGUgcGFyZW50LlxuICAgKiBAc2VlIFBhcnNlLk9iamVjdCNyZWxhdGlvblxuICAgKiBAY2xhc3NcbiAgICpcbiAgICogPHA+XG4gICAqIEEgY2xhc3MgdGhhdCBpcyB1c2VkIHRvIGFjY2VzcyBhbGwgb2YgdGhlIGNoaWxkcmVuIG9mIGEgbWFueS10by1tYW55XG4gICAqIHJlbGF0aW9uc2hpcC4gIEVhY2ggaW5zdGFuY2Ugb2YgUGFyc2UuUmVsYXRpb24gaXMgYXNzb2NpYXRlZCB3aXRoIGFcbiAgICogcGFydGljdWxhciBwYXJlbnQgb2JqZWN0IGFuZCBrZXkuXG4gICAqIDwvcD5cbiAgICovXG4gIFBhcnNlLlJlbGF0aW9uID0gZnVuY3Rpb24ocGFyZW50LCBrZXkpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnRhcmdldENsYXNzTmFtZSA9IG51bGw7XG4gIH07XG5cbiAgUGFyc2UuUmVsYXRpb24ucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIE1ha2VzIHN1cmUgdGhhdCB0aGlzIHJlbGF0aW9uIGhhcyB0aGUgcmlnaHQgcGFyZW50IGFuZCBrZXkuXG4gICAgICovXG4gICAgX2Vuc3VyZVBhcmVudEFuZEtleTogZnVuY3Rpb24ocGFyZW50LCBrZXkpIHtcbiAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgcGFyZW50O1xuICAgICAgdGhpcy5rZXkgPSB0aGlzLmtleSB8fCBrZXk7XG4gICAgICBpZiAodGhpcy5wYXJlbnQgIT09IHBhcmVudCkge1xuICAgICAgICB0aHJvdyBcIkludGVybmFsIEVycm9yLiBSZWxhdGlvbiByZXRyaWV2ZWQgZnJvbSB0d28gZGlmZmVyZW50IE9iamVjdHMuXCI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5rZXkgIT09IGtleSkge1xuICAgICAgICB0aHJvdyBcIkludGVybmFsIEVycm9yLiBSZWxhdGlvbiByZXRyaWV2ZWQgZnJvbSB0d28gZGlmZmVyZW50IGtleXMuXCI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBQYXJzZS5PYmplY3Qgb3IgYW4gYXJyYXkgb2YgUGFyc2UuT2JqZWN0cyB0byB0aGUgcmVsYXRpb24uXG4gICAgICogQHBhcmFtIHt9IG9iamVjdHMgVGhlIGl0ZW0gb3IgaXRlbXMgdG8gYWRkLlxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24ob2JqZWN0cykge1xuICAgICAgaWYgKCFfLmlzQXJyYXkob2JqZWN0cykpIHtcbiAgICAgICAgb2JqZWN0cyA9IFtvYmplY3RzXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZSA9IG5ldyBQYXJzZS5PcC5SZWxhdGlvbihvYmplY3RzLCBbXSk7XG4gICAgICB0aGlzLnBhcmVudC5zZXQodGhpcy5rZXksIGNoYW5nZSk7XG4gICAgICB0aGlzLnRhcmdldENsYXNzTmFtZSA9IGNoYW5nZS5fdGFyZ2V0Q2xhc3NOYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgUGFyc2UuT2JqZWN0IG9yIGFuIGFycmF5IG9mIFBhcnNlLk9iamVjdHMgZnJvbSB0aGlzIHJlbGF0aW9uLlxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RzIFRoZSBpdGVtIG9yIGl0ZW1zIHRvIHJlbW92ZS5cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uKG9iamVjdHMpIHtcbiAgICAgIGlmICghXy5pc0FycmF5KG9iamVjdHMpKSB7XG4gICAgICAgIG9iamVjdHMgPSBbb2JqZWN0c107XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGFuZ2UgPSBuZXcgUGFyc2UuT3AuUmVsYXRpb24oW10sIG9iamVjdHMpO1xuICAgICAgdGhpcy5wYXJlbnQuc2V0KHRoaXMua2V5LCBjaGFuZ2UpO1xuICAgICAgdGhpcy50YXJnZXRDbGFzc05hbWUgPSBjaGFuZ2UuX3RhcmdldENsYXNzTmFtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gdmVyc2lvbiBvZiB0aGUgb2JqZWN0IHN1aXRhYmxlIGZvciBzYXZpbmcgdG8gZGlzay5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgdG9KU09OOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7IFwiX190eXBlXCI6IFwiUmVsYXRpb25cIiwgXCJjbGFzc05hbWVcIjogdGhpcy50YXJnZXRDbGFzc05hbWUgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFBhcnNlLlF1ZXJ5IHRoYXQgaXMgbGltaXRlZCB0byBvYmplY3RzIGluIHRoaXNcbiAgICAgKiByZWxhdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX1cbiAgICAgKi9cbiAgICBxdWVyeTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdGFyZ2V0Q2xhc3M7XG4gICAgICB2YXIgcXVlcnk7XG4gICAgICBpZiAoIXRoaXMudGFyZ2V0Q2xhc3NOYW1lKSB7XG4gICAgICAgIHRhcmdldENsYXNzID0gUGFyc2UuT2JqZWN0Ll9nZXRTdWJjbGFzcyh0aGlzLnBhcmVudC5jbGFzc05hbWUpO1xuICAgICAgICBxdWVyeSA9IG5ldyBQYXJzZS5RdWVyeSh0YXJnZXRDbGFzcyk7XG4gICAgICAgIHF1ZXJ5Ll9leHRyYU9wdGlvbnMucmVkaXJlY3RDbGFzc05hbWVGb3JLZXkgPSB0aGlzLmtleTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldENsYXNzID0gUGFyc2UuT2JqZWN0Ll9nZXRTdWJjbGFzcyh0aGlzLnRhcmdldENsYXNzTmFtZSk7XG4gICAgICAgIHF1ZXJ5ID0gbmV3IFBhcnNlLlF1ZXJ5KHRhcmdldENsYXNzKTtcbiAgICAgIH1cbiAgICAgIHF1ZXJ5Ll9hZGRDb25kaXRpb24oXCIkcmVsYXRlZFRvXCIsIFwib2JqZWN0XCIsIHRoaXMucGFyZW50Ll90b1BvaW50ZXIoKSk7XG4gICAgICBxdWVyeS5fYWRkQ29uZGl0aW9uKFwiJHJlbGF0ZWRUb1wiLCBcImtleVwiLCB0aGlzLmtleSk7XG5cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gIH07XG59KHRoaXMpKTtcblxuLypnbG9iYWwgd2luZG93OiBmYWxzZSwgcHJvY2VzczogZmFsc2UgKi9cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgLyoqXG4gICAqIEEgUHJvbWlzZSBpcyByZXR1cm5lZCBieSBhc3luYyBtZXRob2RzIGFzIGEgaG9vayB0byBwcm92aWRlIGNhbGxiYWNrcyB0byBiZVxuICAgKiBjYWxsZWQgd2hlbiB0aGUgYXN5bmMgdGFzayBpcyBmdWxmaWxsZWQuXG4gICAqXG4gICAqIDxwPlR5cGljYWwgdXNhZ2Ugd291bGQgYmUgbGlrZTo8cHJlPlxuICAgKiAgICBxdWVyeS5maW5kKCkudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAqICAgICAgcmVzdWx0c1swXS5zZXQoXCJmb29cIiwgXCJiYXJcIik7XG4gICAqICAgICAgcmV0dXJuIHJlc3VsdHNbMF0uc2F2ZUFzeW5jKCk7XG4gICAqICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAqICAgICAgY29uc29sZS5sb2coXCJVcGRhdGVkIFwiICsgcmVzdWx0LmlkKTtcbiAgICogICAgfSk7XG4gICAqIDwvcHJlPjwvcD5cbiAgICpcbiAgICogQHNlZSBQYXJzZS5Qcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgUGFyc2UuUHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVqZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXNvbHZlZENhbGxiYWNrcyA9IFtdO1xuICAgIHRoaXMuX3JlamVjdGVkQ2FsbGJhY2tzID0gW107XG4gIH07XG5cbiAgXy5leHRlbmQoUGFyc2UuUHJvbWlzZSwgLyoqIEBsZW5kcyBQYXJzZS5Qcm9taXNlICovIHtcblxuICAgIF9pc1Byb21pc2VzQVBsdXNDb21wbGlhbnQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmZiB0aGUgZ2l2ZW4gb2JqZWN0IGZ1bGZpbHMgdGhlIFByb21pc2UgaW50ZXJmYWNlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgIHJldHVybiBwcm9taXNlICYmIHByb21pc2UudGhlbiAmJiBfLmlzRnVuY3Rpb24ocHJvbWlzZS50aGVuKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCBhIGdpdmVuIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IHRoZSBuZXcgcHJvbWlzZS5cbiAgICAgKi9cbiAgICBhczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQYXJzZS5Qcm9taXNlKCk7XG4gICAgICBwcm9taXNlLnJlc29sdmUuYXBwbHkocHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IHByb21pc2UgdGhhdCBpcyByZWplY3RlZCB3aXRoIGEgZ2l2ZW4gZXJyb3IuXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gdGhlIG5ldyBwcm9taXNlLlxuICAgICAqL1xuICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFBhcnNlLlByb21pc2UoKTtcbiAgICAgIHByb21pc2UucmVqZWN0LmFwcGx5KHByb21pc2UsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gYWxsIG9mIHRoZSBpbnB1dCBwcm9taXNlc1xuICAgICAqIGFyZSByZXNvbHZlZC4gSWYgYW55IHByb21pc2UgaW4gdGhlIGxpc3QgZmFpbHMsIHRoZW4gdGhlIHJldHVybmVkIHByb21pc2VcbiAgICAgKiB3aWxsIGZhaWwgd2l0aCB0aGUgbGFzdCBlcnJvci4gSWYgdGhleSBhbGwgc3VjY2VlZCwgdGhlbiB0aGUgcmV0dXJuZWRcbiAgICAgKiBwcm9taXNlIHdpbGwgc3VjY2VlZCwgd2l0aCB0aGUgcmVzdWx0cyBiZWluZyB0aGUgcmVzdWx0cyBvZiBhbGwgdGhlIGlucHV0XG4gICAgICogcHJvbWlzZXMuIEZvciBleGFtcGxlOiA8cHJlPlxuICAgICAqICAgdmFyIHAxID0gUGFyc2UuUHJvbWlzZS5hcygxKTtcbiAgICAgKiAgIHZhciBwMiA9IFBhcnNlLlByb21pc2UuYXMoMik7XG4gICAgICogICB2YXIgcDMgPSBQYXJzZS5Qcm9taXNlLmFzKDMpO1xuICAgICAqXG4gICAgICogICBQYXJzZS5Qcm9taXNlLndoZW4ocDEsIHAyLCBwMykudGhlbihmdW5jdGlvbihyMSwgcjIsIHIzKSB7XG4gICAgICogICAgIGNvbnNvbGUubG9nKHIxKTsgIC8vIHByaW50cyAxXG4gICAgICogICAgIGNvbnNvbGUubG9nKHIyKTsgIC8vIHByaW50cyAyXG4gICAgICogICAgIGNvbnNvbGUubG9nKHIzKTsgIC8vIHByaW50cyAzXG4gICAgICogICB9KTs8L3ByZT5cbiAgICAgKlxuICAgICAqIFRoZSBpbnB1dCBwcm9taXNlcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgYXMgYW4gYXJyYXk6IDxwcmU+XG4gICAgICogICB2YXIgcHJvbWlzZXMgPSBbcDEsIHAyLCBwM107XG4gICAgICogICBQYXJzZS5Qcm9taXNlLndoZW4ocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24ocjEsIHIyLCByMykge1xuICAgICAqICAgICBjb25zb2xlLmxvZyhyMSk7ICAvLyBwcmludHMgMVxuICAgICAqICAgICBjb25zb2xlLmxvZyhyMik7ICAvLyBwcmludHMgMlxuICAgICAqICAgICBjb25zb2xlLmxvZyhyMyk7ICAvLyBwcmludHMgM1xuICAgICAqICAgfSk7XG4gICAgICogPC9wcmU+XG4gICAgICogQHBhcmFtIHtBcnJheX0gcHJvbWlzZXMgYSBsaXN0IG9mIHByb21pc2VzIHRvIHdhaXQgZm9yLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IHRoZSBuZXcgcHJvbWlzZS5cbiAgICAgKi9cbiAgICB3aGVuOiBmdW5jdGlvbihwcm9taXNlcykge1xuICAgICAgLy8gQWxsb3cgcGFzc2luZyBpbiBQcm9taXNlcyBhcyBzZXBhcmF0ZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBhbiBBcnJheS5cbiAgICAgIHZhciBvYmplY3RzO1xuICAgICAgaWYgKHByb21pc2VzICYmIFBhcnNlLl9pc051bGxPclVuZGVmaW5lZChwcm9taXNlcy5sZW5ndGgpKSB7XG4gICAgICAgIG9iamVjdHMgPSBhcmd1bWVudHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzID0gcHJvbWlzZXM7XG4gICAgICB9XG5cbiAgICAgIHZhciB0b3RhbCA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgdmFyIGhhZEVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgcmVzdWx0cy5sZW5ndGggPSBvYmplY3RzLmxlbmd0aDtcbiAgICAgIGVycm9ycy5sZW5ndGggPSBvYmplY3RzLmxlbmd0aDtcblxuICAgICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzLmFwcGx5KHRoaXMsIHJlc3VsdHMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQYXJzZS5Qcm9taXNlKCk7XG5cbiAgICAgIHZhciByZXNvbHZlT25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvdGFsID0gdG90YWwgLSAxO1xuICAgICAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgICAgICBpZiAoaGFkRXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGVycm9ycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZS5hcHBseShwcm9taXNlLCByZXN1bHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFBhcnNlLl9hcnJheUVhY2gob2JqZWN0cywgZnVuY3Rpb24ob2JqZWN0LCBpKSB7XG4gICAgICAgIGlmIChQYXJzZS5Qcm9taXNlLmlzKG9iamVjdCkpIHtcbiAgICAgICAgICBvYmplY3QudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdHNbaV0gPSByZXN1bHQ7XG4gICAgICAgICAgICByZXNvbHZlT25lKCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yc1tpXSA9IGVycm9yO1xuICAgICAgICAgICAgaGFkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZU9uZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHNbaV0gPSBvYmplY3Q7XG4gICAgICAgICAgcmVzb2x2ZU9uZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlIGdpdmVuIGFzeW5jRnVuY3Rpb24gcmVwZWF0ZWRseSwgYXMgbG9uZyBhcyB0aGUgcHJlZGljYXRlXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZS4gU3RvcHMgcmVwZWF0aW5nIGlmIGFzeW5jRnVuY3Rpb24gcmV0dXJuc1xuICAgICAqIGEgcmVqZWN0ZWQgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgc2hvdWxkIHJldHVybiBmYWxzZSB3aGVuIHJlYWR5IHRvIHN0b3AuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gYXN5bmNGdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKi9cbiAgICBfY29udGludWVXaGlsZTogZnVuY3Rpb24ocHJlZGljYXRlLCBhc3luY0Z1bmN0aW9uKSB7XG4gICAgICBpZiAocHJlZGljYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jRnVuY3Rpb24oKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLl9jb250aW51ZVdoaWxlKHByZWRpY2F0ZSwgYXN5bmNGdW5jdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKFBhcnNlLlByb21pc2UucHJvdG90eXBlLCAvKiogQGxlbmRzIFBhcnNlLlByb21pc2UucHJvdG90eXBlICovIHtcblxuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoaXMgcHJvbWlzZSBhcyBmdWxmaWxsZWQsIGZpcmluZyBhbnkgY2FsbGJhY2tzIHdhaXRpbmcgb24gaXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3VsdCB0aGUgcmVzdWx0IHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICByZXNvbHZlOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIGlmICh0aGlzLl9yZXNvbHZlZCB8fCB0aGlzLl9yZWplY3RlZCkge1xuICAgICAgICB0aHJvdyBcIkEgcHJvbWlzZSB3YXMgcmVzb2x2ZWQgZXZlbiB0aG91Z2ggaXQgaGFkIGFscmVhZHkgYmVlbiBcIiArXG4gICAgICAgICAgKHRoaXMuX3Jlc29sdmVkID8gXCJyZXNvbHZlZFwiIDogXCJyZWplY3RlZFwiKSArIFwiLlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHJlc3VsdHMgPSBhcmd1bWVudHM7XG4gICAgICBQYXJzZS5fYXJyYXlFYWNoKHRoaXMuX3Jlc29sdmVkQ2FsbGJhY2tzLCBmdW5jdGlvbihyZXNvbHZlZENhbGxiYWNrKSB7XG4gICAgICAgIHJlc29sdmVkQ2FsbGJhY2suYXBwbHkodGhpcywgcmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3Jlc29sdmVkQ2FsbGJhY2tzID0gW107XG4gICAgICB0aGlzLl9yZWplY3RlZENhbGxiYWNrcyA9IFtdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGlzIHByb21pc2UgYXMgZnVsZmlsbGVkLCBmaXJpbmcgYW55IGNhbGxiYWNrcyB3YWl0aW5nIG9uIGl0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvciB0aGUgZXJyb3IgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHJlamVjdDogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLl9yZXNvbHZlZCB8fCB0aGlzLl9yZWplY3RlZCkge1xuICAgICAgICB0aHJvdyBcIkEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQgZXZlbiB0aG91Z2ggaXQgaGFkIGFscmVhZHkgYmVlbiBcIiArXG4gICAgICAgICAgKHRoaXMuX3Jlc29sdmVkID8gXCJyZXNvbHZlZFwiIDogXCJyZWplY3RlZFwiKSArIFwiLlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgIFBhcnNlLl9hcnJheUVhY2godGhpcy5fcmVqZWN0ZWRDYWxsYmFja3MsIGZ1bmN0aW9uKHJlamVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgcmVqZWN0ZWRDYWxsYmFjayhlcnJvcik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3Jlc29sdmVkQ2FsbGJhY2tzID0gW107XG4gICAgICB0aGlzLl9yZWplY3RlZENhbGxiYWNrcyA9IFtdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGNhbGxiYWNrcyB0byBiZSBjYWxsZWQgd2hlbiB0aGlzIHByb21pc2UgaXMgZnVsZmlsbGVkLiBSZXR1cm5zIGEgbmV3XG4gICAgICogUHJvbWlzZSB0aGF0IHdpbGwgYmUgZnVsZmlsbGVkIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGNvbXBsZXRlLiBJdCBhbGxvd3NcbiAgICAgKiBjaGFpbmluZy4gSWYgdGhlIGNhbGxiYWNrIGl0c2VsZiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlbiB0aGUgb25lIHJldHVybmVkXG4gICAgICogYnkgXCJ0aGVuXCIgd2lsbCBub3QgYmUgZnVsZmlsbGVkIHVudGlsIHRoYXQgb25lIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuICAgICAqIGlzIGZ1bGZpbGxlZC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlZENhbGxiYWNrIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhpc1xuICAgICAqIFByb21pc2UgaXMgcmVzb2x2ZWQuIE9uY2UgdGhlIGNhbGxiYWNrIGlzIGNvbXBsZXRlLCB0aGVuIHRoZSBQcm9taXNlXG4gICAgICogcmV0dXJuZWQgYnkgXCJ0aGVuXCIgd2lsbCBhbHNvIGJlIGZ1bGZpbGxlZC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZENhbGxiYWNrIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhpc1xuICAgICAqIFByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCBhbiBlcnJvci4gT25jZSB0aGUgY2FsbGJhY2sgaXMgY29tcGxldGUsIHRoZW5cbiAgICAgKiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSBcInRoZW5cIiB3aXRoIGJlIHJlc29sdmVkIHN1Y2Nlc3NmdWxseS4gSWZcbiAgICAgKiByZWplY3RlZENhbGxiYWNrIGlzIG51bGwsIG9yIGl0IHJldHVybnMgYSByZWplY3RlZCBQcm9taXNlLCB0aGVuIHRoZVxuICAgICAqIFByb21pc2UgcmV0dXJuZWQgYnkgXCJ0aGVuXCIgd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoYXQgZXJyb3IuXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBuZXcgUHJvbWlzZSB0aGF0IHdpbGwgYmUgZnVsZmlsbGVkIGFmdGVyIHRoaXNcbiAgICAgKiBQcm9taXNlIGlzIGZ1bGZpbGxlZCBhbmQgZWl0aGVyIGNhbGxiYWNrIGhhcyBjb21wbGV0ZWQuIElmIHRoZSBjYWxsYmFja1xuICAgICAqIHJldHVybmVkIGEgUHJvbWlzZSwgdGhlbiB0aGlzIFByb21pc2Ugd2lsbCBub3QgYmUgZnVsZmlsbGVkIHVudGlsIHRoYXRcbiAgICAgKiBvbmUgaXMuXG4gICAgICovXG4gICAgdGhlbjogZnVuY3Rpb24ocmVzb2x2ZWRDYWxsYmFjaywgcmVqZWN0ZWRDYWxsYmFjaykge1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUGFyc2UuUHJvbWlzZSgpO1xuXG4gICAgICB2YXIgd3JhcHBlZFJlc29sdmVkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGFyZ3VtZW50cztcbiAgICAgICAgaWYgKHJlc29sdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICBpZiAoUGFyc2UuUHJvbWlzZS5faXNQcm9taXNlc0FQbHVzQ29tcGxpYW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBbcmVzb2x2ZWRDYWxsYmFjay5hcHBseSh0aGlzLCByZXN1bHQpXTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gW1BhcnNlLlByb21pc2UuZXJyb3IoZSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbcmVzb2x2ZWRDYWxsYmFjay5hcHBseSh0aGlzLCByZXN1bHQpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEgJiYgUGFyc2UuUHJvbWlzZS5pcyhyZXN1bHRbMF0pKSB7XG4gICAgICAgICAgcmVzdWx0WzBdLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUuYXBwbHkocHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZS5hcHBseShwcm9taXNlLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgd3JhcHBlZFJlamVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmIChyZWplY3RlZENhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKFBhcnNlLlByb21pc2UuX2lzUHJvbWlzZXNBUGx1c0NvbXBsaWFudCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gW3JlamVjdGVkQ2FsbGJhY2soZXJyb3IpXTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gW1BhcnNlLlByb21pc2UuZXJyb3IoZSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbcmVqZWN0ZWRDYWxsYmFjayhlcnJvcildO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiBQYXJzZS5Qcm9taXNlLmlzKHJlc3VsdFswXSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFswXS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUuYXBwbHkocHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoUGFyc2UuUHJvbWlzZS5faXNQcm9taXNlc0FQbHVzQ29tcGxpYW50KSB7XG4gICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZS5hcHBseShwcm9taXNlLCByZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QocmVzdWx0WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgcnVuTGF0ZXIgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgICAgIGZ1bmMuY2FsbCgpO1xuICAgICAgfTtcbiAgICAgIGlmIChQYXJzZS5Qcm9taXNlLl9pc1Byb21pc2VzQVBsdXNDb21wbGlhbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZih3aW5kb3cpICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc2V0VGltZW91dCkge1xuICAgICAgICAgIHJ1bkxhdGVyID0gZnVuY3Rpb24oZnVuYykge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuYywgMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YocHJvY2VzcykgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MubmV4dFRpY2spIHtcbiAgICAgICAgICBydW5MYXRlciA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuYyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5fcmVzb2x2ZWQpIHtcbiAgICAgICAgcnVuTGF0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgd3JhcHBlZFJlc29sdmVkQ2FsbGJhY2suYXBwbHkoc2VsZiwgc2VsZi5fcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3JlamVjdGVkKSB7XG4gICAgICAgIHJ1bkxhdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHdyYXBwZWRSZWplY3RlZENhbGxiYWNrKHNlbGYuX2Vycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXNvbHZlZENhbGxiYWNrcy5wdXNoKHdyYXBwZWRSZXNvbHZlZENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0ZWRDYWxsYmFja3MucHVzaCh3cmFwcGVkUmVqZWN0ZWRDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgaGFuZGxlcnMgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHByb21pc2UgXG4gICAgICogaXMgZWl0aGVyIHJlc29sdmVkIG9yIHJlamVjdGVkXG4gICAgICovXG4gICAgYWx3YXlzOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbihjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgaGFuZGxlcnMgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFByb21pc2Ugb2JqZWN0IGlzIHJlc29sdmVkXG4gICAgICovXG4gICAgZG9uZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4oY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgaGFuZGxlcnMgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFByb21pc2Ugb2JqZWN0IGlzIHJlamVjdGVkXG4gICAgICovXG4gICAgZmFpbDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSdW4gdGhlIGdpdmVuIGNhbGxiYWNrcyBhZnRlciB0aGlzIHByb21pc2UgaXMgZnVsZmlsbGVkLlxuICAgICAqIEBwYXJhbSBvcHRpb25zT3JDYWxsYmFjayB7fSBBIEJhY2tib25lLXN0eWxlIG9wdGlvbnMgY2FsbGJhY2ssIG9yIGFcbiAgICAgKiBjYWxsYmFjayBmdW5jdGlvbi4gSWYgdGhpcyBpcyBhbiBvcHRpb25zIG9iamVjdCBhbmQgY29udGFpbnMgYSBcIm1vZGVsXCJcbiAgICAgKiBhdHRyaWJ1dGVzLCB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIGVycm9yIGNhbGxiYWNrcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAgICogQHBhcmFtIG1vZGVsIHt9IElmIHRydXRoeSwgdGhpcyB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgZmlyc3QgcmVzdWx0IG9mXG4gICAgICogZXJyb3IgY2FsbGJhY2tzLiBUaGlzIGlzIGZvciBCYWNrYm9uZS1jb21wYXRhYmlsaXR5LlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgYWZ0ZXIgdGhlXG4gICAgICogY2FsbGJhY2tzIGFyZSBydW4sIHdpdGggdGhlIHNhbWUgcmVzdWx0IGFzIHRoaXMuXG4gICAgICovXG4gICAgX3RoZW5SdW5DYWxsYmFja3M6IGZ1bmN0aW9uKG9wdGlvbnNPckNhbGxiYWNrLCBtb2RlbCkge1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9wdGlvbnNPckNhbGxiYWNrKSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBvcHRpb25zT3JDYWxsYmFjaztcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgbnVsbCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gXy5jbG9uZShvcHRpb25zT3JDYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgLy8gV2hlbiB0aGVyZSdzIG5vIGNhbGxiYWNrLCBhIHN5bmMgZXZlbnQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cbiAgICAgICAgICBtb2RlbC50cmlnZ2VyKCdzeW5jJywgbW9kZWwsIHJlc3VsdCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMuYXBwbHkoUGFyc2UuUHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKG1vZGVsKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihtb2RlbCwgZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZWwpIHtcbiAgICAgICAgICAvLyBXaGVuIHRoZXJlJ3Mgbm8gZXJyb3IgY2FsbGJhY2ssIGFuIGVycm9yIGV2ZW50IHNob3VsZCBiZSB0cmlnZ2VyZWQuXG4gICAgICAgICAgbW9kZWwudHJpZ2dlcignZXJyb3InLCBtb2RlbCwgZXJyb3IsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGEgcmVqZWN0ZWQgUHJvbWlzZSwgdGhpcyB3aWxsIHdvcmsgd2l0aFxuICAgICAgICAvLyBlaXRoZXIgalF1ZXJ5IG9yIFByb21pc2VzL0Egc2VtYW50aWNzLlxuICAgICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCByZWdhcmRsZXNzIG9mIHdoZXRoZXJcbiAgICAgKiB0aGlzIHByb21pc2UgZmFpbGVkIG9yIHN1Y2NlZWRlZC4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgZ2l2ZW4gZWl0aGVyIHRoZVxuICAgICAqIGFycmF5IG9mIHJlc3VsdHMgZm9yIGl0cyBmaXJzdCBhcmd1bWVudCwgb3IgdGhlIGVycm9yIGFzIGl0cyBzZWNvbmQsXG4gICAgICogZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhpcyBQcm9taXNlIHdhcyByZWplY3RlZCBvciByZXNvbHZlZC4gUmV0dXJucyBhXG4gICAgICogbmV3IFByb21pc2UsIGxpa2UgXCJ0aGVuXCIgd291bGQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIHRoZSBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBfY29udGludWVXaXRoOiBmdW5jdGlvbihjb250aW51YXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250aW51YXRpb24oYXJndW1lbnRzLCBudWxsKTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjb250aW51YXRpb24obnVsbCwgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuXG59KHRoaXMpKTtcblxuLypqc2hpbnQgYml0d2lzZTpmYWxzZSAqLy8qZ2xvYmFsIEZpbGVSZWFkZXI6IHRydWUsIEZpbGU6IHRydWUgKi9cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgdmFyIGI2NERpZ2l0ID0gZnVuY3Rpb24obnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDI2KSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIG51bWJlcik7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPCA1Mikge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyAobnVtYmVyIC0gMjYpKTtcbiAgICB9XG4gICAgaWYgKG51bWJlciA8IDYyKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCArIChudW1iZXIgLSA1MikpO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID09PSA2Mikge1xuICAgICAgcmV0dXJuIFwiK1wiO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID09PSA2Mykge1xuICAgICAgcmV0dXJuIFwiL1wiO1xuICAgIH1cbiAgICB0aHJvdyBcIlRyaWVkIHRvIGVuY29kZSBsYXJnZSBkaWdpdCBcIiArIG51bWJlciArIFwiIGluIGJhc2U2NC5cIjtcbiAgfTtcblxuICB2YXIgZW5jb2RlQmFzZTY0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgY2h1bmtzID0gW107XG4gICAgY2h1bmtzLmxlbmd0aCA9IE1hdGguY2VpbChhcnJheS5sZW5ndGggLyAzKTtcbiAgICBfLnRpbWVzKGNodW5rcy5sZW5ndGgsIGZ1bmN0aW9uKGkpIHtcbiAgICAgIHZhciBiMSA9IGFycmF5W2kgKiAzXTtcbiAgICAgIHZhciBiMiA9IGFycmF5W2kgKiAzICsgMV0gfHwgMDtcbiAgICAgIHZhciBiMyA9IGFycmF5W2kgKiAzICsgMl0gfHwgMDtcblxuICAgICAgdmFyIGhhczIgPSAoaSAqIDMgKyAxKSA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIHZhciBoYXMzID0gKGkgKiAzICsgMikgPCBhcnJheS5sZW5ndGg7XG5cbiAgICAgIGNodW5rc1tpXSA9IFtcbiAgICAgICAgYjY0RGlnaXQoKGIxID4+IDIpICYgMHgzRiksXG4gICAgICAgIGI2NERpZ2l0KCgoYjEgPDwgNCkgJiAweDMwKSB8ICgoYjIgPj4gNCkgJiAweDBGKSksXG4gICAgICAgIGhhczIgPyBiNjREaWdpdCgoKGIyIDw8IDIpICYgMHgzQykgfCAoKGIzID4+IDYpICYgMHgwMykpIDogXCI9XCIsXG4gICAgICAgIGhhczMgPyBiNjREaWdpdChiMyAmIDB4M0YpIDogXCI9XCJcbiAgICAgIF0uam9pbihcIlwiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2h1bmtzLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlYWRzIGEgRmlsZSB1c2luZyBhIEZpbGVSZWFkZXIuXG4gICAqIEBwYXJhbSBmaWxlIHtGaWxlfSB0aGUgRmlsZSB0byByZWFkLlxuICAgKiBAcGFyYW0gdHlwZSB7U3RyaW5nfSAob3B0aW9uYWwpIHRoZSBtaW1ldHlwZSB0byBvdmVycmlkZSB3aXRoLlxuICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIFByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCB3aXRoIGFcbiAgICogICAgIGJhc2U2NC1lbmNvZGVkIHN0cmluZyBvZiB0aGUgZGF0YSBhbmQgaXRzIG1pbWUgdHlwZS5cbiAgICovXG4gIHZhciByZWFkQXN5bmMgPSBmdW5jdGlvbihmaWxlLCB0eXBlKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUGFyc2UuUHJvbWlzZSgpO1xuXG4gICAgaWYgKHR5cGVvZihGaWxlUmVhZGVyKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3IobmV3IFBhcnNlLkVycm9yKFxuICAgICAgICAgIFBhcnNlLkVycm9yLkZJTEVfUkVBRF9FUlJPUixcbiAgICAgICAgICBcIkF0dGVtcHRlZCB0byB1c2UgYSBGaWxlUmVhZGVyIG9uIGFuIHVuc3VwcG9ydGVkIGJyb3dzZXIuXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmVhZGVyLnJlYWR5U3RhdGUgIT09IDIpIHtcbiAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IFBhcnNlLkVycm9yKFxuICAgICAgICAgICAgUGFyc2UuRXJyb3IuRklMRV9SRUFEX0VSUk9SLFxuICAgICAgICAgICAgXCJFcnJvciByZWFkaW5nIGZpbGUuXCIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YVVSTCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICB2YXIgbWF0Y2hlcyA9IC9eZGF0YTooW147XSopO2Jhc2U2NCwoLiopJC8uZXhlYyhkYXRhVVJMKTtcbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgUGFyc2UuRXJyb3IoXG4gICAgICAgICAgICBQYXJzZS5FcnJvci5GSUxFX1JFQURfRVJST1IsXG4gICAgICAgICAgICBcIlVuYWJsZSB0byBpbnRlcnByZXQgZGF0YSBVUkw6IFwiICsgZGF0YVVSTCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UucmVzb2x2ZShtYXRjaGVzWzJdLCB0eXBlIHx8IG1hdGNoZXNbMV0pO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgUGFyc2UuRmlsZSBpcyBhIGxvY2FsIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSB0aGF0IGlzIHNhdmVkIHRvIHRoZSBQYXJzZVxuICAgKiBjbG91ZC5cbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9IFRoZSBmaWxlJ3MgbmFtZS4gVGhpcyB3aWxsIGJlIHByZWZpeGVkIGJ5IGEgdW5pcXVlXG4gICAqICAgICB2YWx1ZSBvbmNlIHRoZSBmaWxlIGhhcyBmaW5pc2hlZCBzYXZpbmcuIFRoZSBmaWxlIG5hbWUgbXVzdCBiZWdpbiB3aXRoXG4gICAqICAgICBhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLCBhbmQgY29uc2lzdCBvZiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyxcbiAgICogICAgIHBlcmlvZHMsIHNwYWNlcywgdW5kZXJzY29yZXMsIG9yIGRhc2hlcy5cbiAgICogQHBhcmFtIGRhdGEge0FycmF5fSBUaGUgZGF0YSBmb3IgdGhlIGZpbGUsIGFzIGVpdGhlcjpcbiAgICogICAgIDEuIGFuIEFycmF5IG9mIGJ5dGUgdmFsdWUgTnVtYmVycywgb3JcbiAgICogICAgIDIuIGFuIE9iamVjdCBsaWtlIHsgYmFzZTY0OiBcIi4uLlwiIH0gd2l0aCBhIGJhc2U2NC1lbmNvZGVkIFN0cmluZy5cbiAgICogICAgIDMuIGEgRmlsZSBvYmplY3Qgc2VsZWN0ZWQgd2l0aCBhIGZpbGUgdXBsb2FkIGNvbnRyb2wuICgzKSBvbmx5IHdvcmtzXG4gICAqICAgICAgICBpbiBGaXJlZm94IDMuNissIFNhZmFyaSA2LjAuMissIENocm9tZSA3KywgYW5kIElFIDEwKy5cbiAgICogICAgICAgIEZvciBleGFtcGxlOjxwcmU+XG4gICAqIHZhciBmaWxlVXBsb2FkQ29udHJvbCA9ICQoXCIjcHJvZmlsZVBob3RvRmlsZVVwbG9hZFwiKVswXTtcbiAgICogaWYgKGZpbGVVcGxvYWRDb250cm9sLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICogICB2YXIgZmlsZSA9IGZpbGVVcGxvYWRDb250cm9sLmZpbGVzWzBdO1xuICAgKiAgIHZhciBuYW1lID0gXCJwaG90by5qcGdcIjtcbiAgICogICB2YXIgcGFyc2VGaWxlID0gbmV3IFBhcnNlLkZpbGUobmFtZSwgZmlsZSk7XG4gICAqICAgcGFyc2VGaWxlLnNhdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgKiAgICAgLy8gVGhlIGZpbGUgaGFzIGJlZW4gc2F2ZWQgdG8gUGFyc2UuXG4gICAqICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICogICAgIC8vIFRoZSBmaWxlIGVpdGhlciBjb3VsZCBub3QgYmUgcmVhZCwgb3IgY291bGQgbm90IGJlIHNhdmVkIHRvIFBhcnNlLlxuICAgKiAgIH0pO1xuICAgKiB9PC9wcmU+XG4gICAqIEBwYXJhbSB0eXBlIHtTdHJpbmd9IE9wdGlvbmFsIENvbnRlbnQtVHlwZSBoZWFkZXIgdG8gdXNlIGZvciB0aGUgZmlsZS4gSWZcbiAgICogICAgIHRoaXMgaXMgb21pdHRlZCwgdGhlIGNvbnRlbnQgdHlwZSB3aWxsIGJlIGluZmVycmVkIGZyb20gdGhlIG5hbWUnc1xuICAgKiAgICAgZXh0ZW5zaW9uLlxuICAgKi9cbiAgUGFyc2UuRmlsZSA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEsIHR5cGUpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcblxuICAgIC8vIEd1ZXNzIHRoZSBjb250ZW50IHR5cGUgZnJvbSB0aGUgZXh0ZW5zaW9uIGlmIHdlIG5lZWQgdG8uXG4gICAgdmFyIGV4dGVuc2lvbiA9IC9cXC4oW14uXSopJC8uZXhlYyhuYW1lKTtcbiAgICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgICBleHRlbnNpb24gPSBleHRlbnNpb25bMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgdmFyIHNwZWNpZmllZFR5cGUgPSB0eXBlIHx8ICcnO1xuXG4gICAgaWYgKF8uaXNBcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5fc291cmNlID0gUGFyc2UuUHJvbWlzZS5hcyhlbmNvZGVCYXNlNjQoZGF0YSksIHNwZWNpZmllZFR5cGUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YSAmJiBkYXRhLmJhc2U2NCkge1xuICAgICAgLy8gaWYgaXQgY29udGFpbnMgZGF0YSB1cmksIGV4dHJhY3QgYmFzZWQ2NCBhbmQgdGhlIHR5cGUgb3V0IG9mIGl0LlxuICAgICAgLypqc2xpbnQgbWF4bGVuOiAxMDAwKi9cbiAgICAgIHZhciBkYXRhVXJpUmVnZXhwID0gL15kYXRhOihbYS16QS1aXSpcXC9bYS16QS1aKy4tXSopOyhjaGFyc2V0PVthLXpBLVowLTlcXC1cXC9cXHNdKiwpP2Jhc2U2NCwoXFxTKykvO1xuICAgICAgLypqc2xpbnQgbWF4bGVuOiA4MCovXG5cbiAgICAgIHZhciBtYXRjaGVzID0gZGF0YVVyaVJlZ2V4cC5leGVjKGRhdGEuYmFzZTY0KTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBpZiBkYXRhIFVSSSB3aXRoIGNoYXJzZXQsIHRoZXJlIHdpbGwgaGF2ZSA0IG1hdGNoZXMuXG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IFBhcnNlLlByb21pc2UuYXMoXG4gICAgICAgICAgKG1hdGNoZXMubGVuZ3RoID09PSA0ID8gbWF0Y2hlc1szXSA6IG1hdGNoZXNbMl0pLCBtYXRjaGVzWzFdXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zb3VyY2UgPSBQYXJzZS5Qcm9taXNlLmFzKGRhdGEuYmFzZTY0LCBzcGVjaWZpZWRUeXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZihGaWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgdGhpcy5fc291cmNlID0gcmVhZEFzeW5jKGRhdGEsIHR5cGUpO1xuICAgIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgdGhyb3cgXCJDcmVhdGluZyBhIFBhcnNlLkZpbGUgZnJvbSBhIFN0cmluZyBpcyBub3QgeWV0IHN1cHBvcnRlZC5cIjtcbiAgICB9XG4gIH07XG5cbiAgUGFyc2UuRmlsZS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBuYW1lIG9mIHRoZSBmaWxlLiBCZWZvcmUgc2F2ZSBpcyBjYWxsZWQsIHRoaXMgaXMgdGhlIGZpbGVuYW1lXG4gICAgICogZ2l2ZW4gYnkgdGhlIHVzZXIuIEFmdGVyIHNhdmUgaXMgY2FsbGVkLCB0aGF0IG5hbWUgZ2V0cyBwcmVmaXhlZCB3aXRoIGFcbiAgICAgKiB1bmlxdWUgaWRlbnRpZmllci5cbiAgICAgKi9cbiAgICBuYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB1cmwgb2YgdGhlIGZpbGUuIEl0IGlzIG9ubHkgYXZhaWxhYmxlIGFmdGVyIHlvdSBzYXZlIHRoZSBmaWxlIG9yXG4gICAgICogYWZ0ZXIgeW91IGdldCB0aGUgZmlsZSBmcm9tIGEgUGFyc2UuT2JqZWN0LlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICB1cmw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgdGhlIGZpbGUgdG8gdGhlIFBhcnNlIGNsb3VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIHNhdmUgZmluaXNoZXMuXG4gICAgICovXG4gICAgc2F2ZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucz0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKCFzZWxmLl9wcmV2aW91c1NhdmUpIHtcbiAgICAgICAgc2VsZi5fcHJldmlvdXNTYXZlID0gc2VsZi5fc291cmNlLnRoZW4oZnVuY3Rpb24oYmFzZTY0LCB0eXBlKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBiYXNlNjQ6IGJhc2U2NCxcbiAgICAgICAgICAgIF9Db250ZW50VHlwZTogdHlwZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgICAgIHJvdXRlOiBcImZpbGVzXCIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHNlbGYuX25hbWUsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICB1c2VNYXN0ZXJLZXk6IG9wdGlvbnMudXNlTWFzdGVyS2V5XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHNlbGYuX25hbWUgPSByZXNwb25zZS5uYW1lO1xuICAgICAgICAgIHNlbGYuX3VybCA9IHJlc3BvbnNlLnVybDtcbiAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZi5fcHJldmlvdXNTYXZlLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxufSh0aGlzKSk7XG5cbi8vIFBhcnNlLk9iamVjdCBpcyBhbmFsb2dvdXMgdG8gdGhlIEphdmEgUGFyc2VPYmplY3QuXG4vLyBJdCBhbHNvIGltcGxlbWVudHMgdGhlIHNhbWUgaW50ZXJmYWNlIGFzIGEgQmFja2JvbmUgbW9kZWwuXG4vLyBUT0RPOiBtdWx0aXBsZSBkaXNwYXRjaCBmb3IgY2FsbGJhY2tzXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgdmFyIF8gPSBQYXJzZS5fO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IG1vZGVsIHdpdGggZGVmaW5lZCBhdHRyaWJ1dGVzLiBBIGNsaWVudCBpZCAoY2lkKSBpc1xuICAgKiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhbmQgYXNzaWduZWQgZm9yIHlvdS5cbiAgICpcbiAgICogPHA+WW91IHdvbid0IG5vcm1hbGx5IGNhbGwgdGhpcyBtZXRob2QgZGlyZWN0bHkuICBJdCBpcyByZWNvbW1lbmRlZCB0aGF0XG4gICAqIHlvdSB1c2UgYSBzdWJjbGFzcyBvZiA8Y29kZT5QYXJzZS5PYmplY3Q8L2NvZGU+IGluc3RlYWQsIGNyZWF0ZWQgYnkgY2FsbGluZ1xuICAgKiA8Y29kZT5leHRlbmQ8L2NvZGU+LjwvcD5cbiAgICpcbiAgICogPHA+SG93ZXZlciwgaWYgeW91IGRvbid0IHdhbnQgdG8gdXNlIGEgc3ViY2xhc3MsIG9yIGFyZW4ndCBzdXJlIHdoaWNoXG4gICAqIHN1YmNsYXNzIGlzIGFwcHJvcHJpYXRlLCB5b3UgY2FuIHVzZSB0aGlzIGZvcm06PHByZT5cbiAgICogICAgIHZhciBvYmplY3QgPSBuZXcgUGFyc2UuT2JqZWN0KFwiQ2xhc3NOYW1lXCIpO1xuICAgKiA8L3ByZT5cbiAgICogVGhhdCBpcyBiYXNpY2FsbHkgZXF1aXZhbGVudCB0bzo8cHJlPlxuICAgKiAgICAgdmFyIE15Q2xhc3MgPSBQYXJzZS5PYmplY3QuZXh0ZW5kKFwiQ2xhc3NOYW1lXCIpO1xuICAgKiAgICAgdmFyIG9iamVjdCA9IG5ldyBNeUNsYXNzKCk7XG4gICAqIDwvcHJlPjwvcD5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgVGhlIGluaXRpYWwgc2V0IG9mIGRhdGEgdG8gc3RvcmUgaW4gdGhlIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBzZXQgb2YgQmFja2JvbmUtbGlrZSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGVcbiAgICogICAgIG9iamVjdC4gIFRoZSBvbmx5IG9wdGlvbiBjdXJyZW50bHkgc3VwcG9ydGVkIGlzIFwiY29sbGVjdGlvblwiLlxuICAgKiBAc2VlIFBhcnNlLk9iamVjdC5leHRlbmRcbiAgICpcbiAgICogQGNsYXNzXG4gICAqXG4gICAqIDxwPlRoZSBmdW5kYW1lbnRhbCB1bml0IG9mIFBhcnNlIGRhdGEsIHdoaWNoIGltcGxlbWVudHMgdGhlIEJhY2tib25lIE1vZGVsXG4gICAqIGludGVyZmFjZS48L3A+XG4gICAqL1xuICBQYXJzZS5PYmplY3QgPSBmdW5jdGlvbihhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgLy8gQWxsb3cgbmV3IFBhcnNlLk9iamVjdChcIkNsYXNzTmFtZVwiKSBhcyBhIHNob3J0Y3V0IHRvIF9jcmVhdGUuXG4gICAgaWYgKF8uaXNTdHJpbmcoYXR0cmlidXRlcykpIHtcbiAgICAgIHJldHVybiBQYXJzZS5PYmplY3QuX2NyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucGFyc2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMgPSB0aGlzLnBhcnNlKGF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgICB2YXIgZGVmYXVsdHMgPSBQYXJzZS5fZ2V0VmFsdWUodGhpcywgJ2RlZmF1bHRzJyk7XG4gICAgaWYgKGRlZmF1bHRzKSB7XG4gICAgICBhdHRyaWJ1dGVzID0gXy5leHRlbmQoe30sIGRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jb2xsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNvbGxlY3Rpb24gPSBvcHRpb25zLmNvbGxlY3Rpb247XG4gICAgfVxuXG4gICAgdGhpcy5fc2VydmVyRGF0YSA9IHt9OyAgLy8gVGhlIGxhc3Qga25vd24gZGF0YSBmb3IgdGhpcyBvYmplY3QgZnJvbSBjbG91ZC5cbiAgICB0aGlzLl9vcFNldFF1ZXVlID0gW3t9XTsgIC8vIExpc3Qgb2Ygc2V0cyBvZiBjaGFuZ2VzIHRvIHRoZSBkYXRhLlxuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9OyAgLy8gVGhlIGJlc3QgZXN0aW1hdGUgb2YgdGhpcydzIGN1cnJlbnQgZGF0YS5cblxuICAgIHRoaXMuX2hhc2hlZEpTT04gPSB7fTsgIC8vIEhhc2ggb2YgdmFsdWVzIG9mIGNvbnRhaW5lcnMgYXQgbGFzdCBzYXZlLlxuICAgIHRoaXMuX2VzY2FwZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaWQgPSBfLnVuaXF1ZUlkKCdjJyk7XG4gICAgdGhpcy5jaGFuZ2VkID0ge307XG4gICAgdGhpcy5fc2lsZW50ID0ge307XG4gICAgdGhpcy5fcGVuZGluZyA9IHt9O1xuICAgIGlmICghdGhpcy5zZXQoYXR0cmlidXRlcywge3NpbGVudDogdHJ1ZX0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBjcmVhdGUgYW4gaW52YWxpZCBQYXJzZS5PYmplY3RcIik7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZCA9IHt9O1xuICAgIHRoaXMuX3NpbGVudCA9IHt9O1xuICAgIHRoaXMuX3BlbmRpbmcgPSB7fTtcbiAgICB0aGlzLl9oYXNEYXRhID0gdHJ1ZTtcbiAgICB0aGlzLl9wcmV2aW91c0F0dHJpYnV0ZXMgPSBfLmNsb25lKHRoaXMuYXR0cmlidXRlcyk7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGlzIG9iamVjdCwgdW5pcXVlIHdpdGhpbiBpdHMgY2xhc3MuXG4gICAqIEBuYW1lIGlkXG4gICAqIEB0eXBlIFN0cmluZ1xuICAgKiBAZmllbGRcbiAgICogQG1lbWJlck9mIFBhcnNlLk9iamVjdC5wcm90b3R5cGVcbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBmaXJzdCB0aW1lIHRoaXMgb2JqZWN0IHdhcyBzYXZlZCBvbiB0aGUgc2VydmVyLlxuICAgKiBAbmFtZSBjcmVhdGVkQXRcbiAgICogQHR5cGUgRGF0ZVxuICAgKiBAZmllbGRcbiAgICogQG1lbWJlck9mIFBhcnNlLk9iamVjdC5wcm90b3R5cGVcbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBsYXN0IHRpbWUgdGhpcyBvYmplY3Qgd2FzIHVwZGF0ZWQgb24gdGhlIHNlcnZlci5cbiAgICogQG5hbWUgdXBkYXRlZEF0XG4gICAqIEB0eXBlIERhdGVcbiAgICogQGZpZWxkXG4gICAqIEBtZW1iZXJPZiBQYXJzZS5PYmplY3QucHJvdG90eXBlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgZ2l2ZW4gbGlzdCBvZiBQYXJzZS5PYmplY3QuXG4gICAqIElmIGFueSBlcnJvciBpcyBlbmNvdW50ZXJlZCwgc3RvcHMgYW5kIGNhbGxzIHRoZSBlcnJvciBoYW5kbGVyLlxuICAgKlxuICAgKiA8cHJlPlxuICAgKiAgIFBhcnNlLk9iamVjdC5zYXZlQWxsKFtvYmplY3QxLCBvYmplY3QyLCAuLi5dLCB7XG4gICAqICAgICBzdWNjZXNzOiBmdW5jdGlvbihsaXN0KSB7XG4gICAqICAgICAgIC8vIEFsbCB0aGUgb2JqZWN0cyB3ZXJlIHNhdmVkLlxuICAgKiAgICAgfSxcbiAgICogICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgKiAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzYXZpbmcgb25lIG9mIHRoZSBvYmplY3RzLlxuICAgKiAgICAgfSxcbiAgICogICB9KTtcbiAgICogPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQSBsaXN0IG9mIDxjb2RlPlBhcnNlLk9iamVjdDwvY29kZT4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgY2FsbGJhY2sgb2JqZWN0LlxuICAgKiBWYWxpZCBvcHRpb25zIGFyZTo8dWw+XG4gICAqICAgPGxpPnVzZU1hc3RlcktleTogSW4gQ2xvdWQgQ29kZSBhbmQgTm9kZSBvbmx5LCBjYXVzZXMgdGhlIE1hc3RlciBLZXkgdG9cbiAgICogICAgIGJlIHVzZWQgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICogICA8bGk+c2Vzc2lvblRva2VuOiBBIHZhbGlkIHNlc3Npb24gdG9rZW4sIHVzZWQgZm9yIG1ha2luZyBhIHJlcXVlc3Qgb25cbiAgICogICAgICAgYmVoYWxmIG9mIGEgc3BlY2lmaWMgdXNlci5cbiAgICogPC91bD5cbiAgICovXG4gIFBhcnNlLk9iamVjdC5zYXZlQWxsID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBQYXJzZS5PYmplY3QuX2RlZXBTYXZlQXN5bmMobGlzdCwge1xuICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgIHNlc3Npb25Ub2tlbjogb3B0aW9ucy5zZXNzaW9uVG9rZW5cbiAgICB9KS5fdGhlblJ1bkNhbGxiYWNrcyhvcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgZ2l2ZW4gbGlzdCBvZiBtb2RlbHMgb24gdGhlIHNlcnZlciBpZiBpdCB3YXMgYWxyZWFkeSBwZXJzaXN0ZWQuXG4gICAqIE9wdGltaXN0aWNhbGx5IHJlbW92ZXMgZWFjaCBtb2RlbCBmcm9tIGl0cyBjb2xsZWN0aW9uLCBpZiBpdCBoYXMgb25lLlxuICAgKiBJZiBgd2FpdDogdHJ1ZWAgaXMgcGFzc2VkLCB3YWl0cyBmb3IgdGhlIHNlcnZlciB0byByZXNwb25kIGJlZm9yZSByZW1vdmFsLlxuICAgKlxuICAgKiA8cD5Vbmxpa2Ugc2F2ZUFsbCwgaWYgYW4gZXJyb3Igb2NjdXJzIHdoaWxlIGRlbGV0aW5nIGFuIGluZGl2aWR1YWwgbW9kZWwsXG4gICAqIHRoaXMgbWV0aG9kIHdpbGwgY29udGludWUgdHJ5aW5nIHRvIGRlbGV0ZSB0aGUgcmVzdCBvZiB0aGUgbW9kZWxzIGlmXG4gICAqIHBvc3NpYmxlLCBleGNlcHQgaW4gdGhlIGNhc2Ugb2YgYSBmYXRhbCBlcnJvciBsaWtlIGEgY29ubmVjdGlvbiBlcnJvci5cbiAgICpcbiAgICogPHA+SW4gcGFydGljdWxhciwgdGhlIFBhcnNlLkVycm9yIG9iamVjdCByZXR1cm5lZCBpbiB0aGUgY2FzZSBvZiBlcnJvciBtYXlcbiAgICogYmUgb25lIG9mIHR3byB0eXBlczpcbiAgICpcbiAgICogPHVsPlxuICAgKiAgIDxsaT5BIFBhcnNlLkVycm9yLkFHR1JFR0FURV9FUlJPUi4gVGhpcyBvYmplY3QncyBcImVycm9yc1wiIHByb3BlcnR5IGlzIGFuXG4gICAqICAgICAgIGFycmF5IG9mIG90aGVyIFBhcnNlLkVycm9yIG9iamVjdHMuIEVhY2ggZXJyb3Igb2JqZWN0IGluIHRoaXMgYXJyYXlcbiAgICogICAgICAgaGFzIGFuIFwib2JqZWN0XCIgcHJvcGVydHkgdGhhdCByZWZlcmVuY2VzIHRoZSBvYmplY3QgdGhhdCBjb3VsZCBub3QgYmVcbiAgICogICAgICAgZGVsZXRlZCAoZm9yIGluc3RhbmNlLCBiZWNhdXNlIHRoYXQgb2JqZWN0IGNvdWxkIG5vdCBiZSBmb3VuZCkuPC9saT5cbiAgICogICA8bGk+QSBub24tYWdncmVnYXRlIFBhcnNlLkVycm9yLiBUaGlzIGluZGljYXRlcyBhIHNlcmlvdXMgZXJyb3IgdGhhdFxuICAgKiAgICAgICBjYXVzZWQgdGhlIGRlbGV0ZSBvcGVyYXRpb24gdG8gYmUgYWJvcnRlZCBwYXJ0d2F5IHRocm91Z2ggKGZvclxuICAgKiAgICAgICBpbnN0YW5jZSwgYSBjb25uZWN0aW9uIGZhaWx1cmUgaW4gdGhlIG1pZGRsZSBvZiB0aGUgZGVsZXRlKS48L2xpPlxuICAgKiA8L3VsPlxuICAgKlxuICAgKiA8cHJlPlxuICAgKiAgIFBhcnNlLk9iamVjdC5kZXN0cm95QWxsKFtvYmplY3QxLCBvYmplY3QyLCAuLi5dLCB7XG4gICAqICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICogICAgICAgLy8gQWxsIHRoZSBvYmplY3RzIHdlcmUgZGVsZXRlZC5cbiAgICogICAgIH0sXG4gICAqICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICogICAgICAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgb25lIG9yIG1vcmUgb2YgdGhlIG9iamVjdHMuXG4gICAqICAgICAgIC8vIElmIHRoaXMgaXMgYW4gYWdncmVnYXRlIGVycm9yLCB0aGVuIHdlIGNhbiBpbnNwZWN0IGVhY2ggZXJyb3JcbiAgICogICAgICAgLy8gb2JqZWN0IGluZGl2aWR1YWxseSB0byBkZXRlcm1pbmUgdGhlIHJlYXNvbiB3aHkgYSBwYXJ0aWN1bGFyXG4gICAqICAgICAgIC8vIG9iamVjdCB3YXMgbm90IGRlbGV0ZWQuXG4gICAqICAgICAgIGlmIChlcnJvci5jb2RlID09IFBhcnNlLkVycm9yLkFHR1JFR0FURV9FUlJPUikge1xuICAgKiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3IuZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAqICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkbid0IGRlbGV0ZSBcIiArIGVycm9yLmVycm9yc1tpXS5vYmplY3QuaWQgK1xuICAgKiAgICAgICAgICAgICBcImR1ZSB0byBcIiArIGVycm9yLmVycm9yc1tpXS5tZXNzYWdlKTtcbiAgICogICAgICAgICB9XG4gICAqICAgICAgIH0gZWxzZSB7XG4gICAqICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgYWJvcnRlZCBiZWNhdXNlIG9mIFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAqICAgICAgIH1cbiAgICogICAgIH0sXG4gICAqICAgfSk7XG4gICAqIDwvcHJlPlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBsaXN0IEEgbGlzdCBvZiA8Y29kZT5QYXJzZS5PYmplY3Q8L2NvZGU+LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEJhY2tib25lLXN0eWxlIGNhbGxiYWNrIG9iamVjdC5cbiAgICogVmFsaWQgb3B0aW9ucyBhcmU6PHVsPlxuICAgKiAgIDxsaT51c2VNYXN0ZXJLZXk6IEluIENsb3VkIENvZGUgYW5kIE5vZGUgb25seSwgY2F1c2VzIHRoZSBNYXN0ZXIgS2V5IHRvXG4gICAqICAgICBiZSB1c2VkIGZvciB0aGlzIHJlcXVlc3QuXG4gICAqICAgPGxpPnNlc3Npb25Ub2tlbjogQSB2YWxpZCBzZXNzaW9uIHRva2VuLCB1c2VkIGZvciBtYWtpbmcgYSByZXF1ZXN0IG9uXG4gICAqICAgICAgIGJlaGFsZiBvZiBhIHNwZWNpZmljIHVzZXIuXG4gICAqIDwvdWw+XG4gICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoZSBkZXN0cm95QWxsXG4gICAqICAgICBjb21wbGV0ZXMuXG4gICAqL1xuICBQYXJzZS5PYmplY3QuZGVzdHJveUFsbCA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciB0cmlnZ2VyRGVzdHJveSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgb2JqZWN0LnRyaWdnZXIoJ2Rlc3Ryb3knLCBvYmplY3QsIG9iamVjdC5jb2xsZWN0aW9uLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgdmFyIGVycm9ycyA9IFtdO1xuICAgIHZhciBkZXN0cm95QmF0Y2ggPSBmdW5jdGlvbihiYXRjaCkge1xuICAgICAgdmFyIHByb21pc2UgPSBQYXJzZS5Qcm9taXNlLmFzKCk7XG5cbiAgICAgIGlmIChiYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgICAgIHJvdXRlOiBcImJhdGNoXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgICAgICAgIHNlc3Npb25Ub2tlbjogb3B0aW9ucy5zZXNzaW9uVG9rZW4sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHJlcXVlc3RzOiBfLm1hcChiYXRjaCwgZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICAgIHBhdGg6IFwiLzEvY2xhc3Nlcy9cIiArIG9iamVjdC5jbGFzc05hbWUgKyBcIi9cIiArIG9iamVjdC5pZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2VzLCBzdGF0dXMsIHhocikge1xuICAgICAgICAgIFBhcnNlLl9hcnJheUVhY2goYmF0Y2gsIGZ1bmN0aW9uKG9iamVjdCwgaSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1tpXS5zdWNjZXNzICYmIG9wdGlvbnMud2FpdCkge1xuICAgICAgICAgICAgICB0cmlnZ2VyRGVzdHJveShvYmplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZXNbaV0uZXJyb3IpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IFBhcnNlLkVycm9yKHJlc3BvbnNlc1tpXS5lcnJvci5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzW2ldLmVycm9yLmVycm9yKTtcbiAgICAgICAgICAgICAgZXJyb3Iub2JqZWN0ID0gb2JqZWN0O1xuXG4gICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgcHJvbWlzZSA9IFBhcnNlLlByb21pc2UuYXMoKTtcbiAgICB2YXIgYmF0Y2ggPSBbXTtcbiAgICBQYXJzZS5fYXJyYXlFYWNoKGxpc3QsIGZ1bmN0aW9uKG9iamVjdCwgaSkge1xuICAgICAgaWYgKCFvYmplY3QuaWQgfHwgIW9wdGlvbnMud2FpdCkge1xuICAgICAgICB0cmlnZ2VyRGVzdHJveShvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAob2JqZWN0LmlkKSB7XG4gICAgICAgIGJhdGNoLnB1c2gob2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJhdGNoLmxlbmd0aCA9PT0gMjAgfHwgaSsxID09PSBsaXN0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgdGhpc0JhdGNoID0gYmF0Y2g7XG4gICAgICAgIGJhdGNoID0gW107XG5cbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZGVzdHJveUJhdGNoKHRoaXNCYXRjaCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IFBhcnNlLkVycm9yKFBhcnNlLkVycm9yLkFHR1JFR0FURV9FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRXJyb3IgZGVsZXRpbmcgYW4gb2JqZWN0IGluIGRlc3Ryb3lBbGxcIik7XG4gICAgICAgIGVycm9yLmVycm9ycyA9IGVycm9ycztcblxuICAgICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSkuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGdpdmVuIGxpc3Qgb2YgUGFyc2UuT2JqZWN0LlxuICAgKiBJZiBhbnkgZXJyb3IgaXMgZW5jb3VudGVyZWQsIHN0b3BzIGFuZCBjYWxscyB0aGUgZXJyb3IgaGFuZGxlci5cbiAgICpcbiAgICogPHByZT5cbiAgICogICBQYXJzZS5PYmplY3QuZmV0Y2hBbGwoW29iamVjdDEsIG9iamVjdDIsIC4uLl0sIHtcbiAgICogICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGxpc3QpIHtcbiAgICogICAgICAgLy8gQWxsIHRoZSBvYmplY3RzIHdlcmUgZmV0Y2hlZC5cbiAgICogICAgIH0sXG4gICAqICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICogICAgICAgLy8gQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgb25lIG9mIHRoZSBvYmplY3RzLlxuICAgKiAgICAgfSxcbiAgICogICB9KTtcbiAgICogPC9wcmU+XG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQSBsaXN0IG9mIDxjb2RlPlBhcnNlLk9iamVjdDwvY29kZT4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgY2FsbGJhY2sgb2JqZWN0LlxuICAgKiBWYWxpZCBvcHRpb25zIGFyZTo8dWw+XG4gICAqICAgPGxpPnN1Y2Nlc3M6IEEgQmFja2JvbmUtc3R5bGUgc3VjY2VzcyBjYWxsYmFjay5cbiAgICogICA8bGk+ZXJyb3I6IEFuIEJhY2tib25lLXN0eWxlIGVycm9yIGNhbGxiYWNrLlxuICAgKiA8L3VsPlxuICAgKi9cbiAgUGFyc2UuT2JqZWN0LmZldGNoQWxsID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBQYXJzZS5PYmplY3QuX2ZldGNoQWxsKFxuICAgICAgbGlzdCxcbiAgICAgIHRydWVcbiAgICApLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBnaXZlbiBsaXN0IG9mIFBhcnNlLk9iamVjdCBpZiBuZWVkZWQuXG4gICAqIElmIGFueSBlcnJvciBpcyBlbmNvdW50ZXJlZCwgc3RvcHMgYW5kIGNhbGxzIHRoZSBlcnJvciBoYW5kbGVyLlxuICAgKlxuICAgKiA8cHJlPlxuICAgKiAgIFBhcnNlLk9iamVjdC5mZXRjaEFsbElmTmVlZGVkKFtvYmplY3QxLCAuLi5dLCB7XG4gICAqICAgICBzdWNjZXNzOiBmdW5jdGlvbihsaXN0KSB7XG4gICAqICAgICAgIC8vIE9iamVjdHMgd2VyZSBmZXRjaGVkIGFuZCB1cGRhdGVkLlxuICAgKiAgICAgfSxcbiAgICogICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgKiAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBvbmUgb2YgdGhlIG9iamVjdHMuXG4gICAqICAgICB9LFxuICAgKiAgIH0pO1xuICAgKiA8L3ByZT5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gbGlzdCBBIGxpc3Qgb2YgPGNvZGU+UGFyc2UuT2JqZWN0PC9jb2RlPi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBCYWNrYm9uZS1zdHlsZSBjYWxsYmFjayBvYmplY3QuXG4gICAqIFZhbGlkIG9wdGlvbnMgYXJlOjx1bD5cbiAgICogICA8bGk+c3VjY2VzczogQSBCYWNrYm9uZS1zdHlsZSBzdWNjZXNzIGNhbGxiYWNrLlxuICAgKiAgIDxsaT5lcnJvcjogQW4gQmFja2JvbmUtc3R5bGUgZXJyb3IgY2FsbGJhY2suXG4gICAqIDwvdWw+XG4gICAqL1xuICBQYXJzZS5PYmplY3QuZmV0Y2hBbGxJZk5lZWRlZCA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUGFyc2UuT2JqZWN0Ll9mZXRjaEFsbChcbiAgICAgIGxpc3QsXG4gICAgICBmYWxzZVxuICAgICkuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gIH07XG5cbiAgLy8gQXR0YWNoIGFsbCBpbmhlcml0YWJsZSBtZXRob2RzIHRvIHRoZSBQYXJzZS5PYmplY3QgcHJvdG90eXBlLlxuICBfLmV4dGVuZChQYXJzZS5PYmplY3QucHJvdG90eXBlLCBQYXJzZS5FdmVudHMsXG4gICAgICAgICAgIC8qKiBAbGVuZHMgUGFyc2UuT2JqZWN0LnByb3RvdHlwZSAqLyB7XG4gICAgX2V4aXN0ZWQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBpcyBhbiBlbXB0eSBmdW5jdGlvbiBieSBkZWZhdWx0LiBPdmVycmlkZSBpdCB3aXRoIHlvdXIgb3duXG4gICAgICogaW5pdGlhbGl6YXRpb24gbG9naWMuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKXt9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gdmVyc2lvbiBvZiB0aGUgb2JqZWN0IHN1aXRhYmxlIGZvciBzYXZpbmcgdG8gUGFyc2UuXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRvSlNPTjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIganNvbiA9IHRoaXMuX3RvRnVsbEpTT04oKTtcbiAgICAgIFBhcnNlLl9hcnJheUVhY2goW1wiX190eXBlXCIsIFwiY2xhc3NOYW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihrZXkpIHsgZGVsZXRlIGpzb25ba2V5XTsgfSk7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LFxuXG4gICAgX3RvRnVsbEpTT046IGZ1bmN0aW9uKHNlZW5PYmplY3RzKSB7XG4gICAgICB2YXIganNvbiA9IF8uY2xvbmUodGhpcy5hdHRyaWJ1dGVzKTtcbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKGpzb24sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIGpzb25ba2V5XSA9IFBhcnNlLl9lbmNvZGUodmFsLCBzZWVuT2JqZWN0cyk7XG4gICAgICB9KTtcbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKHRoaXMuX29wZXJhdGlvbnMsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIGpzb25ba2V5XSA9IHZhbDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoXy5oYXModGhpcywgXCJpZFwiKSkge1xuICAgICAgICBqc29uLm9iamVjdElkID0gdGhpcy5pZDtcbiAgICAgIH1cbiAgICAgIGlmIChfLmhhcyh0aGlzLCBcImNyZWF0ZWRBdFwiKSkge1xuICAgICAgICBpZiAoXy5pc0RhdGUodGhpcy5jcmVhdGVkQXQpKSB7XG4gICAgICAgICAganNvbi5jcmVhdGVkQXQgPSB0aGlzLmNyZWF0ZWRBdC50b0pTT04oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc29uLmNyZWF0ZWRBdCA9IHRoaXMuY3JlYXRlZEF0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChfLmhhcyh0aGlzLCBcInVwZGF0ZWRBdFwiKSkge1xuICAgICAgICBpZiAoXy5pc0RhdGUodGhpcy51cGRhdGVkQXQpKSB7XG4gICAgICAgICAganNvbi51cGRhdGVkQXQgPSB0aGlzLnVwZGF0ZWRBdC50b0pTT04oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc29uLnVwZGF0ZWRBdCA9IHRoaXMudXBkYXRlZEF0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBqc29uLl9fdHlwZSA9IFwiT2JqZWN0XCI7XG4gICAgICBqc29uLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgX2hhc2hlZEpTT04gdG8gcmVmbGVjdCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cbiAgICAgKiBBZGRzIGFueSBjaGFuZ2VkIGhhc2ggdmFsdWVzIHRvIHRoZSBzZXQgb2YgcGVuZGluZyBjaGFuZ2VzLlxuICAgICAqL1xuICAgIF9yZWZyZXNoQ2FjaGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKHNlbGYuX3JlZnJlc2hpbmdDYWNoZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLl9yZWZyZXNoaW5nQ2FjaGUgPSB0cnVlO1xuICAgICAgUGFyc2UuX29iamVjdEVhY2godGhpcy5hdHRyaWJ1dGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBhcnNlLk9iamVjdCkge1xuICAgICAgICAgIHZhbHVlLl9yZWZyZXNoQ2FjaGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIHZhciBvYmplY3RBcnJheSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBjYWNoZSBhcnJheXMgb2YgUGFyc2UuT2JqZWN0c1xuICAgICAgICAgICAgXy5lYWNoKHZhbHVlLCBmdW5jdGlvbihhcnJWYWwpIHtcbiAgICAgICAgICAgICAgaWYgKGFyclZhbCBpbnN0YW5jZW9mIFBhcnNlLk9iamVjdCkge1xuICAgICAgICAgICAgICAgIG9iamVjdEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhcnJWYWwuX3JlZnJlc2hDYWNoZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFvYmplY3RBcnJheSAmJiBzZWxmLl9yZXNldENhY2hlRm9yS2V5KGtleSkpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0KGtleSwgbmV3IFBhcnNlLk9wLlNldCh2YWx1ZSksIHsgc2lsZW50OiB0cnVlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgc2VsZi5fcmVmcmVzaGluZ0NhY2hlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBvYmplY3QgaGFzIGJlZW4gbW9kaWZpZWQgc2luY2UgaXRzIGxhc3RcbiAgICAgKiBzYXZlL3JlZnJlc2guICBJZiBhbiBhdHRyaWJ1dGUgaXMgc3BlY2lmaWVkLCBpdCByZXR1cm5zIHRydWUgb25seSBpZiB0aGF0XG4gICAgICogcGFydGljdWxhciBhdHRyaWJ1dGUgaGFzIGJlZW4gbW9kaWZpZWQgc2luY2UgdGhlIGxhc3Qgc2F2ZS9yZWZyZXNoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyIEFuIGF0dHJpYnV0ZSBuYW1lIChvcHRpb25hbCkuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBkaXJ0eTogZnVuY3Rpb24oYXR0cikge1xuICAgICAgdGhpcy5fcmVmcmVzaENhY2hlKCk7XG5cbiAgICAgIHZhciBjdXJyZW50Q2hhbmdlcyA9IF8ubGFzdCh0aGlzLl9vcFNldFF1ZXVlKTtcblxuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyZW50Q2hhbmdlc1thdHRyXSA/IHRydWUgOiBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoXy5rZXlzKGN1cnJlbnRDaGFuZ2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGtleXMgdGhhdCBoYXZlIGJlZW4gbW9kaWZpZWQgc2luY2UgbGFzdCBzYXZlL3JlZnJlc2hcbiAgICAgKiBAcmV0dXJuIHtBcnJheSBvZiBzdHJpbmd9XG4gICAgICovXG4gICAgZGlydHlLZXlzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfLmtleXMoXy5sYXN0KHRoaXMuX29wU2V0UXVldWUpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIFBvaW50ZXIgcmVmZXJlbmNpbmcgdGhpcyBPYmplY3QuXG4gICAgICovXG4gICAgX3RvUG9pbnRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc2VyaWFsaXplIGFuIHVuc2F2ZWQgUGFyc2UuT2JqZWN0XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgX190eXBlOiBcIlBvaW50ZXJcIixcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICBvYmplY3RJZDogdGhpcy5pZCB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHIgVGhlIHN0cmluZyBuYW1lIG9mIGFuIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXNbYXR0cl07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgYSByZWxhdGlvbiBvbiB0aGUgZ2l2ZW4gY2xhc3MgZm9yIHRoZSBhdHRyaWJ1dGUuXG4gICAgICogQHBhcmFtIFN0cmluZyBhdHRyIFRoZSBhdHRyaWJ1dGUgdG8gZ2V0IHRoZSByZWxhdGlvbiBmb3IuXG4gICAgICovXG4gICAgcmVsYXRpb246IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KGF0dHIpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUGFyc2UuUmVsYXRpb24pKSB7XG4gICAgICAgICAgdGhyb3cgXCJDYWxsZWQgcmVsYXRpb24oKSBvbiBub24tcmVsYXRpb24gZmllbGQgXCIgKyBhdHRyO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLl9lbnN1cmVQYXJlbnRBbmRLZXkodGhpcywgYXR0cik7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2UuUmVsYXRpb24odGhpcywgYXR0cik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIEhUTUwtZXNjYXBlZCB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZXNjYXBlOiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICB2YXIgaHRtbCA9IHRoaXMuX2VzY2FwZWRBdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgaWYgKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9XG4gICAgICB2YXIgdmFsID0gdGhpcy5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgdmFyIGVzY2FwZWQ7XG4gICAgICBpZiAoUGFyc2UuX2lzTnVsbE9yVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgZXNjYXBlZCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXNjYXBlZCA9IF8uZXNjYXBlKHZhbC50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VzY2FwZWRBdHRyaWJ1dGVzW2F0dHJdID0gZXNjYXBlZDtcbiAgICAgIHJldHVybiBlc2NhcGVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBhdHRyaWJ1dGUgY29udGFpbnMgYSB2YWx1ZSB0aGF0IGlzIG5vdFxuICAgICAqIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyIFRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzOiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICByZXR1cm4gIVBhcnNlLl9pc051bGxPclVuZGVmaW5lZCh0aGlzLmF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQdWxscyBcInNwZWNpYWxcIiBmaWVsZHMgbGlrZSBvYmplY3RJZCwgY3JlYXRlZEF0LCBldGMuIG91dCBvZiBhdHRyc1xuICAgICAqIGFuZCBwdXRzIHRoZW0gb24gXCJ0aGlzXCIgZGlyZWN0bHkuICBSZW1vdmVzIHRoZW0gZnJvbSBhdHRycy5cbiAgICAgKiBAcGFyYW0gYXR0cnMgLSBBIGRpY3Rpb25hcnkgd2l0aCB0aGUgZGF0YSBmb3IgdGhpcyBQYXJzZS5PYmplY3QuXG4gICAgICovXG4gICAgX21lcmdlTWFnaWNGaWVsZHM6IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBvZiBtYWdpYyBmaWVsZHMuXG4gICAgICB2YXIgbW9kZWwgPSB0aGlzO1xuICAgICAgdmFyIHNwZWNpYWxGaWVsZHMgPSBbXCJpZFwiLCBcIm9iamVjdElkXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCJdO1xuICAgICAgUGFyc2UuX2FycmF5RWFjaChzcGVjaWFsRmllbGRzLCBmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyc1thdHRyXSkge1xuICAgICAgICAgIGlmIChhdHRyID09PSBcIm9iamVjdElkXCIpIHtcbiAgICAgICAgICAgIG1vZGVsLmlkID0gYXR0cnNbYXR0cl07XG4gICAgICAgICAgfSBlbHNlIGlmICgoYXR0ciA9PT0gXCJjcmVhdGVkQXRcIiB8fCBhdHRyID09PSBcInVwZGF0ZWRBdFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIV8uaXNEYXRlKGF0dHJzW2F0dHJdKSkge1xuICAgICAgICAgICAgbW9kZWxbYXR0cl0gPSBQYXJzZS5fcGFyc2VEYXRlKGF0dHJzW2F0dHJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZWxbYXR0cl0gPSBhdHRyc1thdHRyXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIHRoZSBnaXZlbiBzZXJ2ZXJEYXRhIHRvIFwidGhpc1wiLCByZWZyZXNoZXMgYXR0cmlidXRlcywgYW5kXG4gICAgICogY2xlYXJzIHBlbmRpbmcgY2hhbmdlcztcbiAgICAgKi9cbiAgICBfY29weVNlcnZlckRhdGE6IGZ1bmN0aW9uKHNlcnZlckRhdGEpIHtcbiAgICAgIC8vIENvcHkgc2VydmVyIGRhdGFcbiAgICAgIHZhciB0ZW1wU2VydmVyRGF0YSA9IHt9O1xuICAgICAgUGFyc2UuX29iamVjdEVhY2goc2VydmVyRGF0YSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICB0ZW1wU2VydmVyRGF0YVtrZXldID0gUGFyc2UuX2RlY29kZShrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc2VydmVyRGF0YSA9IHRlbXBTZXJ2ZXJEYXRhO1xuXG4gICAgICAvLyBSZWZyZXNoIHRoZSBhdHRyaWJ1dGVzLlxuICAgICAgdGhpcy5fcmVidWlsZEFsbEVzdGltYXRlZERhdGEoKTtcblxuICAgICAgLy8gVE9ETyAoYmtsaW10KTogUmV2aXNpdCBjbGVhcmluZyBvcGVyYXRpb25zLCBwZXJoYXBzIG1vdmUgdG8gcmV2ZXJ0LlxuICAgICAgLy8gQ2xlYXIgb3V0IGFueSBjaGFuZ2VzIHRoZSB1c2VyIG1pZ2h0IGhhdmUgbWFkZSBwcmV2aW91c2x5LlxuICAgICAgdGhpcy5fcmVmcmVzaENhY2hlKCk7XG4gICAgICB0aGlzLl9vcFNldFF1ZXVlID0gW3t9XTtcblxuICAgICAgLy8gUmVmcmVzaCB0aGUgYXR0cmlidXRlcyBhZ2Fpbi5cbiAgICAgIHRoaXMuX3JlYnVpbGRBbGxFc3RpbWF0ZWREYXRhKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbm90aGVyIG9iamVjdCdzIGF0dHJpYnV0ZXMgaW50byB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBfbWVyZ2VGcm9tT2JqZWN0OiBmdW5jdGlvbihvdGhlcikge1xuICAgICAgaWYgKCFvdGhlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoaXMgZG9lcyB0aGUgaW52ZXJzZSBvZiBfbWVyZ2VNYWdpY0ZpZWxkcy5cbiAgICAgIHRoaXMuaWQgPSBvdGhlci5pZDtcbiAgICAgIHRoaXMuY3JlYXRlZEF0ID0gb3RoZXIuY3JlYXRlZEF0O1xuICAgICAgdGhpcy51cGRhdGVkQXQgPSBvdGhlci51cGRhdGVkQXQ7XG5cbiAgICAgIHRoaXMuX2NvcHlTZXJ2ZXJEYXRhKG90aGVyLl9zZXJ2ZXJEYXRhKTtcblxuICAgICAgdGhpcy5faGFzRGF0YSA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGpzb24gdG8gYmUgc2VudCB0byB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIF9zdGFydFNhdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fb3BTZXRRdWV1ZS5wdXNoKHt9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBzYXZlIGZhaWxzIGJlY2F1c2Ugb2YgYW4gZXJyb3IuIEFueSBjaGFuZ2VzIHRoYXQgd2VyZSBwYXJ0XG4gICAgICogb2YgdGhlIHNhdmUgbmVlZCB0byBiZSBtZXJnZWQgd2l0aCBjaGFuZ2VzIG1hZGUgYWZ0ZXIgdGhlIHNhdmUuIFRoaXNcbiAgICAgKiBtaWdodCB0aHJvdyBhbiBleGNlcHRpb24gaXMgeW91IGRvIGNvbmZsaWN0aW5nIG9wZXJhdGlvbnMuIEZvciBleGFtcGxlLFxuICAgICAqIGlmIHlvdSBkbzpcbiAgICAgKiAgIG9iamVjdC5zZXQoXCJmb29cIiwgXCJiYXJcIik7XG4gICAgICogICBvYmplY3Quc2V0KFwiaW52YWxpZCBmaWVsZCBuYW1lXCIsIFwiYmF6XCIpO1xuICAgICAqICAgb2JqZWN0LnNhdmUoKTtcbiAgICAgKiAgIG9iamVjdC5pbmNyZW1lbnQoXCJmb29cIik7XG4gICAgICogdGhlbiB0aGlzIHdpbGwgdGhyb3cgd2hlbiB0aGUgc2F2ZSBmYWlscyBhbmQgdGhlIGNsaWVudCB0cmllcyB0byBtZXJnZVxuICAgICAqIFwiYmFyXCIgd2l0aCB0aGUgKzEuXG4gICAgICovXG4gICAgX2NhbmNlbFNhdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGZhaWxlZENoYW5nZXMgPSBfLmZpcnN0KHRoaXMuX29wU2V0UXVldWUpO1xuICAgICAgdGhpcy5fb3BTZXRRdWV1ZSA9IF8ucmVzdCh0aGlzLl9vcFNldFF1ZXVlKTtcbiAgICAgIHZhciBuZXh0Q2hhbmdlcyA9IF8uZmlyc3QodGhpcy5fb3BTZXRRdWV1ZSk7XG4gICAgICBQYXJzZS5fb2JqZWN0RWFjaChmYWlsZWRDaGFuZ2VzLCBmdW5jdGlvbihvcCwga2V5KSB7XG4gICAgICAgIHZhciBvcDEgPSBmYWlsZWRDaGFuZ2VzW2tleV07XG4gICAgICAgIHZhciBvcDIgPSBuZXh0Q2hhbmdlc1trZXldO1xuICAgICAgICBpZiAob3AxICYmIG9wMikge1xuICAgICAgICAgIG5leHRDaGFuZ2VzW2tleV0gPSBvcDIuX21lcmdlV2l0aFByZXZpb3VzKG9wMSk7XG4gICAgICAgIH0gZWxzZSBpZiAob3AxKSB7XG4gICAgICAgICAgbmV4dENoYW5nZXNba2V5XSA9IG9wMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9zYXZpbmcgPSB0aGlzLl9zYXZpbmcgLSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhIHNhdmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseS4gVGhpcyBtZXJnZXMgdGhlIGNoYW5nZXMgdGhhdFxuICAgICAqIHdlcmUgc2F2ZWQgaW50byB0aGUga25vd24gc2VydmVyIGRhdGEsIGFuZCBvdmVycmlkZXMgaXQgd2l0aCBhbnkgZGF0YVxuICAgICAqIHNlbnQgZGlyZWN0bHkgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIF9maW5pc2hTYXZlOiBmdW5jdGlvbihzZXJ2ZXJEYXRhKSB7XG4gICAgICAvLyBHcmFiIGEgY29weSBvZiBhbnkgb2JqZWN0IHJlZmVyZW5jZWQgYnkgdGhpcyBvYmplY3QuIFRoZXNlIGluc3RhbmNlc1xuICAgICAgLy8gbWF5IGhhdmUgYWxyZWFkeSBiZWVuIGZldGNoZWQsIGFuZCB3ZSBkb24ndCB3YW50IHRvIGxvc2UgdGhlaXIgZGF0YS5cbiAgICAgIC8vIE5vdGUgdGhhdCBkb2luZyBpdCBsaWtlIHRoaXMgbWVhbnMgd2Ugd2lsbCB1bmlmeSBzZXBhcmF0ZSBjb3BpZXMgb2YgdGhlXG4gICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQncyBhIHJpc2sgd2UgaGF2ZSB0byB0YWtlLlxuICAgICAgdmFyIGZldGNoZWRPYmplY3RzID0ge307XG4gICAgICBQYXJzZS5fdHJhdmVyc2UodGhpcy5hdHRyaWJ1dGVzLCBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFBhcnNlLk9iamVjdCAmJiBvYmplY3QuaWQgJiYgb2JqZWN0Ll9oYXNEYXRhKSB7XG4gICAgICAgICAgZmV0Y2hlZE9iamVjdHNbb2JqZWN0LmlkXSA9IG9iamVjdDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzYXZlZENoYW5nZXMgPSBfLmZpcnN0KHRoaXMuX29wU2V0UXVldWUpO1xuICAgICAgdGhpcy5fb3BTZXRRdWV1ZSA9IF8ucmVzdCh0aGlzLl9vcFNldFF1ZXVlKTtcbiAgICAgIHRoaXMuX2FwcGx5T3BTZXQoc2F2ZWRDaGFuZ2VzLCB0aGlzLl9zZXJ2ZXJEYXRhKTtcbiAgICAgIHRoaXMuX21lcmdlTWFnaWNGaWVsZHMoc2VydmVyRGF0YSk7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBQYXJzZS5fb2JqZWN0RWFjaChzZXJ2ZXJEYXRhLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIHNlbGYuX3NlcnZlckRhdGFba2V5XSA9IFBhcnNlLl9kZWNvZGUoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgLy8gTG9vayBmb3IgYW55IG9iamVjdHMgdGhhdCBtaWdodCBoYXZlIGJlY29tZSB1bmZldGNoZWQgYW5kIGZpeCB0aGVtXG4gICAgICAgIC8vIGJ5IHJlcGxhY2luZyB0aGVpciB2YWx1ZXMgd2l0aCB0aGUgcHJldmlvdXNseSBvYnNlcnZlZCB2YWx1ZXMuXG4gICAgICAgIHZhciBmZXRjaGVkID0gUGFyc2UuX3RyYXZlcnNlKHNlbGYuX3NlcnZlckRhdGFba2V5XSwgZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFBhcnNlLk9iamVjdCAmJiBmZXRjaGVkT2JqZWN0c1tvYmplY3QuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hlZE9iamVjdHNbb2JqZWN0LmlkXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmV0Y2hlZCkge1xuICAgICAgICAgIHNlbGYuX3NlcnZlckRhdGFba2V5XSA9IGZldGNoZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcmVidWlsZEFsbEVzdGltYXRlZERhdGEoKTtcbiAgICAgIHRoaXMuX3NhdmluZyA9IHRoaXMuX3NhdmluZyAtIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGEgZmV0Y2ggb3IgbG9naW4gaXMgY29tcGxldGUgdG8gc2V0IHRoZSBrbm93biBzZXJ2ZXIgZGF0YSB0b1xuICAgICAqIHRoZSBnaXZlbiBvYmplY3QuXG4gICAgICovXG4gICAgX2ZpbmlzaEZldGNoOiBmdW5jdGlvbihzZXJ2ZXJEYXRhLCBoYXNEYXRhKSB7XG4gICAgICAvLyBUT0RPIChia2xpbXQpOiBSZXZpc2l0IGNsZWFyaW5nIG9wZXJhdGlvbnMsIHBlcmhhcHMgbW92ZSB0byByZXZlcnQuXG4gICAgICB0aGlzLl9vcFNldFF1ZXVlID0gW3t9XTtcblxuICAgICAgLy8gQnJpbmcgaW4gYWxsIHRoZSBuZXcgc2VydmVyIGRhdGEuXG4gICAgICB0aGlzLl9tZXJnZU1hZ2ljRmllbGRzKHNlcnZlckRhdGEpO1xuICAgICAgdGhpcy5fY29weVNlcnZlckRhdGEoc2VydmVyRGF0YSk7XG5cbiAgICAgIHRoaXMuX2hhc0RhdGEgPSBoYXNEYXRhO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBzZXQgb2YgUGFyc2UuT3AgaW4gb3BTZXQgdG8gdGhlIG9iamVjdCB0YXJnZXQuXG4gICAgICovXG4gICAgX2FwcGx5T3BTZXQ6IGZ1bmN0aW9uKG9wU2V0LCB0YXJnZXQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKG9wU2V0LCBmdW5jdGlvbihjaGFuZ2UsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IGNoYW5nZS5fZXN0aW1hdGUodGFyZ2V0W2tleV0sIHNlbGYsIGtleSk7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gUGFyc2UuT3AuX1VOU0VUKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgdGhlIGNhY2hlZCB2YWx1ZSBmb3Iga2V5IHdpdGggdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBuZXcgdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIG9sZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBfcmVzZXRDYWNoZUZvcktleTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmF0dHJpYnV0ZXNba2V5XTtcbiAgICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICAgICEodmFsdWUgaW5zdGFuY2VvZiBQYXJzZS5PYmplY3QpICYmXG4gICAgICAgICAgISh2YWx1ZSBpbnN0YW5jZW9mIFBhcnNlLkZpbGUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9KU09OID8gdmFsdWUudG9KU09OKCkgOiB2YWx1ZTtcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLl9oYXNoZWRKU09OW2tleV0gIT09IGpzb24pIHtcbiAgICAgICAgICB2YXIgd2FzU2V0ID0gISF0aGlzLl9oYXNoZWRKU09OW2tleV07XG4gICAgICAgICAgdGhpcy5faGFzaGVkSlNPTltrZXldID0ganNvbjtcbiAgICAgICAgICByZXR1cm4gd2FzU2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBvcHVsYXRlcyBhdHRyaWJ1dGVzW2tleV0gYnkgc3RhcnRpbmcgd2l0aCB0aGUgbGFzdCBrbm93biBkYXRhIGZyb20gdGhlXG4gICAgICogc2VydmVyLCBhbmQgYXBwbHlpbmcgYWxsIG9mIHRoZSBsb2NhbCBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG1hZGUgdG8gdGhhdFxuICAgICAqIGtleSBzaW5jZSB0aGVuLlxuICAgICAqL1xuICAgIF9yZWJ1aWxkRXN0aW1hdGVkRGF0YUZvcktleTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBkZWxldGUgdGhpcy5hdHRyaWJ1dGVzW2tleV07XG4gICAgICBpZiAodGhpcy5fc2VydmVyRGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1trZXldID0gdGhpcy5fc2VydmVyRGF0YVtrZXldO1xuICAgICAgfVxuICAgICAgUGFyc2UuX2FycmF5RWFjaCh0aGlzLl9vcFNldFF1ZXVlLCBmdW5jdGlvbihvcFNldCkge1xuICAgICAgICB2YXIgb3AgPSBvcFNldFtrZXldO1xuICAgICAgICBpZiAob3ApIHtcbiAgICAgICAgICBzZWxmLmF0dHJpYnV0ZXNba2V5XSA9IG9wLl9lc3RpbWF0ZShzZWxmLmF0dHJpYnV0ZXNba2V5XSwgc2VsZiwga2V5KTtcbiAgICAgICAgICBpZiAoc2VsZi5hdHRyaWJ1dGVzW2tleV0gPT09IFBhcnNlLk9wLl9VTlNFVCkge1xuICAgICAgICAgICAgZGVsZXRlIHNlbGYuYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLl9yZXNldENhY2hlRm9yS2V5KGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGVzIGF0dHJpYnV0ZXMgYnkgc3RhcnRpbmcgd2l0aCB0aGUgbGFzdCBrbm93biBkYXRhIGZyb20gdGhlXG4gICAgICogc2VydmVyLCBhbmQgYXBwbHlpbmcgYWxsIG9mIHRoZSBsb2NhbCBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG1hZGUgc2luY2VcbiAgICAgKiB0aGVuLlxuICAgICAqL1xuICAgIF9yZWJ1aWxkQWxsRXN0aW1hdGVkRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHZhciBwcmV2aW91c0F0dHJpYnV0ZXMgPSBfLmNsb25lKHRoaXMuYXR0cmlidXRlcyk7XG5cbiAgICAgIHRoaXMuYXR0cmlidXRlcyA9IF8uY2xvbmUodGhpcy5fc2VydmVyRGF0YSk7XG4gICAgICBQYXJzZS5fYXJyYXlFYWNoKHRoaXMuX29wU2V0UXVldWUsIGZ1bmN0aW9uKG9wU2V0KSB7XG4gICAgICAgIHNlbGYuX2FwcGx5T3BTZXQob3BTZXQsIHNlbGYuYXR0cmlidXRlcyk7XG4gICAgICAgIFBhcnNlLl9vYmplY3RFYWNoKG9wU2V0LCBmdW5jdGlvbihvcCwga2V5KSB7XG4gICAgICAgICAgc2VsZi5fcmVzZXRDYWNoZUZvcktleShrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudHMgZm9yIGFueXRoaW5nIHRoYXQgY2hhbmdlZCBiZWNhdXNlIG9mIHRoZSBmZXRjaC5cbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKHByZXZpb3VzQXR0cmlidXRlcywgZnVuY3Rpb24ob2xkVmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoc2VsZi5hdHRyaWJ1dGVzW2tleV0gIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdjaGFuZ2U6JyArIGtleSwgc2VsZiwgc2VsZi5hdHRyaWJ1dGVzW2tleV0sIHt9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBQYXJzZS5fb2JqZWN0RWFjaCh0aGlzLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKG5ld1ZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKCFfLmhhcyhwcmV2aW91c0F0dHJpYnV0ZXMsIGtleSkpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2NoYW5nZTonICsga2V5LCBzZWxmLCBuZXdWYWx1ZSwge30pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGhhc2ggb2YgbW9kZWwgYXR0cmlidXRlcyBvbiB0aGUgb2JqZWN0LCBmaXJpbmdcbiAgICAgKiA8Y29kZT5cImNoYW5nZVwiPC9jb2RlPiB1bmxlc3MgeW91IGNob29zZSB0byBzaWxlbmNlIGl0LlxuICAgICAqXG4gICAgICogPHA+WW91IGNhbiBjYWxsIGl0IHdpdGggYW4gb2JqZWN0IGNvbnRhaW5pbmcga2V5cyBhbmQgdmFsdWVzLCBvciB3aXRoIG9uZVxuICAgICAqIGtleSBhbmQgdmFsdWUuICBGb3IgZXhhbXBsZTo8cHJlPlxuICAgICAqICAgZ2FtZVR1cm4uc2V0KHtcbiAgICAgKiAgICAgcGxheWVyOiBwbGF5ZXIxLFxuICAgICAqICAgICBkaWNlUm9sbDogMlxuICAgICAqICAgfSwge1xuICAgICAqICAgICBlcnJvcjogZnVuY3Rpb24oZ2FtZVR1cm5BZ2FpbiwgZXJyb3IpIHtcbiAgICAgKiAgICAgICAvLyBUaGUgc2V0IGZhaWxlZCB2YWxpZGF0aW9uLlxuICAgICAqICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKlxuICAgICAqICAgZ2FtZS5zZXQoXCJjdXJyZW50UGxheWVyXCIsIHBsYXllcjIsIHtcbiAgICAgKiAgICAgZXJyb3I6IGZ1bmN0aW9uKGdhbWVUdXJuQWdhaW4sIGVycm9yKSB7XG4gICAgICogICAgICAgLy8gVGhlIHNldCBmYWlsZWQgdmFsaWRhdGlvbi5cbiAgICAgKiAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICpcbiAgICAgKiAgIGdhbWUuc2V0KFwiZmluaXNoZWRcIiwgdHJ1ZSk7PC9wcmU+PC9wPlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRvIHNldC5cbiAgICAgKiBAcGFyYW0ge30gdmFsdWUgVGhlIHZhbHVlIHRvIGdpdmUgaXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBzZXQgb2YgQmFja2JvbmUtbGlrZSBvcHRpb25zIGZvciB0aGUgc2V0LlxuICAgICAqICAgICBUaGUgb25seSBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgPGNvZGU+c2lsZW50PC9jb2RlPixcbiAgICAgKiAgICAgPGNvZGU+ZXJyb3I8L2NvZGU+LCBhbmQgPGNvZGU+cHJvbWlzZTwvY29kZT4uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc2V0IHN1Y2NlZWRlZC5cbiAgICAgKiBAc2VlIFBhcnNlLk9iamVjdCN2YWxpZGF0ZVxuICAgICAqIEBzZWUgUGFyc2UuRXJyb3JcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBhdHRycywgYXR0cjtcbiAgICAgIGlmIChfLmlzT2JqZWN0KGtleSkgfHwgUGFyc2UuX2lzTnVsbE9yVW5kZWZpbmVkKGtleSkpIHtcbiAgICAgICAgYXR0cnMgPSBrZXk7XG4gICAgICAgIFBhcnNlLl9vYmplY3RFYWNoKGF0dHJzLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgYXR0cnNba10gPSBQYXJzZS5fZGVjb2RlKGssIHYpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3B0aW9ucyA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cnMgPSB7fTtcbiAgICAgICAgYXR0cnNba2V5XSA9IFBhcnNlLl9kZWNvZGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dHJhY3QgYXR0cmlidXRlcyBhbmQgb3B0aW9ucy5cbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgaWYgKCFhdHRycykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmIChhdHRycyBpbnN0YW5jZW9mIFBhcnNlLk9iamVjdCkge1xuICAgICAgICBhdHRycyA9IGF0dHJzLmF0dHJpYnV0ZXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKGF0dHJzLCBmdW5jdGlvbih1bnVzZWRfdmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoc2VsZi5jb25zdHJ1Y3Rvci5yZWFkT25seUF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICBzZWxmLmNvbnN0cnVjdG9yLnJlYWRPbmx5QXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgbW9kaWZ5IHJlYWRvbmx5IGtleTogJyArIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiB0aGUgdW5zZXQgb3B0aW9uIGlzIHVzZWQsIGV2ZXJ5IGF0dHJpYnV0ZSBzaG91bGQgYmUgYSBVbnNldC5cbiAgICAgIGlmIChvcHRpb25zLnVuc2V0KSB7XG4gICAgICAgIFBhcnNlLl9vYmplY3RFYWNoKGF0dHJzLCBmdW5jdGlvbih1bnVzZWRfdmFsdWUsIGtleSkge1xuICAgICAgICAgIGF0dHJzW2tleV0gPSBuZXcgUGFyc2UuT3AuVW5zZXQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGFsbCB0aGUgYXR0cmlidXRlcyB0byBnZXQgdGhlIGVzdGltYXRlZCB2YWx1ZXMuXG4gICAgICB2YXIgZGF0YVRvVmFsaWRhdGUgPSBfLmNsb25lKGF0dHJzKTtcbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKGRhdGFUb1ZhbGlkYXRlLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBhcnNlLk9wKSB7XG4gICAgICAgICAgZGF0YVRvVmFsaWRhdGVba2V5XSA9IHZhbHVlLl9lc3RpbWF0ZShzZWxmLmF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYsIGtleSk7XG4gICAgICAgICAgaWYgKGRhdGFUb1ZhbGlkYXRlW2tleV0gPT09IFBhcnNlLk9wLl9VTlNFVCkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFUb1ZhbGlkYXRlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUnVuIHZhbGlkYXRpb24uXG4gICAgICBpZiAoIXRoaXMuX3ZhbGlkYXRlKGF0dHJzLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX21lcmdlTWFnaWNGaWVsZHMoYXR0cnMpO1xuXG4gICAgICBvcHRpb25zLmNoYW5nZXMgPSB7fTtcbiAgICAgIHZhciBlc2NhcGVkID0gdGhpcy5fZXNjYXBlZEF0dHJpYnV0ZXM7XG4gICAgICB2YXIgcHJldiA9IHRoaXMuX3ByZXZpb3VzQXR0cmlidXRlcyB8fCB7fTtcblxuICAgICAgLy8gVXBkYXRlIGF0dHJpYnV0ZXMuXG4gICAgICBQYXJzZS5fYXJyYXlFYWNoKF8ua2V5cyhhdHRycyksIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGF0dHJzW2F0dHJdO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSByZWxhdGlvbiBvYmplY3Qgd2UgbmVlZCB0byBzZXQgdGhlIHBhcmVudCBjb3JyZWN0bHksXG4gICAgICAgIC8vIHNpbmNlIHRoZSBsb2NhdGlvbiB3aGVyZSBpdCB3YXMgcGFyc2VkIGRvZXMgbm90IGhhdmUgYWNjZXNzIHRvXG4gICAgICAgIC8vIHRoaXMgb2JqZWN0LlxuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgUGFyc2UuUmVsYXRpb24pIHtcbiAgICAgICAgICB2YWwucGFyZW50ID0gc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHZhbCBpbnN0YW5jZW9mIFBhcnNlLk9wKSkge1xuICAgICAgICAgIHZhbCA9IG5ldyBQYXJzZS5PcC5TZXQodmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlZSBpZiB0aGlzIGNoYW5nZSB3aWxsIGFjdHVhbGx5IGhhdmUgYW55IGVmZmVjdC5cbiAgICAgICAgdmFyIGlzUmVhbENoYW5nZSA9IHRydWU7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBQYXJzZS5PcC5TZXQgJiZcbiAgICAgICAgICAgIF8uaXNFcXVhbChzZWxmLmF0dHJpYnV0ZXNbYXR0cl0sIHZhbC52YWx1ZSkpIHtcbiAgICAgICAgICBpc1JlYWxDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1JlYWxDaGFuZ2UpIHtcbiAgICAgICAgICBkZWxldGUgZXNjYXBlZFthdHRyXTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICAgIHNlbGYuX3NpbGVudFthdHRyXSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhbmdlc1thdHRyXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRDaGFuZ2VzID0gXy5sYXN0KHNlbGYuX29wU2V0UXVldWUpO1xuICAgICAgICBjdXJyZW50Q2hhbmdlc1thdHRyXSA9IHZhbC5fbWVyZ2VXaXRoUHJldmlvdXMoY3VycmVudENoYW5nZXNbYXR0cl0pO1xuICAgICAgICBzZWxmLl9yZWJ1aWxkRXN0aW1hdGVkRGF0YUZvcktleShhdHRyKTtcblxuICAgICAgICBpZiAoaXNSZWFsQ2hhbmdlKSB7XG4gICAgICAgICAgc2VsZi5jaGFuZ2VkW2F0dHJdID0gc2VsZi5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICAgIHNlbGYuX3BlbmRpbmdbYXR0cl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgc2VsZi5jaGFuZ2VkW2F0dHJdO1xuICAgICAgICAgIGRlbGV0ZSBzZWxmLl9wZW5kaW5nW2F0dHJdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkge1xuICAgICAgICB0aGlzLmNoYW5nZShvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gYXR0cmlidXRlIGZyb20gdGhlIG1vZGVsLCBmaXJpbmcgPGNvZGU+XCJjaGFuZ2VcIjwvY29kZT4gdW5sZXNzXG4gICAgICogeW91IGNob29zZSB0byBzaWxlbmNlIGl0LiBUaGlzIGlzIGEgbm9vcCBpZiB0aGUgYXR0cmlidXRlIGRvZXNuJ3RcbiAgICAgKiBleGlzdC5cbiAgICAgKi9cbiAgICB1bnNldDogZnVuY3Rpb24oYXR0ciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBvcHRpb25zLnVuc2V0ID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLnNldChhdHRyLCBudWxsLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXRvbWljYWxseSBpbmNyZW1lbnRzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYXR0cmlidXRlIHRoZSBuZXh0IHRpbWUgdGhlXG4gICAgICogb2JqZWN0IGlzIHNhdmVkLiBJZiBubyBhbW91bnQgaXMgc3BlY2lmaWVkLCAxIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhdHRyIHtTdHJpbmd9IFRoZSBrZXkuXG4gICAgICogQHBhcmFtIGFtb3VudCB7TnVtYmVyfSBUaGUgYW1vdW50IHRvIGluY3JlbWVudCBieS5cbiAgICAgKi9cbiAgICBpbmNyZW1lbnQ6IGZ1bmN0aW9uKGF0dHIsIGFtb3VudCkge1xuICAgICAgaWYgKF8uaXNVbmRlZmluZWQoYW1vdW50KSB8fCBfLmlzTnVsbChhbW91bnQpKSB7XG4gICAgICAgIGFtb3VudCA9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXR0ciwgbmV3IFBhcnNlLk9wLkluY3JlbWVudChhbW91bnQpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXRvbWljYWxseSBhZGQgYW4gb2JqZWN0IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuXG4gICAgICoga2V5LlxuICAgICAqIEBwYXJhbSBhdHRyIHtTdHJpbmd9IFRoZSBrZXkuXG4gICAgICogQHBhcmFtIGl0ZW0ge30gVGhlIGl0ZW0gdG8gYWRkLlxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24oYXR0ciwgaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGF0dHIsIG5ldyBQYXJzZS5PcC5BZGQoW2l0ZW1dKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0b21pY2FsbHkgYWRkIGFuIG9iamVjdCB0byB0aGUgYXJyYXkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4ga2V5LCBvbmx5XG4gICAgICogaWYgaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBpbiB0aGUgYXJyYXkuIFRoZSBwb3NpdGlvbiBvZiB0aGUgaW5zZXJ0IGlzXG4gICAgICogbm90IGd1YXJhbnRlZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXR0ciB7U3RyaW5nfSBUaGUga2V5LlxuICAgICAqIEBwYXJhbSBpdGVtIHt9IFRoZSBvYmplY3QgdG8gYWRkLlxuICAgICAqL1xuICAgIGFkZFVuaXF1ZTogZnVuY3Rpb24oYXR0ciwgaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGF0dHIsIG5ldyBQYXJzZS5PcC5BZGRVbmlxdWUoW2l0ZW1dKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0b21pY2FsbHkgcmVtb3ZlIGFsbCBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IGZyb20gdGhlIGFycmF5IGFzc29jaWF0ZWRcbiAgICAgKiB3aXRoIGEgZ2l2ZW4ga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGF0dHIge1N0cmluZ30gVGhlIGtleS5cbiAgICAgKiBAcGFyYW0gaXRlbSB7fSBUaGUgb2JqZWN0IHRvIHJlbW92ZS5cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uKGF0dHIsIGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChhdHRyLCBuZXcgUGFyc2UuT3AuUmVtb3ZlKFtpdGVtXSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGEgc3ViY2xhc3Mgb2YgUGFyc2UuT3AgZGVzY3JpYmluZyB3aGF0IGtpbmQgb2ZcbiAgICAgKiBtb2RpZmljYXRpb24gaGFzIGJlZW4gcGVyZm9ybWVkIG9uIHRoaXMgZmllbGQgc2luY2UgdGhlIGxhc3QgdGltZSBpdCB3YXNcbiAgICAgKiBzYXZlZC4gRm9yIGV4YW1wbGUsIGFmdGVyIGNhbGxpbmcgb2JqZWN0LmluY3JlbWVudChcInhcIiksIGNhbGxpbmdcbiAgICAgKiBvYmplY3Qub3AoXCJ4XCIpIHdvdWxkIHJldHVybiBhbiBpbnN0YW5jZSBvZiBQYXJzZS5PcC5JbmNyZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXR0ciB7U3RyaW5nfSBUaGUga2V5LlxuICAgICAqIEByZXR1cm5zIHtQYXJzZS5PcH0gVGhlIG9wZXJhdGlvbiwgb3IgdW5kZWZpbmVkIGlmIG5vbmUuXG4gICAgICovXG4gICAgb3A6IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIHJldHVybiBfLmxhc3QodGhpcy5fb3BTZXRRdWV1ZSlbYXR0cl07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBhdHRyaWJ1dGVzIG9uIHRoZSBtb2RlbCwgZmlyaW5nIDxjb2RlPlwiY2hhbmdlXCI8L2NvZGU+IHVubGVzc1xuICAgICAqIHlvdSBjaG9vc2UgdG8gc2lsZW5jZSBpdC5cbiAgICAgKi9cbiAgICBjbGVhcjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBvcHRpb25zLnVuc2V0ID0gdHJ1ZTtcbiAgICAgIHZhciBrZXlzVG9DbGVhciA9IF8uZXh0ZW5kKHRoaXMuYXR0cmlidXRlcywgdGhpcy5fb3BlcmF0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoa2V5c1RvQ2xlYXIsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgSlNPTi1lbmNvZGVkIHNldCBvZiBvcGVyYXRpb25zIHRvIGJlIHNlbnQgd2l0aCB0aGUgbmV4dCBzYXZlXG4gICAgICogcmVxdWVzdC5cbiAgICAgKi9cbiAgICBfZ2V0U2F2ZUpTT046IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGpzb24gPSBfLmNsb25lKF8uZmlyc3QodGhpcy5fb3BTZXRRdWV1ZSkpO1xuICAgICAgUGFyc2UuX29iamVjdEVhY2goanNvbiwgZnVuY3Rpb24ob3AsIGtleSkge1xuICAgICAgICBqc29uW2tleV0gPSBvcC50b0pTT04oKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIG9iamVjdCBjYW4gYmUgc2VyaWFsaXplZCBmb3Igc2F2aW5nLlxuICAgICAqL1xuICAgIF9jYW5CZVNlcmlhbGl6ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFBhcnNlLk9iamVjdC5fY2FuQmVTZXJpYWxpemVkQXNWYWx1ZSh0aGlzLmF0dHJpYnV0ZXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgbW9kZWwgZnJvbSB0aGUgc2VydmVyLiBJZiB0aGUgc2VydmVyJ3MgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4gICAgICogbW9kZWwgZGlmZmVycyBmcm9tIGl0cyBjdXJyZW50IGF0dHJpYnV0ZXMsIHRoZXkgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogdHJpZ2dlcmluZyBhIDxjb2RlPlwiY2hhbmdlXCI8L2NvZGU+IGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBCYWNrYm9uZS1zdHlsZSBjYWxsYmFjayBvYmplY3QuXG4gICAgICogVmFsaWQgb3B0aW9ucyBhcmU6PHVsPlxuICAgICAqICAgPGxpPnN1Y2Nlc3M6IEEgQmFja2JvbmUtc3R5bGUgc3VjY2VzcyBjYWxsYmFjay5cbiAgICAgKiAgIDxsaT5lcnJvcjogQW4gQmFja2JvbmUtc3R5bGUgZXJyb3IgY2FsbGJhY2suXG4gICAgICogICA8bGk+dXNlTWFzdGVyS2V5OiBJbiBDbG91ZCBDb2RlIGFuZCBOb2RlIG9ubHksIGNhdXNlcyB0aGUgTWFzdGVyIEtleSB0b1xuICAgICAqICAgICBiZSB1c2VkIGZvciB0aGlzIHJlcXVlc3QuXG4gICAgICogICA8bGk+c2Vzc2lvblRva2VuOiBBIHZhbGlkIHNlc3Npb24gdG9rZW4sIHVzZWQgZm9yIG1ha2luZyBhIHJlcXVlc3Qgb25cbiAgICAgKiAgICAgICBiZWhhbGYgb2YgYSBzcGVjaWZpYyB1c2VyLlxuICAgICAqIDwvdWw+XG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhlIGZldGNoXG4gICAgICogICAgIGNvbXBsZXRlcy5cbiAgICAgKi9cbiAgICBmZXRjaDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB2YXIgcmVxdWVzdCA9IFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcm91dGU6IFwiY2xhc3Nlc1wiLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICBvYmplY3RJZDogdGhpcy5pZCxcbiAgICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgICAgc2Vzc2lvblRva2VuOiBvcHRpb25zLnNlc3Npb25Ub2tlblxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVxdWVzdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMsIHhocikge1xuICAgICAgICBzZWxmLl9maW5pc2hGZXRjaChzZWxmLnBhcnNlKHJlc3BvbnNlLCBzdGF0dXMsIHhociksIHRydWUpO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMsIHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBoYXNoIG9mIG1vZGVsIGF0dHJpYnV0ZXMsIGFuZCBzYXZlIHRoZSBtb2RlbCB0byB0aGUgc2VydmVyLlxuICAgICAqIHVwZGF0ZWRBdCB3aWxsIGJlIHVwZGF0ZWQgd2hlbiB0aGUgcmVxdWVzdCByZXR1cm5zLlxuICAgICAqIFlvdSBjYW4gZWl0aGVyIGNhbGwgaXQgYXM6PHByZT5cbiAgICAgKiAgIG9iamVjdC5zYXZlKCk7PC9wcmU+XG4gICAgICogb3I8cHJlPlxuICAgICAqICAgb2JqZWN0LnNhdmUobnVsbCwgb3B0aW9ucyk7PC9wcmU+XG4gICAgICogb3I8cHJlPlxuICAgICAqICAgb2JqZWN0LnNhdmUoYXR0cnMsIG9wdGlvbnMpOzwvcHJlPlxuICAgICAqIG9yPHByZT5cbiAgICAgKiAgIG9iamVjdC5zYXZlKGtleSwgdmFsdWUsIG9wdGlvbnMpOzwvcHJlPlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIDxwcmU+XG4gICAgICogICBnYW1lVHVybi5zYXZlKHtcbiAgICAgKiAgICAgcGxheWVyOiBcIkpha2UgQ3V0dGVyXCIsXG4gICAgICogICAgIGRpY2VSb2xsOiAyXG4gICAgICogICB9LCB7XG4gICAgICogICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGdhbWVUdXJuQWdhaW4pIHtcbiAgICAgKiAgICAgICAvLyBUaGUgc2F2ZSB3YXMgc3VjY2Vzc2Z1bC5cbiAgICAgKiAgICAgfSxcbiAgICAgKiAgICAgZXJyb3I6IGZ1bmN0aW9uKGdhbWVUdXJuQWdhaW4sIGVycm9yKSB7XG4gICAgICogICAgICAgLy8gVGhlIHNhdmUgZmFpbGVkLiAgRXJyb3IgaXMgYW4gaW5zdGFuY2Ugb2YgUGFyc2UuRXJyb3IuXG4gICAgICogICAgIH1cbiAgICAgKiAgIH0pOzwvcHJlPlxuICAgICAqIG9yIHdpdGggcHJvbWlzZXM6PHByZT5cbiAgICAgKiAgIGdhbWVUdXJuLnNhdmUoe1xuICAgICAqICAgICBwbGF5ZXI6IFwiSmFrZSBDdXR0ZXJcIixcbiAgICAgKiAgICAgZGljZVJvbGw6IDJcbiAgICAgKiAgIH0pLnRoZW4oZnVuY3Rpb24oZ2FtZVR1cm5BZ2Fpbikge1xuICAgICAqICAgICAvLyBUaGUgc2F2ZSB3YXMgc3VjY2Vzc2Z1bC5cbiAgICAgKiAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICogICAgIC8vIFRoZSBzYXZlIGZhaWxlZC4gIEVycm9yIGlzIGFuIGluc3RhbmNlIG9mIFBhcnNlLkVycm9yLlxuICAgICAqICAgfSk7PC9wcmU+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEJhY2tib25lLXN0eWxlIGNhbGxiYWNrIG9iamVjdC5cbiAgICAgKiBWYWxpZCBvcHRpb25zIGFyZTo8dWw+XG4gICAgICogICA8bGk+d2FpdDogU2V0IHRvIHRydWUgdG8gd2FpdCBmb3IgdGhlIHNlcnZlciB0byBjb25maXJtIGEgc3VjY2Vzc2Z1bFxuICAgICAqICAgc2F2ZSBiZWZvcmUgbW9kaWZ5aW5nIHRoZSBhdHRyaWJ1dGVzIG9uIHRoZSBvYmplY3QuXG4gICAgICogICA8bGk+c2lsZW50OiBTZXQgdG8gdHJ1ZSB0byBhdm9pZCBmaXJpbmcgdGhlIGBzZXRgIGV2ZW50LlxuICAgICAqICAgPGxpPnN1Y2Nlc3M6IEEgQmFja2JvbmUtc3R5bGUgc3VjY2VzcyBjYWxsYmFjay5cbiAgICAgKiAgIDxsaT5lcnJvcjogQW4gQmFja2JvbmUtc3R5bGUgZXJyb3IgY2FsbGJhY2suXG4gICAgICogICA8bGk+dXNlTWFzdGVyS2V5OiBJbiBDbG91ZCBDb2RlIGFuZCBOb2RlIG9ubHksIGNhdXNlcyB0aGUgTWFzdGVyIEtleSB0b1xuICAgICAqICAgICBiZSB1c2VkIGZvciB0aGlzIHJlcXVlc3QuXG4gICAgICogICA8bGk+c2Vzc2lvblRva2VuOiBBIHZhbGlkIHNlc3Npb24gdG9rZW4sIHVzZWQgZm9yIG1ha2luZyBhIHJlcXVlc3Qgb25cbiAgICAgKiAgICAgICBiZWhhbGYgb2YgYSBzcGVjaWZpYyB1c2VyLlxuICAgICAqIDwvdWw+XG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhlIHNhdmVcbiAgICAgKiAgICAgY29tcGxldGVzLlxuICAgICAqIEBzZWUgUGFyc2UuRXJyb3JcbiAgICAgKi9cbiAgICBzYXZlOiBmdW5jdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICB2YXIgaSwgYXR0cnMsIGN1cnJlbnQsIG9wdGlvbnMsIHNhdmVkO1xuICAgICAgaWYgKF8uaXNPYmplY3QoYXJnMSkgfHwgUGFyc2UuX2lzTnVsbE9yVW5kZWZpbmVkKGFyZzEpKSB7XG4gICAgICAgIGF0dHJzID0gYXJnMTtcbiAgICAgICAgb3B0aW9ucyA9IGFyZzI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRycyA9IHt9O1xuICAgICAgICBhdHRyc1thcmcxXSA9IGFyZzI7XG4gICAgICAgIG9wdGlvbnMgPSBhcmczO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHNhdmUoeyBzdWNjZXNzOiBmdW5jdGlvbigpIHt9IH0pIHdvcmsuXG4gICAgICBpZiAoIW9wdGlvbnMgJiYgYXR0cnMpIHtcbiAgICAgICAgdmFyIGV4dHJhX2tleXMgPSBfLnJlamVjdChhdHRycywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgIHJldHVybiBfLmluY2x1ZGUoW1wic3VjY2Vzc1wiLCBcImVycm9yXCIsIFwid2FpdFwiXSwga2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChleHRyYV9rZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHZhciBhbGxfZnVuY3Rpb25zID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoXy5oYXMoYXR0cnMsIFwic3VjY2Vzc1wiKSAmJiAhXy5pc0Z1bmN0aW9uKGF0dHJzLnN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICBhbGxfZnVuY3Rpb25zID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfLmhhcyhhdHRycywgXCJlcnJvclwiKSAmJiAhXy5pc0Z1bmN0aW9uKGF0dHJzLmVycm9yKSkge1xuICAgICAgICAgICAgYWxsX2Z1bmN0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWxsX2Z1bmN0aW9ucykge1xuICAgICAgICAgICAgLy8gVGhpcyBhdHRycyBvYmplY3QgbG9va3MgbGlrZSBpdCdzIHJlYWxseSBhbiBvcHRpb25zIG9iamVjdCxcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSdzIG5vIG90aGVyIG9wdGlvbnMgb2JqZWN0LCBzbyBsZXQncyBqdXN0IHVzZSBpdC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmUobnVsbCwgYXR0cnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvcHRpb25zID0gXy5jbG9uZShvcHRpb25zKSB8fCB7fTtcbiAgICAgIGlmIChvcHRpb25zLndhaXQpIHtcbiAgICAgICAgY3VycmVudCA9IF8uY2xvbmUodGhpcy5hdHRyaWJ1dGVzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNldE9wdGlvbnMgPSBfLmNsb25lKG9wdGlvbnMpIHx8IHt9O1xuICAgICAgaWYgKHNldE9wdGlvbnMud2FpdCkge1xuICAgICAgICBzZXRPcHRpb25zLnNpbGVudCA9IHRydWU7XG4gICAgICB9XG4gICAgICB2YXIgc2V0RXJyb3I7XG4gICAgICBzZXRPcHRpb25zLmVycm9yID0gZnVuY3Rpb24obW9kZWwsIGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yID0gZXJyb3I7XG4gICAgICB9O1xuICAgICAgaWYgKGF0dHJzICYmICF0aGlzLnNldChhdHRycywgc2V0T3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3Ioc2V0RXJyb3IpLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMsIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbW9kZWwgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBhbnkgdW5zYXZlZCBjaGlsZCwgc2F2ZSBpdCBmaXJzdC5cbiAgICAgIG1vZGVsLl9yZWZyZXNoQ2FjaGUoKTtcblxuICAgICAgLy8gVE9ETyhrbGltdCk6IFJlZmFjdG9yIHRoaXMgc28gdGhhdCB0aGUgc2F2ZSBzdGFydHMgbm93LCBub3QgbGF0ZXIuXG5cbiAgICAgIHZhciB1bnNhdmVkQ2hpbGRyZW4gPSBbXTtcbiAgICAgIHZhciB1bnNhdmVkRmlsZXMgPSBbXTtcbiAgICAgIFBhcnNlLk9iamVjdC5fZmluZFVuc2F2ZWRDaGlsZHJlbihtb2RlbC5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2F2ZWRDaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNhdmVkRmlsZXMpO1xuICAgICAgaWYgKHVuc2F2ZWRDaGlsZHJlbi5sZW5ndGggKyB1bnNhdmVkRmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gUGFyc2UuT2JqZWN0Ll9kZWVwU2F2ZUFzeW5jKHRoaXMuYXR0cmlidXRlcywge1xuICAgICAgICAgIHVzZU1hc3RlcktleTogb3B0aW9ucy51c2VNYXN0ZXJLZXksXG4gICAgICAgICAgc2Vzc2lvblRva2VuOiBvcHRpb25zLnNlc3Npb25Ub2tlblxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBtb2RlbC5zYXZlKG51bGwsIG9wdGlvbnMpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmVycm9yKGVycm9yKS5fdGhlblJ1bkNhbGxiYWNrcyhvcHRpb25zLCBtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGFydFNhdmUoKTtcbiAgICAgIHRoaXMuX3NhdmluZyA9ICh0aGlzLl9zYXZpbmcgfHwgMCkgKyAxO1xuXG4gICAgICB0aGlzLl9hbGxQcmV2aW91c1NhdmVzID0gdGhpcy5fYWxsUHJldmlvdXNTYXZlcyB8fCBQYXJzZS5Qcm9taXNlLmFzKCk7XG4gICAgICB0aGlzLl9hbGxQcmV2aW91c1NhdmVzID0gdGhpcy5fYWxsUHJldmlvdXNTYXZlcy5fY29udGludWVXaXRoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWV0aG9kID0gbW9kZWwuaWQgPyAnUFVUJyA6ICdQT1NUJztcblxuICAgICAgICB2YXIganNvbiA9IG1vZGVsLl9nZXRTYXZlSlNPTigpO1xuXG4gICAgICAgIHZhciByb3V0ZSA9IFwiY2xhc3Nlc1wiO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gbW9kZWwuY2xhc3NOYW1lO1xuICAgICAgICBpZiAobW9kZWwuY2xhc3NOYW1lID09PSBcIl9Vc2VyXCIgJiYgIW1vZGVsLmlkKSB7XG4gICAgICAgICAgLy8gU3BlY2lhbC1jYXNlIHVzZXIgc2lnbi11cC5cbiAgICAgICAgICByb3V0ZSA9IFwidXNlcnNcIjtcbiAgICAgICAgICBjbGFzc05hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXF1ZXN0ID0gUGFyc2UuX3JlcXVlc3Qoe1xuICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBvYmplY3RJZDogbW9kZWwuaWQsXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgICAgICBzZXNzaW9uVG9rZW46IG9wdGlvbnMuc2Vzc2lvblRva2VuLFxuICAgICAgICAgIGRhdGE6IGpzb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QudGhlbihmdW5jdGlvbihyZXNwLCBzdGF0dXMsIHhocikge1xuICAgICAgICAgIHZhciBzZXJ2ZXJBdHRycyA9IG1vZGVsLnBhcnNlKHJlc3AsIHN0YXR1cywgeGhyKTtcbiAgICAgICAgICBpZiAob3B0aW9ucy53YWl0KSB7XG4gICAgICAgICAgICBzZXJ2ZXJBdHRycyA9IF8uZXh0ZW5kKGF0dHJzIHx8IHt9LCBzZXJ2ZXJBdHRycyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1vZGVsLl9maW5pc2hTYXZlKHNlcnZlckF0dHJzKTtcbiAgICAgICAgICBpZiAob3B0aW9ucy53YWl0KSB7XG4gICAgICAgICAgICBtb2RlbC5zZXQoY3VycmVudCwgc2V0T3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtb2RlbDtcblxuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIG1vZGVsLl9jYW5jZWxTYXZlKCk7XG4gICAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3IoZXJyb3IpO1xuXG4gICAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMsIG1vZGVsKTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX2FsbFByZXZpb3VzU2F2ZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhpcyBtb2RlbCBvbiB0aGUgc2VydmVyIGlmIGl0IHdhcyBhbHJlYWR5IHBlcnNpc3RlZC5cbiAgICAgKiBPcHRpbWlzdGljYWxseSByZW1vdmVzIHRoZSBtb2RlbCBmcm9tIGl0cyBjb2xsZWN0aW9uLCBpZiBpdCBoYXMgb25lLlxuICAgICAqIElmIGB3YWl0OiB0cnVlYCBpcyBwYXNzZWQsIHdhaXRzIGZvciB0aGUgc2VydmVyIHRvIHJlc3BvbmRcbiAgICAgKiBiZWZvcmUgcmVtb3ZhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgY2FsbGJhY2sgb2JqZWN0LlxuICAgICAqIFZhbGlkIG9wdGlvbnMgYXJlOjx1bD5cbiAgICAgKiAgIDxsaT53YWl0OiBTZXQgdG8gdHJ1ZSB0byB3YWl0IGZvciB0aGUgc2VydmVyIHRvIGNvbmZpcm0gc3VjY2Vzc2Z1bFxuICAgICAqICAgZGVsZXRpb24gb2YgdGhlIG9iamVjdCBiZWZvcmUgdHJpZ2dlcmluZyB0aGUgYGRlc3Ryb3lgIGV2ZW50LlxuICAgICAqICAgPGxpPnN1Y2Nlc3M6IEEgQmFja2JvbmUtc3R5bGUgc3VjY2VzcyBjYWxsYmFja1xuICAgICAqICAgPGxpPmVycm9yOiBBbiBCYWNrYm9uZS1zdHlsZSBlcnJvciBjYWxsYmFjay5cbiAgICAgKiAgIDxsaT51c2VNYXN0ZXJLZXk6IEluIENsb3VkIENvZGUgYW5kIE5vZGUgb25seSwgY2F1c2VzIHRoZSBNYXN0ZXIgS2V5IHRvXG4gICAgICogICAgIGJlIHVzZWQgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICAgKiAgIDxsaT5zZXNzaW9uVG9rZW46IEEgdmFsaWQgc2Vzc2lvbiB0b2tlbiwgdXNlZCBmb3IgbWFraW5nIGEgcmVxdWVzdCBvblxuICAgICAqICAgICAgIGJlaGFsZiBvZiBhIHNwZWNpZmljIHVzZXIuXG4gICAgICogPC91bD5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGUgZGVzdHJveVxuICAgICAqICAgICBjb21wbGV0ZXMuXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJpZ2dlckRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kZWwudHJpZ2dlcignZGVzdHJveScsIG1vZGVsLCBtb2RlbC5jb2xsZWN0aW9uLCBvcHRpb25zKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgICByZXR1cm4gdHJpZ2dlckRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLndhaXQpIHtcbiAgICAgICAgdHJpZ2dlckRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlcXVlc3QgPSBQYXJzZS5fcmVxdWVzdCh7XG4gICAgICAgIHJvdXRlOiBcImNsYXNzZXNcIixcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSxcbiAgICAgICAgb2JqZWN0SWQ6IHRoaXMuaWQsXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHVzZU1hc3RlcktleTogb3B0aW9ucy51c2VNYXN0ZXJLZXksXG4gICAgICAgIHNlc3Npb25Ub2tlbjogb3B0aW9ucy5zZXNzaW9uVG9rZW5cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcXVlc3QudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMud2FpdCkge1xuICAgICAgICAgIHRyaWdnZXJEZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgfSkuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucywgdGhpcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcmVzcG9uc2UgaW50byB0aGUgaGFzaCBvZiBhdHRyaWJ1dGVzIHRvIGJlIHNldCBvbiB0aGUgbW9kZWwuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHBhcnNlOiBmdW5jdGlvbihyZXNwLCBzdGF0dXMsIHhocikge1xuICAgICAgdmFyIG91dHB1dCA9IF8uY2xvbmUocmVzcCk7XG4gICAgICBfKFtcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiXSkuZWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKG91dHB1dFtrZXldKSB7XG4gICAgICAgICAgb3V0cHV0W2tleV0gPSBQYXJzZS5fcGFyc2VEYXRlKG91dHB1dFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIW91dHB1dC51cGRhdGVkQXQpIHtcbiAgICAgICAgb3V0cHV0LnVwZGF0ZWRBdCA9IG91dHB1dC5jcmVhdGVkQXQ7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX2V4aXN0ZWQgPSAoc3RhdHVzICE9PSAyMDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb2RlbCB3aXRoIGlkZW50aWNhbCBhdHRyaWJ1dGVzIHRvIHRoaXMgb25lLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLk9iamVjdH1cbiAgICAgKi9cbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5hdHRyaWJ1dGVzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgb2JqZWN0IGhhcyBuZXZlciBiZWVuIHNhdmVkIHRvIFBhcnNlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNOZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoaXMgbWV0aG9kIHRvIG1hbnVhbGx5IGZpcmUgYSBgXCJjaGFuZ2VcImAgZXZlbnQgZm9yIHRoaXMgbW9kZWwgYW5kXG4gICAgICogYSBgXCJjaGFuZ2U6YXR0cmlidXRlXCJgIGV2ZW50IGZvciBlYWNoIGNoYW5nZWQgYXR0cmlidXRlLlxuICAgICAqIENhbGxpbmcgdGhpcyB3aWxsIGNhdXNlIGFsbCBvYmplY3RzIG9ic2VydmluZyB0aGUgbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIGNoYW5nZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB2YXIgY2hhbmdpbmcgPSB0aGlzLl9jaGFuZ2luZztcbiAgICAgIHRoaXMuX2NoYW5naW5nID0gdHJ1ZTtcblxuICAgICAgLy8gU2lsZW50IGNoYW5nZXMgYmVjb21lIHBlbmRpbmcgY2hhbmdlcy5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIFBhcnNlLl9vYmplY3RFYWNoKHRoaXMuX3NpbGVudCwgZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBzZWxmLl9wZW5kaW5nW2F0dHJdID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTaWxlbnQgY2hhbmdlcyBhcmUgdHJpZ2dlcmVkLlxuICAgICAgdmFyIGNoYW5nZXMgPSBfLmV4dGVuZCh7fSwgb3B0aW9ucy5jaGFuZ2VzLCB0aGlzLl9zaWxlbnQpO1xuICAgICAgdGhpcy5fc2lsZW50ID0ge307XG4gICAgICBQYXJzZS5fb2JqZWN0RWFjaChjaGFuZ2VzLCBmdW5jdGlvbih1bnVzZWRfdmFsdWUsIGF0dHIpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdjaGFuZ2U6JyArIGF0dHIsIHNlbGYsIHNlbGYuZ2V0KGF0dHIpLCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNoYW5naW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGlzIGlzIHRvIGdldCBhcm91bmQgbGludCBub3QgbGV0dGluZyB1cyBtYWtlIGEgZnVuY3Rpb24gaW4gYSBsb29wLlxuICAgICAgdmFyIGRlbGV0ZUNoYW5nZWQgPSBmdW5jdGlvbih2YWx1ZSwgYXR0cikge1xuICAgICAgICBpZiAoIXNlbGYuX3BlbmRpbmdbYXR0cl0gJiYgIXNlbGYuX3NpbGVudFthdHRyXSkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmLmNoYW5nZWRbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIENvbnRpbnVlIGZpcmluZyBgXCJjaGFuZ2VcImAgZXZlbnRzIHdoaWxlIHRoZXJlIGFyZSBwZW5kaW5nIGNoYW5nZXMuXG4gICAgICB3aGlsZSAoIV8uaXNFbXB0eSh0aGlzLl9wZW5kaW5nKSkge1xuICAgICAgICB0aGlzLl9wZW5kaW5nID0ge307XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIC8vIFBlbmRpbmcgYW5kIHNpbGVudCBjaGFuZ2VzIHN0aWxsIHJlbWFpbi5cbiAgICAgICAgUGFyc2UuX29iamVjdEVhY2godGhpcy5jaGFuZ2VkLCBkZWxldGVDaGFuZ2VkKTtcbiAgICAgICAgc2VsZi5fcHJldmlvdXNBdHRyaWJ1dGVzID0gXy5jbG9uZSh0aGlzLmF0dHJpYnV0ZXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jaGFuZ2luZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIG9iamVjdCB3YXMgY3JlYXRlZCBieSB0aGUgUGFyc2Ugc2VydmVyIHdoZW4gdGhlXG4gICAgICogb2JqZWN0IG1pZ2h0IGhhdmUgYWxyZWFkeSBiZWVuIHRoZXJlIChlLmcuIGluIHRoZSBjYXNlIG9mIGEgRmFjZWJvb2tcbiAgICAgKiBsb2dpbilcbiAgICAgKi9cbiAgICBleGlzdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9leGlzdGVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlIG1vZGVsIGhhcyBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IDxjb2RlPlwiY2hhbmdlXCI8L2NvZGU+XG4gICAgICogZXZlbnQuICBJZiB5b3Ugc3BlY2lmeSBhbiBhdHRyaWJ1dGUgbmFtZSwgZGV0ZXJtaW5lIGlmIHRoYXQgYXR0cmlidXRlXG4gICAgICogaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHIgT3B0aW9uYWwgYXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc0NoYW5nZWQ6IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gIV8uaXNFbXB0eSh0aGlzLmNoYW5nZWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZCAmJiBfLmhhcyh0aGlzLmNoYW5nZWQsIGF0dHIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgYXR0cmlidXRlcyB0aGF0IGhhdmUgY2hhbmdlZCwgb3JcbiAgICAgKiBmYWxzZSBpZiB0aGVyZSBhcmUgbm8gY2hhbmdlZCBhdHRyaWJ1dGVzLiBVc2VmdWwgZm9yIGRldGVybWluaW5nIHdoYXRcbiAgICAgKiBwYXJ0cyBvZiBhIHZpZXcgbmVlZCB0byBiZSB1cGRhdGVkIGFuZC9vciB3aGF0IGF0dHJpYnV0ZXMgbmVlZCB0byBiZVxuICAgICAqIHBlcnNpc3RlZCB0byB0aGUgc2VydmVyLiBVbnNldCBhdHRyaWJ1dGVzIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBhbiBhdHRyaWJ1dGVzIG9iamVjdCB0byBkaWZmIGFnYWluc3QgdGhlIG1vZGVsLFxuICAgICAqIGRldGVybWluaW5nIGlmIHRoZXJlICp3b3VsZCBiZSogYSBjaGFuZ2UuXG4gICAgICovXG4gICAgY2hhbmdlZEF0dHJpYnV0ZXM6IGZ1bmN0aW9uKGRpZmYpIHtcbiAgICAgIGlmICghZGlmZikge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNDaGFuZ2VkKCkgPyBfLmNsb25lKHRoaXMuY2hhbmdlZCkgOiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGFuZ2VkID0ge307XG4gICAgICB2YXIgb2xkID0gdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzO1xuICAgICAgUGFyc2UuX29iamVjdEVhY2goZGlmZiwgZnVuY3Rpb24oZGlmZlZhbCwgYXR0cikge1xuICAgICAgICBpZiAoIV8uaXNFcXVhbChvbGRbYXR0cl0sIGRpZmZWYWwpKSB7XG4gICAgICAgICAgY2hhbmdlZFthdHRyXSA9IGRpZmZWYWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByZXZpb3VzIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZSwgcmVjb3JkZWQgYXQgdGhlIHRpbWUgdGhlIGxhc3RcbiAgICAgKiA8Y29kZT5cImNoYW5nZVwiPC9jb2RlPiBldmVudCB3YXMgZmlyZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHIgTmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIGdldC5cbiAgICAgKi9cbiAgICBwcmV2aW91czogZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoIHx8ICF0aGlzLl9wcmV2aW91c0F0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzW2F0dHJdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFsbCBvZiB0aGUgYXR0cmlidXRlcyBvZiB0aGUgbW9kZWwgYXQgdGhlIHRpbWUgb2YgdGhlIHByZXZpb3VzXG4gICAgICogPGNvZGU+XCJjaGFuZ2VcIjwvY29kZT4gZXZlbnQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIHByZXZpb3VzQXR0cmlidXRlczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXy5jbG9uZSh0aGlzLl9wcmV2aW91c0F0dHJpYnV0ZXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG1vZGVsIGlzIGN1cnJlbnRseSBpbiBhIHZhbGlkIHN0YXRlLiBJdCdzIG9ubHkgcG9zc2libGUgdG9cbiAgICAgKiBnZXQgaW50byBhbiAqaW52YWxpZCogc3RhdGUgaWYgeW91J3JlIHVzaW5nIHNpbGVudCBjaGFuZ2VzLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNWYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXRoaXMudmFsaWRhdGUodGhpcy5hdHRyaWJ1dGVzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogWW91IHNob3VsZCBub3QgY2FsbCB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IHVubGVzcyB5b3Ugc3ViY2xhc3NcbiAgICAgKiA8Y29kZT5QYXJzZS5PYmplY3Q8L2NvZGU+LCBpbiB3aGljaCBjYXNlIHlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2RcbiAgICAgKiB0byBwcm92aWRlIGFkZGl0aW9uYWwgdmFsaWRhdGlvbiBvbiA8Y29kZT5zZXQ8L2NvZGU+IGFuZFxuICAgICAqIDxjb2RlPnNhdmU8L2NvZGU+LiAgWW91ciBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcmV0dXJuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgVGhlIGN1cnJlbnQgZGF0YSB0byB2YWxpZGF0ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEJhY2tib25lLWxpa2Ugb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHJldHVybiB7fSBGYWxzZSBpZiB0aGUgZGF0YSBpcyB2YWxpZC4gIEFuIGVycm9yIG9iamVjdCBvdGhlcndpc2UuXG4gICAgICogQHNlZSBQYXJzZS5PYmplY3Qjc2V0XG4gICAgICovXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKGF0dHJzLCBvcHRpb25zKSB7XG4gICAgICBpZiAoXy5oYXMoYXR0cnMsIFwiQUNMXCIpICYmICEoYXR0cnMuQUNMIGluc3RhbmNlb2YgUGFyc2UuQUNMKSkge1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlLkVycm9yKFBhcnNlLkVycm9yLk9USEVSX0NBVVNFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQUNMIG11c3QgYmUgYSBQYXJzZS5BQ0wuXCIpO1xuICAgICAgfVxuICAgICAgdmFyIGNvcnJlY3QgPSB0cnVlO1xuICAgICAgUGFyc2UuX29iamVjdEVhY2goYXR0cnMsIGZ1bmN0aW9uKHVudXNlZF92YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICghKC9eW0EtWmEtel1bMC05QS1aYS16X10qJC8pLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIGNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNvcnJlY3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZS5FcnJvcihQYXJzZS5FcnJvci5JTlZBTElEX0tFWV9OQU1FKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUnVuIHZhbGlkYXRpb24gYWdhaW5zdCBhIHNldCBvZiBpbmNvbWluZyBhdHRyaWJ1dGVzLCByZXR1cm5pbmcgYHRydWVgXG4gICAgICogaWYgYWxsIGlzIHdlbGwuIElmIGEgc3BlY2lmaWMgYGVycm9yYCBjYWxsYmFjayBoYXMgYmVlbiBwYXNzZWQsXG4gICAgICogY2FsbCB0aGF0IGluc3RlYWQgb2YgZmlyaW5nIHRoZSBnZW5lcmFsIGBcImVycm9yXCJgIGV2ZW50LlxuICAgICAqL1xuICAgIF92YWxpZGF0ZTogZnVuY3Rpb24oYXR0cnMsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnNpbGVudCB8fCAhdGhpcy52YWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGF0dHJzID0gXy5leHRlbmQoe30sIHRoaXMuYXR0cmlidXRlcywgYXR0cnMpO1xuICAgICAgdmFyIGVycm9yID0gdGhpcy52YWxpZGF0ZShhdHRycywgb3B0aW9ucyk7XG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lcnJvcikge1xuICAgICAgICBvcHRpb25zLmVycm9yKHRoaXMsIGVycm9yLCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignZXJyb3InLCB0aGlzLCBlcnJvciwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIEFDTCBmb3IgdGhpcyBvYmplY3QuXG4gICAgICogQHJldHVybnMge1BhcnNlLkFDTH0gQW4gaW5zdGFuY2Ugb2YgUGFyc2UuQUNMLlxuICAgICAqIEBzZWUgUGFyc2UuT2JqZWN0I2dldFxuICAgICAqL1xuICAgIGdldEFDTDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoXCJBQ0xcIik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIEFDTCB0byBiZSB1c2VkIGZvciB0aGlzIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1BhcnNlLkFDTH0gYWNsIEFuIGluc3RhbmNlIG9mIFBhcnNlLkFDTC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25hbCBCYWNrYm9uZS1saWtlIG9wdGlvbnMgb2JqZWN0IHRvIGJlXG4gICAgICogICAgIHBhc3NlZCBpbiB0byBzZXQuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgc2V0IHBhc3NlZCB2YWxpZGF0aW9uLlxuICAgICAqIEBzZWUgUGFyc2UuT2JqZWN0I3NldFxuICAgICAqL1xuICAgIHNldEFDTDogZnVuY3Rpb24oYWNsLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoXCJBQ0xcIiwgYWNsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHN1YmNsYXNzIGZvciBtYWtpbmcgbmV3IGluc3RhbmNlcyBvZiB0aGUgZ2l2ZW5cbiAgICogY2xhc3NOYW1lIHN0cmluZy5cbiAgICovXG4gIFBhcnNlLk9iamVjdC5fZ2V0U3ViY2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICBpZiAoIV8uaXNTdHJpbmcoY2xhc3NOYW1lKSkge1xuICAgICAgdGhyb3cgXCJQYXJzZS5PYmplY3QuX2dldFN1YmNsYXNzIHJlcXVpcmVzIGEgc3RyaW5nIGFyZ3VtZW50LlwiO1xuICAgIH1cbiAgICB2YXIgT2JqZWN0Q2xhc3MgPSBQYXJzZS5PYmplY3QuX2NsYXNzTWFwW2NsYXNzTmFtZV07XG4gICAgaWYgKCFPYmplY3RDbGFzcykge1xuICAgICAgT2JqZWN0Q2xhc3MgPSBQYXJzZS5PYmplY3QuZXh0ZW5kKGNsYXNzTmFtZSk7XG4gICAgICBQYXJzZS5PYmplY3QuX2NsYXNzTWFwW2NsYXNzTmFtZV0gPSBPYmplY3RDbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdENsYXNzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgc3ViY2xhc3Mgb2YgUGFyc2UuT2JqZWN0IGZvciB0aGUgZ2l2ZW4gY2xhc3NuYW1lLlxuICAgKi9cbiAgUGFyc2UuT2JqZWN0Ll9jcmVhdGUgPSBmdW5jdGlvbihjbGFzc05hbWUsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgT2JqZWN0Q2xhc3MgPSBQYXJzZS5PYmplY3QuX2dldFN1YmNsYXNzKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RDbGFzcyhhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2Ygb2JqZWN0IGlkcyBnaXZlbiBhIGxpc3Qgb2Ygb2JqZWN0cy5cbiAgICovXG4gIFBhcnNlLk9iamVjdC5fdG9PYmplY3RJZEFycmF5ID0gZnVuY3Rpb24obGlzdCwgb21pdE9iamVjdHNXaXRoRGF0YSkge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMobGlzdCk7XG4gICAgfVxuXG4gICAgdmFyIGVycm9yO1xuICAgIHZhciBjbGFzc05hbWUgPSBsaXN0WzBdLmNsYXNzTmFtZTtcbiAgICB2YXIgb2JqZWN0SWRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gbGlzdFtpXTtcbiAgICAgIGlmIChjbGFzc05hbWUgIT09IG9iamVjdC5jbGFzc05hbWUpIHtcbiAgICAgICAgZXJyb3IgPSBuZXcgUGFyc2UuRXJyb3IoUGFyc2UuRXJyb3IuSU5WQUxJRF9DTEFTU19OQU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFsbCBvYmplY3RzIHNob3VsZCBiZSBvZiB0aGUgc2FtZSBjbGFzc1wiKTtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmICghb2JqZWN0LmlkKSB7XG4gICAgICAgIGVycm9yID0gbmV3IFBhcnNlLkVycm9yKFBhcnNlLkVycm9yLk1JU1NJTkdfT0JKRUNUX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFsbCBvYmplY3RzIG11c3QgaGF2ZSBhbiBJRFwiKTtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChvbWl0T2JqZWN0c1dpdGhEYXRhICYmIG9iamVjdC5faGFzRGF0YSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdElkcy5wdXNoKG9iamVjdC5pZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMob2JqZWN0SWRzKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlcyBhIGxpc3Qgb2Ygb2JqZWN0cyB3aXRoIGZldGNoZWQgcmVzdWx0cy5cbiAgICovXG4gIFBhcnNlLk9iamVjdC5fdXBkYXRlV2l0aEZldGNoZWRSZXN1bHRzID0gZnVuY3Rpb24obGlzdCwgZmV0Y2hlZCwgZm9yY2VGZXRjaCkge1xuICAgIHZhciBmZXRjaGVkT2JqZWN0c0J5SWQgPSB7fTtcbiAgICBQYXJzZS5fYXJyYXlFYWNoKGZldGNoZWQsIGZ1bmN0aW9uKG9iamVjdCwgaSkge1xuICAgICAgZmV0Y2hlZE9iamVjdHNCeUlkW29iamVjdC5pZF0gPSBvYmplY3Q7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvYmplY3QgPSBsaXN0W2ldO1xuICAgICAgdmFyIGZldGNoZWRPYmplY3QgPSBmZXRjaGVkT2JqZWN0c0J5SWRbb2JqZWN0LmlkXTtcbiAgICAgIGlmICghZmV0Y2hlZE9iamVjdCAmJiBmb3JjZUZldGNoKSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBQYXJzZS5FcnJvcihQYXJzZS5FcnJvci5PQkpFQ1RfTk9UX0ZPVU5ELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFsbCBvYmplY3RzIG11c3QgZXhpc3Qgb24gdGhlIHNlcnZlclwiKTtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBvYmplY3QuX21lcmdlRnJvbU9iamVjdChmZXRjaGVkT2JqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5hcyhsaXN0KTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgb2JqZWN0cyBnaXZlbiBpbiBsaXN0LiAgVGhlIGZvcmNlRmV0Y2ggb3B0aW9uIHdpbGwgZmV0Y2ggYWxsXG4gICAqIG9iamVjdHMgaWYgdHJ1ZSBhbmQgaWdub3JlIG9iamVjdHMgd2l0aCBkYXRhIGlmIGZhbHNlLlxuICAgKi9cbiAgUGFyc2UuT2JqZWN0Ll9mZXRjaEFsbCA9IGZ1bmN0aW9uKGxpc3QsIGZvcmNlRmV0Y2gpIHtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzKGxpc3QpO1xuICAgIH1cblxuICAgIHZhciBvbWl0T2JqZWN0c1dpdGhEYXRhID0gIWZvcmNlRmV0Y2g7XG4gICAgcmV0dXJuIFBhcnNlLk9iamVjdC5fdG9PYmplY3RJZEFycmF5KFxuICAgICAgbGlzdCxcbiAgICAgIG9taXRPYmplY3RzV2l0aERhdGFcbiAgICApLnRoZW4oZnVuY3Rpb24ob2JqZWN0SWRzKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gbGlzdFswXS5jbGFzc05hbWU7XG4gICAgICB2YXIgcXVlcnkgPSBuZXcgUGFyc2UuUXVlcnkoY2xhc3NOYW1lKTtcbiAgICAgIHF1ZXJ5LmNvbnRhaW5lZEluKFwib2JqZWN0SWRcIiwgb2JqZWN0SWRzKTtcbiAgICAgIHF1ZXJ5LmxpbWl0ID0gb2JqZWN0SWRzLmxlbmd0aDtcbiAgICAgIHJldHVybiBxdWVyeS5maW5kKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICByZXR1cm4gUGFyc2UuT2JqZWN0Ll91cGRhdGVXaXRoRmV0Y2hlZFJlc3VsdHMoXG4gICAgICAgIGxpc3QsXG4gICAgICAgIHJlc3VsdHMsXG4gICAgICAgIGZvcmNlRmV0Y2hcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gU2V0IHVwIGEgbWFwIG9mIGNsYXNzTmFtZSB0byBjbGFzcyBzbyB0aGF0IHdlIGNhbiBjcmVhdGUgbmV3IGluc3RhbmNlcyBvZlxuICAvLyBQYXJzZSBPYmplY3RzIGZyb20gSlNPTiBhdXRvbWF0aWNhbGx5LlxuICBQYXJzZS5PYmplY3QuX2NsYXNzTWFwID0ge307XG5cbiAgUGFyc2UuT2JqZWN0Ll9leHRlbmQgPSBQYXJzZS5fZXh0ZW5kO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHN1YmNsYXNzIG9mIFBhcnNlLk9iamVjdCBmb3IgdGhlIGdpdmVuIFBhcnNlIGNsYXNzIG5hbWUuXG4gICAqXG4gICAqIDxwPkV2ZXJ5IGV4dGVuc2lvbiBvZiBhIFBhcnNlIGNsYXNzIHdpbGwgaW5oZXJpdCBmcm9tIHRoZSBtb3N0IHJlY2VudFxuICAgKiBwcmV2aW91cyBleHRlbnNpb24gb2YgdGhhdCBjbGFzcy4gV2hlbiBhIFBhcnNlLk9iamVjdCBpcyBhdXRvbWF0aWNhbGx5XG4gICAqIGNyZWF0ZWQgYnkgcGFyc2luZyBKU09OLCBpdCB3aWxsIHVzZSB0aGUgbW9zdCByZWNlbnQgZXh0ZW5zaW9uIG9mIHRoYXRcbiAgICogY2xhc3MuPC9wPlxuICAgKlxuICAgKiA8cD5Zb3Ugc2hvdWxkIGNhbGwgZWl0aGVyOjxwcmU+XG4gICAqICAgICB2YXIgTXlDbGFzcyA9IFBhcnNlLk9iamVjdC5leHRlbmQoXCJNeUNsYXNzXCIsIHtcbiAgICogICAgICAgICA8aT5JbnN0YW5jZSBtZXRob2RzPC9pPixcbiAgICogICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbihhdHRycywgb3B0aW9ucykge1xuICAgKiAgICAgICAgICAgICB0aGlzLnNvbWVJbnN0YW5jZVByb3BlcnR5ID0gW10sXG4gICAqICAgICAgICAgICAgIDxpPk90aGVyIGluc3RhbmNlIHByb3BlcnRpZXM8L2k+XG4gICAqICAgICAgICAgfVxuICAgKiAgICAgfSwge1xuICAgKiAgICAgICAgIDxpPkNsYXNzIHByb3BlcnRpZXM8L2k+XG4gICAqICAgICB9KTs8L3ByZT5cbiAgICogb3IsIGZvciBCYWNrYm9uZSBjb21wYXRpYmlsaXR5OjxwcmU+XG4gICAqICAgICB2YXIgTXlDbGFzcyA9IFBhcnNlLk9iamVjdC5leHRlbmQoe1xuICAgKiAgICAgICAgIGNsYXNzTmFtZTogXCJNeUNsYXNzXCIsXG4gICAqICAgICAgICAgPGk+SW5zdGFuY2UgbWV0aG9kczwvaT4sXG4gICAqICAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oYXR0cnMsIG9wdGlvbnMpIHtcbiAgICogICAgICAgICAgICAgdGhpcy5zb21lSW5zdGFuY2VQcm9wZXJ0eSA9IFtdLFxuICAgKiAgICAgICAgICAgICA8aT5PdGhlciBpbnN0YW5jZSBwcm9wZXJ0aWVzPC9pPlxuICAgKiAgICAgICAgIH1cbiAgICogICAgIH0sIHtcbiAgICogICAgICAgICA8aT5DbGFzcyBwcm9wZXJ0aWVzPC9pPlxuICAgKiAgICAgfSk7PC9wcmU+PC9wPlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBuYW1lIG9mIHRoZSBQYXJzZSBjbGFzcyBiYWNraW5nIHRoaXMgbW9kZWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1Byb3BzIEluc3RhbmNlIHByb3BlcnRpZXMgdG8gYWRkIHRvIGluc3RhbmNlcyBvZiB0aGVcbiAgICogICAgIGNsYXNzIHJldHVybmVkIGZyb20gdGhpcyBtZXRob2QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc1Byb3BzIENsYXNzIHByb3BlcnRpZXMgdG8gYWRkIHRoZSBjbGFzcyByZXR1cm5lZCBmcm9tXG4gICAqICAgICB0aGlzIG1ldGhvZC5cbiAgICogQHJldHVybiB7Q2xhc3N9IEEgbmV3IHN1YmNsYXNzIG9mIFBhcnNlLk9iamVjdC5cbiAgICovXG4gIFBhcnNlLk9iamVjdC5leHRlbmQgPSBmdW5jdGlvbihjbGFzc05hbWUsIHByb3RvUHJvcHMsIGNsYXNzUHJvcHMpIHtcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2l0aCBvbmx5IHR3byBhcmdzLlxuICAgIGlmICghXy5pc1N0cmluZyhjbGFzc05hbWUpKSB7XG4gICAgICBpZiAoY2xhc3NOYW1lICYmIF8uaGFzKGNsYXNzTmFtZSwgXCJjbGFzc05hbWVcIikpIHtcbiAgICAgICAgcmV0dXJuIFBhcnNlLk9iamVjdC5leHRlbmQoY2xhc3NOYW1lLmNsYXNzTmFtZSwgY2xhc3NOYW1lLCBwcm90b1Byb3BzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiUGFyc2UuT2JqZWN0LmV4dGVuZCdzIGZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSB0aGUgY2xhc3NOYW1lLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBzb21lb25lIHRyaWVzIHRvIHN1YmNsYXNzIFwiVXNlclwiLCBjb2VyY2UgaXQgdG8gdGhlIHJpZ2h0IHR5cGUuXG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gXCJVc2VyXCIgJiYgUGFyc2UuVXNlci5fcGVyZm9ybVVzZXJSZXdyaXRlKSB7XG4gICAgICBjbGFzc05hbWUgPSBcIl9Vc2VyXCI7XG4gICAgfVxuICAgIHByb3RvUHJvcHMgPSBwcm90b1Byb3BzIHx8IHt9O1xuICAgIHByb3RvUHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXG4gICAgdmFyIE5ld0NsYXNzT2JqZWN0ID0gbnVsbDtcbiAgICBpZiAoXy5oYXMoUGFyc2UuT2JqZWN0Ll9jbGFzc01hcCwgY2xhc3NOYW1lKSkge1xuICAgICAgdmFyIE9sZENsYXNzT2JqZWN0ID0gUGFyc2UuT2JqZWN0Ll9jbGFzc01hcFtjbGFzc05hbWVdO1xuICAgICAgLy8gVGhpcyBuZXcgc3ViY2xhc3MgaGFzIGJlZW4gdG9sZCB0byBleHRlbmQgYm90aCBmcm9tIFwidGhpc1wiIGFuZCBmcm9tXG4gICAgICAvLyBPbGRDbGFzc09iamVjdC4gVGhpcyBpcyBtdWx0aXBsZSBpbmhlcml0YW5jZSwgd2hpY2ggaXNuJ3Qgc3VwcG9ydGVkLlxuICAgICAgLy8gRm9yIG5vdywgbGV0J3MganVzdCBwaWNrIG9uZS5cbiAgICAgIE5ld0NsYXNzT2JqZWN0ID0gT2xkQ2xhc3NPYmplY3QuX2V4dGVuZChwcm90b1Byb3BzLCBjbGFzc1Byb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTmV3Q2xhc3NPYmplY3QgPSB0aGlzLl9leHRlbmQocHJvdG9Qcm9wcywgY2xhc3NQcm9wcyk7XG4gICAgfVxuICAgIC8vIEV4dGVuZGluZyBhIHN1YmNsYXNzIHNob3VsZCByZXVzZSB0aGUgY2xhc3NuYW1lIGF1dG9tYXRpY2FsbHkuXG4gICAgTmV3Q2xhc3NPYmplY3QuZXh0ZW5kID0gZnVuY3Rpb24oYXJnMCkge1xuICAgICAgaWYgKF8uaXNTdHJpbmcoYXJnMCkgfHwgKGFyZzAgJiYgXy5oYXMoYXJnMCwgXCJjbGFzc05hbWVcIikpKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5PYmplY3QuZXh0ZW5kLmFwcGx5KE5ld0NsYXNzT2JqZWN0LCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgdmFyIG5ld0FyZ3VtZW50cyA9IFtjbGFzc05hbWVdLmNvbmNhdChQYXJzZS5fLnRvQXJyYXkoYXJndW1lbnRzKSk7XG4gICAgICByZXR1cm4gUGFyc2UuT2JqZWN0LmV4dGVuZC5hcHBseShOZXdDbGFzc09iamVjdCwgbmV3QXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHJlZmVyZW5jZSB0byBhIHN1YmNsYXNzIG9mIFBhcnNlLk9iamVjdCB3aXRoIHRoZSBnaXZlbiBpZC4gVGhpc1xuICAgICAqIGRvZXMgbm90IGV4aXN0IG9uIFBhcnNlLk9iamVjdCwgb25seSBvbiBzdWJjbGFzc2VzLlxuICAgICAqXG4gICAgICogPHA+QSBzaG9ydGN1dCBmb3I6IDxwcmU+XG4gICAgICogIHZhciBGb28gPSBQYXJzZS5PYmplY3QuZXh0ZW5kKFwiRm9vXCIpO1xuICAgICAqICB2YXIgcG9pbnRlclRvRm9vID0gbmV3IEZvbygpO1xuICAgICAqICBwb2ludGVyVG9Gb28uaWQgPSBcIm15T2JqZWN0SWRcIjtcbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBuYW1lIGNyZWF0ZVdpdGhvdXREYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBJRCBvZiB0aGUgb2JqZWN0IHRvIGNyZWF0ZSBhIHJlZmVyZW5jZSB0by5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5PYmplY3R9IEEgUGFyc2UuT2JqZWN0IHJlZmVyZW5jZS5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgUGFyc2UuT2JqZWN0XG4gICAgICovXG4gICAgTmV3Q2xhc3NPYmplY3QuY3JlYXRlV2l0aG91dERhdGEgPSBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIG9iaiA9IG5ldyBOZXdDbGFzc09iamVjdCgpO1xuICAgICAgb2JqLmlkID0gaWQ7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICBQYXJzZS5PYmplY3QuX2NsYXNzTWFwW2NsYXNzTmFtZV0gPSBOZXdDbGFzc09iamVjdDtcbiAgICByZXR1cm4gTmV3Q2xhc3NPYmplY3Q7XG4gIH07XG5cbiAgUGFyc2UuT2JqZWN0Ll9maW5kVW5zYXZlZENoaWxkcmVuID0gZnVuY3Rpb24ob2JqZWN0LCBjaGlsZHJlbiwgZmlsZXMpIHtcbiAgICBQYXJzZS5fdHJhdmVyc2Uob2JqZWN0LCBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBQYXJzZS5PYmplY3QpIHtcbiAgICAgICAgb2JqZWN0Ll9yZWZyZXNoQ2FjaGUoKTtcbiAgICAgICAgaWYgKG9iamVjdC5kaXJ0eSgpKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChvYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFBhcnNlLkZpbGUpIHtcbiAgICAgICAgaWYgKCFvYmplY3QudXJsKCkpIHtcbiAgICAgICAgICBmaWxlcy5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFBhcnNlLk9iamVjdC5fY2FuQmVTZXJpYWxpemVkQXNWYWx1ZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIC8vIFRPRE8oa2xpbXQpOiBXZSBzaG91bGQgcmV3cml0ZSBfdHJhdmVyc2Ugc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBoZXJlLlxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBQYXJzZS5PYmplY3QpIHtcbiAgICAgIHJldHVybiAhIW9iamVjdC5pZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFBhcnNlLkZpbGUpIHtcbiAgICAgIC8vIERvbid0IHJlY3Vyc2UgaW5kZWZpbml0ZWx5IGludG8gZmlsZXMuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2FuQmVTZXJpYWxpemVkQXNWYWx1ZSA9IHRydWU7XG5cbiAgICBpZiAoXy5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgIFBhcnNlLl9hcnJheUVhY2gob2JqZWN0LCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBpZiAoIVBhcnNlLk9iamVjdC5fY2FuQmVTZXJpYWxpemVkQXNWYWx1ZShjaGlsZCkpIHtcbiAgICAgICAgICBjYW5CZVNlcmlhbGl6ZWRBc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdChvYmplY3QpKSB7XG4gICAgICBQYXJzZS5fb2JqZWN0RWFjaChvYmplY3QsIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIGlmICghUGFyc2UuT2JqZWN0Ll9jYW5CZVNlcmlhbGl6ZWRBc1ZhbHVlKGNoaWxkKSkge1xuICAgICAgICAgIGNhbkJlU2VyaWFsaXplZEFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjYW5CZVNlcmlhbGl6ZWRBc1ZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSByb290IG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnM6IFRoZSBvbmx5IHZhbGlkIG9wdGlvbiBpcyB1c2VNYXN0ZXJLZXkuXG4gICAqL1xuICBQYXJzZS5PYmplY3QuX2RlZXBTYXZlQXN5bmMgPSBmdW5jdGlvbihvYmplY3QsIG9wdGlvbnMpIHtcbiAgICB2YXIgdW5zYXZlZENoaWxkcmVuID0gW107XG4gICAgdmFyIHVuc2F2ZWRGaWxlcyA9IFtdO1xuICAgIFBhcnNlLk9iamVjdC5fZmluZFVuc2F2ZWRDaGlsZHJlbihvYmplY3QsIHVuc2F2ZWRDaGlsZHJlbiwgdW5zYXZlZEZpbGVzKTtcblxuICAgIHZhciBwcm9taXNlID0gUGFyc2UuUHJvbWlzZS5hcygpO1xuICAgIF8uZWFjaCh1bnNhdmVkRmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmaWxlLnNhdmUob3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBvYmplY3RzID0gXy51bmlxKHVuc2F2ZWRDaGlsZHJlbik7XG4gICAgdmFyIHJlbWFpbmluZyA9IF8udW5pcShvYmplY3RzKTtcblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5fY29udGludWVXaGlsZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZy5sZW5ndGggPiAwO1xuICAgICAgfSwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gR2F0aGVyIHVwIGFsbCB0aGUgb2JqZWN0cyB0aGF0IGNhbiBiZSBzYXZlZCBpbiB0aGlzIGJhdGNoLlxuICAgICAgICB2YXIgYmF0Y2ggPSBbXTtcbiAgICAgICAgdmFyIG5ld1JlbWFpbmluZyA9IFtdO1xuICAgICAgICBQYXJzZS5fYXJyYXlFYWNoKHJlbWFpbmluZywgZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgLy8gTGltaXQgYmF0Y2hlcyB0byAyMCBvYmplY3RzLlxuICAgICAgICAgIGlmIChiYXRjaC5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgbmV3UmVtYWluaW5nLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob2JqZWN0Ll9jYW5CZVNlcmlhbGl6ZWQoKSkge1xuICAgICAgICAgICAgYmF0Y2gucHVzaChvYmplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdSZW1haW5pbmcucHVzaChvYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlbWFpbmluZyA9IG5ld1JlbWFpbmluZztcblxuICAgICAgICAvLyBJZiB3ZSBjYW4ndCBzYXZlIGFueSBvYmplY3RzLCB0aGVyZSBtdXN0IGJlIGEgY2lyY3VsYXIgcmVmZXJlbmNlLlxuICAgICAgICBpZiAoYmF0Y2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3IoXG4gICAgICAgICAgICBuZXcgUGFyc2UuRXJyb3IoUGFyc2UuRXJyb3IuT1RIRVJfQ0FVU0UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUcmllZCB0byBzYXZlIGEgYmF0Y2ggd2l0aCBhIGN5Y2xlLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNlcnZlIGEgc3BvdCBpbiBldmVyeSBvYmplY3QncyBzYXZlIHF1ZXVlLlxuICAgICAgICB2YXIgcmVhZHlUb1N0YXJ0ID0gUGFyc2UuUHJvbWlzZS53aGVuKF8ubWFwKGJhdGNoLCBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0Ll9hbGxQcmV2aW91c1NhdmVzIHx8IFBhcnNlLlByb21pc2UuYXMoKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgYmF0Y2hGaW5pc2hlZCA9IG5ldyBQYXJzZS5Qcm9taXNlKCk7XG4gICAgICAgIFBhcnNlLl9hcnJheUVhY2goYmF0Y2gsIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICAgIG9iamVjdC5fYWxsUHJldmlvdXNTYXZlcyA9IGJhdGNoRmluaXNoZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNhdmUgYSBzaW5nbGUgYmF0Y2gsIHdoZXRoZXIgcHJldmlvdXMgc2F2ZXMgc3VjY2VlZGVkIG9yIGZhaWxlZC5cbiAgICAgICAgcmV0dXJuIHJlYWR5VG9TdGFydC5fY29udGludWVXaXRoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBQYXJzZS5fcmVxdWVzdCh7XG4gICAgICAgICAgICByb3V0ZTogXCJiYXRjaFwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVzZU1hc3RlcktleTogb3B0aW9ucy51c2VNYXN0ZXJLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IG9wdGlvbnMuc2Vzc2lvblRva2VuLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICByZXF1ZXN0czogXy5tYXAoYmF0Y2gsIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0gb2JqZWN0Ll9nZXRTYXZlSlNPTigpO1xuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBcIlBPU1RcIjtcblxuICAgICAgICAgICAgICAgIHZhciBwYXRoID0gXCIvMS9jbGFzc2VzL1wiICsgb2JqZWN0LmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LmlkKSB7XG4gICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aCArIFwiL1wiICsgb2JqZWN0LmlkO1xuICAgICAgICAgICAgICAgICAgbWV0aG9kID0gXCJQVVRcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvYmplY3QuX3N0YXJ0U2F2ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IGpzb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgICAgICBQYXJzZS5fYXJyYXlFYWNoKGJhdGNoLCBmdW5jdGlvbihvYmplY3QsIGkpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW2ldLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QuX2ZpbmlzaFNhdmUoXG4gICAgICAgICAgICAgICAgICBvYmplY3QucGFyc2UocmVzcG9uc2VbaV0uc3VjY2Vzcywgc3RhdHVzLCB4aHIpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGVycm9yIHx8IHJlc3BvbnNlW2ldLmVycm9yO1xuICAgICAgICAgICAgICAgIG9iamVjdC5fY2FuY2VsU2F2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5lcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgUGFyc2UuRXJyb3IoZXJyb3IuY29kZSwgZXJyb3IuZXJyb3IpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgICAgICAgYmF0Y2hGaW5pc2hlZC5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGJhdGNoRmluaXNoZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9KTtcbiAgfTtcblxufSh0aGlzKSk7XG5cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBSb2xlIG9uIHRoZSBQYXJzZSBzZXJ2ZXIuIFJvbGVzIHJlcHJlc2VudCBncm91cGluZ3Mgb2ZcbiAgICogVXNlcnMgZm9yIHRoZSBwdXJwb3NlcyBvZiBncmFudGluZyBwZXJtaXNzaW9ucyAoZS5nLiBzcGVjaWZ5aW5nIGFuIEFDTFxuICAgKiBmb3IgYW4gT2JqZWN0KS4gUm9sZXMgYXJlIHNwZWNpZmllZCBieSB0aGVpciBzZXRzIG9mIGNoaWxkIHVzZXJzIGFuZFxuICAgKiBjaGlsZCByb2xlcywgYWxsIG9mIHdoaWNoIGFyZSBncmFudGVkIGFueSBwZXJtaXNzaW9ucyB0aGF0IHRoZSBwYXJlbnRcbiAgICogcm9sZSBoYXMuXG4gICAqXG4gICAqIDxwPlJvbGVzIG11c3QgaGF2ZSBhIG5hbWUgKHdoaWNoIGNhbm5vdCBiZSBjaGFuZ2VkIGFmdGVyIGNyZWF0aW9uIG9mIHRoZVxuICAgKiByb2xlKSwgYW5kIG11c3Qgc3BlY2lmeSBhbiBBQ0wuPC9wPlxuICAgKiBAY2xhc3NcbiAgICogQSBQYXJzZS5Sb2xlIGlzIGEgbG9jYWwgcmVwcmVzZW50YXRpb24gb2YgYSByb2xlIHBlcnNpc3RlZCB0byB0aGUgUGFyc2VcbiAgICogY2xvdWQuXG4gICAqL1xuICBQYXJzZS5Sb2xlID0gUGFyc2UuT2JqZWN0LmV4dGVuZChcIl9Sb2xlXCIsIC8qKiBAbGVuZHMgUGFyc2UuUm9sZS5wcm90b3R5cGUgKi8ge1xuICAgIC8vIEluc3RhbmNlIE1ldGhvZHNcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IFBhcnNlUm9sZSB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBBQ0wuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIFJvbGUgdG8gY3JlYXRlLlxuICAgICAqIEBwYXJhbSB7UGFyc2UuQUNMfSBhY2wgVGhlIEFDTCBmb3IgdGhpcyByb2xlLiBSb2xlcyBtdXN0IGhhdmUgYW4gQUNMLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihuYW1lLCBhY2wpIHtcbiAgICAgIGlmIChfLmlzU3RyaW5nKG5hbWUpICYmIChhY2wgaW5zdGFuY2VvZiBQYXJzZS5BQ0wpKSB7XG4gICAgICAgIFBhcnNlLk9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBudWxsLCBudWxsKTtcbiAgICAgICAgdGhpcy5zZXROYW1lKG5hbWUpO1xuICAgICAgICB0aGlzLnNldEFDTChhY2wpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUGFyc2UuT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG5hbWUsIGFjbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBuYW1lIG9mIHRoZSByb2xlLiAgWW91IGNhbiBhbHRlcm5hdGl2ZWx5IGNhbGwgcm9sZS5nZXQoXCJuYW1lXCIpXG4gICAgICogXG4gICAgICogQHJldHVybiB7U3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgcm9sZS5cbiAgICAgKi9cbiAgICBnZXROYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldChcIm5hbWVcIik7XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBuYW1lIGZvciBhIHJvbGUuIFRoaXMgdmFsdWUgbXVzdCBiZSBzZXQgYmVmb3JlIHRoZSByb2xlIGhhc1xuICAgICAqIGJlZW4gc2F2ZWQgdG8gdGhlIHNlcnZlciwgYW5kIGNhbm5vdCBiZSBzZXQgb25jZSB0aGUgcm9sZSBoYXMgYmVlblxuICAgICAqIHNhdmVkLlxuICAgICAqIFxuICAgICAqIDxwPlxuICAgICAqICAgQSByb2xlJ3MgbmFtZSBjYW4gb25seSBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCBfLCAtLCBhbmRcbiAgICAgKiAgIHNwYWNlcy5cbiAgICAgKiA8L3A+XG4gICAgICpcbiAgICAgKiA8cD5UaGlzIGlzIGVxdWl2YWxlbnQgdG8gY2FsbGluZyByb2xlLnNldChcIm5hbWVcIiwgbmFtZSk8L3A+XG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHJvbGUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgU3RhbmRhcmQgb3B0aW9ucyBvYmplY3Qgd2l0aCBzdWNjZXNzIGFuZCBlcnJvclxuICAgICAqICAgICBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0TmFtZTogZnVuY3Rpb24obmFtZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KFwibmFtZVwiLCBuYW1lLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIFBhcnNlLlJlbGF0aW9uIGZvciB0aGUgUGFyc2UuVXNlcnMgdGhhdCBhcmUgZGlyZWN0XG4gICAgICogY2hpbGRyZW4gb2YgdGhpcyByb2xlLiBUaGVzZSB1c2VycyBhcmUgZ3JhbnRlZCBhbnkgcHJpdmlsZWdlcyB0aGF0IHRoaXNcbiAgICAgKiByb2xlIGhhcyBiZWVuIGdyYW50ZWQgKGUuZy4gcmVhZCBvciB3cml0ZSBhY2Nlc3MgdGhyb3VnaCBBQ0xzKS4gWW91IGNhblxuICAgICAqIGFkZCBvciByZW1vdmUgdXNlcnMgZnJvbSB0aGUgcm9sZSB0aHJvdWdoIHRoaXMgcmVsYXRpb24uXG4gICAgICogXG4gICAgICogPHA+VGhpcyBpcyBlcXVpdmFsZW50IHRvIGNhbGxpbmcgcm9sZS5yZWxhdGlvbihcInVzZXJzXCIpPC9wPlxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge1BhcnNlLlJlbGF0aW9ufSB0aGUgcmVsYXRpb24gZm9yIHRoZSB1c2VycyBiZWxvbmdpbmcgdG8gdGhpc1xuICAgICAqICAgICByb2xlLlxuICAgICAqL1xuICAgIGdldFVzZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbGF0aW9uKFwidXNlcnNcIik7XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBQYXJzZS5SZWxhdGlvbiBmb3IgdGhlIFBhcnNlLlJvbGVzIHRoYXQgYXJlIGRpcmVjdFxuICAgICAqIGNoaWxkcmVuIG9mIHRoaXMgcm9sZS4gVGhlc2Ugcm9sZXMnIHVzZXJzIGFyZSBncmFudGVkIGFueSBwcml2aWxlZ2VzIHRoYXRcbiAgICAgKiB0aGlzIHJvbGUgaGFzIGJlZW4gZ3JhbnRlZCAoZS5nLiByZWFkIG9yIHdyaXRlIGFjY2VzcyB0aHJvdWdoIEFDTHMpLiBZb3VcbiAgICAgKiBjYW4gYWRkIG9yIHJlbW92ZSBjaGlsZCByb2xlcyBmcm9tIHRoaXMgcm9sZSB0aHJvdWdoIHRoaXMgcmVsYXRpb24uXG4gICAgICogXG4gICAgICogPHA+VGhpcyBpcyBlcXVpdmFsZW50IHRvIGNhbGxpbmcgcm9sZS5yZWxhdGlvbihcInJvbGVzXCIpPC9wPlxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge1BhcnNlLlJlbGF0aW9ufSB0aGUgcmVsYXRpb24gZm9yIHRoZSByb2xlcyBiZWxvbmdpbmcgdG8gdGhpc1xuICAgICAqICAgICByb2xlLlxuICAgICAqL1xuICAgIGdldFJvbGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbGF0aW9uKFwicm9sZXNcIik7XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKGF0dHJzLCBvcHRpb25zKSB7XG4gICAgICBpZiAoXCJuYW1lXCIgaW4gYXR0cnMgJiYgYXR0cnMubmFtZSAhPT0gdGhpcy5nZXROYW1lKCkpIHtcbiAgICAgICAgdmFyIG5ld05hbWUgPSBhdHRycy5uYW1lO1xuICAgICAgICBpZiAodGhpcy5pZCAmJiB0aGlzLmlkICE9PSBhdHRycy5vYmplY3RJZCkge1xuICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgb2JqZWN0SWQgYmVpbmcgc2V0IG1hdGNoZXMgdGhpcy5pZC5cbiAgICAgICAgICAvLyBUaGlzIGhhcHBlbnMgZHVyaW5nIGEgZmV0Y2ggLS0gdGhlIGlkIGlzIHNldCBiZWZvcmUgY2FsbGluZyBmZXRjaC5cbiAgICAgICAgICAvLyBMZXQgdGhlIG5hbWUgYmUgc2V0IGluIHRoaXMgY2FzZS5cbiAgICAgICAgICByZXR1cm4gbmV3IFBhcnNlLkVycm9yKFBhcnNlLkVycm9yLk9USEVSX0NBVVNFLFxuICAgICAgICAgICAgICBcIkEgcm9sZSdzIG5hbWUgY2FuIG9ubHkgYmUgc2V0IGJlZm9yZSBpdCBoYXMgYmVlbiBzYXZlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfLmlzU3RyaW5nKG5ld05hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQYXJzZS5FcnJvcihQYXJzZS5FcnJvci5PVEhFUl9DQVVTRSxcbiAgICAgICAgICAgICAgXCJBIHJvbGUncyBuYW1lIG11c3QgYmUgYSBTdHJpbmcuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKC9eWzAtOWEtekEtWlxcLV8gXSskLykudGVzdChuZXdOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgUGFyc2UuRXJyb3IoUGFyc2UuRXJyb3IuT1RIRVJfQ0FVU0UsXG4gICAgICAgICAgICAgIFwiQSByb2xlJ3MgbmFtZSBjYW4gb25seSBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCBfLFwiICtcbiAgICAgICAgICAgICAgXCIgLSwgYW5kIHNwYWNlcy5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChQYXJzZS5PYmplY3QucHJvdG90eXBlLnZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5PYmplY3QucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwodGhpcywgYXR0cnMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59KHRoaXMpKTtcblxuXG4vKmdsb2JhbCBfOiBmYWxzZSAqL1xuKGZ1bmN0aW9uKHJvb3QpIHtcbiAgcm9vdC5QYXJzZSA9IHJvb3QuUGFyc2UgfHwge307XG4gIHZhciBQYXJzZSA9IHJvb3QuUGFyc2U7XG4gIHZhciBfID0gUGFyc2UuXztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSB3aXRoIHRoZSBnaXZlbiBtb2RlbHMgYW5kIG9wdGlvbnMuICBUeXBpY2FsbHksIHlvdVxuICAgKiB3aWxsIG5vdCBjYWxsIHRoaXMgbWV0aG9kIGRpcmVjdGx5LCBidXQgd2lsbCBpbnN0ZWFkIG1ha2UgYSBzdWJjbGFzcyB1c2luZ1xuICAgKiA8Y29kZT5QYXJzZS5Db2xsZWN0aW9uLmV4dGVuZDwvY29kZT4uXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1vZGVscyBBbiBhcnJheSBvZiBpbnN0YW5jZXMgb2YgPGNvZGU+UGFyc2UuT2JqZWN0PC9jb2RlPi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQW4gb3B0aW9uYWwgb2JqZWN0IHdpdGggQmFja2JvbmUtc3R5bGUgb3B0aW9ucy5cbiAgICogVmFsaWQgb3B0aW9ucyBhcmU6PHVsPlxuICAgKiAgIDxsaT5tb2RlbDogVGhlIFBhcnNlLk9iamVjdCBzdWJjbGFzcyB0aGF0IHRoaXMgY29sbGVjdGlvbiBjb250YWlucy5cbiAgICogICA8bGk+cXVlcnk6IEFuIGluc3RhbmNlIG9mIFBhcnNlLlF1ZXJ5IHRvIHVzZSB3aGVuIGZldGNoaW5nIGl0ZW1zLlxuICAgKiAgIDxsaT5jb21wYXJhdG9yOiBBIHN0cmluZyBwcm9wZXJ0eSBuYW1lIG9yIGZ1bmN0aW9uIHRvIHNvcnQgYnkuXG4gICAqIDwvdWw+XG4gICAqXG4gICAqIEBzZWUgUGFyc2UuQ29sbGVjdGlvbi5leHRlbmRcbiAgICpcbiAgICogQGNsYXNzXG4gICAqXG4gICAqIDxwPlByb3ZpZGVzIGEgc3RhbmRhcmQgY29sbGVjdGlvbiBjbGFzcyBmb3Igb3VyIHNldHMgb2YgbW9kZWxzLCBvcmRlcmVkXG4gICAqIG9yIHVub3JkZXJlZC4gIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlXG4gICAqIDxhIGhyZWY9XCJodHRwOi8vZG9jdW1lbnRjbG91ZC5naXRodWIuY29tL2JhY2tib25lLyNDb2xsZWN0aW9uXCI+QmFja2JvbmVcbiAgICogZG9jdW1lbnRhdGlvbjwvYT4uPC9wPlxuICAgKi9cbiAgUGFyc2UuQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKG1vZGVscywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgIHRoaXMuY29tcGFyYXRvciA9IG9wdGlvbnMuY29tcGFyYXRvcjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubW9kZWwpIHtcbiAgICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5xdWVyeSkge1xuICAgICAgdGhpcy5xdWVyeSA9IG9wdGlvbnMucXVlcnk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKG1vZGVscykge1xuICAgICAgdGhpcy5yZXNldChtb2RlbHMsIHtzaWxlbnQ6IHRydWUsIHBhcnNlOiBvcHRpb25zLnBhcnNlfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERlZmluZSB0aGUgQ29sbGVjdGlvbidzIGluaGVyaXRhYmxlIG1ldGhvZHMuXG4gIF8uZXh0ZW5kKFBhcnNlLkNvbGxlY3Rpb24ucHJvdG90eXBlLCBQYXJzZS5FdmVudHMsXG4gICAgICAvKiogQGxlbmRzIFBhcnNlLkNvbGxlY3Rpb24ucHJvdG90eXBlICovIHtcblxuICAgIC8vIFRoZSBkZWZhdWx0IG1vZGVsIGZvciBhIGNvbGxlY3Rpb24gaXMganVzdCBhIFBhcnNlLk9iamVjdC5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBvdmVycmlkZGVuIGluIG1vc3QgY2FzZXMuXG4gICAgLy8gVE9ETzogdGhpbmsgaGFyZGVyLiB0aGlzIGlzIGxpa2VseSB0byBiZSB3ZWlyZC5cbiAgICBtb2RlbDogUGFyc2UuT2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBpcyBhbiBlbXB0eSBmdW5jdGlvbiBieSBkZWZhdWx0LiBPdmVycmlkZSBpdCB3aXRoIHlvdXIgb3duXG4gICAgICogaW5pdGlhbGl6YXRpb24gbG9naWMuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKXt9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYSBDb2xsZWN0aW9uIGlzIGFuIGFycmF5IG9mIHRoZVxuICAgICAqIG1vZGVscycgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKG1vZGVsKXsgcmV0dXJuIG1vZGVsLnRvSlNPTigpOyB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbW9kZWwsIG9yIGxpc3Qgb2YgbW9kZWxzIHRvIHRoZSBzZXQuIFBhc3MgKipzaWxlbnQqKiB0byBhdm9pZFxuICAgICAqIGZpcmluZyB0aGUgYGFkZGAgZXZlbnQgZm9yIGV2ZXJ5IG5ldyBtb2RlbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGVscyBBbiBhcnJheSBvZiBpbnN0YW5jZXMgb2YgPGNvZGU+UGFyc2UuT2JqZWN0PC9jb2RlPi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9wdGlvbmFsIG9iamVjdCB3aXRoIEJhY2tib25lLXN0eWxlIG9wdGlvbnMuXG4gICAgICogVmFsaWQgb3B0aW9ucyBhcmU6PHVsPlxuICAgICAqICAgPGxpPmF0OiBUaGUgaW5kZXggYXQgd2hpY2ggdG8gYWRkIHRoZSBtb2RlbHMuXG4gICAgICogICA8bGk+c2lsZW50OiBTZXQgdG8gdHJ1ZSB0byBhdm9pZCBmaXJpbmcgdGhlIGBhZGRgIGV2ZW50IGZvciBldmVyeSBuZXdcbiAgICAgKiAgIG1vZGVsLlxuICAgICAqIDwvdWw+XG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbihtb2RlbHMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBpLCBpbmRleCwgbGVuZ3RoLCBtb2RlbCwgY2lkLCBpZCwgY2lkcyA9IHt9LCBpZHMgPSB7fTtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgbW9kZWxzID0gXy5pc0FycmF5KG1vZGVscykgPyBtb2RlbHMuc2xpY2UoKSA6IFttb2RlbHNdO1xuXG4gICAgICAvLyBCZWdpbiBieSB0dXJuaW5nIGJhcmUgb2JqZWN0cyBpbnRvIG1vZGVsIHJlZmVyZW5jZXMsIGFuZCBwcmV2ZW50aW5nXG4gICAgICAvLyBpbnZhbGlkIG1vZGVscyBvciBkdXBsaWNhdGUgbW9kZWxzIGZyb20gYmVpbmcgYWRkZWQuXG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBtb2RlbHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbW9kZWxzW2ldID0gdGhpcy5fcHJlcGFyZU1vZGVsKG1vZGVsc1tpXSwgb3B0aW9ucyk7XG4gICAgICAgIG1vZGVsID0gbW9kZWxzW2ldO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgYWRkIGFuIGludmFsaWQgbW9kZWwgdG8gYSBjb2xsZWN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNpZCA9IG1vZGVsLmNpZDtcbiAgICAgICAgaWYgKGNpZHNbY2lkXSB8fCB0aGlzLl9ieUNpZFtjaWRdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlIGNpZDogY2FuJ3QgYWRkIHRoZSBzYW1lIG1vZGVsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0byBhIGNvbGxlY3Rpb24gdHdpY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtb2RlbC5pZDtcbiAgICAgICAgaWYgKCFQYXJzZS5faXNOdWxsT3JVbmRlZmluZWQoaWQpICYmIChpZHNbaWRdIHx8IHRoaXMuX2J5SWRbaWRdKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZSBpZDogY2FuJ3QgYWRkIHRoZSBzYW1lIG1vZGVsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0byBhIGNvbGxlY3Rpb24gdHdpY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWRzW2lkXSA9IG1vZGVsO1xuICAgICAgICBjaWRzW2NpZF0gPSBtb2RlbDtcbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIHRvIGFkZGVkIG1vZGVscycgZXZlbnRzLCBhbmQgaW5kZXggbW9kZWxzIGZvciBsb29rdXAgYnlcbiAgICAgIC8vIGBpZGAgYW5kIGJ5IGBjaWRgLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIChtb2RlbCA9IG1vZGVsc1tpXSkub24oJ2FsbCcsIHRoaXMuX29uTW9kZWxFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2J5Q2lkW21vZGVsLmNpZF0gPSBtb2RlbDtcbiAgICAgICAgaWYgKG1vZGVsLmlkKSB7XG4gICAgICAgICAgdGhpcy5fYnlJZFttb2RlbC5pZF0gPSBtb2RlbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJbnNlcnQgbW9kZWxzIGludG8gdGhlIGNvbGxlY3Rpb24sIHJlLXNvcnRpbmcgaWYgbmVlZGVkLCBhbmQgdHJpZ2dlcmluZ1xuICAgICAgLy8gYGFkZGAgZXZlbnRzIHVubGVzcyBzaWxlbmNlZC5cbiAgICAgIHRoaXMubGVuZ3RoICs9IGxlbmd0aDtcbiAgICAgIGluZGV4ID0gUGFyc2UuX2lzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuYXQpID8gXG4gICAgICAgICAgdGhpcy5tb2RlbHMubGVuZ3RoIDogb3B0aW9ucy5hdDtcbiAgICAgIHRoaXMubW9kZWxzLnNwbGljZS5hcHBseSh0aGlzLm1vZGVscywgW2luZGV4LCAwXS5jb25jYXQobW9kZWxzKSk7XG4gICAgICBpZiAodGhpcy5jb21wYXJhdG9yKSB7XG4gICAgICAgIHRoaXMuc29ydCh7c2lsZW50OiB0cnVlfSk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB0aGlzLm1vZGVscy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBtb2RlbCA9IHRoaXMubW9kZWxzW2ldO1xuICAgICAgICBpZiAoY2lkc1ttb2RlbC5jaWRdKSB7XG4gICAgICAgICAgb3B0aW9ucy5pbmRleCA9IGk7XG4gICAgICAgICAgbW9kZWwudHJpZ2dlcignYWRkJywgbW9kZWwsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgbW9kZWwsIG9yIGEgbGlzdCBvZiBtb2RlbHMgZnJvbSB0aGUgc2V0LiBQYXNzIHNpbGVudCB0byBhdm9pZFxuICAgICAqIGZpcmluZyB0aGUgPGNvZGU+cmVtb3ZlPC9jb2RlPiBldmVudCBmb3IgZXZlcnkgbW9kZWwgcmVtb3ZlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGVscyBUaGUgbW9kZWwgb3IgbGlzdCBvZiBtb2RlbHMgdG8gcmVtb3ZlIGZyb20gdGhlXG4gICAgICogICBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9wdGlvbmFsIG9iamVjdCB3aXRoIEJhY2tib25lLXN0eWxlIG9wdGlvbnMuXG4gICAgICogVmFsaWQgb3B0aW9ucyBhcmU6IDx1bD5cbiAgICAgKiAgIDxsaT5zaWxlbnQ6IFNldCB0byB0cnVlIHRvIGF2b2lkIGZpcmluZyB0aGUgYHJlbW92ZWAgZXZlbnQuXG4gICAgICogPC91bD5cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uKG1vZGVscywgb3B0aW9ucykge1xuICAgICAgdmFyIGksIGwsIGluZGV4LCBtb2RlbDtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgbW9kZWxzID0gXy5pc0FycmF5KG1vZGVscykgPyBtb2RlbHMuc2xpY2UoKSA6IFttb2RlbHNdO1xuICAgICAgZm9yIChpID0gMCwgbCA9IG1vZGVscy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbW9kZWwgPSB0aGlzLmdldEJ5Q2lkKG1vZGVsc1tpXSkgfHwgdGhpcy5nZXQobW9kZWxzW2ldKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9ieUlkW21vZGVsLmlkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2J5Q2lkW21vZGVsLmNpZF07XG4gICAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mKG1vZGVsKTtcbiAgICAgICAgdGhpcy5tb2RlbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgIG9wdGlvbnMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICBtb2RlbC50cmlnZ2VyKCdyZW1vdmUnLCBtb2RlbCwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVtb3ZlUmVmZXJlbmNlKG1vZGVsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbW9kZWwgZnJvbSB0aGUgc2V0IGJ5IGlkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgUGFyc2Ugb2JqZWN0SWQgaWRlbnRpZnlpbmcgdGhlIFBhcnNlLk9iamVjdCB0b1xuICAgICAqIGZldGNoIGZyb20gdGhpcyBjb2xsZWN0aW9uLlxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHJldHVybiBpZCAmJiB0aGlzLl9ieUlkW2lkLmlkIHx8IGlkXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIG1vZGVsIGZyb20gdGhlIHNldCBieSBjbGllbnQgaWQuXG4gICAgICogQHBhcmFtIHt9IGNpZCBUaGUgQmFja2JvbmUgY29sbGVjdGlvbiBpZCBpZGVudGlmeWluZyB0aGUgUGFyc2UuT2JqZWN0IHRvXG4gICAgICogZmV0Y2ggZnJvbSB0aGlzIGNvbGxlY3Rpb24uXG4gICAgICovXG4gICAgZ2V0QnlDaWQ6IGZ1bmN0aW9uKGNpZCkge1xuICAgICAgcmV0dXJuIGNpZCAmJiB0aGlzLl9ieUNpZFtjaWQuY2lkIHx8IGNpZF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG1vZGVsIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIG1vZGVsIHRvIHJldHVybi5cbiAgICAgKi9cbiAgICBhdDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsc1tpbmRleF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZvcmNlcyB0aGUgY29sbGVjdGlvbiB0byByZS1zb3J0IGl0c2VsZi4gWW91IGRvbid0IG5lZWQgdG8gY2FsbCB0aGlzXG4gICAgICogdW5kZXIgbm9ybWFsIGNpcmN1bXN0YW5jZXMsIGFzIHRoZSBzZXQgd2lsbCBtYWludGFpbiBzb3J0IG9yZGVyIGFzIGVhY2hcbiAgICAgKiBpdGVtIGlzIGFkZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9wdGlvbmFsIG9iamVjdCB3aXRoIEJhY2tib25lLXN0eWxlIG9wdGlvbnMuXG4gICAgICogVmFsaWQgb3B0aW9ucyBhcmU6IDx1bD5cbiAgICAgKiAgIDxsaT5zaWxlbnQ6IFNldCB0byB0cnVlIHRvIGF2b2lkIGZpcmluZyB0aGUgYHJlc2V0YCBldmVudC5cbiAgICAgKiA8L3VsPlxuICAgICAqL1xuICAgIHNvcnQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgaWYgKCF0aGlzLmNvbXBhcmF0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc29ydCBhIHNldCB3aXRob3V0IGEgY29tcGFyYXRvcicpO1xuICAgICAgfVxuICAgICAgdmFyIGJvdW5kQ29tcGFyYXRvciA9IF8uYmluZCh0aGlzLmNvbXBhcmF0b3IsIHRoaXMpO1xuICAgICAgaWYgKHRoaXMuY29tcGFyYXRvci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSB0aGlzLnNvcnRCeShib3VuZENvbXBhcmF0b3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RlbHMuc29ydChib3VuZENvbXBhcmF0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc2V0JywgdGhpcywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGx1Y2tzIGFuIGF0dHJpYnV0ZSBmcm9tIGVhY2ggbW9kZWwgaW4gdGhlIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHIgVGhlIGF0dHJpYnV0ZSB0byByZXR1cm4gZnJvbSBlYWNoIG1vZGVsIGluIHRoZVxuICAgICAqIGNvbGxlY3Rpb24uXG4gICAgICovXG4gICAgcGx1Y2s6IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIHJldHVybiBfLm1hcCh0aGlzLm1vZGVscywgZnVuY3Rpb24obW9kZWwpeyByZXR1cm4gbW9kZWwuZ2V0KGF0dHIpOyB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB5b3UgaGF2ZSBtb3JlIGl0ZW1zIHRoYW4geW91IHdhbnQgdG8gYWRkIG9yIHJlbW92ZSBpbmRpdmlkdWFsbHksXG4gICAgICogeW91IGNhbiByZXNldCB0aGUgZW50aXJlIHNldCB3aXRoIGEgbmV3IGxpc3Qgb2YgbW9kZWxzLCB3aXRob3V0IGZpcmluZ1xuICAgICAqIGFueSBgYWRkYCBvciBgcmVtb3ZlYCBldmVudHMuIEZpcmVzIGByZXNldGAgd2hlbiBmaW5pc2hlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGVscyBUaGUgbW9kZWwgb3IgbGlzdCBvZiBtb2RlbHMgdG8gcmVtb3ZlIGZyb20gdGhlXG4gICAgICogICBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9wdGlvbmFsIG9iamVjdCB3aXRoIEJhY2tib25lLXN0eWxlIG9wdGlvbnMuXG4gICAgICogVmFsaWQgb3B0aW9ucyBhcmU6IDx1bD5cbiAgICAgKiAgIDxsaT5zaWxlbnQ6IFNldCB0byB0cnVlIHRvIGF2b2lkIGZpcmluZyB0aGUgYHJlc2V0YCBldmVudC5cbiAgICAgKiA8L3VsPlxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbihtb2RlbHMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIG1vZGVscyA9IG1vZGVscyB8fCBbXTtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgUGFyc2UuX2FycmF5RWFjaCh0aGlzLm1vZGVscywgZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgICAgc2VsZi5fcmVtb3ZlUmVmZXJlbmNlKG1vZGVsKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgIHRoaXMuYWRkKG1vZGVscywge3NpbGVudDogdHJ1ZSwgcGFyc2U6IG9wdGlvbnMucGFyc2V9KTtcbiAgICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdyZXNldCcsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgdGhlIGRlZmF1bHQgc2V0IG9mIG1vZGVscyBmb3IgdGhpcyBjb2xsZWN0aW9uLCByZXNldHRpbmcgdGhlXG4gICAgICogY29sbGVjdGlvbiB3aGVuIHRoZXkgYXJyaXZlLiBJZiBgYWRkOiB0cnVlYCBpcyBwYXNzZWQsIGFwcGVuZHMgdGhlXG4gICAgICogbW9kZWxzIHRvIHRoZSBjb2xsZWN0aW9uIGluc3RlYWQgb2YgcmVzZXR0aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQW4gb3B0aW9uYWwgb2JqZWN0IHdpdGggQmFja2JvbmUtc3R5bGUgb3B0aW9ucy5cbiAgICAgKiBWYWxpZCBvcHRpb25zIGFyZTo8dWw+XG4gICAgICogICA8bGk+c2lsZW50OiBTZXQgdG8gdHJ1ZSB0byBhdm9pZCBmaXJpbmcgYGFkZGAgb3IgYHJlc2V0YCBldmVudHMgZm9yXG4gICAgICogICBtb2RlbHMgZmV0Y2hlZCBieSB0aGlzIGZldGNoLlxuICAgICAqICAgPGxpPnN1Y2Nlc3M6IEEgQmFja2JvbmUtc3R5bGUgc3VjY2VzcyBjYWxsYmFjay5cbiAgICAgKiAgIDxsaT5lcnJvcjogQW4gQmFja2JvbmUtc3R5bGUgZXJyb3IgY2FsbGJhY2suXG4gICAgICogICA8bGk+dXNlTWFzdGVyS2V5OiBJbiBDbG91ZCBDb2RlIGFuZCBOb2RlIG9ubHksIHVzZXMgdGhlIE1hc3RlciBLZXkgZm9yXG4gICAgICogICAgICAgdGhpcyByZXF1ZXN0LlxuICAgICAqICAgPGxpPnNlc3Npb25Ub2tlbjogQSB2YWxpZCBzZXNzaW9uIHRva2VuLCB1c2VkIGZvciBtYWtpbmcgYSByZXF1ZXN0IG9uXG4gICAgICogICAgICAgYmVoYWxmIG9mIGEgc3BlY2lmaWMgdXNlci5cbiAgICAgKiA8L3VsPlxuICAgICAqL1xuICAgIGZldGNoOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gXy5jbG9uZShvcHRpb25zKSB8fCB7fTtcbiAgICAgIGlmIChvcHRpb25zLnBhcnNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5wYXJzZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IG5ldyBQYXJzZS5RdWVyeSh0aGlzLm1vZGVsKTtcbiAgICAgIHJldHVybiBxdWVyeS5maW5kKHtcbiAgICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgICAgc2Vzc2lvblRva2VuOiBvcHRpb25zLnNlc3Npb25Ub2tlblxuICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmFkZCkge1xuICAgICAgICAgIGNvbGxlY3Rpb24uYWRkKHJlc3VsdHMsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxlY3Rpb24ucmVzZXQocmVzdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICB9KS5fdGhlblJ1bkNhbGxiYWNrcyhvcHRpb25zLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhIG1vZGVsIGluIHRoaXMgY29sbGVjdGlvbi4gQWRkIHRoZSBtb2RlbCB0b1xuICAgICAqIHRoZSBjb2xsZWN0aW9uIGltbWVkaWF0ZWx5LCB1bmxlc3MgYHdhaXQ6IHRydWVgIGlzIHBhc3NlZCwgaW4gd2hpY2ggY2FzZVxuICAgICAqIHdlIHdhaXQgZm9yIHRoZSBzZXJ2ZXIgdG8gYWdyZWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcnNlLk9iamVjdH0gbW9kZWwgVGhlIG5ldyBtb2RlbCB0byBjcmVhdGUgYW5kIGFkZCB0byB0aGVcbiAgICAgKiAgIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQW4gb3B0aW9uYWwgb2JqZWN0IHdpdGggQmFja2JvbmUtc3R5bGUgb3B0aW9ucy5cbiAgICAgKiBWYWxpZCBvcHRpb25zIGFyZTo8dWw+XG4gICAgICogICA8bGk+d2FpdDogU2V0IHRvIHRydWUgdG8gd2FpdCBmb3IgdGhlIHNlcnZlciB0byBjb25maXJtIGNyZWF0aW9uIG9mIHRoZVxuICAgICAqICAgICAgIG1vZGVsIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNvbGxlY3Rpb24uXG4gICAgICogICA8bGk+c2lsZW50OiBTZXQgdG8gdHJ1ZSB0byBhdm9pZCBmaXJpbmcgYW4gYGFkZGAgZXZlbnQuXG4gICAgICogICA8bGk+c3VjY2VzczogQSBCYWNrYm9uZS1zdHlsZSBzdWNjZXNzIGNhbGxiYWNrLlxuICAgICAqICAgPGxpPmVycm9yOiBBbiBCYWNrYm9uZS1zdHlsZSBlcnJvciBjYWxsYmFjay5cbiAgICAgKiAgIDxsaT51c2VNYXN0ZXJLZXk6IEluIENsb3VkIENvZGUgYW5kIE5vZGUgb25seSwgdXNlcyB0aGUgTWFzdGVyIEtleSBmb3JcbiAgICAgKiAgICAgICB0aGlzIHJlcXVlc3QuXG4gICAgICogICA8bGk+c2Vzc2lvblRva2VuOiBBIHZhbGlkIHNlc3Npb24gdG9rZW4sIHVzZWQgZm9yIG1ha2luZyBhIHJlcXVlc3Qgb25cbiAgICAgKiAgICAgICBiZWhhbGYgb2YgYSBzcGVjaWZpYyB1c2VyLlxuICAgICAqIDwvdWw+XG4gICAgICovXG4gICAgY3JlYXRlOiBmdW5jdGlvbihtb2RlbCwgb3B0aW9ucykge1xuICAgICAgdmFyIGNvbGwgPSB0aGlzO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBfLmNsb25lKG9wdGlvbnMpIDoge307XG4gICAgICBtb2RlbCA9IHRoaXMuX3ByZXBhcmVNb2RlbChtb2RlbCwgb3B0aW9ucyk7XG4gICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy53YWl0KSB7XG4gICAgICAgIGNvbGwuYWRkKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHZhciBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xuICAgICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24obmV4dE1vZGVsLCByZXNwLCB4aHIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMud2FpdCkge1xuICAgICAgICAgIGNvbGwuYWRkKG5leHRNb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzKG5leHRNb2RlbCwgcmVzcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dE1vZGVsLnRyaWdnZXIoJ3N5bmMnLCBtb2RlbCwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBtb2RlbC5zYXZlKG51bGwsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHJlc3BvbnNlIGludG8gYSBsaXN0IG9mIG1vZGVscyB0byBiZSBhZGRlZCB0byB0aGUgY29sbGVjdGlvbi5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBpcyBqdXN0IHRvIHBhc3MgaXQgdGhyb3VnaC5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcGFyc2U6IGZ1bmN0aW9uKHJlc3AsIHhocikge1xuICAgICAgcmV0dXJuIHJlc3A7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFByb3h5IHRvIF8ncyBjaGFpbi4gQ2FuJ3QgYmUgcHJveGllZCB0aGUgc2FtZSB3YXkgdGhlIHJlc3Qgb2YgdGhlXG4gICAgICogdW5kZXJzY29yZSBtZXRob2RzIGFyZSBwcm94aWVkIGJlY2F1c2UgaXQgcmVsaWVzIG9uIHRoZSB1bmRlcnNjb3JlXG4gICAgICogY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgY2hhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF8odGhpcy5tb2RlbHMpLmNoYWluKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGFsbCBpbnRlcm5hbCBzdGF0ZS4gQ2FsbGVkIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgcmVzZXQuXG4gICAgICovXG4gICAgX3Jlc2V0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgdGhpcy5fYnlJZCAgPSB7fTtcbiAgICAgIHRoaXMuX2J5Q2lkID0ge307XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgYSBtb2RlbCBvciBoYXNoIG9mIGF0dHJpYnV0ZXMgdG8gYmUgYWRkZWQgdG8gdGhpcyBjb2xsZWN0aW9uLlxuICAgICAqL1xuICAgIF9wcmVwYXJlTW9kZWw6IGZ1bmN0aW9uKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICBpZiAoIShtb2RlbCBpbnN0YW5jZW9mIFBhcnNlLk9iamVjdCkpIHtcbiAgICAgICAgdmFyIGF0dHJzID0gbW9kZWw7XG4gICAgICAgIG9wdGlvbnMuY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICAgIG1vZGVsID0gbmV3IHRoaXMubW9kZWwoYXR0cnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIW1vZGVsLl92YWxpZGF0ZShtb2RlbC5hdHRyaWJ1dGVzLCBvcHRpb25zKSkge1xuICAgICAgICAgIG1vZGVsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIW1vZGVsLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgbW9kZWwuY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB0byByZW1vdmUgYSBtb2RlbCdzIHRpZXMgdG8gYSBjb2xsZWN0aW9uLlxuICAgICAqL1xuICAgIF9yZW1vdmVSZWZlcmVuY2U6IGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICBpZiAodGhpcyA9PT0gbW9kZWwuY29sbGVjdGlvbikge1xuICAgICAgICBkZWxldGUgbW9kZWwuY29sbGVjdGlvbjtcbiAgICAgIH1cbiAgICAgIG1vZGVsLm9mZignYWxsJywgdGhpcy5fb25Nb2RlbEV2ZW50LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIGNhbGxlZCBldmVyeSB0aW1lIGEgbW9kZWwgaW4gdGhlIHNldCBmaXJlcyBhbiBldmVudC5cbiAgICAgKiBTZXRzIG5lZWQgdG8gdXBkYXRlIHRoZWlyIGluZGV4ZXMgd2hlbiBtb2RlbHMgY2hhbmdlIGlkcy4gQWxsIG90aGVyXG4gICAgICogZXZlbnRzIHNpbXBseSBwcm94eSB0aHJvdWdoLiBcImFkZFwiIGFuZCBcInJlbW92ZVwiIGV2ZW50cyB0aGF0IG9yaWdpbmF0ZVxuICAgICAqIGluIG90aGVyIGNvbGxlY3Rpb25zIGFyZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIF9vbk1vZGVsRXZlbnQ6IGZ1bmN0aW9uKGV2LCBtb2RlbCwgY29sbGVjdGlvbiwgb3B0aW9ucykge1xuICAgICAgaWYgKChldiA9PT0gJ2FkZCcgfHwgZXYgPT09ICdyZW1vdmUnKSAmJiBjb2xsZWN0aW9uICE9PSB0aGlzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldiA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlbCAmJiBldiA9PT0gJ2NoYW5nZTpvYmplY3RJZCcpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2J5SWRbbW9kZWwucHJldmlvdXMoXCJvYmplY3RJZFwiKV07XG4gICAgICAgIHRoaXMuX2J5SWRbbW9kZWwuaWRdID0gbW9kZWw7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgLy8gVW5kZXJzY29yZSBtZXRob2RzIHRoYXQgd2Ugd2FudCB0byBpbXBsZW1lbnQgb24gdGhlIENvbGxlY3Rpb24uXG4gIHZhciBtZXRob2RzID0gWydmb3JFYWNoJywgJ2VhY2gnLCAnbWFwJywgJ3JlZHVjZScsICdyZWR1Y2VSaWdodCcsICdmaW5kJyxcbiAgICAnZGV0ZWN0JywgJ2ZpbHRlcicsICdzZWxlY3QnLCAncmVqZWN0JywgJ2V2ZXJ5JywgJ2FsbCcsICdzb21lJywgJ2FueScsXG4gICAgJ2luY2x1ZGUnLCAnY29udGFpbnMnLCAnaW52b2tlJywgJ21heCcsICdtaW4nLCAnc29ydEJ5JywgJ3NvcnRlZEluZGV4JyxcbiAgICAndG9BcnJheScsICdzaXplJywgJ2ZpcnN0JywgJ2luaXRpYWwnLCAncmVzdCcsICdsYXN0JywgJ3dpdGhvdXQnLCAnaW5kZXhPZicsXG4gICAgJ3NodWZmbGUnLCAnbGFzdEluZGV4T2YnLCAnaXNFbXB0eScsICdncm91cEJ5J107XG5cbiAgLy8gTWl4IGluIGVhY2ggVW5kZXJzY29yZSBtZXRob2QgYXMgYSBwcm94eSB0byBgQ29sbGVjdGlvbiNtb2RlbHNgLlxuICBQYXJzZS5fYXJyYXlFYWNoKG1ldGhvZHMsIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIFBhcnNlLkNvbGxlY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfW21ldGhvZF0uYXBwbHkoXywgW3RoaXMubW9kZWxzXS5jb25jYXQoXy50b0FycmF5KGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICB9KTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBzdWJjbGFzcyBvZiA8Y29kZT5QYXJzZS5Db2xsZWN0aW9uPC9jb2RlPi4gIEZvciBleGFtcGxlLDxwcmU+XG4gICAqICAgdmFyIE15Q29sbGVjdGlvbiA9IFBhcnNlLkNvbGxlY3Rpb24uZXh0ZW5kKHtcbiAgICogICAgIC8vIEluc3RhbmNlIHByb3BlcnRpZXNcbiAgICpcbiAgICogICAgIG1vZGVsOiBNeUNsYXNzLFxuICAgKiAgICAgcXVlcnk6IE15UXVlcnksXG4gICAqXG4gICAqICAgICBnZXRGaXJzdDogZnVuY3Rpb24oKSB7XG4gICAqICAgICAgIHJldHVybiB0aGlzLmF0KDApO1xuICAgKiAgICAgfVxuICAgKiAgIH0sIHtcbiAgICogICAgIC8vIENsYXNzIHByb3BlcnRpZXNcbiAgICpcbiAgICogICAgIG1ha2VPbmU6IGZ1bmN0aW9uKCkge1xuICAgKiAgICAgICByZXR1cm4gbmV3IE15Q29sbGVjdGlvbigpO1xuICAgKiAgICAgfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiAgIHZhciBjb2xsZWN0aW9uID0gbmV3IE15Q29sbGVjdGlvbigpO1xuICAgKiA8L3ByZT5cbiAgICpcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVByb3BzIEluc3RhbmNlIHByb3BlcnRpZXMgZm9yIHRoZSBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2xhc3NQcm9wcyBDbGFzcyBwcm9wZXJpZXMgZm9yIHRoZSBjb2xsZWN0aW9uLlxuICAgKiBAcmV0dXJuIHtDbGFzc30gQSBuZXcgc3ViY2xhc3Mgb2YgPGNvZGU+UGFyc2UuQ29sbGVjdGlvbjwvY29kZT4uXG4gICAqL1xuICBQYXJzZS5Db2xsZWN0aW9uLmV4dGVuZCA9IFBhcnNlLl9leHRlbmQ7XG5cbn0odGhpcykpO1xuXG4vKmdsb2JhbCBfOiBmYWxzZSwgZG9jdW1lbnQ6IGZhbHNlICovXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgdmFyIF8gPSBQYXJzZS5fO1xuXG4gIC8qKlxuICAgKiBDcmVhdGluZyBhIFBhcnNlLlZpZXcgY3JlYXRlcyBpdHMgaW5pdGlhbCBlbGVtZW50IG91dHNpZGUgb2YgdGhlIERPTSxcbiAgICogaWYgYW4gZXhpc3RpbmcgZWxlbWVudCBpcyBub3QgcHJvdmlkZWQuLi5cbiAgICogQGNsYXNzXG4gICAqXG4gICAqIDxwPkEgZm9yayBvZiBCYWNrYm9uZS5WaWV3LCBwcm92aWRlZCBmb3IgeW91ciBjb252ZW5pZW5jZS4gIElmIHlvdSB1c2UgdGhpc1xuICAgKiBjbGFzcywgeW91IG11c3QgYWxzbyBpbmNsdWRlIGpRdWVyeSwgb3IgYW5vdGhlciBsaWJyYXJ5IHRoYXQgcHJvdmlkZXMgYVxuICAgKiBqUXVlcnktY29tcGF0aWJsZSAkIGZ1bmN0aW9uLiAgRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGVcbiAgICogPGEgaHJlZj1cImh0dHA6Ly9kb2N1bWVudGNsb3VkLmdpdGh1Yi5jb20vYmFja2JvbmUvI1ZpZXdcIj5CYWNrYm9uZVxuICAgKiBkb2N1bWVudGF0aW9uPC9hPi48L3A+XG4gICAqIDxwPjxzdHJvbmc+PGVtPkF2YWlsYWJsZSBpbiB0aGUgY2xpZW50IFNESyBvbmx5LjwvZW0+PC9zdHJvbmc+PC9wPlxuICAgKi9cbiAgUGFyc2UuVmlldyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNpZCA9IF8udW5pcXVlSWQoJ3ZpZXcnKTtcbiAgICB0aGlzLl9jb25maWd1cmUob3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5fZW5zdXJlRWxlbWVudCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZGVsZWdhdGVFdmVudHMoKTtcbiAgfTtcblxuICAvLyBDYWNoZWQgcmVnZXggdG8gc3BsaXQga2V5cyBmb3IgYGRlbGVnYXRlYC5cbiAgdmFyIGV2ZW50U3BsaXR0ZXIgPSAvXihcXFMrKVxccyooLiopJC87XG5cbiAgLy8gTGlzdCBvZiB2aWV3IG9wdGlvbnMgdG8gYmUgbWVyZ2VkIGFzIHByb3BlcnRpZXMuXG4gIC8vIFRPRE86IGluY2x1ZGUgb2JqZWN0SWQsIGNyZWF0ZWRBdCwgdXBkYXRlZEF0P1xuICB2YXIgdmlld09wdGlvbnMgPSBbJ21vZGVsJywgJ2NvbGxlY3Rpb24nLCAnZWwnLCAnaWQnLCAnYXR0cmlidXRlcycsXG4gICAgICAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJywgJ3RhZ05hbWUnXTtcblxuICAvLyBTZXQgdXAgYWxsIGluaGVyaXRhYmxlICoqUGFyc2UuVmlldyoqIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gIF8uZXh0ZW5kKFBhcnNlLlZpZXcucHJvdG90eXBlLCBQYXJzZS5FdmVudHMsXG4gICAgICAgICAgIC8qKiBAbGVuZHMgUGFyc2UuVmlldy5wcm90b3R5cGUgKi8ge1xuXG4gICAgLy8gVGhlIGRlZmF1bHQgYHRhZ05hbWVgIG9mIGEgVmlldydzIGVsZW1lbnQgaXMgYFwiZGl2XCJgLlxuICAgIHRhZ05hbWU6ICdkaXYnLFxuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IGRlbGVnYXRlIGZvciBlbGVtZW50IGxvb2t1cCwgc2NvcGVkIHRvIERPTSBlbGVtZW50cyB3aXRoaW4gdGhlXG4gICAgICogY3VycmVudCB2aWV3LiBUaGlzIHNob3VsZCBiZSBwcmVmZXJlZCB0byBnbG9iYWwgbG9va3VwcyB3aGVyZSBwb3NzaWJsZS5cbiAgICAgKi9cbiAgICAkOiBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMuJGVsLmZpbmQoc2VsZWN0b3IpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGlzIGFuIGVtcHR5IGZ1bmN0aW9uIGJ5IGRlZmF1bHQuIE92ZXJyaWRlIGl0IHdpdGggeW91ciBvd25cbiAgICAgKiBpbml0aWFsaXphdGlvbiBsb2dpYy5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpe30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29yZSBmdW5jdGlvbiB0aGF0IHlvdXIgdmlldyBzaG91bGQgb3ZlcnJpZGUsIGluIG9yZGVyXG4gICAgICogdG8gcG9wdWxhdGUgaXRzIGVsZW1lbnQgKGB0aGlzLmVsYCksIHdpdGggdGhlIGFwcHJvcHJpYXRlIEhUTUwuIFRoZVxuICAgICAqIGNvbnZlbnRpb24gaXMgZm9yICoqcmVuZGVyKiogdG8gYWx3YXlzIHJldHVybiBgdGhpc2AuXG4gICAgICovXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhpcyB2aWV3IGZyb20gdGhlIERPTS4gTm90ZSB0aGF0IHRoZSB2aWV3IGlzbid0IHByZXNlbnQgaW4gdGhlXG4gICAgICogRE9NIGJ5IGRlZmF1bHQsIHNvIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IGJlIGEgbm8tb3AuXG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGVsLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZvciBzbWFsbCBhbW91bnRzIG9mIERPTSBFbGVtZW50cywgd2hlcmUgYSBmdWxsLWJsb3duIHRlbXBsYXRlIGlzbid0XG4gICAgICogbmVlZGVkLCB1c2UgKiptYWtlKiogdG8gbWFudWZhY3R1cmUgZWxlbWVudHMsIG9uZSBhdCBhIHRpbWUuXG4gICAgICogPHByZT5cbiAgICAgKiAgICAgdmFyIGVsID0gdGhpcy5tYWtlKCdsaScsIHsnY2xhc3MnOiAncm93J30sXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmVzY2FwZSgndGl0bGUnKSk7PC9wcmU+XG4gICAgICovXG4gICAgbWFrZTogZnVuY3Rpb24odGFnTmFtZSwgYXR0cmlidXRlcywgY29udGVudCkge1xuICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIFBhcnNlLiQoZWwpLmF0dHIoYXR0cmlidXRlcyk7XG4gICAgICB9XG4gICAgICBpZiAoY29udGVudCkge1xuICAgICAgICBQYXJzZS4kKGVsKS5odG1sKGNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSB2aWV3J3MgZWxlbWVudCAoYHRoaXMuZWxgIHByb3BlcnR5KSwgaW5jbHVkaW5nIGV2ZW50XG4gICAgICogcmUtZGVsZWdhdGlvbi5cbiAgICAgKi9cbiAgICBzZXRFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBkZWxlZ2F0ZSkge1xuICAgICAgdGhpcy4kZWwgPSBQYXJzZS4kKGVsZW1lbnQpO1xuICAgICAgdGhpcy5lbCA9IHRoaXMuJGVsWzBdO1xuICAgICAgaWYgKGRlbGVnYXRlICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlRXZlbnRzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrcy4gIDxjb2RlPnRoaXMuZXZlbnRzPC9jb2RlPiBpcyBhIGhhc2ggb2ZcbiAgICAgKiA8cHJlPlxuICAgICAqICp7XCJldmVudCBzZWxlY3RvclwiOiBcImNhbGxiYWNrXCJ9KlxuICAgICAqXG4gICAgICogICAgIHtcbiAgICAgKiAgICAgICAnbW91c2Vkb3duIC50aXRsZSc6ICAnZWRpdCcsXG4gICAgICogICAgICAgJ2NsaWNrIC5idXR0b24nOiAgICAgJ3NhdmUnXG4gICAgICogICAgICAgJ2NsaWNrIC5vcGVuJzogICAgICAgZnVuY3Rpb24oZSkgeyAuLi4gfVxuICAgICAqICAgICB9XG4gICAgICogPC9wcmU+XG4gICAgICogcGFpcnMuIENhbGxiYWNrcyB3aWxsIGJlIGJvdW5kIHRvIHRoZSB2aWV3LCB3aXRoIGB0aGlzYCBzZXQgcHJvcGVybHkuXG4gICAgICogVXNlcyBldmVudCBkZWxlZ2F0aW9uIGZvciBlZmZpY2llbmN5LlxuICAgICAqIE9taXR0aW5nIHRoZSBzZWxlY3RvciBiaW5kcyB0aGUgZXZlbnQgdG8gYHRoaXMuZWxgLlxuICAgICAqIFRoaXMgb25seSB3b3JrcyBmb3IgZGVsZWdhdGUtYWJsZSBldmVudHM6IG5vdCBgZm9jdXNgLCBgYmx1cmAsIGFuZFxuICAgICAqIG5vdCBgY2hhbmdlYCwgYHN1Ym1pdGAsIGFuZCBgcmVzZXRgIGluIEludGVybmV0IEV4cGxvcmVyLlxuICAgICAqL1xuICAgIGRlbGVnYXRlRXZlbnRzOiBmdW5jdGlvbihldmVudHMpIHtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cyB8fCBQYXJzZS5fZ2V0VmFsdWUodGhpcywgJ2V2ZW50cycpO1xuICAgICAgaWYgKCFldmVudHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBQYXJzZS5fb2JqZWN0RWFjaChldmVudHMsIGZ1bmN0aW9uKG1ldGhvZCwga2V5KSB7XG4gICAgICAgIGlmICghXy5pc0Z1bmN0aW9uKG1ldGhvZCkpIHtcbiAgICAgICAgICBtZXRob2QgPSBzZWxmW2V2ZW50c1trZXldXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXZlbnQgXCInICsgZXZlbnRzW2tleV0gKyAnXCIgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF0Y2ggPSBrZXkubWF0Y2goZXZlbnRTcGxpdHRlcik7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBtYXRjaFsxXSwgc2VsZWN0b3IgPSBtYXRjaFsyXTtcbiAgICAgICAgbWV0aG9kID0gXy5iaW5kKG1ldGhvZCwgc2VsZik7XG4gICAgICAgIGV2ZW50TmFtZSArPSAnLmRlbGVnYXRlRXZlbnRzJyArIHNlbGYuY2lkO1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICcnKSB7XG4gICAgICAgICAgc2VsZi4kZWwuYmluZChldmVudE5hbWUsIG1ldGhvZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi4kZWwuZGVsZWdhdGUoc2VsZWN0b3IsIGV2ZW50TmFtZSwgbWV0aG9kKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY2FsbGJhY2tzIHByZXZpb3VzbHkgYm91bmQgdG8gdGhlIHZpZXcgd2l0aCBgZGVsZWdhdGVFdmVudHNgLlxuICAgICAqIFlvdSB1c3VhbGx5IGRvbid0IG5lZWQgdG8gdXNlIHRoaXMsIGJ1dCBtYXkgd2lzaCB0byBpZiB5b3UgaGF2ZSBtdWx0aXBsZVxuICAgICAqIEJhY2tib25lIHZpZXdzIGF0dGFjaGVkIHRvIHRoZSBzYW1lIERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIHVuZGVsZWdhdGVFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kZWwudW5iaW5kKCcuZGVsZWdhdGVFdmVudHMnICsgdGhpcy5jaWQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyB0aGUgaW5pdGlhbCBjb25maWd1cmF0aW9uIG9mIGEgVmlldyB3aXRoIGEgc2V0IG9mIG9wdGlvbnMuXG4gICAgICogS2V5cyB3aXRoIHNwZWNpYWwgbWVhbmluZyAqKG1vZGVsLCBjb2xsZWN0aW9uLCBpZCwgY2xhc3NOYW1lKSosIGFyZVxuICAgICAqIGF0dGFjaGVkIGRpcmVjdGx5IHRvIHRoZSB2aWV3LlxuICAgICAqL1xuICAgIF9jb25maWd1cmU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgXy5lYWNoKHZpZXdPcHRpb25zLCBmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIGlmIChvcHRpb25zW2F0dHJdKSB7XG4gICAgICAgICAgc2VsZlthdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoYXQgdGhlIFZpZXcgaGFzIGEgRE9NIGVsZW1lbnQgdG8gcmVuZGVyIGludG8uXG4gICAgICogSWYgYHRoaXMuZWxgIGlzIGEgc3RyaW5nLCBwYXNzIGl0IHRocm91Z2ggYCQoKWAsIHRha2UgdGhlIGZpcnN0XG4gICAgICogbWF0Y2hpbmcgZWxlbWVudCwgYW5kIHJlLWFzc2lnbiBpdCB0byBgZWxgLiBPdGhlcndpc2UsIGNyZWF0ZVxuICAgICAqIGFuIGVsZW1lbnQgZnJvbSB0aGUgYGlkYCwgYGNsYXNzTmFtZWAgYW5kIGB0YWdOYW1lYCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIF9lbnN1cmVFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBQYXJzZS5fZ2V0VmFsdWUodGhpcywgJ2F0dHJpYnV0ZXMnKSB8fCB7fTtcbiAgICAgICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgICAgICBhdHRycy5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgYXR0cnNbJ2NsYXNzJ10gPSB0aGlzLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEVsZW1lbnQodGhpcy5tYWtlKHRoaXMudGFnTmFtZSwgYXR0cnMpLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnQodGhpcy5lbCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZVByb3BzIEluc3RhbmNlIHByb3BlcnRpZXMgZm9yIHRoZSB2aWV3LlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2xhc3NQcm9wcyBDbGFzcyBwcm9wZXJpZXMgZm9yIHRoZSB2aWV3LlxuICAgKiBAcmV0dXJuIHtDbGFzc30gQSBuZXcgc3ViY2xhc3Mgb2YgPGNvZGU+UGFyc2UuVmlldzwvY29kZT4uXG4gICAqL1xuICBQYXJzZS5WaWV3LmV4dGVuZCA9IFBhcnNlLl9leHRlbmQ7XG5cbn0odGhpcykpO1xuXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgdmFyIF8gPSBQYXJzZS5fO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICogPHA+QSBQYXJzZS5Vc2VyIG9iamVjdCBpcyBhIGxvY2FsIHJlcHJlc2VudGF0aW9uIG9mIGEgdXNlciBwZXJzaXN0ZWQgdG8gdGhlXG4gICAqIFBhcnNlIGNsb3VkLiBUaGlzIGNsYXNzIGlzIGEgc3ViY2xhc3Mgb2YgYSBQYXJzZS5PYmplY3QsIGFuZCByZXRhaW5zIHRoZVxuICAgKiBzYW1lIGZ1bmN0aW9uYWxpdHkgb2YgYSBQYXJzZS5PYmplY3QsIGJ1dCBhbHNvIGV4dGVuZHMgaXQgd2l0aCB2YXJpb3VzXG4gICAqIHVzZXIgc3BlY2lmaWMgbWV0aG9kcywgbGlrZSBhdXRoZW50aWNhdGlvbiwgc2lnbmluZyB1cCwgYW5kIHZhbGlkYXRpb24gb2ZcbiAgICogdW5pcXVlbmVzcy48L3A+XG4gICAqL1xuICBQYXJzZS5Vc2VyID0gUGFyc2UuT2JqZWN0LmV4dGVuZChcIl9Vc2VyXCIsIC8qKiBAbGVuZHMgUGFyc2UuVXNlci5wcm90b3R5cGUgKi8ge1xuICAgIC8vIEluc3RhbmNlIFZhcmlhYmxlc1xuICAgIF9pc0N1cnJlbnRVc2VyOiBmYWxzZSxcblxuXG4gICAgLy8gSW5zdGFuY2UgTWV0aG9kc1xuICAgIFxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbm90aGVyIG9iamVjdCdzIGF0dHJpYnV0ZXMgaW50byB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBfbWVyZ2VGcm9tT2JqZWN0OiBmdW5jdGlvbihvdGhlcikge1xuICAgICAgaWYgKG90aGVyLmdldFNlc3Npb25Ub2tlbigpKSB7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25Ub2tlbiA9IG90aGVyLmdldFNlc3Npb25Ub2tlbigpOyAgICAgIFxuICAgICAgfSAgICBcbiAgICAgIFBhcnNlLlVzZXIuX19zdXBlcl9fLl9tZXJnZUZyb21PYmplY3QuY2FsbCh0aGlzLCBvdGhlcik7XG4gICAgfSwgICAgXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdG8gaGFuZGxlIHNwZWNpYWwgZmllbGRzIGluIGEgX1VzZXIgcmVzcG9uc2UuXG4gICAgICovXG4gICAgX21lcmdlTWFnaWNGaWVsZHM6IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25Ub2tlbiA9IGF0dHJzLnNlc3Npb25Ub2tlbjtcbiAgICAgICAgZGVsZXRlIGF0dHJzLnNlc3Npb25Ub2tlbjtcbiAgICAgIH1cbiAgICAgIFBhcnNlLlVzZXIuX19zdXBlcl9fLl9tZXJnZU1hZ2ljRmllbGRzLmNhbGwodGhpcywgYXR0cnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIG51bGwgdmFsdWVzIGZyb20gYXV0aERhdGEgKHdoaWNoIGV4aXN0IHRlbXBvcmFyaWx5IGZvclxuICAgICAqIHVubGlua2luZylcbiAgICAgKi9cbiAgICBfY2xlYW51cEF1dGhEYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5pc0N1cnJlbnQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYXV0aERhdGEgPSB0aGlzLmdldCgnYXV0aERhdGEnKTtcbiAgICAgIGlmICghYXV0aERhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgUGFyc2UuX29iamVjdEVhY2godGhpcy5nZXQoJ2F1dGhEYXRhJyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKCFhdXRoRGF0YVtrZXldKSB7XG4gICAgICAgICAgZGVsZXRlIGF1dGhEYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZXMgYXV0aERhdGEgZm9yIGFsbCBwcm92aWRlcnMuXG4gICAgICovXG4gICAgX3N5bmNocm9uaXplQWxsQXV0aERhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGF1dGhEYXRhID0gdGhpcy5nZXQoJ2F1dGhEYXRhJyk7XG4gICAgICBpZiAoIWF1dGhEYXRhKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgUGFyc2UuX29iamVjdEVhY2godGhpcy5nZXQoJ2F1dGhEYXRhJyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgc2VsZi5fc3luY2hyb25pemVBdXRoRGF0YShrZXkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplcyBhdXRoIGRhdGEgZm9yIGEgcHJvdmlkZXIgKGUuZy4gcHV0cyB0aGUgYWNjZXNzIHRva2VuIGluIHRoZVxuICAgICAqIHJpZ2h0IHBsYWNlIHRvIGJlIHVzZWQgYnkgdGhlIEZhY2Vib29rIFNESykuXG4gICAgICovXG4gICAgX3N5bmNocm9uaXplQXV0aERhdGE6IGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgICBpZiAoIXRoaXMuaXNDdXJyZW50KCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGF1dGhUeXBlO1xuICAgICAgaWYgKF8uaXNTdHJpbmcocHJvdmlkZXIpKSB7XG4gICAgICAgIGF1dGhUeXBlID0gcHJvdmlkZXI7XG4gICAgICAgIHByb3ZpZGVyID0gUGFyc2UuVXNlci5fYXV0aFByb3ZpZGVyc1thdXRoVHlwZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdXRoVHlwZSA9IHByb3ZpZGVyLmdldEF1dGhUeXBlKCk7XG4gICAgICB9XG4gICAgICB2YXIgYXV0aERhdGEgPSB0aGlzLmdldCgnYXV0aERhdGEnKTtcbiAgICAgIGlmICghYXV0aERhdGEgfHwgIXByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdWNjZXNzID0gcHJvdmlkZXIucmVzdG9yZUF1dGhlbnRpY2F0aW9uKGF1dGhEYXRhW2F1dGhUeXBlXSk7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5fdW5saW5rRnJvbShwcm92aWRlcik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9oYW5kbGVTYXZlUmVzdWx0OiBmdW5jdGlvbihtYWtlQ3VycmVudCkge1xuICAgICAgLy8gQ2xlYW4gdXAgYW5kIHN5bmNocm9uaXplIHRoZSBhdXRoRGF0YSBvYmplY3QsIHJlbW92aW5nIGFueSB1bnNldCB2YWx1ZXNcbiAgICAgIGlmIChtYWtlQ3VycmVudCkge1xuICAgICAgICB0aGlzLl9pc0N1cnJlbnRVc2VyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsZWFudXBBdXRoRGF0YSgpO1xuICAgICAgdGhpcy5fc3luY2hyb25pemVBbGxBdXRoRGF0YSgpO1xuICAgICAgLy8gRG9uJ3Qga2VlcCB0aGUgcGFzc3dvcmQgYXJvdW5kLlxuICAgICAgZGVsZXRlIHRoaXMuX3NlcnZlckRhdGEucGFzc3dvcmQ7XG4gICAgICB0aGlzLl9yZWJ1aWxkRXN0aW1hdGVkRGF0YUZvcktleShcInBhc3N3b3JkXCIpO1xuICAgICAgdGhpcy5fcmVmcmVzaENhY2hlKCk7XG4gICAgICBpZiAobWFrZUN1cnJlbnQgfHwgdGhpcy5pc0N1cnJlbnQoKSkge1xuICAgICAgICBQYXJzZS5Vc2VyLl9zYXZlQ3VycmVudFVzZXIodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubGlrZSBpbiB0aGUgQW5kcm9pZC9pT1MgU0RLcywgbG9nSW5XaXRoIGlzIHVubmVjZXNzYXJ5LCBzaW5jZSB5b3UgY2FuXG4gICAgICogY2FsbCBsaW5rV2l0aCBvbiB0aGUgdXNlciAoZXZlbiBpZiBpdCBkb2Vzbid0IGV4aXN0IHlldCBvbiB0aGUgc2VydmVyKS5cbiAgICAgKi9cbiAgICBfbGlua1dpdGg6IGZ1bmN0aW9uKHByb3ZpZGVyLCBvcHRpb25zKSB7XG4gICAgICB2YXIgYXV0aFR5cGU7XG4gICAgICBpZiAoXy5pc1N0cmluZyhwcm92aWRlcikpIHtcbiAgICAgICAgYXV0aFR5cGUgPSBwcm92aWRlcjtcbiAgICAgICAgcHJvdmlkZXIgPSBQYXJzZS5Vc2VyLl9hdXRoUHJvdmlkZXJzW3Byb3ZpZGVyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhUeXBlID0gcHJvdmlkZXIuZ2V0QXV0aFR5cGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLmhhcyhvcHRpb25zLCAnYXV0aERhdGEnKSkge1xuICAgICAgICB2YXIgYXV0aERhdGEgPSB0aGlzLmdldCgnYXV0aERhdGEnKSB8fCB7fTtcbiAgICAgICAgYXV0aERhdGFbYXV0aFR5cGVdID0gb3B0aW9ucy5hdXRoRGF0YTtcbiAgICAgICAgdGhpcy5zZXQoJ2F1dGhEYXRhJywgYXV0aERhdGEpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRkZW4gc28gdGhhdCB0aGUgdXNlciBjYW4gYmUgbWFkZSB0aGUgY3VycmVudCB1c2VyLlxuICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IF8uY2xvbmUob3B0aW9ucykgfHwge307XG4gICAgICAgIG5ld09wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICAgICAgbW9kZWwuX2hhbmRsZVNhdmVSZXN1bHQodHJ1ZSk7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5zYXZlKHsnYXV0aERhdGEnOiBhdXRoRGF0YX0sIG5ld09wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQYXJzZS5Qcm9taXNlKCk7XG4gICAgICAgIHByb3ZpZGVyLmF1dGhlbnRpY2F0ZSh7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocHJvdmlkZXIsIHJlc3VsdCkge1xuICAgICAgICAgICAgc2VsZi5fbGlua1dpdGgocHJvdmlkZXIsIHtcbiAgICAgICAgICAgICAgYXV0aERhdGE6IHJlc3VsdCxcbiAgICAgICAgICAgICAgc3VjY2Vzczogb3B0aW9ucy5zdWNjZXNzLFxuICAgICAgICAgICAgICBlcnJvcjogb3B0aW9ucy5lcnJvclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHNlbGYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocHJvdmlkZXIsIGVycm9yKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgICAgICBvcHRpb25zLmVycm9yKHNlbGYsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5saW5rcyBhIHVzZXIgZnJvbSBhIHNlcnZpY2UuXG4gICAgICovXG4gICAgX3VubGlua0Zyb206IGZ1bmN0aW9uKHByb3ZpZGVyLCBvcHRpb25zKSB7XG4gICAgICB2YXIgYXV0aFR5cGU7XG4gICAgICBpZiAoXy5pc1N0cmluZyhwcm92aWRlcikpIHtcbiAgICAgICAgYXV0aFR5cGUgPSBwcm92aWRlcjtcbiAgICAgICAgcHJvdmlkZXIgPSBQYXJzZS5Vc2VyLl9hdXRoUHJvdmlkZXJzW3Byb3ZpZGVyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhUeXBlID0gcHJvdmlkZXIuZ2V0QXV0aFR5cGUoKTtcbiAgICAgIH1cbiAgICAgIHZhciBuZXdPcHRpb25zID0gXy5jbG9uZShvcHRpb25zKTtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIG5ld09wdGlvbnMuYXV0aERhdGEgPSBudWxsO1xuICAgICAgbmV3T3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgICAgc2VsZi5fc3luY2hyb25pemVBdXRoRGF0YShwcm92aWRlcik7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzLl9saW5rV2l0aChwcm92aWRlciwgbmV3T3B0aW9ucyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIGEgdXNlciBpcyBsaW5rZWQgdG8gYSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIF9pc0xpbmtlZDogZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICAgIHZhciBhdXRoVHlwZTtcbiAgICAgIGlmIChfLmlzU3RyaW5nKHByb3ZpZGVyKSkge1xuICAgICAgICBhdXRoVHlwZSA9IHByb3ZpZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXV0aFR5cGUgPSBwcm92aWRlci5nZXRBdXRoVHlwZSgpO1xuICAgICAgfVxuICAgICAgdmFyIGF1dGhEYXRhID0gdGhpcy5nZXQoJ2F1dGhEYXRhJykgfHwge307XG4gICAgICByZXR1cm4gISFhdXRoRGF0YVthdXRoVHlwZV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlYXV0aGVudGljYXRlcyBhbGwgcHJvdmlkZXJzLlxuICAgICAqL1xuICAgIF9sb2dPdXRXaXRoQWxsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhdXRoRGF0YSA9IHRoaXMuZ2V0KCdhdXRoRGF0YScpO1xuICAgICAgaWYgKCFhdXRoRGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBQYXJzZS5fb2JqZWN0RWFjaCh0aGlzLmdldCgnYXV0aERhdGEnKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICBzZWxmLl9sb2dPdXRXaXRoKGtleSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVhdXRoZW50aWNhdGVzIGEgc2luZ2xlIHByb3ZpZGVyIChlLmcuIHJlbW92aW5nIGFjY2VzcyB0b2tlbnMgZnJvbSB0aGVcbiAgICAgKiBGYWNlYm9vayBTREspLlxuICAgICAqL1xuICAgIF9sb2dPdXRXaXRoOiBmdW5jdGlvbihwcm92aWRlcikge1xuICAgICAgaWYgKCF0aGlzLmlzQ3VycmVudCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChfLmlzU3RyaW5nKHByb3ZpZGVyKSkge1xuICAgICAgICBwcm92aWRlciA9IFBhcnNlLlVzZXIuX2F1dGhQcm92aWRlcnNbcHJvdmlkZXJdO1xuICAgICAgfVxuICAgICAgaWYgKHByb3ZpZGVyICYmIHByb3ZpZGVyLmRlYXV0aGVudGljYXRlKSB7XG4gICAgICAgIHByb3ZpZGVyLmRlYXV0aGVudGljYXRlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNpZ25zIHVwIGEgbmV3IHVzZXIuIFlvdSBzaG91bGQgY2FsbCB0aGlzIGluc3RlYWQgb2Ygc2F2ZSBmb3JcbiAgICAgKiBuZXcgUGFyc2UuVXNlcnMuIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgUGFyc2UuVXNlciBvbiB0aGUgc2VydmVyLCBhbmRcbiAgICAgKiBhbHNvIHBlcnNpc3QgdGhlIHNlc3Npb24gb24gZGlzayBzbyB0aGF0IHlvdSBjYW4gYWNjZXNzIHRoZSB1c2VyIHVzaW5nXG4gICAgICogPGNvZGU+Y3VycmVudDwvY29kZT4uXG4gICAgICpcbiAgICAgKiA8cD5BIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBtdXN0IGJlIHNldCBiZWZvcmUgY2FsbGluZyBzaWduVXAuPC9wPlxuICAgICAqXG4gICAgICogPHA+Q2FsbHMgb3B0aW9ucy5zdWNjZXNzIG9yIG9wdGlvbnMuZXJyb3Igb24gY29tcGxldGlvbi48L3A+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgRXh0cmEgZmllbGRzIHRvIHNldCBvbiB0aGUgbmV3IHVzZXIsIG9yIG51bGwuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBCYWNrYm9uZS1zdHlsZSBvcHRpb25zIG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGUgc2lnbnVwXG4gICAgICogICAgIGZpbmlzaGVzLlxuICAgICAqIEBzZWUgUGFyc2UuVXNlci5zaWduVXBcbiAgICAgKi9cbiAgICBzaWduVXA6IGZ1bmN0aW9uKGF0dHJzLCBvcHRpb25zKSB7XG4gICAgICB2YXIgZXJyb3I7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgdmFyIHVzZXJuYW1lID0gKGF0dHJzICYmIGF0dHJzLnVzZXJuYW1lKSB8fCB0aGlzLmdldChcInVzZXJuYW1lXCIpO1xuICAgICAgaWYgKCF1c2VybmFtZSB8fCAodXNlcm5hbWUgPT09IFwiXCIpKSB7XG4gICAgICAgIGVycm9yID0gbmV3IFBhcnNlLkVycm9yKFxuICAgICAgICAgICAgUGFyc2UuRXJyb3IuT1RIRVJfQ0FVU0UsXG4gICAgICAgICAgICBcIkNhbm5vdCBzaWduIHVwIHVzZXIgd2l0aCBhbiBlbXB0eSBuYW1lLlwiKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IodGhpcywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhc3N3b3JkID0gKGF0dHJzICYmIGF0dHJzLnBhc3N3b3JkKSB8fCB0aGlzLmdldChcInBhc3N3b3JkXCIpO1xuICAgICAgaWYgKCFwYXNzd29yZCB8fCAocGFzc3dvcmQgPT09IFwiXCIpKSB7XG4gICAgICAgIGVycm9yID0gbmV3IFBhcnNlLkVycm9yKFxuICAgICAgICAgICAgUGFyc2UuRXJyb3IuT1RIRVJfQ0FVU0UsXG4gICAgICAgICAgICBcIkNhbm5vdCBzaWduIHVwIHVzZXIgd2l0aCBhbiBlbXB0eSBwYXNzd29yZC5cIik7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICBvcHRpb25zLmVycm9yKHRoaXMsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJyaWRkZW4gc28gdGhhdCB0aGUgdXNlciBjYW4gYmUgbWFkZSB0aGUgY3VycmVudCB1c2VyLlxuICAgICAgdmFyIG5ld09wdGlvbnMgPSBfLmNsb25lKG9wdGlvbnMpO1xuICAgICAgbmV3T3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgICAgbW9kZWwuX2hhbmRsZVNhdmVSZXN1bHQoUGFyc2UuVXNlci5fY2FuVXNlQ3VycmVudFVzZXIoKSk7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzLnNhdmUoYXR0cnMsIG5ld09wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGluIGEgUGFyc2UuVXNlci4gT24gc3VjY2VzcywgdGhpcyBzYXZlcyB0aGUgc2Vzc2lvbiB0byBsb2NhbFN0b3JhZ2UsXG4gICAgICogc28geW91IGNhbiByZXRyaWV2ZSB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyIHVzaW5nXG4gICAgICogPGNvZGU+Y3VycmVudDwvY29kZT4uXG4gICAgICpcbiAgICAgKiA8cD5BIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBtdXN0IGJlIHNldCBiZWZvcmUgY2FsbGluZyBsb2dJbi48L3A+XG4gICAgICpcbiAgICAgKiA8cD5DYWxscyBvcHRpb25zLnN1Y2Nlc3Mgb3Igb3B0aW9ucy5lcnJvciBvbiBjb21wbGV0aW9uLjwvcD5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHNlZSBQYXJzZS5Vc2VyLmxvZ0luXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIHVzZXIgd2hlblxuICAgICAqICAgICB0aGUgbG9naW4gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgbG9nSW46IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmICghUGFyc2UuVXNlci5fY2FuVXNlQ3VycmVudFVzZXIoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0l0IGlzIG5vdCBwb3NzaWJsZSB0byBsb2cgaW4gb24gYSBzZXJ2ZXIgZW52aXJvbm1lbnQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgdmFyIHJlcXVlc3QgPSBQYXJzZS5fcmVxdWVzdCh7XG4gICAgICAgIHJvdXRlOiBcImxvZ2luXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgICAgZGF0YTogdGhpcy50b0pTT04oKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVxdWVzdC50aGVuKGZ1bmN0aW9uKHJlc3AsIHN0YXR1cywgeGhyKSB7XG4gICAgICAgIHZhciBzZXJ2ZXJBdHRycyA9IG1vZGVsLnBhcnNlKHJlc3AsIHN0YXR1cywgeGhyKTtcbiAgICAgICAgbW9kZWwuX2ZpbmlzaEZldGNoKHNlcnZlckF0dHJzKTtcbiAgICAgICAgbW9kZWwuX2hhbmRsZVNhdmVSZXN1bHQodHJ1ZSk7XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMsIHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAc2VlIFBhcnNlLk9iamVjdCNzYXZlXG4gICAgICovXG4gICAgc2F2ZTogZnVuY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgdmFyIGksIGF0dHJzLCBjdXJyZW50LCBvcHRpb25zLCBzYXZlZDtcbiAgICAgIGlmIChfLmlzT2JqZWN0KGFyZzEpIHx8IF8uaXNOdWxsKGFyZzEpIHx8IF8uaXNVbmRlZmluZWQoYXJnMSkpIHtcbiAgICAgICAgYXR0cnMgPSBhcmcxO1xuICAgICAgICBvcHRpb25zID0gYXJnMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHJzID0ge307XG4gICAgICAgIGF0dHJzW2FyZzFdID0gYXJnMjtcbiAgICAgICAgb3B0aW9ucyA9IGFyZzM7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgdmFyIG5ld09wdGlvbnMgPSBfLmNsb25lKG9wdGlvbnMpO1xuICAgICAgbmV3T3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgICAgbW9kZWwuX2hhbmRsZVNhdmVSZXN1bHQoZmFsc2UpO1xuICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gUGFyc2UuT2JqZWN0LnByb3RvdHlwZS5zYXZlLmNhbGwodGhpcywgYXR0cnMsIG5ld09wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAc2VlIFBhcnNlLk9iamVjdCNmZXRjaFxuICAgICAqL1xuICAgIGZldGNoOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgbmV3T3B0aW9ucyA9IG9wdGlvbnMgPyBfLmNsb25lKG9wdGlvbnMpIDoge307XG4gICAgICBuZXdPcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihtb2RlbCkge1xuICAgICAgICBtb2RlbC5faGFuZGxlU2F2ZVJlc3VsdChmYWxzZSk7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFBhcnNlLk9iamVjdC5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBuZXdPcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIDxjb2RlPmN1cnJlbnQ8L2NvZGU+IHdvdWxkIHJldHVybiB0aGlzIHVzZXIuXG4gICAgICogQHNlZSBQYXJzZS5Vc2VyI2N1cnJlbnRcbiAgICAgKi9cbiAgICBpc0N1cnJlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VycmVudFVzZXI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgZ2V0KFwidXNlcm5hbWVcIikuXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBzZWUgUGFyc2UuT2JqZWN0I2dldFxuICAgICAqL1xuICAgIGdldFVzZXJuYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldChcInVzZXJuYW1lXCIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBzZXQoXCJ1c2VybmFtZVwiLCB1c2VybmFtZSwgb3B0aW9ucykgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlcm5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEJhY2tib25lLXN0eWxlIG9wdGlvbnMgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQHNlZSBQYXJzZS5PYmplY3Quc2V0XG4gICAgICovXG4gICAgc2V0VXNlcm5hbWU6IGZ1bmN0aW9uKHVzZXJuYW1lLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoXCJ1c2VybmFtZVwiLCB1c2VybmFtZSwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGxzIHNldChcInBhc3N3b3JkXCIsIHBhc3N3b3JkLCBvcHRpb25zKSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzd29yZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAc2VlIFBhcnNlLk9iamVjdC5zZXRcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZDogZnVuY3Rpb24ocGFzc3dvcmQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChcInBhc3N3b3JkXCIsIHBhc3N3b3JkLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBnZXQoXCJlbWFpbFwiKS5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQHNlZSBQYXJzZS5PYmplY3QjZ2V0XG4gICAgICovXG4gICAgZ2V0RW1haWw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiZW1haWxcIik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGxzIHNldChcImVtYWlsXCIsIGVtYWlsLCBvcHRpb25zKSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbWFpbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAc2VlIFBhcnNlLk9iamVjdC5zZXRcbiAgICAgKi9cbiAgICBzZXRFbWFpbDogZnVuY3Rpb24oZW1haWwsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChcImVtYWlsXCIsIGVtYWlsLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhpcyB1c2VyIGlzIHRoZSBjdXJyZW50IHVzZXIgYW5kIGhhcyBiZWVuIGF1dGhlbnRpY2F0ZWQuXG4gICAgICogQHJldHVybiAoQm9vbGVhbikgd2hldGhlciB0aGlzIHVzZXIgaXMgdGhlIGN1cnJlbnQgdXNlciBhbmQgaXMgbG9nZ2VkIGluLlxuICAgICAqL1xuICAgIGF1dGhlbnRpY2F0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5fc2Vzc2lvblRva2VuICYmXG4gICAgICAgICAgKFBhcnNlLlVzZXIuY3VycmVudCgpICYmIFBhcnNlLlVzZXIuY3VycmVudCgpLmlkID09PSB0aGlzLmlkKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2Vzc2lvbiB0b2tlbiBmb3IgdGhpcyB1c2VyLCBpZiB0aGUgdXNlciBoYXMgYmVlbiBsb2dnZWQgaW4sXG4gICAgICogb3IgaWYgaXQgaXMgdGhlIHJlc3VsdCBvZiBhIHF1ZXJ5IHdpdGggdGhlIG1hc3RlciBrZXkuIE90aGVyd2lzZSwgcmV0dXJuc1xuICAgICAqIHVuZGVmaW5lZC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBzZXNzaW9uIHRva2VuLCBvciB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBnZXRTZXNzaW9uVG9rZW46IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25Ub2tlbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHJldm9jYWJsZSBzZXNzaW9uIHRva2VuIHRvIHJlcGxhY2UgdGhlIG9sZGVyIHN0eWxlIG9mIHRva2VuLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSByZXBsYWNlbWVudFxuICAgICAqICAgdG9rZW4gaGFzIGJlZW4gZmV0Y2hlZC5cbiAgICAgKi9cbiAgICBfdXBncmFkZVRvUmV2b2NhYmxlU2Vzc2lvbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBpZiAoIVBhcnNlLlVzZXIuY3VycmVudCgpKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzKCkuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICB2YXIgY3VycmVudFNlc3Npb24gPSBQYXJzZS5Vc2VyLmN1cnJlbnQoKS5nZXRTZXNzaW9uVG9rZW4oKTtcbiAgICAgIGlmIChQYXJzZS5TZXNzaW9uLl9pc1Jldm9jYWJsZShjdXJyZW50U2Vzc2lvbikpIHtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMoKS5fdGhlblJ1bkNhbGxiYWNrcyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQYXJzZS5fcmVxdWVzdCh7XG4gICAgICAgIHJvdXRlOiAndXBncmFkZVRvUmV2b2NhYmxlU2Vzc2lvbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1c2VNYXN0ZXJLZXk6IG9wdGlvbnMudXNlTWFzdGVyS2V5LFxuICAgICAgICBzZXNzaW9uVG9rZW46IGN1cnJlbnRTZXNzaW9uXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICB2YXIgc2Vzc2lvbiA9IG5ldyBQYXJzZS5TZXNzaW9uKCk7XG4gICAgICAgIHNlc3Npb24uX2ZpbmlzaEZldGNoKHJlc3VsdCk7XG4gICAgICAgIHZhciBjdXJyZW50VXNlciA9IFBhcnNlLlVzZXIuY3VycmVudCgpO1xuICAgICAgICBjdXJyZW50VXNlci5fc2Vzc2lvblRva2VuID0gc2Vzc2lvbi5nZXRTZXNzaW9uVG9rZW4oKTtcbiAgICAgICAgUGFyc2UuVXNlci5fc2F2ZUN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKTtcbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgfSwgLyoqIEBsZW5kcyBQYXJzZS5Vc2VyICovIHtcbiAgICAvLyBDbGFzcyBWYXJpYWJsZXNcblxuICAgIC8vIFRoZSBjdXJyZW50bHkgbG9nZ2VkLWluIHVzZXIuXG4gICAgX2N1cnJlbnRVc2VyOiBudWxsLFxuXG4gICAgLy8gV2hldGhlciBjdXJyZW50VXNlciBpcyBrbm93biB0byBtYXRjaCB0aGUgc2VyaWFsaXplZCB2ZXJzaW9uIG9uIGRpc2suXG4gICAgLy8gVGhpcyBpcyB1c2VmdWwgZm9yIHNhdmluZyBhIGxvY2Fsc3RvcmFnZSBjaGVjayBpZiB5b3UgdHJ5IHRvIGxvYWRcbiAgICAvLyBfY3VycmVudFVzZXIgZnJlcXVlbnRseSB3aGlsZSB0aGVyZSBpcyBub25lIHN0b3JlZC5cbiAgICBfY3VycmVudFVzZXJNYXRjaGVzRGlzazogZmFsc2UsXG5cbiAgICAvLyBUaGUgbG9jYWxTdG9yYWdlIGtleSBzdWZmaXggdGhhdCB0aGUgY3VycmVudCB1c2VyIGlzIHN0b3JlZCB1bmRlci5cbiAgICBfQ1VSUkVOVF9VU0VSX0tFWTogXCJjdXJyZW50VXNlclwiLFxuXG4gICAgLy8gVGhlIG1hcHBpbmcgb2YgYXV0aCBwcm92aWRlciBuYW1lcyB0byBhY3R1YWwgcHJvdmlkZXJzXG4gICAgX2F1dGhQcm92aWRlcnM6IHt9LFxuXG4gICAgLy8gV2hldGhlciB0byByZXdyaXRlIGNsYXNzTmFtZSBVc2VyIHRvIF9Vc2VyXG4gICAgX3BlcmZvcm1Vc2VyUmV3cml0ZTogdHJ1ZSxcblxuICAgIC8vIFdoZXRoZXIgdG8gc2VuZCBhIFJldm9jYWJsZSBTZXNzaW9uIGhlYWRlclxuICAgIF9pc1Jldm9jYWJsZVNlc3Npb25FbmFibGVkOiBmYWxzZSxcblxuICAgIC8vIFdoZXRoZXIgdG8gZW5hYmxlIGEgbWVtb3J5LXVuc2FmZSBjdXJyZW50IHVzZXIgaW4gbm9kZS5qc1xuICAgIF9lbmFibGVVbnNhZmVDdXJyZW50VXNlcjogZmFsc2UsXG5cblxuICAgIC8vIENsYXNzIE1ldGhvZHNcblxuICAgIC8qKlxuICAgICAqIFNpZ25zIHVwIGEgbmV3IHVzZXIgd2l0aCBhIHVzZXJuYW1lIChvciBlbWFpbCkgYW5kIHBhc3N3b3JkLlxuICAgICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgUGFyc2UuVXNlciBvbiB0aGUgc2VydmVyLCBhbmQgYWxzbyBwZXJzaXN0IHRoZVxuICAgICAqIHNlc3Npb24gaW4gbG9jYWxTdG9yYWdlIHNvIHRoYXQgeW91IGNhbiBhY2Nlc3MgdGhlIHVzZXIgdXNpbmdcbiAgICAgKiB7QGxpbmsgI2N1cnJlbnR9LlxuICAgICAqXG4gICAgICogPHA+Q2FsbHMgb3B0aW9ucy5zdWNjZXNzIG9yIG9wdGlvbnMuZXJyb3Igb24gY29tcGxldGlvbi48L3A+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIChvciBlbWFpbCkgdG8gc2lnbiB1cCB3aXRoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQgdG8gc2lnbiB1cCB3aXRoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyBFeHRyYSBmaWVsZHMgdG8gc2V0IG9uIHRoZSBuZXcgdXNlci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEJhY2tib25lLXN0eWxlIG9wdGlvbnMgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIHRoZSB1c2VyIHdoZW5cbiAgICAgKiAgICAgdGhlIHNpZ251cCBjb21wbGV0ZXMuXG4gICAgICogQHNlZSBQYXJzZS5Vc2VyI3NpZ25VcFxuICAgICAqL1xuICAgIHNpZ25VcDogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBhdHRycywgb3B0aW9ucykge1xuICAgICAgYXR0cnMgPSBhdHRycyB8fCB7fTtcbiAgICAgIGF0dHJzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICBhdHRycy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgdmFyIHVzZXIgPSBQYXJzZS5PYmplY3QuX2NyZWF0ZShcIl9Vc2VyXCIpO1xuICAgICAgcmV0dXJuIHVzZXIuc2lnblVwKGF0dHJzLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9ncyBpbiBhIHVzZXIgd2l0aCBhIHVzZXJuYW1lIChvciBlbWFpbCkgYW5kIHBhc3N3b3JkLiBPbiBzdWNjZXNzLCB0aGlzXG4gICAgICogc2F2ZXMgdGhlIHNlc3Npb24gdG8gZGlzaywgc28geW91IGNhbiByZXRyaWV2ZSB0aGUgY3VycmVudGx5IGxvZ2dlZCBpblxuICAgICAqIHVzZXIgdXNpbmcgPGNvZGU+Y3VycmVudDwvY29kZT4uXG4gICAgICpcbiAgICAgKiA8cD5DYWxscyBvcHRpb25zLnN1Y2Nlc3Mgb3Igb3B0aW9ucy5lcnJvciBvbiBjb21wbGV0aW9uLjwvcD5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUgKG9yIGVtYWlsKSB0byBsb2cgaW4gd2l0aC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkIHRvIGxvZyBpbiB3aXRoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIHVzZXIgd2hlblxuICAgICAqICAgICB0aGUgbG9naW4gY29tcGxldGVzLlxuICAgICAqIEBzZWUgUGFyc2UuVXNlciNsb2dJblxuICAgICAqL1xuICAgIGxvZ0luOiBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciB1c2VyID0gUGFyc2UuT2JqZWN0Ll9jcmVhdGUoXCJfVXNlclwiKTtcbiAgICAgIHVzZXIuX2ZpbmlzaEZldGNoKHsgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSk7XG4gICAgICByZXR1cm4gdXNlci5sb2dJbihvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9ncyBpbiBhIHVzZXIgd2l0aCBhIHNlc3Npb24gdG9rZW4uIE9uIHN1Y2Nlc3MsIHRoaXMgc2F2ZXMgdGhlIHNlc3Npb25cbiAgICAgKiB0byBkaXNrLCBzbyB5b3UgY2FuIHJldHJpZXZlIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIgdXNpbmdcbiAgICAgKiA8Y29kZT5jdXJyZW50PC9jb2RlPi5cbiAgICAgKlxuICAgICAqIDxwPkNhbGxzIG9wdGlvbnMuc3VjY2VzcyBvciBvcHRpb25zLmVycm9yIG9uIGNvbXBsZXRpb24uPC9wPlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlc3Npb25Ub2tlbiBUaGUgc2Vzc2lvblRva2VuIHRvIGxvZyBpbiB3aXRoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggdGhlIHVzZXIgd2hlblxuICAgICAqICAgICB0aGUgbG9naW4gY29tcGxldGVzLlxuICAgICAqL1xuICAgIGJlY29tZTogZnVuY3Rpb24oc2Vzc2lvblRva2VuLCBvcHRpb25zKSB7XG4gICAgICBpZiAoIVBhcnNlLlVzZXIuX2NhblVzZUN1cnJlbnRVc2VyKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdJdCBpcyBub3Qgc2VjdXJlIHRvIGJlY29tZSBhIHVzZXIgb24gYSBub2RlLmpzIHNlcnZlciBlbnZpcm9ubWVudC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgdmFyIHVzZXIgPSBQYXJzZS5PYmplY3QuX2NyZWF0ZShcIl9Vc2VyXCIpO1xuICAgICAgcmV0dXJuIFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgcm91dGU6IFwidXNlcnNcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIm1lXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgICAgc2Vzc2lvblRva2VuOiBzZXNzaW9uVG9rZW5cbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgdmFyIHNlcnZlckF0dHJzID0gdXNlci5wYXJzZShyZXNwLCBzdGF0dXMsIHhocik7XG4gICAgICAgIHVzZXIuX2ZpbmlzaEZldGNoKHNlcnZlckF0dHJzKTtcbiAgICAgICAgdXNlci5faGFuZGxlU2F2ZVJlc3VsdCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG5cbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMsIHVzZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2dzIG91dCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyIHNlc3Npb24uIFRoaXMgd2lsbCByZW1vdmUgdGhlXG4gICAgICogc2Vzc2lvbiBmcm9tIGRpc2ssIGxvZyBvdXQgb2YgbGlua2VkIHNlcnZpY2VzLCBhbmQgZnV0dXJlIGNhbGxzIHRvXG4gICAgICogPGNvZGU+Y3VycmVudDwvY29kZT4gd2lsbCByZXR1cm4gPGNvZGU+bnVsbDwvY29kZT4uXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgc2Vzc2lvbiBpc1xuICAgICAqICAgZGVzdHJveWVkIG9uIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgbG9nT3V0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghUGFyc2UuVXNlci5fY2FuVXNlQ3VycmVudFVzZXIoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1RoZXJlIGlzIG5vIGN1cnJlbnQgdXNlciB1c2VyIG9uIGEgbm9kZS5qcyBzZXJ2ZXIgZW52aXJvbm1lbnQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFBhcnNlLlVzZXIuX2N1cnJlbnRBc3luYygpLnRoZW4oZnVuY3Rpb24oY3VycmVudFVzZXIpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBQYXJzZS5TdG9yYWdlLnJlbW92ZUl0ZW1Bc3luYyhcbiAgICAgICAgICBQYXJzZS5fZ2V0UGFyc2VQYXRoKFBhcnNlLlVzZXIuX0NVUlJFTlRfVVNFUl9LRVkpKTtcblxuICAgICAgICBpZiAoY3VycmVudFVzZXIgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgY3VycmVudFNlc3Npb24gPSBjdXJyZW50VXNlci5nZXRTZXNzaW9uVG9rZW4oKTtcbiAgICAgICAgICBpZiAoUGFyc2UuU2Vzc2lvbi5faXNSZXZvY2FibGUoY3VycmVudFNlc3Npb24pKSB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBQYXJzZS5fcmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgcm91dGU6ICdsb2dvdXQnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbjogY3VycmVudFNlc3Npb25cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFVzZXIuX2xvZ091dFdpdGhBbGwoKTtcbiAgICAgICAgICBjdXJyZW50VXNlci5faXNDdXJyZW50VXNlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyTWF0Y2hlc0Rpc2sgPSB0cnVlO1xuICAgICAgICBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlciA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYSBwYXNzd29yZCByZXNldCBlbWFpbCB0byBiZSBzZW50IHRvIHRoZSBzcGVjaWZpZWQgZW1haWwgYWRkcmVzc1xuICAgICAqIGFzc29jaWF0ZWQgd2l0aCB0aGUgdXNlciBhY2NvdW50LiBUaGlzIGVtYWlsIGFsbG93cyB0aGUgdXNlciB0byBzZWN1cmVseVxuICAgICAqIHJlc2V0IHRoZWlyIHBhc3N3b3JkIG9uIHRoZSBQYXJzZSBzaXRlLlxuICAgICAqXG4gICAgICogPHA+Q2FsbHMgb3B0aW9ucy5zdWNjZXNzIG9yIG9wdGlvbnMuZXJyb3Igb24gY29tcGxldGlvbi48L3A+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW1haWwgVGhlIGVtYWlsIGFkZHJlc3MgYXNzb2NpYXRlZCB3aXRoIHRoZSB1c2VyIHRoYXRcbiAgICAgKiAgICAgZm9yZ290IHRoZWlyIHBhc3N3b3JkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICovXG4gICAgcmVxdWVzdFBhc3N3b3JkUmVzZXQ6IGZ1bmN0aW9uKGVtYWlsLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHZhciByZXF1ZXN0ID0gUGFyc2UuX3JlcXVlc3Qoe1xuICAgICAgICByb3V0ZTogXCJyZXF1ZXN0UGFzc3dvcmRSZXNldFwiLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB1c2VNYXN0ZXJLZXk6IG9wdGlvbnMudXNlTWFzdGVyS2V5LFxuICAgICAgICBkYXRhOiB7IGVtYWlsOiBlbWFpbCB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXF1ZXN0Ll90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gUGFyc2VVc2VyIHdpdGggYSB2YWxpZCBzZXNzaW9uLFxuICAgICAqIGVpdGhlciBmcm9tIG1lbW9yeSBvciBsb2NhbFN0b3JhZ2UsIGlmIG5lY2Vzc2FyeS5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5PYmplY3R9IFRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIFBhcnNlLlVzZXIuXG4gICAgICovXG4gICAgY3VycmVudDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIVBhcnNlLlVzZXIuX2NhblVzZUN1cnJlbnRVc2VyKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdUaGVyZSBpcyBubyBjdXJyZW50IHVzZXIgdXNlciBvbiBhIG5vZGUuanMgc2VydmVyIGVudmlyb25tZW50LidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChQYXJzZS5TdG9yYWdlLmFzeW5jKSB7XG4gICAgICAgIC8vIFdlIGNhbid0IHJldHVybiB0aGUgY3VycmVudCB1c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgUGFyc2UuVXNlci5fY3VycmVudEFzeW5jKCk7XG4gICAgICAgIHJldHVybiBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyTWF0Y2hlc0Rpc2spIHtcbiAgICAgICAgLy8gVE9ETzogTGF6aWx5IGxvZyBpbiBhbm9ueW1vdXMgdXNlci5cbiAgICAgICAgcmV0dXJuIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyO1xuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIHRoZSB1c2VyIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyTWF0Y2hlc0Rpc2sgPSB0cnVlO1xuXG4gICAgICB2YXIgdXNlckRhdGEgPSBQYXJzZS5TdG9yYWdlLmdldEl0ZW0oUGFyc2UuX2dldFBhcnNlUGF0aChcbiAgICAgICAgICBQYXJzZS5Vc2VyLl9DVVJSRU5UX1VTRVJfS0VZKSk7XG4gICAgICBpZiAoIXVzZXJEYXRhKSB7XG4gICAgICAgIC8vIFRPRE86IExhemlseSBsb2cgaW4gYW5vbnltb3VzIHVzZXIuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgUGFyc2UuVXNlci5fY3VycmVudFVzZXIgPSBQYXJzZS5PYmplY3QuX2NyZWF0ZShcIl9Vc2VyXCIpO1xuICAgICAgUGFyc2UuVXNlci5fY3VycmVudFVzZXIuX2lzQ3VycmVudFVzZXIgPSB0cnVlO1xuXG4gICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UodXNlckRhdGEpO1xuICAgICAgUGFyc2UuVXNlci5fY3VycmVudFVzZXIuaWQgPSBqc29uLl9pZDtcbiAgICAgIGRlbGV0ZSBqc29uLl9pZDtcbiAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyLl9zZXNzaW9uVG9rZW4gPSBqc29uLl9zZXNzaW9uVG9rZW47XG4gICAgICBkZWxldGUganNvbi5fc2Vzc2lvblRva2VuO1xuICAgICAgUGFyc2UuVXNlci5fY3VycmVudFVzZXIuX2ZpbmlzaEZldGNoKGpzb24pO1xuXG4gICAgICBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlci5fc3luY2hyb25pemVBbGxBdXRoRGF0YSgpO1xuICAgICAgUGFyc2UuVXNlci5fY3VycmVudFVzZXIuX3JlZnJlc2hDYWNoZSgpO1xuICAgICAgUGFyc2UuVXNlci5fY3VycmVudFVzZXIuX29wU2V0UXVldWUgPSBbe31dO1xuICAgICAgcmV0dXJuIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gUGFyc2VVc2VyIGZyb20gYXN5bmNocm9ub3VzIFN0b3JhZ2UuXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgY3VycmVudGx5XG4gICAgICogICBsb2dnZWQgaW4gUGFyc2UgVXNlclxuICAgICAqL1xuICAgIF9jdXJyZW50QXN5bmM6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzKFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyTWF0Y2hlc0Rpc2spIHtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuYXMoUGFyc2UuVXNlci5fY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIHRoZSB1c2VyIGZyb20gU3RvcmFnZVxuICAgICAgcmV0dXJuIFBhcnNlLlN0b3JhZ2UuZ2V0SXRlbUFzeW5jKFBhcnNlLl9nZXRQYXJzZVBhdGgoXG4gICAgICAgIFBhcnNlLlVzZXIuX0NVUlJFTlRfVVNFUl9LRVkpKS50aGVuKGZ1bmN0aW9uKHVzZXJEYXRhKSB7XG4gICAgICAgIGlmICghdXNlckRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlciA9IFBhcnNlLk9iamVjdC5fY3JlYXRlKFwiX1VzZXJcIik7XG4gICAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyLl9pc0N1cnJlbnRVc2VyID0gdHJ1ZTtcblxuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UodXNlckRhdGEpO1xuICAgICAgICBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlci5pZCA9IGpzb24uX2lkO1xuICAgICAgICBkZWxldGUganNvbi5faWQ7XG4gICAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyLl9zZXNzaW9uVG9rZW4gPSBqc29uLl9zZXNzaW9uVG9rZW47XG4gICAgICAgIGRlbGV0ZSBqc29uLl9zZXNzaW9uVG9rZW47XG4gICAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyLl9maW5pc2hGZXRjaChqc29uKTtcblxuICAgICAgICBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlci5fc3luY2hyb25pemVBbGxBdXRoRGF0YSgpO1xuICAgICAgICBQYXJzZS5Vc2VyLl9jdXJyZW50VXNlci5fcmVmcmVzaENhY2hlKCk7XG4gICAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyLl9vcFNldFF1ZXVlID0gW3t9XTtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFsbG93IHNvbWVvbmUgdG8gZGVmaW5lIGEgY3VzdG9tIFVzZXIgY2xhc3Mgd2l0aG91dCBjbGFzc05hbWVcbiAgICAgKiBiZWluZyByZXdyaXR0ZW4gdG8gX1VzZXIuIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJld3JpdGVcbiAgICAgKiBVc2VyIHRvIF9Vc2VyIGZvciBsZWdhY3kgcmVhc29ucy4gVGhpcyBhbGxvd3MgZGV2ZWxvcGVycyB0b1xuICAgICAqIG92ZXJyaWRlIHRoYXQgYmVoYXZpb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzQWxsb3dlZCBXaGV0aGVyIG9yIG5vdCB0byBhbGxvdyBjdXN0b20gVXNlciBjbGFzc1xuICAgICAqL1xuICAgIGFsbG93Q3VzdG9tVXNlckNsYXNzOiBmdW5jdGlvbihpc0FsbG93ZWQpIHtcbiAgICAgIHRoaXMuX3BlcmZvcm1Vc2VyUmV3cml0ZSA9ICFpc0FsbG93ZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFsbG93IGEgbGVnYWN5IGFwcGxpY2F0aW9uIHRvIHN0YXJ0IHVzaW5nIHJldm9jYWJsZSBzZXNzaW9ucy4gSWYgdGhlXG4gICAgICogY3VycmVudCBzZXNzaW9uIHRva2VuIGlzIG5vdCByZXZvY2FibGUsIGEgcmVxdWVzdCB3aWxsIGJlIG1hZGUgZm9yIGEgbmV3LFxuICAgICAqIHJldm9jYWJsZSBzZXNzaW9uLlxuICAgICAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBmcm9tIGNsb3VkIGNvZGUgdW5sZXNzIHlvdSBhcmVcbiAgICAgKiBoYW5kbGluZyB1c2VyIHNpZ251cCBvciBsb2dpbiBmcm9tIHRoZSBzZXJ2ZXIgc2lkZS4gSW4gYSBjbG91ZCBjb2RlIGNhbGwsXG4gICAgICogdGhpcyBmdW5jdGlvbiB3aWxsIG5vdCBhdHRlbXB0IHRvIHVwZ3JhZGUgdGhlIGN1cnJlbnQgdG9rZW4uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBCYWNrYm9uZS1zdHlsZSBvcHRpb25zIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IEEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIHByb2Nlc3MgaGFzXG4gICAgICogICBjb21wbGV0ZWQuIElmIGEgcmVwbGFjZW1lbnQgc2Vzc2lvbiB0b2tlbiBpcyByZXF1ZXN0ZWQsIHRoZSBwcm9taXNlXG4gICAgICogICB3aWxsIGJlIHJlc29sdmVkIGFmdGVyIGEgbmV3IHRva2VuIGhhcyBiZWVuIGZldGNoZWQuXG4gICAgICovXG4gICAgZW5hYmxlUmV2b2NhYmxlU2Vzc2lvbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBQYXJzZS5Vc2VyLl9pc1Jldm9jYWJsZVNlc3Npb25FbmFibGVkID0gdHJ1ZTtcbiAgICAgIGlmIChQYXJzZS5Vc2VyLl9jYW5Vc2VDdXJyZW50VXNlcigpICYmIFBhcnNlLlVzZXIuY3VycmVudCgpKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Vc2VyLmN1cnJlbnQoKS5fdXBncmFkZVRvUmV2b2NhYmxlU2Vzc2lvbihvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQYXJzZS5Qcm9taXNlLmFzKCkuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZW5hYmxlVW5zYWZlQ3VycmVudFVzZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgUGFyc2UuVXNlci5fZW5hYmxlVW5zYWZlQ3VycmVudFVzZXIgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBfY2FuVXNlQ3VycmVudFVzZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICFQYXJzZS5faXNOb2RlIHx8IFBhcnNlLlVzZXIuX2VuYWJsZVVuc2FmZUN1cnJlbnRVc2VyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQZXJzaXN0cyBhIHVzZXIgYXMgY3VycmVudFVzZXIgdG8gbG9jYWxTdG9yYWdlLCBhbmQgaW50byB0aGUgc2luZ2xldG9uLlxuICAgICAqL1xuICAgIF9zYXZlQ3VycmVudFVzZXI6IGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgIGlmIChQYXJzZS5Vc2VyLl9jdXJyZW50VXNlciAhPT0gbnVsbCAmJlxuICAgICAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyICE9PSB1c2VyKSB7XG4gICAgICAgIFBhcnNlLlVzZXIubG9nT3V0KCk7XG4gICAgICB9XG4gICAgICB1c2VyLl9pc0N1cnJlbnRVc2VyID0gdHJ1ZTtcbiAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgIFBhcnNlLlVzZXIuX2N1cnJlbnRVc2VyTWF0Y2hlc0Rpc2sgPSB0cnVlO1xuXG4gICAgICB2YXIganNvbiA9IHVzZXIudG9KU09OKCk7XG4gICAgICBqc29uLl9pZCA9IHVzZXIuaWQ7XG4gICAgICBqc29uLl9zZXNzaW9uVG9rZW4gPSB1c2VyLl9zZXNzaW9uVG9rZW47XG4gICAgICBpZiAoUGFyc2UuU3RvcmFnZS5hc3luYykge1xuICAgICAgICBQYXJzZS5TdG9yYWdlLnNldEl0ZW1Bc3luYyhcbiAgICAgICAgICBQYXJzZS5fZ2V0UGFyc2VQYXRoKFBhcnNlLlVzZXIuX0NVUlJFTlRfVVNFUl9LRVkpLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFBhcnNlLlN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICBQYXJzZS5fZ2V0UGFyc2VQYXRoKFBhcnNlLlVzZXIuX0NVUlJFTlRfVVNFUl9LRVkpLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3JlZ2lzdGVyQXV0aGVudGljYXRpb25Qcm92aWRlcjogZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICAgIFBhcnNlLlVzZXIuX2F1dGhQcm92aWRlcnNbcHJvdmlkZXIuZ2V0QXV0aFR5cGUoKV0gPSBwcm92aWRlcjtcbiAgICAgIC8vIFN5bmNocm9uaXplIHRoZSBjdXJyZW50IHVzZXIgd2l0aCB0aGUgYXV0aCBwcm92aWRlci5cbiAgICAgIGlmIChQYXJzZS5Vc2VyLmN1cnJlbnQoKSkge1xuICAgICAgICBQYXJzZS5Vc2VyLmN1cnJlbnQoKS5fc3luY2hyb25pemVBdXRoRGF0YShwcm92aWRlci5nZXRBdXRoVHlwZSgpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2xvZ0luV2l0aDogZnVuY3Rpb24ocHJvdmlkZXIsIG9wdGlvbnMpIHtcbiAgICAgIHZhciB1c2VyID0gUGFyc2UuT2JqZWN0Ll9jcmVhdGUoXCJfVXNlclwiKTtcbiAgICAgIHJldHVybiB1c2VyLl9saW5rV2l0aChwcm92aWRlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gIH0pO1xufSh0aGlzKSk7XG5cblxuKGZ1bmN0aW9uKHJvb3QpIHtcbiAgcm9vdC5QYXJzZSA9IHJvb3QuUGFyc2UgfHwge307XG4gIHZhciBQYXJzZSA9IHJvb3QuUGFyc2U7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKiA8cD5BIFBhcnNlLlNlc3Npb24gb2JqZWN0IGlzIGEgbG9jYWwgcmVwcmVzZW50YXRpb24gb2YgYSByZXZvY2FibGUgc2Vzc2lvbi5cbiAgICogVGhpcyBjbGFzcyBpcyBhIHN1YmNsYXNzIG9mIGEgUGFyc2UuT2JqZWN0LCBhbmQgcmV0YWlucyB0aGUgc2FtZVxuICAgKiBmdW5jdGlvbmFsaXR5IG9mIGEgUGFyc2UuT2JqZWN0LjwvcD5cbiAgICovXG4gIFBhcnNlLlNlc3Npb24gPSBQYXJzZS5PYmplY3QuZXh0ZW5kKCdfU2Vzc2lvbicsXG4gIC8qKiBAbGVuZHMgUGFyc2UuU2Vzc2lvbi5wcm90b3R5cGUgKi9cbiAge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlc3Npb24gdG9rZW4gc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRTZXNzaW9uVG9rZW46IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25Ub2tlbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRvIGhhbmRsZSBzcGVjaWFsIGZpZWxkcyBpbiBhIF9TZXNzaW9uIHJlc3BvbnNlLlxuICAgICAqL1xuICAgIF9tZXJnZU1hZ2ljRmllbGRzOiBmdW5jdGlvbihhdHRycykge1xuICAgICAgaWYgKGF0dHJzLnNlc3Npb25Ub2tlbikge1xuICAgICAgICB0aGlzLl9zZXNzaW9uVG9rZW4gPSBhdHRycy5zZXNzaW9uVG9rZW47XG4gICAgICAgIGRlbGV0ZSBhdHRycy5zZXNzaW9uVG9rZW47XG4gICAgICB9XG4gICAgICBQYXJzZS5TZXNzaW9uLl9fc3VwZXJfXy5fbWVyZ2VNYWdpY0ZpZWxkcy5jYWxsKHRoaXMsIGF0dHJzKTtcbiAgICB9LFxuICB9LCAvKiogQGxlbmRzIFBhcnNlLlNlc3Npb24gKi8ge1xuXG4gICAgLy8gVGhyb3cgYW4gZXJyb3Igd2hlbiBtb2RpZnlpbmcgdGhlc2UgcmVhZC1vbmx5IGZpZWxkc1xuICAgIHJlYWRPbmx5QXR0cmlidXRlczoge1xuICAgICAgY3JlYXRlZFdpdGg6IHRydWUsXG4gICAgICBleHBpcmVzQXQ6IHRydWUsXG4gICAgICBpbnN0YWxsYXRpb25JZDogdHJ1ZSxcbiAgICAgIHJlc3RyaWN0ZWQ6IHRydWUsXG4gICAgICBzZXNzaW9uVG9rZW46IHRydWUsXG4gICAgICB1c2VyOiB0cnVlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgU2Vzc2lvbiBvYmplY3QgZm9yIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHNlc3Npb24uXG4gICAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgUGFyc2UuU2Vzc2lvblxuICAgICAqICAgb2JqZWN0IGFmdGVyIGl0IGhhcyBiZWVuIGZldGNoZWQuXG4gICAgICovXG4gICAgY3VycmVudDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIHZhciBzZXNzaW9uID0gUGFyc2UuT2JqZWN0Ll9jcmVhdGUoJ19TZXNzaW9uJyk7XG4gICAgICB2YXIgY3VycmVudFRva2VuID0gUGFyc2UuVXNlci5jdXJyZW50KCkuZ2V0U2Vzc2lvblRva2VuKCk7XG4gICAgICByZXR1cm4gUGFyc2UuX3JlcXVlc3Qoe1xuICAgICAgICByb3V0ZTogJ3Nlc3Npb25zJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnbWUnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1c2VNYXN0ZXJLZXk6IG9wdGlvbnMudXNlTWFzdGVyS2V5LFxuICAgICAgICBzZXNzaW9uVG9rZW46IGN1cnJlbnRUb2tlblxuICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwLCBzdGF0dXMsIHhocikge1xuICAgICAgICB2YXIgc2VydmVyQXR0cnMgPSBzZXNzaW9uLnBhcnNlKHJlc3AsIHN0YXR1cywgeGhyKTtcbiAgICAgICAgc2Vzc2lvbi5fZmluaXNoRmV0Y2goc2VydmVyQXR0cnMpO1xuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMsIHNlc3Npb24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzZXNzaW9uIHRva2VuIGlzIHJldm9jYWJsZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIF9pc1Jldm9jYWJsZTogZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgIHJldHVybiB0b2tlbi5pbmRleE9mKCdyOicpID4gLTE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBzZXNzaW9uIHRva2VuIGlzIHJldm9jYWJsZS5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VmdWwgZm9yIG1pZ3JhdGluZyBFeHByZXNzLmpzIG9yIE5vZGUuanMgd2ViIGFwcHMgdG9cbiAgICAgKiB1c2UgcmV2b2NhYmxlIHNlc3Npb25zLiBJZiB5b3UgYXJlIG1pZ3JhdGluZyBhbiBhcHAgdGhhdCB1c2VzIHRoZSBQYXJzZVxuICAgICAqIFNESyBpbiB0aGUgYnJvd3NlciBvbmx5LCBwbGVhc2UgdXNlIFBhcnNlLlVzZXIuZW5hYmxlUmV2b2NhYmxlU2Vzc2lvbigpXG4gICAgICogaW5zdGVhZCwgc28gdGhhdCBzZXNzaW9ucyBjYW4gYmUgYXV0b21hdGljYWxseSB1cGdyYWRlZC5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzQ3VycmVudFNlc3Npb25SZXZvY2FibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKFBhcnNlLlVzZXIuY3VycmVudCgpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5TZXNzaW9uLl9pc1Jldm9jYWJsZShcbiAgICAgICAgICBQYXJzZS5Vc2VyLmN1cnJlbnQoKS5nZXRTZXNzaW9uVG9rZW4oKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KSh0aGlzKTtcblxuLy8gUGFyc2UuUXVlcnkgaXMgYSB3YXkgdG8gY3JlYXRlIGEgbGlzdCBvZiBQYXJzZS5PYmplY3RzLlxuKGZ1bmN0aW9uKHJvb3QpIHtcbiAgcm9vdC5QYXJzZSA9IHJvb3QuUGFyc2UgfHwge307XG4gIHZhciBQYXJzZSA9IHJvb3QuUGFyc2U7XG4gIHZhciBfID0gUGFyc2UuXztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBwYXJzZSBQYXJzZS5RdWVyeSBmb3IgdGhlIGdpdmVuIFBhcnNlLk9iamVjdCBzdWJjbGFzcy5cbiAgICogQHBhcmFtIG9iamVjdENsYXNzIC1cbiAgICogICBBbiBpbnN0YW5jZSBvZiBhIHN1YmNsYXNzIG9mIFBhcnNlLk9iamVjdCwgb3IgYSBQYXJzZSBjbGFzc05hbWUgc3RyaW5nLlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICogPHA+UGFyc2UuUXVlcnkgZGVmaW5lcyBhIHF1ZXJ5IHRoYXQgaXMgdXNlZCB0byBmZXRjaCBQYXJzZS5PYmplY3RzLiBUaGVcbiAgICogbW9zdCBjb21tb24gdXNlIGNhc2UgaXMgZmluZGluZyBhbGwgb2JqZWN0cyB0aGF0IG1hdGNoIGEgcXVlcnkgdGhyb3VnaCB0aGVcbiAgICogPGNvZGU+ZmluZDwvY29kZT4gbWV0aG9kLiBGb3IgZXhhbXBsZSwgdGhpcyBzYW1wbGUgY29kZSBmZXRjaGVzIGFsbCBvYmplY3RzXG4gICAqIG9mIGNsYXNzIDxjb2RlPk15Q2xhc3M8L2NvZGU+LiBJdCBjYWxscyBhIGRpZmZlcmVudCBmdW5jdGlvbiBkZXBlbmRpbmcgb25cbiAgICogd2hldGhlciB0aGUgZmV0Y2ggc3VjY2VlZGVkIG9yIG5vdC5cbiAgICogXG4gICAqIDxwcmU+XG4gICAqIHZhciBxdWVyeSA9IG5ldyBQYXJzZS5RdWVyeShNeUNsYXNzKTtcbiAgICogcXVlcnkuZmluZCh7XG4gICAqICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0cykge1xuICAgKiAgICAgLy8gcmVzdWx0cyBpcyBhbiBhcnJheSBvZiBQYXJzZS5PYmplY3QuXG4gICAqICAgfSxcbiAgICpcbiAgICogICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICogICAgIC8vIGVycm9yIGlzIGFuIGluc3RhbmNlIG9mIFBhcnNlLkVycm9yLlxuICAgKiAgIH1cbiAgICogfSk7PC9wcmU+PC9wPlxuICAgKiBcbiAgICogPHA+QSBQYXJzZS5RdWVyeSBjYW4gYWxzbyBiZSB1c2VkIHRvIHJldHJpZXZlIGEgc2luZ2xlIG9iamVjdCB3aG9zZSBpZCBpc1xuICAgKiBrbm93biwgdGhyb3VnaCB0aGUgZ2V0IG1ldGhvZC4gRm9yIGV4YW1wbGUsIHRoaXMgc2FtcGxlIGNvZGUgZmV0Y2hlcyBhblxuICAgKiBvYmplY3Qgb2YgY2xhc3MgPGNvZGU+TXlDbGFzczwvY29kZT4gYW5kIGlkIDxjb2RlPm15SWQ8L2NvZGU+LiBJdCBjYWxscyBhXG4gICAqIGRpZmZlcmVudCBmdW5jdGlvbiBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZmV0Y2ggc3VjY2VlZGVkIG9yIG5vdC5cbiAgICogXG4gICAqIDxwcmU+XG4gICAqIHZhciBxdWVyeSA9IG5ldyBQYXJzZS5RdWVyeShNeUNsYXNzKTtcbiAgICogcXVlcnkuZ2V0KG15SWQsIHtcbiAgICogICBzdWNjZXNzOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICogICAgIC8vIG9iamVjdCBpcyBhbiBpbnN0YW5jZSBvZiBQYXJzZS5PYmplY3QuXG4gICAqICAgfSxcbiAgICpcbiAgICogICBlcnJvcjogZnVuY3Rpb24ob2JqZWN0LCBlcnJvcikge1xuICAgKiAgICAgLy8gZXJyb3IgaXMgYW4gaW5zdGFuY2Ugb2YgUGFyc2UuRXJyb3IuXG4gICAqICAgfVxuICAgKiB9KTs8L3ByZT48L3A+XG4gICAqIFxuICAgKiA8cD5BIFBhcnNlLlF1ZXJ5IGNhbiBhbHNvIGJlIHVzZWQgdG8gY291bnQgdGhlIG51bWJlciBvZiBvYmplY3RzIHRoYXQgbWF0Y2hcbiAgICogdGhlIHF1ZXJ5IHdpdGhvdXQgcmV0cmlldmluZyBhbGwgb2YgdGhvc2Ugb2JqZWN0cy4gRm9yIGV4YW1wbGUsIHRoaXNcbiAgICogc2FtcGxlIGNvZGUgY291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBvZiB0aGUgY2xhc3MgPGNvZGU+TXlDbGFzczwvY29kZT5cbiAgICogPHByZT5cbiAgICogdmFyIHF1ZXJ5ID0gbmV3IFBhcnNlLlF1ZXJ5KE15Q2xhc3MpO1xuICAgKiBxdWVyeS5jb3VudCh7XG4gICAqICAgc3VjY2VzczogZnVuY3Rpb24obnVtYmVyKSB7XG4gICAqICAgICAvLyBUaGVyZSBhcmUgbnVtYmVyIGluc3RhbmNlcyBvZiBNeUNsYXNzLlxuICAgKiAgIH0sXG4gICAqXG4gICAqICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAqICAgICAvLyBlcnJvciBpcyBhbiBpbnN0YW5jZSBvZiBQYXJzZS5FcnJvci5cbiAgICogICB9XG4gICAqIH0pOzwvcHJlPjwvcD5cbiAgICovXG4gIFBhcnNlLlF1ZXJ5ID0gZnVuY3Rpb24ob2JqZWN0Q2xhc3MpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhvYmplY3RDbGFzcykpIHtcbiAgICAgIG9iamVjdENsYXNzID0gUGFyc2UuT2JqZWN0Ll9nZXRTdWJjbGFzcyhvYmplY3RDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vYmplY3RDbGFzcyA9IG9iamVjdENsYXNzO1xuXG4gICAgdGhpcy5jbGFzc05hbWUgPSBvYmplY3RDbGFzcy5wcm90b3R5cGUuY2xhc3NOYW1lO1xuXG4gICAgdGhpcy5fd2hlcmUgPSB7fTtcbiAgICB0aGlzLl9pbmNsdWRlID0gW107XG4gICAgdGhpcy5fbGltaXQgPSAtMTsgLy8gbmVnYXRpdmUgbGltaXQgbWVhbnMsIGRvIG5vdCBzZW5kIGEgbGltaXRcbiAgICB0aGlzLl9za2lwID0gMDtcbiAgICB0aGlzLl9leHRyYU9wdGlvbnMgPSB7fTtcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RydWN0cyBhIFBhcnNlLlF1ZXJ5IHRoYXQgaXMgdGhlIE9SIG9mIHRoZSBwYXNzZWQgaW4gcXVlcmllcy4gIEZvclxuICAgKiBleGFtcGxlOlxuICAgKiA8cHJlPnZhciBjb21wb3VuZFF1ZXJ5ID0gUGFyc2UuUXVlcnkub3IocXVlcnkxLCBxdWVyeTIsIHF1ZXJ5Myk7PC9wcmU+XG4gICAqXG4gICAqIHdpbGwgY3JlYXRlIGEgY29tcG91bmRRdWVyeSB0aGF0IGlzIGFuIG9yIG9mIHRoZSBxdWVyeTEsIHF1ZXJ5MiwgYW5kXG4gICAqIHF1ZXJ5My5cbiAgICogQHBhcmFtIHsuLi5QYXJzZS5RdWVyeX0gdmFyX2FyZ3MgVGhlIGxpc3Qgb2YgcXVlcmllcyB0byBPUi5cbiAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFRoZSBxdWVyeSB0aGF0IGlzIHRoZSBPUiBvZiB0aGUgcGFzc2VkIGluIHF1ZXJpZXMuXG4gICAqL1xuICBQYXJzZS5RdWVyeS5vciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBxdWVyaWVzID0gXy50b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IG51bGw7XG4gICAgUGFyc2UuX2FycmF5RWFjaChxdWVyaWVzLCBmdW5jdGlvbihxKSB7XG4gICAgICBpZiAoXy5pc051bGwoY2xhc3NOYW1lKSkge1xuICAgICAgICBjbGFzc05hbWUgPSBxLmNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gcS5jbGFzc05hbWUpIHtcbiAgICAgICAgdGhyb3cgXCJBbGwgcXVlcmllcyBtdXN0IGJlIGZvciB0aGUgc2FtZSBjbGFzc1wiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBxdWVyeSA9IG5ldyBQYXJzZS5RdWVyeShjbGFzc05hbWUpO1xuICAgIHF1ZXJ5Ll9vclF1ZXJ5KHF1ZXJpZXMpO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfTtcblxuICBQYXJzZS5RdWVyeS5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhIFBhcnNlLk9iamVjdCB3aG9zZSBpZCBpcyBhbHJlYWR5IGtub3duIGJ5IGZldGNoaW5nIGRhdGEgZnJvbVxuICAgICAqIHRoZSBzZXJ2ZXIuICBFaXRoZXIgb3B0aW9ucy5zdWNjZXNzIG9yIG9wdGlvbnMuZXJyb3IgaXMgY2FsbGVkIHdoZW4gdGhlXG4gICAgICogZmluZCBjb21wbGV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0SWQgVGhlIGlkIG9mIHRoZSBvYmplY3QgdG8gYmUgZmV0Y2hlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEJhY2tib25lLXN0eWxlIG9wdGlvbnMgb2JqZWN0LlxuICAgICAqIFZhbGlkIG9wdGlvbnMgYXJlOjx1bD5cbiAgICAgKiAgIDxsaT5zdWNjZXNzOiBBIEJhY2tib25lLXN0eWxlIHN1Y2Nlc3MgY2FsbGJhY2tcbiAgICAgKiAgIDxsaT5lcnJvcjogQW4gQmFja2JvbmUtc3R5bGUgZXJyb3IgY2FsbGJhY2suXG4gICAgICogICA8bGk+dXNlTWFzdGVyS2V5OiBJbiBDbG91ZCBDb2RlIGFuZCBOb2RlIG9ubHksIGNhdXNlcyB0aGUgTWFzdGVyIEtleSB0b1xuICAgICAqICAgICBiZSB1c2VkIGZvciB0aGlzIHJlcXVlc3QuXG4gICAgICogICA8bGk+c2Vzc2lvblRva2VuOiBBIHZhbGlkIHNlc3Npb24gdG9rZW4sIHVzZWQgZm9yIG1ha2luZyBhIHJlcXVlc3Qgb25cbiAgICAgKiAgICAgICBiZWhhbGYgb2YgYSBzcGVjaWZpYyB1c2VyLlxuICAgICAqIDwvdWw+XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihvYmplY3RJZCwgb3B0aW9ucykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5lcXVhbFRvKCdvYmplY3RJZCcsIG9iamVjdElkKTtcblxuICAgICAgdmFyIGZpcnN0T3B0aW9ucyA9IHt9O1xuICAgICAgaWYgKG9wdGlvbnMgJiYgXy5oYXMob3B0aW9ucywgJ3VzZU1hc3RlcktleScpKSB7XG4gICAgICAgIGZpcnN0T3B0aW9ucyA9IHsgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSB9O1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMgJiYgXy5oYXMob3B0aW9ucywgJ3Nlc3Npb25Ub2tlbicpKSB7XG4gICAgICAgIGZpcnN0T3B0aW9ucy5zZXNzaW9uVG9rZW4gPSBvcHRpb25zLnNlc3Npb25Ub2tlbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGYuZmlyc3QoZmlyc3RPcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlcnJvck9iamVjdCA9IG5ldyBQYXJzZS5FcnJvcihQYXJzZS5FcnJvci5PQkpFQ1RfTk9UX0ZPVU5ELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3Qgbm90IGZvdW5kLlwiKTtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlByb21pc2UuZXJyb3IoZXJyb3JPYmplY3QpO1xuXG4gICAgICB9KS5fdGhlblJ1bkNhbGxiYWNrcyhvcHRpb25zLCBudWxsKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhpcyBxdWVyeS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBxdWVyeS5cbiAgICAgKi9cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgd2hlcmU6IHRoaXMuX3doZXJlXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5faW5jbHVkZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBhcmFtcy5pbmNsdWRlID0gdGhpcy5faW5jbHVkZS5qb2luKFwiLFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgICAgcGFyYW1zLmtleXMgPSB0aGlzLl9zZWxlY3Quam9pbihcIixcIik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbGltaXQgPj0gMCkge1xuICAgICAgICBwYXJhbXMubGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9za2lwID4gMCkge1xuICAgICAgICBwYXJhbXMuc2tpcCA9IHRoaXMuX3NraXA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXMub3JkZXIgPSB0aGlzLl9vcmRlci5qb2luKFwiLFwiKTtcbiAgICAgIH1cblxuICAgICAgUGFyc2UuX29iamVjdEVhY2godGhpcy5fZXh0cmFPcHRpb25zLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgIHBhcmFtc1trXSA9IHY7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgbGlzdCBvZiBQYXJzZU9iamVjdHMgdGhhdCBzYXRpc2Z5IHRoaXMgcXVlcnkuXG4gICAgICogRWl0aGVyIG9wdGlvbnMuc3VjY2VzcyBvciBvcHRpb25zLmVycm9yIGlzIGNhbGxlZCB3aGVuIHRoZSBmaW5kXG4gICAgICogY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBCYWNrYm9uZS1zdHlsZSBvcHRpb25zIG9iamVjdC4gVmFsaWQgb3B0aW9uc1xuICAgICAqIGFyZTo8dWw+XG4gICAgICogICA8bGk+c3VjY2VzczogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBmaW5kIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHkuXG4gICAgICogICA8bGk+ZXJyb3I6IEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZmluZCBmYWlscy5cbiAgICAgKiAgIDxsaT51c2VNYXN0ZXJLZXk6IEluIENsb3VkIENvZGUgYW5kIE5vZGUgb25seSwgY2F1c2VzIHRoZSBNYXN0ZXIgS2V5IHRvXG4gICAgICogICAgIGJlIHVzZWQgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICAgKiAgIDxsaT5zZXNzaW9uVG9rZW46IEEgdmFsaWQgc2Vzc2lvbiB0b2tlbiwgdXNlZCBmb3IgbWFraW5nIGEgcmVxdWVzdCBvblxuICAgICAqICAgICAgIGJlaGFsZiBvZiBhIHNwZWNpZmljIHVzZXIuXG4gICAgICogPC91bD5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlByb21pc2V9IEEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdpdGggdGhlIHJlc3VsdHMgd2hlblxuICAgICAqIHRoZSBxdWVyeSBjb21wbGV0ZXMuXG4gICAgICovXG4gICAgZmluZDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIHZhciByZXF1ZXN0ID0gUGFyc2UuX3JlcXVlc3Qoe1xuICAgICAgICByb3V0ZTogXCJjbGFzc2VzXCIsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgdXNlTWFzdGVyS2V5OiBvcHRpb25zLnVzZU1hc3RlcktleSxcbiAgICAgICAgc2Vzc2lvblRva2VuOiBvcHRpb25zLnNlc3Npb25Ub2tlbixcbiAgICAgICAgZGF0YTogdGhpcy50b0pTT04oKVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXF1ZXN0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIF8ubWFwKHJlc3BvbnNlLnJlc3VsdHMsIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgICB2YXIgb2JqO1xuICAgICAgICAgIGlmIChyZXNwb25zZS5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBQYXJzZS5PYmplY3QocmVzcG9uc2UuY2xhc3NOYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gbmV3IHNlbGYub2JqZWN0Q2xhc3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2JqLl9maW5pc2hGZXRjaChqc29uLCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9KTtcbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIHRoYXQgbWF0Y2ggdGhpcyBxdWVyeS5cbiAgICAgKiBFaXRoZXIgb3B0aW9ucy5zdWNjZXNzIG9yIG9wdGlvbnMuZXJyb3IgaXMgY2FsbGVkIHdoZW4gdGhlIGNvdW50XG4gICAgICogY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBCYWNrYm9uZS1zdHlsZSBvcHRpb25zIG9iamVjdC4gVmFsaWQgb3B0aW9uc1xuICAgICAqIGFyZTo8dWw+XG4gICAgICogICA8bGk+c3VjY2VzczogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBjb3VudCBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgICAqICAgPGxpPmVycm9yOiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGZpbmQgZmFpbHMuXG4gICAgICogICA8bGk+dXNlTWFzdGVyS2V5OiBJbiBDbG91ZCBDb2RlIGFuZCBOb2RlIG9ubHksIGNhdXNlcyB0aGUgTWFzdGVyIEtleSB0b1xuICAgICAqICAgICBiZSB1c2VkIGZvciB0aGlzIHJlcXVlc3QuXG4gICAgICogICA8bGk+c2Vzc2lvblRva2VuOiBBIHZhbGlkIHNlc3Npb24gdG9rZW4sIHVzZWQgZm9yIG1ha2luZyBhIHJlcXVlc3Qgb25cbiAgICAgKiAgICAgICBiZWhhbGYgb2YgYSBzcGVjaWZpYyB1c2VyLlxuICAgICAqIDwvdWw+XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aXRoIHRoZSBjb3VudCB3aGVuXG4gICAgICogdGhlIHF1ZXJ5IGNvbXBsZXRlcy5cbiAgICAgKi9cbiAgICBjb3VudDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnRvSlNPTigpO1xuICAgICAgcGFyYW1zLmxpbWl0ID0gMDtcbiAgICAgIHBhcmFtcy5jb3VudCA9IDE7XG4gICAgICB2YXIgcmVxdWVzdCA9IFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgcm91dGU6IFwiY2xhc3Nlc1wiLFxuICAgICAgICBjbGFzc05hbWU6IHNlbGYuY2xhc3NOYW1lLCBcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICB1c2VNYXN0ZXJLZXk6IG9wdGlvbnMudXNlTWFzdGVyS2V5LFxuICAgICAgICBzZXNzaW9uVG9rZW46IG9wdGlvbnMuc2Vzc2lvblRva2VuLFxuICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVxdWVzdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5jb3VudDtcbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYXQgbW9zdCBvbmUgUGFyc2UuT2JqZWN0IHRoYXQgc2F0aXNmaWVzIHRoaXMgcXVlcnkuXG4gICAgICpcbiAgICAgKiBFaXRoZXIgb3B0aW9ucy5zdWNjZXNzIG9yIG9wdGlvbnMuZXJyb3IgaXMgY2FsbGVkIHdoZW4gaXQgY29tcGxldGVzLlxuICAgICAqIHN1Y2Nlc3MgaXMgcGFzc2VkIHRoZSBvYmplY3QgaWYgdGhlcmUgaXMgb25lLiBvdGhlcndpc2UsIHVuZGVmaW5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgQmFja2JvbmUtc3R5bGUgb3B0aW9ucyBvYmplY3QuIFZhbGlkIG9wdGlvbnNcbiAgICAgKiBhcmU6PHVsPlxuICAgICAqICAgPGxpPnN1Y2Nlc3M6IEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZmluZCBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgICAqICAgPGxpPmVycm9yOiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGZpbmQgZmFpbHMuXG4gICAgICogICA8bGk+dXNlTWFzdGVyS2V5OiBJbiBDbG91ZCBDb2RlIGFuZCBOb2RlIG9ubHksIGNhdXNlcyB0aGUgTWFzdGVyIEtleSB0b1xuICAgICAqICAgICBiZSB1c2VkIGZvciB0aGlzIHJlcXVlc3QuXG4gICAgICogICA8bGk+c2Vzc2lvblRva2VuOiBBIHZhbGlkIHNlc3Npb24gdG9rZW4sIHVzZWQgZm9yIG1ha2luZyBhIHJlcXVlc3Qgb25cbiAgICAgKiAgICAgICBiZWhhbGYgb2YgYSBzcGVjaWZpYyB1c2VyLlxuICAgICAqIDwvdWw+XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aXRoIHRoZSBvYmplY3Qgd2hlblxuICAgICAqIHRoZSBxdWVyeSBjb21wbGV0ZXMuXG4gICAgICovXG4gICAgZmlyc3Q6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICB2YXIgcGFyYW1zID0gdGhpcy50b0pTT04oKTtcbiAgICAgIHBhcmFtcy5saW1pdCA9IDE7XG4gICAgICB2YXIgcmVxdWVzdCA9IFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgcm91dGU6IFwiY2xhc3Nlc1wiLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lLCBcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICB1c2VNYXN0ZXJLZXk6IG9wdGlvbnMudXNlTWFzdGVyS2V5LFxuICAgICAgICBzZXNzaW9uVG9rZW46IG9wdGlvbnMuc2Vzc2lvblRva2VuLFxuICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVxdWVzdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBfLm1hcChyZXNwb25zZS5yZXN1bHRzLCBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgICAgdmFyIG9iajtcbiAgICAgICAgICBpZiAocmVzcG9uc2UuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBvYmogPSBuZXcgUGFyc2UuT2JqZWN0KHJlc3BvbnNlLmNsYXNzTmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBzZWxmLm9iamVjdENsYXNzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9iai5fZmluaXNoRmV0Y2goanNvbiwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSlbMF07XG4gICAgICB9KS5fdGhlblJ1bkNhbGxiYWNrcyhvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiBQYXJzZS5Db2xsZWN0aW9uIGJhY2tlZCBieSB0aGlzIHF1ZXJ5LlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIEFuIGFycmF5IG9mIGluc3RhbmNlcyBvZiA8Y29kZT5QYXJzZS5PYmplY3Q8L2NvZGU+XG4gICAgICogICAgIHdpdGggd2hpY2ggdG8gc3RhcnQgdGhpcyBDb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9wdGlvbmFsIG9iamVjdCB3aXRoIEJhY2tib25lLXN0eWxlIG9wdGlvbnMuXG4gICAgICogVmFsaWQgb3B0aW9ucyBhcmU6PHVsPlxuICAgICAqICAgPGxpPm1vZGVsOiBUaGUgUGFyc2UuT2JqZWN0IHN1YmNsYXNzIHRoYXQgdGhpcyBjb2xsZWN0aW9uIGNvbnRhaW5zLlxuICAgICAqICAgPGxpPnF1ZXJ5OiBBbiBpbnN0YW5jZSBvZiBQYXJzZS5RdWVyeSB0byB1c2Ugd2hlbiBmZXRjaGluZyBpdGVtcy5cbiAgICAgKiAgIDxsaT5jb21wYXJhdG9yOiBBIHN0cmluZyBwcm9wZXJ0eSBuYW1lIG9yIGZ1bmN0aW9uIHRvIHNvcnQgYnkuXG4gICAgICogPC91bD5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Db2xsZWN0aW9ufVxuICAgICAqL1xuICAgIGNvbGxlY3Rpb246IGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHJldHVybiBuZXcgUGFyc2UuQ29sbGVjdGlvbihpdGVtcywgXy5leHRlbmQob3B0aW9ucywge1xuICAgICAgICBtb2RlbDogdGhpcy5vYmplY3RDbGFzcyxcbiAgICAgICAgcXVlcnk6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nIGFueSByZXN1bHRzLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciBwYWdpbmF0aW9uLlxuICAgICAqIERlZmF1bHQgaXMgdG8gc2tpcCB6ZXJvIHJlc3VsdHMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG4gdGhlIG51bWJlciBvZiByZXN1bHRzIHRvIHNraXAuXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBza2lwOiBmdW5jdGlvbihuKSB7XG4gICAgICB0aGlzLl9za2lwID0gbjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaW1pdCBvZiB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuLiBUaGUgZGVmYXVsdCBsaW1pdCBpc1xuICAgICAqIDEwMCwgd2l0aCBhIG1heGltdW0gb2YgMTAwMCByZXN1bHRzIGJlaW5nIHJldHVybmVkIGF0IGEgdGltZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbiB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgdG8gbGltaXQgdG8uXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBsaW1pdDogZnVuY3Rpb24obikge1xuICAgICAgdGhpcy5fbGltaXQgPSBuO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgdG8gdGhlIHF1ZXJ5IHRoYXQgcmVxdWlyZXMgYSBwYXJ0aWN1bGFyIGtleSdzIHZhbHVlIHRvXG4gICAgICogYmUgZXF1YWwgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgdGhlIFBhcnNlLk9iamVjdCBtdXN0IGNvbnRhaW4uXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBlcXVhbFRvOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9lc05vdEV4aXN0KGtleSk7XG4gICAgICB9IFxuXG4gICAgICB0aGlzLl93aGVyZVtrZXldID0gUGFyc2UuX2VuY29kZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZvciBjb25kaXRpb24gcXVlcmllc1xuICAgICAqL1xuICAgIF9hZGRDb25kaXRpb246IGZ1bmN0aW9uKGtleSwgY29uZGl0aW9uLCB2YWx1ZSkge1xuICAgICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgY29uZGl0aW9uXG4gICAgICBpZiAoIXRoaXMuX3doZXJlW2tleV0pIHtcbiAgICAgICAgdGhpcy5fd2hlcmVba2V5XSA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5fd2hlcmVba2V5XVtjb25kaXRpb25dID0gUGFyc2UuX2VuY29kZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uc3RyYWludCB0byB0aGUgcXVlcnkgdGhhdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIga2V5J3MgdmFsdWUgdG9cbiAgICAgKiBiZSBub3QgZXF1YWwgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgbXVzdCBub3QgYmUgZXF1YWxsZWQuXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBub3RFcXVhbFRvOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB0aGlzLl9hZGRDb25kaXRpb24oa2V5LCBcIiRuZVwiLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uc3RyYWludCB0byB0aGUgcXVlcnkgdGhhdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIga2V5J3MgdmFsdWUgdG9cbiAgICAgKiBiZSBsZXNzIHRoYW4gdGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgcHJvdmlkZXMgYW4gdXBwZXIgYm91bmQuXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBsZXNzVGhhbjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkbHRcIiwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgdG8gdGhlIHF1ZXJ5IHRoYXQgcmVxdWlyZXMgYSBwYXJ0aWN1bGFyIGtleSdzIHZhbHVlIHRvXG4gICAgICogYmUgZ3JlYXRlciB0aGFuIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHByb3ZpZGVzIGFuIGxvd2VyIGJvdW5kLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgZ3JlYXRlclRoYW46IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX2FkZENvbmRpdGlvbihrZXksIFwiJGd0XCIsIHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjb25zdHJhaW50IHRvIHRoZSBxdWVyeSB0aGF0IHJlcXVpcmVzIGEgcGFydGljdWxhciBrZXkncyB2YWx1ZSB0b1xuICAgICAqIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCBwcm92aWRlcyBhbiB1cHBlciBib3VuZC5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIGxlc3NUaGFuT3JFcXVhbFRvOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB0aGlzLl9hZGRDb25kaXRpb24oa2V5LCBcIiRsdGVcIiwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgdG8gdGhlIHF1ZXJ5IHRoYXQgcmVxdWlyZXMgYSBwYXJ0aWN1bGFyIGtleSdzIHZhbHVlIHRvXG4gICAgICogYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHByb3ZpZGVzIGFuIGxvd2VyIGJvdW5kLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgZ3JlYXRlclRoYW5PckVxdWFsVG86IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX2FkZENvbmRpdGlvbihrZXksIFwiJGd0ZVwiLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uc3RyYWludCB0byB0aGUgcXVlcnkgdGhhdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIga2V5J3MgdmFsdWUgdG9cbiAgICAgKiBiZSBjb250YWluZWQgaW4gdGhlIHByb3ZpZGVkIGxpc3Qgb2YgdmFsdWVzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0aGF0IHdpbGwgbWF0Y2guXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBjb250YWluZWRJbjogZnVuY3Rpb24oa2V5LCB2YWx1ZXMpIHtcbiAgICAgIHRoaXMuX2FkZENvbmRpdGlvbihrZXksIFwiJGluXCIsIHZhbHVlcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uc3RyYWludCB0byB0aGUgcXVlcnkgdGhhdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIga2V5J3MgdmFsdWUgdG9cbiAgICAgKiBub3QgYmUgY29udGFpbmVkIGluIHRoZSBwcm92aWRlZCBsaXN0IG9mIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdGhhdCB3aWxsIG5vdCBtYXRjaC5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIG5vdENvbnRhaW5lZEluOiBmdW5jdGlvbihrZXksIHZhbHVlcykge1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkbmluXCIsIHZhbHVlcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uc3RyYWludCB0byB0aGUgcXVlcnkgdGhhdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIga2V5J3MgdmFsdWUgdG9cbiAgICAgKiBjb250YWluIGVhY2ggb25lIG9mIHRoZSBwcm92aWRlZCBsaXN0IG9mIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suICBUaGlzIGtleSdzIHZhbHVlIG11c3QgYmUgYW4gYXJyYXkuXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdGhhdCB3aWxsIG1hdGNoLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgY29udGFpbnNBbGw6IGZ1bmN0aW9uKGtleSwgdmFsdWVzKSB7XG4gICAgICB0aGlzLl9hZGRDb25kaXRpb24oa2V5LCBcIiRhbGxcIiwgdmFsdWVzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgZm9yIGZpbmRpbmcgb2JqZWN0cyB0aGF0IGNvbnRhaW4gdGhlIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgdGhhdCBzaG91bGQgZXhpc3QuXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBleGlzdHM6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkZXhpc3RzXCIsIHRydWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgZm9yIGZpbmRpbmcgb2JqZWN0cyB0aGF0IGRvIG5vdCBjb250YWluIGEgZ2l2ZW4ga2V5LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0aGF0IHNob3VsZCBub3QgZXhpc3RcbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIGRvZXNOb3RFeGlzdDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB0aGlzLl9hZGRDb25kaXRpb24oa2V5LCBcIiRleGlzdHNcIiwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb25zdHJhaW50IGZvciBmaW5kaW5nIHN0cmluZyB2YWx1ZXMgdGhhdCBtYXRjaFxuICAgICAqIHRoZSBwcm92aWRlZCByZWd1bGFyIGV4cHJlc3Npb24uXG4gICAgICogVGhpcyBtYXkgYmUgc2xvdyBmb3IgbGFyZ2UgZGF0YXNldHMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRoYXQgdGhlIHN0cmluZyB0byBtYXRjaCBpcyBzdG9yZWQgaW4uXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4IFRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiB0byBtYXRjaC5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIG1hdGNoZXM6IGZ1bmN0aW9uKGtleSwgcmVnZXgsIG1vZGlmaWVycykge1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkcmVnZXhcIiwgcmVnZXgpO1xuICAgICAgaWYgKCFtb2RpZmllcnMpIHsgbW9kaWZpZXJzID0gXCJcIjsgfVxuICAgICAgLy8gSmF2YXNjcmlwdCByZWdleCBvcHRpb25zIHN1cHBvcnQgbWlnIGFzIGlubGluZSBvcHRpb25zIGJ1dCBzdG9yZSB0aGVtIFxuICAgICAgLy8gYXMgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0LiBXZSBzdXBwb3J0IG1pICYgc2hvdWxkIG1pZ3JhdGUgdGhlbSB0b1xuICAgICAgLy8gbW9kaWZpZXJzXG4gICAgICBpZiAocmVnZXguaWdub3JlQ2FzZSkgeyBtb2RpZmllcnMgKz0gJ2knOyB9XG4gICAgICBpZiAocmVnZXgubXVsdGlsaW5lKSB7IG1vZGlmaWVycyArPSAnbSc7IH1cblxuICAgICAgaWYgKG1vZGlmaWVycyAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2FkZENvbmRpdGlvbihrZXksIFwiJG9wdGlvbnNcIiwgbW9kaWZpZXJzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjb25zdHJhaW50IHRoYXQgcmVxdWlyZXMgdGhhdCBhIGtleSdzIHZhbHVlIG1hdGNoZXMgYSBQYXJzZS5RdWVyeVxuICAgICAqIGNvbnN0cmFpbnQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRoYXQgdGhlIGNvbnRhaW5zIHRoZSBvYmplY3QgdG8gbWF0Y2ggdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICBxdWVyeS5cbiAgICAgKiBAcGFyYW0ge1BhcnNlLlF1ZXJ5fSBxdWVyeSBUaGUgcXVlcnkgdGhhdCBzaG91bGQgbWF0Y2guXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBtYXRjaGVzUXVlcnk6IGZ1bmN0aW9uKGtleSwgcXVlcnkpIHtcbiAgICAgIHZhciBxdWVyeUpTT04gPSBxdWVyeS50b0pTT04oKTtcbiAgICAgIHF1ZXJ5SlNPTi5jbGFzc05hbWUgPSBxdWVyeS5jbGFzc05hbWU7XG4gICAgICB0aGlzLl9hZGRDb25kaXRpb24oa2V5LCBcIiRpblF1ZXJ5XCIsIHF1ZXJ5SlNPTik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAvKipcbiAgICAgKiBBZGQgYSBjb25zdHJhaW50IHRoYXQgcmVxdWlyZXMgdGhhdCBhIGtleSdzIHZhbHVlIG5vdCBtYXRjaGVzIGFcbiAgICAgKiBQYXJzZS5RdWVyeSBjb25zdHJhaW50LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0aGF0IHRoZSBjb250YWlucyB0aGUgb2JqZWN0IHRvIG1hdGNoIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgcXVlcnkuXG4gICAgICogQHBhcmFtIHtQYXJzZS5RdWVyeX0gcXVlcnkgVGhlIHF1ZXJ5IHRoYXQgc2hvdWxkIG5vdCBtYXRjaC5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIGRvZXNOb3RNYXRjaFF1ZXJ5OiBmdW5jdGlvbihrZXksIHF1ZXJ5KSB7XG4gICAgICB2YXIgcXVlcnlKU09OID0gcXVlcnkudG9KU09OKCk7XG4gICAgICBxdWVyeUpTT04uY2xhc3NOYW1lID0gcXVlcnkuY2xhc3NOYW1lO1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkbm90SW5RdWVyeVwiLCBxdWVyeUpTT04pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uc3RyYWludCB0aGF0IHJlcXVpcmVzIHRoYXQgYSBrZXkncyB2YWx1ZSBtYXRjaGVzIGEgdmFsdWUgaW5cbiAgICAgKiBhbiBvYmplY3QgcmV0dXJuZWQgYnkgYSBkaWZmZXJlbnQgUGFyc2UuUXVlcnkuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRoYXQgY29udGFpbnMgdGhlIHZhbHVlIHRoYXQgaXMgYmVpbmdcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5S2V5IFRoZSBrZXkgaW4gdGhlIG9iamVjdHMgcmV0dXJuZWQgYnkgdGhlIHF1ZXJ5IHRvXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoIGFnYWluc3QuXG4gICAgICogQHBhcmFtIHtQYXJzZS5RdWVyeX0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHJ1bi5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIG1hdGNoZXNLZXlJblF1ZXJ5OiBmdW5jdGlvbihrZXksIHF1ZXJ5S2V5LCBxdWVyeSkge1xuICAgICAgdmFyIHF1ZXJ5SlNPTiA9IHF1ZXJ5LnRvSlNPTigpO1xuICAgICAgcXVlcnlKU09OLmNsYXNzTmFtZSA9IHF1ZXJ5LmNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX2FkZENvbmRpdGlvbihrZXksIFwiJHNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBxdWVyeUtleSwgcXVlcnk6IHF1ZXJ5SlNPTiB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjb25zdHJhaW50IHRoYXQgcmVxdWlyZXMgdGhhdCBhIGtleSdzIHZhbHVlIG5vdCBtYXRjaCBhIHZhbHVlIGluXG4gICAgICogYW4gb2JqZWN0IHJldHVybmVkIGJ5IGEgZGlmZmVyZW50IFBhcnNlLlF1ZXJ5LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0aGF0IGNvbnRhaW5zIHRoZSB2YWx1ZSB0aGF0IGlzIGJlaW5nXG4gICAgICogICAgICAgICAgICAgICAgICAgICBleGNsdWRlZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnlLZXkgVGhlIGtleSBpbiB0aGUgb2JqZWN0cyByZXR1cm5lZCBieSB0aGUgcXVlcnkgdG9cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggYWdhaW5zdC5cbiAgICAgKiBAcGFyYW0ge1BhcnNlLlF1ZXJ5fSBxdWVyeSBUaGUgcXVlcnkgdG8gcnVuLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgZG9lc05vdE1hdGNoS2V5SW5RdWVyeTogZnVuY3Rpb24oa2V5LCBxdWVyeUtleSwgcXVlcnkpIHtcbiAgICAgIHZhciBxdWVyeUpTT04gPSBxdWVyeS50b0pTT04oKTtcbiAgICAgIHF1ZXJ5SlNPTi5jbGFzc05hbWUgPSBxdWVyeS5jbGFzc05hbWU7XG4gICAgICB0aGlzLl9hZGRDb25kaXRpb24oa2V5LCBcIiRkb250U2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHF1ZXJ5S2V5LCBxdWVyeTogcXVlcnlKU09OIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBjb25zdHJhaW50IHRoYXQgYXQgbGVhc3Qgb25lIG9mIHRoZSBwYXNzZWQgaW4gcXVlcmllcyBtYXRjaGVzLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHF1ZXJpZXNcbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIF9vclF1ZXJ5OiBmdW5jdGlvbihxdWVyaWVzKSB7XG4gICAgICB2YXIgcXVlcnlKU09OID0gXy5tYXAocXVlcmllcywgZnVuY3Rpb24ocSkge1xuICAgICAgICByZXR1cm4gcS50b0pTT04oKS53aGVyZTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl93aGVyZS4kb3IgPSBxdWVyeUpTT047XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzdHJpbmcgaW50byBhIHJlZ2V4IHRoYXQgbWF0Y2hlcyBpdC5cbiAgICAgKiBTdXJyb3VuZGluZyB3aXRoIFxcUSAuLiBcXEUgZG9lcyB0aGlzLCB3ZSBqdXN0IG5lZWQgdG8gZXNjYXBlIFxcRSdzIGluXG4gICAgICogdGhlIHRleHQgc2VwYXJhdGVseS5cbiAgICAgKi9cbiAgICBfcXVvdGU6IGZ1bmN0aW9uKHMpIHtcbiAgICAgIHJldHVybiBcIlxcXFxRXCIgKyBzLnJlcGxhY2UoXCJcXFxcRVwiLCBcIlxcXFxFXFxcXFxcXFxFXFxcXFFcIikgKyBcIlxcXFxFXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgZm9yIGZpbmRpbmcgc3RyaW5nIHZhbHVlcyB0aGF0IGNvbnRhaW4gYSBwcm92aWRlZFxuICAgICAqIHN0cmluZy4gIFRoaXMgbWF5IGJlIHNsb3cgZm9yIGxhcmdlIGRhdGFzZXRzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0aGF0IHRoZSBzdHJpbmcgdG8gbWF0Y2ggaXMgc3RvcmVkIGluLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdWJzdHJpbmcgVGhlIHN1YnN0cmluZyB0aGF0IHRoZSB2YWx1ZSBtdXN0IGNvbnRhaW4uXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBjb250YWluczogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkcmVnZXhcIiwgdGhpcy5fcXVvdGUodmFsdWUpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjb25zdHJhaW50IGZvciBmaW5kaW5nIHN0cmluZyB2YWx1ZXMgdGhhdCBzdGFydCB3aXRoIGEgcHJvdmlkZWRcbiAgICAgKiBzdHJpbmcuICBUaGlzIHF1ZXJ5IHdpbGwgdXNlIHRoZSBiYWNrZW5kIGluZGV4LCBzbyBpdCB3aWxsIGJlIGZhc3QgZXZlblxuICAgICAqIGZvciBsYXJnZSBkYXRhc2V0cy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgdGhhdCB0aGUgc3RyaW5nIHRvIG1hdGNoIGlzIHN0b3JlZCBpbi5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4IFRoZSBzdWJzdHJpbmcgdGhhdCB0aGUgdmFsdWUgbXVzdCBzdGFydCB3aXRoLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgc3RhcnRzV2l0aDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkcmVnZXhcIiwgXCJeXCIgKyB0aGlzLl9xdW90ZSh2YWx1ZSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgZm9yIGZpbmRpbmcgc3RyaW5nIHZhbHVlcyB0aGF0IGVuZCB3aXRoIGEgcHJvdmlkZWRcbiAgICAgKiBzdHJpbmcuICBUaGlzIHdpbGwgYmUgc2xvdyBmb3IgbGFyZ2UgZGF0YXNldHMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRoYXQgdGhlIHN0cmluZyB0byBtYXRjaCBpcyBzdG9yZWQgaW4uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeCBUaGUgc3Vic3RyaW5nIHRoYXQgdGhlIHZhbHVlIG11c3QgZW5kIHdpdGguXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBlbmRzV2l0aDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkcmVnZXhcIiwgdGhpcy5fcXVvdGUodmFsdWUpICsgXCIkXCIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSByZXN1bHRzIGluIGFzY2VuZGluZyBvcmRlciBieSB0aGUgZ2l2ZW4ga2V5LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7KFN0cmluZ3xTdHJpbmdbXXwuLi5TdHJpbmd9IGtleSBUaGUga2V5IHRvIG9yZGVyIGJ5LCB3aGljaCBpcyBhIFxuICAgICAqIHN0cmluZyBvZiBjb21tYSBzZXBhcmF0ZWQgdmFsdWVzLCBvciBhbiBBcnJheSBvZiBrZXlzLCBvciBtdWx0aXBsZSBrZXlzLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgYXNjZW5kaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gW107XG4gICAgICByZXR1cm4gdGhpcy5hZGRBc2NlbmRpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIHJlc3VsdHMgaW4gYXNjZW5kaW5nIG9yZGVyIGJ5IHRoZSBnaXZlbiBrZXksIFxuICAgICAqIGJ1dCBjYW4gYWxzbyBhZGQgc2Vjb25kYXJ5IHNvcnQgZGVzY3JpcHRvcnMgd2l0aG91dCBvdmVyd3JpdGluZyBfb3JkZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHsoU3RyaW5nfFN0cmluZ1tdfC4uLlN0cmluZ30ga2V5IFRoZSBrZXkgdG8gb3JkZXIgYnksIHdoaWNoIGlzIGFcbiAgICAgKiBzdHJpbmcgb2YgY29tbWEgc2VwYXJhdGVkIHZhbHVlcywgb3IgYW4gQXJyYXkgb2Yga2V5cywgb3IgbXVsdGlwbGUga2V5cy5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIGFkZEFzY2VuZGluZzogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7IFxuICAgICAgaWYgKCF0aGlzLl9vcmRlcikge1xuICAgICAgICB0aGlzLl9vcmRlciA9IFtdO1xuICAgICAgfVxuICAgICAgUGFyc2UuX2FycmF5RWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAga2V5ID0ga2V5LmpvaW4oKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLl9vcmRlciA9IHNlbGYuX29yZGVyLmNvbmNhdChrZXkucmVwbGFjZSgvXFxzL2csIFwiXCIpLnNwbGl0KFwiLFwiKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgcmVzdWx0cyBpbiBkZXNjZW5kaW5nIG9yZGVyIGJ5IHRoZSBnaXZlbiBrZXkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHsoU3RyaW5nfFN0cmluZ1tdfC4uLlN0cmluZ30ga2V5IFRoZSBrZXkgdG8gb3JkZXIgYnksIHdoaWNoIGlzIGFcbiAgICAgKiBzdHJpbmcgb2YgY29tbWEgc2VwYXJhdGVkIHZhbHVlcywgb3IgYW4gQXJyYXkgb2Yga2V5cywgb3IgbXVsdGlwbGUga2V5cy5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIGRlc2NlbmRpbmc6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdGhpcy5fb3JkZXIgPSBbXTtcbiAgICAgIHJldHVybiB0aGlzLmFkZERlc2NlbmRpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIHJlc3VsdHMgaW4gZGVzY2VuZGluZyBvcmRlciBieSB0aGUgZ2l2ZW4ga2V5LFxuICAgICAqIGJ1dCBjYW4gYWxzbyBhZGQgc2Vjb25kYXJ5IHNvcnQgZGVzY3JpcHRvcnMgd2l0aG91dCBvdmVyd3JpdGluZyBfb3JkZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHsoU3RyaW5nfFN0cmluZ1tdfC4uLlN0cmluZ30ga2V5IFRoZSBrZXkgdG8gb3JkZXIgYnksIHdoaWNoIGlzIGFcbiAgICAgKiBzdHJpbmcgb2YgY29tbWEgc2VwYXJhdGVkIHZhbHVlcywgb3IgYW4gQXJyYXkgb2Yga2V5cywgb3IgbXVsdGlwbGUga2V5cy5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5RdWVyeX0gUmV0dXJucyB0aGUgcXVlcnksIHNvIHlvdSBjYW4gY2hhaW4gdGhpcyBjYWxsLlxuICAgICAqL1xuICAgIGFkZERlc2NlbmRpbmc6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzOyBcbiAgICAgIGlmICghdGhpcy5fb3JkZXIpIHtcbiAgICAgICAgdGhpcy5fb3JkZXIgPSBbXTtcbiAgICAgIH1cbiAgICAgIFBhcnNlLl9hcnJheUVhY2goYXJndW1lbnRzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgIGtleSA9IGtleS5qb2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5fb3JkZXIgPSBzZWxmLl9vcmRlci5jb25jYXQoXG4gICAgICAgICAgXy5tYXAoa2V5LnJlcGxhY2UoL1xccy9nLCBcIlwiKS5zcGxpdChcIixcIiksIFxuICAgICAgICAgICAgZnVuY3Rpb24oaykgeyByZXR1cm4gXCItXCIgKyBrOyB9KSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwcm94aW1pdHkgYmFzZWQgY29uc3RyYWludCBmb3IgZmluZGluZyBvYmplY3RzIHdpdGgga2V5IHBvaW50XG4gICAgICogdmFsdWVzIG5lYXIgdGhlIHBvaW50IGdpdmVuLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0aGF0IHRoZSBQYXJzZS5HZW9Qb2ludCBpcyBzdG9yZWQgaW4uXG4gICAgICogQHBhcmFtIHtQYXJzZS5HZW9Qb2ludH0gcG9pbnQgVGhlIHJlZmVyZW5jZSBQYXJzZS5HZW9Qb2ludCB0aGF0IGlzIHVzZWQuXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBuZWFyOiBmdW5jdGlvbihrZXksIHBvaW50KSB7XG4gICAgICBpZiAoIShwb2ludCBpbnN0YW5jZW9mIFBhcnNlLkdlb1BvaW50KSkge1xuICAgICAgICAvLyBUcnkgdG8gY2FzdCBpdCB0byBhIEdlb1BvaW50LCBzbyB0aGF0IG5lYXIoXCJsb2NcIiwgWzIwLDMwXSkgd29ya3MuXG4gICAgICAgIHBvaW50ID0gbmV3IFBhcnNlLkdlb1BvaW50KHBvaW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkZENvbmRpdGlvbihrZXksIFwiJG5lYXJTcGhlcmVcIiwgcG9pbnQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHByb3hpbWl0eSBiYXNlZCBjb25zdHJhaW50IGZvciBmaW5kaW5nIG9iamVjdHMgd2l0aCBrZXkgcG9pbnRcbiAgICAgKiB2YWx1ZXMgbmVhciB0aGUgcG9pbnQgZ2l2ZW4gYW5kIHdpdGhpbiB0aGUgbWF4aW11bSBkaXN0YW5jZSBnaXZlbi5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgdGhhdCB0aGUgUGFyc2UuR2VvUG9pbnQgaXMgc3RvcmVkIGluLlxuICAgICAqIEBwYXJhbSB7UGFyc2UuR2VvUG9pbnR9IHBvaW50IFRoZSByZWZlcmVuY2UgUGFyc2UuR2VvUG9pbnQgdGhhdCBpcyB1c2VkLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXhEaXN0YW5jZSBNYXhpbXVtIGRpc3RhbmNlIChpbiByYWRpYW5zKSBvZiByZXN1bHRzIHRvXG4gICAgICogICByZXR1cm4uXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICB3aXRoaW5SYWRpYW5zOiBmdW5jdGlvbihrZXksIHBvaW50LCBkaXN0YW5jZSkge1xuICAgICAgdGhpcy5uZWFyKGtleSwgcG9pbnQpO1xuICAgICAgdGhpcy5fYWRkQ29uZGl0aW9uKGtleSwgXCIkbWF4RGlzdGFuY2VcIiwgZGlzdGFuY2UpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHByb3hpbWl0eSBiYXNlZCBjb25zdHJhaW50IGZvciBmaW5kaW5nIG9iamVjdHMgd2l0aCBrZXkgcG9pbnRcbiAgICAgKiB2YWx1ZXMgbmVhciB0aGUgcG9pbnQgZ2l2ZW4gYW5kIHdpdGhpbiB0aGUgbWF4aW11bSBkaXN0YW5jZSBnaXZlbi5cbiAgICAgKiBSYWRpdXMgb2YgZWFydGggdXNlZCBpcyAzOTU4LjggbWlsZXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRoYXQgdGhlIFBhcnNlLkdlb1BvaW50IGlzIHN0b3JlZCBpbi5cbiAgICAgKiBAcGFyYW0ge1BhcnNlLkdlb1BvaW50fSBwb2ludCBUaGUgcmVmZXJlbmNlIFBhcnNlLkdlb1BvaW50IHRoYXQgaXMgdXNlZC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4RGlzdGFuY2UgTWF4aW11bSBkaXN0YW5jZSAoaW4gbWlsZXMpIG9mIHJlc3VsdHMgdG9cbiAgICAgKiAgICAgcmV0dXJuLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgd2l0aGluTWlsZXM6IGZ1bmN0aW9uKGtleSwgcG9pbnQsIGRpc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy53aXRoaW5SYWRpYW5zKGtleSwgcG9pbnQsIGRpc3RhbmNlIC8gMzk1OC44KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcHJveGltaXR5IGJhc2VkIGNvbnN0cmFpbnQgZm9yIGZpbmRpbmcgb2JqZWN0cyB3aXRoIGtleSBwb2ludFxuICAgICAqIHZhbHVlcyBuZWFyIHRoZSBwb2ludCBnaXZlbiBhbmQgd2l0aGluIHRoZSBtYXhpbXVtIGRpc3RhbmNlIGdpdmVuLlxuICAgICAqIFJhZGl1cyBvZiBlYXJ0aCB1c2VkIGlzIDYzNzEuMCBraWxvbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0aGF0IHRoZSBQYXJzZS5HZW9Qb2ludCBpcyBzdG9yZWQgaW4uXG4gICAgICogQHBhcmFtIHtQYXJzZS5HZW9Qb2ludH0gcG9pbnQgVGhlIHJlZmVyZW5jZSBQYXJzZS5HZW9Qb2ludCB0aGF0IGlzIHVzZWQuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heERpc3RhbmNlIE1heGltdW0gZGlzdGFuY2UgKGluIGtpbG9tZXRlcnMpIG9mIHJlc3VsdHNcbiAgICAgKiAgICAgdG8gcmV0dXJuLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgd2l0aGluS2lsb21ldGVyczogZnVuY3Rpb24oa2V5LCBwb2ludCwgZGlzdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLndpdGhpblJhZGlhbnMoa2V5LCBwb2ludCwgZGlzdGFuY2UgLyA2MzcxLjApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjb25zdHJhaW50IHRvIHRoZSBxdWVyeSB0aGF0IHJlcXVpcmVzIGEgcGFydGljdWxhciBrZXknc1xuICAgICAqIGNvb3JkaW5hdGVzIGJlIGNvbnRhaW5lZCB3aXRoaW4gYSBnaXZlbiByZWN0YW5ndWxhciBnZW9ncmFwaGljIGJvdW5kaW5nXG4gICAgICogYm94LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBiZSBjb25zdHJhaW5lZC5cbiAgICAgKiBAcGFyYW0ge1BhcnNlLkdlb1BvaW50fSBzb3V0aHdlc3RcbiAgICAgKiAgICAgVGhlIGxvd2VyLWxlZnQgaW5jbHVzaXZlIGNvcm5lciBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSB7UGFyc2UuR2VvUG9pbnR9IG5vcnRoZWFzdFxuICAgICAqICAgICBUaGUgdXBwZXItcmlnaHQgaW5jbHVzaXZlIGNvcm5lciBvZiB0aGUgYm94LlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgd2l0aGluR2VvQm94OiBmdW5jdGlvbihrZXksIHNvdXRod2VzdCwgbm9ydGhlYXN0KSB7XG4gICAgICBpZiAoIShzb3V0aHdlc3QgaW5zdGFuY2VvZiBQYXJzZS5HZW9Qb2ludCkpIHtcbiAgICAgICAgc291dGh3ZXN0ID0gbmV3IFBhcnNlLkdlb1BvaW50KHNvdXRod2VzdCk7XG4gICAgICB9XG4gICAgICBpZiAoIShub3J0aGVhc3QgaW5zdGFuY2VvZiBQYXJzZS5HZW9Qb2ludCkpIHtcbiAgICAgICAgbm9ydGhlYXN0ID0gbmV3IFBhcnNlLkdlb1BvaW50KG5vcnRoZWFzdCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGRDb25kaXRpb24oa2V5LCAnJHdpdGhpbicsIHsgJyRib3gnOiBbc291dGh3ZXN0LCBub3J0aGVhc3RdIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluY2x1ZGUgbmVzdGVkIFBhcnNlLk9iamVjdHMgZm9yIHRoZSBwcm92aWRlZCBrZXkuICBZb3UgY2FuIHVzZSBkb3RcbiAgICAgKiBub3RhdGlvbiB0byBzcGVjaWZ5IHdoaWNoIGZpZWxkcyBpbiB0aGUgaW5jbHVkZWQgb2JqZWN0IGFyZSBhbHNvIGZldGNoZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIGluY2x1ZGUuXG4gICAgICogQHJldHVybiB7UGFyc2UuUXVlcnl9IFJldHVybnMgdGhlIHF1ZXJ5LCBzbyB5b3UgY2FuIGNoYWluIHRoaXMgY2FsbC5cbiAgICAgKi9cbiAgICBpbmNsdWRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIFBhcnNlLl9hcnJheUVhY2goYXJndW1lbnRzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgc2VsZi5faW5jbHVkZSA9IHNlbGYuX2luY2x1ZGUuY29uY2F0KGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5faW5jbHVkZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc3RyaWN0IHRoZSBmaWVsZHMgb2YgdGhlIHJldHVybmVkIFBhcnNlLk9iamVjdHMgdG8gaW5jbHVkZSBvbmx5IHRoZVxuICAgICAqIHByb3ZpZGVkIGtleXMuICBJZiB0aGlzIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcywgdGhlbiBhbGwgb2YgdGhlIGtleXNcbiAgICAgKiBzcGVjaWZpZWQgaW4gZWFjaCBvZiB0aGUgY2FsbHMgd2lsbCBiZSBpbmNsdWRlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXlzIFRoZSBuYW1lcyBvZiB0aGUga2V5cyB0byBpbmNsdWRlLlxuICAgICAqIEByZXR1cm4ge1BhcnNlLlF1ZXJ5fSBSZXR1cm5zIHRoZSBxdWVyeSwgc28geW91IGNhbiBjaGFpbiB0aGlzIGNhbGwuXG4gICAgICovXG4gICAgc2VsZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuX3NlbGVjdCA9IHRoaXMuX3NlbGVjdCB8fCBbXTtcbiAgICAgIFBhcnNlLl9hcnJheUVhY2goYXJndW1lbnRzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgc2VsZi5fc2VsZWN0ID0gc2VsZi5fc2VsZWN0LmNvbmNhdChrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuX3NlbGVjdC5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGVzIG92ZXIgZWFjaCByZXN1bHQgb2YgYSBxdWVyeSwgY2FsbGluZyBhIGNhbGxiYWNrIGZvciBlYWNoIG9uZS4gSWZcbiAgICAgKiB0aGUgY2FsbGJhY2sgcmV0dXJucyBhIHByb21pc2UsIHRoZSBpdGVyYXRpb24gd2lsbCBub3QgY29udGludWUgdW50aWxcbiAgICAgKiB0aGF0IHByb21pc2UgaGFzIGJlZW4gZnVsZmlsbGVkLiBJZiB0aGUgY2FsbGJhY2sgcmV0dXJucyBhIHJlamVjdGVkXG4gICAgICogcHJvbWlzZSwgdGhlbiBpdGVyYXRpb24gd2lsbCBzdG9wIHdpdGggdGhhdCBlcnJvci4gVGhlIGl0ZW1zIGFyZVxuICAgICAqIHByb2Nlc3NlZCBpbiBhbiB1bnNwZWNpZmllZCBvcmRlci4gVGhlIHF1ZXJ5IG1heSBub3QgaGF2ZSBhbnkgc29ydCBvcmRlcixcbiAgICAgKiBhbmQgbWF5IG5vdCB1c2UgbGltaXQgb3Igc2tpcC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggZWFjaCByZXN1bHRcbiAgICAgKiAgICAgb2YgdGhlIHF1ZXJ5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9wdGlvbmFsIEJhY2tib25lLWxpa2Ugb3B0aW9ucyBvYmplY3Qgd2l0aFxuICAgICAqICAgICBzdWNjZXNzIGFuZCBlcnJvciBjYWxsYmFja3MgdGhhdCB3aWxsIGJlIGludm9rZWQgb25jZSB0aGUgaXRlcmF0aW9uXG4gICAgICogICAgIGhhcyBmaW5pc2hlZC5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCBvbmNlIHRoZVxuICAgICAqICAgICBpdGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbihjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmICh0aGlzLl9vcmRlciB8fCB0aGlzLl9za2lwIHx8ICh0aGlzLl9saW1pdCA+PSAwKSkge1xuICAgICAgICB2YXIgZXJyb3IgPVxuICAgICAgICAgIFwiQ2Fubm90IGl0ZXJhdGUgb24gYSBxdWVyeSB3aXRoIHNvcnQsIHNraXAsIG9yIGxpbWl0LlwiO1xuICAgICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5lcnJvcihlcnJvcikuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFBhcnNlLlByb21pc2UoKTtcblxuICAgICAgdmFyIHF1ZXJ5ID0gbmV3IFBhcnNlLlF1ZXJ5KHRoaXMub2JqZWN0Q2xhc3MpO1xuICAgICAgLy8gV2UgY2FuIG92ZXJyaWRlIHRoZSBiYXRjaCBzaXplIGZyb20gdGhlIG9wdGlvbnMuXG4gICAgICAvLyBUaGlzIGlzIHVuZG9jdW1lbnRlZCwgYnV0IHVzZWZ1bCBmb3IgdGVzdGluZy5cbiAgICAgIHF1ZXJ5Ll9saW1pdCA9IG9wdGlvbnMuYmF0Y2hTaXplIHx8IDEwMDtcbiAgICAgIHF1ZXJ5Ll93aGVyZSA9IF8uY2xvbmUodGhpcy5fd2hlcmUpO1xuICAgICAgcXVlcnkuX2luY2x1ZGUgPSBfLmNsb25lKHRoaXMuX2luY2x1ZGUpO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICBxdWVyeS5fc2VsZWN0ID0gXy5jbG9uZSh0aGlzLl9zZWxlY3QpO1xuICAgICAgfVxuXG4gICAgICBxdWVyeS5hc2NlbmRpbmcoJ29iamVjdElkJyk7XG5cbiAgICAgIHZhciBmaW5kT3B0aW9ucyA9IHt9O1xuICAgICAgaWYgKF8uaGFzKG9wdGlvbnMsIFwidXNlTWFzdGVyS2V5XCIpKSB7XG4gICAgICAgIGZpbmRPcHRpb25zLnVzZU1hc3RlcktleSA9IG9wdGlvbnMudXNlTWFzdGVyS2V5O1xuICAgICAgfVxuICAgICAgaWYgKF8uaGFzKG9wdGlvbnMsICdzZXNzaW9uVG9rZW4nKSkge1xuICAgICAgICBmaW5kT3B0aW9ucy5zZXNzaW9uVG9rZW4gPSBvcHRpb25zLnNlc3Npb25Ub2tlbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gUGFyc2UuUHJvbWlzZS5fY29udGludWVXaGlsZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICFmaW5pc2hlZDtcblxuICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBxdWVyeS5maW5kKGZpbmRPcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2tzRG9uZSA9IFBhcnNlLlByb21pc2UuYXMoKTtcbiAgICAgICAgICBQYXJzZS5fLmVhY2gocmVzdWx0cywgZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFja3NEb25lID0gY2FsbGJhY2tzRG9uZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrc0RvbmUudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+PSBxdWVyeS5fbGltaXQpIHtcbiAgICAgICAgICAgICAgcXVlcnkuZ3JlYXRlclRoYW4oXCJvYmplY3RJZFwiLCByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV0uaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pLl90aGVuUnVuQ2FsbGJhY2tzKG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxufSh0aGlzKSk7XG5cbi8qZ2xvYmFsIEZCOiBmYWxzZSAsIGNvbnNvbGU6IGZhbHNlKi9cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgdmFyIFBVQkxJQ19LRVkgPSBcIipcIjtcblxuICB2YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgdmFyIHJlcXVlc3RlZFBlcm1pc3Npb25zO1xuICB2YXIgaW5pdE9wdGlvbnM7XG4gIHZhciBwcm92aWRlciA9IHtcbiAgICBhdXRoZW50aWNhdGU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIEZCLmxvZ2luKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3Moc2VsZiwge1xuICAgICAgICAgICAgICBpZDogcmVzcG9uc2UuYXV0aFJlc3BvbnNlLnVzZXJJRCxcbiAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgIGV4cGlyYXRpb25fZGF0ZTogbmV3IERhdGUocmVzcG9uc2UuYXV0aFJlc3BvbnNlLmV4cGlyZXNJbiAqIDEwMDAgK1xuICAgICAgICAgICAgICAgICAgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSkudG9KU09OKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihzZWxmLCByZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHNjb3BlOiByZXF1ZXN0ZWRQZXJtaXNzaW9uc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICByZXN0b3JlQXV0aGVudGljYXRpb246IGZ1bmN0aW9uKGF1dGhEYXRhKSB7XG4gICAgICBpZiAoYXV0aERhdGEpIHtcbiAgICAgICAgdmFyIGF1dGhSZXNwb25zZSA9IHtcbiAgICAgICAgICB1c2VySUQ6IGF1dGhEYXRhLmlkLFxuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhdXRoRGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgZXhwaXJlc0luOiAoUGFyc2UuX3BhcnNlRGF0ZShhdXRoRGF0YS5leHBpcmF0aW9uX2RhdGUpLmdldFRpbWUoKSAtXG4gICAgICAgICAgICAgIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkpIC8gMTAwMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IF8uY2xvbmUoaW5pdE9wdGlvbnMpO1xuICAgICAgICBuZXdPcHRpb25zLmF1dGhSZXNwb25zZSA9IGF1dGhSZXNwb25zZTtcblxuICAgICAgICAvLyBTdXBwcmVzcyBjaGVja3MgZm9yIGxvZ2luIHN0YXR1cyBmcm9tIHRoZSBicm93c2VyLlxuICAgICAgICBuZXdPcHRpb25zLnN0YXR1cyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGRvZXNuJ3QgbWF0Y2ggdGhlIG9uZSBrbm93biBieSB0aGUgRkIgU0RLLCBsb2cgb3V0LlxuICAgICAgICAvLyBNb3N0IG9mIHRoZSB0aW1lLCB0aGUgdXNlcnMgd2lsbCBtYXRjaCAtLSBpdCdzIG9ubHkgaW4gY2FzZXMgd2hlcmVcbiAgICAgICAgLy8gdGhlIEZCIFNESyBrbm93cyBvZiBhIGRpZmZlcmVudCB1c2VyIHRoYW4gdGhlIG9uZSBiZWluZyByZXN0b3JlZFxuICAgICAgICAvLyBmcm9tIGEgUGFyc2UgVXNlciB0aGF0IGxvZ2dlZCBpbiB3aXRoIHVzZXJuYW1lL3Bhc3N3b3JkLlxuICAgICAgICB2YXIgZXhpc3RpbmdSZXNwb25zZSA9IEZCLmdldEF1dGhSZXNwb25zZSgpO1xuICAgICAgICBpZiAoZXhpc3RpbmdSZXNwb25zZSAmJlxuICAgICAgICAgICAgZXhpc3RpbmdSZXNwb25zZS51c2VySUQgIT09IGF1dGhSZXNwb25zZS51c2VySUQpIHtcbiAgICAgICAgICBGQi5sb2dvdXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEZCLmluaXQobmV3T3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGdldEF1dGhUeXBlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcImZhY2Vib29rXCI7XG4gICAgfSxcbiAgICBkZWF1dGhlbnRpY2F0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc3RvcmVBdXRoZW50aWNhdGlvbihudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGEgc2V0IG9mIHV0aWxpdGllcyBmb3IgdXNpbmcgUGFyc2Ugd2l0aCBGYWNlYm9vay5cbiAgICogQG5hbWVzcGFjZVxuICAgKiBQcm92aWRlcyBhIHNldCBvZiB1dGlsaXRpZXMgZm9yIHVzaW5nIFBhcnNlIHdpdGggRmFjZWJvb2suXG4gICAqL1xuICBQYXJzZS5GYWNlYm9va1V0aWxzID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIFBhcnNlIEZhY2Vib29rIGludGVncmF0aW9uLiAgQ2FsbCB0aGlzIGZ1bmN0aW9uIGFmdGVyIHlvdVxuICAgICAqIGhhdmUgbG9hZGVkIHRoZSBGYWNlYm9vayBKYXZhc2NyaXB0IFNESyB3aXRoIHRoZSBzYW1lIHBhcmFtZXRlcnNcbiAgICAgKiBhcyB5b3Ugd291bGQgcGFzcyB0bzxjb2RlPlxuICAgICAqIDxhIGhyZWY9XG4gICAgICogXCJodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIuaW5pdC9cIj5cbiAgICAgKiBGQi5pbml0KCk8L2E+PC9jb2RlPi4gIFBhcnNlLkZhY2Vib29rVXRpbHMgd2lsbCBpbnZva2UgRkIuaW5pdCgpIGZvciB5b3VcbiAgICAgKiB3aXRoIHRoZXNlIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEZhY2Vib29rIG9wdGlvbnMgYXJndW1lbnQgYXMgZGVzY3JpYmVkIGhlcmU6XG4gICAgICogICA8YSBocmVmPVxuICAgICAqICAgXCJodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIuaW5pdC9cIj5cbiAgICAgKiAgIEZCLmluaXQoKTwvYT4uIFRoZSBzdGF0dXMgZmxhZyB3aWxsIGJlIGNvZXJjZWQgdG8gJ2ZhbHNlJyBiZWNhdXNlIGl0XG4gICAgICogICBpbnRlcmZlcmVzIHdpdGggUGFyc2UgRmFjZWJvb2sgaW50ZWdyYXRpb24uIENhbGwgRkIuZ2V0TG9naW5TdGF0dXMoKVxuICAgICAqICAgZXhwbGljaXRseSBpZiB0aGlzIGJlaGF2aW9yIGlzIHJlcXVpcmVkIGJ5IHlvdXIgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZihGQikgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IFwiVGhlIEZhY2Vib29rIEphdmFTY3JpcHQgU0RLIG11c3QgYmUgbG9hZGVkIGJlZm9yZSBjYWxsaW5nIGluaXQuXCI7XG4gICAgICB9IFxuICAgICAgaW5pdE9wdGlvbnMgPSBfLmNsb25lKG9wdGlvbnMpIHx8IHt9O1xuICAgICAgaWYgKGluaXRPcHRpb25zLnN0YXR1cyAmJiB0eXBlb2YoY29uc29sZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIHdhcm4gPSBjb25zb2xlLndhcm4gfHwgY29uc29sZS5sb2cgfHwgZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgd2Fybi5jYWxsKGNvbnNvbGUsIFwiVGhlICdzdGF0dXMnIGZsYWcgcGFzc2VkIGludG9cIiArXG4gICAgICAgICAgXCIgRkIuaW5pdCwgd2hlbiBzZXQgdG8gdHJ1ZSwgY2FuIGludGVyZmVyZSB3aXRoIFBhcnNlIEZhY2Vib29rXCIgK1xuICAgICAgICAgIFwiIGludGVncmF0aW9uLCBzbyBpdCBoYXMgYmVlbiBzdXBwcmVzc2VkLiBQbGVhc2UgY2FsbFwiICtcbiAgICAgICAgICBcIiBGQi5nZXRMb2dpblN0YXR1cygpIGV4cGxpY2l0bHkgaWYgeW91IHJlcXVpcmUgdGhpcyBiZWhhdmlvci5cIik7XG4gICAgICB9XG4gICAgICBpbml0T3B0aW9ucy5zdGF0dXMgPSBmYWxzZTtcbiAgICAgIEZCLmluaXQoaW5pdE9wdGlvbnMpO1xuICAgICAgUGFyc2UuVXNlci5fcmVnaXN0ZXJBdXRoZW50aWNhdGlvblByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSB1c2VyIGhhcyB0aGVpciBhY2NvdW50IGxpbmtlZCB0byBGYWNlYm9vay5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BhcnNlLlVzZXJ9IHVzZXIgVXNlciB0byBjaGVjayBmb3IgYSBmYWNlYm9vayBsaW5rLlxuICAgICAqICAgICBUaGUgdXNlciBtdXN0IGJlIGxvZ2dlZCBpbiBvbiB0aGlzIGRldmljZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgdXNlciBoYXMgdGhlaXIgYWNjb3VudFxuICAgICAqICAgICBsaW5rZWQgdG8gRmFjZWJvb2suXG4gICAgICovXG4gICAgaXNMaW5rZWQ6IGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgIHJldHVybiB1c2VyLl9pc0xpbmtlZChcImZhY2Vib29rXCIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGluIGEgdXNlciB1c2luZyBGYWNlYm9vay4gVGhpcyBtZXRob2QgZGVsZWdhdGVzIHRvIHRoZSBGYWNlYm9va1xuICAgICAqIFNESyB0byBhdXRoZW50aWNhdGUgdGhlIHVzZXIsIGFuZCB0aGVuIGF1dG9tYXRpY2FsbHkgbG9ncyBpbiAob3JcbiAgICAgKiBjcmVhdGVzLCBpbiB0aGUgY2FzZSB3aGVyZSBpdCBpcyBhIG5ldyB1c2VyKSBhIFBhcnNlLlVzZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmcsIE9iamVjdH0gcGVybWlzc2lvbnMgVGhlIHBlcm1pc3Npb25zIHJlcXVpcmVkIGZvciBGYWNlYm9va1xuICAgICAqICAgIGxvZyBpbi4gIFRoaXMgaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIG9mIHBlcm1pc3Npb25zLlxuICAgICAqICAgIEFsdGVybmF0aXZlbHksIHN1cHBseSBhIEZhY2Vib29rIGF1dGhEYXRhIG9iamVjdCBhcyBkZXNjcmliZWQgaW4gb3VyXG4gICAgICogICAgUkVTVCBBUEkgZG9jcyBpZiB5b3Ugd2FudCB0byBoYW5kbGUgZ2V0dGluZyBmYWNlYm9vayBhdXRoIHRva2Vuc1xuICAgICAqICAgIHlvdXJzZWxmLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFN0YW5kYXJkIG9wdGlvbnMgb2JqZWN0IHdpdGggc3VjY2VzcyBhbmQgZXJyb3JcbiAgICAgKiAgICBjYWxsYmFja3MuXG4gICAgICovXG4gICAgbG9nSW46IGZ1bmN0aW9uKHBlcm1pc3Npb25zLCBvcHRpb25zKSB7XG4gICAgICBpZiAoIXBlcm1pc3Npb25zIHx8IF8uaXNTdHJpbmcocGVybWlzc2lvbnMpKSB7XG4gICAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aHJvdyBcIllvdSBtdXN0IGluaXRpYWxpemUgRmFjZWJvb2tVdGlscyBiZWZvcmUgY2FsbGluZyBsb2dJbi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0ZWRQZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICAgICAgICByZXR1cm4gUGFyc2UuVXNlci5fbG9nSW5XaXRoKFwiZmFjZWJvb2tcIiwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IF8uY2xvbmUob3B0aW9ucykgfHwge307XG4gICAgICAgIG5ld09wdGlvbnMuYXV0aERhdGEgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgcmV0dXJuIFBhcnNlLlVzZXIuX2xvZ0luV2l0aChcImZhY2Vib29rXCIsIG5ld09wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaW5rcyBGYWNlYm9vayB0byBhbiBleGlzdGluZyBQRlVzZXIuIFRoaXMgbWV0aG9kIGRlbGVnYXRlcyB0byB0aGVcbiAgICAgKiBGYWNlYm9vayBTREsgdG8gYXV0aGVudGljYXRlIHRoZSB1c2VyLCBhbmQgdGhlbiBhdXRvbWF0aWNhbGx5IGxpbmtzXG4gICAgICogdGhlIGFjY291bnQgdG8gdGhlIFBhcnNlLlVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BhcnNlLlVzZXJ9IHVzZXIgVXNlciB0byBsaW5rIHRvIEZhY2Vib29rLiBUaGlzIG11c3QgYmUgdGhlXG4gICAgICogICAgIGN1cnJlbnQgdXNlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZywgT2JqZWN0fSBwZXJtaXNzaW9ucyBUaGUgcGVybWlzc2lvbnMgcmVxdWlyZWQgZm9yIEZhY2Vib29rXG4gICAgICogICAgbG9nIGluLiAgVGhpcyBpcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcgb2YgcGVybWlzc2lvbnMuIFxuICAgICAqICAgIEFsdGVybmF0aXZlbHksIHN1cHBseSBhIEZhY2Vib29rIGF1dGhEYXRhIG9iamVjdCBhcyBkZXNjcmliZWQgaW4gb3VyXG4gICAgICogICAgUkVTVCBBUEkgZG9jcyBpZiB5b3Ugd2FudCB0byBoYW5kbGUgZ2V0dGluZyBmYWNlYm9vayBhdXRoIHRva2Vuc1xuICAgICAqICAgIHlvdXJzZWxmLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFN0YW5kYXJkIG9wdGlvbnMgb2JqZWN0IHdpdGggc3VjY2VzcyBhbmQgZXJyb3JcbiAgICAgKiAgICBjYWxsYmFja3MuXG4gICAgICovXG4gICAgbGluazogZnVuY3Rpb24odXNlciwgcGVybWlzc2lvbnMsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghcGVybWlzc2lvbnMgfHwgXy5pc1N0cmluZyhwZXJtaXNzaW9ucykpIHtcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgIHRocm93IFwiWW91IG11c3QgaW5pdGlhbGl6ZSBGYWNlYm9va1V0aWxzIGJlZm9yZSBjYWxsaW5nIGxpbmsuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdGVkUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgcmV0dXJuIHVzZXIuX2xpbmtXaXRoKFwiZmFjZWJvb2tcIiwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IF8uY2xvbmUob3B0aW9ucykgfHwge307XG4gICAgICAgIG5ld09wdGlvbnMuYXV0aERhdGEgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgcmV0dXJuIHVzZXIuX2xpbmtXaXRoKFwiZmFjZWJvb2tcIiwgbmV3T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubGlua3MgdGhlIFBhcnNlLlVzZXIgZnJvbSBhIEZhY2Vib29rIGFjY291bnQuIFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGFyc2UuVXNlcn0gdXNlciBVc2VyIHRvIHVubGluayBmcm9tIEZhY2Vib29rLiBUaGlzIG11c3QgYmUgdGhlXG4gICAgICogICAgIGN1cnJlbnQgdXNlci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBTdGFuZGFyZCBvcHRpb25zIG9iamVjdCB3aXRoIHN1Y2Nlc3MgYW5kIGVycm9yXG4gICAgICogICAgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHVubGluazogZnVuY3Rpb24odXNlciwgb3B0aW9ucykge1xuICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICB0aHJvdyBcIllvdSBtdXN0IGluaXRpYWxpemUgRmFjZWJvb2tVdGlscyBiZWZvcmUgY2FsbGluZyB1bmxpbmsuXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXNlci5fdW5saW5rRnJvbShcImZhY2Vib29rXCIsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbiAgXG59KHRoaXMpKTtcblxuLypnbG9iYWwgXzogZmFsc2UsIGRvY3VtZW50OiBmYWxzZSwgd2luZG93OiBmYWxzZSwgbmF2aWdhdG9yOiBmYWxzZSAqL1xuKGZ1bmN0aW9uKHJvb3QpIHtcbiAgcm9vdC5QYXJzZSA9IHJvb3QuUGFyc2UgfHwge307XG4gIHZhciBQYXJzZSA9IHJvb3QuUGFyc2U7XG4gIHZhciBfID0gUGFyc2UuXztcblxuICAvKipcbiAgICogSGlzdG9yeSBzZXJ2ZXMgYXMgYSBnbG9iYWwgcm91dGVyIChwZXIgZnJhbWUpIHRvIGhhbmRsZSBoYXNoY2hhbmdlXG4gICAqIGV2ZW50cyBvciBwdXNoU3RhdGUsIG1hdGNoIHRoZSBhcHByb3ByaWF0ZSByb3V0ZSwgYW5kIHRyaWdnZXJcbiAgICogY2FsbGJhY2tzLiBZb3Ugc2hvdWxkbid0IGV2ZXIgaGF2ZSB0byBjcmVhdGUgb25lIG9mIHRoZXNlIHlvdXJzZWxmXG4gICAqIOKAlCB5b3Ugc2hvdWxkIHVzZSB0aGUgcmVmZXJlbmNlIHRvIDxjb2RlPlBhcnNlLmhpc3Rvcnk8L2NvZGU+XG4gICAqIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGZvciB5b3UgYXV0b21hdGljYWxseSBpZiB5b3UgbWFrZSB1c2Ugb2YgXG4gICAqIFJvdXRlcnMgd2l0aCByb3V0ZXMuXG4gICAqIEBjbGFzc1xuICAgKiAgIFxuICAgKiA8cD5BIGZvcmsgb2YgQmFja2JvbmUuSGlzdG9yeSwgcHJvdmlkZWQgZm9yIHlvdXIgY29udmVuaWVuY2UuICBJZiB5b3UgXG4gICAqIHVzZSB0aGlzIGNsYXNzLCB5b3UgbXVzdCBhbHNvIGluY2x1ZGUgalF1ZXJ5LCBvciBhbm90aGVyIGxpYnJhcnkgXG4gICAqIHRoYXQgcHJvdmlkZXMgYSBqUXVlcnktY29tcGF0aWJsZSAkIGZ1bmN0aW9uLiAgRm9yIG1vcmUgaW5mb3JtYXRpb24sXG4gICAqIHNlZSB0aGUgPGEgaHJlZj1cImh0dHA6Ly9kb2N1bWVudGNsb3VkLmdpdGh1Yi5jb20vYmFja2JvbmUvI0hpc3RvcnlcIj5cbiAgICogQmFja2JvbmUgZG9jdW1lbnRhdGlvbjwvYT4uPC9wPlxuICAgKiA8cD48c3Ryb25nPjxlbT5BdmFpbGFibGUgaW4gdGhlIGNsaWVudCBTREsgb25seS48L2VtPjwvc3Ryb25nPjwvcD5cbiAgICovXG4gIFBhcnNlLkhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgXy5iaW5kQWxsKHRoaXMsICdjaGVja1VybCcpO1xuICB9O1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3IgY2xlYW5pbmcgbGVhZGluZyBoYXNoZXMgYW5kIHNsYXNoZXMgLlxuICB2YXIgcm91dGVTdHJpcHBlciA9IC9eWyNcXC9dLztcblxuICAvLyBDYWNoZWQgcmVnZXggZm9yIGRldGVjdGluZyBNU0lFLlxuICB2YXIgaXNFeHBsb3JlciA9IC9tc2llIFtcXHcuXSsvO1xuXG4gIC8vIEhhcyB0aGUgaGlzdG9yeSBoYW5kbGluZyBhbHJlYWR5IGJlZW4gc3RhcnRlZD9cbiAgUGFyc2UuSGlzdG9yeS5zdGFydGVkID0gZmFsc2U7XG5cbiAgLy8gU2V0IHVwIGFsbCBpbmhlcml0YWJsZSAqKlBhcnNlLkhpc3RvcnkqKiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICBfLmV4dGVuZChQYXJzZS5IaXN0b3J5LnByb3RvdHlwZSwgUGFyc2UuRXZlbnRzLFxuICAgICAgICAgICAvKiogQGxlbmRzIFBhcnNlLkhpc3RvcnkucHJvdG90eXBlICovIHtcblxuICAgIC8vIFRoZSBkZWZhdWx0IGludGVydmFsIHRvIHBvbGwgZm9yIGhhc2ggY2hhbmdlcywgaWYgbmVjZXNzYXJ5LCBpc1xuICAgIC8vIHR3ZW50eSB0aW1lcyBhIHNlY29uZC5cbiAgICBpbnRlcnZhbDogNTAsXG5cbiAgICAvLyBHZXRzIHRoZSB0cnVlIGhhc2ggdmFsdWUuIENhbm5vdCB1c2UgbG9jYXRpb24uaGFzaCBkaXJlY3RseSBkdWUgdG8gYnVnXG4gICAgLy8gaW4gRmlyZWZveCB3aGVyZSBsb2NhdGlvbi5oYXNoIHdpbGwgYWx3YXlzIGJlIGRlY29kZWQuXG4gICAgZ2V0SGFzaDogZnVuY3Rpb24od2luZG93T3ZlcnJpZGUpIHtcbiAgICAgIHZhciBsb2MgPSB3aW5kb3dPdmVycmlkZSA/IHdpbmRvd092ZXJyaWRlLmxvY2F0aW9uIDogd2luZG93LmxvY2F0aW9uO1xuICAgICAgdmFyIG1hdGNoID0gbG9jLmhyZWYubWF0Y2goLyMoLiopJC8pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBjcm9zcy1icm93c2VyIG5vcm1hbGl6ZWQgVVJMIGZyYWdtZW50LCBlaXRoZXIgZnJvbSB0aGUgVVJMLFxuICAgIC8vIHRoZSBoYXNoLCBvciB0aGUgb3ZlcnJpZGUuXG4gICAgZ2V0RnJhZ21lbnQ6IGZ1bmN0aW9uKGZyYWdtZW50LCBmb3JjZVB1c2hTdGF0ZSkge1xuICAgICAgaWYgKFBhcnNlLl9pc051bGxPclVuZGVmaW5lZChmcmFnbWVudCkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSB8fCBmb3JjZVB1c2hTdGF0ZSkge1xuICAgICAgICAgIGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICAgIHZhciBzZWFyY2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ICs9IHNlYXJjaDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLmdldEhhc2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFmcmFnbWVudC5pbmRleE9mKHRoaXMub3B0aW9ucy5yb290KSkge1xuICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50LnN1YnN0cih0aGlzLm9wdGlvbnMucm9vdC5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZyYWdtZW50LnJlcGxhY2Uocm91dGVTdHJpcHBlciwgJycpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgaGFzaCBjaGFuZ2UgaGFuZGxpbmcsIHJldHVybmluZyBgdHJ1ZWAgaWYgdGhlIGN1cnJlbnRcbiAgICAgKiBVUkwgbWF0Y2hlcyBhbiBleGlzdGluZyByb3V0ZSwgYW5kIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAoUGFyc2UuSGlzdG9yeS5zdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlLmhpc3RvcnkgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkXCIpO1xuICAgICAgfVxuICAgICAgUGFyc2UuSGlzdG9yeS5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgLy8gRmlndXJlIG91dCB0aGUgaW5pdGlhbCBjb25maWd1cmF0aW9uLiBEbyB3ZSBuZWVkIGFuIGlmcmFtZT9cbiAgICAgIC8vIElzIHB1c2hTdGF0ZSBkZXNpcmVkIC4uLiBpcyBpdCBhdmFpbGFibGU/XG4gICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwge3Jvb3Q6ICcvJ30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICB0aGlzLl93YW50c0hhc2hDaGFuZ2UgPSB0aGlzLm9wdGlvbnMuaGFzaENoYW5nZSAhPT0gZmFsc2U7XG4gICAgICB0aGlzLl93YW50c1B1c2hTdGF0ZSA9ICEhdGhpcy5vcHRpb25zLnB1c2hTdGF0ZTtcbiAgICAgIHRoaXMuX2hhc1B1c2hTdGF0ZSA9ICEhKHRoaXMub3B0aW9ucy5wdXNoU3RhdGUgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKTtcbiAgICAgIHZhciBmcmFnbWVudCA9IHRoaXMuZ2V0RnJhZ21lbnQoKTtcbiAgICAgIHZhciBkb2NNb2RlID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgICAgdmFyIG9sZElFID0gKGlzRXhwbG9yZXIuZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpICYmXG4gICAgICAgICAgICAgICAgICAgKCFkb2NNb2RlIHx8IGRvY01vZGUgPD0gNykpO1xuXG4gICAgICBpZiAob2xkSUUpIHtcbiAgICAgICAgdGhpcy5pZnJhbWUgPSBQYXJzZS4kKCc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIHRhYmluZGV4PVwiLTFcIiAvPicpXG4gICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKS5hcHBlbmRUbygnYm9keScpWzBdLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoZnJhZ21lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXBlbmRpbmcgb24gd2hldGhlciB3ZSdyZSB1c2luZyBwdXNoU3RhdGUgb3IgaGFzaGVzLCBhbmQgd2hldGhlclxuICAgICAgLy8gJ29uaGFzaGNoYW5nZScgaXMgc3VwcG9ydGVkLCBkZXRlcm1pbmUgaG93IHdlIGNoZWNrIHRoZSBVUkwgc3RhdGUuXG4gICAgICBpZiAodGhpcy5faGFzUHVzaFN0YXRlKSB7XG4gICAgICAgIFBhcnNlLiQod2luZG93KS5iaW5kKCdwb3BzdGF0ZScsIHRoaXMuY2hlY2tVcmwpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgKCdvbmhhc2hjaGFuZ2UnIGluIHdpbmRvdykgJiZcbiAgICAgICAgICAgICAgICAgIW9sZElFKSB7XG4gICAgICAgIFBhcnNlLiQod2luZG93KS5iaW5kKCdoYXNoY2hhbmdlJywgdGhpcy5jaGVja1VybCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9jaGVja1VybEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHRoaXMuY2hlY2tVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSBpZiB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgYmFzZSB1cmwsIGZvciBhIHB1c2hTdGF0ZSBsaW5rXG4gICAgICAvLyBvcGVuZWQgYnkgYSBub24tcHVzaFN0YXRlIGJyb3dzZXIuXG4gICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgICB2YXIgbG9jID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgdmFyIGF0Um9vdCAgPSBsb2MucGF0aG5hbWUgPT09IHRoaXMub3B0aW9ucy5yb290O1xuXG4gICAgICAvLyBJZiB3ZSd2ZSBzdGFydGVkIG9mZiB3aXRoIGEgcm91dGUgZnJvbSBhIGBwdXNoU3RhdGVgLWVuYWJsZWQgYnJvd3NlcixcbiAgICAgIC8vIGJ1dCB3ZSdyZSBjdXJyZW50bHkgaW4gYSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IGl0Li4uXG4gICAgICBpZiAodGhpcy5fd2FudHNIYXNoQ2hhbmdlICYmIFxuICAgICAgICAgIHRoaXMuX3dhbnRzUHVzaFN0YXRlICYmIFxuICAgICAgICAgICF0aGlzLl9oYXNQdXNoU3RhdGUgJiZcbiAgICAgICAgICAhYXRSb290KSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSB0aGlzLmdldEZyYWdtZW50KG51bGwsIHRydWUpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh0aGlzLm9wdGlvbnMucm9vdCArICcjJyArIHRoaXMuZnJhZ21lbnQpO1xuICAgICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgYXMgYnJvd3NlciB3aWxsIGRvIHJlZGlyZWN0IHRvIG5ldyB1cmxcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgIC8vIE9yIGlmIHdlJ3ZlIHN0YXJ0ZWQgb3V0IHdpdGggYSBoYXNoLWJhc2VkIHJvdXRlLCBidXQgd2UncmUgY3VycmVudGx5XG4gICAgICAvLyBpbiBhIGJyb3dzZXIgd2hlcmUgaXQgY291bGQgYmUgYHB1c2hTdGF0ZWAtYmFzZWQgaW5zdGVhZC4uLlxuICAgICAgfSBlbHNlIGlmICh0aGlzLl93YW50c1B1c2hTdGF0ZSAmJlxuICAgICAgICAgICAgICAgICB0aGlzLl9oYXNQdXNoU3RhdGUgJiYgXG4gICAgICAgICAgICAgICAgIGF0Um9vdCAmJlxuICAgICAgICAgICAgICAgICBsb2MuaGFzaCkge1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRIYXNoKCkucmVwbGFjZShyb3V0ZVN0cmlwcGVyLCAnJyk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICBsb2MucHJvdG9jb2wgKyAnLy8nICsgbG9jLmhvc3QgKyB0aGlzLm9wdGlvbnMucm9vdCArIHRoaXMuZnJhZ21lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZFVybCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEaXNhYmxlIFBhcnNlLmhpc3RvcnksIHBlcmhhcHMgdGVtcG9yYXJpbHkuIE5vdCB1c2VmdWwgaW4gYSByZWFsIGFwcCxcbiAgICAvLyBidXQgcG9zc2libHkgdXNlZnVsIGZvciB1bml0IHRlc3RpbmcgUm91dGVycy5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIFBhcnNlLiQod2luZG93KS51bmJpbmQoJ3BvcHN0YXRlJywgdGhpcy5jaGVja1VybClcbiAgICAgICAgICAgICAgICAgICAgIC51bmJpbmQoJ2hhc2hjaGFuZ2UnLCB0aGlzLmNoZWNrVXJsKTtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2NoZWNrVXJsSW50ZXJ2YWwpO1xuICAgICAgUGFyc2UuSGlzdG9yeS5zdGFydGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIHJvdXRlIHRvIGJlIHRlc3RlZCB3aGVuIHRoZSBmcmFnbWVudCBjaGFuZ2VzLiBSb3V0ZXMgYWRkZWQgbGF0ZXJcbiAgICAvLyBtYXkgb3ZlcnJpZGUgcHJldmlvdXMgcm91dGVzLlxuICAgIHJvdXRlOiBmdW5jdGlvbihyb3V0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMudW5zaGlmdCh7cm91dGU6IHJvdXRlLCBjYWxsYmFjazogY2FsbGJhY2t9KTtcbiAgICB9LFxuXG4gICAgLy8gQ2hlY2tzIHRoZSBjdXJyZW50IFVSTCB0byBzZWUgaWYgaXQgaGFzIGNoYW5nZWQsIGFuZCBpZiBpdCBoYXMsXG4gICAgLy8gY2FsbHMgYGxvYWRVcmxgLCBub3JtYWxpemluZyBhY3Jvc3MgdGhlIGhpZGRlbiBpZnJhbWUuXG4gICAgY2hlY2tVcmw6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXRGcmFnbWVudCgpO1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZnJhZ21lbnQgJiYgdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0RnJhZ21lbnQodGhpcy5nZXRIYXNoKHRoaXMuaWZyYW1lKSk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mcmFnbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5sb2FkVXJsKCkpIHtcbiAgICAgICAgdGhpcy5sb2FkVXJsKHRoaXMuZ2V0SGFzaCgpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQXR0ZW1wdCB0byBsb2FkIHRoZSBjdXJyZW50IFVSTCBmcmFnbWVudC4gSWYgYSByb3V0ZSBzdWNjZWVkcyB3aXRoIGFcbiAgICAvLyBtYXRjaCwgcmV0dXJucyBgdHJ1ZWAuIElmIG5vIGRlZmluZWQgcm91dGVzIG1hdGNoZXMgdGhlIGZyYWdtZW50LFxuICAgIC8vIHJldHVybnMgYGZhbHNlYC5cbiAgICBsb2FkVXJsOiBmdW5jdGlvbihmcmFnbWVudE92ZXJyaWRlKSB7XG4gICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChmcmFnbWVudE92ZXJyaWRlKTtcbiAgICAgIHZhciBtYXRjaGVkID0gXy5hbnkodGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICBpZiAoaGFuZGxlci5yb3V0ZS50ZXN0KGZyYWdtZW50KSkge1xuICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZnJhZ21lbnQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH0sXG5cbiAgICAvLyBTYXZlIGEgZnJhZ21lbnQgaW50byB0aGUgaGFzaCBoaXN0b3J5LCBvciByZXBsYWNlIHRoZSBVUkwgc3RhdGUgaWYgdGhlXG4gICAgLy8gJ3JlcGxhY2UnIG9wdGlvbiBpcyBwYXNzZWQuIFlvdSBhcmUgcmVzcG9uc2libGUgZm9yIHByb3Blcmx5IFVSTC1lbmNvZGluZ1xuICAgIC8vIHRoZSBmcmFnbWVudCBpbiBhZHZhbmNlLlxuICAgIC8vXG4gICAgLy8gVGhlIG9wdGlvbnMgb2JqZWN0IGNhbiBjb250YWluIGB0cmlnZ2VyOiB0cnVlYCBpZiB5b3Ugd2lzaCB0byBoYXZlIHRoZVxuICAgIC8vIHJvdXRlIGNhbGxiYWNrIGJlIGZpcmVkIChub3QgdXN1YWxseSBkZXNpcmFibGUpLCBvciBgcmVwbGFjZTogdHJ1ZWAsIGlmXG4gICAgLy8geW91IHdpc2ggdG8gbW9kaWZ5IHRoZSBjdXJyZW50IFVSTCB3aXRob3V0IGFkZGluZyBhbiBlbnRyeSB0byB0aGVcbiAgICAvLyBoaXN0b3J5LlxuICAgIG5hdmlnYXRlOiBmdW5jdGlvbihmcmFnbWVudCwgb3B0aW9ucykge1xuICAgICAgaWYgKCFQYXJzZS5IaXN0b3J5LnN0YXJ0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt0cmlnZ2VyOiBvcHRpb25zfTtcbiAgICAgIH1cbiAgICAgIHZhciBmcmFnID0gKGZyYWdtZW50IHx8ICcnKS5yZXBsYWNlKHJvdXRlU3RyaXBwZXIsICcnKTtcbiAgICAgIGlmICh0aGlzLmZyYWdtZW50ID09PSBmcmFnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgcHVzaFN0YXRlIGlzIGF2YWlsYWJsZSwgd2UgdXNlIGl0IHRvIHNldCB0aGUgZnJhZ21lbnQgYXMgYSByZWFsIFVSTC5cbiAgICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUpIHtcbiAgICAgICAgaWYgKGZyYWcuaW5kZXhPZih0aGlzLm9wdGlvbnMucm9vdCkgIT09IDApIHtcbiAgICAgICAgICBmcmFnID0gdGhpcy5vcHRpb25zLnJvb3QgKyBmcmFnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnO1xuICAgICAgICB2YXIgcmVwbGFjZU9yUHVzaCA9IG9wdGlvbnMucmVwbGFjZSA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSc7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5W3JlcGxhY2VPclB1c2hdKHt9LCBkb2N1bWVudC50aXRsZSwgZnJhZyk7XG5cbiAgICAgIC8vIElmIGhhc2ggY2hhbmdlcyBoYXZlbid0IGJlZW4gZXhwbGljaXRseSBkaXNhYmxlZCwgdXBkYXRlIHRoZSBoYXNoXG4gICAgICAvLyBmcmFnbWVudCB0byBzdG9yZSBoaXN0b3J5LlxuICAgICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5mcmFnbWVudCA9IGZyYWc7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhhc2god2luZG93LmxvY2F0aW9uLCBmcmFnLCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUgJiZcbiAgICAgICAgICAgIChmcmFnICE9PSB0aGlzLmdldEZyYWdtZW50KHRoaXMuZ2V0SGFzaCh0aGlzLmlmcmFtZSkpKSkge1xuICAgICAgICAgIC8vIE9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlIGlmcmFtZSB0cmlja3MgSUU3IGFuZCBlYXJsaWVyXG4gICAgICAgICAgLy8gdG8gcHVzaCBhIGhpc3RvcnkgZW50cnkgb24gaGFzaC10YWcgY2hhbmdlLlxuICAgICAgICAgIC8vIFdoZW4gcmVwbGFjZSBpcyB0cnVlLCB3ZSBkb24ndCB3YW50IHRoaXMuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLnJlcGxhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLmRvY3VtZW50Lm9wZW4oKS5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl91cGRhdGVIYXNoKHRoaXMuaWZyYW1lLmxvY2F0aW9uLCBmcmFnLCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSd2ZSB0b2xkIHVzIHRoYXQgeW91IGV4cGxpY2l0bHkgZG9uJ3Qgd2FudCBmYWxsYmFjayBoYXNoY2hhbmdlLVxuICAgICAgLy8gYmFzZWQgaGlzdG9yeSwgdGhlbiBgbmF2aWdhdGVgIGJlY29tZXMgYSBwYWdlIHJlZnJlc2guXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMub3B0aW9ucy5yb290ICsgZnJhZ21lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlcikge1xuICAgICAgICB0aGlzLmxvYWRVcmwoZnJhZ21lbnQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgdGhlIGhhc2ggbG9jYXRpb24sIGVpdGhlciByZXBsYWNpbmcgdGhlIGN1cnJlbnQgZW50cnksIG9yIGFkZGluZ1xuICAgIC8vIGEgbmV3IG9uZSB0byB0aGUgYnJvd3NlciBoaXN0b3J5LlxuICAgIF91cGRhdGVIYXNoOiBmdW5jdGlvbihsb2NhdGlvbiwgZnJhZ21lbnQsIHJlcGxhY2UpIHtcbiAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgIHZhciBzID0gbG9jYXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC8oamF2YXNjcmlwdDp8IykuKiQvLCAnJyk7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UocyArICcjJyArIGZyYWdtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSBmcmFnbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSh0aGlzKSk7XG5cbi8qZ2xvYmFsIF86IGZhbHNlKi9cbihmdW5jdGlvbihyb290KSB7XG4gIHJvb3QuUGFyc2UgPSByb290LlBhcnNlIHx8IHt9O1xuICB2YXIgUGFyc2UgPSByb290LlBhcnNlO1xuICB2YXIgXyA9IFBhcnNlLl87XG5cbiAgLyoqXG4gICAqIFJvdXRlcnMgbWFwIGZhdXgtVVJMcyB0byBhY3Rpb25zLCBhbmQgZmlyZSBldmVudHMgd2hlbiByb3V0ZXMgYXJlXG4gICAqIG1hdGNoZWQuIENyZWF0aW5nIGEgbmV3IG9uZSBzZXRzIGl0cyBgcm91dGVzYCBoYXNoLCBpZiBub3Qgc2V0IHN0YXRpY2FsbHkuXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKiA8cD5BIGZvcmsgb2YgQmFja2JvbmUuUm91dGVyLCBwcm92aWRlZCBmb3IgeW91ciBjb252ZW5pZW5jZS5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGVcbiAgICogPGEgaHJlZj1cImh0dHA6Ly9kb2N1bWVudGNsb3VkLmdpdGh1Yi5jb20vYmFja2JvbmUvI1JvdXRlclwiPkJhY2tib25lXG4gICAqIGRvY3VtZW50YXRpb248L2E+LjwvcD5cbiAgICogPHA+PHN0cm9uZz48ZW0+QXZhaWxhYmxlIGluIHRoZSBjbGllbnQgU0RLIG9ubHkuPC9lbT48L3N0cm9uZz48L3A+XG4gICAqL1xuICBQYXJzZS5Sb3V0ZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKG9wdGlvbnMucm91dGVzKSB7XG4gICAgICB0aGlzLnJvdXRlcyA9IG9wdGlvbnMucm91dGVzO1xuICAgIH1cbiAgICB0aGlzLl9iaW5kUm91dGVzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIG1hdGNoaW5nIG5hbWVkIHBhcmFtIHBhcnRzIGFuZCBzcGxhdHRlZFxuICAvLyBwYXJ0cyBvZiByb3V0ZSBzdHJpbmdzLlxuICB2YXIgbmFtZWRQYXJhbSAgICA9IC86XFx3Ky9nO1xuICB2YXIgc3BsYXRQYXJhbSAgICA9IC9cXCpcXHcrL2c7XG4gIHZhciBlc2NhcGVSZWdFeHAgID0gL1tcXC1cXFtcXF17fSgpKz8uLFxcXFxcXF5cXCRcXHwjXFxzXS9nO1xuXG4gIC8vIFNldCB1cCBhbGwgaW5oZXJpdGFibGUgKipQYXJzZS5Sb3V0ZXIqKiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICBfLmV4dGVuZChQYXJzZS5Sb3V0ZXIucHJvdG90eXBlLCBQYXJzZS5FdmVudHMsXG4gICAgICAgICAgIC8qKiBAbGVuZHMgUGFyc2UuUm91dGVyLnByb3RvdHlwZSAqLyB7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGlzIGFuIGVtcHR5IGZ1bmN0aW9uIGJ5IGRlZmF1bHQuIE92ZXJyaWRlIGl0IHdpdGggeW91ciBvd25cbiAgICAgKiBpbml0aWFsaXphdGlvbiBsb2dpYy5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpe30sXG5cbiAgICAvKipcbiAgICAgKiBNYW51YWxseSBiaW5kIGEgc2luZ2xlIG5hbWVkIHJvdXRlIHRvIGEgY2FsbGJhY2suIEZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogPHByZT50aGlzLnJvdXRlKCdzZWFyY2gvOnF1ZXJ5L3A6bnVtJywgJ3NlYXJjaCcsIGZ1bmN0aW9uKHF1ZXJ5LCBudW0pIHtcbiAgICAgKiAgICAgICAuLi5cbiAgICAgKiAgICAgfSk7PC9wcmU+XG4gICAgICovXG4gICAgcm91dGU6IGZ1bmN0aW9uKHJvdXRlLCBuYW1lLCBjYWxsYmFjaykge1xuICAgICAgUGFyc2UuaGlzdG9yeSA9IFBhcnNlLmhpc3RvcnkgfHwgbmV3IFBhcnNlLkhpc3RvcnkoKTtcbiAgICAgIGlmICghXy5pc1JlZ0V4cChyb3V0ZSkpIHtcbiAgICAgICAgcm91dGUgPSB0aGlzLl9yb3V0ZVRvUmVnRXhwKHJvdXRlKTtcbiAgICAgIH0gXG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gdGhpc1tuYW1lXTtcbiAgICAgIH1cbiAgICAgIFBhcnNlLmhpc3Rvcnkucm91dGUocm91dGUsIF8uYmluZChmdW5jdGlvbihmcmFnbWVudCkge1xuICAgICAgICB2YXIgYXJncyA9IHRoaXMuX2V4dHJhY3RQYXJhbWV0ZXJzKHJvdXRlLCBmcmFnbWVudCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlci5hcHBseSh0aGlzLCBbJ3JvdXRlOicgKyBuYW1lXS5jb25jYXQoYXJncykpO1xuICAgICAgICBQYXJzZS5oaXN0b3J5LnRyaWdnZXIoJ3JvdXRlJywgdGhpcywgbmFtZSwgYXJncyk7XG4gICAgICB9LCB0aGlzKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbmV2ZXIgeW91IHJlYWNoIGEgcG9pbnQgaW4geW91ciBhcHBsaWNhdGlvbiB0aGF0IHlvdSdkXG4gICAgICogbGlrZSB0byBzYXZlIGFzIGEgVVJMLCBjYWxsIG5hdmlnYXRlIGluIG9yZGVyIHRvIHVwZGF0ZSB0aGVcbiAgICAgKiBVUkwuIElmIHlvdSB3aXNoIHRvIGFsc28gY2FsbCB0aGUgcm91dGUgZnVuY3Rpb24sIHNldCB0aGUgXG4gICAgICogdHJpZ2dlciBvcHRpb24gdG8gdHJ1ZS4gVG8gdXBkYXRlIHRoZSBVUkwgd2l0aG91dCBjcmVhdGluZ1xuICAgICAqIGFuIGVudHJ5IGluIHRoZSBicm93c2VyJ3MgaGlzdG9yeSwgc2V0IHRoZSByZXBsYWNlIG9wdGlvblxuICAgICAqIHRvIHRydWUuXG4gICAgICovXG4gICAgbmF2aWdhdGU6IGZ1bmN0aW9uKGZyYWdtZW50LCBvcHRpb25zKSB7XG4gICAgICBQYXJzZS5oaXN0b3J5Lm5hdmlnYXRlKGZyYWdtZW50LCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLy8gQmluZCBhbGwgZGVmaW5lZCByb3V0ZXMgdG8gYFBhcnNlLmhpc3RvcnlgLiBXZSBoYXZlIHRvIHJldmVyc2UgdGhlXG4gICAgLy8gb3JkZXIgb2YgdGhlIHJvdXRlcyBoZXJlIHRvIHN1cHBvcnQgYmVoYXZpb3Igd2hlcmUgdGhlIG1vc3QgZ2VuZXJhbFxuICAgIC8vIHJvdXRlcyBjYW4gYmUgZGVmaW5lZCBhdCB0aGUgYm90dG9tIG9mIHRoZSByb3V0ZSBtYXAuXG4gICAgX2JpbmRSb3V0ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnJvdXRlcykgeyBcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJvdXRlcyA9IFtdO1xuICAgICAgZm9yICh2YXIgcm91dGUgaW4gdGhpcy5yb3V0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVzLmhhc093blByb3BlcnR5KHJvdXRlKSkge1xuICAgICAgICAgIHJvdXRlcy51bnNoaWZ0KFtyb3V0ZSwgdGhpcy5yb3V0ZXNbcm91dGVdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLnJvdXRlKHJvdXRlc1tpXVswXSwgcm91dGVzW2ldWzFdLCB0aGlzW3JvdXRlc1tpXVsxXV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgcm91dGUgc3RyaW5nIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24sIHN1aXRhYmxlIGZvciBtYXRjaGluZ1xuICAgIC8vIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaC5cbiAgICBfcm91dGVUb1JlZ0V4cDogZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgIHJvdXRlID0gcm91dGUucmVwbGFjZShlc2NhcGVSZWdFeHAsICdcXFxcJCYnKVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5hbWVkUGFyYW0sICcoW15cXC9dKyknKVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHNwbGF0UGFyYW0sICcoLio/KScpO1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcm91dGUgKyAnJCcpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBhIHJvdXRlLCBhbmQgYSBVUkwgZnJhZ21lbnQgdGhhdCBpdCBtYXRjaGVzLCByZXR1cm4gdGhlIGFycmF5IG9mXG4gICAgLy8gZXh0cmFjdGVkIHBhcmFtZXRlcnMuXG4gICAgX2V4dHJhY3RQYXJhbWV0ZXJzOiBmdW5jdGlvbihyb3V0ZSwgZnJhZ21lbnQpIHtcbiAgICAgIHJldHVybiByb3V0ZS5leGVjKGZyYWdtZW50KS5zbGljZSgxKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlUHJvcHMgSW5zdGFuY2UgcHJvcGVydGllcyBmb3IgdGhlIHJvdXRlci5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNsYXNzUHJvcHMgQ2xhc3MgcHJvcGVyaWVzIGZvciB0aGUgcm91dGVyLlxuICAgKiBAcmV0dXJuIHtDbGFzc30gQSBuZXcgc3ViY2xhc3Mgb2YgPGNvZGU+UGFyc2UuUm91dGVyPC9jb2RlPi5cbiAgICovXG4gIFBhcnNlLlJvdXRlci5leHRlbmQgPSBQYXJzZS5fZXh0ZW5kO1xufSh0aGlzKSk7XG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcbiAgdmFyIF8gPSBQYXJzZS5fO1xuXG4gIC8qKlxuICAgKiBAbmFtZXNwYWNlIENvbnRhaW5zIGZ1bmN0aW9ucyBmb3IgY2FsbGluZyBhbmQgZGVjbGFyaW5nXG4gICAqIDxhIGhyZWY9XCIvZG9jcy9jbG91ZF9jb2RlX2d1aWRlI2Z1bmN0aW9uc1wiPmNsb3VkIGZ1bmN0aW9uczwvYT4uXG4gICAqIDxwPjxzdHJvbmc+PGVtPlxuICAgKiAgIFNvbWUgZnVuY3Rpb25zIGFyZSBvbmx5IGF2YWlsYWJsZSBmcm9tIENsb3VkIENvZGUuXG4gICAqIDwvZW0+PC9zdHJvbmc+PC9wPlxuICAgKi9cbiAgUGFyc2UuQ2xvdWQgPSBQYXJzZS5DbG91ZCB8fCB7fTtcblxuICBfLmV4dGVuZChQYXJzZS5DbG91ZCwgLyoqIEBsZW5kcyBQYXJzZS5DbG91ZCAqLyB7XG4gICAgLyoqXG4gICAgICogTWFrZXMgYSBjYWxsIHRvIGEgY2xvdWQgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZ1bmN0aW9uIG5hbWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgY2xvdWQgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBCYWNrYm9uZS1zdHlsZSBvcHRpb25zIG9iamVjdFxuICAgICAqIG9wdGlvbnMuc3VjY2VzcywgaWYgc2V0LCBzaG91bGQgYmUgYSBmdW5jdGlvbiB0byBoYW5kbGUgYSBzdWNjZXNzZnVsXG4gICAgICogY2FsbCB0byBhIGNsb3VkIGZ1bmN0aW9uLiAgb3B0aW9ucy5lcnJvciBzaG91bGQgYmUgYSBmdW5jdGlvbiB0aGF0XG4gICAgICogaGFuZGxlcyBhbiBlcnJvciBydW5uaW5nIHRoZSBjbG91ZCBmdW5jdGlvbi4gIEJvdGggZnVuY3Rpb25zIGFyZVxuICAgICAqIG9wdGlvbmFsLiAgQm90aCBmdW5jdGlvbnMgdGFrZSBhIHNpbmdsZSBhcmd1bWVudC5cbiAgICAgKiBAcmV0dXJuIHtQYXJzZS5Qcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggdGhlIHJlc3VsdFxuICAgICAqIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKG5hbWUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICB2YXIgcmVxdWVzdCA9IFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgICAgcm91dGU6IFwiZnVuY3Rpb25zXCIsXG4gICAgICAgIGNsYXNzTmFtZTogbmFtZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVzZU1hc3RlcktleTogb3B0aW9ucy51c2VNYXN0ZXJLZXksXG4gICAgICAgIHNlc3Npb25Ub2tlbjogb3B0aW9ucy5zZXNzaW9uVG9rZW4sXG4gICAgICAgIGRhdGE6IFBhcnNlLl9lbmNvZGUoZGF0YSwgbnVsbCwgdHJ1ZSlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVxdWVzdC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgcmV0dXJuIFBhcnNlLl9kZWNvZGUobnVsbCwgcmVzcCkucmVzdWx0O1xuICAgICAgfSkuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn0odGhpcykpO1xuXG4oZnVuY3Rpb24ocm9vdCkge1xuICByb290LlBhcnNlID0gcm9vdC5QYXJzZSB8fCB7fTtcbiAgdmFyIFBhcnNlID0gcm9vdC5QYXJzZTtcblxuICBQYXJzZS5JbnN0YWxsYXRpb24gPSBQYXJzZS5PYmplY3QuZXh0ZW5kKFwiX0luc3RhbGxhdGlvblwiKTtcblxuICAvKipcbiAgICogQ29udGFpbnMgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aCBQdXNoIGluIFBhcnNlXG4gICAqIEBuYW1lIFBhcnNlLlB1c2hcbiAgICogQG5hbWVzcGFjZVxuICAgKi9cbiAgUGFyc2UuUHVzaCA9IFBhcnNlLlB1c2ggfHwge307XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcHVzaCBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gIFRoZSBkYXRhIG9mIHRoZSBwdXNoIG5vdGlmaWNhdGlvbi4gIFZhbGlkIGZpZWxkc1xuICAgKiBhcmU6XG4gICAqICAgPG9sPlxuICAgKiAgICAgPGxpPmNoYW5uZWxzIC0gQW4gQXJyYXkgb2YgY2hhbm5lbHMgdG8gcHVzaCB0by48L2xpPlxuICAgKiAgICAgPGxpPnB1c2hfdGltZSAtIEEgRGF0ZSBvYmplY3QgZm9yIHdoZW4gdG8gc2VuZCB0aGUgcHVzaC48L2xpPlxuICAgKiAgICAgPGxpPmV4cGlyYXRpb25fdGltZSAtICBBIERhdGUgb2JqZWN0IGZvciB3aGVuIHRvIGV4cGlyZVxuICAgKiAgICAgICAgIHRoZSBwdXNoLjwvbGk+XG4gICAqICAgICA8bGk+ZXhwaXJhdGlvbl9pbnRlcnZhbCAtIFRoZSBzZWNvbmRzIGZyb20gbm93IHRvIGV4cGlyZSB0aGUgcHVzaC48L2xpPlxuICAgKiAgICAgPGxpPndoZXJlIC0gQSBQYXJzZS5RdWVyeSBvdmVyIFBhcnNlLkluc3RhbGxhdGlvbiB0aGF0IGlzIHVzZWQgdG8gbWF0Y2hcbiAgICogICAgICAgICBhIHNldCBvZiBpbnN0YWxsYXRpb25zIHRvIHB1c2ggdG8uPC9saT5cbiAgICogICAgIDxsaT5kYXRhIC0gVGhlIGRhdGEgdG8gc2VuZCBhcyBwYXJ0IG9mIHRoZSBwdXNoPC9saT5cbiAgICogICA8b2w+XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IGhhcyBhbiBvcHRpb25hbCBzdWNjZXNzIGZ1bmN0aW9uLFxuICAgKiB0aGF0IHRha2VzIG5vIGFyZ3VtZW50cyBhbmQgd2lsbCBiZSBjYWxsZWQgb24gYSBzdWNjZXNzZnVsIHB1c2gsIGFuZFxuICAgKiBhbiBlcnJvciBmdW5jdGlvbiB0aGF0IHRha2VzIGEgUGFyc2UuRXJyb3IgYW5kIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBwdXNoXG4gICAqIGZhaWxlZC5cbiAgICogQHJldHVybiB7UGFyc2UuUHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhlIHB1c2ggcmVxdWVzdFxuICAgKiAgICAgY29tcGxldGVzLlxuICAgKi9cbiAgUGFyc2UuUHVzaC5zZW5kID0gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKGRhdGEud2hlcmUpIHtcbiAgICAgIGRhdGEud2hlcmUgPSBkYXRhLndoZXJlLnRvSlNPTigpLndoZXJlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnB1c2hfdGltZSkge1xuICAgICAgZGF0YS5wdXNoX3RpbWUgPSBkYXRhLnB1c2hfdGltZS50b0pTT04oKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5leHBpcmF0aW9uX3RpbWUpIHtcbiAgICAgIGRhdGEuZXhwaXJhdGlvbl90aW1lID0gZGF0YS5leHBpcmF0aW9uX3RpbWUudG9KU09OKCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZXhwaXJhdGlvbl90aW1lICYmIGRhdGEuZXhwaXJhdGlvbl9pbnRlcnZhbCkge1xuICAgICAgdGhyb3cgXCJCb3RoIGV4cGlyYXRpb25fdGltZSBhbmQgZXhwaXJhdGlvbl9pbnRlcnZhbCBjYW4ndCBiZSBzZXRcIjtcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IFBhcnNlLl9yZXF1ZXN0KHtcbiAgICAgIHJvdXRlOiAncHVzaCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB1c2VNYXN0ZXJLZXk6IG9wdGlvbnMudXNlTWFzdGVyS2V5XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3QuX3RoZW5SdW5DYWxsYmFja3Mob3B0aW9ucyk7XG4gIH07XG59KHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BhcnNlL2J1aWxkL3BhcnNlLWxhdGVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2VicGFjay1zdHJlYW0vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
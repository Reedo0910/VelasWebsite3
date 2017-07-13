/**
 * Adapted from dominus v6.0.1
 * https://github.com/bevacqua/dominus/blob/master/src/classes.js
 */

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;

function interpret(input) {
  return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

export function classes(el) {
  if (isElement(el)) {
    return el.className.replace(trim, '').split(whitespace);
  }

  return [];
}

export function set(el, input) {
  if (isElement(el)) {
    el.className = interpret(input).join(' ');
  }
}

export function add(el, input) {
  var current = remove(el, input);
  var values = interpret(input);

  current.push.apply(current, values);
  set(el, current);

  return current;
}

export function remove(el, input) {
  var current = classes(el);
  var values = interpret(input);

  values.forEach(function(value) {
    var i = current.indexOf(value);
    if (i !== -1) {
      current.splice(i, 1);
    }
  });

  set(el, current);

  return current;
}

export function contains(el, input) {
  var current = classes(el);
  var values = interpret(input);

  return values.every(function(value) {
    return current.indexOf(value) !== -1;
  });
}

function isElement(o) {
  var elementObjects = typeof HTMLElement === 'object';

  return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject(o) {
  return o &&
    typeof o === 'object' &&
    typeof o.nodeName === 'string' &&
    o.nodeType === 1;
}

// export default {
//   add: add,
//   remove: remove,
//   contains: contains,
//   has: contains,
//   set: set,
//   get: classes
// };

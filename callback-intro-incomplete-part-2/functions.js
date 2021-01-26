const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  var result = -1;

  each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const filter = function (collection, test) {
  let result = [];
  each(collection, function (element) {
    if (test(element)){
      result.push(element);
    }
  })
  return result;
}


const map = (collection, iterator) => {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    result.push(iterator(collection[i]));
  }
  return result;
};


const reject = function (collection, test) {
  let result = [];
  filter(collection, function (element) {
    if (!test(element)){
      result.push(element);
    }
  })
  return result;
};


const uniq = function (array) {
  let result = [];
  each(array, (num) => {
    if(!result.includes(num)) {
      result.push((num));
    }
  })
return result;
};

  filter,
  reject,
  uniq,
  reduce,
  map,
};

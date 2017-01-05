function doSomethingWithItems(items) {
  var value = 10;
  var item = value + 10;
  var i;
  var len;

  for (i = 0, len = items.length; i < len; i++) {
    item += 10;
  }

  var result = item * 100;

  return result;
}

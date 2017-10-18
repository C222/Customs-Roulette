function PickOneFactory(the_list) {
  return function() {
    return the_list[Math.floor(Math.random() * the_list.length)];
  };
}

/*function IntegerFactory(min, max, suffix) {
  return function() {
    return (Math.floor(Math.random() * (max - min + 1)) + min) + suffix;
  };
}*/

function FloatFactory(min, max, precision, suffix) {
  return function() {
    max = max / precision;
    min = min / precision;
    choice = (Math.floor(Math.random() * (max - min + 1)) + min) * precision);
    return (choice.toFixed(precision.toString().length - 1) + suffix;
  };
}
            
function IntegerFactory(min, max, suffix) {
  return FloatFactory(min, max, 1, suffix);
}

options = {};

options['Team Size'] = {rule: function() { return PickOneFactory(["2P", "3P", "4P"])(); }};
options['Zombie'] = {rule: function() { return "&#x2714;"; }};
options['DBNO'] = {rule: function() { return "&#x2718;"; }};
options['DBNO revive Casting Time'] = {
  rule: function() { return IntegerFactory(1, 20, "s")(); },
  depends: "DBNO"
};
options['DBNO HP Decreasing Rate'] = {
  rule: function() { return FloatFactory(.1, 2, .1, "x")(); },
  depends: "DBNO"
};

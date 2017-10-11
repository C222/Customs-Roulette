function PickOneFactory(the_list) {
  return function() {
    return the_list[Math.floor(Math.random() * the_list.length)];
  };
}

function IntegerFactory(min, max) {
  return function() {
    return Math.floor(Math.random() * (max - min)) + min;
  };
}

options = {};

options['Team Size'] = {rule: function() { return PickOneFactory(["2P", "3P", "4P"])(); }};
options['Zombie'] = {rule: function() { return "&#x2714;"; }};
options['DBNO'] = {rule: function() { return "&#x2718;"; }};

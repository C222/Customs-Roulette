function PickOneFactory(the_list) {
  return function() {
    return the_list[Math.floor(Math.random() * the_list.length)];
  };
}

options = {};

options['Team Size'] = function() { PickOneFactory(["1P", "2P", "3P", "4P"]); };

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

FloatFactory = function(min, max, precision, suffix) {
  return function() {
    max = max / precision;
    min = min / precision;
    choice = (Math.floor(Math.random() * (max - min + 1)) + min) * precision;
    fixed = 0;
    if (precision.toString().split(".").length > 1)
    {
      fixed = precision.toString().split(".")[1];
    }
    return (choice.toFixed(fixed)) + suffix;
  };
}

IntegerFactory = function(min, max, suffix) {
  return FloatFactory(min, max, 1, suffix);
}

options = {};

options['Team Size'] = {rule: function() {
  return PickOneFactory(["2P", "3P", "4P"])();
}};

yes = "&#x2611;";
no = "&#x2610;";

options['Zombie'] = {rule: function() { return yes + " Enabled"; }};

options['DBNO'] = {rule: function() { return no + " Enabled"; }};
options['DBNO revive Casting Time'] = {
  rule: function() { return IntegerFactory(1, 20, "s")(); },
  depends: "DBNO"
};
options['DBNO HP Decreasing Rate'] = {
  rule: function() { return FloatFactory(.1, 2, .1, "x")(); },
  depends: "DBNO"
};

options['Player Camera Restriction'] = {rule: function() {
  return yes + " First Person Camera Only";
}};

options['Unarmed attack Damage Rate'] = {
  rule: function() { return FloatFactory(0, 2, .25, "x")(); }
};

options['Map Option'] = {rule: function() {
  return PickOneFactory(["Sunset", "Foggy", "Rainy"])();
}};

PickRules = function(percentage) {
  rules = [];
  rule_names = Object.keys(options);
  number = Math.floor((percentage / 100.0) * rule_names.length);

  for (var i = 0; i < number; i++) {
    choice = Math.floor(Math.random() * rule_names.length);
    rule = rule_names.splice(choice, 1);
    rules.push(rule);
  }

  rules.forEach(function(r, i, a) {
    if (options[r].depends == undefined) {
      return;
    }

    if (r.startsWith("!")) {
      if (!rules.includes)
    }

  });

  return rules;
}

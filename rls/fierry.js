YUI.add( 'fierry.core', function( Env ) {

var core = Env.namespace('core');
(function() {
  var __slice = Array.prototype.slice;
  core.include = function() {
    var cls, method, mixin, mixins, name, _i, _len, _ref;
    cls = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = mixins.length; _i < _len; _i++) {
      mixin = mixins[_i];
      _ref = mixin.prototype;
      for (name in _ref) {
        method = _ref[name];
        cls.prototype[name] = method;
      }
    }
  };
}).call(this);

(function() {
  var __slice = Array.prototype.slice;
  core.Event = (function() {
    function Event() {}
    Event.prototype.subscribe = function(type, fn) {
      this.__getListeners(type).push(fn);
    };
    Event.prototype.unsubscribe = function(type, fn) {
      array.erase(this.__getListeners(type), fn);
    };
    Event.prototype.dispatch = function() {
      var args, fn, type, _i, _len, _ref;
      type = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _ref = this.__getListeners(type);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        fn = _ref[_i];
        fn.apply(null, args);
      }
    };
    Event.prototype.__getListeners = function(type) {
      var _base, _ref, _ref2;
      (_ref = this.__eventRegistry) != null ? _ref : this.__eventRegistry = {};
      return (_ref2 = (_base = this.__eventRegistry)[type]) != null ? _ref2 : _base[type] = [];
    };
    return Event;
  })();
}).call(this);

(function() {
  core.assert = function(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  };
  core.uid = function(obj) {
    var _ref;
    return (_ref = obj.__uid__) != null ? _ref : obj.__uid__ = ++core.uid.__counter__;
  };
  core.uid.__counter = 0;
}).call(this);

(function() {
  Env.array = {
    contains: function(arr, it) {
      return arr.indexOf(it) === !-1;
    },
    empty: function(arr) {
      return arr.length === 0;
    },
    erase: function(arr, it, i) {
      if (i == null) {
        i = 0;
      }
      while (i < arr.length) {
        if (arr[i] === it) {
          arr.splice(i, 1);
        } else {
          i++;
        }
      }
    },
    avg: function(arr) {
      var i, sum, _i, _len;
      sum = 0;
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        i = arr[_i];
        sum += i;
      }
      return sum / arr.length;
    },
    unique: function(arr) {
      var hash, i, r, _i, _len;
      r = [];
      hash = {};
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        i = arr[_i];
        hash[i] = 0;
      }
      for (i in hash) {
        r.push(i);
      }
      return r;
    }
  };
}).call(this);

(function() {
  Env.string = {
    splitIndex: function(str, idx) {
      return [str.substr(0, idx), str.substr(idx)];
    }
  };
}).call(this);


}, '3.0' ,{requires:[]});

YUI.add( 'fierry.performance', function( Env ) {

var core = Env.namespace('core');
var array = Env.namespace('array');
var api = Env.namespace('performance');
var pkg = Env.namespace('performance.internal');
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  pkg.Runner = (function() {
    function Runner(registry, arr) {
      this._runOnce = __bind(this._runOnce, this);;      this._registry = registry;
      this._suites = this._removeDuplicates(arr);
    }
    Runner.prototype._removeDuplicates = function(arr) {
      var bool, i;
      arr = Array.prototype.slice.call(arr).sort();
      i = 1;
      while (i < arr.length) {
        bool = arr[i].indexOf(arr[i - 1]) === 0;
        if (bool) {
          arr.splice(i, 1);
        } else {
          i++;
        }
      }
      return arr;
    };
    Runner.prototype.run = function() {
      var cases, tests;
      tests = this._extractTests(this._suites);
      cases = this._buildTestCases(tests);
      this.dispatch("tests.found", tests);
      core.assert(cases.length > 0, "No test cases found for suites: " + this._suites);
      return this._runOnce(cases);
    };
    Runner.prototype._runOnce = function(arr) {
      var arg, test, _ref;
      _ref = arr.shift(), test = _ref[0], arg = _ref[1];
      test.run(arg, true);
      this.dispatch("test.finished", test, arg);
      if (arr.length === 0) {
        this.dispatch("tests.finished");
      }
      if (arr.length !== 0) {
        return Env.later(0, this, this._runOnce, [arr]);
      }
    };
    Runner.prototype._extractTests = function(arr) {
      var name, obj, r, _i, _len;
      r = [];
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        name = arr[_i];
        obj = this._registry.get(name);
        if (obj instanceof pkg.Test) {
          r.push(obj);
        }
        if (obj instanceof pkg.Group) {
          r = r.concat(obj.getTests());
        }
      }
      return r;
    };
    Runner.prototype._buildTestCases = function(tests) {
      var arg, i, r, test, _i, _len, _ref;
      r = [];
      for (_i = 0, _len = tests.length; _i < _len; _i++) {
        test = tests[_i];
        test.createTestResult();
        arg = Math.round(test.measure());
        for (i = 1, _ref = pkg.EXECUTE_RETRY; (1 <= _ref ? i <= _ref : i >= _ref); (1 <= _ref ? i += 1 : i -= 1)) {
          r.push([test, arg]);
        }
      }
      return r;
    };
    return Runner;
  })();
  core.include(pkg.Runner, core.Event);
}).call(this);

(function() {
  pkg.EXECUTE_RETRY = 5;
  pkg.EXECUTE_LIMIT = 50;
  pkg.MEASURE_LIMIT = 5;
  pkg.MEASURE_RETRY = 3;
}).call(this);

(function() {
  pkg.Test = (function() {
    function Test(test, group) {
      this.group = group;
      this._results = [];
      this.name = test.name;
      this._run = test.run;
      this._after = test.after || (function() {});
      this._before = test.before || (function() {});
    }
    Test.prototype.accept = function(visitor) {
      return visitor.onTest(this);
    };
    Test.prototype.measure = function() {
      var arg, arr, i, time;
      arg = 1;
      time = 0;
      while (time === 0) {
        time = this.run(arg);
        arg *= 10;
      }
      while (time < pkg.MEASURE_LIMIT) {
        time = this.run(arg);
        arg *= 2;
      }
      arr = (function() {
        var _ref, _results;
        _results = [];
        for (i = 1, _ref = pkg.MEASURE_RETRY; (1 <= _ref ? i <= _ref : i >= _ref); (1 <= _ref ? i += 1 : i -= 1)) {
          _results.push(this.run(arg));
        }
        return _results;
      }).call(this);
      return pkg.EXECUTE_LIMIT / array.avg(arr) * arg;
    };
    Test.prototype.run = function(arg, log) {
      var end, i, start;
      this.group.runBefore(this);
      this._before();
      start = new Date();
      for (i = 0; (0 <= arg ? i <= arg : i >= arg); (0 <= arg ? i += 1 : i -= 1)) {
        this._run();
      }
      end = new Date();
      this._after;
      this.group.runAfter(this);
      if (log) {
        this.getResult().register(arg, end - start);
      }
      return end - start;
    };
    Test.prototype.createTestResult = function() {
      return this._results.push(new pkg.TestResult());
    };
    Test.prototype.getResult = function(count) {
      if (count == null) {
        count = 1;
      }
      return this._results[this._results.length - 1];
    };
    return Test;
  })();
}).call(this);

(function() {
  pkg.ConsoleVisitor = (function() {
    function ConsoleVisitor() {}
    ConsoleVisitor.prototype.onGroupStart = function(group) {
      return console.group(group.name);
    };
    ConsoleVisitor.prototype.onGroupEnd = function(group) {
      return console.groupEnd();
    };
    ConsoleVisitor.prototype.onTest = function(test) {
      var name, res;
      name = test.name.substr(test.name.lastIndexOf('.') + 1);
      res = test.getResult();
      return console.log(name, "---", Math.round(res.getAverage()), "ops");
    };
    return ConsoleVisitor;
  })();
}).call(this);

(function() {
  pkg.TestResult = (function() {
    function TestResult() {
      this._registry = [];
    }
    TestResult.prototype.register = function(arg, time) {
      if (time !== 0) {
        return this._registry.push(arg / time);
      }
    };
    TestResult.prototype.getAverage = function() {
      var ops, sum, _i, _len, _ref;
      sum = 0;
      _ref = this._registry;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ops = _ref[_i];
        sum += ops;
      }
      return sum / this._registry.length;
    };
    TestResult.prototype.getAll = function() {
      return this._registry;
    };
    return TestResult;
  })();
}).call(this);

(function() {
  pkg.Registry = (function() {
    function Registry() {
      this._root = new pkg.Group({
        name: ''
      });
    }
    Registry.prototype.registerGroup = function(hash) {
      var group, parent;
      parent = this.get(this._getParent(hash.name));
      group = new pkg.Group(hash, parent);
      return parent.add(group);
    };
    Registry.prototype.registerTest = function(hash) {
      var parent, test;
      parent = this.get(this._getParent(hash.name));
      test = new pkg.Test(hash, parent);
      return parent.add(test);
    };
    Registry.prototype._getParent = function(name) {
      var idx;
      idx = name.lastIndexOf('.');
      if (idx > -1) {
        return name.substr(0, idx);
      } else {
        return '';
      }
    };
    Registry.prototype.get = function(name) {
      var child, group, _ref;
      group = this._root;
      while (name.length > 0) {
        _ref = this._getFirstChild(name), child = _ref[0], name = _ref[1];
        group = group.get(child);
      }
      return group;
    };
    Registry.prototype._getFirstChild = function(name) {
      var idx;
      idx = name.indexOf('.');
      if (idx === -1) {
        idx = name.length;
      }
      return [name.substr(0, idx), name.substr(idx + 1)];
    };
    return Registry;
  })();
}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  pkg.PfcListener = (function() {
    function PfcListener() {
      this.onTestsFinished = __bind(this.onTestsFinished, this);;
      this.onTestFinished = __bind(this.onTestFinished, this);;
      this.onTestsFound = __bind(this.onTestsFound, this);;
    }
    PfcListener.prototype.onTestsFound = function(tests) {
      return console.log("Tests found", tests);
    };
    PfcListener.prototype.onTestFinished = function(test, arg) {
      return console.log("Test finished", test.name, Math.round(test.getResult().getAverage()), "ops");
    };
    PfcListener.prototype.onTestsFinished = function() {
      return console.log("All tests are done!");
    };
    return PfcListener;
  })();
}).call(this);

(function() {
  pkg.Group = (function() {
    function Group(group, parent) {
      this.parent = parent;
      this.name = group.name;
      this._nodes = [];
      this._after = group.after || (function() {});
      this._before = group.before || (function() {});
    }
    Group.prototype.accept = function(visitor) {
      var node, _i, _len, _ref;
      visitor.onGroupStart(this);
      _ref = this._nodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        node.accept(visitor);
      }
      return visitor.onGroupEnd(this);
    };
    Group.prototype.add = function(node) {
      var n, name, _i, _len, _ref;
      name = node.name;
      _ref = this._nodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        if (n.name === name) {
          throw new Error("Node " + name + " already exists");
        }
      }
      return this._nodes.push(node);
    };
    Group.prototype.get = function(name) {
      var n, _i, _len, _ref;
      if (this.name !== '') {
        name = this.name + "." + name;
      }
      _ref = this._nodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        if (n.name === name) {
          return n;
        }
      }
      throw new Error("Node not found " + this.name + "." + name);
    };
    Group.prototype.getTests = function() {
      var arr, n, _i, _len, _ref;
      arr = [];
      _ref = this._nodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        if (n instanceof pkg.Test) {
          arr.push(n);
        }
        if (n instanceof pkg.Group) {
          arr = arr.concat(n.getTests());
        }
      }
      return arr;
    };
    Group.prototype.runBefore = function(ctx) {
      if (this.parent) {
        this.parent.runBefore(ctx);
      }
      return this._before.call(ctx);
    };
    Group.prototype.runAfter = function(ctx) {
      this._after.call(ctx);
      if (this.parent) {
        return this.parent.runAfter(ctx);
      }
    };
    return Group;
  })();
}).call(this);

(function() {
  api._registry = new pkg.Registry();
  api.registerTest = function(test) {
    return api._registry.registerTest(test);
  };
  api.registerGroup = function(group) {
    return api._registry.registerGroup(group);
  };
  api.run = function() {
    var listener, runner;
    runner = new pkg.Runner(api._registry, arguments);
    listener = new pkg.PfcListener();
    runner.subscribe("tests.found", listener.onTestsFound);
    runner.subscribe("test.finished", listener.onTestFinished);
    runner.subscribe("tests.finished", listener.onTestsFinished);
    return runner.run();
  };
}).call(this);


}, '3.0' ,{requires:['fierry.core']});

YUI.add( 'fierry.scheduler', function( Env ) {


}, '3.0' ,{requires:[]});


"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/gun/gun.js
  var require_gun = __commonJS({
    "lib/gun/gun.js"(exports, module) {
      (function() {
        function USE(arg, req) {
          return req ? __require(arg) : arg.slice ? USE[R(arg)] : function(mod, path2) {
            arg(mod = { exports: {} });
            USE[R(path2)] = mod.exports;
          };
          function R(p) {
            return p.split("/").slice(-1).toString().replace(".js", "");
          }
        }
        if (typeof module !== "undefined") {
          var MODULE = module;
        }
        ;
        USE(function(module2) {
          String.random = function(l, c) {
            var s = "";
            l = l || 24;
            c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
            while (l-- > 0) {
              s += c.charAt(Math.floor(Math.random() * c.length));
            }
            return s;
          };
          String.match = function(t, o) {
            var tmp, u;
            if ("string" !== typeof t) {
              return false;
            }
            if ("string" == typeof o) {
              o = { "=": o };
            }
            o = o || {};
            tmp = o["="] || o["*"] || o[">"] || o["<"];
            if (t === tmp) {
              return true;
            }
            if (u !== o["="]) {
              return false;
            }
            tmp = o["*"] || o[">"];
            if (t.slice(0, (tmp || "").length) === tmp) {
              return true;
            }
            if (u !== o["*"]) {
              return false;
            }
            if (u !== o[">"] && u !== o["<"]) {
              return t >= o[">"] && t <= o["<"] ? true : false;
            }
            if (u !== o[">"] && t >= o[">"]) {
              return true;
            }
            if (u !== o["<"] && t <= o["<"]) {
              return true;
            }
            return false;
          };
          String.hash = function(s, c) {
            if (typeof s !== "string") {
              return;
            }
            c = c || 0;
            if (!s.length) {
              return c;
            }
            for (var i = 0, l = s.length, n; i < l; ++i) {
              n = s.charCodeAt(i);
              c = (c << 5) - c + n;
              c |= 0;
            }
            return c;
          };
          var has = Object.prototype.hasOwnProperty;
          Object.plain = function(o) {
            return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
          };
          Object.empty = function(o, n) {
            for (var k in o) {
              if (has.call(o, k) && (!n || -1 == n.indexOf(k))) {
                return false;
              }
            }
            return true;
          };
          Object.keys = Object.keys || function(o) {
            var l = [];
            for (var k in o) {
              if (has.call(o, k)) {
                l.push(k);
              }
            }
            return l;
          };
          (function() {
            var u, sT = setTimeout, l = 0, c = 0, sI = typeof setImmediate !== "" + u && setImmediate || function(c2, f) {
              if (typeof MessageChannel == "" + u) {
                return sT;
              }
              (c2 = new MessageChannel()).port1.onmessage = function(e) {
                "" == e.data && f();
              };
              return function(q) {
                f = q;
                c2.port2.postMessage("");
              };
            }(), check = sT.check = sT.check || typeof performance !== "" + u && performance || { now: function() {
              return +/* @__PURE__ */ new Date();
            } };
            sT.hold = sT.hold || 9;
            sT.poll = sT.poll || function(f) {
              if (sT.hold >= check.now() - l && c++ < 3333) {
                f();
                return;
              }
              sI(function() {
                l = check.now();
                f();
              }, c = 0);
            };
          })();
          ;
          (function() {
            var sT = setTimeout, t = sT.turn = sT.turn || function(f2) {
              1 == s.push(f2) && p(T);
            }, s = t.s = [], p = sT.poll, i = 0, f, T = function() {
              if (f = s[i++]) {
                f();
              }
              if (i == s.length || 99 == i) {
                s = t.s = s.slice(i);
                i = 0;
              }
              if (s.length) {
                p(T);
              }
            };
          })();
          ;
          (function() {
            var u, sT = setTimeout, T = sT.turn;
            (sT.each = sT.each || function(l, f, e, S) {
              S = S || 9;
              (function t(s, L, r) {
                if (L = (s = (l || []).splice(0, S)).length) {
                  for (var i = 0; i < L; i++) {
                    if (u !== (r = f(s[i]))) {
                      break;
                    }
                  }
                  if (u === r) {
                    T(t);
                    return;
                  }
                }
                e && e(r);
              })();
            })();
          })();
        })(USE, "./shim");
        ;
        USE(function(module2) {
          module2.exports = function onto(tag, arg, as) {
            if (!tag) {
              return { to: onto };
            }
            var u, f = "function" == typeof arg, tag = (this.tag || (this.tag = {}))[tag] || f && (this.tag[tag] = { tag, to: onto._ = { next: function(arg2) {
              var tmp;
              if (tmp = this.to) {
                tmp.next(arg2);
              }
            } } });
            if (f) {
              var be = {
                off: onto.off || (onto.off = function() {
                  if (this.next === onto._.next) {
                    return true;
                  }
                  if (this === this.the.last) {
                    this.the.last = this.back;
                  }
                  this.to.back = this.back;
                  this.next = onto._.next;
                  this.back.to = this.to;
                  if (this.the.last === this.the) {
                    delete this.on.tag[this.the.tag];
                  }
                }),
                to: onto._,
                next: arg,
                the: tag,
                on: this,
                as
              };
              (be.back = tag.last || tag).to = be;
              return tag.last = be;
            }
            if ((tag = tag.to) && u !== arg) {
              tag.next(arg);
            }
            return tag;
          };
        })(USE, "./onto");
        ;
        USE(function(module2) {
          module2.exports = function(v) {
            return v === null || "string" === typeof v || "boolean" === typeof v || // we want +/- Infinity to be, but JSON does not support it, sad face.
            // can you guess what v === v checks for? ;)
            "number" === typeof v && v != Infinity && v != -Infinity && v === v || !!v && "string" == typeof v["#"] && Object.keys(v).length === 1 && v["#"];
          };
        })(USE, "./valid");
        ;
        USE(function(module2) {
          USE("./shim");
          function State() {
            var t = +/* @__PURE__ */ new Date();
            if (last < t) {
              return N = 0, last = t + State.drift;
            }
            return last = t + (N += 1) / D + State.drift;
          }
          State.drift = 0;
          var NI = -Infinity, N = 0, D = 999, last = NI, u;
          State.is = function(n, k, o) {
            var tmp = k && n && n._ && n._[">"] || o;
            if (!tmp) {
              return;
            }
            return "number" == typeof (tmp = tmp[k]) ? tmp : NI;
          };
          State.ify = function(n, k, s, v, soul) {
            (n = n || {})._ = n._ || {};
            if (soul) {
              n._["#"] = soul;
            }
            var tmp = n._[">"] || (n._[">"] = {});
            if (u !== k && k !== "_") {
              if ("number" == typeof s) {
                tmp[k] = s;
              }
              if (u !== v) {
                n[k] = v;
              }
            }
            return n;
          };
          module2.exports = State;
        })(USE, "./state");
        ;
        USE(function(module2) {
          USE("./shim");
          function Dup(opt) {
            var dup = { s: {} }, s = dup.s;
            opt = opt || { max: 999, age: 1e3 * 9 };
            dup.check = function(id) {
              if (!s[id]) {
                return false;
              }
              return dt(id);
            };
            var dt = dup.track = function(id) {
              var it = s[id] || (s[id] = {});
              it.was = dup.now = +/* @__PURE__ */ new Date();
              if (!dup.to) {
                dup.to = setTimeout(dup.drop, opt.age + 9);
              }
              if (dt.ed) {
                dt.ed(id);
              }
              return it;
            };
            dup.drop = function(age) {
              dup.to = null;
              dup.now = +/* @__PURE__ */ new Date();
              var l = Object.keys(s);
              console.STAT && console.STAT(dup.now, +/* @__PURE__ */ new Date() - dup.now, "dup drop keys");
              setTimeout.each(l, function(id) {
                var it = s[id];
                if (it && (age || opt.age) > dup.now - it.was) {
                  return;
                }
                delete s[id];
              }, 0, 99);
            };
            return dup;
          }
          module2.exports = Dup;
        })(USE, "./dup");
        ;
        USE(function(module2) {
          USE("./onto");
          module2.exports = function ask(cb, as) {
            if (!this.on) {
              return;
            }
            var lack = (this.opt || {}).lack || 9e3;
            if (!("function" == typeof cb)) {
              if (!cb) {
                return;
              }
              var id = cb["#"] || cb, tmp = (this.tag || "")[id];
              if (!tmp) {
                return;
              }
              if (as) {
                tmp = this.on(id, as);
                clearTimeout(tmp.err);
                tmp.err = setTimeout(function() {
                  tmp.off();
                }, lack);
              }
              return true;
            }
            var id = as && as["#"] || random(9);
            if (!cb) {
              return id;
            }
            var to = this.on(id, cb, as);
            to.err = to.err || setTimeout(function() {
              to.off();
              to.next({ err: "Error: No ACK yet.", lack: true });
            }, lack);
            return id;
          };
          var random = String.random || function() {
            return Math.random().toString(36).slice(2);
          };
        })(USE, "./ask");
        ;
        USE(function(module2) {
          function Gun2(o) {
            if (o instanceof Gun2) {
              return (this._ = { $: this }).$;
            }
            if (!(this instanceof Gun2)) {
              return new Gun2(o);
            }
            return Gun2.create(this._ = { $: this, opt: o });
          }
          Gun2.is = function($) {
            return $ instanceof Gun2 || $ && $._ && $ === $._.$ || false;
          };
          Gun2.version = 0.202;
          Gun2.chain = Gun2.prototype;
          Gun2.chain.toJSON = function() {
          };
          USE("./shim");
          Gun2.valid = USE("./valid");
          Gun2.state = USE("./state");
          Gun2.on = USE("./onto");
          Gun2.dup = USE("./dup");
          Gun2.ask = USE("./ask");
          ;
          (function() {
            Gun2.create = function(at) {
              at.root = at.root || at;
              at.graph = at.graph || {};
              at.on = at.on || Gun2.on;
              at.ask = at.ask || Gun2.ask;
              at.dup = at.dup || Gun2.dup();
              var gun = at.$.opt(at.opt);
              if (!at.once) {
                at.on("in", universe, at);
                at.on("out", universe, at);
                at.on("put", map, at);
                Gun2.on("create", at);
                at.on("create", at);
              }
              at.once = 1;
              return gun;
            };
            function universe(msg) {
              if (!msg) {
                return;
              }
              if (msg.out === universe) {
                this.to.next(msg);
                return;
              }
              var eve = this, as = eve.as, at = as.at || as, gun = at.$, dup = at.dup, tmp, DBG = msg.DBG;
              (tmp = msg["#"]) || (tmp = msg["#"] = text_rand(9));
              if (dup.check(tmp)) {
                return;
              }
              dup.track(tmp);
              tmp = msg._;
              msg._ = "function" == typeof tmp ? tmp : function() {
              };
              msg.$ && msg.$ === (msg.$._ || "").$ || (msg.$ = gun);
              if (msg["@"] && !msg.put) {
                ack(msg);
              }
              if (!at.ask(msg["@"], msg)) {
                DBG && (DBG.u = +/* @__PURE__ */ new Date());
                if (msg.put) {
                  put(msg);
                  return;
                } else if (msg.get) {
                  Gun2.on.get(msg, gun);
                }
              }
              DBG && (DBG.uc = +/* @__PURE__ */ new Date());
              eve.to.next(msg);
              DBG && (DBG.ua = +/* @__PURE__ */ new Date());
              if (msg.nts || msg.NTS) {
                return;
              }
              msg.out = universe;
              at.on("out", msg);
              DBG && (DBG.ue = +/* @__PURE__ */ new Date());
            }
            function put(msg) {
              if (!msg) {
                return;
              }
              var ctx = msg._ || "", root = ctx.root = ((ctx.$ = msg.$ || "")._ || "").root;
              if (msg["@"] && ctx.faith && !ctx.miss) {
                msg.out = universe;
                root.on("out", msg);
                return;
              }
              ctx.latch = root.hatch;
              ctx.match = root.hatch = [];
              var put2 = msg.put;
              var DBG = ctx.DBG = msg.DBG, S = +/* @__PURE__ */ new Date();
              CT = CT || S;
              if (put2["#"] && put2["."]) {
                return;
              }
              DBG && (DBG.p = S);
              ctx["#"] = msg["#"];
              ctx.msg = msg;
              ctx.all = 0;
              ctx.stun = 1;
              var nl = Object.keys(put2);
              console.STAT && console.STAT(S, ((DBG || ctx).pk = +/* @__PURE__ */ new Date()) - S, "put sort");
              var ni = 0, nj, kl, soul, node, states, err, tmp;
              (function pop(o) {
                if (nj != ni) {
                  nj = ni;
                  if (!(soul = nl[ni])) {
                    console.STAT && console.STAT(S, ((DBG || ctx).pd = +/* @__PURE__ */ new Date()) - S, "put");
                    fire(ctx);
                    return;
                  }
                  if (!(node = put2[soul])) {
                    err = ERR + cut(soul) + "no node.";
                  } else if (!(tmp = node._)) {
                    err = ERR + cut(soul) + "no meta.";
                  } else if (soul !== tmp["#"]) {
                    err = ERR + cut(soul) + "soul not same.";
                  } else if (!(states = tmp[">"])) {
                    err = ERR + cut(soul) + "no state.";
                  }
                  kl = Object.keys(node || {});
                }
                if (err) {
                  msg.err = ctx.err = err;
                  fire(ctx);
                  return;
                }
                var i = 0, key;
                o = o || 0;
                while (o++ < 9 && (key = kl[i++])) {
                  if ("_" === key) {
                    continue;
                  }
                  var val = node[key], state = states[key];
                  if (u === state) {
                    err = ERR + cut(key) + "on" + cut(soul) + "no state.";
                    break;
                  }
                  if (!valid(val)) {
                    err = ERR + cut(key) + "on" + cut(soul) + "bad " + typeof val + cut(val);
                    break;
                  }
                  ham(val, key, soul, state, msg);
                  ++C2;
                }
                if ((kl = kl.slice(i)).length) {
                  turn(pop);
                  return;
                }
                ++ni;
                kl = null;
                pop(o);
              })();
            }
            Gun2.on.put = put;
            function ham(val, key, soul, state, msg) {
              var ctx = msg._ || "", root = ctx.root, graph = root.graph, lot, tmp;
              var vertex = graph[soul] || empty, was = state_is(vertex, key, 1), known = vertex[key];
              var DBG = ctx.DBG;
              if (tmp = console.STAT) {
                if (!graph[soul] || !known) {
                  tmp.has = (tmp.has || 0) + 1;
                }
              }
              var now = State(), u2;
              if (state > now) {
                setTimeout(function() {
                  ham(val, key, soul, state, msg);
                }, (tmp = state - now) > MD ? MD : tmp);
                console.STAT && console.STAT((DBG || ctx).Hf = +/* @__PURE__ */ new Date(), tmp, "future");
                return;
              }
              if (state < was) {
                if (true) {
                  return;
                }
              }
              if (!ctx.faith) {
                if (state === was && (val === known || L(val) <= L(known))) {
                  if (!ctx.miss) {
                    return;
                  }
                }
              }
              ctx.stun++;
              var aid = msg["#"] + ctx.all++, id = { toString: function() {
                return aid;
              }, _: ctx };
              id.toJSON = id.toString;
              root.dup.track(id)["#"] = msg["#"];
              DBG && (DBG.ph = DBG.ph || +/* @__PURE__ */ new Date());
              root.on("put", { "#": id, "@": msg["@"], put: { "#": soul, ".": key, ":": val, ">": state }, ok: msg.ok, _: ctx });
            }
            function map(msg) {
              var DBG;
              if (DBG = (msg._ || "").DBG) {
                DBG.pa = +/* @__PURE__ */ new Date();
                DBG.pm = DBG.pm || +/* @__PURE__ */ new Date();
              }
              var eve = this, root = eve.as, graph = root.graph, ctx = msg._, put2 = msg.put, soul = put2["#"], key = put2["."], val = put2[":"], state = put2[">"], id = msg["#"], tmp;
              if ((tmp = ctx.msg) && (tmp = tmp.put) && (tmp = tmp[soul])) {
                state_ify(tmp, key, state, val, soul);
              }
              graph[soul] = state_ify(graph[soul], key, state, val, soul);
              if (tmp = (root.next || "")[soul]) {
                tmp.on("in", msg);
              }
              fire(ctx);
              eve.to.next(msg);
            }
            function fire(ctx, msg) {
              var root;
              if (ctx.stop) {
                return;
              }
              if (!ctx.err && 0 < --ctx.stun) {
                return;
              }
              ctx.stop = 1;
              if (!(root = ctx.root)) {
                return;
              }
              var tmp = ctx.match;
              tmp.end = 1;
              if (tmp === root.hatch) {
                if (!(tmp = ctx.latch) || tmp.end) {
                  delete root.hatch;
                } else {
                  root.hatch = tmp;
                }
              }
              ctx.hatch && ctx.hatch();
              setTimeout.each(ctx.match, function(cb) {
                cb && cb();
              });
              if (!(msg = ctx.msg) || ctx.err || msg.err) {
                return;
              }
              msg.out = universe;
              ctx.root.on("out", msg);
              CF();
            }
            function ack(msg) {
              var id = msg["@"] || "", ctx, ok, tmp;
              if (!(ctx = id._)) {
                var dup = (dup = msg.$) && (dup = dup._) && (dup = dup.root) && (dup = dup.dup);
                if (!(dup = dup.check(id))) {
                  return;
                }
                msg["@"] = dup["#"] || msg["@"];
                return;
              }
              ctx.acks = (ctx.acks || 0) + 1;
              if (ctx.err = msg.err) {
                msg["@"] = ctx["#"];
                fire(ctx);
              }
              ctx.ok = msg.ok || ctx.ok;
              if (!ctx.stop && !ctx.crack) {
                ctx.crack = ctx.match && ctx.match.push(function() {
                  back(ctx);
                });
              }
              back(ctx);
            }
            function back(ctx) {
              if (!ctx || !ctx.root) {
                return;
              }
              if (ctx.stun || ctx.acks !== ctx.all) {
                return;
              }
              ctx.root.on("in", { "@": ctx["#"], err: ctx.err, ok: ctx.err ? u : ctx.ok || { "": 1 } });
            }
            var ERR = "Error: Invalid graph!";
            var cut = function(s) {
              return " '" + ("" + s).slice(0, 9) + "...' ";
            };
            var L = JSON.stringify, MD = 2147483647, State = Gun2.state;
            var C2 = 0, CT, CF = function() {
              if (C2 > 999 && C2 / -(CT - (CT = +/* @__PURE__ */ new Date())) > 1) {
                Gun2.window && console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query.");
                CF = function() {
                  C2 = 0;
                };
              }
            };
          })();
          ;
          (function() {
            Gun2.on.get = function(msg, gun) {
              var root = gun._, get = msg.get, soul = get["#"], node = root.graph[soul], has = get["."];
              var next = root.next || (root.next = {}), at = next[soul];
              var ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              DBG && (DBG.g = +/* @__PURE__ */ new Date());
              if (!node) {
                return root.on("get", msg);
              }
              if (has) {
                if ("string" != typeof has || u === node[has]) {
                  if (!((at || "").next || "")[has]) {
                    root.on("get", msg);
                    return;
                  }
                }
                node = state_ify({}, has, state_is(node, has), node[has], soul);
              }
              node && ack(msg, node);
              root.on("get", msg);
            };
            function ack(msg, node) {
              var S = +/* @__PURE__ */ new Date(), ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              var to = msg["#"], id = text_rand(9), keys = Object.keys(node || "").sort(), soul = ((node || "")._ || "")["#"], kl = keys.length, j = 0, root = msg.$._.root, F = node === root.graph[soul];
              console.STAT && console.STAT(S, ((DBG || ctx).gk = +/* @__PURE__ */ new Date()) - S, "got keys");
              node && function go() {
                S = +/* @__PURE__ */ new Date();
                var i = 0, k, put = {}, tmp;
                while (i < 9 && (k = keys[i++])) {
                  state_ify(put, k, state_is(node, k), node[k], soul);
                }
                keys = keys.slice(i);
                (tmp = {})[soul] = put;
                put = tmp;
                var faith;
                if (F) {
                  faith = function() {
                  };
                  faith.ram = faith.faith = true;
                }
                tmp = keys.length;
                console.STAT && console.STAT(S, -(S - (S = +/* @__PURE__ */ new Date())), "got copied some");
                DBG && (DBG.ga = +/* @__PURE__ */ new Date());
                root.on("in", { "@": to, "#": id, put, "%": tmp ? id = text_rand(9) : u, $: root.$, _: faith, DBG, FOO: 1 });
                console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "got in");
                if (!tmp) {
                  return;
                }
                setTimeout.turn(go);
              }();
              if (!node) {
                root.on("in", { "@": msg["#"] });
              }
            }
            Gun2.on.get.ack = ack;
          })();
          ;
          (function() {
            Gun2.chain.opt = function(opt) {
              opt = opt || {};
              var gun = this, at = gun._, tmp = opt.peers || opt;
              if (!Object.plain(opt)) {
                opt = {};
              }
              if (!Object.plain(at.opt)) {
                at.opt = opt;
              }
              if ("string" == typeof tmp) {
                tmp = [tmp];
              }
              if (!Object.plain(at.opt.peers)) {
                at.opt.peers = {};
              }
              if (tmp instanceof Array) {
                opt.peers = {};
                tmp.forEach(function(url) {
                  var p = {};
                  p.id = p.url = url;
                  opt.peers[url] = at.opt.peers[url] = at.opt.peers[url] || p;
                });
              }
              obj_each(opt, function each(k) {
                var v = this[k];
                if (this && this.hasOwnProperty(k) || "string" == typeof v || Object.empty(v)) {
                  this[k] = v;
                  return;
                }
                if (v && v.constructor !== Object && !(v instanceof Array)) {
                  return;
                }
                obj_each(v, each);
              });
              at.opt.from = opt;
              Gun2.on("opt", at);
              at.opt.uuid = at.opt.uuid || function uuid(l) {
                return Gun2.state().toString(36).replace(".", "") + String.random(l || 12);
              };
              return gun;
            };
          })();
          var obj_each = function(o, f) {
            Object.keys(o).forEach(f, o);
          }, text_rand = String.random, turn = setTimeout.turn, valid = Gun2.valid, state_is = Gun2.state.is, state_ify = Gun2.state.ify, u, empty = {}, C;
          Gun2.log = function() {
            return !Gun2.log.off && C.log.apply(C, arguments), [].slice.call(arguments).join(" ");
          };
          Gun2.log.once = function(w, s, o) {
            return (o = Gun2.log.once)[w] = o[w] || 0, o[w]++ || Gun2.log(s);
          };
          if (typeof window !== "undefined") {
            (window.GUN = window.Gun = Gun2).window = window;
          }
          try {
            if (typeof MODULE !== "undefined") {
              MODULE.exports = Gun2;
            }
          } catch (e) {
          }
          module2.exports = Gun2;
          (Gun2.window || {}).console = (Gun2.window || {}).console || { log: function() {
          } };
          (C = console).only = function(i, s) {
            return C.only.i && i === C.only.i && C.only.i++ && (C.log.apply(C, arguments) || s);
          };
        })(USE, "./root");
        ;
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.back = function(n, opt) {
            var tmp;
            n = n || 1;
            if (-1 === n || Infinity === n) {
              return this._.root.$;
            } else if (1 === n) {
              return (this._.back || this._).$;
            }
            var gun = this, at = gun._;
            if (typeof n === "string") {
              n = n.split(".");
            }
            if (n instanceof Array) {
              var i = 0, l = n.length, tmp = at;
              for (i; i < l; i++) {
                tmp = (tmp || empty)[n[i]];
              }
              if (u !== tmp) {
                return opt ? gun : tmp;
              } else if (tmp = at.back) {
                return tmp.$.back(n, opt);
              }
              return;
            }
            if ("function" == typeof n) {
              var yes, tmp = { back: at };
              while ((tmp = tmp.back) && u === (yes = n(tmp, opt))) {
              }
              return yes;
            }
            if ("number" == typeof n) {
              return (at.back || at).$.back(n - 1);
            }
            return this;
          };
          var empty = {}, u;
        })(USE, "./back");
        ;
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.chain = function(sub) {
            var gun = this, at = gun._, chain = new (sub || gun).constructor(gun), cat = chain._, root;
            cat.root = root = at.root;
            cat.id = ++root.once;
            cat.back = gun._;
            cat.on = Gun2.on;
            cat.on("in", Gun2.on.in, cat);
            cat.on("out", Gun2.on.out, cat);
            return chain;
          };
          function output(msg) {
            var put, get, at = this.as, back = at.back, root = at.root, tmp;
            if (!msg.$) {
              msg.$ = at.$;
            }
            this.to.next(msg);
            if (at.err) {
              at.on("in", { put: at.put = u, $: at.$ });
              return;
            }
            if (get = msg.get) {
              if (root.pass) {
                root.pass[at.id] = at;
              }
              if (at.lex) {
                Object.keys(at.lex).forEach(function(k) {
                  tmp[k] = at.lex[k];
                }, tmp = msg.get = msg.get || {});
              }
              if (get["#"] || at.soul) {
                get["#"] = get["#"] || at.soul;
                msg["#"] || (msg["#"] = text_rand(9));
                back = root.$.get(get["#"])._;
                if (!(get = get["."])) {
                  tmp = back.ask && back.ask[""];
                  (back.ask || (back.ask = {}))[""] = back;
                  if (u !== back.put) {
                    back.on("in", back);
                    if (tmp) {
                      return;
                    }
                  }
                  msg.$ = back.$;
                } else if (obj_has(back.put, get)) {
                  tmp = back.ask && back.ask[get];
                  (back.ask || (back.ask = {}))[get] = back.$.get(get)._;
                  back.on("in", { get, put: { "#": back.soul, ".": get, ":": back.put[get], ">": state_is(root.graph[back.soul], get) } });
                  if (tmp) {
                    return;
                  }
                }
                root.ask(ack, msg);
                return root.on("in", msg);
              }
              if (get["."]) {
                if (at.get) {
                  msg = { get: { ".": at.get }, $: at.$ };
                  (back.ask || (back.ask = {}))[at.get] = msg.$._;
                  return back.on("out", msg);
                }
                msg = { get: at.lex ? msg.get : {}, $: at.$ };
                return back.on("out", msg);
              }
              (at.ask || (at.ask = {}))[""] = at;
              if (at.get) {
                get["."] = at.get;
                (back.ask || (back.ask = {}))[at.get] = msg.$._;
                return back.on("out", msg);
              }
            }
            return back.on("out", msg);
          }
          ;
          Gun2.on.out = output;
          function input(msg, cat) {
            cat = cat || this.as;
            var root = cat.root, gun = msg.$ || (msg.$ = cat.$), at = (gun || "")._ || empty, tmp = msg.put || "", soul = tmp["#"], key = tmp["."], change = u !== tmp["="] ? tmp["="] : tmp[":"], state2 = tmp[">"] || -Infinity, sat;
            if (u !== msg.put && (u === tmp["#"] || u === tmp["."] || u === tmp[":"] && u === tmp["="] || u === tmp[">"])) {
              if (!valid(tmp)) {
                if (!(soul = ((tmp || "")._ || "")["#"])) {
                  console.log("chain not yet supported for", tmp, "...", msg, cat);
                  return;
                }
                gun = cat.root.$.get(soul);
                return setTimeout.each(Object.keys(tmp).sort(), function(k) {
                  if ("_" == k || u === (state2 = state_is(tmp, k))) {
                    return;
                  }
                  cat.on("in", { $: gun, put: { "#": soul, ".": k, "=": tmp[k], ">": state2 }, VIA: msg });
                });
              }
              cat.on("in", { $: at.back.$, put: { "#": soul = at.back.soul, ".": key = at.has || at.get, "=": tmp, ">": state_is(at.back.put, key) }, via: msg });
              return;
            }
            if ((msg.seen || "")[cat.id]) {
              return;
            }
            (msg.seen || (msg.seen = function() {
            }))[cat.id] = cat;
            if (cat !== at) {
              Object.keys(msg).forEach(function(k) {
                tmp[k] = msg[k];
              }, tmp = {});
              tmp.get = cat.get || tmp.get;
              if (!cat.soul && !cat.has) {
                tmp.$$$ = tmp.$$$ || cat.$;
              } else if (at.soul) {
                tmp.$ = cat.$;
                tmp.$$ = tmp.$$ || at.$;
              }
              msg = tmp;
            }
            unlink(msg, cat);
            if ((cat.soul || msg.$$) && state2 >= state_is(root.graph[soul], key)) {
              (tmp = root.$.get(soul)._).put = state_ify(tmp.put, key, state2, change, soul);
            }
            if (!at.soul && state2 >= state_is(root.graph[soul], key) && (sat = (root.$.get(soul)._.next || "")[key])) {
              sat.put = change;
              if ("string" == typeof (tmp = valid(change))) {
                sat.put = root.$.get(tmp)._.put || change;
              }
            }
            this.to && this.to.next(msg);
            cat.any && setTimeout.each(Object.keys(cat.any), function(any) {
              (any = cat.any[any]) && any(msg);
            }, 0, 99);
            cat.echo && setTimeout.each(Object.keys(cat.echo), function(lat) {
              (lat = cat.echo[lat]) && lat.on("in", msg);
            }, 0, 99);
            if (((msg.$$ || "")._ || at).soul) {
              if ((sat = cat.next) && (sat = sat[key])) {
                tmp = {};
                Object.keys(msg).forEach(function(k) {
                  tmp[k] = msg[k];
                });
                tmp.$ = (msg.$$ || msg.$).get(tmp.get = key);
                delete tmp.$$;
                delete tmp.$$$;
                sat.on("in", tmp);
              }
            }
            link(msg, cat);
          }
          ;
          Gun2.on.in = input;
          function link(msg, cat) {
            cat = cat || this.as || msg.$._;
            if (msg.$$ && this !== Gun2.on) {
              return;
            }
            if (!msg.put || cat.soul) {
              return;
            }
            var put = msg.put || "", link2 = put["="] || put[":"], tmp;
            var root = cat.root, tat = root.$.get(put["#"]).get(put["."])._;
            if ("string" != typeof (link2 = valid(link2))) {
              if (this === Gun2.on) {
                (tat.echo || (tat.echo = {}))[cat.id] = cat;
              }
              return;
            }
            if ((tat.echo || (tat.echo = {}))[cat.id] && !(root.pass || "")[cat.id]) {
              return;
            }
            if (tmp = root.pass) {
              if (tmp[link2 + cat.id]) {
                return;
              }
              tmp[link2 + cat.id] = 1;
            }
            (tat.echo || (tat.echo = {}))[cat.id] = cat;
            if (cat.has) {
              cat.link = link2;
            }
            var sat = root.$.get(tat.link = link2)._;
            (sat.echo || (sat.echo = {}))[tat.id] = tat;
            var tmp = cat.ask || "";
            if (tmp[""] || cat.lex) {
              sat.on("out", { get: { "#": link2 } });
            }
            setTimeout.each(Object.keys(tmp), function(get, sat2) {
              if (!get || !(sat2 = tmp[get])) {
                return;
              }
              sat2.on("out", { get: { "#": link2, ".": get } });
            }, 0, 99);
          }
          ;
          Gun2.on.link = link;
          function unlink(msg, cat) {
            var put = msg.put || "", change = u !== put["="] ? put["="] : put[":"], root = cat.root, link2, tmp;
            if (u === change) {
              if (cat.soul && u !== cat.put) {
                return;
              }
              tmp = (msg.$$ || msg.$ || "")._ || "";
              if (msg["@"] && (u !== tmp.put || u !== cat.put)) {
                return;
              }
              if (link2 = cat.link || msg.linked) {
                delete (root.$.get(link2)._.echo || "")[cat.id];
              }
              if (cat.has) {
                cat.link = null;
              }
              cat.put = u;
              setTimeout.each(Object.keys(cat.next || ""), function(get, sat) {
                if (!(sat = cat.next[get])) {
                  return;
                }
                if (link2) {
                  delete (root.$.get(link2).get(get)._.echo || "")[sat.id];
                }
                sat.on("in", { get, put: u, $: sat.$ });
              }, 0, 99);
              return;
            }
            if (cat.soul) {
              return;
            }
            if (msg.$$) {
              return;
            }
            link2 = valid(change);
            tmp = msg.$._ || "";
            if (link2 === tmp.link || cat.has && !tmp.link) {
              if ((root.pass || "")[cat.id] && "string" !== typeof link2) {
              } else {
                return;
              }
            }
            delete (tmp.echo || "")[cat.id];
            unlink({ get: cat.get, put: u, $: msg.$, linked: msg.linked = msg.linked || tmp.link }, cat);
          }
          ;
          Gun2.on.unlink = unlink;
          function ack(msg, ev) {
            var as = this.as, at = as.$._, root = at.root, get = as.get || "", tmp = (msg.put || "")[get["#"]] || "";
            if (!msg.put || "string" == typeof get["."] && u === tmp[get["."]]) {
              if (u !== at.put) {
                return;
              }
              if (!at.soul && !at.has) {
                return;
              }
              at.ack = (at.ack || 0) + 1;
              at.on("in", {
                get: at.get,
                put: at.put = u,
                $: at.$,
                "@": msg["@"]
              });
              return;
            }
            (msg._ || {}).miss = 1;
            Gun2.on.put(msg);
            return;
          }
          var empty = {}, u, text_rand = String.random, valid = Gun2.valid, obj_has = function(o, k) {
            return o && Object.prototype.hasOwnProperty.call(o, k);
          }, state = Gun2.state, state_is = state.is, state_ify = state.ify;
        })(USE, "./chain");
        ;
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.get = function(key, cb, as) {
            var gun, tmp;
            if (typeof key === "string") {
              if (key.length == 0) {
                (gun = this.chain())._.err = { err: Gun2.log("0 length key!", key) };
                if (cb) {
                  cb.call(gun, gun._.err);
                }
                return gun;
              }
              var back = this, cat = back._;
              var next = cat.next || empty;
              if (!(gun = next[key])) {
                gun = key && cache(key, back);
              }
              gun = gun && gun.$;
            } else if ("function" == typeof key) {
              let any2 = function(msg, eve, f) {
                if (any2.stun) {
                  return;
                }
                if ((tmp2 = root.pass) && !tmp2[id]) {
                  return;
                }
                var at = msg.$._, sat = (msg.$$ || "")._, data = (sat || at).put, odd = !at.has && !at.soul, test = {}, link, tmp2;
                if (odd || u === data) {
                  data = u === ((tmp2 = msg.put) || "")["="] ? u === (tmp2 || "")[":"] ? tmp2 : tmp2[":"] : tmp2["="];
                }
                if (link = "string" == typeof (tmp2 = Gun2.valid(data))) {
                  data = u === (tmp2 = root.$.get(tmp2)._.put) ? opt.not ? u : data : tmp2;
                }
                if (opt.not && u === data) {
                  return;
                }
                if (u === opt.stun) {
                  if ((tmp2 = root.stun) && tmp2.on) {
                    cat.$.back(function(a) {
                      tmp2.on("" + a.id, test = {});
                      if ((test.run || 0) < any2.id) {
                        return test;
                      }
                    });
                    !test.run && tmp2.on("" + at.id, test = {});
                    !test.run && sat && tmp2.on("" + sat.id, test = {});
                    if (any2.id > test.run) {
                      if (!test.stun || test.stun.end) {
                        test.stun = tmp2.on("stun");
                        test.stun = test.stun && test.stun.last;
                      }
                      if (test.stun && !test.stun.end) {
                        (test.stun.add || (test.stun.add = {}))[id] = function() {
                          any2(msg, eve, 1);
                        };
                        return;
                      }
                    }
                  }
                  if (
                    /*odd &&*/
                    u === data
                  ) {
                    f = 0;
                  }
                  if ((tmp2 = root.hatch) && !tmp2.end && u === opt.hatch && !f) {
                    if (wait[at.$._.id]) {
                      return;
                    }
                    wait[at.$._.id] = 1;
                    tmp2.push(function() {
                      any2(msg, eve, 1);
                    });
                    return;
                  }
                  ;
                  wait = {};
                }
                if (root.pass) {
                  if (root.pass[id + at.id]) {
                    return;
                  }
                  root.pass[id + at.id] = 1;
                }
                if (opt.on) {
                  opt.ok.call(at.$, data, at.get, msg, eve || any2);
                  return;
                }
                if (opt.v2020) {
                  opt.ok(msg, eve || any2);
                  return;
                }
                Object.keys(msg).forEach(function(k) {
                  tmp2[k] = msg[k];
                }, tmp2 = {});
                msg = tmp2;
                msg.put = data;
                opt.ok.call(opt.as, msg, eve || any2);
              };
              var any = any2;
              if (true === cb) {
                return soul(this, key, cb, as), this;
              }
              gun = this;
              var cat = gun._, opt = cb || {}, root = cat.root, id;
              opt.at = cat;
              opt.ok = key;
              var wait = {};
              ;
              any2.at = cat;
              (cat.any || (cat.any = {}))[id = String.random(7)] = any2;
              any2.off = function() {
                any2.stun = 1;
                if (!cat.any) {
                  return;
                }
                delete cat.any[id];
              };
              any2.rid = rid;
              any2.id = opt.run || ++root.once;
              tmp = root.pass;
              (root.pass = {})[id] = 1;
              opt.out = opt.out || { get: {} };
              cat.on("out", opt.out);
              root.pass = tmp;
              return gun;
            } else if ("number" == typeof key) {
              return this.get("" + key, cb, as);
            } else if ("string" == typeof (tmp = valid(key))) {
              return this.get(tmp, cb, as);
            } else if (tmp = this.get.next) {
              gun = tmp(this, key);
            }
            if (!gun) {
              (gun = this.chain())._.err = { err: Gun2.log("Invalid get request!", key) };
              if (cb) {
                cb.call(gun, gun._.err);
              }
              return gun;
            }
            if (cb && "function" == typeof cb) {
              gun.get(cb, as);
            }
            return gun;
          };
          function cache(key, back) {
            var cat = back._, next = cat.next, gun = back.chain(), at = gun._;
            if (!next) {
              next = cat.next = {};
            }
            next[at.get = key] = at;
            if (back === cat.root.$) {
              at.soul = key;
            } else if (cat.soul || cat.has) {
              at.has = key;
            }
            return at;
          }
          function soul(gun, cb, opt, as) {
            var cat = gun._, acks = 0, tmp;
            if (tmp = cat.soul || cat.link) {
              return cb(tmp, as, cat);
            }
            if (cat.jam) {
              return cat.jam.push([cb, as]);
            }
            cat.jam = [[cb, as]];
            gun.get(function go(msg, eve) {
              if (u === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp) {
                return;
              }
              eve.rid(msg);
              var at = (at = msg.$) && at._ || {}, i = 0, as2;
              tmp = cat.jam;
              delete cat.jam;
              while (as2 = tmp[i++]) {
                var cb2 = as2[0], id;
                as2 = as2[1];
                cb2 && cb2(id = at.link || at.soul || Gun2.valid(msg.put) || ((msg.put || {})._ || {})["#"], as2, msg, eve);
              }
            }, { out: { get: { ".": true } } });
            return gun;
          }
          function rid(at) {
            var cat = this.at || this.on;
            if (!at || cat.soul || cat.has) {
              return this.off();
            }
            if (!(at = (at = (at = at.$ || at)._ || at).id)) {
              return;
            }
            var map = cat.map, tmp, seen;
            if (tmp = (seen = this.seen || (this.seen = {}))[at]) {
              return true;
            }
            seen[at] = true;
            return;
            return;
          }
          var empty = {}, valid = Gun2.valid, u;
        })(USE, "./get");
        ;
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.put = function(data, cb, as) {
            var gun = this, at = gun._, root = at.root;
            as = as || {};
            as.root = at.root;
            as.run || (as.run = root.once);
            stun(as, at.id);
            as.ack = as.ack || cb;
            as.via = as.via || gun;
            as.data = as.data || data;
            as.soul || (as.soul = at.soul || "string" == typeof cb && cb);
            var s = as.state = as.state || Gun2.state();
            if ("function" == typeof data) {
              data(function(d) {
                as.data = d;
                gun.put(u, u, as);
              });
              return gun;
            }
            if (!as.soul) {
              return get(as), gun;
            }
            as.$ = root.$.get(as.soul);
            as.todo = [{ it: as.data, ref: as.$ }];
            as.turn = as.turn || turn;
            as.ran = as.ran || ran;
            (function walk() {
              var to = as.todo, at2 = to.pop(), d = at2.it, cid = at2.ref && at2.ref._.id, v, k, cat, tmp, g;
              stun(as, at2.ref);
              if (tmp = at2.todo) {
                k = tmp.pop();
                d = d[k];
                if (tmp.length) {
                  to.push(at2);
                }
              }
              k && (to.path || (to.path = [])).push(k);
              if (!(v = valid(d)) && !(g = Gun2.is(d))) {
                if (!Object.plain(d)) {
                  ran.err(as, "Invalid data: " + check(d) + " at " + (as.via.back(function(at3) {
                    at3.get && tmp.push(at3.get);
                  }, tmp = []) || tmp.join(".")) + "." + (to.path || []).join("."));
                  return;
                }
                var seen = as.seen || (as.seen = []), i = seen.length;
                while (i--) {
                  if (d === (tmp = seen[i]).it) {
                    v = d = tmp.link;
                    break;
                  }
                }
              }
              if (k && v) {
                at2.node = state_ify(at2.node, k, s, d);
              } else {
                let resolve2 = function(msg, eve) {
                  var end = cat.link["#"];
                  if (eve) {
                    eve.off();
                    eve.rid(msg);
                  }
                  var soul = end || msg.soul || (tmp = (msg.$$ || msg.$)._ || "").soul || tmp.link || ((tmp = tmp.put || "")._ || "")["#"] || tmp["#"] || ((tmp = msg.put || "") && msg.$$ ? tmp["#"] : (tmp["="] || tmp[":"] || "")["#"]);
                  !end && stun(as, msg.$);
                  if (!soul && !at2.link["#"]) {
                    (at2.wait || (at2.wait = [])).push(function() {
                      resolve2(msg, eve);
                    });
                    return;
                  }
                  if (!soul) {
                    soul = [];
                    (msg.$$ || msg.$).back(function(at3) {
                      if (tmp = at3.soul || at3.link) {
                        return soul.push(tmp);
                      }
                      soul.push(at3.get);
                    });
                    soul = soul.reverse().join("/");
                  }
                  cat.link["#"] = soul;
                  !g && (((as.graph || (as.graph = {}))[soul] = cat.node || (cat.node = { _: {} }))._["#"] = soul);
                  delete as.wait[id];
                  cat.wait && setTimeout.each(cat.wait, function(cb2) {
                    cb2 && cb2();
                  });
                  as.ran(as);
                };
                var resolve = resolve2;
                if (!as.seen) {
                  ran.err(as, "Data at root of graph must be a node (an object).");
                  return;
                }
                as.seen.push(cat = { it: d, link: {}, todo: g ? [] : Object.keys(d).sort().reverse(), path: (to.path || []).slice(), up: at2 });
                at2.node = state_ify(at2.node, k, s, cat.link);
                !g && cat.todo.length && to.push(cat);
                var id = as.seen.length;
                (as.wait || (as.wait = {}))[id] = "";
                tmp = (cat.ref = g ? d : k ? at2.ref.get(k) : at2.ref)._;
                (tmp = d && (d._ || "")["#"] || tmp.soul || tmp.link) ? resolve2({ soul: tmp }) : cat.ref.get(resolve2, {
                  run: as.run,
                  /*hatch: 0,*/
                  v2020: 1,
                  out: { get: { ".": " " } }
                });
                ;
              }
              if (!to.length) {
                return as.ran(as);
              }
              as.turn(walk);
            })();
            return gun;
          };
          function stun(as, id) {
            if (!id) {
              return;
            }
            id = (id._ || "").id || id;
            var run = as.root.stun || (as.root.stun = { on: Gun2.on }), test = {}, tmp;
            as.stun || (as.stun = run.on("stun", function() {
            }));
            if (tmp = run.on("" + id)) {
              tmp.the.last.next(test);
            }
            if (test.run >= as.run) {
              return;
            }
            run.on("" + id, function(test2) {
              if (as.stun.end) {
                this.off();
                this.to.next(test2);
                return;
              }
              test2.run = test2.run || as.run;
              test2.stun = test2.stun || as.stun;
              return;
              if (this.to.to) {
                this.the.last.next(test2);
                return;
              }
              test2.stun = as.stun;
            });
          }
          function ran(as) {
            if (as.err) {
              ran.end(as.stun, as.root);
              return;
            }
            if (as.todo.length || as.end || !Object.empty(as.wait)) {
              return;
            }
            as.end = 1;
            var cat = as.$.back(-1)._, root = cat.root, ask = cat.ask(function(ack) {
              root.on("ack", ack);
              if (ack.err && !ack.lack) {
                Gun2.log(ack);
              }
              if (++acks > (as.acks || 0)) {
                this.off();
              }
              if (!as.ack) {
                return;
              }
              as.ack(ack, this);
            }, as.opt), acks = 0, stun2 = as.stun, tmp;
            (tmp = function() {
              if (!stun2) {
                return;
              }
              ran.end(stun2, root);
              setTimeout.each(Object.keys(stun2 = stun2.add || ""), function(cb) {
                if (cb = stun2[cb]) {
                  cb();
                }
              });
            }).hatch = tmp;
            if (as.ack && !as.ok) {
              as.ok = as.acks || 9;
            }
            as.via._.on("out", { put: as.out = as.graph, ok: as.ok && { "@": as.ok + 1 }, opt: as.opt, "#": ask, _: tmp });
          }
          ;
          ran.end = function(stun2, root) {
            stun2.end = noop;
            if (stun2.the.to === stun2 && stun2 === stun2.the.last) {
              delete root.stun;
            }
            stun2.off();
          };
          ran.err = function(as, err) {
            (as.ack || noop).call(as, as.out = { err: as.err = Gun2.log(err) });
            as.ran(as);
          };
          function get(as) {
            var at = as.via._, tmp;
            as.via = as.via.back(function(at2) {
              if (at2.soul || !at2.get) {
                return at2.$;
              }
              tmp = as.data;
              (as.data = {})[at2.get] = tmp;
            });
            if (!as.via || !as.via._.soul) {
              as.via = at.root.$.get(((as.data || "")._ || "")["#"] || at.$.back("opt.uuid")());
            }
            as.via.put(as.data, as.ack, as);
            return;
            if (at.get && at.back.soul) {
              tmp = as.data;
              as.via = at.back.$;
              (as.data = {})[at.get] = tmp;
              as.via.put(as.data, as.ack, as);
              return;
            }
          }
          function check(d, tmp) {
            return d && (tmp = d.constructor) && tmp.name || typeof d;
          }
          var u, empty = {}, noop = function() {
          }, turn = setTimeout.turn, valid = Gun2.valid, state_ify = Gun2.state.ify;
          var iife = function(fn, as) {
            fn.call(as || empty);
          };
        })(USE, "./put");
        ;
        USE(function(module2) {
          var Gun2 = USE("./root");
          USE("./chain");
          USE("./back");
          USE("./put");
          USE("./get");
          module2.exports = Gun2;
        })(USE, "./index");
        ;
        USE(function(module2) {
          var Gun2 = USE("./index");
          Gun2.chain.on = function(tag, arg, eas, as) {
            var gun = this, cat = gun._, root = cat.root, act, off, id, tmp;
            if (typeof tag === "string") {
              if (!arg) {
                return cat.on(tag);
              }
              act = cat.on(tag, arg, eas || cat, as);
              if (eas && eas.$) {
                (eas.subs || (eas.subs = [])).push(act);
              }
              return gun;
            }
            var opt = arg;
            (opt = true === opt ? { change: true } : opt || {}).not = 1;
            opt.on = 1;
            var wait = {};
            gun.get(tag, opt);
            return gun;
          };
          Gun2.chain.once = function(cb, opt) {
            opt = opt || {};
            if (!cb) {
              return none(this, opt);
            }
            var gun = this, cat = gun._, root = cat.root, data = cat.put, id = String.random(7), one, tmp;
            gun.get(function(data2, key, msg, eve) {
              var $ = this, at = $._, one2 = at.one || (at.one = {});
              if (eve.stun) {
                return;
              }
              if ("" === one2[id]) {
                return;
              }
              if (true === (tmp = Gun2.valid(data2))) {
                once();
                return;
              }
              if ("string" == typeof tmp) {
                return;
              }
              clearTimeout((cat.one || "")[id]);
              clearTimeout(one2[id]);
              one2[id] = setTimeout(once, opt.wait || 99);
              function once(f) {
                if (!at.has && !at.soul) {
                  at = { put: data2, get: key };
                }
                if (u === (tmp = at.put)) {
                  tmp = ((msg.$$ || "")._ || "").put;
                }
                if ("string" == typeof Gun2.valid(tmp)) {
                  tmp = root.$.get(tmp)._.put;
                  if (tmp === u && !f) {
                    one2[id] = setTimeout(function() {
                      once(1);
                    }, opt.wait || 99);
                    return;
                  }
                }
                if (eve.stun) {
                  return;
                }
                if ("" === one2[id]) {
                  return;
                }
                one2[id] = "";
                if (cat.soul || cat.has) {
                  eve.off();
                }
                cb.call($, tmp, at.get);
                clearTimeout(one2[id]);
              }
              ;
            }, { on: 1 });
            return gun;
          };
          function none(gun, opt, chain) {
            Gun2.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            (chain = gun.chain())._.nix = gun.once(function(data, key) {
              chain._.on("in", this._);
            });
            chain._.lex = gun._.lex;
            return chain;
          }
          Gun2.chain.off = function() {
            var gun = this, at = gun._, tmp;
            var cat = at.back;
            if (!cat) {
              return;
            }
            at.ack = 0;
            if (tmp = cat.next) {
              if (tmp[at.get]) {
                delete tmp[at.get];
              } else {
              }
            }
            if (tmp = cat.any) {
              delete cat.any;
              cat.any = {};
            }
            if (tmp = cat.ask) {
              delete tmp[at.get];
            }
            if (tmp = cat.put) {
              delete tmp[at.get];
            }
            if (tmp = at.soul) {
              delete cat.root.graph[tmp];
            }
            if (tmp = at.map) {
              Object.keys(tmp).forEach(function(i, at2) {
                at2 = tmp[i];
                if (at2.link) {
                  cat.root.$.get(at2.link).off();
                }
              });
            }
            if (tmp = at.next) {
              Object.keys(tmp).forEach(function(i, neat) {
                neat = tmp[i];
                neat.$.off();
              });
            }
            at.on("off", {});
            return gun;
          };
          var empty = {}, noop = function() {
          }, u;
        })(USE, "./on");
        ;
        USE(function(module2) {
          var Gun2 = USE("./index"), next = Gun2.chain.get.next;
          Gun2.chain.get.next = function(gun, lex) {
            var tmp;
            if (!Object.plain(lex)) {
              return (next || noop)(gun, lex);
            }
            if (tmp = ((tmp = lex["#"]) || "")["="] || tmp) {
              return gun.get(tmp);
            }
            (tmp = gun.chain()._).lex = lex;
            gun.on("in", function(eve) {
              if (String.match(eve.get || (eve.put || "")["."], lex["."] || lex["#"] || lex)) {
                tmp.on("in", eve);
              }
              this.to.next(eve);
            });
            return tmp.$;
          };
          Gun2.chain.map = function(cb, opt, t) {
            var gun = this, cat = gun._, lex, chain;
            if (Object.plain(cb)) {
              lex = cb["."] ? cb : { ".": cb };
              cb = u;
            }
            if (!cb) {
              if (chain = cat.each) {
                return chain;
              }
              (cat.each = chain = gun.chain())._.lex = lex || chain._.lex || cat.lex;
              chain._.nix = gun.back("nix");
              gun.on("in", map, chain._);
              return chain;
            }
            Gun2.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            chain = gun.chain();
            gun.map().on(function(data, key, msg, eve) {
              var next2 = (cb || noop).call(this, data, key, msg, eve);
              if (u === next2) {
                return;
              }
              if (data === next2) {
                return chain._.on("in", msg);
              }
              if (Gun2.is(next2)) {
                return chain._.on("in", next2._);
              }
              var tmp = {};
              Object.keys(msg.put).forEach(function(k) {
                tmp[k] = msg.put[k];
              }, tmp);
              tmp["="] = next2;
              chain._.on("in", { get: key, put: tmp });
            });
            return chain;
          };
          function map(msg) {
            this.to.next(msg);
            var cat = this.as, gun = msg.$, at = gun._, put = msg.put, tmp;
            if (!at.soul && !msg.$$) {
              return;
            }
            if ((tmp = cat.lex) && !String.match(msg.get || (put || "")["."], tmp["."] || tmp["#"] || tmp)) {
              return;
            }
            Gun2.on.link(msg, cat);
          }
          var noop = function() {
          }, event = { stun: noop, off: noop }, u;
        })(USE, "./map");
        ;
        USE(function(module2) {
          var Gun2 = USE("./index");
          Gun2.chain.set = function(item, cb, opt) {
            var gun = this, root = gun.back(-1), soul, tmp;
            cb = cb || function() {
            };
            opt = opt || {};
            opt.item = opt.item || item;
            if (soul = ((item || "")._ || "")["#"]) {
              (item = {})["#"] = soul;
            }
            if ("string" == typeof (tmp = Gun2.valid(item))) {
              return gun.get(soul = tmp).put(item, cb, opt);
            }
            if (!Gun2.is(item)) {
              if (Object.plain(item)) {
                item = root.get(soul = gun.back("opt.uuid")()).put(item);
              }
              return gun.get(soul || root.back("opt.uuid")(7)).put(item, cb, opt);
            }
            gun.put(function(go) {
              item.get(function(soul2, o, msg) {
                if (!soul2) {
                  return cb.call(gun, { err: Gun2.log('Only a node can be linked! Not "' + msg.put + '"!') });
                }
                (tmp = {})[soul2] = { "#": soul2 };
                go(tmp);
              }, true);
            });
            return item;
          };
        })(USE, "./set");
        ;
        USE(function(module2) {
          USE("./shim");
          var noop = function() {
          };
          var parse = JSON.parseAsync || function(t, cb, r) {
            var u2, d = +/* @__PURE__ */ new Date();
            try {
              cb(u2, JSON.parse(t, r), json.sucks(+/* @__PURE__ */ new Date() - d));
            } catch (e) {
              cb(e);
            }
          };
          var json = JSON.stringifyAsync || function(v, cb, r, s) {
            var u2, d = +/* @__PURE__ */ new Date();
            try {
              cb(u2, JSON.stringify(v, r, s), json.sucks(+/* @__PURE__ */ new Date() - d));
            } catch (e) {
              cb(e);
            }
          };
          json.sucks = function(d) {
            if (d > 99) {
              console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix.");
              json.sucks = noop;
            }
          };
          function Mesh(root) {
            var mesh = function() {
            };
            var opt = root.opt || {};
            opt.log = opt.log || console.log;
            opt.gap = opt.gap || opt.wait || 0;
            opt.max = opt.max || (opt.memory ? opt.memory * 999 * 999 : 3e8) * 0.3;
            opt.pack = opt.pack || opt.max * 0.01 * 0.01;
            opt.puff = opt.puff || 9;
            var puff = setTimeout.turn || setTimeout;
            var dup = root.dup, dup_check = dup.check, dup_track = dup.track;
            var ST = +/* @__PURE__ */ new Date(), LT = ST;
            var hear = mesh.hear = function(raw, peer) {
              if (!raw) {
                return;
              }
              if (opt.max <= raw.length) {
                return mesh.say({ dam: "!", err: "Message too big!" }, peer);
              }
              if (mesh === this) {
                hear.d += raw.length || 0;
                ++hear.c;
              }
              var S = peer.SH = +/* @__PURE__ */ new Date();
              var tmp = raw[0], msg;
              if ("[" === tmp) {
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({ dam: "!", err: "DAM JSON parse error." }, peer);
                  }
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), msg2.length, "# on hear batch");
                  var P = opt.puff;
                  (function go() {
                    var S2 = +/* @__PURE__ */ new Date();
                    var i = 0, m;
                    while (i < P && (m = msg2[i++])) {
                      mesh.hear(m, peer);
                    }
                    msg2 = msg2.slice(i);
                    console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "hear loop");
                    flush(peer);
                    if (!msg2.length) {
                      return;
                    }
                    puff(go, 0);
                  })();
                });
                raw = "";
                return;
              }
              if ("{" === tmp || (raw["#"] || Object.plain(raw)) && (msg = raw)) {
                if (msg) {
                  return hear.one(msg, peer, S);
                }
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({ dam: "!", err: "DAM JSON parse error." }, peer);
                  }
                  hear.one(msg2, peer, S);
                });
                return;
              }
            };
            hear.one = function(msg, peer, S) {
              var id, hash, tmp, ash, DBG;
              if (msg.DBG) {
                msg.DBG = DBG = { DBG: msg.DBG };
              }
              DBG && (DBG.h = S);
              DBG && (DBG.hp = +/* @__PURE__ */ new Date());
              if (!(id = msg["#"])) {
                id = msg["#"] = String.random(9);
              }
              if (tmp = dup_check(id)) {
                return;
              }
              if (!(hash = msg["##"]) && false) {
              }
              if (hash && (tmp = msg["@"] || msg.get && id) && dup.check(ash = tmp + hash)) {
                return;
              }
              (msg._ = function() {
              }).via = mesh.leap = peer;
              if ((tmp = msg["><"]) && "string" == typeof tmp) {
                tmp.slice(0, 99).split(",").forEach(function(k) {
                  this[k] = 1;
                }, msg._.yo = {});
              }
              if (tmp = msg.dam) {
                if (tmp = mesh.hear[tmp]) {
                  tmp(msg, peer, root);
                }
                dup_track(id);
                return;
              }
              if (tmp = msg.ok) {
                msg._.near = tmp["/"];
              }
              var S = +/* @__PURE__ */ new Date();
              DBG && (DBG.is = S);
              peer.SI = id;
              dup_track.ed = function(d) {
                if (id !== d) {
                  return;
                }
                dup_track.ed = 0;
                if (!(d = dup.s[id])) {
                  return;
                }
                d.via = peer;
                if (msg.get) {
                  d.it = msg;
                }
              };
              root.on("in", mesh.last = msg);
              DBG && (DBG.hd = +/* @__PURE__ */ new Date());
              console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, msg.get ? "msg get" : msg.put ? "msg put" : "msg");
              dup_track(id);
              if (ash) {
                dup_track(ash);
              }
              mesh.leap = mesh.last = null;
            };
            var tomap = function(k, i, m) {
              m(k, true);
            };
            hear.c = hear.d = 0;
            ;
            (function() {
              var SMIA = 0;
              var loop;
              mesh.hash = function(msg, peer) {
                var h, s, t;
                var S = +/* @__PURE__ */ new Date();
                json(msg.put, function hash(err, text) {
                  var ss = (s || (s = t = text || "")).slice(0, 32768);
                  h = String.hash(ss, h);
                  s = s.slice(32768);
                  if (s) {
                    puff(hash, 0);
                    return;
                  }
                  console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "say json+hash");
                  msg._.$put = t;
                  msg["##"] = h;
                  mesh.say(msg, peer);
                  delete msg._.$put;
                }, sort);
              };
              function sort(k, v) {
                var tmp;
                if (!(v instanceof Object)) {
                  return v;
                }
                Object.keys(v).sort().forEach(sorta, { to: tmp = {}, on: v });
                return tmp;
              }
              function sorta(k) {
                this.to[k] = this.on[k];
              }
              var say = mesh.say = function(msg, peer) {
                var tmp;
                if ((tmp = this) && (tmp = tmp.to) && tmp.next) {
                  tmp.next(msg);
                }
                if (!msg) {
                  return false;
                }
                var id, hash, raw, ack = msg["@"];
                var meta = msg._ || (msg._ = function() {
                });
                var DBG = msg.DBG, S = +/* @__PURE__ */ new Date();
                meta.y = meta.y || S;
                if (!peer) {
                  DBG && (DBG.y = S);
                }
                if (!(id = msg["#"])) {
                  id = msg["#"] = String.random(9);
                }
                !loop && dup_track(id);
                if (!(hash = msg["##"]) && u !== msg.put && !meta.via && ack) {
                  mesh.hash(msg, peer);
                  return;
                }
                if (!peer && ack) {
                  peer = (tmp = dup.s[ack]) && (tmp.via || (tmp = tmp.it) && (tmp = tmp._) && tmp.via) || (tmp = mesh.last) && ack === tmp["#"] && mesh.leap;
                }
                if (!peer && ack) {
                  if (dup.s[ack]) {
                    return;
                  }
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), ++SMIA, "total no peer to ack to");
                  return false;
                }
                if (ack && !msg.put && !hash && ((dup.s[ack] || "").it || "")["##"]) {
                  return false;
                }
                if (!peer && mesh.way) {
                  return mesh.way(msg);
                }
                DBG && (DBG.yh = +/* @__PURE__ */ new Date());
                if (!(raw = meta.raw)) {
                  mesh.raw(msg, peer);
                  return;
                }
                DBG && (DBG.yr = +/* @__PURE__ */ new Date());
                if (!peer || !peer.id) {
                  if (!Object.plain(peer || opt.peers)) {
                    return false;
                  }
                  var S = +/* @__PURE__ */ new Date();
                  var P = opt.puff, ps = opt.peers, pl = Object.keys(peer || opt.peers || {});
                  console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "peer keys");
                  ;
                  (function go() {
                    var S2 = +/* @__PURE__ */ new Date();
                    loop = 1;
                    var wr = meta.raw;
                    meta.raw = raw;
                    var i = 0, p;
                    while (i < 9 && (p = (pl || "")[i++])) {
                      if (!(p = ps[p] || (peer || "")[p])) {
                        continue;
                      }
                      mesh.say(msg, p);
                    }
                    meta.raw = wr;
                    loop = 0;
                    pl = pl.slice(i);
                    console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "say loop");
                    if (!pl.length) {
                      return;
                    }
                    puff(go, 0);
                    ack && dup_track(ack);
                  })();
                  return;
                }
                if (!peer.wire && mesh.wire) {
                  mesh.wire(peer);
                }
                if (id === peer.last) {
                  return;
                }
                peer.last = id;
                if (peer === meta.via) {
                  return false;
                }
                if ((tmp = meta.yo) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id])) {
                  return false;
                }
                console.STAT && console.STAT(S, ((DBG || meta).yp = +/* @__PURE__ */ new Date()) - (meta.y || S), "say prep");
                !loop && ack && dup_track(ack);
                if (peer.batch) {
                  peer.tail = (tmp = peer.tail || 0) + raw.length;
                  if (peer.tail <= opt.pack) {
                    peer.batch += (tmp ? "," : "") + raw;
                    return;
                  }
                  flush(peer);
                }
                peer.batch = "[";
                var ST2 = +/* @__PURE__ */ new Date();
                setTimeout(function() {
                  console.STAT && console.STAT(ST2, +/* @__PURE__ */ new Date() - ST2, "0ms TO");
                  flush(peer);
                }, opt.gap);
                send(raw, peer);
                console.STAT && ack === peer.SI && console.STAT(S, +/* @__PURE__ */ new Date() - peer.SH, "say ack");
              };
              mesh.say.c = mesh.say.d = 0;
              mesh.raw = function(msg, peer) {
                if (!msg) {
                  return "";
                }
                var meta = msg._ || {}, put, tmp;
                if (tmp = meta.raw) {
                  return tmp;
                }
                if ("string" == typeof msg) {
                  return msg;
                }
                var hash = msg["##"], ack = msg["@"];
                if (hash && ack) {
                  if (!meta.via && dup_check(ack + hash)) {
                    return false;
                  }
                  if (tmp = (dup.s[ack] || "").it) {
                    if (hash === tmp["##"]) {
                      return false;
                    }
                    if (!tmp["##"]) {
                      tmp["##"] = hash;
                    }
                  }
                }
                if (!msg.dam && !msg["@"]) {
                  var i = 0, to = [];
                  tmp = opt.peers;
                  for (var k in tmp) {
                    var p = tmp[k];
                    to.push(p.url || p.pid || p.id);
                    if (++i > 6) {
                      break;
                    }
                  }
                  if (i > 1) {
                    msg["><"] = to.join();
                  }
                }
                if (msg.put && (tmp = msg.ok)) {
                  msg.ok = { "@": (tmp["@"] || 1) - 1, "/": tmp["/"] == msg._.near ? mesh.near : tmp["/"] };
                }
                if (put = meta.$put) {
                  tmp = {};
                  Object.keys(msg).forEach(function(k2) {
                    tmp[k2] = msg[k2];
                  });
                  tmp.put = ":])([:";
                  json(tmp, function(err, raw) {
                    if (err) {
                      return;
                    }
                    var S = +/* @__PURE__ */ new Date();
                    tmp = raw.indexOf('"put":":])([:"');
                    res(u, raw = raw.slice(0, tmp + 6) + put + raw.slice(tmp + 14));
                    console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "say slice");
                  });
                  return;
                }
                json(msg, res);
                function res(err, raw) {
                  if (err) {
                    return;
                  }
                  meta.raw = raw;
                  mesh.say(msg, peer);
                }
              };
            })();
            function flush(peer) {
              var tmp = peer.batch, t = "string" == typeof tmp, l;
              if (t) {
                tmp += "]";
              }
              peer.batch = peer.tail = null;
              if (!tmp) {
                return;
              }
              if (t ? 3 > tmp.length : !tmp.length) {
                return;
              }
              if (!t) {
                try {
                  tmp = 1 === tmp.length ? tmp[0] : JSON.stringify(tmp);
                } catch (e) {
                  return opt.log("DAM JSON stringify error", e);
                }
              }
              if (!tmp) {
                return;
              }
              send(tmp, peer);
            }
            function send(raw, peer) {
              try {
                var wire = peer.wire;
                if (peer.say) {
                  peer.say(raw);
                } else if (wire.send) {
                  wire.send(raw);
                }
                mesh.say.d += raw.length || 0;
                ++mesh.say.c;
              } catch (e) {
                (peer.queue = peer.queue || []).push(raw);
              }
            }
            mesh.near = 0;
            mesh.hi = function(peer) {
              var wire = peer.wire, tmp;
              if (!wire) {
                mesh.wire(peer.length && { url: peer, id: peer } || peer);
                return;
              }
              if (peer.id) {
                opt.peers[peer.url || peer.id] = peer;
              } else {
                tmp = peer.id = peer.id || peer.url || String.random(9);
                mesh.say({ dam: "?", pid: root.opt.pid }, opt.peers[tmp] = peer);
                delete dup.s[peer.last];
              }
              if (!peer.met) {
                mesh.near++;
                peer.met = +/* @__PURE__ */ new Date();
                root.on("hi", peer);
              }
              tmp = peer.queue;
              peer.queue = [];
              setTimeout.each(tmp || [], function(msg) {
                send(msg, peer);
              }, 0, 9);
            };
            mesh.bye = function(peer) {
              peer.met && --mesh.near;
              delete peer.met;
              root.on("bye", peer);
              var tmp = +/* @__PURE__ */ new Date();
              tmp = tmp - (peer.met || tmp);
              mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
            };
            mesh.hear["!"] = function(msg, peer) {
              opt.log("Error:", msg.err);
            };
            mesh.hear["?"] = function(msg, peer) {
              if (msg.pid) {
                if (!peer.pid) {
                  peer.pid = msg.pid;
                }
                if (msg["@"]) {
                  return;
                }
              }
              mesh.say({ dam: "?", pid: opt.pid, "@": msg["#"] }, peer);
              delete dup.s[peer.last];
            };
            mesh.hear["mob"] = function(msg, peer) {
              if (!msg.peers) {
                return;
              }
              var peers = Object.keys(msg.peers), one = peers[Math.random() * peers.length >> 0];
              if (!one) {
                return;
              }
              mesh.bye(peer);
              mesh.hi(one);
            };
            root.on("create", function(root2) {
              root2.opt.pid = root2.opt.pid || String.random(9);
              this.to.next(root2);
              root2.on("out", mesh.say);
            });
            root.on("bye", function(peer, tmp) {
              peer = opt.peers[peer.id || peer] || peer;
              this.to.next(peer);
              peer.bye ? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
              delete opt.peers[peer.id];
              peer.wire = null;
            });
            var gets = {};
            root.on("bye", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = mesh.near;
              }
              if (!(tmp = peer.url)) {
                return;
              }
              gets[tmp] = true;
              setTimeout(function() {
                delete gets[tmp];
              }, opt.lack || 9e3);
            });
            root.on("hi", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = mesh.near;
              }
              if (opt.super) {
                return;
              }
              var souls = Object.keys(root.next || "");
              if (souls.length > 9999 && !console.SUBS) {
                console.log(console.SUBS = "Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`.");
              }
              setTimeout.each(souls, function(soul) {
                var node = root.next[soul];
                if (opt.super || (node.ask || "")[""]) {
                  mesh.say({ get: { "#": soul } }, peer);
                  return;
                }
                setTimeout.each(Object.keys(node.ask || ""), function(key) {
                  if (!key) {
                    return;
                  }
                  mesh.say({ "##": String.hash((root.graph[soul] || "")[key]), get: { "#": soul, ".": key } }, peer);
                });
              });
            });
            return mesh;
          }
          var empty = {}, ok = true, u;
          try {
            module2.exports = Mesh;
          } catch (e) {
          }
        })(USE, "./mesh");
        ;
        USE(function(module2) {
          var Gun2 = USE("./index");
          Gun2.Mesh = USE("./mesh");
          Gun2.on("opt", function(root) {
            this.to.next(root);
            if (root.once) {
              return;
            }
            var opt = root.opt;
            if (false === opt.WebSocket) {
              return;
            }
            var env = Gun2.window || {};
            var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
            if (!websocket) {
              return;
            }
            opt.WebSocket = websocket;
            var mesh = opt.mesh = opt.mesh || Gun2.Mesh(root);
            var wire = mesh.wire || opt.wire;
            mesh.wire = opt.wire = open;
            function open(peer) {
              try {
                if (!peer || !peer.url) {
                  return wire2 && wire2(peer);
                }
                var url = peer.url.replace(/^http/, "ws");
                var wire2 = peer.wire = new opt.WebSocket(url);
                wire2.onclose = function() {
                  reconnect(peer);
                  opt.mesh.bye(peer);
                };
                wire2.onerror = function(err) {
                  reconnect(peer);
                };
                wire2.onopen = function() {
                  opt.mesh.hi(peer);
                };
                wire2.onmessage = function(msg) {
                  if (!msg) {
                    return;
                  }
                  opt.mesh.hear(msg.data || msg, peer);
                };
                return wire2;
              } catch (e) {
                opt.mesh.bye(peer);
              }
            }
            setTimeout(function() {
              !opt.super && root.on("out", { dam: "hi" });
            }, 1);
            var wait = 2 * 999;
            function reconnect(peer) {
              clearTimeout(peer.defer);
              if (!opt.peers[peer.url]) {
                return;
              }
              if (doc && peer.retry <= 0) {
                return;
              }
              peer.retry = (peer.retry || opt.retry + 1 || 60) - (-peer.tried + (peer.tried = +/* @__PURE__ */ new Date()) < wait * 4 ? 1 : 0);
              peer.defer = setTimeout(function to() {
                if (doc && doc.hidden) {
                  return setTimeout(to, wait);
                }
                open(peer);
              }, wait);
            }
            var doc = "" + u !== typeof document && document;
          });
          var noop = function() {
          }, u;
        })(USE, "./websocket");
        ;
        USE(function(module2) {
          if (typeof Gun === "undefined") {
            return;
          }
          var noop = function() {
          }, store, u;
          try {
            store = (Gun.window || noop).localStorage;
          } catch (e) {
          }
          if (!store) {
            Gun.log("Warning: No localStorage exists to persist data to!");
            store = { setItem: function(k, v) {
              this[k] = v;
            }, removeItem: function(k) {
              delete this[k];
            }, getItem: function(k) {
              return this[k];
            } };
          }
          var parse = JSON.parseAsync || function(t, cb, r) {
            var u2;
            try {
              cb(u2, JSON.parse(t, r));
            } catch (e) {
              cb(e);
            }
          };
          var json = JSON.stringifyAsync || function(v, cb, r, s) {
            var u2;
            try {
              cb(u2, JSON.stringify(v, r, s));
            } catch (e) {
              cb(e);
            }
          };
          Gun.on("create", function lg(root) {
            this.to.next(root);
            var opt = root.opt, graph = root.graph, acks = [], disk, to, size, stop;
            if (false === opt.localStorage) {
              return;
            }
            opt.prefix = opt.file || "gun/";
            try {
              disk = lg[opt.prefix] = lg[opt.prefix] || JSON.parse(size = store.getItem(opt.prefix)) || {};
            } catch (e) {
              disk = lg[opt.prefix] = {};
            }
            size = (size || "").length;
            root.on("get", function(msg) {
              this.to.next(msg);
              var lex = msg.get, soul, data, tmp, u2;
              if (!lex || !(soul = lex["#"])) {
                return;
              }
              data = disk[soul] || u2;
              if (data && (tmp = lex["."]) && !Object.plain(tmp)) {
                data = Gun.state.ify({}, tmp, Gun.state.is(data, tmp), data[tmp], soul);
              }
              Gun.on.get.ack(msg, data);
            });
            root.on("put", function(msg) {
              this.to.next(msg);
              var put = msg.put, soul = put["#"], key = put["."], id = msg["#"], ok = msg.ok || "", tmp;
              disk[soul] = Gun.state.ify(disk[soul], key, put[">"], put[":"], soul);
              if (stop && size > 4999880) {
                root.on("in", { "@": id, err: "localStorage max!" });
                return;
              }
              if (!msg["@"] && (!msg._.via || Math.random() < ok["@"] / ok["/"])) {
                acks.push(id);
              }
              if (to) {
                return;
              }
              to = setTimeout(flush, 9 + size / 333);
            });
            function flush() {
              if (!acks.length && ((setTimeout.turn || "").s || "").length) {
                setTimeout(flush, 99);
                return;
              }
              var err, ack = acks;
              clearTimeout(to);
              to = false;
              acks = [];
              json(disk, function(err2, tmp) {
                try {
                  !err2 && store.setItem(opt.prefix, tmp);
                } catch (e) {
                  err2 = stop = e || "localStorage failure";
                }
                if (err2) {
                  Gun.log(err2 + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
                  root.on("localStorage:error", { err: err2, get: opt.prefix, put: disk });
                }
                size = tmp.length;
                setTimeout.each(ack, function(id) {
                  root.on("in", { "@": id, err: err2, ok: 0 });
                }, 0, 99);
              });
            }
          });
        })(USE, "./localStorage");
      })();
      (function() {
        var u;
        if ("" + u == typeof Gun) {
          return;
        }
        var DEP = function(n) {
          console.warn("Warning! Deprecated internal utility will break in next version:", n);
        };
        var Type = Gun;
        Type.fn = Type.fn || { is: function(fn2) {
          DEP("fn");
          return !!fn2 && "function" == typeof fn2;
        } };
        Type.bi = Type.bi || { is: function(b) {
          DEP("bi");
          return b instanceof Boolean || typeof b == "boolean";
        } };
        Type.num = Type.num || { is: function(n) {
          DEP("num");
          return !list_is(n) && (n - parseFloat(n) + 1 >= 0 || Infinity === n || -Infinity === n);
        } };
        Type.text = Type.text || { is: function(t) {
          DEP("text");
          return typeof t == "string";
        } };
        Type.text.ify = Type.text.ify || function(t) {
          DEP("text.ify");
          if (Type.text.is(t)) {
            return t;
          }
          if (typeof JSON !== "undefined") {
            return JSON.stringify(t);
          }
          return t && t.toString ? t.toString() : t;
        };
        Type.text.random = Type.text.random || function(l, c) {
          DEP("text.random");
          var s = "";
          l = l || 24;
          c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
          while (l > 0) {
            s += c.charAt(Math.floor(Math.random() * c.length));
            l--;
          }
          return s;
        };
        Type.text.match = Type.text.match || function(t, o) {
          var tmp, u2;
          DEP("text.match");
          if ("string" !== typeof t) {
            return false;
          }
          if ("string" == typeof o) {
            o = { "=": o };
          }
          o = o || {};
          tmp = o["="] || o["*"] || o[">"] || o["<"];
          if (t === tmp) {
            return true;
          }
          if (u2 !== o["="]) {
            return false;
          }
          tmp = o["*"] || o[">"] || o["<"];
          if (t.slice(0, (tmp || "").length) === tmp) {
            return true;
          }
          if (u2 !== o["*"]) {
            return false;
          }
          if (u2 !== o[">"] && u2 !== o["<"]) {
            return t >= o[">"] && t <= o["<"] ? true : false;
          }
          if (u2 !== o[">"] && t >= o[">"]) {
            return true;
          }
          if (u2 !== o["<"] && t <= o["<"]) {
            return true;
          }
          return false;
        };
        Type.text.hash = Type.text.hash || function(s, c) {
          DEP("text.hash");
          if (typeof s !== "string") {
            return;
          }
          c = c || 0;
          if (!s.length) {
            return c;
          }
          for (var i = 0, l = s.length, n; i < l; ++i) {
            n = s.charCodeAt(i);
            c = (c << 5) - c + n;
            c |= 0;
          }
          return c;
        };
        Type.list = Type.list || { is: function(l) {
          DEP("list");
          return l instanceof Array;
        } };
        Type.list.slit = Type.list.slit || Array.prototype.slice;
        Type.list.sort = Type.list.sort || function(k) {
          DEP("list.sort");
          return function(A, B) {
            if (!A || !B) {
              return 0;
            }
            A = A[k];
            B = B[k];
            if (A < B) {
              return -1;
            } else if (A > B) {
              return 1;
            } else {
              return 0;
            }
          };
        };
        Type.list.map = Type.list.map || function(l, c, _) {
          DEP("list.map");
          return obj_map(l, c, _);
        };
        Type.list.index = 1;
        Type.obj = Type.boj || { is: function(o) {
          DEP("obj");
          return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
        } };
        Type.obj.put = Type.obj.put || function(o, k, v) {
          DEP("obj.put");
          return (o || {})[k] = v, o;
        };
        Type.obj.has = Type.obj.has || function(o, k) {
          DEP("obj.has");
          return o && Object.prototype.hasOwnProperty.call(o, k);
        };
        Type.obj.del = Type.obj.del || function(o, k) {
          DEP("obj.del");
          if (!o) {
            return;
          }
          o[k] = null;
          delete o[k];
          return o;
        };
        Type.obj.as = Type.obj.as || function(o, k, v, u2) {
          DEP("obj.as");
          return o[k] = o[k] || (u2 === v ? {} : v);
        };
        Type.obj.ify = Type.obj.ify || function(o) {
          DEP("obj.ify");
          if (obj_is(o)) {
            return o;
          }
          try {
            o = JSON.parse(o);
          } catch (e) {
            o = {};
          }
          ;
          return o;
        };
        (function() {
          var u2;
          function map(v, k) {
            if (obj_has(this, k) && u2 !== this[k]) {
              return;
            }
            this[k] = v;
          }
          Type.obj.to = Type.obj.to || function(from, to) {
            DEP("obj.to");
            to = to || {};
            obj_map(from, map, to);
            return to;
          };
        })();
        Type.obj.copy = Type.obj.copy || function(o) {
          DEP("obj.copy");
          return !o ? o : JSON.parse(JSON.stringify(o));
        };
        (function() {
          function empty(v, i) {
            var n = this.n, u2;
            if (n && (i === n || obj_is(n) && obj_has(n, i))) {
              return;
            }
            if (u2 !== i) {
              return true;
            }
          }
          Type.obj.empty = Type.obj.empty || function(o, n) {
            DEP("obj.empty");
            if (!o) {
              return true;
            }
            return obj_map(o, empty, { n }) ? false : true;
          };
        })();
        ;
        (function() {
          function t(k, v) {
            if (2 === arguments.length) {
              t.r = t.r || {};
              t.r[k] = v;
              return;
            }
            t.r = t.r || [];
            t.r.push(k);
          }
          ;
          var keys = Object.keys, map, u2;
          Object.keys = Object.keys || function(o) {
            return map(o, function(v, k, t2) {
              t2(k);
            });
          };
          Type.obj.map = map = Type.obj.map || function(l, c, _) {
            DEP("obj.map");
            var u3, i = 0, x, r, ll, lle, f = "function" == typeof c;
            t.r = u3;
            if (keys && obj_is(l)) {
              ll = keys(l);
              lle = true;
            }
            _ = _ || {};
            if (list_is(l) || ll) {
              x = (ll || l).length;
              for (; i < x; i++) {
                var ii = i + Type.list.index;
                if (f) {
                  r = lle ? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);
                  if (r !== u3) {
                    return r;
                  }
                } else {
                  if (c === l[lle ? ll[i] : i]) {
                    return ll ? ll[i] : ii;
                  }
                }
              }
            } else {
              for (i in l) {
                if (f) {
                  if (obj_has(l, i)) {
                    r = _ ? c.call(_, l[i], i, t) : c(l[i], i, t);
                    if (r !== u3) {
                      return r;
                    }
                  }
                } else {
                  if (c === l[i]) {
                    return i;
                  }
                }
              }
            }
            return f ? t.r : Type.list.index ? 0 : -1;
          };
        })();
        Type.time = Type.time || {};
        Type.time.is = Type.time.is || function(t) {
          DEP("time");
          return t ? t instanceof Date : +(/* @__PURE__ */ new Date()).getTime();
        };
        var fn_is = Type.fn.is;
        var list_is = Type.list.is;
        var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
        var Val = {};
        Val.is = function(v) {
          DEP("val.is");
          if (v === u) {
            return false;
          }
          if (v === null) {
            return true;
          }
          if (v === Infinity) {
            return false;
          }
          if (text_is(v) || bi_is(v) || num_is(v)) {
            return true;
          }
          return Val.link.is(v) || false;
        };
        Val.link = Val.rel = { _: "#" };
        ;
        (function() {
          Val.link.is = function(v) {
            DEP("val.link.is");
            if (v && v[rel_] && !v._ && obj_is(v)) {
              var o = {};
              obj_map(v, map, o);
              if (o.id) {
                return o.id;
              }
            }
            return false;
          };
          function map(s, k) {
            var o = this;
            if (o.id) {
              return o.id = false;
            }
            if (k == rel_ && text_is(s)) {
              o.id = s;
            } else {
              return o.id = false;
            }
          }
        })();
        Val.link.ify = function(t) {
          DEP("val.link.ify");
          return obj_put({}, rel_, t);
        };
        Type.obj.has._ = ".";
        var rel_ = Val.link._, u;
        var bi_is = Type.bi.is;
        var num_is = Type.num.is;
        var text_is = Type.text.is;
        var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
        Type.val = Type.val || Val;
        var Node = { _: "_" };
        Node.soul = function(n, o) {
          DEP("node.soul");
          return n && n._ && n._[o || soul_];
        };
        Node.soul.ify = function(n, o) {
          DEP("node.soul.ify");
          o = typeof o === "string" ? { soul: o } : o || {};
          n = n || {};
          n._ = n._ || {};
          n._[soul_] = o.soul || n._[soul_] || text_random();
          return n;
        };
        Node.soul._ = Val.link._;
        ;
        (function() {
          Node.is = function(n, cb, as) {
            DEP("node.is");
            var s;
            if (!obj_is(n)) {
              return false;
            }
            if (s = Node.soul(n)) {
              return !obj_map(n, map, { as, cb, s, n });
            }
            return false;
          };
          function map(v, k) {
            if (k === Node._) {
              return;
            }
            if (!Val.is(v)) {
              return true;
            }
            if (this.cb) {
              this.cb.call(this.as, v, k, this.n, this.s);
            }
          }
        })();
        ;
        (function() {
          Node.ify = function(obj2, o, as) {
            DEP("node.ify");
            if (!o) {
              o = {};
            } else if (typeof o === "string") {
              o = { soul: o };
            } else if ("function" == typeof o) {
              o = { map: o };
            }
            if (o.map) {
              o.node = o.map.call(as, obj2, u, o.node || {});
            }
            if (o.node = Node.soul.ify(o.node || {}, o)) {
              obj_map(obj2, map, { o, as });
            }
            return o.node;
          };
          function map(v, k) {
            var o = this.o, tmp, u2;
            if (o.map) {
              tmp = o.map.call(this.as, v, "" + k, o.node);
              if (u2 === tmp) {
                obj_del(o.node, k);
              } else if (o.node) {
                o.node[k] = tmp;
              }
              return;
            }
            if (Val.is(v)) {
              o.node[k] = v;
            }
          }
        })();
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
        var text = Type.text, text_random = text.random;
        var soul_ = Node.soul._;
        var u;
        Type.node = Type.node || Node;
        var State = Type.state;
        State.lex = function() {
          DEP("state.lex");
          return State().toString(36).replace(".", "");
        };
        State.to = function(from, k, to) {
          DEP("state.to");
          var val = (from || {})[k];
          if (obj_is(val)) {
            val = obj_copy(val);
          }
          return State.ify(to, k, State.is(from, k), val, Node.soul(from));
        };
        (function() {
          State.map = function(cb, s, as) {
            DEP("state.map");
            var u2;
            var o = obj_is(o = cb || s) ? o : null;
            cb = fn_is(cb = cb || s) ? cb : null;
            if (o && !cb) {
              s = num_is(s) ? s : State();
              o[N_] = o[N_] || {};
              obj_map(o, map, { o, s });
              return o;
            }
            as = as || obj_is(s) ? s : u2;
            s = num_is(s) ? s : State();
            return function(v, k, o2, opt) {
              if (!cb) {
                map.call({ o: o2, s }, v, k);
                return v;
              }
              cb.call(as || this || {}, v, k, o2, opt);
              if (obj_has(o2, k) && u2 === o2[k]) {
                return;
              }
              map.call({ o: o2, s }, v, k);
            };
          };
          function map(v, k) {
            if (N_ === k) {
              return;
            }
            State.ify(this.o, k, this.s);
          }
        })();
        var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
        var num = Type.num, num_is = num.is;
        var fn = Type.fn, fn_is = fn.is;
        var N_ = Node._, u;
        var Graph = {};
        ;
        (function() {
          Graph.is = function(g, cb, fn2, as) {
            DEP("graph.is");
            if (!g || !obj_is(g) || obj_empty(g)) {
              return false;
            }
            return !obj_map(g, map, { cb, fn: fn2, as });
          };
          function map(n, s) {
            if (!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)) {
              return true;
            }
            if (!this.cb) {
              return;
            }
            nf.n = n;
            nf.as = this.as;
            this.cb.call(nf.as, n, s, nf);
          }
          function nf(fn2) {
            if (fn2) {
              Node.is(nf.n, fn2, nf.as);
            }
          }
        })();
        ;
        (function() {
          Graph.ify = function(obj2, env, as) {
            DEP("graph.ify");
            var at = { path: [], obj: obj2 };
            if (!env) {
              env = {};
            } else if (typeof env === "string") {
              env = { soul: env };
            } else if ("function" == typeof env) {
              env.map = env;
            }
            if (typeof as === "string") {
              env.soul = env.soul || as;
              as = u;
            }
            if (env.soul) {
              at.link = Val.link.ify(env.soul);
            }
            env.shell = (as || {}).shell;
            env.graph = env.graph || {};
            env.seen = env.seen || [];
            env.as = env.as || as;
            node(env, at);
            env.root = at.node;
            return env.graph;
          };
          function node(env, at) {
            var tmp;
            if (tmp = seen(env, at)) {
              return tmp;
            }
            at.env = env;
            at.soul = soul;
            if (Node.ify(at.obj, map, at)) {
              at.link = at.link || Val.link.ify(Node.soul(at.node));
              if (at.obj !== env.shell) {
                env.graph[Val.link.is(at.link)] = at.node;
              }
            }
            return at;
          }
          function map(v, k, n) {
            var at = this, env = at.env, is, tmp;
            if (Node._ === k && obj_has(v, Val.link._)) {
              return n._;
            }
            if (!(is = valid(v, k, n, at, env))) {
              return;
            }
            if (!k) {
              at.node = at.node || n || {};
              if (obj_has(v, Node._) && Node.soul(v)) {
                at.node._ = obj_copy(v._);
              }
              at.node = Node.soul.ify(at.node, Val.link.is(at.link));
              at.link = at.link || Val.link.ify(Node.soul(at.node));
            }
            if (tmp = env.map) {
              tmp.call(env.as || {}, v, k, n, at);
              if (obj_has(n, k)) {
                v = n[k];
                if (u === v) {
                  obj_del(n, k);
                  return;
                }
                if (!(is = valid(v, k, n, at, env))) {
                  return;
                }
              }
            }
            if (!k) {
              return at.node;
            }
            if (true === is) {
              return v;
            }
            tmp = node(env, { obj: v, path: at.path.concat(k) });
            if (!tmp.node) {
              return;
            }
            return tmp.link;
          }
          function soul(id) {
            var at = this;
            var prev = Val.link.is(at.link), graph = at.env.graph;
            at.link = at.link || Val.link.ify(id);
            at.link[Val.link._] = id;
            if (at.node && at.node[Node._]) {
              at.node[Node._][Val.link._] = id;
            }
            if (obj_has(graph, prev)) {
              graph[id] = graph[prev];
              obj_del(graph, prev);
            }
          }
          function valid(v, k, n, at, env) {
            var tmp;
            if (Val.is(v)) {
              return true;
            }
            if (obj_is(v)) {
              return 1;
            }
            if (tmp = env.invalid) {
              v = tmp.call(env.as || {}, v, k, n);
              return valid(v, k, n, at, env);
            }
            env.err = "Invalid value at '" + at.path.concat(k).join(".") + "'!";
            if (Type.list.is(v)) {
              env.err += " Use `.set(item)` instead of an Array.";
            }
          }
          function seen(env, at) {
            var arr = env.seen, i = arr.length, has;
            while (i--) {
              has = arr[i];
              if (at.obj === has.obj) {
                return has;
              }
            }
            arr.push(at);
          }
        })();
        Graph.node = function(node) {
          DEP("graph.node");
          var soul = Node.soul(node);
          if (!soul) {
            return;
          }
          return obj_put({}, soul, node);
        };
        (function() {
          Graph.to = function(graph, root, opt) {
            DEP("graph.to");
            if (!graph) {
              return;
            }
            var obj2 = {};
            opt = opt || { seen: {} };
            obj_map(graph[root], map, { obj: obj2, graph, opt });
            return obj2;
          };
          function map(v, k) {
            var tmp, obj2;
            if (Node._ === k) {
              if (obj_empty(v, Val.link._)) {
                return;
              }
              this.obj[k] = obj_copy(v);
              return;
            }
            if (!(tmp = Val.link.is(v))) {
              this.obj[k] = v;
              return;
            }
            if (obj2 = this.opt.seen[tmp]) {
              this.obj[k] = obj2;
              return;
            }
            this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
          }
        })();
        var fn_is = Type.fn.is;
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
        var u;
        Type.graph = Type.graph || Graph;
      })();
    }
  });

  // lib/gun/sea.js
  var require_sea = __commonJS({
    "lib/gun/sea.js"(exports, module) {
      (function() {
        function USE(arg, req) {
          return req ? __require(arg) : arg.slice ? USE[R(arg)] : function(mod, path2) {
            arg(mod = { exports: {} });
            USE[R(path2)] = mod.exports;
          };
          function R(p) {
            return p.split("/").slice(-1).toString().replace(".js", "");
          }
        }
        if (typeof module !== "undefined") {
          var MODULE = module;
        }
        ;
        USE(function(module2) {
          if (typeof self !== "undefined") {
            module2.window = self;
          }
          if (typeof window !== "undefined") {
            module2.window = window;
          }
          var tmp = module2.window || module2, u;
          var SEA = tmp.SEA || {};
          if (SEA.window = module2.window) {
            SEA.window.SEA = SEA;
          }
          try {
            if (u + "" !== typeof MODULE) {
              MODULE.exports = SEA;
            }
          } catch (e) {
          }
          module2.exports = SEA;
        })(USE, "./root");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          try {
            if (SEA.window) {
              if (location.protocol.indexOf("s") < 0 && location.host.indexOf("localhost") < 0 && !/^127\.\d+\.\d+\.\d+$/.test(location.hostname) && location.protocol.indexOf("file:") < 0) {
                console.warn("HTTPS needed for WebCrypto in SEA, redirecting...");
                location.protocol = "https:";
              }
            }
          } catch (e) {
          }
        })(USE, "./https");
        ;
        USE(function(module2) {
          var u;
          if (u + "" == typeof btoa) {
            if (u + "" == typeof Buffer) {
              try {
                global.Buffer = USE("buffer", 1).Buffer;
              } catch (e) {
                console.log("Please `npm install buffer` or add it to your package.json !");
              }
            }
            global.btoa = function(data) {
              return Buffer.from(data, "binary").toString("base64");
            };
            global.atob = function(data) {
              return Buffer.from(data, "base64").toString("binary");
            };
          }
        })(USE, "./base64");
        ;
        USE(function(module2) {
          USE("./base64");
          function SeaArray() {
          }
          Object.assign(SeaArray, { from: Array.from });
          SeaArray.prototype = Object.create(Array.prototype);
          SeaArray.prototype.toString = function(enc, start, end) {
            enc = enc || "utf8";
            start = start || 0;
            const length = this.length;
            if (enc === "hex") {
              const buf = new Uint8Array(this);
              return [...Array((end && end + 1 || length) - start).keys()].map((i) => buf[i + start].toString(16).padStart(2, "0")).join("");
            }
            if (enc === "utf8") {
              return Array.from(
                { length: (end || length) - start },
                (_, i) => String.fromCharCode(this[i + start])
              ).join("");
            }
            if (enc === "base64") {
              return btoa(this);
            }
          };
          module2.exports = SeaArray;
        })(USE, "./array");
        ;
        USE(function(module2) {
          USE("./base64");
          var SeaArray = USE("./array");
          function SafeBuffer(...props) {
            console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()");
            return SafeBuffer.from(...props);
          }
          SafeBuffer.prototype = Object.create(Array.prototype);
          Object.assign(SafeBuffer, {
            // (data, enc) where typeof data === 'string' then enc === 'utf8'|'hex'|'base64'
            from() {
              if (!Object.keys(arguments).length || arguments[0] == null) {
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              }
              const input = arguments[0];
              let buf;
              if (typeof input === "string") {
                const enc = arguments[1] || "utf8";
                if (enc === "hex") {
                  const bytes = input.match(/([\da-fA-F]{2})/g).map((byte) => parseInt(byte, 16));
                  if (!bytes || !bytes.length) {
                    throw new TypeError("Invalid first argument for type 'hex'.");
                  }
                  buf = SeaArray.from(bytes);
                } else if (enc === "utf8" || "binary" === enc) {
                  const length2 = input.length;
                  const words = new Uint16Array(length2);
                  Array.from({ length: length2 }, (_, i) => words[i] = input.charCodeAt(i));
                  buf = SeaArray.from(words);
                } else if (enc === "base64") {
                  const dec = atob(input);
                  const length2 = dec.length;
                  const bytes = new Uint8Array(length2);
                  Array.from({ length: length2 }, (_, i) => bytes[i] = dec.charCodeAt(i));
                  buf = SeaArray.from(bytes);
                } else if (enc === "binary") {
                  buf = SeaArray.from(input);
                } else {
                  console.info("SafeBuffer.from unknown encoding: " + enc);
                }
                return buf;
              }
              const byteLength = input.byteLength;
              const length = input.byteLength ? input.byteLength : input.length;
              if (length) {
                let buf2;
                if (input instanceof ArrayBuffer) {
                  buf2 = new Uint8Array(input);
                }
                return SeaArray.from(buf2 || input);
              }
            },
            // This is 'safe-buffer.alloc' sans encoding support
            alloc(length, fill = 0) {
              return SeaArray.from(new Uint8Array(Array.from({ length }, () => fill)));
            },
            // This is normal UNSAFE 'buffer.alloc' or 'new Buffer(length)' - don't use!
            allocUnsafe(length) {
              return SeaArray.from(new Uint8Array(Array.from({ length })));
            },
            // This puts together array of array like members
            concat(arr) {
              if (!Array.isArray(arr)) {
                throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");
              }
              return SeaArray.from(arr.reduce((ret, item) => ret.concat(Array.from(item)), []));
            }
          });
          SafeBuffer.prototype.from = SafeBuffer.from;
          SafeBuffer.prototype.toString = SeaArray.prototype.toString;
          module2.exports = SafeBuffer;
        })(USE, "./buffer");
        ;
        USE(function(module2) {
          const SEA = USE("./root");
          const api = { Buffer: USE("./buffer") };
          var o = {}, u;
          JSON.parseAsync = JSON.parseAsync || function(t, cb, r) {
            var u2;
            try {
              cb(u2, JSON.parse(t, r));
            } catch (e) {
              cb(e);
            }
          };
          JSON.stringifyAsync = JSON.stringifyAsync || function(v, cb, r, s) {
            var u2;
            try {
              cb(u2, JSON.stringify(v, r, s));
            } catch (e) {
              cb(e);
            }
          };
          api.parse = function(t, r) {
            return new Promise(function(res, rej) {
              JSON.parseAsync(t, function(err, raw) {
                err ? rej(err) : res(raw);
              }, r);
            });
          };
          api.stringify = function(v, r, s) {
            return new Promise(function(res, rej) {
              JSON.stringifyAsync(v, function(err, raw) {
                err ? rej(err) : res(raw);
              }, r, s);
            });
          };
          if (SEA.window) {
            api.crypto = SEA.window.crypto || SEA.window.msCrypto;
            api.subtle = (api.crypto || o).subtle || (api.crypto || o).webkitSubtle;
            api.TextEncoder = SEA.window.TextEncoder;
            api.TextDecoder = SEA.window.TextDecoder;
            api.random = (len) => api.Buffer.from(api.crypto.getRandomValues(new Uint8Array(api.Buffer.alloc(len))));
          }
          if (!api.TextDecoder) {
            const { TextEncoder, TextDecoder } = USE((u + "" == typeof MODULE ? "." : "") + "./lib/text-encoding", 1);
            api.TextDecoder = TextDecoder;
            api.TextEncoder = TextEncoder;
          }
          if (!api.crypto) {
            try {
              var crypto = USE("crypto", 1);
              Object.assign(api, {
                crypto,
                random: (len) => api.Buffer.from(crypto.randomBytes(len))
              });
              const { Crypto: WebCrypto } = USE("@peculiar/webcrypto", 1);
              api.ossl = api.subtle = new WebCrypto({ directory: "ossl" }).subtle;
            } catch (e) {
              console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !");
            }
          }
          module2.exports = api;
        })(USE, "./shim");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var s = {};
          s.pbkdf2 = { hash: { name: "SHA-256" }, iter: 1e5, ks: 64 };
          s.ecdsa = {
            pair: { name: "ECDSA", namedCurve: "P-256" },
            sign: { name: "ECDSA", hash: { name: "SHA-256" } }
          };
          s.ecdh = { name: "ECDH", namedCurve: "P-256" };
          s.jwk = function(pub, d) {
            pub = pub.split(".");
            var x = pub[0], y = pub[1];
            var jwk = { kty: "EC", crv: "P-256", x, y, ext: true };
            jwk.key_ops = d ? ["sign"] : ["verify"];
            if (d) {
              jwk.d = d;
            }
            return jwk;
          };
          s.keyToJwk = function(keyBytes) {
            const keyB64 = keyBytes.toString("base64");
            const k = keyB64.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
            return { kty: "oct", k, ext: false, alg: "A256GCM" };
          };
          s.recall = {
            validity: 12 * 60 * 60,
            // internally in seconds : 12 hours
            hook: function(props) {
              return props;
            }
            // { iat, exp, alias, remember } // or return new Promise((resolve, reject) => resolve(props)
          };
          s.check = function(t) {
            return typeof t == "string" && "SEA{" === t.slice(0, 4);
          };
          s.parse = async function p(t) {
            try {
              var yes = typeof t == "string";
              if (yes && "SEA{" === t.slice(0, 4)) {
                t = t.slice(3);
              }
              return yes ? await shim.parse(t) : t;
            } catch (e) {
            }
            return t;
          };
          SEA.opt = s;
          module2.exports = s;
        })(USE, "./settings");
        ;
        USE(function(module2) {
          var shim = USE("./shim");
          module2.exports = async function(d, o) {
            var t = typeof d == "string" ? d : await shim.stringify(d);
            var hash = await shim.subtle.digest({ name: o || "SHA-256" }, new shim.TextEncoder().encode(t));
            return shim.Buffer.from(hash);
          };
        })(USE, "./sha256");
        ;
        USE(function(module2) {
          const __shim = USE("./shim");
          const subtle = __shim.subtle;
          const ossl = __shim.ossl ? __shim.ossl : subtle;
          const sha1hash2 = (b) => ossl.digest({ name: "SHA-1" }, new ArrayBuffer(b));
          module2.exports = sha1hash2;
        })(USE, "./sha1");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S = USE("./settings");
          var sha = USE("./sha256");
          var u;
          SEA.work = SEA.work || (async (data, pair, cb, opt) => {
            try {
              var salt = (pair || {}).epub || pair;
              opt = opt || {};
              if (salt instanceof Function) {
                cb = salt;
                salt = u;
              }
              data = typeof data == "string" ? data : await shim.stringify(data);
              if ("sha" === (opt.name || "").toLowerCase().slice(0, 3)) {
                var rsha = shim.Buffer.from(await sha(data, opt.name), "binary").toString(opt.encode || "base64");
                if (cb) {
                  try {
                    cb(rsha);
                  } catch (e) {
                    console.log(e);
                  }
                }
                return rsha;
              }
              salt = salt || shim.random(9);
              var key = await (shim.ossl || shim.subtle).importKey("raw", new shim.TextEncoder().encode(data), { name: opt.name || "PBKDF2" }, false, ["deriveBits"]);
              var work = await (shim.ossl || shim.subtle).deriveBits({
                name: opt.name || "PBKDF2",
                iterations: opt.iterations || S.pbkdf2.iter,
                salt: new shim.TextEncoder().encode(opt.salt || salt),
                hash: opt.hash || S.pbkdf2.hash
              }, key, opt.length || S.pbkdf2.ks * 8);
              data = shim.random(data.length);
              var r = shim.Buffer.from(work, "binary").toString(opt.encode || "base64");
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.work;
        })(USE, "./work");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S = USE("./settings");
          SEA.name = SEA.name || (async (cb, opt) => {
            try {
              if (cb) {
                try {
                  cb();
                } catch (e) {
                  console.log(e);
                }
              }
              return;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          SEA.pair = SEA.pair || (async (cb, opt) => {
            try {
              var ecdhSubtle = shim.ossl || shim.subtle;
              var sa = await shim.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]).then(async (keys) => {
                var key = {};
                key.priv = (await shim.subtle.exportKey("jwk", keys.privateKey)).d;
                var pub = await shim.subtle.exportKey("jwk", keys.publicKey);
                key.pub = pub.x + "." + pub.y;
                return key;
              });
              try {
                var dh = await ecdhSubtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveKey"]).then(async (keys) => {
                  var key = {};
                  key.epriv = (await ecdhSubtle.exportKey("jwk", keys.privateKey)).d;
                  var pub = await ecdhSubtle.exportKey("jwk", keys.publicKey);
                  key.epub = pub.x + "." + pub.y;
                  return key;
                });
              } catch (e) {
                if (SEA.window) {
                  throw e;
                }
                if (e == "Error: ECDH is not a supported algorithm") {
                  console.log("Ignoring ECDH...");
                } else {
                  throw e;
                }
              }
              dh = dh || {};
              var r = {
                pub: sa.pub,
                priv: sa.priv,
                /* pubId, */
                epub: dh.epub,
                epriv: dh.epriv
              };
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.pair;
        })(USE, "./pair");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S = USE("./settings");
          var sha = USE("./sha256");
          var u;
          SEA.sign = SEA.sign || (async (data, pair, cb, opt) => {
            try {
              opt = opt || {};
              if (!(pair || opt).priv) {
                if (!SEA.I) {
                  throw "No signing key.";
                }
                pair = await SEA.I(null, { what: data, how: "sign", why: opt.why });
              }
              if (u === data) {
                throw "`undefined` not allowed.";
              }
              var json = await S.parse(data);
              var check = opt.check = opt.check || json;
              if (SEA.verify && (SEA.opt.check(check) || check && check.s && check.m) && u !== await SEA.verify(check, pair)) {
                var r = await S.parse(check);
                if (!opt.raw) {
                  r = "SEA" + await shim.stringify(r);
                }
                if (cb) {
                  try {
                    cb(r);
                  } catch (e) {
                    console.log(e);
                  }
                }
                return r;
              }
              var pub = pair.pub;
              var priv = pair.priv;
              var jwk = S.jwk(pub, priv);
              var hash = await sha(json);
              var sig = await (shim.ossl || shim.subtle).importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]).then((key) => (shim.ossl || shim.subtle).sign({ name: "ECDSA", hash: { name: "SHA-256" } }, key, new Uint8Array(hash)));
              var r = { m: json, s: shim.Buffer.from(sig, "binary").toString(opt.encode || "base64") };
              if (!opt.raw) {
                r = "SEA" + await shim.stringify(r);
              }
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.sign;
        })(USE, "./sign");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S = USE("./settings");
          var sha = USE("./sha256");
          var u;
          SEA.verify = SEA.verify || (async (data, pair, cb, opt) => {
            try {
              var json = await S.parse(data);
              if (false === pair) {
                var raw = await S.parse(json.m);
                if (cb) {
                  try {
                    cb(raw);
                  } catch (e) {
                    console.log(e);
                  }
                }
                return raw;
              }
              opt = opt || {};
              var pub = pair.pub || pair;
              var key = SEA.opt.slow_leak ? await SEA.opt.slow_leak(pub) : await (shim.ossl || shim.subtle).importKey("jwk", S.jwk(pub), { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
              var hash = await sha(json.m);
              var buf, sig, check, tmp;
              try {
                buf = shim.Buffer.from(json.s, opt.encode || "base64");
                sig = new Uint8Array(buf);
                check = await (shim.ossl || shim.subtle).verify({ name: "ECDSA", hash: { name: "SHA-256" } }, key, sig, new Uint8Array(hash));
                if (!check) {
                  throw "Signature did not match.";
                }
              } catch (e) {
                if (SEA.opt.fallback) {
                  return await SEA.opt.fall_verify(data, pair, cb, opt);
                }
              }
              var r = check ? await S.parse(json.m) : u;
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.verify;
          var knownKeys = {};
          var keyForPair = SEA.opt.slow_leak = (pair) => {
            if (knownKeys[pair])
              return knownKeys[pair];
            var jwk = S.jwk(pair);
            knownKeys[pair] = (shim.ossl || shim.subtle).importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
            return knownKeys[pair];
          };
          var O = SEA.opt;
          SEA.opt.fall_verify = async function(data, pair, cb, opt, f) {
            if (f === SEA.opt.fallback) {
              throw "Signature did not match";
            }
            f = f || 1;
            var tmp = data || "";
            data = SEA.opt.unpack(data) || data;
            var json = await S.parse(data), pub = pair.pub || pair, key = await SEA.opt.slow_leak(pub);
            var hash = f <= SEA.opt.fallback ? shim.Buffer.from(await shim.subtle.digest({ name: "SHA-256" }, new shim.TextEncoder().encode(await S.parse(json.m)))) : await sha(json.m);
            var buf;
            var sig;
            var check;
            try {
              buf = shim.Buffer.from(json.s, opt.encode || "base64");
              sig = new Uint8Array(buf);
              check = await (shim.ossl || shim.subtle).verify({ name: "ECDSA", hash: { name: "SHA-256" } }, key, sig, new Uint8Array(hash));
              if (!check) {
                throw "Signature did not match.";
              }
            } catch (e) {
              try {
                buf = shim.Buffer.from(json.s, "utf8");
                sig = new Uint8Array(buf);
                check = await (shim.ossl || shim.subtle).verify({ name: "ECDSA", hash: { name: "SHA-256" } }, key, sig, new Uint8Array(hash));
              } catch (e2) {
                if (!check) {
                  throw "Signature did not match.";
                }
              }
            }
            var r = check ? await S.parse(json.m) : u;
            O.fall_soul = tmp["#"];
            O.fall_key = tmp["."];
            O.fall_val = data;
            O.fall_state = tmp[">"];
            if (cb) {
              try {
                cb(r);
              } catch (e) {
                console.log(e);
              }
            }
            return r;
          };
          SEA.opt.fallback = 2;
        })(USE, "./verify");
        ;
        USE(function(module2) {
          var shim = USE("./shim");
          var S = USE("./settings");
          var sha256hash = USE("./sha256");
          const importGen = async (key, salt, opt) => {
            opt = opt || {};
            const combo = key + (salt || shim.random(8)).toString("utf8");
            const hash = shim.Buffer.from(await sha256hash(combo), "binary");
            const jwkKey = S.keyToJwk(hash);
            return await shim.subtle.importKey("jwk", jwkKey, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
          };
          module2.exports = importGen;
        })(USE, "./aeskey");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S = USE("./settings");
          var aeskey = USE("./aeskey");
          var u;
          SEA.encrypt = SEA.encrypt || (async (data, pair, cb, opt) => {
            try {
              opt = opt || {};
              var key = (pair || opt).epriv || pair;
              if (u === data) {
                throw "`undefined` not allowed.";
              }
              if (!key) {
                if (!SEA.I) {
                  throw "No encryption key.";
                }
                pair = await SEA.I(null, { what: data, how: "encrypt", why: opt.why });
                key = pair.epriv || pair;
              }
              var msg = typeof data == "string" ? data : await shim.stringify(data);
              var rand = { s: shim.random(9), iv: shim.random(15) };
              var ct = await aeskey(key, rand.s, opt).then((aes) => (
                /*shim.ossl ||*/
                shim.subtle.encrypt({
                  // Keeping the AES key scope as private as possible...
                  name: opt.name || "AES-GCM",
                  iv: new Uint8Array(rand.iv)
                }, aes, new shim.TextEncoder().encode(msg))
              ));
              var r = {
                ct: shim.Buffer.from(ct, "binary").toString(opt.encode || "base64"),
                iv: rand.iv.toString(opt.encode || "base64"),
                s: rand.s.toString(opt.encode || "base64")
              };
              if (!opt.raw) {
                r = "SEA" + await shim.stringify(r);
              }
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.encrypt;
        })(USE, "./encrypt");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S = USE("./settings");
          var aeskey = USE("./aeskey");
          SEA.decrypt = SEA.decrypt || (async (data, pair, cb, opt) => {
            try {
              opt = opt || {};
              var key = (pair || opt).epriv || pair;
              if (!key) {
                if (!SEA.I) {
                  throw "No decryption key.";
                }
                pair = await SEA.I(null, { what: data, how: "decrypt", why: opt.why });
                key = pair.epriv || pair;
              }
              var json = await S.parse(data);
              var buf, bufiv, bufct;
              try {
                buf = shim.Buffer.from(json.s, opt.encode || "base64");
                bufiv = shim.Buffer.from(json.iv, opt.encode || "base64");
                bufct = shim.Buffer.from(json.ct, opt.encode || "base64");
                var ct = await aeskey(key, buf, opt).then((aes) => (
                  /*shim.ossl ||*/
                  shim.subtle.decrypt({
                    // Keeping aesKey scope as private as possible...
                    name: opt.name || "AES-GCM",
                    iv: new Uint8Array(bufiv),
                    tagLength: 128
                  }, aes, new Uint8Array(bufct))
                ));
              } catch (e) {
                if ("utf8" === opt.encode) {
                  throw "Could not decrypt";
                }
                if (SEA.opt.fallback) {
                  opt.encode = "utf8";
                  return await SEA.decrypt(data, pair, cb, opt);
                }
              }
              var r = await S.parse(new shim.TextDecoder("utf8").decode(ct));
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.decrypt;
        })(USE, "./decrypt");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S = USE("./settings");
          SEA.secret = SEA.secret || (async (key, pair, cb, opt) => {
            try {
              opt = opt || {};
              if (!pair || !pair.epriv || !pair.epub) {
                if (!SEA.I) {
                  throw "No secret mix.";
                }
                pair = await SEA.I(null, { what: key, how: "secret", why: opt.why });
              }
              var pub = key.epub || key;
              var epub = pair.epub;
              var epriv = pair.epriv;
              var ecdhSubtle = shim.ossl || shim.subtle;
              var pubKeyData = keysToEcdhJwk(pub);
              var props = Object.assign({ public: await ecdhSubtle.importKey(...pubKeyData, true, []) }, { name: "ECDH", namedCurve: "P-256" });
              var privKeyData = keysToEcdhJwk(epub, epriv);
              var derived = await ecdhSubtle.importKey(...privKeyData, false, ["deriveBits"]).then(async (privKey) => {
                var derivedBits = await ecdhSubtle.deriveBits(props, privKey, 256);
                var rawBits = new Uint8Array(derivedBits);
                var derivedKey = await ecdhSubtle.importKey("raw", rawBits, { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
                return ecdhSubtle.exportKey("jwk", derivedKey).then(({ k }) => k);
              });
              var r = derived;
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          var keysToEcdhJwk = (pub, d) => {
            var [x, y] = pub.split(".");
            var jwk = d ? { d } : {};
            return [
              // Use with spread returned value...
              "jwk",
              Object.assign(
                jwk,
                { x, y, kty: "EC", crv: "P-256", ext: true }
              ),
              // ??? refactor
              { name: "ECDH", namedCurve: "P-256" }
            ];
          };
          module2.exports = SEA.secret;
        })(USE, "./secret");
        ;
        USE(function(module2) {
          var SEA = USE("./root");
          SEA.certify = SEA.certify || (async (certificants, policy = {}, authority, cb, opt = {}) => {
            try {
              console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version.");
              certificants = (() => {
                var data2 = [];
                if (certificants) {
                  if ((typeof certificants === "string" || Array.isArray(certificants)) && certificants.indexOf("*") > -1)
                    return "*";
                  if (typeof certificants === "string")
                    return certificants;
                  if (Array.isArray(certificants)) {
                    if (certificants.length === 1 && certificants[0])
                      return typeof certificants[0] === "object" && certificants[0].pub ? certificants[0].pub : typeof certificants[0] === "string" ? certificants[0] : null;
                    certificants.map((certificant) => {
                      if (typeof certificant === "string")
                        data2.push(certificant);
                      else if (typeof certificant === "object" && certificant.pub)
                        data2.push(certificant.pub);
                    });
                  }
                  if (typeof certificants === "object" && certificants.pub)
                    return certificants.pub;
                  return data2.length > 0 ? data2 : null;
                }
                return;
              })();
              if (!certificants)
                return console.log("No certificant found.");
              const expiry = opt.expiry && (typeof opt.expiry === "number" || typeof opt.expiry === "string") ? parseFloat(opt.expiry) : null;
              const readPolicy = (policy || {}).read ? policy.read : null;
              const writePolicy = (policy || {}).write ? policy.write : typeof policy === "string" || Array.isArray(policy) || policy["+"] || policy["#"] || policy["."] || policy["="] || policy["*"] || policy[">"] || policy["<"] ? policy : null;
              const block = (opt || {}).block || (opt || {}).blacklist || (opt || {}).ban || {};
              const readBlock = block.read && (typeof block.read === "string" || (block.read || {})["#"]) ? block.read : null;
              const writeBlock = typeof block === "string" ? block : block.write && (typeof block.write === "string" || block.write["#"]) ? block.write : null;
              if (!readPolicy && !writePolicy)
                return console.log("No policy found.");
              const data = JSON.stringify({
                c: certificants,
                ...expiry ? { e: expiry } : {},
                // inject expiry if possible
                ...readPolicy ? { r: readPolicy } : {},
                // "r" stands for read, which means read permission.
                ...writePolicy ? { w: writePolicy } : {},
                // "w" stands for write, which means write permission.
                ...readBlock ? { rb: readBlock } : {},
                // inject READ block if possible
                ...writeBlock ? { wb: writeBlock } : {}
                // inject WRITE block if possible
              });
              const certificate = await SEA.sign(data, authority, null, { raw: 1 });
              var r = certificate;
              if (!opt.raw) {
                r = "SEA" + JSON.stringify(r);
              }
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.certify;
        })(USE, "./certify");
        ;
        USE(function(module2) {
          var shim = USE("./shim");
          var SEA = USE("./root");
          SEA.work = USE("./work");
          SEA.sign = USE("./sign");
          SEA.verify = USE("./verify");
          SEA.encrypt = USE("./encrypt");
          SEA.decrypt = USE("./decrypt");
          SEA.certify = USE("./certify");
          SEA.random = SEA.random || shim.random;
          SEA.Buffer = SEA.Buffer || USE("./buffer");
          SEA.keyid = SEA.keyid || (async (pub) => {
            try {
              const pb = shim.Buffer.concat(
                pub.replace(/-/g, "+").replace(/_/g, "/").split(".").map((t) => shim.Buffer.from(t, "base64"))
              );
              const id = shim.Buffer.concat([
                shim.Buffer.from([153, pb.length / 256, pb.length % 256]),
                pb
              ]);
              const sha1 = await sha1hash(id);
              const hash = shim.Buffer.from(sha1, "binary");
              return hash.toString("hex", hash.length - 8);
            } catch (e) {
              console.log(e);
              throw e;
            }
          });
          ((SEA.window || {}).GUN || {}).SEA = SEA;
          module2.exports = SEA;
        })(USE, "./sea");
        ;
        USE(function(module2) {
          var SEA = USE("./sea"), Gun2, u;
          if (SEA.window) {
            Gun2 = SEA.window.GUN || { chain: {} };
          } else {
            Gun2 = USE((u + "" == typeof MODULE ? "." : "") + "./gun", 1);
          }
          SEA.GUN = Gun2;
          function User(root) {
            this._ = { $: this };
          }
          User.prototype = function() {
            function F() {
            }
            ;
            F.prototype = Gun2.chain;
            return new F();
          }();
          User.prototype.constructor = User;
          Gun2.chain.user = function(pub) {
            var gun = this, root = gun.back(-1), user;
            if (pub) {
              pub = SEA.opt.pub((pub._ || "")["#"]) || pub;
              return root.get("~" + pub);
            }
            if (user = root.back("user")) {
              return user;
            }
            var root = root._, at = root, uuid = at.opt.uuid || lex;
            (at = (user = at.user = gun.chain(new User()))._).opt = {};
            at.opt.uuid = function(cb) {
              var id = uuid(), pub2 = root.user;
              if (!pub2 || !(pub2 = pub2.is) || !(pub2 = pub2.pub)) {
                return id;
              }
              id = "~" + pub2 + "/" + id;
              if (cb && cb.call) {
                cb(null, id);
              }
              return id;
            };
            return user;
          };
          function lex() {
            return Gun2.state().toString(36).replace(".", "");
          }
          Gun2.User = User;
          User.GUN = Gun2;
          User.SEA = Gun2.SEA = SEA;
          module2.exports = User;
        })(USE, "./user");
        ;
        USE(function(module2) {
          var u, Gun2 = "" + u != typeof GUN ? GUN || { chain: {} } : USE(("" + u === typeof MODULE ? "." : "") + "./gun", 1);
          Gun2.chain.then = function(cb, opt) {
            var gun = this, p = new Promise(function(res, rej) {
              gun.once(res, opt);
            });
            return cb ? p.then(cb) : p;
          };
        })(USE, "./then");
        ;
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA, Gun2 = User.GUN, noop = function() {
          };
          User.prototype.create = function(...args) {
            var pair = typeof args[0] === "object" && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === "object" && (args[1].pub || args[1].epub) ? args[1] : null;
            var alias = pair && (pair.pub || pair.epub) ? pair.pub : typeof args[0] === "string" ? args[0] : null;
            var pass = pair && (pair.pub || pair.epub) ? pair : alias && typeof args[1] === "string" ? args[1] : null;
            var cb = args.filter((arg) => typeof arg === "function")[0] || null;
            var opt = args && args.length > 1 && typeof args[args.length - 1] === "object" ? args[args.length - 1] : {};
            var gun = this, cat = gun._, root = gun.back(-1);
            cb = cb || noop;
            opt = opt || {};
            if (false !== opt.check) {
              var err;
              if (!alias) {
                err = "No user.";
              }
              if ((pass || "").length < 8) {
                err = "Password too short!";
              }
              if (err) {
                cb({ err: Gun2.log(err) });
                return gun;
              }
            }
            if (cat.ing) {
              (cb || noop)({ err: Gun2.log("User is already being created or authenticated!"), wait: true });
              return gun;
            }
            cat.ing = true;
            var act = {}, u;
            act.a = function(pubs) {
              act.pubs = pubs;
              if (pubs && !opt.already) {
                var ack = { err: Gun2.log("User already created!") };
                cat.ing = false;
                (cb || noop)(ack);
                gun.leave();
                return;
              }
              act.salt = String.random(64);
              SEA.work(pass, act.salt, act.b);
            };
            act.b = function(proof) {
              act.proof = proof;
              pair ? act.c(pair) : SEA.pair(act.c);
            };
            act.c = function(pair2) {
              var tmp;
              act.pair = pair2 || {};
              if (tmp = cat.root.user) {
                tmp._.sea = pair2;
                tmp.is = { pub: pair2.pub, epub: pair2.epub, alias };
              }
              act.data = { pub: pair2.pub };
              act.d();
            };
            act.d = function() {
              act.data.alias = alias;
              act.e();
            };
            act.e = function() {
              act.data.epub = act.pair.epub;
              SEA.encrypt({ priv: act.pair.priv, epriv: act.pair.epriv }, act.proof, act.f, { raw: 1 });
            };
            act.f = function(auth) {
              act.data.auth = JSON.stringify({ ek: auth, s: act.salt });
              act.g(act.data.auth);
            };
            act.g = function(auth) {
              var tmp;
              act.data.auth = act.data.auth || auth;
              root.get(tmp = "~" + act.pair.pub).put(act.data).on(act.h);
              var link = {};
              link[tmp] = { "#": tmp };
              root.get("~@" + alias).put(link).get(tmp).on(act.i);
            };
            act.h = function(data, key, msg, eve) {
              eve.off();
              act.h.ok = 1;
              act.i();
            };
            act.i = function(data, key, msg, eve) {
              if (eve) {
                act.i.ok = 1;
                eve.off();
              }
              if (!act.h.ok || !act.i.ok) {
                return;
              }
              cat.ing = false;
              cb({ ok: 0, pub: act.pair.pub });
              if (noop === cb) {
                pair ? gun.auth(pair) : gun.auth(alias, pass);
              }
            };
            root.get("~@" + alias).once(act.a);
            return gun;
          };
          User.prototype.leave = function(opt, cb) {
            var gun = this, user = gun.back(-1)._.user;
            if (user) {
              delete user.is;
              delete user._.is;
              delete user._.sea;
            }
            if (SEA.window) {
              try {
                var sS = {};
                sS = SEA.window.sessionStorage;
                delete sS.recall;
                delete sS.pair;
              } catch (e) {
              }
              ;
            }
            return gun;
          };
        })(USE, "./create");
        ;
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA, Gun2 = User.GUN, noop = function() {
          };
          User.prototype.auth = function(...args) {
            var pair = typeof args[0] === "object" && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === "object" && (args[1].pub || args[1].epub) ? args[1] : null;
            var alias = !pair && typeof args[0] === "string" ? args[0] : null;
            var pass = (alias || pair && !(pair.priv && pair.epriv)) && typeof args[1] === "string" ? args[1] : null;
            var cb = args.filter((arg) => typeof arg === "function")[0] || null;
            var opt = args && args.length > 1 && typeof args[args.length - 1] === "object" ? args[args.length - 1] : {};
            var retries = typeof opt.retries === "number" ? opt.retries : 9;
            var gun = this, cat = gun._, root = gun.back(-1);
            if (cat.ing) {
              (cb || noop)({ err: Gun2.log("User is already being created or authenticated!"), wait: true });
              return gun;
            }
            cat.ing = true;
            var act = {}, u;
            act.a = function(data) {
              if (!data) {
                return act.b();
              }
              if (!data.pub) {
                var tmp = [];
                Object.keys(data).forEach(function(k) {
                  if ("_" == k) {
                    return;
                  }
                  tmp.push(data[k]);
                });
                return act.b(tmp);
              }
              if (act.name) {
                return act.f(data);
              }
              act.c((act.data = data).auth);
            };
            act.b = function(list) {
              var get = (act.list = (act.list || []).concat(list || [])).shift();
              if (u === get) {
                if (act.name) {
                  return act.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");
                }
                if (alias && retries--) {
                  root.get("~@" + alias).once(act.a);
                  return;
                }
                return act.err("Wrong user or password.");
              }
              root.get(get).once(act.a);
            };
            act.c = function(auth) {
              if (u === auth) {
                return act.b();
              }
              if ("string" == typeof auth) {
                return act.c(obj_ify(auth));
              }
              SEA.work(pass, (act.auth = auth).s, act.d, act.enc);
            };
            act.d = function(proof) {
              SEA.decrypt(act.auth.ek, proof, act.e, act.enc);
            };
            act.e = function(half) {
              if (u === half) {
                if (!act.enc) {
                  act.enc = { encode: "utf8" };
                  return act.c(act.auth);
                }
                act.enc = null;
                return act.b();
              }
              act.half = half;
              act.f(act.data);
            };
            act.f = function(pair2) {
              var half = act.half || {}, data = act.data || {};
              act.g(act.lol = { pub: pair2.pub || data.pub, epub: pair2.epub || data.epub, priv: pair2.priv || half.priv, epriv: pair2.epriv || half.epriv });
            };
            act.g = function(pair2) {
              if (!pair2 || !pair2.pub || !pair2.epub) {
                return act.b();
              }
              act.pair = pair2;
              var user = root._.user, at = user._;
              var tmp = at.tag;
              var upt = at.opt;
              at = user._ = root.get("~" + pair2.pub)._;
              at.opt = upt;
              user.is = { pub: pair2.pub, epub: pair2.epub, alias: alias || pair2.pub };
              at.sea = act.pair;
              cat.ing = false;
              try {
                if (pass && u == (obj_ify(cat.root.graph["~" + pair2.pub].auth) || "")[":"]) {
                  opt.shuffle = opt.change = pass;
                }
              } catch (e) {
              }
              opt.change ? act.z() : (cb || noop)(at);
              if (SEA.window && (gun.back("user")._.opt || opt).remember) {
                try {
                  var sS = {};
                  sS = SEA.window.sessionStorage;
                  sS.recall = true;
                  sS.pair = JSON.stringify(pair2);
                } catch (e) {
                }
              }
              try {
                if (root._.tag.auth) {
                  root._.on("auth", at);
                } else {
                  setTimeout(function() {
                    root._.on("auth", at);
                  }, 1);
                }
              } catch (e) {
                Gun2.log("Your 'auth' callback crashed with:", e);
              }
            };
            act.h = function(data) {
              if (!data) {
                return act.b();
              }
              alias = data.alias;
              if (!alias)
                alias = data.alias = "~" + pair.pub;
              if (!data.auth) {
                return act.g(pair);
              }
              pair = null;
              act.c((act.data = data).auth);
            };
            act.z = function() {
              act.salt = String.random(64);
              SEA.work(opt.change, act.salt, act.y);
            };
            act.y = function(proof) {
              SEA.encrypt({ priv: act.pair.priv, epriv: act.pair.epriv }, proof, act.x, { raw: 1 });
            };
            act.x = function(auth) {
              act.w(JSON.stringify({ ek: auth, s: act.salt }));
            };
            act.w = function(auth) {
              if (opt.shuffle) {
                console.log("migrate core account from UTF8 & shuffle");
                var tmp = {};
                Object.keys(act.data).forEach(function(k) {
                  tmp[k] = act.data[k];
                });
                delete tmp._;
                tmp.auth = auth;
                root.get("~" + act.pair.pub).put(tmp);
              }
              root.get("~" + act.pair.pub).get("auth").put(auth, cb || noop);
            };
            act.err = function(e) {
              var ack = { err: Gun2.log(e || "User cannot be found!") };
              cat.ing = false;
              (cb || noop)(ack);
            };
            act.plugin = function(name) {
              if (!(act.name = name)) {
                return act.err();
              }
              var tmp = [name];
              if ("~" !== name[0]) {
                tmp[1] = "~" + name;
                tmp[2] = "~@" + name;
              }
              act.b(tmp);
            };
            if (pair) {
              if (pair.priv && pair.epriv)
                act.g(pair);
              else
                root.get("~" + pair.pub).once(act.h);
            } else if (alias) {
              root.get("~@" + alias).once(act.a);
            } else if (!alias && !pass) {
              SEA.name(act.plugin);
            }
            return gun;
          };
          function obj_ify(o) {
            if ("string" != typeof o) {
              return o;
            }
            try {
              o = JSON.parse(o);
            } catch (e) {
              o = {};
            }
            ;
            return o;
          }
        })(USE, "./auth");
        ;
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA, Gun2 = User.GUN;
          User.prototype.recall = function(opt, cb) {
            var gun = this, root = gun.back(-1), tmp;
            opt = opt || {};
            if (opt && opt.sessionStorage) {
              if (SEA.window) {
                try {
                  var sS = {};
                  sS = SEA.window.sessionStorage;
                  if (sS) {
                    root._.opt.remember = true;
                    (gun.back("user")._.opt || opt).remember = true;
                    if (sS.recall || sS.pair)
                      root.user().auth(JSON.parse(sS.pair), cb);
                  }
                } catch (e) {
                }
              }
              return gun;
            }
            return gun;
          };
        })(USE, "./recall");
        ;
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA, Gun2 = User.GUN, noop = function() {
          };
          User.prototype.pair = function() {
            var user = this, proxy;
            try {
              proxy = new Proxy({ DANGER: "\u2620" }, { get: function(t, p, r) {
                if (!user.is || !(user._ || "").sea) {
                  return;
                }
                return user._.sea[p];
              } });
            } catch (e) {
            }
            return proxy;
          };
          User.prototype.delete = async function(alias, pass, cb) {
            console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
            var gun = this, root = gun.back(-1), user = gun.back("user");
            try {
              user.auth(alias, pass, function(ack) {
                var pub = (user.is || {}).pub;
                user.map().once(function() {
                  this.put(null);
                });
                user.leave();
                (cb || noop)({ ok: 0 });
              });
            } catch (e) {
              Gun2.log("User.delete failed! Error:", e);
            }
            return gun;
          };
          User.prototype.alive = async function() {
            console.log("user.alive() IS DEPRECATED!!!");
            const gunRoot = this.back(-1);
            try {
              await authRecall(gunRoot);
              return gunRoot._.user._;
            } catch (e) {
              const err = "No session!";
              Gun2.log(err);
              throw { err };
            }
          };
          User.prototype.trust = async function(user) {
            console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            if (Gun2.is(user)) {
              user.get("pub").get((ctx, ev) => {
                console.log(ctx, ev);
              });
            }
            user.get("trust").get(path).put(theirPubkey);
          };
          User.prototype.grant = function(to, cb) {
            console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            var gun = this, user = gun.back(-1).user(), pair = user._.sea, path2 = "";
            gun.back(function(at) {
              if (at.is) {
                return;
              }
              path2 += at.get || "";
            });
            (async function() {
              var enc, sec = await user.get("grant").get(pair.pub).get(path2).then();
              sec = await SEA.decrypt(sec, pair);
              if (!sec) {
                sec = SEA.random(16).toString();
                enc = await SEA.encrypt(sec, pair);
                user.get("grant").get(pair.pub).get(path2).put(enc);
              }
              var pub = to.get("pub").then();
              var epub = to.get("epub").then();
              pub = await pub;
              epub = await epub;
              var dh = await SEA.secret(epub, pair);
              enc = await SEA.encrypt(sec, dh);
              user.get("grant").get(pub).get(path2).put(enc, cb);
            })();
            return gun;
          };
          User.prototype.secret = function(data, cb) {
            console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            var gun = this, user = gun.back(-1).user(), pair = user.pair(), path2 = "";
            gun.back(function(at) {
              if (at.is) {
                return;
              }
              path2 += at.get || "";
            });
            (async function() {
              var enc, sec = await user.get("trust").get(pair.pub).get(path2).then();
              sec = await SEA.decrypt(sec, pair);
              if (!sec) {
                sec = SEA.random(16).toString();
                enc = await SEA.encrypt(sec, pair);
                user.get("trust").get(pair.pub).get(path2).put(enc);
              }
              enc = await SEA.encrypt(data, sec);
              gun.put(enc, cb);
            })();
            return gun;
          };
          module2.exports = User;
        })(USE, "./share");
        ;
        USE(function(module2) {
          var SEA = USE("./sea"), S = USE("./settings"), noop = function() {
          }, u;
          var Gun2 = (SEA.window || "").GUN || USE(("" + u === typeof MODULE ? "." : "") + "./gun", 1);
          Gun2.on("opt", function(at) {
            if (!at.sea) {
              at.sea = { own: {} };
              at.on("put", check, at);
            }
            this.to.next(at);
          });
          function check(msg) {
            var eve = this, at = eve.as, put = msg.put, soul = put["#"], key = put["."], val = put[":"], state = put[">"], id = msg["#"], tmp;
            if (!soul || !key) {
              return;
            }
            if ((msg._ || "").faith && (at.opt || "").faith && "function" == typeof msg._) {
              SEA.opt.pack(put, function(raw) {
                SEA.verify(raw, false, function(data) {
                  put["="] = SEA.opt.unpack(data);
                  eve.to.next(msg);
                });
              });
              return;
            }
            var no = function(why) {
              at.on("in", { "@": id, err: msg.err = why });
            };
            (msg._ || "").DBG && ((msg._ || "").DBG.c = +/* @__PURE__ */ new Date());
            if (0 <= soul.indexOf("<?")) {
              tmp = parseFloat(soul.split("<?")[1] || "");
              if (tmp && state < Gun2.state() - tmp * 1e3) {
                (tmp = msg._) && tmp.stun && tmp.stun--;
                return;
              }
            }
            if ("~@" === soul) {
              check.alias(eve, msg, val, key, soul, at, no);
              return;
            }
            if ("~@" === soul.slice(0, 2)) {
              check.pubs(eve, msg, val, key, soul, at, no);
              return;
            }
            if (tmp = SEA.opt.pub(soul)) {
              check.pub(eve, msg, val, key, soul, at, no, at.user || "", tmp);
              return;
            }
            if (0 <= soul.indexOf("#")) {
              check.hash(eve, msg, val, key, soul, at, no);
              return;
            }
            check.any(eve, msg, val, key, soul, at, no, at.user || "");
            return;
            eve.to.next(msg);
          }
          check.hash = function(eve, msg, val, key, soul, at, no) {
            SEA.work(val, null, function(data) {
              function hexToBase64(hexStr) {
                let base64 = "";
                for (let i = 0; i < hexStr.length; i++) {
                  base64 += !(i - 1 & 1) ? String.fromCharCode(parseInt(hexStr.substring(i - 1, i + 1), 16)) : "";
                }
                return btoa(base64);
              }
              if (data && data === key.split("#").slice(-1)[0]) {
                return eve.to.next(msg);
              } else if (data && data === hexToBase64(key.split("#").slice(-1)[0])) {
                return eve.to.next(msg);
              }
              no("Data hash not same as hash!");
            }, { name: "SHA-256" });
          };
          check.alias = function(eve, msg, val, key, soul, at, no) {
            if (!val) {
              return no("Data must exist!");
            }
            if ("~@" + key === link_is(val)) {
              return eve.to.next(msg);
            }
            no("Alias not same!");
          };
          check.pubs = function(eve, msg, val, key, soul, at, no) {
            if (!val) {
              return no("Alias must exist!");
            }
            if (key === link_is(val)) {
              return eve.to.next(msg);
            }
            no("Alias not same!");
          };
          check.pub = async function(eve, msg, val, key, soul, at, no, user, pub) {
            var tmp;
            const raw = await S.parse(val) || {};
            const verify = (certificate, certificant, cb) => {
              if (certificate.m && certificate.s && certificant && pub)
                return SEA.verify(certificate, pub, (data) => {
                  if (u !== data && u !== data.e && msg.put[">"] && msg.put[">"] > parseFloat(data.e))
                    return no("Certificate expired.");
                  if (u !== data && data.c && data.w && (data.c === certificant || data.c.indexOf("*") > -1)) {
                    let path2 = soul.indexOf("/") > -1 ? soul.replace(soul.substring(0, soul.indexOf("/") + 1), "") : "";
                    String.match = String.match || Gun2.text.match;
                    const w = Array.isArray(data.w) ? data.w : typeof data.w === "object" || typeof data.w === "string" ? [data.w] : [];
                    for (const lex of w) {
                      if (String.match(path2, lex["#"]) && String.match(key, lex["."]) || !lex["."] && String.match(path2, lex["#"]) || !lex["#"] && String.match(key, lex["."]) || String.match(path2 ? path2 + "/" + key : key, lex["#"] || lex)) {
                        if (lex["+"] && lex["+"].indexOf("*") > -1 && path2 && path2.indexOf(certificant) == -1 && key.indexOf(certificant) == -1)
                          return no(`Path "${path2}" or key "${key}" must contain string "${certificant}".`);
                        if (data.wb && (typeof data.wb === "string" || (data.wb || {})["#"])) {
                          var root = eve.as.root.$.back(-1);
                          if (typeof data.wb === "string" && "~" !== data.wb.slice(0, 1))
                            root = root.get("~" + pub);
                          return root.get(data.wb).get(certificant).once((value) => {
                            if (value && (value === 1 || value === true))
                              return no(`Certificant ${certificant} blocked.`);
                            return cb(data);
                          });
                        }
                        return cb(data);
                      }
                    }
                    return no("Certificate verification fail.");
                  }
                });
              return;
            };
            if ("pub" === key && "~" + pub === soul) {
              if (val === pub)
                return eve.to.next(msg);
              return no("Account not same!");
            }
            if ((tmp = user.is) && tmp.pub && !raw["*"] && !raw["+"] && (pub === tmp.pub || pub !== tmp.pub && ((msg._.msg || {}).opt || {}).cert)) {
              SEA.opt.pack(msg.put, (packed) => {
                SEA.sign(packed, user._.sea, async function(data) {
                  if (u === data)
                    return no(SEA.err || "Signature fail.");
                  msg.put[":"] = { ":": tmp = SEA.opt.unpack(data.m), "~": data.s };
                  msg.put["="] = tmp;
                  if (pub === user.is.pub) {
                    if (tmp = link_is(val))
                      (at.sea.own[tmp] = at.sea.own[tmp] || {})[pub] = 1;
                    JSON.stringifyAsync(msg.put[":"], function(err, s) {
                      if (err) {
                        return no(err || "Stringify error.");
                      }
                      msg.put[":"] = s;
                      return eve.to.next(msg);
                    });
                    return;
                  }
                  if (pub !== user.is.pub && ((msg._.msg || {}).opt || {}).cert) {
                    const cert = await S.parse(msg._.msg.opt.cert);
                    if (cert && cert.m && cert.s)
                      verify(cert, user.is.pub, (_) => {
                        msg.put[":"]["+"] = cert;
                        msg.put[":"]["*"] = user.is.pub;
                        JSON.stringifyAsync(msg.put[":"], function(err, s) {
                          if (err) {
                            return no(err || "Stringify error.");
                          }
                          msg.put[":"] = s;
                          return eve.to.next(msg);
                        });
                        return;
                      });
                  }
                }, { raw: 1 });
              });
              return;
            }
            SEA.opt.pack(msg.put, (packed) => {
              SEA.verify(packed, raw["*"] || pub, function(data) {
                var tmp2;
                data = SEA.opt.unpack(data);
                if (u === data)
                  return no("Unverified data.");
                if ((tmp2 = link_is(data)) && pub === SEA.opt.pub(tmp2))
                  (at.sea.own[tmp2] = at.sea.own[tmp2] || {})[pub] = 1;
                if (raw["+"] && raw["+"]["m"] && raw["+"]["s"] && raw["*"])
                  verify(raw["+"], raw["*"], (_) => {
                    msg.put["="] = data;
                    return eve.to.next(msg);
                  });
                else {
                  msg.put["="] = data;
                  return eve.to.next(msg);
                }
              });
            });
            return;
          };
          check.any = function(eve, msg, val, key, soul, at, no, user) {
            var tmp, pub;
            if (at.opt.secure) {
              return no("Soul missing public key at '" + key + "'.");
            }
            at.on("secure", function(msg2) {
              this.off();
              if (!at.opt.secure) {
                return eve.to.next(msg2);
              }
              no("Data cannot be changed.");
            }).on.on("secure", msg);
            return;
          };
          var valid = Gun2.valid, link_is = function(d, l) {
            return "string" == typeof (l = valid(d)) && l;
          }, state_ify = (Gun2.state || "").ify;
          var pubcut = /[^\w_-]/;
          SEA.opt.pub = function(s) {
            if (!s) {
              return;
            }
            s = s.split("~");
            if (!s || !(s = s[1])) {
              return;
            }
            s = s.split(pubcut).slice(0, 2);
            if (!s || 2 != s.length) {
              return;
            }
            if ("@" === (s[0] || "")[0]) {
              return;
            }
            s = s.slice(0, 2).join(".");
            return s;
          };
          SEA.opt.stringy = function(t) {
          };
          SEA.opt.pack = function(d, cb, k, n, s) {
            var tmp, f;
            if (SEA.opt.check(d)) {
              return cb(d);
            }
            if (d && d["#"] && d["."] && d[">"]) {
              tmp = d[":"];
              f = 1;
            }
            JSON.parseAsync(f ? tmp : d, function(err, meta) {
              var sig = u !== (meta || "")[":"] && (meta || "")["~"];
              if (!sig) {
                cb(d);
                return;
              }
              cb({ m: { "#": s || d["#"], ".": k || d["."], ":": (meta || "")[":"], ">": d[">"] || Gun2.state.is(n, k) }, s: sig });
            });
          };
          var O = SEA.opt;
          SEA.opt.unpack = function(d, k, n) {
            var tmp;
            if (u === d) {
              return;
            }
            if (d && u !== (tmp = d[":"])) {
              return tmp;
            }
            k = k || O.fall_key;
            if (!n && O.fall_val) {
              n = {};
              n[k] = O.fall_val;
            }
            if (!k || !n) {
              return;
            }
            if (d === n[k]) {
              return d;
            }
            if (!SEA.opt.check(n[k])) {
              return d;
            }
            var soul = n && n._ && n._["#"] || O.fall_soul, s = Gun2.state.is(n, k) || O.fall_state;
            if (d && 4 === d.length && soul === d[0] && k === d[1] && fl(s) === fl(d[3])) {
              return d[2];
            }
            if (s < SEA.opt.shuffle_attack) {
              return d;
            }
          };
          SEA.opt.shuffle_attack = 15463296e5;
          var fl = Math.floor;
        })(USE, "./index");
      })();
    }
  });

  // node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/events/events.js"(exports, module) {
      "use strict";
      var R = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      var ReflectOwnKeys;
      if (R && typeof R.ownKeys === "function") {
        ReflectOwnKeys = R.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        };
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn)
          console.warn(warning);
      }
      var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
        return value !== value;
      };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: function() {
          return defaultMaxListeners;
        },
        set: function(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        }
        this._maxListeners = n;
        return this;
      };
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0)
          return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return _getMaxListeners(this);
      };
      EventEmitter.prototype.emit = function emit(type) {
        var args = [];
        for (var i = 1; i < arguments.length; i++)
          args.push(arguments[i]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0)
          doError = doError && events.error === void 0;
        else if (!doError)
          return false;
        if (doError) {
          var er;
          if (args.length > 0)
            er = args[0];
          if (er instanceof Error) {
            throw er;
          }
          var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
          err.context = er;
          throw err;
        }
        var handler = events[type];
        if (handler === void 0)
          return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);
          for (var i = 0; i < len; ++i)
            ReflectApply(listeners[i], this, args);
        }
        return true;
      };
      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = /* @__PURE__ */ Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit(
              "newListener",
              type,
              listener.listener ? listener.listener : listener
            );
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [listener, existing] : [existing, listener];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m = _getMaxListeners(target);
          if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
          }
        }
        return target;
      }
      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0)
            return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      function _onceWrap(target, type, listener) {
        var state = { fired: false, wrapFn: void 0, target, type, listener };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      EventEmitter.prototype.once = function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0)
          return this;
        list = events[type];
        if (list === void 0)
          return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }
          if (position < 0)
            return this;
          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1)
            events[type] = list[0];
          if (events.removeListener !== void 0)
            this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (events === void 0)
          return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0)
              this._events = /* @__PURE__ */ Object.create(null);
            else
              delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === "removeListener")
              continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }
        return this;
      };
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0)
          return [];
        var evlistener = events[type];
        if (evlistener === void 0)
          return [];
        if (typeof evlistener === "function")
          return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };
      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      };
      function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i)
          copy[i] = arr[i];
        return copy;
      }
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++)
          list[index] = list[index + 1];
        list.pop();
      }
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }
        return ret;
      }
      function once(emitter, name) {
        return new Promise(function(resolve, reject) {
          function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
          }
          function resolver() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          }
          ;
          eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
          if (name !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
          }
        });
      }
      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler, flags);
        }
      }
      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
        if (typeof emitter.on === "function") {
          if (flags.once) {
            emitter.once(name, listener);
          } else {
            emitter.on(name, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name, function wrapListener(arg) {
            if (flags.once) {
              emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
          });
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
      }
    }
  });

  // src/db/on.ts
  var require_on = __commonJS({
    "src/db/on.ts"(exports, module) {
      "use strict";
      var on = (instance, listener, cb) => {
        if (listener === "listen" || listener === "any" || !listener) {
          instance.subscribe((data) => {
            if (cb)
              cb(data);
          });
        }
        if (listener === "update") {
          var cache;
          instance.subscribe((data) => {
            var match = data;
            if (typeof match === "object")
              match = JSON.stringify(match);
            if (data !== cache) {
              cb(data);
              window.ddeep.events.emit("msg", data);
              cache = match;
            }
          });
        }
        if (listener === "delete") {
          instance.subscribe((data) => {
            if (data === null) {
              cb(null);
            }
            ;
          });
        }
      };
      module.exports = on;
    }
  });

  // src/db/chain.ts
  var require_chain = __commonJS({
    "src/db/chain.ts"(exports, module) {
      "use strict";
      var on = require_on();
      function build_chain(gun) {
        gun.chain.subscribe = gun.chain.on;
        gun.chain.on = function(listener, cb) {
          if (typeof listener === "function") {
            cb = listener;
            listener = "any";
          }
          on(this, listener, cb);
        };
        return gun;
      }
      module.exports = build_chain;
    }
  });

  // lib/gun/lib/radix.js
  var require_radix = __commonJS({
    "lib/gun/lib/radix.js"(exports, module) {
      (function() {
        function Radix() {
          var radix = function(key, val, t) {
            radix.unit = 0;
            if (!t && u !== val) {
              radix.last = "" + key < radix.last ? radix.last : "" + key;
              delete (radix.$ || {})[_];
            }
            t = t || radix.$ || (radix.$ = {});
            if (!key && Object.keys(t).length) {
              return t;
            }
            key = "" + key;
            var i = 0, l = key.length - 1, k = key[i], at, tmp;
            while (!(at = t[k]) && i < l) {
              k += key[++i];
            }
            if (!at) {
              if (!each(t, function(r, s) {
                var ii = 0, kk = "";
                if ((s || "").length) {
                  while (s[ii] == key[ii]) {
                    kk += s[ii++];
                  }
                }
                if (kk) {
                  if (u === val) {
                    if (ii <= l) {
                      return;
                    }
                    (tmp || (tmp = {}))[s.slice(ii)] = r;
                    return r;
                  }
                  var __ = {};
                  __[s.slice(ii)] = r;
                  ii = key.slice(ii);
                  "" === ii ? __[""] = val : (__[ii] = {})[""] = val;
                  t[kk] = __;
                  if (Radix.debug && "undefined" === "" + kk) {
                    console.log(0, kk);
                    debugger;
                  }
                  delete t[s];
                  return true;
                }
              })) {
                if (u === val) {
                  return;
                }
                (t[k] || (t[k] = {}))[""] = val;
                if (Radix.debug && "undefined" === "" + k) {
                  console.log(1, k);
                  debugger;
                }
              }
              if (u === val) {
                return tmp;
              }
            } else if (i == l) {
              if (u === val) {
                return u === (tmp = at[""]) ? at : (radix.unit = 1) && tmp;
              }
              at[""] = val;
            } else {
              if (u !== val) {
                delete at[_];
              }
              return radix(key.slice(++i), val, at || (at = {}));
            }
          };
          return radix;
        }
        ;
        Radix.map = function rap(radix, cb, opt, pre) {
          try {
            pre = pre || [];
            var t = "function" == typeof radix ? radix.$ || {} : radix;
            if (!t) {
              return;
            }
            if ("string" == typeof t) {
              if (Radix.debug) {
                throw ["BUG:", radix, cb, opt, pre];
              }
              return;
            }
            var keys = (t[_] || no).sort || (t[_] = function $() {
              $.sort = Object.keys(t).sort();
              return $;
            }()).sort, rev;
            opt = true === opt ? { branch: true } : opt || {};
            if (rev = opt.reverse) {
              keys = keys.slice(0).reverse();
            }
            var start = opt.start, end = opt.end, END = "\uFFFF";
            var i = 0, l = keys.length;
            for (; i < l; i++) {
              var key = keys[i], tree = t[key], tmp, p, pt;
              if (!tree || "" === key || _ === key || "undefined" === key) {
                continue;
              }
              p = pre.slice(0);
              p.push(key);
              pt = p.join("");
              if (u !== start && pt < (start || "").slice(0, pt.length)) {
                continue;
              }
              if (u !== end && (end || END) < pt) {
                continue;
              }
              if (rev) {
                tmp = rap(tree, cb, opt, p);
                if (u !== tmp) {
                  return tmp;
                }
              }
              if (u !== (tmp = tree[""])) {
                var yes = 1;
                if (u !== start && pt < (start || "")) {
                  yes = 0;
                }
                if (u !== end && pt > (end || END)) {
                  yes = 0;
                }
                if (yes) {
                  tmp = cb(tmp, pt, key, pre);
                  if (u !== tmp) {
                    return tmp;
                  }
                }
              } else if (opt.branch) {
                tmp = cb(u, pt, key, pre);
                if (u !== tmp) {
                  return tmp;
                }
              }
              pre = p;
              if (!rev) {
                tmp = rap(tree, cb, opt, pre);
                if (u !== tmp) {
                  return tmp;
                }
              }
              pre.pop();
            }
          } catch (e) {
            console.error(e);
          }
        };
        if (typeof window !== "undefined") {
          window.Radix = Radix;
        } else {
          try {
            module.exports = Radix;
          } catch (e) {
          }
        }
        var each = Radix.object = function(o, f, r) {
          for (var k in o) {
            if (!o.hasOwnProperty(k)) {
              continue;
            }
            if ((r = f(o[k], k)) !== u) {
              return r;
            }
          }
        }, no = {}, u;
        var _ = String.fromCharCode(24);
      })();
    }
  });

  // lib/gun/lib/yson.js
  var require_yson = __commonJS({
    "lib/gun/lib/yson.js"(exports, module) {
      (function() {
        var yson = {}, u, sI = setTimeout.turn || typeof setImmediate != "" + u && setImmediate || setTimeout;
        yson.parseAsync = function(text, done, revive, M) {
          if ("string" != typeof text) {
            try {
              done(u, JSON.parse(text));
            } catch (e) {
              done(e);
            }
            return;
          }
          var ctx = { i: 0, text, done, l: text.length, up: [] };
          M = M || 1024 * 32;
          parse();
          function parse() {
            var s = ctx.text;
            var i = ctx.i, l = ctx.l, j = 0;
            var w = ctx.w, b, tmp;
            while (j++ < M) {
              var c = s[i++];
              if (i > l) {
                ctx.end = true;
                break;
              }
              if (w) {
                i = s.indexOf('"', i - 1);
                c = s[i];
                tmp = 0;
                while ("\\" == s[i - ++tmp]) {
                }
                ;
                tmp = !(tmp % 2);
                b = b || tmp;
                if ('"' == c && !tmp) {
                  w = u;
                  tmp = ctx.s;
                  if (ctx.a) {
                    tmp = s.slice(ctx.sl, i);
                    if (b || 1 + tmp.indexOf("\\")) {
                      tmp = JSON.parse('"' + tmp + '"');
                    }
                    if (ctx.at instanceof Array) {
                      ctx.at.push(ctx.s = tmp);
                    } else {
                      if (!ctx.at) {
                        ctx.end = j = M;
                        tmp = u;
                      }
                      (ctx.at || {})[ctx.s] = ctx.s = tmp;
                    }
                    ctx.s = u;
                  } else {
                    ctx.s = s.slice(ctx.sl, i);
                    if (b || 1 + ctx.s.indexOf("\\")) {
                      ctx.s = JSON.parse('"' + ctx.s + '"');
                    }
                  }
                  ctx.a = b = u;
                }
                ++i;
              } else {
                switch (c) {
                  case '"':
                    ctx.sl = i;
                    w = true;
                    break;
                  case ":":
                    ctx.ai = i;
                    ctx.a = true;
                    break;
                  case ",":
                    if (ctx.a || ctx.at instanceof Array) {
                      if (tmp = s.slice(ctx.ai, i - 1)) {
                        if (u !== (tmp = value(tmp))) {
                          if (ctx.at instanceof Array) {
                            ctx.at.push(tmp);
                          } else {
                            ctx.at[ctx.s] = tmp;
                          }
                        }
                      }
                    }
                    ctx.a = u;
                    if (ctx.at instanceof Array) {
                      ctx.a = true;
                      ctx.ai = i;
                    }
                    break;
                  case "{":
                    ctx.up.push(ctx.at || (ctx.at = {}));
                    if (ctx.at instanceof Array) {
                      ctx.at.push(ctx.at = {});
                    } else if (u !== (tmp = ctx.s)) {
                      ctx.at[tmp] = ctx.at = {};
                    }
                    ctx.a = u;
                    break;
                  case "}":
                    if (ctx.a) {
                      if (tmp = s.slice(ctx.ai, i - 1)) {
                        if (u !== (tmp = value(tmp))) {
                          if (ctx.at instanceof Array) {
                            ctx.at.push(tmp);
                          } else {
                            if (!ctx.at) {
                              ctx.end = j = M;
                              tmp = u;
                            }
                            (ctx.at || {})[ctx.s] = tmp;
                          }
                        }
                      }
                    }
                    ctx.a = u;
                    ctx.at = ctx.up.pop();
                    break;
                  case "[":
                    if (u !== (tmp = ctx.s)) {
                      ctx.up.push(ctx.at);
                      ctx.at[tmp] = ctx.at = [];
                    } else if (!ctx.at) {
                      ctx.up.push(ctx.at = []);
                    }
                    ctx.a = true;
                    ctx.ai = i;
                    break;
                  case "]":
                    if (ctx.a) {
                      if (tmp = s.slice(ctx.ai, i - 1)) {
                        if (u !== (tmp = value(tmp))) {
                          if (ctx.at instanceof Array) {
                            ctx.at.push(tmp);
                          } else {
                            ctx.at[ctx.s] = tmp;
                          }
                        }
                      }
                    }
                    ctx.a = u;
                    ctx.at = ctx.up.pop();
                    break;
                }
              }
            }
            ctx.s = u;
            ctx.i = i;
            ctx.w = w;
            if (ctx.end) {
              tmp = ctx.at;
              if (u === tmp) {
                try {
                  tmp = JSON.parse(text);
                } catch (e) {
                  return ctx.done(e);
                }
              }
              ctx.done(u, tmp);
            } else {
              sI(parse);
            }
          }
        };
        function value(s) {
          var n = parseFloat(s);
          if (!isNaN(n)) {
            return n;
          }
          s = s.trim();
          if ("true" == s) {
            return true;
          }
          if ("false" == s) {
            return false;
          }
          if ("null" == s) {
            return null;
          }
        }
        yson.stringifyAsync = function(data, done, replacer, space, ctx) {
          ctx = ctx || {};
          ctx.text = ctx.text || "";
          ctx.up = [ctx.at = { d: data }];
          ctx.done = done;
          ctx.i = 0;
          var j = 0;
          ify();
          function ify() {
            var at = ctx.at, data2 = at.d, add = "", tmp;
            if (at.i && at.i - at.j > 0) {
              add += ",";
            }
            if (u !== (tmp = at.k)) {
              add += JSON.stringify(tmp) + ":";
            }
            switch (typeof data2) {
              case "boolean":
                add += "" + data2;
                break;
              case "string":
                add += JSON.stringify(data2);
                break;
              case "number":
                add += isNaN(data2) ? "null" : data2;
                break;
              case "object":
                if (!data2) {
                  add += "null";
                  break;
                }
                if (data2 instanceof Array) {
                  add += "[";
                  at = { i: -1, as: data2, up: at, j: 0 };
                  at.l = data2.length;
                  ctx.up.push(ctx.at = at);
                  break;
                }
                if ("function" != typeof (data2 || "").toJSON) {
                  add += "{";
                  at = { i: -1, ok: Object.keys(data2).sort(), as: data2, up: at, j: 0 };
                  at.l = at.ok.length;
                  ctx.up.push(ctx.at = at);
                  break;
                }
                if (tmp = data2.toJSON()) {
                  add += tmp;
                  break;
                }
              case "function":
                if (at.as instanceof Array) {
                  add += "null";
                  break;
                }
              default:
                add = "";
                at.j++;
            }
            ctx.text += add;
            while (1 + at.i >= at.l) {
              ctx.text += at.ok ? "}" : "]";
              at = ctx.at = at.up;
            }
            if (++at.i < at.l) {
              if (tmp = at.ok) {
                at.d = at.as[at.k = tmp[at.i]];
              } else {
                at.d = at.as[at.i];
              }
              if (++j < 9) {
                return ify();
              } else {
                j = 0;
              }
              sI(ify);
              return;
            }
            ctx.done(u, ctx.text);
          }
        };
        if (typeof window != "" + u) {
          window.YSON = yson;
        }
        try {
          if (typeof module != "" + u) {
            module.exports = yson;
          }
        } catch (e) {
        }
        if (typeof JSON != "" + u) {
          JSON.parseAsync = yson.parseAsync;
          JSON.stringifyAsync = yson.stringifyAsync;
        }
      })();
    }
  });

  // lib/gun/lib/radmigtmp.js
  var require_radmigtmp = __commonJS({
    "lib/gun/lib/radmigtmp.js"(exports, module) {
      module.exports = function(r) {
        var Radix = require_radix();
        r.find("a", function() {
          var l = [];
          Radix.map(r.list, function(v2, f2) {
            if (!(f2.indexOf("%1B") + 1)) {
              return;
            }
            if (!v2) {
              return;
            }
            l.push([f2, v2]);
          });
          if (l.length) {
            console.log("\n! ! ! WARNING ! ! !\nRAD v0.2020.x has detected OLD v0.2019.x data & automatically migrating. Automatic migration will be turned OFF in future versions! If you are just developing/testing, we recommend you reset your data. Please contact us if you have any concerns.\nThis message should only log once.");
          }
          var f, v;
          l.forEach(function(a) {
            f = a[0];
            v = a[1];
            r.list(decodeURIComponent(f), v);
            r.list(f, 0);
          });
          if (!f) {
            return;
          }
          r.find.bad(f);
        });
      };
    }
  });

  // lib/gun/lib/radisk.js
  var require_radisk = __commonJS({
    "lib/gun/lib/radisk.js"(exports, module) {
      (function() {
        function Radisk(opt) {
          opt = opt || {};
          opt.log = opt.log || console.log;
          opt.file = String(opt.file || "ddeep_data");
          var has = (Radisk.has || (Radisk.has = {}))[opt.file];
          if (has) {
            return has;
          }
          opt.max = opt.max || (opt.memory ? opt.memory * 999 * 999 : 3e8) * 0.3;
          opt.until = opt.until || opt.wait || 250;
          opt.batch = opt.batch || 10 * 1e3;
          opt.chunk = opt.chunk || 1024 * 1024 * 1;
          opt.code = opt.code || {};
          opt.code.from = opt.code.from || "!";
          opt.jsonify = true;
          function ename(t) {
            return encodeURIComponent(t).replace(/\*/g, "%2A");
          }
          function atomic(v) {
            return u !== v && (!v || "object" != typeof v);
          }
          var timediate = "" + u === typeof setImmediate ? setTimeout : setImmediate;
          var puff = setTimeout.turn || timediate, u;
          var map = Radix.object;
          var ST = 0;
          if (!opt.store) {
            return opt.log("ERROR: Radisk needs `opt.store` interface with `{get: fn, put: fn (, list: fn)}`!");
          }
          if (!opt.store.put) {
            return opt.log("ERROR: Radisk needs `store.put` interface with `(file, data, cb)`!");
          }
          if (!opt.store.get) {
            return opt.log("ERROR: Radisk needs `store.get` interface with `(file, cb)`!");
          }
          if (!opt.store.list) {
          }
          if ("" + u != typeof __require) {
            require_yson();
          }
          var parse = JSON.parseAsync || function(t, cb, r2) {
            var u2;
            try {
              cb(u2, JSON.parse(t, r2));
            } catch (e) {
              cb(e);
            }
          };
          var json = JSON.stringifyAsync || function(v, cb, r2, s) {
            var u2;
            try {
              cb(u2, JSON.stringify(v, r2, s));
            } catch (e) {
              cb(e);
            }
          };
          var r = function(key, data, cb, tag, DBG) {
            if ("function" === typeof data) {
              var o = cb || {};
              cb = data;
              r.read(key, cb, o, DBG || tag);
              return;
            }
            r.save(key, data, cb, tag, DBG);
          };
          r.save = function(key, data, cb, tag, DBG) {
            var s = { key }, tags, f, d, q;
            s.find = function(file) {
              var tmp;
              s.file = file || (file = opt.code.from);
              DBG && (DBG = DBG[file] = DBG[file] || {});
              DBG && (DBG.sf = DBG.sf || +/* @__PURE__ */ new Date());
              if (tmp = r.disk[file]) {
                s.mix(u, tmp);
                return;
              }
              r.parse(file, s.mix, u, DBG);
            };
            s.mix = function(err, disk) {
              DBG && (DBG.sml = +/* @__PURE__ */ new Date());
              DBG && (DBG.sm = DBG.sm || +/* @__PURE__ */ new Date());
              if (s.err = err || s.err) {
                cb(err);
                return;
              }
              var file = s.file = (disk || "").file || s.file, tmp;
              if (!disk && file !== opt.code.from) {
                r.find.bad(file);
                r.save(key, data, cb, tag);
                return;
              }
              (disk = r.disk[file] || (r.disk[file] = disk || Radix())).file || (disk.file = file);
              if (opt.compare) {
                data = opt.compare(disk(key), data, key, file);
                if (u === data) {
                  cb(err, -1);
                  return;
                }
              }
              (s.disk = disk)(key, data);
              if (tag) {
                (tmp = (tmp = disk.tags || (disk.tags = {}))[tag] || (tmp[tag] = r.tags[tag] || (r.tags[tag] = {})))[file] || (tmp[file] = r.one[tag] || (r.one[tag] = cb));
                cb = null;
              }
              DBG && (DBG.st = DBG.st || +/* @__PURE__ */ new Date());
              if (disk.Q) {
                cb && disk.Q.push(cb);
                return;
              }
              disk.Q = cb ? [cb] : [];
              disk.to = setTimeout(s.write, opt.until);
            };
            s.write = function() {
              DBG && (DBG.sto = DBG.sto || +/* @__PURE__ */ new Date());
              var file = f = s.file, disk = d = s.disk;
              q = s.q = disk.Q;
              tags = s.tags = disk.tags;
              delete disk.Q;
              delete r.disk[file];
              delete disk.tags;
              r.write(file, disk, s.ack, u, DBG);
            };
            s.ack = function(err, ok) {
              DBG && (DBG.sa = DBG.sa || +/* @__PURE__ */ new Date());
              DBG && (DBG.sal = q.length);
              var ack, tmp;
              for (var id in r.tags) {
                if (!r.tags.hasOwnProperty(id)) {
                  continue;
                }
                var tag2 = r.tags[id];
                if ((tmp = r.disk[f]) && (tmp = tmp.tags) && tmp[tag2]) {
                  continue;
                }
                ack = tag2[f];
                delete tag2[f];
                var ne;
                for (var k in tag2) {
                  if (tag2.hasOwnProperty(k)) {
                    ne = true;
                    break;
                  }
                }
                if (ne) {
                  continue;
                }
                delete r.tags[tag2];
                ack && ack(err, ok);
              }
              !q && (q = "");
              var l = q.length, i = 0;
              var S = +/* @__PURE__ */ new Date();
              for (; i < l; i++) {
                (ack = q[i]) && ack(err, ok);
              }
              console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "rad acks", ename(s.file));
              console.STAT && console.STAT(S, q.length, "rad acks #", ename(s.file));
            };
            cb || (cb = function(err, ok) {
              if (!err) {
                return;
              }
            });
            r.find(key, s.find);
          };
          r.disk = {};
          r.one = {};
          r.tags = {};
          var RWC = 0;
          r.write = function(file, rad, cb, o, DBG) {
            if (!rad) {
              cb("No radix!");
              return;
            }
            o = "object" == typeof o ? o : { force: o };
            var f = function Fractal() {
            }, a, b;
            f.text = "";
            f.file = file = rad.file || (rad.file = file);
            if (!file) {
              cb("What file?");
              return;
            }
            f.write = function() {
              var text = rad.raw = f.text;
              r.disk[file = rad.file || f.file || file] = rad;
              var S = +/* @__PURE__ */ new Date();
              DBG && (DBG.wd = S);
              r.find.add(file, function add(err) {
                DBG && (DBG.wa = +/* @__PURE__ */ new Date());
                if (err) {
                  cb(err);
                  return;
                }
                opt.store.put(ename(file), text, function safe(err2, ok) {
                  DBG && (DBG.wp = +/* @__PURE__ */ new Date());
                  console.STAT && console.STAT(S, ST = +/* @__PURE__ */ new Date() - S, "wrote disk", JSON.stringify(file), ++RWC, "total all writes.");
                  cb(err2, ok || 1);
                  if (!rad.Q) {
                    delete r.disk[file];
                  }
                });
              });
            };
            f.split = function() {
              var S = +/* @__PURE__ */ new Date();
              DBG && (DBG.wf = S);
              f.text = "";
              if (!f.count) {
                f.count = 0;
                Radix.map(rad, function count() {
                  f.count++;
                });
              }
              DBG && (DBG.wfc = f.count);
              f.limit = Math.ceil(f.count / 2);
              var SC = f.count;
              f.count = 0;
              DBG && (DBG.wf1 = +/* @__PURE__ */ new Date());
              f.sub = Radix();
              Radix.map(rad, f.slice, { reverse: 1 });
              DBG && (DBG.wf2 = +/* @__PURE__ */ new Date());
              r.write(f.end, f.sub, f.both, o);
              DBG && (DBG.wf3 = +/* @__PURE__ */ new Date());
              f.hub = Radix();
              Radix.map(rad, f.stop);
              DBG && (DBG.wf4 = +/* @__PURE__ */ new Date());
              r.write(rad.file, f.hub, f.both, o);
              DBG && (DBG.wf5 = +/* @__PURE__ */ new Date());
              console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "rad split", ename(rad.file), SC);
              return true;
            };
            f.slice = function(val, key) {
              f.sub(f.end = key, val);
              if (f.limit <= ++f.count) {
                return true;
              }
            };
            f.stop = function(val, key) {
              if (key >= f.end) {
                return true;
              }
              f.hub(key, val);
            };
            f.both = function(err, ok) {
              DBG && (DBG.wfd = +/* @__PURE__ */ new Date());
              if (b) {
                cb(err || b);
                return;
              }
              if (a) {
                cb(err, ok);
                return;
              }
              a = true;
              b = err;
            };
            f.each = function(val, key, k, pre) {
              if (u !== val) {
                f.count++;
              }
              if (opt.max <= (val || "").length) {
                return cb("Data too big!"), true;
              }
              var enc = Radisk.encode(pre.length) + "#" + Radisk.encode(k) + (u === val ? "" : ":" + Radisk.encode(val)) + "\n";
              if (opt.chunk < f.text.length + enc.length && 1 < f.count && !o.force) {
                return f.split();
              }
              f.text += enc;
            };
            if (opt.jsonify) {
              r.write.jsonify(f, rad, cb, o, DBG);
              return;
            }
            if (!Radix.map(rad, f.each, true)) {
              f.write();
            }
          };
          r.write.jsonify = function(f, rad, cb, o, DBG) {
            var raw;
            var S = +/* @__PURE__ */ new Date();
            DBG && (DBG.w = S);
            try {
              raw = JSON.stringify(rad.$);
            } catch (e) {
              cb("Cannot radisk!");
              return;
            }
            DBG && (DBG.ws = +/* @__PURE__ */ new Date());
            console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "rad stringified JSON");
            if (opt.chunk < raw.length && !o.force) {
              var c = 0;
              Radix.map(rad, function() {
                if (c++) {
                  return true;
                }
              });
              if (c > 1) {
                return f.split();
              }
            }
            f.text = raw;
            f.write();
          };
          r.range = function(tree, o) {
            if (!tree || !o) {
              return;
            }
            if (u === o.start && u === o.end) {
              return tree;
            }
            if (atomic(tree)) {
              return tree;
            }
            var sub = Radix();
            Radix.map(tree, function(v, k) {
              sub(k, v);
            }, o);
            return sub("");
          };
          (function() {
            r.read = function(key, cb, o, DBG) {
              o = o || {};
              var g = { key };
              g.find = function(file) {
                var tmp;
                g.file = file || (file = opt.code.from);
                DBG && (DBG = DBG[file] = DBG[file] || {});
                DBG && (DBG.rf = DBG.rf || +/* @__PURE__ */ new Date());
                if (tmp = r.disk[g.file = file]) {
                  g.check(u, tmp);
                  return;
                }
                r.parse(file, g.check, u, DBG);
              };
              g.get = function(err, disk, info) {
                DBG && (DBG.rgl = +/* @__PURE__ */ new Date());
                DBG && (DBG.rg = DBG.rg || +/* @__PURE__ */ new Date());
                if (g.err = err || g.err) {
                  cb(err);
                  return;
                }
                var file = g.file = (disk || "").file || g.file;
                if (!disk && file !== opt.code.from) {
                  r.find.bad(file);
                  r.read(key, cb, o);
                  return;
                }
                disk = r.disk[file] || (r.disk[file] = disk);
                if (!disk) {
                  cb(file === opt.code.from ? u : "No file!");
                  return;
                }
                disk.file || (disk.file = file);
                var data = r.range(disk(key), o);
                DBG && (DBG.rr = +/* @__PURE__ */ new Date());
                o.unit = disk.unit;
                o.chunks = (o.chunks || 0) + 1;
                o.parsed = (o.parsed || 0) + ((info || "").parsed || o.chunks * opt.chunk);
                o.more = 1;
                o.next = u;
                Radix.map(r.list, function next2(v, f) {
                  if (!v || file === f) {
                    return;
                  }
                  o.next = f;
                  return 1;
                }, o.reverse ? { reverse: 1, end: file } : { start: file });
                DBG && (DBG.rl = +/* @__PURE__ */ new Date());
                if (!o.next) {
                  o.more = 0;
                }
                if (o.next) {
                  if (!o.reverse && (key < o.next && 0 != o.next.indexOf(key) || u !== o.end && (o.end || "\uFFFF") < o.next)) {
                    o.more = 0;
                  }
                  if (o.reverse && (key > o.next && 0 != key.indexOf(o.next) || u !== o.start && (o.start || "") > o.next && file <= o.start)) {
                    o.more = 0;
                  }
                }
                if (!o.more) {
                  cb(g.err, data, o);
                  return;
                }
                if (data) {
                  cb(g.err, data, o);
                }
                if (o.parsed >= o.limit) {
                  return;
                }
                var S = +/* @__PURE__ */ new Date();
                DBG && (DBG.rm = S);
                var next = o.next;
                timediate(function() {
                  console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "rad more");
                  r.parse(next, g.check);
                }, 0);
              };
              g.check = function(err, disk, info) {
                g.get(err, disk, info);
                if (!disk || disk.check) {
                  return;
                }
                disk.check = 1;
                var S = +/* @__PURE__ */ new Date();
                (info || (info = {})).file || (info.file = g.file);
                Radix.map(disk, function(val, key2) {
                  r.find(key2, function(file) {
                    if ((file || (file = opt.code.from)) === info.file) {
                      return;
                    }
                    var id = ("" + Math.random()).slice(-3);
                    puff(function() {
                      r.save(key2, val, function ack(err2, ok) {
                        if (err2) {
                          r.save(key2, val, ack);
                          return;
                        }
                        console.STAT && console.STAT("MISLOCATED DATA CORRECTED", id, ename(key2), ename(info.file), ename(file));
                      });
                    }, 0);
                  });
                });
                console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "rad check");
              };
              r.find(key || (o.reverse ? o.end || "" : o.start || ""), g.find);
            };
            function rev(a, b) {
              return b;
            }
            var revo = { reverse: true };
          })();
          ;
          (function() {
            var RPC = 0;
            var Q = {}, s = String.fromCharCode(31);
            r.parse = function(file, cb, raw, DBG) {
              var q;
              if (!file) {
                return cb();
              }
              if (q = Q[file]) {
                q.push(cb);
                return;
              }
              q = Q[file] = [cb];
              var p = function Parse() {
              }, info = { file };
              (p.disk = Radix()).file = file;
              p.read = function(err, data) {
                var tmp;
                DBG && (DBG.rpg = +/* @__PURE__ */ new Date());
                console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "read disk", JSON.stringify(file), ++RPC, "total all parses.");
                if ((p.err = err) || (p.not = !data)) {
                  delete Q[file];
                  p.map(q, p.ack);
                  return;
                }
                if ("string" !== typeof data) {
                  try {
                    if (opt.max <= data.length) {
                      p.err = "Chunk too big!";
                    } else {
                      data = data.toString();
                    }
                  } catch (e) {
                    p.err = e;
                  }
                  if (p.err) {
                    delete Q[file];
                    p.map(q, p.ack);
                    return;
                  }
                }
                info.parsed = data.length;
                DBG && (DBG.rpl = info.parsed);
                DBG && (DBG.rpa = q.length);
                S = +/* @__PURE__ */ new Date();
                if (!(opt.jsonify || "{" === data[0])) {
                  p.radec(err, data);
                  return;
                }
                parse(data, function(err2, tree) {
                  if (!err2) {
                    delete Q[file];
                    p.disk.$ = tree;
                    console.STAT && (ST = +/* @__PURE__ */ new Date() - S) > 9 && console.STAT(S, ST, "rad parsed JSON");
                    DBG && (DBG.rpd = +/* @__PURE__ */ new Date());
                    p.map(q, p.ack);
                    return;
                  }
                  if ("{" === data[0]) {
                    delete Q[file];
                    p.err = tmp || "JSON error!";
                    p.map(q, p.ack);
                    return;
                  }
                  p.radec(err2, data);
                });
              };
              p.map = function() {
                if (!q || !q.length) {
                  return;
                }
                var S2 = +/* @__PURE__ */ new Date();
                var err = p.err, data = p.not ? u : p.disk;
                var i = 0, ack;
                while (i < 9 && (ack = q[i++])) {
                  ack(err, data, info);
                }
                console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "rad packs", ename(file));
                console.STAT && console.STAT(S2, i, "rad packs #", ename(file));
                if (!(q = q.slice(i)).length) {
                  return;
                }
                puff(p.map, 0);
              };
              p.ack = function(cb2) {
                if (!cb2) {
                  return;
                }
                if (p.err || p.not) {
                  cb2(p.err, u, info);
                  return;
                }
                cb2(u, p.disk, info);
              };
              p.radec = function(err, data) {
                delete Q[file];
                S = +/* @__PURE__ */ new Date();
                var tmp = p.split(data), pre = [], i, k, v;
                if (!tmp || 0 !== tmp[1]) {
                  p.err = "File '" + file + "' does not have root radix! ";
                  p.map(q, p.ack);
                  return;
                }
                while (tmp) {
                  k = v = u;
                  i = tmp[1];
                  tmp = p.split(tmp[2]) || "";
                  if ("#" == tmp[0]) {
                    k = tmp[1];
                    pre = pre.slice(0, i);
                    if (i <= pre.length) {
                      pre.push(k);
                    }
                  }
                  tmp = p.split(tmp[2]) || "";
                  if ("\n" == tmp[0]) {
                    continue;
                  }
                  if ("=" == tmp[0] || ":" == tmp[0]) {
                    v = tmp[1];
                  }
                  if (u !== k && u !== v) {
                    p.disk(pre.join(""), v);
                  }
                  tmp = p.split(tmp[2]);
                }
                console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "parsed RAD");
                p.map(q, p.ack);
              };
              p.split = function(t) {
                if (!t) {
                  return;
                }
                var l = [], o = {}, i = -1, a = "", b, c;
                i = t.indexOf(s);
                if (!t[i]) {
                  return;
                }
                a = t.slice(0, i);
                l[0] = a;
                l[1] = b = Radisk.decode(t.slice(i), o);
                l[2] = t.slice(i + o.i);
                return l;
              };
              if (r.disk) {
                raw || (raw = (r.disk[file] || "").raw);
              }
              var S = +/* @__PURE__ */ new Date(), SM, SL;
              DBG && (DBG.rp = S);
              if (raw) {
                return puff(function() {
                  p.read(u, raw);
                }, 0);
              }
              opt.store.get(ename(file), p.read);
            };
          })();
          ;
          (function() {
            var dir, f = String.fromCharCode(28), Q;
            r.find = function(key, cb) {
              if (!dir) {
                if (Q) {
                  Q.push([key, cb]);
                  return;
                }
                Q = [[key, cb]];
                r.parse(f, init);
                return;
              }
              Radix.map(r.list = dir, function(val, key2) {
                if (!val) {
                  return;
                }
                return cb(key2) || true;
              }, { reverse: 1, end: key }) || cb(opt.code.from);
            };
            r.find.add = function(file, cb) {
              var has2 = dir(file);
              if (has2 || file === f) {
                cb(u, 1);
                return;
              }
              dir(file, 1);
              cb.found = (cb.found || 0) + 1;
              r.write(f, dir, function(err, ok) {
                if (err) {
                  cb(err);
                  return;
                }
                cb.found = (cb.found || 0) - 1;
                if (0 !== cb.found) {
                  return;
                }
                cb(u, 1);
              }, true);
            };
            r.find.bad = function(file, cb) {
              dir(file, 0);
              r.write(f, dir, cb || noop);
            };
            function init(err, disk) {
              if (err) {
                opt.log("list", err);
                setTimeout(function() {
                  r.parse(f, init);
                }, 1e3);
                return;
              }
              if (disk) {
                drain(disk);
                return;
              }
              dir = dir || disk || Radix();
              if (!opt.store.list) {
                drain(dir);
                return;
              }
              opt.store.list(function(file) {
                if (!file) {
                  drain(dir);
                  return;
                }
                r.find.add(file, noop);
              });
            }
            function drain(rad, tmp) {
              dir = dir || rad;
              dir.file = f;
              tmp = Q;
              Q = null;
              map(tmp, function(arg) {
                r.find(arg[0], arg[1]);
              });
            }
          })();
          try {
            !Gun2.window && require_radmigtmp()(r);
          } catch (e) {
          }
          var noop = function() {
          }, RAD, u;
          Radisk.has[opt.file] = r;
          return r;
        }
        ;
        (function() {
          var _ = String.fromCharCode(31), u;
          Radisk.encode = function(d, o, s) {
            s = s || _;
            var t = s, tmp;
            if (typeof d == "string") {
              var i = d.indexOf(s);
              while (i != -1) {
                t += s;
                i = d.indexOf(s, i + 1);
              }
              return t + '"' + d + s;
            } else if (d && d["#"] && 1 == Object.keys(d).length) {
              return t + "#" + tmp + t;
            } else if ("number" == typeof d) {
              return t + "+" + (d || 0) + t;
            } else if (null === d) {
              return t + " " + t;
            } else if (true === d) {
              return t + "+" + t;
            } else if (false === d) {
              return t + "-" + t;
            }
          };
          Radisk.decode = function(t, o, s) {
            s = s || _;
            var d = "", i = -1, n = 0, c, p;
            if (s !== t[0]) {
              return;
            }
            while (s === t[++i]) {
              ++n;
            }
            p = t[c = n] || true;
            while (--n >= 0) {
              i = t.indexOf(s, i + 1);
            }
            if (i == -1) {
              i = t.length;
            }
            d = t.slice(c + 1, i);
            if (o) {
              o.i = i + 1;
            }
            if ('"' === p) {
              return d;
            } else if ("#" === p) {
              return { "#": d };
            } else if ("+" === p) {
              if (0 === d.length) {
                return true;
              }
              return parseFloat(d);
            } else if (" " === p) {
              return null;
            } else if ("-" === p) {
              return false;
            }
          };
        })();
        if (typeof window !== "undefined") {
          var Gun2 = window.Gun;
          var Radix = window.Radix;
          window.Radisk = Radisk;
        } else {
          var Gun2 = require_gun();
          var Radix = require_radix();
          try {
            module.exports = Radisk;
          } catch (e) {
          }
        }
        Radisk.Radix = Radix;
      })();
    }
  });

  // lib/gun/lib/store.js
  var require_store = __commonJS({
    "lib/gun/lib/store.js"() {
      var Gun2 = typeof window !== "undefined" ? window.Gun : require_gun();
      Gun2.on("create", function(root) {
        if (Gun2.TESTING) {
          root.opt.file = "radatatest";
        }
        this.to.next(root);
        var opt = root.opt, empty = {}, u;
        if (false === opt.rad || false === opt.radisk) {
          return;
        }
        if (u + "" != typeof process && "false" === "" + (process.env || "").RAD) {
          return;
        }
        var Radisk = Gun2.window && Gun2.window.Radisk || require_radisk();
        var Radix = Radisk.Radix;
        var dare = Radisk(opt), esc = String.fromCharCode(27);
        var ST = 0;
        root.on("put", function(msg) {
          this.to.next(msg);
          if ((msg._ || "").rad) {
            return;
          }
          var id = msg["#"], put = msg.put, soul = put["#"], key = put["."], val = put[":"], state = put[">"], tmp;
          var DBG = (msg._ || "").DBG;
          DBG && (DBG.sp = DBG.sp || +/* @__PURE__ */ new Date());
          var S = (msg._ || "").RPS || ((msg._ || "").RPS = +/* @__PURE__ */ new Date());
          dare(soul + esc + key, { ":": val, ">": state }, function(err, ok) {
            DBG && (DBG.spd = DBG.spd || +/* @__PURE__ */ new Date());
            console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "put");
            if (err) {
              root.on("in", { "@": id, err, DBG });
              return;
            }
            root.on("in", { "@": id, ok, DBG });
          }, false, DBG && (DBG.r = DBG.r || {}));
          DBG && (DBG.sps = DBG.sps || +/* @__PURE__ */ new Date());
        });
        var count = {}, obj_empty = Object.empty;
        root.on("get", function(msg) {
          this.to.next(msg);
          var ctx = msg._ || "", DBG = ctx.DBG = msg.DBG;
          DBG && (DBG.sg = +/* @__PURE__ */ new Date());
          var id = msg["#"], get = msg.get, soul = msg.get["#"], has = msg.get["."] || "", o = {}, graph, lex, key, tmp, force;
          if ("string" == typeof soul) {
            key = soul;
          } else if (soul) {
            if (u !== (tmp = soul["*"])) {
              o.limit = force = 1;
            }
            if (u !== soul[">"]) {
              o.start = soul[">"];
            }
            if (u !== soul["<"]) {
              o.end = soul["<"];
            }
            key = force ? "" + tmp : tmp || soul["="];
            force = null;
          }
          if (key && !o.limit) {
            if ("string" == typeof has) {
              key = key + esc + (o.atom = has);
            } else if (has) {
              if (u !== has[">"]) {
                o.start = has[">"];
                o.limit = 1;
              }
              if (u !== has["<"]) {
                o.end = has["<"];
                o.limit = 1;
              }
              if (u !== (tmp = has["*"])) {
                o.limit = force = 1;
              }
              if (key) {
                key = key + esc + (force ? "" + (tmp || "") : tmp || (o.atom = has["="] || ""));
              }
            }
          }
          if ((tmp = get["%"]) || o.limit) {
            o.limit = tmp <= (o.pack || 1e3 * 100) ? tmp : 1;
          }
          if (has["-"] || (soul || {})["-"] || get["-"]) {
            o.reverse = true;
          }
          if ((tmp = (root.next || "")[soul]) && tmp.put) {
            if (o.atom) {
              tmp = (tmp.next || "")[o.atom];
              if (tmp && tmp.rad) {
                return;
              }
            } else if (tmp && tmp.rad) {
              return;
            }
          }
          var now = Gun2.state();
          var S = +/* @__PURE__ */ new Date(), C = 0, SPT = 0;
          DBG && (DBG.sgm = S);
          dare(key || "", function(err, data, info) {
            DBG && (DBG.sgr = +/* @__PURE__ */ new Date());
            DBG && (DBG.sgi = info);
            try {
              opt.store.stats.get.time[statg % 50] = +/* @__PURE__ */ new Date() - S;
              ++statg;
              opt.store.stats.get.count++;
              if (err) {
                opt.store.stats.get.err = err;
              }
            } catch (e) {
            }
            console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "got", JSON.stringify(key));
            S = +/* @__PURE__ */ new Date();
            info = info || "";
            var va, ve;
            if (info.unit && data && u !== (va = data[":"]) && u !== (ve = data[">"])) {
              var tmp2 = key.split(esc), so = tmp2[0], ha = tmp2[1];
              (graph = graph || {})[so] = Gun2.state.ify(graph[so], ha, ve, va, so);
              root.$.get(so).get(ha)._.rad = now;
            } else if (data) {
              if (typeof data !== "string") {
                if (o.atom) {
                  data = u;
                } else {
                  Radix.map(data, each, o);
                }
              }
              if (!graph && data) {
                each(data, "");
              }
              if (!o.atom && !has & "string" == typeof soul && !o.limit && !o.more) {
                root.$.get(soul)._.rad = now;
              }
            }
            DBG && (DBG.sgp = +/* @__PURE__ */ new Date());
            if (console.STAT && (ST = +/* @__PURE__ */ new Date() - S) > 9) {
              console.STAT(S, ST, "got prep time");
              console.STAT(S, C, "got prep #");
            }
            SPT += ST;
            C = 0;
            S = +/* @__PURE__ */ new Date();
            var faith = function() {
            };
            faith.faith = true;
            faith.rad = get;
            root.on("in", { "@": id, put: graph, "%": info.more ? 1 : u, err: err ? err : u, _: faith, DBG });
            console.STAT && (ST = +/* @__PURE__ */ new Date() - S) > 9 && console.STAT(S, ST, "got emit", Object.keys(graph || {}).length);
            graph = u;
          }, o, DBG && (DBG.r = DBG.r || {}));
          DBG && (DBG.sgd = +/* @__PURE__ */ new Date());
          console.STAT && (ST = +/* @__PURE__ */ new Date() - S) > 9 && console.STAT(S, ST, "get call");
          function each(val, has2, a, b) {
            C++;
            if (!val) {
              return;
            }
            has2 = (key + has2).split(esc);
            var soul2 = has2.slice(0, 1)[0];
            has2 = has2.slice(-1)[0];
            if (o.limit && o.limit <= o.count) {
              return true;
            }
            var va, ve, so = soul2, ha = has2;
            if ("string" != typeof val) {
              va = val[":"];
              ve = val[">"];
              (graph = graph || {})[so] = Gun2.state.ify(graph[so], ha, ve, va, so);
              o.count = (o.count || 0) + ((va || "").length || 9);
              return;
            }
            o.count = (o.count || 0) + val.length;
            var tmp2 = val.lastIndexOf(">");
            var state = Radisk.decode(val.slice(tmp2 + 1), null, esc);
            val = Radisk.decode(val.slice(0, tmp2), null, esc);
            (graph = graph || {})[soul2] = Gun2.state.ify(graph[soul2], has2, state, val, soul2);
          }
        });
        var val_is = Gun2.valid;
        (opt.store || {}).stats = { get: { time: {}, count: 0 }, put: { time: {}, count: 0 } };
        var statg = 0, statp = 0;
      });
    }
  });

  // lib/gun/lib/rindexed.js
  var require_rindexed = __commonJS({
    "lib/gun/lib/rindexed.js"(exports, module) {
      (function() {
        function Store(opt) {
          opt = opt || {};
          opt.file = String(opt.file || "ddeep_data");
          var store = Store[opt.file], db = null, u;
          if (store) {
            console.log("Warning: reusing same IndexedDB store and options as 1st.");
            return Store[opt.file];
          }
          store = Store[opt.file] = function() {
          };
          try {
            opt.indexedDB = opt.indexedDB || Store.indexedDB || indexedDB;
          } catch (e) {
          }
          try {
            if (!opt.indexedDB || "file:" == location.protocol) {
              var s = store.d || (store.d = {});
              store.put = function(f, d, cb) {
                s[f] = d;
                setTimeout(function() {
                  cb(null, 1);
                }, 250);
              };
              store.get = function(f, cb) {
                setTimeout(function() {
                  cb(null, s[f] || u);
                }, 5);
              };
              console.log("Warning: No indexedDB exists to persist data to!");
              return store;
            }
          } catch (e) {
          }
          store.start = function() {
            var o = indexedDB.open(opt.file, 1);
            o.onupgradeneeded = function(eve) {
              eve.target.result.createObjectStore(opt.file);
            };
            o.onsuccess = function() {
              db = o.result;
            };
            o.onerror = function(eve) {
              console.log(eve || 1);
            };
          };
          store.start();
          store.put = function(key, data, cb) {
            if (!db) {
              setTimeout(function() {
                store.put(key, data, cb);
              }, 1);
              return;
            }
            var tx = db.transaction([opt.file], "readwrite");
            var obj = tx.objectStore(opt.file);
            var req = obj.put(data, "" + key);
            req.onsuccess = obj.onsuccess = tx.onsuccess = function() {
              cb(null, 1);
            };
            req.onabort = obj.onabort = tx.onabort = function(eve) {
              cb(eve || "put.tx.abort");
            };
            req.onerror = obj.onerror = tx.onerror = function(eve) {
              cb(eve || "put.tx.error");
            };
          };
          store.get = function(key, cb) {
            if (!db) {
              setTimeout(function() {
                store.get(key, cb);
              }, 9);
              return;
            }
            var tx = db.transaction([opt.file], "readonly");
            var obj = tx.objectStore(opt.file);
            var req = obj.get("" + key);
            req.onsuccess = function() {
              cb(null, req.result);
            };
            req.onabort = function(eve) {
              cb(eve || 4);
            };
            req.onerror = function(eve) {
              cb(eve || 5);
            };
          };
          setInterval(function() {
            db && db.close();
            db = null;
            store.start();
          }, 1e3 * 15);
          return store;
        }
        if (typeof window !== "undefined") {
          (Store.window = window).RindexedDB = Store;
          Store.indexedDB = window.indexedDB;
        } else {
          try {
            module.exports = Store;
          } catch (e) {
          }
        }
        try {
          var Gun2 = Store.window.Gun || require_gun();
          Gun2.on("create", function(root) {
            this.to.next(root);
            root.opt.store = root.opt.store || Store(root.opt);
          });
        } catch (e) {
        }
      })();
    }
  });

  // src/constructor/load.ts
  var require_load = __commonJS({
    "src/constructor/load.ts"(exports, module) {
      "use strict";
      var load_database = function(args) {
        require_radix(), require_radisk(), require_store(), require_rindexed();
        var options = args[1];
        var db = new window.ddeep.db({ ...options, localStorage: false });
        return db;
      };
      var load = function(...args) {
        var type = args[0];
        var options = args;
        if (type === "database") {
          return load_database(args);
        }
      };
      module.exports = load;
    }
  });

  // src/constructor/init.ts
  var require_init = __commonJS({
    "src/constructor/init.ts"(exports, module) {
      "use strict";
      var gun = require_gun();
      var sea = require_sea();
      var _events = require_events();
      var build_db = require_chain();
      var _load = require_load();
      gun = build_db(gun);
      var ddeep_events = new _events();
      var ddeep2 = {
        events: ddeep_events,
        db: gun,
        load: _load
      };
      module.exports = ddeep2, { db: gun };
    }
  });

  // src/ddeep.js
  var ddeep = require_init();
  window.addEventListener("load", () => {
    window.ddeep.sea = window.SEA;
    ddeep.events.emit("load");
  });
  window.ddeep = ddeep;
  var ddeep_default = ddeep;
})();
//!opt && console.log("WHAT IS T?", JSON.stringify(t).length);

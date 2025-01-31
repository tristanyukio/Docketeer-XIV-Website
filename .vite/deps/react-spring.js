import {
  require_react_dom
} from "./chunk-EW3LUIW7.js";
import {
  require_react
} from "./chunk-AYRJNZXD.js";
import {
  __publicField,
  __toESM
} from "./chunk-GKWPUQBP.js";

// node_modules/@react-spring/rafz/dist/esm/index.js
var f = r();
var n = (e2) => c(e2, f);
var m = r();
n.write = (e2) => c(e2, m);
var d = r();
n.onStart = (e2) => c(e2, d);
var h = r();
n.onFrame = (e2) => c(e2, h);
var p = r();
n.onFinish = (e2) => c(e2, p);
var i = [];
n.setTimeout = (e2, t) => {
  let a = n.now() + t, o = () => {
    let F3 = i.findIndex((z3) => z3.cancel == o);
    ~F3 && i.splice(F3, 1), u -= ~F3 ? 1 : 0;
  }, s = { time: a, handler: e2, cancel: o };
  return i.splice(w(a), 0, s), u += 1, v(), s;
};
var w = (e2) => ~(~i.findIndex((t) => t.time > e2) || ~i.length);
n.cancel = (e2) => {
  d.delete(e2), h.delete(e2), p.delete(e2), f.delete(e2), m.delete(e2);
};
n.sync = (e2) => {
  T = true, n.batchedUpdates(e2), T = false;
};
n.throttle = (e2) => {
  let t;
  function a() {
    try {
      e2(...t);
    } finally {
      t = null;
    }
  }
  function o(...s) {
    t = s, n.onStart(a);
  }
  return o.handler = e2, o.cancel = () => {
    d.delete(a), t = null;
  }, o;
};
var y = typeof window < "u" ? window.requestAnimationFrame : () => {
};
n.use = (e2) => y = e2;
n.now = typeof performance < "u" ? () => performance.now() : Date.now;
n.batchedUpdates = (e2) => e2();
n.catch = console.error;
n.frameLoop = "always";
n.advance = () => {
  n.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : x();
};
var l = -1;
var u = 0;
var T = false;
function c(e2, t) {
  T ? (t.delete(e2), e2(0)) : (t.add(e2), v());
}
function v() {
  l < 0 && (l = 0, n.frameLoop !== "demand" && y(b));
}
function R() {
  l = -1;
}
function b() {
  ~l && (y(b), n.batchedUpdates(x));
}
function x() {
  let e2 = l;
  l = n.now();
  let t = w(l);
  if (t && (Q(i.splice(0, t), (a) => a.handler()), u -= t), !u) {
    R();
    return;
  }
  d.flush(), f.flush(e2 ? Math.min(64, l - e2) : 16.667), h.flush(), m.flush(), p.flush();
}
function r() {
  let e2 = /* @__PURE__ */ new Set(), t = e2;
  return { add(a) {
    u += t == e2 && !e2.has(a) ? 1 : 0, e2.add(a);
  }, delete(a) {
    return u -= t == e2 && e2.has(a) ? 1 : 0, e2.delete(a);
  }, flush(a) {
    t.size && (e2 = /* @__PURE__ */ new Set(), u -= t.size, Q(t, (o) => o(a) && e2.add(o)), u += e2.size, t = e2);
  } };
}
function Q(e2, t) {
  e2.forEach((a) => {
    try {
      t(a);
    } catch (o) {
      n.catch(o);
    }
  });
}

// node_modules/@react-spring/shared/dist/esm/index.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var ze = Object.defineProperty;
var Le = (e2, t) => {
  for (var r2 in t)
    ze(e2, r2, { get: t[r2], enumerable: true });
};
var p2 = {};
Le(p2, { assign: () => U, colors: () => c2, createStringInterpolator: () => k, skipAnimation: () => ee, to: () => J, willAdvance: () => S });
function Y() {
}
var mt = (e2, t, r2) => Object.defineProperty(e2, t, { value: r2, writable: true, configurable: true });
var l2 = { arr: Array.isArray, obj: (e2) => !!e2 && e2.constructor.name === "Object", fun: (e2) => typeof e2 == "function", str: (e2) => typeof e2 == "string", num: (e2) => typeof e2 == "number", und: (e2) => e2 === void 0 };
function bt(e2, t) {
  if (l2.arr(e2)) {
    if (!l2.arr(t) || e2.length !== t.length)
      return false;
    for (let r2 = 0; r2 < e2.length; r2++)
      if (e2[r2] !== t[r2])
        return false;
    return true;
  }
  return e2 === t;
}
var Ve = (e2, t) => e2.forEach(t);
function xt(e2, t, r2) {
  if (l2.arr(e2)) {
    for (let n2 = 0; n2 < e2.length; n2++)
      t.call(r2, e2[n2], `${n2}`);
    return;
  }
  for (let n2 in e2)
    e2.hasOwnProperty(n2) && t.call(r2, e2[n2], n2);
}
var ht = (e2) => l2.und(e2) ? [] : l2.arr(e2) ? e2 : [e2];
function Pe(e2, t) {
  if (e2.size) {
    let r2 = Array.from(e2);
    e2.clear(), Ve(r2, t);
  }
}
var yt = (e2, ...t) => Pe(e2, (r2) => r2(...t));
var h2 = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var k;
var J;
var c2 = null;
var ee = false;
var S = Y;
var U = (e2) => {
  e2.to && (J = e2.to), e2.now && (n.now = e2.now), e2.colors !== void 0 && (c2 = e2.colors), e2.skipAnimation != null && (ee = e2.skipAnimation), e2.createStringInterpolator && (k = e2.createStringInterpolator), e2.requestAnimationFrame && n.use(e2.requestAnimationFrame), e2.batchedUpdates && (n.batchedUpdates = e2.batchedUpdates), e2.willAdvance && (S = e2.willAdvance), e2.frameLoop && (n.frameLoop = e2.frameLoop);
};
var E = /* @__PURE__ */ new Set();
var u2 = [];
var H = [];
var A = 0;
var qe = { get idle() {
  return !E.size && !u2.length;
}, start(e2) {
  A > e2.priority ? (E.add(e2), n.onStart($e)) : (te(e2), n(B));
}, advance: B, sort(e2) {
  if (A)
    n.onFrame(() => qe.sort(e2));
  else {
    let t = u2.indexOf(e2);
    ~t && (u2.splice(t, 1), re(e2));
  }
}, clear() {
  u2 = [], E.clear();
} };
function $e() {
  E.forEach(te), E.clear(), n(B);
}
function te(e2) {
  u2.includes(e2) || re(e2);
}
function re(e2) {
  u2.splice(Ge(u2, (t) => t.priority > e2.priority), 0, e2);
}
function B(e2) {
  let t = H;
  for (let r2 = 0; r2 < u2.length; r2++) {
    let n2 = u2[r2];
    A = n2.priority, n2.idle || (S(n2), n2.advance(e2), n2.idle || t.push(n2));
  }
  return A = 0, H = u2, H.length = 0, u2 = t, u2.length > 0;
}
function Ge(e2, t) {
  let r2 = e2.findIndex(t);
  return r2 < 0 ? e2.length : r2;
}
var ne = (e2, t, r2) => Math.min(Math.max(r2, e2), t);
var It = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 };
var d2 = "[-+]?\\d*\\.?\\d+";
var M = d2 + "%";
function C(...e2) {
  return "\\(\\s*(" + e2.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var oe = new RegExp("rgb" + C(d2, d2, d2));
var fe = new RegExp("rgba" + C(d2, d2, d2, d2));
var ae = new RegExp("hsl" + C(d2, M, M));
var ie = new RegExp("hsla" + C(d2, M, M, d2));
var se = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var ue = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var le = /^#([0-9a-fA-F]{6})$/;
var ce = /^#([0-9a-fA-F]{8})$/;
function be(e2) {
  let t;
  return typeof e2 == "number" ? e2 >>> 0 === e2 && e2 >= 0 && e2 <= 4294967295 ? e2 : null : (t = le.exec(e2)) ? parseInt(t[1] + "ff", 16) >>> 0 : c2 && c2[e2] !== void 0 ? c2[e2] : (t = oe.exec(e2)) ? (y2(t[1]) << 24 | y2(t[2]) << 16 | y2(t[3]) << 8 | 255) >>> 0 : (t = fe.exec(e2)) ? (y2(t[1]) << 24 | y2(t[2]) << 16 | y2(t[3]) << 8 | me(t[4])) >>> 0 : (t = se.exec(e2)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ce.exec(e2)) ? parseInt(t[1], 16) >>> 0 : (t = ue.exec(e2)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ae.exec(e2)) ? (de(pe(t[1]), z(t[2]), z(t[3])) | 255) >>> 0 : (t = ie.exec(e2)) ? (de(pe(t[1]), z(t[2]), z(t[3])) | me(t[4])) >>> 0 : null;
}
function j(e2, t, r2) {
  return r2 < 0 && (r2 += 1), r2 > 1 && (r2 -= 1), r2 < 1 / 6 ? e2 + (t - e2) * 6 * r2 : r2 < 1 / 2 ? t : r2 < 2 / 3 ? e2 + (t - e2) * (2 / 3 - r2) * 6 : e2;
}
function de(e2, t, r2) {
  let n2 = r2 < 0.5 ? r2 * (1 + t) : r2 + t - r2 * t, f3 = 2 * r2 - n2, o = j(f3, n2, e2 + 1 / 3), i2 = j(f3, n2, e2), s = j(f3, n2, e2 - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(i2 * 255) << 16 | Math.round(s * 255) << 8;
}
function y2(e2) {
  let t = parseInt(e2, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function pe(e2) {
  return (parseFloat(e2) % 360 + 360) % 360 / 360;
}
function me(e2) {
  let t = parseFloat(e2);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function z(e2) {
  let t = parseFloat(e2);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function D(e2) {
  let t = be(e2);
  if (t === null)
    return e2;
  t = t || 0;
  let r2 = (t & 4278190080) >>> 24, n2 = (t & 16711680) >>> 16, f3 = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${r2}, ${n2}, ${f3}, ${o})`;
}
var W = (e2, t, r2) => {
  if (l2.fun(e2))
    return e2;
  if (l2.arr(e2))
    return W({ range: e2, output: t, extrapolate: r2 });
  if (l2.str(e2.output[0]))
    return k(e2);
  let n2 = e2, f3 = n2.output, o = n2.range || [0, 1], i2 = n2.extrapolateLeft || n2.extrapolate || "extend", s = n2.extrapolateRight || n2.extrapolate || "extend", x4 = n2.easing || ((a) => a);
  return (a) => {
    let F3 = He(a, o);
    return Ue(a, o[F3], o[F3 + 1], f3[F3], f3[F3 + 1], x4, i2, s, n2.map);
  };
};
function Ue(e2, t, r2, n2, f3, o, i2, s, x4) {
  let a = x4 ? x4(e2) : e2;
  if (a < t) {
    if (i2 === "identity")
      return a;
    i2 === "clamp" && (a = t);
  }
  if (a > r2) {
    if (s === "identity")
      return a;
    s === "clamp" && (a = r2);
  }
  return n2 === f3 ? n2 : t === r2 ? e2 <= t ? n2 : f3 : (t === -1 / 0 ? a = -a : r2 === 1 / 0 ? a = a - t : a = (a - t) / (r2 - t), a = o(a), n2 === -1 / 0 ? a = -a : f3 === 1 / 0 ? a = a + n2 : a = a * (f3 - n2) + n2, a);
}
function He(e2, t) {
  for (var r2 = 1; r2 < t.length - 1 && !(t[r2] >= e2); ++r2)
    ;
  return r2 - 1;
}
var Be = (e2, t = "end") => (r2) => {
  r2 = t === "end" ? Math.min(r2, 0.999) : Math.max(r2, 1e-3);
  let n2 = r2 * e2, f3 = t === "end" ? Math.floor(n2) : Math.ceil(n2);
  return ne(0, 1, f3 / e2);
};
var P = 1.70158;
var L = P * 1.525;
var xe = P + 1;
var he = 2 * Math.PI / 3;
var ye = 2 * Math.PI / 4.5;
var V = (e2) => e2 < 1 / 2.75 ? 7.5625 * e2 * e2 : e2 < 2 / 2.75 ? 7.5625 * (e2 -= 1.5 / 2.75) * e2 + 0.75 : e2 < 2.5 / 2.75 ? 7.5625 * (e2 -= 2.25 / 2.75) * e2 + 0.9375 : 7.5625 * (e2 -= 2.625 / 2.75) * e2 + 0.984375;
var Lt = { linear: (e2) => e2, easeInQuad: (e2) => e2 * e2, easeOutQuad: (e2) => 1 - (1 - e2) * (1 - e2), easeInOutQuad: (e2) => e2 < 0.5 ? 2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 2) / 2, easeInCubic: (e2) => e2 * e2 * e2, easeOutCubic: (e2) => 1 - Math.pow(1 - e2, 3), easeInOutCubic: (e2) => e2 < 0.5 ? 4 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 3) / 2, easeInQuart: (e2) => e2 * e2 * e2 * e2, easeOutQuart: (e2) => 1 - Math.pow(1 - e2, 4), easeInOutQuart: (e2) => e2 < 0.5 ? 8 * e2 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 4) / 2, easeInQuint: (e2) => e2 * e2 * e2 * e2 * e2, easeOutQuint: (e2) => 1 - Math.pow(1 - e2, 5), easeInOutQuint: (e2) => e2 < 0.5 ? 16 * e2 * e2 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 5) / 2, easeInSine: (e2) => 1 - Math.cos(e2 * Math.PI / 2), easeOutSine: (e2) => Math.sin(e2 * Math.PI / 2), easeInOutSine: (e2) => -(Math.cos(Math.PI * e2) - 1) / 2, easeInExpo: (e2) => e2 === 0 ? 0 : Math.pow(2, 10 * e2 - 10), easeOutExpo: (e2) => e2 === 1 ? 1 : 1 - Math.pow(2, -10 * e2), easeInOutExpo: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : e2 < 0.5 ? Math.pow(2, 20 * e2 - 10) / 2 : (2 - Math.pow(2, -20 * e2 + 10)) / 2, easeInCirc: (e2) => 1 - Math.sqrt(1 - Math.pow(e2, 2)), easeOutCirc: (e2) => Math.sqrt(1 - Math.pow(e2 - 1, 2)), easeInOutCirc: (e2) => e2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e2 + 2, 2)) + 1) / 2, easeInBack: (e2) => xe * e2 * e2 * e2 - P * e2 * e2, easeOutBack: (e2) => 1 + xe * Math.pow(e2 - 1, 3) + P * Math.pow(e2 - 1, 2), easeInOutBack: (e2) => e2 < 0.5 ? Math.pow(2 * e2, 2) * ((L + 1) * 2 * e2 - L) / 2 : (Math.pow(2 * e2 - 2, 2) * ((L + 1) * (e2 * 2 - 2) + L) + 2) / 2, easeInElastic: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : -Math.pow(2, 10 * e2 - 10) * Math.sin((e2 * 10 - 10.75) * he), easeOutElastic: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : Math.pow(2, -10 * e2) * Math.sin((e2 * 10 - 0.75) * he) + 1, easeInOutElastic: (e2) => e2 === 0 ? 0 : e2 === 1 ? 1 : e2 < 0.5 ? -(Math.pow(2, 20 * e2 - 10) * Math.sin((20 * e2 - 11.125) * ye)) / 2 : Math.pow(2, -20 * e2 + 10) * Math.sin((20 * e2 - 11.125) * ye) / 2 + 1, easeInBounce: (e2) => 1 - V(1 - e2), easeOutBounce: V, easeInOutBounce: (e2) => e2 < 0.5 ? (1 - V(1 - 2 * e2)) / 2 : (1 + V(2 * e2 - 1)) / 2, steps: Be };
var g = Symbol.for("FluidValue.get");
var m2 = Symbol.for("FluidValue.observers");
var Pt = (e2) => !!(e2 && e2[g]);
var ve = (e2) => e2 && e2[g] ? e2[g]() : e2;
var qt = (e2) => e2[m2] || null;
function je(e2, t) {
  e2.eventObserved ? e2.eventObserved(t) : e2(t);
}
function $t(e2, t) {
  let r2 = e2[m2];
  r2 && r2.forEach((n2) => {
    je(n2, t);
  });
}
var _a, _b, _c;
var ge = (_c = class {
  constructor(t) {
    __publicField(this, _a);
    __publicField(this, _b);
    if (!t && !(t = this.get))
      throw Error("Unknown getter");
    De(this, t);
  }
}, _a = g, _b = m2, _c);
var De = (e2, t) => Ee(e2, g, t);
function Gt(e2, t) {
  if (e2[g]) {
    let r2 = e2[m2];
    r2 || Ee(e2, m2, r2 = /* @__PURE__ */ new Set()), r2.has(t) || (r2.add(t), e2.observerAdded && e2.observerAdded(r2.size, t));
  }
  return t;
}
function Qt(e2, t) {
  let r2 = e2[m2];
  if (r2 && r2.has(t)) {
    let n2 = r2.size - 1;
    n2 ? r2.delete(t) : e2[m2] = null, e2.observerRemoved && e2.observerRemoved(n2, t);
  }
}
var Ee = (e2, t, r2) => Object.defineProperty(e2, t, { value: r2, writable: true, configurable: true });
var O = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var Oe = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var K = new RegExp(`(${O.source})(%|[a-z]+)`, "i");
var we = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var b2 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var N = (e2) => {
  let [t, r2] = We(e2);
  if (!t || h2())
    return e2;
  let n2 = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (n2)
    return n2.trim();
  if (r2 && r2.startsWith("--")) {
    let f3 = window.getComputedStyle(document.documentElement).getPropertyValue(r2);
    return f3 || e2;
  } else {
    if (r2 && b2.test(r2))
      return N(r2);
    if (r2)
      return r2;
  }
  return e2;
};
var We = (e2) => {
  let t = b2.exec(e2);
  if (!t)
    return [,];
  let [, r2, n2] = t;
  return [r2, n2];
};
var _;
var Ke = (e2, t, r2, n2, f3) => `rgba(${Math.round(t)}, ${Math.round(r2)}, ${Math.round(n2)}, ${f3})`;
var Xt = (e2) => {
  _ || (_ = c2 ? new RegExp(`(${Object.keys(c2).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e2.output.map((o) => ve(o).replace(b2, N).replace(Oe, D).replace(_, D)), r2 = t.map((o) => o.match(O).map(Number)), f3 = r2[0].map((o, i2) => r2.map((s) => {
    if (!(i2 in s))
      throw Error('The arity of each "output" value must be equal');
    return s[i2];
  })).map((o) => W({ ...e2, output: o }));
  return (o) => {
    var _a2;
    let i2 = !K.test(t[0]) && ((_a2 = t.find((x4) => K.test(x4))) == null ? void 0 : _a2.replace(O, "")), s = 0;
    return t[0].replace(O, () => `${f3[s++](o)}${i2 || ""}`).replace(we, Ke);
  };
};
var Z = "react-spring: ";
var Te = (e2) => {
  let t = e2, r2 = false;
  if (typeof t != "function")
    throw new TypeError(`${Z}once requires a function parameter`);
  return (...n2) => {
    r2 || (t(...n2), r2 = true);
  };
};
var Ne = Te(console.warn);
function Jt() {
  Ne(`${Z}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var _e = Te(console.warn);
function er() {
  _e(`${Z}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function or(e2) {
  return l2.str(e2) && (e2[0] == "#" || /\d/.test(e2) || !h2() && b2.test(e2) || e2 in (c2 || {}));
}
var v2;
var q = /* @__PURE__ */ new WeakMap();
var Ze = (e2) => e2.forEach(({ target: t, contentRect: r2 }) => {
  var _a2;
  return (_a2 = q.get(t)) == null ? void 0 : _a2.forEach((n2) => n2(r2));
});
function Fe(e2, t) {
  v2 || typeof ResizeObserver < "u" && (v2 = new ResizeObserver(Ze));
  let r2 = q.get(t);
  return r2 || (r2 = /* @__PURE__ */ new Set(), q.set(t, r2)), r2.add(e2), v2 && v2.observe(t), () => {
    let n2 = q.get(t);
    n2 && (n2.delete(e2), !n2.size && v2 && v2.unobserve(t));
  };
}
var $ = /* @__PURE__ */ new Set();
var w2;
var Xe = () => {
  let e2 = () => {
    $.forEach((t) => t({ width: window.innerWidth, height: window.innerHeight }));
  };
  return window.addEventListener("resize", e2), () => {
    window.removeEventListener("resize", e2);
  };
};
var Ie = (e2) => ($.add(e2), w2 || (w2 = Xe()), () => {
  $.delete(e2), !$.size && w2 && (w2(), w2 = void 0);
});
var ke = (e2, { container: t = document.documentElement } = {}) => t === document.documentElement ? Ie(e2) : Fe(e2, t);
var Se = (e2, t, r2) => t - e2 === 0 ? 1 : (r2 - e2) / (t - e2);
var Ye = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
var G = class {
  constructor(t, r2) {
    __publicField(this, "callback");
    __publicField(this, "container");
    __publicField(this, "info");
    __publicField(this, "createAxis", () => ({ current: 0, progress: 0, scrollLength: 0 }));
    __publicField(this, "updateAxis", (t) => {
      let r2 = this.info[t], { length: n2, position: f3 } = Ye[t];
      r2.current = this.container[`scroll${f3}`], r2.scrollLength = this.container["scroll" + n2] - this.container["client" + n2], r2.progress = Se(0, r2.scrollLength, r2.current);
    });
    __publicField(this, "update", () => {
      this.updateAxis("x"), this.updateAxis("y");
    });
    __publicField(this, "sendEvent", () => {
      this.callback(this.info);
    });
    __publicField(this, "advance", () => {
      this.update(), this.sendEvent();
    });
    this.callback = t, this.container = r2, this.info = { time: 0, x: this.createAxis(), y: this.createAxis() };
  }
};
var T2 = /* @__PURE__ */ new WeakMap();
var Ae = /* @__PURE__ */ new WeakMap();
var X = /* @__PURE__ */ new WeakMap();
var Me = (e2) => e2 === document.documentElement ? window : e2;
var yr = (e2, { container: t = document.documentElement } = {}) => {
  let r2 = X.get(t);
  r2 || (r2 = /* @__PURE__ */ new Set(), X.set(t, r2));
  let n2 = new G(e2, t);
  if (r2.add(n2), !T2.has(t)) {
    let o = () => (r2 == null ? void 0 : r2.forEach((s) => s.advance()), true);
    T2.set(t, o);
    let i2 = Me(t);
    window.addEventListener("resize", o, { passive: true }), t !== document.documentElement && Ae.set(t, ke(o, { container: t })), i2.addEventListener("scroll", o, { passive: true });
  }
  let f3 = T2.get(t);
  return n(f3), () => {
    var _a2;
    n.cancel(f3);
    let o = X.get(t);
    if (!o || (o.delete(n2), o.size))
      return;
    let i2 = T2.get(t);
    T2.delete(t), i2 && (Me(t).removeEventListener("scroll", i2), window.removeEventListener("resize", i2), (_a2 = Ae.get(t)) == null ? void 0 : _a2());
  };
};
function Er(e2) {
  let t = (0, import_react.useRef)(null);
  return t.current === null && (t.current = e2()), t.current;
}
var Q2 = h2() ? import_react4.useEffect : import_react4.useLayoutEffect;
var Ce = () => {
  let e2 = (0, import_react3.useRef)(false);
  return Q2(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
};
function Mr() {
  let e2 = (0, import_react2.useState)()[1], t = Ce();
  return () => {
    t.current && e2(Math.random());
  };
}
function Lr(e2, t) {
  let [r2] = (0, import_react5.useState)(() => ({ inputs: t, result: e2() })), n2 = (0, import_react5.useRef)(), f3 = n2.current, o = f3;
  return o ? t && o.inputs && it(t, o.inputs) || (o = { inputs: t, result: e2() }) : o = r2, (0, import_react5.useEffect)(() => {
    n2.current = o, f3 == r2 && (r2.inputs = r2.result = void 0);
  }, [o]), o.result;
}
function it(e2, t) {
  if (e2.length !== t.length)
    return false;
  for (let r2 = 0; r2 < e2.length; r2++)
    if (e2[r2] !== t[r2])
      return false;
  return true;
}
var $r = (e2) => (0, import_react6.useEffect)(e2, ut);
var ut = [];
function Ur(e2) {
  let t = (0, import_react7.useRef)();
  return (0, import_react7.useEffect)(() => {
    t.current = e2;
  }), t.current;
}
var Wr = () => {
  let [e2, t] = (0, import_react8.useState)(null);
  return Q2(() => {
    let r2 = window.matchMedia("(prefers-reduced-motion)"), n2 = (f3) => {
      t(f3.matches), U({ skipAnimation: f3.matches });
    };
    return n2(r2), r2.addEventListener("change", n2), () => {
      r2.removeEventListener("change", n2);
    };
  }, []), e2;
};

// node_modules/@react-spring/core/dist/esm/index.js
var import_react10 = __toESM(require_react());

// node_modules/@react-spring/animated/dist/esm/index.js
var O2 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var h3 = Symbol.for("Animated:node");
var v3 = (e2) => !!e2 && e2[h3] === e2;
var k2 = (e2) => e2 && e2[h3];
var D2 = (e2, t) => mt(e2, h3, t);
var F = (e2) => e2 && e2[h3] && e2[h3].getPayload();
var c3 = class {
  constructor() {
    __publicField(this, "payload");
    D2(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
};
var l3 = class extends c3 {
  constructor(r2) {
    super();
    __publicField(this, "done", true);
    __publicField(this, "elapsedTime");
    __publicField(this, "lastPosition");
    __publicField(this, "lastVelocity");
    __publicField(this, "v0");
    __publicField(this, "durationProgress", 0);
    this._value = r2;
    l2.num(this._value) && (this.lastPosition = this._value);
  }
  static create(r2) {
    return new l3(r2);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(r2, n2) {
    return l2.num(r2) && (this.lastPosition = r2, n2 && (r2 = Math.round(r2 / n2) * n2, this.done && (this.lastPosition = r2))), this._value === r2 ? false : (this._value = r2, true);
  }
  reset() {
    let { done: r2 } = this;
    this.done = false, l2.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, r2 && (this.lastVelocity = null), this.v0 = null);
  }
};
var d3 = class extends l3 {
  constructor(t) {
    super(0);
    __publicField(this, "_string", null);
    __publicField(this, "_toString");
    this._toString = W({ output: [t, t] });
  }
  static create(t) {
    return new d3(t);
  }
  getValue() {
    let t = this._string;
    return t ?? (this._string = this._toString(this._value));
  }
  setValue(t) {
    if (l2.str(t)) {
      if (t == this._string)
        return false;
      this._string = t, this._value = 1;
    } else if (super.setValue(t))
      this._string = null;
    else
      return false;
    return true;
  }
  reset(t) {
    t && (this._toString = W({ output: [this.getValue(), t] })), this._value = 0, super.reset();
  }
};
var f2 = { dependencies: null };
var u3 = class extends c3 {
  constructor(r2) {
    super();
    this.source = r2;
    this.setValue(r2);
  }
  getValue(r2) {
    let n2 = {};
    return xt(this.source, (a, i2) => {
      v3(a) ? n2[i2] = a.getValue(r2) : Pt(a) ? n2[i2] = ve(a) : r2 || (n2[i2] = a);
    }), n2;
  }
  setValue(r2) {
    this.source = r2, this.payload = this._makePayload(r2);
  }
  reset() {
    this.payload && Ve(this.payload, (r2) => r2.reset());
  }
  _makePayload(r2) {
    if (r2) {
      let n2 = /* @__PURE__ */ new Set();
      return xt(r2, this._addToPayload, n2), Array.from(n2);
    }
  }
  _addToPayload(r2) {
    f2.dependencies && Pt(r2) && f2.dependencies.add(r2);
    let n2 = F(r2);
    n2 && Ve(n2, (a) => this.add(a));
  }
};
var y3 = class extends u3 {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new y3(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    let r2 = this.getPayload();
    return t.length == r2.length ? r2.map((n2, a) => n2.setValue(t[a])).some(Boolean) : (super.setValue(t.map(z2)), true);
  }
};
function z2(e2) {
  return (or(e2) ? d3 : l3).create(e2);
}
function Le2(e2) {
  let t = k2(e2);
  return t ? t.constructor : l2.arr(e2) ? y3 : or(e2) ? d3 : l3;
}
var x2 = (e2, t) => {
  let r2 = !l2.fun(e2) || e2.prototype && e2.prototype.isReactComponent;
  return (0, import_react9.forwardRef)((n2, a) => {
    let i2 = (0, import_react9.useRef)(null), o = r2 && (0, import_react9.useCallback)((s) => {
      i2.current = ae2(a, s);
    }, [a]), [m3, T3] = ne2(n2, t), W3 = Mr(), P2 = () => {
      let s = i2.current;
      if (r2 && !s)
        return;
      (s ? t.applyAnimatedValues(s, m3.getValue(true)) : false) === false && W3();
    }, _3 = new b3(P2, T3), p3 = (0, import_react9.useRef)();
    Q2(() => (p3.current = _3, Ve(T3, (s) => Gt(s, _3)), () => {
      p3.current && (Ve(p3.current.deps, (s) => Qt(s, p3.current)), n.cancel(p3.current.update));
    })), (0, import_react9.useEffect)(P2, []), $r(() => () => {
      let s = p3.current;
      Ve(s.deps, (S2) => Qt(S2, s));
    });
    let $3 = t.getComponentProps(m3.getValue());
    return O2.createElement(e2, { ...$3, ref: o });
  });
};
var b3 = class {
  constructor(t, r2) {
    this.update = t;
    this.deps = r2;
  }
  eventObserved(t) {
    t.type == "change" && n.write(this.update);
  }
};
function ne2(e2, t) {
  let r2 = /* @__PURE__ */ new Set();
  return f2.dependencies = r2, e2.style && (e2 = { ...e2, style: t.createAnimatedStyle(e2.style) }), e2 = new u3(e2), f2.dependencies = null, [e2, r2];
}
function ae2(e2, t) {
  return e2 && (l2.fun(e2) ? e2(t) : e2.current = t), t;
}
var j2 = Symbol.for("AnimatedComponent");
var Ke2 = (e2, { applyAnimatedValues: t = () => false, createAnimatedStyle: r2 = (a) => new u3(a), getComponentProps: n2 = (a) => a } = {}) => {
  let a = { applyAnimatedValues: t, createAnimatedStyle: r2, getComponentProps: n2 }, i2 = (o) => {
    let m3 = I(o) || "Anonymous";
    return l2.str(o) ? o = i2[o] || (i2[o] = x2(o, a)) : o = o[j2] || (o[j2] = x2(o, a)), o.displayName = `Animated(${m3})`, o;
  };
  return xt(e2, (o, m3) => {
    l2.arr(e2) && (m3 = I(o)), i2[m3] = i2(o);
  }), { animated: i2 };
};
var I = (e2) => l2.str(e2) ? e2 : e2 && l2.str(e2.displayName) ? e2.displayName : l2.fun(e2) && e2.name || null;

// node_modules/@react-spring/core/dist/esm/index.js
var Be2 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var Oe2 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());

// node_modules/@react-spring/types/dist/esm/index.js
var e = class {
  constructor() {
    __publicField(this, "_");
  }
};

// node_modules/@react-spring/core/dist/esm/index.js
function I2(t, ...e2) {
  return l2.fun(t) ? t(...e2) : t;
}
var te2 = (t, e2) => t === true || !!(e2 && t && (l2.fun(t) ? t(e2) : ht(t).includes(e2)));
var et2 = (t, e2) => l2.obj(t) ? e2 && t[e2] : t;
var ke2 = (t, e2) => t.default === true ? t[e2] : t.default ? t.default[e2] : void 0;
var nn = (t) => t;
var ne3 = (t, e2 = nn) => {
  let n2 = rn;
  t.default && t.default !== true && (t = t.default, n2 = Object.keys(t));
  let r2 = {};
  for (let o of n2) {
    let s = e2(t[o], o);
    l2.und(s) || (r2[o] = s);
  }
  return r2;
};
var rn = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
var on = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
function sn(t) {
  let e2 = {}, n2 = 0;
  if (xt(t, (r2, o) => {
    on[o] || (e2[o] = r2, n2++);
  }), n2)
    return e2;
}
function de2(t) {
  let e2 = sn(t);
  if (e2) {
    let n2 = { to: e2 };
    return xt(t, (r2, o) => o in e2 || (n2[o] = r2)), n2;
  }
  return { ...t };
}
function me2(t) {
  return t = ve(t), l2.arr(t) ? t.map(me2) : or(t) ? p2.createStringInterpolator({ range: [0, 1], output: [t, t] })(1) : t;
}
function Ue2(t) {
  for (let e2 in t)
    return true;
  return false;
}
function Ee2(t) {
  return l2.fun(t) || l2.arr(t) && l2.obj(t[0]);
}
function xe2(t, e2) {
  var _a2;
  (_a2 = t.ref) == null ? void 0 : _a2.delete(t), e2 == null ? void 0 : e2.delete(t);
}
function he2(t, e2) {
  var _a2;
  e2 && t.ref !== e2 && ((_a2 = t.ref) == null ? void 0 : _a2.delete(t), e2.add(t), t.ref = e2);
}
function wr(t, e2, n2 = 1e3) {
  Q2(() => {
    if (e2) {
      let r2 = 0;
      Ve(t, (o, s) => {
        let i2 = o.current;
        if (i2.length) {
          let a = n2 * e2[s];
          isNaN(a) ? a = r2 : r2 = a, Ve(i2, (u4) => {
            Ve(u4.queue, (p3) => {
              let f3 = p3.delay;
              p3.delay = (d4) => a + I2(f3 || 0, d4);
            });
          }), o.start();
        }
      });
    } else {
      let r2 = Promise.resolve();
      Ve(t, (o) => {
        let s = o.current;
        if (s.length) {
          let i2 = s.map((a) => {
            let u4 = a.queue;
            return a.queue = [], u4;
          });
          r2 = r2.then(() => (Ve(s, (a, u4) => Ve(i2[u4] || [], (p3) => a.queue.push(p3))), Promise.all(o.start())));
        }
      });
    }
  });
}
var mt2 = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } };
var tt2 = { ...mt2.default, mass: 1, damping: 1, easing: Lt.linear, clamp: false };
var we2 = class {
  constructor() {
    __publicField(this, "tension");
    __publicField(this, "friction");
    __publicField(this, "frequency");
    __publicField(this, "damping");
    __publicField(this, "mass");
    __publicField(this, "velocity", 0);
    __publicField(this, "restVelocity");
    __publicField(this, "precision");
    __publicField(this, "progress");
    __publicField(this, "duration");
    __publicField(this, "easing");
    __publicField(this, "clamp");
    __publicField(this, "bounce");
    __publicField(this, "decay");
    __publicField(this, "round");
    Object.assign(this, tt2);
  }
};
function gt(t, e2, n2) {
  n2 && (n2 = { ...n2 }, ht2(n2, e2), e2 = { ...n2, ...e2 }), ht2(t, e2), Object.assign(t, e2);
  for (let i2 in tt2)
    t[i2] == null && (t[i2] = tt2[i2]);
  let { frequency: r2, damping: o } = t, { mass: s } = t;
  return l2.und(r2) || (r2 < 0.01 && (r2 = 0.01), o < 0 && (o = 0), t.tension = Math.pow(2 * Math.PI / r2, 2) * s, t.friction = 4 * Math.PI * o * s / r2), t;
}
function ht2(t, e2) {
  if (!l2.und(e2.decay))
    t.duration = void 0;
  else {
    let n2 = !l2.und(e2.tension) || !l2.und(e2.friction);
    (n2 || !l2.und(e2.frequency) || !l2.und(e2.damping) || !l2.und(e2.mass)) && (t.duration = void 0, t.decay = void 0), n2 && (t.frequency = void 0);
  }
}
var yt2 = [];
var Le3 = class {
  constructor() {
    __publicField(this, "changed", false);
    __publicField(this, "values", yt2);
    __publicField(this, "toValues", null);
    __publicField(this, "fromValues", yt2);
    __publicField(this, "to");
    __publicField(this, "from");
    __publicField(this, "config", new we2());
    __publicField(this, "immediate", false);
  }
};
function Me2(t, { key: e2, props: n2, defaultProps: r2, state: o, actions: s }) {
  return new Promise((i2, a) => {
    let u4, p3, f3 = te2(n2.cancel ?? (r2 == null ? void 0 : r2.cancel), e2);
    if (f3)
      b4();
    else {
      l2.und(n2.pause) || (o.paused = te2(n2.pause, e2));
      let c5 = r2 == null ? void 0 : r2.pause;
      c5 !== true && (c5 = o.paused || te2(c5, e2)), u4 = I2(n2.delay || 0, e2), c5 ? (o.resumeQueue.add(m3), s.pause()) : (s.resume(), m3());
    }
    function d4() {
      o.resumeQueue.add(m3), o.timeouts.delete(p3), p3.cancel(), u4 = p3.time - n.now();
    }
    function m3() {
      u4 > 0 && !p2.skipAnimation ? (o.delayed = true, p3 = n.setTimeout(b4, u4), o.pauseQueue.add(d4), o.timeouts.add(p3)) : b4();
    }
    function b4() {
      o.delayed && (o.delayed = false), o.pauseQueue.delete(d4), o.timeouts.delete(p3), t <= (o.cancelId || 0) && (f3 = true);
      try {
        s.start({ ...n2, callId: t, cancel: f3 }, i2);
      } catch (c5) {
        a(c5);
      }
    }
  });
}
var be2 = (t, e2) => e2.length == 1 ? e2[0] : e2.some((n2) => n2.cancelled) ? q2(t.get()) : e2.every((n2) => n2.noop) ? nt2(t.get()) : E2(t.get(), e2.every((n2) => n2.finished));
var nt2 = (t) => ({ value: t, noop: true, finished: true, cancelled: false });
var E2 = (t, e2, n2 = false) => ({ value: t, finished: e2, cancelled: n2 });
var q2 = (t) => ({ value: t, cancelled: true, finished: false });
function De2(t, e2, n2, r2) {
  let { callId: o, parentId: s, onRest: i2 } = e2, { asyncTo: a, promise: u4 } = n2;
  return !s && t === a && !e2.reset ? u4 : n2.promise = (async () => {
    n2.asyncId = o, n2.asyncTo = t;
    let p3 = ne3(e2, (l4, h5) => h5 === "onRest" ? void 0 : l4), f3, d4, m3 = new Promise((l4, h5) => (f3 = l4, d4 = h5)), b4 = (l4) => {
      let h5 = o <= (n2.cancelId || 0) && q2(r2) || o !== n2.asyncId && E2(r2, false);
      if (h5)
        throw l4.result = h5, d4(l4), l4;
    }, c5 = (l4, h5) => {
      let g3 = new Ae2(), x4 = new Ne2();
      return (async () => {
        if (p2.skipAnimation)
          throw oe2(n2), x4.result = E2(r2, false), d4(x4), x4;
        b4(g3);
        let S2 = l2.obj(l4) ? { ...l4 } : { ...h5, to: l4 };
        S2.parentId = o, xt(p3, (V3, _3) => {
          l2.und(S2[_3]) && (S2[_3] = V3);
        });
        let A2 = await r2.start(S2);
        return b4(g3), n2.paused && await new Promise((V3) => {
          n2.resumeQueue.add(V3);
        }), A2;
      })();
    }, P2;
    if (p2.skipAnimation)
      return oe2(n2), E2(r2, false);
    try {
      let l4;
      l2.arr(t) ? l4 = (async (h5) => {
        for (let g3 of h5)
          await c5(g3);
      })(t) : l4 = Promise.resolve(t(c5, r2.stop.bind(r2))), await Promise.all([l4.then(f3), m3]), P2 = E2(r2.get(), true, false);
    } catch (l4) {
      if (l4 instanceof Ae2)
        P2 = l4.result;
      else if (l4 instanceof Ne2)
        P2 = l4.result;
      else
        throw l4;
    } finally {
      o == n2.asyncId && (n2.asyncId = s, n2.asyncTo = s ? a : void 0, n2.promise = s ? u4 : void 0);
    }
    return l2.fun(i2) && n.batchedUpdates(() => {
      i2(P2, r2, r2.item);
    }), P2;
  })();
}
function oe2(t, e2) {
  Pe(t.timeouts, (n2) => n2.cancel()), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e2 && (t.cancelId = e2);
}
var Ae2 = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    __publicField(this, "result");
  }
};
var Ne2 = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    __publicField(this, "result");
  }
};
var Re = (t) => t instanceof X3;
var Sn = 1;
var X3 = class extends ge {
  constructor() {
    super(...arguments);
    __publicField(this, "id", Sn++);
    __publicField(this, "_priority", 0);
  }
  get priority() {
    return this._priority;
  }
  set priority(e2) {
    this._priority != e2 && (this._priority = e2, this._onPriorityChange(e2));
  }
  get() {
    let e2 = k2(this);
    return e2 && e2.getValue();
  }
  to(...e2) {
    return p2.to(this, e2);
  }
  interpolate(...e2) {
    return Jt(), p2.to(this, e2);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e2) {
    e2 == 1 && this._attach();
  }
  observerRemoved(e2) {
    e2 == 0 && this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(e2, n2 = false) {
    $t(this, { type: "change", parent: this, value: e2, idle: n2 });
  }
  _onPriorityChange(e2) {
    this.idle || qe.sort(this), $t(this, { type: "priority", parent: this, priority: e2 });
  }
};
var se2 = Symbol.for("SpringPhase");
var bt2 = 1;
var rt2 = 2;
var ot2 = 4;
var qe2 = (t) => (t[se2] & bt2) > 0;
var Q4 = (t) => (t[se2] & rt2) > 0;
var ye2 = (t) => (t[se2] & ot2) > 0;
var st2 = (t, e2) => e2 ? t[se2] |= rt2 | bt2 : t[se2] &= ~rt2;
var it2 = (t, e2) => e2 ? t[se2] |= ot2 : t[se2] &= ~ot2;
var ue2 = class extends X3 {
  constructor(e2, n2) {
    super();
    __publicField(this, "key");
    __publicField(this, "animation", new Le3());
    __publicField(this, "queue");
    __publicField(this, "defaultProps", {});
    __publicField(this, "_state", { paused: false, delayed: false, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    __publicField(this, "_pendingCalls", /* @__PURE__ */ new Set());
    __publicField(this, "_lastCallId", 0);
    __publicField(this, "_lastToId", 0);
    __publicField(this, "_memoizedDuration", 0);
    if (!l2.und(e2) || !l2.und(n2)) {
      let r2 = l2.obj(e2) ? { ...e2 } : { ...n2, from: e2 };
      l2.und(r2.default) && (r2.default = true), this.start(r2);
    }
  }
  get idle() {
    return !(Q4(this) || this._state.asyncTo) || ye2(this);
  }
  get goal() {
    return ve(this.animation.to);
  }
  get velocity() {
    let e2 = k2(this);
    return e2 instanceof l3 ? e2.lastVelocity || 0 : e2.getPayload().map((n2) => n2.lastVelocity || 0);
  }
  get hasAnimated() {
    return qe2(this);
  }
  get isAnimating() {
    return Q4(this);
  }
  get isPaused() {
    return ye2(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(e2) {
    let n2 = true, r2 = false, o = this.animation, { toValues: s } = o, { config: i2 } = o, a = F(o.to);
    !a && Pt(o.to) && (s = ht(ve(o.to))), o.values.forEach((f3, d4) => {
      if (f3.done)
        return;
      let m3 = f3.constructor == d3 ? 1 : a ? a[d4].lastPosition : s[d4], b4 = o.immediate, c5 = m3;
      if (!b4) {
        if (c5 = f3.lastPosition, i2.tension <= 0) {
          f3.done = true;
          return;
        }
        let P2 = f3.elapsedTime += e2, l4 = o.fromValues[d4], h5 = f3.v0 != null ? f3.v0 : f3.v0 = l2.arr(i2.velocity) ? i2.velocity[d4] : i2.velocity, g3, x4 = i2.precision || (l4 == m3 ? 5e-3 : Math.min(1, Math.abs(m3 - l4) * 1e-3));
        if (l2.und(i2.duration))
          if (i2.decay) {
            let S2 = i2.decay === true ? 0.998 : i2.decay, A2 = Math.exp(-(1 - S2) * P2);
            c5 = l4 + h5 / (1 - S2) * (1 - A2), b4 = Math.abs(f3.lastPosition - c5) <= x4, g3 = h5 * A2;
          } else {
            g3 = f3.lastVelocity == null ? h5 : f3.lastVelocity;
            let S2 = i2.restVelocity || x4 / 10, A2 = i2.clamp ? 0 : i2.bounce, V3 = !l2.und(A2), _3 = l4 == m3 ? f3.v0 > 0 : l4 < m3, v5, w3 = false, C3 = 1, $3 = Math.ceil(e2 / C3);
            for (let L3 = 0; L3 < $3 && (v5 = Math.abs(g3) > S2, !(!v5 && (b4 = Math.abs(m3 - c5) <= x4, b4))); ++L3) {
              V3 && (w3 = c5 == m3 || c5 > m3 == _3, w3 && (g3 = -g3 * A2, c5 = m3));
              let N3 = -i2.tension * 1e-6 * (c5 - m3), y5 = -i2.friction * 1e-3 * g3, T3 = (N3 + y5) / i2.mass;
              g3 = g3 + T3 * C3, c5 = c5 + g3 * C3;
            }
          }
        else {
          let S2 = 1;
          i2.duration > 0 && (this._memoizedDuration !== i2.duration && (this._memoizedDuration = i2.duration, f3.durationProgress > 0 && (f3.elapsedTime = i2.duration * f3.durationProgress, P2 = f3.elapsedTime += e2)), S2 = (i2.progress || 0) + P2 / this._memoizedDuration, S2 = S2 > 1 ? 1 : S2 < 0 ? 0 : S2, f3.durationProgress = S2), c5 = l4 + i2.easing(S2) * (m3 - l4), g3 = (c5 - f3.lastPosition) / e2, b4 = S2 == 1;
        }
        f3.lastVelocity = g3, Number.isNaN(c5) && (console.warn("Got NaN while animating:", this), b4 = true);
      }
      a && !a[d4].done && (b4 = false), b4 ? f3.done = true : n2 = false, f3.setValue(c5, i2.round) && (r2 = true);
    });
    let u4 = k2(this), p3 = u4.getValue();
    if (n2) {
      let f3 = ve(o.to);
      (p3 !== f3 || r2) && !i2.decay ? (u4.setValue(f3), this._onChange(f3)) : r2 && i2.decay && this._onChange(p3), this._stop();
    } else
      r2 && this._onChange(p3);
  }
  set(e2) {
    return n.batchedUpdates(() => {
      this._stop(), this._focus(e2), this._set(e2);
    }), this;
  }
  pause() {
    this._update({ pause: true });
  }
  resume() {
    this._update({ pause: false });
  }
  finish() {
    if (Q4(this)) {
      let { to: e2, config: n2 } = this.animation;
      n.batchedUpdates(() => {
        this._onStart(), n2.decay || this._set(e2, false), this._stop();
      });
    }
    return this;
  }
  update(e2) {
    return (this.queue || (this.queue = [])).push(e2), this;
  }
  start(e2, n2) {
    let r2;
    return l2.und(e2) ? (r2 = this.queue || [], this.queue = []) : r2 = [l2.obj(e2) ? e2 : { ...n2, to: e2 }], Promise.all(r2.map((o) => this._update(o))).then((o) => be2(this, o));
  }
  stop(e2) {
    let { to: n2 } = this.animation;
    return this._focus(this.get()), oe2(this._state, e2 && this._lastCallId), n.batchedUpdates(() => this._stop(n2, e2)), this;
  }
  reset() {
    this._update({ reset: true });
  }
  eventObserved(e2) {
    e2.type == "change" ? this._start() : e2.type == "priority" && (this.priority = e2.priority + 1);
  }
  _prepareNode(e2) {
    let n2 = this.key || "", { to: r2, from: o } = e2;
    r2 = l2.obj(r2) ? r2[n2] : r2, (r2 == null || Ee2(r2)) && (r2 = void 0), o = l2.obj(o) ? o[n2] : o, o == null && (o = void 0);
    let s = { to: r2, from: o };
    return qe2(this) || (e2.reverse && ([r2, o] = [o, r2]), o = ve(o), l2.und(o) ? k2(this) || this._set(r2) : this._set(o)), s;
  }
  _update({ ...e2 }, n2) {
    let { key: r2, defaultProps: o } = this;
    e2.default && Object.assign(o, ne3(e2, (a, u4) => /^on/.test(u4) ? et2(a, r2) : a)), _t(this, e2, "onProps"), Ie2(this, "onProps", e2, this);
    let s = this._prepareNode(e2);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let i2 = this._state;
    return Me2(++this._lastCallId, { key: r2, props: e2, defaultProps: o, state: i2, actions: { pause: () => {
      ye2(this) || (it2(this, true), yt(i2.pauseQueue), Ie2(this, "onPause", E2(this, Ce2(this, this.animation.to)), this));
    }, resume: () => {
      ye2(this) && (it2(this, false), Q4(this) && this._resume(), yt(i2.resumeQueue), Ie2(this, "onResume", E2(this, Ce2(this, this.animation.to)), this));
    }, start: this._merge.bind(this, s) } }).then((a) => {
      if (e2.loop && a.finished && !(n2 && a.noop)) {
        let u4 = at2(e2);
        if (u4)
          return this._update(u4, true);
      }
      return a;
    });
  }
  _merge(e2, n2, r2) {
    if (n2.cancel)
      return this.stop(true), r2(q2(this));
    let o = !l2.und(e2.to), s = !l2.und(e2.from);
    if (o || s)
      if (n2.callId > this._lastToId)
        this._lastToId = n2.callId;
      else
        return r2(q2(this));
    let { key: i2, defaultProps: a, animation: u4 } = this, { to: p3, from: f3 } = u4, { to: d4 = p3, from: m3 = f3 } = e2;
    s && !o && (!n2.default || l2.und(d4)) && (d4 = m3), n2.reverse && ([d4, m3] = [m3, d4]);
    let b4 = !bt(m3, f3);
    b4 && (u4.from = m3), m3 = ve(m3);
    let c5 = !bt(d4, p3);
    c5 && this._focus(d4);
    let P2 = Ee2(n2.to), { config: l4 } = u4, { decay: h5, velocity: g3 } = l4;
    (o || s) && (l4.velocity = 0), n2.config && !P2 && gt(l4, I2(n2.config, i2), n2.config !== a.config ? I2(a.config, i2) : void 0);
    let x4 = k2(this);
    if (!x4 || l2.und(d4))
      return r2(E2(this, true));
    let S2 = l2.und(n2.reset) ? s && !n2.default : !l2.und(m3) && te2(n2.reset, i2), A2 = S2 ? m3 : this.get(), V3 = me2(d4), _3 = l2.num(V3) || l2.arr(V3) || or(V3), v5 = !P2 && (!_3 || te2(a.immediate || n2.immediate, i2));
    if (c5) {
      let L3 = Le2(d4);
      if (L3 !== x4.constructor)
        if (v5)
          x4 = this._set(V3);
        else
          throw Error(`Cannot animate between ${x4.constructor.name} and ${L3.name}, as the "to" prop suggests`);
    }
    let w3 = x4.constructor, C3 = Pt(d4), $3 = false;
    if (!C3) {
      let L3 = S2 || !qe2(this) && b4;
      (c5 || L3) && ($3 = bt(me2(A2), V3), C3 = !$3), (!bt(u4.immediate, v5) && !v5 || !bt(l4.decay, h5) || !bt(l4.velocity, g3)) && (C3 = true);
    }
    if ($3 && Q4(this) && (u4.changed && !S2 ? C3 = true : C3 || this._stop(p3)), !P2 && ((C3 || Pt(p3)) && (u4.values = x4.getPayload(), u4.toValues = Pt(d4) ? null : w3 == d3 ? [1] : ht(V3)), u4.immediate != v5 && (u4.immediate = v5, !v5 && !S2 && this._set(p3)), C3)) {
      let { onRest: L3 } = u4;
      Ve(_n, (y5) => _t(this, n2, y5));
      let N3 = E2(this, Ce2(this, p3));
      yt(this._pendingCalls, N3), this._pendingCalls.add(r2), u4.changed && n.batchedUpdates(() => {
        var _a2;
        u4.changed = !S2, L3 == null ? void 0 : L3(N3, this), S2 ? I2(a.onRest, N3) : (_a2 = u4.onStart) == null ? void 0 : _a2.call(u4, N3, this);
      });
    }
    S2 && this._set(A2), P2 ? r2(De2(n2.to, n2, this._state, this)) : C3 ? this._start() : Q4(this) && !c5 ? this._pendingCalls.add(r2) : r2(nt2(A2));
  }
  _focus(e2) {
    let n2 = this.animation;
    e2 !== n2.to && (qt(this) && this._detach(), n2.to = e2, qt(this) && this._attach());
  }
  _attach() {
    let e2 = 0, { to: n2 } = this.animation;
    Pt(n2) && (Gt(n2, this), Re(n2) && (e2 = n2.priority + 1)), this.priority = e2;
  }
  _detach() {
    let { to: e2 } = this.animation;
    Pt(e2) && Qt(e2, this);
  }
  _set(e2, n2 = true) {
    let r2 = ve(e2);
    if (!l2.und(r2)) {
      let o = k2(this);
      if (!o || !bt(r2, o.getValue())) {
        let s = Le2(r2);
        !o || o.constructor != s ? D2(this, s.create(r2)) : o.setValue(r2), o && n.batchedUpdates(() => {
          this._onChange(r2, n2);
        });
      }
    }
    return k2(this);
  }
  _onStart() {
    let e2 = this.animation;
    e2.changed || (e2.changed = true, Ie2(this, "onStart", E2(this, Ce2(this, e2.to)), this));
  }
  _onChange(e2, n2) {
    n2 || (this._onStart(), I2(this.animation.onChange, e2, this)), I2(this.defaultProps.onChange, e2, this), super._onChange(e2, n2);
  }
  _start() {
    let e2 = this.animation;
    k2(this).reset(ve(e2.to)), e2.immediate || (e2.fromValues = e2.values.map((n2) => n2.lastPosition)), Q4(this) || (st2(this, true), ye2(this) || this._resume());
  }
  _resume() {
    p2.skipAnimation ? this.finish() : qe.start(this);
  }
  _stop(e2, n2) {
    if (Q4(this)) {
      st2(this, false);
      let r2 = this.animation;
      Ve(r2.values, (s) => {
        s.done = true;
      }), r2.toValues && (r2.onChange = r2.onPause = r2.onResume = void 0), $t(this, { type: "idle", parent: this });
      let o = n2 ? q2(this.get()) : E2(this.get(), Ce2(this, e2 ?? r2.to));
      yt(this._pendingCalls, o), r2.changed && (r2.changed = false, Ie2(this, "onRest", o, this));
    }
  }
};
function Ce2(t, e2) {
  let n2 = me2(e2), r2 = me2(t.get());
  return bt(r2, n2);
}
function at2(t, e2 = t.loop, n2 = t.to) {
  let r2 = I2(e2);
  if (r2) {
    let o = r2 !== true && de2(r2), s = (o || t).reverse, i2 = !o || o.reset;
    return Pe2({ ...t, loop: e2, default: false, pause: void 0, to: !s || Ee2(n2) ? n2 : void 0, from: i2 ? t.from : void 0, reset: i2, ...o });
  }
}
function Pe2(t) {
  let { to: e2, from: n2 } = t = de2(t), r2 = /* @__PURE__ */ new Set();
  return l2.obj(e2) && Vt(e2, r2), l2.obj(n2) && Vt(n2, r2), t.keys = r2.size ? Array.from(r2) : null, t;
}
function Ot(t) {
  let e2 = Pe2(t);
  return l2.und(e2.default) && (e2.default = ne3(e2)), e2;
}
function Vt(t, e2) {
  xt(t, (n2, r2) => n2 != null && e2.add(r2));
}
var _n = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function _t(t, e2, n2) {
  t.animation[n2] = e2[n2] !== ke2(e2, n2) ? et2(e2[n2], t.key) : void 0;
}
function Ie2(t, e2, ...n2) {
  var _a2, _b2, _c2, _d;
  (_b2 = (_a2 = t.animation)[e2]) == null ? void 0 : _b2.call(_a2, ...n2), (_d = (_c2 = t.defaultProps)[e2]) == null ? void 0 : _d.call(_c2, ...n2);
}
var Fn = ["onStart", "onChange", "onRest"];
var kn = 1;
var le2 = class {
  constructor(e2, n2) {
    __publicField(this, "id", kn++);
    __publicField(this, "springs", {});
    __publicField(this, "queue", []);
    __publicField(this, "ref");
    __publicField(this, "_flush");
    __publicField(this, "_initialProps");
    __publicField(this, "_lastAsyncId", 0);
    __publicField(this, "_active", /* @__PURE__ */ new Set());
    __publicField(this, "_changed", /* @__PURE__ */ new Set());
    __publicField(this, "_started", false);
    __publicField(this, "_item");
    __publicField(this, "_state", { paused: false, pauseQueue: /* @__PURE__ */ new Set(), resumeQueue: /* @__PURE__ */ new Set(), timeouts: /* @__PURE__ */ new Set() });
    __publicField(this, "_events", { onStart: /* @__PURE__ */ new Map(), onChange: /* @__PURE__ */ new Map(), onRest: /* @__PURE__ */ new Map() });
    this._onFrame = this._onFrame.bind(this), n2 && (this._flush = n2), e2 && this.start({ default: true, ...e2 });
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((e2) => e2.idle && !e2.isDelayed && !e2.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(e2) {
    this._item = e2;
  }
  get() {
    let e2 = {};
    return this.each((n2, r2) => e2[r2] = n2.get()), e2;
  }
  set(e2) {
    for (let n2 in e2) {
      let r2 = e2[n2];
      l2.und(r2) || this.springs[n2].set(r2);
    }
  }
  update(e2) {
    return e2 && this.queue.push(Pe2(e2)), this;
  }
  start(e2) {
    let { queue: n2 } = this;
    return e2 ? n2 = ht(e2).map(Pe2) : this.queue = [], this._flush ? this._flush(this, n2) : (jt(this, n2), ze2(this, n2));
  }
  stop(e2, n2) {
    if (e2 !== !!e2 && (n2 = e2), n2) {
      let r2 = this.springs;
      Ve(ht(n2), (o) => r2[o].stop(!!e2));
    } else
      oe2(this._state, this._lastAsyncId), this.each((r2) => r2.stop(!!e2));
    return this;
  }
  pause(e2) {
    if (l2.und(e2))
      this.start({ pause: true });
    else {
      let n2 = this.springs;
      Ve(ht(e2), (r2) => n2[r2].pause());
    }
    return this;
  }
  resume(e2) {
    if (l2.und(e2))
      this.start({ pause: false });
    else {
      let n2 = this.springs;
      Ve(ht(e2), (r2) => n2[r2].resume());
    }
    return this;
  }
  each(e2) {
    xt(this.springs, e2);
  }
  _onFrame() {
    let { onStart: e2, onChange: n2, onRest: r2 } = this._events, o = this._active.size > 0, s = this._changed.size > 0;
    (o && !this._started || s && !this._started) && (this._started = true, Pe(e2, ([u4, p3]) => {
      p3.value = this.get(), u4(p3, this, this._item);
    }));
    let i2 = !o && this._started, a = s || i2 && r2.size ? this.get() : null;
    s && n2.size && Pe(n2, ([u4, p3]) => {
      p3.value = a, u4(p3, this, this._item);
    }), i2 && (this._started = false, Pe(r2, ([u4, p3]) => {
      p3.value = a, u4(p3, this, this._item);
    }));
  }
  eventObserved(e2) {
    if (e2.type == "change")
      this._changed.add(e2.parent), e2.idle || this._active.add(e2.parent);
    else if (e2.type == "idle")
      this._active.delete(e2.parent);
    else
      return;
    n.onFrame(this._onFrame);
  }
};
function ze2(t, e2) {
  return Promise.all(e2.map((n2) => wt(t, n2))).then((n2) => be2(t, n2));
}
async function wt(t, e2, n2) {
  let { keys: r2, to: o, from: s, loop: i2, onRest: a, onResolve: u4 } = e2, p3 = l2.obj(e2.default) && e2.default;
  i2 && (e2.loop = false), o === false && (e2.to = null), s === false && (e2.from = null);
  let f3 = l2.arr(o) || l2.fun(o) ? o : void 0;
  f3 ? (e2.to = void 0, e2.onRest = void 0, p3 && (p3.onRest = void 0)) : Ve(Fn, (P2) => {
    let l4 = e2[P2];
    if (l2.fun(l4)) {
      let h5 = t._events[P2];
      e2[P2] = ({ finished: g3, cancelled: x4 }) => {
        let S2 = h5.get(l4);
        S2 ? (g3 || (S2.finished = false), x4 && (S2.cancelled = true)) : h5.set(l4, { value: null, finished: g3 || false, cancelled: x4 || false });
      }, p3 && (p3[P2] = e2[P2]);
    }
  });
  let d4 = t._state;
  e2.pause === !d4.paused ? (d4.paused = e2.pause, yt(e2.pause ? d4.pauseQueue : d4.resumeQueue)) : d4.paused && (e2.pause = true);
  let m3 = (r2 || Object.keys(t.springs)).map((P2) => t.springs[P2].start(e2)), b4 = e2.cancel === true || ke2(e2, "cancel") === true;
  (f3 || b4 && d4.asyncId) && m3.push(Me2(++t._lastAsyncId, { props: e2, state: d4, actions: { pause: Y, resume: Y, start(P2, l4) {
    b4 ? (oe2(d4, t._lastAsyncId), l4(q2(t))) : (P2.onRest = a, l4(De2(f3, P2, d4, t)));
  } } })), d4.paused && await new Promise((P2) => {
    d4.resumeQueue.add(P2);
  });
  let c5 = be2(t, await Promise.all(m3));
  if (i2 && c5.finished && !(n2 && c5.noop)) {
    let P2 = at2(e2, i2, o);
    if (P2)
      return jt(t, [P2]), wt(t, P2, true);
  }
  return u4 && n.batchedUpdates(() => u4(c5, t, t.item)), c5;
}
function _e2(t, e2) {
  let n2 = { ...t.springs };
  return e2 && Ve(ht(e2), (r2) => {
    l2.und(r2.keys) && (r2 = Pe2(r2)), l2.obj(r2.to) || (r2 = { ...r2, to: void 0 }), Mt(n2, r2, (o) => Lt2(o));
  }), pt(t, n2), n2;
}
function pt(t, e2) {
  xt(e2, (n2, r2) => {
    t.springs[r2] || (t.springs[r2] = n2, Gt(n2, t));
  });
}
function Lt2(t, e2) {
  let n2 = new ue2();
  return n2.key = t, e2 && Gt(n2, e2), n2;
}
function Mt(t, e2, n2) {
  e2.keys && Ve(e2.keys, (r2) => {
    (t[r2] || (t[r2] = n2(r2)))._prepareNode(e2);
  });
}
function jt(t, e2) {
  Ve(e2, (n2) => {
    Mt(t.springs, n2, (r2) => Lt2(r2, t));
  });
}
var H3 = ({ children: t, ...e2 }) => {
  let n2 = (0, import_react11.useContext)(Ge2), r2 = e2.pause || !!n2.pause, o = e2.immediate || !!n2.immediate;
  e2 = Lr(() => ({ pause: r2, immediate: o }), [r2, o]);
  let { Provider: s } = Ge2;
  return Be2.createElement(s, { value: e2 }, t);
};
var Ge2 = wn(H3, {});
H3.Provider = Ge2.Provider;
H3.Consumer = Ge2.Consumer;
function wn(t, e2) {
  return Object.assign(t, Be2.createContext(e2)), t.Provider._context = t, t.Consumer._context = t, t;
}
var fe2 = () => {
  let t = [], e2 = function(r2) {
    er();
    let o = [];
    return Ve(t, (s, i2) => {
      if (l2.und(r2))
        o.push(s.start());
      else {
        let a = n2(r2, s, i2);
        a && o.push(s.start(a));
      }
    }), o;
  };
  e2.current = t, e2.add = function(r2) {
    t.includes(r2) || t.push(r2);
  }, e2.delete = function(r2) {
    let o = t.indexOf(r2);
    ~o && t.splice(o, 1);
  }, e2.pause = function() {
    return Ve(t, (r2) => r2.pause(...arguments)), this;
  }, e2.resume = function() {
    return Ve(t, (r2) => r2.resume(...arguments)), this;
  }, e2.set = function(r2) {
    Ve(t, (o, s) => {
      let i2 = l2.fun(r2) ? r2(s, o) : r2;
      i2 && o.set(i2);
    });
  }, e2.start = function(r2) {
    let o = [];
    return Ve(t, (s, i2) => {
      if (l2.und(r2))
        o.push(s.start());
      else {
        let a = this._getProps(r2, s, i2);
        a && o.push(s.start(a));
      }
    }), o;
  }, e2.stop = function() {
    return Ve(t, (r2) => r2.stop(...arguments)), this;
  }, e2.update = function(r2) {
    return Ve(t, (o, s) => o.update(this._getProps(r2, o, s))), this;
  };
  let n2 = function(r2, o, s) {
    return l2.fun(r2) ? r2(s, o) : r2;
  };
  return e2._getProps = n2, e2;
};
function He2(t, e2, n2) {
  let r2 = l2.fun(e2) && e2;
  r2 && !n2 && (n2 = []);
  let o = (0, import_react10.useMemo)(() => r2 || arguments.length == 3 ? fe2() : void 0, []), s = (0, import_react10.useRef)(0), i2 = Mr(), a = (0, import_react10.useMemo)(() => ({ ctrls: [], queue: [], flush(h5, g3) {
    let x4 = _e2(h5, g3);
    return s.current > 0 && !a.queue.length && !Object.keys(x4).some((A2) => !h5.springs[A2]) ? ze2(h5, g3) : new Promise((A2) => {
      pt(h5, x4), a.queue.push(() => {
        A2(ze2(h5, g3));
      }), i2();
    });
  } }), []), u4 = (0, import_react10.useRef)([...a.ctrls]), p3 = [], f3 = Ur(t) || 0;
  (0, import_react10.useMemo)(() => {
    Ve(u4.current.slice(t, f3), (h5) => {
      xe2(h5, o), h5.stop(true);
    }), u4.current.length = t, d4(f3, t);
  }, [t]), (0, import_react10.useMemo)(() => {
    d4(0, Math.min(f3, t));
  }, n2);
  function d4(h5, g3) {
    for (let x4 = h5; x4 < g3; x4++) {
      let S2 = u4.current[x4] || (u4.current[x4] = new le2(null, a.flush)), A2 = r2 ? r2(x4, S2) : e2[x4];
      A2 && (p3[x4] = Ot(A2));
    }
  }
  let m3 = u4.current.map((h5, g3) => _e2(h5, p3[g3])), b4 = (0, import_react10.useContext)(H3), c5 = Ur(b4), P2 = b4 !== c5 && Ue2(b4);
  Q2(() => {
    s.current++, a.ctrls = u4.current;
    let { queue: h5 } = a;
    h5.length && (a.queue = [], Ve(h5, (g3) => g3())), Ve(u4.current, (g3, x4) => {
      o == null ? void 0 : o.add(g3), P2 && g3.start({ default: b4 });
      let S2 = p3[x4];
      S2 && (he2(g3, S2.ref), g3.ref ? g3.queue.push(S2) : g3.start(S2));
    });
  }), $r(() => () => {
    Ve(a.ctrls, (h5) => h5.stop(true));
  });
  let l4 = m3.map((h5) => ({ ...h5 }));
  return o ? [l4, o] : l4;
}
function J2(t, e2) {
  let n2 = l2.fun(t), [[r2], o] = He2(1, n2 ? t : [t], n2 ? e2 || [] : e2);
  return n2 || arguments.length == 2 ? [r2, o] : r2;
}
var Gn = () => fe2();
var Xo = () => (0, import_react12.useState)(Gn)[0];
var Wo = (t, e2) => {
  let n2 = Er(() => new ue2(t, e2));
  return $r(() => () => {
    n2.stop();
  }), n2;
};
function Qt2(t, e2, n2) {
  let r2 = l2.fun(e2) && e2;
  r2 && !n2 && (n2 = []);
  let o = true, s, i2 = He2(t, (a, u4) => {
    let p3 = r2 ? r2(a, u4) : e2;
    return s = p3.ref, o = o && p3.reverse, p3;
  }, n2 || [{}]);
  if (Q2(() => {
    Ve(i2[1].current, (a, u4) => {
      let p3 = i2[1].current[u4 + (o ? 1 : -1)];
      if (he2(a, s), a.ref) {
        p3 && a.update({ to: p3.springs });
        return;
      }
      p3 ? a.start({ to: p3.springs }) : a.start();
    });
  }, n2), r2 || arguments.length == 3) {
    let a = s ?? i2[1];
    return a._getProps = (u4, p3, f3) => {
      let d4 = l2.fun(u4) ? u4(f3, p3) : u4;
      if (d4) {
        let m3 = a.current[f3 + (d4.reverse ? 1 : -1)];
        return m3 && (d4.to = m3.springs), d4;
      }
    }, i2;
  }
  return i2[0];
}
function Gt2(t, e2, n2) {
  let r2 = l2.fun(e2) && e2, { reset: o, sort: s, trail: i2 = 0, expires: a = true, exitBeforeEnter: u4 = false, onDestroyed: p3, ref: f3, config: d4 } = r2 ? r2() : e2, m3 = (0, import_react13.useMemo)(() => r2 || arguments.length == 3 ? fe2() : void 0, []), b4 = ht(t), c5 = [], P2 = (0, import_react13.useRef)(null), l4 = o ? null : P2.current;
  Q2(() => {
    P2.current = c5;
  }), $r(() => (Ve(c5, (y5) => {
    m3 == null ? void 0 : m3.add(y5.ctrl), y5.ctrl.ref = m3;
  }), () => {
    Ve(P2.current, (y5) => {
      y5.expired && clearTimeout(y5.expirationId), xe2(y5.ctrl, m3), y5.ctrl.stop(true);
    });
  }));
  let h5 = tr(b4, r2 ? r2() : e2, l4), g3 = o && P2.current || [];
  Q2(() => Ve(g3, ({ ctrl: y5, item: T3, key: F3 }) => {
    xe2(y5, m3), I2(p3, T3, F3);
  }));
  let x4 = [];
  if (l4 && Ve(l4, (y5, T3) => {
    y5.expired ? (clearTimeout(y5.expirationId), g3.push(y5)) : (T3 = x4[T3] = h5.indexOf(y5.key), ~T3 && (c5[T3] = y5));
  }), Ve(b4, (y5, T3) => {
    c5[T3] || (c5[T3] = { key: h5[T3], item: y5, phase: "mount", ctrl: new le2() }, c5[T3].ctrl.item = y5);
  }), x4.length) {
    let y5 = -1, { leave: T3 } = r2 ? r2() : e2;
    Ve(x4, (F3, k4) => {
      let O3 = l4[k4];
      ~F3 ? (y5 = c5.indexOf(O3), c5[y5] = { ...O3, item: b4[F3] }) : T3 && c5.splice(++y5, 0, O3);
    });
  }
  l2.fun(s) && c5.sort((y5, T3) => s(y5.item, T3.item));
  let S2 = -i2, A2 = Mr(), V3 = ne3(e2), _3 = /* @__PURE__ */ new Map(), v5 = (0, import_react13.useRef)(/* @__PURE__ */ new Map()), w3 = (0, import_react13.useRef)(false);
  Ve(c5, (y5, T3) => {
    let F3 = y5.key, k4 = y5.phase, O3 = r2 ? r2() : e2, U2, D3, Jt2 = I2(O3.delay || 0, F3);
    if (k4 == "mount")
      U2 = O3.enter, D3 = "enter";
    else {
      let M2 = h5.indexOf(F3) < 0;
      if (k4 != "leave")
        if (M2)
          U2 = O3.leave, D3 = "leave";
        else if (U2 = O3.update)
          D3 = "update";
        else
          return;
      else if (!M2)
        U2 = O3.enter, D3 = "enter";
      else
        return;
    }
    if (U2 = I2(U2, y5.item, T3), U2 = l2.obj(U2) ? de2(U2) : { to: U2 }, !U2.config) {
      let M2 = d4 || V3.config;
      U2.config = I2(M2, y5.item, T3, D3);
    }
    S2 += i2;
    let Z2 = { ...V3, delay: Jt2 + S2, ref: f3, immediate: O3.immediate, reset: false, ...U2 };
    if (D3 == "enter" && l2.und(Z2.from)) {
      let M2 = r2 ? r2() : e2, Te2 = l2.und(M2.initial) || l4 ? M2.from : M2.initial;
      Z2.from = I2(Te2, y5.item, T3);
    }
    let { onResolve: Wt } = Z2;
    Z2.onResolve = (M2) => {
      I2(Wt, M2);
      let Te2 = P2.current, B2 = Te2.find((Fe2) => Fe2.key === F3);
      if (B2 && !(M2.cancelled && B2.phase != "update") && B2.ctrl.idle) {
        let Fe2 = Te2.every((ee2) => ee2.ctrl.idle);
        if (B2.phase == "leave") {
          let ee2 = I2(a, B2.item);
          if (ee2 !== false) {
            let Ze2 = ee2 === true ? 0 : ee2;
            if (B2.expired = true, !Fe2 && Ze2 > 0) {
              Ze2 <= 2147483647 && (B2.expirationId = setTimeout(A2, Ze2));
              return;
            }
          }
        }
        Fe2 && Te2.some((ee2) => ee2.expired) && (v5.current.delete(B2), u4 && (w3.current = true), A2());
      }
    };
    let ft2 = _e2(y5.ctrl, Z2);
    D3 === "leave" && u4 ? v5.current.set(y5, { phase: D3, springs: ft2, payload: Z2 }) : _3.set(y5, { phase: D3, springs: ft2, payload: Z2 });
  });
  let C3 = (0, import_react13.useContext)(H3), $3 = Ur(C3), L3 = C3 !== $3 && Ue2(C3);
  Q2(() => {
    L3 && Ve(c5, (y5) => {
      y5.ctrl.start({ default: C3 });
    });
  }, [C3]), Ve(_3, (y5, T3) => {
    if (v5.current.size) {
      let F3 = c5.findIndex((k4) => k4.key === T3.key);
      c5.splice(F3, 1);
    }
  }), Q2(() => {
    Ve(v5.current.size ? v5.current : _3, ({ phase: y5, payload: T3 }, F3) => {
      let { ctrl: k4 } = F3;
      F3.phase = y5, m3 == null ? void 0 : m3.add(k4), L3 && y5 == "enter" && k4.start({ default: C3 }), T3 && (he2(k4, T3.ref), (k4.ref || m3) && !w3.current ? k4.update(T3) : (k4.start(T3), w3.current && (w3.current = false)));
    });
  }, o ? void 0 : n2);
  let N3 = (y5) => Oe2.createElement(Oe2.Fragment, null, c5.map((T3, F3) => {
    let { springs: k4 } = _3.get(T3) || T3.ctrl, O3 = y5({ ...k4 }, T3.item, T3, F3);
    return O3 && O3.type ? Oe2.createElement(O3.type, { ...O3.props, key: l2.str(T3.key) || l2.num(T3.key) ? T3.key : T3.ctrl.id, ref: O3.ref }) : O3;
  }));
  return m3 ? [N3, m3] : N3;
}
var er2 = 1;
function tr(t, { key: e2, keys: n2 = e2 }, r2) {
  if (n2 === null) {
    let o = /* @__PURE__ */ new Set();
    return t.map((s) => {
      let i2 = r2 && r2.find((a) => a.item === s && a.phase !== "leave" && !o.has(a));
      return i2 ? (o.add(i2), i2.key) : er2++;
    });
  }
  return l2.und(n2) ? t : l2.fun(n2) ? t.map(n2) : ht(n2);
}
var hs = ({ container: t, ...e2 } = {}) => {
  let [n2, r2] = J2(() => ({ scrollX: 0, scrollY: 0, scrollXProgress: 0, scrollYProgress: 0, ...e2 }), []);
  return Q2(() => {
    let o = yr(({ x: s, y: i2 }) => {
      r2.start({ scrollX: s.current, scrollXProgress: s.progress, scrollY: i2.current, scrollYProgress: i2.progress });
    }, { container: (t == null ? void 0 : t.current) || void 0 });
    return () => {
      Ve(Object.values(n2), (s) => s.stop()), o();
    };
  }, []), n2;
};
var Ps = ({ container: t, ...e2 }) => {
  let [n2, r2] = J2(() => ({ width: 0, height: 0, ...e2 }), []);
  return Q2(() => {
    let o = ke(({ width: s, height: i2 }) => {
      r2.start({ width: s, height: i2, immediate: n2.width.get() === 0 || n2.height.get() === 0 });
    }, { container: (t == null ? void 0 : t.current) || void 0 });
    return () => {
      Ve(Object.values(n2), (s) => s.stop()), o();
    };
  }, []), n2;
};
var cr = { any: 0, all: 1 };
function Cs(t, e2) {
  let [n2, r2] = (0, import_react14.useState)(false), o = (0, import_react14.useRef)(), s = l2.fun(t) && t, i2 = s ? s() : {}, { to: a = {}, from: u4 = {}, ...p3 } = i2, f3 = s ? e2 : t, [d4, m3] = J2(() => ({ from: u4, ...p3 }), []);
  return Q2(() => {
    let b4 = o.current, { root: c5, once: P2, amount: l4 = "any", ...h5 } = f3 ?? {};
    if (!b4 || P2 && n2 || typeof IntersectionObserver > "u")
      return;
    let g3 = /* @__PURE__ */ new WeakMap(), x4 = () => (a && m3.start(a), r2(true), P2 ? void 0 : () => {
      u4 && m3.start(u4), r2(false);
    }), S2 = (V3) => {
      V3.forEach((_3) => {
        let v5 = g3.get(_3.target);
        if (_3.isIntersecting !== !!v5)
          if (_3.isIntersecting) {
            let w3 = x4();
            l2.fun(w3) ? g3.set(_3.target, w3) : A2.unobserve(_3.target);
          } else
            v5 && (v5(), g3.delete(_3.target));
      });
    }, A2 = new IntersectionObserver(S2, { root: c5 && c5.current || void 0, threshold: typeof l4 == "number" || Array.isArray(l4) ? l4 : cr[l4], ...h5 });
    return A2.observe(b4), () => A2.unobserve(b4);
  }, [f3]), s ? [o, d4] : [o, n2];
}
function qs({ children: t, ...e2 }) {
  return t(J2(e2));
}
function Bs({ items: t, children: e2, ...n2 }) {
  let r2 = Qt2(t.length, n2);
  return t.map((o, s) => {
    let i2 = e2(o, s);
    return l2.fun(i2) ? i2(r2[s]) : i2;
  });
}
function Ys({ items: t, children: e2, ...n2 }) {
  return Gt2(t, n2)(e2);
}
var W2 = class extends X3 {
  constructor(n2, r2) {
    super();
    __publicField(this, "key");
    __publicField(this, "idle", true);
    __publicField(this, "calc");
    __publicField(this, "_active", /* @__PURE__ */ new Set());
    this.source = n2;
    this.calc = W(...r2);
    let o = this._get(), s = Le2(o);
    D2(this, s.create(o));
  }
  advance(n2) {
    let r2 = this._get(), o = this.get();
    bt(r2, o) || (k2(this).setValue(r2), this._onChange(r2, this.idle)), !this.idle && Yt(this._active) && ct2(this);
  }
  _get() {
    let n2 = l2.arr(this.source) ? this.source.map(ve) : ht(ve(this.source));
    return this.calc(...n2);
  }
  _start() {
    this.idle && !Yt(this._active) && (this.idle = false, Ve(F(this), (n2) => {
      n2.done = false;
    }), p2.skipAnimation ? (n.batchedUpdates(() => this.advance()), ct2(this)) : qe.start(this));
  }
  _attach() {
    let n2 = 1;
    Ve(ht(this.source), (r2) => {
      Pt(r2) && Gt(r2, this), Re(r2) && (r2.idle || this._active.add(r2), n2 = Math.max(n2, r2.priority + 1));
    }), this.priority = n2, this._start();
  }
  _detach() {
    Ve(ht(this.source), (n2) => {
      Pt(n2) && Qt(n2, this);
    }), this._active.clear(), ct2(this);
  }
  eventObserved(n2) {
    n2.type == "change" ? n2.idle ? this.advance() : (this._active.add(n2.parent), this._start()) : n2.type == "idle" ? this._active.delete(n2.parent) : n2.type == "priority" && (this.priority = ht(this.source).reduce((r2, o) => Math.max(r2, (Re(o) ? o.priority : 0) + 1), 0));
  }
};
function vr(t) {
  return t.idle !== false;
}
function Yt(t) {
  return !t.size || Array.from(t).every(vr);
}
function ct2(t) {
  t.idle || (t.idle = true, Ve(F(t), (e2) => {
    e2.done = true;
  }), $t(t, { type: "idle", parent: t }));
}
var ui = (t, ...e2) => new W2(t, e2);
var pi = (t, ...e2) => (Jt(), new W2(t, e2));
p2.assign({ createStringInterpolator: Xt, to: (t, e2) => new W2(t, e2) });
var di = qe.advance;

// node_modules/@react-spring/web/dist/esm/index.js
var import_react_dom = __toESM(require_react_dom());
var k3 = /^--/;
function I3(t, e2) {
  return e2 == null || typeof e2 == "boolean" || e2 === "" ? "" : typeof e2 == "number" && e2 !== 0 && !k3.test(t) && !(c4.hasOwnProperty(t) && c4[t]) ? e2 + "px" : ("" + e2).trim();
}
var v4 = {};
function V2(t, e2) {
  if (!t.nodeType || !t.setAttribute)
    return false;
  let r2 = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", { style: i2, children: s, scrollTop: u4, scrollLeft: l4, viewBox: a, ...n2 } = e2, d4 = Object.values(n2), m3 = Object.keys(n2).map((o) => r2 || t.hasAttribute(o) ? o : v4[o] || (v4[o] = o.replace(/([A-Z])/g, (p3) => "-" + p3.toLowerCase())));
  s !== void 0 && (t.textContent = s);
  for (let o in i2)
    if (i2.hasOwnProperty(o)) {
      let p3 = I3(o, i2[o]);
      k3.test(o) ? t.style.setProperty(o, p3) : t.style[o] = p3;
    }
  m3.forEach((o, p3) => {
    t.setAttribute(o, d4[p3]);
  }), u4 !== void 0 && (t.scrollTop = u4), l4 !== void 0 && (t.scrollLeft = l4), a !== void 0 && t.setAttribute("viewBox", a);
}
var c4 = { animationIterationCount: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true };
var F2 = (t, e2) => t + e2.charAt(0).toUpperCase() + e2.substring(1);
var L2 = ["Webkit", "Ms", "Moz", "O"];
c4 = Object.keys(c4).reduce((t, e2) => (L2.forEach((r2) => t[F2(r2, e2)] = t[e2]), t), c4);
var _2 = /^(matrix|translate|scale|rotate|skew)/;
var $2 = /^(translate)/;
var G2 = /^(rotate|skew)/;
var y4 = (t, e2) => l2.num(t) && t !== 0 ? t + e2 : t;
var h4 = (t, e2) => l2.arr(t) ? t.every((r2) => h4(r2, e2)) : l2.num(t) ? t === e2 : parseFloat(t) === e2;
var g2 = class extends u3 {
  constructor({ x: e2, y: r2, z: i2, ...s }) {
    let u4 = [], l4 = [];
    (e2 || r2 || i2) && (u4.push([e2 || 0, r2 || 0, i2 || 0]), l4.push((a) => [`translate3d(${a.map((n2) => y4(n2, "px")).join(",")})`, h4(a, 0)])), xt(s, (a, n2) => {
      if (n2 === "transform")
        u4.push([a || ""]), l4.push((d4) => [d4, d4 === ""]);
      else if (_2.test(n2)) {
        if (delete s[n2], l2.und(a))
          return;
        let d4 = $2.test(n2) ? "px" : G2.test(n2) ? "deg" : "";
        u4.push(ht(a)), l4.push(n2 === "rotate3d" ? ([m3, o, p3, O3]) => [`rotate3d(${m3},${o},${p3},${y4(O3, d4)})`, h4(O3, 0)] : (m3) => [`${n2}(${m3.map((o) => y4(o, d4)).join(",")})`, h4(m3, n2.startsWith("scale") ? 1 : 0)]);
      }
    }), u4.length && (s.transform = new x3(u4, l4)), super(s);
  }
};
var x3 = class extends ge {
  constructor(r2, i2) {
    super();
    __publicField(this, "_value", null);
    this.inputs = r2;
    this.transforms = i2;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let r2 = "", i2 = true;
    return Ve(this.inputs, (s, u4) => {
      let l4 = ve(s[0]), [a, n2] = this.transforms[u4](l2.arr(l4) ? l4 : s.map(ve));
      r2 += " " + a, i2 = i2 && n2;
    }), i2 ? "none" : r2;
  }
  observerAdded(r2) {
    r2 == 1 && Ve(this.inputs, (i2) => Ve(i2, (s) => Pt(s) && Gt(s, this)));
  }
  observerRemoved(r2) {
    r2 == 0 && Ve(this.inputs, (i2) => Ve(i2, (s) => Pt(s) && Qt(s, this)));
  }
  eventObserved(r2) {
    r2.type == "change" && (this._value = null), $t(this, r2);
  }
};
var C2 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
p2.assign({ batchedUpdates: import_react_dom.unstable_batchedUpdates, createStringInterpolator: Xt, colors: It });
var q3 = Ke2(C2, { applyAnimatedValues: V2, createAnimatedStyle: (t) => new g2(t), getComponentProps: ({ scrollTop: t, scrollLeft: e2, ...r2 }) => r2 });
var it3 = q3.animated;
export {
  e as Any,
  Ae2 as BailSignal,
  le2 as Controller,
  X3 as FrameValue,
  p2 as Globals,
  W2 as Interpolation,
  qs as Spring,
  H3 as SpringContext,
  fe2 as SpringRef,
  ue2 as SpringValue,
  Bs as Trail,
  Ys as Transition,
  it3 as a,
  it3 as animated,
  mt2 as config,
  W as createInterpolator,
  Lt as easings,
  de2 as inferTo,
  pi as interpolate,
  ui as to,
  di as update,
  wr as useChain,
  Cs as useInView,
  Q2 as useIsomorphicLayoutEffect,
  Wr as useReducedMotion,
  Ps as useResize,
  hs as useScroll,
  J2 as useSpring,
  Xo as useSpringRef,
  Wo as useSpringValue,
  He2 as useSprings,
  Qt2 as useTrail,
  Gt2 as useTransition
};
//# sourceMappingURL=react-spring.js.map

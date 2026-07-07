var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
    new MutationObserver((s) => {
      for (const o of s) if (o.type === "childList") for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(s) {
      const o = {};
      return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function i(s) {
      if (s.ep) return;
      s.ep = true;
      const o = n(s);
      fetch(s.href, o);
    }
  })();
  function xs(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const le = {}, Gt = [], rt = () => {
  }, Fl = () => false, xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $s = (e) => e.startsWith("onUpdate:"), Ce = Object.assign, Ss = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Hl = Object.prototype.hasOwnProperty, se = (e, t) => Hl.call(e, t), U = Array.isArray, Yt = (e) => Fn(e) === "[object Map]", $i = (e) => Fn(e) === "[object Set]", Qs = (e) => Fn(e) === "[object Date]", K = (e) => typeof e == "function", _e = (e) => typeof e == "string", Xe = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", Ts = (e) => (fe(e) || K(e)) && K(e.then) && K(e.catch), Zo = Object.prototype.toString, Fn = (e) => Zo.call(e), Bl = (e) => Fn(e).slice(8, -1), er = (e) => Fn(e) === "[object Object]", Cs = (e) => _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gn = xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Si = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  }, zl = /-(\w)/g, qe = Si((e) => e.replace(zl, (t, n) => n ? n.toUpperCase() : "")), jl = /\B([A-Z])/g, kt = Si((e) => e.replace(jl, "-$1").toLowerCase()), Ti = Si((e) => e.charAt(0).toUpperCase() + e.slice(1)), ji = Si((e) => e ? `on${Ti(e)}` : ""), Pt = (e, t) => !Object.is(e, t), Jn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, tr = (e, t, n, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: n
    });
  }, oi = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, ql = (e) => {
    const t = _e(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Zs;
  const Ci = () => Zs || (Zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function At(e) {
    if (U(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const i = e[n], s = _e(i) ? Kl(i) : At(i);
        if (s) for (const o in s) t[o] = s[o];
      }
      return t;
    } else if (_e(e) || fe(e)) return e;
  }
  const Vl = /;(?![^(]*\))/g, Ul = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
  function Kl(e) {
    const t = {};
    return e.replace(Wl, "").split(Vl).forEach((n) => {
      if (n) {
        const i = n.split(Ul);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  function We(e) {
    let t = "";
    if (_e(e)) t = e;
    else if (U(e)) for (let n = 0; n < e.length; n++) {
      const i = We(e[n]);
      i && (t += i + " ");
    }
    else if (fe(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  }
  function Gl(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !_e(t) && (e.class = We(t)), n && (e.style = At(n)), e;
  }
  const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = xs(Yl);
  function nr(e) {
    return !!e || e === "";
  }
  function Jl(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let i = 0; n && i < e.length; i++) n = nn(e[i], t[i]);
    return n;
  }
  function nn(e, t) {
    if (e === t) return true;
    let n = Qs(e), i = Qs(t);
    if (n || i) return n && i ? e.getTime() === t.getTime() : false;
    if (n = Xe(e), i = Xe(t), n || i) return e === t;
    if (n = U(e), i = U(t), n || i) return n && i ? Jl(e, t) : false;
    if (n = fe(e), i = fe(t), n || i) {
      if (!n || !i) return false;
      const s = Object.keys(e).length, o = Object.keys(t).length;
      if (s !== o) return false;
      for (const r in e) {
        const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
        if (l && !a || !l && a || !nn(e[r], t[r])) return false;
      }
    }
    return String(e) === String(t);
  }
  function Ql(e, t) {
    return e.findIndex((n) => nn(n, t));
  }
  const ir = (e) => !!(e && e.__v_isRef === true), Oe = (e) => _e(e) ? e : e == null ? "" : U(e) || fe(e) && (e.toString === Zo || !K(e.toString)) ? ir(e) ? Oe(e.value) : JSON.stringify(e, sr, 2) : String(e), sr = (e, t) => ir(t) ? sr(e, t.value) : Yt(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [i, s], o) => (n[qi(i, o) + " =>"] = s, n), {})
  } : $i(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => qi(n))
  } : Xe(t) ? qi(t) : fe(t) && !U(t) && !er(t) ? String(t) : t, qi = (e, t = "") => {
    var n;
    return Xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let Ie;
  class Zl {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = Ie;
        try {
          return Ie = this, t();
        } finally {
          Ie = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Ie, Ie = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Ie = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, i;
        for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const s = this.parent.scopes.pop();
          s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function ea() {
    return Ie;
  }
  let ue;
  const Vi = /* @__PURE__ */ new WeakSet();
  class or {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Vi.has(this) && (Vi.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lr(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, eo(this), ar(this);
      const t = ue, n = Ke;
      ue = this, Ke = true;
      try {
        return this.fn();
      } finally {
        cr(this), ue = t, Ke = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Es(t);
        this.deps = this.depsTail = void 0, eo(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Vi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      ns(this) && this.run();
    }
    get dirty() {
      return ns(this);
    }
  }
  let rr = 0, mn, vn;
  function lr(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = vn, vn = e;
      return;
    }
    e.next = mn, mn = e;
  }
  function Ps() {
    rr++;
  }
  function As() {
    if (--rr > 0) return;
    if (vn) {
      let t = vn;
      for (vn = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; mn; ) {
      let t = mn;
      for (mn = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function ar(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function cr(e) {
    let t, n = e.depsTail, i = n;
    for (; i; ) {
      const s = i.prevDep;
      i.version === -1 ? (i === n && (n = s), Es(i), ta(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
    }
    e.deps = t, e.depsTail = n;
  }
  function ns(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ur(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function ur(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Cn) || (e.globalVersion = Cn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ns(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = ue, i = Ke;
    ue = e, Ke = true;
    try {
      ar(e);
      const s = e.fn(e._value);
      (t.version === 0 || Pt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
    } catch (s) {
      throw t.version++, s;
    } finally {
      ue = n, Ke = i, cr(e), e.flags &= -3;
    }
  }
  function Es(e, t = false) {
    const { dep: n, prevSub: i, nextSub: s } = e;
    if (i && (i.nextSub = s, e.prevSub = void 0), s && (s.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
      n.computed.flags &= -5;
      for (let o = n.computed.deps; o; o = o.nextDep) Es(o, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function ta(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let Ke = true;
  const fr = [];
  function vt() {
    fr.push(Ke), Ke = false;
  }
  function wt() {
    const e = fr.pop();
    Ke = e === void 0 ? true : e;
  }
  function eo(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = ue;
      ue = void 0;
      try {
        t();
      } finally {
        ue = n;
      }
    }
  }
  let Cn = 0;
  class na {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Os {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!ue || !Ke || ue === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== ue) n = this.activeLink = new na(ue, this), ue.deps ? (n.prevDep = ue.depsTail, ue.depsTail.nextDep = n, ue.depsTail = n) : ue.deps = ue.depsTail = n, dr(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const i = n.nextDep;
        i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ue.depsTail, n.nextDep = void 0, ue.depsTail.nextDep = n, ue.depsTail = n, ue.deps === n && (ue.deps = i);
      }
      return n;
    }
    trigger(t) {
      this.version++, Cn++, this.notify(t);
    }
    notify(t) {
      Ps();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        As();
      }
    }
  }
  function dr(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) dr(i);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const ri = /* @__PURE__ */ new WeakMap(), zt = Symbol(""), is = Symbol(""), Pn = Symbol("");
  function Se(e, t, n) {
    if (Ke && ue) {
      let i = ri.get(e);
      i || ri.set(e, i = /* @__PURE__ */ new Map());
      let s = i.get(n);
      s || (i.set(n, s = new Os()), s.map = i, s.key = n), s.track();
    }
  }
  function pt(e, t, n, i, s, o) {
    const r = ri.get(e);
    if (!r) {
      Cn++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if (Ps(), t === "clear") r.forEach(l);
    else {
      const a = U(e), f = a && Cs(n);
      if (a && n === "length") {
        const u = Number(i);
        r.forEach((c, h) => {
          (h === "length" || h === Pn || !Xe(h) && h >= u) && l(c);
        });
      } else switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), f && l(r.get(Pn)), t) {
        case "add":
          a ? f && l(r.get("length")) : (l(r.get(zt)), Yt(e) && l(r.get(is)));
          break;
        case "delete":
          a || (l(r.get(zt)), Yt(e) && l(r.get(is)));
          break;
        case "set":
          Yt(e) && l(r.get(zt));
          break;
      }
    }
    As();
  }
  function ia(e, t) {
    const n = ri.get(e);
    return n && n.get(t);
  }
  function Ut(e) {
    const t = ie(e);
    return t === e ? t : (Se(t, "iterate", Pn), je(e) ? t : t.map(we));
  }
  function Pi(e) {
    return Se(e = ie(e), "iterate", Pn), e;
  }
  const sa = {
    __proto__: null,
    [Symbol.iterator]() {
      return Ui(this, Symbol.iterator, we);
    },
    concat(...e) {
      return Ut(this).concat(...e.map((t) => U(t) ? Ut(t) : t));
    },
    entries() {
      return Ui(this, "entries", (e) => (e[1] = we(e[1]), e));
    },
    every(e, t) {
      return ft(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return ft(this, "filter", e, t, (n) => n.map(we), arguments);
    },
    find(e, t) {
      return ft(this, "find", e, t, we, arguments);
    },
    findIndex(e, t) {
      return ft(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return ft(this, "findLast", e, t, we, arguments);
    },
    findLastIndex(e, t) {
      return ft(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return ft(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Wi(this, "includes", e);
    },
    indexOf(...e) {
      return Wi(this, "indexOf", e);
    },
    join(e) {
      return Ut(this).join(e);
    },
    lastIndexOf(...e) {
      return Wi(this, "lastIndexOf", e);
    },
    map(e, t) {
      return ft(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return dn(this, "pop");
    },
    push(...e) {
      return dn(this, "push", e);
    },
    reduce(e, ...t) {
      return to(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return to(this, "reduceRight", e, t);
    },
    shift() {
      return dn(this, "shift");
    },
    some(e, t) {
      return ft(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return dn(this, "splice", e);
    },
    toReversed() {
      return Ut(this).toReversed();
    },
    toSorted(e) {
      return Ut(this).toSorted(e);
    },
    toSpliced(...e) {
      return Ut(this).toSpliced(...e);
    },
    unshift(...e) {
      return dn(this, "unshift", e);
    },
    values() {
      return Ui(this, "values", we);
    }
  };
  function Ui(e, t, n) {
    const i = Pi(e), s = i[t]();
    return i !== e && !je(e) && (s._next = s.next, s.next = () => {
      const o = s._next();
      return o.value && (o.value = n(o.value)), o;
    }), s;
  }
  const oa = Array.prototype;
  function ft(e, t, n, i, s, o) {
    const r = Pi(e), l = r !== e && !je(e), a = r[t];
    if (a !== oa[t]) {
      const c = a.apply(e, o);
      return l ? we(c) : c;
    }
    let f = n;
    r !== e && (l ? f = function(c, h) {
      return n.call(this, we(c), h, e);
    } : n.length > 2 && (f = function(c, h) {
      return n.call(this, c, h, e);
    }));
    const u = a.call(r, f, i);
    return l && s ? s(u) : u;
  }
  function to(e, t, n, i) {
    const s = Pi(e);
    let o = n;
    return s !== e && (je(e) ? n.length > 3 && (o = function(r, l, a) {
      return n.call(this, r, l, a, e);
    }) : o = function(r, l, a) {
      return n.call(this, r, we(l), a, e);
    }), s[t](o, ...i);
  }
  function Wi(e, t, n) {
    const i = ie(e);
    Se(i, "iterate", Pn);
    const s = i[t](...n);
    return (s === -1 || s === false) && ks(n[0]) ? (n[0] = ie(n[0]), i[t](...n)) : s;
  }
  function dn(e, t, n = []) {
    vt(), Ps();
    const i = ie(e)[t].apply(e, n);
    return As(), wt(), i;
  }
  const ra = xs("__proto__,__v_isRef,__isVue"), pr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xe));
  function la(e) {
    Xe(e) || (e = String(e));
    const t = ie(this);
    return Se(t, "has", e), t.hasOwnProperty(e);
  }
  class hr {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, i) {
      if (n === "__v_skip") return t.__v_skip;
      const s = this._isReadonly, o = this._isShallow;
      if (n === "__v_isReactive") return !s;
      if (n === "__v_isReadonly") return s;
      if (n === "__v_isShallow") return o;
      if (n === "__v_raw") return i === (s ? o ? ma : vr : o ? mr : gr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const r = U(t);
      if (!s) {
        let a;
        if (r && (a = sa[n])) return a;
        if (n === "hasOwnProperty") return la;
      }
      const l = Reflect.get(t, n, ye(t) ? t : i);
      return (Xe(n) ? pr.has(n) : ra(n)) || (s || Se(t, "get", n), o) ? l : ye(l) ? r && Cs(n) ? l : l.value : fe(l) ? s ? wr(l) : Ms(l) : l;
    }
  }
  class _r extends hr {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, i, s) {
      let o = t[n];
      if (!this._isShallow) {
        const a = Mt(o);
        if (!je(i) && !Mt(i) && (o = ie(o), i = ie(i)), !U(t) && ye(o) && !ye(i)) return a ? false : (o.value = i, true);
      }
      const r = U(t) && Cs(n) ? Number(n) < t.length : se(t, n), l = Reflect.set(t, n, i, ye(t) ? t : s);
      return t === ie(s) && (r ? Pt(i, o) && pt(t, "set", n, i) : pt(t, "add", n, i)), l;
    }
    deleteProperty(t, n) {
      const i = se(t, n);
      t[n];
      const s = Reflect.deleteProperty(t, n);
      return s && i && pt(t, "delete", n, void 0), s;
    }
    has(t, n) {
      const i = Reflect.has(t, n);
      return (!Xe(n) || !pr.has(n)) && Se(t, "has", n), i;
    }
    ownKeys(t) {
      return Se(t, "iterate", U(t) ? "length" : zt), Reflect.ownKeys(t);
    }
  }
  class aa extends hr {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  }
  const ca = new _r(), ua = new aa(), fa = new _r(true);
  const ss = (e) => e, Un = (e) => Reflect.getPrototypeOf(e);
  function da(e, t, n) {
    return function(...i) {
      const s = this.__v_raw, o = ie(s), r = Yt(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, f = s[e](...i), u = n ? ss : t ? li : we;
      return !t && Se(o, "iterate", a ? is : zt), {
        next() {
          const { value: c, done: h } = f.next();
          return h ? {
            value: c,
            done: h
          } : {
            value: l ? [
              u(c[0]),
              u(c[1])
            ] : u(c),
            done: h
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Wn(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function pa(e, t) {
    const n = {
      get(s) {
        const o = this.__v_raw, r = ie(o), l = ie(s);
        e || (Pt(s, l) && Se(r, "get", s), Se(r, "get", l));
        const { has: a } = Un(r), f = t ? ss : e ? li : we;
        if (a.call(r, s)) return f(o.get(s));
        if (a.call(r, l)) return f(o.get(l));
        o !== r && o.get(s);
      },
      get size() {
        const s = this.__v_raw;
        return !e && Se(ie(s), "iterate", zt), Reflect.get(s, "size", s);
      },
      has(s) {
        const o = this.__v_raw, r = ie(o), l = ie(s);
        return e || (Pt(s, l) && Se(r, "has", s), Se(r, "has", l)), s === l ? o.has(s) : o.has(s) || o.has(l);
      },
      forEach(s, o) {
        const r = this, l = r.__v_raw, a = ie(l), f = t ? ss : e ? li : we;
        return !e && Se(a, "iterate", zt), l.forEach((u, c) => s.call(o, f(u), f(c), r));
      }
    };
    return Ce(n, e ? {
      add: Wn("add"),
      set: Wn("set"),
      delete: Wn("delete"),
      clear: Wn("clear")
    } : {
      add(s) {
        !t && !je(s) && !Mt(s) && (s = ie(s));
        const o = ie(this);
        return Un(o).has.call(o, s) || (o.add(s), pt(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !je(o) && !Mt(o) && (o = ie(o));
        const r = ie(this), { has: l, get: a } = Un(r);
        let f = l.call(r, s);
        f || (s = ie(s), f = l.call(r, s));
        const u = a.call(r, s);
        return r.set(s, o), f ? Pt(o, u) && pt(r, "set", s, o) : pt(r, "add", s, o), this;
      },
      delete(s) {
        const o = ie(this), { has: r, get: l } = Un(o);
        let a = r.call(o, s);
        a || (s = ie(s), a = r.call(o, s)), l && l.call(o, s);
        const f = o.delete(s);
        return a && pt(o, "delete", s, void 0), f;
      },
      clear() {
        const s = ie(this), o = s.size !== 0, r = s.clear();
        return o && pt(s, "clear", void 0, void 0), r;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((s) => {
      n[s] = da(s, e, t);
    }), n;
  }
  function Rs(e, t) {
    const n = pa(e, t);
    return (i, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(se(n, s) && s in i ? n : i, s, o);
  }
  const ha = {
    get: Rs(false, false)
  }, _a = {
    get: Rs(false, true)
  }, ga = {
    get: Rs(true, false)
  };
  const gr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap();
  function va(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function wa(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : va(Bl(e));
  }
  function Ms(e) {
    return Mt(e) ? e : Is(e, false, ca, ha, gr);
  }
  function ba(e) {
    return Is(e, false, fa, _a, mr);
  }
  function wr(e) {
    return Is(e, true, ua, ga, vr);
  }
  function Is(e, t, n, i, s) {
    if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = wa(e);
    if (o === 0) return e;
    const r = s.get(e);
    if (r) return r;
    const l = new Proxy(e, o === 2 ? i : n);
    return s.set(e, l), l;
  }
  function Xt(e) {
    return Mt(e) ? Xt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Mt(e) {
    return !!(e && e.__v_isReadonly);
  }
  function je(e) {
    return !!(e && e.__v_isShallow);
  }
  function ks(e) {
    return e ? !!e.__v_raw : false;
  }
  function ie(e) {
    const t = e && e.__v_raw;
    return t ? ie(t) : e;
  }
  function ya(e) {
    return !se(e, "__v_skip") && Object.isExtensible(e) && tr(e, "__v_skip", true), e;
  }
  const we = (e) => fe(e) ? Ms(e) : e, li = (e) => fe(e) ? wr(e) : e;
  function ye(e) {
    return e ? e.__v_isRef === true : false;
  }
  function he(e) {
    return br(e, false);
  }
  function xa(e) {
    return br(e, true);
  }
  function br(e, t) {
    return ye(e) ? e : new $a(e, t);
  }
  class $a {
    constructor(t, n) {
      this.dep = new Os(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ie(t), this._value = n ? t : we(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, i = this.__v_isShallow || je(t) || Mt(t);
      t = i ? t : ie(t), Pt(t, n) && (this._rawValue = t, this._value = i ? t : we(t), this.dep.trigger());
    }
  }
  function Sa(e) {
    e.dep && e.dep.trigger();
  }
  function $e(e) {
    return ye(e) ? e.value : e;
  }
  const Ta = {
    get: (e, t, n) => t === "__v_raw" ? e : $e(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
      const s = e[t];
      return ye(s) && !ye(n) ? (s.value = n, true) : Reflect.set(e, t, n, i);
    }
  };
  function yr(e) {
    return Xt(e) ? e : new Proxy(e, Ta);
  }
  function xr(e) {
    const t = U(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Pa(e, n);
    return t;
  }
  class Ca {
    constructor(t, n, i) {
      this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = true, this._value = void 0;
    }
    get value() {
      const t = this._object[this._key];
      return this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return ia(ie(this._object), this._key);
    }
  }
  function Pa(e, t, n) {
    const i = e[t];
    return ye(i) ? i : new Ca(e, t, n);
  }
  class Aa {
    constructor(t, n, i) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Os(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && ue !== this) return lr(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return ur(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Ea(e, t, n = false) {
    let i, s;
    return K(e) ? i = e : (i = e.get, s = e.set), new Aa(i, s, n);
  }
  const Kn = {}, ai = /* @__PURE__ */ new WeakMap();
  let Ht;
  function Oa(e, t = false, n = Ht) {
    if (n) {
      let i = ai.get(n);
      i || ai.set(n, i = []), i.push(e);
    }
  }
  function Ra(e, t, n = le) {
    const { immediate: i, deep: s, once: o, scheduler: r, augmentJob: l, call: a } = n, f = (N) => s ? N : je(N) || s === false || s === 0 ? ht(N, 1) : ht(N);
    let u, c, h, _, w = false, v = false;
    if (ye(e) ? (c = () => e.value, w = je(e)) : Xt(e) ? (c = () => f(e), w = true) : U(e) ? (v = true, w = e.some((N) => Xt(N) || je(N)), c = () => e.map((N) => {
      if (ye(N)) return N.value;
      if (Xt(N)) return f(N);
      if (K(N)) return a ? a(N, 2) : N();
    })) : K(e) ? t ? c = a ? () => a(e, 2) : e : c = () => {
      if (h) {
        vt();
        try {
          h();
        } finally {
          wt();
        }
      }
      const N = Ht;
      Ht = u;
      try {
        return a ? a(e, 3, [
          _
        ]) : e(_);
      } finally {
        Ht = N;
      }
    } : c = rt, t && s) {
      const N = c, A = s === true ? 1 / 0 : s;
      c = () => ht(N(), A);
    }
    const g = ea(), T = () => {
      u.stop(), g && g.active && Ss(g.effects, u);
    };
    if (o && t) {
      const N = t;
      t = (...A) => {
        N(...A), T();
      };
    }
    let b = v ? new Array(e.length).fill(Kn) : Kn;
    const F = (N) => {
      if (!(!(u.flags & 1) || !u.dirty && !N)) if (t) {
        const A = u.run();
        if (s || w || (v ? A.some((j, Y) => Pt(j, b[Y])) : Pt(A, b))) {
          h && h();
          const j = Ht;
          Ht = u;
          try {
            const Y = [
              A,
              b === Kn ? void 0 : v && b[0] === Kn ? [] : b,
              _
            ];
            b = A, a ? a(t, 3, Y) : t(...Y);
          } finally {
            Ht = j;
          }
        }
      } else u.run();
    };
    return l && l(F), u = new or(c), u.scheduler = r ? () => r(F, false) : F, _ = (N) => Oa(N, false, u), h = u.onStop = () => {
      const N = ai.get(u);
      if (N) {
        if (a) a(N, 4);
        else for (const A of N) A();
        ai.delete(u);
      }
    }, t ? i ? F(true) : b = u.run() : r ? r(F.bind(null, true), true) : u.run(), T.pause = u.pause.bind(u), T.resume = u.resume.bind(u), T.stop = T, T;
  }
  function ht(e, t = 1 / 0, n) {
    if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, ye(e)) ht(e.value, t, n);
    else if (U(e)) for (let i = 0; i < e.length; i++) ht(e[i], t, n);
    else if ($i(e) || Yt(e)) e.forEach((i) => {
      ht(i, t, n);
    });
    else if (er(e)) {
      for (const i in e) ht(e[i], t, n);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && ht(e[i], t, n);
    }
    return e;
  }
  function Hn(e, t, n, i) {
    try {
      return i ? e(...i) : e();
    } catch (s) {
      Bn(s, t, n);
    }
  }
  function ct(e, t, n, i) {
    if (K(e)) {
      const s = Hn(e, t, n, i);
      return s && Ts(s) && s.catch((o) => {
        Bn(o, t, n);
      }), s;
    }
    if (U(e)) {
      const s = [];
      for (let o = 0; o < e.length; o++) s.push(ct(e[o], t, n, i));
      return s;
    }
  }
  function Bn(e, t, n, i = true) {
    const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || le;
    if (t) {
      let l = t.parent;
      const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; l; ) {
        const u = l.ec;
        if (u) {
          for (let c = 0; c < u.length; c++) if (u[c](e, a, f) === false) return;
        }
        l = l.parent;
      }
      if (o) {
        vt(), Hn(o, null, 10, [
          e,
          a,
          f
        ]), wt();
        return;
      }
    }
    Ma(e, n, s, i, r);
  }
  function Ma(e, t, n, i = true, s = false) {
    if (s) throw e;
    console.error(e);
  }
  const Re = [];
  let st = -1;
  const Jt = [];
  let $t = null, Kt = 0;
  const $r = Promise.resolve();
  let ci = null;
  function Ns(e) {
    const t = ci || $r;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Ia(e) {
    let t = st + 1, n = Re.length;
    for (; t < n; ) {
      const i = t + n >>> 1, s = Re[i], o = An(s);
      o < e || o === e && s.flags & 2 ? t = i + 1 : n = i;
    }
    return t;
  }
  function Ds(e) {
    if (!(e.flags & 1)) {
      const t = An(e), n = Re[Re.length - 1];
      !n || !(e.flags & 2) && t >= An(n) ? Re.push(e) : Re.splice(Ia(t), 0, e), e.flags |= 1, Sr();
    }
  }
  function Sr() {
    ci || (ci = $r.then(Cr));
  }
  function os(e) {
    U(e) ? Jt.push(...e) : $t && e.id === -1 ? $t.splice(Kt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), Sr();
  }
  function no(e, t, n = st + 1) {
    for (; n < Re.length; n++) {
      const i = Re[n];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        Re.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function Tr(e) {
    if (Jt.length) {
      const t = [
        ...new Set(Jt)
      ].sort((n, i) => An(n) - An(i));
      if (Jt.length = 0, $t) {
        $t.push(...t);
        return;
      }
      for ($t = t, Kt = 0; Kt < $t.length; Kt++) {
        const n = $t[Kt];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      $t = null, Kt = 0;
    }
  }
  const An = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Cr(e) {
    try {
      for (st = 0; st < Re.length; st++) {
        const t = Re[st];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Hn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; st < Re.length; st++) {
        const t = Re[st];
        t && (t.flags &= -2);
      }
      st = -1, Re.length = 0, Tr(), ci = null, (Re.length || Jt.length) && Cr();
    }
  }
  let ve = null, Ai = null;
  function ui(e) {
    const t = ve;
    return ve = e, Ai = e && e.type.__scopeId || null, t;
  }
  function ka(e) {
    Ai = e;
  }
  function Na() {
    Ai = null;
  }
  const Da = (e) => Je;
  function Je(e, t = ve, n) {
    if (!t || e._n) return e;
    const i = (...s) => {
      i._d && ho(-1);
      const o = ui(t);
      let r;
      try {
        r = e(...s);
      } finally {
        ui(o), i._d && ho(1);
      }
      return r;
    };
    return i._n = true, i._c = true, i._d = true, i;
  }
  function ee(e, t) {
    if (ve === null) return e;
    const n = Ii(ve), i = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
      let [o, r, l, a = le] = t[s];
      o && (K(o) && (o = {
        mounted: o,
        updated: o
      }), o.deep && ht(r), i.push({
        dir: o,
        instance: n,
        value: r,
        oldValue: void 0,
        arg: l,
        modifiers: a
      }));
    }
    return e;
  }
  function Dt(e, t, n, i) {
    const s = e.dirs, o = t && t.dirs;
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      o && (l.oldValue = o[r].value);
      let a = l.dir[i];
      a && (vt(), ct(a, n, 8, [
        e.el,
        l,
        e,
        t
      ]), wt());
    }
  }
  const La = Symbol("_vte"), Fa = (e) => e.__isTeleport;
  function Ls(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Ls(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function zn(e, t) {
    return K(e) ? Ce({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  }
  function Pr(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  function fi(e, t, n, i, s = false) {
    if (U(e)) {
      e.forEach((w, v) => fi(w, t && (U(t) ? t[v] : t), n, i, s));
      return;
    }
    if (Qt(i) && !s) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && fi(e, t, n, i.component.subTree);
      return;
    }
    const o = i.shapeFlag & 4 ? Ii(i.component) : i.el, r = s ? null : o, { i: l, r: a } = e, f = t && t.r, u = l.refs === le ? l.refs = {} : l.refs, c = l.setupState, h = ie(c), _ = c === le ? () => false : (w) => se(h, w);
    if (f != null && f !== a && (_e(f) ? (u[f] = null, _(f) && (c[f] = null)) : ye(f) && (f.value = null)), K(a)) Hn(a, l, 12, [
      r,
      u
    ]);
    else {
      const w = _e(a), v = ye(a);
      if (w || v) {
        const g = () => {
          if (e.f) {
            const T = w ? _(a) ? c[a] : u[a] : a.value;
            s ? U(T) && Ss(T, o) : U(T) ? T.includes(o) || T.push(o) : w ? (u[a] = [
              o
            ], _(a) && (c[a] = u[a])) : (a.value = [
              o
            ], e.k && (u[e.k] = a.value));
          } else w ? (u[a] = r, _(a) && (c[a] = r)) : v && (a.value = r, e.k && (u[e.k] = r));
        };
        r ? (g.id = -1, Fe(g, n)) : g();
      }
    }
  }
  Ci().requestIdleCallback;
  Ci().cancelIdleCallback;
  const Qt = (e) => !!e.type.__asyncLoader, Ar = (e) => e.type.__isKeepAlive;
  function Ha(e, t) {
    Er(e, "a", t);
  }
  function Ba(e, t) {
    Er(e, "da", t);
  }
  function Er(e, t, n = be) {
    const i = e.__wdc || (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
    if (Ei(t, i, n), n) {
      let s = n.parent;
      for (; s && s.parent; ) Ar(s.parent.vnode) && za(i, t, n, s), s = s.parent;
    }
  }
  function za(e, t, n, i) {
    const s = Ei(t, e, i, true);
    Or(() => {
      Ss(i[t], s);
    }, n);
  }
  function Ei(e, t, n = be, i = false) {
    if (n) {
      const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
        vt();
        const l = jt(n), a = ct(t, n, e, r);
        return l(), wt(), a;
      });
      return i ? s.unshift(o) : s.push(o), o;
    }
  }
  const bt = (e) => (t, n = be) => {
    (!Rn || e === "sp") && Ei(e, (...i) => t(...i), n);
  }, ja = bt("bm"), qa = bt("m"), Va = bt("bu"), Ua = bt("u"), Wa = bt("bum"), Or = bt("um"), Ka = bt("sp"), Ga = bt("rtg"), Ya = bt("rtc");
  function Xa(e, t = be) {
    Ei("ec", e, t);
  }
  const Rr = "components", Ja = "directives";
  function En(e, t) {
    return Mr(Rr, e, true, t) || e;
  }
  const Qa = Symbol.for("v-ndc");
  function Oi(e) {
    return Mr(Ja, e);
  }
  function Mr(e, t, n = true, i = false) {
    const s = ve || be;
    if (s) {
      const o = s.type;
      if (e === Rr) {
        const l = Wc(o, false);
        if (l && (l === t || l === qe(t) || l === Ti(qe(t)))) return o;
      }
      const r = io(s[e] || o[e], t) || io(s.appContext[e], t);
      return !r && i ? o : r;
    }
  }
  function io(e, t) {
    return e && (e[t] || e[qe(t)] || e[Ti(qe(t))]);
  }
  function Et(e, t, n, i) {
    let s;
    const o = n, r = U(e);
    if (r || _e(e)) {
      const l = r && Xt(e);
      let a = false, f = false;
      l && (a = !je(e), f = Mt(e), e = Pi(e)), s = new Array(e.length);
      for (let u = 0, c = e.length; u < c; u++) s[u] = t(a ? f ? li(we(e[u])) : we(e[u]) : e[u], u, void 0, o);
    } else if (typeof e == "number") {
      s = new Array(e);
      for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o);
    } else if (fe(e)) if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, o));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const u = l[a];
        s[a] = t(e[u], u, a, o);
      }
    }
    else s = [];
    return s;
  }
  function _t(e, t, n = {}, i, s) {
    if (ve.ce || ve.parent && Qt(ve.parent) && ve.parent.ce) return t !== "default" && (n.name = t), L(), Ne(ae, null, [
      me("slot", n, i)
    ], 64);
    let o = e[t];
    o && o._c && (o._d = false), L();
    const r = o && Ir(o(n)), l = n.key || r && r.key, a = Ne(ae, {
      key: (l && !Xe(l) ? l : `_${t}`) + ""
    }, r || [], r && e._ === 1 ? 64 : -2);
    return !s && a.scopeId && (a.slotScopeIds = [
      a.scopeId + "-s"
    ]), o && o._c && (o._d = true), a;
  }
  function Ir(e) {
    return e.some((t) => on(t) ? !(t.type === Qe || t.type === ae && !Ir(t.children)) : true) ? e : null;
  }
  const rs = (e) => e ? nl(e) ? Ii(e) : rs(e.parent) : null, wn = Ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => rs(e.parent),
    $root: (e) => rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Nr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ns.bind(e.proxy)),
    $watch: (e) => yc.bind(e)
  }), Ki = (e, t) => e !== le && !e.__isScriptSetup && se(e, t), Za = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: i, data: s, props: o, accessCache: r, type: l, appContext: a } = e;
      let f;
      if (t[0] !== "$") {
        const _ = r[t];
        if (_ !== void 0) switch (_) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
        else {
          if (Ki(i, t)) return r[t] = 1, i[t];
          if (s !== le && se(s, t)) return r[t] = 2, s[t];
          if ((f = e.propsOptions[0]) && se(f, t)) return r[t] = 3, o[t];
          if (n !== le && se(n, t)) return r[t] = 4, n[t];
          ls && (r[t] = 0);
        }
      }
      const u = wn[t];
      let c, h;
      if (u) return t === "$attrs" && Se(e.attrs, "get", ""), u(e);
      if ((c = l.__cssModules) && (c = c[t])) return c;
      if (n !== le && se(n, t)) return r[t] = 4, n[t];
      if (h = a.config.globalProperties, se(h, t)) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: o } = e;
      return Ki(s, t) ? (s[t] = n, true) : i !== le && se(i, t) ? (i[t] = n, true) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: o } }, r) {
      let l;
      return !!n[r] || e !== le && se(e, r) || Ki(t, r) || (l = o[0]) && se(l, r) || se(i, r) || se(wn, r) || se(s.config.globalProperties, r);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function so(e) {
    return U(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  function ec(e) {
    const t = zc();
    let n = e();
    return ds(), Ts(n) && (n = n.catch((i) => {
      throw jt(t), i;
    })), [
      n,
      () => jt(t)
    ];
  }
  let ls = true;
  function tc(e) {
    const t = Nr(e), n = e.proxy, i = e.ctx;
    ls = false, t.beforeCreate && oo(t.beforeCreate, e, "bc");
    const { data: s, computed: o, methods: r, watch: l, provide: a, inject: f, created: u, beforeMount: c, mounted: h, beforeUpdate: _, updated: w, activated: v, deactivated: g, beforeDestroy: T, beforeUnmount: b, destroyed: F, unmounted: N, render: A, renderTracked: j, renderTriggered: Y, errorCaptured: P, serverPrefetch: M, expose: D, inheritAttrs: H, components: te, directives: de, filters: re } = t;
    if (f && nc(f, i, null), r) for (const X in r) {
      const J = r[X];
      K(J) && (i[X] = J.bind(n));
    }
    if (s) {
      const X = s.call(n, n);
      fe(X) && (e.data = Ms(X));
    }
    if (ls = true, o) for (const X in o) {
      const J = o[X], xe = K(J) ? J.bind(n, n) : K(J.get) ? J.get.bind(n, n) : rt, Vt = !K(J) && K(J.set) ? J.set.bind(n) : rt, Nt = He({
        get: xe,
        set: Vt
      });
      Object.defineProperty(i, X, {
        enumerable: true,
        configurable: true,
        get: () => Nt.value,
        set: (Ze) => Nt.value = Ze
      });
    }
    if (l) for (const X in l) kr(l[X], i, n, X);
    if (a) {
      const X = K(a) ? a.call(n) : a;
      Reflect.ownKeys(X).forEach((J) => {
        ac(J, X[J]);
      });
    }
    u && oo(u, e, "c");
    function ne(X, J) {
      U(J) ? J.forEach((xe) => X(xe.bind(n))) : J && X(J.bind(n));
    }
    if (ne(ja, c), ne(qa, h), ne(Va, _), ne(Ua, w), ne(Ha, v), ne(Ba, g), ne(Xa, P), ne(Ya, j), ne(Ga, Y), ne(Wa, b), ne(Or, N), ne(Ka, M), U(D)) if (D.length) {
      const X = e.exposed || (e.exposed = {});
      D.forEach((J) => {
        Object.defineProperty(X, J, {
          get: () => n[J],
          set: (xe) => n[J] = xe
        });
      });
    } else e.exposed || (e.exposed = {});
    A && e.render === rt && (e.render = A), H != null && (e.inheritAttrs = H), te && (e.components = te), de && (e.directives = de), M && Pr(e);
  }
  function nc(e, t, n = rt) {
    U(e) && (e = as(e));
    for (const i in e) {
      const s = e[i];
      let o;
      fe(s) ? "default" in s ? o = Qn(s.from || i, s.default, true) : o = Qn(s.from || i) : o = Qn(s), ye(o) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => o.value,
        set: (r) => o.value = r
      }) : t[i] = o;
    }
  }
  function oo(e, t, n) {
    ct(U(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function kr(e, t, n, i) {
    let s = i.includes(".") ? Gr(n, i) : () => n[i];
    if (_e(e)) {
      const o = t[e];
      K(o) && Be(s, o);
    } else if (K(e)) Be(s, e.bind(n));
    else if (fe(e)) if (U(e)) e.forEach((o) => kr(o, t, n, i));
    else {
      const o = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(o) && Be(s, o, e);
    }
  }
  function Nr(e) {
    const t = e.type, { mixins: n, extends: i } = t, { mixins: s, optionsCache: o, config: { optionMergeStrategies: r } } = e.appContext, l = o.get(t);
    let a;
    return l ? a = l : !s.length && !n && !i ? a = t : (a = {}, s.length && s.forEach((f) => di(a, f, r, true)), di(a, t, r)), fe(t) && o.set(t, a), a;
  }
  function di(e, t, n, i = false) {
    const { mixins: s, extends: o } = t;
    o && di(e, o, n, true), s && s.forEach((r) => di(e, r, n, true));
    for (const r in t) if (!(i && r === "expose")) {
      const l = ic[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
    return e;
  }
  const ic = {
    data: ro,
    props: lo,
    emits: lo,
    methods: _n,
    computed: _n,
    beforeCreate: Ae,
    created: Ae,
    beforeMount: Ae,
    mounted: Ae,
    beforeUpdate: Ae,
    updated: Ae,
    beforeDestroy: Ae,
    beforeUnmount: Ae,
    destroyed: Ae,
    unmounted: Ae,
    activated: Ae,
    deactivated: Ae,
    errorCaptured: Ae,
    serverPrefetch: Ae,
    components: _n,
    directives: _n,
    watch: oc,
    provide: ro,
    inject: sc
  };
  function ro(e, t) {
    return t ? e ? function() {
      return Ce(K(e) ? e.call(this, this) : e, K(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function sc(e, t) {
    return _n(as(e), as(t));
  }
  function as(e) {
    if (U(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Ae(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function _n(e, t) {
    return e ? Ce(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function lo(e, t) {
    return e ? U(e) && U(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Ce(/* @__PURE__ */ Object.create(null), so(e), so(t ?? {})) : t;
  }
  function oc(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ce(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) n[i] = Ae(e[i], t[i]);
    return n;
  }
  function Dr() {
    return {
      app: null,
      config: {
        isNativeTag: Fl,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let rc = 0;
  function lc(e, t) {
    return function(i, s = null) {
      K(i) || (i = Ce({}, i)), s != null && !fe(s) && (s = null);
      const o = Dr(), r = /* @__PURE__ */ new WeakSet(), l = [];
      let a = false;
      const f = o.app = {
        _uid: rc++,
        _component: i,
        _props: s,
        _container: null,
        _context: o,
        _instance: null,
        version: Yc,
        get config() {
          return o.config;
        },
        set config(u) {
        },
        use(u, ...c) {
          return r.has(u) || (u && K(u.install) ? (r.add(u), u.install(f, ...c)) : K(u) && (r.add(u), u(f, ...c))), f;
        },
        mixin(u) {
          return o.mixins.includes(u) || o.mixins.push(u), f;
        },
        component(u, c) {
          return c ? (o.components[u] = c, f) : o.components[u];
        },
        directive(u, c) {
          return c ? (o.directives[u] = c, f) : o.directives[u];
        },
        mount(u, c, h) {
          if (!a) {
            const _ = f._ceVNode || me(i, s);
            return _.appContext = o, h === true ? h = "svg" : h === false && (h = void 0), e(_, u, h), a = true, f._container = u, u.__vue_app__ = f, Ii(_.component);
          }
        },
        onUnmount(u) {
          l.push(u);
        },
        unmount() {
          a && (ct(l, f._instance, 16), e(null, f._container), delete f._container.__vue_app__);
        },
        provide(u, c) {
          return o.provides[u] = c, f;
        },
        runWithContext(u) {
          const c = Zt;
          Zt = f;
          try {
            return u();
          } finally {
            Zt = c;
          }
        }
      };
      return f;
    };
  }
  let Zt = null;
  function ac(e, t) {
    if (be) {
      let n = be.provides;
      const i = be.parent && be.parent.provides;
      i === n && (n = be.provides = Object.create(i)), n[e] = t;
    }
  }
  function Qn(e, t, n = false) {
    const i = be || ve;
    if (i || Zt) {
      let s = Zt ? Zt._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (s && e in s) return s[e];
      if (arguments.length > 1) return n && K(t) ? t.call(i && i.proxy) : t;
    }
  }
  const Lr = {}, Fr = () => Object.create(Lr), Hr = (e) => Object.getPrototypeOf(e) === Lr;
  function cc(e, t, n, i = false) {
    const s = {}, o = Fr();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Br(e, t, s, o);
    for (const r in e.propsOptions[0]) r in s || (s[r] = void 0);
    n ? e.props = i ? s : ba(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
  }
  function uc(e, t, n, i) {
    const { props: s, attrs: o, vnode: { patchFlag: r } } = e, l = ie(s), [a] = e.propsOptions;
    let f = false;
    if ((i || r > 0) && !(r & 16)) {
      if (r & 8) {
        const u = e.vnode.dynamicProps;
        for (let c = 0; c < u.length; c++) {
          let h = u[c];
          if (Ri(e.emitsOptions, h)) continue;
          const _ = t[h];
          if (a) if (se(o, h)) _ !== o[h] && (o[h] = _, f = true);
          else {
            const w = qe(h);
            s[w] = cs(a, l, w, _, e, false);
          }
          else _ !== o[h] && (o[h] = _, f = true);
        }
      }
    } else {
      Br(e, t, s, o) && (f = true);
      let u;
      for (const c in l) (!t || !se(t, c) && ((u = kt(c)) === c || !se(t, u))) && (a ? n && (n[c] !== void 0 || n[u] !== void 0) && (s[c] = cs(a, l, c, void 0, e, true)) : delete s[c]);
      if (o !== l) for (const c in o) (!t || !se(t, c)) && (delete o[c], f = true);
    }
    f && pt(e.attrs, "set", "");
  }
  function Br(e, t, n, i) {
    const [s, o] = e.propsOptions;
    let r = false, l;
    if (t) for (let a in t) {
      if (gn(a)) continue;
      const f = t[a];
      let u;
      s && se(s, u = qe(a)) ? !o || !o.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : Ri(e.emitsOptions, a) || (!(a in i) || f !== i[a]) && (i[a] = f, r = true);
    }
    if (o) {
      const a = ie(n), f = l || le;
      for (let u = 0; u < o.length; u++) {
        const c = o[u];
        n[c] = cs(s, a, c, f[c], e, !se(f, c));
      }
    }
    return r;
  }
  function cs(e, t, n, i, s, o) {
    const r = e[n];
    if (r != null) {
      const l = se(r, "default");
      if (l && i === void 0) {
        const a = r.default;
        if (r.type !== Function && !r.skipFactory && K(a)) {
          const { propsDefaults: f } = s;
          if (n in f) i = f[n];
          else {
            const u = jt(s);
            i = f[n] = a.call(null, t), u();
          }
        } else i = a;
        s.ce && s.ce._setProp(n, i);
      }
      r[0] && (o && !l ? i = false : r[1] && (i === "" || i === kt(n)) && (i = true));
    }
    return i;
  }
  const fc = /* @__PURE__ */ new WeakMap();
  function zr(e, t, n = false) {
    const i = n ? fc : t.propsCache, s = i.get(e);
    if (s) return s;
    const o = e.props, r = {}, l = [];
    let a = false;
    if (!K(e)) {
      const u = (c) => {
        a = true;
        const [h, _] = zr(c, t, true);
        Ce(r, h), _ && l.push(..._);
      };
      !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
    }
    if (!o && !a) return fe(e) && i.set(e, Gt), Gt;
    if (U(o)) for (let u = 0; u < o.length; u++) {
      const c = qe(o[u]);
      ao(c) && (r[c] = le);
    }
    else if (o) for (const u in o) {
      const c = qe(u);
      if (ao(c)) {
        const h = o[u], _ = r[c] = U(h) || K(h) ? {
          type: h
        } : Ce({}, h), w = _.type;
        let v = false, g = true;
        if (U(w)) for (let T = 0; T < w.length; ++T) {
          const b = w[T], F = K(b) && b.name;
          if (F === "Boolean") {
            v = true;
            break;
          } else F === "String" && (g = false);
        }
        else v = K(w) && w.name === "Boolean";
        _[0] = v, _[1] = g, (v || se(_, "default")) && l.push(c);
      }
    }
    const f = [
      r,
      l
    ];
    return fe(e) && i.set(e, f), f;
  }
  function ao(e) {
    return e[0] !== "$" && !gn(e);
  }
  const Fs = (e) => e[0] === "_" || e === "$stable", Hs = (e) => U(e) ? e.map(Ve) : [
    Ve(e)
  ], dc = (e, t, n) => {
    if (t._n) return t;
    const i = Je((...s) => Hs(t(...s)), n);
    return i._c = false, i;
  }, jr = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
      if (Fs(s)) continue;
      const o = e[s];
      if (K(o)) t[s] = dc(s, o, i);
      else if (o != null) {
        const r = Hs(o);
        t[s] = () => r;
      }
    }
  }, qr = (e, t) => {
    const n = Hs(t);
    e.slots.default = () => n;
  }, Vr = (e, t, n) => {
    for (const i in t) (n || !Fs(i)) && (e[i] = t[i]);
  }, pc = (e, t, n) => {
    const i = e.slots = Fr();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Vr(i, t, n), n && tr(i, "_", s, true)) : jr(t, i);
    } else t && qr(e, t);
  }, hc = (e, t, n) => {
    const { vnode: i, slots: s } = e;
    let o = true, r = le;
    if (i.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? o = false : Vr(s, t, n) : (o = !t.$stable, jr(t, s)), r = t;
    } else t && (qr(e, t), r = {
      default: 1
    });
    if (o) for (const l in s) !Fs(l) && r[l] == null && delete s[l];
  }, Fe = kc;
  function _c(e) {
    return gc(e);
  }
  function gc(e, t) {
    const n = Ci();
    n.__VUE__ = true;
    const { insert: i, remove: s, patchProp: o, createElement: r, createText: l, createComment: a, setText: f, setElementText: u, parentNode: c, nextSibling: h, setScopeId: _ = rt, insertStaticContent: w } = e, v = (d, p, m, $ = null, y = null, x = null, I = void 0, R = null, O = !!p.dynamicChildren) => {
      if (d === p) return;
      d && !Tt(d, p) && ($ = Vn(d), Ze(d, y, x, true), d = null), p.patchFlag === -2 && (O = false, p.dynamicChildren = null);
      const { type: S, ref: q, shapeFlag: k } = p;
      switch (S) {
        case Mi:
          g(d, p, m, $);
          break;
        case Qe:
          T(d, p, m, $);
          break;
        case Zn:
          d == null && b(p, m, $, I);
          break;
        case ae:
          te(d, p, m, $, y, x, I, R, O);
          break;
        default:
          k & 1 ? A(d, p, m, $, y, x, I, R, O) : k & 6 ? de(d, p, m, $, y, x, I, R, O) : (k & 64 || k & 128) && S.process(d, p, m, $, y, x, I, R, O, un);
      }
      q != null && y && fi(q, d && d.ref, x, p || d, !p);
    }, g = (d, p, m, $) => {
      if (d == null) i(p.el = l(p.children), m, $);
      else {
        const y = p.el = d.el;
        p.children !== d.children && f(y, p.children);
      }
    }, T = (d, p, m, $) => {
      d == null ? i(p.el = a(p.children || ""), m, $) : p.el = d.el;
    }, b = (d, p, m, $) => {
      [d.el, d.anchor] = w(d.children, p, m, $, d.el, d.anchor);
    }, F = ({ el: d, anchor: p }, m, $) => {
      let y;
      for (; d && d !== p; ) y = h(d), i(d, m, $), d = y;
      i(p, m, $);
    }, N = ({ el: d, anchor: p }) => {
      let m;
      for (; d && d !== p; ) m = h(d), s(d), d = m;
      s(p);
    }, A = (d, p, m, $, y, x, I, R, O) => {
      p.type === "svg" ? I = "svg" : p.type === "math" && (I = "mathml"), d == null ? j(p, m, $, y, x, I, R, O) : M(d, p, y, x, I, R, O);
    }, j = (d, p, m, $, y, x, I, R) => {
      let O, S;
      const { props: q, shapeFlag: k, transition: B, dirs: W } = d;
      if (O = d.el = r(d.type, x, q && q.is, q), k & 8 ? u(O, d.children) : k & 16 && P(d.children, O, null, $, y, Gi(d, x), I, R), W && Dt(d, null, $, "created"), Y(O, d, d.scopeId, I, $), q) {
        for (const ce in q) ce !== "value" && !gn(ce) && o(O, ce, null, q[ce], x, $);
        "value" in q && o(O, "value", null, q.value, x), (S = q.onVnodeBeforeMount) && it(S, $, d);
      }
      W && Dt(d, null, $, "beforeMount");
      const Q = mc(y, B);
      Q && B.beforeEnter(O), i(O, p, m), ((S = q && q.onVnodeMounted) || Q || W) && Fe(() => {
        S && it(S, $, d), Q && B.enter(O), W && Dt(d, null, $, "mounted");
      }, y);
    }, Y = (d, p, m, $, y) => {
      if (m && _(d, m), $) for (let x = 0; x < $.length; x++) _(d, $[x]);
      if (y) {
        let x = y.subTree;
        if (p === x || Xr(x.type) && (x.ssContent === p || x.ssFallback === p)) {
          const I = y.vnode;
          Y(d, I, I.scopeId, I.slotScopeIds, y.parent);
        }
      }
    }, P = (d, p, m, $, y, x, I, R, O = 0) => {
      for (let S = O; S < d.length; S++) {
        const q = d[S] = R ? St(d[S]) : Ve(d[S]);
        v(null, q, p, m, $, y, x, I, R);
      }
    }, M = (d, p, m, $, y, x, I) => {
      const R = p.el = d.el;
      let { patchFlag: O, dynamicChildren: S, dirs: q } = p;
      O |= d.patchFlag & 16;
      const k = d.props || le, B = p.props || le;
      let W;
      if (m && Lt(m, false), (W = B.onVnodeBeforeUpdate) && it(W, m, p, d), q && Dt(p, d, m, "beforeUpdate"), m && Lt(m, true), (k.innerHTML && B.innerHTML == null || k.textContent && B.textContent == null) && u(R, ""), S ? D(d.dynamicChildren, S, R, m, $, Gi(p, y), x) : I || J(d, p, R, null, m, $, Gi(p, y), x, false), O > 0) {
        if (O & 16) H(R, k, B, m, y);
        else if (O & 2 && k.class !== B.class && o(R, "class", null, B.class, y), O & 4 && o(R, "style", k.style, B.style, y), O & 8) {
          const Q = p.dynamicProps;
          for (let ce = 0; ce < Q.length; ce++) {
            const oe = Q[ce], De = k[oe], Me = B[oe];
            (Me !== De || oe === "value") && o(R, oe, De, Me, y, m);
          }
        }
        O & 1 && d.children !== p.children && u(R, p.children);
      } else !I && S == null && H(R, k, B, m, y);
      ((W = B.onVnodeUpdated) || q) && Fe(() => {
        W && it(W, m, p, d), q && Dt(p, d, m, "updated");
      }, $);
    }, D = (d, p, m, $, y, x, I) => {
      for (let R = 0; R < p.length; R++) {
        const O = d[R], S = p[R], q = O.el && (O.type === ae || !Tt(O, S) || O.shapeFlag & 198) ? c(O.el) : m;
        v(O, S, q, null, $, y, x, I, true);
      }
    }, H = (d, p, m, $, y) => {
      if (p !== m) {
        if (p !== le) for (const x in p) !gn(x) && !(x in m) && o(d, x, p[x], null, y, $);
        for (const x in m) {
          if (gn(x)) continue;
          const I = m[x], R = p[x];
          I !== R && x !== "value" && o(d, x, R, I, y, $);
        }
        "value" in m && o(d, "value", p.value, m.value, y);
      }
    }, te = (d, p, m, $, y, x, I, R, O) => {
      const S = p.el = d ? d.el : l(""), q = p.anchor = d ? d.anchor : l("");
      let { patchFlag: k, dynamicChildren: B, slotScopeIds: W } = p;
      W && (R = R ? R.concat(W) : W), d == null ? (i(S, m, $), i(q, m, $), P(p.children || [], m, q, y, x, I, R, O)) : k > 0 && k & 64 && B && d.dynamicChildren ? (D(d.dynamicChildren, B, m, y, x, I, R), (p.key != null || y && p === y.subTree) && Ur(d, p, true)) : J(d, p, m, q, y, x, I, R, O);
    }, de = (d, p, m, $, y, x, I, R, O) => {
      p.slotScopeIds = R, d == null ? p.shapeFlag & 512 ? y.ctx.activate(p, m, $, I, O) : re(p, m, $, y, x, I, O) : Pe(d, p, O);
    }, re = (d, p, m, $, y, x, I) => {
      const R = d.component = Bc(d, $, y);
      if (Ar(d) && (R.ctx.renderer = un), jc(R, false, I), R.asyncDep) {
        if (y && y.registerDep(R, ne, I), !d.el) {
          const O = R.subTree = me(Qe);
          T(null, O, p, m);
        }
      } else ne(R, d, p, m, y, x, I);
    }, Pe = (d, p, m) => {
      const $ = p.component = d.component;
      if (Pc(d, p, m)) if ($.asyncDep && !$.asyncResolved) {
        X($, p, m);
        return;
      } else $.next = p, $.update();
      else p.el = d.el, $.vnode = p;
    }, ne = (d, p, m, $, y, x, I) => {
      const R = () => {
        if (d.isMounted) {
          let { next: k, bu: B, u: W, parent: Q, vnode: ce } = d;
          {
            const tt = Wr(d);
            if (tt) {
              k && (k.el = ce.el, X(d, k, I)), tt.asyncDep.then(() => {
                d.isUnmounted || R();
              });
              return;
            }
          }
          let oe = k, De;
          Lt(d, false), k ? (k.el = ce.el, X(d, k, I)) : k = ce, B && Jn(B), (De = k.props && k.props.onVnodeBeforeUpdate) && it(De, Q, k, ce), Lt(d, true);
          const Me = uo(d), et = d.subTree;
          d.subTree = Me, v(et, Me, c(et.el), Vn(et), d, y, x), k.el = Me.el, oe === null && Bs(d, Me.el), W && Fe(W, y), (De = k.props && k.props.onVnodeUpdated) && Fe(() => it(De, Q, k, ce), y);
        } else {
          let k;
          const { el: B, props: W } = p, { bm: Q, m: ce, parent: oe, root: De, type: Me } = d, et = Qt(p);
          Lt(d, false), Q && Jn(Q), !et && (k = W && W.onVnodeBeforeMount) && it(k, oe, p), Lt(d, true);
          {
            De.ce && De.ce._injectChildStyle(Me);
            const tt = d.subTree = uo(d);
            v(null, tt, m, $, d, y, x), p.el = tt.el;
          }
          if (ce && Fe(ce, y), !et && (k = W && W.onVnodeMounted)) {
            const tt = p;
            Fe(() => it(k, oe, tt), y);
          }
          (p.shapeFlag & 256 || oe && Qt(oe.vnode) && oe.vnode.shapeFlag & 256) && d.a && Fe(d.a, y), d.isMounted = true, p = m = $ = null;
        }
      };
      d.scope.on();
      const O = d.effect = new or(R);
      d.scope.off();
      const S = d.update = O.run.bind(O), q = d.job = O.runIfDirty.bind(O);
      q.i = d, q.id = d.uid, O.scheduler = () => Ds(q), Lt(d, true), S();
    }, X = (d, p, m) => {
      p.component = d;
      const $ = d.vnode.props;
      d.vnode = p, d.next = null, uc(d, p.props, $, m), hc(d, p.children, m), vt(), no(d), wt();
    }, J = (d, p, m, $, y, x, I, R, O = false) => {
      const S = d && d.children, q = d ? d.shapeFlag : 0, k = p.children, { patchFlag: B, shapeFlag: W } = p;
      if (B > 0) {
        if (B & 128) {
          Vt(S, k, m, $, y, x, I, R, O);
          return;
        } else if (B & 256) {
          xe(S, k, m, $, y, x, I, R, O);
          return;
        }
      }
      W & 8 ? (q & 16 && cn(S, y, x), k !== S && u(m, k)) : q & 16 ? W & 16 ? Vt(S, k, m, $, y, x, I, R, O) : cn(S, y, x, true) : (q & 8 && u(m, ""), W & 16 && P(k, m, $, y, x, I, R, O));
    }, xe = (d, p, m, $, y, x, I, R, O) => {
      d = d || Gt, p = p || Gt;
      const S = d.length, q = p.length, k = Math.min(S, q);
      let B;
      for (B = 0; B < k; B++) {
        const W = p[B] = O ? St(p[B]) : Ve(p[B]);
        v(d[B], W, m, null, y, x, I, R, O);
      }
      S > q ? cn(d, y, x, true, false, k) : P(p, m, $, y, x, I, R, O, k);
    }, Vt = (d, p, m, $, y, x, I, R, O) => {
      let S = 0;
      const q = p.length;
      let k = d.length - 1, B = q - 1;
      for (; S <= k && S <= B; ) {
        const W = d[S], Q = p[S] = O ? St(p[S]) : Ve(p[S]);
        if (Tt(W, Q)) v(W, Q, m, null, y, x, I, R, O);
        else break;
        S++;
      }
      for (; S <= k && S <= B; ) {
        const W = d[k], Q = p[B] = O ? St(p[B]) : Ve(p[B]);
        if (Tt(W, Q)) v(W, Q, m, null, y, x, I, R, O);
        else break;
        k--, B--;
      }
      if (S > k) {
        if (S <= B) {
          const W = B + 1, Q = W < q ? p[W].el : $;
          for (; S <= B; ) v(null, p[S] = O ? St(p[S]) : Ve(p[S]), m, Q, y, x, I, R, O), S++;
        }
      } else if (S > B) for (; S <= k; ) Ze(d[S], y, x, true), S++;
      else {
        const W = S, Q = S, ce = /* @__PURE__ */ new Map();
        for (S = Q; S <= B; S++) {
          const Le = p[S] = O ? St(p[S]) : Ve(p[S]);
          Le.key != null && ce.set(Le.key, S);
        }
        let oe, De = 0;
        const Me = B - Q + 1;
        let et = false, tt = 0;
        const fn = new Array(Me);
        for (S = 0; S < Me; S++) fn[S] = 0;
        for (S = W; S <= k; S++) {
          const Le = d[S];
          if (De >= Me) {
            Ze(Le, y, x, true);
            continue;
          }
          let nt;
          if (Le.key != null) nt = ce.get(Le.key);
          else for (oe = Q; oe <= B; oe++) if (fn[oe - Q] === 0 && Tt(Le, p[oe])) {
            nt = oe;
            break;
          }
          nt === void 0 ? Ze(Le, y, x, true) : (fn[nt - Q] = S + 1, nt >= tt ? tt = nt : et = true, v(Le, p[nt], m, null, y, x, I, R, O), De++);
        }
        const Xs = et ? vc(fn) : Gt;
        for (oe = Xs.length - 1, S = Me - 1; S >= 0; S--) {
          const Le = Q + S, nt = p[Le], Js = Le + 1 < q ? p[Le + 1].el : $;
          fn[S] === 0 ? v(null, nt, m, Js, y, x, I, R, O) : et && (oe < 0 || S !== Xs[oe] ? Nt(nt, m, Js, 2) : oe--);
        }
      }
    }, Nt = (d, p, m, $, y = null) => {
      const { el: x, type: I, transition: R, children: O, shapeFlag: S } = d;
      if (S & 6) {
        Nt(d.component.subTree, p, m, $);
        return;
      }
      if (S & 128) {
        d.suspense.move(p, m, $);
        return;
      }
      if (S & 64) {
        I.move(d, p, m, un);
        return;
      }
      if (I === ae) {
        i(x, p, m);
        for (let k = 0; k < O.length; k++) Nt(O[k], p, m, $);
        i(d.anchor, p, m);
        return;
      }
      if (I === Zn) {
        F(d, p, m);
        return;
      }
      if ($ !== 2 && S & 1 && R) if ($ === 0) R.beforeEnter(x), i(x, p, m), Fe(() => R.enter(x), y);
      else {
        const { leave: k, delayLeave: B, afterLeave: W } = R, Q = () => {
          d.ctx.isUnmounted ? s(x) : i(x, p, m);
        }, ce = () => {
          k(x, () => {
            Q(), W && W();
          });
        };
        B ? B(x, Q, ce) : ce();
      }
      else i(x, p, m);
    }, Ze = (d, p, m, $ = false, y = false) => {
      const { type: x, props: I, ref: R, children: O, dynamicChildren: S, shapeFlag: q, patchFlag: k, dirs: B, cacheIndex: W } = d;
      if (k === -2 && (y = false), R != null && (vt(), fi(R, null, m, d, true), wt()), W != null && (p.renderCache[W] = void 0), q & 256) {
        p.ctx.deactivate(d);
        return;
      }
      const Q = q & 1 && B, ce = !Qt(d);
      let oe;
      if (ce && (oe = I && I.onVnodeBeforeUnmount) && it(oe, p, d), q & 6) Ll(d.component, m, $);
      else {
        if (q & 128) {
          d.suspense.unmount(m, $);
          return;
        }
        Q && Dt(d, null, p, "beforeUnmount"), q & 64 ? d.type.remove(d, p, m, un, $) : S && !S.hasOnce && (x !== ae || k > 0 && k & 64) ? cn(S, p, m, false, true) : (x === ae && k & 384 || !y && q & 16) && cn(O, p, m), $ && Gs(d);
      }
      (ce && (oe = I && I.onVnodeUnmounted) || Q) && Fe(() => {
        oe && it(oe, p, d), Q && Dt(d, null, p, "unmounted");
      }, m);
    }, Gs = (d) => {
      const { type: p, el: m, anchor: $, transition: y } = d;
      if (p === ae) {
        Dl(m, $);
        return;
      }
      if (p === Zn) {
        N(d);
        return;
      }
      const x = () => {
        s(m), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (d.shapeFlag & 1 && y && !y.persisted) {
        const { leave: I, delayLeave: R } = y, O = () => I(m, x);
        R ? R(d.el, x, O) : O();
      } else x();
    }, Dl = (d, p) => {
      let m;
      for (; d !== p; ) m = h(d), s(d), d = m;
      s(p);
    }, Ll = (d, p, m) => {
      const { bum: $, scope: y, job: x, subTree: I, um: R, m: O, a: S, parent: q, slots: { __: k } } = d;
      co(O), co(S), $ && Jn($), q && U(k) && k.forEach((B) => {
        q.renderCache[B] = void 0;
      }), y.stop(), x && (x.flags |= 8, Ze(I, d, p, m)), R && Fe(R, p), Fe(() => {
        d.isUnmounted = true;
      }, p), p && p.pendingBranch && !p.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve());
    }, cn = (d, p, m, $ = false, y = false, x = 0) => {
      for (let I = x; I < d.length; I++) Ze(d[I], p, m, $, y);
    }, Vn = (d) => {
      if (d.shapeFlag & 6) return Vn(d.component.subTree);
      if (d.shapeFlag & 128) return d.suspense.next();
      const p = h(d.anchor || d.el), m = p && p[La];
      return m ? h(m) : p;
    };
    let zi = false;
    const Ys = (d, p, m) => {
      d == null ? p._vnode && Ze(p._vnode, null, null, true) : v(p._vnode || null, d, p, null, null, null, m), p._vnode = d, zi || (zi = true, no(), Tr(), zi = false);
    }, un = {
      p: v,
      um: Ze,
      m: Nt,
      r: Gs,
      mt: re,
      mc: P,
      pc: J,
      pbc: D,
      n: Vn,
      o: e
    };
    return {
      render: Ys,
      hydrate: void 0,
      createApp: lc(Ys)
    };
  }
  function Gi({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function Lt({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function mc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Ur(e, t, n = false) {
    const i = e.children, s = t.children;
    if (U(i) && U(s)) for (let o = 0; o < i.length; o++) {
      const r = i[o];
      let l = s[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = St(s[o]), l.el = r.el), !n && l.patchFlag !== -2 && Ur(r, l)), l.type === Mi && (l.el = r.el), l.type === Qe && !l.el && (l.el = r.el);
    }
  }
  function vc(e) {
    const t = e.slice(), n = [
      0
    ];
    let i, s, o, r, l;
    const a = e.length;
    for (i = 0; i < a; i++) {
      const f = e[i];
      if (f !== 0) {
        if (s = n[n.length - 1], e[s] < f) {
          t[i] = s, n.push(i);
          continue;
        }
        for (o = 0, r = n.length - 1; o < r; ) l = o + r >> 1, e[n[l]] < f ? o = l + 1 : r = l;
        f < e[n[o]] && (o > 0 && (t[i] = n[o - 1]), n[o] = i);
      }
    }
    for (o = n.length, r = n[o - 1]; o-- > 0; ) n[o] = r, r = t[r];
    return n;
  }
  function Wr(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Wr(t);
  }
  function co(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const wc = Symbol.for("v-scx"), bc = () => Qn(wc);
  function Be(e, t, n) {
    return Kr(e, t, n);
  }
  function Kr(e, t, n = le) {
    const { immediate: i, deep: s, flush: o, once: r } = n, l = Ce({}, n), a = t && i || !t && o !== "post";
    let f;
    if (Rn) {
      if (o === "sync") {
        const _ = bc();
        f = _.__watcherHandles || (_.__watcherHandles = []);
      } else if (!a) {
        const _ = () => {
        };
        return _.stop = rt, _.resume = rt, _.pause = rt, _;
      }
    }
    const u = be;
    l.call = (_, w, v) => ct(_, u, w, v);
    let c = false;
    o === "post" ? l.scheduler = (_) => {
      Fe(_, u && u.suspense);
    } : o !== "sync" && (c = true, l.scheduler = (_, w) => {
      w ? _() : Ds(_);
    }), l.augmentJob = (_) => {
      t && (_.flags |= 4), c && (_.flags |= 2, u && (_.id = u.uid, _.i = u));
    };
    const h = Ra(e, t, l);
    return Rn && (f ? f.push(h) : a && h()), h;
  }
  function yc(e, t, n) {
    const i = this.proxy, s = _e(e) ? e.includes(".") ? Gr(i, e) : () => i[e] : e.bind(i, i);
    let o;
    K(t) ? o = t : (o = t.handler, n = t);
    const r = jt(this), l = Kr(s, o.bind(i), n);
    return r(), l;
  }
  function Gr(e, t) {
    const n = t.split(".");
    return () => {
      let i = e;
      for (let s = 0; s < n.length && i; s++) i = i[n[s]];
      return i;
    };
  }
  const xc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${kt(t)}Modifiers`];
  function $c(e, t, ...n) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || le;
    let s = n;
    const o = t.startsWith("update:"), r = o && xc(i, t.slice(7));
    r && (r.trim && (s = n.map((u) => _e(u) ? u.trim() : u)), r.number && (s = n.map(oi)));
    let l, a = i[l = ji(t)] || i[l = ji(qe(t))];
    !a && o && (a = i[l = ji(kt(t))]), a && ct(a, e, 6, s);
    const f = i[l + "Once"];
    if (f) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[l]) return;
      e.emitted[l] = true, ct(f, e, 6, s);
    }
  }
  function Yr(e, t, n = false) {
    const i = t.emitsCache, s = i.get(e);
    if (s !== void 0) return s;
    const o = e.emits;
    let r = {}, l = false;
    if (!K(e)) {
      const a = (f) => {
        const u = Yr(f, t, true);
        u && (l = true, Ce(r, u));
      };
      !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
    }
    return !o && !l ? (fe(e) && i.set(e, null), null) : (U(o) ? o.forEach((a) => r[a] = null) : Ce(r, o), fe(e) && i.set(e, r), r);
  }
  function Ri(e, t) {
    return !e || !xi(t) ? false : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, kt(t)) || se(e, t));
  }
  function uo(e) {
    const { type: t, vnode: n, proxy: i, withProxy: s, propsOptions: [o], slots: r, attrs: l, emit: a, render: f, renderCache: u, props: c, data: h, setupState: _, ctx: w, inheritAttrs: v } = e, g = ui(e);
    let T, b;
    try {
      if (n.shapeFlag & 4) {
        const N = s || i, A = N;
        T = Ve(f.call(A, N, u, c, _, h, w)), b = l;
      } else {
        const N = t;
        T = Ve(N.length > 1 ? N(c, {
          attrs: l,
          slots: r,
          emit: a
        }) : N(c, null)), b = t.props ? l : Tc(l);
      }
    } catch (N) {
      bn.length = 0, Bn(N, e, 1), T = me(Qe);
    }
    let F = T;
    if (b && v !== false) {
      const N = Object.keys(b), { shapeFlag: A } = F;
      N.length && A & 7 && (o && N.some($s) && (b = Cc(b, o)), F = rn(F, b, false, true));
    }
    return n.dirs && (F = rn(F, null, false, true), F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs), n.transition && Ls(F, n.transition), T = F, ui(g), T;
  }
  function Sc(e, t = true) {
    let n;
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      if (on(s)) {
        if (s.type !== Qe || s.children === "v-if") {
          if (n) return;
          n = s;
        }
      } else return;
    }
    return n;
  }
  const Tc = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || xi(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Cc = (e, t) => {
    const n = {};
    for (const i in e) (!$s(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
  function Pc(e, t, n) {
    const { props: i, children: s, component: o } = e, { props: r, children: l, patchFlag: a } = t, f = o.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && a >= 0) {
      if (a & 1024) return true;
      if (a & 16) return i ? fo(i, r, f) : !!r;
      if (a & 8) {
        const u = t.dynamicProps;
        for (let c = 0; c < u.length; c++) {
          const h = u[c];
          if (r[h] !== i[h] && !Ri(f, h)) return true;
        }
      }
    } else return (s || l) && (!l || !l.$stable) ? true : i === r ? false : i ? r ? fo(i, r, f) : true : !!r;
    return false;
  }
  function fo(e, t, n) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      if (t[o] !== e[o] && !Ri(n, o)) return true;
    }
    return false;
  }
  function Bs({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Xr = (e) => e.__isSuspense;
  let us = 0;
  const Ac = {
    name: "Suspense",
    __isSuspense: true,
    process(e, t, n, i, s, o, r, l, a, f) {
      if (e == null) Oc(t, n, i, s, o, r, l, a, f);
      else {
        if (o && o.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return;
        }
        Rc(e, t, n, i, s, r, l, a, f);
      }
    },
    hydrate: Mc,
    normalize: Ic
  }, Ec = Ac;
  function On(e, t) {
    const n = e.props && e.props[t];
    K(n) && n();
  }
  function Oc(e, t, n, i, s, o, r, l, a) {
    const { p: f, o: { createElement: u } } = a, c = u("div"), h = e.suspense = Jr(e, s, i, t, c, n, o, r, l, a);
    f(null, h.pendingBranch = e.ssContent, c, null, i, h, o, r), h.deps > 0 ? (On(e, "onPending"), On(e, "onFallback"), f(null, e.ssFallback, t, n, i, null, o, r), en(h, e.ssFallback)) : h.resolve(false, true);
  }
  function Rc(e, t, n, i, s, o, r, l, { p: a, um: f, o: { createElement: u } }) {
    const c = t.suspense = e.suspense;
    c.vnode = t, t.el = e.el;
    const h = t.ssContent, _ = t.ssFallback, { activeBranch: w, pendingBranch: v, isInFallback: g, isHydrating: T } = c;
    if (v) c.pendingBranch = h, Tt(h, v) ? (a(v, h, c.hiddenContainer, null, s, c, o, r, l), c.deps <= 0 ? c.resolve() : g && (T || (a(w, _, n, i, s, null, o, r, l), en(c, _)))) : (c.pendingId = us++, T ? (c.isHydrating = false, c.activeBranch = v) : f(v, s, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = u("div"), g ? (a(null, h, c.hiddenContainer, null, s, c, o, r, l), c.deps <= 0 ? c.resolve() : (a(w, _, n, i, s, null, o, r, l), en(c, _))) : w && Tt(h, w) ? (a(w, h, n, i, s, c, o, r, l), c.resolve(true)) : (a(null, h, c.hiddenContainer, null, s, c, o, r, l), c.deps <= 0 && c.resolve()));
    else if (w && Tt(h, w)) a(w, h, n, i, s, c, o, r, l), en(c, h);
    else if (On(t, "onPending"), c.pendingBranch = h, h.shapeFlag & 512 ? c.pendingId = h.component.suspenseId : c.pendingId = us++, a(null, h, c.hiddenContainer, null, s, c, o, r, l), c.deps <= 0) c.resolve();
    else {
      const { timeout: b, pendingId: F } = c;
      b > 0 ? setTimeout(() => {
        c.pendingId === F && c.fallback(_);
      }, b) : b === 0 && c.fallback(_);
    }
  }
  function Jr(e, t, n, i, s, o, r, l, a, f, u = false) {
    const { p: c, m: h, um: _, n: w, o: { parentNode: v, remove: g } } = f;
    let T;
    const b = Nc(e);
    b && t && t.pendingBranch && (T = t.pendingId, t.deps++);
    const F = e.props ? ql(e.props.timeout) : void 0, N = o, A = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: r,
      container: i,
      hiddenContainer: s,
      deps: 0,
      pendingId: us++,
      timeout: typeof F == "number" ? F : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: false,
      effects: [],
      resolve(j = false, Y = false) {
        const { vnode: P, activeBranch: M, pendingBranch: D, pendingId: H, effects: te, parentComponent: de, container: re } = A;
        let Pe = false;
        A.isHydrating ? A.isHydrating = false : j || (Pe = M && D.transition && D.transition.mode === "out-in", Pe && (M.transition.afterLeave = () => {
          H === A.pendingId && (h(D, re, o === N ? w(M) : o, 0), os(te));
        }), M && (v(M.el) === re && (o = w(M)), _(M, de, A, true)), Pe || h(D, re, o, 0)), en(A, D), A.pendingBranch = null, A.isInFallback = false;
        let ne = A.parent, X = false;
        for (; ne; ) {
          if (ne.pendingBranch) {
            ne.effects.push(...te), X = true;
            break;
          }
          ne = ne.parent;
        }
        !X && !Pe && os(te), A.effects = [], b && t && t.pendingBranch && T === t.pendingId && (t.deps--, t.deps === 0 && !Y && t.resolve()), On(P, "onResolve");
      },
      fallback(j) {
        if (!A.pendingBranch) return;
        const { vnode: Y, activeBranch: P, parentComponent: M, container: D, namespace: H } = A;
        On(Y, "onFallback");
        const te = w(P), de = () => {
          A.isInFallback && (c(null, j, D, te, M, null, H, l, a), en(A, j));
        }, re = j.transition && j.transition.mode === "out-in";
        re && (P.transition.afterLeave = de), A.isInFallback = true, _(P, M, null, true), re || de();
      },
      move(j, Y, P) {
        A.activeBranch && h(A.activeBranch, j, Y, P), A.container = j;
      },
      next() {
        return A.activeBranch && w(A.activeBranch);
      },
      registerDep(j, Y, P) {
        const M = !!A.pendingBranch;
        M && A.deps++;
        const D = j.vnode.el;
        j.asyncDep.catch((H) => {
          Bn(H, j, 0);
        }).then((H) => {
          if (j.isUnmounted || A.isUnmounted || A.pendingId !== j.suspenseId) return;
          j.asyncResolved = true;
          const { vnode: te } = j;
          ps(j, H), D && (te.el = D);
          const de = !D && j.subTree.el;
          Y(j, te, v(D || j.subTree.el), D ? null : w(j.subTree), A, r, P), de && g(de), Bs(j, te.el), M && --A.deps === 0 && A.resolve();
        });
      },
      unmount(j, Y) {
        A.isUnmounted = true, A.activeBranch && _(A.activeBranch, n, j, Y), A.pendingBranch && _(A.pendingBranch, n, j, Y);
      }
    };
    return A;
  }
  function Mc(e, t, n, i, s, o, r, l, a) {
    const f = t.suspense = Jr(t, i, n, e.parentNode, document.createElement("div"), null, s, o, r, l, true), u = a(e, f.pendingBranch = t.ssContent, n, f, o, r);
    return f.deps === 0 && f.resolve(false, true), u;
  }
  function Ic(e) {
    const { shapeFlag: t, children: n } = e, i = t & 32;
    e.ssContent = po(i ? n.default : n), e.ssFallback = i ? po(n.fallback) : me(Qe);
  }
  function po(e) {
    let t;
    if (K(e)) {
      const n = sn && e._c;
      n && (e._d = false, L()), e = e(), n && (e._d = true, t = ke, Qr());
    }
    return U(e) && (e = Sc(e)), e = Ve(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function kc(e, t) {
    t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : os(e);
  }
  function en(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: i } = e;
    let s = t.el;
    for (; !s && t.component; ) t = t.component.subTree, s = t.el;
    n.el = s, i && i.subTree === n && (i.vnode.el = s, Bs(i, s));
  }
  function Nc(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  const ae = Symbol.for("v-fgt"), Mi = Symbol.for("v-txt"), Qe = Symbol.for("v-cmt"), Zn = Symbol.for("v-stc"), bn = [];
  let ke = null;
  function L(e = false) {
    bn.push(ke = e ? null : []);
  }
  function Qr() {
    bn.pop(), ke = bn[bn.length - 1] || null;
  }
  let sn = 1;
  function ho(e, t = false) {
    sn += e, e < 0 && ke && t && (ke.hasOnce = true);
  }
  function Zr(e) {
    return e.dynamicChildren = sn > 0 ? ke || Gt : null, Qr(), sn > 0 && ke && ke.push(e), e;
  }
  function V(e, t, n, i, s, o) {
    return Zr(E(e, t, n, i, s, o, true));
  }
  function Ne(e, t, n, i, s) {
    return Zr(me(e, t, n, i, s, true));
  }
  function on(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function Tt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const el = ({ key: e }) => e ?? null, ei = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? _e(e) || ye(e) || K(e) ? {
    i: ve,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  function E(e, t = null, n = null, i = 0, s = null, o = e === ae ? 0 : 1, r = false, l = false) {
    const a = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && el(t),
      ref: t && ei(t),
      scopeId: Ai,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: o,
      patchFlag: i,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: ve
    };
    return l ? (zs(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= _e(n) ? 8 : 16), sn > 0 && !r && ke && (a.patchFlag > 0 || o & 6) && a.patchFlag !== 32 && ke.push(a), a;
  }
  const me = Dc;
  function Dc(e, t = null, n = null, i = 0, s = null, o = false) {
    if ((!e || e === Qa) && (e = Qe), on(e)) {
      const l = rn(e, t, true);
      return n && zs(l, n), sn > 0 && !o && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
    }
    if (Kc(e) && (e = e.__vccOpts), t) {
      t = tl(t);
      let { class: l, style: a } = t;
      l && !_e(l) && (t.class = We(l)), fe(a) && (ks(a) && !U(a) && (a = Ce({}, a)), t.style = At(a));
    }
    const r = _e(e) ? 1 : Xr(e) ? 128 : Fa(e) ? 64 : fe(e) ? 4 : K(e) ? 2 : 0;
    return E(e, t, n, i, s, r, o, true);
  }
  function tl(e) {
    return e ? ks(e) || Hr(e) ? Ce({}, e) : e : null;
  }
  function rn(e, t, n = false, i = false) {
    const { props: s, ref: o, patchFlag: r, children: l, transition: a } = e, f = t ? js(s || {}, t) : s, u = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: f,
      key: f && el(f),
      ref: t && t.ref ? n && o ? U(o) ? o.concat(ei(t)) : [
        o,
        ei(t)
      ] : ei(t) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ae ? r === -1 ? 16 : r | 16 : r,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && rn(e.ssContent),
      ssFallback: e.ssFallback && rn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return a && i && Ls(u, a.clone(u)), u;
  }
  function Ee(e = " ", t = 0) {
    return me(Mi, null, e, t);
  }
  function Lc(e, t) {
    const n = me(Zn, null, e);
    return n.staticCount = t, n;
  }
  function ot(e = "", t = false) {
    return t ? (L(), Ne(Qe, null, e)) : me(Qe, null, e);
  }
  function Ve(e) {
    return e == null || typeof e == "boolean" ? me(Qe) : U(e) ? me(ae, null, e.slice()) : on(e) ? St(e) : me(Mi, null, String(e));
  }
  function St(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
  }
  function zs(e, t) {
    let n = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (U(t)) n = 16;
    else if (typeof t == "object") if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = false), zs(e, s()), s._c && (s._d = true));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Hr(t) ? t._ctx = ve : s === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else K(t) ? (t = {
      default: t,
      _ctx: ve
    }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
      Ee(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function js(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      for (const s in i) if (s === "class") t.class !== i.class && (t.class = We([
        t.class,
        i.class
      ]));
      else if (s === "style") t.style = At([
        t.style,
        i.style
      ]);
      else if (xi(s)) {
        const o = t[s], r = i[s];
        r && o !== r && !(U(o) && o.includes(r)) && (t[s] = o ? [].concat(o, r) : r);
      } else s !== "" && (t[s] = i[s]);
    }
    return t;
  }
  function it(e, t, n, i = null) {
    ct(e, t, 7, [
      n,
      i
    ]);
  }
  const Fc = Dr();
  let Hc = 0;
  function Bc(e, t, n) {
    const i = e.type, s = (t ? t.appContext : e.appContext) || Fc, o = {
      uid: Hc++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Zl(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: zr(i, s),
      emitsOptions: Yr(i, s),
      emit: null,
      emitted: null,
      propsDefaults: le,
      inheritAttrs: i.inheritAttrs,
      ctx: le,
      data: le,
      props: le,
      attrs: le,
      slots: le,
      refs: le,
      setupState: le,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return o.ctx = {
      _: o
    }, o.root = t ? t.root : o, o.emit = $c.bind(null, o), e.ce && e.ce(o), o;
  }
  let be = null;
  const zc = () => be || ve;
  let pi, fs;
  {
    const e = Ci(), t = (n, i) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(i), (o) => {
        s.length > 1 ? s.forEach((r) => r(o)) : s[0](o);
      };
    };
    pi = t("__VUE_INSTANCE_SETTERS__", (n) => be = n), fs = t("__VUE_SSR_SETTERS__", (n) => Rn = n);
  }
  const jt = (e) => {
    const t = be;
    return pi(e), e.scope.on(), () => {
      e.scope.off(), pi(t);
    };
  }, ds = () => {
    be && be.scope.off(), pi(null);
  };
  function nl(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Rn = false;
  function jc(e, t = false, n = false) {
    t && fs(t);
    const { props: i, children: s } = e.vnode, o = nl(e);
    cc(e, i, o, t), pc(e, s, n || t);
    const r = o ? qc(e, t) : void 0;
    return t && fs(false), r;
  }
  function qc(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Za);
    const { setup: i } = n;
    if (i) {
      vt();
      const s = e.setupContext = i.length > 1 ? Uc(e) : null, o = jt(e), r = Hn(i, e, 0, [
        e.props,
        s
      ]), l = Ts(r);
      if (wt(), o(), (l || e.sp) && !Qt(e) && Pr(e), l) {
        if (r.then(ds, ds), t) return r.then((a) => {
          ps(e, a);
        }).catch((a) => {
          Bn(a, e, 0);
        });
        e.asyncDep = r;
      } else ps(e, r);
    } else il(e);
  }
  function ps(e, t, n) {
    K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = yr(t)), il(e);
  }
  function il(e, t, n) {
    const i = e.type;
    e.render || (e.render = i.render || rt);
    {
      const s = jt(e);
      vt();
      try {
        tc(e);
      } finally {
        wt(), s();
      }
    }
  }
  const Vc = {
    get(e, t) {
      return Se(e, "get", ""), e[t];
    }
  };
  function Uc(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Vc),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Ii(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yr(ya(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in wn) return wn[n](e);
      },
      has(t, n) {
        return n in t || n in wn;
      }
    })) : e.proxy;
  }
  function Wc(e, t = true) {
    return K(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Kc(e) {
    return K(e) && "__vccOpts" in e;
  }
  const He = (e, t) => Ea(e, t, Rn);
  function Gc(e, t, n) {
    const i = arguments.length;
    return i === 2 ? fe(t) && !U(t) ? on(t) ? me(e, null, [
      t
    ]) : me(e, t) : me(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && on(n) && (n = [
      n
    ]), me(e, t, n));
  }
  const Yc = "3.5.16";
  let hs;
  const _o = typeof window < "u" && window.trustedTypes;
  if (_o) try {
    hs = _o.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  const sl = hs ? (e) => hs.createHTML(e) : (e) => e, Xc = "http://www.w3.org/2000/svg", Jc = "http://www.w3.org/1998/Math/MathML", dt = typeof document < "u" ? document : null, go = dt && dt.createElement("template"), Qc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const s = t === "svg" ? dt.createElementNS(Xc, e) : t === "mathml" ? dt.createElementNS(Jc, e) : n ? dt.createElement(e, {
        is: n
      }) : dt.createElement(e);
      return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
    },
    createText: (e) => dt.createTextNode(e),
    createComment: (e) => dt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => dt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, s, o) {
      const r = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling)) for (; t.insertBefore(s.cloneNode(true), n), !(s === o || !(s = s.nextSibling)); ) ;
      else {
        go.innerHTML = sl(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const l = go.content;
        if (i === "svg" || i === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  }, Zc = Symbol("_vtc");
  function eu(e, t, n) {
    const i = e[Zc];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  const hi = Symbol("_vod"), ol = Symbol("_vsh"), pn = {
    beforeMount(e, { value: t }, { transition: n }) {
      e[hi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n && (i ? t ? (i.beforeEnter(e), hn(e, true), i.enter(e)) : i.leave(e, () => {
        hn(e, false);
      }) : hn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      hn(e, t);
    }
  };
  function hn(e, t) {
    e.style.display = t ? e[hi] : "none", e[ol] = !t;
  }
  const tu = Symbol(""), nu = /(^|;)\s*display\s*:/;
  function iu(e, t, n) {
    const i = e.style, s = _e(n);
    let o = false;
    if (n && !s) {
      if (t) if (_e(t)) for (const r of t.split(";")) {
        const l = r.slice(0, r.indexOf(":")).trim();
        n[l] == null && ti(i, l, "");
      }
      else for (const r in t) n[r] == null && ti(i, r, "");
      for (const r in n) r === "display" && (o = true), ti(i, r, n[r]);
    } else if (s) {
      if (t !== n) {
        const r = i[tu];
        r && (n += ";" + r), i.cssText = n, o = nu.test(n);
      }
    } else t && e.removeAttribute("style");
    hi in e && (e[hi] = o ? i.display : "", e[ol] && (i.display = "none"));
  }
  const mo = /\s*!important$/;
  function ti(e, t, n) {
    if (U(n)) n.forEach((i) => ti(e, t, i));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const i = su(e, t);
      mo.test(n) ? e.setProperty(kt(i), n.replace(mo, ""), "important") : e[i] = n;
    }
  }
  const vo = [
    "Webkit",
    "Moz",
    "ms"
  ], Yi = {};
  function su(e, t) {
    const n = Yi[t];
    if (n) return n;
    let i = qe(t);
    if (i !== "filter" && i in e) return Yi[t] = i;
    i = Ti(i);
    for (let s = 0; s < vo.length; s++) {
      const o = vo[s] + i;
      if (o in e) return Yi[t] = o;
    }
    return t;
  }
  const wo = "http://www.w3.org/1999/xlink";
  function bo(e, t, n, i, s, o = Xl(t)) {
    i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wo, t.slice(6, t.length)) : e.setAttributeNS(wo, t, n) : n == null || o && !nr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Xe(n) ? String(n) : n);
  }
  function yo(e, t, n, i, s) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? sl(n) : n);
      return;
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
      const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let r = false;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = nr(n) : n == null && l === "string" ? (n = "", r = true) : l === "number" && (n = 0, r = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    r && e.removeAttribute(s || t);
  }
  function Ct(e, t, n, i) {
    e.addEventListener(t, n, i);
  }
  function ou(e, t, n, i) {
    e.removeEventListener(t, n, i);
  }
  const xo = Symbol("_vei");
  function ru(e, t, n, i, s = null) {
    const o = e[xo] || (e[xo] = {}), r = o[t];
    if (i && r) r.value = i;
    else {
      const [l, a] = lu(t);
      if (i) {
        const f = o[t] = uu(i, s);
        Ct(e, l, f, a);
      } else r && (ou(e, l, r, a), o[t] = void 0);
    }
  }
  const $o = /(?:Once|Passive|Capture)$/;
  function lu(e) {
    let t;
    if ($o.test(e)) {
      t = {};
      let i;
      for (; i = e.match($o); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : kt(e.slice(2)),
      t
    ];
  }
  let Xi = 0;
  const au = Promise.resolve(), cu = () => Xi || (au.then(() => Xi = 0), Xi = Date.now());
  function uu(e, t) {
    const n = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= n.attached) return;
      ct(fu(i, n.value), t, 5, [
        i
      ]);
    };
    return n.value = e, n.attached = cu(), n;
  }
  function fu(e, t) {
    if (U(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((i) => (s) => !s._stopped && i && i(s));
    } else return t;
  }
  const So = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, du = (e, t, n, i, s, o) => {
    const r = s === "svg";
    t === "class" ? eu(e, i, r) : t === "style" ? iu(e, n, i) : xi(t) ? $s(t) || ru(e, t, n, i, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : pu(e, t, i, r)) ? (yo(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bo(e, t, i, r, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !_e(i)) ? yo(e, qe(t), i, o, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), bo(e, t, i, r));
  };
  function pu(e, t, n, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && So(t) && K(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const s = e.tagName;
      if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return false;
    }
    return So(t) && _e(n) ? false : t in e;
  }
  const ln = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return U(t) ? (n) => Jn(t, n) : t;
  };
  function hu(e) {
    e.target.composing = true;
  }
  function To(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  const mt = Symbol("_assign"), _i = {
    created(e, { modifiers: { lazy: t, trim: n, number: i } }, s) {
      e[mt] = ln(s);
      const o = i || s.props && s.props.type === "number";
      Ct(e, t ? "change" : "input", (r) => {
        if (r.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = oi(l)), e[mt](l);
      }), n && Ct(e, "change", () => {
        e.value = e.value.trim();
      }), t || (Ct(e, "compositionstart", hu), Ct(e, "compositionend", To), Ct(e, "change", To));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: s, number: o } }, r) {
      if (e[mt] = ln(r), e.composing) return;
      const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? oi(e.value) : e.value, a = t ?? "";
      l !== a && (document.activeElement === e && e.type !== "range" && (i && t === n || s && e.value.trim() === a) || (e.value = a));
    }
  }, Ji = {
    created(e, { value: t }, n) {
      e.checked = nn(t, n.props.value), e[mt] = ln(n), Ct(e, "change", () => {
        e[mt](Mn(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, i) {
      e[mt] = ln(i), t !== n && (e.checked = nn(t, i.props.value));
    }
  }, rl = {
    deep: true,
    created(e, { value: t, modifiers: { number: n } }, i) {
      const s = $i(t);
      Ct(e, "change", () => {
        const o = Array.prototype.filter.call(e.options, (r) => r.selected).map((r) => n ? oi(Mn(r)) : Mn(r));
        e[mt](e.multiple ? s ? new Set(o) : o : o[0]), e._assigning = true, Ns(() => {
          e._assigning = false;
        });
      }), e[mt] = ln(i);
    },
    mounted(e, { value: t }) {
      Co(e, t);
    },
    beforeUpdate(e, t, n) {
      e[mt] = ln(n);
    },
    updated(e, { value: t }) {
      e._assigning || Co(e, t);
    }
  };
  function Co(e, t) {
    const n = e.multiple, i = U(t);
    if (!(n && !i && !$i(t))) {
      for (let s = 0, o = e.options.length; s < o; s++) {
        const r = e.options[s], l = Mn(r);
        if (n) if (i) {
          const a = typeof l;
          a === "string" || a === "number" ? r.selected = t.some((f) => String(f) === String(l)) : r.selected = Ql(t, l) > -1;
        } else r.selected = t.has(l);
        else if (nn(Mn(r), t)) {
          e.selectedIndex !== s && (e.selectedIndex = s);
          return;
        }
      }
      !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
  }
  function Mn(e) {
    return "_value" in e ? e._value : e.value;
  }
  const _u = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  }, ll = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return n[i] || (n[i] = (s) => {
      if (!("key" in s)) return;
      const o = kt(s.key);
      if (t.some((r) => r === o || _u[r] === o)) return e(s);
    });
  }, gu = Ce({
    patchProp: du
  }, Qc);
  let Po;
  function mu() {
    return Po || (Po = _c(gu));
  }
  const al = (...e) => {
    const t = mu().createApp(...e), { mount: n } = t;
    return t.mount = (i) => {
      const s = wu(i);
      if (!s) return;
      const o = t._component;
      !K(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
      const r = n(s, false, vu(s));
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
    }, t;
  };
  function vu(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function wu(e) {
    return _e(e) ? document.querySelector(e) : e;
  }
  const bu = zn({
    __name: "vue-splitter",
    props: {
      isHorizontal: {
        type: Boolean,
        default: false
      },
      percent: {},
      initialPercent: {
        default: 50
      }
    },
    emits: [
      "update:percent",
      "splitter-click"
    ],
    setup(e, { emit: t }) {
      const n = e, i = t, s = he(false), o = he(50), r = he(false), l = he(0), a = he(), f = He({
        get() {
          return n.percent ?? o.value;
        },
        set(P) {
          i("update:percent", P), o.value = P;
        }
      });
      f.value = Number(n.initialPercent);
      const u = He(() => n.isHorizontal ? "top-pane" : "left-pane"), c = He(() => n.isHorizontal ? "bottom-pane" : "right-pane"), h = He(() => n.isHorizontal ? `${f.value}% auto 1fr / none` : `none / ${f.value}% auto 1fr`), _ = He(() => s.value ? "none" : "auto");
      function w() {
        r.value || i("splitter-click");
      }
      function v(P) {
        l.value = n.isHorizontal ? P.offsetY : P.offsetX, T();
      }
      function g() {
        l.value = 0, T();
      }
      function T() {
        s.value = true, r.value = false, b();
      }
      function b() {
        document.body.addEventListener("mousemove", N), document.body.addEventListener("touchmove", F), document.body.addEventListener("touchend", j, {
          once: true
        }), document.body.addEventListener("mouseup", j, {
          once: true
        });
      }
      function F(P) {
        s.value && A(P.touches[0]);
      }
      function N(P) {
        P.buttons && P.buttons === 0 && (s.value = false, Y()), s.value && A(P);
      }
      function A(P) {
        let M = l.value, D = a.value, H = 0;
        if (n.isHorizontal) {
          for (M += D.offsetTop; D.offsetParent; ) D = D.offsetParent, M += D.offsetTop;
          H = Math.floor((P.pageY - M) / a.value.offsetHeight * 1e4) / 100;
        } else {
          for (M += D.offsetLeft; D.offsetParent; ) D = D.offsetParent, M += D.offsetLeft;
          H = Math.floor((P.pageX - M) / a.value.offsetWidth * 1e4) / 100;
        }
        H > 0 && H < 100 && (f.value = H, r.value = true);
      }
      function j() {
        s.value = false, Y();
      }
      function Y() {
        document.body.removeEventListener("touchmove", F), document.body.removeEventListener("mousemove", N);
      }
      return (P, M) => (L(), V("div", {
        style: At({
          userSelect: _.value,
          gridTemplate: h.value
        }),
        class: We([
          "vue-splitter",
          {
            horizontal: P.isHorizontal,
            vertical: !P.isHorizontal
          }
        ]),
        ref_key: "containerRef",
        ref: a
      }, [
        E("div", {
          class: We([
            "splitter-pane",
            u.value
          ])
        }, [
          _t(P.$slots, "left-pane"),
          _t(P.$slots, "top-pane")
        ], 2),
        E("div", {
          class: We([
            "splitter",
            {
              active: s.value
            }
          ]),
          onMousedown: v,
          onTouchstartPassive: g,
          onClick: w
        }, null, 34),
        E("div", {
          class: We([
            "splitter-pane",
            c.value
          ])
        }, [
          _t(P.$slots, "right-pane"),
          _t(P.$slots, "bottom-pane")
        ], 2)
      ], 6));
    }
  }), yu = {
    __name: "SearchResultsItem",
    props: [
      "cfg",
      "item"
    ],
    emits: [
      "cfg_update"
    ],
    setup(e, { emit: t }) {
      const n = t, i = he("1");
      function s(r, l, a) {
        console.log("adding requirement", l, a, r), a != null && a.length > 0 ? (r.add_requirement(l, a), n("cfg_update")) : console.log("attempt to add a requirement without a value, was: ", a);
      }
      function o(r, l) {
        console.log("adding import/export", l, r), r.add_import_export(l), n("cfg_update");
      }
      return (r, l) => {
        const a = Oi("tooltip");
        return L(), V(ae, null, [
          ee((L(), V("div", null, [
            Ee(Oe(e.item.display), 1)
          ])), [
            [
              a,
              "id: " + e.item.id
            ]
          ]),
          E("div", null, [
            ee(E("input", {
              type: "text",
              size: "4",
              onKeyup: l[0] || (l[0] = ll((f) => s(e.cfg, e.item.id, i.value), [
                "enter"
              ])),
              "onUpdate:modelValue": l[1] || (l[1] = (f) => i.value = f)
            }, null, 544), [
              [
                _i,
                i.value
              ]
            ]),
            ee((L(), V("button", {
              onClick: l[2] || (l[2] = (f) => s(e.cfg, e.item.id, i.value))
            }, l[4] || (l[4] = [
              Ee("Requirement")
            ]))), [
              [
                a,
                "Add " + e.item.display + " as a requirement, you must specify a non-empty value"
              ]
            ]),
            ee((L(), V("button", {
              onClick: l[3] || (l[3] = (f) => o(e.cfg, e.item.id))
            }, l[5] || (l[5] = [
              Ee("Import/Export")
            ]))), [
              [
                a,
                "Add " + e.item.display + " as an import or export"
              ]
            ])
          ])
        ], 64);
      };
    }
  };
  const _Te = class _Te {
    constructor(t) {
      this.type = t;
    }
    is_intermediate() {
      return this.type == _Te.INTERMEDIATE;
    }
    is_req() {
      return this.type == _Te.REQUIREMENT;
    }
    is_io() {
      return this.type == _Te.IMPORT_EXPORT;
    }
    req_quantity() {
      return null;
    }
  };
  __publicField(_Te, "INTERMEDIATE", "intermediate");
  __publicField(_Te, "IMPORT_EXPORT", "import_export");
  __publicField(_Te, "REQUIREMENT", "requirement");
  let Te = _Te;
  class xu extends Te {
    constructor(t) {
      super(Te.REQUIREMENT), this.req = t;
    }
    id() {
      return this.req.item.id;
    }
    display() {
      return this.req.item.display;
    }
    req_quantity() {
      return this.req.quantity;
    }
  }
  class Ao extends Te {
    constructor(t) {
      super(Te.IMPORT_EXPORT), this.item = t;
    }
    id() {
      return this.item.id;
    }
    display() {
      return this.item.display;
    }
  }
  class $u extends Te {
    constructor(t) {
      super(Te.INTERMEDIATE), this.item = t;
    }
    id() {
      return this.item.id;
    }
    display() {
      return this.item.display;
    }
  }
  const Su = [
    "id"
  ], Tu = [
    "for"
  ], Cu = {
    key: 0
  }, Pu = [
    "disabled"
  ], Au = [
    "id"
  ], Eu = [
    "for"
  ], Ou = [
    "id"
  ], Ru = [
    "for"
  ], Mu = {
    __name: "CurrentCfgItem",
    props: [
      "cfg",
      "stack",
      "dataset"
    ],
    emits: [
      "cfg_update",
      "make_item",
      "use_item"
    ],
    setup(e, { emit: t }) {
      const n = t, i = he(e.stack.req_quantity()), s = he(e.stack.type);
      return e.stack.is_req() && console.log("stack quantity", e.stack), console.log("stack", e.stack, e.stack.is_req(), e.stack.is_io(), e.stack.is_intermediate()), Be(s, (o, r) => {
        switch (console.log("change in type", s, e.stack.id(), "req val", i.value), o) {
          case Te.REQUIREMENT:
            r !== Te.REQUIREMENT && (i.value = 1, console.log("something")), e.cfg.add_requirement(e.stack.id(), i.value), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
            break;
          case Te.IMPORT_EXPORT:
            e.cfg.add_import_export(e.stack.id()), e.cfg.remove_requirement(e.stack.id()), n("cfg_update");
            break;
          case Te.INTERMEDIATE:
            e.cfg.remove_requirement(e.stack.id()), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
        }
      }), Be(i, (o) => {
        console.log("requirement value updated", e.stack.id(), s.value, o), s.value == "requirement" && (e.cfg.update_requirement(e.stack.id(), o), n("cfg_update"));
      }), (o, r) => {
        const l = Oi("tooltip");
        return L(), V(ae, null, [
          ee((L(), V("div", null, [
            Ee(" [icon] " + Oe(e.stack.display()), 1)
          ])), [
            [
              l,
              "id: " + e.stack.id()
            ]
          ]),
          E("div", null, [
            ee((L(), V("button", {
              onClick: r[0] || (r[0] = (a) => n("make_item", e.stack.id()))
            }, r[6] || (r[6] = [
              Ee("Make")
            ]))), [
              [
                l,
                "Search for processes that have " + e.stack.display() + " as an output."
              ]
            ]),
            ee((L(), V("button", {
              onClick: r[1] || (r[1] = (a) => n("use_item", e.stack.id()))
            }, r[7] || (r[7] = [
              Ee("Use")
            ]))), [
              [
                l,
                "Search for processes that have " + e.stack.display() + " as an input."
              ]
            ])
          ]),
          E("div", null, [
            E("div", null, [
              ee(E("input", {
                type: "radio",
                id: "requirement-" + e.stack.id(),
                value: "requirement",
                "onUpdate:modelValue": r[2] || (r[2] = (a) => s.value = a)
              }, null, 8, Su), [
                [
                  Ji,
                  s.value
                ]
              ]),
              ee((L(), V("label", {
                for: "requirement-" + e.stack.id()
              }, r[8] || (r[8] = [
                Ee(" Requirement")
              ]), 8, Tu)), [
                [
                  l,
                  "Set " + e.stack.display() + " as a requirement"
                ]
              ]),
              e.stack.is_req() ? (L(), V("span", Cu, [
                r[9] || (r[9] = Ee(" \xA0 ")),
                ee(E("input", {
                  type: "text",
                  size: "5",
                  "onUpdate:modelValue": r[3] || (r[3] = (a) => i.value = a),
                  disabled: s.value != $e(Te).REQUIREMENT
                }, null, 8, Pu), [
                  [
                    _i,
                    i.value,
                    void 0,
                    {
                      lazy: true,
                      number: true
                    }
                  ],
                  [
                    l,
                    "Set a requirement of X per " + (e.dataset ? e.dataset.units() : "(no units yet)") + " for " + e.stack.display() + (s.value == $e(Te).REQUIREMENT ? "" : " (disabled because " + e.stack.display() + " is not marked as a requirement)")
                  ]
                ]),
                Ee(" per " + Oe(e.dataset ? e.dataset.units() : "(no units yet)"), 1)
              ])) : ot("", true)
            ]),
            E("div", null, [
              ee(E("input", {
                type: "radio",
                id: "import_export-" + e.stack.id(),
                value: "import_export",
                "onUpdate:modelValue": r[4] || (r[4] = (a) => s.value = a)
              }, null, 8, Au), [
                [
                  Ji,
                  s.value
                ]
              ]),
              ee((L(), V("label", {
                for: "import_export-" + e.stack.id()
              }, r[10] || (r[10] = [
                Ee(" Import/Export")
              ]), 8, Eu)), [
                [
                  l,
                  "Use an infinite source or sink for " + e.stack.display()
                ]
              ])
            ]),
            E("div", null, [
              ee(E("input", {
                type: "radio",
                id: "intermediate-" + e.stack.id(),
                value: "intermediate",
                "onUpdate:modelValue": r[5] || (r[5] = (a) => s.value = a)
              }, null, 8, Ou), [
                [
                  Ji,
                  s.value
                ]
              ]),
              ee((L(), V("label", {
                for: "intermediate-" + e.stack.id()
              }, r[11] || (r[11] = [
                Ee(" Intermediate")
              ]), 8, Ru)), [
                [
                  l,
                  e.stack.display() + " should have a net zero produce & consume"
                ]
              ])
            ])
          ]),
          r[12] || (r[12] = E("div", {
            class: "items_fw"
          }, [
            E("hr")
          ], -1))
        ], 64);
      };
    }
  };
  class Iu {
    constructor(t, n, i) {
      this.duration = t, this.input = n, this.output = i;
    }
  }
  const ki = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, s] of t) n[i] = s;
    return n;
  }, ku = {
    id: "name"
  }, Nu = {
    id: "in"
  }, Du = {
    class: "proc_io"
  }, Lu = {
    id: "out"
  }, Fu = {
    class: "proc_io"
  }, Hu = {
    class: "proc_buttons"
  }, Bu = [
    "id",
    "open"
  ], zu = {
    class: "input_options"
  }, ju = [
    "value"
  ], qu = {
    class: "input_options"
  }, Vu = [
    "value"
  ], Uu = {
    class: "input_options"
  }, Wu = [
    "value"
  ], Ku = {
    class: "input_options"
  }, Gu = {
    class: "factory_select"
  }, Yu = [
    "value"
  ], Xu = {
    __name: "ProcDisplay",
    props: [
      "cfg",
      "proc",
      "active_proc",
      "folds",
      "id_prefix"
    ],
    emits: [
      "modifier_update",
      "fold_update"
    ],
    setup(e, { emit: t }) {
      const n = t, i = He(() => typeof e.active_proc > "u" ? {
        process: e.proc,
        duration_multiplier: 1,
        inputs_multiplier: 1,
        outputs_multiplier: 1,
        factory: {
          id: null
        }
      } : e.active_proc), s = He(() => i.value.process), o = He(() => e.id_prefix + "-" + s.value.id + "-modifiers"), r = he(null), l = He({
        get() {
          return console.log("modifiers get 1", i.value.process.id, r.value), r.value == null && (r.value = new Iu(i.value.duration_multiplier, i.value.inputs_multiplier, i.value.outputs_multiplier)), console.log("modifiers get 2", i.value.process.id, r.value), r.value;
        }
      });
      function a(v, g) {
        console.log("update modifier", v, g), r.value[g] = v.target.value;
      }
      Be(r, (v, g) => {
        g != null && (console.log("modifiers_stash update 1", v, r.value), r.value = v, n("modifier_update", s.value.id, u.value, Number(v.duration), Number(v.input), Number(v.output)), console.log("modifiers_stash update 2", v, r.value));
      }, {
        deep: true
      });
      const f = He(() => e.cfg.factories_for_process(i.value.process.id)), u = he(null), c = he(null), h = He({
        get() {
          return console.log("factory_id 1", u.value, c.value, i.value.process.display, i.value.factory.id, f.value), (u.value == null || i.value.process.id != c.value) && (i.value.factory.id != null ? u.value = i.value.factory.id : f.value.length > 0 && (u.value = f.value[0].id)), c.value = i.value.process.id, console.log("factory_id 2", u.value, c.value, i.value.factory.id, f.value), u.value;
        },
        set(v) {
          console.log("factory_id change 1", v, u.value, s.value.id, f.value, e.cfg.factories_for_process(s.value.id)), u.value = v, n("modifier_update", i.value.process.id, v, Number(r.value.duration), Number(r.value.input), Number(r.value.output)), console.log("factory_id change 2", v, u.value, s.value.id, f.value, e.cfg.factories_for_process(s.value.id));
        }
      }), _ = he(false);
      function w(v) {
        _.value = v.newState == "open";
      }
      return (v, g) => {
        const T = Oi("tooltip");
        return L(), V(ae, null, [
          ee((L(), V("div", ku, [
            Ee(Oe(s.value.display), 1)
          ])), [
            [
              T,
              "id: " + i.value.process.id
            ]
          ]),
          E("div", null, Oe(s.value.duration) + "s ", 1),
          E("div", Nu, [
            (L(true), V(ae, null, Et(i.value.process.inputs, (b) => (L(), V("div", Du, [
              E("div", null, Oe(b.quantity), 1),
              ee((L(), V("div", null, [
                Ee(Oe(b.item.display), 1)
              ])), [
                [
                  T,
                  "id: " + b.item.id
                ]
              ])
            ]))), 256))
          ]),
          E("div", Lu, [
            (L(true), V(ae, null, Et(i.value.process.outputs, (b) => (L(), V("div", Fu, [
              E("div", null, Oe(b.quantity), 1),
              ee((L(), V("div", null, [
                Ee(Oe(b.item.display), 1)
              ])), [
                [
                  T,
                  "id: " + b.item.id
                ]
              ])
            ]))), 256))
          ]),
          E("div", Hu, [
            _t(v.$slots, "action_button", {
              factory_id: u.value,
              modifiers: l.value
            }, void 0, true)
          ]),
          E("details", {
            id: o.value,
            open: _.value,
            onToggle: g[0] || (g[0] = (b) => w(b))
          }, g[5] || (g[5] = [
            E("summary", null, "modifiers", -1)
          ]), 40, Bu),
          ee(E("div", zu, [
            E("input", {
              type: "text",
              size: "4",
              onBlur: g[1] || (g[1] = (b) => a(b, "duration")),
              value: l.value.duration
            }, null, 40, ju)
          ], 512), [
            [
              pn,
              _.value
            ]
          ]),
          ee(E("div", qu, [
            E("input", {
              type: "text",
              size: "4",
              onBlur: g[2] || (g[2] = (b) => a(b, "input")),
              value: l.value.input
            }, null, 40, Vu)
          ], 512), [
            [
              pn,
              _.value
            ]
          ]),
          ee(E("div", Uu, [
            E("input", {
              type: "text",
              size: "4",
              onBlur: g[3] || (g[3] = (b) => a(b, "output")),
              value: l.value.output
            }, null, 40, Wu)
          ], 512), [
            [
              pn,
              _.value
            ]
          ]),
          ee(E("div", Ku, g[6] || (g[6] = [
            E("span", null, "factory", -1)
          ]), 512), [
            [
              pn,
              _.value
            ]
          ]),
          ee(E("div", Gu, [
            ee(E("select", {
              "onUpdate:modelValue": g[4] || (g[4] = (b) => h.value = b)
            }, [
              g[7] || (g[7] = E("option", {
                disabled: "",
                value: ""
              }, "Select a factory type", -1)),
              (L(true), V(ae, null, Et(f.value, (b) => (L(), V("option", {
                key: b.id,
                value: b.id
              }, Oe(b.display), 9, Yu))), 128))
            ], 512), [
              [
                rl,
                h.value,
                void 0,
                {
                  lazy: true
                }
              ]
            ])
          ], 512), [
            [
              pn,
              _.value
            ]
          ]),
          g[8] || (g[8] = E("hr", {
            class: "proc_fw"
          }, null, -1))
        ], 64);
      };
    }
  }, cl = ki(Xu, [
    [
      "__scopeId",
      "data-v-a2083010"
    ]
  ]), Ju = [
    "open"
  ], Qu = {
    class: "input_options"
  }, Zu = {
    class: "items"
  }, ef = {
    key: 0,
    class: "items_fw"
  }, tf = {
    key: 0,
    class: "proc"
  }, nf = [
    "onClick"
  ], sf = {
    __name: "CurrentConfiguration",
    props: [
      "cfg",
      "dataset",
      "folds"
    ],
    emits: [
      "cfg_update",
      "make_item",
      "use_item",
      "fold_update"
    ],
    setup(e, { emit: t }) {
      const n = t;
      console.log("dataset", e.dataset);
      function i() {
        console.log("CC handle_cfg_update"), n("cfg_update");
      }
      function s(u, c, h, _, w) {
        console.log("CC handle_modifier_update", u, c, h, _, w), e.cfg.update_modifiers(u, c, h, _, w), n("cfg_update");
      }
      function o(u, c) {
        n("fold_update", u, c);
      }
      function r(u) {
        console.log("CC handle make item", u), n("make_item", u);
      }
      function l(u) {
        console.log("CC handle use item", u), n("use_item", u);
      }
      function a(u) {
        let c = u.get_requirements().map((g) => (console.log("requirement", g.item.id, g.quantity), g)).map((g) => new xu(g)).map((g) => (console.log("  ", g), g)), h = u.get_imports_exports().map((g) => (console.log("io", g.id), g)).map((g) => new Ao(g)).map((g) => (console.log("  ", g), g)), _ = u.get_intermediate_items().map((g) => (console.log("intermediate", g.id), g)).map((g) => new $u(g)).map((g) => (console.log("  ", g), g)), w = u.get_defaulted_items().map((g) => (console.log("defaulted", g.id), g)).map((g) => new Ao(g)).map((g) => (console.log("  ", g), g));
        return c.concat(h).concat(_).concat(w).sort((g, T) => g.display().localeCompare(T.display()));
      }
      function f(u, c) {
        console.log("removing", c), u.remove_process(c), n("cfg_update");
      }
      return (u, c) => (L(), V("details", {
        id: "current-configuration",
        open: e.folds["current-configuration"],
        onToggle: c[0] || (c[0] = (h) => n("fold_update", h))
      }, [
        c[10] || (c[10] = E("summary", {
          class: "header"
        }, "Current Configuration", -1)),
        E("div", Qu, [
          c[2] || (c[2] = E("h3", null, "Data Set", -1)),
          c[3] || (c[3] = E("hr", null, null, -1)),
          E("span", null, Oe(e.dataset ? e.dataset.description() : ""), 1),
          c[4] || (c[4] = E("br", null, null, -1)),
          c[5] || (c[5] = E("br", null, null, -1)),
          c[6] || (c[6] = E("h3", null, "Items", -1)),
          E("div", Zu, [
            a(e.cfg).length > 0 ? (L(), V("hr", ef)) : ot("", true),
            (L(true), V(ae, null, Et(a(e.cfg), (h) => (L(), Ne(Mu, {
              onCfg_update: i,
              onUse_item: l,
              onMake_item: r,
              stack: h,
              cfg: e.cfg,
              dataset: e.dataset
            }, null, 8, [
              "stack",
              "cfg",
              "dataset"
            ]))), 256))
          ]),
          c[7] || (c[7] = E("br", null, null, -1)),
          c[8] || (c[8] = E("br", null, null, -1)),
          c[9] || (c[9] = E("h3", null, "Processes", -1)),
          e.cfg.get_processes().length > 0 ? (L(), V("div", tf, [
            c[1] || (c[1] = Lc('<hr class="proc_fw" data-v-7f76b8d5><div class="proc_header_d" data-v-7f76b8d5>Duration</div><div class="proc_header_i" data-v-7f76b8d5>Inputs</div><div class="proc_header_o" data-v-7f76b8d5>Outputs</div><hr class="proc_fw" data-v-7f76b8d5>', 5)),
            (L(true), V(ae, null, Et(e.cfg.get_processes(), (h) => (L(), Ne(cl, {
              onModifier_update: s,
              onFold_update: o,
              active_proc: h,
              cfg: e.cfg,
              folds: e.folds,
              id_prefix: "search"
            }, {
              action_button: Je(() => [
                E("button", {
                  onClick: (_) => f(e.cfg, h.process.id)
                }, "Remove", 8, nf)
              ]),
              _: 2
            }, 1032, [
              "active_proc",
              "cfg",
              "folds"
            ]))), 256))
          ])) : ot("", true)
        ])
      ], 40, Ju));
    }
  }, of = ki(sf, [
    [
      "__scopeId",
      "data-v-7f76b8d5"
    ]
  ]), rf = [
    "open"
  ], lf = {
    class: "input_options"
  }, af = [
    "value"
  ], cf = [
    "disabled"
  ], uf = [
    "disabled"
  ], ff = [
    "open"
  ], df = {
    class: "input_options"
  }, pf = {
    class: "search_results"
  }, hf = {
    class: "proc"
  }, _f = {
    key: 0,
    class: "proc_fw"
  }, gf = {
    key: 1,
    class: "proc_header_d"
  }, mf = {
    key: 2,
    class: "proc_header_i"
  }, vf = {
    key: 3,
    class: "proc_header_o"
  }, wf = {
    key: 4,
    class: "proc_fw"
  }, bf = [
    "onClick"
  ], yf = {
    __name: "Configure",
    props: [
      "cfg",
      "cfg_fu",
      "folds",
      "datasets"
    ],
    emits: [
      "cfg_update",
      "fold_update"
    ],
    setup(e, { emit: t }) {
      const n = t, i = e, { _0: s, cfg_fu: o, _1: r, _3: l } = xr(i), { cfg: a, _2: f, folds: u, datasets: c } = i, h = a.get_current_data_set(), _ = he(h || ""), w = he(h ? c.find((P) => P.id() === h) : null);
      console.log("dataset id", h, _, w), Be(_, (P) => {
        let M = c.find((D) => D.id() == P);
        w.value = M, console.log("Updating config with", P, M), a.update_data_set(P, M.style()), a.update_units(M.units());
      });
      const v = he(""), g = he([]);
      Be(v, (P) => {
        console.log("Item search for", P), P.length >= 3 && (g.value = a.search_items(P), console.log("search results items", g));
      });
      const T = he(""), b = he([]);
      Be(T, (P) => {
        console.log("Process search for", P), P.length >= 3 && (b.value = a.search_processes(P), console.log("search results processes", b));
      }), Be(g, (P) => {
        console.log("item results changed", P), (b.value.length > 0 || P.length > 0) && n("fold_update", "search-results", true);
      }), Be(b, (P) => {
        console.log("proc results changed", P), (g.value.length > 0 || P.length > 0) && n("fold_update", "search-results", true);
      });
      function F() {
        console.log("C handle_cfg_update"), T.value = "", b.value = [], v.value = "", g.value = [], n("cfg_update");
      }
      function N(P) {
        console.log("C handle make item", P), b.value = a.search_processes_by_output(P);
      }
      function A(P) {
        console.log("C handle use item", P), b.value = a.search_processes_by_input(P);
      }
      function j(P, M, D, H) {
        console.log("adding process", M, H, P), T.value = "", b.value = [];
        let te = P.add_process(M, D, H.duration, H.input, H.output);
        console.log("add process result", te, P, P.get_processes()), n("fold_update", "search-results", false), n("cfg_update");
      }
      function Y(P, M) {
        n("fold_update", P, M);
      }
      return (P, M) => {
        const D = Oi("tooltip");
        return L(), V(ae, null, [
          E("details", {
            id: "get-started",
            open: $e(u)["get-started"],
            onToggle: M[3] || (M[3] = (H) => n("fold_update", H, null))
          }, [
            M[9] || (M[9] = E("summary", {
              class: "header"
            }, "Get Started", -1)),
            E("div", lf, [
              ee((L(), V("div", null, M[5] || (M[5] = [
                E("label", {
                  for: "selectDataSet"
                }, "Data Set:", -1)
              ]))), [
                [
                  D,
                  "Start here, find the game and version that you need"
                ]
              ]),
              ee((L(), V("div", null, [
                ee(E("select", {
                  "onUpdate:modelValue": M[0] || (M[0] = (H) => _.value = H)
                }, [
                  M[6] || (M[6] = E("option", {
                    disabled: "",
                    value: ""
                  }, "Select a data set", -1)),
                  (L(true), V(ae, null, Et($e(c), (H) => (L(), V("option", {
                    value: H.id()
                  }, Oe(H.description()), 9, af))), 256))
                ], 512), [
                  [
                    rl,
                    _.value
                  ]
                ])
              ])), [
                [
                  D,
                  "Start here, find the game and version that you need"
                ]
              ]),
              ee((L(), V("div", null, M[7] || (M[7] = [
                E("label", {
                  for: "item_search"
                }, " Item Search:", -1)
              ]))), [
                [
                  D,
                  "Start by looking for an output item that you need"
                ]
              ]),
              ee((L(), V("div", null, [
                ee(E("input", {
                  id: "item_search",
                  type: "text",
                  disabled: _.value == "",
                  "onUpdate:modelValue": M[1] || (M[1] = (H) => v.value = H)
                }, null, 8, cf), [
                  [
                    _i,
                    v.value
                  ]
                ])
              ])), [
                [
                  D,
                  "Start by looking for an output item that you need"
                ]
              ]),
              ee((L(), V("div", null, M[8] || (M[8] = [
                E("label", {
                  for: "process_search"
                }, " Process Search:", -1)
              ]))), [
                [
                  D,
                  "Start by looking for a process that you want to use"
                ]
              ]),
              ee((L(), V("div", null, [
                ee(E("input", {
                  id: "process_search",
                  type: "text",
                  disabled: _.value == "",
                  "onUpdate:modelValue": M[2] || (M[2] = (H) => T.value = H)
                }, null, 8, uf), [
                  [
                    _i,
                    T.value
                  ]
                ])
              ])), [
                [
                  D,
                  "Start by looking for a process that you want to use"
                ]
              ])
            ])
          ], 40, rf),
          E("details", {
            open: $e(u)["search-results"],
            onToggle: M[4] || (M[4] = (H) => n("fold_update", "search-results"))
          }, [
            M[10] || (M[10] = E("summary", {
              class: "header"
            }, "Search Results", -1)),
            E("div", df, [
              (L(true), V(ae, null, Et(g.value, (H) => (L(), Ne(yu, {
                onCfg_update: F,
                item: H,
                cfg: $e(a)
              }, null, 8, [
                "item",
                "cfg"
              ]))), 256)),
              E("div", pf, [
                E("div", hf, [
                  b.value.length > 0 ? (L(), V("hr", _f)) : ot("", true),
                  b.value.length > 0 ? (L(), V("div", gf, "Duration")) : ot("", true),
                  b.value.length > 0 ? (L(), V("div", mf, "Inputs")) : ot("", true),
                  b.value.length > 0 ? (L(), V("div", vf, "Outputs")) : ot("", true),
                  b.value.length > 0 ? (L(), V("hr", wf)) : ot("", true),
                  (L(true), V(ae, null, Et(b.value, (H) => (L(), Ne(cl, {
                    proc: H,
                    cfg: $e(a),
                    folds: $e(u),
                    onFold_update: Y,
                    id_prefix: "search"
                  }, {
                    action_button: Je(({ factory_id: te, modifiers: de }) => [
                      E("button", {
                        onClick: (re) => j($e(a), H.id, te, de)
                      }, "Add", 8, bf)
                    ]),
                    _: 2
                  }, 1032, [
                    "proc",
                    "cfg",
                    "folds"
                  ]))), 256))
                ])
              ])
            ])
          ], 40, ff),
          (L(), Ne(of, {
            onCfg_update: F,
            onUse_item: A,
            onMake_item: N,
            onFold_update: Y,
            dataset: w.value,
            key: $e(o),
            cfg: $e(a),
            folds: $e(u)
          }, null, 8, [
            "dataset",
            "cfg",
            "folds"
          ]))
        ], 64);
      };
    }
  }, xf = ki(yf, [
    [
      "__scopeId",
      "data-v-64e0cfc6"
    ]
  ]), $f = {
    __name: "GraphRender",
    props: [
      "cfg",
      "cfg_fu"
    ],
    setup(e) {
      const t = e, { _0: n, cfg_fu: i } = xr(t), { cfg: s, _1: o } = t;
      return Be(i, (r) => {
        if (s.can_render()) {
          console.log("rendering"), s.calculate(), console.log("processes", s.get_processes()), console.log("requirements", s.get_requirements()), console.log("import/export", s.get_imports_exports()), console.log("intermediates", s.get_intermediate_items()), console.log("defaulted", s.get_defaulted_items()), console.log("initial", s.get_initial_matrix()), console.log("reduced", s.get_reduced_matrix());
          let l = s.to_digraph();
          console.log("graph", l);
          let a = Viz(l, {
            format: "svg",
            engine: "dot"
          });
          document.getElementById("vis").innerHTML = a.replaceAll(/(fill|stroke)="[^"]+" ?/g, "");
        }
      }), (r, l) => (L(), V(ae, null, [
        l[0] || (l[0] = E("div", {
          id: "vis"
        }, null, -1)),
        E("div", null, Oe($e(i)), 1)
      ], 64));
    }
  }, Sf = "/assets/proc_web_bg-CEYmCL4q.wasm", Tf = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const i = t.replace(/^data:.*?base64,/, "");
      let s;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(i, "base64");
      else if (typeof atob == "function") {
        const o = atob(i);
        s = new Uint8Array(o.length);
        for (let r = 0; r < o.length; r++) s[r] = o.charCodeAt(r);
      } else throw new Error("Cannot decode base64-encoded data URL");
      n = await WebAssembly.instantiate(s, e);
    } else {
      const i = await fetch(t), s = i.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(i, e);
      else {
        const o = await i.arrayBuffer();
        n = await WebAssembly.instantiate(o, e);
      }
    }
    return n.instance.exports;
  };
  class _s {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Eo.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      C.__wbg_graphconfiguration_free(t, 0);
    }
    add_import_export(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_add_import_export(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    add_process(t, n, i, s, o) {
      const r = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), l = pe, a = ge(n, C.__wbindgen_malloc, C.__wbindgen_realloc), f = pe, u = C.graphconfiguration_add_process(this.__wbg_ptr, r, l, a, f, i, s, o);
      if (u[2]) throw z(u[1]);
      return z(u[0]);
    }
    add_requirement(t, n) {
      const i = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), s = pe, o = C.graphconfiguration_add_requirement(this.__wbg_ptr, i, s, n);
      if (o[2]) throw z(o[1]);
      return z(o[0]);
    }
    calculate() {
      C.graphconfiguration_calculate(this.__wbg_ptr);
    }
    can_render() {
      const t = C.graphconfiguration_can_render(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    dehydrate() {
      const t = C.graphconfiguration_dehydrate(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    factories_for_process(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_factories_for_process(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    get_current_data_set() {
      return C.graphconfiguration_get_current_data_set(this.__wbg_ptr);
    }
    get_defaulted_items() {
      const t = C.graphconfiguration_get_defaulted_items(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    get_imports_exports() {
      const t = C.graphconfiguration_get_imports_exports(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    get_initial_matrix() {
      const t = C.graphconfiguration_get_initial_matrix(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    get_intermediate_items() {
      const t = C.graphconfiguration_get_intermediate_items(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    get_processes() {
      const t = C.graphconfiguration_get_processes(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    get_reduced_matrix() {
      const t = C.graphconfiguration_get_reduced_matrix(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    get_requirements() {
      const t = C.graphconfiguration_get_requirements(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    get_units() {
      const t = C.graphconfiguration_get_units(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    constructor() {
      const t = C.graphconfiguration_new();
      return this.__wbg_ptr = t, Eo.register(this, this.__wbg_ptr, this), this;
    }
    rehydrate(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe;
      return C.graphconfiguration_rehydrate(this.__wbg_ptr, n, i);
    }
    remove_import_export(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_remove_import_export(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    remove_process(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_remove_process(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    remove_requirement(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_remove_requirement(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    reset() {
      const t = C.graphconfiguration_reset(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    search_items(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_search_items(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    search_processes(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_search_processes(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    search_processes_by_input(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_search_processes_by_input(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    search_processes_by_output(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_search_processes_by_output(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
    to_digraph() {
      const t = C.graphconfiguration_to_digraph(this.__wbg_ptr);
      if (t[2]) throw z(t[1]);
      return z(t[0]);
    }
    update_data_set(t, n) {
      const i = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), s = pe, o = ge(n, C.__wbindgen_malloc, C.__wbindgen_realloc), r = pe;
      return C.graphconfiguration_update_data_set(this.__wbg_ptr, i, s, o, r);
    }
    update_modifiers(t, n, i, s, o) {
      const r = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), l = pe, a = ge(n, C.__wbindgen_malloc, C.__wbindgen_realloc), f = pe, u = C.graphconfiguration_update_modifiers(this.__wbg_ptr, r, l, a, f, i, s, o);
      if (u[2]) throw z(u[1]);
      return z(u[0]);
    }
    update_requirement(t, n) {
      const i = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), s = pe, o = C.graphconfiguration_update_requirement(this.__wbg_ptr, i, s, n);
      if (o[2]) throw z(o[1]);
      return z(o[0]);
    }
    update_units(t) {
      const n = ge(t, C.__wbindgen_malloc, C.__wbindgen_realloc), i = pe, s = C.graphconfiguration_update_units(this.__wbg_ptr, n, i);
      if (s[2]) throw z(s[1]);
      return z(s[0]);
    }
  }
  Symbol.dispose && (_s.prototype[Symbol.dispose] = _s.prototype.free);
  function Cf(e, t) {
    const n = gs(t), i = ge(n, C.__wbindgen_malloc, C.__wbindgen_realloc), s = pe;
    gi().setInt32(e + 4 * 1, s, true), gi().setInt32(e + 4 * 0, i, true);
  }
  function Pf(e) {
    return typeof e == "function";
  }
  function Af(e) {
    return e === void 0;
  }
  function Ef(e, t) {
    const n = t, i = typeof n == "string" ? n : void 0;
    var s = qn(i) ? 0 : ge(i, C.__wbindgen_malloc, C.__wbindgen_realloc), o = pe;
    gi().setInt32(e + 4 * 1, o, true), gi().setInt32(e + 4 * 0, s, true);
  }
  function Of(e, t) {
    throw new Error(Ni(e, t));
  }
  function Rf(e) {
    e._wbg_cb_unref();
  }
  function Mf() {
    return qs(function(e, t, n) {
      return e.call(t, n);
    }, arguments);
  }
  function If(e, t) {
    return e.fetch(t);
  }
  function kf(e) {
    let t;
    try {
      t = e instanceof Response;
    } catch {
      t = false;
    }
    return t;
  }
  function Nf(e) {
    let t;
    try {
      t = e instanceof Window;
    } catch {
      t = false;
    }
    return t;
  }
  function Df() {
    return new Object();
  }
  function Lf() {
    return new Array();
  }
  function Ff(e, t) {
    try {
      var n = {
        a: e,
        b: t
      }, i = (o, r) => {
        const l = n.a;
        n.a = 0;
        try {
          return rd(l, n.b, o, r);
        } finally {
          n.a = l;
        }
      };
      return new Promise(i);
    } finally {
      n.a = 0;
    }
  }
  function Hf() {
    return qs(function(e, t, n) {
      return new Request(Ni(e, t), n);
    }, arguments);
  }
  function Bf(e) {
    return e.queueMicrotask;
  }
  function zf(e) {
    queueMicrotask(e);
  }
  function jf(e) {
    return Promise.resolve(e);
  }
  function qf(e, t, n) {
    e[t] = n;
  }
  function Vf(e, t, n) {
    e[t >>> 0] = n;
  }
  function Uf(e, t, n) {
    e.method = Ni(t, n);
  }
  function Wf(e, t) {
    e.mode = ld[t];
  }
  function Kf() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return qn(e) ? 0 : jn(e);
  }
  function Gf() {
    const e = typeof global > "u" ? null : global;
    return qn(e) ? 0 : jn(e);
  }
  function Yf() {
    const e = typeof self > "u" ? null : self;
    return qn(e) ? 0 : jn(e);
  }
  function Xf() {
    const e = typeof window > "u" ? null : window;
    return qn(e) ? 0 : jn(e);
  }
  function Jf() {
    return qs(function(e) {
      return e.text();
    }, arguments);
  }
  function Qf(e, t) {
    return e.then(t);
  }
  function Zf(e, t, n) {
    return e.then(t, n);
  }
  function ed(e, t) {
    return ad(e, t, od);
  }
  function td(e) {
    return e;
  }
  function nd(e, t) {
    return Ni(e, t);
  }
  function id(e) {
    return BigInt.asUintN(64, e);
  }
  function sd() {
    const e = C.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  function od(e, t, n) {
    const i = C.wasm_bindgen__convert__closures_____invoke__h495ae29afc064af6(e, t, n);
    if (i[1]) throw z(i[0]);
  }
  function rd(e, t, n, i) {
    C.wasm_bindgen__convert__closures_____invoke__h20ef7472b265a578(e, t, n, i);
  }
  const ld = [
    "same-origin",
    "no-cors",
    "cors",
    "navigate"
  ], Eo = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => C.__wbg_graphconfiguration_free(e, 1));
  function jn(e) {
    const t = C.__externref_table_alloc();
    return C.__wbindgen_externrefs.set(t, e), t;
  }
  const Oo = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => C.__wbindgen_destroy_closure(e.a, e.b));
  function gs(e) {
    const t = typeof e;
    if (t == "number" || t == "boolean" || e == null) return `${e}`;
    if (t == "string") return `"${e}"`;
    if (t == "symbol") {
      const s = e.description;
      return s == null ? "Symbol" : `Symbol(${s})`;
    }
    if (t == "function") {
      const s = e.name;
      return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
    }
    if (Array.isArray(e)) {
      const s = e.length;
      let o = "[";
      s > 0 && (o += gs(e[0]));
      for (let r = 1; r < s; r++) o += ", " + gs(e[r]);
      return o += "]", o;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let i;
    if (n && n.length > 1) i = n[1];
    else return toString.call(e);
    if (i == "Object") try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : i;
  }
  let Wt = null;
  function gi() {
    return (Wt === null || Wt.buffer.detached === true || Wt.buffer.detached === void 0 && Wt.buffer !== C.memory.buffer) && (Wt = new DataView(C.memory.buffer)), Wt;
  }
  function Ni(e, t) {
    return ud(e >>> 0, t);
  }
  let Gn = null;
  function ni() {
    return (Gn === null || Gn.byteLength === 0) && (Gn = new Uint8Array(C.memory.buffer)), Gn;
  }
  function qs(e, t) {
    try {
      return e.apply(this, t);
    } catch (n) {
      const i = jn(n);
      C.__wbindgen_exn_store(i);
    }
  }
  function qn(e) {
    return e == null;
  }
  function ad(e, t, n) {
    const i = {
      a: e,
      b: t,
      cnt: 1
    }, s = (...o) => {
      i.cnt++;
      const r = i.a;
      i.a = 0;
      try {
        return n(r, i.b, ...o);
      } finally {
        i.a = r, s._wbg_cb_unref();
      }
    };
    return s._wbg_cb_unref = () => {
      --i.cnt === 0 && (C.__wbindgen_destroy_closure(i.a, i.b), i.a = 0, Oo.unregister(i));
    }, Oo.register(s, i, i), s;
  }
  function ge(e, t, n) {
    if (n === void 0) {
      const l = yn.encode(e), a = t(l.length, 1) >>> 0;
      return ni().subarray(a, a + l.length).set(l), pe = l.length, a;
    }
    let i = e.length, s = t(i, 1) >>> 0;
    const o = ni();
    let r = 0;
    for (; r < i; r++) {
      const l = e.charCodeAt(r);
      if (l > 127) break;
      o[s + r] = l;
    }
    if (r !== i) {
      r !== 0 && (e = e.slice(r)), s = n(s, i, i = r + e.length * 3, 1) >>> 0;
      const l = ni().subarray(s + r, s + i), a = yn.encodeInto(e, l);
      r += a.written, s = n(s, i, r, 1) >>> 0;
    }
    return pe = r, s;
  }
  function z(e) {
    const t = C.__wbindgen_externrefs.get(e);
    return C.__externref_table_dealloc(e), t;
  }
  let ii = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ii.decode();
  const cd = 2146435072;
  let Qi = 0;
  function ud(e, t) {
    return Qi += t, Qi >= cd && (ii = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ii.decode(), Qi = t), ii.decode(ni().subarray(e, e + t));
  }
  const yn = new TextEncoder();
  "encodeInto" in yn || (yn.encodeInto = function(e, t) {
    const n = yn.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  });
  let pe = 0, C;
  function fd(e) {
    C = e;
  }
  URL = globalThis.URL;
  const G = await Tf({
    "./proc_web_bg.js": {
      __wbg_set_78ea6a19f4818587: Vf,
      __wbg_then_bd927500e8905df2: Zf,
      __wbg_call_dfde26266607c996: Mf,
      __wbg_new_typed_c072c4ce9a2a0cdf: Ff,
      __wbg_set_6be42768c690e380: qf,
      __wbg_instanceof_Window_faa5cf994f49cca7: Nf,
      __wbg_fetch_47ebc0e53aa08033: If,
      __wbg_new_with_str_and_init_ffe9977c986ea039: Hf,
      __wbg_instanceof_Response_ecfc823e8fb354e2: kf,
      __wbg_text_99930d92d5f1b540: Jf,
      __wbg_set_method_4d69a1a7e34c0aca: Uf,
      __wbg_set_mode_dfc59bbbe25b1d14: Wf,
      __wbg_new_310879b66b6e95e1: Lf,
      __wbg_new_02d162bc6cf02f60: Df,
      __wbg_then_837494e384b37459: Qf,
      __wbg_static_accessor_GLOBAL_THIS_02344c9b09eb08a9: Kf,
      __wbg_static_accessor_SELF_9b2406c23aeb2023: Yf,
      __wbg_static_accessor_GLOBAL_ac6d4ac874d5cd54: Gf,
      __wbg_static_accessor_WINDOW_b34d2126934e16ba: Xf,
      __wbg_resolve_d17db9352f5a220e: jf,
      __wbg_queueMicrotask_b39ea83c7f01971a: zf,
      __wbg_queueMicrotask_78d584b53af520f5: Bf,
      __wbg__wbg_cb_unref_3fa391f3fcdb55f8: Rf,
      __wbg___wbindgen_throw_9c31b086c2b26051: Of,
      __wbg___wbindgen_string_get_d109740c0d18f4d7: Ef,
      __wbg___wbindgen_is_function_5cd60d5cf78b4eef: Pf,
      __wbg___wbindgen_is_undefined_35bb9f4c7fd651d5: Af,
      __wbg___wbindgen_debug_string_edece8177ad01481: Cf,
      __wbindgen_init_externref_table: sd,
      __wbindgen_cast_0000000000000001: ed,
      __wbindgen_cast_0000000000000002: td,
      __wbindgen_cast_0000000000000003: nd,
      __wbindgen_cast_0000000000000004: id
    }
  }, Sf), dd = G.memory, pd = G.__wbg_graphconfiguration_free, hd = G.graphconfiguration_add_import_export, _d = G.graphconfiguration_add_process, gd = G.graphconfiguration_add_requirement, md = G.graphconfiguration_calculate, vd = G.graphconfiguration_can_render, wd = G.graphconfiguration_dehydrate, bd = G.graphconfiguration_factories_for_process, yd = G.graphconfiguration_get_current_data_set, xd = G.graphconfiguration_get_defaulted_items, $d = G.graphconfiguration_get_imports_exports, Sd = G.graphconfiguration_get_initial_matrix, Td = G.graphconfiguration_get_intermediate_items, Cd = G.graphconfiguration_get_processes, Pd = G.graphconfiguration_get_reduced_matrix, Ad = G.graphconfiguration_get_requirements, Ed = G.graphconfiguration_get_units, Od = G.graphconfiguration_new, Rd = G.graphconfiguration_rehydrate, Md = G.graphconfiguration_remove_import_export, Id = G.graphconfiguration_remove_process, kd = G.graphconfiguration_remove_requirement, Nd = G.graphconfiguration_reset, Dd = G.graphconfiguration_search_items, Ld = G.graphconfiguration_search_processes, Fd = G.graphconfiguration_search_processes_by_input, Hd = G.graphconfiguration_search_processes_by_output, Bd = G.graphconfiguration_to_digraph, zd = G.graphconfiguration_update_data_set, jd = G.graphconfiguration_update_modifiers, qd = G.graphconfiguration_update_requirement, Vd = G.graphconfiguration_update_units, Ud = G.wasm_bindgen__convert__closures_____invoke__h495ae29afc064af6, Wd = G.wasm_bindgen__convert__closures_____invoke__h20ef7472b265a578, Kd = G.__wbindgen_malloc, Gd = G.__wbindgen_realloc, Yd = G.__wbindgen_exn_store, Xd = G.__externref_table_alloc, Jd = G.__wbindgen_externrefs, Qd = G.__wbindgen_destroy_closure, Zd = G.__externref_table_dealloc, ul = G.__wbindgen_start, ep = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_alloc: Xd,
    __externref_table_dealloc: Zd,
    __wbg_graphconfiguration_free: pd,
    __wbindgen_destroy_closure: Qd,
    __wbindgen_exn_store: Yd,
    __wbindgen_externrefs: Jd,
    __wbindgen_malloc: Kd,
    __wbindgen_realloc: Gd,
    __wbindgen_start: ul,
    graphconfiguration_add_import_export: hd,
    graphconfiguration_add_process: _d,
    graphconfiguration_add_requirement: gd,
    graphconfiguration_calculate: md,
    graphconfiguration_can_render: vd,
    graphconfiguration_dehydrate: wd,
    graphconfiguration_factories_for_process: bd,
    graphconfiguration_get_current_data_set: yd,
    graphconfiguration_get_defaulted_items: xd,
    graphconfiguration_get_imports_exports: $d,
    graphconfiguration_get_initial_matrix: Sd,
    graphconfiguration_get_intermediate_items: Td,
    graphconfiguration_get_processes: Cd,
    graphconfiguration_get_reduced_matrix: Pd,
    graphconfiguration_get_requirements: Ad,
    graphconfiguration_get_units: Ed,
    graphconfiguration_new: Od,
    graphconfiguration_rehydrate: Rd,
    graphconfiguration_remove_import_export: Md,
    graphconfiguration_remove_process: Id,
    graphconfiguration_remove_requirement: kd,
    graphconfiguration_reset: Nd,
    graphconfiguration_search_items: Dd,
    graphconfiguration_search_processes: Ld,
    graphconfiguration_search_processes_by_input: Fd,
    graphconfiguration_search_processes_by_output: Hd,
    graphconfiguration_to_digraph: Bd,
    graphconfiguration_update_data_set: zd,
    graphconfiguration_update_modifiers: jd,
    graphconfiguration_update_requirement: qd,
    graphconfiguration_update_units: Vd,
    memory: dd,
    wasm_bindgen__convert__closures_____invoke__h20ef7472b265a578: Wd,
    wasm_bindgen__convert__closures_____invoke__h495ae29afc064af6: Ud
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fd(ep);
  ul();
  const tp = {
    __name: "Main",
    async setup(e) {
      let t, n;
      class i {
        constructor(h) {
          this._raw = h;
        }
        id() {
          return this._raw.main.name + "-" + this._raw.main.version + (this._raw.mod ? "-" + this._raw.mod[0].name + "-" + this._raw.mod[0].version : "");
        }
        description() {
          return this._raw.main.name + " (" + this._raw.main.version + ")" + (this._raw.mod ? " [" + this._raw.mod[0].name + " (" + this._raw.mod[0].version + ")]" : "");
        }
        style() {
          return this._raw.style;
        }
        units() {
          return this._raw.units;
        }
      }
      const s = xa(new _s()), o = he(0), r = he({
        "get-started": !s.value.can_render(),
        "current-configuration": s.value.can_render()
      });
      if (window.location.hash) {
        let c = new URLSearchParams(window.location.hash.substring(1));
        console.log("params", c);
        var l = document.querySelector("#viz");
        l.addEventListener("load", function() {
          c.has("s0") ? (s.value.rehydrate(c.get("s0")).then((h) => {
            console.log("rehydrate result", h), u("get-started", !s.value.can_render()), u("current-configuration", s.value.can_render()), o.value++;
          }), console.log("cfg units", s.value.get_units())) : (console.log("reset: no parameter"), s.value.reset(), o.value++);
        });
      } else console.log("reset: no fragment"), s.value.reset(), o.value++;
      const a = ([t, n] = ec(() => fetch("data/datasets.json").then((c) => {
        if (!c.ok) throw new Error("failed to fetch the list of data sets");
        return c.json();
      }).then((c) => (console.log("datasets json", c), c.datasets.map((h) => new i(h)))).then((c) => (console.log("fetched datasets", c.map((h) => ({
        style: h.style(),
        id: h.id(),
        description: h.description(),
        units: h.units()
      }))), c))), t = await t, n(), t);
      function f() {
        console.log("A handle_cfg_update"), u("get-started", !s.value.can_render()), u("current-configuration", s.value.can_render());
        let c = s.value.dehydrate();
        console.log("serialised", c), c && window.location.replace("#s0=" + c), Sa(s), o.value++;
      }
      function u(c, h) {
        console.log("fold update 1", c, h, r.value, c);
        let _ = null;
        c.target ? _ = c.target.id : _ = c, typeof h < "u" && h != null ? r.value[_] = h : r[_] = !r[_], console.log("fold update 2", _, h, r.value, c);
      }
      return (c, h) => (L(), Ne($e(bu), null, {
        "left-pane": Je(() => [
          me(xf, {
            cfg: s.value,
            cfg_fu: o.value,
            folds: r.value,
            datasets: $e(a),
            onCfg_update: f,
            onFold_update: u
          }, null, 8, [
            "cfg",
            "cfg_fu",
            "folds",
            "datasets"
          ])
        ]),
        "right-pane": Je(() => [
          me($f, {
            cfg: s.value,
            cfg_fu: o.value
          }, null, 8, [
            "cfg",
            "cfg_fu"
          ])
        ]),
        _: 1
      }));
    }
  }, np = {
    __name: "App",
    setup(e) {
      return (t, n) => (L(), V(ae, null, [
        n[0] || (n[0] = E("header", null, [
          E("h1", null, [
            E("a", {
              href: "#",
              onclick: "window.location.assign('#'); window.location.reload()"
            }, "Process Calculator")
          ])
        ], -1)),
        n[1] || (n[1] = E("br", null, null, -1)),
        E("main", null, [
          (L(), Ne(Ec, null, {
            default: Je(() => [
              me(tp)
            ]),
            _: 1
          }))
        ])
      ], 64));
    }
  }, ip = ki(np, [
    [
      "__scopeId",
      "data-v-66573fa8"
    ]
  ]), sp = [
    "top",
    "right",
    "bottom",
    "left"
  ], Ro = [
    "start",
    "end"
  ], Mo = sp.reduce((e, t) => e.concat(t, t + "-" + Ro[0], t + "-" + Ro[1]), []), In = Math.min, Bt = Math.max, op = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, rp = {
    start: "end",
    end: "start"
  };
  function ms(e, t, n) {
    return Bt(e, In(t, n));
  }
  function qt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function ut(e) {
    return e.split("-")[0];
  }
  function Ge(e) {
    return e.split("-")[1];
  }
  function fl(e) {
    return e === "x" ? "y" : "x";
  }
  function Vs(e) {
    return e === "y" ? "height" : "width";
  }
  const lp = /* @__PURE__ */ new Set([
    "top",
    "bottom"
  ]);
  function gt(e) {
    return lp.has(ut(e)) ? "y" : "x";
  }
  function Us(e) {
    return fl(gt(e));
  }
  function dl(e, t, n) {
    n === void 0 && (n = false);
    const i = Ge(e), s = Us(e), o = Vs(s);
    let r = s === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (r = vi(r)), [
      r,
      vi(r)
    ];
  }
  function ap(e) {
    const t = vi(e);
    return [
      mi(e),
      t,
      mi(t)
    ];
  }
  function mi(e) {
    return e.replace(/start|end/g, (t) => rp[t]);
  }
  const Io = [
    "left",
    "right"
  ], ko = [
    "right",
    "left"
  ], cp = [
    "top",
    "bottom"
  ], up = [
    "bottom",
    "top"
  ];
  function fp(e, t, n) {
    switch (e) {
      case "top":
      case "bottom":
        return n ? t ? ko : Io : t ? Io : ko;
      case "left":
      case "right":
        return t ? cp : up;
      default:
        return [];
    }
  }
  function dp(e, t, n, i) {
    const s = Ge(e);
    let o = fp(ut(e), n === "start", i);
    return s && (o = o.map((r) => r + "-" + s), t && (o = o.concat(o.map(mi)))), o;
  }
  function vi(e) {
    return e.replace(/left|right|bottom|top/g, (t) => op[t]);
  }
  function pp(e) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...e
    };
  }
  function pl(e) {
    return typeof e != "number" ? pp(e) : {
      top: e,
      right: e,
      bottom: e,
      left: e
    };
  }
  function xn(e) {
    const { x: t, y: n, width: i, height: s } = e;
    return {
      width: i,
      height: s,
      top: n,
      left: t,
      right: t + i,
      bottom: n + s,
      x: t,
      y: n
    };
  }
  function No(e, t, n) {
    let { reference: i, floating: s } = e;
    const o = gt(t), r = Us(t), l = Vs(r), a = ut(t), f = o === "y", u = i.x + i.width / 2 - s.width / 2, c = i.y + i.height / 2 - s.height / 2, h = i[l] / 2 - s[l] / 2;
    let _;
    switch (a) {
      case "top":
        _ = {
          x: u,
          y: i.y - s.height
        };
        break;
      case "bottom":
        _ = {
          x: u,
          y: i.y + i.height
        };
        break;
      case "right":
        _ = {
          x: i.x + i.width,
          y: c
        };
        break;
      case "left":
        _ = {
          x: i.x - s.width,
          y: c
        };
        break;
      default:
        _ = {
          x: i.x,
          y: i.y
        };
    }
    switch (Ge(t)) {
      case "start":
        _[r] -= h * (n && f ? -1 : 1);
        break;
      case "end":
        _[r] += h * (n && f ? -1 : 1);
        break;
    }
    return _;
  }
  const hp = async (e, t, n) => {
    const { placement: i = "bottom", strategy: s = "absolute", middleware: o = [], platform: r } = n, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(t));
    let f = await r.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }), { x: u, y: c } = No(f, i, a), h = i, _ = {}, w = 0;
    for (let v = 0; v < l.length; v++) {
      const { name: g, fn: T } = l[v], { x: b, y: F, data: N, reset: A } = await T({
        x: u,
        y: c,
        initialPlacement: i,
        placement: h,
        strategy: s,
        middlewareData: _,
        rects: f,
        platform: r,
        elements: {
          reference: e,
          floating: t
        }
      });
      u = b ?? u, c = F ?? c, _ = {
        ..._,
        [g]: {
          ..._[g],
          ...N
        }
      }, A && w <= 50 && (w++, typeof A == "object" && (A.placement && (h = A.placement), A.rects && (f = A.rects === true ? await r.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : A.rects), { x: u, y: c } = No(f, h, a)), v = -1);
    }
    return {
      x: u,
      y: c,
      placement: h,
      strategy: s,
      middlewareData: _
    };
  };
  async function Di(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: i, y: s, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: f = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: h = false, padding: _ = 0 } = qt(t, e), w = pl(_), g = l[h ? c === "floating" ? "reference" : "floating" : c], T = xn(await o.getClippingRect({
      element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
      boundary: f,
      rootBoundary: u,
      strategy: a
    })), b = c === "floating" ? {
      x: i,
      y: s,
      width: r.floating.width,
      height: r.floating.height
    } : r.reference, F = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), N = await (o.isElement == null ? void 0 : o.isElement(F)) ? await (o.getScale == null ? void 0 : o.getScale(F)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, A = xn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: l,
      rect: b,
      offsetParent: F,
      strategy: a
    }) : b);
    return {
      top: (T.top - A.top + w.top) / N.y,
      bottom: (A.bottom - T.bottom + w.bottom) / N.y,
      left: (T.left - A.left + w.left) / N.x,
      right: (A.right - T.right + w.right) / N.x
    };
  }
  const _p = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: i, placement: s, rects: o, platform: r, elements: l, middlewareData: a } = t, { element: f, padding: u = 0 } = qt(e, t) || {};
      if (f == null) return {};
      const c = pl(u), h = {
        x: n,
        y: i
      }, _ = Us(s), w = Vs(_), v = await r.getDimensions(f), g = _ === "y", T = g ? "top" : "left", b = g ? "bottom" : "right", F = g ? "clientHeight" : "clientWidth", N = o.reference[w] + o.reference[_] - h[_] - o.floating[w], A = h[_] - o.reference[_], j = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(f));
      let Y = j ? j[F] : 0;
      (!Y || !await (r.isElement == null ? void 0 : r.isElement(j))) && (Y = l.floating[F] || o.floating[w]);
      const P = N / 2 - A / 2, M = Y / 2 - v[w] / 2 - 1, D = In(c[T], M), H = In(c[b], M), te = D, de = Y - v[w] - H, re = Y / 2 - v[w] / 2 + P, Pe = ms(te, re, de), ne = !a.arrow && Ge(s) != null && re !== Pe && o.reference[w] / 2 - (re < te ? D : H) - v[w] / 2 < 0, X = ne ? re < te ? re - te : re - de : 0;
      return {
        [_]: h[_] + X,
        data: {
          [_]: Pe,
          centerOffset: re - Pe - X,
          ...ne && {
            alignmentOffset: X
          }
        },
        reset: ne
      };
    }
  });
  function gp(e, t, n) {
    return (e ? [
      ...n.filter((s) => Ge(s) === e),
      ...n.filter((s) => Ge(s) !== e)
    ] : n.filter((s) => ut(s) === s)).filter((s) => e ? Ge(s) === e || (t ? mi(s) !== s : false) : true);
  }
  const mp = function(e) {
    return e === void 0 && (e = {}), {
      name: "autoPlacement",
      options: e,
      async fn(t) {
        var n, i, s;
        const { rects: o, middlewareData: r, placement: l, platform: a, elements: f } = t, { crossAxis: u = false, alignment: c, allowedPlacements: h = Mo, autoAlignment: _ = true, ...w } = qt(e, t), v = c !== void 0 || h === Mo ? gp(c || null, _, h) : h, g = await Di(t, w), T = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, b = v[T];
        if (b == null) return {};
        const F = dl(b, o, await (a.isRTL == null ? void 0 : a.isRTL(f.floating)));
        if (l !== b) return {
          reset: {
            placement: v[0]
          }
        };
        const N = [
          g[ut(b)],
          g[F[0]],
          g[F[1]]
        ], A = [
          ...((i = r.autoPlacement) == null ? void 0 : i.overflows) || [],
          {
            placement: b,
            overflows: N
          }
        ], j = v[T + 1];
        if (j) return {
          data: {
            index: T + 1,
            overflows: A
          },
          reset: {
            placement: j
          }
        };
        const Y = A.map((D) => {
          const H = Ge(D.placement);
          return [
            D.placement,
            H && u ? D.overflows.slice(0, 2).reduce((te, de) => te + de, 0) : D.overflows[0],
            D.overflows
          ];
        }).sort((D, H) => D[1] - H[1]), M = ((s = Y.filter((D) => D[2].slice(0, Ge(D[0]) ? 2 : 3).every((H) => H <= 0))[0]) == null ? void 0 : s[0]) || Y[0][0];
        return M !== l ? {
          data: {
            index: T + 1,
            overflows: A
          },
          reset: {
            placement: M
          }
        } : {};
      }
    };
  }, vp = function(e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, i;
        const { placement: s, middlewareData: o, rects: r, initialPlacement: l, platform: a, elements: f } = t, { mainAxis: u = true, crossAxis: c = true, fallbackPlacements: h, fallbackStrategy: _ = "bestFit", fallbackAxisSideDirection: w = "none", flipAlignment: v = true, ...g } = qt(e, t);
        if ((n = o.arrow) != null && n.alignmentOffset) return {};
        const T = ut(s), b = gt(l), F = ut(l) === l, N = await (a.isRTL == null ? void 0 : a.isRTL(f.floating)), A = h || (F || !v ? [
          vi(l)
        ] : ap(l)), j = w !== "none";
        !h && j && A.push(...dp(l, v, w, N));
        const Y = [
          l,
          ...A
        ], P = await Di(t, g), M = [];
        let D = ((i = o.flip) == null ? void 0 : i.overflows) || [];
        if (u && M.push(P[T]), c) {
          const re = dl(s, r, N);
          M.push(P[re[0]], P[re[1]]);
        }
        if (D = [
          ...D,
          {
            placement: s,
            overflows: M
          }
        ], !M.every((re) => re <= 0)) {
          var H, te;
          const re = (((H = o.flip) == null ? void 0 : H.index) || 0) + 1, Pe = Y[re];
          if (Pe && (!(c === "alignment" ? b !== gt(Pe) : false) || D.every((J) => gt(J.placement) === b ? J.overflows[0] > 0 : true))) return {
            data: {
              index: re,
              overflows: D
            },
            reset: {
              placement: Pe
            }
          };
          let ne = (te = D.filter((X) => X.overflows[0] <= 0).sort((X, J) => X.overflows[1] - J.overflows[1])[0]) == null ? void 0 : te.placement;
          if (!ne) switch (_) {
            case "bestFit": {
              var de;
              const X = (de = D.filter((J) => {
                if (j) {
                  const xe = gt(J.placement);
                  return xe === b || xe === "y";
                }
                return true;
              }).map((J) => [
                J.placement,
                J.overflows.filter((xe) => xe > 0).reduce((xe, Vt) => xe + Vt, 0)
              ]).sort((J, xe) => J[1] - xe[1])[0]) == null ? void 0 : de[0];
              X && (ne = X);
              break;
            }
            case "initialPlacement":
              ne = l;
              break;
          }
          if (s !== ne) return {
            reset: {
              placement: ne
            }
          };
        }
        return {};
      }
    };
  }, wp = /* @__PURE__ */ new Set([
    "left",
    "top"
  ]);
  async function bp(e, t) {
    const { placement: n, platform: i, elements: s } = e, o = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)), r = ut(n), l = Ge(n), a = gt(n) === "y", f = wp.has(r) ? -1 : 1, u = o && a ? -1 : 1, c = qt(t, e);
    let { mainAxis: h, crossAxis: _, alignmentAxis: w } = typeof c == "number" ? {
      mainAxis: c,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: c.mainAxis || 0,
      crossAxis: c.crossAxis || 0,
      alignmentAxis: c.alignmentAxis
    };
    return l && typeof w == "number" && (_ = l === "end" ? w * -1 : w), a ? {
      x: _ * u,
      y: h * f
    } : {
      x: h * f,
      y: _ * u
    };
  }
  const yp = function(e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, i;
        const { x: s, y: o, placement: r, middlewareData: l } = t, a = await bp(t, e);
        return r === ((n = l.offset) == null ? void 0 : n.placement) && (i = l.arrow) != null && i.alignmentOffset ? {} : {
          x: s + a.x,
          y: o + a.y,
          data: {
            ...a,
            placement: r
          }
        };
      }
    };
  }, xp = function(e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const { x: n, y: i, placement: s } = t, { mainAxis: o = true, crossAxis: r = false, limiter: l = {
          fn: (g) => {
            let { x: T, y: b } = g;
            return {
              x: T,
              y: b
            };
          }
        }, ...a } = qt(e, t), f = {
          x: n,
          y: i
        }, u = await Di(t, a), c = gt(ut(s)), h = fl(c);
        let _ = f[h], w = f[c];
        if (o) {
          const g = h === "y" ? "top" : "left", T = h === "y" ? "bottom" : "right", b = _ + u[g], F = _ - u[T];
          _ = ms(b, _, F);
        }
        if (r) {
          const g = c === "y" ? "top" : "left", T = c === "y" ? "bottom" : "right", b = w + u[g], F = w - u[T];
          w = ms(b, w, F);
        }
        const v = l.fn({
          ...t,
          [h]: _,
          [c]: w
        });
        return {
          ...v,
          data: {
            x: v.x - n,
            y: v.y - i,
            enabled: {
              [h]: o,
              [c]: r
            }
          }
        };
      }
    };
  }, $p = function(e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        var n, i;
        const { placement: s, rects: o, platform: r, elements: l } = t, { apply: a = () => {
        }, ...f } = qt(e, t), u = await Di(t, f), c = ut(s), h = Ge(s), _ = gt(s) === "y", { width: w, height: v } = o.floating;
        let g, T;
        c === "top" || c === "bottom" ? (g = c, T = h === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (T = c, g = h === "end" ? "top" : "bottom");
        const b = v - u.top - u.bottom, F = w - u.left - u.right, N = In(v - u[g], b), A = In(w - u[T], F), j = !t.middlewareData.shift;
        let Y = N, P = A;
        if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = F), (i = t.middlewareData.shift) != null && i.enabled.y && (Y = b), j && !h) {
          const D = Bt(u.left, 0), H = Bt(u.right, 0), te = Bt(u.top, 0), de = Bt(u.bottom, 0);
          _ ? P = w - 2 * (D !== 0 || H !== 0 ? D + H : Bt(u.left, u.right)) : Y = v - 2 * (te !== 0 || de !== 0 ? te + de : Bt(u.top, u.bottom));
        }
        await a({
          ...t,
          availableWidth: P,
          availableHeight: Y
        });
        const M = await r.getDimensions(l.floating);
        return w !== M.width || v !== M.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function ze(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function lt(e) {
    return ze(e).getComputedStyle(e);
  }
  const Do = Math.min, $n = Math.max, wi = Math.round;
  function hl(e) {
    const t = lt(e);
    let n = parseFloat(t.width), i = parseFloat(t.height);
    const s = e.offsetWidth, o = e.offsetHeight, r = wi(n) !== s || wi(i) !== o;
    return r && (n = s, i = o), {
      width: n,
      height: i,
      fallback: r
    };
  }
  function It(e) {
    return gl(e) ? (e.nodeName || "").toLowerCase() : "";
  }
  let Yn;
  function _l() {
    if (Yn) return Yn;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (Yn = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Yn) : navigator.userAgent;
  }
  function at(e) {
    return e instanceof ze(e).HTMLElement;
  }
  function Ot(e) {
    return e instanceof ze(e).Element;
  }
  function gl(e) {
    return e instanceof ze(e).Node;
  }
  function Lo(e) {
    return typeof ShadowRoot > "u" ? false : e instanceof ze(e).ShadowRoot || e instanceof ShadowRoot;
  }
  function Li(e) {
    const { overflow: t, overflowX: n, overflowY: i, display: s } = lt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && ![
      "inline",
      "contents"
    ].includes(s);
  }
  function Sp(e) {
    return [
      "table",
      "td",
      "th"
    ].includes(It(e));
  }
  function vs(e) {
    const t = /firefox/i.test(_l()), n = lt(e), i = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || [
      "transform",
      "perspective"
    ].some((s) => n.willChange.includes(s)) || [
      "paint",
      "layout",
      "strict",
      "content"
    ].some((s) => {
      const o = n.contain;
      return o != null && o.includes(s);
    });
  }
  function ml() {
    return !/^((?!chrome|android).)*safari/i.test(_l());
  }
  function Ws(e) {
    return [
      "html",
      "body",
      "#document"
    ].includes(It(e));
  }
  function vl(e) {
    return Ot(e) ? e : e.contextElement;
  }
  const wl = {
    x: 1,
    y: 1
  };
  function tn(e) {
    const t = vl(e);
    if (!at(t)) return wl;
    const n = t.getBoundingClientRect(), { width: i, height: s, fallback: o } = hl(t);
    let r = (o ? wi(n.width) : n.width) / i, l = (o ? wi(n.height) : n.height) / s;
    return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), {
      x: r,
      y: l
    };
  }
  function kn(e, t, n, i) {
    var s, o;
    t === void 0 && (t = false), n === void 0 && (n = false);
    const r = e.getBoundingClientRect(), l = vl(e);
    let a = wl;
    t && (i ? Ot(i) && (a = tn(i)) : a = tn(e));
    const f = l ? ze(l) : window, u = !ml() && n;
    let c = (r.left + (u && ((s = f.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / a.x, h = (r.top + (u && ((o = f.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, _ = r.width / a.x, w = r.height / a.y;
    if (l) {
      const v = ze(l), g = i && Ot(i) ? ze(i) : i;
      let T = v.frameElement;
      for (; T && i && g !== v; ) {
        const b = tn(T), F = T.getBoundingClientRect(), N = getComputedStyle(T);
        F.x += (T.clientLeft + parseFloat(N.paddingLeft)) * b.x, F.y += (T.clientTop + parseFloat(N.paddingTop)) * b.y, c *= b.x, h *= b.y, _ *= b.x, w *= b.y, c += F.x, h += F.y, T = ze(T).frameElement;
      }
    }
    return {
      width: _,
      height: w,
      top: h,
      right: c + _,
      bottom: h + w,
      left: c,
      x: c,
      y: h
    };
  }
  function Rt(e) {
    return ((gl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Fi(e) {
    return Ot(e) ? {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    } : {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }
  function bl(e) {
    return kn(Rt(e)).left + Fi(e).scrollLeft;
  }
  function Nn(e) {
    if (It(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Lo(e) && e.host || Rt(e);
    return Lo(t) ? t.host : t;
  }
  function yl(e) {
    const t = Nn(e);
    return Ws(t) ? t.ownerDocument.body : at(t) && Li(t) ? t : yl(t);
  }
  function bi(e, t) {
    var n;
    t === void 0 && (t = []);
    const i = yl(e), s = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ze(i);
    return s ? t.concat(o, o.visualViewport || [], Li(i) ? i : []) : t.concat(i, bi(i));
  }
  function Fo(e, t, n) {
    return t === "viewport" ? xn(function(i, s) {
      const o = ze(i), r = Rt(i), l = o.visualViewport;
      let a = r.clientWidth, f = r.clientHeight, u = 0, c = 0;
      if (l) {
        a = l.width, f = l.height;
        const h = ml();
        (h || !h && s === "fixed") && (u = l.offsetLeft, c = l.offsetTop);
      }
      return {
        width: a,
        height: f,
        x: u,
        y: c
      };
    }(e, n)) : Ot(t) ? xn(function(i, s) {
      const o = kn(i, true, s === "fixed"), r = o.top + i.clientTop, l = o.left + i.clientLeft, a = at(i) ? tn(i) : {
        x: 1,
        y: 1
      };
      return {
        width: i.clientWidth * a.x,
        height: i.clientHeight * a.y,
        x: l * a.x,
        y: r * a.y
      };
    }(t, n)) : xn(function(i) {
      const s = Rt(i), o = Fi(i), r = i.ownerDocument.body, l = $n(s.scrollWidth, s.clientWidth, r.scrollWidth, r.clientWidth), a = $n(s.scrollHeight, s.clientHeight, r.scrollHeight, r.clientHeight);
      let f = -o.scrollLeft + bl(i);
      const u = -o.scrollTop;
      return lt(r).direction === "rtl" && (f += $n(s.clientWidth, r.clientWidth) - l), {
        width: l,
        height: a,
        x: f,
        y: u
      };
    }(Rt(e)));
  }
  function Ho(e) {
    return at(e) && lt(e).position !== "fixed" ? e.offsetParent : null;
  }
  function Bo(e) {
    const t = ze(e);
    let n = Ho(e);
    for (; n && Sp(n) && lt(n).position === "static"; ) n = Ho(n);
    return n && (It(n) === "html" || It(n) === "body" && lt(n).position === "static" && !vs(n)) ? t : n || function(i) {
      let s = Nn(i);
      for (; at(s) && !Ws(s); ) {
        if (vs(s)) return s;
        s = Nn(s);
      }
      return null;
    }(e) || t;
  }
  function Tp(e, t, n) {
    const i = at(t), s = Rt(t), o = kn(e, true, n === "fixed", t);
    let r = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const l = {
      x: 0,
      y: 0
    };
    if (i || !i && n !== "fixed") if ((It(t) !== "body" || Li(s)) && (r = Fi(t)), at(t)) {
      const a = kn(t, true);
      l.x = a.x + t.clientLeft, l.y = a.y + t.clientTop;
    } else s && (l.x = bl(s));
    return {
      x: o.left + r.scrollLeft - l.x,
      y: o.top + r.scrollTop - l.y,
      width: o.width,
      height: o.height
    };
  }
  const Cp = {
    getClippingRect: function(e) {
      let { element: t, boundary: n, rootBoundary: i, strategy: s } = e;
      const o = n === "clippingAncestors" ? function(f, u) {
        const c = u.get(f);
        if (c) return c;
        let h = bi(f).filter((g) => Ot(g) && It(g) !== "body"), _ = null;
        const w = lt(f).position === "fixed";
        let v = w ? Nn(f) : f;
        for (; Ot(v) && !Ws(v); ) {
          const g = lt(v), T = vs(v);
          (w ? T || _ : T || g.position !== "static" || !_ || ![
            "absolute",
            "fixed"
          ].includes(_.position)) ? _ = g : h = h.filter((b) => b !== v), v = Nn(v);
        }
        return u.set(f, h), h;
      }(t, this._c) : [].concat(n), r = [
        ...o,
        i
      ], l = r[0], a = r.reduce((f, u) => {
        const c = Fo(t, u, s);
        return f.top = $n(c.top, f.top), f.right = Do(c.right, f.right), f.bottom = Do(c.bottom, f.bottom), f.left = $n(c.left, f.left), f;
      }, Fo(t, l, s));
      return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
      };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
      let { rect: t, offsetParent: n, strategy: i } = e;
      const s = at(n), o = Rt(n);
      if (n === o) return t;
      let r = {
        scrollLeft: 0,
        scrollTop: 0
      }, l = {
        x: 1,
        y: 1
      };
      const a = {
        x: 0,
        y: 0
      };
      if ((s || !s && i !== "fixed") && ((It(n) !== "body" || Li(o)) && (r = Fi(n)), at(n))) {
        const f = kn(n);
        l = tn(n), a.x = f.x + n.clientLeft, a.y = f.y + n.clientTop;
      }
      return {
        width: t.width * l.x,
        height: t.height * l.y,
        x: t.x * l.x - r.scrollLeft * l.x + a.x,
        y: t.y * l.y - r.scrollTop * l.y + a.y
      };
    },
    isElement: Ot,
    getDimensions: function(e) {
      return at(e) ? hl(e) : e.getBoundingClientRect();
    },
    getOffsetParent: Bo,
    getDocumentElement: Rt,
    getScale: tn,
    async getElementRects(e) {
      let { reference: t, floating: n, strategy: i } = e;
      const s = this.getOffsetParent || Bo, o = this.getDimensions;
      return {
        reference: Tp(t, await s(n), i),
        floating: {
          x: 0,
          y: 0,
          ...await o(n)
        }
      };
    },
    getClientRects: (e) => Array.from(e.getClientRects()),
    isRTL: (e) => lt(e).direction === "rtl"
  }, Pp = (e, t, n) => {
    const i = /* @__PURE__ */ new Map(), s = {
      platform: Cp,
      ...n
    }, o = {
      ...s.platform,
      _c: i
    };
    return hp(e, t, {
      ...s,
      platform: o
    });
  };
  function xl(e, t) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? xl(e[n], t[n]) : e[n] = t[n]);
  }
  const Ye = {
    disabled: false,
    distance: 5,
    skidding: 0,
    container: "body",
    boundary: void 0,
    instantMove: false,
    disposeTimeout: 150,
    popperTriggers: [],
    strategy: "absolute",
    preventOverflow: true,
    flip: true,
    shift: true,
    overflowPadding: 0,
    arrowPadding: 0,
    arrowOverflow: true,
    autoHideOnMousedown: false,
    themes: {
      tooltip: {
        placement: "top",
        triggers: [
          "hover",
          "focus",
          "touch"
        ],
        hideTriggers: (e) => [
          ...e,
          "click"
        ],
        delay: {
          show: 200,
          hide: 0
        },
        handleResize: false,
        html: false,
        loadingContent: "..."
      },
      dropdown: {
        placement: "bottom",
        triggers: [
          "click"
        ],
        delay: 0,
        handleResize: true,
        autoHide: true
      },
      menu: {
        $extend: "dropdown",
        triggers: [
          "hover",
          "focus"
        ],
        popperTriggers: [
          "hover"
        ],
        delay: {
          show: 0,
          hide: 400
        }
      }
    }
  };
  function Dn(e, t) {
    let n = Ye.themes[e] || {}, i;
    do
      i = n[t], typeof i > "u" ? n.$extend ? n = Ye.themes[n.$extend] || {} : (n = null, i = Ye[t]) : n = null;
    while (n);
    return i;
  }
  function Ap(e) {
    const t = [
      e
    ];
    let n = Ye.themes[e] || {};
    do
      n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ye.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map((i) => `v-popper--theme-${i}`);
  }
  function zo(e) {
    const t = [
      e
    ];
    let n = Ye.themes[e] || {};
    do
      n.$extend ? (t.push(n.$extend), n = Ye.themes[n.$extend] || {}) : n = null;
    while (n);
    return t;
  }
  let an = false;
  if (typeof window < "u") {
    an = false;
    try {
      const e = Object.defineProperty({}, "passive", {
        get() {
          an = true;
        }
      });
      window.addEventListener("test", null, e);
    } catch {
    }
  }
  let $l = false;
  typeof window < "u" && typeof navigator < "u" && ($l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
  const Sl = [
    "auto",
    "top",
    "bottom",
    "left",
    "right"
  ].reduce((e, t) => e.concat([
    t,
    `${t}-start`,
    `${t}-end`
  ]), []), jo = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
  }, qo = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup"
  };
  function Vo(e, t) {
    const n = e.indexOf(t);
    n !== -1 && e.splice(n, 1);
  }
  function Zi() {
    return new Promise((e) => requestAnimationFrame(() => {
      requestAnimationFrame(e);
    }));
  }
  const Ue = [];
  let Ft = null;
  const Uo = {};
  function Wo(e) {
    let t = Uo[e];
    return t || (t = Uo[e] = []), t;
  }
  let ws = function() {
  };
  typeof window < "u" && (ws = window.Element);
  function Z(e) {
    return function(t) {
      return Dn(t.theme, e);
    };
  }
  const es = "__floating-vue__popper", Tl = () => zn({
    name: "VPopper",
    provide() {
      return {
        [es]: {
          parentPopper: this
        }
      };
    },
    inject: {
      [es]: {
        default: null
      }
    },
    props: {
      theme: {
        type: String,
        required: true
      },
      targetNodes: {
        type: Function,
        required: true
      },
      referenceNode: {
        type: Function,
        default: null
      },
      popperNode: {
        type: Function,
        required: true
      },
      shown: {
        type: Boolean,
        default: false
      },
      showGroup: {
        type: String,
        default: null
      },
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: Z("disabled")
      },
      positioningDisabled: {
        type: Boolean,
        default: Z("positioningDisabled")
      },
      placement: {
        type: String,
        default: Z("placement"),
        validator: (e) => Sl.includes(e)
      },
      delay: {
        type: [
          String,
          Number,
          Object
        ],
        default: Z("delay")
      },
      distance: {
        type: [
          Number,
          String
        ],
        default: Z("distance")
      },
      skidding: {
        type: [
          Number,
          String
        ],
        default: Z("skidding")
      },
      triggers: {
        type: Array,
        default: Z("triggers")
      },
      showTriggers: {
        type: [
          Array,
          Function
        ],
        default: Z("showTriggers")
      },
      hideTriggers: {
        type: [
          Array,
          Function
        ],
        default: Z("hideTriggers")
      },
      popperTriggers: {
        type: Array,
        default: Z("popperTriggers")
      },
      popperShowTriggers: {
        type: [
          Array,
          Function
        ],
        default: Z("popperShowTriggers")
      },
      popperHideTriggers: {
        type: [
          Array,
          Function
        ],
        default: Z("popperHideTriggers")
      },
      container: {
        type: [
          String,
          Object,
          ws,
          Boolean
        ],
        default: Z("container")
      },
      boundary: {
        type: [
          String,
          ws
        ],
        default: Z("boundary")
      },
      strategy: {
        type: String,
        validator: (e) => [
          "absolute",
          "fixed"
        ].includes(e),
        default: Z("strategy")
      },
      autoHide: {
        type: [
          Boolean,
          Function
        ],
        default: Z("autoHide")
      },
      handleResize: {
        type: Boolean,
        default: Z("handleResize")
      },
      instantMove: {
        type: Boolean,
        default: Z("instantMove")
      },
      eagerMount: {
        type: Boolean,
        default: Z("eagerMount")
      },
      popperClass: {
        type: [
          String,
          Array,
          Object
        ],
        default: Z("popperClass")
      },
      computeTransformOrigin: {
        type: Boolean,
        default: Z("computeTransformOrigin")
      },
      autoMinSize: {
        type: Boolean,
        default: Z("autoMinSize")
      },
      autoSize: {
        type: [
          Boolean,
          String
        ],
        default: Z("autoSize")
      },
      autoMaxSize: {
        type: Boolean,
        default: Z("autoMaxSize")
      },
      autoBoundaryMaxSize: {
        type: Boolean,
        default: Z("autoBoundaryMaxSize")
      },
      preventOverflow: {
        type: Boolean,
        default: Z("preventOverflow")
      },
      overflowPadding: {
        type: [
          Number,
          String
        ],
        default: Z("overflowPadding")
      },
      arrowPadding: {
        type: [
          Number,
          String
        ],
        default: Z("arrowPadding")
      },
      arrowOverflow: {
        type: Boolean,
        default: Z("arrowOverflow")
      },
      flip: {
        type: Boolean,
        default: Z("flip")
      },
      shift: {
        type: Boolean,
        default: Z("shift")
      },
      shiftCrossAxis: {
        type: Boolean,
        default: Z("shiftCrossAxis")
      },
      noAutoFocus: {
        type: Boolean,
        default: Z("noAutoFocus")
      },
      disposeTimeout: {
        type: Number,
        default: Z("disposeTimeout")
      }
    },
    emits: {
      show: () => true,
      hide: () => true,
      "update:shown": (e) => true,
      "apply-show": () => true,
      "apply-hide": () => true,
      "close-group": () => true,
      "close-directive": () => true,
      "auto-hide": () => true,
      resize: () => true
    },
    data() {
      return {
        isShown: false,
        isMounted: false,
        skipTransition: false,
        classes: {
          showFrom: false,
          showTo: false,
          hideFrom: false,
          hideTo: true
        },
        result: {
          x: 0,
          y: 0,
          placement: "",
          strategy: this.strategy,
          arrow: {
            x: 0,
            y: 0,
            centerOffset: 0
          },
          transformOrigin: null
        },
        randomId: `popper_${[
          Math.random(),
          Date.now()
        ].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
        shownChildren: /* @__PURE__ */ new Set(),
        lastAutoHide: true,
        pendingHide: false,
        containsGlobalTarget: false,
        isDisposed: true,
        mouseDownContains: false
      };
    },
    computed: {
      popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
          show: this.show,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: {
            ...this.classes,
            popperClass: this.popperClass
          },
          result: this.positioningDisabled ? null : this.result,
          attrs: this.$attrs
        };
      },
      parentPopper() {
        var e;
        return (e = this[es]) == null ? void 0 : e.parentPopper;
      },
      hasPopperShowTriggerHover() {
        var e, t;
        return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
      }
    },
    watch: {
      shown: "$_autoShowHide",
      disabled(e) {
        e ? this.dispose() : this.init();
      },
      async container() {
        this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
      },
      triggers: {
        handler: "$_refreshListeners",
        deep: true
      },
      positioningDisabled: "$_refreshListeners",
      ...[
        "placement",
        "distance",
        "skidding",
        "boundary",
        "strategy",
        "overflowPadding",
        "arrowPadding",
        "preventOverflow",
        "shift",
        "shiftCrossAxis",
        "flip"
      ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
    },
    created() {
      this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
    },
    mounted() {
      this.init(), this.$_detachPopperNode();
    },
    activated() {
      this.$_autoShowHide();
    },
    deactivated() {
      this.hide();
    },
    beforeUnmount() {
      this.dispose();
    },
    methods: {
      show({ event: e = null, skipDelay: t = false, force: n = false } = {}) {
        var i, s;
        (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = false, (n || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = true, requestAnimationFrame(() => {
          this.$_showFrameLocked = false;
        })), this.$emit("update:shown", true));
      },
      hide({ event: e = null, skipDelay: t = false } = {}) {
        var n;
        if (!this.$_hideInProgress) {
          if (this.shownChildren.size > 0) {
            this.pendingHide = true;
            return;
          }
          if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
            this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
              this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({
                skipDelay: t
              }), this.parentPopper.lockedChild = null);
            }, 1e3));
            return;
          }
          ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = false, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", false);
        }
      },
      init() {
        var e;
        this.isDisposed && (this.isDisposed = false, this.isMounted = false, this.$_events = [], this.$_preventShow = false, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
      },
      dispose() {
        this.isDisposed || (this.isDisposed = true, this.$_removeEventListeners(), this.hide({
          skipDelay: true
        }), this.$_detachPopperNode(), this.isMounted = false, this.isShown = false, this.$_updateParentShownChildren(false), this.$_swapTargetAttrs("data-original-title", "title"));
      },
      async onResize() {
        this.isShown && (await this.$_computePosition(), this.$emit("resize"));
      },
      async $_computePosition() {
        if (this.isDisposed || this.positioningDisabled) return;
        const e = {
          strategy: this.strategy,
          middleware: []
        };
        (this.distance || this.skidding) && e.middleware.push(yp({
          mainAxis: this.distance,
          crossAxis: this.skidding
        }));
        const t = this.placement.startsWith("auto");
        if (t ? e.middleware.push(mp({
          alignment: this.placement.split("-")[1] ?? ""
        })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(xp({
          padding: this.overflowPadding,
          boundary: this.boundary,
          crossAxis: this.shiftCrossAxis
        })), !t && this.flip && e.middleware.push(vp({
          padding: this.overflowPadding,
          boundary: this.boundary
        }))), e.middleware.push(_p({
          element: this.$_arrowNode,
          padding: this.arrowPadding
        })), this.arrowOverflow && e.middleware.push({
          name: "arrowOverflow",
          fn: ({ placement: i, rects: s, middlewareData: o }) => {
            let r;
            const { centerOffset: l } = o.arrow;
            return i.startsWith("top") || i.startsWith("bottom") ? r = Math.abs(l) > s.reference.width / 2 : r = Math.abs(l) > s.reference.height / 2, {
              data: {
                overflow: r
              }
            };
          }
        }), this.autoMinSize || this.autoSize) {
          const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
          e.middleware.push({
            name: "autoSize",
            fn: ({ rects: s, placement: o, middlewareData: r }) => {
              var l;
              if ((l = r.autoSize) != null && l.skip) return {};
              let a, f;
              return o.startsWith("top") || o.startsWith("bottom") ? a = s.reference.width : f = s.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = f != null ? `${f}px` : null, {
                data: {
                  skip: true
                },
                reset: {
                  rects: true
                }
              };
            }
          });
        }
        (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push($p({
          boundary: this.boundary,
          padding: this.overflowPadding,
          apply: ({ availableWidth: i, availableHeight: s }) => {
            this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null;
          }
        })));
        const n = await Pp(this.$_referenceNode, this.$_popperNode, e);
        Object.assign(this.result, {
          x: n.x,
          y: n.y,
          placement: n.placement,
          strategy: n.strategy,
          arrow: {
            ...n.middlewareData.arrow,
            ...n.middlewareData.arrowOverflow
          }
        });
      },
      $_scheduleShow(e, t = false) {
        if (this.$_updateParentShownChildren(true), this.$_hideInProgress = false, clearTimeout(this.$_scheduleTimer), Ft && this.instantMove && Ft.instantMove && Ft !== this.parentPopper) {
          Ft.$_applyHide(true), this.$_applyShow(true);
          return;
        }
        t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      },
      $_scheduleHide(e, t = false) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = true;
          return;
        }
        this.$_updateParentShownChildren(false), this.$_hideInProgress = true, clearTimeout(this.$_scheduleTimer), this.isShown && (Ft = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      },
      $_computeDelay(e) {
        const t = this.delay;
        return parseInt(t && t[e] || t || 0);
      },
      async $_applyShow(e = false) {
        clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Zi(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
          ...bi(this.$_referenceNode),
          ...bi(this.$_popperNode)
        ], "scroll", () => {
          this.$_computePosition();
        }));
      },
      async $_applyShowEffect() {
        if (this.$_hideInProgress) return;
        if (this.computeTransformOrigin) {
          const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), i = n.parentNode.getBoundingClientRect(), s = t.x + t.width / 2 - (i.left + n.offsetLeft), o = t.y + t.height / 2 - (i.top + n.offsetTop);
          this.result.transformOrigin = `${s}px ${o}px`;
        }
        this.isShown = true, this.$_applyAttrsToTarget({
          "aria-describedby": this.popperId,
          "data-popper-shown": ""
        });
        const e = this.showGroup;
        if (e) {
          let t;
          for (let n = 0; n < Ue.length; n++) t = Ue[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
        }
        Ue.push(this), document.body.classList.add("v-popper--some-open");
        for (const t of zo(this.theme)) Wo(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
        this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await Zi(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
      },
      async $_applyHide(e = false) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = true, this.$_hideInProgress = false;
          return;
        }
        if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
        this.skipTransition = e, Vo(Ue, this), Ue.length === 0 && document.body.classList.remove("v-popper--some-open");
        for (const n of zo(this.theme)) {
          const i = Wo(n);
          Vo(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
        }
        Ft === this && (Ft = null), this.isShown = false, this.$_applyAttrsToTarget({
          "aria-describedby": void 0,
          "data-popper-shown": void 0
        }), clearTimeout(this.$_disposeTimer);
        const t = this.disposeTimeout;
        t !== null && (this.$_disposeTimer = setTimeout(() => {
          this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
        }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await Zi(), this.classes.hideFrom = false, this.classes.hideTo = true;
      },
      $_autoShowHide() {
        this.shown ? this.show() : this.hide();
      },
      $_ensureTeleport() {
        if (this.isDisposed) return;
        let e = this.container;
        if (typeof e == "string" ? e = window.document.querySelector(e) : e === false && (e = this.$_targetNodes[0].parentNode), !e) throw new Error("No container for popover: " + this.container);
        e.appendChild(this.$_popperNode), this.isMounted = true;
      },
      $_addEventListeners() {
        const e = (n) => {
          this.isShown && !this.$_hideInProgress || (n.usedByTooltip = true, !this.$_preventShow && this.show({
            event: n
          }));
        };
        this.$_registerTriggerListeners(this.$_targetNodes, jo, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([
          this.$_popperNode
        ], jo, this.popperTriggers, this.popperShowTriggers, e);
        const t = (n) => {
          n.usedByTooltip || this.hide({
            event: n
          });
        };
        this.$_registerTriggerListeners(this.$_targetNodes, qo, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([
          this.$_popperNode
        ], qo, this.popperTriggers, this.popperHideTriggers, t);
      },
      $_registerEventListeners(e, t, n) {
        this.$_events.push({
          targetNodes: e,
          eventType: t,
          handler: n
        }), e.forEach((i) => i.addEventListener(t, n, an ? {
          passive: true
        } : void 0));
      },
      $_registerTriggerListeners(e, t, n, i, s) {
        let o = n;
        i != null && (o = typeof i == "function" ? i(o) : i), o.forEach((r) => {
          const l = t[r];
          l && this.$_registerEventListeners(e, l, s);
        });
      },
      $_removeEventListeners(e) {
        const t = [];
        this.$_events.forEach((n) => {
          const { targetNodes: i, eventType: s, handler: o } = n;
          !e || e === s ? i.forEach((r) => r.removeEventListener(s, o)) : t.push(n);
        }), this.$_events = t;
      },
      $_refreshListeners() {
        this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
      },
      $_handleGlobalClose(e, t = false) {
        this.$_showFrameLocked || (this.hide({
          event: e
        }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = true, setTimeout(() => {
          this.$_preventShow = false;
        }, 300)));
      },
      $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs(e, t) {
        for (const n of this.$_targetNodes) {
          const i = n.getAttribute(e);
          i && (n.removeAttribute(e), n.setAttribute(t, i));
        }
      },
      $_applyAttrsToTarget(e) {
        for (const t of this.$_targetNodes) for (const n in e) {
          const i = e[n];
          i == null ? t.removeAttribute(n) : t.setAttribute(n, i);
        }
      },
      $_updateParentShownChildren(e) {
        let t = this.parentPopper;
        for (; t; ) e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
      },
      $_isAimingPopper() {
        const e = this.$_referenceNode.getBoundingClientRect();
        if (Sn >= e.left && Sn <= e.right && Tn >= e.top && Tn <= e.bottom) {
          const t = this.$_popperNode.getBoundingClientRect(), n = Sn - yt, i = Tn - xt, s = t.left + t.width / 2 - yt + (t.top + t.height / 2) - xt + t.width + t.height, o = yt + n * s, r = xt + i * s;
          return Xn(yt, xt, o, r, t.left, t.top, t.left, t.bottom) || Xn(yt, xt, o, r, t.left, t.top, t.right, t.top) || Xn(yt, xt, o, r, t.right, t.top, t.right, t.bottom) || Xn(yt, xt, o, r, t.left, t.bottom, t.right, t.bottom);
        }
        return false;
      }
    },
    render() {
      return this.$slots.default(this.slotData);
    }
  });
  if (typeof document < "u" && typeof window < "u") {
    if ($l) {
      const e = an ? {
        passive: true,
        capture: true
      } : true;
      document.addEventListener("touchstart", (t) => Ko(t, true), e), document.addEventListener("touchend", (t) => Go(t, true), e);
    } else window.addEventListener("mousedown", (e) => Ko(e, false), true), window.addEventListener("click", (e) => Go(e, false), true);
    window.addEventListener("resize", Op);
  }
  function Ko(e, t) {
    if (Ye.autoHideOnMousedown) Cl(e, t);
    else for (let n = 0; n < Ue.length; n++) {
      const i = Ue[n];
      try {
        i.mouseDownContains = i.popperNode().contains(e.target);
      } catch {
      }
    }
  }
  function Go(e, t) {
    Ye.autoHideOnMousedown || Cl(e, t);
  }
  function Cl(e, t) {
    const n = {};
    for (let i = Ue.length - 1; i >= 0; i--) {
      const s = Ue[i];
      try {
        const o = s.containsGlobalTarget = s.mouseDownContains || s.popperNode().contains(e.target);
        s.pendingHide = false, requestAnimationFrame(() => {
          if (s.pendingHide = false, !n[s.randomId] && Yo(s, o, e)) {
            if (s.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && o) {
              let l = s.parentPopper;
              for (; l; ) n[l.randomId] = true, l = l.parentPopper;
              return;
            }
            let r = s.parentPopper;
            for (; r && Yo(r, r.containsGlobalTarget, e); ) r.$_handleGlobalClose(e, t), r = r.parentPopper;
          }
        });
      } catch {
      }
    }
  }
  function Yo(e, t, n) {
    return n.closeAllPopover || n.closePopover && t || Ep(e, n) && !t;
  }
  function Ep(e, t) {
    if (typeof e.autoHide == "function") {
      const n = e.autoHide(t);
      return e.lastAutoHide = n, n;
    }
    return e.autoHide;
  }
  function Op() {
    for (let e = 0; e < Ue.length; e++) Ue[e].$_computePosition();
  }
  let yt = 0, xt = 0, Sn = 0, Tn = 0;
  typeof window < "u" && window.addEventListener("mousemove", (e) => {
    yt = Sn, xt = Tn, Sn = e.clientX, Tn = e.clientY;
  }, an ? {
    passive: true
  } : void 0);
  function Xn(e, t, n, i, s, o, r, l) {
    const a = ((r - s) * (t - o) - (l - o) * (e - s)) / ((l - o) * (n - e) - (r - s) * (i - t)), f = ((n - e) * (t - o) - (i - t) * (e - s)) / ((l - o) * (n - e) - (r - s) * (i - t));
    return a >= 0 && a <= 1 && f >= 0 && f <= 1;
  }
  const Rp = {
    extends: Tl()
  }, Hi = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, s] of t) n[i] = s;
    return n;
  };
  function Mp(e, t, n, i, s, o) {
    return L(), V("div", {
      ref: "reference",
      class: We([
        "v-popper",
        {
          "v-popper--shown": e.slotData.isShown
        }
      ])
    }, [
      _t(e.$slots, "default", Gl(tl(e.slotData)))
    ], 2);
  }
  const Ip = Hi(Rp, [
    [
      "render",
      Mp
    ]
  ]);
  function kp() {
    var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
    if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    var n = e.indexOf("Trident/");
    if (n > 0) {
      var i = e.indexOf("rv:");
      return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
    }
    var s = e.indexOf("Edge/");
    return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
  }
  let si;
  function bs() {
    bs.init || (bs.init = true, si = kp() !== -1);
  }
  var Bi = {
    name: "ResizeObserver",
    props: {
      emitOnMount: {
        type: Boolean,
        default: false
      },
      ignoreWidth: {
        type: Boolean,
        default: false
      },
      ignoreHeight: {
        type: Boolean,
        default: false
      }
    },
    emits: [
      "notify"
    ],
    mounted() {
      bs(), Ns(() => {
        this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
      });
      const e = document.createElement("object");
      this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", si && this.$el.appendChild(e), e.data = "about:blank", si || this.$el.appendChild(e);
    },
    beforeUnmount() {
      this.removeResizeHandlers();
    },
    methods: {
      compareAndNotify() {
        (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
      },
      emitSize() {
        this.$emit("notify", {
          width: this._w,
          height: this._h
        });
      },
      addResizeHandlers() {
        this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
      },
      removeResizeHandlers() {
        this._resizeObject && this._resizeObject.onload && (!si && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
      }
    }
  };
  const Np = Da();
  ka("data-v-b329ee4c");
  const Dp = {
    class: "resize-observer",
    tabindex: "-1"
  };
  Na();
  const Lp = Np((e, t, n, i, s, o) => (L(), Ne("div", Dp)));
  Bi.render = Lp;
  Bi.__scopeId = "data-v-b329ee4c";
  Bi.__file = "src/components/ResizeObserver.vue";
  const Pl = (e = "theme") => ({
    computed: {
      themeClass() {
        return Ap(this[e]);
      }
    }
  }), Fp = zn({
    name: "VPopperContent",
    components: {
      ResizeObserver: Bi
    },
    mixins: [
      Pl()
    ],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object
    },
    emits: [
      "hide",
      "resize"
    ],
    methods: {
      toPx(e) {
        return e != null && !isNaN(e) ? `${e}px` : null;
      }
    }
  }), Hp = [
    "id",
    "aria-hidden",
    "tabindex",
    "data-popper-placement"
  ], Bp = {
    ref: "inner",
    class: "v-popper__inner"
  }, zp = E("div", {
    class: "v-popper__arrow-outer"
  }, null, -1), jp = E("div", {
    class: "v-popper__arrow-inner"
  }, null, -1), qp = [
    zp,
    jp
  ];
  function Vp(e, t, n, i, s, o) {
    const r = En("ResizeObserver");
    return L(), V("div", {
      id: e.popperId,
      ref: "popover",
      class: We([
        "v-popper__popper",
        [
          e.themeClass,
          e.classes.popperClass,
          {
            "v-popper__popper--shown": e.shown,
            "v-popper__popper--hidden": !e.shown,
            "v-popper__popper--show-from": e.classes.showFrom,
            "v-popper__popper--show-to": e.classes.showTo,
            "v-popper__popper--hide-from": e.classes.hideFrom,
            "v-popper__popper--hide-to": e.classes.hideTo,
            "v-popper__popper--skip-transition": e.skipTransition,
            "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
            "v-popper__popper--no-positioning": !e.result
          }
        ]
      ]),
      style: At(e.result ? {
        position: e.result.strategy,
        transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
      } : void 0),
      "aria-hidden": e.shown ? "false" : "true",
      tabindex: e.autoHide ? 0 : void 0,
      "data-popper-placement": e.result ? e.result.placement : void 0,
      onKeyup: t[2] || (t[2] = ll((l) => e.autoHide && e.$emit("hide"), [
        "esc"
      ]))
    }, [
      E("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
      }),
      E("div", {
        class: "v-popper__wrapper",
        style: At(e.result ? {
          transformOrigin: e.result.transformOrigin
        } : void 0)
      }, [
        E("div", Bp, [
          e.mounted ? (L(), V(ae, {
            key: 0
          }, [
            E("div", null, [
              _t(e.$slots, "default")
            ]),
            e.handleResize ? (L(), Ne(r, {
              key: 0,
              onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
            })) : ot("", true)
          ], 64)) : ot("", true)
        ], 512),
        E("div", {
          ref: "arrow",
          class: "v-popper__arrow-container",
          style: At(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
          } : void 0)
        }, qp, 4)
      ], 4)
    ], 46, Hp);
  }
  const Al = Hi(Fp, [
    [
      "render",
      Vp
    ]
  ]), El = {
    methods: {
      show(...e) {
        return this.$refs.popper.show(...e);
      },
      hide(...e) {
        return this.$refs.popper.hide(...e);
      },
      dispose(...e) {
        return this.$refs.popper.dispose(...e);
      },
      onResize(...e) {
        return this.$refs.popper.onResize(...e);
      }
    }
  };
  let ys = function() {
  };
  typeof window < "u" && (ys = window.Element);
  const Up = zn({
    name: "VPopperWrapper",
    components: {
      Popper: Ip,
      PopperContent: Al
    },
    mixins: [
      El,
      Pl("finalTheme")
    ],
    props: {
      theme: {
        type: String,
        default: null
      },
      referenceNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: false
      },
      showGroup: {
        type: String,
        default: null
      },
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: void 0
      },
      positioningDisabled: {
        type: Boolean,
        default: void 0
      },
      placement: {
        type: String,
        default: void 0
      },
      delay: {
        type: [
          String,
          Number,
          Object
        ],
        default: void 0
      },
      distance: {
        type: [
          Number,
          String
        ],
        default: void 0
      },
      skidding: {
        type: [
          Number,
          String
        ],
        default: void 0
      },
      triggers: {
        type: Array,
        default: void 0
      },
      showTriggers: {
        type: [
          Array,
          Function
        ],
        default: void 0
      },
      hideTriggers: {
        type: [
          Array,
          Function
        ],
        default: void 0
      },
      popperTriggers: {
        type: Array,
        default: void 0
      },
      popperShowTriggers: {
        type: [
          Array,
          Function
        ],
        default: void 0
      },
      popperHideTriggers: {
        type: [
          Array,
          Function
        ],
        default: void 0
      },
      container: {
        type: [
          String,
          Object,
          ys,
          Boolean
        ],
        default: void 0
      },
      boundary: {
        type: [
          String,
          ys
        ],
        default: void 0
      },
      strategy: {
        type: String,
        default: void 0
      },
      autoHide: {
        type: [
          Boolean,
          Function
        ],
        default: void 0
      },
      handleResize: {
        type: Boolean,
        default: void 0
      },
      instantMove: {
        type: Boolean,
        default: void 0
      },
      eagerMount: {
        type: Boolean,
        default: void 0
      },
      popperClass: {
        type: [
          String,
          Array,
          Object
        ],
        default: void 0
      },
      computeTransformOrigin: {
        type: Boolean,
        default: void 0
      },
      autoMinSize: {
        type: Boolean,
        default: void 0
      },
      autoSize: {
        type: [
          Boolean,
          String
        ],
        default: void 0
      },
      autoMaxSize: {
        type: Boolean,
        default: void 0
      },
      autoBoundaryMaxSize: {
        type: Boolean,
        default: void 0
      },
      preventOverflow: {
        type: Boolean,
        default: void 0
      },
      overflowPadding: {
        type: [
          Number,
          String
        ],
        default: void 0
      },
      arrowPadding: {
        type: [
          Number,
          String
        ],
        default: void 0
      },
      arrowOverflow: {
        type: Boolean,
        default: void 0
      },
      flip: {
        type: Boolean,
        default: void 0
      },
      shift: {
        type: Boolean,
        default: void 0
      },
      shiftCrossAxis: {
        type: Boolean,
        default: void 0
      },
      noAutoFocus: {
        type: Boolean,
        default: void 0
      },
      disposeTimeout: {
        type: Number,
        default: void 0
      }
    },
    emits: {
      show: () => true,
      hide: () => true,
      "update:shown": (e) => true,
      "apply-show": () => true,
      "apply-hide": () => true,
      "close-group": () => true,
      "close-directive": () => true,
      "auto-hide": () => true,
      resize: () => true
    },
    computed: {
      finalTheme() {
        return this.theme ?? this.$options.vPopperTheme;
      }
    },
    methods: {
      getTargetNodes() {
        return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
      }
    }
  });
  function Wp(e, t, n, i, s, o) {
    const r = En("PopperContent"), l = En("Popper");
    return L(), Ne(l, js({
      ref: "popper"
    }, e.$props, {
      theme: e.finalTheme,
      "target-nodes": e.getTargetNodes,
      "popper-node": () => e.$refs.popperContent.$el,
      class: [
        e.themeClass
      ],
      onShow: t[0] || (t[0] = () => e.$emit("show")),
      onHide: t[1] || (t[1] = () => e.$emit("hide")),
      "onUpdate:shown": t[2] || (t[2] = (a) => e.$emit("update:shown", a)),
      onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
      onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
      onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
      onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
      onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
      onResize: t[8] || (t[8] = () => e.$emit("resize"))
    }), {
      default: Je(({ popperId: a, isShown: f, shouldMountContent: u, skipTransition: c, autoHide: h, show: _, hide: w, handleResize: v, onResize: g, classes: T, result: b }) => [
        _t(e.$slots, "default", {
          shown: f,
          show: _,
          hide: w
        }),
        me(r, {
          ref: "popperContent",
          "popper-id": a,
          theme: e.finalTheme,
          shown: f,
          mounted: u,
          "skip-transition": c,
          "auto-hide": h,
          "handle-resize": v,
          classes: T,
          result: b,
          onHide: w,
          onResize: g
        }, {
          default: Je(() => [
            _t(e.$slots, "popper", {
              shown: f,
              hide: w
            })
          ]),
          _: 2
        }, 1032, [
          "popper-id",
          "theme",
          "shown",
          "mounted",
          "skip-transition",
          "auto-hide",
          "handle-resize",
          "classes",
          "result",
          "onHide",
          "onResize"
        ])
      ]),
      _: 3
    }, 16, [
      "theme",
      "target-nodes",
      "popper-node",
      "class"
    ]);
  }
  const Ks = Hi(Up, [
    [
      "render",
      Wp
    ]
  ]), Kp = {
    ...Ks,
    name: "VDropdown",
    vPopperTheme: "dropdown"
  }, Gp = {
    ...Ks,
    name: "VMenu",
    vPopperTheme: "menu"
  }, Yp = {
    ...Ks,
    name: "VTooltip",
    vPopperTheme: "tooltip"
  }, Xp = zn({
    name: "VTooltipDirective",
    components: {
      Popper: Tl(),
      PopperContent: Al
    },
    mixins: [
      El
    ],
    inheritAttrs: false,
    props: {
      theme: {
        type: String,
        default: "tooltip"
      },
      html: {
        type: Boolean,
        default: (e) => Dn(e.theme, "html")
      },
      content: {
        type: [
          String,
          Number,
          Function
        ],
        default: null
      },
      loadingContent: {
        type: String,
        default: (e) => Dn(e.theme, "loadingContent")
      },
      targetNodes: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        asyncContent: null
      };
    },
    computed: {
      isContentAsync() {
        return typeof this.content == "function";
      },
      loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent() {
        return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
      }
    },
    watch: {
      content: {
        handler() {
          this.fetchContent(true);
        },
        immediate: true
      },
      async finalContent() {
        await this.$nextTick(), this.$refs.popper.onResize();
      }
    },
    created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent(e) {
        if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
          this.asyncContent = null, this.$_loading = true;
          const t = ++this.$_fetchId, n = this.content(this);
          n.then ? n.then((i) => this.onResult(t, i)) : this.onResult(t, n);
        }
      },
      onResult(e, t) {
        e === this.$_fetchId && (this.$_loading = false, this.asyncContent = t);
      },
      onShow() {
        this.$_isShown = true, this.fetchContent();
      },
      onHide() {
        this.$_isShown = false;
      }
    }
  }), Jp = [
    "innerHTML"
  ], Qp = [
    "textContent"
  ];
  function Zp(e, t, n, i, s, o) {
    const r = En("PopperContent"), l = En("Popper");
    return L(), Ne(l, js({
      ref: "popper"
    }, e.$attrs, {
      theme: e.theme,
      "target-nodes": e.targetNodes,
      "popper-node": () => e.$refs.popperContent.$el,
      onApplyShow: e.onShow,
      onApplyHide: e.onHide
    }), {
      default: Je(({ popperId: a, isShown: f, shouldMountContent: u, skipTransition: c, autoHide: h, hide: _, handleResize: w, onResize: v, classes: g, result: T }) => [
        me(r, {
          ref: "popperContent",
          class: We({
            "v-popper--tooltip-loading": e.loading
          }),
          "popper-id": a,
          theme: e.theme,
          shown: f,
          mounted: u,
          "skip-transition": c,
          "auto-hide": h,
          "handle-resize": w,
          classes: g,
          result: T,
          onHide: _,
          onResize: v
        }, {
          default: Je(() => [
            e.html ? (L(), V("div", {
              key: 0,
              innerHTML: e.finalContent
            }, null, 8, Jp)) : (L(), V("div", {
              key: 1,
              textContent: Oe(e.finalContent)
            }, null, 8, Qp))
          ]),
          _: 2
        }, 1032, [
          "class",
          "popper-id",
          "theme",
          "shown",
          "mounted",
          "skip-transition",
          "auto-hide",
          "handle-resize",
          "classes",
          "result",
          "onHide",
          "onResize"
        ])
      ]),
      _: 1
    }, 16, [
      "theme",
      "target-nodes",
      "popper-node",
      "onApplyShow",
      "onApplyHide"
    ]);
  }
  const eh = Hi(Xp, [
    [
      "render",
      Zp
    ]
  ]), Ol = "v-popper--has-tooltip";
  function th(e, t) {
    let n = e.placement;
    if (!n && t) for (const i of Sl) t[i] && (n = i);
    return n || (n = Dn(e.theme || "tooltip", "placement")), n;
  }
  function Rl(e, t, n) {
    let i;
    const s = typeof t;
    return s === "string" ? i = {
      content: t
    } : t && s === "object" ? i = t : i = {
      content: false
    }, i.placement = th(i, n), i.targetNodes = () => [
      e
    ], i.referenceNode = () => e, i;
  }
  let ts, Ln, nh = 0;
  function ih() {
    if (ts) return;
    Ln = he([]), ts = al({
      name: "VTooltipDirectiveApp",
      setup() {
        return {
          directives: Ln
        };
      },
      render() {
        return this.directives.map((t) => Gc(eh, {
          ...t.options,
          shown: t.shown || t.options.shown,
          key: t.id
        }));
      },
      devtools: {
        hide: true
      }
    });
    const e = document.createElement("div");
    document.body.appendChild(e), ts.mount(e);
  }
  function sh(e, t, n) {
    ih();
    const i = he(Rl(e, t, n)), s = he(false), o = {
      id: nh++,
      options: i,
      shown: s
    };
    return Ln.value.push(o), e.classList && e.classList.add(Ol), e.$_popper = {
      options: i,
      item: o,
      show() {
        s.value = true;
      },
      hide() {
        s.value = false;
      }
    };
  }
  function Ml(e) {
    if (e.$_popper) {
      const t = Ln.value.indexOf(e.$_popper.item);
      t !== -1 && Ln.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
    }
    e.classList && e.classList.remove(Ol);
  }
  function Xo(e, { value: t, modifiers: n }) {
    const i = Rl(e, t, n);
    if (!i.content || Dn(i.theme || "tooltip", "disabled")) Ml(e);
    else {
      let s;
      e.$_popper ? (s = e.$_popper, s.options.value = i) : s = sh(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? s.show() : s.hide());
    }
  }
  const oh = {
    beforeMount: Xo,
    updated: Xo,
    beforeUnmount(e) {
      Ml(e);
    }
  };
  function Jo(e) {
    e.addEventListener("mousedown", yi), e.addEventListener("click", yi), e.addEventListener("touchstart", Il, an ? {
      passive: true
    } : false);
  }
  function Qo(e) {
    e.removeEventListener("mousedown", yi), e.removeEventListener("click", yi), e.removeEventListener("touchstart", Il), e.removeEventListener("touchend", kl), e.removeEventListener("touchcancel", Nl);
  }
  function yi(e) {
    const t = e.currentTarget;
    e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
  }
  function Il(e) {
    if (e.changedTouches.length === 1) {
      const t = e.currentTarget;
      t.$_vclosepopover_touch = true;
      const n = e.changedTouches[0];
      t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", kl), t.addEventListener("touchcancel", Nl);
    }
  }
  function kl(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = false, e.changedTouches.length === 1) {
      const n = e.changedTouches[0], i = t.$_vclosepopover_touchPoint;
      e.closePopover = Math.abs(n.screenY - i.screenY) < 20 && Math.abs(n.screenX - i.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
    }
  }
  function Nl(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = false;
  }
  const rh = {
    beforeMount(e, { value: t, modifiers: n }) {
      e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Jo(e);
    },
    updated(e, { value: t, oldValue: n, modifiers: i }) {
      e.$_closePopoverModifiers = i, t !== n && (typeof t > "u" || t ? Jo(e) : Qo(e));
    },
    beforeUnmount(e) {
      Qo(e);
    }
  };
  function lh(e, t = {}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = true, xl(Ye, t), e.directive("tooltip", oh), e.directive("close-popper", rh), e.component("VTooltip", Yp), e.component("VDropdown", Kp), e.component("VMenu", Gp));
  }
  const ah = {
    version: "5.2.2",
    install: lh,
    options: Ye
  }, ch = {
    viz: "viz-lite.js"
  };
  Object.entries(ch).forEach((e) => {
    let t = document.head.querySelector(`[src="${e[1]}"`);
    t || (t = document.createElement("script"), t.setAttribute("id", e[0]), t.setAttribute("src", e[1]), t.setAttribute("type", "text/javascript"), document.head.appendChild(t));
  });
  al(ip).use(ah).mount("#app");
})();

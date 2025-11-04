var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
        new MutationObserver((o) => {
          for (const s of o) if (s.type === "childList") for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(o) {
          const s = {};
          return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function i(o) {
          if (o.ep) return;
          o.ep = true;
          const s = n(o);
          fetch(o.href, s);
        }
      })();
      function _o(e) {
        const t = /* @__PURE__ */ Object.create(null);
        for (const n of e.split(",")) t[n] = 1;
        return (n) => n in t;
      }
      const re = {}, Yt = [], rt = () => {
      }, Fl = () => false, bi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mo = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, wo = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }, zl = Object.prototype.hasOwnProperty, te = (e, t) => zl.call(e, t), z = Array.isArray, Xt = (e) => Ln(e) === "[object Map]", yi = (e) => Ln(e) === "[object Set]", Wo = (e) => Ln(e) === "[object Date]", V = (e) => typeof e == "function", _e = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", Zs = (e) => (le(e) || V(e)) && V(e.then) && V(e.catch), er = Object.prototype.toString, Ln = (e) => er.call(e), Bl = (e) => Ln(e).slice(8, -1), tr = (e) => Ln(e) === "[object Object]", vo = (e) => _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = _o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), xi = (e) => {
        const t = /* @__PURE__ */ Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      }, jl = /-(\w)/g, Ve = xi((e) => e.replace(jl, (t, n) => n ? n.toUpperCase() : "")), ql = /\B([A-Z])/g, Ht = xi((e) => e.replace(ql, "-$1").toLowerCase()), $i = xi((e) => e.charAt(0).toUpperCase() + e.slice(1)), zi = xi((e) => e ? `on${$i(e)}` : ""), Ot = (e, t) => !Object.is(e, t), Zn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
      }, nr = (e, t, n, i = false) => {
        Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: i,
          value: n
        });
      }, ri = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };
      let Ko;
      const Si = () => Ko || (Ko = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
      function vt(e) {
        if (z(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const i = e[n], o = _e(i) ? Kl(i) : vt(i);
            if (o) for (const s in o) t[s] = o[s];
          }
          return t;
        } else if (_e(e) || le(e)) return e;
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
        else if (z(e)) for (let n = 0; n < e.length; n++) {
          const i = We(e[n]);
          i && (t += i + " ");
        }
        else if (le(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim();
      }
      function ir(e) {
        if (!e) return null;
        let { class: t, style: n } = e;
        return t && !_e(t) && (e.class = We(t)), n && (e.style = vt(n)), e;
      }
      const Gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yl = _o(Gl);
      function or(e) {
        return !!e || e === "";
      }
      function Xl(e, t) {
        if (e.length !== t.length) return false;
        let n = true;
        for (let i = 0; n && i < e.length; i++) n = nn(e[i], t[i]);
        return n;
      }
      function nn(e, t) {
        if (e === t) return true;
        let n = Wo(e), i = Wo(t);
        if (n || i) return n && i ? e.getTime() === t.getTime() : false;
        if (n = Je(e), i = Je(t), n || i) return e === t;
        if (n = z(e), i = z(t), n || i) return n && i ? Xl(e, t) : false;
        if (n = le(e), i = le(t), n || i) {
          if (!n || !i) return false;
          const o = Object.keys(e).length, s = Object.keys(t).length;
          if (o !== s) return false;
          for (const r in e) {
            const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
            if (l && !a || !l && a || !nn(e[r], t[r])) return false;
          }
        }
        return String(e) === String(t);
      }
      function Jl(e, t) {
        return e.findIndex((n) => nn(n, t));
      }
      const sr = (e) => !!(e && e.__v_isRef === true), pe = (e) => _e(e) ? e : e == null ? "" : z(e) || le(e) && (e.toString === er || !V(e.toString)) ? sr(e) ? pe(e.value) : JSON.stringify(e, rr, 2) : String(e), rr = (e, t) => sr(t) ? rr(e, t.value) : Xt(t) ? {
        [`Map(${t.size})`]: [
          ...t.entries()
        ].reduce((n, [i, o], s) => (n[Bi(i, s) + " =>"] = o, n), {})
      } : yi(t) ? {
        [`Set(${t.size})`]: [
          ...t.values()
        ].map((n) => Bi(n))
      } : Je(t) ? Bi(t) : le(t) && !z(t) && !tr(t) ? String(t) : t, Bi = (e, t = "") => {
        var n;
        return Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
      };
      let Ie;
      class Ql {
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
              const o = this.parent.scopes.pop();
              o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
            }
            this.parent = void 0;
          }
        }
      }
      function Zl() {
        return Ie;
      }
      let fe;
      const ji = /* @__PURE__ */ new WeakSet();
      class lr {
        constructor(t) {
          this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
        }
        pause() {
          this.flags |= 64;
        }
        resume() {
          this.flags & 64 && (this.flags &= -65, ji.has(this) && (ji.delete(this), this.trigger()));
        }
        notify() {
          this.flags & 2 && !(this.flags & 32) || this.flags & 8 || cr(this);
        }
        run() {
          if (!(this.flags & 1)) return this.fn();
          this.flags |= 2, Go(this), ur(this);
          const t = fe, n = Ke;
          fe = this, Ke = true;
          try {
            return this.fn();
          } finally {
            fr(this), fe = t, Ke = n, this.flags &= -3;
          }
        }
        stop() {
          if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) xo(t);
            this.deps = this.depsTail = void 0, Go(this), this.onStop && this.onStop(), this.flags &= -2;
          }
        }
        trigger() {
          this.flags & 64 ? ji.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
        }
        runIfDirty() {
          eo(this) && this.run();
        }
        get dirty() {
          return eo(this);
        }
      }
      let ar = 0, gn, _n;
      function cr(e, t = false) {
        if (e.flags |= 8, t) {
          e.next = _n, _n = e;
          return;
        }
        e.next = gn, gn = e;
      }
      function bo() {
        ar++;
      }
      function yo() {
        if (--ar > 0) return;
        if (_n) {
          let t = _n;
          for (_n = void 0; t; ) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n;
          }
        }
        let e;
        for (; gn; ) {
          let t = gn;
          for (gn = void 0; t; ) {
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
      function ur(e) {
        for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
      }
      function fr(e) {
        let t, n = e.depsTail, i = n;
        for (; i; ) {
          const o = i.prevDep;
          i.version === -1 ? (i === n && (n = o), xo(i), ea(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = o;
        }
        e.deps = t, e.depsTail = n;
      }
      function eo(e) {
        for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (dr(t.dep.computed) || t.dep.version !== t.version)) return true;
        return !!e._dirty;
      }
      function dr(e) {
        if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $n) || (e.globalVersion = $n, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !eo(e)))) return;
        e.flags |= 2;
        const t = e.dep, n = fe, i = Ke;
        fe = e, Ke = true;
        try {
          ur(e);
          const o = e.fn(e._value);
          (t.version === 0 || Ot(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
        } catch (o) {
          throw t.version++, o;
        } finally {
          fe = n, Ke = i, fr(e), e.flags &= -3;
        }
      }
      function xo(e, t = false) {
        const { dep: n, prevSub: i, nextSub: o } = e;
        if (i && (i.nextSub = o, e.prevSub = void 0), o && (o.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
          n.computed.flags &= -5;
          for (let s = n.computed.deps; s; s = s.nextDep) xo(s, true);
        }
        !t && !--n.sc && n.map && n.map.delete(n.key);
      }
      function ea(e) {
        const { prevDep: t, nextDep: n } = e;
        t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
      }
      let Ke = true;
      const pr = [];
      function yt() {
        pr.push(Ke), Ke = false;
      }
      function xt() {
        const e = pr.pop();
        Ke = e === void 0 ? true : e;
      }
      function Go(e) {
        const { cleanup: t } = e;
        if (e.cleanup = void 0, t) {
          const n = fe;
          fe = void 0;
          try {
            t();
          } finally {
            fe = n;
          }
        }
      }
      let $n = 0;
      class ta {
        constructor(t, n) {
          this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
        }
      }
      class $o {
        constructor(t) {
          this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
        }
        track(t) {
          if (!fe || !Ke || fe === this.computed) return;
          let n = this.activeLink;
          if (n === void 0 || n.sub !== fe) n = this.activeLink = new ta(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, hr(n);
          else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const i = n.nextDep;
            i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = i);
          }
          return n;
        }
        trigger(t) {
          this.version++, $n++, this.notify(t);
        }
        notify(t) {
          bo();
          try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
          } finally {
            yo();
          }
        }
      }
      function hr(e) {
        if (e.dep.sc++, e.sub.flags & 4) {
          const t = e.dep.computed;
          if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let i = t.deps; i; i = i.nextDep) hr(i);
          }
          const n = e.dep.subs;
          n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
        }
      }
      const li = /* @__PURE__ */ new WeakMap(), qt = Symbol(""), to = Symbol(""), Sn = Symbol("");
      function Te(e, t, n) {
        if (Ke && fe) {
          let i = li.get(e);
          i || li.set(e, i = /* @__PURE__ */ new Map());
          let o = i.get(n);
          o || (i.set(n, o = new $o()), o.map = i, o.key = n), o.track();
        }
      }
      function ht(e, t, n, i, o, s) {
        const r = li.get(e);
        if (!r) {
          $n++;
          return;
        }
        const l = (a) => {
          a && a.trigger();
        };
        if (bo(), t === "clear") r.forEach(l);
        else {
          const a = z(e), u = a && vo(n);
          if (a && n === "length") {
            const c = Number(i);
            r.forEach((d, h) => {
              (h === "length" || h === Sn || !Je(h) && h >= c) && l(d);
            });
          } else switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Sn)), t) {
            case "add":
              a ? u && l(r.get("length")) : (l(r.get(qt)), Xt(e) && l(r.get(to)));
              break;
            case "delete":
              a || (l(r.get(qt)), Xt(e) && l(r.get(to)));
              break;
            case "set":
              Xt(e) && l(r.get(qt));
              break;
          }
        }
        yo();
      }
      function na(e, t) {
        const n = li.get(e);
        return n && n.get(t);
      }
      function Wt(e) {
        const t = ee(e);
        return t === e ? t : (Te(t, "iterate", Sn), qe(e) ? t : t.map(xe));
      }
      function Ti(e) {
        return Te(e = ee(e), "iterate", Sn), e;
      }
      const ia = {
        __proto__: null,
        [Symbol.iterator]() {
          return qi(this, Symbol.iterator, xe);
        },
        concat(...e) {
          return Wt(this).concat(...e.map((t) => z(t) ? Wt(t) : t));
        },
        entries() {
          return qi(this, "entries", (e) => (e[1] = xe(e[1]), e));
        },
        every(e, t) {
          return dt(this, "every", e, t, void 0, arguments);
        },
        filter(e, t) {
          return dt(this, "filter", e, t, (n) => n.map(xe), arguments);
        },
        find(e, t) {
          return dt(this, "find", e, t, xe, arguments);
        },
        findIndex(e, t) {
          return dt(this, "findIndex", e, t, void 0, arguments);
        },
        findLast(e, t) {
          return dt(this, "findLast", e, t, xe, arguments);
        },
        findLastIndex(e, t) {
          return dt(this, "findLastIndex", e, t, void 0, arguments);
        },
        forEach(e, t) {
          return dt(this, "forEach", e, t, void 0, arguments);
        },
        includes(...e) {
          return Vi(this, "includes", e);
        },
        indexOf(...e) {
          return Vi(this, "indexOf", e);
        },
        join(e) {
          return Wt(this).join(e);
        },
        lastIndexOf(...e) {
          return Vi(this, "lastIndexOf", e);
        },
        map(e, t) {
          return dt(this, "map", e, t, void 0, arguments);
        },
        pop() {
          return fn(this, "pop");
        },
        push(...e) {
          return fn(this, "push", e);
        },
        reduce(e, ...t) {
          return Yo(this, "reduce", e, t);
        },
        reduceRight(e, ...t) {
          return Yo(this, "reduceRight", e, t);
        },
        shift() {
          return fn(this, "shift");
        },
        some(e, t) {
          return dt(this, "some", e, t, void 0, arguments);
        },
        splice(...e) {
          return fn(this, "splice", e);
        },
        toReversed() {
          return Wt(this).toReversed();
        },
        toSorted(e) {
          return Wt(this).toSorted(e);
        },
        toSpliced(...e) {
          return Wt(this).toSpliced(...e);
        },
        unshift(...e) {
          return fn(this, "unshift", e);
        },
        values() {
          return qi(this, "values", xe);
        }
      };
      function qi(e, t, n) {
        const i = Ti(e), o = i[t]();
        return i !== e && !qe(e) && (o._next = o.next, o.next = () => {
          const s = o._next();
          return s.value && (s.value = n(s.value)), s;
        }), o;
      }
      const oa = Array.prototype;
      function dt(e, t, n, i, o, s) {
        const r = Ti(e), l = r !== e && !qe(e), a = r[t];
        if (a !== oa[t]) {
          const d = a.apply(e, s);
          return l ? xe(d) : d;
        }
        let u = n;
        r !== e && (l ? u = function(d, h) {
          return n.call(this, xe(d), h, e);
        } : n.length > 2 && (u = function(d, h) {
          return n.call(this, d, h, e);
        }));
        const c = a.call(r, u, i);
        return l && o ? o(c) : c;
      }
      function Yo(e, t, n, i) {
        const o = Ti(e);
        let s = n;
        return o !== e && (qe(e) ? n.length > 3 && (s = function(r, l, a) {
          return n.call(this, r, l, a, e);
        }) : s = function(r, l, a) {
          return n.call(this, r, xe(l), a, e);
        }), o[t](s, ...i);
      }
      function Vi(e, t, n) {
        const i = ee(e);
        Te(i, "iterate", Sn);
        const o = i[t](...n);
        return (o === -1 || o === false) && Co(n[0]) ? (n[0] = ee(n[0]), i[t](...n)) : o;
      }
      function fn(e, t, n = []) {
        yt(), bo();
        const i = ee(e)[t].apply(e, n);
        return yo(), xt(), i;
      }
      const sa = _o("__proto__,__v_isRef,__isVue"), gr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je));
      function ra(e) {
        Je(e) || (e = String(e));
        const t = ee(this);
        return Te(t, "has", e), t.hasOwnProperty(e);
      }
      class _r {
        constructor(t = false, n = false) {
          this._isReadonly = t, this._isShallow = n;
        }
        get(t, n, i) {
          if (n === "__v_skip") return t.__v_skip;
          const o = this._isReadonly, s = this._isShallow;
          if (n === "__v_isReactive") return !o;
          if (n === "__v_isReadonly") return o;
          if (n === "__v_isShallow") return s;
          if (n === "__v_raw") return i === (o ? s ? _a : br : s ? vr : wr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
          const r = z(t);
          if (!o) {
            let a;
            if (r && (a = ia[n])) return a;
            if (n === "hasOwnProperty") return ra;
          }
          const l = Reflect.get(t, n, be(t) ? t : i);
          return (Je(n) ? gr.has(n) : sa(n)) || (o || Te(t, "get", n), s) ? l : be(l) ? r && vo(n) ? l : l.value : le(l) ? o ? yr(l) : kn(l) : l;
        }
      }
      class mr extends _r {
        constructor(t = false) {
          super(false, t);
        }
        set(t, n, i, o) {
          let s = t[n];
          if (!this._isShallow) {
            const a = It(s);
            if (!qe(i) && !It(i) && (s = ee(s), i = ee(i)), !z(t) && be(s) && !be(i)) return a ? false : (s.value = i, true);
          }
          const r = z(t) && vo(n) ? Number(n) < t.length : te(t, n), l = Reflect.set(t, n, i, be(t) ? t : o);
          return t === ee(o) && (r ? Ot(i, s) && ht(t, "set", n, i) : ht(t, "add", n, i)), l;
        }
        deleteProperty(t, n) {
          const i = te(t, n);
          t[n];
          const o = Reflect.deleteProperty(t, n);
          return o && i && ht(t, "delete", n, void 0), o;
        }
        has(t, n) {
          const i = Reflect.has(t, n);
          return (!Je(n) || !gr.has(n)) && Te(t, "has", n), i;
        }
        ownKeys(t) {
          return Te(t, "iterate", z(t) ? "length" : qt), Reflect.ownKeys(t);
        }
      }
      class la extends _r {
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
      const aa = new mr(), ca = new la(), ua = new mr(true);
      const no = (e) => e, Wn = (e) => Reflect.getPrototypeOf(e);
      function fa(e, t, n) {
        return function(...i) {
          const o = this.__v_raw, s = ee(o), r = Xt(s), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...i), c = n ? no : t ? ai : xe;
          return !t && Te(s, "iterate", a ? to : qt), {
            next() {
              const { value: d, done: h } = u.next();
              return h ? {
                value: d,
                done: h
              } : {
                value: l ? [
                  c(d[0]),
                  c(d[1])
                ] : c(d),
                done: h
              };
            },
            [Symbol.iterator]() {
              return this;
            }
          };
        };
      }
      function Kn(e) {
        return function(...t) {
          return e === "delete" ? false : e === "clear" ? void 0 : this;
        };
      }
      function da(e, t) {
        const n = {
          get(o) {
            const s = this.__v_raw, r = ee(s), l = ee(o);
            e || (Ot(o, l) && Te(r, "get", o), Te(r, "get", l));
            const { has: a } = Wn(r), u = t ? no : e ? ai : xe;
            if (a.call(r, o)) return u(s.get(o));
            if (a.call(r, l)) return u(s.get(l));
            s !== r && s.get(o);
          },
          get size() {
            const o = this.__v_raw;
            return !e && Te(ee(o), "iterate", qt), Reflect.get(o, "size", o);
          },
          has(o) {
            const s = this.__v_raw, r = ee(s), l = ee(o);
            return e || (Ot(o, l) && Te(r, "has", o), Te(r, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
          },
          forEach(o, s) {
            const r = this, l = r.__v_raw, a = ee(l), u = t ? no : e ? ai : xe;
            return !e && Te(a, "iterate", qt), l.forEach((c, d) => o.call(s, u(c), u(d), r));
          }
        };
        return Pe(n, e ? {
          add: Kn("add"),
          set: Kn("set"),
          delete: Kn("delete"),
          clear: Kn("clear")
        } : {
          add(o) {
            !t && !qe(o) && !It(o) && (o = ee(o));
            const s = ee(this);
            return Wn(s).has.call(s, o) || (s.add(o), ht(s, "add", o, o)), this;
          },
          set(o, s) {
            !t && !qe(s) && !It(s) && (s = ee(s));
            const r = ee(this), { has: l, get: a } = Wn(r);
            let u = l.call(r, o);
            u || (o = ee(o), u = l.call(r, o));
            const c = a.call(r, o);
            return r.set(o, s), u ? Ot(s, c) && ht(r, "set", o, s) : ht(r, "add", o, s), this;
          },
          delete(o) {
            const s = ee(this), { has: r, get: l } = Wn(s);
            let a = r.call(s, o);
            a || (o = ee(o), a = r.call(s, o)), l && l.call(s, o);
            const u = s.delete(o);
            return a && ht(s, "delete", o, void 0), u;
          },
          clear() {
            const o = ee(this), s = o.size !== 0, r = o.clear();
            return s && ht(o, "clear", void 0, void 0), r;
          }
        }), [
          "keys",
          "values",
          "entries",
          Symbol.iterator
        ].forEach((o) => {
          n[o] = fa(o, e, t);
        }), n;
      }
      function So(e, t) {
        const n = da(e, t);
        return (i, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? i : Reflect.get(te(n, o) && o in i ? n : i, o, s);
      }
      const pa = {
        get: So(false, false)
      }, ha = {
        get: So(false, true)
      }, ga = {
        get: So(true, false)
      };
      const wr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap();
      function ma(e) {
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
        return e.__v_skip || !Object.isExtensible(e) ? 0 : ma(Bl(e));
      }
      function kn(e) {
        return It(e) ? e : To(e, false, aa, pa, wr);
      }
      function va(e) {
        return To(e, false, ua, ha, vr);
      }
      function yr(e) {
        return To(e, true, ca, ga, br);
      }
      function To(e, t, n, i, o) {
        if (!le(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const s = wa(e);
        if (s === 0) return e;
        const r = o.get(e);
        if (r) return r;
        const l = new Proxy(e, s === 2 ? i : n);
        return o.set(e, l), l;
      }
      function Jt(e) {
        return It(e) ? Jt(e.__v_raw) : !!(e && e.__v_isReactive);
      }
      function It(e) {
        return !!(e && e.__v_isReadonly);
      }
      function qe(e) {
        return !!(e && e.__v_isShallow);
      }
      function Co(e) {
        return e ? !!e.__v_raw : false;
      }
      function ee(e) {
        const t = e && e.__v_raw;
        return t ? ee(t) : e;
      }
      function ba(e) {
        return !te(e, "__v_skip") && Object.isExtensible(e) && nr(e, "__v_skip", true), e;
      }
      const xe = (e) => le(e) ? kn(e) : e, ai = (e) => le(e) ? yr(e) : e;
      function be(e) {
        return e ? e.__v_isRef === true : false;
      }
      function se(e) {
        return $r(e, false);
      }
      function xr(e) {
        return $r(e, true);
      }
      function $r(e, t) {
        return be(e) ? e : new ya(e, t);
      }
      class ya {
        constructor(t, n) {
          this.dep = new $o(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ee(t), this._value = n ? t : xe(t), this.__v_isShallow = n;
        }
        get value() {
          return this.dep.track(), this._value;
        }
        set value(t) {
          const n = this._rawValue, i = this.__v_isShallow || qe(t) || It(t);
          t = i ? t : ee(t), Ot(t, n) && (this._rawValue = t, this._value = i ? t : xe(t), this.dep.trigger());
        }
      }
      function xa(e) {
        e.dep && e.dep.trigger();
      }
      function oe(e) {
        return be(e) ? e.value : e;
      }
      const $a = {
        get: (e, t, n) => t === "__v_raw" ? e : oe(Reflect.get(e, t, n)),
        set: (e, t, n, i) => {
          const o = e[t];
          return be(o) && !be(n) ? (o.value = n, true) : Reflect.set(e, t, n, i);
        }
      };
      function Sr(e) {
        return Jt(e) ? e : new Proxy(e, $a);
      }
      function Tr(e) {
        const t = z(e) ? new Array(e.length) : {};
        for (const n in e) t[n] = Cr(e, n);
        return t;
      }
      class Sa {
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
          return na(ee(this._object), this._key);
        }
      }
      class Ta {
        constructor(t) {
          this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
        }
        get value() {
          return this._value = this._getter();
        }
      }
      function Xo(e, t, n) {
        return be(e) ? e : V(e) ? new Ta(e) : le(e) && arguments.length > 1 ? Cr(e, t, n) : se(e);
      }
      function Cr(e, t, n) {
        const i = e[t];
        return be(i) ? i : new Sa(e, t, n);
      }
      class Ca {
        constructor(t, n, i) {
          this.fn = t, this.setter = n, this._value = void 0, this.dep = new $o(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $n - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
        }
        notify() {
          if (this.flags |= 16, !(this.flags & 8) && fe !== this) return cr(this, true), true;
        }
        get value() {
          const t = this.dep.track();
          return dr(this), t && (t.version = this.dep.version), this._value;
        }
        set value(t) {
          this.setter && this.setter(t);
        }
      }
      function Pa(e, t, n = false) {
        let i, o;
        return V(e) ? i = e : (i = e.get, o = e.set), new Ca(i, o, n);
      }
      const Gn = {}, ci = /* @__PURE__ */ new WeakMap();
      let Bt;
      function Aa(e, t = false, n = Bt) {
        if (n) {
          let i = ci.get(n);
          i || ci.set(n, i = []), i.push(e);
        }
      }
      function Ea(e, t, n = re) {
        const { immediate: i, deep: o, once: s, scheduler: r, augmentJob: l, call: a } = n, u = ($) => o ? $ : qe($) || o === false || o === 0 ? gt($, 1) : gt($);
        let c, d, h, g, _ = false, v = false;
        if (be(e) ? (d = () => e.value, _ = qe(e)) : Jt(e) ? (d = () => u(e), _ = true) : z(e) ? (v = true, _ = e.some(($) => Jt($) || qe($)), d = () => e.map(($) => {
          if (be($)) return $.value;
          if (Jt($)) return u($);
          if (V($)) return a ? a($, 2) : $();
        })) : V(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
          if (h) {
            yt();
            try {
              h();
            } finally {
              xt();
            }
          }
          const $ = Bt;
          Bt = c;
          try {
            return a ? a(e, 3, [
              g
            ]) : e(g);
          } finally {
            Bt = $;
          }
        } : d = rt, t && o) {
          const $ = d, L = o === true ? 1 / 0 : o;
          d = () => gt($(), L);
        }
        const N = Zl(), E = () => {
          c.stop(), N && N.active && wo(N.effects, c);
        };
        if (s && t) {
          const $ = t;
          t = (...L) => {
            $(...L), E();
          };
        }
        let I = v ? new Array(e.length).fill(Gn) : Gn;
        const P = ($) => {
          if (!(!(c.flags & 1) || !c.dirty && !$)) if (t) {
            const L = c.run();
            if (o || _ || (v ? L.some((H, ne) => Ot(H, I[ne])) : Ot(L, I))) {
              h && h();
              const H = Bt;
              Bt = c;
              try {
                const ne = [
                  L,
                  I === Gn ? void 0 : v && I[0] === Gn ? [] : I,
                  g
                ];
                I = L, a ? a(t, 3, ne) : t(...ne);
              } finally {
                Bt = H;
              }
            }
          } else c.run();
        };
        return l && l(P), c = new lr(d), c.scheduler = r ? () => r(P, false) : P, g = ($) => Aa($, false, c), h = c.onStop = () => {
          const $ = ci.get(c);
          if ($) {
            if (a) a($, 4);
            else for (const L of $) L();
            ci.delete(c);
          }
        }, t ? i ? P(true) : I = c.run() : r ? r(P.bind(null, true), true) : c.run(), E.pause = c.pause.bind(c), E.resume = c.resume.bind(c), E.stop = E, E;
      }
      function gt(e, t = 1 / 0, n) {
        if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
        if (n.add(e), t--, be(e)) gt(e.value, t, n);
        else if (z(e)) for (let i = 0; i < e.length; i++) gt(e[i], t, n);
        else if (yi(e) || Xt(e)) e.forEach((i) => {
          gt(i, t, n);
        });
        else if (tr(e)) {
          for (const i in e) gt(e[i], t, n);
          for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && gt(e[i], t, n);
        }
        return e;
      }
      function Fn(e, t, n, i) {
        try {
          return i ? e(...i) : e();
        } catch (o) {
          Ci(o, t, n);
        }
      }
      function ut(e, t, n, i) {
        if (V(e)) {
          const o = Fn(e, t, n, i);
          return o && Zs(o) && o.catch((s) => {
            Ci(s, t, n);
          }), o;
        }
        if (z(e)) {
          const o = [];
          for (let s = 0; s < e.length; s++) o.push(ut(e[s], t, n, i));
          return o;
        }
      }
      function Ci(e, t, n, i = true) {
        const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || re;
        if (t) {
          let l = t.parent;
          const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
          for (; l; ) {
            const c = l.ec;
            if (c) {
              for (let d = 0; d < c.length; d++) if (c[d](e, a, u) === false) return;
            }
            l = l.parent;
          }
          if (s) {
            yt(), Fn(s, null, 10, [
              e,
              a,
              u
            ]), xt();
            return;
          }
        }
        Oa(e, n, o, i, r);
      }
      function Oa(e, t, n, i = true, o = false) {
        if (o) throw e;
        console.error(e);
      }
      const Oe = [];
      let ot = -1;
      const Qt = [];
      let Pt = null, Gt = 0;
      const Pr = Promise.resolve();
      let ui = null;
      function Po(e) {
        const t = ui || Pr;
        return e ? t.then(this ? e.bind(this) : e) : t;
      }
      function Ra(e) {
        let t = ot + 1, n = Oe.length;
        for (; t < n; ) {
          const i = t + n >>> 1, o = Oe[i], s = Tn(o);
          s < e || s === e && o.flags & 2 ? t = i + 1 : n = i;
        }
        return t;
      }
      function Ao(e) {
        if (!(e.flags & 1)) {
          const t = Tn(e), n = Oe[Oe.length - 1];
          !n || !(e.flags & 2) && t >= Tn(n) ? Oe.push(e) : Oe.splice(Ra(t), 0, e), e.flags |= 1, Ar();
        }
      }
      function Ar() {
        ui || (ui = Pr.then(Or));
      }
      function Ma(e) {
        z(e) ? Qt.push(...e) : Pt && e.id === -1 ? Pt.splice(Gt + 1, 0, e) : e.flags & 1 || (Qt.push(e), e.flags |= 1), Ar();
      }
      function Jo(e, t, n = ot + 1) {
        for (; n < Oe.length; n++) {
          const i = Oe[n];
          if (i && i.flags & 2) {
            if (e && i.id !== e.uid) continue;
            Oe.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
          }
        }
      }
      function Er(e) {
        if (Qt.length) {
          const t = [
            ...new Set(Qt)
          ].sort((n, i) => Tn(n) - Tn(i));
          if (Qt.length = 0, Pt) {
            Pt.push(...t);
            return;
          }
          for (Pt = t, Gt = 0; Gt < Pt.length; Gt++) {
            const n = Pt[Gt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
          }
          Pt = null, Gt = 0;
        }
      }
      const Tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
      function Or(e) {
        try {
          for (ot = 0; ot < Oe.length; ot++) {
            const t = Oe[ot];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Fn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
          }
        } finally {
          for (; ot < Oe.length; ot++) {
            const t = Oe[ot];
            t && (t.flags &= -2);
          }
          ot = -1, Oe.length = 0, Er(), ui = null, (Oe.length || Qt.length) && Or();
        }
      }
      let $e = null, Pi = null;
      function fi(e) {
        const t = $e;
        return $e = e, Pi = e && e.type.__scopeId || null, t;
      }
      function Ia(e) {
        Pi = e;
      }
      function Na() {
        Pi = null;
      }
      const Da = (e) => ge;
      function ge(e, t = $e, n) {
        if (!t || e._n) return e;
        const i = (...o) => {
          i._d && ls(-1);
          const s = fi(t);
          let r;
          try {
            r = e(...o);
          } finally {
            fi(s), i._d && ls(1);
          }
          return r;
        };
        return i._n = true, i._c = true, i._d = true, i;
      }
      function G(e, t) {
        if ($e === null) return e;
        const n = Ri($e), i = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
          let [s, r, l, a = re] = t[o];
          s && (V(s) && (s = {
            mounted: s,
            updated: s
          }), s.deep && gt(r), i.push({
            dir: s,
            instance: n,
            value: r,
            oldValue: void 0,
            arg: l,
            modifiers: a
          }));
        }
        return e;
      }
      function kt(e, t, n, i) {
        const o = e.dirs, s = t && t.dirs;
        for (let r = 0; r < o.length; r++) {
          const l = o[r];
          s && (l.oldValue = s[r].value);
          let a = l.dir[i];
          a && (yt(), ut(a, n, 8, [
            e.el,
            l,
            e,
            t
          ]), xt());
        }
      }
      const Ha = Symbol("_vte"), La = (e) => e.__isTeleport;
      function Eo(e, t) {
        e.shapeFlag & 6 && e.component ? (e.transition = t, Eo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
      }
      function ln(e, t) {
        return V(e) ? Pe({
          name: e.name
        }, t, {
          setup: e
        }) : e;
      }
      function Rr(e) {
        e.ids = [
          e.ids[0] + e.ids[2]++ + "-",
          0,
          0
        ];
      }
      function di(e, t, n, i, o = false) {
        if (z(e)) {
          e.forEach((_, v) => di(_, t && (z(t) ? t[v] : t), n, i, o));
          return;
        }
        if (Zt(i) && !o) {
          i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && di(e, t, n, i.component.subTree);
          return;
        }
        const s = i.shapeFlag & 4 ? Ri(i.component) : i.el, r = o ? null : s, { i: l, r: a } = e, u = t && t.r, c = l.refs === re ? l.refs = {} : l.refs, d = l.setupState, h = ee(d), g = d === re ? () => false : (_) => te(h, _);
        if (u != null && u !== a && (_e(u) ? (c[u] = null, g(u) && (d[u] = null)) : be(u) && (u.value = null)), V(a)) Fn(a, l, 12, [
          r,
          c
        ]);
        else {
          const _ = _e(a), v = be(a);
          if (_ || v) {
            const N = () => {
              if (e.f) {
                const E = _ ? g(a) ? d[a] : c[a] : a.value;
                o ? z(E) && wo(E, s) : z(E) ? E.includes(s) || E.push(s) : _ ? (c[a] = [
                  s
                ], g(a) && (d[a] = c[a])) : (a.value = [
                  s
                ], e.k && (c[e.k] = a.value));
              } else _ ? (c[a] = r, g(a) && (d[a] = r)) : v && (a.value = r, e.k && (c[e.k] = r));
            };
            r ? (N.id = -1, Le(N, n)) : N();
          }
        }
      }
      Si().requestIdleCallback;
      Si().cancelIdleCallback;
      const Zt = (e) => !!e.type.__asyncLoader, Mr = (e) => e.type.__isKeepAlive;
      function ka(e, t) {
        Ir(e, "a", t);
      }
      function Fa(e, t) {
        Ir(e, "da", t);
      }
      function Ir(e, t, n = Ce) {
        const i = e.__wdc || (e.__wdc = () => {
          let o = n;
          for (; o; ) {
            if (o.isDeactivated) return;
            o = o.parent;
          }
          return e();
        });
        if (Ai(t, i, n), n) {
          let o = n.parent;
          for (; o && o.parent; ) Mr(o.parent.vnode) && za(i, t, n, o), o = o.parent;
        }
      }
      function za(e, t, n, i) {
        const o = Ai(t, e, i, true);
        Dr(() => {
          wo(i[t], o);
        }, n);
      }
      function Ai(e, t, n = Ce, i = false) {
        if (n) {
          const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
            yt();
            const l = Bn(n), a = ut(t, n, e, r);
            return l(), xt(), a;
          });
          return i ? o.unshift(s) : o.push(s), s;
        }
      }
      const St = (e) => (t, n = Ce) => {
        (!En || e === "sp") && Ai(e, (...i) => t(...i), n);
      }, Ba = St("bm"), Nr = St("m"), ja = St("bu"), qa = St("u"), Va = St("bum"), Dr = St("um"), Ua = St("sp"), Wa = St("rtg"), Ka = St("rtc");
      function Ga(e, t = Ce) {
        Ai("ec", e, t);
      }
      const Oo = "components", Ya = "directives";
      function Cn(e, t) {
        return Ro(Oo, e, true, t) || e;
      }
      const Hr = Symbol.for("v-ndc");
      function Xa(e) {
        return _e(e) ? Ro(Oo, e, false) || e : e || Hr;
      }
      function zn(e) {
        return Ro(Ya, e);
      }
      function Ro(e, t, n = true, i = false) {
        const o = $e || Ce;
        if (o) {
          const s = o.type;
          if (e === Oo) {
            const l = Dc(s, false);
            if (l && (l === t || l === Ve(t) || l === $i(Ve(t)))) return s;
          }
          const r = Qo(o[e] || s[e], t) || Qo(o.appContext[e], t);
          return !r && i ? s : r;
        }
      }
      function Qo(e, t) {
        return e && (e[t] || e[Ve(t)] || e[$i(Ve(t))]);
      }
      function Ge(e, t, n, i) {
        let o;
        const s = n, r = z(e);
        if (r || _e(e)) {
          const l = r && Jt(e);
          let a = false, u = false;
          l && (a = !qe(e), u = It(e), e = Ti(e)), o = new Array(e.length);
          for (let c = 0, d = e.length; c < d; c++) o[c] = t(a ? u ? ai(xe(e[c])) : xe(e[c]) : e[c], c, void 0, s);
        } else if (typeof e == "number") {
          o = new Array(e);
          for (let l = 0; l < e; l++) o[l] = t(l + 1, l, void 0, s);
        } else if (le(e)) if (e[Symbol.iterator]) o = Array.from(e, (l, a) => t(l, a, void 0, s));
        else {
          const l = Object.keys(e);
          o = new Array(l.length);
          for (let a = 0, u = l.length; a < u; a++) {
            const c = l[a];
            o[a] = t(e[c], c, a, s);
          }
        }
        else o = [];
        return o;
      }
      function mt(e, t, n = {}, i, o) {
        if ($e.ce || $e.parent && Zt($e.parent) && $e.parent.ce) return t !== "default" && (n.name = t), R(), Be(Q, null, [
          Z("slot", n, i)
        ], 64);
        let s = e[t];
        s && s._c && (s._d = false), R();
        const r = s && Lr(s(n)), l = n.key || r && r.key, a = Be(Q, {
          key: (l && !Je(l) ? l : `_${t}`) + ""
        }, r || [], r && e._ === 1 ? 64 : -2);
        return a.scopeId && (a.slotScopeIds = [
          a.scopeId + "-s"
        ]), s && s._c && (s._d = true), a;
      }
      function Lr(e) {
        return e.some((t) => An(t) ? !(t.type === $t || t.type === Q && !Lr(t.children)) : true) ? e : null;
      }
      const io = (e) => e ? il(e) ? Ri(e) : io(e.parent) : null, mn = Pe(/* @__PURE__ */ Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => io(e.parent),
        $root: (e) => io(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => Fr(e),
        $forceUpdate: (e) => e.f || (e.f = () => {
          Ao(e.update);
        }),
        $nextTick: (e) => e.n || (e.n = Po.bind(e.proxy)),
        $watch: (e) => wc.bind(e)
      }), Ui = (e, t) => e !== re && !e.__isScriptSetup && te(e, t), Ja = {
        get({ _: e }, t) {
          if (t === "__v_skip") return true;
          const { ctx: n, setupState: i, data: o, props: s, accessCache: r, type: l, appContext: a } = e;
          let u;
          if (t[0] !== "$") {
            const g = r[t];
            if (g !== void 0) switch (g) {
              case 1:
                return i[t];
              case 2:
                return o[t];
              case 4:
                return n[t];
              case 3:
                return s[t];
            }
            else {
              if (Ui(i, t)) return r[t] = 1, i[t];
              if (o !== re && te(o, t)) return r[t] = 2, o[t];
              if ((u = e.propsOptions[0]) && te(u, t)) return r[t] = 3, s[t];
              if (n !== re && te(n, t)) return r[t] = 4, n[t];
              oo && (r[t] = 0);
            }
          }
          const c = mn[t];
          let d, h;
          if (c) return t === "$attrs" && Te(e.attrs, "get", ""), c(e);
          if ((d = l.__cssModules) && (d = d[t])) return d;
          if (n !== re && te(n, t)) return r[t] = 4, n[t];
          if (h = a.config.globalProperties, te(h, t)) return h[t];
        },
        set({ _: e }, t, n) {
          const { data: i, setupState: o, ctx: s } = e;
          return Ui(o, t) ? (o[t] = n, true) : i !== re && te(i, t) ? (i[t] = n, true) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
        },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: o, propsOptions: s } }, r) {
          let l;
          return !!n[r] || e !== re && te(e, r) || Ui(t, r) || (l = s[0]) && te(l, r) || te(i, r) || te(mn, r) || te(o.config.globalProperties, r);
        },
        defineProperty(e, t, n) {
          return n.get != null ? e._.accessCache[t] = 0 : te(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
        }
      };
      function Zo(e) {
        return z(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
      }
      let oo = true;
      function Qa(e) {
        const t = Fr(e), n = e.proxy, i = e.ctx;
        oo = false, t.beforeCreate && es(t.beforeCreate, e, "bc");
        const { data: o, computed: s, methods: r, watch: l, provide: a, inject: u, created: c, beforeMount: d, mounted: h, beforeUpdate: g, updated: _, activated: v, deactivated: N, beforeDestroy: E, beforeUnmount: I, destroyed: P, unmounted: $, render: L, renderTracked: H, renderTriggered: ne, errorCaptured: W, serverPrefetch: ae, expose: U, inheritAttrs: ce, components: ye, directives: Ae, filters: we } = t;
        if (u && Za(u, i, null), r) for (const Y in r) {
          const K = r[Y];
          V(K) && (i[Y] = K.bind(n));
        }
        if (o) {
          const Y = o.call(n, n);
          le(Y) && (e.data = kn(Y));
        }
        if (oo = true, s) for (const Y in s) {
          const K = s[Y], Se = V(K) ? K.bind(n, n) : V(K.get) ? K.get.bind(n, n) : rt, Ut = !V(K) && V(K.set) ? K.set.bind(n) : rt, Lt = ke({
            get: Se,
            set: Ut
          });
          Object.defineProperty(i, Y, {
            enumerable: true,
            configurable: true,
            get: () => Lt.value,
            set: (Ze) => Lt.value = Ze
          });
        }
        if (l) for (const Y in l) kr(l[Y], i, n, Y);
        if (a) {
          const Y = V(a) ? a.call(n) : a;
          Reflect.ownKeys(Y).forEach((K) => {
            sc(K, Y[K]);
          });
        }
        c && es(c, e, "c");
        function de(Y, K) {
          z(K) ? K.forEach((Se) => Y(Se.bind(n))) : K && Y(K.bind(n));
        }
        if (de(Ba, d), de(Nr, h), de(ja, g), de(qa, _), de(ka, v), de(Fa, N), de(Ga, W), de(Ka, H), de(Wa, ne), de(Va, I), de(Dr, $), de(Ua, ae), z(U)) if (U.length) {
          const Y = e.exposed || (e.exposed = {});
          U.forEach((K) => {
            Object.defineProperty(Y, K, {
              get: () => n[K],
              set: (Se) => n[K] = Se
            });
          });
        } else e.exposed || (e.exposed = {});
        L && e.render === rt && (e.render = L), ce != null && (e.inheritAttrs = ce), ye && (e.components = ye), Ae && (e.directives = Ae), ae && Rr(e);
      }
      function Za(e, t, n = rt) {
        z(e) && (e = so(e));
        for (const i in e) {
          const o = e[i];
          let s;
          le(o) ? "default" in o ? s = ei(o.from || i, o.default, true) : s = ei(o.from || i) : s = ei(o), be(s) ? Object.defineProperty(t, i, {
            enumerable: true,
            configurable: true,
            get: () => s.value,
            set: (r) => s.value = r
          }) : t[i] = s;
        }
      }
      function es(e, t, n) {
        ut(z(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
      }
      function kr(e, t, n, i) {
        let o = i.includes(".") ? Qr(n, i) : () => n[i];
        if (_e(e)) {
          const s = t[e];
          V(s) && Ne(o, s);
        } else if (V(e)) Ne(o, e.bind(n));
        else if (le(e)) if (z(e)) e.forEach((s) => kr(s, t, n, i));
        else {
          const s = V(e.handler) ? e.handler.bind(n) : t[e.handler];
          V(s) && Ne(o, s, e);
        }
      }
      function Fr(e) {
        const t = e.type, { mixins: n, extends: i } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: r } } = e.appContext, l = s.get(t);
        let a;
        return l ? a = l : !o.length && !n && !i ? a = t : (a = {}, o.length && o.forEach((u) => pi(a, u, r, true)), pi(a, t, r)), le(t) && s.set(t, a), a;
      }
      function pi(e, t, n, i = false) {
        const { mixins: o, extends: s } = t;
        s && pi(e, s, n, true), o && o.forEach((r) => pi(e, r, n, true));
        for (const r in t) if (!(i && r === "expose")) {
          const l = ec[r] || n && n[r];
          e[r] = l ? l(e[r], t[r]) : t[r];
        }
        return e;
      }
      const ec = {
        data: ts,
        props: ns,
        emits: ns,
        methods: pn,
        computed: pn,
        beforeCreate: Ee,
        created: Ee,
        beforeMount: Ee,
        mounted: Ee,
        beforeUpdate: Ee,
        updated: Ee,
        beforeDestroy: Ee,
        beforeUnmount: Ee,
        destroyed: Ee,
        unmounted: Ee,
        activated: Ee,
        deactivated: Ee,
        errorCaptured: Ee,
        serverPrefetch: Ee,
        components: pn,
        directives: pn,
        watch: nc,
        provide: ts,
        inject: tc
      };
      function ts(e, t) {
        return t ? e ? function() {
          return Pe(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t);
        } : t : e;
      }
      function tc(e, t) {
        return pn(so(e), so(t));
      }
      function so(e) {
        if (z(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
          return t;
        }
        return e;
      }
      function Ee(e, t) {
        return e ? [
          ...new Set([].concat(e, t))
        ] : t;
      }
      function pn(e, t) {
        return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
      }
      function ns(e, t) {
        return e ? z(e) && z(t) ? [
          .../* @__PURE__ */ new Set([
            ...e,
            ...t
          ])
        ] : Pe(/* @__PURE__ */ Object.create(null), Zo(e), Zo(t ?? {})) : t;
      }
      function nc(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = Pe(/* @__PURE__ */ Object.create(null), e);
        for (const i in t) n[i] = Ee(e[i], t[i]);
        return n;
      }
      function zr() {
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
      let ic = 0;
      function oc(e, t) {
        return function(i, o = null) {
          V(i) || (i = Pe({}, i)), o != null && !le(o) && (o = null);
          const s = zr(), r = /* @__PURE__ */ new WeakSet(), l = [];
          let a = false;
          const u = s.app = {
            _uid: ic++,
            _component: i,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: kc,
            get config() {
              return s.config;
            },
            set config(c) {
            },
            use(c, ...d) {
              return r.has(c) || (c && V(c.install) ? (r.add(c), c.install(u, ...d)) : V(c) && (r.add(c), c(u, ...d))), u;
            },
            mixin(c) {
              return s.mixins.includes(c) || s.mixins.push(c), u;
            },
            component(c, d) {
              return d ? (s.components[c] = d, u) : s.components[c];
            },
            directive(c, d) {
              return d ? (s.directives[c] = d, u) : s.directives[c];
            },
            mount(c, d, h) {
              if (!a) {
                const g = u._ceVNode || Z(i, o);
                return g.appContext = s, h === true ? h = "svg" : h === false && (h = void 0), e(g, c, h), a = true, u._container = c, c.__vue_app__ = u, Ri(g.component);
              }
            },
            onUnmount(c) {
              l.push(c);
            },
            unmount() {
              a && (ut(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
            },
            provide(c, d) {
              return s.provides[c] = d, u;
            },
            runWithContext(c) {
              const d = en;
              en = u;
              try {
                return c();
              } finally {
                en = d;
              }
            }
          };
          return u;
        };
      }
      let en = null;
      function sc(e, t) {
        if (Ce) {
          let n = Ce.provides;
          const i = Ce.parent && Ce.parent.provides;
          i === n && (n = Ce.provides = Object.create(i)), n[e] = t;
        }
      }
      function ei(e, t, n = false) {
        const i = Ce || $e;
        if (i || en) {
          let o = en ? en._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
          if (o && e in o) return o[e];
          if (arguments.length > 1) return n && V(t) ? t.call(i && i.proxy) : t;
        }
      }
      const Br = {}, jr = () => Object.create(Br), qr = (e) => Object.getPrototypeOf(e) === Br;
      function rc(e, t, n, i = false) {
        const o = {}, s = jr();
        e.propsDefaults = /* @__PURE__ */ Object.create(null), Vr(e, t, o, s);
        for (const r in e.propsOptions[0]) r in o || (o[r] = void 0);
        n ? e.props = i ? o : va(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
      }
      function lc(e, t, n, i) {
        const { props: o, attrs: s, vnode: { patchFlag: r } } = e, l = ee(o), [a] = e.propsOptions;
        let u = false;
        if ((i || r > 0) && !(r & 16)) {
          if (r & 8) {
            const c = e.vnode.dynamicProps;
            for (let d = 0; d < c.length; d++) {
              let h = c[d];
              if (Ei(e.emitsOptions, h)) continue;
              const g = t[h];
              if (a) if (te(s, h)) g !== s[h] && (s[h] = g, u = true);
              else {
                const _ = Ve(h);
                o[_] = ro(a, l, _, g, e, false);
              }
              else g !== s[h] && (s[h] = g, u = true);
            }
          }
        } else {
          Vr(e, t, o, s) && (u = true);
          let c;
          for (const d in l) (!t || !te(t, d) && ((c = Ht(d)) === d || !te(t, c))) && (a ? n && (n[d] !== void 0 || n[c] !== void 0) && (o[d] = ro(a, l, d, void 0, e, true)) : delete o[d]);
          if (s !== l) for (const d in s) (!t || !te(t, d)) && (delete s[d], u = true);
        }
        u && ht(e.attrs, "set", "");
      }
      function Vr(e, t, n, i) {
        const [o, s] = e.propsOptions;
        let r = false, l;
        if (t) for (let a in t) {
          if (hn(a)) continue;
          const u = t[a];
          let c;
          o && te(o, c = Ve(a)) ? !s || !s.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Ei(e.emitsOptions, a) || (!(a in i) || u !== i[a]) && (i[a] = u, r = true);
        }
        if (s) {
          const a = ee(n), u = l || re;
          for (let c = 0; c < s.length; c++) {
            const d = s[c];
            n[d] = ro(o, a, d, u[d], e, !te(u, d));
          }
        }
        return r;
      }
      function ro(e, t, n, i, o, s) {
        const r = e[n];
        if (r != null) {
          const l = te(r, "default");
          if (l && i === void 0) {
            const a = r.default;
            if (r.type !== Function && !r.skipFactory && V(a)) {
              const { propsDefaults: u } = o;
              if (n in u) i = u[n];
              else {
                const c = Bn(o);
                i = u[n] = a.call(null, t), c();
              }
            } else i = a;
            o.ce && o.ce._setProp(n, i);
          }
          r[0] && (s && !l ? i = false : r[1] && (i === "" || i === Ht(n)) && (i = true));
        }
        return i;
      }
      const ac = /* @__PURE__ */ new WeakMap();
      function Ur(e, t, n = false) {
        const i = n ? ac : t.propsCache, o = i.get(e);
        if (o) return o;
        const s = e.props, r = {}, l = [];
        let a = false;
        if (!V(e)) {
          const c = (d) => {
            a = true;
            const [h, g] = Ur(d, t, true);
            Pe(r, h), g && l.push(...g);
          };
          !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
        }
        if (!s && !a) return le(e) && i.set(e, Yt), Yt;
        if (z(s)) for (let c = 0; c < s.length; c++) {
          const d = Ve(s[c]);
          is(d) && (r[d] = re);
        }
        else if (s) for (const c in s) {
          const d = Ve(c);
          if (is(d)) {
            const h = s[c], g = r[d] = z(h) || V(h) ? {
              type: h
            } : Pe({}, h), _ = g.type;
            let v = false, N = true;
            if (z(_)) for (let E = 0; E < _.length; ++E) {
              const I = _[E], P = V(I) && I.name;
              if (P === "Boolean") {
                v = true;
                break;
              } else P === "String" && (N = false);
            }
            else v = V(_) && _.name === "Boolean";
            g[0] = v, g[1] = N, (v || te(g, "default")) && l.push(d);
          }
        }
        const u = [
          r,
          l
        ];
        return le(e) && i.set(e, u), u;
      }
      function is(e) {
        return e[0] !== "$" && !hn(e);
      }
      const Mo = (e) => e[0] === "_" || e === "$stable", Io = (e) => z(e) ? e.map(st) : [
        st(e)
      ], cc = (e, t, n) => {
        if (t._n) return t;
        const i = ge((...o) => Io(t(...o)), n);
        return i._c = false, i;
      }, Wr = (e, t, n) => {
        const i = e._ctx;
        for (const o in e) {
          if (Mo(o)) continue;
          const s = e[o];
          if (V(s)) t[o] = cc(o, s, i);
          else if (s != null) {
            const r = Io(s);
            t[o] = () => r;
          }
        }
      }, Kr = (e, t) => {
        const n = Io(t);
        e.slots.default = () => n;
      }, Gr = (e, t, n) => {
        for (const i in t) (n || !Mo(i)) && (e[i] = t[i]);
      }, uc = (e, t, n) => {
        const i = e.slots = jr();
        if (e.vnode.shapeFlag & 32) {
          const o = t._;
          o ? (Gr(i, t, n), n && nr(i, "_", o, true)) : Wr(t, i);
        } else t && Kr(e, t);
      }, fc = (e, t, n) => {
        const { vnode: i, slots: o } = e;
        let s = true, r = re;
        if (i.shapeFlag & 32) {
          const l = t._;
          l ? n && l === 1 ? s = false : Gr(o, t, n) : (s = !t.$stable, Wr(t, o)), r = t;
        } else t && (Kr(e, t), r = {
          default: 1
        });
        if (s) for (const l in o) !Mo(l) && r[l] == null && delete o[l];
      }, Le = Tc;
      function dc(e) {
        return pc(e);
      }
      function pc(e, t) {
        const n = Si();
        n.__VUE__ = true;
        const { insert: i, remove: o, patchProp: s, createElement: r, createText: l, createComment: a, setText: u, setElementText: c, parentNode: d, nextSibling: h, setScopeId: g = rt, insertStaticContent: _ } = e, v = (f, p, m, y = null, w = null, b = null, O = void 0, A = null, C = !!p.dynamicChildren) => {
          if (f === p) return;
          f && !dn(f, p) && (y = Un(f), Ze(f, w, b, true), f = null), p.patchFlag === -2 && (C = false, p.dynamicChildren = null);
          const { type: x, ref: F, shapeFlag: M } = p;
          switch (x) {
            case Oi:
              N(f, p, m, y);
              break;
            case $t:
              E(f, p, m, y);
              break;
            case Ki:
              f == null && I(p, m, y, O);
              break;
            case Q:
              ye(f, p, m, y, w, b, O, A, C);
              break;
            default:
              M & 1 ? L(f, p, m, y, w, b, O, A, C) : M & 6 ? Ae(f, p, m, y, w, b, O, A, C) : (M & 64 || M & 128) && x.process(f, p, m, y, w, b, O, A, C, cn);
          }
          F != null && w && di(F, f && f.ref, b, p || f, !p);
        }, N = (f, p, m, y) => {
          if (f == null) i(p.el = l(p.children), m, y);
          else {
            const w = p.el = f.el;
            p.children !== f.children && u(w, p.children);
          }
        }, E = (f, p, m, y) => {
          f == null ? i(p.el = a(p.children || ""), m, y) : p.el = f.el;
        }, I = (f, p, m, y) => {
          [f.el, f.anchor] = _(f.children, p, m, y, f.el, f.anchor);
        }, P = ({ el: f, anchor: p }, m, y) => {
          let w;
          for (; f && f !== p; ) w = h(f), i(f, m, y), f = w;
          i(p, m, y);
        }, $ = ({ el: f, anchor: p }) => {
          let m;
          for (; f && f !== p; ) m = h(f), o(f), f = m;
          o(p);
        }, L = (f, p, m, y, w, b, O, A, C) => {
          p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), f == null ? H(p, m, y, w, b, O, A, C) : ae(f, p, w, b, O, A, C);
        }, H = (f, p, m, y, w, b, O, A) => {
          let C, x;
          const { props: F, shapeFlag: M, transition: k, dirs: j } = f;
          if (C = f.el = r(f.type, b, F && F.is, F), M & 8 ? c(C, f.children) : M & 16 && W(f.children, C, null, y, w, Wi(f, b), O, A), j && kt(f, null, y, "created"), ne(C, f, f.scopeId, O, y), F) {
            for (const ue in F) ue !== "value" && !hn(ue) && s(C, ue, null, F[ue], b, y);
            "value" in F && s(C, "value", null, F.value, b), (x = F.onVnodeBeforeMount) && it(x, y, f);
          }
          j && kt(f, null, y, "beforeMount");
          const X = hc(w, k);
          X && k.beforeEnter(C), i(C, p, m), ((x = F && F.onVnodeMounted) || X || j) && Le(() => {
            x && it(x, y, f), X && k.enter(C), j && kt(f, null, y, "mounted");
          }, w);
        }, ne = (f, p, m, y, w) => {
          if (m && g(f, m), y) for (let b = 0; b < y.length; b++) g(f, y[b]);
          if (w) {
            let b = w.subTree;
            if (p === b || el(b.type) && (b.ssContent === p || b.ssFallback === p)) {
              const O = w.vnode;
              ne(f, O, O.scopeId, O.slotScopeIds, w.parent);
            }
          }
        }, W = (f, p, m, y, w, b, O, A, C = 0) => {
          for (let x = C; x < f.length; x++) {
            const F = f[x] = A ? At(f[x]) : st(f[x]);
            v(null, F, p, m, y, w, b, O, A);
          }
        }, ae = (f, p, m, y, w, b, O) => {
          const A = p.el = f.el;
          let { patchFlag: C, dynamicChildren: x, dirs: F } = p;
          C |= f.patchFlag & 16;
          const M = f.props || re, k = p.props || re;
          let j;
          if (m && Ft(m, false), (j = k.onVnodeBeforeUpdate) && it(j, m, p, f), F && kt(p, f, m, "beforeUpdate"), m && Ft(m, true), (M.innerHTML && k.innerHTML == null || M.textContent && k.textContent == null) && c(A, ""), x ? U(f.dynamicChildren, x, A, m, y, Wi(p, w), b) : O || K(f, p, A, null, m, y, Wi(p, w), b, false), C > 0) {
            if (C & 16) ce(A, M, k, m, w);
            else if (C & 2 && M.class !== k.class && s(A, "class", null, k.class, w), C & 4 && s(A, "style", M.style, k.style, w), C & 8) {
              const X = p.dynamicProps;
              for (let ue = 0; ue < X.length; ue++) {
                const ie = X[ue], De = M[ie], Me = k[ie];
                (Me !== De || ie === "value") && s(A, ie, De, Me, w, m);
              }
            }
            C & 1 && f.children !== p.children && c(A, p.children);
          } else !O && x == null && ce(A, M, k, m, w);
          ((j = k.onVnodeUpdated) || F) && Le(() => {
            j && it(j, m, p, f), F && kt(p, f, m, "updated");
          }, y);
        }, U = (f, p, m, y, w, b, O) => {
          for (let A = 0; A < p.length; A++) {
            const C = f[A], x = p[A], F = C.el && (C.type === Q || !dn(C, x) || C.shapeFlag & 198) ? d(C.el) : m;
            v(C, x, F, null, y, w, b, O, true);
          }
        }, ce = (f, p, m, y, w) => {
          if (p !== m) {
            if (p !== re) for (const b in p) !hn(b) && !(b in m) && s(f, b, p[b], null, w, y);
            for (const b in m) {
              if (hn(b)) continue;
              const O = m[b], A = p[b];
              O !== A && b !== "value" && s(f, b, A, O, w, y);
            }
            "value" in m && s(f, "value", p.value, m.value, w);
          }
        }, ye = (f, p, m, y, w, b, O, A, C) => {
          const x = p.el = f ? f.el : l(""), F = p.anchor = f ? f.anchor : l("");
          let { patchFlag: M, dynamicChildren: k, slotScopeIds: j } = p;
          j && (A = A ? A.concat(j) : j), f == null ? (i(x, m, y), i(F, m, y), W(p.children || [], m, F, w, b, O, A, C)) : M > 0 && M & 64 && k && f.dynamicChildren ? (U(f.dynamicChildren, k, m, w, b, O, A), (p.key != null || w && p === w.subTree) && Yr(f, p, true)) : K(f, p, m, F, w, b, O, A, C);
        }, Ae = (f, p, m, y, w, b, O, A, C) => {
          p.slotScopeIds = A, f == null ? p.shapeFlag & 512 ? w.ctx.activate(p, m, y, O, C) : we(p, m, y, w, b, O, C) : Qe(f, p, C);
        }, we = (f, p, m, y, w, b, O) => {
          const A = f.component = Oc(f, y, w);
          if (Mr(f) && (A.ctx.renderer = cn), Rc(A, false, O), A.asyncDep) {
            if (w && w.registerDep(A, de, O), !f.el) {
              const C = A.subTree = Z($t);
              E(null, C, p, m);
            }
          } else de(A, f, p, m, w, b, O);
        }, Qe = (f, p, m) => {
          const y = p.component = f.component;
          if ($c(f, p, m)) if (y.asyncDep && !y.asyncResolved) {
            Y(y, p, m);
            return;
          } else y.next = p, y.update();
          else p.el = f.el, y.vnode = p;
        }, de = (f, p, m, y, w, b, O) => {
          const A = () => {
            if (f.isMounted) {
              let { next: M, bu: k, u: j, parent: X, vnode: ue } = f;
              {
                const tt = Xr(f);
                if (tt) {
                  M && (M.el = ue.el, Y(f, M, O)), tt.asyncDep.then(() => {
                    f.isUnmounted || A();
                  });
                  return;
                }
              }
              let ie = M, De;
              Ft(f, false), M ? (M.el = ue.el, Y(f, M, O)) : M = ue, k && Zn(k), (De = M.props && M.props.onVnodeBeforeUpdate) && it(De, X, M, ue), Ft(f, true);
              const Me = ss(f), et = f.subTree;
              f.subTree = Me, v(et, Me, d(et.el), Un(et), f, w, b), M.el = Me.el, ie === null && Sc(f, Me.el), j && Le(j, w), (De = M.props && M.props.onVnodeUpdated) && Le(() => it(De, X, M, ue), w);
            } else {
              let M;
              const { el: k, props: j } = p, { bm: X, m: ue, parent: ie, root: De, type: Me } = f, et = Zt(p);
              Ft(f, false), X && Zn(X), !et && (M = j && j.onVnodeBeforeMount) && it(M, ie, p), Ft(f, true);
              {
                De.ce && De.ce._injectChildStyle(Me);
                const tt = f.subTree = ss(f);
                v(null, tt, m, y, f, w, b), p.el = tt.el;
              }
              if (ue && Le(ue, w), !et && (M = j && j.onVnodeMounted)) {
                const tt = p;
                Le(() => it(M, ie, tt), w);
              }
              (p.shapeFlag & 256 || ie && Zt(ie.vnode) && ie.vnode.shapeFlag & 256) && f.a && Le(f.a, w), f.isMounted = true, p = m = y = null;
            }
          };
          f.scope.on();
          const C = f.effect = new lr(A);
          f.scope.off();
          const x = f.update = C.run.bind(C), F = f.job = C.runIfDirty.bind(C);
          F.i = f, F.id = f.uid, C.scheduler = () => Ao(F), Ft(f, true), x();
        }, Y = (f, p, m) => {
          p.component = f;
          const y = f.vnode.props;
          f.vnode = p, f.next = null, lc(f, p.props, y, m), fc(f, p.children, m), yt(), Jo(f), xt();
        }, K = (f, p, m, y, w, b, O, A, C = false) => {
          const x = f && f.children, F = f ? f.shapeFlag : 0, M = p.children, { patchFlag: k, shapeFlag: j } = p;
          if (k > 0) {
            if (k & 128) {
              Ut(x, M, m, y, w, b, O, A, C);
              return;
            } else if (k & 256) {
              Se(x, M, m, y, w, b, O, A, C);
              return;
            }
          }
          j & 8 ? (F & 16 && an(x, w, b), M !== x && c(m, M)) : F & 16 ? j & 16 ? Ut(x, M, m, y, w, b, O, A, C) : an(x, w, b, true) : (F & 8 && c(m, ""), j & 16 && W(M, m, y, w, b, O, A, C));
        }, Se = (f, p, m, y, w, b, O, A, C) => {
          f = f || Yt, p = p || Yt;
          const x = f.length, F = p.length, M = Math.min(x, F);
          let k;
          for (k = 0; k < M; k++) {
            const j = p[k] = C ? At(p[k]) : st(p[k]);
            v(f[k], j, m, null, w, b, O, A, C);
          }
          x > F ? an(f, w, b, true, false, M) : W(p, m, y, w, b, O, A, C, M);
        }, Ut = (f, p, m, y, w, b, O, A, C) => {
          let x = 0;
          const F = p.length;
          let M = f.length - 1, k = F - 1;
          for (; x <= M && x <= k; ) {
            const j = f[x], X = p[x] = C ? At(p[x]) : st(p[x]);
            if (dn(j, X)) v(j, X, m, null, w, b, O, A, C);
            else break;
            x++;
          }
          for (; x <= M && x <= k; ) {
            const j = f[M], X = p[k] = C ? At(p[k]) : st(p[k]);
            if (dn(j, X)) v(j, X, m, null, w, b, O, A, C);
            else break;
            M--, k--;
          }
          if (x > M) {
            if (x <= k) {
              const j = k + 1, X = j < F ? p[j].el : y;
              for (; x <= k; ) v(null, p[x] = C ? At(p[x]) : st(p[x]), m, X, w, b, O, A, C), x++;
            }
          } else if (x > k) for (; x <= M; ) Ze(f[x], w, b, true), x++;
          else {
            const j = x, X = x, ue = /* @__PURE__ */ new Map();
            for (x = X; x <= k; x++) {
              const He = p[x] = C ? At(p[x]) : st(p[x]);
              He.key != null && ue.set(He.key, x);
            }
            let ie, De = 0;
            const Me = k - X + 1;
            let et = false, tt = 0;
            const un = new Array(Me);
            for (x = 0; x < Me; x++) un[x] = 0;
            for (x = j; x <= M; x++) {
              const He = f[x];
              if (De >= Me) {
                Ze(He, w, b, true);
                continue;
              }
              let nt;
              if (He.key != null) nt = ue.get(He.key);
              else for (ie = X; ie <= k; ie++) if (un[ie - X] === 0 && dn(He, p[ie])) {
                nt = ie;
                break;
              }
              nt === void 0 ? Ze(He, w, b, true) : (un[nt - X] = x + 1, nt >= tt ? tt = nt : et = true, v(He, p[nt], m, null, w, b, O, A, C), De++);
            }
            const Vo = et ? gc(un) : Yt;
            for (ie = Vo.length - 1, x = Me - 1; x >= 0; x--) {
              const He = X + x, nt = p[He], Uo = He + 1 < F ? p[He + 1].el : y;
              un[x] === 0 ? v(null, nt, m, Uo, w, b, O, A, C) : et && (ie < 0 || x !== Vo[ie] ? Lt(nt, m, Uo, 2) : ie--);
            }
          }
        }, Lt = (f, p, m, y, w = null) => {
          const { el: b, type: O, transition: A, children: C, shapeFlag: x } = f;
          if (x & 6) {
            Lt(f.component.subTree, p, m, y);
            return;
          }
          if (x & 128) {
            f.suspense.move(p, m, y);
            return;
          }
          if (x & 64) {
            O.move(f, p, m, cn);
            return;
          }
          if (O === Q) {
            i(b, p, m);
            for (let M = 0; M < C.length; M++) Lt(C[M], p, m, y);
            i(f.anchor, p, m);
            return;
          }
          if (O === Ki) {
            P(f, p, m);
            return;
          }
          if (y !== 2 && x & 1 && A) if (y === 0) A.beforeEnter(b), i(b, p, m), Le(() => A.enter(b), w);
          else {
            const { leave: M, delayLeave: k, afterLeave: j } = A, X = () => {
              f.ctx.isUnmounted ? o(b) : i(b, p, m);
            }, ue = () => {
              M(b, () => {
                X(), j && j();
              });
            };
            k ? k(b, X, ue) : ue();
          }
          else i(b, p, m);
        }, Ze = (f, p, m, y = false, w = false) => {
          const { type: b, props: O, ref: A, children: C, dynamicChildren: x, shapeFlag: F, patchFlag: M, dirs: k, cacheIndex: j } = f;
          if (M === -2 && (w = false), A != null && (yt(), di(A, null, m, f, true), xt()), j != null && (p.renderCache[j] = void 0), F & 256) {
            p.ctx.deactivate(f);
            return;
          }
          const X = F & 1 && k, ue = !Zt(f);
          let ie;
          if (ue && (ie = O && O.onVnodeBeforeUnmount) && it(ie, p, f), F & 6) kl(f.component, m, y);
          else {
            if (F & 128) {
              f.suspense.unmount(m, y);
              return;
            }
            X && kt(f, null, p, "beforeUnmount"), F & 64 ? f.type.remove(f, p, m, cn, y) : x && !x.hasOnce && (b !== Q || M > 0 && M & 64) ? an(x, p, m, false, true) : (b === Q && M & 384 || !w && F & 16) && an(C, p, m), y && jo(f);
          }
          (ue && (ie = O && O.onVnodeUnmounted) || X) && Le(() => {
            ie && it(ie, p, f), X && kt(f, null, p, "unmounted");
          }, m);
        }, jo = (f) => {
          const { type: p, el: m, anchor: y, transition: w } = f;
          if (p === Q) {
            Ll(m, y);
            return;
          }
          if (p === Ki) {
            $(f);
            return;
          }
          const b = () => {
            o(m), w && !w.persisted && w.afterLeave && w.afterLeave();
          };
          if (f.shapeFlag & 1 && w && !w.persisted) {
            const { leave: O, delayLeave: A } = w, C = () => O(m, b);
            A ? A(f.el, b, C) : C();
          } else b();
        }, Ll = (f, p) => {
          let m;
          for (; f !== p; ) m = h(f), o(f), f = m;
          o(p);
        }, kl = (f, p, m) => {
          const { bum: y, scope: w, job: b, subTree: O, um: A, m: C, a: x, parent: F, slots: { __: M } } = f;
          os(C), os(x), y && Zn(y), F && z(M) && M.forEach((k) => {
            F.renderCache[k] = void 0;
          }), w.stop(), b && (b.flags |= 8, Ze(O, f, p, m)), A && Le(A, p), Le(() => {
            f.isUnmounted = true;
          }, p), p && p.pendingBranch && !p.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve());
        }, an = (f, p, m, y = false, w = false, b = 0) => {
          for (let O = b; O < f.length; O++) Ze(f[O], p, m, y, w);
        }, Un = (f) => {
          if (f.shapeFlag & 6) return Un(f.component.subTree);
          if (f.shapeFlag & 128) return f.suspense.next();
          const p = h(f.anchor || f.el), m = p && p[Ha];
          return m ? h(m) : p;
        };
        let Fi = false;
        const qo = (f, p, m) => {
          f == null ? p._vnode && Ze(p._vnode, null, null, true) : v(p._vnode || null, f, p, null, null, null, m), p._vnode = f, Fi || (Fi = true, Jo(), Er(), Fi = false);
        }, cn = {
          p: v,
          um: Ze,
          m: Lt,
          r: jo,
          mt: we,
          mc: W,
          pc: K,
          pbc: U,
          n: Un,
          o: e
        };
        return {
          render: qo,
          hydrate: void 0,
          createApp: oc(qo)
        };
      }
      function Wi({ type: e, props: t }, n) {
        return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
      }
      function Ft({ effect: e, job: t }, n) {
        n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
      }
      function hc(e, t) {
        return (!e || e && !e.pendingBranch) && t && !t.persisted;
      }
      function Yr(e, t, n = false) {
        const i = e.children, o = t.children;
        if (z(i) && z(o)) for (let s = 0; s < i.length; s++) {
          const r = i[s];
          let l = o[s];
          l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = At(o[s]), l.el = r.el), !n && l.patchFlag !== -2 && Yr(r, l)), l.type === Oi && (l.el = r.el), l.type === $t && !l.el && (l.el = r.el);
        }
      }
      function gc(e) {
        const t = e.slice(), n = [
          0
        ];
        let i, o, s, r, l;
        const a = e.length;
        for (i = 0; i < a; i++) {
          const u = e[i];
          if (u !== 0) {
            if (o = n[n.length - 1], e[o] < u) {
              t[i] = o, n.push(i);
              continue;
            }
            for (s = 0, r = n.length - 1; s < r; ) l = s + r >> 1, e[n[l]] < u ? s = l + 1 : r = l;
            u < e[n[s]] && (s > 0 && (t[i] = n[s - 1]), n[s] = i);
          }
        }
        for (s = n.length, r = n[s - 1]; s-- > 0; ) n[s] = r, r = t[r];
        return n;
      }
      function Xr(e) {
        const t = e.subTree.component;
        if (t) return t.asyncDep && !t.asyncResolved ? t : Xr(t);
      }
      function os(e) {
        if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
      }
      const _c = Symbol.for("v-scx"), mc = () => ei(_c);
      function Ne(e, t, n) {
        return Jr(e, t, n);
      }
      function Jr(e, t, n = re) {
        const { immediate: i, deep: o, flush: s, once: r } = n, l = Pe({}, n), a = t && i || !t && s !== "post";
        let u;
        if (En) {
          if (s === "sync") {
            const g = mc();
            u = g.__watcherHandles || (g.__watcherHandles = []);
          } else if (!a) {
            const g = () => {
            };
            return g.stop = rt, g.resume = rt, g.pause = rt, g;
          }
        }
        const c = Ce;
        l.call = (g, _, v) => ut(g, c, _, v);
        let d = false;
        s === "post" ? l.scheduler = (g) => {
          Le(g, c && c.suspense);
        } : s !== "sync" && (d = true, l.scheduler = (g, _) => {
          _ ? g() : Ao(g);
        }), l.augmentJob = (g) => {
          t && (g.flags |= 4), d && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
        };
        const h = Ea(e, t, l);
        return En && (u ? u.push(h) : a && h()), h;
      }
      function wc(e, t, n) {
        const i = this.proxy, o = _e(e) ? e.includes(".") ? Qr(i, e) : () => i[e] : e.bind(i, i);
        let s;
        V(t) ? s = t : (s = t.handler, n = t);
        const r = Bn(this), l = Jr(o, s.bind(i), n);
        return r(), l;
      }
      function Qr(e, t) {
        const n = t.split(".");
        return () => {
          let i = e;
          for (let o = 0; o < n.length && i; o++) i = i[n[o]];
          return i;
        };
      }
      const vc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Ht(t)}Modifiers`];
      function bc(e, t, ...n) {
        if (e.isUnmounted) return;
        const i = e.vnode.props || re;
        let o = n;
        const s = t.startsWith("update:"), r = s && vc(i, t.slice(7));
        r && (r.trim && (o = n.map((c) => _e(c) ? c.trim() : c)), r.number && (o = n.map(ri)));
        let l, a = i[l = zi(t)] || i[l = zi(Ve(t))];
        !a && s && (a = i[l = zi(Ht(t))]), a && ut(a, e, 6, o);
        const u = i[l + "Once"];
        if (u) {
          if (!e.emitted) e.emitted = {};
          else if (e.emitted[l]) return;
          e.emitted[l] = true, ut(u, e, 6, o);
        }
      }
      function Zr(e, t, n = false) {
        const i = t.emitsCache, o = i.get(e);
        if (o !== void 0) return o;
        const s = e.emits;
        let r = {}, l = false;
        if (!V(e)) {
          const a = (u) => {
            const c = Zr(u, t, true);
            c && (l = true, Pe(r, c));
          };
          !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
        }
        return !s && !l ? (le(e) && i.set(e, null), null) : (z(s) ? s.forEach((a) => r[a] = null) : Pe(r, s), le(e) && i.set(e, r), r);
      }
      function Ei(e, t) {
        return !e || !bi(t) ? false : (t = t.slice(2).replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, Ht(t)) || te(e, t));
      }
      function ss(e) {
        const { type: t, vnode: n, proxy: i, withProxy: o, propsOptions: [s], slots: r, attrs: l, emit: a, render: u, renderCache: c, props: d, data: h, setupState: g, ctx: _, inheritAttrs: v } = e, N = fi(e);
        let E, I;
        try {
          if (n.shapeFlag & 4) {
            const $ = o || i, L = $;
            E = st(u.call(L, $, c, d, g, h, _)), I = l;
          } else {
            const $ = t;
            E = st($.length > 1 ? $(d, {
              attrs: l,
              slots: r,
              emit: a
            }) : $(d, null)), I = t.props ? l : yc(l);
          }
        } catch ($) {
          wn.length = 0, Ci($, e, 1), E = Z($t);
        }
        let P = E;
        if (I && v !== false) {
          const $ = Object.keys(I), { shapeFlag: L } = P;
          $.length && L & 7 && (s && $.some(mo) && (I = xc(I, s)), P = on(P, I, false, true));
        }
        return n.dirs && (P = on(P, null, false, true), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && Eo(P, n.transition), E = P, fi(N), E;
      }
      const yc = (e) => {
        let t;
        for (const n in e) (n === "class" || n === "style" || bi(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
      }, xc = (e, t) => {
        const n = {};
        for (const i in e) (!mo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
        return n;
      };
      function $c(e, t, n) {
        const { props: i, children: o, component: s } = e, { props: r, children: l, patchFlag: a } = t, u = s.emitsOptions;
        if (t.dirs || t.transition) return true;
        if (n && a >= 0) {
          if (a & 1024) return true;
          if (a & 16) return i ? rs(i, r, u) : !!r;
          if (a & 8) {
            const c = t.dynamicProps;
            for (let d = 0; d < c.length; d++) {
              const h = c[d];
              if (r[h] !== i[h] && !Ei(u, h)) return true;
            }
          }
        } else return (o || l) && (!l || !l.$stable) ? true : i === r ? false : i ? r ? rs(i, r, u) : true : !!r;
        return false;
      }
      function rs(e, t, n) {
        const i = Object.keys(t);
        if (i.length !== Object.keys(e).length) return true;
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          if (t[s] !== e[s] && !Ei(n, s)) return true;
        }
        return false;
      }
      function Sc({ vnode: e, parent: t }, n) {
        for (; t; ) {
          const i = t.subTree;
          if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
          else break;
        }
      }
      const el = (e) => e.__isSuspense;
      function Tc(e, t) {
        t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : Ma(e);
      }
      const Q = Symbol.for("v-fgt"), Oi = Symbol.for("v-txt"), $t = Symbol.for("v-cmt"), Ki = Symbol.for("v-stc"), wn = [];
      let ze = null;
      function R(e = false) {
        wn.push(ze = e ? null : []);
      }
      function Cc() {
        wn.pop(), ze = wn[wn.length - 1] || null;
      }
      let Pn = 1;
      function ls(e, t = false) {
        Pn += e, e < 0 && ze && t && (ze.hasOnce = true);
      }
      function tl(e) {
        return e.dynamicChildren = Pn > 0 ? ze || Yt : null, Cc(), Pn > 0 && ze && ze.push(e), e;
      }
      function D(e, t, n, i, o, s) {
        return tl(T(e, t, n, i, o, s, true));
      }
      function Be(e, t, n, i, o) {
        return tl(Z(e, t, n, i, o, true));
      }
      function An(e) {
        return e ? e.__v_isVNode === true : false;
      }
      function dn(e, t) {
        return e.type === t.type && e.key === t.key;
      }
      const nl = ({ key: e }) => e ?? null, ti = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? _e(e) || be(e) || V(e) ? {
        i: $e,
        r: e,
        k: t,
        f: !!n
      } : e : null);
      function T(e, t = null, n = null, i = 0, o = null, s = e === Q ? 0 : 1, r = false, l = false) {
        const a = {
          __v_isVNode: true,
          __v_skip: true,
          type: e,
          props: t,
          key: t && nl(t),
          ref: t && ti(t),
          scopeId: Pi,
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
          shapeFlag: s,
          patchFlag: i,
          dynamicProps: o,
          dynamicChildren: null,
          appContext: null,
          ctx: $e
        };
        return l ? (Do(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= _e(n) ? 8 : 16), Pn > 0 && !r && ze && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && ze.push(a), a;
      }
      const Z = Pc;
      function Pc(e, t = null, n = null, i = 0, o = null, s = false) {
        if ((!e || e === Hr) && (e = $t), An(e)) {
          const l = on(e, t, true);
          return n && Do(l, n), Pn > 0 && !s && ze && (l.shapeFlag & 6 ? ze[ze.indexOf(e)] = l : ze.push(l)), l.patchFlag = -2, l;
        }
        if (Hc(e) && (e = e.__vccOpts), t) {
          t = No(t);
          let { class: l, style: a } = t;
          l && !_e(l) && (t.class = We(l)), le(a) && (Co(a) && !z(a) && (a = Pe({}, a)), t.style = vt(a));
        }
        const r = _e(e) ? 1 : el(e) ? 128 : La(e) ? 64 : le(e) ? 4 : V(e) ? 2 : 0;
        return T(e, t, n, i, o, r, s, true);
      }
      function No(e) {
        return e ? Co(e) || qr(e) ? Pe({}, e) : e : null;
      }
      function on(e, t, n = false, i = false) {
        const { props: o, ref: s, patchFlag: r, children: l, transition: a } = e, u = t ? Ho(o || {}, t) : o, c = {
          __v_isVNode: true,
          __v_skip: true,
          type: e.type,
          props: u,
          key: u && nl(u),
          ref: t && t.ref ? n && s ? z(s) ? s.concat(ti(t)) : [
            s,
            ti(t)
          ] : ti(t) : s,
          scopeId: e.scopeId,
          slotScopeIds: e.slotScopeIds,
          children: l,
          target: e.target,
          targetStart: e.targetStart,
          targetAnchor: e.targetAnchor,
          staticCount: e.staticCount,
          shapeFlag: e.shapeFlag,
          patchFlag: t && e.type !== Q ? r === -1 ? 16 : r | 16 : r,
          dynamicProps: e.dynamicProps,
          dynamicChildren: e.dynamicChildren,
          appContext: e.appContext,
          dirs: e.dirs,
          transition: a,
          component: e.component,
          suspense: e.suspense,
          ssContent: e.ssContent && on(e.ssContent),
          ssFallback: e.ssFallback && on(e.ssFallback),
          el: e.el,
          anchor: e.anchor,
          ctx: e.ctx,
          ce: e.ce
        };
        return a && i && Eo(c, a.clone(c)), c;
      }
      function he(e = " ", t = 0) {
        return Z(Oi, null, e, t);
      }
      function _t(e = "", t = false) {
        return t ? (R(), Be($t, null, e)) : Z($t, null, e);
      }
      function st(e) {
        return e == null || typeof e == "boolean" ? Z($t) : z(e) ? Z(Q, null, e.slice()) : An(e) ? At(e) : Z(Oi, null, String(e));
      }
      function At(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : on(e);
      }
      function Do(e, t) {
        let n = 0;
        const { shapeFlag: i } = e;
        if (t == null) t = null;
        else if (z(t)) n = 16;
        else if (typeof t == "object") if (i & 65) {
          const o = t.default;
          o && (o._c && (o._d = false), Do(e, o()), o._c && (o._d = true));
          return;
        } else {
          n = 32;
          const o = t._;
          !o && !qr(t) ? t._ctx = $e : o === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
        }
        else V(t) ? (t = {
          default: t,
          _ctx: $e
        }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
          he(t)
        ]) : n = 8);
        e.children = t, e.shapeFlag |= n;
      }
      function Ho(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const i = e[n];
          for (const o in i) if (o === "class") t.class !== i.class && (t.class = We([
            t.class,
            i.class
          ]));
          else if (o === "style") t.style = vt([
            t.style,
            i.style
          ]);
          else if (bi(o)) {
            const s = t[o], r = i[o];
            r && s !== r && !(z(s) && s.includes(r)) && (t[o] = s ? [].concat(s, r) : r);
          } else o !== "" && (t[o] = i[o]);
        }
        return t;
      }
      function it(e, t, n, i = null) {
        ut(e, t, 7, [
          n,
          i
        ]);
      }
      const Ac = zr();
      let Ec = 0;
      function Oc(e, t, n) {
        const i = e.type, o = (t ? t.appContext : e.appContext) || Ac, s = {
          uid: Ec++,
          vnode: e,
          type: i,
          parent: t,
          appContext: o,
          root: null,
          next: null,
          subTree: null,
          effect: null,
          update: null,
          job: null,
          scope: new Ql(true),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: t ? t.provides : Object.create(o.provides),
          ids: t ? t.ids : [
            "",
            0,
            0
          ],
          accessCache: null,
          renderCache: [],
          components: null,
          directives: null,
          propsOptions: Ur(i, o),
          emitsOptions: Zr(i, o),
          emit: null,
          emitted: null,
          propsDefaults: re,
          inheritAttrs: i.inheritAttrs,
          ctx: re,
          data: re,
          props: re,
          attrs: re,
          slots: re,
          refs: re,
          setupState: re,
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
        return s.ctx = {
          _: s
        }, s.root = t ? t.root : s, s.emit = bc.bind(null, s), e.ce && e.ce(s), s;
      }
      let Ce = null, hi, lo;
      {
        const e = Si(), t = (n, i) => {
          let o;
          return (o = e[n]) || (o = e[n] = []), o.push(i), (s) => {
            o.length > 1 ? o.forEach((r) => r(s)) : o[0](s);
          };
        };
        hi = t("__VUE_INSTANCE_SETTERS__", (n) => Ce = n), lo = t("__VUE_SSR_SETTERS__", (n) => En = n);
      }
      const Bn = (e) => {
        const t = Ce;
        return hi(e), e.scope.on(), () => {
          e.scope.off(), hi(t);
        };
      }, as = () => {
        Ce && Ce.scope.off(), hi(null);
      };
      function il(e) {
        return e.vnode.shapeFlag & 4;
      }
      let En = false;
      function Rc(e, t = false, n = false) {
        t && lo(t);
        const { props: i, children: o } = e.vnode, s = il(e);
        rc(e, i, s, t), uc(e, o, n || t);
        const r = s ? Mc(e, t) : void 0;
        return t && lo(false), r;
      }
      function Mc(e, t) {
        const n = e.type;
        e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ja);
        const { setup: i } = n;
        if (i) {
          yt();
          const o = e.setupContext = i.length > 1 ? Nc(e) : null, s = Bn(e), r = Fn(i, e, 0, [
            e.props,
            o
          ]), l = Zs(r);
          if (xt(), s(), (l || e.sp) && !Zt(e) && Rr(e), l) {
            if (r.then(as, as), t) return r.then((a) => {
              cs(e, a);
            }).catch((a) => {
              Ci(a, e, 0);
            });
            e.asyncDep = r;
          } else cs(e, r);
        } else ol(e);
      }
      function cs(e, t, n) {
        V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = Sr(t)), ol(e);
      }
      function ol(e, t, n) {
        const i = e.type;
        e.render || (e.render = i.render || rt);
        {
          const o = Bn(e);
          yt();
          try {
            Qa(e);
          } finally {
            xt(), o();
          }
        }
      }
      const Ic = {
        get(e, t) {
          return Te(e, "get", ""), e[t];
        }
      };
      function Nc(e) {
        const t = (n) => {
          e.exposed = n || {};
        };
        return {
          attrs: new Proxy(e.attrs, Ic),
          slots: e.slots,
          emit: e.emit,
          expose: t
        };
      }
      function Ri(e) {
        return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Sr(ba(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in mn) return mn[n](e);
          },
          has(t, n) {
            return n in t || n in mn;
          }
        })) : e.proxy;
      }
      function Dc(e, t = true) {
        return V(e) ? e.displayName || e.name : e.name || t && e.__name;
      }
      function Hc(e) {
        return V(e) && "__vccOpts" in e;
      }
      const ke = (e, t) => Pa(e, t, En);
      function Lc(e, t, n) {
        const i = arguments.length;
        return i === 2 ? le(t) && !z(t) ? An(t) ? Z(e, null, [
          t
        ]) : Z(e, t) : Z(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && An(n) && (n = [
          n
        ]), Z(e, t, n));
      }
      const kc = "3.5.16";
      let ao;
      const us = typeof window < "u" && window.trustedTypes;
      if (us) try {
        ao = us.createPolicy("vue", {
          createHTML: (e) => e
        });
      } catch {
      }
      const sl = ao ? (e) => ao.createHTML(e) : (e) => e, Fc = "http://www.w3.org/2000/svg", zc = "http://www.w3.org/1998/Math/MathML", pt = typeof document < "u" ? document : null, fs = pt && pt.createElement("template"), Bc = {
        insert: (e, t, n) => {
          t.insertBefore(e, n || null);
        },
        remove: (e) => {
          const t = e.parentNode;
          t && t.removeChild(e);
        },
        createElement: (e, t, n, i) => {
          const o = t === "svg" ? pt.createElementNS(Fc, e) : t === "mathml" ? pt.createElementNS(zc, e) : n ? pt.createElement(e, {
            is: n
          }) : pt.createElement(e);
          return e === "select" && i && i.multiple != null && o.setAttribute("multiple", i.multiple), o;
        },
        createText: (e) => pt.createTextNode(e),
        createComment: (e) => pt.createComment(e),
        setText: (e, t) => {
          e.nodeValue = t;
        },
        setElementText: (e, t) => {
          e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => pt.querySelector(e),
        setScopeId(e, t) {
          e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, i, o, s) {
          const r = n ? n.previousSibling : t.lastChild;
          if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === s || !(o = o.nextSibling)); ) ;
          else {
            fs.innerHTML = sl(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
            const l = fs.content;
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
      }, jc = Symbol("_vtc");
      function qc(e, t, n) {
        const i = e[jc];
        i && (t = (t ? [
          t,
          ...i
        ] : [
          ...i
        ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
      }
      const ds = Symbol("_vod"), Vc = Symbol("_vsh"), Uc = Symbol(""), Wc = /(^|;)\s*display\s*:/;
      function Kc(e, t, n) {
        const i = e.style, o = _e(n);
        let s = false;
        if (n && !o) {
          if (t) if (_e(t)) for (const r of t.split(";")) {
            const l = r.slice(0, r.indexOf(":")).trim();
            n[l] == null && ni(i, l, "");
          }
          else for (const r in t) n[r] == null && ni(i, r, "");
          for (const r in n) r === "display" && (s = true), ni(i, r, n[r]);
        } else if (o) {
          if (t !== n) {
            const r = i[Uc];
            r && (n += ";" + r), i.cssText = n, s = Wc.test(n);
          }
        } else t && e.removeAttribute("style");
        ds in e && (e[ds] = s ? i.display : "", e[Vc] && (i.display = "none"));
      }
      const ps = /\s*!important$/;
      function ni(e, t, n) {
        if (z(n)) n.forEach((i) => ni(e, t, i));
        else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
        else {
          const i = Gc(e, t);
          ps.test(n) ? e.setProperty(Ht(i), n.replace(ps, ""), "important") : e[i] = n;
        }
      }
      const hs = [
        "Webkit",
        "Moz",
        "ms"
      ], Gi = {};
      function Gc(e, t) {
        const n = Gi[t];
        if (n) return n;
        let i = Ve(t);
        if (i !== "filter" && i in e) return Gi[t] = i;
        i = $i(i);
        for (let o = 0; o < hs.length; o++) {
          const s = hs[o] + i;
          if (s in e) return Gi[t] = s;
        }
        return t;
      }
      const gs = "http://www.w3.org/1999/xlink";
      function _s(e, t, n, i, o, s = Yl(t)) {
        i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(gs, t.slice(6, t.length)) : e.setAttributeNS(gs, t, n) : n == null || s && !or(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Je(n) ? String(n) : n);
      }
      function ms(e, t, n, i, o) {
        if (t === "innerHTML" || t === "textContent") {
          n != null && (e[t] = t === "innerHTML" ? sl(n) : n);
          return;
        }
        const s = e.tagName;
        if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
          const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
          (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
          return;
        }
        let r = false;
        if (n === "" || n == null) {
          const l = typeof e[t];
          l === "boolean" ? n = or(n) : n == null && l === "string" ? (n = "", r = true) : l === "number" && (n = 0, r = true);
        }
        try {
          e[t] = n;
        } catch {
        }
        r && e.removeAttribute(o || t);
      }
      function Et(e, t, n, i) {
        e.addEventListener(t, n, i);
      }
      function Yc(e, t, n, i) {
        e.removeEventListener(t, n, i);
      }
      const ws = Symbol("_vei");
      function Xc(e, t, n, i, o = null) {
        const s = e[ws] || (e[ws] = {}), r = s[t];
        if (i && r) r.value = i;
        else {
          const [l, a] = Jc(t);
          if (i) {
            const u = s[t] = eu(i, o);
            Et(e, l, u, a);
          } else r && (Yc(e, l, r, a), s[t] = void 0);
        }
      }
      const vs = /(?:Once|Passive|Capture)$/;
      function Jc(e) {
        let t;
        if (vs.test(e)) {
          t = {};
          let i;
          for (; i = e.match(vs); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
        }
        return [
          e[2] === ":" ? e.slice(3) : Ht(e.slice(2)),
          t
        ];
      }
      let Yi = 0;
      const Qc = Promise.resolve(), Zc = () => Yi || (Qc.then(() => Yi = 0), Yi = Date.now());
      function eu(e, t) {
        const n = (i) => {
          if (!i._vts) i._vts = Date.now();
          else if (i._vts <= n.attached) return;
          ut(tu(i, n.value), t, 5, [
            i
          ]);
        };
        return n.value = e, n.attached = Zc(), n;
      }
      function tu(e, t) {
        if (z(t)) {
          const n = e.stopImmediatePropagation;
          return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = true;
          }, t.map((i) => (o) => !o._stopped && i && i(o));
        } else return t;
      }
      const bs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nu = (e, t, n, i, o, s) => {
        const r = o === "svg";
        t === "class" ? qc(e, i, r) : t === "style" ? Kc(e, n, i) : bi(t) ? mo(t) || Xc(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : iu(e, t, i, r)) ? (ms(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _s(e, t, i, r, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !_e(i)) ? ms(e, Ve(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), _s(e, t, i, r));
      };
      function iu(e, t, n, i) {
        if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && bs(t) && V(n));
        if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
        if (t === "width" || t === "height") {
          const o = e.tagName;
          if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
        }
        return bs(t) && _e(n) ? false : t in e;
      }
      const sn = (e) => {
        const t = e.props["onUpdate:modelValue"] || false;
        return z(t) ? (n) => Zn(t, n) : t;
      };
      function ou(e) {
        e.target.composing = true;
      }
      function ys(e) {
        const t = e.target;
        t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
      }
      const bt = Symbol("_assign"), lt = {
        created(e, { modifiers: { lazy: t, trim: n, number: i } }, o) {
          e[bt] = sn(o);
          const s = i || o.props && o.props.type === "number";
          Et(e, t ? "change" : "input", (r) => {
            if (r.target.composing) return;
            let l = e.value;
            n && (l = l.trim()), s && (l = ri(l)), e[bt](l);
          }), n && Et(e, "change", () => {
            e.value = e.value.trim();
          }), t || (Et(e, "compositionstart", ou), Et(e, "compositionend", ys), Et(e, "change", ys));
        },
        mounted(e, { value: t }) {
          e.value = t ?? "";
        },
        beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: o, number: s } }, r) {
          if (e[bt] = sn(r), e.composing) return;
          const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? ri(e.value) : e.value, a = t ?? "";
          l !== a && (document.activeElement === e && e.type !== "range" && (i && t === n || o && e.value.trim() === a) || (e.value = a));
        }
      }, Xi = {
        created(e, { value: t }, n) {
          e.checked = nn(t, n.props.value), e[bt] = sn(n), Et(e, "change", () => {
            e[bt](On(e));
          });
        },
        beforeUpdate(e, { value: t, oldValue: n }, i) {
          e[bt] = sn(i), t !== n && (e.checked = nn(t, i.props.value));
        }
      }, Lo = {
        deep: true,
        created(e, { value: t, modifiers: { number: n } }, i) {
          const o = yi(t);
          Et(e, "change", () => {
            const s = Array.prototype.filter.call(e.options, (r) => r.selected).map((r) => n ? ri(On(r)) : On(r));
            e[bt](e.multiple ? o ? new Set(s) : s : s[0]), e._assigning = true, Po(() => {
              e._assigning = false;
            });
          }), e[bt] = sn(i);
        },
        mounted(e, { value: t }) {
          xs(e, t);
        },
        beforeUpdate(e, t, n) {
          e[bt] = sn(n);
        },
        updated(e, { value: t }) {
          e._assigning || xs(e, t);
        }
      };
      function xs(e, t) {
        const n = e.multiple, i = z(t);
        if (!(n && !i && !yi(t))) {
          for (let o = 0, s = e.options.length; o < s; o++) {
            const r = e.options[o], l = On(r);
            if (n) if (i) {
              const a = typeof l;
              a === "string" || a === "number" ? r.selected = t.some((u) => String(u) === String(l)) : r.selected = Jl(t, l) > -1;
            } else r.selected = t.has(l);
            else if (nn(On(r), t)) {
              e.selectedIndex !== o && (e.selectedIndex = o);
              return;
            }
          }
          !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
        }
      }
      function On(e) {
        return "_value" in e ? e._value : e.value;
      }
      const su = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      }, rl = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
        return n[i] || (n[i] = (o) => {
          if (!("key" in o)) return;
          const s = Ht(o.key);
          if (t.some((r) => r === s || su[r] === s)) return e(o);
        });
      }, ru = Pe({
        patchProp: nu
      }, Bc);
      let $s;
      function lu() {
        return $s || ($s = dc(ru));
      }
      const ll = (...e) => {
        const t = lu().createApp(...e), { mount: n } = t;
        return t.mount = (i) => {
          const o = cu(i);
          if (!o) return;
          const s = t._component;
          !V(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
          const r = n(o, false, au(o));
          return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
        }, t;
      };
      function au(e) {
        if (e instanceof SVGElement) return "svg";
        if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
      }
      function cu(e) {
        return _e(e) ? document.querySelector(e) : e;
      }
      const uu = ln({
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
          const n = e, i = t, o = se(false), s = se(50), r = se(false), l = se(0), a = se(), u = ke({
            get() {
              return n.percent ?? s.value;
            },
            set(W) {
              i("update:percent", W), s.value = W;
            }
          });
          u.value = Number(n.initialPercent);
          const c = ke(() => n.isHorizontal ? "top-pane" : "left-pane"), d = ke(() => n.isHorizontal ? "bottom-pane" : "right-pane"), h = ke(() => n.isHorizontal ? `${u.value}% auto 1fr / none` : `none / ${u.value}% auto 1fr`), g = ke(() => o.value ? "none" : "auto");
          function _() {
            r.value || i("splitter-click");
          }
          function v(W) {
            l.value = n.isHorizontal ? W.offsetY : W.offsetX, E();
          }
          function N() {
            l.value = 0, E();
          }
          function E() {
            o.value = true, r.value = false, I();
          }
          function I() {
            document.body.addEventListener("mousemove", $), document.body.addEventListener("touchmove", P), document.body.addEventListener("touchend", H, {
              once: true
            }), document.body.addEventListener("mouseup", H, {
              once: true
            });
          }
          function P(W) {
            o.value && L(W.touches[0]);
          }
          function $(W) {
            W.buttons && W.buttons === 0 && (o.value = false, ne()), o.value && L(W);
          }
          function L(W) {
            let ae = l.value, U = a.value, ce = 0;
            if (n.isHorizontal) {
              for (ae += U.offsetTop; U.offsetParent; ) U = U.offsetParent, ae += U.offsetTop;
              ce = Math.floor((W.pageY - ae) / a.value.offsetHeight * 1e4) / 100;
            } else {
              for (ae += U.offsetLeft; U.offsetParent; ) U = U.offsetParent, ae += U.offsetLeft;
              ce = Math.floor((W.pageX - ae) / a.value.offsetWidth * 1e4) / 100;
            }
            ce > 0 && ce < 100 && (u.value = ce, r.value = true);
          }
          function H() {
            o.value = false, ne();
          }
          function ne() {
            document.body.removeEventListener("touchmove", P), document.body.removeEventListener("mousemove", $);
          }
          return (W, ae) => (R(), D("div", {
            style: vt({
              userSelect: g.value,
              gridTemplate: h.value
            }),
            class: We([
              "vue-splitter",
              {
                horizontal: W.isHorizontal,
                vertical: !W.isHorizontal
              }
            ]),
            ref_key: "containerRef",
            ref: a
          }, [
            T("div", {
              class: We([
                "splitter-pane",
                c.value
              ])
            }, [
              mt(W.$slots, "left-pane"),
              mt(W.$slots, "top-pane")
            ], 2),
            T("div", {
              class: We([
                "splitter",
                {
                  active: o.value
                }
              ]),
              onMousedown: v,
              onTouchstartPassive: N,
              onClick: _
            }, null, 34),
            T("div", {
              class: We([
                "splitter-pane",
                d.value
              ])
            }, [
              mt(W.$slots, "right-pane"),
              mt(W.$slots, "bottom-pane")
            ], 2)
          ], 6));
        }
      }), fu = {
        __name: "SearchResultsItem",
        props: [
          "cfg",
          "item"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t, i = se(null);
          function o(r, l, a) {
            console.log("adding requirement", l, a, r), a != null && a.length > 0 ? (r.add_requirement(l, a), n("cfg_update")) : console.log("attempt to add a requirement without a value, was: ", a);
          }
          function s(r, l) {
            console.log("adding import/export", l, r), r.add_import_export(l), n("cfg_update");
          }
          return (r, l) => {
            const a = zn("tooltip");
            return R(), D(Q, null, [
              G((R(), D("div", null, [
                he(pe(e.item.display), 1)
              ])), [
                [
                  a,
                  "id: " + e.item.id
                ]
              ]),
              T("div", null, [
                G(T("input", {
                  type: "text",
                  size: "4",
                  onKeyup: l[0] || (l[0] = rl((u) => o(e.cfg, e.item.id, i.value), [
                    "enter"
                  ])),
                  "onUpdate:modelValue": l[1] || (l[1] = (u) => i.value = u)
                }, null, 544), [
                  [
                    lt,
                    i.value
                  ]
                ]),
                G((R(), D("button", {
                  onClick: l[2] || (l[2] = (u) => o(e.cfg, e.item.id, i.value))
                }, l[4] || (l[4] = [
                  he("Requirement")
                ]))), [
                  [
                    a,
                    "Add " + e.item.display + " as a requirement, you must specify a non-empty value"
                  ]
                ]),
                G((R(), D("button", {
                  onClick: l[3] || (l[3] = (u) => s(e.cfg, e.item.id))
                }, l[5] || (l[5] = [
                  he("Import/Export")
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
      }, al = "--vc-auto-duration", du = `height var(${al}) cubic-bezier(0.33, 1, 0.68, 1)`, Yn = {
        padding: 0
      }, pu = 300, hu = {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: "0"
      };
      function Ss(e) {
        return e.value ? parseFloat(getComputedStyle(e.value).height) : 0;
      }
      function Ts(e) {
        if (!e.value) return {};
        const { transition: t } = getComputedStyle(e.value);
        return t === "all 0s ease 0s" || t === "all" ? {
          transition: du
        } : {
          transition: t
        };
      }
      function Cs(e) {
        if (!e.value) return true;
        const { transition: t } = getComputedStyle(e.value);
        return typeof window.requestAnimationFrame > "u" || window.matchMedia("(prefers-reduced-motion: reduce)").matches || t.includes("none") || t.includes("height 0s");
      }
      function gu(e = 0) {
        if (e === 0) return 0;
        const t = e / 36, n = Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
        return Number.isFinite(n) ? n : 0;
      }
      const Fe = ln({
        inheritAttrs: true,
        __name: "Collapse",
        props: {
          when: {
            type: Boolean
          },
          baseHeight: {
            default: 0
          },
          as: {
            default: "div"
          }
        },
        emits: [
          "collapse",
          "expand",
          "collapsed",
          "expanded"
        ],
        setup(e, { emit: t }) {
          const n = e, i = t, o = Xo(n, "when"), s = Xo(n, "baseHeight"), r = ke(() => ({
            overflow: "hidden",
            height: `${s.value}px`
          })), l = ke(() => ({
            ...Yn,
            ...s.value === 0 ? {
              display: "none"
            } : r.value
          })), a = se(null), u = se(o.value ? "expanded" : "collapsed"), c = (H) => u.value = H;
          function d() {
            return o.value ? Yn : s.value === 0 ? hu : l.value;
          }
          const h = xr(d()), g = (H) => h.value = H, _ = (H) => g({
            ...h.value,
            ...H
          }), v = se(pu), N = (H) => v.value = H, E = ke(() => ({
            [al]: `${v.value}ms`
          }));
          let I = NaN;
          function P() {
            g(Yn), c("expanded"), i("expanded");
          }
          function $() {
            g(l.value), c("collapsed"), i("collapsed");
          }
          Nr(() => {
            if (!a.value) return;
            const H = gu(a.value.scrollHeight - s.value);
            H > 0 && N(H), !o.value && s.value === 0 && g(l.value);
          }), Ne(o, (H) => {
            if (a.value) if (I = NaN, H) {
              if (Cs(a)) return P();
              c("expanding"), i("expand"), g({
                ...Yn,
                ...r.value,
                ...E.value
              }), requestAnimationFrame(() => {
                if (a.value.scrollHeight === 0) return P();
                I = a.value.scrollHeight, _({
                  ...Ts(a),
                  height: `${I}px`,
                  willChange: "height"
                });
              });
            } else {
              if (Cs(a) || (c("collapsing"), i("collapse"), _({
                ...E.value,
                height: `${a.value.scrollHeight}px`
              }), a.value.scrollHeight === 0)) return $();
              requestAnimationFrame(() => {
                _({
                  ...r.value,
                  ...Ts(a),
                  willChange: "height"
                });
              });
            }
          }), Ne(s, (H) => {
            o.value || (H > 0 ? _({
              display: void 0,
              height: `${H}px`
            }) : _({
              display: "none"
            }));
          });
          function L(H) {
            H.target && H.target === a.value && H.propertyName === "height" && (o.value ? Math.abs(a.value.scrollHeight - Ss(a)) < 1 ? P() : I < a.value.scrollHeight && _({
              height: `${a.value.scrollHeight}px`
            }) : Math.abs(s.value - Ss(a)) < 1 && $());
          }
          return (H, ne) => (R(), Be(Xa(n.as), {
            ref_key: "collapseRef",
            ref: a,
            style: vt(h.value),
            onTransitionend: L,
            "data-collapse": u.value
          }, {
            default: ge(() => [
              mt(H.$slots, "default", ir(No({
                state: u.value
              })))
            ]),
            _: 3
          }, 40, [
            "style",
            "data-collapse"
          ]));
        }
      });
      const _Re = class _Re {
        constructor(t) {
          this.type = t;
        }
        is_intermediate() {
          return this.type == _Re.INTERMEDIATE;
        }
        is_req() {
          return this.type == _Re.REQUIREMENT;
        }
        is_io() {
          return this.type == _Re.IMPORT_EXPORT;
        }
        req_quantity() {
          return null;
        }
      };
      __publicField(_Re, "INTERMEDIATE", "intermediate");
      __publicField(_Re, "IMPORT_EXPORT", "import_export");
      __publicField(_Re, "REQUIREMENT", "requirement");
      let Re = _Re;
      class _u extends Re {
        constructor(t) {
          super(Re.REQUIREMENT), this.req = t;
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
      class Ps extends Re {
        constructor(t) {
          super(Re.IMPORT_EXPORT), this.item = t;
        }
        id() {
          return this.item.id;
        }
        display() {
          return this.item.display;
        }
      }
      class mu extends Re {
        constructor(t) {
          super(Re.INTERMEDIATE), this.item = t;
        }
        id() {
          return this.item.id;
        }
        display() {
          return this.item.display;
        }
      }
      const wu = [
        "disabled"
      ], vu = {
        for: "requirement"
      }, bu = {
        for: "import_export"
      }, yu = {
        for: "intermediate"
      }, xu = {
        __name: "CurrentCfgItem",
        props: [
          "cfg",
          "stack"
        ],
        emits: [
          "cfg_update",
          "make_item",
          "use_item"
        ],
        setup(e, { emit: t }) {
          const n = t, i = se(e.stack.req_quantity()), o = se(e.stack.type);
          return e.stack.is_req() && console.log("stack quantity", e.stack), console.log("stack", e.stack, e.stack.is_req(), e.stack.is_io(), e.stack.is_intermediate()), Ne(o, (s) => {
            switch (console.log("change in type", o, e.stack.id(), "req val", i.value), s) {
              case Re.REQUIREMENT:
                e.cfg.add_requirement(e.stack.id(), i.value), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
                break;
              case Re.IMPORT_EXPORT:
                e.cfg.add_import_export(e.stack.id()), e.cfg.remove_requirement(e.stack.id()), n("cfg_update");
                break;
              case Re.INTERMEDIATE:
                e.cfg.remove_requirement(e.stack.id()), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
            }
          }), Ne(i, (s) => {
            console.log("requirement value updated", e.stack.id(), o.value, s), o.value == "requirement" && (e.cfg.update_requirement(e.stack.id(), s), n("cfg_update"));
          }), (s, r) => {
            const l = zn("tooltip");
            return R(), D(Q, null, [
              G((R(), D("div", null, [
                he(" [icon] " + pe(e.stack.display()), 1)
              ])), [
                [
                  l,
                  "id: " + e.stack.id()
                ]
              ]),
              T("div", null, [
                G((R(), D("button", {
                  onClick: r[0] || (r[0] = (a) => n("make_item", e.stack.id()))
                }, r[6] || (r[6] = [
                  he("Make")
                ]))), [
                  [
                    l,
                    "Search for processes that have " + e.stack.display() + " as an output."
                  ]
                ]),
                G((R(), D("button", {
                  onClick: r[1] || (r[1] = (a) => n("use_item", e.stack.id()))
                }, r[7] || (r[7] = [
                  he("Use")
                ]))), [
                  [
                    l,
                    "Search for processes that have " + e.stack.display() + " as an input."
                  ]
                ]),
                r[11] || (r[11] = he(" \xA0 ")),
                G(T("input", {
                  type: "text",
                  size: "5",
                  "onUpdate:modelValue": r[2] || (r[2] = (a) => i.value = a),
                  disabled: o.value != oe(Re).REQUIREMENT
                }, null, 8, wu), [
                  [
                    lt,
                    i.value,
                    void 0,
                    {
                      lazy: true,
                      number: true
                    }
                  ],
                  [
                    l,
                    "Set a requirement of X per second for " + e.stack.display() + (o.value == oe(Re).REQUIREMENT ? "" : " (disabled because " + e.stack.display() + " is not marked as a requirement)")
                  ]
                ]),
                r[12] || (r[12] = he(" \xA0 ")),
                G(T("input", {
                  type: "radio",
                  id: "requirement",
                  value: "requirement",
                  "onUpdate:modelValue": r[3] || (r[3] = (a) => o.value = a)
                }, null, 512), [
                  [
                    Xi,
                    o.value
                  ]
                ]),
                G((R(), D("label", vu, r[8] || (r[8] = [
                  he(" Requirement")
                ]))), [
                  [
                    l,
                    "Set " + e.stack.display() + " as a requirement"
                  ]
                ]),
                r[13] || (r[13] = he(" \xA0 ")),
                G(T("input", {
                  type: "radio",
                  id: "import_export",
                  value: "import_export",
                  "onUpdate:modelValue": r[4] || (r[4] = (a) => o.value = a)
                }, null, 512), [
                  [
                    Xi,
                    o.value
                  ]
                ]),
                G((R(), D("label", bu, r[9] || (r[9] = [
                  he(" Import/Export")
                ]))), [
                  [
                    l,
                    "Use an infinite source or sink for " + e.stack.display()
                  ]
                ]),
                r[14] || (r[14] = he(" \xA0 ")),
                T("span", null, [
                  G(T("input", {
                    type: "radio",
                    id: "intermediate",
                    value: "intermediate",
                    "onUpdate:modelValue": r[5] || (r[5] = (a) => o.value = a)
                  }, null, 512), [
                    [
                      Xi,
                      o.value
                    ]
                  ]),
                  G((R(), D("label", yu, r[10] || (r[10] = [
                    he(" Intermediate")
                  ]))), [
                    [
                      l,
                      e.stack.display() + " should have a net zero produce & consume"
                    ]
                  ])
                ])
              ])
            ], 64);
          };
        }
      };
      class cl {
        constructor(t, n, i) {
          this.duration = t, this.input = n, this.output = i;
        }
      }
      const jn = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [i, o] of t) n[i] = o;
        return n;
      }, $u = {
        id: "name"
      }, Su = {
        id: "in"
      }, Tu = {
        class: "proc_io"
      }, Cu = {
        id: "out"
      }, Pu = {
        class: "proc_io"
      }, Au = {
        class: "proc_buttons"
      }, Eu = [
        "value"
      ], Ou = {
        __name: "CurrentCfgProc",
        props: [
          "active_proc",
          "cfg"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t, i = e.active_proc.process, o = kn(new cl(e.active_proc.duration_multiplier, e.active_proc.inputs_multiplier, e.active_proc.outputs_multiplier)), s = se(false), r = ke(() => e.cfg.factories_for_process(i.id)), l = se(null), a = ke({
            get() {
              if (l.value == null) return e.active_proc.factory.id;
              if (l.value != null) return l.value;
            },
            set(c) {
              l.value = c, e.cfg.update_modifiers(i.id, a.value, Number(o.duration), Number(o.input), Number(o.output)), console.log(c, i.id, r.value, e.cfg.factories_for_process(i.id)), n("cfg_update");
            }
          });
          function u(c, d) {
            console.log("removing", d), c.remove_process(d), n("cfg_update");
          }
          return Ne(o, (c) => {
            console.log("modifiers changed", i.id, c, Number(c.duration), Number(c.input), Number(c.output)), e.cfg.update_modifiers(i.id, a.value, Number(c.duration), Number(c.input), Number(c.output)), n("cfg_update");
          }), (c, d) => {
            const h = zn("tooltip");
            return R(), D(Q, null, [
              G((R(), D("div", $u, [
                he(pe(oe(i).display), 1)
              ])), [
                [
                  h,
                  "id: " + oe(i).id
                ]
              ]),
              T("div", null, pe(oe(i).duration) + "s ", 1),
              T("div", Su, [
                (R(true), D(Q, null, Ge(oe(i).inputs, (g) => (R(), D("div", Tu, [
                  T("div", null, pe(g.quantity), 1),
                  G((R(), D("div", null, [
                    he(pe(g.item.display), 1)
                  ])), [
                    [
                      h,
                      "id: " + g.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              T("div", Cu, [
                (R(true), D(Q, null, Ge(oe(i).outputs, (g) => (R(), D("div", Pu, [
                  T("div", null, pe(g.quantity), 1),
                  G((R(), D("div", null, [
                    he(pe(g.item.display), 1)
                  ])), [
                    [
                      h,
                      "id: " + g.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              T("div", Au, [
                T("button", {
                  onClick: d[0] || (d[0] = (g) => u(e.cfg, oe(i).id))
                }, "Remove")
              ]),
              T("div", null, [
                d[6] || (d[6] = he("modifiers ")),
                T("button", {
                  onClick: d[1] || (d[1] = (g) => s.value = !s.value)
                }, pe(s.value ? "\\/" : ">"), 1)
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: s.value
              }, {
                default: ge(() => [
                  G(T("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": d[2] || (d[2] = (g) => o.duration = g)
                  }, null, 512), [
                    [
                      lt,
                      o.duration,
                      void 0,
                      {
                        lazy: true,
                        number: true
                      }
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: s.value
              }, {
                default: ge(() => [
                  G(T("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": d[3] || (d[3] = (g) => o.input = g)
                  }, null, 512), [
                    [
                      lt,
                      o.input,
                      void 0,
                      {
                        lazy: true,
                        number: true
                      }
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: s.value
              }, {
                default: ge(() => [
                  G(T("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": d[4] || (d[4] = (g) => o.output = g)
                  }, null, 512), [
                    [
                      lt,
                      o.output,
                      void 0,
                      {
                        lazy: true,
                        number: true
                      }
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: s.value
              }, {
                default: ge(() => d[7] || (d[7] = [
                  T("span", null, "factory", -1)
                ])),
                _: 1,
                __: [
                  7
                ]
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "factory_select",
                when: s.value
              }, {
                default: ge(() => [
                  G(T("select", {
                    "onUpdate:modelValue": d[5] || (d[5] = (g) => a.value = g)
                  }, [
                    d[8] || (d[8] = T("option", {
                      disabled: "",
                      value: ""
                    }, "Select a factory type", -1)),
                    (R(true), D(Q, null, Ge(r.value, (g) => (R(), D("option", {
                      key: g.id,
                      value: g.id
                    }, pe(g.display), 9, Eu))), 128))
                  ], 512), [
                    [
                      Lo,
                      a.value
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              d[9] || (d[9] = T("hr", {
                class: "proc_fw"
              }, null, -1))
            ], 64);
          };
        }
      }, Ru = jn(Ou, [
        [
          "__scopeId",
          "data-v-c8726187"
        ]
      ]), Mu = {
        class: "items"
      }, Iu = {
        key: 0,
        class: "items_fw"
      }, Nu = {
        key: 0,
        class: "proc"
      }, Du = {
        __name: "CurrentConfiguration",
        props: [
          "cfg"
        ],
        emits: [
          "cfg_update",
          "make_item",
          "use_item"
        ],
        setup(e, { emit: t }) {
          const n = t, i = se(e.cfg.can_render() || e.cfg.get_requirements().length > 0);
          function o() {
            console.log("CC handle_cfg_update"), n("cfg_update");
          }
          function s(a) {
            console.log("CC handle make item", a), n("make_item", a);
          }
          function r(a) {
            console.log("CC handle use item", a), n("use_item", a);
          }
          function l(a) {
            let u = a.get_requirements().map((_) => (console.log("requirement", _.item.id, _.quantity), _)).map((_) => new _u(_)).map((_) => (console.log("  ", _), _)), c = a.get_imports_exports().map((_) => (console.log("io", _.id), _)).map((_) => new Ps(_)).map((_) => (console.log("  ", _), _)), d = a.get_intermediate_items().map((_) => (console.log("intermediate", _.id), _)).map((_) => new mu(_)).map((_) => (console.log("  ", _), _)), h = a.get_defaulted_items().map((_) => (console.log("defaulted", _.id), _)).map((_) => new Ps(_)).map((_) => (console.log("  ", _), _));
            return u.concat(c).concat(d).concat(h).sort((_, v) => _.display().localeCompare(v.display()));
          }
          return (a, u) => (R(), D(Q, null, [
            T("div", null, [
              T("h2", null, [
                u[2] || (u[2] = he("Current Configuration ")),
                T("button", {
                  onClick: u[0] || (u[0] = (c) => i.value = !i.value)
                }, pe(i.value ? "\\/" : ">"), 1)
              ])
            ]),
            Z(oe(Fe), {
              class: "input_options",
              when: i.value
            }, {
              default: ge(() => [
                u[8] || (u[8] = T("h3", null, "Data Set", -1)),
                u[9] || (u[9] = T("hr", null, null, -1)),
                T("span", null, pe(e.cfg.get_current_data_set() ? e.cfg.get_current_data_set().description() : ""), 1),
                u[10] || (u[10] = T("br", null, null, -1)),
                u[11] || (u[11] = T("br", null, null, -1)),
                u[12] || (u[12] = T("h3", null, "Items", -1)),
                T("div", Mu, [
                  l(e.cfg).length > 0 ? (R(), D("hr", Iu)) : _t("", true),
                  (R(true), D(Q, null, Ge(l(e.cfg), (c) => (R(), Be(xu, {
                    onCfg_update: o,
                    onUse_item: r,
                    onMake_item: s,
                    stack: c,
                    cfg: e.cfg
                  }, null, 8, [
                    "stack",
                    "cfg"
                  ]))), 256))
                ]),
                u[13] || (u[13] = T("br", null, null, -1)),
                u[14] || (u[14] = T("br", null, null, -1)),
                u[15] || (u[15] = T("h3", null, "Processes", -1)),
                e.cfg.get_processes().length > 0 ? (R(), D("div", Nu, [
                  u[3] || (u[3] = T("hr", {
                    class: "proc_fw"
                  }, null, -1)),
                  u[4] || (u[4] = T("div", {
                    class: "proc_header_d"
                  }, "Duration", -1)),
                  u[5] || (u[5] = T("div", {
                    class: "proc_header_i"
                  }, "Inputs", -1)),
                  u[6] || (u[6] = T("div", {
                    class: "proc_header_o"
                  }, "Outputs", -1)),
                  u[7] || (u[7] = T("hr", {
                    class: "proc_fw"
                  }, null, -1)),
                  (R(true), D(Q, null, Ge(e.cfg.get_processes(), (c) => (R(), Be(Ru, {
                    onCfg_update: u[1] || (u[1] = (d) => o()),
                    active_proc: c,
                    cfg: e.cfg
                  }, null, 8, [
                    "active_proc",
                    "cfg"
                  ]))), 256))
                ])) : _t("", true)
              ]),
              _: 1,
              __: [
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ]
            }, 8, [
              "when"
            ])
          ], 64));
        }
      }, Hu = jn(Du, [
        [
          "__scopeId",
          "data-v-0d971027"
        ]
      ]), Lu = {
        id: "name"
      }, ku = {
        id: "in"
      }, Fu = {
        class: "proc_io"
      }, zu = {
        id: "out"
      }, Bu = {
        class: "proc_io"
      }, ju = {
        class: "proc_buttons"
      }, qu = [
        "value"
      ], Vu = {
        __name: "SearchResultsProcess",
        props: [
          "cfg",
          "proc"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t, i = kn(new cl(1, 1, 1));
          function o(u, c, d, h) {
            console.log("adding process", c, h, u);
            let g = u.add_process(c, d, h.duration, h.input, h.output);
            console.log("add process result", g, u, u.get_processes()), n("cfg_update");
          }
          const s = ke(() => e.cfg.factories_for_process(e.proc.id)), r = se(null), l = ke({
            get() {
              if (r.value != null) return r.value;
              if (s.value.length > 0) return s.value[0].id;
            },
            set(u) {
              r.value = u, console.log(u, e.proc.id, s.value, e.cfg.factories_for_process(e.proc.id));
            }
          });
          console.log("found factories for process", e.proc.id, l.value, s.value);
          const a = se(false);
          return (u, c) => {
            const d = zn("tooltip");
            return R(), D(Q, null, [
              G((R(), D("div", Lu, [
                he(pe(e.proc.display), 1)
              ])), [
                [
                  d,
                  "id: " + e.proc.id
                ]
              ]),
              T("div", null, pe(e.proc.duration) + "s ", 1),
              T("div", ku, [
                (R(true), D(Q, null, Ge(e.proc.inputs, (h) => (R(), D("div", Fu, [
                  T("div", null, pe(h.quantity), 1),
                  G((R(), D("div", null, [
                    he(pe(h.item.display), 1)
                  ])), [
                    [
                      d,
                      "id: " + h.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              T("div", zu, [
                (R(true), D(Q, null, Ge(e.proc.outputs, (h) => (R(), D("div", Bu, [
                  T("div", null, pe(h.quantity), 1),
                  G((R(), D("div", null, [
                    he(pe(h.item.display), 1)
                  ])), [
                    [
                      d,
                      "id: " + h.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              T("div", ju, [
                T("button", {
                  onClick: c[0] || (c[0] = (h) => o(e.cfg, e.proc.id, l.value, i))
                }, "Add")
              ]),
              T("div", null, [
                c[6] || (c[6] = he("modifiers ")),
                T("button", {
                  onClick: c[1] || (c[1] = (h) => a.value = !a.value)
                }, pe(a.value ? "\\/" : ">"), 1)
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: a.value
              }, {
                default: ge(() => [
                  G(T("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": c[2] || (c[2] = (h) => i.duration = h)
                  }, null, 512), [
                    [
                      lt,
                      i.duration,
                      void 0,
                      {
                        lazy: true,
                        number: true
                      }
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: a.value
              }, {
                default: ge(() => [
                  G(T("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": c[3] || (c[3] = (h) => i.input = h)
                  }, null, 512), [
                    [
                      lt,
                      i.input,
                      void 0,
                      {
                        lazy: true,
                        number: true
                      }
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: a.value
              }, {
                default: ge(() => [
                  G(T("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": c[4] || (c[4] = (h) => i.output = h)
                  }, null, 512), [
                    [
                      lt,
                      i.output,
                      void 0,
                      {
                        lazy: true,
                        number: true
                      }
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: a.value
              }, {
                default: ge(() => c[7] || (c[7] = [
                  T("span", null, "factory", -1)
                ])),
                _: 1,
                __: [
                  7
                ]
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "factory_select",
                when: a.value
              }, {
                default: ge(() => [
                  G(T("select", {
                    "onUpdate:modelValue": c[5] || (c[5] = (h) => l.value = h)
                  }, [
                    c[8] || (c[8] = T("option", {
                      disabled: "",
                      value: ""
                    }, "Select a factory type", -1)),
                    (R(true), D(Q, null, Ge(s.value, (h) => (R(), D("option", {
                      key: h.id,
                      value: h.id
                    }, pe(h.display), 9, qu))), 128))
                  ], 512), [
                    [
                      Lo,
                      l.value
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              c[9] || (c[9] = T("hr", {
                class: "proc_fw"
              }, null, -1))
            ], 64);
          };
        }
      }, Uu = jn(Vu, [
        [
          "__scopeId",
          "data-v-ac6d32d1"
        ]
      ]), Wu = "/assets/proc_rs_bg-CWEeSvDk.wasm", Ku = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const i = t.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(i, "base64");
          else if (typeof atob == "function") {
            const s = atob(i);
            o = new Uint8Array(s.length);
            for (let r = 0; r < s.length; r++) o[r] = s.charCodeAt(r);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(o, e);
        } else {
          const i = await fetch(t), o = i.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(i, e);
          else {
            const s = await i.arrayBuffer();
            n = await WebAssembly.instantiate(s, e);
          }
        }
        return n.instance.exports;
      };
      let S;
      function Gu(e) {
        S = e;
      }
      function qn(e) {
        const t = S.__externref_table_alloc();
        return S.__wbindgen_export_2.set(t, e), t;
      }
      function Mi(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          const i = qn(n);
          S.__wbindgen_exn_store(i);
        }
      }
      const Yu = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let ul = new Yu("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      ul.decode();
      let Xn = null;
      function ii() {
        return (Xn === null || Xn.byteLength === 0) && (Xn = new Uint8Array(S.memory.buffer)), Xn;
      }
      function Nt(e, t) {
        return e = e >>> 0, ul.decode(ii().subarray(e, e + t));
      }
      function Vn(e) {
        return e == null;
      }
      const As = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => {
        S.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
      });
      function Xu(e, t, n, i) {
        const o = {
          a: e,
          b: t,
          cnt: 1,
          dtor: n
        }, s = (...r) => {
          o.cnt++;
          const l = o.a;
          o.a = 0;
          try {
            return i(l, o.b, ...r);
          } finally {
            --o.cnt === 0 ? (S.__wbindgen_export_3.get(o.dtor)(l, o.b), As.unregister(o)) : o.a = l;
          }
        };
        return s.original = o, As.register(s, o, o), s;
      }
      function co(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
          const o = e.description;
          return o == null ? "Symbol" : `Symbol(${o})`;
        }
        if (t == "function") {
          const o = e.name;
          return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
        }
        if (Array.isArray(e)) {
          const o = e.length;
          let s = "[";
          o > 0 && (s += co(e[0]));
          for (let r = 1; r < o; r++) s += ", " + co(e[r]);
          return s += "]", s;
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
      let me = 0;
      const Ju = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let oi = new Ju("utf-8");
      const Qu = typeof oi.encodeInto == "function" ? function(e, t) {
        return oi.encodeInto(e, t);
      } : function(e, t) {
        const n = oi.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function ve(e, t, n) {
        if (n === void 0) {
          const l = oi.encode(e), a = t(l.length, 1) >>> 0;
          return ii().subarray(a, a + l.length).set(l), me = l.length, a;
        }
        let i = e.length, o = t(i, 1) >>> 0;
        const s = ii();
        let r = 0;
        for (; r < i; r++) {
          const l = e.charCodeAt(r);
          if (l > 127) break;
          s[o + r] = l;
        }
        if (r !== i) {
          r !== 0 && (e = e.slice(r)), o = n(o, i, i = r + e.length * 3, 1) >>> 0;
          const l = ii().subarray(o + r, o + i), a = Qu(e, l);
          r += a.written, o = n(o, i, r, 1) >>> 0;
        }
        return me = r, o;
      }
      let Kt = null;
      function Rn() {
        return (Kt === null || Kt.buffer.detached === true || Kt.buffer.detached === void 0 && Kt.buffer !== S.memory.buffer) && (Kt = new DataView(S.memory.buffer)), Kt;
      }
      function q(e) {
        const t = S.__wbindgen_export_2.get(e);
        return S.__externref_table_dealloc(e), t;
      }
      function Zu(e, t) {
        e = e >>> 0;
        const n = Rn(), i = [];
        for (let o = e; o < e + 4 * t; o += 4) i.push(S.__wbindgen_export_2.get(n.getUint32(o, true)));
        return S.__externref_drop_slice(e, t), i;
      }
      function ef() {
        const e = S.dataset_all();
        var t = Zu(e[0], e[1]).slice();
        return S.__wbindgen_free(e[0], e[1] * 4, 4), t;
      }
      function tf(e, t, n) {
        S.closure725_externref_shim(e, t, n);
      }
      function nf(e, t, n, i) {
        S.closure737_externref_shim(e, t, n, i);
      }
      const of = [
        "same-origin",
        "no-cors",
        "cors",
        "navigate"
      ], Es = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => S.__wbg_datasetconf_free(e >>> 0, 1));
      class Ii {
        static __wrap(t) {
          t = t >>> 0;
          const n = Object.create(Ii.prototype);
          return n.__wbg_ptr = t, Es.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Es.unregister(this), t;
        }
        free() {
          const t = this.__destroy_into_raw();
          S.__wbg_datasetconf_free(t, 0);
        }
        get style() {
          return S.__wbg_get_datasetconf_style(this.__wbg_ptr);
        }
        set style(t) {
          S.__wbg_set_datasetconf_style(this.__wbg_ptr, t);
        }
        id() {
          let t, n;
          try {
            const i = S.datasetconf_id(this.__wbg_ptr);
            return t = i[0], n = i[1], Nt(i[0], i[1]);
          } finally {
            S.__wbindgen_free(t, n, 1);
          }
        }
        description() {
          let t, n;
          try {
            const i = S.datasetconf_description(this.__wbg_ptr);
            return t = i[0], n = i[1], Nt(i[0], i[1]);
          } finally {
            S.__wbindgen_free(t, n, 1);
          }
        }
      }
      const Os = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => S.__wbg_graphconfiguration_free(e >>> 0, 1));
      class sf {
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Os.unregister(this), t;
        }
        free() {
          const t = this.__destroy_into_raw();
          S.__wbg_graphconfiguration_free(t, 0);
        }
        constructor() {
          const t = S.graphconfiguration_new();
          return this.__wbg_ptr = t >>> 0, Os.register(this, this.__wbg_ptr, this), this;
        }
        get_current_data_set() {
          const t = S.graphconfiguration_get_current_data_set(this.__wbg_ptr);
          return t === 0 ? void 0 : Ii.__wrap(t);
        }
        can_render() {
          const t = S.graphconfiguration_can_render(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        add_requirement(t, n) {
          const i = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), o = me, s = S.graphconfiguration_add_requirement(this.__wbg_ptr, i, o, n);
          if (s[2]) throw q(s[1]);
          return q(s[0]);
        }
        update_requirement(t, n) {
          const i = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), o = me, s = S.graphconfiguration_update_requirement(this.__wbg_ptr, i, o, n);
          if (s[2]) throw q(s[1]);
          return q(s[0]);
        }
        remove_requirement(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_remove_requirement(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        get_requirements() {
          const t = S.graphconfiguration_get_requirements(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        add_import_export(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_add_import_export(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        remove_import_export(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_remove_import_export(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        get_imports_exports() {
          const t = S.graphconfiguration_get_imports_exports(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        add_process(t, n, i, o, s) {
          const r = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), l = me, a = ve(n, S.__wbindgen_malloc, S.__wbindgen_realloc), u = me, c = S.graphconfiguration_add_process(this.__wbg_ptr, r, l, a, u, i, o, s);
          if (c[2]) throw q(c[1]);
          return q(c[0]);
        }
        remove_process(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_remove_process(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        update_modifiers(t, n, i, o, s) {
          const r = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), l = me, a = ve(n, S.__wbindgen_malloc, S.__wbindgen_realloc), u = me, c = S.graphconfiguration_update_modifiers(this.__wbg_ptr, r, l, a, u, i, o, s);
          if (c[2]) throw q(c[1]);
          return q(c[0]);
        }
        get_processes() {
          const t = S.graphconfiguration_get_processes(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        factories_for_process(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_factories_for_process(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        get_defaulted_items() {
          const t = S.graphconfiguration_get_defaulted_items(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        get_intermediate_items() {
          const t = S.graphconfiguration_get_intermediate_items(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        update_data_set(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me;
          return S.graphconfiguration_update_data_set(this.__wbg_ptr, n, i);
        }
        search_items(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_search_items(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        search_processes(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_search_processes(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        search_processes_by_output(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_search_processes_by_output(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        search_processes_by_input(t) {
          const n = ve(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = me, o = S.graphconfiguration_search_processes_by_input(this.__wbg_ptr, n, i);
          if (o[2]) throw q(o[1]);
          return q(o[0]);
        }
        calculate() {
          S.graphconfiguration_calculate(this.__wbg_ptr);
        }
        to_digraph() {
          const t = S.graphconfiguration_to_digraph(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        get_initial_matrix() {
          const t = S.graphconfiguration_get_initial_matrix(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
        get_reduced_matrix() {
          const t = S.graphconfiguration_get_reduced_matrix(this.__wbg_ptr);
          if (t[2]) throw q(t[1]);
          return q(t[0]);
        }
      }
      typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => S.__wbg_versioned_free(e >>> 0, 1));
      function rf() {
        return Mi(function(e, t) {
          return e.call(t);
        }, arguments);
      }
      function lf() {
        return Mi(function(e, t, n) {
          return e.call(t, n);
        }, arguments);
      }
      function af(e) {
        return Ii.__wrap(e);
      }
      function cf(e, t) {
        return e.fetch(t);
      }
      function uf(e) {
        let t;
        try {
          t = e instanceof Response;
        } catch {
          t = false;
        }
        return t;
      }
      function ff(e) {
        let t;
        try {
          t = e instanceof Window;
        } catch {
          t = false;
        }
        return t;
      }
      function df(e, t) {
        console.log(Nt(e, t));
      }
      function pf(e, t) {
        try {
          var n = {
            a: e,
            b: t
          }, i = (s, r) => {
            const l = n.a;
            n.a = 0;
            try {
              return nf(l, n.b, s, r);
            } finally {
              n.a = l;
            }
          };
          return new Promise(i);
        } finally {
          n.a = n.b = 0;
        }
      }
      function hf() {
        return new Object();
      }
      function gf() {
        return new Array();
      }
      function _f(e, t) {
        return new Function(Nt(e, t));
      }
      function mf() {
        return Mi(function(e, t, n) {
          return new Request(Nt(e, t), n);
        }, arguments);
      }
      function wf(e) {
        queueMicrotask(e);
      }
      function vf(e) {
        return e.queueMicrotask;
      }
      function bf(e) {
        return Promise.resolve(e);
      }
      function yf(e, t, n) {
        e[t >>> 0] = n;
      }
      function xf(e, t, n) {
        e[t] = n;
      }
      function $f(e, t, n) {
        e.method = Nt(t, n);
      }
      function Sf(e, t) {
        e.mode = of[t];
      }
      function Tf() {
        const e = typeof global > "u" ? null : global;
        return Vn(e) ? 0 : qn(e);
      }
      function Cf() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return Vn(e) ? 0 : qn(e);
      }
      function Pf() {
        const e = typeof self > "u" ? null : self;
        return Vn(e) ? 0 : qn(e);
      }
      function Af() {
        const e = typeof window > "u" ? null : window;
        return Vn(e) ? 0 : qn(e);
      }
      function Ef() {
        return Mi(function(e) {
          return e.text();
        }, arguments);
      }
      function Of(e, t) {
        return e.then(t);
      }
      function Rf(e, t, n) {
        return e.then(t, n);
      }
      function Mf(e) {
        return BigInt.asUintN(64, e);
      }
      function If(e) {
        const t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, true) : false;
      }
      function Nf(e, t, n) {
        return Xu(e, t, 726, tf);
      }
      function Df(e, t) {
        const n = co(t), i = ve(n, S.__wbindgen_malloc, S.__wbindgen_realloc), o = me;
        Rn().setInt32(e + 4 * 1, o, true), Rn().setInt32(e + 4 * 0, i, true);
      }
      function Hf() {
        const e = S.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
      }
      function Lf(e) {
        return typeof e == "function";
      }
      function kf(e) {
        return e === void 0;
      }
      function Ff(e) {
        return e;
      }
      function zf(e, t) {
        const n = t, i = typeof n == "string" ? n : void 0;
        var o = Vn(i) ? 0 : ve(i, S.__wbindgen_malloc, S.__wbindgen_realloc), s = me;
        Rn().setInt32(e + 4 * 1, s, true), Rn().setInt32(e + 4 * 0, o, true);
      }
      function Bf(e, t) {
        return Nt(e, t);
      }
      function jf(e, t) {
        throw new Error(Nt(e, t));
      }
      URL = globalThis.URL;
      const B = await Ku({
        "./proc_rs_bg.js": {
          __wbindgen_number_new: Ff,
          __wbg_datasetconf_new: af,
          __wbg_log_c235e79815fc436a: df,
          __wbindgen_string_new: Bf,
          __wbindgen_string_get: zf,
          __wbindgen_bigint_from_u64: Mf,
          __wbg_set_3f1d0b984ed272ed: xf,
          __wbg_instanceof_Window_def73ea0955fc569: ff,
          __wbg_fetch_b7bf320f681242d2: cf,
          __wbg_setmethod_3c5280fe5d890842: $f,
          __wbg_setmode_5dc300b865044b65: Sf,
          __wbg_newwithstrandinit_06c535e0a867c635: mf,
          __wbg_instanceof_Response_f2cc20d9f7dfd644: uf,
          __wbg_text_7805bea50de2af49: Ef,
          __wbg_queueMicrotask_97d92b4fcc8a61c5: wf,
          __wbg_queueMicrotask_d3219def82552485: vf,
          __wbindgen_is_function: Lf,
          __wbindgen_cb_drop: If,
          __wbg_new_78feb108b6472713: gf,
          __wbg_newnoargs_105ed471475aaf50: _f,
          __wbg_call_672a4d21634d4a24: rf,
          __wbg_new_405e22f390576ce2: hf,
          __wbindgen_is_undefined: kf,
          __wbg_set_37837023f3d740e8: yf,
          __wbg_call_7cccdd69e0791ae2: lf,
          __wbg_new_23a2665fac83c611: pf,
          __wbg_resolve_4851785c9c5f573d: bf,
          __wbg_then_44b73946d2fb3e7d: Of,
          __wbg_then_48b406749878a531: Rf,
          __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: Cf,
          __wbg_static_accessor_SELF_37c5d418e4bf5819: Pf,
          __wbg_static_accessor_WINDOW_5de37043a91a9c40: Af,
          __wbg_static_accessor_GLOBAL_88a902d13a557d07: Tf,
          __wbindgen_debug_string: Df,
          __wbindgen_throw: jf,
          __wbindgen_closure_wrapper2842: Nf,
          __wbindgen_init_externref_table: Hf
        }
      }, Wu), qf = B.memory, Vf = B.__wbg_datasetconf_free, Uf = B.__wbg_get_datasetconf_style, Wf = B.__wbg_set_datasetconf_style, Kf = B.datasetconf_id, Gf = B.datasetconf_description, Yf = B.__wbg_versioned_free, Xf = B.stuff, Jf = B.dataset_all, Qf = B.__wbg_graphconfiguration_free, Zf = B.graphconfiguration_new, ed = B.graphconfiguration_get_current_data_set, td = B.graphconfiguration_can_render, nd = B.graphconfiguration_add_requirement, id = B.graphconfiguration_update_requirement, od = B.graphconfiguration_remove_requirement, sd = B.graphconfiguration_get_requirements, rd = B.graphconfiguration_add_import_export, ld = B.graphconfiguration_remove_import_export, ad = B.graphconfiguration_get_imports_exports, cd = B.graphconfiguration_add_process, ud = B.graphconfiguration_remove_process, fd = B.graphconfiguration_update_modifiers, dd = B.graphconfiguration_get_processes, pd = B.graphconfiguration_factories_for_process, hd = B.graphconfiguration_get_defaulted_items, gd = B.graphconfiguration_get_intermediate_items, _d = B.graphconfiguration_update_data_set, md = B.graphconfiguration_search_items, wd = B.graphconfiguration_search_processes, vd = B.graphconfiguration_search_processes_by_output, bd = B.graphconfiguration_search_processes_by_input, yd = B.graphconfiguration_calculate, xd = B.graphconfiguration_to_digraph, $d = B.graphconfiguration_get_initial_matrix, Sd = B.graphconfiguration_get_reduced_matrix, Td = B.__wbindgen_exn_store, Cd = B.__externref_table_alloc, Pd = B.__wbindgen_export_2, Ad = B.__wbindgen_export_3, Ed = B.__wbindgen_malloc, Od = B.__wbindgen_realloc, Rd = B.__wbindgen_free, Md = B.__externref_table_dealloc, Id = B.__externref_drop_slice, Nd = B.closure725_externref_shim, Dd = B.closure737_externref_shim, fl = B.__wbindgen_start, Hd = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_drop_slice: Id,
        __externref_table_alloc: Cd,
        __externref_table_dealloc: Md,
        __wbg_datasetconf_free: Vf,
        __wbg_get_datasetconf_style: Uf,
        __wbg_graphconfiguration_free: Qf,
        __wbg_set_datasetconf_style: Wf,
        __wbg_versioned_free: Yf,
        __wbindgen_exn_store: Td,
        __wbindgen_export_2: Pd,
        __wbindgen_export_3: Ad,
        __wbindgen_free: Rd,
        __wbindgen_malloc: Ed,
        __wbindgen_realloc: Od,
        __wbindgen_start: fl,
        closure725_externref_shim: Nd,
        closure737_externref_shim: Dd,
        dataset_all: Jf,
        datasetconf_description: Gf,
        datasetconf_id: Kf,
        graphconfiguration_add_import_export: rd,
        graphconfiguration_add_process: cd,
        graphconfiguration_add_requirement: nd,
        graphconfiguration_calculate: yd,
        graphconfiguration_can_render: td,
        graphconfiguration_factories_for_process: pd,
        graphconfiguration_get_current_data_set: ed,
        graphconfiguration_get_defaulted_items: hd,
        graphconfiguration_get_imports_exports: ad,
        graphconfiguration_get_initial_matrix: $d,
        graphconfiguration_get_intermediate_items: gd,
        graphconfiguration_get_processes: dd,
        graphconfiguration_get_reduced_matrix: Sd,
        graphconfiguration_get_requirements: sd,
        graphconfiguration_new: Zf,
        graphconfiguration_remove_import_export: ld,
        graphconfiguration_remove_process: ud,
        graphconfiguration_remove_requirement: od,
        graphconfiguration_search_items: md,
        graphconfiguration_search_processes: wd,
        graphconfiguration_search_processes_by_input: bd,
        graphconfiguration_search_processes_by_output: vd,
        graphconfiguration_to_digraph: xd,
        graphconfiguration_update_data_set: _d,
        graphconfiguration_update_modifiers: fd,
        graphconfiguration_update_requirement: id,
        memory: qf,
        stuff: Xf
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Gu(Hd);
      fl();
      const Ld = [
        "value"
      ], kd = [
        "disabled"
      ], Fd = [
        "disabled"
      ], zd = {
        class: "search_results"
      }, Bd = {
        class: "proc"
      }, jd = {
        key: 0,
        class: "proc_fw"
      }, qd = {
        key: 1,
        class: "proc_header_d"
      }, Vd = {
        key: 2,
        class: "proc_header_i"
      }, Ud = {
        key: 3,
        class: "proc_header_o"
      }, Wd = {
        key: 4,
        class: "proc_fw"
      }, Kd = {
        __name: "Configure",
        props: [
          "cfg",
          "cfg_fu"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t, i = e, { _0: o, cfg_fu: s } = Tr(i), { cfg: r, _1: l } = i, a = se(!r.can_render()), u = se(false);
          let c = ef();
          console.log("available data", c);
          const d = se("");
          Ne(d, (P) => {
            console.log("Updating config with", P), r.update_data_set(P);
          });
          const h = se(""), g = se([]);
          Ne(h, (P) => {
            console.log("Item search for", P), P.length >= 3 && (g.value = r.search_items(P), console.log("search results items", g));
          });
          const _ = se(""), v = se([]);
          Ne(_, (P) => {
            console.log("Process search for", P), P.length >= 3 && (v.value = r.search_processes(P), console.log("search results processes", v));
          }), Ne(g, (P) => {
            u.value = v.value.length > 0 || P.length > 0;
          }), Ne(v, (P) => {
            u.value = g.value.length > 0 || P.length > 0;
          });
          function N() {
            console.log("C handle_cfg_update"), _.value = "", v.value = [], h.value = "", g.value = [], a.value = false, n("cfg_update");
          }
          function E(P) {
            console.log("C handle make item", P), v.value = r.search_processes_by_output(P);
          }
          function I(P) {
            console.log("C handle use item", P), v.value = r.search_processes_by_input(P);
          }
          return (P, $) => {
            const L = zn("tooltip");
            return R(), D(Q, null, [
              T("div", null, [
                T("h2", null, [
                  $[4] || ($[4] = he("Get Started ")),
                  T("button", {
                    onClick: $[0] || ($[0] = (H) => a.value = !a.value)
                  }, pe(a.value ? "\\/" : ">"), 1)
                ])
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: a.value
              }, {
                default: ge(() => [
                  G((R(), D("div", null, $[5] || ($[5] = [
                    T("label", {
                      for: "selectDataSet"
                    }, "Data Set:", -1)
                  ]))), [
                    [
                      L,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  G((R(), D("div", null, [
                    G(T("select", {
                      "onUpdate:modelValue": $[1] || ($[1] = (H) => d.value = H)
                    }, [
                      $[6] || ($[6] = T("option", {
                        disabled: "",
                        value: ""
                      }, "Select a data set", -1)),
                      (R(true), D(Q, null, Ge(oe(c), (H) => (R(), D("option", {
                        value: H.id()
                      }, pe(H.description()), 9, Ld))), 256))
                    ], 512), [
                      [
                        Lo,
                        d.value
                      ]
                    ])
                  ])), [
                    [
                      L,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  G((R(), D("div", null, $[7] || ($[7] = [
                    T("label", {
                      for: "item_search"
                    }, " Item Search:", -1)
                  ]))), [
                    [
                      L,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  G((R(), D("div", null, [
                    G(T("input", {
                      id: "item_search",
                      type: "text",
                      disabled: d.value == "",
                      "onUpdate:modelValue": $[2] || ($[2] = (H) => h.value = H)
                    }, null, 8, kd), [
                      [
                        lt,
                        h.value
                      ]
                    ])
                  ])), [
                    [
                      L,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  G((R(), D("div", null, $[8] || ($[8] = [
                    T("label", {
                      for: "process_search"
                    }, " Process Search:", -1)
                  ]))), [
                    [
                      L,
                      "Start by looking for a process that you want to use"
                    ]
                  ]),
                  G((R(), D("div", null, [
                    G(T("input", {
                      id: "process_search",
                      type: "text",
                      disabled: d.value == "",
                      "onUpdate:modelValue": $[3] || ($[3] = (H) => _.value = H)
                    }, null, 8, Fd), [
                      [
                        lt,
                        _.value
                      ]
                    ])
                  ])), [
                    [
                      L,
                      "Start by looking for a process that you want to use"
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              Z(oe(Fe), {
                class: "input_options",
                when: u.value
              }, {
                default: ge(() => [
                  $[9] || ($[9] = T("h2", {
                    class: "input_options_fw"
                  }, "Search Results", -1)),
                  (R(true), D(Q, null, Ge(g.value, (H) => (R(), Be(fu, {
                    onCfg_update: N,
                    item: H,
                    cfg: oe(r)
                  }, null, 8, [
                    "item",
                    "cfg"
                  ]))), 256)),
                  T("div", zd, [
                    T("div", Bd, [
                      v.value.length > 0 ? (R(), D("hr", jd)) : _t("", true),
                      v.value.length > 0 ? (R(), D("div", qd, "Duration")) : _t("", true),
                      v.value.length > 0 ? (R(), D("div", Vd, "Inputs")) : _t("", true),
                      v.value.length > 0 ? (R(), D("div", Ud, "Outputs")) : _t("", true),
                      v.value.length > 0 ? (R(), D("hr", Wd)) : _t("", true),
                      (R(true), D(Q, null, Ge(v.value, (H) => (R(), Be(Uu, {
                        onCfg_update: N,
                        proc: H,
                        cfg: oe(r)
                      }, null, 8, [
                        "proc",
                        "cfg"
                      ]))), 256))
                    ])
                  ])
                ]),
                _: 1,
                __: [
                  9
                ]
              }, 8, [
                "when"
              ]),
              (R(), Be(Hu, {
                onCfg_update: N,
                onUse_item: I,
                onMake_item: E,
                key: oe(s),
                cfg: oe(r)
              }, null, 8, [
                "cfg"
              ]))
            ], 64);
          };
        }
      }, Gd = jn(Kd, [
        [
          "__scopeId",
          "data-v-1d966e51"
        ]
      ]), Yd = {
        __name: "GraphRender",
        props: [
          "cfg",
          "cfg_fu"
        ],
        setup(e) {
          const t = e, { _0: n, cfg_fu: i } = Tr(t), { cfg: o, _1: s } = t;
          return Ne(i, (r) => {
            if (o.can_render()) {
              console.log("rendering"), o.calculate(), console.log("processes", o.get_processes()), console.log("requirements", o.get_requirements()), console.log("import/export", o.get_imports_exports()), console.log("intermediates", o.get_intermediate_items()), console.log("defaulted", o.get_defaulted_items()), console.log("initial", o.get_initial_matrix()), console.log("reduced", o.get_reduced_matrix());
              let l = o.to_digraph();
              console.log("graph", l);
              let a = Viz(l, {
                format: "svg",
                engine: "dot"
              });
              document.getElementById("vis").innerHTML = a.replaceAll(/(fill|stroke)="[^"]+" ?/g, "");
            }
          }), (r, l) => (R(), D(Q, null, [
            l[0] || (l[0] = T("div", {
              id: "vis"
            }, null, -1)),
            T("div", null, pe(oe(i)), 1)
          ], 64));
        }
      }, Xd = {
        __name: "App",
        setup(e) {
          const t = xr(new sf()), n = se(0);
          function i() {
            console.log("A handle_cfg_update"), xa(t), n.value++;
          }
          return (o, s) => (R(), D(Q, null, [
            s[1] || (s[1] = T("header", null, [
              T("h1", null, "Process Calculator")
            ], -1)),
            s[2] || (s[2] = T("br", null, null, -1)),
            T("main", null, [
              Z(oe(uu), null, {
                "left-pane": ge(() => [
                  Z(Gd, {
                    cfg: t.value,
                    cfg_fu: n.value,
                    onCfg_update: s[0] || (s[0] = (r) => i())
                  }, null, 8, [
                    "cfg",
                    "cfg_fu"
                  ])
                ]),
                "right-pane": ge(() => [
                  Z(Yd, {
                    cfg: t.value,
                    cfg_fu: n.value
                  }, null, 8, [
                    "cfg",
                    "cfg_fu"
                  ])
                ]),
                _: 1
              })
            ])
          ], 64));
        }
      }, Jd = jn(Xd, [
        [
          "__scopeId",
          "data-v-67f33bbb"
        ]
      ]), Qd = [
        "top",
        "right",
        "bottom",
        "left"
      ], Rs = [
        "start",
        "end"
      ], Ms = Qd.reduce((e, t) => e.concat(t, t + "-" + Rs[0], t + "-" + Rs[1]), []), Mn = Math.min, jt = Math.max, Zd = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      }, ep = {
        start: "end",
        end: "start"
      };
      function uo(e, t, n) {
        return jt(e, Mn(t, n));
      }
      function Vt(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function ft(e) {
        return e.split("-")[0];
      }
      function Ye(e) {
        return e.split("-")[1];
      }
      function dl(e) {
        return e === "x" ? "y" : "x";
      }
      function ko(e) {
        return e === "y" ? "height" : "width";
      }
      const tp = /* @__PURE__ */ new Set([
        "top",
        "bottom"
      ]);
      function wt(e) {
        return tp.has(ft(e)) ? "y" : "x";
      }
      function Fo(e) {
        return dl(wt(e));
      }
      function pl(e, t, n) {
        n === void 0 && (n = false);
        const i = Ye(e), o = Fo(e), s = ko(o);
        let r = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
        return t.reference[s] > t.floating[s] && (r = _i(r)), [
          r,
          _i(r)
        ];
      }
      function np(e) {
        const t = _i(e);
        return [
          gi(e),
          t,
          gi(t)
        ];
      }
      function gi(e) {
        return e.replace(/start|end/g, (t) => ep[t]);
      }
      const Is = [
        "left",
        "right"
      ], Ns = [
        "right",
        "left"
      ], ip = [
        "top",
        "bottom"
      ], op = [
        "bottom",
        "top"
      ];
      function sp(e, t, n) {
        switch (e) {
          case "top":
          case "bottom":
            return n ? t ? Ns : Is : t ? Is : Ns;
          case "left":
          case "right":
            return t ? ip : op;
          default:
            return [];
        }
      }
      function rp(e, t, n, i) {
        const o = Ye(e);
        let s = sp(ft(e), n === "start", i);
        return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(gi)))), s;
      }
      function _i(e) {
        return e.replace(/left|right|bottom|top/g, (t) => Zd[t]);
      }
      function lp(e) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...e
        };
      }
      function hl(e) {
        return typeof e != "number" ? lp(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        };
      }
      function vn(e) {
        const { x: t, y: n, width: i, height: o } = e;
        return {
          width: i,
          height: o,
          top: n,
          left: t,
          right: t + i,
          bottom: n + o,
          x: t,
          y: n
        };
      }
      function Ds(e, t, n) {
        let { reference: i, floating: o } = e;
        const s = wt(t), r = Fo(t), l = ko(r), a = ft(t), u = s === "y", c = i.x + i.width / 2 - o.width / 2, d = i.y + i.height / 2 - o.height / 2, h = i[l] / 2 - o[l] / 2;
        let g;
        switch (a) {
          case "top":
            g = {
              x: c,
              y: i.y - o.height
            };
            break;
          case "bottom":
            g = {
              x: c,
              y: i.y + i.height
            };
            break;
          case "right":
            g = {
              x: i.x + i.width,
              y: d
            };
            break;
          case "left":
            g = {
              x: i.x - o.width,
              y: d
            };
            break;
          default:
            g = {
              x: i.x,
              y: i.y
            };
        }
        switch (Ye(t)) {
          case "start":
            g[r] -= h * (n && u ? -1 : 1);
            break;
          case "end":
            g[r] += h * (n && u ? -1 : 1);
            break;
        }
        return g;
      }
      const ap = async (e, t, n) => {
        const { placement: i = "bottom", strategy: o = "absolute", middleware: s = [], platform: r } = n, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(t));
        let u = await r.getElementRects({
          reference: e,
          floating: t,
          strategy: o
        }), { x: c, y: d } = Ds(u, i, a), h = i, g = {}, _ = 0;
        for (let v = 0; v < l.length; v++) {
          const { name: N, fn: E } = l[v], { x: I, y: P, data: $, reset: L } = await E({
            x: c,
            y: d,
            initialPlacement: i,
            placement: h,
            strategy: o,
            middlewareData: g,
            rects: u,
            platform: r,
            elements: {
              reference: e,
              floating: t
            }
          });
          c = I ?? c, d = P ?? d, g = {
            ...g,
            [N]: {
              ...g[N],
              ...$
            }
          }, L && _ <= 50 && (_++, typeof L == "object" && (L.placement && (h = L.placement), L.rects && (u = L.rects === true ? await r.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          }) : L.rects), { x: c, y: d } = Ds(u, h, a)), v = -1);
        }
        return {
          x: c,
          y: d,
          placement: h,
          strategy: o,
          middlewareData: g
        };
      };
      async function Ni(e, t) {
        var n;
        t === void 0 && (t = {});
        const { x: i, y: o, platform: s, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: h = false, padding: g = 0 } = Vt(t, e), _ = hl(g), N = l[h ? d === "floating" ? "reference" : "floating" : d], E = vn(await s.getClippingRect({
          element: (n = await (s.isElement == null ? void 0 : s.isElement(N))) == null || n ? N : N.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: a
        })), I = d === "floating" ? {
          x: i,
          y: o,
          width: r.floating.width,
          height: r.floating.height
        } : r.reference, P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), $ = await (s.isElement == null ? void 0 : s.isElement(P)) ? await (s.getScale == null ? void 0 : s.getScale(P)) || {
          x: 1,
          y: 1
        } : {
          x: 1,
          y: 1
        }, L = vn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: I,
          offsetParent: P,
          strategy: a
        }) : I);
        return {
          top: (E.top - L.top + _.top) / $.y,
          bottom: (L.bottom - E.bottom + _.bottom) / $.y,
          left: (E.left - L.left + _.left) / $.x,
          right: (L.right - E.right + _.right) / $.x
        };
      }
      const cp = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          const { x: n, y: i, placement: o, rects: s, platform: r, elements: l, middlewareData: a } = t, { element: u, padding: c = 0 } = Vt(e, t) || {};
          if (u == null) return {};
          const d = hl(c), h = {
            x: n,
            y: i
          }, g = Fo(o), _ = ko(g), v = await r.getDimensions(u), N = g === "y", E = N ? "top" : "left", I = N ? "bottom" : "right", P = N ? "clientHeight" : "clientWidth", $ = s.reference[_] + s.reference[g] - h[g] - s.floating[_], L = h[g] - s.reference[g], H = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
          let ne = H ? H[P] : 0;
          (!ne || !await (r.isElement == null ? void 0 : r.isElement(H))) && (ne = l.floating[P] || s.floating[_]);
          const W = $ / 2 - L / 2, ae = ne / 2 - v[_] / 2 - 1, U = Mn(d[E], ae), ce = Mn(d[I], ae), ye = U, Ae = ne - v[_] - ce, we = ne / 2 - v[_] / 2 + W, Qe = uo(ye, we, Ae), de = !a.arrow && Ye(o) != null && we !== Qe && s.reference[_] / 2 - (we < ye ? U : ce) - v[_] / 2 < 0, Y = de ? we < ye ? we - ye : we - Ae : 0;
          return {
            [g]: h[g] + Y,
            data: {
              [g]: Qe,
              centerOffset: we - Qe - Y,
              ...de && {
                alignmentOffset: Y
              }
            },
            reset: de
          };
        }
      });
      function up(e, t, n) {
        return (e ? [
          ...n.filter((o) => Ye(o) === e),
          ...n.filter((o) => Ye(o) !== e)
        ] : n.filter((o) => ft(o) === o)).filter((o) => e ? Ye(o) === e || (t ? gi(o) !== o : false) : true);
      }
      const fp = function(e) {
        return e === void 0 && (e = {}), {
          name: "autoPlacement",
          options: e,
          async fn(t) {
            var n, i, o;
            const { rects: s, middlewareData: r, placement: l, platform: a, elements: u } = t, { crossAxis: c = false, alignment: d, allowedPlacements: h = Ms, autoAlignment: g = true, ..._ } = Vt(e, t), v = d !== void 0 || h === Ms ? up(d || null, g, h) : h, N = await Ni(t, _), E = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, I = v[E];
            if (I == null) return {};
            const P = pl(I, s, await (a.isRTL == null ? void 0 : a.isRTL(u.floating)));
            if (l !== I) return {
              reset: {
                placement: v[0]
              }
            };
            const $ = [
              N[ft(I)],
              N[P[0]],
              N[P[1]]
            ], L = [
              ...((i = r.autoPlacement) == null ? void 0 : i.overflows) || [],
              {
                placement: I,
                overflows: $
              }
            ], H = v[E + 1];
            if (H) return {
              data: {
                index: E + 1,
                overflows: L
              },
              reset: {
                placement: H
              }
            };
            const ne = L.map((U) => {
              const ce = Ye(U.placement);
              return [
                U.placement,
                ce && c ? U.overflows.slice(0, 2).reduce((ye, Ae) => ye + Ae, 0) : U.overflows[0],
                U.overflows
              ];
            }).sort((U, ce) => U[1] - ce[1]), ae = ((o = ne.filter((U) => U[2].slice(0, Ye(U[0]) ? 2 : 3).every((ce) => ce <= 0))[0]) == null ? void 0 : o[0]) || ne[0][0];
            return ae !== l ? {
              data: {
                index: E + 1,
                overflows: L
              },
              reset: {
                placement: ae
              }
            } : {};
          }
        };
      }, dp = function(e) {
        return e === void 0 && (e = {}), {
          name: "flip",
          options: e,
          async fn(t) {
            var n, i;
            const { placement: o, middlewareData: s, rects: r, initialPlacement: l, platform: a, elements: u } = t, { mainAxis: c = true, crossAxis: d = true, fallbackPlacements: h, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: _ = "none", flipAlignment: v = true, ...N } = Vt(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const E = ft(o), I = wt(l), P = ft(l) === l, $ = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), L = h || (P || !v ? [
              _i(l)
            ] : np(l)), H = _ !== "none";
            !h && H && L.push(...rp(l, v, _, $));
            const ne = [
              l,
              ...L
            ], W = await Ni(t, N), ae = [];
            let U = ((i = s.flip) == null ? void 0 : i.overflows) || [];
            if (c && ae.push(W[E]), d) {
              const we = pl(o, r, $);
              ae.push(W[we[0]], W[we[1]]);
            }
            if (U = [
              ...U,
              {
                placement: o,
                overflows: ae
              }
            ], !ae.every((we) => we <= 0)) {
              var ce, ye;
              const we = (((ce = s.flip) == null ? void 0 : ce.index) || 0) + 1, Qe = ne[we];
              if (Qe && (!(d === "alignment" ? I !== wt(Qe) : false) || U.every((K) => wt(K.placement) === I ? K.overflows[0] > 0 : true))) return {
                data: {
                  index: we,
                  overflows: U
                },
                reset: {
                  placement: Qe
                }
              };
              let de = (ye = U.filter((Y) => Y.overflows[0] <= 0).sort((Y, K) => Y.overflows[1] - K.overflows[1])[0]) == null ? void 0 : ye.placement;
              if (!de) switch (g) {
                case "bestFit": {
                  var Ae;
                  const Y = (Ae = U.filter((K) => {
                    if (H) {
                      const Se = wt(K.placement);
                      return Se === I || Se === "y";
                    }
                    return true;
                  }).map((K) => [
                    K.placement,
                    K.overflows.filter((Se) => Se > 0).reduce((Se, Ut) => Se + Ut, 0)
                  ]).sort((K, Se) => K[1] - Se[1])[0]) == null ? void 0 : Ae[0];
                  Y && (de = Y);
                  break;
                }
                case "initialPlacement":
                  de = l;
                  break;
              }
              if (o !== de) return {
                reset: {
                  placement: de
                }
              };
            }
            return {};
          }
        };
      }, pp = /* @__PURE__ */ new Set([
        "left",
        "top"
      ]);
      async function hp(e, t) {
        const { placement: n, platform: i, elements: o } = e, s = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), r = ft(n), l = Ye(n), a = wt(n) === "y", u = pp.has(r) ? -1 : 1, c = s && a ? -1 : 1, d = Vt(t, e);
        let { mainAxis: h, crossAxis: g, alignmentAxis: _ } = typeof d == "number" ? {
          mainAxis: d,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis
        };
        return l && typeof _ == "number" && (g = l === "end" ? _ * -1 : _), a ? {
          x: g * c,
          y: h * u
        } : {
          x: h * u,
          y: g * c
        };
      }
      const gp = function(e) {
        return e === void 0 && (e = 0), {
          name: "offset",
          options: e,
          async fn(t) {
            var n, i;
            const { x: o, y: s, placement: r, middlewareData: l } = t, a = await hp(t, e);
            return r === ((n = l.offset) == null ? void 0 : n.placement) && (i = l.arrow) != null && i.alignmentOffset ? {} : {
              x: o + a.x,
              y: s + a.y,
              data: {
                ...a,
                placement: r
              }
            };
          }
        };
      }, _p = function(e) {
        return e === void 0 && (e = {}), {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: i, placement: o } = t, { mainAxis: s = true, crossAxis: r = false, limiter: l = {
              fn: (N) => {
                let { x: E, y: I } = N;
                return {
                  x: E,
                  y: I
                };
              }
            }, ...a } = Vt(e, t), u = {
              x: n,
              y: i
            }, c = await Ni(t, a), d = wt(ft(o)), h = dl(d);
            let g = u[h], _ = u[d];
            if (s) {
              const N = h === "y" ? "top" : "left", E = h === "y" ? "bottom" : "right", I = g + c[N], P = g - c[E];
              g = uo(I, g, P);
            }
            if (r) {
              const N = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", I = _ + c[N], P = _ - c[E];
              _ = uo(I, _, P);
            }
            const v = l.fn({
              ...t,
              [h]: g,
              [d]: _
            });
            return {
              ...v,
              data: {
                x: v.x - n,
                y: v.y - i,
                enabled: {
                  [h]: s,
                  [d]: r
                }
              }
            };
          }
        };
      }, mp = function(e) {
        return e === void 0 && (e = {}), {
          name: "size",
          options: e,
          async fn(t) {
            var n, i;
            const { placement: o, rects: s, platform: r, elements: l } = t, { apply: a = () => {
            }, ...u } = Vt(e, t), c = await Ni(t, u), d = ft(o), h = Ye(o), g = wt(o) === "y", { width: _, height: v } = s.floating;
            let N, E;
            d === "top" || d === "bottom" ? (N = d, E = h === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (E = d, N = h === "end" ? "top" : "bottom");
            const I = v - c.top - c.bottom, P = _ - c.left - c.right, $ = Mn(v - c[N], I), L = Mn(_ - c[E], P), H = !t.middlewareData.shift;
            let ne = $, W = L;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (W = P), (i = t.middlewareData.shift) != null && i.enabled.y && (ne = I), H && !h) {
              const U = jt(c.left, 0), ce = jt(c.right, 0), ye = jt(c.top, 0), Ae = jt(c.bottom, 0);
              g ? W = _ - 2 * (U !== 0 || ce !== 0 ? U + ce : jt(c.left, c.right)) : ne = v - 2 * (ye !== 0 || Ae !== 0 ? ye + Ae : jt(c.top, c.bottom));
            }
            await a({
              ...t,
              availableWidth: W,
              availableHeight: ne
            });
            const ae = await r.getDimensions(l.floating);
            return _ !== ae.width || v !== ae.height ? {
              reset: {
                rects: true
              }
            } : {};
          }
        };
      };
      function je(e) {
        var t;
        return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
      }
      function at(e) {
        return je(e).getComputedStyle(e);
      }
      const Hs = Math.min, bn = Math.max, mi = Math.round;
      function gl(e) {
        const t = at(e);
        let n = parseFloat(t.width), i = parseFloat(t.height);
        const o = e.offsetWidth, s = e.offsetHeight, r = mi(n) !== o || mi(i) !== s;
        return r && (n = o, i = s), {
          width: n,
          height: i,
          fallback: r
        };
      }
      function Dt(e) {
        return ml(e) ? (e.nodeName || "").toLowerCase() : "";
      }
      let Jn;
      function _l() {
        if (Jn) return Jn;
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? (Jn = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Jn) : navigator.userAgent;
      }
      function ct(e) {
        return e instanceof je(e).HTMLElement;
      }
      function Rt(e) {
        return e instanceof je(e).Element;
      }
      function ml(e) {
        return e instanceof je(e).Node;
      }
      function Ls(e) {
        return typeof ShadowRoot > "u" ? false : e instanceof je(e).ShadowRoot || e instanceof ShadowRoot;
      }
      function Di(e) {
        const { overflow: t, overflowX: n, overflowY: i, display: o } = at(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && ![
          "inline",
          "contents"
        ].includes(o);
      }
      function wp(e) {
        return [
          "table",
          "td",
          "th"
        ].includes(Dt(e));
      }
      function fo(e) {
        const t = /firefox/i.test(_l()), n = at(e), i = n.backdropFilter || n.WebkitBackdropFilter;
        return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || [
          "transform",
          "perspective"
        ].some((o) => n.willChange.includes(o)) || [
          "paint",
          "layout",
          "strict",
          "content"
        ].some((o) => {
          const s = n.contain;
          return s != null && s.includes(o);
        });
      }
      function wl() {
        return !/^((?!chrome|android).)*safari/i.test(_l());
      }
      function zo(e) {
        return [
          "html",
          "body",
          "#document"
        ].includes(Dt(e));
      }
      function vl(e) {
        return Rt(e) ? e : e.contextElement;
      }
      const bl = {
        x: 1,
        y: 1
      };
      function tn(e) {
        const t = vl(e);
        if (!ct(t)) return bl;
        const n = t.getBoundingClientRect(), { width: i, height: o, fallback: s } = gl(t);
        let r = (s ? mi(n.width) : n.width) / i, l = (s ? mi(n.height) : n.height) / o;
        return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), {
          x: r,
          y: l
        };
      }
      function In(e, t, n, i) {
        var o, s;
        t === void 0 && (t = false), n === void 0 && (n = false);
        const r = e.getBoundingClientRect(), l = vl(e);
        let a = bl;
        t && (i ? Rt(i) && (a = tn(i)) : a = tn(e));
        const u = l ? je(l) : window, c = !wl() && n;
        let d = (r.left + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / a.x, h = (r.top + (c && ((s = u.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / a.y, g = r.width / a.x, _ = r.height / a.y;
        if (l) {
          const v = je(l), N = i && Rt(i) ? je(i) : i;
          let E = v.frameElement;
          for (; E && i && N !== v; ) {
            const I = tn(E), P = E.getBoundingClientRect(), $ = getComputedStyle(E);
            P.x += (E.clientLeft + parseFloat($.paddingLeft)) * I.x, P.y += (E.clientTop + parseFloat($.paddingTop)) * I.y, d *= I.x, h *= I.y, g *= I.x, _ *= I.y, d += P.x, h += P.y, E = je(E).frameElement;
          }
        }
        return {
          width: g,
          height: _,
          top: h,
          right: d + g,
          bottom: h + _,
          left: d,
          x: d,
          y: h
        };
      }
      function Mt(e) {
        return ((ml(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function Hi(e) {
        return Rt(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        };
      }
      function yl(e) {
        return In(Mt(e)).left + Hi(e).scrollLeft;
      }
      function Nn(e) {
        if (Dt(e) === "html") return e;
        const t = e.assignedSlot || e.parentNode || Ls(e) && e.host || Mt(e);
        return Ls(t) ? t.host : t;
      }
      function xl(e) {
        const t = Nn(e);
        return zo(t) ? t.ownerDocument.body : ct(t) && Di(t) ? t : xl(t);
      }
      function wi(e, t) {
        var n;
        t === void 0 && (t = []);
        const i = xl(e), o = i === ((n = e.ownerDocument) == null ? void 0 : n.body), s = je(i);
        return o ? t.concat(s, s.visualViewport || [], Di(i) ? i : []) : t.concat(i, wi(i));
      }
      function ks(e, t, n) {
        return t === "viewport" ? vn(function(i, o) {
          const s = je(i), r = Mt(i), l = s.visualViewport;
          let a = r.clientWidth, u = r.clientHeight, c = 0, d = 0;
          if (l) {
            a = l.width, u = l.height;
            const h = wl();
            (h || !h && o === "fixed") && (c = l.offsetLeft, d = l.offsetTop);
          }
          return {
            width: a,
            height: u,
            x: c,
            y: d
          };
        }(e, n)) : Rt(t) ? vn(function(i, o) {
          const s = In(i, true, o === "fixed"), r = s.top + i.clientTop, l = s.left + i.clientLeft, a = ct(i) ? tn(i) : {
            x: 1,
            y: 1
          };
          return {
            width: i.clientWidth * a.x,
            height: i.clientHeight * a.y,
            x: l * a.x,
            y: r * a.y
          };
        }(t, n)) : vn(function(i) {
          const o = Mt(i), s = Hi(i), r = i.ownerDocument.body, l = bn(o.scrollWidth, o.clientWidth, r.scrollWidth, r.clientWidth), a = bn(o.scrollHeight, o.clientHeight, r.scrollHeight, r.clientHeight);
          let u = -s.scrollLeft + yl(i);
          const c = -s.scrollTop;
          return at(r).direction === "rtl" && (u += bn(o.clientWidth, r.clientWidth) - l), {
            width: l,
            height: a,
            x: u,
            y: c
          };
        }(Mt(e)));
      }
      function Fs(e) {
        return ct(e) && at(e).position !== "fixed" ? e.offsetParent : null;
      }
      function zs(e) {
        const t = je(e);
        let n = Fs(e);
        for (; n && wp(n) && at(n).position === "static"; ) n = Fs(n);
        return n && (Dt(n) === "html" || Dt(n) === "body" && at(n).position === "static" && !fo(n)) ? t : n || function(i) {
          let o = Nn(i);
          for (; ct(o) && !zo(o); ) {
            if (fo(o)) return o;
            o = Nn(o);
          }
          return null;
        }(e) || t;
      }
      function vp(e, t, n) {
        const i = ct(t), o = Mt(t), s = In(e, true, n === "fixed", t);
        let r = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = {
          x: 0,
          y: 0
        };
        if (i || !i && n !== "fixed") if ((Dt(t) !== "body" || Di(o)) && (r = Hi(t)), ct(t)) {
          const a = In(t, true);
          l.x = a.x + t.clientLeft, l.y = a.y + t.clientTop;
        } else o && (l.x = yl(o));
        return {
          x: s.left + r.scrollLeft - l.x,
          y: s.top + r.scrollTop - l.y,
          width: s.width,
          height: s.height
        };
      }
      const bp = {
        getClippingRect: function(e) {
          let { element: t, boundary: n, rootBoundary: i, strategy: o } = e;
          const s = n === "clippingAncestors" ? function(u, c) {
            const d = c.get(u);
            if (d) return d;
            let h = wi(u).filter((N) => Rt(N) && Dt(N) !== "body"), g = null;
            const _ = at(u).position === "fixed";
            let v = _ ? Nn(u) : u;
            for (; Rt(v) && !zo(v); ) {
              const N = at(v), E = fo(v);
              (_ ? E || g : E || N.position !== "static" || !g || ![
                "absolute",
                "fixed"
              ].includes(g.position)) ? g = N : h = h.filter((I) => I !== v), v = Nn(v);
            }
            return c.set(u, h), h;
          }(t, this._c) : [].concat(n), r = [
            ...s,
            i
          ], l = r[0], a = r.reduce((u, c) => {
            const d = ks(t, c, o);
            return u.top = bn(d.top, u.top), u.right = Hs(d.right, u.right), u.bottom = Hs(d.bottom, u.bottom), u.left = bn(d.left, u.left), u;
          }, ks(t, l, o));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let { rect: t, offsetParent: n, strategy: i } = e;
          const o = ct(n), s = Mt(n);
          if (n === s) return t;
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
          if ((o || !o && i !== "fixed") && ((Dt(n) !== "body" || Di(s)) && (r = Hi(n)), ct(n))) {
            const u = In(n);
            l = tn(n), a.x = u.x + n.clientLeft, a.y = u.y + n.clientTop;
          }
          return {
            width: t.width * l.x,
            height: t.height * l.y,
            x: t.x * l.x - r.scrollLeft * l.x + a.x,
            y: t.y * l.y - r.scrollTop * l.y + a.y
          };
        },
        isElement: Rt,
        getDimensions: function(e) {
          return ct(e) ? gl(e) : e.getBoundingClientRect();
        },
        getOffsetParent: zs,
        getDocumentElement: Mt,
        getScale: tn,
        async getElementRects(e) {
          let { reference: t, floating: n, strategy: i } = e;
          const o = this.getOffsetParent || zs, s = this.getDimensions;
          return {
            reference: vp(t, await o(n), i),
            floating: {
              x: 0,
              y: 0,
              ...await s(n)
            }
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => at(e).direction === "rtl"
      }, yp = (e, t, n) => {
        const i = /* @__PURE__ */ new Map(), o = {
          platform: bp,
          ...n
        }, s = {
          ...o.platform,
          _c: i
        };
        return ap(e, t, {
          ...o,
          platform: s
        });
      };
      function $l(e, t) {
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? $l(e[n], t[n]) : e[n] = t[n]);
      }
      const Xe = {
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
        let n = Xe.themes[e] || {}, i;
        do
          i = n[t], typeof i > "u" ? n.$extend ? n = Xe.themes[n.$extend] || {} : (n = null, i = Xe[t]) : n = null;
        while (n);
        return i;
      }
      function xp(e) {
        const t = [
          e
        ];
        let n = Xe.themes[e] || {};
        do
          n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Xe.themes[n.$extend] || {}) : n = null;
        while (n);
        return t.map((i) => `v-popper--theme-${i}`);
      }
      function Bs(e) {
        const t = [
          e
        ];
        let n = Xe.themes[e] || {};
        do
          n.$extend ? (t.push(n.$extend), n = Xe.themes[n.$extend] || {}) : n = null;
        while (n);
        return t;
      }
      let rn = false;
      if (typeof window < "u") {
        rn = false;
        try {
          const e = Object.defineProperty({}, "passive", {
            get() {
              rn = true;
            }
          });
          window.addEventListener("test", null, e);
        } catch {
        }
      }
      let Sl = false;
      typeof window < "u" && typeof navigator < "u" && (Sl = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
      const Tl = [
        "auto",
        "top",
        "bottom",
        "left",
        "right"
      ].reduce((e, t) => e.concat([
        t,
        `${t}-start`,
        `${t}-end`
      ]), []), js = {
        hover: "mouseenter",
        focus: "focus",
        click: "click",
        touch: "touchstart",
        pointer: "pointerdown"
      }, qs = {
        hover: "mouseleave",
        focus: "blur",
        click: "click",
        touch: "touchend",
        pointer: "pointerup"
      };
      function Vs(e, t) {
        const n = e.indexOf(t);
        n !== -1 && e.splice(n, 1);
      }
      function Ji() {
        return new Promise((e) => requestAnimationFrame(() => {
          requestAnimationFrame(e);
        }));
      }
      const Ue = [];
      let zt = null;
      const Us = {};
      function Ws(e) {
        let t = Us[e];
        return t || (t = Us[e] = []), t;
      }
      let po = function() {
      };
      typeof window < "u" && (po = window.Element);
      function J(e) {
        return function(t) {
          return Dn(t.theme, e);
        };
      }
      const Qi = "__floating-vue__popper", Cl = () => ln({
        name: "VPopper",
        provide() {
          return {
            [Qi]: {
              parentPopper: this
            }
          };
        },
        inject: {
          [Qi]: {
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
            default: J("disabled")
          },
          positioningDisabled: {
            type: Boolean,
            default: J("positioningDisabled")
          },
          placement: {
            type: String,
            default: J("placement"),
            validator: (e) => Tl.includes(e)
          },
          delay: {
            type: [
              String,
              Number,
              Object
            ],
            default: J("delay")
          },
          distance: {
            type: [
              Number,
              String
            ],
            default: J("distance")
          },
          skidding: {
            type: [
              Number,
              String
            ],
            default: J("skidding")
          },
          triggers: {
            type: Array,
            default: J("triggers")
          },
          showTriggers: {
            type: [
              Array,
              Function
            ],
            default: J("showTriggers")
          },
          hideTriggers: {
            type: [
              Array,
              Function
            ],
            default: J("hideTriggers")
          },
          popperTriggers: {
            type: Array,
            default: J("popperTriggers")
          },
          popperShowTriggers: {
            type: [
              Array,
              Function
            ],
            default: J("popperShowTriggers")
          },
          popperHideTriggers: {
            type: [
              Array,
              Function
            ],
            default: J("popperHideTriggers")
          },
          container: {
            type: [
              String,
              Object,
              po,
              Boolean
            ],
            default: J("container")
          },
          boundary: {
            type: [
              String,
              po
            ],
            default: J("boundary")
          },
          strategy: {
            type: String,
            validator: (e) => [
              "absolute",
              "fixed"
            ].includes(e),
            default: J("strategy")
          },
          autoHide: {
            type: [
              Boolean,
              Function
            ],
            default: J("autoHide")
          },
          handleResize: {
            type: Boolean,
            default: J("handleResize")
          },
          instantMove: {
            type: Boolean,
            default: J("instantMove")
          },
          eagerMount: {
            type: Boolean,
            default: J("eagerMount")
          },
          popperClass: {
            type: [
              String,
              Array,
              Object
            ],
            default: J("popperClass")
          },
          computeTransformOrigin: {
            type: Boolean,
            default: J("computeTransformOrigin")
          },
          autoMinSize: {
            type: Boolean,
            default: J("autoMinSize")
          },
          autoSize: {
            type: [
              Boolean,
              String
            ],
            default: J("autoSize")
          },
          autoMaxSize: {
            type: Boolean,
            default: J("autoMaxSize")
          },
          autoBoundaryMaxSize: {
            type: Boolean,
            default: J("autoBoundaryMaxSize")
          },
          preventOverflow: {
            type: Boolean,
            default: J("preventOverflow")
          },
          overflowPadding: {
            type: [
              Number,
              String
            ],
            default: J("overflowPadding")
          },
          arrowPadding: {
            type: [
              Number,
              String
            ],
            default: J("arrowPadding")
          },
          arrowOverflow: {
            type: Boolean,
            default: J("arrowOverflow")
          },
          flip: {
            type: Boolean,
            default: J("flip")
          },
          shift: {
            type: Boolean,
            default: J("shift")
          },
          shiftCrossAxis: {
            type: Boolean,
            default: J("shiftCrossAxis")
          },
          noAutoFocus: {
            type: Boolean,
            default: J("noAutoFocus")
          },
          disposeTimeout: {
            type: Number,
            default: J("disposeTimeout")
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
            return (e = this[Qi]) == null ? void 0 : e.parentPopper;
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
            var i, o;
            (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = false, (n || !this.disabled) && (((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = true, requestAnimationFrame(() => {
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
            (this.distance || this.skidding) && e.middleware.push(gp({
              mainAxis: this.distance,
              crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(fp({
              alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(_p({
              padding: this.overflowPadding,
              boundary: this.boundary,
              crossAxis: this.shiftCrossAxis
            })), !t && this.flip && e.middleware.push(dp({
              padding: this.overflowPadding,
              boundary: this.boundary
            }))), e.middleware.push(cp({
              element: this.$_arrowNode,
              padding: this.arrowPadding
            })), this.arrowOverflow && e.middleware.push({
              name: "arrowOverflow",
              fn: ({ placement: i, rects: o, middlewareData: s }) => {
                let r;
                const { centerOffset: l } = s.arrow;
                return i.startsWith("top") || i.startsWith("bottom") ? r = Math.abs(l) > o.reference.width / 2 : r = Math.abs(l) > o.reference.height / 2, {
                  data: {
                    overflow: r
                  }
                };
              }
            }), this.autoMinSize || this.autoSize) {
              const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
              e.middleware.push({
                name: "autoSize",
                fn: ({ rects: o, placement: s, middlewareData: r }) => {
                  var l;
                  if ((l = r.autoSize) != null && l.skip) return {};
                  let a, u;
                  return s.startsWith("top") || s.startsWith("bottom") ? a = o.reference.width : u = o.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = u != null ? `${u}px` : null, {
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
            (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(mp({
              boundary: this.boundary,
              padding: this.overflowPadding,
              apply: ({ availableWidth: i, availableHeight: o }) => {
                this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = o != null ? `${o}px` : null;
              }
            })));
            const n = await yp(this.$_referenceNode, this.$_popperNode, e);
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
            if (this.$_updateParentShownChildren(true), this.$_hideInProgress = false, clearTimeout(this.$_scheduleTimer), zt && this.instantMove && zt.instantMove && zt !== this.parentPopper) {
              zt.$_applyHide(true), this.$_applyShow(true);
              return;
            }
            t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
          },
          $_scheduleHide(e, t = false) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = true;
              return;
            }
            this.$_updateParentShownChildren(false), this.$_hideInProgress = true, clearTimeout(this.$_scheduleTimer), this.isShown && (zt = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
          },
          $_computeDelay(e) {
            const t = this.delay;
            return parseInt(t && t[e] || t || 0);
          },
          async $_applyShow(e = false) {
            clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ji(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
              ...wi(this.$_referenceNode),
              ...wi(this.$_popperNode)
            ], "scroll", () => {
              this.$_computePosition();
            }));
          },
          async $_applyShowEffect() {
            if (this.$_hideInProgress) return;
            if (this.computeTransformOrigin) {
              const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), i = n.parentNode.getBoundingClientRect(), o = t.x + t.width / 2 - (i.left + n.offsetLeft), s = t.y + t.height / 2 - (i.top + n.offsetTop);
              this.result.transformOrigin = `${o}px ${s}px`;
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
            for (const t of Bs(this.theme)) Ws(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await Ji(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
          },
          async $_applyHide(e = false) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = true, this.$_hideInProgress = false;
              return;
            }
            if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
            this.skipTransition = e, Vs(Ue, this), Ue.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of Bs(this.theme)) {
              const i = Ws(n);
              Vs(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
            }
            zt === this && (zt = null), this.isShown = false, this.$_applyAttrsToTarget({
              "aria-describedby": void 0,
              "data-popper-shown": void 0
            }), clearTimeout(this.$_disposeTimer);
            const t = this.disposeTimeout;
            t !== null && (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
            }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await Ji(), this.classes.hideFrom = false, this.classes.hideTo = true;
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
            this.$_registerTriggerListeners(this.$_targetNodes, js, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([
              this.$_popperNode
            ], js, this.popperTriggers, this.popperShowTriggers, e);
            const t = (n) => {
              n.usedByTooltip || this.hide({
                event: n
              });
            };
            this.$_registerTriggerListeners(this.$_targetNodes, qs, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([
              this.$_popperNode
            ], qs, this.popperTriggers, this.popperHideTriggers, t);
          },
          $_registerEventListeners(e, t, n) {
            this.$_events.push({
              targetNodes: e,
              eventType: t,
              handler: n
            }), e.forEach((i) => i.addEventListener(t, n, rn ? {
              passive: true
            } : void 0));
          },
          $_registerTriggerListeners(e, t, n, i, o) {
            let s = n;
            i != null && (s = typeof i == "function" ? i(s) : i), s.forEach((r) => {
              const l = t[r];
              l && this.$_registerEventListeners(e, l, o);
            });
          },
          $_removeEventListeners(e) {
            const t = [];
            this.$_events.forEach((n) => {
              const { targetNodes: i, eventType: o, handler: s } = n;
              !e || e === o ? i.forEach((r) => r.removeEventListener(o, s)) : t.push(n);
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
            if (yn >= e.left && yn <= e.right && xn >= e.top && xn <= e.bottom) {
              const t = this.$_popperNode.getBoundingClientRect(), n = yn - Tt, i = xn - Ct, o = t.left + t.width / 2 - Tt + (t.top + t.height / 2) - Ct + t.width + t.height, s = Tt + n * o, r = Ct + i * o;
              return Qn(Tt, Ct, s, r, t.left, t.top, t.left, t.bottom) || Qn(Tt, Ct, s, r, t.left, t.top, t.right, t.top) || Qn(Tt, Ct, s, r, t.right, t.top, t.right, t.bottom) || Qn(Tt, Ct, s, r, t.left, t.bottom, t.right, t.bottom);
            }
            return false;
          }
        },
        render() {
          return this.$slots.default(this.slotData);
        }
      });
      if (typeof document < "u" && typeof window < "u") {
        if (Sl) {
          const e = rn ? {
            passive: true,
            capture: true
          } : true;
          document.addEventListener("touchstart", (t) => Ks(t, true), e), document.addEventListener("touchend", (t) => Gs(t, true), e);
        } else window.addEventListener("mousedown", (e) => Ks(e, false), true), window.addEventListener("click", (e) => Gs(e, false), true);
        window.addEventListener("resize", Sp);
      }
      function Ks(e, t) {
        if (Xe.autoHideOnMousedown) Pl(e, t);
        else for (let n = 0; n < Ue.length; n++) {
          const i = Ue[n];
          try {
            i.mouseDownContains = i.popperNode().contains(e.target);
          } catch {
          }
        }
      }
      function Gs(e, t) {
        Xe.autoHideOnMousedown || Pl(e, t);
      }
      function Pl(e, t) {
        const n = {};
        for (let i = Ue.length - 1; i >= 0; i--) {
          const o = Ue[i];
          try {
            const s = o.containsGlobalTarget = o.mouseDownContains || o.popperNode().contains(e.target);
            o.pendingHide = false, requestAnimationFrame(() => {
              if (o.pendingHide = false, !n[o.randomId] && Ys(o, s, e)) {
                if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
                  let l = o.parentPopper;
                  for (; l; ) n[l.randomId] = true, l = l.parentPopper;
                  return;
                }
                let r = o.parentPopper;
                for (; r && Ys(r, r.containsGlobalTarget, e); ) r.$_handleGlobalClose(e, t), r = r.parentPopper;
              }
            });
          } catch {
          }
        }
      }
      function Ys(e, t, n) {
        return n.closeAllPopover || n.closePopover && t || $p(e, n) && !t;
      }
      function $p(e, t) {
        if (typeof e.autoHide == "function") {
          const n = e.autoHide(t);
          return e.lastAutoHide = n, n;
        }
        return e.autoHide;
      }
      function Sp() {
        for (let e = 0; e < Ue.length; e++) Ue[e].$_computePosition();
      }
      let Tt = 0, Ct = 0, yn = 0, xn = 0;
      typeof window < "u" && window.addEventListener("mousemove", (e) => {
        Tt = yn, Ct = xn, yn = e.clientX, xn = e.clientY;
      }, rn ? {
        passive: true
      } : void 0);
      function Qn(e, t, n, i, o, s, r, l) {
        const a = ((r - o) * (t - s) - (l - s) * (e - o)) / ((l - s) * (n - e) - (r - o) * (i - t)), u = ((n - e) * (t - s) - (i - t) * (e - o)) / ((l - s) * (n - e) - (r - o) * (i - t));
        return a >= 0 && a <= 1 && u >= 0 && u <= 1;
      }
      const Tp = {
        extends: Cl()
      }, Li = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [i, o] of t) n[i] = o;
        return n;
      };
      function Cp(e, t, n, i, o, s) {
        return R(), D("div", {
          ref: "reference",
          class: We([
            "v-popper",
            {
              "v-popper--shown": e.slotData.isShown
            }
          ])
        }, [
          mt(e.$slots, "default", ir(No(e.slotData)))
        ], 2);
      }
      const Pp = Li(Tp, [
        [
          "render",
          Cp
        ]
      ]);
      function Ap() {
        var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
        if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
        var n = e.indexOf("Trident/");
        if (n > 0) {
          var i = e.indexOf("rv:");
          return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
        }
        var o = e.indexOf("Edge/");
        return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
      }
      let si;
      function ho() {
        ho.init || (ho.init = true, si = Ap() !== -1);
      }
      var ki = {
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
          ho(), Po(() => {
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
      const Ep = Da();
      Ia("data-v-b329ee4c");
      const Op = {
        class: "resize-observer",
        tabindex: "-1"
      };
      Na();
      const Rp = Ep((e, t, n, i, o, s) => (R(), Be("div", Op)));
      ki.render = Rp;
      ki.__scopeId = "data-v-b329ee4c";
      ki.__file = "src/components/ResizeObserver.vue";
      const Al = (e = "theme") => ({
        computed: {
          themeClass() {
            return xp(this[e]);
          }
        }
      }), Mp = ln({
        name: "VPopperContent",
        components: {
          ResizeObserver: ki
        },
        mixins: [
          Al()
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
      }), Ip = [
        "id",
        "aria-hidden",
        "tabindex",
        "data-popper-placement"
      ], Np = {
        ref: "inner",
        class: "v-popper__inner"
      }, Dp = T("div", {
        class: "v-popper__arrow-outer"
      }, null, -1), Hp = T("div", {
        class: "v-popper__arrow-inner"
      }, null, -1), Lp = [
        Dp,
        Hp
      ];
      function kp(e, t, n, i, o, s) {
        const r = Cn("ResizeObserver");
        return R(), D("div", {
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
          style: vt(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
          } : void 0),
          "aria-hidden": e.shown ? "false" : "true",
          tabindex: e.autoHide ? 0 : void 0,
          "data-popper-placement": e.result ? e.result.placement : void 0,
          onKeyup: t[2] || (t[2] = rl((l) => e.autoHide && e.$emit("hide"), [
            "esc"
          ]))
        }, [
          T("div", {
            class: "v-popper__backdrop",
            onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
          }),
          T("div", {
            class: "v-popper__wrapper",
            style: vt(e.result ? {
              transformOrigin: e.result.transformOrigin
            } : void 0)
          }, [
            T("div", Np, [
              e.mounted ? (R(), D(Q, {
                key: 0
              }, [
                T("div", null, [
                  mt(e.$slots, "default")
                ]),
                e.handleResize ? (R(), Be(r, {
                  key: 0,
                  onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
                })) : _t("", true)
              ], 64)) : _t("", true)
            ], 512),
            T("div", {
              ref: "arrow",
              class: "v-popper__arrow-container",
              style: vt(e.result ? {
                left: e.toPx(e.result.arrow.x),
                top: e.toPx(e.result.arrow.y)
              } : void 0)
            }, Lp, 4)
          ], 4)
        ], 46, Ip);
      }
      const El = Li(Mp, [
        [
          "render",
          kp
        ]
      ]), Ol = {
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
      let go = function() {
      };
      typeof window < "u" && (go = window.Element);
      const Fp = ln({
        name: "VPopperWrapper",
        components: {
          Popper: Pp,
          PopperContent: El
        },
        mixins: [
          Ol,
          Al("finalTheme")
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
              go,
              Boolean
            ],
            default: void 0
          },
          boundary: {
            type: [
              String,
              go
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
      function zp(e, t, n, i, o, s) {
        const r = Cn("PopperContent"), l = Cn("Popper");
        return R(), Be(l, Ho({
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
          default: ge(({ popperId: a, isShown: u, shouldMountContent: c, skipTransition: d, autoHide: h, show: g, hide: _, handleResize: v, onResize: N, classes: E, result: I }) => [
            mt(e.$slots, "default", {
              shown: u,
              show: g,
              hide: _
            }),
            Z(r, {
              ref: "popperContent",
              "popper-id": a,
              theme: e.finalTheme,
              shown: u,
              mounted: c,
              "skip-transition": d,
              "auto-hide": h,
              "handle-resize": v,
              classes: E,
              result: I,
              onHide: _,
              onResize: N
            }, {
              default: ge(() => [
                mt(e.$slots, "popper", {
                  shown: u,
                  hide: _
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
      const Bo = Li(Fp, [
        [
          "render",
          zp
        ]
      ]), Bp = {
        ...Bo,
        name: "VDropdown",
        vPopperTheme: "dropdown"
      }, jp = {
        ...Bo,
        name: "VMenu",
        vPopperTheme: "menu"
      }, qp = {
        ...Bo,
        name: "VTooltip",
        vPopperTheme: "tooltip"
      }, Vp = ln({
        name: "VTooltipDirective",
        components: {
          Popper: Cl(),
          PopperContent: El
        },
        mixins: [
          Ol
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
      }), Up = [
        "innerHTML"
      ], Wp = [
        "textContent"
      ];
      function Kp(e, t, n, i, o, s) {
        const r = Cn("PopperContent"), l = Cn("Popper");
        return R(), Be(l, Ho({
          ref: "popper"
        }, e.$attrs, {
          theme: e.theme,
          "target-nodes": e.targetNodes,
          "popper-node": () => e.$refs.popperContent.$el,
          onApplyShow: e.onShow,
          onApplyHide: e.onHide
        }), {
          default: ge(({ popperId: a, isShown: u, shouldMountContent: c, skipTransition: d, autoHide: h, hide: g, handleResize: _, onResize: v, classes: N, result: E }) => [
            Z(r, {
              ref: "popperContent",
              class: We({
                "v-popper--tooltip-loading": e.loading
              }),
              "popper-id": a,
              theme: e.theme,
              shown: u,
              mounted: c,
              "skip-transition": d,
              "auto-hide": h,
              "handle-resize": _,
              classes: N,
              result: E,
              onHide: g,
              onResize: v
            }, {
              default: ge(() => [
                e.html ? (R(), D("div", {
                  key: 0,
                  innerHTML: e.finalContent
                }, null, 8, Up)) : (R(), D("div", {
                  key: 1,
                  textContent: pe(e.finalContent)
                }, null, 8, Wp))
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
      const Gp = Li(Vp, [
        [
          "render",
          Kp
        ]
      ]), Rl = "v-popper--has-tooltip";
      function Yp(e, t) {
        let n = e.placement;
        if (!n && t) for (const i of Tl) t[i] && (n = i);
        return n || (n = Dn(e.theme || "tooltip", "placement")), n;
      }
      function Ml(e, t, n) {
        let i;
        const o = typeof t;
        return o === "string" ? i = {
          content: t
        } : t && o === "object" ? i = t : i = {
          content: false
        }, i.placement = Yp(i, n), i.targetNodes = () => [
          e
        ], i.referenceNode = () => e, i;
      }
      let Zi, Hn, Xp = 0;
      function Jp() {
        if (Zi) return;
        Hn = se([]), Zi = ll({
          name: "VTooltipDirectiveApp",
          setup() {
            return {
              directives: Hn
            };
          },
          render() {
            return this.directives.map((t) => Lc(Gp, {
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
        document.body.appendChild(e), Zi.mount(e);
      }
      function Qp(e, t, n) {
        Jp();
        const i = se(Ml(e, t, n)), o = se(false), s = {
          id: Xp++,
          options: i,
          shown: o
        };
        return Hn.value.push(s), e.classList && e.classList.add(Rl), e.$_popper = {
          options: i,
          item: s,
          show() {
            o.value = true;
          },
          hide() {
            o.value = false;
          }
        };
      }
      function Il(e) {
        if (e.$_popper) {
          const t = Hn.value.indexOf(e.$_popper.item);
          t !== -1 && Hn.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
        }
        e.classList && e.classList.remove(Rl);
      }
      function Xs(e, { value: t, modifiers: n }) {
        const i = Ml(e, t, n);
        if (!i.content || Dn(i.theme || "tooltip", "disabled")) Il(e);
        else {
          let o;
          e.$_popper ? (o = e.$_popper, o.options.value = i) : o = Qp(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? o.show() : o.hide());
        }
      }
      const Zp = {
        beforeMount: Xs,
        updated: Xs,
        beforeUnmount(e) {
          Il(e);
        }
      };
      function Js(e) {
        e.addEventListener("mousedown", vi), e.addEventListener("click", vi), e.addEventListener("touchstart", Nl, rn ? {
          passive: true
        } : false);
      }
      function Qs(e) {
        e.removeEventListener("mousedown", vi), e.removeEventListener("click", vi), e.removeEventListener("touchstart", Nl), e.removeEventListener("touchend", Dl), e.removeEventListener("touchcancel", Hl);
      }
      function vi(e) {
        const t = e.currentTarget;
        e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
      }
      function Nl(e) {
        if (e.changedTouches.length === 1) {
          const t = e.currentTarget;
          t.$_vclosepopover_touch = true;
          const n = e.changedTouches[0];
          t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", Dl), t.addEventListener("touchcancel", Hl);
        }
      }
      function Dl(e) {
        const t = e.currentTarget;
        if (t.$_vclosepopover_touch = false, e.changedTouches.length === 1) {
          const n = e.changedTouches[0], i = t.$_vclosepopover_touchPoint;
          e.closePopover = Math.abs(n.screenY - i.screenY) < 20 && Math.abs(n.screenX - i.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
        }
      }
      function Hl(e) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = false;
      }
      const eh = {
        beforeMount(e, { value: t, modifiers: n }) {
          e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Js(e);
        },
        updated(e, { value: t, oldValue: n, modifiers: i }) {
          e.$_closePopoverModifiers = i, t !== n && (typeof t > "u" || t ? Js(e) : Qs(e));
        },
        beforeUnmount(e) {
          Qs(e);
        }
      };
      function th(e, t = {}) {
        e.$_vTooltipInstalled || (e.$_vTooltipInstalled = true, $l(Xe, t), e.directive("tooltip", Zp), e.directive("close-popper", eh), e.component("VTooltip", qp), e.component("VDropdown", Bp), e.component("VMenu", jp));
      }
      const nh = {
        version: "5.2.2",
        install: th,
        options: Xe
      }, ih = [
        "https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.0/viz-lite.js"
      ];
      ih.forEach((e) => {
        let t = document.head.querySelector(`[src="${e}"`);
        t || (t = document.createElement("script"), t.setAttribute("src", e), t.setAttribute("type", "text/javascript"), document.head.appendChild(t));
      });
      ll(Jd).use(nh).mount("#app");
    })();
  }
});
export default require_stdin();

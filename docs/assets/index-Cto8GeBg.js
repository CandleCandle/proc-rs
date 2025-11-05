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
      function go(e) {
        const t = /* @__PURE__ */ Object.create(null);
        for (const n of e.split(",")) t[n] = 1;
        return (n) => n in t;
      }
      const oe = {}, Yt = [], rt = () => {
      }, Fl = () => false, mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mo = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, wo = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }, zl = Object.prototype.hasOwnProperty, Z = (e, t) => zl.call(e, t), B = Array.isArray, Xt = (e) => Ln(e) === "[object Map]", wi = (e) => Ln(e) === "[object Set]", Uo = (e) => Ln(e) === "[object Date]", W = (e) => typeof e == "function", pe = (e) => typeof e == "string", Ye = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Qs = (e) => (re(e) || W(e)) && W(e.then) && W(e.catch), Zs = Object.prototype.toString, Ln = (e) => Zs.call(e), Bl = (e) => Ln(e).slice(8, -1), er = (e) => Ln(e) === "[object Object]", vo = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), vi = (e) => {
        const t = /* @__PURE__ */ Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      }, jl = /-(\w)/g, je = vi((e) => e.replace(jl, (t, n) => n ? n.toUpperCase() : "")), ql = /\B([A-Z])/g, Dt = vi((e) => e.replace(ql, "-$1").toLowerCase()), bi = vi((e) => e.charAt(0).toUpperCase() + e.slice(1)), zi = vi((e) => e ? `on${bi(e)}` : ""), At = (e, t) => !Object.is(e, t), Xn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
      }, tr = (e, t, n, i = false) => {
        Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: i,
          value: n
        });
      }, ii = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };
      let Wo;
      const yi = () => Wo || (Wo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
      function gt(e) {
        if (B(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const i = e[n], o = pe(i) ? Kl(i) : gt(i);
            if (o) for (const s in o) t[s] = o[s];
          }
          return t;
        } else if (pe(e) || re(e)) return e;
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
      function Ue(e) {
        let t = "";
        if (pe(e)) t = e;
        else if (B(e)) for (let n = 0; n < e.length; n++) {
          const i = Ue(e[n]);
          i && (t += i + " ");
        }
        else if (re(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim();
      }
      function nr(e) {
        if (!e) return null;
        let { class: t, style: n } = e;
        return t && !pe(t) && (e.class = Ue(t)), n && (e.style = gt(n)), e;
      }
      const Gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yl = go(Gl);
      function ir(e) {
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
        let n = Uo(e), i = Uo(t);
        if (n || i) return n && i ? e.getTime() === t.getTime() : false;
        if (n = Ye(e), i = Ye(t), n || i) return e === t;
        if (n = B(e), i = B(t), n || i) return n && i ? Xl(e, t) : false;
        if (n = re(e), i = re(t), n || i) {
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
      const or = (e) => !!(e && e.__v_isRef === true), ye = (e) => pe(e) ? e : e == null ? "" : B(e) || re(e) && (e.toString === Zs || !W(e.toString)) ? or(e) ? ye(e.value) : JSON.stringify(e, sr, 2) : String(e), sr = (e, t) => or(t) ? sr(e, t.value) : Xt(t) ? {
        [`Map(${t.size})`]: [
          ...t.entries()
        ].reduce((n, [i, o], s) => (n[Bi(i, s) + " =>"] = o, n), {})
      } : wi(t) ? {
        [`Set(${t.size})`]: [
          ...t.values()
        ].map((n) => Bi(n))
      } : Ye(t) ? Bi(t) : re(t) && !B(t) && !er(t) ? String(t) : t, Bi = (e, t = "") => {
        var n;
        return Ye(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
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
      let ce;
      const ji = /* @__PURE__ */ new WeakSet();
      class rr {
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
          this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ar(this);
        }
        run() {
          if (!(this.flags & 1)) return this.fn();
          this.flags |= 2, Ko(this), cr(this);
          const t = ce, n = We;
          ce = this, We = true;
          try {
            return this.fn();
          } finally {
            ur(this), ce = t, We = n, this.flags &= -3;
          }
        }
        stop() {
          if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) xo(t);
            this.deps = this.depsTail = void 0, Ko(this), this.onStop && this.onStop(), this.flags &= -2;
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
      let lr = 0, _n, gn;
      function ar(e, t = false) {
        if (e.flags |= 8, t) {
          e.next = gn, gn = e;
          return;
        }
        e.next = _n, _n = e;
      }
      function bo() {
        lr++;
      }
      function yo() {
        if (--lr > 0) return;
        if (gn) {
          let t = gn;
          for (gn = void 0; t; ) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n;
          }
        }
        let e;
        for (; _n; ) {
          let t = _n;
          for (_n = void 0; t; ) {
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
      function cr(e) {
        for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
      }
      function ur(e) {
        let t, n = e.depsTail, i = n;
        for (; i; ) {
          const o = i.prevDep;
          i.version === -1 ? (i === n && (n = o), xo(i), ea(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = o;
        }
        e.deps = t, e.depsTail = n;
      }
      function eo(e) {
        for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (fr(t.dep.computed) || t.dep.version !== t.version)) return true;
        return !!e._dirty;
      }
      function fr(e) {
        if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $n) || (e.globalVersion = $n, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !eo(e)))) return;
        e.flags |= 2;
        const t = e.dep, n = ce, i = We;
        ce = e, We = true;
        try {
          cr(e);
          const o = e.fn(e._value);
          (t.version === 0 || At(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
        } catch (o) {
          throw t.version++, o;
        } finally {
          ce = n, We = i, ur(e), e.flags &= -3;
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
      let We = true;
      const dr = [];
      function wt() {
        dr.push(We), We = false;
      }
      function vt() {
        const e = dr.pop();
        We = e === void 0 ? true : e;
      }
      function Ko(e) {
        const { cleanup: t } = e;
        if (e.cleanup = void 0, t) {
          const n = ce;
          ce = void 0;
          try {
            t();
          } finally {
            ce = n;
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
          if (!ce || !We || ce === this.computed) return;
          let n = this.activeLink;
          if (n === void 0 || n.sub !== ce) n = this.activeLink = new ta(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, pr(n);
          else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const i = n.nextDep;
            i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ce.depsTail, n.nextDep = void 0, ce.depsTail.nextDep = n, ce.depsTail = n, ce.deps === n && (ce.deps = i);
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
      function pr(e) {
        if (e.dep.sc++, e.sub.flags & 4) {
          const t = e.dep.computed;
          if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let i = t.deps; i; i = i.nextDep) pr(i);
          }
          const n = e.dep.subs;
          n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
        }
      }
      const oi = /* @__PURE__ */ new WeakMap(), jt = Symbol(""), to = Symbol(""), Sn = Symbol("");
      function Te(e, t, n) {
        if (We && ce) {
          let i = oi.get(e);
          i || oi.set(e, i = /* @__PURE__ */ new Map());
          let o = i.get(n);
          o || (i.set(n, o = new $o()), o.map = i, o.key = n), o.track();
        }
      }
      function pt(e, t, n, i, o, s) {
        const r = oi.get(e);
        if (!r) {
          $n++;
          return;
        }
        const l = (a) => {
          a && a.trigger();
        };
        if (bo(), t === "clear") r.forEach(l);
        else {
          const a = B(e), u = a && vo(n);
          if (a && n === "length") {
            const c = Number(i);
            r.forEach((p, h) => {
              (h === "length" || h === Sn || !Ye(h) && h >= c) && l(p);
            });
          } else switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Sn)), t) {
            case "add":
              a ? u && l(r.get("length")) : (l(r.get(jt)), Xt(e) && l(r.get(to)));
              break;
            case "delete":
              a || (l(r.get(jt)), Xt(e) && l(r.get(to)));
              break;
            case "set":
              Xt(e) && l(r.get(jt));
              break;
          }
        }
        yo();
      }
      function na(e, t) {
        const n = oi.get(e);
        return n && n.get(t);
      }
      function Wt(e) {
        const t = Q(e);
        return t === e ? t : (Te(t, "iterate", Sn), Be(e) ? t : t.map(xe));
      }
      function xi(e) {
        return Te(e = Q(e), "iterate", Sn), e;
      }
      const ia = {
        __proto__: null,
        [Symbol.iterator]() {
          return qi(this, Symbol.iterator, xe);
        },
        concat(...e) {
          return Wt(this).concat(...e.map((t) => B(t) ? Wt(t) : t));
        },
        entries() {
          return qi(this, "entries", (e) => (e[1] = xe(e[1]), e));
        },
        every(e, t) {
          return ft(this, "every", e, t, void 0, arguments);
        },
        filter(e, t) {
          return ft(this, "filter", e, t, (n) => n.map(xe), arguments);
        },
        find(e, t) {
          return ft(this, "find", e, t, xe, arguments);
        },
        findIndex(e, t) {
          return ft(this, "findIndex", e, t, void 0, arguments);
        },
        findLast(e, t) {
          return ft(this, "findLast", e, t, xe, arguments);
        },
        findLastIndex(e, t) {
          return ft(this, "findLastIndex", e, t, void 0, arguments);
        },
        forEach(e, t) {
          return ft(this, "forEach", e, t, void 0, arguments);
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
          return ft(this, "map", e, t, void 0, arguments);
        },
        pop() {
          return fn(this, "pop");
        },
        push(...e) {
          return fn(this, "push", e);
        },
        reduce(e, ...t) {
          return Go(this, "reduce", e, t);
        },
        reduceRight(e, ...t) {
          return Go(this, "reduceRight", e, t);
        },
        shift() {
          return fn(this, "shift");
        },
        some(e, t) {
          return ft(this, "some", e, t, void 0, arguments);
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
        const i = xi(e), o = i[t]();
        return i !== e && !Be(e) && (o._next = o.next, o.next = () => {
          const s = o._next();
          return s.value && (s.value = n(s.value)), s;
        }), o;
      }
      const oa = Array.prototype;
      function ft(e, t, n, i, o, s) {
        const r = xi(e), l = r !== e && !Be(e), a = r[t];
        if (a !== oa[t]) {
          const p = a.apply(e, s);
          return l ? xe(p) : p;
        }
        let u = n;
        r !== e && (l ? u = function(p, h) {
          return n.call(this, xe(p), h, e);
        } : n.length > 2 && (u = function(p, h) {
          return n.call(this, p, h, e);
        }));
        const c = a.call(r, u, i);
        return l && o ? o(c) : c;
      }
      function Go(e, t, n, i) {
        const o = xi(e);
        let s = n;
        return o !== e && (Be(e) ? n.length > 3 && (s = function(r, l, a) {
          return n.call(this, r, l, a, e);
        }) : s = function(r, l, a) {
          return n.call(this, r, xe(l), a, e);
        }), o[t](s, ...i);
      }
      function Vi(e, t, n) {
        const i = Q(e);
        Te(i, "iterate", Sn);
        const o = i[t](...n);
        return (o === -1 || o === false) && Co(n[0]) ? (n[0] = Q(n[0]), i[t](...n)) : o;
      }
      function fn(e, t, n = []) {
        wt(), bo();
        const i = Q(e)[t].apply(e, n);
        return yo(), vt(), i;
      }
      const sa = go("__proto__,__v_isRef,__isVue"), hr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ye));
      function ra(e) {
        Ye(e) || (e = String(e));
        const t = Q(this);
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
          if (n === "__v_raw") return i === (o ? s ? ga : vr : s ? wr : mr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
          const r = B(t);
          if (!o) {
            let a;
            if (r && (a = ia[n])) return a;
            if (n === "hasOwnProperty") return ra;
          }
          const l = Reflect.get(t, n, ve(t) ? t : i);
          return (Ye(n) ? hr.has(n) : sa(n)) || (o || Te(t, "get", n), s) ? l : ve(l) ? r && vo(n) ? l : l.value : re(l) ? o ? br(l) : $i(l) : l;
        }
      }
      class gr extends _r {
        constructor(t = false) {
          super(false, t);
        }
        set(t, n, i, o) {
          let s = t[n];
          if (!this._isShallow) {
            const a = Mt(s);
            if (!Be(i) && !Mt(i) && (s = Q(s), i = Q(i)), !B(t) && ve(s) && !ve(i)) return a ? false : (s.value = i, true);
          }
          const r = B(t) && vo(n) ? Number(n) < t.length : Z(t, n), l = Reflect.set(t, n, i, ve(t) ? t : o);
          return t === Q(o) && (r ? At(i, s) && pt(t, "set", n, i) : pt(t, "add", n, i)), l;
        }
        deleteProperty(t, n) {
          const i = Z(t, n);
          t[n];
          const o = Reflect.deleteProperty(t, n);
          return o && i && pt(t, "delete", n, void 0), o;
        }
        has(t, n) {
          const i = Reflect.has(t, n);
          return (!Ye(n) || !hr.has(n)) && Te(t, "has", n), i;
        }
        ownKeys(t) {
          return Te(t, "iterate", B(t) ? "length" : jt), Reflect.ownKeys(t);
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
      const aa = new gr(), ca = new la(), ua = new gr(true);
      const no = (e) => e, qn = (e) => Reflect.getPrototypeOf(e);
      function fa(e, t, n) {
        return function(...i) {
          const o = this.__v_raw, s = Q(o), r = Xt(s), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...i), c = n ? no : t ? si : xe;
          return !t && Te(s, "iterate", a ? to : jt), {
            next() {
              const { value: p, done: h } = u.next();
              return h ? {
                value: p,
                done: h
              } : {
                value: l ? [
                  c(p[0]),
                  c(p[1])
                ] : c(p),
                done: h
              };
            },
            [Symbol.iterator]() {
              return this;
            }
          };
        };
      }
      function Vn(e) {
        return function(...t) {
          return e === "delete" ? false : e === "clear" ? void 0 : this;
        };
      }
      function da(e, t) {
        const n = {
          get(o) {
            const s = this.__v_raw, r = Q(s), l = Q(o);
            e || (At(o, l) && Te(r, "get", o), Te(r, "get", l));
            const { has: a } = qn(r), u = t ? no : e ? si : xe;
            if (a.call(r, o)) return u(s.get(o));
            if (a.call(r, l)) return u(s.get(l));
            s !== r && s.get(o);
          },
          get size() {
            const o = this.__v_raw;
            return !e && Te(Q(o), "iterate", jt), Reflect.get(o, "size", o);
          },
          has(o) {
            const s = this.__v_raw, r = Q(s), l = Q(o);
            return e || (At(o, l) && Te(r, "has", o), Te(r, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
          },
          forEach(o, s) {
            const r = this, l = r.__v_raw, a = Q(l), u = t ? no : e ? si : xe;
            return !e && Te(a, "iterate", jt), l.forEach((c, p) => o.call(s, u(c), u(p), r));
          }
        };
        return Pe(n, e ? {
          add: Vn("add"),
          set: Vn("set"),
          delete: Vn("delete"),
          clear: Vn("clear")
        } : {
          add(o) {
            !t && !Be(o) && !Mt(o) && (o = Q(o));
            const s = Q(this);
            return qn(s).has.call(s, o) || (s.add(o), pt(s, "add", o, o)), this;
          },
          set(o, s) {
            !t && !Be(s) && !Mt(s) && (s = Q(s));
            const r = Q(this), { has: l, get: a } = qn(r);
            let u = l.call(r, o);
            u || (o = Q(o), u = l.call(r, o));
            const c = a.call(r, o);
            return r.set(o, s), u ? At(s, c) && pt(r, "set", o, s) : pt(r, "add", o, s), this;
          },
          delete(o) {
            const s = Q(this), { has: r, get: l } = qn(s);
            let a = r.call(s, o);
            a || (o = Q(o), a = r.call(s, o)), l && l.call(s, o);
            const u = s.delete(o);
            return a && pt(s, "delete", o, void 0), u;
          },
          clear() {
            const o = Q(this), s = o.size !== 0, r = o.clear();
            return s && pt(o, "clear", void 0, void 0), r;
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
        return (i, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? i : Reflect.get(Z(n, o) && o in i ? n : i, o, s);
      }
      const pa = {
        get: So(false, false)
      }, ha = {
        get: So(false, true)
      }, _a = {
        get: So(true, false)
      };
      const mr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap();
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
      function $i(e) {
        return Mt(e) ? e : To(e, false, aa, pa, mr);
      }
      function va(e) {
        return To(e, false, ua, ha, wr);
      }
      function br(e) {
        return To(e, true, ca, _a, vr);
      }
      function To(e, t, n, i, o) {
        if (!re(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const s = wa(e);
        if (s === 0) return e;
        const r = o.get(e);
        if (r) return r;
        const l = new Proxy(e, s === 2 ? i : n);
        return o.set(e, l), l;
      }
      function Jt(e) {
        return Mt(e) ? Jt(e.__v_raw) : !!(e && e.__v_isReactive);
      }
      function Mt(e) {
        return !!(e && e.__v_isReadonly);
      }
      function Be(e) {
        return !!(e && e.__v_isShallow);
      }
      function Co(e) {
        return e ? !!e.__v_raw : false;
      }
      function Q(e) {
        const t = e && e.__v_raw;
        return t ? Q(t) : e;
      }
      function ba(e) {
        return !Z(e, "__v_skip") && Object.isExtensible(e) && tr(e, "__v_skip", true), e;
      }
      const xe = (e) => re(e) ? $i(e) : e, si = (e) => re(e) ? br(e) : e;
      function ve(e) {
        return e ? e.__v_isRef === true : false;
      }
      function fe(e) {
        return xr(e, false);
      }
      function yr(e) {
        return xr(e, true);
      }
      function xr(e, t) {
        return ve(e) ? e : new ya(e, t);
      }
      class ya {
        constructor(t, n) {
          this.dep = new $o(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Q(t), this._value = n ? t : xe(t), this.__v_isShallow = n;
        }
        get value() {
          return this.dep.track(), this._value;
        }
        set value(t) {
          const n = this._rawValue, i = this.__v_isShallow || Be(t) || Mt(t);
          t = i ? t : Q(t), At(t, n) && (this._rawValue = t, this._value = i ? t : xe(t), this.dep.trigger());
        }
      }
      function xa(e) {
        e.dep && e.dep.trigger();
      }
      function de(e) {
        return ve(e) ? e.value : e;
      }
      const $a = {
        get: (e, t, n) => t === "__v_raw" ? e : de(Reflect.get(e, t, n)),
        set: (e, t, n, i) => {
          const o = e[t];
          return ve(o) && !ve(n) ? (o.value = n, true) : Reflect.set(e, t, n, i);
        }
      };
      function $r(e) {
        return Jt(e) ? e : new Proxy(e, $a);
      }
      function Sr(e) {
        const t = B(e) ? new Array(e.length) : {};
        for (const n in e) t[n] = Tr(e, n);
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
          return na(Q(this._object), this._key);
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
      function Yo(e, t, n) {
        return ve(e) ? e : W(e) ? new Ta(e) : re(e) && arguments.length > 1 ? Tr(e, t, n) : fe(e);
      }
      function Tr(e, t, n) {
        const i = e[t];
        return ve(i) ? i : new Sa(e, t, n);
      }
      class Ca {
        constructor(t, n, i) {
          this.fn = t, this.setter = n, this._value = void 0, this.dep = new $o(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $n - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
        }
        notify() {
          if (this.flags |= 16, !(this.flags & 8) && ce !== this) return ar(this, true), true;
        }
        get value() {
          const t = this.dep.track();
          return fr(this), t && (t.version = this.dep.version), this._value;
        }
        set value(t) {
          this.setter && this.setter(t);
        }
      }
      function Pa(e, t, n = false) {
        let i, o;
        return W(e) ? i = e : (i = e.get, o = e.set), new Ca(i, o, n);
      }
      const Un = {}, ri = /* @__PURE__ */ new WeakMap();
      let zt;
      function Aa(e, t = false, n = zt) {
        if (n) {
          let i = ri.get(n);
          i || ri.set(n, i = []), i.push(e);
        }
      }
      function Ea(e, t, n = oe) {
        const { immediate: i, deep: o, once: s, scheduler: r, augmentJob: l, call: a } = n, u = (b) => o ? b : Be(b) || o === false || o === 0 ? ht(b, 1) : ht(b);
        let c, p, h, _, v = false, g = false;
        if (ve(e) ? (p = () => e.value, v = Be(e)) : Jt(e) ? (p = () => u(e), v = true) : B(e) ? (g = true, v = e.some((b) => Jt(b) || Be(b)), p = () => e.map((b) => {
          if (ve(b)) return b.value;
          if (Jt(b)) return u(b);
          if (W(b)) return a ? a(b, 2) : b();
        })) : W(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
          if (h) {
            wt();
            try {
              h();
            } finally {
              vt();
            }
          }
          const b = zt;
          zt = c;
          try {
            return a ? a(e, 3, [
              _
            ]) : e(_);
          } finally {
            zt = b;
          }
        } : p = rt, t && o) {
          const b = p, E = o === true ? 1 / 0 : o;
          p = () => ht(b(), E);
        }
        const I = Zl(), A = () => {
          c.stop(), I && I.active && wo(I.effects, c);
        };
        if (s && t) {
          const b = t;
          t = (...E) => {
            b(...E), A();
          };
        }
        let M = g ? new Array(e.length).fill(Un) : Un;
        const D = (b) => {
          if (!(!(c.flags & 1) || !c.dirty && !b)) if (t) {
            const E = c.run();
            if (o || v || (g ? E.some((H, z) => At(H, M[z])) : At(E, M))) {
              h && h();
              const H = zt;
              zt = c;
              try {
                const z = [
                  E,
                  M === Un ? void 0 : g && M[0] === Un ? [] : M,
                  _
                ];
                M = E, a ? a(t, 3, z) : t(...z);
              } finally {
                zt = H;
              }
            }
          } else c.run();
        };
        return l && l(D), c = new rr(p), c.scheduler = r ? () => r(D, false) : D, _ = (b) => Aa(b, false, c), h = c.onStop = () => {
          const b = ri.get(c);
          if (b) {
            if (a) a(b, 4);
            else for (const E of b) E();
            ri.delete(c);
          }
        }, t ? i ? D(true) : M = c.run() : r ? r(D.bind(null, true), true) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
      }
      function ht(e, t = 1 / 0, n) {
        if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
        if (n.add(e), t--, ve(e)) ht(e.value, t, n);
        else if (B(e)) for (let i = 0; i < e.length; i++) ht(e[i], t, n);
        else if (wi(e) || Xt(e)) e.forEach((i) => {
          ht(i, t, n);
        });
        else if (er(e)) {
          for (const i in e) ht(e[i], t, n);
          for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && ht(e[i], t, n);
        }
        return e;
      }
      function kn(e, t, n, i) {
        try {
          return i ? e(...i) : e();
        } catch (o) {
          Si(o, t, n);
        }
      }
      function ct(e, t, n, i) {
        if (W(e)) {
          const o = kn(e, t, n, i);
          return o && Qs(o) && o.catch((s) => {
            Si(s, t, n);
          }), o;
        }
        if (B(e)) {
          const o = [];
          for (let s = 0; s < e.length; s++) o.push(ct(e[s], t, n, i));
          return o;
        }
      }
      function Si(e, t, n, i = true) {
        const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || oe;
        if (t) {
          let l = t.parent;
          const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
          for (; l; ) {
            const c = l.ec;
            if (c) {
              for (let p = 0; p < c.length; p++) if (c[p](e, a, u) === false) return;
            }
            l = l.parent;
          }
          if (s) {
            wt(), kn(s, null, 10, [
              e,
              a,
              u
            ]), vt();
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
      let nt = -1;
      const Qt = [];
      let St = null, Gt = 0;
      const Cr = Promise.resolve();
      let li = null;
      function Po(e) {
        const t = li || Cr;
        return e ? t.then(this ? e.bind(this) : e) : t;
      }
      function Ra(e) {
        let t = nt + 1, n = Oe.length;
        for (; t < n; ) {
          const i = t + n >>> 1, o = Oe[i], s = Tn(o);
          s < e || s === e && o.flags & 2 ? t = i + 1 : n = i;
        }
        return t;
      }
      function Ao(e) {
        if (!(e.flags & 1)) {
          const t = Tn(e), n = Oe[Oe.length - 1];
          !n || !(e.flags & 2) && t >= Tn(n) ? Oe.push(e) : Oe.splice(Ra(t), 0, e), e.flags |= 1, Pr();
        }
      }
      function Pr() {
        li || (li = Cr.then(Er));
      }
      function Ma(e) {
        B(e) ? Qt.push(...e) : St && e.id === -1 ? St.splice(Gt + 1, 0, e) : e.flags & 1 || (Qt.push(e), e.flags |= 1), Pr();
      }
      function Xo(e, t, n = nt + 1) {
        for (; n < Oe.length; n++) {
          const i = Oe[n];
          if (i && i.flags & 2) {
            if (e && i.id !== e.uid) continue;
            Oe.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
          }
        }
      }
      function Ar(e) {
        if (Qt.length) {
          const t = [
            ...new Set(Qt)
          ].sort((n, i) => Tn(n) - Tn(i));
          if (Qt.length = 0, St) {
            St.push(...t);
            return;
          }
          for (St = t, Gt = 0; Gt < St.length; Gt++) {
            const n = St[Gt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
          }
          St = null, Gt = 0;
        }
      }
      const Tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
      function Er(e) {
        try {
          for (nt = 0; nt < Oe.length; nt++) {
            const t = Oe[nt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
          }
        } finally {
          for (; nt < Oe.length; nt++) {
            const t = Oe[nt];
            t && (t.flags &= -2);
          }
          nt = -1, Oe.length = 0, Ar(), li = null, (Oe.length || Qt.length) && Er();
        }
      }
      let $e = null, Ti = null;
      function ai(e) {
        const t = $e;
        return $e = e, Ti = e && e.type.__scopeId || null, t;
      }
      function Ia(e) {
        Ti = e;
      }
      function Na() {
        Ti = null;
      }
      const Da = (e) => ge;
      function ge(e, t = $e, n) {
        if (!t || e._n) return e;
        const i = (...o) => {
          i._d && rs(-1);
          const s = ai(t);
          let r;
          try {
            r = e(...o);
          } finally {
            ai(s), i._d && rs(1);
          }
          return r;
        };
        return i._n = true, i._c = true, i._d = true, i;
      }
      function ee(e, t) {
        if ($e === null) return e;
        const n = Oi($e), i = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
          let [s, r, l, a = oe] = t[o];
          s && (W(s) && (s = {
            mounted: s,
            updated: s
          }), s.deep && ht(r), i.push({
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
      function Lt(e, t, n, i) {
        const o = e.dirs, s = t && t.dirs;
        for (let r = 0; r < o.length; r++) {
          const l = o[r];
          s && (l.oldValue = s[r].value);
          let a = l.dir[i];
          a && (wt(), ct(a, n, 8, [
            e.el,
            l,
            e,
            t
          ]), vt());
        }
      }
      const Ha = Symbol("_vte"), La = (e) => e.__isTeleport;
      function Eo(e, t) {
        e.shapeFlag & 6 && e.component ? (e.transition = t, Eo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
      }
      function ln(e, t) {
        return W(e) ? Pe({
          name: e.name
        }, t, {
          setup: e
        }) : e;
      }
      function Or(e) {
        e.ids = [
          e.ids[0] + e.ids[2]++ + "-",
          0,
          0
        ];
      }
      function ci(e, t, n, i, o = false) {
        if (B(e)) {
          e.forEach((v, g) => ci(v, t && (B(t) ? t[g] : t), n, i, o));
          return;
        }
        if (Zt(i) && !o) {
          i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ci(e, t, n, i.component.subTree);
          return;
        }
        const s = i.shapeFlag & 4 ? Oi(i.component) : i.el, r = o ? null : s, { i: l, r: a } = e, u = t && t.r, c = l.refs === oe ? l.refs = {} : l.refs, p = l.setupState, h = Q(p), _ = p === oe ? () => false : (v) => Z(h, v);
        if (u != null && u !== a && (pe(u) ? (c[u] = null, _(u) && (p[u] = null)) : ve(u) && (u.value = null)), W(a)) kn(a, l, 12, [
          r,
          c
        ]);
        else {
          const v = pe(a), g = ve(a);
          if (v || g) {
            const I = () => {
              if (e.f) {
                const A = v ? _(a) ? p[a] : c[a] : a.value;
                o ? B(A) && wo(A, s) : B(A) ? A.includes(s) || A.push(s) : v ? (c[a] = [
                  s
                ], _(a) && (p[a] = c[a])) : (a.value = [
                  s
                ], e.k && (c[e.k] = a.value));
              } else v ? (c[a] = r, _(a) && (p[a] = r)) : g && (a.value = r, e.k && (c[e.k] = r));
            };
            r ? (I.id = -1, Le(I, n)) : I();
          }
        }
      }
      yi().requestIdleCallback;
      yi().cancelIdleCallback;
      const Zt = (e) => !!e.type.__asyncLoader, Rr = (e) => e.type.__isKeepAlive;
      function ka(e, t) {
        Mr(e, "a", t);
      }
      function Fa(e, t) {
        Mr(e, "da", t);
      }
      function Mr(e, t, n = Ce) {
        const i = e.__wdc || (e.__wdc = () => {
          let o = n;
          for (; o; ) {
            if (o.isDeactivated) return;
            o = o.parent;
          }
          return e();
        });
        if (Ci(t, i, n), n) {
          let o = n.parent;
          for (; o && o.parent; ) Rr(o.parent.vnode) && za(i, t, n, o), o = o.parent;
        }
      }
      function za(e, t, n, i) {
        const o = Ci(t, e, i, true);
        Nr(() => {
          wo(i[t], o);
        }, n);
      }
      function Ci(e, t, n = Ce, i = false) {
        if (n) {
          const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
            wt();
            const l = Fn(n), a = ct(t, n, e, r);
            return l(), vt(), a;
          });
          return i ? o.unshift(s) : o.push(s), s;
        }
      }
      const yt = (e) => (t, n = Ce) => {
        (!En || e === "sp") && Ci(e, (...i) => t(...i), n);
      }, Ba = yt("bm"), Ir = yt("m"), ja = yt("bu"), qa = yt("u"), Va = yt("bum"), Nr = yt("um"), Ua = yt("sp"), Wa = yt("rtg"), Ka = yt("rtc");
      function Ga(e, t = Ce) {
        Ci("ec", e, t);
      }
      const Oo = "components", Ya = "directives";
      function Cn(e, t) {
        return Ro(Oo, e, true, t) || e;
      }
      const Dr = Symbol.for("v-ndc");
      function Xa(e) {
        return pe(e) ? Ro(Oo, e, false) || e : e || Dr;
      }
      function Pi(e) {
        return Ro(Ya, e);
      }
      function Ro(e, t, n = true, i = false) {
        const o = $e || Ce;
        if (o) {
          const s = o.type;
          if (e === Oo) {
            const l = Dc(s, false);
            if (l && (l === t || l === je(t) || l === bi(je(t)))) return s;
          }
          const r = Jo(o[e] || s[e], t) || Jo(o.appContext[e], t);
          return !r && i ? s : r;
        }
      }
      function Jo(e, t) {
        return e && (e[t] || e[je(t)] || e[bi(je(t))]);
      }
      function Et(e, t, n, i) {
        let o;
        const s = n, r = B(e);
        if (r || pe(e)) {
          const l = r && Jt(e);
          let a = false, u = false;
          l && (a = !Be(e), u = Mt(e), e = xi(e)), o = new Array(e.length);
          for (let c = 0, p = e.length; c < p; c++) o[c] = t(a ? u ? si(xe(e[c])) : xe(e[c]) : e[c], c, void 0, s);
        } else if (typeof e == "number") {
          o = new Array(e);
          for (let l = 0; l < e; l++) o[l] = t(l + 1, l, void 0, s);
        } else if (re(e)) if (e[Symbol.iterator]) o = Array.from(e, (l, a) => t(l, a, void 0, s));
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
      function st(e, t, n = {}, i, o) {
        if ($e.ce || $e.parent && Zt($e.parent) && $e.parent.ce) return t !== "default" && (n.name = t), N(), Fe(ie, null, [
          se("slot", n, i)
        ], 64);
        let s = e[t];
        s && s._c && (s._d = false), N();
        const r = s && Hr(s(n)), l = n.key || r && r.key, a = Fe(ie, {
          key: (l && !Ye(l) ? l : `_${t}`) + ""
        }, r || [], r && e._ === 1 ? 64 : -2);
        return !o && a.scopeId && (a.slotScopeIds = [
          a.scopeId + "-s"
        ]), s && s._c && (s._d = true), a;
      }
      function Hr(e) {
        return e.some((t) => An(t) ? !(t.type === bt || t.type === ie && !Hr(t.children)) : true) ? e : null;
      }
      const io = (e) => e ? nl(e) ? Oi(e) : io(e.parent) : null, mn = Pe(/* @__PURE__ */ Object.create(null), {
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
        $options: (e) => kr(e),
        $forceUpdate: (e) => e.f || (e.f = () => {
          Ao(e.update);
        }),
        $nextTick: (e) => e.n || (e.n = Po.bind(e.proxy)),
        $watch: (e) => wc.bind(e)
      }), Ui = (e, t) => e !== oe && !e.__isScriptSetup && Z(e, t), Ja = {
        get({ _: e }, t) {
          if (t === "__v_skip") return true;
          const { ctx: n, setupState: i, data: o, props: s, accessCache: r, type: l, appContext: a } = e;
          let u;
          if (t[0] !== "$") {
            const _ = r[t];
            if (_ !== void 0) switch (_) {
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
              if (o !== oe && Z(o, t)) return r[t] = 2, o[t];
              if ((u = e.propsOptions[0]) && Z(u, t)) return r[t] = 3, s[t];
              if (n !== oe && Z(n, t)) return r[t] = 4, n[t];
              oo && (r[t] = 0);
            }
          }
          const c = mn[t];
          let p, h;
          if (c) return t === "$attrs" && Te(e.attrs, "get", ""), c(e);
          if ((p = l.__cssModules) && (p = p[t])) return p;
          if (n !== oe && Z(n, t)) return r[t] = 4, n[t];
          if (h = a.config.globalProperties, Z(h, t)) return h[t];
        },
        set({ _: e }, t, n) {
          const { data: i, setupState: o, ctx: s } = e;
          return Ui(o, t) ? (o[t] = n, true) : i !== oe && Z(i, t) ? (i[t] = n, true) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
        },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: o, propsOptions: s } }, r) {
          let l;
          return !!n[r] || e !== oe && Z(e, r) || Ui(t, r) || (l = s[0]) && Z(l, r) || Z(i, r) || Z(mn, r) || Z(o.config.globalProperties, r);
        },
        defineProperty(e, t, n) {
          return n.get != null ? e._.accessCache[t] = 0 : Z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
        }
      };
      function Qo(e) {
        return B(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
      }
      let oo = true;
      function Qa(e) {
        const t = kr(e), n = e.proxy, i = e.ctx;
        oo = false, t.beforeCreate && Zo(t.beforeCreate, e, "bc");
        const { data: o, computed: s, methods: r, watch: l, provide: a, inject: u, created: c, beforeMount: p, mounted: h, beforeUpdate: _, updated: v, activated: g, deactivated: I, beforeDestroy: A, beforeUnmount: M, destroyed: D, unmounted: b, render: E, renderTracked: H, renderTriggered: z, errorCaptured: q, serverPrefetch: ne, expose: K, inheritAttrs: le, components: be, directives: Ae, filters: _e } = t;
        if (u && Za(u, i, null), r) for (const Y in r) {
          const G = r[Y];
          W(G) && (i[Y] = G.bind(n));
        }
        if (o) {
          const Y = o.call(n, n);
          re(Y) && (e.data = $i(Y));
        }
        if (oo = true, s) for (const Y in s) {
          const G = s[Y], Se = W(G) ? G.bind(n, n) : W(G.get) ? G.get.bind(n, n) : rt, Ut = !W(G) && W(G.set) ? G.set.bind(n) : rt, Ht = qe({
            get: Se,
            set: Ut
          });
          Object.defineProperty(i, Y, {
            enumerable: true,
            configurable: true,
            get: () => Ht.value,
            set: (Je) => Ht.value = Je
          });
        }
        if (l) for (const Y in l) Lr(l[Y], i, n, Y);
        if (a) {
          const Y = W(a) ? a.call(n) : a;
          Reflect.ownKeys(Y).forEach((G) => {
            sc(G, Y[G]);
          });
        }
        c && Zo(c, e, "c");
        function ue(Y, G) {
          B(G) ? G.forEach((Se) => Y(Se.bind(n))) : G && Y(G.bind(n));
        }
        if (ue(Ba, p), ue(Ir, h), ue(ja, _), ue(qa, v), ue(ka, g), ue(Fa, I), ue(Ga, q), ue(Ka, H), ue(Wa, z), ue(Va, M), ue(Nr, b), ue(Ua, ne), B(K)) if (K.length) {
          const Y = e.exposed || (e.exposed = {});
          K.forEach((G) => {
            Object.defineProperty(Y, G, {
              get: () => n[G],
              set: (Se) => n[G] = Se
            });
          });
        } else e.exposed || (e.exposed = {});
        E && e.render === rt && (e.render = E), le != null && (e.inheritAttrs = le), be && (e.components = be), Ae && (e.directives = Ae), ne && Or(e);
      }
      function Za(e, t, n = rt) {
        B(e) && (e = so(e));
        for (const i in e) {
          const o = e[i];
          let s;
          re(o) ? "default" in o ? s = Jn(o.from || i, o.default, true) : s = Jn(o.from || i) : s = Jn(o), ve(s) ? Object.defineProperty(t, i, {
            enumerable: true,
            configurable: true,
            get: () => s.value,
            set: (r) => s.value = r
          }) : t[i] = s;
        }
      }
      function Zo(e, t, n) {
        ct(B(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
      }
      function Lr(e, t, n, i) {
        let o = i.includes(".") ? Jr(n, i) : () => n[i];
        if (pe(e)) {
          const s = t[e];
          W(s) && Ne(o, s);
        } else if (W(e)) Ne(o, e.bind(n));
        else if (re(e)) if (B(e)) e.forEach((s) => Lr(s, t, n, i));
        else {
          const s = W(e.handler) ? e.handler.bind(n) : t[e.handler];
          W(s) && Ne(o, s, e);
        }
      }
      function kr(e) {
        const t = e.type, { mixins: n, extends: i } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: r } } = e.appContext, l = s.get(t);
        let a;
        return l ? a = l : !o.length && !n && !i ? a = t : (a = {}, o.length && o.forEach((u) => ui(a, u, r, true)), ui(a, t, r)), re(t) && s.set(t, a), a;
      }
      function ui(e, t, n, i = false) {
        const { mixins: o, extends: s } = t;
        s && ui(e, s, n, true), o && o.forEach((r) => ui(e, r, n, true));
        for (const r in t) if (!(i && r === "expose")) {
          const l = ec[r] || n && n[r];
          e[r] = l ? l(e[r], t[r]) : t[r];
        }
        return e;
      }
      const ec = {
        data: es,
        props: ts,
        emits: ts,
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
        provide: es,
        inject: tc
      };
      function es(e, t) {
        return t ? e ? function() {
          return Pe(W(e) ? e.call(this, this) : e, W(t) ? t.call(this, this) : t);
        } : t : e;
      }
      function tc(e, t) {
        return pn(so(e), so(t));
      }
      function so(e) {
        if (B(e)) {
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
      function ts(e, t) {
        return e ? B(e) && B(t) ? [
          .../* @__PURE__ */ new Set([
            ...e,
            ...t
          ])
        ] : Pe(/* @__PURE__ */ Object.create(null), Qo(e), Qo(t ?? {})) : t;
      }
      function nc(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = Pe(/* @__PURE__ */ Object.create(null), e);
        for (const i in t) n[i] = Ee(e[i], t[i]);
        return n;
      }
      function Fr() {
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
          W(i) || (i = Pe({}, i)), o != null && !re(o) && (o = null);
          const s = Fr(), r = /* @__PURE__ */ new WeakSet(), l = [];
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
            use(c, ...p) {
              return r.has(c) || (c && W(c.install) ? (r.add(c), c.install(u, ...p)) : W(c) && (r.add(c), c(u, ...p))), u;
            },
            mixin(c) {
              return s.mixins.includes(c) || s.mixins.push(c), u;
            },
            component(c, p) {
              return p ? (s.components[c] = p, u) : s.components[c];
            },
            directive(c, p) {
              return p ? (s.directives[c] = p, u) : s.directives[c];
            },
            mount(c, p, h) {
              if (!a) {
                const _ = u._ceVNode || se(i, o);
                return _.appContext = s, h === true ? h = "svg" : h === false && (h = void 0), e(_, c, h), a = true, u._container = c, c.__vue_app__ = u, Oi(_.component);
              }
            },
            onUnmount(c) {
              l.push(c);
            },
            unmount() {
              a && (ct(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
            },
            provide(c, p) {
              return s.provides[c] = p, u;
            },
            runWithContext(c) {
              const p = en;
              en = u;
              try {
                return c();
              } finally {
                en = p;
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
      function Jn(e, t, n = false) {
        const i = Ce || $e;
        if (i || en) {
          let o = en ? en._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
          if (o && e in o) return o[e];
          if (arguments.length > 1) return n && W(t) ? t.call(i && i.proxy) : t;
        }
      }
      const zr = {}, Br = () => Object.create(zr), jr = (e) => Object.getPrototypeOf(e) === zr;
      function rc(e, t, n, i = false) {
        const o = {}, s = Br();
        e.propsDefaults = /* @__PURE__ */ Object.create(null), qr(e, t, o, s);
        for (const r in e.propsOptions[0]) r in o || (o[r] = void 0);
        n ? e.props = i ? o : va(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
      }
      function lc(e, t, n, i) {
        const { props: o, attrs: s, vnode: { patchFlag: r } } = e, l = Q(o), [a] = e.propsOptions;
        let u = false;
        if ((i || r > 0) && !(r & 16)) {
          if (r & 8) {
            const c = e.vnode.dynamicProps;
            for (let p = 0; p < c.length; p++) {
              let h = c[p];
              if (Ai(e.emitsOptions, h)) continue;
              const _ = t[h];
              if (a) if (Z(s, h)) _ !== s[h] && (s[h] = _, u = true);
              else {
                const v = je(h);
                o[v] = ro(a, l, v, _, e, false);
              }
              else _ !== s[h] && (s[h] = _, u = true);
            }
          }
        } else {
          qr(e, t, o, s) && (u = true);
          let c;
          for (const p in l) (!t || !Z(t, p) && ((c = Dt(p)) === p || !Z(t, c))) && (a ? n && (n[p] !== void 0 || n[c] !== void 0) && (o[p] = ro(a, l, p, void 0, e, true)) : delete o[p]);
          if (s !== l) for (const p in s) (!t || !Z(t, p)) && (delete s[p], u = true);
        }
        u && pt(e.attrs, "set", "");
      }
      function qr(e, t, n, i) {
        const [o, s] = e.propsOptions;
        let r = false, l;
        if (t) for (let a in t) {
          if (hn(a)) continue;
          const u = t[a];
          let c;
          o && Z(o, c = je(a)) ? !s || !s.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Ai(e.emitsOptions, a) || (!(a in i) || u !== i[a]) && (i[a] = u, r = true);
        }
        if (s) {
          const a = Q(n), u = l || oe;
          for (let c = 0; c < s.length; c++) {
            const p = s[c];
            n[p] = ro(o, a, p, u[p], e, !Z(u, p));
          }
        }
        return r;
      }
      function ro(e, t, n, i, o, s) {
        const r = e[n];
        if (r != null) {
          const l = Z(r, "default");
          if (l && i === void 0) {
            const a = r.default;
            if (r.type !== Function && !r.skipFactory && W(a)) {
              const { propsDefaults: u } = o;
              if (n in u) i = u[n];
              else {
                const c = Fn(o);
                i = u[n] = a.call(null, t), c();
              }
            } else i = a;
            o.ce && o.ce._setProp(n, i);
          }
          r[0] && (s && !l ? i = false : r[1] && (i === "" || i === Dt(n)) && (i = true));
        }
        return i;
      }
      const ac = /* @__PURE__ */ new WeakMap();
      function Vr(e, t, n = false) {
        const i = n ? ac : t.propsCache, o = i.get(e);
        if (o) return o;
        const s = e.props, r = {}, l = [];
        let a = false;
        if (!W(e)) {
          const c = (p) => {
            a = true;
            const [h, _] = Vr(p, t, true);
            Pe(r, h), _ && l.push(..._);
          };
          !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
        }
        if (!s && !a) return re(e) && i.set(e, Yt), Yt;
        if (B(s)) for (let c = 0; c < s.length; c++) {
          const p = je(s[c]);
          ns(p) && (r[p] = oe);
        }
        else if (s) for (const c in s) {
          const p = je(c);
          if (ns(p)) {
            const h = s[c], _ = r[p] = B(h) || W(h) ? {
              type: h
            } : Pe({}, h), v = _.type;
            let g = false, I = true;
            if (B(v)) for (let A = 0; A < v.length; ++A) {
              const M = v[A], D = W(M) && M.name;
              if (D === "Boolean") {
                g = true;
                break;
              } else D === "String" && (I = false);
            }
            else g = W(v) && v.name === "Boolean";
            _[0] = g, _[1] = I, (g || Z(_, "default")) && l.push(p);
          }
        }
        const u = [
          r,
          l
        ];
        return re(e) && i.set(e, u), u;
      }
      function ns(e) {
        return e[0] !== "$" && !hn(e);
      }
      const Mo = (e) => e[0] === "_" || e === "$stable", Io = (e) => B(e) ? e.map(it) : [
        it(e)
      ], cc = (e, t, n) => {
        if (t._n) return t;
        const i = ge((...o) => Io(t(...o)), n);
        return i._c = false, i;
      }, Ur = (e, t, n) => {
        const i = e._ctx;
        for (const o in e) {
          if (Mo(o)) continue;
          const s = e[o];
          if (W(s)) t[o] = cc(o, s, i);
          else if (s != null) {
            const r = Io(s);
            t[o] = () => r;
          }
        }
      }, Wr = (e, t) => {
        const n = Io(t);
        e.slots.default = () => n;
      }, Kr = (e, t, n) => {
        for (const i in t) (n || !Mo(i)) && (e[i] = t[i]);
      }, uc = (e, t, n) => {
        const i = e.slots = Br();
        if (e.vnode.shapeFlag & 32) {
          const o = t._;
          o ? (Kr(i, t, n), n && tr(i, "_", o, true)) : Ur(t, i);
        } else t && Wr(e, t);
      }, fc = (e, t, n) => {
        const { vnode: i, slots: o } = e;
        let s = true, r = oe;
        if (i.shapeFlag & 32) {
          const l = t._;
          l ? n && l === 1 ? s = false : Kr(o, t, n) : (s = !t.$stable, Ur(t, o)), r = t;
        } else t && (Wr(e, t), r = {
          default: 1
        });
        if (s) for (const l in o) !Mo(l) && r[l] == null && delete o[l];
      }, Le = Tc;
      function dc(e) {
        return pc(e);
      }
      function pc(e, t) {
        const n = yi();
        n.__VUE__ = true;
        const { insert: i, remove: o, patchProp: s, createElement: r, createText: l, createComment: a, setText: u, setElementText: c, parentNode: p, nextSibling: h, setScopeId: _ = rt, insertStaticContent: v } = e, g = (f, d, m, x = null, w = null, y = null, O = void 0, P = null, T = !!d.dynamicChildren) => {
          if (f === d) return;
          f && !dn(f, d) && (x = jn(f), Je(f, w, y, true), f = null), d.patchFlag === -2 && (T = false, d.dynamicChildren = null);
          const { type: $, ref: k, shapeFlag: R } = d;
          switch ($) {
            case Ei:
              I(f, d, m, x);
              break;
            case bt:
              A(f, d, m, x);
              break;
            case Ki:
              f == null && M(d, m, x, O);
              break;
            case ie:
              be(f, d, m, x, w, y, O, P, T);
              break;
            default:
              R & 1 ? E(f, d, m, x, w, y, O, P, T) : R & 6 ? Ae(f, d, m, x, w, y, O, P, T) : (R & 64 || R & 128) && $.process(f, d, m, x, w, y, O, P, T, cn);
          }
          k != null && w && ci(k, f && f.ref, y, d || f, !d);
        }, I = (f, d, m, x) => {
          if (f == null) i(d.el = l(d.children), m, x);
          else {
            const w = d.el = f.el;
            d.children !== f.children && u(w, d.children);
          }
        }, A = (f, d, m, x) => {
          f == null ? i(d.el = a(d.children || ""), m, x) : d.el = f.el;
        }, M = (f, d, m, x) => {
          [f.el, f.anchor] = v(f.children, d, m, x, f.el, f.anchor);
        }, D = ({ el: f, anchor: d }, m, x) => {
          let w;
          for (; f && f !== d; ) w = h(f), i(f, m, x), f = w;
          i(d, m, x);
        }, b = ({ el: f, anchor: d }) => {
          let m;
          for (; f && f !== d; ) m = h(f), o(f), f = m;
          o(d);
        }, E = (f, d, m, x, w, y, O, P, T) => {
          d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), f == null ? H(d, m, x, w, y, O, P, T) : ne(f, d, w, y, O, P, T);
        }, H = (f, d, m, x, w, y, O, P) => {
          let T, $;
          const { props: k, shapeFlag: R, transition: L, dirs: V } = f;
          if (T = f.el = r(f.type, y, k && k.is, k), R & 8 ? c(T, f.children) : R & 16 && q(f.children, T, null, x, w, Wi(f, y), O, P), V && Lt(f, null, x, "created"), z(T, f, f.scopeId, O, x), k) {
            for (const ae in k) ae !== "value" && !hn(ae) && s(T, ae, null, k[ae], y, x);
            "value" in k && s(T, "value", null, k.value, y), ($ = k.onVnodeBeforeMount) && tt($, x, f);
          }
          V && Lt(f, null, x, "beforeMount");
          const X = hc(w, L);
          X && L.beforeEnter(T), i(T, d, m), (($ = k && k.onVnodeMounted) || X || V) && Le(() => {
            $ && tt($, x, f), X && L.enter(T), V && Lt(f, null, x, "mounted");
          }, w);
        }, z = (f, d, m, x, w) => {
          if (m && _(f, m), x) for (let y = 0; y < x.length; y++) _(f, x[y]);
          if (w) {
            let y = w.subTree;
            if (d === y || Zr(y.type) && (y.ssContent === d || y.ssFallback === d)) {
              const O = w.vnode;
              z(f, O, O.scopeId, O.slotScopeIds, w.parent);
            }
          }
        }, q = (f, d, m, x, w, y, O, P, T = 0) => {
          for (let $ = T; $ < f.length; $++) {
            const k = f[$] = P ? Tt(f[$]) : it(f[$]);
            g(null, k, d, m, x, w, y, O, P);
          }
        }, ne = (f, d, m, x, w, y, O) => {
          const P = d.el = f.el;
          let { patchFlag: T, dynamicChildren: $, dirs: k } = d;
          T |= f.patchFlag & 16;
          const R = f.props || oe, L = d.props || oe;
          let V;
          if (m && kt(m, false), (V = L.onVnodeBeforeUpdate) && tt(V, m, d, f), k && Lt(d, f, m, "beforeUpdate"), m && kt(m, true), (R.innerHTML && L.innerHTML == null || R.textContent && L.textContent == null) && c(P, ""), $ ? K(f.dynamicChildren, $, P, m, x, Wi(d, w), y) : O || G(f, d, P, null, m, x, Wi(d, w), y, false), T > 0) {
            if (T & 16) le(P, R, L, m, w);
            else if (T & 2 && R.class !== L.class && s(P, "class", null, L.class, w), T & 4 && s(P, "style", R.style, L.style, w), T & 8) {
              const X = d.dynamicProps;
              for (let ae = 0; ae < X.length; ae++) {
                const te = X[ae], De = R[te], Me = L[te];
                (Me !== De || te === "value") && s(P, te, De, Me, w, m);
              }
            }
            T & 1 && f.children !== d.children && c(P, d.children);
          } else !O && $ == null && le(P, R, L, m, w);
          ((V = L.onVnodeUpdated) || k) && Le(() => {
            V && tt(V, m, d, f), k && Lt(d, f, m, "updated");
          }, x);
        }, K = (f, d, m, x, w, y, O) => {
          for (let P = 0; P < d.length; P++) {
            const T = f[P], $ = d[P], k = T.el && (T.type === ie || !dn(T, $) || T.shapeFlag & 198) ? p(T.el) : m;
            g(T, $, k, null, x, w, y, O, true);
          }
        }, le = (f, d, m, x, w) => {
          if (d !== m) {
            if (d !== oe) for (const y in d) !hn(y) && !(y in m) && s(f, y, d[y], null, w, x);
            for (const y in m) {
              if (hn(y)) continue;
              const O = m[y], P = d[y];
              O !== P && y !== "value" && s(f, y, P, O, w, x);
            }
            "value" in m && s(f, "value", d.value, m.value, w);
          }
        }, be = (f, d, m, x, w, y, O, P, T) => {
          const $ = d.el = f ? f.el : l(""), k = d.anchor = f ? f.anchor : l("");
          let { patchFlag: R, dynamicChildren: L, slotScopeIds: V } = d;
          V && (P = P ? P.concat(V) : V), f == null ? (i($, m, x), i(k, m, x), q(d.children || [], m, k, w, y, O, P, T)) : R > 0 && R & 64 && L && f.dynamicChildren ? (K(f.dynamicChildren, L, m, w, y, O, P), (d.key != null || w && d === w.subTree) && Gr(f, d, true)) : G(f, d, m, k, w, y, O, P, T);
        }, Ae = (f, d, m, x, w, y, O, P, T) => {
          d.slotScopeIds = P, f == null ? d.shapeFlag & 512 ? w.ctx.activate(d, m, x, O, T) : _e(d, m, x, w, y, O, T) : Xe(f, d, T);
        }, _e = (f, d, m, x, w, y, O) => {
          const P = f.component = Oc(f, x, w);
          if (Rr(f) && (P.ctx.renderer = cn), Rc(P, false, O), P.asyncDep) {
            if (w && w.registerDep(P, ue, O), !f.el) {
              const T = P.subTree = se(bt);
              A(null, T, d, m);
            }
          } else ue(P, f, d, m, w, y, O);
        }, Xe = (f, d, m) => {
          const x = d.component = f.component;
          if ($c(f, d, m)) if (x.asyncDep && !x.asyncResolved) {
            Y(x, d, m);
            return;
          } else x.next = d, x.update();
          else d.el = f.el, x.vnode = d;
        }, ue = (f, d, m, x, w, y, O) => {
          const P = () => {
            if (f.isMounted) {
              let { next: R, bu: L, u: V, parent: X, vnode: ae } = f;
              {
                const Ze = Yr(f);
                if (Ze) {
                  R && (R.el = ae.el, Y(f, R, O)), Ze.asyncDep.then(() => {
                    f.isUnmounted || P();
                  });
                  return;
                }
              }
              let te = R, De;
              kt(f, false), R ? (R.el = ae.el, Y(f, R, O)) : R = ae, L && Xn(L), (De = R.props && R.props.onVnodeBeforeUpdate) && tt(De, X, R, ae), kt(f, true);
              const Me = os(f), Qe = f.subTree;
              f.subTree = Me, g(Qe, Me, p(Qe.el), jn(Qe), f, w, y), R.el = Me.el, te === null && Sc(f, Me.el), V && Le(V, w), (De = R.props && R.props.onVnodeUpdated) && Le(() => tt(De, X, R, ae), w);
            } else {
              let R;
              const { el: L, props: V } = d, { bm: X, m: ae, parent: te, root: De, type: Me } = f, Qe = Zt(d);
              kt(f, false), X && Xn(X), !Qe && (R = V && V.onVnodeBeforeMount) && tt(R, te, d), kt(f, true);
              {
                De.ce && De.ce._injectChildStyle(Me);
                const Ze = f.subTree = os(f);
                g(null, Ze, m, x, f, w, y), d.el = Ze.el;
              }
              if (ae && Le(ae, w), !Qe && (R = V && V.onVnodeMounted)) {
                const Ze = d;
                Le(() => tt(R, te, Ze), w);
              }
              (d.shapeFlag & 256 || te && Zt(te.vnode) && te.vnode.shapeFlag & 256) && f.a && Le(f.a, w), f.isMounted = true, d = m = x = null;
            }
          };
          f.scope.on();
          const T = f.effect = new rr(P);
          f.scope.off();
          const $ = f.update = T.run.bind(T), k = f.job = T.runIfDirty.bind(T);
          k.i = f, k.id = f.uid, T.scheduler = () => Ao(k), kt(f, true), $();
        }, Y = (f, d, m) => {
          d.component = f;
          const x = f.vnode.props;
          f.vnode = d, f.next = null, lc(f, d.props, x, m), fc(f, d.children, m), wt(), Xo(f), vt();
        }, G = (f, d, m, x, w, y, O, P, T = false) => {
          const $ = f && f.children, k = f ? f.shapeFlag : 0, R = d.children, { patchFlag: L, shapeFlag: V } = d;
          if (L > 0) {
            if (L & 128) {
              Ut($, R, m, x, w, y, O, P, T);
              return;
            } else if (L & 256) {
              Se($, R, m, x, w, y, O, P, T);
              return;
            }
          }
          V & 8 ? (k & 16 && an($, w, y), R !== $ && c(m, R)) : k & 16 ? V & 16 ? Ut($, R, m, x, w, y, O, P, T) : an($, w, y, true) : (k & 8 && c(m, ""), V & 16 && q(R, m, x, w, y, O, P, T));
        }, Se = (f, d, m, x, w, y, O, P, T) => {
          f = f || Yt, d = d || Yt;
          const $ = f.length, k = d.length, R = Math.min($, k);
          let L;
          for (L = 0; L < R; L++) {
            const V = d[L] = T ? Tt(d[L]) : it(d[L]);
            g(f[L], V, m, null, w, y, O, P, T);
          }
          $ > k ? an(f, w, y, true, false, R) : q(d, m, x, w, y, O, P, T, R);
        }, Ut = (f, d, m, x, w, y, O, P, T) => {
          let $ = 0;
          const k = d.length;
          let R = f.length - 1, L = k - 1;
          for (; $ <= R && $ <= L; ) {
            const V = f[$], X = d[$] = T ? Tt(d[$]) : it(d[$]);
            if (dn(V, X)) g(V, X, m, null, w, y, O, P, T);
            else break;
            $++;
          }
          for (; $ <= R && $ <= L; ) {
            const V = f[R], X = d[L] = T ? Tt(d[L]) : it(d[L]);
            if (dn(V, X)) g(V, X, m, null, w, y, O, P, T);
            else break;
            R--, L--;
          }
          if ($ > R) {
            if ($ <= L) {
              const V = L + 1, X = V < k ? d[V].el : x;
              for (; $ <= L; ) g(null, d[$] = T ? Tt(d[$]) : it(d[$]), m, X, w, y, O, P, T), $++;
            }
          } else if ($ > L) for (; $ <= R; ) Je(f[$], w, y, true), $++;
          else {
            const V = $, X = $, ae = /* @__PURE__ */ new Map();
            for ($ = X; $ <= L; $++) {
              const He = d[$] = T ? Tt(d[$]) : it(d[$]);
              He.key != null && ae.set(He.key, $);
            }
            let te, De = 0;
            const Me = L - X + 1;
            let Qe = false, Ze = 0;
            const un = new Array(Me);
            for ($ = 0; $ < Me; $++) un[$] = 0;
            for ($ = V; $ <= R; $++) {
              const He = f[$];
              if (De >= Me) {
                Je(He, w, y, true);
                continue;
              }
              let et;
              if (He.key != null) et = ae.get(He.key);
              else for (te = X; te <= L; te++) if (un[te - X] === 0 && dn(He, d[te])) {
                et = te;
                break;
              }
              et === void 0 ? Je(He, w, y, true) : (un[et - X] = $ + 1, et >= Ze ? Ze = et : Qe = true, g(He, d[et], m, null, w, y, O, P, T), De++);
            }
            const qo = Qe ? _c(un) : Yt;
            for (te = qo.length - 1, $ = Me - 1; $ >= 0; $--) {
              const He = X + $, et = d[He], Vo = He + 1 < k ? d[He + 1].el : x;
              un[$] === 0 ? g(null, et, m, Vo, w, y, O, P, T) : Qe && (te < 0 || $ !== qo[te] ? Ht(et, m, Vo, 2) : te--);
            }
          }
        }, Ht = (f, d, m, x, w = null) => {
          const { el: y, type: O, transition: P, children: T, shapeFlag: $ } = f;
          if ($ & 6) {
            Ht(f.component.subTree, d, m, x);
            return;
          }
          if ($ & 128) {
            f.suspense.move(d, m, x);
            return;
          }
          if ($ & 64) {
            O.move(f, d, m, cn);
            return;
          }
          if (O === ie) {
            i(y, d, m);
            for (let R = 0; R < T.length; R++) Ht(T[R], d, m, x);
            i(f.anchor, d, m);
            return;
          }
          if (O === Ki) {
            D(f, d, m);
            return;
          }
          if (x !== 2 && $ & 1 && P) if (x === 0) P.beforeEnter(y), i(y, d, m), Le(() => P.enter(y), w);
          else {
            const { leave: R, delayLeave: L, afterLeave: V } = P, X = () => {
              f.ctx.isUnmounted ? o(y) : i(y, d, m);
            }, ae = () => {
              R(y, () => {
                X(), V && V();
              });
            };
            L ? L(y, X, ae) : ae();
          }
          else i(y, d, m);
        }, Je = (f, d, m, x = false, w = false) => {
          const { type: y, props: O, ref: P, children: T, dynamicChildren: $, shapeFlag: k, patchFlag: R, dirs: L, cacheIndex: V } = f;
          if (R === -2 && (w = false), P != null && (wt(), ci(P, null, m, f, true), vt()), V != null && (d.renderCache[V] = void 0), k & 256) {
            d.ctx.deactivate(f);
            return;
          }
          const X = k & 1 && L, ae = !Zt(f);
          let te;
          if (ae && (te = O && O.onVnodeBeforeUnmount) && tt(te, d, f), k & 6) kl(f.component, m, x);
          else {
            if (k & 128) {
              f.suspense.unmount(m, x);
              return;
            }
            X && Lt(f, null, d, "beforeUnmount"), k & 64 ? f.type.remove(f, d, m, cn, x) : $ && !$.hasOnce && (y !== ie || R > 0 && R & 64) ? an($, d, m, false, true) : (y === ie && R & 384 || !w && k & 16) && an(T, d, m), x && Bo(f);
          }
          (ae && (te = O && O.onVnodeUnmounted) || X) && Le(() => {
            te && tt(te, d, f), X && Lt(f, null, d, "unmounted");
          }, m);
        }, Bo = (f) => {
          const { type: d, el: m, anchor: x, transition: w } = f;
          if (d === ie) {
            Ll(m, x);
            return;
          }
          if (d === Ki) {
            b(f);
            return;
          }
          const y = () => {
            o(m), w && !w.persisted && w.afterLeave && w.afterLeave();
          };
          if (f.shapeFlag & 1 && w && !w.persisted) {
            const { leave: O, delayLeave: P } = w, T = () => O(m, y);
            P ? P(f.el, y, T) : T();
          } else y();
        }, Ll = (f, d) => {
          let m;
          for (; f !== d; ) m = h(f), o(f), f = m;
          o(d);
        }, kl = (f, d, m) => {
          const { bum: x, scope: w, job: y, subTree: O, um: P, m: T, a: $, parent: k, slots: { __: R } } = f;
          is(T), is($), x && Xn(x), k && B(R) && R.forEach((L) => {
            k.renderCache[L] = void 0;
          }), w.stop(), y && (y.flags |= 8, Je(O, f, d, m)), P && Le(P, d), Le(() => {
            f.isUnmounted = true;
          }, d), d && d.pendingBranch && !d.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
        }, an = (f, d, m, x = false, w = false, y = 0) => {
          for (let O = y; O < f.length; O++) Je(f[O], d, m, x, w);
        }, jn = (f) => {
          if (f.shapeFlag & 6) return jn(f.component.subTree);
          if (f.shapeFlag & 128) return f.suspense.next();
          const d = h(f.anchor || f.el), m = d && d[Ha];
          return m ? h(m) : d;
        };
        let Fi = false;
        const jo = (f, d, m) => {
          f == null ? d._vnode && Je(d._vnode, null, null, true) : g(d._vnode || null, f, d, null, null, null, m), d._vnode = f, Fi || (Fi = true, Xo(), Ar(), Fi = false);
        }, cn = {
          p: g,
          um: Je,
          m: Ht,
          r: Bo,
          mt: _e,
          mc: q,
          pc: G,
          pbc: K,
          n: jn,
          o: e
        };
        return {
          render: jo,
          hydrate: void 0,
          createApp: oc(jo)
        };
      }
      function Wi({ type: e, props: t }, n) {
        return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
      }
      function kt({ effect: e, job: t }, n) {
        n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
      }
      function hc(e, t) {
        return (!e || e && !e.pendingBranch) && t && !t.persisted;
      }
      function Gr(e, t, n = false) {
        const i = e.children, o = t.children;
        if (B(i) && B(o)) for (let s = 0; s < i.length; s++) {
          const r = i[s];
          let l = o[s];
          l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = Tt(o[s]), l.el = r.el), !n && l.patchFlag !== -2 && Gr(r, l)), l.type === Ei && (l.el = r.el), l.type === bt && !l.el && (l.el = r.el);
        }
      }
      function _c(e) {
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
      function Yr(e) {
        const t = e.subTree.component;
        if (t) return t.asyncDep && !t.asyncResolved ? t : Yr(t);
      }
      function is(e) {
        if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
      }
      const gc = Symbol.for("v-scx"), mc = () => Jn(gc);
      function Ne(e, t, n) {
        return Xr(e, t, n);
      }
      function Xr(e, t, n = oe) {
        const { immediate: i, deep: o, flush: s, once: r } = n, l = Pe({}, n), a = t && i || !t && s !== "post";
        let u;
        if (En) {
          if (s === "sync") {
            const _ = mc();
            u = _.__watcherHandles || (_.__watcherHandles = []);
          } else if (!a) {
            const _ = () => {
            };
            return _.stop = rt, _.resume = rt, _.pause = rt, _;
          }
        }
        const c = Ce;
        l.call = (_, v, g) => ct(_, c, v, g);
        let p = false;
        s === "post" ? l.scheduler = (_) => {
          Le(_, c && c.suspense);
        } : s !== "sync" && (p = true, l.scheduler = (_, v) => {
          v ? _() : Ao(_);
        }), l.augmentJob = (_) => {
          t && (_.flags |= 4), p && (_.flags |= 2, c && (_.id = c.uid, _.i = c));
        };
        const h = Ea(e, t, l);
        return En && (u ? u.push(h) : a && h()), h;
      }
      function wc(e, t, n) {
        const i = this.proxy, o = pe(e) ? e.includes(".") ? Jr(i, e) : () => i[e] : e.bind(i, i);
        let s;
        W(t) ? s = t : (s = t.handler, n = t);
        const r = Fn(this), l = Xr(o, s.bind(i), n);
        return r(), l;
      }
      function Jr(e, t) {
        const n = t.split(".");
        return () => {
          let i = e;
          for (let o = 0; o < n.length && i; o++) i = i[n[o]];
          return i;
        };
      }
      const vc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${Dt(t)}Modifiers`];
      function bc(e, t, ...n) {
        if (e.isUnmounted) return;
        const i = e.vnode.props || oe;
        let o = n;
        const s = t.startsWith("update:"), r = s && vc(i, t.slice(7));
        r && (r.trim && (o = n.map((c) => pe(c) ? c.trim() : c)), r.number && (o = n.map(ii)));
        let l, a = i[l = zi(t)] || i[l = zi(je(t))];
        !a && s && (a = i[l = zi(Dt(t))]), a && ct(a, e, 6, o);
        const u = i[l + "Once"];
        if (u) {
          if (!e.emitted) e.emitted = {};
          else if (e.emitted[l]) return;
          e.emitted[l] = true, ct(u, e, 6, o);
        }
      }
      function Qr(e, t, n = false) {
        const i = t.emitsCache, o = i.get(e);
        if (o !== void 0) return o;
        const s = e.emits;
        let r = {}, l = false;
        if (!W(e)) {
          const a = (u) => {
            const c = Qr(u, t, true);
            c && (l = true, Pe(r, c));
          };
          !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
        }
        return !s && !l ? (re(e) && i.set(e, null), null) : (B(s) ? s.forEach((a) => r[a] = null) : Pe(r, s), re(e) && i.set(e, r), r);
      }
      function Ai(e, t) {
        return !e || !mi(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, Dt(t)) || Z(e, t));
      }
      function os(e) {
        const { type: t, vnode: n, proxy: i, withProxy: o, propsOptions: [s], slots: r, attrs: l, emit: a, render: u, renderCache: c, props: p, data: h, setupState: _, ctx: v, inheritAttrs: g } = e, I = ai(e);
        let A, M;
        try {
          if (n.shapeFlag & 4) {
            const b = o || i, E = b;
            A = it(u.call(E, b, c, p, _, h, v)), M = l;
          } else {
            const b = t;
            A = it(b.length > 1 ? b(p, {
              attrs: l,
              slots: r,
              emit: a
            }) : b(p, null)), M = t.props ? l : yc(l);
          }
        } catch (b) {
          wn.length = 0, Si(b, e, 1), A = se(bt);
        }
        let D = A;
        if (M && g !== false) {
          const b = Object.keys(M), { shapeFlag: E } = D;
          b.length && E & 7 && (s && b.some(mo) && (M = xc(M, s)), D = on(D, M, false, true));
        }
        return n.dirs && (D = on(D, null, false, true), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && Eo(D, n.transition), A = D, ai(I), A;
      }
      const yc = (e) => {
        let t;
        for (const n in e) (n === "class" || n === "style" || mi(n)) && ((t || (t = {}))[n] = e[n]);
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
          if (a & 16) return i ? ss(i, r, u) : !!r;
          if (a & 8) {
            const c = t.dynamicProps;
            for (let p = 0; p < c.length; p++) {
              const h = c[p];
              if (r[h] !== i[h] && !Ai(u, h)) return true;
            }
          }
        } else return (o || l) && (!l || !l.$stable) ? true : i === r ? false : i ? r ? ss(i, r, u) : true : !!r;
        return false;
      }
      function ss(e, t, n) {
        const i = Object.keys(t);
        if (i.length !== Object.keys(e).length) return true;
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          if (t[s] !== e[s] && !Ai(n, s)) return true;
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
      const Zr = (e) => e.__isSuspense;
      function Tc(e, t) {
        t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : Ma(e);
      }
      const ie = Symbol.for("v-fgt"), Ei = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), Ki = Symbol.for("v-stc"), wn = [];
      let ke = null;
      function N(e = false) {
        wn.push(ke = e ? null : []);
      }
      function Cc() {
        wn.pop(), ke = wn[wn.length - 1] || null;
      }
      let Pn = 1;
      function rs(e, t = false) {
        Pn += e, e < 0 && ke && t && (ke.hasOnce = true);
      }
      function el(e) {
        return e.dynamicChildren = Pn > 0 ? ke || Yt : null, Cc(), Pn > 0 && ke && ke.push(e), e;
      }
      function F(e, t, n, i, o, s) {
        return el(C(e, t, n, i, o, s, true));
      }
      function Fe(e, t, n, i, o) {
        return el(se(e, t, n, i, o, true));
      }
      function An(e) {
        return e ? e.__v_isVNode === true : false;
      }
      function dn(e, t) {
        return e.type === t.type && e.key === t.key;
      }
      const tl = ({ key: e }) => e ?? null, Qn = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || ve(e) || W(e) ? {
        i: $e,
        r: e,
        k: t,
        f: !!n
      } : e : null);
      function C(e, t = null, n = null, i = 0, o = null, s = e === ie ? 0 : 1, r = false, l = false) {
        const a = {
          __v_isVNode: true,
          __v_skip: true,
          type: e,
          props: t,
          key: t && tl(t),
          ref: t && Qn(t),
          scopeId: Ti,
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
        return l ? (Do(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= pe(n) ? 8 : 16), Pn > 0 && !r && ke && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && ke.push(a), a;
      }
      const se = Pc;
      function Pc(e, t = null, n = null, i = 0, o = null, s = false) {
        if ((!e || e === Dr) && (e = bt), An(e)) {
          const l = on(e, t, true);
          return n && Do(l, n), Pn > 0 && !s && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
        }
        if (Hc(e) && (e = e.__vccOpts), t) {
          t = No(t);
          let { class: l, style: a } = t;
          l && !pe(l) && (t.class = Ue(l)), re(a) && (Co(a) && !B(a) && (a = Pe({}, a)), t.style = gt(a));
        }
        const r = pe(e) ? 1 : Zr(e) ? 128 : La(e) ? 64 : re(e) ? 4 : W(e) ? 2 : 0;
        return C(e, t, n, i, o, r, s, true);
      }
      function No(e) {
        return e ? Co(e) || jr(e) ? Pe({}, e) : e : null;
      }
      function on(e, t, n = false, i = false) {
        const { props: o, ref: s, patchFlag: r, children: l, transition: a } = e, u = t ? Ho(o || {}, t) : o, c = {
          __v_isVNode: true,
          __v_skip: true,
          type: e.type,
          props: u,
          key: u && tl(u),
          ref: t && t.ref ? n && s ? B(s) ? s.concat(Qn(t)) : [
            s,
            Qn(t)
          ] : Qn(t) : s,
          scopeId: e.scopeId,
          slotScopeIds: e.slotScopeIds,
          children: l,
          target: e.target,
          targetStart: e.targetStart,
          targetAnchor: e.targetAnchor,
          staticCount: e.staticCount,
          shapeFlag: e.shapeFlag,
          patchFlag: t && e.type !== ie ? r === -1 ? 16 : r | 16 : r,
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
      function we(e = " ", t = 0) {
        return se(Ei, null, e, t);
      }
      function ot(e = "", t = false) {
        return t ? (N(), Fe(bt, null, e)) : se(bt, null, e);
      }
      function it(e) {
        return e == null || typeof e == "boolean" ? se(bt) : B(e) ? se(ie, null, e.slice()) : An(e) ? Tt(e) : se(Ei, null, String(e));
      }
      function Tt(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : on(e);
      }
      function Do(e, t) {
        let n = 0;
        const { shapeFlag: i } = e;
        if (t == null) t = null;
        else if (B(t)) n = 16;
        else if (typeof t == "object") if (i & 65) {
          const o = t.default;
          o && (o._c && (o._d = false), Do(e, o()), o._c && (o._d = true));
          return;
        } else {
          n = 32;
          const o = t._;
          !o && !jr(t) ? t._ctx = $e : o === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
        }
        else W(t) ? (t = {
          default: t,
          _ctx: $e
        }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
          we(t)
        ]) : n = 8);
        e.children = t, e.shapeFlag |= n;
      }
      function Ho(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const i = e[n];
          for (const o in i) if (o === "class") t.class !== i.class && (t.class = Ue([
            t.class,
            i.class
          ]));
          else if (o === "style") t.style = gt([
            t.style,
            i.style
          ]);
          else if (mi(o)) {
            const s = t[o], r = i[o];
            r && s !== r && !(B(s) && s.includes(r)) && (t[o] = s ? [].concat(s, r) : r);
          } else o !== "" && (t[o] = i[o]);
        }
        return t;
      }
      function tt(e, t, n, i = null) {
        ct(e, t, 7, [
          n,
          i
        ]);
      }
      const Ac = Fr();
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
          propsOptions: Vr(i, o),
          emitsOptions: Qr(i, o),
          emit: null,
          emitted: null,
          propsDefaults: oe,
          inheritAttrs: i.inheritAttrs,
          ctx: oe,
          data: oe,
          props: oe,
          attrs: oe,
          slots: oe,
          refs: oe,
          setupState: oe,
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
      let Ce = null, fi, lo;
      {
        const e = yi(), t = (n, i) => {
          let o;
          return (o = e[n]) || (o = e[n] = []), o.push(i), (s) => {
            o.length > 1 ? o.forEach((r) => r(s)) : o[0](s);
          };
        };
        fi = t("__VUE_INSTANCE_SETTERS__", (n) => Ce = n), lo = t("__VUE_SSR_SETTERS__", (n) => En = n);
      }
      const Fn = (e) => {
        const t = Ce;
        return fi(e), e.scope.on(), () => {
          e.scope.off(), fi(t);
        };
      }, ls = () => {
        Ce && Ce.scope.off(), fi(null);
      };
      function nl(e) {
        return e.vnode.shapeFlag & 4;
      }
      let En = false;
      function Rc(e, t = false, n = false) {
        t && lo(t);
        const { props: i, children: o } = e.vnode, s = nl(e);
        rc(e, i, s, t), uc(e, o, n || t);
        const r = s ? Mc(e, t) : void 0;
        return t && lo(false), r;
      }
      function Mc(e, t) {
        const n = e.type;
        e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ja);
        const { setup: i } = n;
        if (i) {
          wt();
          const o = e.setupContext = i.length > 1 ? Nc(e) : null, s = Fn(e), r = kn(i, e, 0, [
            e.props,
            o
          ]), l = Qs(r);
          if (vt(), s(), (l || e.sp) && !Zt(e) && Or(e), l) {
            if (r.then(ls, ls), t) return r.then((a) => {
              as(e, a);
            }).catch((a) => {
              Si(a, e, 0);
            });
            e.asyncDep = r;
          } else as(e, r);
        } else il(e);
      }
      function as(e, t, n) {
        W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = $r(t)), il(e);
      }
      function il(e, t, n) {
        const i = e.type;
        e.render || (e.render = i.render || rt);
        {
          const o = Fn(e);
          wt();
          try {
            Qa(e);
          } finally {
            vt(), o();
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
      function Oi(e) {
        return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($r(ba(e.exposed)), {
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
        return W(e) ? e.displayName || e.name : e.name || t && e.__name;
      }
      function Hc(e) {
        return W(e) && "__vccOpts" in e;
      }
      const qe = (e, t) => Pa(e, t, En);
      function Lc(e, t, n) {
        const i = arguments.length;
        return i === 2 ? re(t) && !B(t) ? An(t) ? se(e, null, [
          t
        ]) : se(e, t) : se(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && An(n) && (n = [
          n
        ]), se(e, t, n));
      }
      const kc = "3.5.16";
      let ao;
      const cs = typeof window < "u" && window.trustedTypes;
      if (cs) try {
        ao = cs.createPolicy("vue", {
          createHTML: (e) => e
        });
      } catch {
      }
      const ol = ao ? (e) => ao.createHTML(e) : (e) => e, Fc = "http://www.w3.org/2000/svg", zc = "http://www.w3.org/1998/Math/MathML", dt = typeof document < "u" ? document : null, us = dt && dt.createElement("template"), Bc = {
        insert: (e, t, n) => {
          t.insertBefore(e, n || null);
        },
        remove: (e) => {
          const t = e.parentNode;
          t && t.removeChild(e);
        },
        createElement: (e, t, n, i) => {
          const o = t === "svg" ? dt.createElementNS(Fc, e) : t === "mathml" ? dt.createElementNS(zc, e) : n ? dt.createElement(e, {
            is: n
          }) : dt.createElement(e);
          return e === "select" && i && i.multiple != null && o.setAttribute("multiple", i.multiple), o;
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
        insertStaticContent(e, t, n, i, o, s) {
          const r = n ? n.previousSibling : t.lastChild;
          if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === s || !(o = o.nextSibling)); ) ;
          else {
            us.innerHTML = ol(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
            const l = us.content;
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
      const fs = Symbol("_vod"), Vc = Symbol("_vsh"), Uc = Symbol(""), Wc = /(^|;)\s*display\s*:/;
      function Kc(e, t, n) {
        const i = e.style, o = pe(n);
        let s = false;
        if (n && !o) {
          if (t) if (pe(t)) for (const r of t.split(";")) {
            const l = r.slice(0, r.indexOf(":")).trim();
            n[l] == null && Zn(i, l, "");
          }
          else for (const r in t) n[r] == null && Zn(i, r, "");
          for (const r in n) r === "display" && (s = true), Zn(i, r, n[r]);
        } else if (o) {
          if (t !== n) {
            const r = i[Uc];
            r && (n += ";" + r), i.cssText = n, s = Wc.test(n);
          }
        } else t && e.removeAttribute("style");
        fs in e && (e[fs] = s ? i.display : "", e[Vc] && (i.display = "none"));
      }
      const ds = /\s*!important$/;
      function Zn(e, t, n) {
        if (B(n)) n.forEach((i) => Zn(e, t, i));
        else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
        else {
          const i = Gc(e, t);
          ds.test(n) ? e.setProperty(Dt(i), n.replace(ds, ""), "important") : e[i] = n;
        }
      }
      const ps = [
        "Webkit",
        "Moz",
        "ms"
      ], Gi = {};
      function Gc(e, t) {
        const n = Gi[t];
        if (n) return n;
        let i = je(t);
        if (i !== "filter" && i in e) return Gi[t] = i;
        i = bi(i);
        for (let o = 0; o < ps.length; o++) {
          const s = ps[o] + i;
          if (s in e) return Gi[t] = s;
        }
        return t;
      }
      const hs = "http://www.w3.org/1999/xlink";
      function _s(e, t, n, i, o, s = Yl(t)) {
        i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hs, t.slice(6, t.length)) : e.setAttributeNS(hs, t, n) : n == null || s && !ir(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Ye(n) ? String(n) : n);
      }
      function gs(e, t, n, i, o) {
        if (t === "innerHTML" || t === "textContent") {
          n != null && (e[t] = t === "innerHTML" ? ol(n) : n);
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
          l === "boolean" ? n = ir(n) : n == null && l === "string" ? (n = "", r = true) : l === "number" && (n = 0, r = true);
        }
        try {
          e[t] = n;
        } catch {
        }
        r && e.removeAttribute(o || t);
      }
      function Ct(e, t, n, i) {
        e.addEventListener(t, n, i);
      }
      function Yc(e, t, n, i) {
        e.removeEventListener(t, n, i);
      }
      const ms = Symbol("_vei");
      function Xc(e, t, n, i, o = null) {
        const s = e[ms] || (e[ms] = {}), r = s[t];
        if (i && r) r.value = i;
        else {
          const [l, a] = Jc(t);
          if (i) {
            const u = s[t] = eu(i, o);
            Ct(e, l, u, a);
          } else r && (Yc(e, l, r, a), s[t] = void 0);
        }
      }
      const ws = /(?:Once|Passive|Capture)$/;
      function Jc(e) {
        let t;
        if (ws.test(e)) {
          t = {};
          let i;
          for (; i = e.match(ws); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
        }
        return [
          e[2] === ":" ? e.slice(3) : Dt(e.slice(2)),
          t
        ];
      }
      let Yi = 0;
      const Qc = Promise.resolve(), Zc = () => Yi || (Qc.then(() => Yi = 0), Yi = Date.now());
      function eu(e, t) {
        const n = (i) => {
          if (!i._vts) i._vts = Date.now();
          else if (i._vts <= n.attached) return;
          ct(tu(i, n.value), t, 5, [
            i
          ]);
        };
        return n.value = e, n.attached = Zc(), n;
      }
      function tu(e, t) {
        if (B(t)) {
          const n = e.stopImmediatePropagation;
          return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = true;
          }, t.map((i) => (o) => !o._stopped && i && i(o));
        } else return t;
      }
      const vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nu = (e, t, n, i, o, s) => {
        const r = o === "svg";
        t === "class" ? qc(e, i, r) : t === "style" ? Kc(e, n, i) : mi(t) ? mo(t) || Xc(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : iu(e, t, i, r)) ? (gs(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _s(e, t, i, r, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !pe(i)) ? gs(e, je(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), _s(e, t, i, r));
      };
      function iu(e, t, n, i) {
        if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && vs(t) && W(n));
        if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
        if (t === "width" || t === "height") {
          const o = e.tagName;
          if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
        }
        return vs(t) && pe(n) ? false : t in e;
      }
      const sn = (e) => {
        const t = e.props["onUpdate:modelValue"] || false;
        return B(t) ? (n) => Xn(t, n) : t;
      };
      function ou(e) {
        e.target.composing = true;
      }
      function bs(e) {
        const t = e.target;
        t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
      }
      const mt = Symbol("_assign"), qt = {
        created(e, { modifiers: { lazy: t, trim: n, number: i } }, o) {
          e[mt] = sn(o);
          const s = i || o.props && o.props.type === "number";
          Ct(e, t ? "change" : "input", (r) => {
            if (r.target.composing) return;
            let l = e.value;
            n && (l = l.trim()), s && (l = ii(l)), e[mt](l);
          }), n && Ct(e, "change", () => {
            e.value = e.value.trim();
          }), t || (Ct(e, "compositionstart", ou), Ct(e, "compositionend", bs), Ct(e, "change", bs));
        },
        mounted(e, { value: t }) {
          e.value = t ?? "";
        },
        beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: o, number: s } }, r) {
          if (e[mt] = sn(r), e.composing) return;
          const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? ii(e.value) : e.value, a = t ?? "";
          l !== a && (document.activeElement === e && e.type !== "range" && (i && t === n || o && e.value.trim() === a) || (e.value = a));
        }
      }, Xi = {
        created(e, { value: t }, n) {
          e.checked = nn(t, n.props.value), e[mt] = sn(n), Ct(e, "change", () => {
            e[mt](On(e));
          });
        },
        beforeUpdate(e, { value: t, oldValue: n }, i) {
          e[mt] = sn(i), t !== n && (e.checked = nn(t, i.props.value));
        }
      }, sl = {
        deep: true,
        created(e, { value: t, modifiers: { number: n } }, i) {
          const o = wi(t);
          Ct(e, "change", () => {
            const s = Array.prototype.filter.call(e.options, (r) => r.selected).map((r) => n ? ii(On(r)) : On(r));
            e[mt](e.multiple ? o ? new Set(s) : s : s[0]), e._assigning = true, Po(() => {
              e._assigning = false;
            });
          }), e[mt] = sn(i);
        },
        mounted(e, { value: t }) {
          ys(e, t);
        },
        beforeUpdate(e, t, n) {
          e[mt] = sn(n);
        },
        updated(e, { value: t }) {
          e._assigning || ys(e, t);
        }
      };
      function ys(e, t) {
        const n = e.multiple, i = B(t);
        if (!(n && !i && !wi(t))) {
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
          const s = Dt(o.key);
          if (t.some((r) => r === s || su[r] === s)) return e(o);
        });
      }, ru = Pe({
        patchProp: nu
      }, Bc);
      let xs;
      function lu() {
        return xs || (xs = dc(ru));
      }
      const ll = (...e) => {
        const t = lu().createApp(...e), { mount: n } = t;
        return t.mount = (i) => {
          const o = cu(i);
          if (!o) return;
          const s = t._component;
          !W(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
          const r = n(o, false, au(o));
          return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
        }, t;
      };
      function au(e) {
        if (e instanceof SVGElement) return "svg";
        if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
      }
      function cu(e) {
        return pe(e) ? document.querySelector(e) : e;
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
          const n = e, i = t, o = fe(false), s = fe(50), r = fe(false), l = fe(0), a = fe(), u = qe({
            get() {
              return n.percent ?? s.value;
            },
            set(q) {
              i("update:percent", q), s.value = q;
            }
          });
          u.value = Number(n.initialPercent);
          const c = qe(() => n.isHorizontal ? "top-pane" : "left-pane"), p = qe(() => n.isHorizontal ? "bottom-pane" : "right-pane"), h = qe(() => n.isHorizontal ? `${u.value}% auto 1fr / none` : `none / ${u.value}% auto 1fr`), _ = qe(() => o.value ? "none" : "auto");
          function v() {
            r.value || i("splitter-click");
          }
          function g(q) {
            l.value = n.isHorizontal ? q.offsetY : q.offsetX, A();
          }
          function I() {
            l.value = 0, A();
          }
          function A() {
            o.value = true, r.value = false, M();
          }
          function M() {
            document.body.addEventListener("mousemove", b), document.body.addEventListener("touchmove", D), document.body.addEventListener("touchend", H, {
              once: true
            }), document.body.addEventListener("mouseup", H, {
              once: true
            });
          }
          function D(q) {
            o.value && E(q.touches[0]);
          }
          function b(q) {
            q.buttons && q.buttons === 0 && (o.value = false, z()), o.value && E(q);
          }
          function E(q) {
            let ne = l.value, K = a.value, le = 0;
            if (n.isHorizontal) {
              for (ne += K.offsetTop; K.offsetParent; ) K = K.offsetParent, ne += K.offsetTop;
              le = Math.floor((q.pageY - ne) / a.value.offsetHeight * 1e4) / 100;
            } else {
              for (ne += K.offsetLeft; K.offsetParent; ) K = K.offsetParent, ne += K.offsetLeft;
              le = Math.floor((q.pageX - ne) / a.value.offsetWidth * 1e4) / 100;
            }
            le > 0 && le < 100 && (u.value = le, r.value = true);
          }
          function H() {
            o.value = false, z();
          }
          function z() {
            document.body.removeEventListener("touchmove", D), document.body.removeEventListener("mousemove", b);
          }
          return (q, ne) => (N(), F("div", {
            style: gt({
              userSelect: _.value,
              gridTemplate: h.value
            }),
            class: Ue([
              "vue-splitter",
              {
                horizontal: q.isHorizontal,
                vertical: !q.isHorizontal
              }
            ]),
            ref_key: "containerRef",
            ref: a
          }, [
            C("div", {
              class: Ue([
                "splitter-pane",
                c.value
              ])
            }, [
              st(q.$slots, "left-pane"),
              st(q.$slots, "top-pane")
            ], 2),
            C("div", {
              class: Ue([
                "splitter",
                {
                  active: o.value
                }
              ]),
              onMousedown: g,
              onTouchstartPassive: I,
              onClick: v
            }, null, 34),
            C("div", {
              class: Ue([
                "splitter-pane",
                p.value
              ])
            }, [
              st(q.$slots, "right-pane"),
              st(q.$slots, "bottom-pane")
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
          const n = t, i = fe(null);
          function o(r, l, a) {
            console.log("adding requirement", l, a, r), a != null && a.length > 0 ? (r.add_requirement(l, a), n("cfg_update")) : console.log("attempt to add a requirement without a value, was: ", a);
          }
          function s(r, l) {
            console.log("adding import/export", l, r), r.add_import_export(l), n("cfg_update");
          }
          return (r, l) => {
            const a = Pi("tooltip");
            return N(), F(ie, null, [
              ee((N(), F("div", null, [
                we(ye(e.item.display), 1)
              ])), [
                [
                  a,
                  "id: " + e.item.id
                ]
              ]),
              C("div", null, [
                ee(C("input", {
                  type: "text",
                  size: "4",
                  onKeyup: l[0] || (l[0] = rl((u) => o(e.cfg, e.item.id, i.value), [
                    "enter"
                  ])),
                  "onUpdate:modelValue": l[1] || (l[1] = (u) => i.value = u)
                }, null, 544), [
                  [
                    qt,
                    i.value
                  ]
                ]),
                ee((N(), F("button", {
                  onClick: l[2] || (l[2] = (u) => o(e.cfg, e.item.id, i.value))
                }, l[4] || (l[4] = [
                  we("Requirement")
                ]))), [
                  [
                    a,
                    "Add " + e.item.display + " as a requirement, you must specify a non-empty value"
                  ]
                ]),
                ee((N(), F("button", {
                  onClick: l[3] || (l[3] = (u) => s(e.cfg, e.item.id))
                }, l[5] || (l[5] = [
                  we("Import/Export")
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
      }, al = "--vc-auto-duration", du = `height var(${al}) cubic-bezier(0.33, 1, 0.68, 1)`, Wn = {
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
      function $s(e) {
        return e.value ? parseFloat(getComputedStyle(e.value).height) : 0;
      }
      function Ss(e) {
        if (!e.value) return {};
        const { transition: t } = getComputedStyle(e.value);
        return t === "all 0s ease 0s" || t === "all" ? {
          transition: du
        } : {
          transition: t
        };
      }
      function Ts(e) {
        if (!e.value) return true;
        const { transition: t } = getComputedStyle(e.value);
        return typeof window.requestAnimationFrame > "u" || window.matchMedia("(prefers-reduced-motion: reduce)").matches || t.includes("none") || t.includes("height 0s");
      }
      function _u(e = 0) {
        if (e === 0) return 0;
        const t = e / 36, n = Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
        return Number.isFinite(n) ? n : 0;
      }
      const Pt = ln({
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
          const n = e, i = t, o = Yo(n, "when"), s = Yo(n, "baseHeight"), r = qe(() => ({
            overflow: "hidden",
            height: `${s.value}px`
          })), l = qe(() => ({
            ...Wn,
            ...s.value === 0 ? {
              display: "none"
            } : r.value
          })), a = fe(null), u = fe(o.value ? "expanded" : "collapsed"), c = (H) => u.value = H;
          function p() {
            return o.value ? Wn : s.value === 0 ? hu : l.value;
          }
          const h = yr(p()), _ = (H) => h.value = H, v = (H) => _({
            ...h.value,
            ...H
          }), g = fe(pu), I = (H) => g.value = H, A = qe(() => ({
            [al]: `${g.value}ms`
          }));
          let M = NaN;
          function D() {
            _(Wn), c("expanded"), i("expanded");
          }
          function b() {
            _(l.value), c("collapsed"), i("collapsed");
          }
          Ir(() => {
            if (!a.value) return;
            const H = _u(a.value.scrollHeight - s.value);
            H > 0 && I(H), !o.value && s.value === 0 && _(l.value);
          }), Ne(o, (H) => {
            if (a.value) if (M = NaN, H) {
              if (Ts(a)) return D();
              c("expanding"), i("expand"), _({
                ...Wn,
                ...r.value,
                ...A.value
              }), requestAnimationFrame(() => {
                if (a.value.scrollHeight === 0) return D();
                M = a.value.scrollHeight, v({
                  ...Ss(a),
                  height: `${M}px`,
                  willChange: "height"
                });
              });
            } else {
              if (Ts(a) || (c("collapsing"), i("collapse"), v({
                ...A.value,
                height: `${a.value.scrollHeight}px`
              }), a.value.scrollHeight === 0)) return b();
              requestAnimationFrame(() => {
                v({
                  ...r.value,
                  ...Ss(a),
                  willChange: "height"
                });
              });
            }
          }), Ne(s, (H) => {
            o.value || (H > 0 ? v({
              display: void 0,
              height: `${H}px`
            }) : v({
              display: "none"
            }));
          });
          function E(H) {
            H.target && H.target === a.value && H.propertyName === "height" && (o.value ? Math.abs(a.value.scrollHeight - $s(a)) < 1 ? D() : M < a.value.scrollHeight && v({
              height: `${a.value.scrollHeight}px`
            }) : Math.abs(s.value - $s(a)) < 1 && b());
          }
          return (H, z) => (N(), Fe(Xa(n.as), {
            ref_key: "collapseRef",
            ref: a,
            style: gt(h.value),
            onTransitionend: E,
            "data-collapse": u.value
          }, {
            default: ge(() => [
              st(H.$slots, "default", nr(No({
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
      class gu extends Re {
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
      class Cs extends Re {
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
      const wu = {
        for: "requirement"
      }, vu = {
        key: 0
      }, bu = [
        "disabled"
      ], yu = {
        for: "import_export"
      }, xu = {
        for: "intermediate"
      }, $u = {
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
          const n = t, i = fe(e.stack.req_quantity()), o = fe(e.stack.type);
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
            const l = Pi("tooltip");
            return N(), F(ie, null, [
              ee((N(), F("div", null, [
                we(" [icon] " + ye(e.stack.display()), 1)
              ])), [
                [
                  l,
                  "id: " + e.stack.id()
                ]
              ]),
              C("div", null, [
                ee((N(), F("button", {
                  onClick: r[0] || (r[0] = (a) => n("make_item", e.stack.id()))
                }, r[6] || (r[6] = [
                  we("Make")
                ]))), [
                  [
                    l,
                    "Search for processes that have " + e.stack.display() + " as an output."
                  ]
                ]),
                ee((N(), F("button", {
                  onClick: r[1] || (r[1] = (a) => n("use_item", e.stack.id()))
                }, r[7] || (r[7] = [
                  we("Use")
                ]))), [
                  [
                    l,
                    "Search for processes that have " + e.stack.display() + " as an input."
                  ]
                ])
              ]),
              C("div", null, [
                C("div", null, [
                  ee(C("input", {
                    type: "radio",
                    id: "requirement",
                    value: "requirement",
                    "onUpdate:modelValue": r[2] || (r[2] = (a) => o.value = a)
                  }, null, 512), [
                    [
                      Xi,
                      o.value
                    ]
                  ]),
                  ee((N(), F("label", wu, r[8] || (r[8] = [
                    we(" Requirement")
                  ]))), [
                    [
                      l,
                      "Set " + e.stack.display() + " as a requirement"
                    ]
                  ]),
                  e.stack.is_req() ? (N(), F("span", vu, [
                    r[9] || (r[9] = we(" \xA0 ")),
                    ee(C("input", {
                      type: "text",
                      size: "5",
                      "onUpdate:modelValue": r[3] || (r[3] = (a) => i.value = a),
                      disabled: o.value != de(Re).REQUIREMENT
                    }, null, 8, bu), [
                      [
                        qt,
                        i.value,
                        void 0,
                        {
                          lazy: true,
                          number: true
                        }
                      ],
                      [
                        l,
                        "Set a requirement of X per second for " + e.stack.display() + (o.value == de(Re).REQUIREMENT ? "" : " (disabled because " + e.stack.display() + " is not marked as a requirement)")
                      ]
                    ]),
                    r[10] || (r[10] = we(" per second "))
                  ])) : ot("", true)
                ]),
                C("div", null, [
                  ee(C("input", {
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
                  ee((N(), F("label", yu, r[11] || (r[11] = [
                    we(" Import/Export")
                  ]))), [
                    [
                      l,
                      "Use an infinite source or sink for " + e.stack.display()
                    ]
                  ])
                ]),
                C("div", null, [
                  ee(C("input", {
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
                  ee((N(), F("label", xu, r[12] || (r[12] = [
                    we(" Intermediate")
                  ]))), [
                    [
                      l,
                      e.stack.display() + " should have a net zero produce & consume"
                    ]
                  ])
                ])
              ]),
              r[13] || (r[13] = C("div", {
                class: "items_fw"
              }, [
                C("hr")
              ], -1))
            ], 64);
          };
        }
      };
      class Su {
        constructor(t, n, i) {
          this.duration = t, this.input = n, this.output = i;
        }
      }
      const Ri = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [i, o] of t) n[i] = o;
        return n;
      }, Tu = {
        id: "name"
      }, Cu = {
        id: "in"
      }, Pu = {
        class: "proc_io"
      }, Au = {
        id: "out"
      }, Eu = {
        class: "proc_io"
      }, Ou = {
        class: "proc_buttons"
      }, Ru = [
        "value"
      ], Mu = {
        __name: "ProcDisplay",
        props: [
          "cfg",
          "proc",
          "active_proc",
          "emit_on_change"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t;
          let i = e.active_proc;
          typeof e.active_proc > "u" && (i = {
            process: e.proc,
            duration_multiplier: 1,
            inputs_multiplier: 1,
            outputs_multiplier: 1,
            factory: {
              id: null
            }
          });
          let o = i.process;
          console.log("fac for proc", o, e.active_proc), typeof e.active_proc < "u" && (o = e.active_proc.process), console.log("fac for proc 2", o, e.active_proc);
          const s = $i(new Su(i.duration_multiplier, i.inputs_multiplier, i.outputs_multiplier)), r = fe(false);
          console.log("fac for proc", o.id);
          const l = qe(() => e.cfg.factories_for_process(o.id)), a = qe({
            get() {
              if (i.factory.id != null) return i.factory.id;
              if (l.value.length > 0) return l.value[0].id;
            },
            set(u) {
              factory_id_w.value = u, console.log(u, o.id, l.value, e.cfg.factories_for_process(o.id)), e.emit_on_change && n("cfg_update");
            }
          });
          return Ne(s, (u) => {
            console.log("modifiers changed", o.id, u, Number(u.duration), Number(u.input), Number(u.output)), e.emit_on_change && (e.cfg.update_modifiers(o.id, a.value, Number(u.duration), Number(u.input), Number(u.output)), n("cfg_update"));
          }), (u, c) => {
            const p = Pi("tooltip");
            return N(), F(ie, null, [
              ee((N(), F("div", Tu, [
                we(ye(de(o).display), 1)
              ])), [
                [
                  p,
                  "id: " + de(o).id
                ]
              ]),
              C("div", null, ye(de(o).duration) + "s ", 1),
              C("div", Cu, [
                (N(true), F(ie, null, Et(de(o).inputs, (h) => (N(), F("div", Pu, [
                  C("div", null, ye(h.quantity), 1),
                  ee((N(), F("div", null, [
                    we(ye(h.item.display), 1)
                  ])), [
                    [
                      p,
                      "id: " + h.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              C("div", Au, [
                (N(true), F(ie, null, Et(de(o).outputs, (h) => (N(), F("div", Eu, [
                  C("div", null, ye(h.quantity), 1),
                  ee((N(), F("div", null, [
                    we(ye(h.item.display), 1)
                  ])), [
                    [
                      p,
                      "id: " + h.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              C("div", Ou, [
                st(u.$slots, "action_button", {
                  factory_id: a.value,
                  modifiers: s
                }, void 0, true)
              ]),
              C("div", null, [
                c[5] || (c[5] = we("modifiers ")),
                C("button", {
                  onClick: c[0] || (c[0] = (h) => r.value = !r.value)
                }, ye(r.value ? "\\/" : ">"), 1)
              ]),
              se(de(Pt), {
                class: "input_options",
                when: r.value
              }, {
                default: ge(() => [
                  ee(C("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": c[1] || (c[1] = (h) => s.duration = h)
                  }, null, 512), [
                    [
                      qt,
                      s.duration,
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
              se(de(Pt), {
                class: "input_options",
                when: r.value
              }, {
                default: ge(() => [
                  ee(C("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": c[2] || (c[2] = (h) => s.input = h)
                  }, null, 512), [
                    [
                      qt,
                      s.input,
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
              se(de(Pt), {
                class: "input_options",
                when: r.value
              }, {
                default: ge(() => [
                  ee(C("input", {
                    type: "text",
                    size: "4",
                    "onUpdate:modelValue": c[3] || (c[3] = (h) => s.output = h)
                  }, null, 512), [
                    [
                      qt,
                      s.output,
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
              se(de(Pt), {
                class: "input_options",
                when: r.value
              }, {
                default: ge(() => c[6] || (c[6] = [
                  C("span", null, "factory", -1)
                ])),
                _: 1,
                __: [
                  6
                ]
              }, 8, [
                "when"
              ]),
              se(de(Pt), {
                class: "factory_select",
                when: r.value
              }, {
                default: ge(() => [
                  ee(C("select", {
                    "onUpdate:modelValue": c[4] || (c[4] = (h) => a.value = h)
                  }, [
                    c[7] || (c[7] = C("option", {
                      disabled: "",
                      value: ""
                    }, "Select a factory type", -1)),
                    (N(true), F(ie, null, Et(l.value, (h) => (N(), F("option", {
                      key: h.id,
                      value: h.id
                    }, ye(h.display), 9, Ru))), 128))
                  ], 512), [
                    [
                      sl,
                      a.value
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              c[8] || (c[8] = C("hr", {
                class: "proc_fw"
              }, null, -1))
            ], 64);
          };
        }
      }, cl = Ri(Mu, [
        [
          "__scopeId",
          "data-v-224ab21b"
        ]
      ]), Iu = {
        class: "items"
      }, Nu = {
        key: 0,
        class: "items_fw"
      }, Du = {
        key: 0,
        class: "proc"
      }, Hu = [
        "onClick"
      ], Lu = {
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
          const n = t, i = fe(e.cfg.can_render() || e.cfg.get_requirements().length > 0);
          function o() {
            console.log("CC handle_cfg_update"), n("cfg_update");
          }
          function s(u) {
            console.log("CC handle make item", u), n("make_item", u);
          }
          function r(u) {
            console.log("CC handle use item", u), n("use_item", u);
          }
          function l(u) {
            let c = u.get_requirements().map((g) => (console.log("requirement", g.item.id, g.quantity), g)).map((g) => new gu(g)).map((g) => (console.log("  ", g), g)), p = u.get_imports_exports().map((g) => (console.log("io", g.id), g)).map((g) => new Cs(g)).map((g) => (console.log("  ", g), g)), h = u.get_intermediate_items().map((g) => (console.log("intermediate", g.id), g)).map((g) => new mu(g)).map((g) => (console.log("  ", g), g)), _ = u.get_defaulted_items().map((g) => (console.log("defaulted", g.id), g)).map((g) => new Cs(g)).map((g) => (console.log("  ", g), g));
            return c.concat(p).concat(h).concat(_).sort((g, I) => g.display().localeCompare(I.display()));
          }
          function a(u, c) {
            console.log("removing", c), u.remove_process(c), n("cfg_update");
          }
          return (u, c) => (N(), F(ie, null, [
            C("div", null, [
              C("h2", null, [
                c[2] || (c[2] = we("Current Configuration ")),
                C("button", {
                  onClick: c[0] || (c[0] = (p) => i.value = !i.value)
                }, ye(i.value ? "\\/" : ">"), 1)
              ])
            ]),
            se(de(Pt), {
              class: "input_options",
              when: i.value
            }, {
              default: ge(() => [
                c[8] || (c[8] = C("h3", null, "Data Set", -1)),
                c[9] || (c[9] = C("hr", null, null, -1)),
                C("span", null, ye(e.cfg.get_current_data_set() ? e.cfg.get_current_data_set().description() : ""), 1),
                c[10] || (c[10] = C("br", null, null, -1)),
                c[11] || (c[11] = C("br", null, null, -1)),
                c[12] || (c[12] = C("h3", null, "Items", -1)),
                C("div", Iu, [
                  l(e.cfg).length > 0 ? (N(), F("hr", Nu)) : ot("", true),
                  (N(true), F(ie, null, Et(l(e.cfg), (p) => (N(), Fe($u, {
                    onCfg_update: o,
                    onUse_item: r,
                    onMake_item: s,
                    stack: p,
                    cfg: e.cfg
                  }, null, 8, [
                    "stack",
                    "cfg"
                  ]))), 256))
                ]),
                c[13] || (c[13] = C("br", null, null, -1)),
                c[14] || (c[14] = C("br", null, null, -1)),
                c[15] || (c[15] = C("h3", null, "Processes", -1)),
                e.cfg.get_processes().length > 0 ? (N(), F("div", Du, [
                  c[3] || (c[3] = C("hr", {
                    class: "proc_fw"
                  }, null, -1)),
                  c[4] || (c[4] = C("div", {
                    class: "proc_header_d"
                  }, "Duration", -1)),
                  c[5] || (c[5] = C("div", {
                    class: "proc_header_i"
                  }, "Inputs", -1)),
                  c[6] || (c[6] = C("div", {
                    class: "proc_header_o"
                  }, "Outputs", -1)),
                  c[7] || (c[7] = C("hr", {
                    class: "proc_fw"
                  }, null, -1)),
                  (N(true), F(ie, null, Et(e.cfg.get_processes(), (p) => (N(), Fe(cl, {
                    onCfg_update: c[1] || (c[1] = (h) => o()),
                    active_proc: p,
                    cfg: e.cfg,
                    emit_on_change: true
                  }, {
                    action_button: ge(({ factory_id: h, modifiers: _ }) => [
                      C("button", {
                        onClick: (v) => a(e.cfg, p.id, h, _)
                      }, "Remove", 8, Hu)
                    ]),
                    _: 2
                  }, 1032, [
                    "active_proc",
                    "cfg"
                  ]))), 256))
                ])) : ot("", true)
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
      }, ku = Ri(Lu, [
        [
          "__scopeId",
          "data-v-53b0844b"
        ]
      ]), Fu = "/assets/proc_rs_bg-mgO-nyLZ.wasm", zu = async (e = {}, t) => {
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
      function Bu(e) {
        S = e;
      }
      function zn(e) {
        const t = S.__externref_table_alloc();
        return S.__wbindgen_export_2.set(t, e), t;
      }
      function Mi(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          const i = zn(n);
          S.__wbindgen_exn_store(i);
        }
      }
      const ju = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let ul = new ju("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      ul.decode();
      let Kn = null;
      function ei() {
        return (Kn === null || Kn.byteLength === 0) && (Kn = new Uint8Array(S.memory.buffer)), Kn;
      }
      function It(e, t) {
        return e = e >>> 0, ul.decode(ei().subarray(e, e + t));
      }
      function Bn(e) {
        return e == null;
      }
      const Ps = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => {
        S.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
      });
      function qu(e, t, n, i) {
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
            --o.cnt === 0 ? (S.__wbindgen_export_3.get(o.dtor)(l, o.b), Ps.unregister(o)) : o.a = l;
          }
        };
        return s.original = o, Ps.register(s, o, o), s;
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
      let he = 0;
      const Vu = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let ti = new Vu("utf-8");
      const Uu = typeof ti.encodeInto == "function" ? function(e, t) {
        return ti.encodeInto(e, t);
      } : function(e, t) {
        const n = ti.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function me(e, t, n) {
        if (n === void 0) {
          const l = ti.encode(e), a = t(l.length, 1) >>> 0;
          return ei().subarray(a, a + l.length).set(l), he = l.length, a;
        }
        let i = e.length, o = t(i, 1) >>> 0;
        const s = ei();
        let r = 0;
        for (; r < i; r++) {
          const l = e.charCodeAt(r);
          if (l > 127) break;
          s[o + r] = l;
        }
        if (r !== i) {
          r !== 0 && (e = e.slice(r)), o = n(o, i, i = r + e.length * 3, 1) >>> 0;
          const l = ei().subarray(o + r, o + i), a = Uu(e, l);
          r += a.written, o = n(o, i, r, 1) >>> 0;
        }
        return he = r, o;
      }
      let Kt = null;
      function Rn() {
        return (Kt === null || Kt.buffer.detached === true || Kt.buffer.detached === void 0 && Kt.buffer !== S.memory.buffer) && (Kt = new DataView(S.memory.buffer)), Kt;
      }
      function U(e) {
        const t = S.__wbindgen_export_2.get(e);
        return S.__externref_table_dealloc(e), t;
      }
      function Wu(e, t) {
        e = e >>> 0;
        const n = Rn(), i = [];
        for (let o = e; o < e + 4 * t; o += 4) i.push(S.__wbindgen_export_2.get(n.getUint32(o, true)));
        return S.__externref_drop_slice(e, t), i;
      }
      function Ku() {
        const e = S.dataset_all();
        var t = Wu(e[0], e[1]).slice();
        return S.__wbindgen_free(e[0], e[1] * 4, 4), t;
      }
      function Gu(e, t, n) {
        S.closure725_externref_shim(e, t, n);
      }
      function Yu(e, t, n, i) {
        S.closure737_externref_shim(e, t, n, i);
      }
      const Xu = [
        "same-origin",
        "no-cors",
        "cors",
        "navigate"
      ], As = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => S.__wbg_datasetconf_free(e >>> 0, 1));
      class Ii {
        static __wrap(t) {
          t = t >>> 0;
          const n = Object.create(Ii.prototype);
          return n.__wbg_ptr = t, As.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, As.unregister(this), t;
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
            return t = i[0], n = i[1], It(i[0], i[1]);
          } finally {
            S.__wbindgen_free(t, n, 1);
          }
        }
        description() {
          let t, n;
          try {
            const i = S.datasetconf_description(this.__wbg_ptr);
            return t = i[0], n = i[1], It(i[0], i[1]);
          } finally {
            S.__wbindgen_free(t, n, 1);
          }
        }
      }
      const Es = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => S.__wbg_graphconfiguration_free(e >>> 0, 1));
      class Ju {
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Es.unregister(this), t;
        }
        free() {
          const t = this.__destroy_into_raw();
          S.__wbg_graphconfiguration_free(t, 0);
        }
        constructor() {
          const t = S.graphconfiguration_new();
          return this.__wbg_ptr = t >>> 0, Es.register(this, this.__wbg_ptr, this), this;
        }
        get_current_data_set() {
          const t = S.graphconfiguration_get_current_data_set(this.__wbg_ptr);
          return t === 0 ? void 0 : Ii.__wrap(t);
        }
        can_render() {
          const t = S.graphconfiguration_can_render(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        add_requirement(t, n) {
          const i = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), o = he, s = S.graphconfiguration_add_requirement(this.__wbg_ptr, i, o, n);
          if (s[2]) throw U(s[1]);
          return U(s[0]);
        }
        update_requirement(t, n) {
          const i = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), o = he, s = S.graphconfiguration_update_requirement(this.__wbg_ptr, i, o, n);
          if (s[2]) throw U(s[1]);
          return U(s[0]);
        }
        remove_requirement(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_remove_requirement(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        get_requirements() {
          const t = S.graphconfiguration_get_requirements(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        add_import_export(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_add_import_export(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        remove_import_export(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_remove_import_export(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        get_imports_exports() {
          const t = S.graphconfiguration_get_imports_exports(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        add_process(t, n, i, o, s) {
          const r = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), l = he, a = me(n, S.__wbindgen_malloc, S.__wbindgen_realloc), u = he, c = S.graphconfiguration_add_process(this.__wbg_ptr, r, l, a, u, i, o, s);
          if (c[2]) throw U(c[1]);
          return U(c[0]);
        }
        remove_process(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_remove_process(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        update_modifiers(t, n, i, o, s) {
          const r = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), l = he, a = me(n, S.__wbindgen_malloc, S.__wbindgen_realloc), u = he, c = S.graphconfiguration_update_modifiers(this.__wbg_ptr, r, l, a, u, i, o, s);
          if (c[2]) throw U(c[1]);
          return U(c[0]);
        }
        get_processes() {
          const t = S.graphconfiguration_get_processes(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        factories_for_process(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_factories_for_process(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        get_defaulted_items() {
          const t = S.graphconfiguration_get_defaulted_items(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        get_intermediate_items() {
          const t = S.graphconfiguration_get_intermediate_items(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        update_data_set(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he;
          return S.graphconfiguration_update_data_set(this.__wbg_ptr, n, i);
        }
        search_items(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_search_items(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        search_processes(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_search_processes(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        search_processes_by_output(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_search_processes_by_output(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        search_processes_by_input(t) {
          const n = me(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = he, o = S.graphconfiguration_search_processes_by_input(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        calculate() {
          S.graphconfiguration_calculate(this.__wbg_ptr);
        }
        to_digraph() {
          const t = S.graphconfiguration_to_digraph(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        get_initial_matrix() {
          const t = S.graphconfiguration_get_initial_matrix(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        get_reduced_matrix() {
          const t = S.graphconfiguration_get_reduced_matrix(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
      }
      typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => S.__wbg_versioned_free(e >>> 0, 1));
      function Qu() {
        return Mi(function(e, t) {
          return e.call(t);
        }, arguments);
      }
      function Zu() {
        return Mi(function(e, t, n) {
          return e.call(t, n);
        }, arguments);
      }
      function ef(e) {
        return Ii.__wrap(e);
      }
      function tf(e, t) {
        return e.fetch(t);
      }
      function nf(e) {
        let t;
        try {
          t = e instanceof Response;
        } catch {
          t = false;
        }
        return t;
      }
      function of(e) {
        let t;
        try {
          t = e instanceof Window;
        } catch {
          t = false;
        }
        return t;
      }
      function sf(e, t) {
        console.log(It(e, t));
      }
      function rf(e, t) {
        try {
          var n = {
            a: e,
            b: t
          }, i = (s, r) => {
            const l = n.a;
            n.a = 0;
            try {
              return Yu(l, n.b, s, r);
            } finally {
              n.a = l;
            }
          };
          return new Promise(i);
        } finally {
          n.a = n.b = 0;
        }
      }
      function lf() {
        return new Object();
      }
      function af() {
        return new Array();
      }
      function cf(e, t) {
        return new Function(It(e, t));
      }
      function uf() {
        return Mi(function(e, t, n) {
          return new Request(It(e, t), n);
        }, arguments);
      }
      function ff(e) {
        queueMicrotask(e);
      }
      function df(e) {
        return e.queueMicrotask;
      }
      function pf(e) {
        return Promise.resolve(e);
      }
      function hf(e, t, n) {
        e[t >>> 0] = n;
      }
      function _f(e, t, n) {
        e[t] = n;
      }
      function gf(e, t, n) {
        e.method = It(t, n);
      }
      function mf(e, t) {
        e.mode = Xu[t];
      }
      function wf() {
        const e = typeof global > "u" ? null : global;
        return Bn(e) ? 0 : zn(e);
      }
      function vf() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return Bn(e) ? 0 : zn(e);
      }
      function bf() {
        const e = typeof self > "u" ? null : self;
        return Bn(e) ? 0 : zn(e);
      }
      function yf() {
        const e = typeof window > "u" ? null : window;
        return Bn(e) ? 0 : zn(e);
      }
      function xf() {
        return Mi(function(e) {
          return e.text();
        }, arguments);
      }
      function $f(e, t) {
        return e.then(t);
      }
      function Sf(e, t, n) {
        return e.then(t, n);
      }
      function Tf(e) {
        return BigInt.asUintN(64, e);
      }
      function Cf(e) {
        const t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, true) : false;
      }
      function Pf(e, t, n) {
        return qu(e, t, 726, Gu);
      }
      function Af(e, t) {
        const n = co(t), i = me(n, S.__wbindgen_malloc, S.__wbindgen_realloc), o = he;
        Rn().setInt32(e + 4 * 1, o, true), Rn().setInt32(e + 4 * 0, i, true);
      }
      function Ef() {
        const e = S.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
      }
      function Of(e) {
        return typeof e == "function";
      }
      function Rf(e) {
        return e === void 0;
      }
      function Mf(e) {
        return e;
      }
      function If(e, t) {
        const n = t, i = typeof n == "string" ? n : void 0;
        var o = Bn(i) ? 0 : me(i, S.__wbindgen_malloc, S.__wbindgen_realloc), s = he;
        Rn().setInt32(e + 4 * 1, s, true), Rn().setInt32(e + 4 * 0, o, true);
      }
      function Nf(e, t) {
        return It(e, t);
      }
      function Df(e, t) {
        throw new Error(It(e, t));
      }
      URL = globalThis.URL;
      const j = await zu({
        "./proc_rs_bg.js": {
          __wbindgen_number_new: Mf,
          __wbg_datasetconf_new: ef,
          __wbg_log_c235e79815fc436a: sf,
          __wbindgen_string_new: Nf,
          __wbindgen_string_get: If,
          __wbindgen_bigint_from_u64: Tf,
          __wbg_set_3f1d0b984ed272ed: _f,
          __wbg_instanceof_Window_def73ea0955fc569: of,
          __wbg_fetch_b7bf320f681242d2: tf,
          __wbg_setmethod_3c5280fe5d890842: gf,
          __wbg_setmode_5dc300b865044b65: mf,
          __wbg_newwithstrandinit_06c535e0a867c635: uf,
          __wbg_instanceof_Response_f2cc20d9f7dfd644: nf,
          __wbg_text_7805bea50de2af49: xf,
          __wbg_queueMicrotask_97d92b4fcc8a61c5: ff,
          __wbg_queueMicrotask_d3219def82552485: df,
          __wbindgen_is_function: Of,
          __wbindgen_cb_drop: Cf,
          __wbg_new_78feb108b6472713: af,
          __wbg_newnoargs_105ed471475aaf50: cf,
          __wbg_call_672a4d21634d4a24: Qu,
          __wbg_new_405e22f390576ce2: lf,
          __wbindgen_is_undefined: Rf,
          __wbg_set_37837023f3d740e8: hf,
          __wbg_call_7cccdd69e0791ae2: Zu,
          __wbg_new_23a2665fac83c611: rf,
          __wbg_resolve_4851785c9c5f573d: pf,
          __wbg_then_44b73946d2fb3e7d: $f,
          __wbg_then_48b406749878a531: Sf,
          __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: vf,
          __wbg_static_accessor_SELF_37c5d418e4bf5819: bf,
          __wbg_static_accessor_WINDOW_5de37043a91a9c40: yf,
          __wbg_static_accessor_GLOBAL_88a902d13a557d07: wf,
          __wbindgen_debug_string: Af,
          __wbindgen_throw: Df,
          __wbindgen_closure_wrapper2842: Pf,
          __wbindgen_init_externref_table: Ef
        }
      }, Fu), Hf = j.memory, Lf = j.__wbg_datasetconf_free, kf = j.__wbg_get_datasetconf_style, Ff = j.__wbg_set_datasetconf_style, zf = j.datasetconf_id, Bf = j.datasetconf_description, jf = j.__wbg_versioned_free, qf = j.stuff, Vf = j.dataset_all, Uf = j.__wbg_graphconfiguration_free, Wf = j.graphconfiguration_new, Kf = j.graphconfiguration_get_current_data_set, Gf = j.graphconfiguration_can_render, Yf = j.graphconfiguration_add_requirement, Xf = j.graphconfiguration_update_requirement, Jf = j.graphconfiguration_remove_requirement, Qf = j.graphconfiguration_get_requirements, Zf = j.graphconfiguration_add_import_export, ed = j.graphconfiguration_remove_import_export, td = j.graphconfiguration_get_imports_exports, nd = j.graphconfiguration_add_process, id = j.graphconfiguration_remove_process, od = j.graphconfiguration_update_modifiers, sd = j.graphconfiguration_get_processes, rd = j.graphconfiguration_factories_for_process, ld = j.graphconfiguration_get_defaulted_items, ad = j.graphconfiguration_get_intermediate_items, cd = j.graphconfiguration_update_data_set, ud = j.graphconfiguration_search_items, fd = j.graphconfiguration_search_processes, dd = j.graphconfiguration_search_processes_by_output, pd = j.graphconfiguration_search_processes_by_input, hd = j.graphconfiguration_calculate, _d = j.graphconfiguration_to_digraph, gd = j.graphconfiguration_get_initial_matrix, md = j.graphconfiguration_get_reduced_matrix, wd = j.__wbindgen_exn_store, vd = j.__externref_table_alloc, bd = j.__wbindgen_export_2, yd = j.__wbindgen_export_3, xd = j.__wbindgen_malloc, $d = j.__wbindgen_realloc, Sd = j.__wbindgen_free, Td = j.__externref_table_dealloc, Cd = j.__externref_drop_slice, Pd = j.closure725_externref_shim, Ad = j.closure737_externref_shim, fl = j.__wbindgen_start, Ed = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_drop_slice: Cd,
        __externref_table_alloc: vd,
        __externref_table_dealloc: Td,
        __wbg_datasetconf_free: Lf,
        __wbg_get_datasetconf_style: kf,
        __wbg_graphconfiguration_free: Uf,
        __wbg_set_datasetconf_style: Ff,
        __wbg_versioned_free: jf,
        __wbindgen_exn_store: wd,
        __wbindgen_export_2: bd,
        __wbindgen_export_3: yd,
        __wbindgen_free: Sd,
        __wbindgen_malloc: xd,
        __wbindgen_realloc: $d,
        __wbindgen_start: fl,
        closure725_externref_shim: Pd,
        closure737_externref_shim: Ad,
        dataset_all: Vf,
        datasetconf_description: Bf,
        datasetconf_id: zf,
        graphconfiguration_add_import_export: Zf,
        graphconfiguration_add_process: nd,
        graphconfiguration_add_requirement: Yf,
        graphconfiguration_calculate: hd,
        graphconfiguration_can_render: Gf,
        graphconfiguration_factories_for_process: rd,
        graphconfiguration_get_current_data_set: Kf,
        graphconfiguration_get_defaulted_items: ld,
        graphconfiguration_get_imports_exports: td,
        graphconfiguration_get_initial_matrix: gd,
        graphconfiguration_get_intermediate_items: ad,
        graphconfiguration_get_processes: sd,
        graphconfiguration_get_reduced_matrix: md,
        graphconfiguration_get_requirements: Qf,
        graphconfiguration_new: Wf,
        graphconfiguration_remove_import_export: ed,
        graphconfiguration_remove_process: id,
        graphconfiguration_remove_requirement: Jf,
        graphconfiguration_search_items: ud,
        graphconfiguration_search_processes: fd,
        graphconfiguration_search_processes_by_input: pd,
        graphconfiguration_search_processes_by_output: dd,
        graphconfiguration_to_digraph: _d,
        graphconfiguration_update_data_set: cd,
        graphconfiguration_update_modifiers: od,
        graphconfiguration_update_requirement: Xf,
        memory: Hf,
        stuff: qf
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Bu(Ed);
      fl();
      const Od = [
        "value"
      ], Rd = [
        "disabled"
      ], Md = [
        "disabled"
      ], Id = {
        class: "search_results"
      }, Nd = {
        class: "proc"
      }, Dd = {
        key: 0,
        class: "proc_fw"
      }, Hd = {
        key: 1,
        class: "proc_header_d"
      }, Ld = {
        key: 2,
        class: "proc_header_i"
      }, kd = {
        key: 3,
        class: "proc_header_o"
      }, Fd = {
        key: 4,
        class: "proc_fw"
      }, zd = [
        "onClick"
      ], Bd = {
        __name: "Configure",
        props: [
          "cfg",
          "cfg_fu"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t, i = e, { _0: o, cfg_fu: s } = Sr(i), { cfg: r, _1: l } = i, a = fe(!r.can_render()), u = fe(false);
          let c = Ku();
          console.log("available data", c);
          const p = fe("");
          Ne(p, (b) => {
            console.log("Updating config with", b), r.update_data_set(b);
          });
          const h = fe(""), _ = fe([]);
          Ne(h, (b) => {
            console.log("Item search for", b), b.length >= 3 && (_.value = r.search_items(b), console.log("search results items", _));
          });
          const v = fe(""), g = fe([]);
          Ne(v, (b) => {
            console.log("Process search for", b), b.length >= 3 && (g.value = r.search_processes(b), console.log("search results processes", g));
          }), Ne(_, (b) => {
            u.value = g.value.length > 0 || b.length > 0;
          }), Ne(g, (b) => {
            u.value = _.value.length > 0 || b.length > 0;
          });
          function I() {
            console.log("C handle_cfg_update"), v.value = "", g.value = [], h.value = "", _.value = [], a.value = false, n("cfg_update");
          }
          function A(b) {
            console.log("C handle make item", b), g.value = r.search_processes_by_output(b);
          }
          function M(b) {
            console.log("C handle use item", b), g.value = r.search_processes_by_input(b);
          }
          function D(b, E, H, z) {
            console.log("adding process", E, z, b), g.value = [];
            let q = b.add_process(E, H, z.duration, z.input, z.output);
            console.log("add process result", q, b, b.get_processes()), n("cfg_update");
          }
          return (b, E) => {
            const H = Pi("tooltip");
            return N(), F(ie, null, [
              C("div", null, [
                C("h2", null, [
                  E[6] || (E[6] = we("Get Started ")),
                  C("button", {
                    onClick: E[0] || (E[0] = (z) => a.value = !a.value)
                  }, ye(a.value ? "\\/" : ">"), 1)
                ])
              ]),
              se(de(Pt), {
                class: "input_options",
                when: a.value
              }, {
                default: ge(() => [
                  ee((N(), F("div", null, E[7] || (E[7] = [
                    C("label", {
                      for: "selectDataSet"
                    }, "Data Set:", -1)
                  ]))), [
                    [
                      H,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  ee((N(), F("div", null, [
                    ee(C("select", {
                      "onUpdate:modelValue": E[1] || (E[1] = (z) => p.value = z)
                    }, [
                      E[8] || (E[8] = C("option", {
                        disabled: "",
                        value: ""
                      }, "Select a data set", -1)),
                      (N(true), F(ie, null, Et(de(c), (z) => (N(), F("option", {
                        value: z.id()
                      }, ye(z.description()), 9, Od))), 256))
                    ], 512), [
                      [
                        sl,
                        p.value
                      ]
                    ])
                  ])), [
                    [
                      H,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  ee((N(), F("div", null, E[9] || (E[9] = [
                    C("label", {
                      for: "item_search"
                    }, " Item Search:", -1)
                  ]))), [
                    [
                      H,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  ee((N(), F("div", null, [
                    ee(C("input", {
                      id: "item_search",
                      type: "text",
                      disabled: p.value == "",
                      "onUpdate:modelValue": E[2] || (E[2] = (z) => h.value = z)
                    }, null, 8, Rd), [
                      [
                        qt,
                        h.value
                      ]
                    ])
                  ])), [
                    [
                      H,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  ee((N(), F("div", null, E[10] || (E[10] = [
                    C("label", {
                      for: "process_search"
                    }, " Process Search:", -1)
                  ]))), [
                    [
                      H,
                      "Start by looking for a process that you want to use"
                    ]
                  ]),
                  ee((N(), F("div", null, [
                    ee(C("input", {
                      id: "process_search",
                      type: "text",
                      disabled: p.value == "",
                      "onUpdate:modelValue": E[3] || (E[3] = (z) => v.value = z)
                    }, null, 8, Md), [
                      [
                        qt,
                        v.value
                      ]
                    ])
                  ])), [
                    [
                      H,
                      "Start by looking for a process that you want to use"
                    ]
                  ])
                ]),
                _: 1
              }, 8, [
                "when"
              ]),
              se(de(Pt), {
                class: "input_options",
                when: u.value
              }, {
                default: ge(() => [
                  E[11] || (E[11] = C("h2", {
                    class: "input_options_fw"
                  }, "Search Results", -1)),
                  (N(true), F(ie, null, Et(_.value, (z) => (N(), Fe(fu, {
                    onCfg_update: I,
                    item: z,
                    cfg: de(r)
                  }, null, 8, [
                    "item",
                    "cfg"
                  ]))), 256)),
                  C("div", Id, [
                    C("div", Nd, [
                      g.value.length > 0 ? (N(), F("hr", Dd)) : ot("", true),
                      g.value.length > 0 ? (N(), F("div", Hd, "Duration")) : ot("", true),
                      g.value.length > 0 ? (N(), F("div", Ld, "Inputs")) : ot("", true),
                      g.value.length > 0 ? (N(), F("div", kd, "Outputs")) : ot("", true),
                      g.value.length > 0 ? (N(), F("hr", Fd)) : ot("", true),
                      (N(true), F(ie, null, Et(g.value, (z) => (N(), Fe(cl, {
                        onCfg_update: E[4] || (E[4] = (q) => I()),
                        proc: z,
                        cfg: de(r),
                        emit_on_change: false
                      }, {
                        action_button: ge(({ factory_id: q, modifiers: ne }) => [
                          C("button", {
                            onClick: (K) => D(de(r), z.id, q, ne)
                          }, "Add", 8, zd)
                        ]),
                        _: 2
                      }, 1032, [
                        "proc",
                        "cfg"
                      ]))), 256))
                    ])
                  ])
                ]),
                _: 1,
                __: [
                  11
                ]
              }, 8, [
                "when"
              ]),
              (N(), Fe(ku, {
                onCfg_update: E[5] || (E[5] = (z) => I()),
                onUse_item: M,
                onMake_item: A,
                key: de(s),
                cfg: de(r)
              }, null, 8, [
                "cfg"
              ]))
            ], 64);
          };
        }
      }, jd = Ri(Bd, [
        [
          "__scopeId",
          "data-v-4f1b5790"
        ]
      ]), qd = {
        __name: "GraphRender",
        props: [
          "cfg",
          "cfg_fu"
        ],
        setup(e) {
          const t = e, { _0: n, cfg_fu: i } = Sr(t), { cfg: o, _1: s } = t;
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
          }), (r, l) => (N(), F(ie, null, [
            l[0] || (l[0] = C("div", {
              id: "vis"
            }, null, -1)),
            C("div", null, ye(de(i)), 1)
          ], 64));
        }
      }, Vd = {
        __name: "App",
        setup(e) {
          const t = yr(new Ju()), n = fe(0);
          function i() {
            console.log("A handle_cfg_update"), xa(t), n.value++;
          }
          return (o, s) => (N(), F(ie, null, [
            s[1] || (s[1] = C("header", null, [
              C("h1", null, "Process Calculator")
            ], -1)),
            s[2] || (s[2] = C("br", null, null, -1)),
            C("main", null, [
              se(de(uu), null, {
                "left-pane": ge(() => [
                  se(jd, {
                    cfg: t.value,
                    cfg_fu: n.value,
                    onCfg_update: s[0] || (s[0] = (r) => i())
                  }, null, 8, [
                    "cfg",
                    "cfg_fu"
                  ])
                ]),
                "right-pane": ge(() => [
                  se(qd, {
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
      }, Ud = Ri(Vd, [
        [
          "__scopeId",
          "data-v-67f33bbb"
        ]
      ]), Wd = [
        "top",
        "right",
        "bottom",
        "left"
      ], Os = [
        "start",
        "end"
      ], Rs = Wd.reduce((e, t) => e.concat(t, t + "-" + Os[0], t + "-" + Os[1]), []), Mn = Math.min, Bt = Math.max, Kd = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      }, Gd = {
        start: "end",
        end: "start"
      };
      function uo(e, t, n) {
        return Bt(e, Mn(t, n));
      }
      function Vt(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function ut(e) {
        return e.split("-")[0];
      }
      function Ke(e) {
        return e.split("-")[1];
      }
      function dl(e) {
        return e === "x" ? "y" : "x";
      }
      function Lo(e) {
        return e === "y" ? "height" : "width";
      }
      const Yd = /* @__PURE__ */ new Set([
        "top",
        "bottom"
      ]);
      function _t(e) {
        return Yd.has(ut(e)) ? "y" : "x";
      }
      function ko(e) {
        return dl(_t(e));
      }
      function pl(e, t, n) {
        n === void 0 && (n = false);
        const i = Ke(e), o = ko(e), s = Lo(o);
        let r = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
        return t.reference[s] > t.floating[s] && (r = pi(r)), [
          r,
          pi(r)
        ];
      }
      function Xd(e) {
        const t = pi(e);
        return [
          di(e),
          t,
          di(t)
        ];
      }
      function di(e) {
        return e.replace(/start|end/g, (t) => Gd[t]);
      }
      const Ms = [
        "left",
        "right"
      ], Is = [
        "right",
        "left"
      ], Jd = [
        "top",
        "bottom"
      ], Qd = [
        "bottom",
        "top"
      ];
      function Zd(e, t, n) {
        switch (e) {
          case "top":
          case "bottom":
            return n ? t ? Is : Ms : t ? Ms : Is;
          case "left":
          case "right":
            return t ? Jd : Qd;
          default:
            return [];
        }
      }
      function ep(e, t, n, i) {
        const o = Ke(e);
        let s = Zd(ut(e), n === "start", i);
        return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(di)))), s;
      }
      function pi(e) {
        return e.replace(/left|right|bottom|top/g, (t) => Kd[t]);
      }
      function tp(e) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...e
        };
      }
      function hl(e) {
        return typeof e != "number" ? tp(e) : {
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
      function Ns(e, t, n) {
        let { reference: i, floating: o } = e;
        const s = _t(t), r = ko(t), l = Lo(r), a = ut(t), u = s === "y", c = i.x + i.width / 2 - o.width / 2, p = i.y + i.height / 2 - o.height / 2, h = i[l] / 2 - o[l] / 2;
        let _;
        switch (a) {
          case "top":
            _ = {
              x: c,
              y: i.y - o.height
            };
            break;
          case "bottom":
            _ = {
              x: c,
              y: i.y + i.height
            };
            break;
          case "right":
            _ = {
              x: i.x + i.width,
              y: p
            };
            break;
          case "left":
            _ = {
              x: i.x - o.width,
              y: p
            };
            break;
          default:
            _ = {
              x: i.x,
              y: i.y
            };
        }
        switch (Ke(t)) {
          case "start":
            _[r] -= h * (n && u ? -1 : 1);
            break;
          case "end":
            _[r] += h * (n && u ? -1 : 1);
            break;
        }
        return _;
      }
      const np = async (e, t, n) => {
        const { placement: i = "bottom", strategy: o = "absolute", middleware: s = [], platform: r } = n, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(t));
        let u = await r.getElementRects({
          reference: e,
          floating: t,
          strategy: o
        }), { x: c, y: p } = Ns(u, i, a), h = i, _ = {}, v = 0;
        for (let g = 0; g < l.length; g++) {
          const { name: I, fn: A } = l[g], { x: M, y: D, data: b, reset: E } = await A({
            x: c,
            y: p,
            initialPlacement: i,
            placement: h,
            strategy: o,
            middlewareData: _,
            rects: u,
            platform: r,
            elements: {
              reference: e,
              floating: t
            }
          });
          c = M ?? c, p = D ?? p, _ = {
            ..._,
            [I]: {
              ..._[I],
              ...b
            }
          }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (u = E.rects === true ? await r.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          }) : E.rects), { x: c, y: p } = Ns(u, h, a)), g = -1);
        }
        return {
          x: c,
          y: p,
          placement: h,
          strategy: o,
          middlewareData: _
        };
      };
      async function Ni(e, t) {
        var n;
        t === void 0 && (t = {});
        const { x: i, y: o, platform: s, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: p = "floating", altBoundary: h = false, padding: _ = 0 } = Vt(t, e), v = hl(_), I = l[h ? p === "floating" ? "reference" : "floating" : p], A = vn(await s.getClippingRect({
          element: (n = await (s.isElement == null ? void 0 : s.isElement(I))) == null || n ? I : I.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: a
        })), M = p === "floating" ? {
          x: i,
          y: o,
          width: r.floating.width,
          height: r.floating.height
        } : r.reference, D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), b = await (s.isElement == null ? void 0 : s.isElement(D)) ? await (s.getScale == null ? void 0 : s.getScale(D)) || {
          x: 1,
          y: 1
        } : {
          x: 1,
          y: 1
        }, E = vn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: M,
          offsetParent: D,
          strategy: a
        }) : M);
        return {
          top: (A.top - E.top + v.top) / b.y,
          bottom: (E.bottom - A.bottom + v.bottom) / b.y,
          left: (A.left - E.left + v.left) / b.x,
          right: (E.right - A.right + v.right) / b.x
        };
      }
      const ip = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          const { x: n, y: i, placement: o, rects: s, platform: r, elements: l, middlewareData: a } = t, { element: u, padding: c = 0 } = Vt(e, t) || {};
          if (u == null) return {};
          const p = hl(c), h = {
            x: n,
            y: i
          }, _ = ko(o), v = Lo(_), g = await r.getDimensions(u), I = _ === "y", A = I ? "top" : "left", M = I ? "bottom" : "right", D = I ? "clientHeight" : "clientWidth", b = s.reference[v] + s.reference[_] - h[_] - s.floating[v], E = h[_] - s.reference[_], H = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
          let z = H ? H[D] : 0;
          (!z || !await (r.isElement == null ? void 0 : r.isElement(H))) && (z = l.floating[D] || s.floating[v]);
          const q = b / 2 - E / 2, ne = z / 2 - g[v] / 2 - 1, K = Mn(p[A], ne), le = Mn(p[M], ne), be = K, Ae = z - g[v] - le, _e = z / 2 - g[v] / 2 + q, Xe = uo(be, _e, Ae), ue = !a.arrow && Ke(o) != null && _e !== Xe && s.reference[v] / 2 - (_e < be ? K : le) - g[v] / 2 < 0, Y = ue ? _e < be ? _e - be : _e - Ae : 0;
          return {
            [_]: h[_] + Y,
            data: {
              [_]: Xe,
              centerOffset: _e - Xe - Y,
              ...ue && {
                alignmentOffset: Y
              }
            },
            reset: ue
          };
        }
      });
      function op(e, t, n) {
        return (e ? [
          ...n.filter((o) => Ke(o) === e),
          ...n.filter((o) => Ke(o) !== e)
        ] : n.filter((o) => ut(o) === o)).filter((o) => e ? Ke(o) === e || (t ? di(o) !== o : false) : true);
      }
      const sp = function(e) {
        return e === void 0 && (e = {}), {
          name: "autoPlacement",
          options: e,
          async fn(t) {
            var n, i, o;
            const { rects: s, middlewareData: r, placement: l, platform: a, elements: u } = t, { crossAxis: c = false, alignment: p, allowedPlacements: h = Rs, autoAlignment: _ = true, ...v } = Vt(e, t), g = p !== void 0 || h === Rs ? op(p || null, _, h) : h, I = await Ni(t, v), A = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, M = g[A];
            if (M == null) return {};
            const D = pl(M, s, await (a.isRTL == null ? void 0 : a.isRTL(u.floating)));
            if (l !== M) return {
              reset: {
                placement: g[0]
              }
            };
            const b = [
              I[ut(M)],
              I[D[0]],
              I[D[1]]
            ], E = [
              ...((i = r.autoPlacement) == null ? void 0 : i.overflows) || [],
              {
                placement: M,
                overflows: b
              }
            ], H = g[A + 1];
            if (H) return {
              data: {
                index: A + 1,
                overflows: E
              },
              reset: {
                placement: H
              }
            };
            const z = E.map((K) => {
              const le = Ke(K.placement);
              return [
                K.placement,
                le && c ? K.overflows.slice(0, 2).reduce((be, Ae) => be + Ae, 0) : K.overflows[0],
                K.overflows
              ];
            }).sort((K, le) => K[1] - le[1]), ne = ((o = z.filter((K) => K[2].slice(0, Ke(K[0]) ? 2 : 3).every((le) => le <= 0))[0]) == null ? void 0 : o[0]) || z[0][0];
            return ne !== l ? {
              data: {
                index: A + 1,
                overflows: E
              },
              reset: {
                placement: ne
              }
            } : {};
          }
        };
      }, rp = function(e) {
        return e === void 0 && (e = {}), {
          name: "flip",
          options: e,
          async fn(t) {
            var n, i;
            const { placement: o, middlewareData: s, rects: r, initialPlacement: l, platform: a, elements: u } = t, { mainAxis: c = true, crossAxis: p = true, fallbackPlacements: h, fallbackStrategy: _ = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: g = true, ...I } = Vt(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const A = ut(o), M = _t(l), D = ut(l) === l, b = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), E = h || (D || !g ? [
              pi(l)
            ] : Xd(l)), H = v !== "none";
            !h && H && E.push(...ep(l, g, v, b));
            const z = [
              l,
              ...E
            ], q = await Ni(t, I), ne = [];
            let K = ((i = s.flip) == null ? void 0 : i.overflows) || [];
            if (c && ne.push(q[A]), p) {
              const _e = pl(o, r, b);
              ne.push(q[_e[0]], q[_e[1]]);
            }
            if (K = [
              ...K,
              {
                placement: o,
                overflows: ne
              }
            ], !ne.every((_e) => _e <= 0)) {
              var le, be;
              const _e = (((le = s.flip) == null ? void 0 : le.index) || 0) + 1, Xe = z[_e];
              if (Xe && (!(p === "alignment" ? M !== _t(Xe) : false) || K.every((G) => _t(G.placement) === M ? G.overflows[0] > 0 : true))) return {
                data: {
                  index: _e,
                  overflows: K
                },
                reset: {
                  placement: Xe
                }
              };
              let ue = (be = K.filter((Y) => Y.overflows[0] <= 0).sort((Y, G) => Y.overflows[1] - G.overflows[1])[0]) == null ? void 0 : be.placement;
              if (!ue) switch (_) {
                case "bestFit": {
                  var Ae;
                  const Y = (Ae = K.filter((G) => {
                    if (H) {
                      const Se = _t(G.placement);
                      return Se === M || Se === "y";
                    }
                    return true;
                  }).map((G) => [
                    G.placement,
                    G.overflows.filter((Se) => Se > 0).reduce((Se, Ut) => Se + Ut, 0)
                  ]).sort((G, Se) => G[1] - Se[1])[0]) == null ? void 0 : Ae[0];
                  Y && (ue = Y);
                  break;
                }
                case "initialPlacement":
                  ue = l;
                  break;
              }
              if (o !== ue) return {
                reset: {
                  placement: ue
                }
              };
            }
            return {};
          }
        };
      }, lp = /* @__PURE__ */ new Set([
        "left",
        "top"
      ]);
      async function ap(e, t) {
        const { placement: n, platform: i, elements: o } = e, s = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), r = ut(n), l = Ke(n), a = _t(n) === "y", u = lp.has(r) ? -1 : 1, c = s && a ? -1 : 1, p = Vt(t, e);
        let { mainAxis: h, crossAxis: _, alignmentAxis: v } = typeof p == "number" ? {
          mainAxis: p,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: p.mainAxis || 0,
          crossAxis: p.crossAxis || 0,
          alignmentAxis: p.alignmentAxis
        };
        return l && typeof v == "number" && (_ = l === "end" ? v * -1 : v), a ? {
          x: _ * c,
          y: h * u
        } : {
          x: h * u,
          y: _ * c
        };
      }
      const cp = function(e) {
        return e === void 0 && (e = 0), {
          name: "offset",
          options: e,
          async fn(t) {
            var n, i;
            const { x: o, y: s, placement: r, middlewareData: l } = t, a = await ap(t, e);
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
      }, up = function(e) {
        return e === void 0 && (e = {}), {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: i, placement: o } = t, { mainAxis: s = true, crossAxis: r = false, limiter: l = {
              fn: (I) => {
                let { x: A, y: M } = I;
                return {
                  x: A,
                  y: M
                };
              }
            }, ...a } = Vt(e, t), u = {
              x: n,
              y: i
            }, c = await Ni(t, a), p = _t(ut(o)), h = dl(p);
            let _ = u[h], v = u[p];
            if (s) {
              const I = h === "y" ? "top" : "left", A = h === "y" ? "bottom" : "right", M = _ + c[I], D = _ - c[A];
              _ = uo(M, _, D);
            }
            if (r) {
              const I = p === "y" ? "top" : "left", A = p === "y" ? "bottom" : "right", M = v + c[I], D = v - c[A];
              v = uo(M, v, D);
            }
            const g = l.fn({
              ...t,
              [h]: _,
              [p]: v
            });
            return {
              ...g,
              data: {
                x: g.x - n,
                y: g.y - i,
                enabled: {
                  [h]: s,
                  [p]: r
                }
              }
            };
          }
        };
      }, fp = function(e) {
        return e === void 0 && (e = {}), {
          name: "size",
          options: e,
          async fn(t) {
            var n, i;
            const { placement: o, rects: s, platform: r, elements: l } = t, { apply: a = () => {
            }, ...u } = Vt(e, t), c = await Ni(t, u), p = ut(o), h = Ke(o), _ = _t(o) === "y", { width: v, height: g } = s.floating;
            let I, A;
            p === "top" || p === "bottom" ? (I = p, A = h === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (A = p, I = h === "end" ? "top" : "bottom");
            const M = g - c.top - c.bottom, D = v - c.left - c.right, b = Mn(g - c[I], M), E = Mn(v - c[A], D), H = !t.middlewareData.shift;
            let z = b, q = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (q = D), (i = t.middlewareData.shift) != null && i.enabled.y && (z = M), H && !h) {
              const K = Bt(c.left, 0), le = Bt(c.right, 0), be = Bt(c.top, 0), Ae = Bt(c.bottom, 0);
              _ ? q = v - 2 * (K !== 0 || le !== 0 ? K + le : Bt(c.left, c.right)) : z = g - 2 * (be !== 0 || Ae !== 0 ? be + Ae : Bt(c.top, c.bottom));
            }
            await a({
              ...t,
              availableWidth: q,
              availableHeight: z
            });
            const ne = await r.getDimensions(l.floating);
            return v !== ne.width || g !== ne.height ? {
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
      const Ds = Math.min, bn = Math.max, hi = Math.round;
      function _l(e) {
        const t = lt(e);
        let n = parseFloat(t.width), i = parseFloat(t.height);
        const o = e.offsetWidth, s = e.offsetHeight, r = hi(n) !== o || hi(i) !== s;
        return r && (n = o, i = s), {
          width: n,
          height: i,
          fallback: r
        };
      }
      function Nt(e) {
        return ml(e) ? (e.nodeName || "").toLowerCase() : "";
      }
      let Gn;
      function gl() {
        if (Gn) return Gn;
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? (Gn = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Gn) : navigator.userAgent;
      }
      function at(e) {
        return e instanceof ze(e).HTMLElement;
      }
      function Ot(e) {
        return e instanceof ze(e).Element;
      }
      function ml(e) {
        return e instanceof ze(e).Node;
      }
      function Hs(e) {
        return typeof ShadowRoot > "u" ? false : e instanceof ze(e).ShadowRoot || e instanceof ShadowRoot;
      }
      function Di(e) {
        const { overflow: t, overflowX: n, overflowY: i, display: o } = lt(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && ![
          "inline",
          "contents"
        ].includes(o);
      }
      function dp(e) {
        return [
          "table",
          "td",
          "th"
        ].includes(Nt(e));
      }
      function fo(e) {
        const t = /firefox/i.test(gl()), n = lt(e), i = n.backdropFilter || n.WebkitBackdropFilter;
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
        return !/^((?!chrome|android).)*safari/i.test(gl());
      }
      function Fo(e) {
        return [
          "html",
          "body",
          "#document"
        ].includes(Nt(e));
      }
      function vl(e) {
        return Ot(e) ? e : e.contextElement;
      }
      const bl = {
        x: 1,
        y: 1
      };
      function tn(e) {
        const t = vl(e);
        if (!at(t)) return bl;
        const n = t.getBoundingClientRect(), { width: i, height: o, fallback: s } = _l(t);
        let r = (s ? hi(n.width) : n.width) / i, l = (s ? hi(n.height) : n.height) / o;
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
        t && (i ? Ot(i) && (a = tn(i)) : a = tn(e));
        const u = l ? ze(l) : window, c = !wl() && n;
        let p = (r.left + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / a.x, h = (r.top + (c && ((s = u.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / a.y, _ = r.width / a.x, v = r.height / a.y;
        if (l) {
          const g = ze(l), I = i && Ot(i) ? ze(i) : i;
          let A = g.frameElement;
          for (; A && i && I !== g; ) {
            const M = tn(A), D = A.getBoundingClientRect(), b = getComputedStyle(A);
            D.x += (A.clientLeft + parseFloat(b.paddingLeft)) * M.x, D.y += (A.clientTop + parseFloat(b.paddingTop)) * M.y, p *= M.x, h *= M.y, _ *= M.x, v *= M.y, p += D.x, h += D.y, A = ze(A).frameElement;
          }
        }
        return {
          width: _,
          height: v,
          top: h,
          right: p + _,
          bottom: h + v,
          left: p,
          x: p,
          y: h
        };
      }
      function Rt(e) {
        return ((ml(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function Hi(e) {
        return Ot(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        };
      }
      function yl(e) {
        return In(Rt(e)).left + Hi(e).scrollLeft;
      }
      function Nn(e) {
        if (Nt(e) === "html") return e;
        const t = e.assignedSlot || e.parentNode || Hs(e) && e.host || Rt(e);
        return Hs(t) ? t.host : t;
      }
      function xl(e) {
        const t = Nn(e);
        return Fo(t) ? t.ownerDocument.body : at(t) && Di(t) ? t : xl(t);
      }
      function _i(e, t) {
        var n;
        t === void 0 && (t = []);
        const i = xl(e), o = i === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ze(i);
        return o ? t.concat(s, s.visualViewport || [], Di(i) ? i : []) : t.concat(i, _i(i));
      }
      function Ls(e, t, n) {
        return t === "viewport" ? vn(function(i, o) {
          const s = ze(i), r = Rt(i), l = s.visualViewport;
          let a = r.clientWidth, u = r.clientHeight, c = 0, p = 0;
          if (l) {
            a = l.width, u = l.height;
            const h = wl();
            (h || !h && o === "fixed") && (c = l.offsetLeft, p = l.offsetTop);
          }
          return {
            width: a,
            height: u,
            x: c,
            y: p
          };
        }(e, n)) : Ot(t) ? vn(function(i, o) {
          const s = In(i, true, o === "fixed"), r = s.top + i.clientTop, l = s.left + i.clientLeft, a = at(i) ? tn(i) : {
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
          const o = Rt(i), s = Hi(i), r = i.ownerDocument.body, l = bn(o.scrollWidth, o.clientWidth, r.scrollWidth, r.clientWidth), a = bn(o.scrollHeight, o.clientHeight, r.scrollHeight, r.clientHeight);
          let u = -s.scrollLeft + yl(i);
          const c = -s.scrollTop;
          return lt(r).direction === "rtl" && (u += bn(o.clientWidth, r.clientWidth) - l), {
            width: l,
            height: a,
            x: u,
            y: c
          };
        }(Rt(e)));
      }
      function ks(e) {
        return at(e) && lt(e).position !== "fixed" ? e.offsetParent : null;
      }
      function Fs(e) {
        const t = ze(e);
        let n = ks(e);
        for (; n && dp(n) && lt(n).position === "static"; ) n = ks(n);
        return n && (Nt(n) === "html" || Nt(n) === "body" && lt(n).position === "static" && !fo(n)) ? t : n || function(i) {
          let o = Nn(i);
          for (; at(o) && !Fo(o); ) {
            if (fo(o)) return o;
            o = Nn(o);
          }
          return null;
        }(e) || t;
      }
      function pp(e, t, n) {
        const i = at(t), o = Rt(t), s = In(e, true, n === "fixed", t);
        let r = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = {
          x: 0,
          y: 0
        };
        if (i || !i && n !== "fixed") if ((Nt(t) !== "body" || Di(o)) && (r = Hi(t)), at(t)) {
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
      const hp = {
        getClippingRect: function(e) {
          let { element: t, boundary: n, rootBoundary: i, strategy: o } = e;
          const s = n === "clippingAncestors" ? function(u, c) {
            const p = c.get(u);
            if (p) return p;
            let h = _i(u).filter((I) => Ot(I) && Nt(I) !== "body"), _ = null;
            const v = lt(u).position === "fixed";
            let g = v ? Nn(u) : u;
            for (; Ot(g) && !Fo(g); ) {
              const I = lt(g), A = fo(g);
              (v ? A || _ : A || I.position !== "static" || !_ || ![
                "absolute",
                "fixed"
              ].includes(_.position)) ? _ = I : h = h.filter((M) => M !== g), g = Nn(g);
            }
            return c.set(u, h), h;
          }(t, this._c) : [].concat(n), r = [
            ...s,
            i
          ], l = r[0], a = r.reduce((u, c) => {
            const p = Ls(t, c, o);
            return u.top = bn(p.top, u.top), u.right = Ds(p.right, u.right), u.bottom = Ds(p.bottom, u.bottom), u.left = bn(p.left, u.left), u;
          }, Ls(t, l, o));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let { rect: t, offsetParent: n, strategy: i } = e;
          const o = at(n), s = Rt(n);
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
          if ((o || !o && i !== "fixed") && ((Nt(n) !== "body" || Di(s)) && (r = Hi(n)), at(n))) {
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
        isElement: Ot,
        getDimensions: function(e) {
          return at(e) ? _l(e) : e.getBoundingClientRect();
        },
        getOffsetParent: Fs,
        getDocumentElement: Rt,
        getScale: tn,
        async getElementRects(e) {
          let { reference: t, floating: n, strategy: i } = e;
          const o = this.getOffsetParent || Fs, s = this.getDimensions;
          return {
            reference: pp(t, await o(n), i),
            floating: {
              x: 0,
              y: 0,
              ...await s(n)
            }
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => lt(e).direction === "rtl"
      }, _p = (e, t, n) => {
        const i = /* @__PURE__ */ new Map(), o = {
          platform: hp,
          ...n
        }, s = {
          ...o.platform,
          _c: i
        };
        return np(e, t, {
          ...o,
          platform: s
        });
      };
      function $l(e, t) {
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? $l(e[n], t[n]) : e[n] = t[n]);
      }
      const Ge = {
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
        let n = Ge.themes[e] || {}, i;
        do
          i = n[t], typeof i > "u" ? n.$extend ? n = Ge.themes[n.$extend] || {} : (n = null, i = Ge[t]) : n = null;
        while (n);
        return i;
      }
      function gp(e) {
        const t = [
          e
        ];
        let n = Ge.themes[e] || {};
        do
          n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ge.themes[n.$extend] || {}) : n = null;
        while (n);
        return t.map((i) => `v-popper--theme-${i}`);
      }
      function zs(e) {
        const t = [
          e
        ];
        let n = Ge.themes[e] || {};
        do
          n.$extend ? (t.push(n.$extend), n = Ge.themes[n.$extend] || {}) : n = null;
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
      ]), []), Bs = {
        hover: "mouseenter",
        focus: "focus",
        click: "click",
        touch: "touchstart",
        pointer: "pointerdown"
      }, js = {
        hover: "mouseleave",
        focus: "blur",
        click: "click",
        touch: "touchend",
        pointer: "pointerup"
      };
      function qs(e, t) {
        const n = e.indexOf(t);
        n !== -1 && e.splice(n, 1);
      }
      function Ji() {
        return new Promise((e) => requestAnimationFrame(() => {
          requestAnimationFrame(e);
        }));
      }
      const Ve = [];
      let Ft = null;
      const Vs = {};
      function Us(e) {
        let t = Vs[e];
        return t || (t = Vs[e] = []), t;
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
            (this.distance || this.skidding) && e.middleware.push(cp({
              mainAxis: this.distance,
              crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(sp({
              alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(up({
              padding: this.overflowPadding,
              boundary: this.boundary,
              crossAxis: this.shiftCrossAxis
            })), !t && this.flip && e.middleware.push(rp({
              padding: this.overflowPadding,
              boundary: this.boundary
            }))), e.middleware.push(ip({
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
            (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(fp({
              boundary: this.boundary,
              padding: this.overflowPadding,
              apply: ({ availableWidth: i, availableHeight: o }) => {
                this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = o != null ? `${o}px` : null;
              }
            })));
            const n = await _p(this.$_referenceNode, this.$_popperNode, e);
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
            clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ji(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
              ..._i(this.$_referenceNode),
              ..._i(this.$_popperNode)
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
              for (let n = 0; n < Ve.length; n++) t = Ve[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
            }
            Ve.push(this), document.body.classList.add("v-popper--some-open");
            for (const t of zs(this.theme)) Us(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await Ji(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
          },
          async $_applyHide(e = false) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = true, this.$_hideInProgress = false;
              return;
            }
            if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
            this.skipTransition = e, qs(Ve, this), Ve.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of zs(this.theme)) {
              const i = Us(n);
              qs(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
            }
            Ft === this && (Ft = null), this.isShown = false, this.$_applyAttrsToTarget({
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
            this.$_registerTriggerListeners(this.$_targetNodes, Bs, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([
              this.$_popperNode
            ], Bs, this.popperTriggers, this.popperShowTriggers, e);
            const t = (n) => {
              n.usedByTooltip || this.hide({
                event: n
              });
            };
            this.$_registerTriggerListeners(this.$_targetNodes, js, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([
              this.$_popperNode
            ], js, this.popperTriggers, this.popperHideTriggers, t);
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
              const t = this.$_popperNode.getBoundingClientRect(), n = yn - xt, i = xn - $t, o = t.left + t.width / 2 - xt + (t.top + t.height / 2) - $t + t.width + t.height, s = xt + n * o, r = $t + i * o;
              return Yn(xt, $t, s, r, t.left, t.top, t.left, t.bottom) || Yn(xt, $t, s, r, t.left, t.top, t.right, t.top) || Yn(xt, $t, s, r, t.right, t.top, t.right, t.bottom) || Yn(xt, $t, s, r, t.left, t.bottom, t.right, t.bottom);
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
          document.addEventListener("touchstart", (t) => Ws(t, true), e), document.addEventListener("touchend", (t) => Ks(t, true), e);
        } else window.addEventListener("mousedown", (e) => Ws(e, false), true), window.addEventListener("click", (e) => Ks(e, false), true);
        window.addEventListener("resize", wp);
      }
      function Ws(e, t) {
        if (Ge.autoHideOnMousedown) Pl(e, t);
        else for (let n = 0; n < Ve.length; n++) {
          const i = Ve[n];
          try {
            i.mouseDownContains = i.popperNode().contains(e.target);
          } catch {
          }
        }
      }
      function Ks(e, t) {
        Ge.autoHideOnMousedown || Pl(e, t);
      }
      function Pl(e, t) {
        const n = {};
        for (let i = Ve.length - 1; i >= 0; i--) {
          const o = Ve[i];
          try {
            const s = o.containsGlobalTarget = o.mouseDownContains || o.popperNode().contains(e.target);
            o.pendingHide = false, requestAnimationFrame(() => {
              if (o.pendingHide = false, !n[o.randomId] && Gs(o, s, e)) {
                if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
                  let l = o.parentPopper;
                  for (; l; ) n[l.randomId] = true, l = l.parentPopper;
                  return;
                }
                let r = o.parentPopper;
                for (; r && Gs(r, r.containsGlobalTarget, e); ) r.$_handleGlobalClose(e, t), r = r.parentPopper;
              }
            });
          } catch {
          }
        }
      }
      function Gs(e, t, n) {
        return n.closeAllPopover || n.closePopover && t || mp(e, n) && !t;
      }
      function mp(e, t) {
        if (typeof e.autoHide == "function") {
          const n = e.autoHide(t);
          return e.lastAutoHide = n, n;
        }
        return e.autoHide;
      }
      function wp() {
        for (let e = 0; e < Ve.length; e++) Ve[e].$_computePosition();
      }
      let xt = 0, $t = 0, yn = 0, xn = 0;
      typeof window < "u" && window.addEventListener("mousemove", (e) => {
        xt = yn, $t = xn, yn = e.clientX, xn = e.clientY;
      }, rn ? {
        passive: true
      } : void 0);
      function Yn(e, t, n, i, o, s, r, l) {
        const a = ((r - o) * (t - s) - (l - s) * (e - o)) / ((l - s) * (n - e) - (r - o) * (i - t)), u = ((n - e) * (t - s) - (i - t) * (e - o)) / ((l - s) * (n - e) - (r - o) * (i - t));
        return a >= 0 && a <= 1 && u >= 0 && u <= 1;
      }
      const vp = {
        extends: Cl()
      }, Li = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [i, o] of t) n[i] = o;
        return n;
      };
      function bp(e, t, n, i, o, s) {
        return N(), F("div", {
          ref: "reference",
          class: Ue([
            "v-popper",
            {
              "v-popper--shown": e.slotData.isShown
            }
          ])
        }, [
          st(e.$slots, "default", nr(No(e.slotData)))
        ], 2);
      }
      const yp = Li(vp, [
        [
          "render",
          bp
        ]
      ]);
      function xp() {
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
      let ni;
      function ho() {
        ho.init || (ho.init = true, ni = xp() !== -1);
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
          this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ni && this.$el.appendChild(e), e.data = "about:blank", ni || this.$el.appendChild(e);
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
            this._resizeObject && this._resizeObject.onload && (!ni && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
          }
        }
      };
      const $p = Da();
      Ia("data-v-b329ee4c");
      const Sp = {
        class: "resize-observer",
        tabindex: "-1"
      };
      Na();
      const Tp = $p((e, t, n, i, o, s) => (N(), Fe("div", Sp)));
      ki.render = Tp;
      ki.__scopeId = "data-v-b329ee4c";
      ki.__file = "src/components/ResizeObserver.vue";
      const Al = (e = "theme") => ({
        computed: {
          themeClass() {
            return gp(this[e]);
          }
        }
      }), Cp = ln({
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
      }), Pp = [
        "id",
        "aria-hidden",
        "tabindex",
        "data-popper-placement"
      ], Ap = {
        ref: "inner",
        class: "v-popper__inner"
      }, Ep = C("div", {
        class: "v-popper__arrow-outer"
      }, null, -1), Op = C("div", {
        class: "v-popper__arrow-inner"
      }, null, -1), Rp = [
        Ep,
        Op
      ];
      function Mp(e, t, n, i, o, s) {
        const r = Cn("ResizeObserver");
        return N(), F("div", {
          id: e.popperId,
          ref: "popover",
          class: Ue([
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
          style: gt(e.result ? {
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
          C("div", {
            class: "v-popper__backdrop",
            onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
          }),
          C("div", {
            class: "v-popper__wrapper",
            style: gt(e.result ? {
              transformOrigin: e.result.transformOrigin
            } : void 0)
          }, [
            C("div", Ap, [
              e.mounted ? (N(), F(ie, {
                key: 0
              }, [
                C("div", null, [
                  st(e.$slots, "default")
                ]),
                e.handleResize ? (N(), Fe(r, {
                  key: 0,
                  onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
                })) : ot("", true)
              ], 64)) : ot("", true)
            ], 512),
            C("div", {
              ref: "arrow",
              class: "v-popper__arrow-container",
              style: gt(e.result ? {
                left: e.toPx(e.result.arrow.x),
                top: e.toPx(e.result.arrow.y)
              } : void 0)
            }, Rp, 4)
          ], 4)
        ], 46, Pp);
      }
      const El = Li(Cp, [
        [
          "render",
          Mp
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
      let _o = function() {
      };
      typeof window < "u" && (_o = window.Element);
      const Ip = ln({
        name: "VPopperWrapper",
        components: {
          Popper: yp,
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
              _o,
              Boolean
            ],
            default: void 0
          },
          boundary: {
            type: [
              String,
              _o
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
      function Np(e, t, n, i, o, s) {
        const r = Cn("PopperContent"), l = Cn("Popper");
        return N(), Fe(l, Ho({
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
          default: ge(({ popperId: a, isShown: u, shouldMountContent: c, skipTransition: p, autoHide: h, show: _, hide: v, handleResize: g, onResize: I, classes: A, result: M }) => [
            st(e.$slots, "default", {
              shown: u,
              show: _,
              hide: v
            }),
            se(r, {
              ref: "popperContent",
              "popper-id": a,
              theme: e.finalTheme,
              shown: u,
              mounted: c,
              "skip-transition": p,
              "auto-hide": h,
              "handle-resize": g,
              classes: A,
              result: M,
              onHide: v,
              onResize: I
            }, {
              default: ge(() => [
                st(e.$slots, "popper", {
                  shown: u,
                  hide: v
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
      const zo = Li(Ip, [
        [
          "render",
          Np
        ]
      ]), Dp = {
        ...zo,
        name: "VDropdown",
        vPopperTheme: "dropdown"
      }, Hp = {
        ...zo,
        name: "VMenu",
        vPopperTheme: "menu"
      }, Lp = {
        ...zo,
        name: "VTooltip",
        vPopperTheme: "tooltip"
      }, kp = ln({
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
      }), Fp = [
        "innerHTML"
      ], zp = [
        "textContent"
      ];
      function Bp(e, t, n, i, o, s) {
        const r = Cn("PopperContent"), l = Cn("Popper");
        return N(), Fe(l, Ho({
          ref: "popper"
        }, e.$attrs, {
          theme: e.theme,
          "target-nodes": e.targetNodes,
          "popper-node": () => e.$refs.popperContent.$el,
          onApplyShow: e.onShow,
          onApplyHide: e.onHide
        }), {
          default: ge(({ popperId: a, isShown: u, shouldMountContent: c, skipTransition: p, autoHide: h, hide: _, handleResize: v, onResize: g, classes: I, result: A }) => [
            se(r, {
              ref: "popperContent",
              class: Ue({
                "v-popper--tooltip-loading": e.loading
              }),
              "popper-id": a,
              theme: e.theme,
              shown: u,
              mounted: c,
              "skip-transition": p,
              "auto-hide": h,
              "handle-resize": v,
              classes: I,
              result: A,
              onHide: _,
              onResize: g
            }, {
              default: ge(() => [
                e.html ? (N(), F("div", {
                  key: 0,
                  innerHTML: e.finalContent
                }, null, 8, Fp)) : (N(), F("div", {
                  key: 1,
                  textContent: ye(e.finalContent)
                }, null, 8, zp))
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
      const jp = Li(kp, [
        [
          "render",
          Bp
        ]
      ]), Rl = "v-popper--has-tooltip";
      function qp(e, t) {
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
        }, i.placement = qp(i, n), i.targetNodes = () => [
          e
        ], i.referenceNode = () => e, i;
      }
      let Zi, Hn, Vp = 0;
      function Up() {
        if (Zi) return;
        Hn = fe([]), Zi = ll({
          name: "VTooltipDirectiveApp",
          setup() {
            return {
              directives: Hn
            };
          },
          render() {
            return this.directives.map((t) => Lc(jp, {
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
      function Wp(e, t, n) {
        Up();
        const i = fe(Ml(e, t, n)), o = fe(false), s = {
          id: Vp++,
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
      function Ys(e, { value: t, modifiers: n }) {
        const i = Ml(e, t, n);
        if (!i.content || Dn(i.theme || "tooltip", "disabled")) Il(e);
        else {
          let o;
          e.$_popper ? (o = e.$_popper, o.options.value = i) : o = Wp(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? o.show() : o.hide());
        }
      }
      const Kp = {
        beforeMount: Ys,
        updated: Ys,
        beforeUnmount(e) {
          Il(e);
        }
      };
      function Xs(e) {
        e.addEventListener("mousedown", gi), e.addEventListener("click", gi), e.addEventListener("touchstart", Nl, rn ? {
          passive: true
        } : false);
      }
      function Js(e) {
        e.removeEventListener("mousedown", gi), e.removeEventListener("click", gi), e.removeEventListener("touchstart", Nl), e.removeEventListener("touchend", Dl), e.removeEventListener("touchcancel", Hl);
      }
      function gi(e) {
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
      const Gp = {
        beforeMount(e, { value: t, modifiers: n }) {
          e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Xs(e);
        },
        updated(e, { value: t, oldValue: n, modifiers: i }) {
          e.$_closePopoverModifiers = i, t !== n && (typeof t > "u" || t ? Xs(e) : Js(e));
        },
        beforeUnmount(e) {
          Js(e);
        }
      };
      function Yp(e, t = {}) {
        e.$_vTooltipInstalled || (e.$_vTooltipInstalled = true, $l(Ge, t), e.directive("tooltip", Kp), e.directive("close-popper", Gp), e.component("VTooltip", Lp), e.component("VDropdown", Dp), e.component("VMenu", Hp));
      }
      const Xp = {
        version: "5.2.2",
        install: Yp,
        options: Ge
      }, Jp = [
        "https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.0/viz-lite.js"
      ];
      Jp.forEach((e) => {
        let t = document.head.querySelector(`[src="${e}"`);
        t || (t = document.createElement("script"), t.setAttribute("src", e), t.setAttribute("type", "text/javascript"), document.head.appendChild(t));
      });
      ll(Ud).use(Xp).mount("#app");
    })();
  }
});
export default require_stdin();

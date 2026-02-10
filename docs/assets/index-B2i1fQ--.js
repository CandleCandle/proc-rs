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
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
        new MutationObserver((i) => {
          for (const s of i) if (s.type === "childList") for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(i) {
          const s = {};
          return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function o(i) {
          if (i.ep) return;
          i.ep = true;
          const s = n(i);
          fetch(i.href, s);
        }
      })();
      function gi(e) {
        const t = /* @__PURE__ */ Object.create(null);
        for (const n of e.split(",")) t[n] = 1;
        return (n) => n in t;
      }
      const oe = {}, Kt = [], it = () => {
      }, Ol = () => false, bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mi = (e) => e.startsWith("onUpdate:"), Se = Object.assign, wi = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }, Rl = Object.prototype.hasOwnProperty, ee = (e, t) => Rl.call(e, t), B = Array.isArray, Gt = (e) => Ln(e) === "[object Map]", yo = (e) => Ln(e) === "[object Set]", qi = (e) => Ln(e) === "[object Date]", W = (e) => typeof e == "function", de = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", Us = (e) => (ae(e) || W(e)) && W(e.then) && W(e.catch), Ws = Object.prototype.toString, Ln = (e) => Ws.call(e), Ml = (e) => Ln(e).slice(8, -1), Ks = (e) => Ln(e) === "[object Object]", vi = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, pn = gi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), xo = (e) => {
        const t = /* @__PURE__ */ Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      }, Il = /-(\w)/g, je = xo((e) => e.replace(Il, (t, n) => n ? n.toUpperCase() : "")), Nl = /\B([A-Z])/g, Nt = xo((e) => e.replace(Nl, "-$1").toLowerCase()), So = xo((e) => e.charAt(0).toUpperCase() + e.slice(1)), jo = xo((e) => e ? `on${So(e)}` : ""), Ct = (e, t) => !Object.is(e, t), Yn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
      }, Gs = (e, t, n, o = false) => {
        Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: o,
          value: n
        });
      }, oo = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };
      let Vi;
      const $o = () => Vi || (Vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
      function Pt(e) {
        if (B(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const o = e[n], i = de(o) ? Hl(o) : Pt(o);
            if (i) for (const s in i) t[s] = i[s];
          }
          return t;
        } else if (de(e) || ae(e)) return e;
      }
      const Dl = /;(?![^(]*\))/g, Ll = /:([^]+)/, kl = /\/\*[^]*?\*\//g;
      function Hl(e) {
        const t = {};
        return e.replace(kl, "").split(Dl).forEach((n) => {
          if (n) {
            const o = n.split(Ll);
            o.length > 1 && (t[o[0].trim()] = o[1].trim());
          }
        }), t;
      }
      function Ve(e) {
        let t = "";
        if (de(e)) t = e;
        else if (B(e)) for (let n = 0; n < e.length; n++) {
          const o = Ve(e[n]);
          o && (t += o + " ");
        }
        else if (ae(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim();
      }
      function Fl(e) {
        if (!e) return null;
        let { class: t, style: n } = e;
        return t && !de(t) && (e.class = Ve(t)), n && (e.style = Pt(n)), e;
      }
      const zl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bl = gi(zl);
      function Ys(e) {
        return !!e || e === "";
      }
      function jl(e, t) {
        if (e.length !== t.length) return false;
        let n = true;
        for (let o = 0; n && o < e.length; o++) n = en(e[o], t[o]);
        return n;
      }
      function en(e, t) {
        if (e === t) return true;
        let n = qi(e), o = qi(t);
        if (n || o) return n && o ? e.getTime() === t.getTime() : false;
        if (n = Ge(e), o = Ge(t), n || o) return e === t;
        if (n = B(e), o = B(t), n || o) return n && o ? jl(e, t) : false;
        if (n = ae(e), o = ae(t), n || o) {
          if (!n || !o) return false;
          const i = Object.keys(e).length, s = Object.keys(t).length;
          if (i !== s) return false;
          for (const r in e) {
            const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
            if (l && !a || !l && a || !en(e[r], t[r])) return false;
          }
        }
        return String(e) === String(t);
      }
      function ql(e, t) {
        return e.findIndex((n) => en(n, t));
      }
      const Xs = (e) => !!(e && e.__v_isRef === true), Me = (e) => de(e) ? e : e == null ? "" : B(e) || ae(e) && (e.toString === Ws || !W(e.toString)) ? Xs(e) ? Me(e.value) : JSON.stringify(e, Js, 2) : String(e), Js = (e, t) => Xs(t) ? Js(e, t.value) : Gt(t) ? {
        [`Map(${t.size})`]: [
          ...t.entries()
        ].reduce((n, [o, i], s) => (n[qo(o, s) + " =>"] = i, n), {})
      } : yo(t) ? {
        [`Set(${t.size})`]: [
          ...t.values()
        ].map((n) => qo(n))
      } : Ge(t) ? qo(t) : ae(t) && !B(t) && !Ks(t) ? String(t) : t, qo = (e, t = "") => {
        var n;
        return Ge(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
      };
      let Re;
      class Vl {
        constructor(t = false) {
          this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(this) - 1);
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
            const n = Re;
            try {
              return Re = this, t();
            } finally {
              Re = n;
            }
          }
        }
        on() {
          ++this._on === 1 && (this.prevScope = Re, Re = this);
        }
        off() {
          this._on > 0 && --this._on === 0 && (Re = this.prevScope, this.prevScope = void 0);
        }
        stop(t) {
          if (this._active) {
            this._active = false;
            let n, o;
            for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
              for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(true);
              this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !t) {
              const i = this.parent.scopes.pop();
              i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
            }
            this.parent = void 0;
          }
        }
      }
      function Ul() {
        return Re;
      }
      let le;
      const Vo = /* @__PURE__ */ new WeakSet();
      class Qs {
        constructor(t) {
          this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && Re.active && Re.effects.push(this);
        }
        pause() {
          this.flags |= 64;
        }
        resume() {
          this.flags & 64 && (this.flags &= -65, Vo.has(this) && (Vo.delete(this), this.trigger()));
        }
        notify() {
          this.flags & 2 && !(this.flags & 32) || this.flags & 8 || er(this);
        }
        run() {
          if (!(this.flags & 1)) return this.fn();
          this.flags |= 2, Ui(this), tr(this);
          const t = le, n = Ue;
          le = this, Ue = true;
          try {
            return this.fn();
          } finally {
            nr(this), le = t, Ue = n, this.flags &= -3;
          }
        }
        stop() {
          if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) xi(t);
            this.deps = this.depsTail = void 0, Ui(this), this.onStop && this.onStop(), this.flags &= -2;
          }
        }
        trigger() {
          this.flags & 64 ? Vo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
        }
        runIfDirty() {
          ti(this) && this.run();
        }
        get dirty() {
          return ti(this);
        }
      }
      let Zs = 0, hn, _n;
      function er(e, t = false) {
        if (e.flags |= 8, t) {
          e.next = _n, _n = e;
          return;
        }
        e.next = hn, hn = e;
      }
      function bi() {
        Zs++;
      }
      function yi() {
        if (--Zs > 0) return;
        if (_n) {
          let t = _n;
          for (_n = void 0; t; ) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n;
          }
        }
        let e;
        for (; hn; ) {
          let t = hn;
          for (hn = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
              t.trigger();
            } catch (o) {
              e || (e = o);
            }
            t = n;
          }
        }
        if (e) throw e;
      }
      function tr(e) {
        for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
      }
      function nr(e) {
        let t, n = e.depsTail, o = n;
        for (; o; ) {
          const i = o.prevDep;
          o.version === -1 ? (o === n && (n = i), xi(o), Wl(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
        }
        e.deps = t, e.depsTail = n;
      }
      function ti(e) {
        for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (or(t.dep.computed) || t.dep.version !== t.version)) return true;
        return !!e._dirty;
      }
      function or(e) {
        if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xn) || (e.globalVersion = xn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ti(e)))) return;
        e.flags |= 2;
        const t = e.dep, n = le, o = Ue;
        le = e, Ue = true;
        try {
          tr(e);
          const i = e.fn(e._value);
          (t.version === 0 || Ct(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
        } catch (i) {
          throw t.version++, i;
        } finally {
          le = n, Ue = o, nr(e), e.flags &= -3;
        }
      }
      function xi(e, t = false) {
        const { dep: n, prevSub: o, nextSub: i } = e;
        if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o, !o && n.computed)) {
          n.computed.flags &= -5;
          for (let s = n.computed.deps; s; s = s.nextDep) xi(s, true);
        }
        !t && !--n.sc && n.map && n.map.delete(n.key);
      }
      function Wl(e) {
        const { prevDep: t, nextDep: n } = e;
        t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
      }
      let Ue = true;
      const ir = [];
      function mt() {
        ir.push(Ue), Ue = false;
      }
      function wt() {
        const e = ir.pop();
        Ue = e === void 0 ? true : e;
      }
      function Ui(e) {
        const { cleanup: t } = e;
        if (e.cleanup = void 0, t) {
          const n = le;
          le = void 0;
          try {
            t();
          } finally {
            le = n;
          }
        }
      }
      let xn = 0;
      class Kl {
        constructor(t, n) {
          this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
        }
      }
      class Si {
        constructor(t) {
          this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
        }
        track(t) {
          if (!le || !Ue || le === this.computed) return;
          let n = this.activeLink;
          if (n === void 0 || n.sub !== le) n = this.activeLink = new Kl(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, sr(n);
          else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const o = n.nextDep;
            o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = le.depsTail, n.nextDep = void 0, le.depsTail.nextDep = n, le.depsTail = n, le.deps === n && (le.deps = o);
          }
          return n;
        }
        trigger(t) {
          this.version++, xn++, this.notify(t);
        }
        notify(t) {
          bi();
          try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
          } finally {
            yi();
          }
        }
      }
      function sr(e) {
        if (e.dep.sc++, e.sub.flags & 4) {
          const t = e.dep.computed;
          if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let o = t.deps; o; o = o.nextDep) sr(o);
          }
          const n = e.dep.subs;
          n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
        }
      }
      const io = /* @__PURE__ */ new WeakMap(), Bt = Symbol(""), ni = Symbol(""), Sn = Symbol("");
      function ye(e, t, n) {
        if (Ue && le) {
          let o = io.get(e);
          o || io.set(e, o = /* @__PURE__ */ new Map());
          let i = o.get(n);
          i || (o.set(n, i = new Si()), i.map = o, i.key = n), i.track();
        }
      }
      function dt(e, t, n, o, i, s) {
        const r = io.get(e);
        if (!r) {
          xn++;
          return;
        }
        const l = (a) => {
          a && a.trigger();
        };
        if (bi(), t === "clear") r.forEach(l);
        else {
          const a = B(e), u = a && vi(n);
          if (a && n === "length") {
            const c = Number(o);
            r.forEach((d, h) => {
              (h === "length" || h === Sn || !Ge(h) && h >= c) && l(d);
            });
          } else switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Sn)), t) {
            case "add":
              a ? u && l(r.get("length")) : (l(r.get(Bt)), Gt(e) && l(r.get(ni)));
              break;
            case "delete":
              a || (l(r.get(Bt)), Gt(e) && l(r.get(ni)));
              break;
            case "set":
              Gt(e) && l(r.get(Bt));
              break;
          }
        }
        yi();
      }
      function Gl(e, t) {
        const n = io.get(e);
        return n && n.get(t);
      }
      function Vt(e) {
        const t = Z(e);
        return t === e ? t : (ye(t, "iterate", Sn), ze(e) ? t : t.map(me));
      }
      function To(e) {
        return ye(e = Z(e), "iterate", Sn), e;
      }
      const Yl = {
        __proto__: null,
        [Symbol.iterator]() {
          return Uo(this, Symbol.iterator, me);
        },
        concat(...e) {
          return Vt(this).concat(...e.map((t) => B(t) ? Vt(t) : t));
        },
        entries() {
          return Uo(this, "entries", (e) => (e[1] = me(e[1]), e));
        },
        every(e, t) {
          return ut(this, "every", e, t, void 0, arguments);
        },
        filter(e, t) {
          return ut(this, "filter", e, t, (n) => n.map(me), arguments);
        },
        find(e, t) {
          return ut(this, "find", e, t, me, arguments);
        },
        findIndex(e, t) {
          return ut(this, "findIndex", e, t, void 0, arguments);
        },
        findLast(e, t) {
          return ut(this, "findLast", e, t, me, arguments);
        },
        findLastIndex(e, t) {
          return ut(this, "findLastIndex", e, t, void 0, arguments);
        },
        forEach(e, t) {
          return ut(this, "forEach", e, t, void 0, arguments);
        },
        includes(...e) {
          return Wo(this, "includes", e);
        },
        indexOf(...e) {
          return Wo(this, "indexOf", e);
        },
        join(e) {
          return Vt(this).join(e);
        },
        lastIndexOf(...e) {
          return Wo(this, "lastIndexOf", e);
        },
        map(e, t) {
          return ut(this, "map", e, t, void 0, arguments);
        },
        pop() {
          return an(this, "pop");
        },
        push(...e) {
          return an(this, "push", e);
        },
        reduce(e, ...t) {
          return Wi(this, "reduce", e, t);
        },
        reduceRight(e, ...t) {
          return Wi(this, "reduceRight", e, t);
        },
        shift() {
          return an(this, "shift");
        },
        some(e, t) {
          return ut(this, "some", e, t, void 0, arguments);
        },
        splice(...e) {
          return an(this, "splice", e);
        },
        toReversed() {
          return Vt(this).toReversed();
        },
        toSorted(e) {
          return Vt(this).toSorted(e);
        },
        toSpliced(...e) {
          return Vt(this).toSpliced(...e);
        },
        unshift(...e) {
          return an(this, "unshift", e);
        },
        values() {
          return Uo(this, "values", me);
        }
      };
      function Uo(e, t, n) {
        const o = To(e), i = o[t]();
        return o !== e && !ze(e) && (i._next = i.next, i.next = () => {
          const s = i._next();
          return s.value && (s.value = n(s.value)), s;
        }), i;
      }
      const Xl = Array.prototype;
      function ut(e, t, n, o, i, s) {
        const r = To(e), l = r !== e && !ze(e), a = r[t];
        if (a !== Xl[t]) {
          const d = a.apply(e, s);
          return l ? me(d) : d;
        }
        let u = n;
        r !== e && (l ? u = function(d, h) {
          return n.call(this, me(d), h, e);
        } : n.length > 2 && (u = function(d, h) {
          return n.call(this, d, h, e);
        }));
        const c = a.call(r, u, o);
        return l && i ? i(c) : c;
      }
      function Wi(e, t, n, o) {
        const i = To(e);
        let s = n;
        return i !== e && (ze(e) ? n.length > 3 && (s = function(r, l, a) {
          return n.call(this, r, l, a, e);
        }) : s = function(r, l, a) {
          return n.call(this, r, me(l), a, e);
        }), i[t](s, ...o);
      }
      function Wo(e, t, n) {
        const o = Z(e);
        ye(o, "iterate", Sn);
        const i = o[t](...n);
        return (i === -1 || i === false) && Pi(n[0]) ? (n[0] = Z(n[0]), o[t](...n)) : i;
      }
      function an(e, t, n = []) {
        mt(), bi();
        const o = Z(e)[t].apply(e, n);
        return yi(), wt(), o;
      }
      const Jl = gi("__proto__,__v_isRef,__isVue"), rr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge));
      function Ql(e) {
        Ge(e) || (e = String(e));
        const t = Z(this);
        return ye(t, "has", e), t.hasOwnProperty(e);
      }
      class lr {
        constructor(t = false, n = false) {
          this._isReadonly = t, this._isShallow = n;
        }
        get(t, n, o) {
          if (n === "__v_skip") return t.__v_skip;
          const i = this._isReadonly, s = this._isShallow;
          if (n === "__v_isReactive") return !i;
          if (n === "__v_isReadonly") return i;
          if (n === "__v_isShallow") return s;
          if (n === "__v_raw") return o === (i ? s ? aa : fr : s ? ur : cr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
          const r = B(t);
          if (!i) {
            let a;
            if (r && (a = Yl[n])) return a;
            if (n === "hasOwnProperty") return Ql;
          }
          const l = Reflect.get(t, n, ve(t) ? t : o);
          return (Ge(n) ? rr.has(n) : Jl(n)) || (i || ye(t, "get", n), s) ? l : ve(l) ? r && vi(n) ? l : l.value : ae(l) ? i ? dr(l) : Ti(l) : l;
        }
      }
      class ar extends lr {
        constructor(t = false) {
          super(false, t);
        }
        set(t, n, o, i) {
          let s = t[n];
          if (!this._isShallow) {
            const a = Rt(s);
            if (!ze(o) && !Rt(o) && (s = Z(s), o = Z(o)), !B(t) && ve(s) && !ve(o)) return a ? false : (s.value = o, true);
          }
          const r = B(t) && vi(n) ? Number(n) < t.length : ee(t, n), l = Reflect.set(t, n, o, ve(t) ? t : i);
          return t === Z(i) && (r ? Ct(o, s) && dt(t, "set", n, o) : dt(t, "add", n, o)), l;
        }
        deleteProperty(t, n) {
          const o = ee(t, n);
          t[n];
          const i = Reflect.deleteProperty(t, n);
          return i && o && dt(t, "delete", n, void 0), i;
        }
        has(t, n) {
          const o = Reflect.has(t, n);
          return (!Ge(n) || !rr.has(n)) && ye(t, "has", n), o;
        }
        ownKeys(t) {
          return ye(t, "iterate", B(t) ? "length" : Bt), Reflect.ownKeys(t);
        }
      }
      class Zl extends lr {
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
      const ea = new ar(), ta = new Zl(), na = new ar(true);
      const oi = (e) => e, qn = (e) => Reflect.getPrototypeOf(e);
      function oa(e, t, n) {
        return function(...o) {
          const i = this.__v_raw, s = Z(i), r = Gt(s), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = i[e](...o), c = n ? oi : t ? so : me;
          return !t && ye(s, "iterate", a ? ni : Bt), {
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
      function Vn(e) {
        return function(...t) {
          return e === "delete" ? false : e === "clear" ? void 0 : this;
        };
      }
      function ia(e, t) {
        const n = {
          get(i) {
            const s = this.__v_raw, r = Z(s), l = Z(i);
            e || (Ct(i, l) && ye(r, "get", i), ye(r, "get", l));
            const { has: a } = qn(r), u = t ? oi : e ? so : me;
            if (a.call(r, i)) return u(s.get(i));
            if (a.call(r, l)) return u(s.get(l));
            s !== r && s.get(i);
          },
          get size() {
            const i = this.__v_raw;
            return !e && ye(Z(i), "iterate", Bt), Reflect.get(i, "size", i);
          },
          has(i) {
            const s = this.__v_raw, r = Z(s), l = Z(i);
            return e || (Ct(i, l) && ye(r, "has", i), ye(r, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
          },
          forEach(i, s) {
            const r = this, l = r.__v_raw, a = Z(l), u = t ? oi : e ? so : me;
            return !e && ye(a, "iterate", Bt), l.forEach((c, d) => i.call(s, u(c), u(d), r));
          }
        };
        return Se(n, e ? {
          add: Vn("add"),
          set: Vn("set"),
          delete: Vn("delete"),
          clear: Vn("clear")
        } : {
          add(i) {
            !t && !ze(i) && !Rt(i) && (i = Z(i));
            const s = Z(this);
            return qn(s).has.call(s, i) || (s.add(i), dt(s, "add", i, i)), this;
          },
          set(i, s) {
            !t && !ze(s) && !Rt(s) && (s = Z(s));
            const r = Z(this), { has: l, get: a } = qn(r);
            let u = l.call(r, i);
            u || (i = Z(i), u = l.call(r, i));
            const c = a.call(r, i);
            return r.set(i, s), u ? Ct(s, c) && dt(r, "set", i, s) : dt(r, "add", i, s), this;
          },
          delete(i) {
            const s = Z(this), { has: r, get: l } = qn(s);
            let a = r.call(s, i);
            a || (i = Z(i), a = r.call(s, i)), l && l.call(s, i);
            const u = s.delete(i);
            return a && dt(s, "delete", i, void 0), u;
          },
          clear() {
            const i = Z(this), s = i.size !== 0, r = i.clear();
            return s && dt(i, "clear", void 0, void 0), r;
          }
        }), [
          "keys",
          "values",
          "entries",
          Symbol.iterator
        ].forEach((i) => {
          n[i] = oa(i, e, t);
        }), n;
      }
      function $i(e, t) {
        const n = ia(e, t);
        return (o, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(ee(n, i) && i in o ? n : o, i, s);
      }
      const sa = {
        get: $i(false, false)
      }, ra = {
        get: $i(false, true)
      }, la = {
        get: $i(true, false)
      };
      const cr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap();
      function ca(e) {
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
      function ua(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : ca(Ml(e));
      }
      function Ti(e) {
        return Rt(e) ? e : Ci(e, false, ea, sa, cr);
      }
      function fa(e) {
        return Ci(e, false, na, ra, ur);
      }
      function dr(e) {
        return Ci(e, true, ta, la, fr);
      }
      function Ci(e, t, n, o, i) {
        if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const s = ua(e);
        if (s === 0) return e;
        const r = i.get(e);
        if (r) return r;
        const l = new Proxy(e, s === 2 ? o : n);
        return i.set(e, l), l;
      }
      function Yt(e) {
        return Rt(e) ? Yt(e.__v_raw) : !!(e && e.__v_isReactive);
      }
      function Rt(e) {
        return !!(e && e.__v_isReadonly);
      }
      function ze(e) {
        return !!(e && e.__v_isShallow);
      }
      function Pi(e) {
        return e ? !!e.__v_raw : false;
      }
      function Z(e) {
        const t = e && e.__v_raw;
        return t ? Z(t) : e;
      }
      function da(e) {
        return !ee(e, "__v_skip") && Object.isExtensible(e) && Gs(e, "__v_skip", true), e;
      }
      const me = (e) => ae(e) ? Ti(e) : e, so = (e) => ae(e) ? dr(e) : e;
      function ve(e) {
        return e ? e.__v_isRef === true : false;
      }
      function ue(e) {
        return pr(e, false);
      }
      function pa(e) {
        return pr(e, true);
      }
      function pr(e, t) {
        return ve(e) ? e : new ha(e, t);
      }
      class ha {
        constructor(t, n) {
          this.dep = new Si(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Z(t), this._value = n ? t : me(t), this.__v_isShallow = n;
        }
        get value() {
          return this.dep.track(), this._value;
        }
        set value(t) {
          const n = this._rawValue, o = this.__v_isShallow || ze(t) || Rt(t);
          t = o ? t : Z(t), Ct(t, n) && (this._rawValue = t, this._value = o ? t : me(t), this.dep.trigger());
        }
      }
      function _a(e) {
        e.dep && e.dep.trigger();
      }
      function Ce(e) {
        return ve(e) ? e.value : e;
      }
      const ga = {
        get: (e, t, n) => t === "__v_raw" ? e : Ce(Reflect.get(e, t, n)),
        set: (e, t, n, o) => {
          const i = e[t];
          return ve(i) && !ve(n) ? (i.value = n, true) : Reflect.set(e, t, n, o);
        }
      };
      function hr(e) {
        return Yt(e) ? e : new Proxy(e, ga);
      }
      function _r(e) {
        const t = B(e) ? new Array(e.length) : {};
        for (const n in e) t[n] = wa(e, n);
        return t;
      }
      class ma {
        constructor(t, n, o) {
          this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = true, this._value = void 0;
        }
        get value() {
          const t = this._object[this._key];
          return this._value = t === void 0 ? this._defaultValue : t;
        }
        set value(t) {
          this._object[this._key] = t;
        }
        get dep() {
          return Gl(Z(this._object), this._key);
        }
      }
      function wa(e, t, n) {
        const o = e[t];
        return ve(o) ? o : new ma(e, t, n);
      }
      class va {
        constructor(t, n, o) {
          this.fn = t, this.setter = n, this._value = void 0, this.dep = new Si(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
        }
        notify() {
          if (this.flags |= 16, !(this.flags & 8) && le !== this) return er(this, true), true;
        }
        get value() {
          const t = this.dep.track();
          return or(this), t && (t.version = this.dep.version), this._value;
        }
        set value(t) {
          this.setter && this.setter(t);
        }
      }
      function ba(e, t, n = false) {
        let o, i;
        return W(e) ? o = e : (o = e.get, i = e.set), new va(o, i, n);
      }
      const Un = {}, ro = /* @__PURE__ */ new WeakMap();
      let Ft;
      function ya(e, t = false, n = Ft) {
        if (n) {
          let o = ro.get(n);
          o || ro.set(n, o = []), o.push(e);
        }
      }
      function xa(e, t, n = oe) {
        const { immediate: o, deep: i, once: s, scheduler: r, augmentJob: l, call: a } = n, u = (y) => i ? y : ze(y) || i === false || i === 0 ? pt(y, 1) : pt(y);
        let c, d, h, _, w = false, v = false;
        if (ve(e) ? (d = () => e.value, w = ze(e)) : Yt(e) ? (d = () => u(e), w = true) : B(e) ? (v = true, w = e.some((y) => Yt(y) || ze(y)), d = () => e.map((y) => {
          if (ve(y)) return y.value;
          if (Yt(y)) return u(y);
          if (W(y)) return a ? a(y, 2) : y();
        })) : W(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
          if (h) {
            mt();
            try {
              h();
            } finally {
              wt();
            }
          }
          const y = Ft;
          Ft = c;
          try {
            return a ? a(e, 3, [
              _
            ]) : e(_);
          } finally {
            Ft = y;
          }
        } : d = it, t && i) {
          const y = d, R = i === true ? 1 / 0 : i;
          d = () => pt(y(), R);
        }
        const m = Ul(), A = () => {
          c.stop(), m && m.active && wi(m.effects, c);
        };
        if (s && t) {
          const y = t;
          t = (...R) => {
            y(...R), A();
          };
        }
        let C = v ? new Array(e.length).fill(Un) : Un;
        const D = (y) => {
          if (!(!(c.flags & 1) || !c.dirty && !y)) if (t) {
            const R = c.run();
            if (i || w || (v ? R.some((J, z) => Ct(J, C[z])) : Ct(R, C))) {
              h && h();
              const J = Ft;
              Ft = c;
              try {
                const z = [
                  R,
                  C === Un ? void 0 : v && C[0] === Un ? [] : C,
                  _
                ];
                C = R, a ? a(t, 3, z) : t(...z);
              } finally {
                Ft = J;
              }
            }
          } else c.run();
        };
        return l && l(D), c = new Qs(d), c.scheduler = r ? () => r(D, false) : D, _ = (y) => ya(y, false, c), h = c.onStop = () => {
          const y = ro.get(c);
          if (y) {
            if (a) a(y, 4);
            else for (const R of y) R();
            ro.delete(c);
          }
        }, t ? o ? D(true) : C = c.run() : r ? r(D.bind(null, true), true) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
      }
      function pt(e, t = 1 / 0, n) {
        if (t <= 0 || !ae(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
        if (n.add(e), t--, ve(e)) pt(e.value, t, n);
        else if (B(e)) for (let o = 0; o < e.length; o++) pt(e[o], t, n);
        else if (yo(e) || Gt(e)) e.forEach((o) => {
          pt(o, t, n);
        });
        else if (Ks(e)) {
          for (const o in e) pt(e[o], t, n);
          for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && pt(e[o], t, n);
        }
        return e;
      }
      function kn(e, t, n, o) {
        try {
          return o ? e(...o) : e();
        } catch (i) {
          Co(i, t, n);
        }
      }
      function lt(e, t, n, o) {
        if (W(e)) {
          const i = kn(e, t, n, o);
          return i && Us(i) && i.catch((s) => {
            Co(s, t, n);
          }), i;
        }
        if (B(e)) {
          const i = [];
          for (let s = 0; s < e.length; s++) i.push(lt(e[s], t, n, o));
          return i;
        }
      }
      function Co(e, t, n, o = true) {
        const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || oe;
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
            mt(), kn(s, null, 10, [
              e,
              a,
              u
            ]), wt();
            return;
          }
        }
        Sa(e, n, i, o, r);
      }
      function Sa(e, t, n, o = true, i = false) {
        if (i) throw e;
        console.error(e);
      }
      const Ae = [];
      let tt = -1;
      const Xt = [];
      let St = null, Wt = 0;
      const gr = Promise.resolve();
      let lo = null;
      function Ai(e) {
        const t = lo || gr;
        return e ? t.then(this ? e.bind(this) : e) : t;
      }
      function $a(e) {
        let t = tt + 1, n = Ae.length;
        for (; t < n; ) {
          const o = t + n >>> 1, i = Ae[o], s = $n(i);
          s < e || s === e && i.flags & 2 ? t = o + 1 : n = o;
        }
        return t;
      }
      function Ei(e) {
        if (!(e.flags & 1)) {
          const t = $n(e), n = Ae[Ae.length - 1];
          !n || !(e.flags & 2) && t >= $n(n) ? Ae.push(e) : Ae.splice($a(t), 0, e), e.flags |= 1, mr();
        }
      }
      function mr() {
        lo || (lo = gr.then(vr));
      }
      function Ta(e) {
        B(e) ? Xt.push(...e) : St && e.id === -1 ? St.splice(Wt + 1, 0, e) : e.flags & 1 || (Xt.push(e), e.flags |= 1), mr();
      }
      function Ki(e, t, n = tt + 1) {
        for (; n < Ae.length; n++) {
          const o = Ae[n];
          if (o && o.flags & 2) {
            if (e && o.id !== e.uid) continue;
            Ae.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
          }
        }
      }
      function wr(e) {
        if (Xt.length) {
          const t = [
            ...new Set(Xt)
          ].sort((n, o) => $n(n) - $n(o));
          if (Xt.length = 0, St) {
            St.push(...t);
            return;
          }
          for (St = t, Wt = 0; Wt < St.length; Wt++) {
            const n = St[Wt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
          }
          St = null, Wt = 0;
        }
      }
      const $n = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
      function vr(e) {
        try {
          for (tt = 0; tt < Ae.length; tt++) {
            const t = Ae[tt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
          }
        } finally {
          for (; tt < Ae.length; tt++) {
            const t = Ae[tt];
            t && (t.flags &= -2);
          }
          tt = -1, Ae.length = 0, wr(), lo = null, (Ae.length || Xt.length) && vr();
        }
      }
      let we = null, Po = null;
      function ao(e) {
        const t = we;
        return we = e, Po = e && e.type.__scopeId || null, t;
      }
      function Ca(e) {
        Po = e;
      }
      function Pa() {
        Po = null;
      }
      const Aa = (e) => at;
      function at(e, t = we, n) {
        if (!t || e._n) return e;
        const o = (...i) => {
          o._d && os(-1);
          const s = ao(t);
          let r;
          try {
            r = e(...i);
          } finally {
            ao(s), o._d && os(1);
          }
          return r;
        };
        return o._n = true, o._c = true, o._d = true, o;
      }
      function Q(e, t) {
        if (we === null) return e;
        const n = Mo(we), o = e.dirs || (e.dirs = []);
        for (let i = 0; i < t.length; i++) {
          let [s, r, l, a = oe] = t[i];
          s && (W(s) && (s = {
            mounted: s,
            updated: s
          }), s.deep && pt(r), o.push({
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
      function Lt(e, t, n, o) {
        const i = e.dirs, s = t && t.dirs;
        for (let r = 0; r < i.length; r++) {
          const l = i[r];
          s && (l.oldValue = s[r].value);
          let a = l.dir[o];
          a && (mt(), lt(a, n, 8, [
            e.el,
            l,
            e,
            t
          ]), wt());
        }
      }
      const Ea = Symbol("_vte"), Oa = (e) => e.__isTeleport;
      function Oi(e, t) {
        e.shapeFlag & 6 && e.component ? (e.transition = t, Oi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
      }
      function Hn(e, t) {
        return W(e) ? Se({
          name: e.name
        }, t, {
          setup: e
        }) : e;
      }
      function br(e) {
        e.ids = [
          e.ids[0] + e.ids[2]++ + "-",
          0,
          0
        ];
      }
      function co(e, t, n, o, i = false) {
        if (B(e)) {
          e.forEach((w, v) => co(w, t && (B(t) ? t[v] : t), n, o, i));
          return;
        }
        if (Jt(o) && !i) {
          o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && co(e, t, n, o.component.subTree);
          return;
        }
        const s = o.shapeFlag & 4 ? Mo(o.component) : o.el, r = i ? null : s, { i: l, r: a } = e, u = t && t.r, c = l.refs === oe ? l.refs = {} : l.refs, d = l.setupState, h = Z(d), _ = d === oe ? () => false : (w) => ee(h, w);
        if (u != null && u !== a && (de(u) ? (c[u] = null, _(u) && (d[u] = null)) : ve(u) && (u.value = null)), W(a)) kn(a, l, 12, [
          r,
          c
        ]);
        else {
          const w = de(a), v = ve(a);
          if (w || v) {
            const m = () => {
              if (e.f) {
                const A = w ? _(a) ? d[a] : c[a] : a.value;
                i ? B(A) && wi(A, s) : B(A) ? A.includes(s) || A.push(s) : w ? (c[a] = [
                  s
                ], _(a) && (d[a] = c[a])) : (a.value = [
                  s
                ], e.k && (c[e.k] = a.value));
              } else w ? (c[a] = r, _(a) && (d[a] = r)) : v && (a.value = r, e.k && (c[e.k] = r));
            };
            r ? (m.id = -1, De(m, n)) : m();
          }
        }
      }
      $o().requestIdleCallback;
      $o().cancelIdleCallback;
      const Jt = (e) => !!e.type.__asyncLoader, yr = (e) => e.type.__isKeepAlive;
      function Ra(e, t) {
        xr(e, "a", t);
      }
      function Ma(e, t) {
        xr(e, "da", t);
      }
      function xr(e, t, n = xe) {
        const o = e.__wdc || (e.__wdc = () => {
          let i = n;
          for (; i; ) {
            if (i.isDeactivated) return;
            i = i.parent;
          }
          return e();
        });
        if (Ao(t, o, n), n) {
          let i = n.parent;
          for (; i && i.parent; ) yr(i.parent.vnode) && Ia(o, t, n, i), i = i.parent;
        }
      }
      function Ia(e, t, n, o) {
        const i = Ao(t, e, o, true);
        Sr(() => {
          wi(o[t], i);
        }, n);
      }
      function Ao(e, t, n = xe, o = false) {
        if (n) {
          const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
            mt();
            const l = Fn(n), a = lt(t, n, e, r);
            return l(), wt(), a;
          });
          return o ? i.unshift(s) : i.push(s), s;
        }
      }
      const bt = (e) => (t, n = xe) => {
        (!An || e === "sp") && Ao(e, (...o) => t(...o), n);
      }, Na = bt("bm"), Da = bt("m"), La = bt("bu"), ka = bt("u"), Ha = bt("bum"), Sr = bt("um"), Fa = bt("sp"), za = bt("rtg"), Ba = bt("rtc");
      function ja(e, t = xe) {
        Ao("ec", e, t);
      }
      const $r = "components", qa = "directives";
      function Tn(e, t) {
        return Tr($r, e, true, t) || e;
      }
      const Va = Symbol.for("v-ndc");
      function Eo(e) {
        return Tr(qa, e);
      }
      function Tr(e, t, n = true, o = false) {
        const i = we || xe;
        if (i) {
          const s = i.type;
          if (e === $r) {
            const l = Oc(s, false);
            if (l && (l === t || l === je(t) || l === So(je(t)))) return s;
          }
          const r = Gi(i[e] || s[e], t) || Gi(i.appContext[e], t);
          return !r && o ? s : r;
        }
      }
      function Gi(e, t) {
        return e && (e[t] || e[je(t)] || e[So(je(t))]);
      }
      function At(e, t, n, o) {
        let i;
        const s = n, r = B(e);
        if (r || de(e)) {
          const l = r && Yt(e);
          let a = false, u = false;
          l && (a = !ze(e), u = Rt(e), e = To(e)), i = new Array(e.length);
          for (let c = 0, d = e.length; c < d; c++) i[c] = t(a ? u ? so(me(e[c])) : me(e[c]) : e[c], c, void 0, s);
        } else if (typeof e == "number") {
          i = new Array(e);
          for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, s);
        } else if (ae(e)) if (e[Symbol.iterator]) i = Array.from(e, (l, a) => t(l, a, void 0, s));
        else {
          const l = Object.keys(e);
          i = new Array(l.length);
          for (let a = 0, u = l.length; a < u; a++) {
            const c = l[a];
            i[a] = t(e[c], c, a, s);
          }
        }
        else i = [];
        return i;
      }
      function ht(e, t, n = {}, o, i) {
        if (we.ce || we.parent && Jt(we.parent) && we.parent.ce) return t !== "default" && (n.name = t), N(), Be(ie, null, [
          pe("slot", n, o)
        ], 64);
        let s = e[t];
        s && s._c && (s._d = false), N();
        const r = s && Cr(s(n)), l = n.key || r && r.key, a = Be(ie, {
          key: (l && !Ge(l) ? l : `_${t}`) + ""
        }, r || [], r && e._ === 1 ? 64 : -2);
        return !i && a.scopeId && (a.slotScopeIds = [
          a.scopeId + "-s"
        ]), s && s._c && (s._d = true), a;
      }
      function Cr(e) {
        return e.some((t) => Pn(t) ? !(t.type === vt || t.type === ie && !Cr(t.children)) : true) ? e : null;
      }
      const ii = (e) => e ? Kr(e) ? Mo(e) : ii(e.parent) : null, gn = Se(/* @__PURE__ */ Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => ii(e.parent),
        $root: (e) => ii(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => Ar(e),
        $forceUpdate: (e) => e.f || (e.f = () => {
          Ei(e.update);
        }),
        $nextTick: (e) => e.n || (e.n = Ai.bind(e.proxy)),
        $watch: (e) => dc.bind(e)
      }), Ko = (e, t) => e !== oe && !e.__isScriptSetup && ee(e, t), Ua = {
        get({ _: e }, t) {
          if (t === "__v_skip") return true;
          const { ctx: n, setupState: o, data: i, props: s, accessCache: r, type: l, appContext: a } = e;
          let u;
          if (t[0] !== "$") {
            const _ = r[t];
            if (_ !== void 0) switch (_) {
              case 1:
                return o[t];
              case 2:
                return i[t];
              case 4:
                return n[t];
              case 3:
                return s[t];
            }
            else {
              if (Ko(o, t)) return r[t] = 1, o[t];
              if (i !== oe && ee(i, t)) return r[t] = 2, i[t];
              if ((u = e.propsOptions[0]) && ee(u, t)) return r[t] = 3, s[t];
              if (n !== oe && ee(n, t)) return r[t] = 4, n[t];
              si && (r[t] = 0);
            }
          }
          const c = gn[t];
          let d, h;
          if (c) return t === "$attrs" && ye(e.attrs, "get", ""), c(e);
          if ((d = l.__cssModules) && (d = d[t])) return d;
          if (n !== oe && ee(n, t)) return r[t] = 4, n[t];
          if (h = a.config.globalProperties, ee(h, t)) return h[t];
        },
        set({ _: e }, t, n) {
          const { data: o, setupState: i, ctx: s } = e;
          return Ko(i, t) ? (i[t] = n, true) : o !== oe && ee(o, t) ? (o[t] = n, true) : ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
        },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: s } }, r) {
          let l;
          return !!n[r] || e !== oe && ee(e, r) || Ko(t, r) || (l = s[0]) && ee(l, r) || ee(o, r) || ee(gn, r) || ee(i.config.globalProperties, r);
        },
        defineProperty(e, t, n) {
          return n.get != null ? e._.accessCache[t] = 0 : ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
        }
      };
      function Yi(e) {
        return B(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
      }
      let si = true;
      function Wa(e) {
        const t = Ar(e), n = e.proxy, o = e.ctx;
        si = false, t.beforeCreate && Xi(t.beforeCreate, e, "bc");
        const { data: i, computed: s, methods: r, watch: l, provide: a, inject: u, created: c, beforeMount: d, mounted: h, beforeUpdate: _, updated: w, activated: v, deactivated: m, beforeDestroy: A, beforeUnmount: C, destroyed: D, unmounted: y, render: R, renderTracked: J, renderTriggered: z, errorCaptured: q, serverPrefetch: ne, expose: U, inheritAttrs: se, components: ge, directives: $e, filters: he } = t;
        if (u && Ka(u, o, null), r) for (const G in r) {
          const K = r[G];
          W(K) && (o[G] = K.bind(n));
        }
        if (i) {
          const G = i.call(n, n);
          ae(G) && (e.data = Ti(G));
        }
        if (si = true, s) for (const G in s) {
          const K = s[G], be = W(K) ? K.bind(n, n) : W(K.get) ? K.get.bind(n, n) : it, qt = !W(K) && W(K.set) ? K.set.bind(n) : it, Dt = ke({
            get: be,
            set: qt
          });
          Object.defineProperty(o, G, {
            enumerable: true,
            configurable: true,
            get: () => Dt.value,
            set: (Xe) => Dt.value = Xe
          });
        }
        if (l) for (const G in l) Pr(l[G], o, n, G);
        if (a) {
          const G = W(a) ? a.call(n) : a;
          Reflect.ownKeys(G).forEach((K) => {
            Za(K, G[K]);
          });
        }
        c && Xi(c, e, "c");
        function ce(G, K) {
          B(K) ? K.forEach((be) => G(be.bind(n))) : K && G(K.bind(n));
        }
        if (ce(Na, d), ce(Da, h), ce(La, _), ce(ka, w), ce(Ra, v), ce(Ma, m), ce(ja, q), ce(Ba, J), ce(za, z), ce(Ha, C), ce(Sr, y), ce(Fa, ne), B(U)) if (U.length) {
          const G = e.exposed || (e.exposed = {});
          U.forEach((K) => {
            Object.defineProperty(G, K, {
              get: () => n[K],
              set: (be) => n[K] = be
            });
          });
        } else e.exposed || (e.exposed = {});
        R && e.render === it && (e.render = R), se != null && (e.inheritAttrs = se), ge && (e.components = ge), $e && (e.directives = $e), ne && br(e);
      }
      function Ka(e, t, n = it) {
        B(e) && (e = ri(e));
        for (const o in e) {
          const i = e[o];
          let s;
          ae(i) ? "default" in i ? s = Xn(i.from || o, i.default, true) : s = Xn(i.from || o) : s = Xn(i), ve(s) ? Object.defineProperty(t, o, {
            enumerable: true,
            configurable: true,
            get: () => s.value,
            set: (r) => s.value = r
          }) : t[o] = s;
        }
      }
      function Xi(e, t, n) {
        lt(B(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
      }
      function Pr(e, t, n, o) {
        let i = o.includes(".") ? Br(n, o) : () => n[o];
        if (de(e)) {
          const s = t[e];
          W(s) && He(i, s);
        } else if (W(e)) He(i, e.bind(n));
        else if (ae(e)) if (B(e)) e.forEach((s) => Pr(s, t, n, o));
        else {
          const s = W(e.handler) ? e.handler.bind(n) : t[e.handler];
          W(s) && He(i, s, e);
        }
      }
      function Ar(e) {
        const t = e.type, { mixins: n, extends: o } = t, { mixins: i, optionsCache: s, config: { optionMergeStrategies: r } } = e.appContext, l = s.get(t);
        let a;
        return l ? a = l : !i.length && !n && !o ? a = t : (a = {}, i.length && i.forEach((u) => uo(a, u, r, true)), uo(a, t, r)), ae(t) && s.set(t, a), a;
      }
      function uo(e, t, n, o = false) {
        const { mixins: i, extends: s } = t;
        s && uo(e, s, n, true), i && i.forEach((r) => uo(e, r, n, true));
        for (const r in t) if (!(o && r === "expose")) {
          const l = Ga[r] || n && n[r];
          e[r] = l ? l(e[r], t[r]) : t[r];
        }
        return e;
      }
      const Ga = {
        data: Ji,
        props: Qi,
        emits: Qi,
        methods: dn,
        computed: dn,
        beforeCreate: Te,
        created: Te,
        beforeMount: Te,
        mounted: Te,
        beforeUpdate: Te,
        updated: Te,
        beforeDestroy: Te,
        beforeUnmount: Te,
        destroyed: Te,
        unmounted: Te,
        activated: Te,
        deactivated: Te,
        errorCaptured: Te,
        serverPrefetch: Te,
        components: dn,
        directives: dn,
        watch: Xa,
        provide: Ji,
        inject: Ya
      };
      function Ji(e, t) {
        return t ? e ? function() {
          return Se(W(e) ? e.call(this, this) : e, W(t) ? t.call(this, this) : t);
        } : t : e;
      }
      function Ya(e, t) {
        return dn(ri(e), ri(t));
      }
      function ri(e) {
        if (B(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
          return t;
        }
        return e;
      }
      function Te(e, t) {
        return e ? [
          ...new Set([].concat(e, t))
        ] : t;
      }
      function dn(e, t) {
        return e ? Se(/* @__PURE__ */ Object.create(null), e, t) : t;
      }
      function Qi(e, t) {
        return e ? B(e) && B(t) ? [
          .../* @__PURE__ */ new Set([
            ...e,
            ...t
          ])
        ] : Se(/* @__PURE__ */ Object.create(null), Yi(e), Yi(t ?? {})) : t;
      }
      function Xa(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = Se(/* @__PURE__ */ Object.create(null), e);
        for (const o in t) n[o] = Te(e[o], t[o]);
        return n;
      }
      function Er() {
        return {
          app: null,
          config: {
            isNativeTag: Ol,
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
      let Ja = 0;
      function Qa(e, t) {
        return function(o, i = null) {
          W(o) || (o = Se({}, o)), i != null && !ae(i) && (i = null);
          const s = Er(), r = /* @__PURE__ */ new WeakSet(), l = [];
          let a = false;
          const u = s.app = {
            _uid: Ja++,
            _component: o,
            _props: i,
            _container: null,
            _context: s,
            _instance: null,
            version: Ic,
            get config() {
              return s.config;
            },
            set config(c) {
            },
            use(c, ...d) {
              return r.has(c) || (c && W(c.install) ? (r.add(c), c.install(u, ...d)) : W(c) && (r.add(c), c(u, ...d))), u;
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
                const _ = u._ceVNode || pe(o, i);
                return _.appContext = s, h === true ? h = "svg" : h === false && (h = void 0), e(_, c, h), a = true, u._container = c, c.__vue_app__ = u, Mo(_.component);
              }
            },
            onUnmount(c) {
              l.push(c);
            },
            unmount() {
              a && (lt(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
            },
            provide(c, d) {
              return s.provides[c] = d, u;
            },
            runWithContext(c) {
              const d = Qt;
              Qt = u;
              try {
                return c();
              } finally {
                Qt = d;
              }
            }
          };
          return u;
        };
      }
      let Qt = null;
      function Za(e, t) {
        if (xe) {
          let n = xe.provides;
          const o = xe.parent && xe.parent.provides;
          o === n && (n = xe.provides = Object.create(o)), n[e] = t;
        }
      }
      function Xn(e, t, n = false) {
        const o = xe || we;
        if (o || Qt) {
          let i = Qt ? Qt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
          if (i && e in i) return i[e];
          if (arguments.length > 1) return n && W(t) ? t.call(o && o.proxy) : t;
        }
      }
      const Or = {}, Rr = () => Object.create(Or), Mr = (e) => Object.getPrototypeOf(e) === Or;
      function ec(e, t, n, o = false) {
        const i = {}, s = Rr();
        e.propsDefaults = /* @__PURE__ */ Object.create(null), Ir(e, t, i, s);
        for (const r in e.propsOptions[0]) r in i || (i[r] = void 0);
        n ? e.props = o ? i : fa(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
      }
      function tc(e, t, n, o) {
        const { props: i, attrs: s, vnode: { patchFlag: r } } = e, l = Z(i), [a] = e.propsOptions;
        let u = false;
        if ((o || r > 0) && !(r & 16)) {
          if (r & 8) {
            const c = e.vnode.dynamicProps;
            for (let d = 0; d < c.length; d++) {
              let h = c[d];
              if (Oo(e.emitsOptions, h)) continue;
              const _ = t[h];
              if (a) if (ee(s, h)) _ !== s[h] && (s[h] = _, u = true);
              else {
                const w = je(h);
                i[w] = li(a, l, w, _, e, false);
              }
              else _ !== s[h] && (s[h] = _, u = true);
            }
          }
        } else {
          Ir(e, t, i, s) && (u = true);
          let c;
          for (const d in l) (!t || !ee(t, d) && ((c = Nt(d)) === d || !ee(t, c))) && (a ? n && (n[d] !== void 0 || n[c] !== void 0) && (i[d] = li(a, l, d, void 0, e, true)) : delete i[d]);
          if (s !== l) for (const d in s) (!t || !ee(t, d)) && (delete s[d], u = true);
        }
        u && dt(e.attrs, "set", "");
      }
      function Ir(e, t, n, o) {
        const [i, s] = e.propsOptions;
        let r = false, l;
        if (t) for (let a in t) {
          if (pn(a)) continue;
          const u = t[a];
          let c;
          i && ee(i, c = je(a)) ? !s || !s.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Oo(e.emitsOptions, a) || (!(a in o) || u !== o[a]) && (o[a] = u, r = true);
        }
        if (s) {
          const a = Z(n), u = l || oe;
          for (let c = 0; c < s.length; c++) {
            const d = s[c];
            n[d] = li(i, a, d, u[d], e, !ee(u, d));
          }
        }
        return r;
      }
      function li(e, t, n, o, i, s) {
        const r = e[n];
        if (r != null) {
          const l = ee(r, "default");
          if (l && o === void 0) {
            const a = r.default;
            if (r.type !== Function && !r.skipFactory && W(a)) {
              const { propsDefaults: u } = i;
              if (n in u) o = u[n];
              else {
                const c = Fn(i);
                o = u[n] = a.call(null, t), c();
              }
            } else o = a;
            i.ce && i.ce._setProp(n, o);
          }
          r[0] && (s && !l ? o = false : r[1] && (o === "" || o === Nt(n)) && (o = true));
        }
        return o;
      }
      const nc = /* @__PURE__ */ new WeakMap();
      function Nr(e, t, n = false) {
        const o = n ? nc : t.propsCache, i = o.get(e);
        if (i) return i;
        const s = e.props, r = {}, l = [];
        let a = false;
        if (!W(e)) {
          const c = (d) => {
            a = true;
            const [h, _] = Nr(d, t, true);
            Se(r, h), _ && l.push(..._);
          };
          !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
        }
        if (!s && !a) return ae(e) && o.set(e, Kt), Kt;
        if (B(s)) for (let c = 0; c < s.length; c++) {
          const d = je(s[c]);
          Zi(d) && (r[d] = oe);
        }
        else if (s) for (const c in s) {
          const d = je(c);
          if (Zi(d)) {
            const h = s[c], _ = r[d] = B(h) || W(h) ? {
              type: h
            } : Se({}, h), w = _.type;
            let v = false, m = true;
            if (B(w)) for (let A = 0; A < w.length; ++A) {
              const C = w[A], D = W(C) && C.name;
              if (D === "Boolean") {
                v = true;
                break;
              } else D === "String" && (m = false);
            }
            else v = W(w) && w.name === "Boolean";
            _[0] = v, _[1] = m, (v || ee(_, "default")) && l.push(d);
          }
        }
        const u = [
          r,
          l
        ];
        return ae(e) && o.set(e, u), u;
      }
      function Zi(e) {
        return e[0] !== "$" && !pn(e);
      }
      const Ri = (e) => e[0] === "_" || e === "$stable", Mi = (e) => B(e) ? e.map(nt) : [
        nt(e)
      ], oc = (e, t, n) => {
        if (t._n) return t;
        const o = at((...i) => Mi(t(...i)), n);
        return o._c = false, o;
      }, Dr = (e, t, n) => {
        const o = e._ctx;
        for (const i in e) {
          if (Ri(i)) continue;
          const s = e[i];
          if (W(s)) t[i] = oc(i, s, o);
          else if (s != null) {
            const r = Mi(s);
            t[i] = () => r;
          }
        }
      }, Lr = (e, t) => {
        const n = Mi(t);
        e.slots.default = () => n;
      }, kr = (e, t, n) => {
        for (const o in t) (n || !Ri(o)) && (e[o] = t[o]);
      }, ic = (e, t, n) => {
        const o = e.slots = Rr();
        if (e.vnode.shapeFlag & 32) {
          const i = t._;
          i ? (kr(o, t, n), n && Gs(o, "_", i, true)) : Dr(t, o);
        } else t && Lr(e, t);
      }, sc = (e, t, n) => {
        const { vnode: o, slots: i } = e;
        let s = true, r = oe;
        if (o.shapeFlag & 32) {
          const l = t._;
          l ? n && l === 1 ? s = false : kr(i, t, n) : (s = !t.$stable, Dr(t, i)), r = t;
        } else t && (Lr(e, t), r = {
          default: 1
        });
        if (s) for (const l in i) !Ri(l) && r[l] == null && delete i[l];
      }, De = vc;
      function rc(e) {
        return lc(e);
      }
      function lc(e, t) {
        const n = $o();
        n.__VUE__ = true;
        const { insert: o, remove: i, patchProp: s, createElement: r, createText: l, createComment: a, setText: u, setElementText: c, parentNode: d, nextSibling: h, setScopeId: _ = it, insertStaticContent: w } = e, v = (f, p, g, $ = null, b = null, S = null, M = void 0, O = null, E = !!p.dynamicChildren) => {
          if (f === p) return;
          f && !cn(f, p) && ($ = jn(f), Xe(f, b, S, true), f = null), p.patchFlag === -2 && (E = false, p.dynamicChildren = null);
          const { type: T, ref: k, shapeFlag: I } = p;
          switch (T) {
            case Ro:
              m(f, p, g, $);
              break;
            case vt:
              A(f, p, g, $);
              break;
            case Jn:
              f == null && C(p, g, $, M);
              break;
            case ie:
              ge(f, p, g, $, b, S, M, O, E);
              break;
            default:
              I & 1 ? R(f, p, g, $, b, S, M, O, E) : I & 6 ? $e(f, p, g, $, b, S, M, O, E) : (I & 64 || I & 128) && T.process(f, p, g, $, b, S, M, O, E, rn);
          }
          k != null && b && co(k, f && f.ref, S, p || f, !p);
        }, m = (f, p, g, $) => {
          if (f == null) o(p.el = l(p.children), g, $);
          else {
            const b = p.el = f.el;
            p.children !== f.children && u(b, p.children);
          }
        }, A = (f, p, g, $) => {
          f == null ? o(p.el = a(p.children || ""), g, $) : p.el = f.el;
        }, C = (f, p, g, $) => {
          [f.el, f.anchor] = w(f.children, p, g, $, f.el, f.anchor);
        }, D = ({ el: f, anchor: p }, g, $) => {
          let b;
          for (; f && f !== p; ) b = h(f), o(f, g, $), f = b;
          o(p, g, $);
        }, y = ({ el: f, anchor: p }) => {
          let g;
          for (; f && f !== p; ) g = h(f), i(f), f = g;
          i(p);
        }, R = (f, p, g, $, b, S, M, O, E) => {
          p.type === "svg" ? M = "svg" : p.type === "math" && (M = "mathml"), f == null ? J(p, g, $, b, S, M, O, E) : ne(f, p, b, S, M, O, E);
        }, J = (f, p, g, $, b, S, M, O) => {
          let E, T;
          const { props: k, shapeFlag: I, transition: L, dirs: V } = f;
          if (E = f.el = r(f.type, S, k && k.is, k), I & 8 ? c(E, f.children) : I & 16 && q(f.children, E, null, $, b, Go(f, S), M, O), V && Lt(f, null, $, "created"), z(E, f, f.scopeId, M, $), k) {
            for (const re in k) re !== "value" && !pn(re) && s(E, re, null, k[re], S, $);
            "value" in k && s(E, "value", null, k.value, S), (T = k.onVnodeBeforeMount) && et(T, $, f);
          }
          V && Lt(f, null, $, "beforeMount");
          const Y = ac(b, L);
          Y && L.beforeEnter(E), o(E, p, g), ((T = k && k.onVnodeMounted) || Y || V) && De(() => {
            T && et(T, $, f), Y && L.enter(E), V && Lt(f, null, $, "mounted");
          }, b);
        }, z = (f, p, g, $, b) => {
          if (g && _(f, g), $) for (let S = 0; S < $.length; S++) _(f, $[S]);
          if (b) {
            let S = b.subTree;
            if (p === S || qr(S.type) && (S.ssContent === p || S.ssFallback === p)) {
              const M = b.vnode;
              z(f, M, M.scopeId, M.slotScopeIds, b.parent);
            }
          }
        }, q = (f, p, g, $, b, S, M, O, E = 0) => {
          for (let T = E; T < f.length; T++) {
            const k = f[T] = O ? $t(f[T]) : nt(f[T]);
            v(null, k, p, g, $, b, S, M, O);
          }
        }, ne = (f, p, g, $, b, S, M) => {
          const O = p.el = f.el;
          let { patchFlag: E, dynamicChildren: T, dirs: k } = p;
          E |= f.patchFlag & 16;
          const I = f.props || oe, L = p.props || oe;
          let V;
          if (g && kt(g, false), (V = L.onVnodeBeforeUpdate) && et(V, g, p, f), k && Lt(p, f, g, "beforeUpdate"), g && kt(g, true), (I.innerHTML && L.innerHTML == null || I.textContent && L.textContent == null) && c(O, ""), T ? U(f.dynamicChildren, T, O, g, $, Go(p, b), S) : M || K(f, p, O, null, g, $, Go(p, b), S, false), E > 0) {
            if (E & 16) se(O, I, L, g, b);
            else if (E & 2 && I.class !== L.class && s(O, "class", null, L.class, b), E & 4 && s(O, "style", I.style, L.style, b), E & 8) {
              const Y = p.dynamicProps;
              for (let re = 0; re < Y.length; re++) {
                const te = Y[re], Ie = I[te], Oe = L[te];
                (Oe !== Ie || te === "value") && s(O, te, Ie, Oe, b, g);
              }
            }
            E & 1 && f.children !== p.children && c(O, p.children);
          } else !M && T == null && se(O, I, L, g, b);
          ((V = L.onVnodeUpdated) || k) && De(() => {
            V && et(V, g, p, f), k && Lt(p, f, g, "updated");
          }, $);
        }, U = (f, p, g, $, b, S, M) => {
          for (let O = 0; O < p.length; O++) {
            const E = f[O], T = p[O], k = E.el && (E.type === ie || !cn(E, T) || E.shapeFlag & 198) ? d(E.el) : g;
            v(E, T, k, null, $, b, S, M, true);
          }
        }, se = (f, p, g, $, b) => {
          if (p !== g) {
            if (p !== oe) for (const S in p) !pn(S) && !(S in g) && s(f, S, p[S], null, b, $);
            for (const S in g) {
              if (pn(S)) continue;
              const M = g[S], O = p[S];
              M !== O && S !== "value" && s(f, S, O, M, b, $);
            }
            "value" in g && s(f, "value", p.value, g.value, b);
          }
        }, ge = (f, p, g, $, b, S, M, O, E) => {
          const T = p.el = f ? f.el : l(""), k = p.anchor = f ? f.anchor : l("");
          let { patchFlag: I, dynamicChildren: L, slotScopeIds: V } = p;
          V && (O = O ? O.concat(V) : V), f == null ? (o(T, g, $), o(k, g, $), q(p.children || [], g, k, b, S, M, O, E)) : I > 0 && I & 64 && L && f.dynamicChildren ? (U(f.dynamicChildren, L, g, b, S, M, O), (p.key != null || b && p === b.subTree) && Hr(f, p, true)) : K(f, p, g, k, b, S, M, O, E);
        }, $e = (f, p, g, $, b, S, M, O, E) => {
          p.slotScopeIds = O, f == null ? p.shapeFlag & 512 ? b.ctx.activate(p, g, $, M, E) : he(p, g, $, b, S, M, E) : Ye(f, p, E);
        }, he = (f, p, g, $, b, S, M) => {
          const O = f.component = Tc(f, $, b);
          if (yr(f) && (O.ctx.renderer = rn), Cc(O, false, M), O.asyncDep) {
            if (b && b.registerDep(O, ce, M), !f.el) {
              const E = O.subTree = pe(vt);
              A(null, E, p, g);
            }
          } else ce(O, f, p, g, b, S, M);
        }, Ye = (f, p, g) => {
          const $ = p.component = f.component;
          if (mc(f, p, g)) if ($.asyncDep && !$.asyncResolved) {
            G($, p, g);
            return;
          } else $.next = p, $.update();
          else p.el = f.el, $.vnode = p;
        }, ce = (f, p, g, $, b, S, M) => {
          const O = () => {
            if (f.isMounted) {
              let { next: I, bu: L, u: V, parent: Y, vnode: re } = f;
              {
                const Qe = Fr(f);
                if (Qe) {
                  I && (I.el = re.el, G(f, I, M)), Qe.asyncDep.then(() => {
                    f.isUnmounted || O();
                  });
                  return;
                }
              }
              let te = I, Ie;
              kt(f, false), I ? (I.el = re.el, G(f, I, M)) : I = re, L && Yn(L), (Ie = I.props && I.props.onVnodeBeforeUpdate) && et(Ie, Y, I, re), kt(f, true);
              const Oe = ts(f), Je = f.subTree;
              f.subTree = Oe, v(Je, Oe, d(Je.el), jn(Je), f, b, S), I.el = Oe.el, te === null && wc(f, Oe.el), V && De(V, b), (Ie = I.props && I.props.onVnodeUpdated) && De(() => et(Ie, Y, I, re), b);
            } else {
              let I;
              const { el: L, props: V } = p, { bm: Y, m: re, parent: te, root: Ie, type: Oe } = f, Je = Jt(p);
              kt(f, false), Y && Yn(Y), !Je && (I = V && V.onVnodeBeforeMount) && et(I, te, p), kt(f, true);
              {
                Ie.ce && Ie.ce._injectChildStyle(Oe);
                const Qe = f.subTree = ts(f);
                v(null, Qe, g, $, f, b, S), p.el = Qe.el;
              }
              if (re && De(re, b), !Je && (I = V && V.onVnodeMounted)) {
                const Qe = p;
                De(() => et(I, te, Qe), b);
              }
              (p.shapeFlag & 256 || te && Jt(te.vnode) && te.vnode.shapeFlag & 256) && f.a && De(f.a, b), f.isMounted = true, p = g = $ = null;
            }
          };
          f.scope.on();
          const E = f.effect = new Qs(O);
          f.scope.off();
          const T = f.update = E.run.bind(E), k = f.job = E.runIfDirty.bind(E);
          k.i = f, k.id = f.uid, E.scheduler = () => Ei(k), kt(f, true), T();
        }, G = (f, p, g) => {
          p.component = f;
          const $ = f.vnode.props;
          f.vnode = p, f.next = null, tc(f, p.props, $, g), sc(f, p.children, g), mt(), Ki(f), wt();
        }, K = (f, p, g, $, b, S, M, O, E = false) => {
          const T = f && f.children, k = f ? f.shapeFlag : 0, I = p.children, { patchFlag: L, shapeFlag: V } = p;
          if (L > 0) {
            if (L & 128) {
              qt(T, I, g, $, b, S, M, O, E);
              return;
            } else if (L & 256) {
              be(T, I, g, $, b, S, M, O, E);
              return;
            }
          }
          V & 8 ? (k & 16 && sn(T, b, S), I !== T && c(g, I)) : k & 16 ? V & 16 ? qt(T, I, g, $, b, S, M, O, E) : sn(T, b, S, true) : (k & 8 && c(g, ""), V & 16 && q(I, g, $, b, S, M, O, E));
        }, be = (f, p, g, $, b, S, M, O, E) => {
          f = f || Kt, p = p || Kt;
          const T = f.length, k = p.length, I = Math.min(T, k);
          let L;
          for (L = 0; L < I; L++) {
            const V = p[L] = E ? $t(p[L]) : nt(p[L]);
            v(f[L], V, g, null, b, S, M, O, E);
          }
          T > k ? sn(f, b, S, true, false, I) : q(p, g, $, b, S, M, O, E, I);
        }, qt = (f, p, g, $, b, S, M, O, E) => {
          let T = 0;
          const k = p.length;
          let I = f.length - 1, L = k - 1;
          for (; T <= I && T <= L; ) {
            const V = f[T], Y = p[T] = E ? $t(p[T]) : nt(p[T]);
            if (cn(V, Y)) v(V, Y, g, null, b, S, M, O, E);
            else break;
            T++;
          }
          for (; T <= I && T <= L; ) {
            const V = f[I], Y = p[L] = E ? $t(p[L]) : nt(p[L]);
            if (cn(V, Y)) v(V, Y, g, null, b, S, M, O, E);
            else break;
            I--, L--;
          }
          if (T > I) {
            if (T <= L) {
              const V = L + 1, Y = V < k ? p[V].el : $;
              for (; T <= L; ) v(null, p[T] = E ? $t(p[T]) : nt(p[T]), g, Y, b, S, M, O, E), T++;
            }
          } else if (T > L) for (; T <= I; ) Xe(f[T], b, S, true), T++;
          else {
            const V = T, Y = T, re = /* @__PURE__ */ new Map();
            for (T = Y; T <= L; T++) {
              const Ne = p[T] = E ? $t(p[T]) : nt(p[T]);
              Ne.key != null && re.set(Ne.key, T);
            }
            let te, Ie = 0;
            const Oe = L - Y + 1;
            let Je = false, Qe = 0;
            const ln = new Array(Oe);
            for (T = 0; T < Oe; T++) ln[T] = 0;
            for (T = V; T <= I; T++) {
              const Ne = f[T];
              if (Ie >= Oe) {
                Xe(Ne, b, S, true);
                continue;
              }
              let Ze;
              if (Ne.key != null) Ze = re.get(Ne.key);
              else for (te = Y; te <= L; te++) if (ln[te - Y] === 0 && cn(Ne, p[te])) {
                Ze = te;
                break;
              }
              Ze === void 0 ? Xe(Ne, b, S, true) : (ln[Ze - Y] = T + 1, Ze >= Qe ? Qe = Ze : Je = true, v(Ne, p[Ze], g, null, b, S, M, O, E), Ie++);
            }
            const Bi = Je ? cc(ln) : Kt;
            for (te = Bi.length - 1, T = Oe - 1; T >= 0; T--) {
              const Ne = Y + T, Ze = p[Ne], ji = Ne + 1 < k ? p[Ne + 1].el : $;
              ln[T] === 0 ? v(null, Ze, g, ji, b, S, M, O, E) : Je && (te < 0 || T !== Bi[te] ? Dt(Ze, g, ji, 2) : te--);
            }
          }
        }, Dt = (f, p, g, $, b = null) => {
          const { el: S, type: M, transition: O, children: E, shapeFlag: T } = f;
          if (T & 6) {
            Dt(f.component.subTree, p, g, $);
            return;
          }
          if (T & 128) {
            f.suspense.move(p, g, $);
            return;
          }
          if (T & 64) {
            M.move(f, p, g, rn);
            return;
          }
          if (M === ie) {
            o(S, p, g);
            for (let I = 0; I < E.length; I++) Dt(E[I], p, g, $);
            o(f.anchor, p, g);
            return;
          }
          if (M === Jn) {
            D(f, p, g);
            return;
          }
          if ($ !== 2 && T & 1 && O) if ($ === 0) O.beforeEnter(S), o(S, p, g), De(() => O.enter(S), b);
          else {
            const { leave: I, delayLeave: L, afterLeave: V } = O, Y = () => {
              f.ctx.isUnmounted ? i(S) : o(S, p, g);
            }, re = () => {
              I(S, () => {
                Y(), V && V();
              });
            };
            L ? L(S, Y, re) : re();
          }
          else o(S, p, g);
        }, Xe = (f, p, g, $ = false, b = false) => {
          const { type: S, props: M, ref: O, children: E, dynamicChildren: T, shapeFlag: k, patchFlag: I, dirs: L, cacheIndex: V } = f;
          if (I === -2 && (b = false), O != null && (mt(), co(O, null, g, f, true), wt()), V != null && (p.renderCache[V] = void 0), k & 256) {
            p.ctx.deactivate(f);
            return;
          }
          const Y = k & 1 && L, re = !Jt(f);
          let te;
          if (re && (te = M && M.onVnodeBeforeUnmount) && et(te, p, f), k & 6) El(f.component, g, $);
          else {
            if (k & 128) {
              f.suspense.unmount(g, $);
              return;
            }
            Y && Lt(f, null, p, "beforeUnmount"), k & 64 ? f.type.remove(f, p, g, rn, $) : T && !T.hasOnce && (S !== ie || I > 0 && I & 64) ? sn(T, p, g, false, true) : (S === ie && I & 384 || !b && k & 16) && sn(E, p, g), $ && Fi(f);
          }
          (re && (te = M && M.onVnodeUnmounted) || Y) && De(() => {
            te && et(te, p, f), Y && Lt(f, null, p, "unmounted");
          }, g);
        }, Fi = (f) => {
          const { type: p, el: g, anchor: $, transition: b } = f;
          if (p === ie) {
            Al(g, $);
            return;
          }
          if (p === Jn) {
            y(f);
            return;
          }
          const S = () => {
            i(g), b && !b.persisted && b.afterLeave && b.afterLeave();
          };
          if (f.shapeFlag & 1 && b && !b.persisted) {
            const { leave: M, delayLeave: O } = b, E = () => M(g, S);
            O ? O(f.el, S, E) : E();
          } else S();
        }, Al = (f, p) => {
          let g;
          for (; f !== p; ) g = h(f), i(f), f = g;
          i(p);
        }, El = (f, p, g) => {
          const { bum: $, scope: b, job: S, subTree: M, um: O, m: E, a: T, parent: k, slots: { __: I } } = f;
          es(E), es(T), $ && Yn($), k && B(I) && I.forEach((L) => {
            k.renderCache[L] = void 0;
          }), b.stop(), S && (S.flags |= 8, Xe(M, f, p, g)), O && De(O, p), De(() => {
            f.isUnmounted = true;
          }, p), p && p.pendingBranch && !p.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve());
        }, sn = (f, p, g, $ = false, b = false, S = 0) => {
          for (let M = S; M < f.length; M++) Xe(f[M], p, g, $, b);
        }, jn = (f) => {
          if (f.shapeFlag & 6) return jn(f.component.subTree);
          if (f.shapeFlag & 128) return f.suspense.next();
          const p = h(f.anchor || f.el), g = p && p[Ea];
          return g ? h(g) : p;
        };
        let Bo = false;
        const zi = (f, p, g) => {
          f == null ? p._vnode && Xe(p._vnode, null, null, true) : v(p._vnode || null, f, p, null, null, null, g), p._vnode = f, Bo || (Bo = true, Ki(), wr(), Bo = false);
        }, rn = {
          p: v,
          um: Xe,
          m: Dt,
          r: Fi,
          mt: he,
          mc: q,
          pc: K,
          pbc: U,
          n: jn,
          o: e
        };
        return {
          render: zi,
          hydrate: void 0,
          createApp: Qa(zi)
        };
      }
      function Go({ type: e, props: t }, n) {
        return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
      }
      function kt({ effect: e, job: t }, n) {
        n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
      }
      function ac(e, t) {
        return (!e || e && !e.pendingBranch) && t && !t.persisted;
      }
      function Hr(e, t, n = false) {
        const o = e.children, i = t.children;
        if (B(o) && B(i)) for (let s = 0; s < o.length; s++) {
          const r = o[s];
          let l = i[s];
          l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = $t(i[s]), l.el = r.el), !n && l.patchFlag !== -2 && Hr(r, l)), l.type === Ro && (l.el = r.el), l.type === vt && !l.el && (l.el = r.el);
        }
      }
      function cc(e) {
        const t = e.slice(), n = [
          0
        ];
        let o, i, s, r, l;
        const a = e.length;
        for (o = 0; o < a; o++) {
          const u = e[o];
          if (u !== 0) {
            if (i = n[n.length - 1], e[i] < u) {
              t[o] = i, n.push(o);
              continue;
            }
            for (s = 0, r = n.length - 1; s < r; ) l = s + r >> 1, e[n[l]] < u ? s = l + 1 : r = l;
            u < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
          }
        }
        for (s = n.length, r = n[s - 1]; s-- > 0; ) n[s] = r, r = t[r];
        return n;
      }
      function Fr(e) {
        const t = e.subTree.component;
        if (t) return t.asyncDep && !t.asyncResolved ? t : Fr(t);
      }
      function es(e) {
        if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
      }
      const uc = Symbol.for("v-scx"), fc = () => Xn(uc);
      function He(e, t, n) {
        return zr(e, t, n);
      }
      function zr(e, t, n = oe) {
        const { immediate: o, deep: i, flush: s, once: r } = n, l = Se({}, n), a = t && o || !t && s !== "post";
        let u;
        if (An) {
          if (s === "sync") {
            const _ = fc();
            u = _.__watcherHandles || (_.__watcherHandles = []);
          } else if (!a) {
            const _ = () => {
            };
            return _.stop = it, _.resume = it, _.pause = it, _;
          }
        }
        const c = xe;
        l.call = (_, w, v) => lt(_, c, w, v);
        let d = false;
        s === "post" ? l.scheduler = (_) => {
          De(_, c && c.suspense);
        } : s !== "sync" && (d = true, l.scheduler = (_, w) => {
          w ? _() : Ei(_);
        }), l.augmentJob = (_) => {
          t && (_.flags |= 4), d && (_.flags |= 2, c && (_.id = c.uid, _.i = c));
        };
        const h = xa(e, t, l);
        return An && (u ? u.push(h) : a && h()), h;
      }
      function dc(e, t, n) {
        const o = this.proxy, i = de(e) ? e.includes(".") ? Br(o, e) : () => o[e] : e.bind(o, o);
        let s;
        W(t) ? s = t : (s = t.handler, n = t);
        const r = Fn(this), l = zr(i, s.bind(o), n);
        return r(), l;
      }
      function Br(e, t) {
        const n = t.split(".");
        return () => {
          let o = e;
          for (let i = 0; i < n.length && o; i++) o = o[n[i]];
          return o;
        };
      }
      const pc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${Nt(t)}Modifiers`];
      function hc(e, t, ...n) {
        if (e.isUnmounted) return;
        const o = e.vnode.props || oe;
        let i = n;
        const s = t.startsWith("update:"), r = s && pc(o, t.slice(7));
        r && (r.trim && (i = n.map((c) => de(c) ? c.trim() : c)), r.number && (i = n.map(oo)));
        let l, a = o[l = jo(t)] || o[l = jo(je(t))];
        !a && s && (a = o[l = jo(Nt(t))]), a && lt(a, e, 6, i);
        const u = o[l + "Once"];
        if (u) {
          if (!e.emitted) e.emitted = {};
          else if (e.emitted[l]) return;
          e.emitted[l] = true, lt(u, e, 6, i);
        }
      }
      function jr(e, t, n = false) {
        const o = t.emitsCache, i = o.get(e);
        if (i !== void 0) return i;
        const s = e.emits;
        let r = {}, l = false;
        if (!W(e)) {
          const a = (u) => {
            const c = jr(u, t, true);
            c && (l = true, Se(r, c));
          };
          !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
        }
        return !s && !l ? (ae(e) && o.set(e, null), null) : (B(s) ? s.forEach((a) => r[a] = null) : Se(r, s), ae(e) && o.set(e, r), r);
      }
      function Oo(e, t) {
        return !e || !bo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, Nt(t)) || ee(e, t));
      }
      function ts(e) {
        const { type: t, vnode: n, proxy: o, withProxy: i, propsOptions: [s], slots: r, attrs: l, emit: a, render: u, renderCache: c, props: d, data: h, setupState: _, ctx: w, inheritAttrs: v } = e, m = ao(e);
        let A, C;
        try {
          if (n.shapeFlag & 4) {
            const y = i || o, R = y;
            A = nt(u.call(R, y, c, d, _, h, w)), C = l;
          } else {
            const y = t;
            A = nt(y.length > 1 ? y(d, {
              attrs: l,
              slots: r,
              emit: a
            }) : y(d, null)), C = t.props ? l : _c(l);
          }
        } catch (y) {
          mn.length = 0, Co(y, e, 1), A = pe(vt);
        }
        let D = A;
        if (C && v !== false) {
          const y = Object.keys(C), { shapeFlag: R } = D;
          y.length && R & 7 && (s && y.some(mi) && (C = gc(C, s)), D = tn(D, C, false, true));
        }
        return n.dirs && (D = tn(D, null, false, true), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && Oi(D, n.transition), A = D, ao(m), A;
      }
      const _c = (e) => {
        let t;
        for (const n in e) (n === "class" || n === "style" || bo(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
      }, gc = (e, t) => {
        const n = {};
        for (const o in e) (!mi(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
        return n;
      };
      function mc(e, t, n) {
        const { props: o, children: i, component: s } = e, { props: r, children: l, patchFlag: a } = t, u = s.emitsOptions;
        if (t.dirs || t.transition) return true;
        if (n && a >= 0) {
          if (a & 1024) return true;
          if (a & 16) return o ? ns(o, r, u) : !!r;
          if (a & 8) {
            const c = t.dynamicProps;
            for (let d = 0; d < c.length; d++) {
              const h = c[d];
              if (r[h] !== o[h] && !Oo(u, h)) return true;
            }
          }
        } else return (i || l) && (!l || !l.$stable) ? true : o === r ? false : o ? r ? ns(o, r, u) : true : !!r;
        return false;
      }
      function ns(e, t, n) {
        const o = Object.keys(t);
        if (o.length !== Object.keys(e).length) return true;
        for (let i = 0; i < o.length; i++) {
          const s = o[i];
          if (t[s] !== e[s] && !Oo(n, s)) return true;
        }
        return false;
      }
      function wc({ vnode: e, parent: t }, n) {
        for (; t; ) {
          const o = t.subTree;
          if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = n, t = t.parent;
          else break;
        }
      }
      const qr = (e) => e.__isSuspense;
      function vc(e, t) {
        t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
      }
      const ie = Symbol.for("v-fgt"), Ro = Symbol.for("v-txt"), vt = Symbol.for("v-cmt"), Jn = Symbol.for("v-stc"), mn = [];
      let Le = null;
      function N(e = false) {
        mn.push(Le = e ? null : []);
      }
      function bc() {
        mn.pop(), Le = mn[mn.length - 1] || null;
      }
      let Cn = 1;
      function os(e, t = false) {
        Cn += e, e < 0 && Le && t && (Le.hasOnce = true);
      }
      function Vr(e) {
        return e.dynamicChildren = Cn > 0 ? Le || Kt : null, bc(), Cn > 0 && Le && Le.push(e), e;
      }
      function H(e, t, n, o, i, s) {
        return Vr(P(e, t, n, o, i, s, true));
      }
      function Be(e, t, n, o, i) {
        return Vr(pe(e, t, n, o, i, true));
      }
      function Pn(e) {
        return e ? e.__v_isVNode === true : false;
      }
      function cn(e, t) {
        return e.type === t.type && e.key === t.key;
      }
      const Ur = ({ key: e }) => e ?? null, Qn = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || ve(e) || W(e) ? {
        i: we,
        r: e,
        k: t,
        f: !!n
      } : e : null);
      function P(e, t = null, n = null, o = 0, i = null, s = e === ie ? 0 : 1, r = false, l = false) {
        const a = {
          __v_isVNode: true,
          __v_skip: true,
          type: e,
          props: t,
          key: t && Ur(t),
          ref: t && Qn(t),
          scopeId: Po,
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
          patchFlag: o,
          dynamicProps: i,
          dynamicChildren: null,
          appContext: null,
          ctx: we
        };
        return l ? (Ii(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), Cn > 0 && !r && Le && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Le.push(a), a;
      }
      const pe = yc;
      function yc(e, t = null, n = null, o = 0, i = null, s = false) {
        if ((!e || e === Va) && (e = vt), Pn(e)) {
          const l = tn(e, t, true);
          return n && Ii(l, n), Cn > 0 && !s && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag = -2, l;
        }
        if (Rc(e) && (e = e.__vccOpts), t) {
          t = Wr(t);
          let { class: l, style: a } = t;
          l && !de(l) && (t.class = Ve(l)), ae(a) && (Pi(a) && !B(a) && (a = Se({}, a)), t.style = Pt(a));
        }
        const r = de(e) ? 1 : qr(e) ? 128 : Oa(e) ? 64 : ae(e) ? 4 : W(e) ? 2 : 0;
        return P(e, t, n, o, i, r, s, true);
      }
      function Wr(e) {
        return e ? Pi(e) || Mr(e) ? Se({}, e) : e : null;
      }
      function tn(e, t, n = false, o = false) {
        const { props: i, ref: s, patchFlag: r, children: l, transition: a } = e, u = t ? Ni(i || {}, t) : i, c = {
          __v_isVNode: true,
          __v_skip: true,
          type: e.type,
          props: u,
          key: u && Ur(u),
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
          ssContent: e.ssContent && tn(e.ssContent),
          ssFallback: e.ssFallback && tn(e.ssFallback),
          el: e.el,
          anchor: e.anchor,
          ctx: e.ctx,
          ce: e.ce
        };
        return a && o && Oi(c, a.clone(c)), c;
      }
      function Pe(e = " ", t = 0) {
        return pe(Ro, null, e, t);
      }
      function xc(e, t) {
        const n = pe(Jn, null, e);
        return n.staticCount = t, n;
      }
      function ot(e = "", t = false) {
        return t ? (N(), Be(vt, null, e)) : pe(vt, null, e);
      }
      function nt(e) {
        return e == null || typeof e == "boolean" ? pe(vt) : B(e) ? pe(ie, null, e.slice()) : Pn(e) ? $t(e) : pe(Ro, null, String(e));
      }
      function $t(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : tn(e);
      }
      function Ii(e, t) {
        let n = 0;
        const { shapeFlag: o } = e;
        if (t == null) t = null;
        else if (B(t)) n = 16;
        else if (typeof t == "object") if (o & 65) {
          const i = t.default;
          i && (i._c && (i._d = false), Ii(e, i()), i._c && (i._d = true));
          return;
        } else {
          n = 32;
          const i = t._;
          !i && !Mr(t) ? t._ctx = we : i === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
        }
        else W(t) ? (t = {
          default: t,
          _ctx: we
        }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [
          Pe(t)
        ]) : n = 8);
        e.children = t, e.shapeFlag |= n;
      }
      function Ni(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const o = e[n];
          for (const i in o) if (i === "class") t.class !== o.class && (t.class = Ve([
            t.class,
            o.class
          ]));
          else if (i === "style") t.style = Pt([
            t.style,
            o.style
          ]);
          else if (bo(i)) {
            const s = t[i], r = o[i];
            r && s !== r && !(B(s) && s.includes(r)) && (t[i] = s ? [].concat(s, r) : r);
          } else i !== "" && (t[i] = o[i]);
        }
        return t;
      }
      function et(e, t, n, o = null) {
        lt(e, t, 7, [
          n,
          o
        ]);
      }
      const Sc = Er();
      let $c = 0;
      function Tc(e, t, n) {
        const o = e.type, i = (t ? t.appContext : e.appContext) || Sc, s = {
          uid: $c++,
          vnode: e,
          type: o,
          parent: t,
          appContext: i,
          root: null,
          next: null,
          subTree: null,
          effect: null,
          update: null,
          job: null,
          scope: new Vl(true),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: t ? t.provides : Object.create(i.provides),
          ids: t ? t.ids : [
            "",
            0,
            0
          ],
          accessCache: null,
          renderCache: [],
          components: null,
          directives: null,
          propsOptions: Nr(o, i),
          emitsOptions: jr(o, i),
          emit: null,
          emitted: null,
          propsDefaults: oe,
          inheritAttrs: o.inheritAttrs,
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
        }, s.root = t ? t.root : s, s.emit = hc.bind(null, s), e.ce && e.ce(s), s;
      }
      let xe = null, fo, ai;
      {
        const e = $o(), t = (n, o) => {
          let i;
          return (i = e[n]) || (i = e[n] = []), i.push(o), (s) => {
            i.length > 1 ? i.forEach((r) => r(s)) : i[0](s);
          };
        };
        fo = t("__VUE_INSTANCE_SETTERS__", (n) => xe = n), ai = t("__VUE_SSR_SETTERS__", (n) => An = n);
      }
      const Fn = (e) => {
        const t = xe;
        return fo(e), e.scope.on(), () => {
          e.scope.off(), fo(t);
        };
      }, is = () => {
        xe && xe.scope.off(), fo(null);
      };
      function Kr(e) {
        return e.vnode.shapeFlag & 4;
      }
      let An = false;
      function Cc(e, t = false, n = false) {
        t && ai(t);
        const { props: o, children: i } = e.vnode, s = Kr(e);
        ec(e, o, s, t), ic(e, i, n || t);
        const r = s ? Pc(e, t) : void 0;
        return t && ai(false), r;
      }
      function Pc(e, t) {
        const n = e.type;
        e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ua);
        const { setup: o } = n;
        if (o) {
          mt();
          const i = e.setupContext = o.length > 1 ? Ec(e) : null, s = Fn(e), r = kn(o, e, 0, [
            e.props,
            i
          ]), l = Us(r);
          if (wt(), s(), (l || e.sp) && !Jt(e) && br(e), l) {
            if (r.then(is, is), t) return r.then((a) => {
              ss(e, a);
            }).catch((a) => {
              Co(a, e, 0);
            });
            e.asyncDep = r;
          } else ss(e, r);
        } else Gr(e);
      }
      function ss(e, t, n) {
        W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = hr(t)), Gr(e);
      }
      function Gr(e, t, n) {
        const o = e.type;
        e.render || (e.render = o.render || it);
        {
          const i = Fn(e);
          mt();
          try {
            Wa(e);
          } finally {
            wt(), i();
          }
        }
      }
      const Ac = {
        get(e, t) {
          return ye(e, "get", ""), e[t];
        }
      };
      function Ec(e) {
        const t = (n) => {
          e.exposed = n || {};
        };
        return {
          attrs: new Proxy(e.attrs, Ac),
          slots: e.slots,
          emit: e.emit,
          expose: t
        };
      }
      function Mo(e) {
        return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hr(da(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in gn) return gn[n](e);
          },
          has(t, n) {
            return n in t || n in gn;
          }
        })) : e.proxy;
      }
      function Oc(e, t = true) {
        return W(e) ? e.displayName || e.name : e.name || t && e.__name;
      }
      function Rc(e) {
        return W(e) && "__vccOpts" in e;
      }
      const ke = (e, t) => ba(e, t, An);
      function Mc(e, t, n) {
        const o = arguments.length;
        return o === 2 ? ae(t) && !B(t) ? Pn(t) ? pe(e, null, [
          t
        ]) : pe(e, t) : pe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Pn(n) && (n = [
          n
        ]), pe(e, t, n));
      }
      const Ic = "3.5.16";
      let ci;
      const rs = typeof window < "u" && window.trustedTypes;
      if (rs) try {
        ci = rs.createPolicy("vue", {
          createHTML: (e) => e
        });
      } catch {
      }
      const Yr = ci ? (e) => ci.createHTML(e) : (e) => e, Nc = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", ft = typeof document < "u" ? document : null, ls = ft && ft.createElement("template"), Lc = {
        insert: (e, t, n) => {
          t.insertBefore(e, n || null);
        },
        remove: (e) => {
          const t = e.parentNode;
          t && t.removeChild(e);
        },
        createElement: (e, t, n, o) => {
          const i = t === "svg" ? ft.createElementNS(Nc, e) : t === "mathml" ? ft.createElementNS(Dc, e) : n ? ft.createElement(e, {
            is: n
          }) : ft.createElement(e);
          return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
        },
        createText: (e) => ft.createTextNode(e),
        createComment: (e) => ft.createComment(e),
        setText: (e, t) => {
          e.nodeValue = t;
        },
        setElementText: (e, t) => {
          e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => ft.querySelector(e),
        setScopeId(e, t) {
          e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, o, i, s) {
          const r = n ? n.previousSibling : t.lastChild;
          if (i && (i === s || i.nextSibling)) for (; t.insertBefore(i.cloneNode(true), n), !(i === s || !(i = i.nextSibling)); ) ;
          else {
            ls.innerHTML = Yr(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
            const l = ls.content;
            if (o === "svg" || o === "mathml") {
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
      }, kc = Symbol("_vtc");
      function Hc(e, t, n) {
        const o = e[kc];
        o && (t = (t ? [
          t,
          ...o
        ] : [
          ...o
        ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
      }
      const po = Symbol("_vod"), Xr = Symbol("_vsh"), un = {
        beforeMount(e, { value: t }, { transition: n }) {
          e[po] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : fn(e, t);
        },
        mounted(e, { value: t }, { transition: n }) {
          n && t && n.enter(e);
        },
        updated(e, { value: t, oldValue: n }, { transition: o }) {
          !t != !n && (o ? t ? (o.beforeEnter(e), fn(e, true), o.enter(e)) : o.leave(e, () => {
            fn(e, false);
          }) : fn(e, t));
        },
        beforeUnmount(e, { value: t }) {
          fn(e, t);
        }
      };
      function fn(e, t) {
        e.style.display = t ? e[po] : "none", e[Xr] = !t;
      }
      const Fc = Symbol(""), zc = /(^|;)\s*display\s*:/;
      function Bc(e, t, n) {
        const o = e.style, i = de(n);
        let s = false;
        if (n && !i) {
          if (t) if (de(t)) for (const r of t.split(";")) {
            const l = r.slice(0, r.indexOf(":")).trim();
            n[l] == null && Zn(o, l, "");
          }
          else for (const r in t) n[r] == null && Zn(o, r, "");
          for (const r in n) r === "display" && (s = true), Zn(o, r, n[r]);
        } else if (i) {
          if (t !== n) {
            const r = o[Fc];
            r && (n += ";" + r), o.cssText = n, s = zc.test(n);
          }
        } else t && e.removeAttribute("style");
        po in e && (e[po] = s ? o.display : "", e[Xr] && (o.display = "none"));
      }
      const as = /\s*!important$/;
      function Zn(e, t, n) {
        if (B(n)) n.forEach((o) => Zn(e, t, o));
        else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
        else {
          const o = jc(e, t);
          as.test(n) ? e.setProperty(Nt(o), n.replace(as, ""), "important") : e[o] = n;
        }
      }
      const cs = [
        "Webkit",
        "Moz",
        "ms"
      ], Yo = {};
      function jc(e, t) {
        const n = Yo[t];
        if (n) return n;
        let o = je(t);
        if (o !== "filter" && o in e) return Yo[t] = o;
        o = So(o);
        for (let i = 0; i < cs.length; i++) {
          const s = cs[i] + o;
          if (s in e) return Yo[t] = s;
        }
        return t;
      }
      const us = "http://www.w3.org/1999/xlink";
      function fs(e, t, n, o, i, s = Bl(t)) {
        o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(us, t.slice(6, t.length)) : e.setAttributeNS(us, t, n) : n == null || s && !Ys(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Ge(n) ? String(n) : n);
      }
      function ds(e, t, n, o, i) {
        if (t === "innerHTML" || t === "textContent") {
          n != null && (e[t] = t === "innerHTML" ? Yr(n) : n);
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
          l === "boolean" ? n = Ys(n) : n == null && l === "string" ? (n = "", r = true) : l === "number" && (n = 0, r = true);
        }
        try {
          e[t] = n;
        } catch {
        }
        r && e.removeAttribute(i || t);
      }
      function Tt(e, t, n, o) {
        e.addEventListener(t, n, o);
      }
      function qc(e, t, n, o) {
        e.removeEventListener(t, n, o);
      }
      const ps = Symbol("_vei");
      function Vc(e, t, n, o, i = null) {
        const s = e[ps] || (e[ps] = {}), r = s[t];
        if (o && r) r.value = o;
        else {
          const [l, a] = Uc(t);
          if (o) {
            const u = s[t] = Gc(o, i);
            Tt(e, l, u, a);
          } else r && (qc(e, l, r, a), s[t] = void 0);
        }
      }
      const hs = /(?:Once|Passive|Capture)$/;
      function Uc(e) {
        let t;
        if (hs.test(e)) {
          t = {};
          let o;
          for (; o = e.match(hs); ) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = true;
        }
        return [
          e[2] === ":" ? e.slice(3) : Nt(e.slice(2)),
          t
        ];
      }
      let Xo = 0;
      const Wc = Promise.resolve(), Kc = () => Xo || (Wc.then(() => Xo = 0), Xo = Date.now());
      function Gc(e, t) {
        const n = (o) => {
          if (!o._vts) o._vts = Date.now();
          else if (o._vts <= n.attached) return;
          lt(Yc(o, n.value), t, 5, [
            o
          ]);
        };
        return n.value = e, n.attached = Kc(), n;
      }
      function Yc(e, t) {
        if (B(t)) {
          const n = e.stopImmediatePropagation;
          return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = true;
          }, t.map((o) => (i) => !i._stopped && o && o(i));
        } else return t;
      }
      const _s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xc = (e, t, n, o, i, s) => {
        const r = i === "svg";
        t === "class" ? Hc(e, o, r) : t === "style" ? Bc(e, n, o) : bo(t) ? mi(t) || Vc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Jc(e, t, o, r)) ? (ds(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fs(e, t, o, r, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !de(o)) ? ds(e, je(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), fs(e, t, o, r));
      };
      function Jc(e, t, n, o) {
        if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && _s(t) && W(n));
        if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
        if (t === "width" || t === "height") {
          const i = e.tagName;
          if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return false;
        }
        return _s(t) && de(n) ? false : t in e;
      }
      const nn = (e) => {
        const t = e.props["onUpdate:modelValue"] || false;
        return B(t) ? (n) => Yn(t, n) : t;
      };
      function Qc(e) {
        e.target.composing = true;
      }
      function gs(e) {
        const t = e.target;
        t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
      }
      const gt = Symbol("_assign"), ho = {
        created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
          e[gt] = nn(i);
          const s = o || i.props && i.props.type === "number";
          Tt(e, t ? "change" : "input", (r) => {
            if (r.target.composing) return;
            let l = e.value;
            n && (l = l.trim()), s && (l = oo(l)), e[gt](l);
          }), n && Tt(e, "change", () => {
            e.value = e.value.trim();
          }), t || (Tt(e, "compositionstart", Qc), Tt(e, "compositionend", gs), Tt(e, "change", gs));
        },
        mounted(e, { value: t }) {
          e.value = t ?? "";
        },
        beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: i, number: s } }, r) {
          if (e[gt] = nn(r), e.composing) return;
          const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? oo(e.value) : e.value, a = t ?? "";
          l !== a && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === a) || (e.value = a));
        }
      }, Jo = {
        created(e, { value: t }, n) {
          e.checked = en(t, n.props.value), e[gt] = nn(n), Tt(e, "change", () => {
            e[gt](En(e));
          });
        },
        beforeUpdate(e, { value: t, oldValue: n }, o) {
          e[gt] = nn(o), t !== n && (e.checked = en(t, o.props.value));
        }
      }, Jr = {
        deep: true,
        created(e, { value: t, modifiers: { number: n } }, o) {
          const i = yo(t);
          Tt(e, "change", () => {
            const s = Array.prototype.filter.call(e.options, (r) => r.selected).map((r) => n ? oo(En(r)) : En(r));
            e[gt](e.multiple ? i ? new Set(s) : s : s[0]), e._assigning = true, Ai(() => {
              e._assigning = false;
            });
          }), e[gt] = nn(o);
        },
        mounted(e, { value: t }) {
          ms(e, t);
        },
        beforeUpdate(e, t, n) {
          e[gt] = nn(n);
        },
        updated(e, { value: t }) {
          e._assigning || ms(e, t);
        }
      };
      function ms(e, t) {
        const n = e.multiple, o = B(t);
        if (!(n && !o && !yo(t))) {
          for (let i = 0, s = e.options.length; i < s; i++) {
            const r = e.options[i], l = En(r);
            if (n) if (o) {
              const a = typeof l;
              a === "string" || a === "number" ? r.selected = t.some((u) => String(u) === String(l)) : r.selected = ql(t, l) > -1;
            } else r.selected = t.has(l);
            else if (en(En(r), t)) {
              e.selectedIndex !== i && (e.selectedIndex = i);
              return;
            }
          }
          !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
        }
      }
      function En(e) {
        return "_value" in e ? e._value : e.value;
      }
      const Zc = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      }, Qr = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
        return n[o] || (n[o] = (i) => {
          if (!("key" in i)) return;
          const s = Nt(i.key);
          if (t.some((r) => r === s || Zc[r] === s)) return e(i);
        });
      }, eu = Se({
        patchProp: Xc
      }, Lc);
      let ws;
      function tu() {
        return ws || (ws = rc(eu));
      }
      const Zr = (...e) => {
        const t = tu().createApp(...e), { mount: n } = t;
        return t.mount = (o) => {
          const i = ou(o);
          if (!i) return;
          const s = t._component;
          !W(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
          const r = n(i, false, nu(i));
          return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
        }, t;
      };
      function nu(e) {
        if (e instanceof SVGElement) return "svg";
        if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
      }
      function ou(e) {
        return de(e) ? document.querySelector(e) : e;
      }
      const iu = Hn({
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
          const n = e, o = t, i = ue(false), s = ue(50), r = ue(false), l = ue(0), a = ue(), u = ke({
            get() {
              return n.percent ?? s.value;
            },
            set(q) {
              o("update:percent", q), s.value = q;
            }
          });
          u.value = Number(n.initialPercent);
          const c = ke(() => n.isHorizontal ? "top-pane" : "left-pane"), d = ke(() => n.isHorizontal ? "bottom-pane" : "right-pane"), h = ke(() => n.isHorizontal ? `${u.value}% auto 1fr / none` : `none / ${u.value}% auto 1fr`), _ = ke(() => i.value ? "none" : "auto");
          function w() {
            r.value || o("splitter-click");
          }
          function v(q) {
            l.value = n.isHorizontal ? q.offsetY : q.offsetX, A();
          }
          function m() {
            l.value = 0, A();
          }
          function A() {
            i.value = true, r.value = false, C();
          }
          function C() {
            document.body.addEventListener("mousemove", y), document.body.addEventListener("touchmove", D), document.body.addEventListener("touchend", J, {
              once: true
            }), document.body.addEventListener("mouseup", J, {
              once: true
            });
          }
          function D(q) {
            i.value && R(q.touches[0]);
          }
          function y(q) {
            q.buttons && q.buttons === 0 && (i.value = false, z()), i.value && R(q);
          }
          function R(q) {
            let ne = l.value, U = a.value, se = 0;
            if (n.isHorizontal) {
              for (ne += U.offsetTop; U.offsetParent; ) U = U.offsetParent, ne += U.offsetTop;
              se = Math.floor((q.pageY - ne) / a.value.offsetHeight * 1e4) / 100;
            } else {
              for (ne += U.offsetLeft; U.offsetParent; ) U = U.offsetParent, ne += U.offsetLeft;
              se = Math.floor((q.pageX - ne) / a.value.offsetWidth * 1e4) / 100;
            }
            se > 0 && se < 100 && (u.value = se, r.value = true);
          }
          function J() {
            i.value = false, z();
          }
          function z() {
            document.body.removeEventListener("touchmove", D), document.body.removeEventListener("mousemove", y);
          }
          return (q, ne) => (N(), H("div", {
            style: Pt({
              userSelect: _.value,
              gridTemplate: h.value
            }),
            class: Ve([
              "vue-splitter",
              {
                horizontal: q.isHorizontal,
                vertical: !q.isHorizontal
              }
            ]),
            ref_key: "containerRef",
            ref: a
          }, [
            P("div", {
              class: Ve([
                "splitter-pane",
                c.value
              ])
            }, [
              ht(q.$slots, "left-pane"),
              ht(q.$slots, "top-pane")
            ], 2),
            P("div", {
              class: Ve([
                "splitter",
                {
                  active: i.value
                }
              ]),
              onMousedown: v,
              onTouchstartPassive: m,
              onClick: w
            }, null, 34),
            P("div", {
              class: Ve([
                "splitter-pane",
                d.value
              ])
            }, [
              ht(q.$slots, "right-pane"),
              ht(q.$slots, "bottom-pane")
            ], 2)
          ], 6));
        }
      }), su = {
        __name: "SearchResultsItem",
        props: [
          "cfg",
          "item"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t, o = ue(null);
          function i(r, l, a) {
            console.log("adding requirement", l, a, r), a != null && a.length > 0 ? (r.add_requirement(l, a), n("cfg_update")) : console.log("attempt to add a requirement without a value, was: ", a);
          }
          function s(r, l) {
            console.log("adding import/export", l, r), r.add_import_export(l), n("cfg_update");
          }
          return (r, l) => {
            const a = Eo("tooltip");
            return N(), H(ie, null, [
              Q((N(), H("div", null, [
                Pe(Me(e.item.display), 1)
              ])), [
                [
                  a,
                  "id: " + e.item.id
                ]
              ]),
              P("div", null, [
                Q(P("input", {
                  type: "text",
                  size: "4",
                  onKeyup: l[0] || (l[0] = Qr((u) => i(e.cfg, e.item.id, o.value), [
                    "enter"
                  ])),
                  "onUpdate:modelValue": l[1] || (l[1] = (u) => o.value = u)
                }, null, 544), [
                  [
                    ho,
                    o.value
                  ]
                ]),
                Q((N(), H("button", {
                  onClick: l[2] || (l[2] = (u) => i(e.cfg, e.item.id, o.value))
                }, l[4] || (l[4] = [
                  Pe("Requirement")
                ]))), [
                  [
                    a,
                    "Add " + e.item.display + " as a requirement, you must specify a non-empty value"
                  ]
                ]),
                Q((N(), H("button", {
                  onClick: l[3] || (l[3] = (u) => s(e.cfg, e.item.id))
                }, l[5] || (l[5] = [
                  Pe("Import/Export")
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
      const _Ee = class _Ee {
        constructor(t) {
          this.type = t;
        }
        is_intermediate() {
          return this.type == _Ee.INTERMEDIATE;
        }
        is_req() {
          return this.type == _Ee.REQUIREMENT;
        }
        is_io() {
          return this.type == _Ee.IMPORT_EXPORT;
        }
        req_quantity() {
          return null;
        }
      };
      __publicField(_Ee, "INTERMEDIATE", "intermediate");
      __publicField(_Ee, "IMPORT_EXPORT", "import_export");
      __publicField(_Ee, "REQUIREMENT", "requirement");
      let Ee = _Ee;
      class ru extends Ee {
        constructor(t) {
          super(Ee.REQUIREMENT), this.req = t;
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
      class vs extends Ee {
        constructor(t) {
          super(Ee.IMPORT_EXPORT), this.item = t;
        }
        id() {
          return this.item.id;
        }
        display() {
          return this.item.display;
        }
      }
      class lu extends Ee {
        constructor(t) {
          super(Ee.INTERMEDIATE), this.item = t;
        }
        id() {
          return this.item.id;
        }
        display() {
          return this.item.display;
        }
      }
      const au = {
        for: "requirement"
      }, cu = {
        key: 0
      }, uu = [
        "disabled"
      ], fu = {
        for: "import_export"
      }, du = {
        for: "intermediate"
      }, pu = {
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
          const n = t, o = ue(e.stack.req_quantity()), i = ue(e.stack.type);
          return e.stack.is_req() && console.log("stack quantity", e.stack), console.log("stack", e.stack, e.stack.is_req(), e.stack.is_io(), e.stack.is_intermediate()), He(i, (s) => {
            switch (console.log("change in type", i, e.stack.id(), "req val", o.value), s) {
              case Ee.REQUIREMENT:
                e.cfg.add_requirement(e.stack.id(), o.value), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
                break;
              case Ee.IMPORT_EXPORT:
                e.cfg.add_import_export(e.stack.id()), e.cfg.remove_requirement(e.stack.id()), n("cfg_update");
                break;
              case Ee.INTERMEDIATE:
                e.cfg.remove_requirement(e.stack.id()), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
            }
          }), He(o, (s) => {
            console.log("requirement value updated", e.stack.id(), i.value, s), i.value == "requirement" && (e.cfg.update_requirement(e.stack.id(), s), n("cfg_update"));
          }), (s, r) => {
            const l = Eo("tooltip");
            return N(), H(ie, null, [
              Q((N(), H("div", null, [
                Pe(" [icon] " + Me(e.stack.display()), 1)
              ])), [
                [
                  l,
                  "id: " + e.stack.id()
                ]
              ]),
              P("div", null, [
                Q((N(), H("button", {
                  onClick: r[0] || (r[0] = (a) => n("make_item", e.stack.id()))
                }, r[6] || (r[6] = [
                  Pe("Make")
                ]))), [
                  [
                    l,
                    "Search for processes that have " + e.stack.display() + " as an output."
                  ]
                ]),
                Q((N(), H("button", {
                  onClick: r[1] || (r[1] = (a) => n("use_item", e.stack.id()))
                }, r[7] || (r[7] = [
                  Pe("Use")
                ]))), [
                  [
                    l,
                    "Search for processes that have " + e.stack.display() + " as an input."
                  ]
                ])
              ]),
              P("div", null, [
                P("div", null, [
                  Q(P("input", {
                    type: "radio",
                    id: "requirement",
                    value: "requirement",
                    "onUpdate:modelValue": r[2] || (r[2] = (a) => i.value = a)
                  }, null, 512), [
                    [
                      Jo,
                      i.value
                    ]
                  ]),
                  Q((N(), H("label", au, r[8] || (r[8] = [
                    Pe(" Requirement")
                  ]))), [
                    [
                      l,
                      "Set " + e.stack.display() + " as a requirement"
                    ]
                  ]),
                  e.stack.is_req() ? (N(), H("span", cu, [
                    r[9] || (r[9] = Pe(" \xA0 ")),
                    Q(P("input", {
                      type: "text",
                      size: "5",
                      "onUpdate:modelValue": r[3] || (r[3] = (a) => o.value = a),
                      disabled: i.value != Ce(Ee).REQUIREMENT
                    }, null, 8, uu), [
                      [
                        ho,
                        o.value,
                        void 0,
                        {
                          lazy: true,
                          number: true
                        }
                      ],
                      [
                        l,
                        "Set a requirement of X per second for " + e.stack.display() + (i.value == Ce(Ee).REQUIREMENT ? "" : " (disabled because " + e.stack.display() + " is not marked as a requirement)")
                      ]
                    ]),
                    r[10] || (r[10] = Pe(" per second "))
                  ])) : ot("", true)
                ]),
                P("div", null, [
                  Q(P("input", {
                    type: "radio",
                    id: "import_export",
                    value: "import_export",
                    "onUpdate:modelValue": r[4] || (r[4] = (a) => i.value = a)
                  }, null, 512), [
                    [
                      Jo,
                      i.value
                    ]
                  ]),
                  Q((N(), H("label", fu, r[11] || (r[11] = [
                    Pe(" Import/Export")
                  ]))), [
                    [
                      l,
                      "Use an infinite source or sink for " + e.stack.display()
                    ]
                  ])
                ]),
                P("div", null, [
                  Q(P("input", {
                    type: "radio",
                    id: "intermediate",
                    value: "intermediate",
                    "onUpdate:modelValue": r[5] || (r[5] = (a) => i.value = a)
                  }, null, 512), [
                    [
                      Jo,
                      i.value
                    ]
                  ]),
                  Q((N(), H("label", du, r[12] || (r[12] = [
                    Pe(" Intermediate")
                  ]))), [
                    [
                      l,
                      e.stack.display() + " should have a net zero produce & consume"
                    ]
                  ])
                ])
              ]),
              r[13] || (r[13] = P("div", {
                class: "items_fw"
              }, [
                P("hr")
              ], -1))
            ], 64);
          };
        }
      };
      class hu {
        constructor(t, n, o) {
          this.duration = t, this.input = n, this.output = o;
        }
      }
      const Io = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [o, i] of t) n[o] = i;
        return n;
      }, _u = {
        id: "name"
      }, gu = {
        id: "in"
      }, mu = {
        class: "proc_io"
      }, wu = {
        id: "out"
      }, vu = {
        class: "proc_io"
      }, bu = {
        class: "proc_buttons"
      }, yu = [
        "id",
        "open"
      ], xu = {
        class: "input_options"
      }, Su = [
        "value"
      ], $u = {
        class: "input_options"
      }, Tu = [
        "value"
      ], Cu = {
        class: "input_options"
      }, Pu = [
        "value"
      ], Au = {
        class: "input_options"
      }, Eu = {
        class: "factory_select"
      }, Ou = [
        "value"
      ], Ru = {
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
          const n = t, o = ke(() => typeof e.active_proc > "u" ? {
            process: e.proc,
            duration_multiplier: 1,
            inputs_multiplier: 1,
            outputs_multiplier: 1,
            factory: {
              id: null
            }
          } : e.active_proc), i = ke(() => o.value.process), s = ke(() => e.id_prefix + "-" + i.value.id + "-modifiers"), r = ue(null), l = ke({
            get() {
              return console.log("modifiers get 1", o.value.process.id, r.value), r.value == null && (r.value = new hu(o.value.duration_multiplier, o.value.inputs_multiplier, o.value.outputs_multiplier)), console.log("modifiers get 2", o.value.process.id, r.value), r.value;
            }
          });
          function a(v, m) {
            console.log("update modifier", v, m), r.value[m] = v.target.value;
          }
          He(r, (v, m) => {
            m != null && (console.log("modifiers_stash update 1", v, r.value), r.value = v, n("modifier_update", i.value.id, c.value, Number(v.duration), Number(v.input), Number(v.output)), console.log("modifiers_stash update 2", v, r.value));
          }, {
            deep: true
          });
          const u = ke(() => e.cfg.factories_for_process(o.value.process.id)), c = ue(null), d = ue(null), h = ke({
            get() {
              return console.log("factory_id 1", c.value, d.value, o.value.process.display, o.value.factory.id, u.value), (c.value == null || o.value.process.id != d.value) && (o.value.factory.id != null ? c.value = o.value.factory.id : u.value.length > 0 && (c.value = u.value[0].id)), d.value = o.value.process.id, console.log("factory_id 2", c.value, d.value, o.value.factory.id, u.value), c.value;
            },
            set(v) {
              console.log("factory_id change 1", v, c.value, i.value.id, u.value, e.cfg.factories_for_process(i.value.id)), c.value = v, n("modifier_update", o.value.process.id, v, Number(r.value.duration), Number(r.value.input), Number(r.value.output)), console.log("factory_id change 2", v, c.value, i.value.id, u.value, e.cfg.factories_for_process(i.value.id));
            }
          }), _ = ue(false);
          function w(v) {
            _.value = v.newState == "open";
          }
          return (v, m) => {
            const A = Eo("tooltip");
            return N(), H(ie, null, [
              Q((N(), H("div", _u, [
                Pe(Me(i.value.display), 1)
              ])), [
                [
                  A,
                  "id: " + o.value.process.id
                ]
              ]),
              P("div", null, Me(i.value.duration) + "s ", 1),
              P("div", gu, [
                (N(true), H(ie, null, At(o.value.process.inputs, (C) => (N(), H("div", mu, [
                  P("div", null, Me(C.quantity), 1),
                  Q((N(), H("div", null, [
                    Pe(Me(C.item.display), 1)
                  ])), [
                    [
                      A,
                      "id: " + C.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              P("div", wu, [
                (N(true), H(ie, null, At(o.value.process.outputs, (C) => (N(), H("div", vu, [
                  P("div", null, Me(C.quantity), 1),
                  Q((N(), H("div", null, [
                    Pe(Me(C.item.display), 1)
                  ])), [
                    [
                      A,
                      "id: " + C.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              P("div", bu, [
                ht(v.$slots, "action_button", {
                  factory_id: c.value,
                  modifiers: l.value
                }, void 0, true)
              ]),
              P("details", {
                id: s.value,
                open: _.value,
                onToggle: m[0] || (m[0] = (C) => w(C))
              }, m[5] || (m[5] = [
                P("summary", null, "modifiers", -1)
              ]), 40, yu),
              Q(P("div", xu, [
                P("input", {
                  type: "text",
                  size: "4",
                  onBlur: m[1] || (m[1] = (C) => a(C, "duration")),
                  value: l.value.duration
                }, null, 40, Su)
              ], 512), [
                [
                  un,
                  _.value
                ]
              ]),
              Q(P("div", $u, [
                P("input", {
                  type: "text",
                  size: "4",
                  onBlur: m[2] || (m[2] = (C) => a(C, "input")),
                  value: l.value.input
                }, null, 40, Tu)
              ], 512), [
                [
                  un,
                  _.value
                ]
              ]),
              Q(P("div", Cu, [
                P("input", {
                  type: "text",
                  size: "4",
                  onBlur: m[3] || (m[3] = (C) => a(C, "output")),
                  value: l.value.output
                }, null, 40, Pu)
              ], 512), [
                [
                  un,
                  _.value
                ]
              ]),
              Q(P("div", Au, m[6] || (m[6] = [
                P("span", null, "factory", -1)
              ]), 512), [
                [
                  un,
                  _.value
                ]
              ]),
              Q(P("div", Eu, [
                Q(P("select", {
                  "onUpdate:modelValue": m[4] || (m[4] = (C) => h.value = C)
                }, [
                  m[7] || (m[7] = P("option", {
                    disabled: "",
                    value: ""
                  }, "Select a factory type", -1)),
                  (N(true), H(ie, null, At(u.value, (C) => (N(), H("option", {
                    key: C.id,
                    value: C.id
                  }, Me(C.display), 9, Ou))), 128))
                ], 512), [
                  [
                    Jr,
                    h.value,
                    void 0,
                    {
                      lazy: true
                    }
                  ]
                ])
              ], 512), [
                [
                  un,
                  _.value
                ]
              ]),
              m[8] || (m[8] = P("hr", {
                class: "proc_fw"
              }, null, -1))
            ], 64);
          };
        }
      }, el = Io(Ru, [
        [
          "__scopeId",
          "data-v-a2083010"
        ]
      ]), Mu = [
        "open"
      ], Iu = {
        class: "input_options"
      }, Nu = {
        class: "items"
      }, Du = {
        key: 0,
        class: "items_fw"
      }, Lu = {
        key: 0,
        class: "proc"
      }, ku = [
        "onClick"
      ], Hu = {
        __name: "CurrentConfiguration",
        props: [
          "cfg",
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
          function o() {
            console.log("CC handle_cfg_update"), n("cfg_update");
          }
          function i(c, d, h, _, w) {
            console.log("CC handle_modifier_update", c, d, h, _, w), e.cfg.update_modifiers(c, d, h, _, w), n("cfg_update");
          }
          function s(c, d) {
            n("fold_update", c, d);
          }
          function r(c) {
            console.log("CC handle make item", c), n("make_item", c);
          }
          function l(c) {
            console.log("CC handle use item", c), n("use_item", c);
          }
          function a(c) {
            let d = c.get_requirements().map((m) => (console.log("requirement", m.item.id, m.quantity), m)).map((m) => new ru(m)).map((m) => (console.log("  ", m), m)), h = c.get_imports_exports().map((m) => (console.log("io", m.id), m)).map((m) => new vs(m)).map((m) => (console.log("  ", m), m)), _ = c.get_intermediate_items().map((m) => (console.log("intermediate", m.id), m)).map((m) => new lu(m)).map((m) => (console.log("  ", m), m)), w = c.get_defaulted_items().map((m) => (console.log("defaulted", m.id), m)).map((m) => new vs(m)).map((m) => (console.log("  ", m), m));
            return d.concat(h).concat(_).concat(w).sort((m, A) => m.display().localeCompare(A.display()));
          }
          function u(c, d) {
            console.log("removing", d), c.remove_process(d), n("cfg_update");
          }
          return (c, d) => (N(), H("details", {
            id: "current-configuration",
            open: e.folds["current-configuration"],
            onToggle: d[0] || (d[0] = (h) => n("fold_update", h))
          }, [
            d[10] || (d[10] = P("summary", {
              class: "header"
            }, "Current Configuration", -1)),
            P("div", Iu, [
              d[2] || (d[2] = P("h3", null, "Data Set", -1)),
              d[3] || (d[3] = P("hr", null, null, -1)),
              P("span", null, Me(e.cfg.get_current_data_set() ? e.cfg.get_current_data_set().description() : ""), 1),
              d[4] || (d[4] = P("br", null, null, -1)),
              d[5] || (d[5] = P("br", null, null, -1)),
              d[6] || (d[6] = P("h3", null, "Items", -1)),
              P("div", Nu, [
                a(e.cfg).length > 0 ? (N(), H("hr", Du)) : ot("", true),
                (N(true), H(ie, null, At(a(e.cfg), (h) => (N(), Be(pu, {
                  onCfg_update: o,
                  onUse_item: l,
                  onMake_item: r,
                  stack: h,
                  cfg: e.cfg
                }, null, 8, [
                  "stack",
                  "cfg"
                ]))), 256))
              ]),
              d[7] || (d[7] = P("br", null, null, -1)),
              d[8] || (d[8] = P("br", null, null, -1)),
              d[9] || (d[9] = P("h3", null, "Processes", -1)),
              e.cfg.get_processes().length > 0 ? (N(), H("div", Lu, [
                d[1] || (d[1] = xc('<hr class="proc_fw" data-v-8c8954f8><div class="proc_header_d" data-v-8c8954f8>Duration</div><div class="proc_header_i" data-v-8c8954f8>Inputs</div><div class="proc_header_o" data-v-8c8954f8>Outputs</div><hr class="proc_fw" data-v-8c8954f8>', 5)),
                (N(true), H(ie, null, At(e.cfg.get_processes(), (h) => (N(), Be(el, {
                  onModifier_update: i,
                  onFold_update: s,
                  active_proc: h,
                  cfg: e.cfg,
                  folds: e.folds,
                  id_prefix: "search"
                }, {
                  action_button: at(() => [
                    P("button", {
                      onClick: (_) => u(e.cfg, h.process.id)
                    }, "Remove", 8, ku)
                  ]),
                  _: 2
                }, 1032, [
                  "active_proc",
                  "cfg",
                  "folds"
                ]))), 256))
              ])) : ot("", true)
            ])
          ], 40, Mu));
        }
      }, Fu = Io(Hu, [
        [
          "__scopeId",
          "data-v-8c8954f8"
        ]
      ]), zu = "/assets/proc_rs_bg-DY7iq2wG.wasm", Bu = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const o = t.replace(/^data:.*?base64,/, "");
          let i;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") i = Buffer.from(o, "base64");
          else if (typeof atob == "function") {
            const s = atob(o);
            i = new Uint8Array(s.length);
            for (let r = 0; r < s.length; r++) i[r] = s.charCodeAt(r);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(i, e);
        } else {
          const o = await fetch(t), i = o.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(o, e);
          else {
            const s = await o.arrayBuffer();
            n = await WebAssembly.instantiate(s, e);
          }
        }
        return n.instance.exports;
      };
      let x;
      function ju(e) {
        x = e;
      }
      function zn(e) {
        const t = x.__externref_table_alloc();
        return x.__wbindgen_export_2.set(t, e), t;
      }
      function No(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          const o = zn(n);
          x.__wbindgen_exn_store(o);
        }
      }
      const qu = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let tl = new qu("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      tl.decode();
      let Wn = null;
      function eo() {
        return (Wn === null || Wn.byteLength === 0) && (Wn = new Uint8Array(x.memory.buffer)), Wn;
      }
      function Mt(e, t) {
        return e = e >>> 0, tl.decode(eo().subarray(e, e + t));
      }
      function Bn(e) {
        return e == null;
      }
      const bs = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => {
        x.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
      });
      function Vu(e, t, n, o) {
        const i = {
          a: e,
          b: t,
          cnt: 1,
          dtor: n
        }, s = (...r) => {
          i.cnt++;
          const l = i.a;
          i.a = 0;
          try {
            return o(l, i.b, ...r);
          } finally {
            --i.cnt === 0 ? (x.__wbindgen_export_3.get(i.dtor)(l, i.b), bs.unregister(i)) : i.a = l;
          }
        };
        return s.original = i, bs.register(s, i, i), s;
      }
      function ui(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
          const i = e.description;
          return i == null ? "Symbol" : `Symbol(${i})`;
        }
        if (t == "function") {
          const i = e.name;
          return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
        }
        if (Array.isArray(e)) {
          const i = e.length;
          let s = "[";
          i > 0 && (s += ui(e[0]));
          for (let r = 1; r < i; r++) s += ", " + ui(e[r]);
          return s += "]", s;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let o;
        if (n && n.length > 1) o = n[1];
        else return toString.call(e);
        if (o == "Object") try {
          return "Object(" + JSON.stringify(e) + ")";
        } catch {
          return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : o;
      }
      let fe = 0;
      const Uu = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let to = new Uu("utf-8");
      const Wu = typeof to.encodeInto == "function" ? function(e, t) {
        return to.encodeInto(e, t);
      } : function(e, t) {
        const n = to.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function _e(e, t, n) {
        if (n === void 0) {
          const l = to.encode(e), a = t(l.length, 1) >>> 0;
          return eo().subarray(a, a + l.length).set(l), fe = l.length, a;
        }
        let o = e.length, i = t(o, 1) >>> 0;
        const s = eo();
        let r = 0;
        for (; r < o; r++) {
          const l = e.charCodeAt(r);
          if (l > 127) break;
          s[i + r] = l;
        }
        if (r !== o) {
          r !== 0 && (e = e.slice(r)), i = n(i, o, o = r + e.length * 3, 1) >>> 0;
          const l = eo().subarray(i + r, i + o), a = Wu(e, l);
          r += a.written, i = n(i, o, r, 1) >>> 0;
        }
        return fe = r, i;
      }
      let Ut = null;
      function On() {
        return (Ut === null || Ut.buffer.detached === true || Ut.buffer.detached === void 0 && Ut.buffer !== x.memory.buffer) && (Ut = new DataView(x.memory.buffer)), Ut;
      }
      function j(e) {
        const t = x.__wbindgen_export_2.get(e);
        return x.__externref_table_dealloc(e), t;
      }
      function Ku(e, t) {
        e = e >>> 0;
        const n = On(), o = [];
        for (let i = e; i < e + 4 * t; i += 4) o.push(x.__wbindgen_export_2.get(n.getUint32(i, true)));
        return x.__externref_drop_slice(e, t), o;
      }
      function Gu() {
        const e = x.dataset_all();
        var t = Ku(e[0], e[1]).slice();
        return x.__wbindgen_free(e[0], e[1] * 4, 4), t;
      }
      function Yu(e, t, n) {
        x.closure761_externref_shim(e, t, n);
      }
      function Xu(e, t, n, o) {
        x.closure773_externref_shim(e, t, n, o);
      }
      const Ju = [
        "same-origin",
        "no-cors",
        "cors",
        "navigate"
      ], ys = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => x.__wbg_datasetconf_free(e >>> 0, 1));
      class Do {
        static __wrap(t) {
          t = t >>> 0;
          const n = Object.create(Do.prototype);
          return n.__wbg_ptr = t, ys.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, ys.unregister(this), t;
        }
        free() {
          const t = this.__destroy_into_raw();
          x.__wbg_datasetconf_free(t, 0);
        }
        get style() {
          return x.__wbg_get_datasetconf_style(this.__wbg_ptr);
        }
        set style(t) {
          x.__wbg_set_datasetconf_style(this.__wbg_ptr, t);
        }
        id() {
          let t, n;
          try {
            const o = x.datasetconf_id(this.__wbg_ptr);
            return t = o[0], n = o[1], Mt(o[0], o[1]);
          } finally {
            x.__wbindgen_free(t, n, 1);
          }
        }
        description() {
          let t, n;
          try {
            const o = x.datasetconf_description(this.__wbg_ptr);
            return t = o[0], n = o[1], Mt(o[0], o[1]);
          } finally {
            x.__wbindgen_free(t, n, 1);
          }
        }
      }
      const xs = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => x.__wbg_graphconfiguration_free(e >>> 0, 1));
      class Qu {
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, xs.unregister(this), t;
        }
        free() {
          const t = this.__destroy_into_raw();
          x.__wbg_graphconfiguration_free(t, 0);
        }
        constructor() {
          const t = x.graphconfiguration_new();
          return this.__wbg_ptr = t >>> 0, xs.register(this, this.__wbg_ptr, this), this;
        }
        dehydrate() {
          const t = x.graphconfiguration_dehydrate(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        reset() {
          const t = x.graphconfiguration_reset(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        rehydrate(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe;
          return x.graphconfiguration_rehydrate(this.__wbg_ptr, n, o);
        }
        get_current_data_set() {
          const t = x.graphconfiguration_get_current_data_set(this.__wbg_ptr);
          return t === 0 ? void 0 : Do.__wrap(t);
        }
        can_render() {
          const t = x.graphconfiguration_can_render(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        add_requirement(t, n) {
          const o = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), i = fe, s = x.graphconfiguration_add_requirement(this.__wbg_ptr, o, i, n);
          if (s[2]) throw j(s[1]);
          return j(s[0]);
        }
        update_requirement(t, n) {
          const o = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), i = fe, s = x.graphconfiguration_update_requirement(this.__wbg_ptr, o, i, n);
          if (s[2]) throw j(s[1]);
          return j(s[0]);
        }
        remove_requirement(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_remove_requirement(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        get_requirements() {
          const t = x.graphconfiguration_get_requirements(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        add_import_export(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_add_import_export(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        remove_import_export(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_remove_import_export(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        get_imports_exports() {
          const t = x.graphconfiguration_get_imports_exports(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        add_process(t, n, o, i, s) {
          const r = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), l = fe, a = _e(n, x.__wbindgen_malloc, x.__wbindgen_realloc), u = fe, c = x.graphconfiguration_add_process(this.__wbg_ptr, r, l, a, u, o, i, s);
          if (c[2]) throw j(c[1]);
          return j(c[0]);
        }
        remove_process(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_remove_process(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        update_modifiers(t, n, o, i, s) {
          const r = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), l = fe, a = _e(n, x.__wbindgen_malloc, x.__wbindgen_realloc), u = fe, c = x.graphconfiguration_update_modifiers(this.__wbg_ptr, r, l, a, u, o, i, s);
          if (c[2]) throw j(c[1]);
          return j(c[0]);
        }
        get_processes() {
          const t = x.graphconfiguration_get_processes(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        factories_for_process(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_factories_for_process(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        get_defaulted_items() {
          const t = x.graphconfiguration_get_defaulted_items(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        get_intermediate_items() {
          const t = x.graphconfiguration_get_intermediate_items(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        update_data_set(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe;
          return x.graphconfiguration_update_data_set(this.__wbg_ptr, n, o);
        }
        search_items(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_search_items(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        search_processes(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_search_processes(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        search_processes_by_output(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_search_processes_by_output(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        search_processes_by_input(t) {
          const n = _e(t, x.__wbindgen_malloc, x.__wbindgen_realloc), o = fe, i = x.graphconfiguration_search_processes_by_input(this.__wbg_ptr, n, o);
          if (i[2]) throw j(i[1]);
          return j(i[0]);
        }
        calculate() {
          x.graphconfiguration_calculate(this.__wbg_ptr);
        }
        to_digraph() {
          const t = x.graphconfiguration_to_digraph(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        get_initial_matrix() {
          const t = x.graphconfiguration_get_initial_matrix(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
        get_reduced_matrix() {
          const t = x.graphconfiguration_get_reduced_matrix(this.__wbg_ptr);
          if (t[2]) throw j(t[1]);
          return j(t[0]);
        }
      }
      typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => x.__wbg_versioned_free(e >>> 0, 1));
      function Zu() {
        return No(function(e, t) {
          return e.call(t);
        }, arguments);
      }
      function ef() {
        return No(function(e, t, n) {
          return e.call(t, n);
        }, arguments);
      }
      function tf(e) {
        return Do.__wrap(e);
      }
      function nf(e, t) {
        return e.fetch(t);
      }
      function of(e) {
        let t;
        try {
          t = e instanceof Response;
        } catch {
          t = false;
        }
        return t;
      }
      function sf(e) {
        let t;
        try {
          t = e instanceof Window;
        } catch {
          t = false;
        }
        return t;
      }
      function rf(e, t) {
        console.log(Mt(e, t));
      }
      function lf(e, t) {
        try {
          var n = {
            a: e,
            b: t
          }, o = (s, r) => {
            const l = n.a;
            n.a = 0;
            try {
              return Xu(l, n.b, s, r);
            } finally {
              n.a = l;
            }
          };
          return new Promise(o);
        } finally {
          n.a = n.b = 0;
        }
      }
      function af() {
        return new Object();
      }
      function cf() {
        return new Array();
      }
      function uf(e, t) {
        return new Function(Mt(e, t));
      }
      function ff() {
        return No(function(e, t, n) {
          return new Request(Mt(e, t), n);
        }, arguments);
      }
      function df(e) {
        queueMicrotask(e);
      }
      function pf(e) {
        return e.queueMicrotask;
      }
      function hf(e) {
        return Promise.resolve(e);
      }
      function _f(e, t, n) {
        e[t >>> 0] = n;
      }
      function gf(e, t, n) {
        e[t] = n;
      }
      function mf(e, t, n) {
        e.method = Mt(t, n);
      }
      function wf(e, t) {
        e.mode = Ju[t];
      }
      function vf() {
        const e = typeof global > "u" ? null : global;
        return Bn(e) ? 0 : zn(e);
      }
      function bf() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return Bn(e) ? 0 : zn(e);
      }
      function yf() {
        const e = typeof self > "u" ? null : self;
        return Bn(e) ? 0 : zn(e);
      }
      function xf() {
        const e = typeof window > "u" ? null : window;
        return Bn(e) ? 0 : zn(e);
      }
      function Sf() {
        return No(function(e) {
          return e.text();
        }, arguments);
      }
      function $f(e, t) {
        return e.then(t);
      }
      function Tf(e, t, n) {
        return e.then(t, n);
      }
      function Cf(e) {
        return BigInt.asUintN(64, e);
      }
      function Pf(e) {
        const t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, true) : false;
      }
      function Af(e, t, n) {
        return Vu(e, t, 762, Yu);
      }
      function Ef(e, t) {
        const n = ui(t), o = _e(n, x.__wbindgen_malloc, x.__wbindgen_realloc), i = fe;
        On().setInt32(e + 4 * 1, i, true), On().setInt32(e + 4 * 0, o, true);
      }
      function Of() {
        const e = x.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
      }
      function Rf(e) {
        return typeof e == "function";
      }
      function Mf(e) {
        return e === void 0;
      }
      function If(e) {
        return e;
      }
      function Nf(e, t) {
        const n = t, o = typeof n == "string" ? n : void 0;
        var i = Bn(o) ? 0 : _e(o, x.__wbindgen_malloc, x.__wbindgen_realloc), s = fe;
        On().setInt32(e + 4 * 1, s, true), On().setInt32(e + 4 * 0, i, true);
      }
      function Df(e, t) {
        return Mt(e, t);
      }
      function Lf(e, t) {
        throw new Error(Mt(e, t));
      }
      URL = globalThis.URL;
      const F = await Bu({
        "./proc_rs_bg.js": {
          __wbg_log_c235e79815fc436a: rf,
          __wbindgen_string_new: Df,
          __wbindgen_number_new: If,
          __wbg_datasetconf_new: tf,
          __wbindgen_string_get: Nf,
          __wbindgen_bigint_from_u64: Cf,
          __wbg_set_3f1d0b984ed272ed: gf,
          __wbg_instanceof_Window_def73ea0955fc569: sf,
          __wbg_fetch_b7bf320f681242d2: nf,
          __wbg_setmethod_3c5280fe5d890842: mf,
          __wbg_setmode_5dc300b865044b65: wf,
          __wbg_newwithstrandinit_06c535e0a867c635: ff,
          __wbg_instanceof_Response_f2cc20d9f7dfd644: of,
          __wbg_text_7805bea50de2af49: Sf,
          __wbg_queueMicrotask_97d92b4fcc8a61c5: df,
          __wbg_queueMicrotask_d3219def82552485: pf,
          __wbindgen_is_function: Rf,
          __wbindgen_cb_drop: Pf,
          __wbg_new_78feb108b6472713: cf,
          __wbg_newnoargs_105ed471475aaf50: uf,
          __wbg_call_672a4d21634d4a24: Zu,
          __wbg_new_405e22f390576ce2: af,
          __wbindgen_is_undefined: Mf,
          __wbg_set_37837023f3d740e8: _f,
          __wbg_call_7cccdd69e0791ae2: ef,
          __wbg_new_23a2665fac83c611: lf,
          __wbg_resolve_4851785c9c5f573d: hf,
          __wbg_then_44b73946d2fb3e7d: $f,
          __wbg_then_48b406749878a531: Tf,
          __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: bf,
          __wbg_static_accessor_SELF_37c5d418e4bf5819: yf,
          __wbg_static_accessor_WINDOW_5de37043a91a9c40: xf,
          __wbg_static_accessor_GLOBAL_88a902d13a557d07: vf,
          __wbindgen_debug_string: Ef,
          __wbindgen_throw: Lf,
          __wbindgen_closure_wrapper3221: Af,
          __wbindgen_init_externref_table: Of
        }
      }, zu), kf = F.memory, Hf = F.stuff, Ff = F.dataset_all, zf = F.__wbg_graphconfiguration_free, Bf = F.graphconfiguration_new, jf = F.graphconfiguration_dehydrate, qf = F.graphconfiguration_reset, Vf = F.graphconfiguration_rehydrate, Uf = F.graphconfiguration_get_current_data_set, Wf = F.graphconfiguration_can_render, Kf = F.graphconfiguration_add_requirement, Gf = F.graphconfiguration_update_requirement, Yf = F.graphconfiguration_remove_requirement, Xf = F.graphconfiguration_get_requirements, Jf = F.graphconfiguration_add_import_export, Qf = F.graphconfiguration_remove_import_export, Zf = F.graphconfiguration_get_imports_exports, ed = F.graphconfiguration_add_process, td = F.graphconfiguration_remove_process, nd = F.graphconfiguration_update_modifiers, od = F.graphconfiguration_get_processes, id = F.graphconfiguration_factories_for_process, sd = F.graphconfiguration_get_defaulted_items, rd = F.graphconfiguration_get_intermediate_items, ld = F.graphconfiguration_update_data_set, ad = F.graphconfiguration_search_items, cd = F.graphconfiguration_search_processes, ud = F.graphconfiguration_search_processes_by_output, fd = F.graphconfiguration_search_processes_by_input, dd = F.graphconfiguration_calculate, pd = F.graphconfiguration_to_digraph, hd = F.graphconfiguration_get_initial_matrix, _d = F.graphconfiguration_get_reduced_matrix, gd = F.__wbg_datasetconf_free, md = F.__wbg_get_datasetconf_style, wd = F.__wbg_set_datasetconf_style, vd = F.datasetconf_id, bd = F.datasetconf_description, yd = F.__wbg_versioned_free, xd = F.__wbindgen_exn_store, Sd = F.__externref_table_alloc, $d = F.__wbindgen_export_2, Td = F.__wbindgen_export_3, Cd = F.__wbindgen_malloc, Pd = F.__wbindgen_realloc, Ad = F.__externref_table_dealloc, Ed = F.__externref_drop_slice, Od = F.__wbindgen_free, Rd = F.closure761_externref_shim, Md = F.closure773_externref_shim, nl = F.__wbindgen_start, Id = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_drop_slice: Ed,
        __externref_table_alloc: Sd,
        __externref_table_dealloc: Ad,
        __wbg_datasetconf_free: gd,
        __wbg_get_datasetconf_style: md,
        __wbg_graphconfiguration_free: zf,
        __wbg_set_datasetconf_style: wd,
        __wbg_versioned_free: yd,
        __wbindgen_exn_store: xd,
        __wbindgen_export_2: $d,
        __wbindgen_export_3: Td,
        __wbindgen_free: Od,
        __wbindgen_malloc: Cd,
        __wbindgen_realloc: Pd,
        __wbindgen_start: nl,
        closure761_externref_shim: Rd,
        closure773_externref_shim: Md,
        dataset_all: Ff,
        datasetconf_description: bd,
        datasetconf_id: vd,
        graphconfiguration_add_import_export: Jf,
        graphconfiguration_add_process: ed,
        graphconfiguration_add_requirement: Kf,
        graphconfiguration_calculate: dd,
        graphconfiguration_can_render: Wf,
        graphconfiguration_dehydrate: jf,
        graphconfiguration_factories_for_process: id,
        graphconfiguration_get_current_data_set: Uf,
        graphconfiguration_get_defaulted_items: sd,
        graphconfiguration_get_imports_exports: Zf,
        graphconfiguration_get_initial_matrix: hd,
        graphconfiguration_get_intermediate_items: rd,
        graphconfiguration_get_processes: od,
        graphconfiguration_get_reduced_matrix: _d,
        graphconfiguration_get_requirements: Xf,
        graphconfiguration_new: Bf,
        graphconfiguration_rehydrate: Vf,
        graphconfiguration_remove_import_export: Qf,
        graphconfiguration_remove_process: td,
        graphconfiguration_remove_requirement: Yf,
        graphconfiguration_reset: qf,
        graphconfiguration_search_items: ad,
        graphconfiguration_search_processes: cd,
        graphconfiguration_search_processes_by_input: fd,
        graphconfiguration_search_processes_by_output: ud,
        graphconfiguration_to_digraph: pd,
        graphconfiguration_update_data_set: ld,
        graphconfiguration_update_modifiers: nd,
        graphconfiguration_update_requirement: Gf,
        memory: kf,
        stuff: Hf
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      ju(Id);
      nl();
      const Nd = [
        "open"
      ], Dd = {
        class: "input_options"
      }, Ld = [
        "value"
      ], kd = [
        "disabled"
      ], Hd = [
        "disabled"
      ], Fd = [
        "open"
      ], zd = {
        class: "input_options"
      }, Bd = {
        class: "search_results"
      }, jd = {
        class: "proc"
      }, qd = {
        key: 0,
        class: "proc_fw"
      }, Vd = {
        key: 1,
        class: "proc_header_d"
      }, Ud = {
        key: 2,
        class: "proc_header_i"
      }, Wd = {
        key: 3,
        class: "proc_header_o"
      }, Kd = {
        key: 4,
        class: "proc_fw"
      }, Gd = [
        "onClick"
      ], Yd = {
        __name: "Configure",
        props: [
          "cfg",
          "cfg_fu",
          "folds"
        ],
        emits: [
          "cfg_update",
          "fold_update"
        ],
        setup(e, { emit: t }) {
          const n = t, o = e, { _0: i, cfg_fu: s } = _r(o), { cfg: r, _1: l, folds: a } = o;
          let u = Gu();
          console.log("available data", u);
          const c = ue("");
          He(c, (y) => {
            console.log("Updating config with", y), r.update_data_set(y);
          });
          const d = ue(""), h = ue([]);
          He(d, (y) => {
            console.log("Item search for", y), y.length >= 3 && (h.value = r.search_items(y), console.log("search results items", h));
          });
          const _ = ue(""), w = ue([]);
          He(_, (y) => {
            console.log("Process search for", y), y.length >= 3 && (w.value = r.search_processes(y), console.log("search results processes", w));
          }), He(h, (y) => {
            console.log("item results changed", y), (w.value.length > 0 || y.length > 0) && n("fold_update", "search-results", true);
          }), He(w, (y) => {
            console.log("proc results changed", y), (h.value.length > 0 || y.length > 0) && n("fold_update", "search-results", true);
          });
          function v() {
            console.log("C handle_cfg_update"), _.value = "", w.value = [], d.value = "", h.value = [], n("cfg_update");
          }
          function m(y) {
            console.log("C handle make item", y), w.value = r.search_processes_by_output(y);
          }
          function A(y) {
            console.log("C handle use item", y), w.value = r.search_processes_by_input(y);
          }
          function C(y, R, J, z) {
            console.log("adding process", R, z, y), _.value = "", w.value = [];
            let q = y.add_process(R, J, z.duration, z.input, z.output);
            console.log("add process result", q, y, y.get_processes()), n("fold_update", "search-results", false), n("cfg_update");
          }
          function D(y, R) {
            n("fold_update", y, R);
          }
          return (y, R) => {
            const J = Eo("tooltip");
            return N(), H(ie, null, [
              P("details", {
                id: "get-started",
                open: Ce(a)["get-started"],
                onToggle: R[3] || (R[3] = (z) => n("fold_update", z, null))
              }, [
                R[9] || (R[9] = P("summary", {
                  class: "header"
                }, "Get Started", -1)),
                P("div", Dd, [
                  Q((N(), H("div", null, R[5] || (R[5] = [
                    P("label", {
                      for: "selectDataSet"
                    }, "Data Set:", -1)
                  ]))), [
                    [
                      J,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  Q((N(), H("div", null, [
                    Q(P("select", {
                      "onUpdate:modelValue": R[0] || (R[0] = (z) => c.value = z)
                    }, [
                      R[6] || (R[6] = P("option", {
                        disabled: "",
                        value: ""
                      }, "Select a data set", -1)),
                      (N(true), H(ie, null, At(Ce(u), (z) => (N(), H("option", {
                        value: z.id()
                      }, Me(z.description()), 9, Ld))), 256))
                    ], 512), [
                      [
                        Jr,
                        c.value
                      ]
                    ])
                  ])), [
                    [
                      J,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  Q((N(), H("div", null, R[7] || (R[7] = [
                    P("label", {
                      for: "item_search"
                    }, " Item Search:", -1)
                  ]))), [
                    [
                      J,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  Q((N(), H("div", null, [
                    Q(P("input", {
                      id: "item_search",
                      type: "text",
                      disabled: c.value == "",
                      "onUpdate:modelValue": R[1] || (R[1] = (z) => d.value = z)
                    }, null, 8, kd), [
                      [
                        ho,
                        d.value
                      ]
                    ])
                  ])), [
                    [
                      J,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  Q((N(), H("div", null, R[8] || (R[8] = [
                    P("label", {
                      for: "process_search"
                    }, " Process Search:", -1)
                  ]))), [
                    [
                      J,
                      "Start by looking for a process that you want to use"
                    ]
                  ]),
                  Q((N(), H("div", null, [
                    Q(P("input", {
                      id: "process_search",
                      type: "text",
                      disabled: c.value == "",
                      "onUpdate:modelValue": R[2] || (R[2] = (z) => _.value = z)
                    }, null, 8, Hd), [
                      [
                        ho,
                        _.value
                      ]
                    ])
                  ])), [
                    [
                      J,
                      "Start by looking for a process that you want to use"
                    ]
                  ])
                ])
              ], 40, Nd),
              P("details", {
                open: Ce(a)["search-results"],
                onToggle: R[4] || (R[4] = (z) => n("fold_update", "search-results"))
              }, [
                R[10] || (R[10] = P("summary", {
                  class: "header"
                }, "Search Results", -1)),
                P("div", zd, [
                  (N(true), H(ie, null, At(h.value, (z) => (N(), Be(su, {
                    onCfg_update: v,
                    item: z,
                    cfg: Ce(r)
                  }, null, 8, [
                    "item",
                    "cfg"
                  ]))), 256)),
                  P("div", Bd, [
                    P("div", jd, [
                      w.value.length > 0 ? (N(), H("hr", qd)) : ot("", true),
                      w.value.length > 0 ? (N(), H("div", Vd, "Duration")) : ot("", true),
                      w.value.length > 0 ? (N(), H("div", Ud, "Inputs")) : ot("", true),
                      w.value.length > 0 ? (N(), H("div", Wd, "Outputs")) : ot("", true),
                      w.value.length > 0 ? (N(), H("hr", Kd)) : ot("", true),
                      (N(true), H(ie, null, At(w.value, (z) => (N(), Be(el, {
                        proc: z,
                        cfg: Ce(r),
                        folds: Ce(a),
                        onFold_update: D,
                        id_prefix: "search"
                      }, {
                        action_button: at(({ factory_id: q, modifiers: ne }) => [
                          P("button", {
                            onClick: (U) => C(Ce(r), z.id, q, ne)
                          }, "Add", 8, Gd)
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
              ], 40, Fd),
              (N(), Be(Fu, {
                onCfg_update: v,
                onUse_item: A,
                onMake_item: m,
                onFold_update: D,
                key: Ce(s),
                cfg: Ce(r),
                folds: Ce(a)
              }, null, 8, [
                "cfg",
                "folds"
              ]))
            ], 64);
          };
        }
      }, Xd = Io(Yd, [
        [
          "__scopeId",
          "data-v-a91b96d0"
        ]
      ]), Jd = {
        __name: "GraphRender",
        props: [
          "cfg",
          "cfg_fu"
        ],
        setup(e) {
          const t = e, { _0: n, cfg_fu: o } = _r(t), { cfg: i, _1: s } = t;
          return He(o, (r) => {
            if (i.can_render()) {
              console.log("rendering"), i.calculate(), console.log("processes", i.get_processes()), console.log("requirements", i.get_requirements()), console.log("import/export", i.get_imports_exports()), console.log("intermediates", i.get_intermediate_items()), console.log("defaulted", i.get_defaulted_items()), console.log("initial", i.get_initial_matrix()), console.log("reduced", i.get_reduced_matrix());
              let l = i.to_digraph();
              console.log("graph", l);
              let a = Viz(l, {
                format: "svg",
                engine: "dot"
              });
              document.getElementById("vis").innerHTML = a.replaceAll(/(fill|stroke)="[^"]+" ?/g, "");
            }
          }), (r, l) => (N(), H(ie, null, [
            l[0] || (l[0] = P("div", {
              id: "vis"
            }, null, -1)),
            P("div", null, Me(Ce(o)), 1)
          ], 64));
        }
      }, Qd = {
        __name: "App",
        setup(e) {
          const t = pa(new Qu()), n = ue(0);
          if (window.location.hash) {
            let l = new URLSearchParams(window.location.hash.substring(1));
            console.log("params", l);
            var o = document.querySelector("#viz");
            o.addEventListener("load", function() {
              l.has("s0") ? t.value.rehydrate(l.get("s0")).then((a) => {
                console.log("rehydrate result", a), r("get-started", !t.value.can_render()), r("current-configuration", t.value.can_render()), n.value++;
              }) : (console.log("reset: no parameter"), t.value.reset(), n.value++);
            });
          } else console.log("reset: no fragment"), t.value.reset(), n.value++;
          function i() {
            console.log("A handle_cfg_update"), r("get-started", !t.value.can_render()), r("current-configuration", t.value.can_render());
            let l = t.value.dehydrate();
            console.log("serialised", l), l && window.location.replace("#s0=" + l), _a(t), n.value++;
          }
          const s = ue({
            "get-started": !t.value.can_render(),
            "current-configuration": t.value.can_render()
          });
          function r(l, a) {
            console.log("fold update 1", l, a, s.value, l);
            let u = null;
            l.target ? u = l.target.id : u = l, typeof a < "u" && a != null ? s.value[u] = a : s[u] = !s[u], console.log("fold update 2", u, a, s.value, l);
          }
          return (l, a) => (N(), H(ie, null, [
            a[0] || (a[0] = P("header", null, [
              P("h1", null, [
                P("a", {
                  href: "#",
                  onclick: "window.location.assign('#'); window.location.reload()"
                }, "Process Calculator")
              ])
            ], -1)),
            a[1] || (a[1] = P("br", null, null, -1)),
            P("main", null, [
              pe(Ce(iu), null, {
                "left-pane": at(() => [
                  pe(Xd, {
                    cfg: t.value,
                    cfg_fu: n.value,
                    folds: s.value,
                    onCfg_update: i,
                    onFold_update: r
                  }, null, 8, [
                    "cfg",
                    "cfg_fu",
                    "folds"
                  ])
                ]),
                "right-pane": at(() => [
                  pe(Jd, {
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
      }, Zd = Io(Qd, [
        [
          "__scopeId",
          "data-v-714265fa"
        ]
      ]), ep = [
        "top",
        "right",
        "bottom",
        "left"
      ], Ss = [
        "start",
        "end"
      ], $s = ep.reduce((e, t) => e.concat(t, t + "-" + Ss[0], t + "-" + Ss[1]), []), Rn = Math.min, zt = Math.max, tp = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      }, np = {
        start: "end",
        end: "start"
      };
      function fi(e, t, n) {
        return zt(e, Rn(t, n));
      }
      function jt(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function ct(e) {
        return e.split("-")[0];
      }
      function We(e) {
        return e.split("-")[1];
      }
      function ol(e) {
        return e === "x" ? "y" : "x";
      }
      function Di(e) {
        return e === "y" ? "height" : "width";
      }
      const op = /* @__PURE__ */ new Set([
        "top",
        "bottom"
      ]);
      function _t(e) {
        return op.has(ct(e)) ? "y" : "x";
      }
      function Li(e) {
        return ol(_t(e));
      }
      function il(e, t, n) {
        n === void 0 && (n = false);
        const o = We(e), i = Li(e), s = Di(i);
        let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
        return t.reference[s] > t.floating[s] && (r = go(r)), [
          r,
          go(r)
        ];
      }
      function ip(e) {
        const t = go(e);
        return [
          _o(e),
          t,
          _o(t)
        ];
      }
      function _o(e) {
        return e.replace(/start|end/g, (t) => np[t]);
      }
      const Ts = [
        "left",
        "right"
      ], Cs = [
        "right",
        "left"
      ], sp = [
        "top",
        "bottom"
      ], rp = [
        "bottom",
        "top"
      ];
      function lp(e, t, n) {
        switch (e) {
          case "top":
          case "bottom":
            return n ? t ? Cs : Ts : t ? Ts : Cs;
          case "left":
          case "right":
            return t ? sp : rp;
          default:
            return [];
        }
      }
      function ap(e, t, n, o) {
        const i = We(e);
        let s = lp(ct(e), n === "start", o);
        return i && (s = s.map((r) => r + "-" + i), t && (s = s.concat(s.map(_o)))), s;
      }
      function go(e) {
        return e.replace(/left|right|bottom|top/g, (t) => tp[t]);
      }
      function cp(e) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...e
        };
      }
      function sl(e) {
        return typeof e != "number" ? cp(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        };
      }
      function wn(e) {
        const { x: t, y: n, width: o, height: i } = e;
        return {
          width: o,
          height: i,
          top: n,
          left: t,
          right: t + o,
          bottom: n + i,
          x: t,
          y: n
        };
      }
      function Ps(e, t, n) {
        let { reference: o, floating: i } = e;
        const s = _t(t), r = Li(t), l = Di(r), a = ct(t), u = s === "y", c = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, h = o[l] / 2 - i[l] / 2;
        let _;
        switch (a) {
          case "top":
            _ = {
              x: c,
              y: o.y - i.height
            };
            break;
          case "bottom":
            _ = {
              x: c,
              y: o.y + o.height
            };
            break;
          case "right":
            _ = {
              x: o.x + o.width,
              y: d
            };
            break;
          case "left":
            _ = {
              x: o.x - i.width,
              y: d
            };
            break;
          default:
            _ = {
              x: o.x,
              y: o.y
            };
        }
        switch (We(t)) {
          case "start":
            _[r] -= h * (n && u ? -1 : 1);
            break;
          case "end":
            _[r] += h * (n && u ? -1 : 1);
            break;
        }
        return _;
      }
      const up = async (e, t, n) => {
        const { placement: o = "bottom", strategy: i = "absolute", middleware: s = [], platform: r } = n, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(t));
        let u = await r.getElementRects({
          reference: e,
          floating: t,
          strategy: i
        }), { x: c, y: d } = Ps(u, o, a), h = o, _ = {}, w = 0;
        for (let v = 0; v < l.length; v++) {
          const { name: m, fn: A } = l[v], { x: C, y: D, data: y, reset: R } = await A({
            x: c,
            y: d,
            initialPlacement: o,
            placement: h,
            strategy: i,
            middlewareData: _,
            rects: u,
            platform: r,
            elements: {
              reference: e,
              floating: t
            }
          });
          c = C ?? c, d = D ?? d, _ = {
            ..._,
            [m]: {
              ..._[m],
              ...y
            }
          }, R && w <= 50 && (w++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (u = R.rects === true ? await r.getElementRects({
            reference: e,
            floating: t,
            strategy: i
          }) : R.rects), { x: c, y: d } = Ps(u, h, a)), v = -1);
        }
        return {
          x: c,
          y: d,
          placement: h,
          strategy: i,
          middlewareData: _
        };
      };
      async function Lo(e, t) {
        var n;
        t === void 0 && (t = {});
        const { x: o, y: i, platform: s, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: h = false, padding: _ = 0 } = jt(t, e), w = sl(_), m = l[h ? d === "floating" ? "reference" : "floating" : d], A = wn(await s.getClippingRect({
          element: (n = await (s.isElement == null ? void 0 : s.isElement(m))) == null || n ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: a
        })), C = d === "floating" ? {
          x: o,
          y: i,
          width: r.floating.width,
          height: r.floating.height
        } : r.reference, D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), y = await (s.isElement == null ? void 0 : s.isElement(D)) ? await (s.getScale == null ? void 0 : s.getScale(D)) || {
          x: 1,
          y: 1
        } : {
          x: 1,
          y: 1
        }, R = wn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: C,
          offsetParent: D,
          strategy: a
        }) : C);
        return {
          top: (A.top - R.top + w.top) / y.y,
          bottom: (R.bottom - A.bottom + w.bottom) / y.y,
          left: (A.left - R.left + w.left) / y.x,
          right: (R.right - A.right + w.right) / y.x
        };
      }
      const fp = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: i, rects: s, platform: r, elements: l, middlewareData: a } = t, { element: u, padding: c = 0 } = jt(e, t) || {};
          if (u == null) return {};
          const d = sl(c), h = {
            x: n,
            y: o
          }, _ = Li(i), w = Di(_), v = await r.getDimensions(u), m = _ === "y", A = m ? "top" : "left", C = m ? "bottom" : "right", D = m ? "clientHeight" : "clientWidth", y = s.reference[w] + s.reference[_] - h[_] - s.floating[w], R = h[_] - s.reference[_], J = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
          let z = J ? J[D] : 0;
          (!z || !await (r.isElement == null ? void 0 : r.isElement(J))) && (z = l.floating[D] || s.floating[w]);
          const q = y / 2 - R / 2, ne = z / 2 - v[w] / 2 - 1, U = Rn(d[A], ne), se = Rn(d[C], ne), ge = U, $e = z - v[w] - se, he = z / 2 - v[w] / 2 + q, Ye = fi(ge, he, $e), ce = !a.arrow && We(i) != null && he !== Ye && s.reference[w] / 2 - (he < ge ? U : se) - v[w] / 2 < 0, G = ce ? he < ge ? he - ge : he - $e : 0;
          return {
            [_]: h[_] + G,
            data: {
              [_]: Ye,
              centerOffset: he - Ye - G,
              ...ce && {
                alignmentOffset: G
              }
            },
            reset: ce
          };
        }
      });
      function dp(e, t, n) {
        return (e ? [
          ...n.filter((i) => We(i) === e),
          ...n.filter((i) => We(i) !== e)
        ] : n.filter((i) => ct(i) === i)).filter((i) => e ? We(i) === e || (t ? _o(i) !== i : false) : true);
      }
      const pp = function(e) {
        return e === void 0 && (e = {}), {
          name: "autoPlacement",
          options: e,
          async fn(t) {
            var n, o, i;
            const { rects: s, middlewareData: r, placement: l, platform: a, elements: u } = t, { crossAxis: c = false, alignment: d, allowedPlacements: h = $s, autoAlignment: _ = true, ...w } = jt(e, t), v = d !== void 0 || h === $s ? dp(d || null, _, h) : h, m = await Lo(t, w), A = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, C = v[A];
            if (C == null) return {};
            const D = il(C, s, await (a.isRTL == null ? void 0 : a.isRTL(u.floating)));
            if (l !== C) return {
              reset: {
                placement: v[0]
              }
            };
            const y = [
              m[ct(C)],
              m[D[0]],
              m[D[1]]
            ], R = [
              ...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [],
              {
                placement: C,
                overflows: y
              }
            ], J = v[A + 1];
            if (J) return {
              data: {
                index: A + 1,
                overflows: R
              },
              reset: {
                placement: J
              }
            };
            const z = R.map((U) => {
              const se = We(U.placement);
              return [
                U.placement,
                se && c ? U.overflows.slice(0, 2).reduce((ge, $e) => ge + $e, 0) : U.overflows[0],
                U.overflows
              ];
            }).sort((U, se) => U[1] - se[1]), ne = ((i = z.filter((U) => U[2].slice(0, We(U[0]) ? 2 : 3).every((se) => se <= 0))[0]) == null ? void 0 : i[0]) || z[0][0];
            return ne !== l ? {
              data: {
                index: A + 1,
                overflows: R
              },
              reset: {
                placement: ne
              }
            } : {};
          }
        };
      }, hp = function(e) {
        return e === void 0 && (e = {}), {
          name: "flip",
          options: e,
          async fn(t) {
            var n, o;
            const { placement: i, middlewareData: s, rects: r, initialPlacement: l, platform: a, elements: u } = t, { mainAxis: c = true, crossAxis: d = true, fallbackPlacements: h, fallbackStrategy: _ = "bestFit", fallbackAxisSideDirection: w = "none", flipAlignment: v = true, ...m } = jt(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const A = ct(i), C = _t(l), D = ct(l) === l, y = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), R = h || (D || !v ? [
              go(l)
            ] : ip(l)), J = w !== "none";
            !h && J && R.push(...ap(l, v, w, y));
            const z = [
              l,
              ...R
            ], q = await Lo(t, m), ne = [];
            let U = ((o = s.flip) == null ? void 0 : o.overflows) || [];
            if (c && ne.push(q[A]), d) {
              const he = il(i, r, y);
              ne.push(q[he[0]], q[he[1]]);
            }
            if (U = [
              ...U,
              {
                placement: i,
                overflows: ne
              }
            ], !ne.every((he) => he <= 0)) {
              var se, ge;
              const he = (((se = s.flip) == null ? void 0 : se.index) || 0) + 1, Ye = z[he];
              if (Ye && (!(d === "alignment" ? C !== _t(Ye) : false) || U.every((K) => _t(K.placement) === C ? K.overflows[0] > 0 : true))) return {
                data: {
                  index: he,
                  overflows: U
                },
                reset: {
                  placement: Ye
                }
              };
              let ce = (ge = U.filter((G) => G.overflows[0] <= 0).sort((G, K) => G.overflows[1] - K.overflows[1])[0]) == null ? void 0 : ge.placement;
              if (!ce) switch (_) {
                case "bestFit": {
                  var $e;
                  const G = ($e = U.filter((K) => {
                    if (J) {
                      const be = _t(K.placement);
                      return be === C || be === "y";
                    }
                    return true;
                  }).map((K) => [
                    K.placement,
                    K.overflows.filter((be) => be > 0).reduce((be, qt) => be + qt, 0)
                  ]).sort((K, be) => K[1] - be[1])[0]) == null ? void 0 : $e[0];
                  G && (ce = G);
                  break;
                }
                case "initialPlacement":
                  ce = l;
                  break;
              }
              if (i !== ce) return {
                reset: {
                  placement: ce
                }
              };
            }
            return {};
          }
        };
      }, _p = /* @__PURE__ */ new Set([
        "left",
        "top"
      ]);
      async function gp(e, t) {
        const { placement: n, platform: o, elements: i } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = ct(n), l = We(n), a = _t(n) === "y", u = _p.has(r) ? -1 : 1, c = s && a ? -1 : 1, d = jt(t, e);
        let { mainAxis: h, crossAxis: _, alignmentAxis: w } = typeof d == "number" ? {
          mainAxis: d,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis
        };
        return l && typeof w == "number" && (_ = l === "end" ? w * -1 : w), a ? {
          x: _ * c,
          y: h * u
        } : {
          x: h * u,
          y: _ * c
        };
      }
      const mp = function(e) {
        return e === void 0 && (e = 0), {
          name: "offset",
          options: e,
          async fn(t) {
            var n, o;
            const { x: i, y: s, placement: r, middlewareData: l } = t, a = await gp(t, e);
            return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
              x: i + a.x,
              y: s + a.y,
              data: {
                ...a,
                placement: r
              }
            };
          }
        };
      }, wp = function(e) {
        return e === void 0 && (e = {}), {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: o, placement: i } = t, { mainAxis: s = true, crossAxis: r = false, limiter: l = {
              fn: (m) => {
                let { x: A, y: C } = m;
                return {
                  x: A,
                  y: C
                };
              }
            }, ...a } = jt(e, t), u = {
              x: n,
              y: o
            }, c = await Lo(t, a), d = _t(ct(i)), h = ol(d);
            let _ = u[h], w = u[d];
            if (s) {
              const m = h === "y" ? "top" : "left", A = h === "y" ? "bottom" : "right", C = _ + c[m], D = _ - c[A];
              _ = fi(C, _, D);
            }
            if (r) {
              const m = d === "y" ? "top" : "left", A = d === "y" ? "bottom" : "right", C = w + c[m], D = w - c[A];
              w = fi(C, w, D);
            }
            const v = l.fn({
              ...t,
              [h]: _,
              [d]: w
            });
            return {
              ...v,
              data: {
                x: v.x - n,
                y: v.y - o,
                enabled: {
                  [h]: s,
                  [d]: r
                }
              }
            };
          }
        };
      }, vp = function(e) {
        return e === void 0 && (e = {}), {
          name: "size",
          options: e,
          async fn(t) {
            var n, o;
            const { placement: i, rects: s, platform: r, elements: l } = t, { apply: a = () => {
            }, ...u } = jt(e, t), c = await Lo(t, u), d = ct(i), h = We(i), _ = _t(i) === "y", { width: w, height: v } = s.floating;
            let m, A;
            d === "top" || d === "bottom" ? (m = d, A = h === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (A = d, m = h === "end" ? "top" : "bottom");
            const C = v - c.top - c.bottom, D = w - c.left - c.right, y = Rn(v - c[m], C), R = Rn(w - c[A], D), J = !t.middlewareData.shift;
            let z = y, q = R;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (q = D), (o = t.middlewareData.shift) != null && o.enabled.y && (z = C), J && !h) {
              const U = zt(c.left, 0), se = zt(c.right, 0), ge = zt(c.top, 0), $e = zt(c.bottom, 0);
              _ ? q = w - 2 * (U !== 0 || se !== 0 ? U + se : zt(c.left, c.right)) : z = v - 2 * (ge !== 0 || $e !== 0 ? ge + $e : zt(c.top, c.bottom));
            }
            await a({
              ...t,
              availableWidth: q,
              availableHeight: z
            });
            const ne = await r.getDimensions(l.floating);
            return w !== ne.width || v !== ne.height ? {
              reset: {
                rects: true
              }
            } : {};
          }
        };
      };
      function Fe(e) {
        var t;
        return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
      }
      function st(e) {
        return Fe(e).getComputedStyle(e);
      }
      const As = Math.min, vn = Math.max, mo = Math.round;
      function rl(e) {
        const t = st(e);
        let n = parseFloat(t.width), o = parseFloat(t.height);
        const i = e.offsetWidth, s = e.offsetHeight, r = mo(n) !== i || mo(o) !== s;
        return r && (n = i, o = s), {
          width: n,
          height: o,
          fallback: r
        };
      }
      function It(e) {
        return al(e) ? (e.nodeName || "").toLowerCase() : "";
      }
      let Kn;
      function ll() {
        if (Kn) return Kn;
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? (Kn = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Kn) : navigator.userAgent;
      }
      function rt(e) {
        return e instanceof Fe(e).HTMLElement;
      }
      function Et(e) {
        return e instanceof Fe(e).Element;
      }
      function al(e) {
        return e instanceof Fe(e).Node;
      }
      function Es(e) {
        return typeof ShadowRoot > "u" ? false : e instanceof Fe(e).ShadowRoot || e instanceof ShadowRoot;
      }
      function ko(e) {
        const { overflow: t, overflowX: n, overflowY: o, display: i } = st(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && ![
          "inline",
          "contents"
        ].includes(i);
      }
      function bp(e) {
        return [
          "table",
          "td",
          "th"
        ].includes(It(e));
      }
      function di(e) {
        const t = /firefox/i.test(ll()), n = st(e), o = n.backdropFilter || n.WebkitBackdropFilter;
        return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || [
          "transform",
          "perspective"
        ].some((i) => n.willChange.includes(i)) || [
          "paint",
          "layout",
          "strict",
          "content"
        ].some((i) => {
          const s = n.contain;
          return s != null && s.includes(i);
        });
      }
      function cl() {
        return !/^((?!chrome|android).)*safari/i.test(ll());
      }
      function ki(e) {
        return [
          "html",
          "body",
          "#document"
        ].includes(It(e));
      }
      function ul(e) {
        return Et(e) ? e : e.contextElement;
      }
      const fl = {
        x: 1,
        y: 1
      };
      function Zt(e) {
        const t = ul(e);
        if (!rt(t)) return fl;
        const n = t.getBoundingClientRect(), { width: o, height: i, fallback: s } = rl(t);
        let r = (s ? mo(n.width) : n.width) / o, l = (s ? mo(n.height) : n.height) / i;
        return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), {
          x: r,
          y: l
        };
      }
      function Mn(e, t, n, o) {
        var i, s;
        t === void 0 && (t = false), n === void 0 && (n = false);
        const r = e.getBoundingClientRect(), l = ul(e);
        let a = fl;
        t && (o ? Et(o) && (a = Zt(o)) : a = Zt(e));
        const u = l ? Fe(l) : window, c = !cl() && n;
        let d = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, h = (r.top + (c && ((s = u.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / a.y, _ = r.width / a.x, w = r.height / a.y;
        if (l) {
          const v = Fe(l), m = o && Et(o) ? Fe(o) : o;
          let A = v.frameElement;
          for (; A && o && m !== v; ) {
            const C = Zt(A), D = A.getBoundingClientRect(), y = getComputedStyle(A);
            D.x += (A.clientLeft + parseFloat(y.paddingLeft)) * C.x, D.y += (A.clientTop + parseFloat(y.paddingTop)) * C.y, d *= C.x, h *= C.y, _ *= C.x, w *= C.y, d += D.x, h += D.y, A = Fe(A).frameElement;
          }
        }
        return {
          width: _,
          height: w,
          top: h,
          right: d + _,
          bottom: h + w,
          left: d,
          x: d,
          y: h
        };
      }
      function Ot(e) {
        return ((al(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function Ho(e) {
        return Et(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        };
      }
      function dl(e) {
        return Mn(Ot(e)).left + Ho(e).scrollLeft;
      }
      function In(e) {
        if (It(e) === "html") return e;
        const t = e.assignedSlot || e.parentNode || Es(e) && e.host || Ot(e);
        return Es(t) ? t.host : t;
      }
      function pl(e) {
        const t = In(e);
        return ki(t) ? t.ownerDocument.body : rt(t) && ko(t) ? t : pl(t);
      }
      function wo(e, t) {
        var n;
        t === void 0 && (t = []);
        const o = pl(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Fe(o);
        return i ? t.concat(s, s.visualViewport || [], ko(o) ? o : []) : t.concat(o, wo(o));
      }
      function Os(e, t, n) {
        return t === "viewport" ? wn(function(o, i) {
          const s = Fe(o), r = Ot(o), l = s.visualViewport;
          let a = r.clientWidth, u = r.clientHeight, c = 0, d = 0;
          if (l) {
            a = l.width, u = l.height;
            const h = cl();
            (h || !h && i === "fixed") && (c = l.offsetLeft, d = l.offsetTop);
          }
          return {
            width: a,
            height: u,
            x: c,
            y: d
          };
        }(e, n)) : Et(t) ? wn(function(o, i) {
          const s = Mn(o, true, i === "fixed"), r = s.top + o.clientTop, l = s.left + o.clientLeft, a = rt(o) ? Zt(o) : {
            x: 1,
            y: 1
          };
          return {
            width: o.clientWidth * a.x,
            height: o.clientHeight * a.y,
            x: l * a.x,
            y: r * a.y
          };
        }(t, n)) : wn(function(o) {
          const i = Ot(o), s = Ho(o), r = o.ownerDocument.body, l = vn(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth), a = vn(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
          let u = -s.scrollLeft + dl(o);
          const c = -s.scrollTop;
          return st(r).direction === "rtl" && (u += vn(i.clientWidth, r.clientWidth) - l), {
            width: l,
            height: a,
            x: u,
            y: c
          };
        }(Ot(e)));
      }
      function Rs(e) {
        return rt(e) && st(e).position !== "fixed" ? e.offsetParent : null;
      }
      function Ms(e) {
        const t = Fe(e);
        let n = Rs(e);
        for (; n && bp(n) && st(n).position === "static"; ) n = Rs(n);
        return n && (It(n) === "html" || It(n) === "body" && st(n).position === "static" && !di(n)) ? t : n || function(o) {
          let i = In(o);
          for (; rt(i) && !ki(i); ) {
            if (di(i)) return i;
            i = In(i);
          }
          return null;
        }(e) || t;
      }
      function yp(e, t, n) {
        const o = rt(t), i = Ot(t), s = Mn(e, true, n === "fixed", t);
        let r = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = {
          x: 0,
          y: 0
        };
        if (o || !o && n !== "fixed") if ((It(t) !== "body" || ko(i)) && (r = Ho(t)), rt(t)) {
          const a = Mn(t, true);
          l.x = a.x + t.clientLeft, l.y = a.y + t.clientTop;
        } else i && (l.x = dl(i));
        return {
          x: s.left + r.scrollLeft - l.x,
          y: s.top + r.scrollTop - l.y,
          width: s.width,
          height: s.height
        };
      }
      const xp = {
        getClippingRect: function(e) {
          let { element: t, boundary: n, rootBoundary: o, strategy: i } = e;
          const s = n === "clippingAncestors" ? function(u, c) {
            const d = c.get(u);
            if (d) return d;
            let h = wo(u).filter((m) => Et(m) && It(m) !== "body"), _ = null;
            const w = st(u).position === "fixed";
            let v = w ? In(u) : u;
            for (; Et(v) && !ki(v); ) {
              const m = st(v), A = di(v);
              (w ? A || _ : A || m.position !== "static" || !_ || ![
                "absolute",
                "fixed"
              ].includes(_.position)) ? _ = m : h = h.filter((C) => C !== v), v = In(v);
            }
            return c.set(u, h), h;
          }(t, this._c) : [].concat(n), r = [
            ...s,
            o
          ], l = r[0], a = r.reduce((u, c) => {
            const d = Os(t, c, i);
            return u.top = vn(d.top, u.top), u.right = As(d.right, u.right), u.bottom = As(d.bottom, u.bottom), u.left = vn(d.left, u.left), u;
          }, Os(t, l, i));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let { rect: t, offsetParent: n, strategy: o } = e;
          const i = rt(n), s = Ot(n);
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
          if ((i || !i && o !== "fixed") && ((It(n) !== "body" || ko(s)) && (r = Ho(n)), rt(n))) {
            const u = Mn(n);
            l = Zt(n), a.x = u.x + n.clientLeft, a.y = u.y + n.clientTop;
          }
          return {
            width: t.width * l.x,
            height: t.height * l.y,
            x: t.x * l.x - r.scrollLeft * l.x + a.x,
            y: t.y * l.y - r.scrollTop * l.y + a.y
          };
        },
        isElement: Et,
        getDimensions: function(e) {
          return rt(e) ? rl(e) : e.getBoundingClientRect();
        },
        getOffsetParent: Ms,
        getDocumentElement: Ot,
        getScale: Zt,
        async getElementRects(e) {
          let { reference: t, floating: n, strategy: o } = e;
          const i = this.getOffsetParent || Ms, s = this.getDimensions;
          return {
            reference: yp(t, await i(n), o),
            floating: {
              x: 0,
              y: 0,
              ...await s(n)
            }
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => st(e).direction === "rtl"
      }, Sp = (e, t, n) => {
        const o = /* @__PURE__ */ new Map(), i = {
          platform: xp,
          ...n
        }, s = {
          ...i.platform,
          _c: o
        };
        return up(e, t, {
          ...i,
          platform: s
        });
      };
      function hl(e, t) {
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? hl(e[n], t[n]) : e[n] = t[n]);
      }
      const Ke = {
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
      function Nn(e, t) {
        let n = Ke.themes[e] || {}, o;
        do
          o = n[t], typeof o > "u" ? n.$extend ? n = Ke.themes[n.$extend] || {} : (n = null, o = Ke[t]) : n = null;
        while (n);
        return o;
      }
      function $p(e) {
        const t = [
          e
        ];
        let n = Ke.themes[e] || {};
        do
          n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ke.themes[n.$extend] || {}) : n = null;
        while (n);
        return t.map((o) => `v-popper--theme-${o}`);
      }
      function Is(e) {
        const t = [
          e
        ];
        let n = Ke.themes[e] || {};
        do
          n.$extend ? (t.push(n.$extend), n = Ke.themes[n.$extend] || {}) : n = null;
        while (n);
        return t;
      }
      let on = false;
      if (typeof window < "u") {
        on = false;
        try {
          const e = Object.defineProperty({}, "passive", {
            get() {
              on = true;
            }
          });
          window.addEventListener("test", null, e);
        } catch {
        }
      }
      let _l = false;
      typeof window < "u" && typeof navigator < "u" && (_l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
      const gl = [
        "auto",
        "top",
        "bottom",
        "left",
        "right"
      ].reduce((e, t) => e.concat([
        t,
        `${t}-start`,
        `${t}-end`
      ]), []), Ns = {
        hover: "mouseenter",
        focus: "focus",
        click: "click",
        touch: "touchstart",
        pointer: "pointerdown"
      }, Ds = {
        hover: "mouseleave",
        focus: "blur",
        click: "click",
        touch: "touchend",
        pointer: "pointerup"
      };
      function Ls(e, t) {
        const n = e.indexOf(t);
        n !== -1 && e.splice(n, 1);
      }
      function Qo() {
        return new Promise((e) => requestAnimationFrame(() => {
          requestAnimationFrame(e);
        }));
      }
      const qe = [];
      let Ht = null;
      const ks = {};
      function Hs(e) {
        let t = ks[e];
        return t || (t = ks[e] = []), t;
      }
      let pi = function() {
      };
      typeof window < "u" && (pi = window.Element);
      function X(e) {
        return function(t) {
          return Nn(t.theme, e);
        };
      }
      const Zo = "__floating-vue__popper", ml = () => Hn({
        name: "VPopper",
        provide() {
          return {
            [Zo]: {
              parentPopper: this
            }
          };
        },
        inject: {
          [Zo]: {
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
            default: X("disabled")
          },
          positioningDisabled: {
            type: Boolean,
            default: X("positioningDisabled")
          },
          placement: {
            type: String,
            default: X("placement"),
            validator: (e) => gl.includes(e)
          },
          delay: {
            type: [
              String,
              Number,
              Object
            ],
            default: X("delay")
          },
          distance: {
            type: [
              Number,
              String
            ],
            default: X("distance")
          },
          skidding: {
            type: [
              Number,
              String
            ],
            default: X("skidding")
          },
          triggers: {
            type: Array,
            default: X("triggers")
          },
          showTriggers: {
            type: [
              Array,
              Function
            ],
            default: X("showTriggers")
          },
          hideTriggers: {
            type: [
              Array,
              Function
            ],
            default: X("hideTriggers")
          },
          popperTriggers: {
            type: Array,
            default: X("popperTriggers")
          },
          popperShowTriggers: {
            type: [
              Array,
              Function
            ],
            default: X("popperShowTriggers")
          },
          popperHideTriggers: {
            type: [
              Array,
              Function
            ],
            default: X("popperHideTriggers")
          },
          container: {
            type: [
              String,
              Object,
              pi,
              Boolean
            ],
            default: X("container")
          },
          boundary: {
            type: [
              String,
              pi
            ],
            default: X("boundary")
          },
          strategy: {
            type: String,
            validator: (e) => [
              "absolute",
              "fixed"
            ].includes(e),
            default: X("strategy")
          },
          autoHide: {
            type: [
              Boolean,
              Function
            ],
            default: X("autoHide")
          },
          handleResize: {
            type: Boolean,
            default: X("handleResize")
          },
          instantMove: {
            type: Boolean,
            default: X("instantMove")
          },
          eagerMount: {
            type: Boolean,
            default: X("eagerMount")
          },
          popperClass: {
            type: [
              String,
              Array,
              Object
            ],
            default: X("popperClass")
          },
          computeTransformOrigin: {
            type: Boolean,
            default: X("computeTransformOrigin")
          },
          autoMinSize: {
            type: Boolean,
            default: X("autoMinSize")
          },
          autoSize: {
            type: [
              Boolean,
              String
            ],
            default: X("autoSize")
          },
          autoMaxSize: {
            type: Boolean,
            default: X("autoMaxSize")
          },
          autoBoundaryMaxSize: {
            type: Boolean,
            default: X("autoBoundaryMaxSize")
          },
          preventOverflow: {
            type: Boolean,
            default: X("preventOverflow")
          },
          overflowPadding: {
            type: [
              Number,
              String
            ],
            default: X("overflowPadding")
          },
          arrowPadding: {
            type: [
              Number,
              String
            ],
            default: X("arrowPadding")
          },
          arrowOverflow: {
            type: Boolean,
            default: X("arrowOverflow")
          },
          flip: {
            type: Boolean,
            default: X("flip")
          },
          shift: {
            type: Boolean,
            default: X("shift")
          },
          shiftCrossAxis: {
            type: Boolean,
            default: X("shiftCrossAxis")
          },
          noAutoFocus: {
            type: Boolean,
            default: X("noAutoFocus")
          },
          disposeTimeout: {
            type: Number,
            default: X("disposeTimeout")
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
            return (e = this[Zo]) == null ? void 0 : e.parentPopper;
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
            var o, i;
            (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = false, (n || !this.disabled) && (((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = true, requestAnimationFrame(() => {
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
            (this.distance || this.skidding) && e.middleware.push(mp({
              mainAxis: this.distance,
              crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(pp({
              alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(wp({
              padding: this.overflowPadding,
              boundary: this.boundary,
              crossAxis: this.shiftCrossAxis
            })), !t && this.flip && e.middleware.push(hp({
              padding: this.overflowPadding,
              boundary: this.boundary
            }))), e.middleware.push(fp({
              element: this.$_arrowNode,
              padding: this.arrowPadding
            })), this.arrowOverflow && e.middleware.push({
              name: "arrowOverflow",
              fn: ({ placement: o, rects: i, middlewareData: s }) => {
                let r;
                const { centerOffset: l } = s.arrow;
                return o.startsWith("top") || o.startsWith("bottom") ? r = Math.abs(l) > i.reference.width / 2 : r = Math.abs(l) > i.reference.height / 2, {
                  data: {
                    overflow: r
                  }
                };
              }
            }), this.autoMinSize || this.autoSize) {
              const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
              e.middleware.push({
                name: "autoSize",
                fn: ({ rects: i, placement: s, middlewareData: r }) => {
                  var l;
                  if ((l = r.autoSize) != null && l.skip) return {};
                  let a, u;
                  return s.startsWith("top") || s.startsWith("bottom") ? a = i.reference.width : u = i.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = u != null ? `${u}px` : null, {
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
            (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(vp({
              boundary: this.boundary,
              padding: this.overflowPadding,
              apply: ({ availableWidth: o, availableHeight: i }) => {
                this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
              }
            })));
            const n = await Sp(this.$_referenceNode, this.$_popperNode, e);
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
            if (this.$_updateParentShownChildren(true), this.$_hideInProgress = false, clearTimeout(this.$_scheduleTimer), Ht && this.instantMove && Ht.instantMove && Ht !== this.parentPopper) {
              Ht.$_applyHide(true), this.$_applyShow(true);
              return;
            }
            t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
          },
          $_scheduleHide(e, t = false) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = true;
              return;
            }
            this.$_updateParentShownChildren(false), this.$_hideInProgress = true, clearTimeout(this.$_scheduleTimer), this.isShown && (Ht = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
          },
          $_computeDelay(e) {
            const t = this.delay;
            return parseInt(t && t[e] || t || 0);
          },
          async $_applyShow(e = false) {
            clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Qo(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
              ...wo(this.$_referenceNode),
              ...wo(this.$_popperNode)
            ], "scroll", () => {
              this.$_computePosition();
            }));
          },
          async $_applyShowEffect() {
            if (this.$_hideInProgress) return;
            if (this.computeTransformOrigin) {
              const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), o = n.parentNode.getBoundingClientRect(), i = t.x + t.width / 2 - (o.left + n.offsetLeft), s = t.y + t.height / 2 - (o.top + n.offsetTop);
              this.result.transformOrigin = `${i}px ${s}px`;
            }
            this.isShown = true, this.$_applyAttrsToTarget({
              "aria-describedby": this.popperId,
              "data-popper-shown": ""
            });
            const e = this.showGroup;
            if (e) {
              let t;
              for (let n = 0; n < qe.length; n++) t = qe[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
            }
            qe.push(this), document.body.classList.add("v-popper--some-open");
            for (const t of Is(this.theme)) Hs(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await Qo(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
          },
          async $_applyHide(e = false) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = true, this.$_hideInProgress = false;
              return;
            }
            if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
            this.skipTransition = e, Ls(qe, this), qe.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of Is(this.theme)) {
              const o = Hs(n);
              Ls(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
            }
            Ht === this && (Ht = null), this.isShown = false, this.$_applyAttrsToTarget({
              "aria-describedby": void 0,
              "data-popper-shown": void 0
            }), clearTimeout(this.$_disposeTimer);
            const t = this.disposeTimeout;
            t !== null && (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
            }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await Qo(), this.classes.hideFrom = false, this.classes.hideTo = true;
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
            this.$_registerTriggerListeners(this.$_targetNodes, Ns, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([
              this.$_popperNode
            ], Ns, this.popperTriggers, this.popperShowTriggers, e);
            const t = (n) => {
              n.usedByTooltip || this.hide({
                event: n
              });
            };
            this.$_registerTriggerListeners(this.$_targetNodes, Ds, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([
              this.$_popperNode
            ], Ds, this.popperTriggers, this.popperHideTriggers, t);
          },
          $_registerEventListeners(e, t, n) {
            this.$_events.push({
              targetNodes: e,
              eventType: t,
              handler: n
            }), e.forEach((o) => o.addEventListener(t, n, on ? {
              passive: true
            } : void 0));
          },
          $_registerTriggerListeners(e, t, n, o, i) {
            let s = n;
            o != null && (s = typeof o == "function" ? o(s) : o), s.forEach((r) => {
              const l = t[r];
              l && this.$_registerEventListeners(e, l, i);
            });
          },
          $_removeEventListeners(e) {
            const t = [];
            this.$_events.forEach((n) => {
              const { targetNodes: o, eventType: i, handler: s } = n;
              !e || e === i ? o.forEach((r) => r.removeEventListener(i, s)) : t.push(n);
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
              const o = n.getAttribute(e);
              o && (n.removeAttribute(e), n.setAttribute(t, o));
            }
          },
          $_applyAttrsToTarget(e) {
            for (const t of this.$_targetNodes) for (const n in e) {
              const o = e[n];
              o == null ? t.removeAttribute(n) : t.setAttribute(n, o);
            }
          },
          $_updateParentShownChildren(e) {
            let t = this.parentPopper;
            for (; t; ) e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
          },
          $_isAimingPopper() {
            const e = this.$_referenceNode.getBoundingClientRect();
            if (bn >= e.left && bn <= e.right && yn >= e.top && yn <= e.bottom) {
              const t = this.$_popperNode.getBoundingClientRect(), n = bn - yt, o = yn - xt, i = t.left + t.width / 2 - yt + (t.top + t.height / 2) - xt + t.width + t.height, s = yt + n * i, r = xt + o * i;
              return Gn(yt, xt, s, r, t.left, t.top, t.left, t.bottom) || Gn(yt, xt, s, r, t.left, t.top, t.right, t.top) || Gn(yt, xt, s, r, t.right, t.top, t.right, t.bottom) || Gn(yt, xt, s, r, t.left, t.bottom, t.right, t.bottom);
            }
            return false;
          }
        },
        render() {
          return this.$slots.default(this.slotData);
        }
      });
      if (typeof document < "u" && typeof window < "u") {
        if (_l) {
          const e = on ? {
            passive: true,
            capture: true
          } : true;
          document.addEventListener("touchstart", (t) => Fs(t, true), e), document.addEventListener("touchend", (t) => zs(t, true), e);
        } else window.addEventListener("mousedown", (e) => Fs(e, false), true), window.addEventListener("click", (e) => zs(e, false), true);
        window.addEventListener("resize", Cp);
      }
      function Fs(e, t) {
        if (Ke.autoHideOnMousedown) wl(e, t);
        else for (let n = 0; n < qe.length; n++) {
          const o = qe[n];
          try {
            o.mouseDownContains = o.popperNode().contains(e.target);
          } catch {
          }
        }
      }
      function zs(e, t) {
        Ke.autoHideOnMousedown || wl(e, t);
      }
      function wl(e, t) {
        const n = {};
        for (let o = qe.length - 1; o >= 0; o--) {
          const i = qe[o];
          try {
            const s = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
            i.pendingHide = false, requestAnimationFrame(() => {
              if (i.pendingHide = false, !n[i.randomId] && Bs(i, s, e)) {
                if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
                  let l = i.parentPopper;
                  for (; l; ) n[l.randomId] = true, l = l.parentPopper;
                  return;
                }
                let r = i.parentPopper;
                for (; r && Bs(r, r.containsGlobalTarget, e); ) r.$_handleGlobalClose(e, t), r = r.parentPopper;
              }
            });
          } catch {
          }
        }
      }
      function Bs(e, t, n) {
        return n.closeAllPopover || n.closePopover && t || Tp(e, n) && !t;
      }
      function Tp(e, t) {
        if (typeof e.autoHide == "function") {
          const n = e.autoHide(t);
          return e.lastAutoHide = n, n;
        }
        return e.autoHide;
      }
      function Cp() {
        for (let e = 0; e < qe.length; e++) qe[e].$_computePosition();
      }
      let yt = 0, xt = 0, bn = 0, yn = 0;
      typeof window < "u" && window.addEventListener("mousemove", (e) => {
        yt = bn, xt = yn, bn = e.clientX, yn = e.clientY;
      }, on ? {
        passive: true
      } : void 0);
      function Gn(e, t, n, o, i, s, r, l) {
        const a = ((r - i) * (t - s) - (l - s) * (e - i)) / ((l - s) * (n - e) - (r - i) * (o - t)), u = ((n - e) * (t - s) - (o - t) * (e - i)) / ((l - s) * (n - e) - (r - i) * (o - t));
        return a >= 0 && a <= 1 && u >= 0 && u <= 1;
      }
      const Pp = {
        extends: ml()
      }, Fo = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [o, i] of t) n[o] = i;
        return n;
      };
      function Ap(e, t, n, o, i, s) {
        return N(), H("div", {
          ref: "reference",
          class: Ve([
            "v-popper",
            {
              "v-popper--shown": e.slotData.isShown
            }
          ])
        }, [
          ht(e.$slots, "default", Fl(Wr(e.slotData)))
        ], 2);
      }
      const Ep = Fo(Pp, [
        [
          "render",
          Ap
        ]
      ]);
      function Op() {
        var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
        if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
        var n = e.indexOf("Trident/");
        if (n > 0) {
          var o = e.indexOf("rv:");
          return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
        }
        var i = e.indexOf("Edge/");
        return i > 0 ? parseInt(e.substring(i + 5, e.indexOf(".", i)), 10) : -1;
      }
      let no;
      function hi() {
        hi.init || (hi.init = true, no = Op() !== -1);
      }
      var zo = {
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
          hi(), Ai(() => {
            this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
          });
          const e = document.createElement("object");
          this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", no && this.$el.appendChild(e), e.data = "about:blank", no || this.$el.appendChild(e);
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
            this._resizeObject && this._resizeObject.onload && (!no && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
          }
        }
      };
      const Rp = Aa();
      Ca("data-v-b329ee4c");
      const Mp = {
        class: "resize-observer",
        tabindex: "-1"
      };
      Pa();
      const Ip = Rp((e, t, n, o, i, s) => (N(), Be("div", Mp)));
      zo.render = Ip;
      zo.__scopeId = "data-v-b329ee4c";
      zo.__file = "src/components/ResizeObserver.vue";
      const vl = (e = "theme") => ({
        computed: {
          themeClass() {
            return $p(this[e]);
          }
        }
      }), Np = Hn({
        name: "VPopperContent",
        components: {
          ResizeObserver: zo
        },
        mixins: [
          vl()
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
      }), Dp = [
        "id",
        "aria-hidden",
        "tabindex",
        "data-popper-placement"
      ], Lp = {
        ref: "inner",
        class: "v-popper__inner"
      }, kp = P("div", {
        class: "v-popper__arrow-outer"
      }, null, -1), Hp = P("div", {
        class: "v-popper__arrow-inner"
      }, null, -1), Fp = [
        kp,
        Hp
      ];
      function zp(e, t, n, o, i, s) {
        const r = Tn("ResizeObserver");
        return N(), H("div", {
          id: e.popperId,
          ref: "popover",
          class: Ve([
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
          style: Pt(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
          } : void 0),
          "aria-hidden": e.shown ? "false" : "true",
          tabindex: e.autoHide ? 0 : void 0,
          "data-popper-placement": e.result ? e.result.placement : void 0,
          onKeyup: t[2] || (t[2] = Qr((l) => e.autoHide && e.$emit("hide"), [
            "esc"
          ]))
        }, [
          P("div", {
            class: "v-popper__backdrop",
            onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
          }),
          P("div", {
            class: "v-popper__wrapper",
            style: Pt(e.result ? {
              transformOrigin: e.result.transformOrigin
            } : void 0)
          }, [
            P("div", Lp, [
              e.mounted ? (N(), H(ie, {
                key: 0
              }, [
                P("div", null, [
                  ht(e.$slots, "default")
                ]),
                e.handleResize ? (N(), Be(r, {
                  key: 0,
                  onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
                })) : ot("", true)
              ], 64)) : ot("", true)
            ], 512),
            P("div", {
              ref: "arrow",
              class: "v-popper__arrow-container",
              style: Pt(e.result ? {
                left: e.toPx(e.result.arrow.x),
                top: e.toPx(e.result.arrow.y)
              } : void 0)
            }, Fp, 4)
          ], 4)
        ], 46, Dp);
      }
      const bl = Fo(Np, [
        [
          "render",
          zp
        ]
      ]), yl = {
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
      let _i = function() {
      };
      typeof window < "u" && (_i = window.Element);
      const Bp = Hn({
        name: "VPopperWrapper",
        components: {
          Popper: Ep,
          PopperContent: bl
        },
        mixins: [
          yl,
          vl("finalTheme")
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
              _i,
              Boolean
            ],
            default: void 0
          },
          boundary: {
            type: [
              String,
              _i
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
      function jp(e, t, n, o, i, s) {
        const r = Tn("PopperContent"), l = Tn("Popper");
        return N(), Be(l, Ni({
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
          default: at(({ popperId: a, isShown: u, shouldMountContent: c, skipTransition: d, autoHide: h, show: _, hide: w, handleResize: v, onResize: m, classes: A, result: C }) => [
            ht(e.$slots, "default", {
              shown: u,
              show: _,
              hide: w
            }),
            pe(r, {
              ref: "popperContent",
              "popper-id": a,
              theme: e.finalTheme,
              shown: u,
              mounted: c,
              "skip-transition": d,
              "auto-hide": h,
              "handle-resize": v,
              classes: A,
              result: C,
              onHide: w,
              onResize: m
            }, {
              default: at(() => [
                ht(e.$slots, "popper", {
                  shown: u,
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
      const Hi = Fo(Bp, [
        [
          "render",
          jp
        ]
      ]), qp = {
        ...Hi,
        name: "VDropdown",
        vPopperTheme: "dropdown"
      }, Vp = {
        ...Hi,
        name: "VMenu",
        vPopperTheme: "menu"
      }, Up = {
        ...Hi,
        name: "VTooltip",
        vPopperTheme: "tooltip"
      }, Wp = Hn({
        name: "VTooltipDirective",
        components: {
          Popper: ml(),
          PopperContent: bl
        },
        mixins: [
          yl
        ],
        inheritAttrs: false,
        props: {
          theme: {
            type: String,
            default: "tooltip"
          },
          html: {
            type: Boolean,
            default: (e) => Nn(e.theme, "html")
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
            default: (e) => Nn(e.theme, "loadingContent")
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
              n.then ? n.then((o) => this.onResult(t, o)) : this.onResult(t, n);
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
      }), Kp = [
        "innerHTML"
      ], Gp = [
        "textContent"
      ];
      function Yp(e, t, n, o, i, s) {
        const r = Tn("PopperContent"), l = Tn("Popper");
        return N(), Be(l, Ni({
          ref: "popper"
        }, e.$attrs, {
          theme: e.theme,
          "target-nodes": e.targetNodes,
          "popper-node": () => e.$refs.popperContent.$el,
          onApplyShow: e.onShow,
          onApplyHide: e.onHide
        }), {
          default: at(({ popperId: a, isShown: u, shouldMountContent: c, skipTransition: d, autoHide: h, hide: _, handleResize: w, onResize: v, classes: m, result: A }) => [
            pe(r, {
              ref: "popperContent",
              class: Ve({
                "v-popper--tooltip-loading": e.loading
              }),
              "popper-id": a,
              theme: e.theme,
              shown: u,
              mounted: c,
              "skip-transition": d,
              "auto-hide": h,
              "handle-resize": w,
              classes: m,
              result: A,
              onHide: _,
              onResize: v
            }, {
              default: at(() => [
                e.html ? (N(), H("div", {
                  key: 0,
                  innerHTML: e.finalContent
                }, null, 8, Kp)) : (N(), H("div", {
                  key: 1,
                  textContent: Me(e.finalContent)
                }, null, 8, Gp))
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
      const Xp = Fo(Wp, [
        [
          "render",
          Yp
        ]
      ]), xl = "v-popper--has-tooltip";
      function Jp(e, t) {
        let n = e.placement;
        if (!n && t) for (const o of gl) t[o] && (n = o);
        return n || (n = Nn(e.theme || "tooltip", "placement")), n;
      }
      function Sl(e, t, n) {
        let o;
        const i = typeof t;
        return i === "string" ? o = {
          content: t
        } : t && i === "object" ? o = t : o = {
          content: false
        }, o.placement = Jp(o, n), o.targetNodes = () => [
          e
        ], o.referenceNode = () => e, o;
      }
      let ei, Dn, Qp = 0;
      function Zp() {
        if (ei) return;
        Dn = ue([]), ei = Zr({
          name: "VTooltipDirectiveApp",
          setup() {
            return {
              directives: Dn
            };
          },
          render() {
            return this.directives.map((t) => Mc(Xp, {
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
        document.body.appendChild(e), ei.mount(e);
      }
      function eh(e, t, n) {
        Zp();
        const o = ue(Sl(e, t, n)), i = ue(false), s = {
          id: Qp++,
          options: o,
          shown: i
        };
        return Dn.value.push(s), e.classList && e.classList.add(xl), e.$_popper = {
          options: o,
          item: s,
          show() {
            i.value = true;
          },
          hide() {
            i.value = false;
          }
        };
      }
      function $l(e) {
        if (e.$_popper) {
          const t = Dn.value.indexOf(e.$_popper.item);
          t !== -1 && Dn.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
        }
        e.classList && e.classList.remove(xl);
      }
      function js(e, { value: t, modifiers: n }) {
        const o = Sl(e, t, n);
        if (!o.content || Nn(o.theme || "tooltip", "disabled")) $l(e);
        else {
          let i;
          e.$_popper ? (i = e.$_popper, i.options.value = o) : i = eh(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? i.show() : i.hide());
        }
      }
      const th = {
        beforeMount: js,
        updated: js,
        beforeUnmount(e) {
          $l(e);
        }
      };
      function qs(e) {
        e.addEventListener("mousedown", vo), e.addEventListener("click", vo), e.addEventListener("touchstart", Tl, on ? {
          passive: true
        } : false);
      }
      function Vs(e) {
        e.removeEventListener("mousedown", vo), e.removeEventListener("click", vo), e.removeEventListener("touchstart", Tl), e.removeEventListener("touchend", Cl), e.removeEventListener("touchcancel", Pl);
      }
      function vo(e) {
        const t = e.currentTarget;
        e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
      }
      function Tl(e) {
        if (e.changedTouches.length === 1) {
          const t = e.currentTarget;
          t.$_vclosepopover_touch = true;
          const n = e.changedTouches[0];
          t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", Cl), t.addEventListener("touchcancel", Pl);
        }
      }
      function Cl(e) {
        const t = e.currentTarget;
        if (t.$_vclosepopover_touch = false, e.changedTouches.length === 1) {
          const n = e.changedTouches[0], o = t.$_vclosepopover_touchPoint;
          e.closePopover = Math.abs(n.screenY - o.screenY) < 20 && Math.abs(n.screenX - o.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
        }
      }
      function Pl(e) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = false;
      }
      const nh = {
        beforeMount(e, { value: t, modifiers: n }) {
          e.$_closePopoverModifiers = n, (typeof t > "u" || t) && qs(e);
        },
        updated(e, { value: t, oldValue: n, modifiers: o }) {
          e.$_closePopoverModifiers = o, t !== n && (typeof t > "u" || t ? qs(e) : Vs(e));
        },
        beforeUnmount(e) {
          Vs(e);
        }
      };
      function oh(e, t = {}) {
        e.$_vTooltipInstalled || (e.$_vTooltipInstalled = true, hl(Ke, t), e.directive("tooltip", th), e.directive("close-popper", nh), e.component("VTooltip", Up), e.component("VDropdown", qp), e.component("VMenu", Vp));
      }
      const ih = {
        version: "5.2.2",
        install: oh,
        options: Ke
      }, sh = {
        viz: "viz-lite.js"
      };
      Object.entries(sh).forEach((e) => {
        let t = document.head.querySelector(`[src="${e[1]}"`);
        t || (t = document.createElement("script"), t.setAttribute("id", e[0]), t.setAttribute("src", e[1]), t.setAttribute("type", "text/javascript"), document.head.appendChild(t));
      });
      Zr(Zd).use(ih).mount("#app");
    })();
  }
});
export default require_stdin();

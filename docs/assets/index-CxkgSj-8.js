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
      function bo(e) {
        const t = /* @__PURE__ */ Object.create(null);
        for (const n of e.split(",")) t[n] = 1;
        return (n) => n in t;
      }
      const le = {}, Gt = [], rt = () => {
      }, Dl = () => false, xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xo = (e) => e.startsWith("onUpdate:"), Se = Object.assign, $o = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }, Ll = Object.prototype.hasOwnProperty, oe = (e, t) => Ll.call(e, t), V = Array.isArray, Yt = (e) => Fn(e) === "[object Map]", $i = (e) => Fn(e) === "[object Set]", Xo = (e) => Fn(e) === "[object Date]", K = (e) => typeof e == "function", ge = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", So = (e) => (fe(e) || K(e)) && K(e.then) && K(e.catch), Xs = Object.prototype.toString, Fn = (e) => Xs.call(e), Fl = (e) => Fn(e).slice(8, -1), Js = (e) => Fn(e) === "[object Object]", To = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, mn = bo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Si = (e) => {
        const t = /* @__PURE__ */ Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      }, Hl = /-(\w)/g, qe = Si((e) => e.replace(Hl, (t, n) => n ? n.toUpperCase() : "")), Bl = /\B([A-Z])/g, Nt = Si((e) => e.replace(Bl, "-$1").toLowerCase()), Ti = Si((e) => e.charAt(0).toUpperCase() + e.slice(1)), ji = Si((e) => e ? `on${Ti(e)}` : ""), Pt = (e, t) => !Object.is(e, t), Jn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
      }, Qs = (e, t, n, i = false) => {
        Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: i,
          value: n
        });
      }, si = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      }, zl = (e) => {
        const t = ge(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
      };
      let Jo;
      const Ci = () => Jo || (Jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
      function At(e) {
        if (V(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const i = e[n], o = ge(i) ? Ul(i) : At(i);
            if (o) for (const s in o) t[s] = o[s];
          }
          return t;
        } else if (ge(e) || fe(e)) return e;
      }
      const jl = /;(?![^(]*\))/g, ql = /:([^]+)/, Vl = /\/\*[^]*?\*\//g;
      function Ul(e) {
        const t = {};
        return e.replace(Vl, "").split(jl).forEach((n) => {
          if (n) {
            const i = n.split(ql);
            i.length > 1 && (t[i[0].trim()] = i[1].trim());
          }
        }), t;
      }
      function We(e) {
        let t = "";
        if (ge(e)) t = e;
        else if (V(e)) for (let n = 0; n < e.length; n++) {
          const i = We(e[n]);
          i && (t += i + " ");
        }
        else if (fe(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim();
      }
      function Wl(e) {
        if (!e) return null;
        let { class: t, style: n } = e;
        return t && !ge(t) && (e.class = We(t)), n && (e.style = At(n)), e;
      }
      const Kl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gl = bo(Kl);
      function Zs(e) {
        return !!e || e === "";
      }
      function Yl(e, t) {
        if (e.length !== t.length) return false;
        let n = true;
        for (let i = 0; n && i < e.length; i++) n = nn(e[i], t[i]);
        return n;
      }
      function nn(e, t) {
        if (e === t) return true;
        let n = Xo(e), i = Xo(t);
        if (n || i) return n && i ? e.getTime() === t.getTime() : false;
        if (n = Je(e), i = Je(t), n || i) return e === t;
        if (n = V(e), i = V(t), n || i) return n && i ? Yl(e, t) : false;
        if (n = fe(e), i = fe(t), n || i) {
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
      function Xl(e, t) {
        return e.findIndex((n) => nn(n, t));
      }
      const er = (e) => !!(e && e.__v_isRef === true), Ie = (e) => ge(e) ? e : e == null ? "" : V(e) || fe(e) && (e.toString === Xs || !K(e.toString)) ? er(e) ? Ie(e.value) : JSON.stringify(e, tr, 2) : String(e), tr = (e, t) => er(t) ? tr(e, t.value) : Yt(t) ? {
        [`Map(${t.size})`]: [
          ...t.entries()
        ].reduce((n, [i, o], s) => (n[qi(i, s) + " =>"] = o, n), {})
      } : $i(t) ? {
        [`Set(${t.size})`]: [
          ...t.values()
        ].map((n) => qi(n))
      } : Je(t) ? qi(t) : fe(t) && !V(t) && !Js(t) ? String(t) : t, qi = (e, t = "") => {
        var n;
        return Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
      };
      let Me;
      class Jl {
        constructor(t = false) {
          this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Me, !t && Me && (this.index = (Me.scopes || (Me.scopes = [])).push(this) - 1);
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
            const n = Me;
            try {
              return Me = this, t();
            } finally {
              Me = n;
            }
          }
        }
        on() {
          ++this._on === 1 && (this.prevScope = Me, Me = this);
        }
        off() {
          this._on > 0 && --this._on === 0 && (Me = this.prevScope, this.prevScope = void 0);
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
      function Ql() {
        return Me;
      }
      let ue;
      const Vi = /* @__PURE__ */ new WeakSet();
      class nr {
        constructor(t) {
          this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && Me.active && Me.effects.push(this);
        }
        pause() {
          this.flags |= 64;
        }
        resume() {
          this.flags & 64 && (this.flags &= -65, Vi.has(this) && (Vi.delete(this), this.trigger()));
        }
        notify() {
          this.flags & 2 && !(this.flags & 32) || this.flags & 8 || or(this);
        }
        run() {
          if (!(this.flags & 1)) return this.fn();
          this.flags |= 2, Qo(this), sr(this);
          const t = ue, n = Ke;
          ue = this, Ke = true;
          try {
            return this.fn();
          } finally {
            rr(this), ue = t, Ke = n, this.flags &= -3;
          }
        }
        stop() {
          if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Ao(t);
            this.deps = this.depsTail = void 0, Qo(this), this.onStop && this.onStop(), this.flags &= -2;
          }
        }
        trigger() {
          this.flags & 64 ? Vi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
        }
        runIfDirty() {
          to(this) && this.run();
        }
        get dirty() {
          return to(this);
        }
      }
      let ir = 0, vn, wn;
      function or(e, t = false) {
        if (e.flags |= 8, t) {
          e.next = wn, wn = e;
          return;
        }
        e.next = vn, vn = e;
      }
      function Co() {
        ir++;
      }
      function Po() {
        if (--ir > 0) return;
        if (wn) {
          let t = wn;
          for (wn = void 0; t; ) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n;
          }
        }
        let e;
        for (; vn; ) {
          let t = vn;
          for (vn = void 0; t; ) {
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
      function sr(e) {
        for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
      }
      function rr(e) {
        let t, n = e.depsTail, i = n;
        for (; i; ) {
          const o = i.prevDep;
          i.version === -1 ? (i === n && (n = o), Ao(i), Zl(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = o;
        }
        e.deps = t, e.depsTail = n;
      }
      function to(e) {
        for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (lr(t.dep.computed) || t.dep.version !== t.version)) return true;
        return !!e._dirty;
      }
      function lr(e) {
        if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Cn) || (e.globalVersion = Cn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !to(e)))) return;
        e.flags |= 2;
        const t = e.dep, n = ue, i = Ke;
        ue = e, Ke = true;
        try {
          sr(e);
          const o = e.fn(e._value);
          (t.version === 0 || Pt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
        } catch (o) {
          throw t.version++, o;
        } finally {
          ue = n, Ke = i, rr(e), e.flags &= -3;
        }
      }
      function Ao(e, t = false) {
        const { dep: n, prevSub: i, nextSub: o } = e;
        if (i && (i.nextSub = o, e.prevSub = void 0), o && (o.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
          n.computed.flags &= -5;
          for (let s = n.computed.deps; s; s = s.nextDep) Ao(s, true);
        }
        !t && !--n.sc && n.map && n.map.delete(n.key);
      }
      function Zl(e) {
        const { prevDep: t, nextDep: n } = e;
        t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
      }
      let Ke = true;
      const ar = [];
      function vt() {
        ar.push(Ke), Ke = false;
      }
      function wt() {
        const e = ar.pop();
        Ke = e === void 0 ? true : e;
      }
      function Qo(e) {
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
      class ea {
        constructor(t, n) {
          this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
        }
      }
      class Eo {
        constructor(t) {
          this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
        }
        track(t) {
          if (!ue || !Ke || ue === this.computed) return;
          let n = this.activeLink;
          if (n === void 0 || n.sub !== ue) n = this.activeLink = new ea(ue, this), ue.deps ? (n.prevDep = ue.depsTail, ue.depsTail.nextDep = n, ue.depsTail = n) : ue.deps = ue.depsTail = n, cr(n);
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
          Co();
          try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
          } finally {
            Po();
          }
        }
      }
      function cr(e) {
        if (e.dep.sc++, e.sub.flags & 4) {
          const t = e.dep.computed;
          if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let i = t.deps; i; i = i.nextDep) cr(i);
          }
          const n = e.dep.subs;
          n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
        }
      }
      const ri = /* @__PURE__ */ new WeakMap(), zt = Symbol(""), no = Symbol(""), Pn = Symbol("");
      function $e(e, t, n) {
        if (Ke && ue) {
          let i = ri.get(e);
          i || ri.set(e, i = /* @__PURE__ */ new Map());
          let o = i.get(n);
          o || (i.set(n, o = new Eo()), o.map = i, o.key = n), o.track();
        }
      }
      function pt(e, t, n, i, o, s) {
        const r = ri.get(e);
        if (!r) {
          Cn++;
          return;
        }
        const l = (a) => {
          a && a.trigger();
        };
        if (Co(), t === "clear") r.forEach(l);
        else {
          const a = V(e), f = a && To(n);
          if (a && n === "length") {
            const c = Number(i);
            r.forEach((u, h) => {
              (h === "length" || h === Pn || !Je(h) && h >= c) && l(u);
            });
          } else switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), f && l(r.get(Pn)), t) {
            case "add":
              a ? f && l(r.get("length")) : (l(r.get(zt)), Yt(e) && l(r.get(no)));
              break;
            case "delete":
              a || (l(r.get(zt)), Yt(e) && l(r.get(no)));
              break;
            case "set":
              Yt(e) && l(r.get(zt));
              break;
          }
        }
        Po();
      }
      function ta(e, t) {
        const n = ri.get(e);
        return n && n.get(t);
      }
      function Ut(e) {
        const t = ie(e);
        return t === e ? t : ($e(t, "iterate", Pn), je(e) ? t : t.map(we));
      }
      function Pi(e) {
        return $e(e = ie(e), "iterate", Pn), e;
      }
      const na = {
        __proto__: null,
        [Symbol.iterator]() {
          return Ui(this, Symbol.iterator, we);
        },
        concat(...e) {
          return Ut(this).concat(...e.map((t) => V(t) ? Ut(t) : t));
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
          return pn(this, "pop");
        },
        push(...e) {
          return pn(this, "push", e);
        },
        reduce(e, ...t) {
          return Zo(this, "reduce", e, t);
        },
        reduceRight(e, ...t) {
          return Zo(this, "reduceRight", e, t);
        },
        shift() {
          return pn(this, "shift");
        },
        some(e, t) {
          return ft(this, "some", e, t, void 0, arguments);
        },
        splice(...e) {
          return pn(this, "splice", e);
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
          return pn(this, "unshift", e);
        },
        values() {
          return Ui(this, "values", we);
        }
      };
      function Ui(e, t, n) {
        const i = Pi(e), o = i[t]();
        return i !== e && !je(e) && (o._next = o.next, o.next = () => {
          const s = o._next();
          return s.value && (s.value = n(s.value)), s;
        }), o;
      }
      const ia = Array.prototype;
      function ft(e, t, n, i, o, s) {
        const r = Pi(e), l = r !== e && !je(e), a = r[t];
        if (a !== ia[t]) {
          const u = a.apply(e, s);
          return l ? we(u) : u;
        }
        let f = n;
        r !== e && (l ? f = function(u, h) {
          return n.call(this, we(u), h, e);
        } : n.length > 2 && (f = function(u, h) {
          return n.call(this, u, h, e);
        }));
        const c = a.call(r, f, i);
        return l && o ? o(c) : c;
      }
      function Zo(e, t, n, i) {
        const o = Pi(e);
        let s = n;
        return o !== e && (je(e) ? n.length > 3 && (s = function(r, l, a) {
          return n.call(this, r, l, a, e);
        }) : s = function(r, l, a) {
          return n.call(this, r, we(l), a, e);
        }), o[t](s, ...i);
      }
      function Wi(e, t, n) {
        const i = ie(e);
        $e(i, "iterate", Pn);
        const o = i[t](...n);
        return (o === -1 || o === false) && Io(n[0]) ? (n[0] = ie(n[0]), i[t](...n)) : o;
      }
      function pn(e, t, n = []) {
        vt(), Co();
        const i = ie(e)[t].apply(e, n);
        return Po(), wt(), i;
      }
      const oa = bo("__proto__,__v_isRef,__isVue"), ur = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je));
      function sa(e) {
        Je(e) || (e = String(e));
        const t = ie(this);
        return $e(t, "has", e), t.hasOwnProperty(e);
      }
      class fr {
        constructor(t = false, n = false) {
          this._isReadonly = t, this._isShallow = n;
        }
        get(t, n, i) {
          if (n === "__v_skip") return t.__v_skip;
          const o = this._isReadonly, s = this._isShallow;
          if (n === "__v_isReactive") return !o;
          if (n === "__v_isReadonly") return o;
          if (n === "__v_isShallow") return s;
          if (n === "__v_raw") return i === (o ? s ? ga : gr : s ? hr : pr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
          const r = V(t);
          if (!o) {
            let a;
            if (r && (a = na[n])) return a;
            if (n === "hasOwnProperty") return sa;
          }
          const l = Reflect.get(t, n, be(t) ? t : i);
          return (Je(n) ? ur.has(n) : oa(n)) || (o || $e(t, "get", n), s) ? l : be(l) ? r && To(n) ? l : l.value : fe(l) ? o ? _r(l) : Ro(l) : l;
        }
      }
      class dr extends fr {
        constructor(t = false) {
          super(false, t);
        }
        set(t, n, i, o) {
          let s = t[n];
          if (!this._isShallow) {
            const a = Mt(s);
            if (!je(i) && !Mt(i) && (s = ie(s), i = ie(i)), !V(t) && be(s) && !be(i)) return a ? false : (s.value = i, true);
          }
          const r = V(t) && To(n) ? Number(n) < t.length : oe(t, n), l = Reflect.set(t, n, i, be(t) ? t : o);
          return t === ie(o) && (r ? Pt(i, s) && pt(t, "set", n, i) : pt(t, "add", n, i)), l;
        }
        deleteProperty(t, n) {
          const i = oe(t, n);
          t[n];
          const o = Reflect.deleteProperty(t, n);
          return o && i && pt(t, "delete", n, void 0), o;
        }
        has(t, n) {
          const i = Reflect.has(t, n);
          return (!Je(n) || !ur.has(n)) && $e(t, "has", n), i;
        }
        ownKeys(t) {
          return $e(t, "iterate", V(t) ? "length" : zt), Reflect.ownKeys(t);
        }
      }
      class ra extends fr {
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
      const la = new dr(), aa = new ra(), ca = new dr(true);
      const io = (e) => e, Un = (e) => Reflect.getPrototypeOf(e);
      function ua(e, t, n) {
        return function(...i) {
          const o = this.__v_raw, s = ie(o), r = Yt(s), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, f = o[e](...i), c = n ? io : t ? li : we;
          return !t && $e(s, "iterate", a ? no : zt), {
            next() {
              const { value: u, done: h } = f.next();
              return h ? {
                value: u,
                done: h
              } : {
                value: l ? [
                  c(u[0]),
                  c(u[1])
                ] : c(u),
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
      function fa(e, t) {
        const n = {
          get(o) {
            const s = this.__v_raw, r = ie(s), l = ie(o);
            e || (Pt(o, l) && $e(r, "get", o), $e(r, "get", l));
            const { has: a } = Un(r), f = t ? io : e ? li : we;
            if (a.call(r, o)) return f(s.get(o));
            if (a.call(r, l)) return f(s.get(l));
            s !== r && s.get(o);
          },
          get size() {
            const o = this.__v_raw;
            return !e && $e(ie(o), "iterate", zt), Reflect.get(o, "size", o);
          },
          has(o) {
            const s = this.__v_raw, r = ie(s), l = ie(o);
            return e || (Pt(o, l) && $e(r, "has", o), $e(r, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
          },
          forEach(o, s) {
            const r = this, l = r.__v_raw, a = ie(l), f = t ? io : e ? li : we;
            return !e && $e(a, "iterate", zt), l.forEach((c, u) => o.call(s, f(c), f(u), r));
          }
        };
        return Se(n, e ? {
          add: Wn("add"),
          set: Wn("set"),
          delete: Wn("delete"),
          clear: Wn("clear")
        } : {
          add(o) {
            !t && !je(o) && !Mt(o) && (o = ie(o));
            const s = ie(this);
            return Un(s).has.call(s, o) || (s.add(o), pt(s, "add", o, o)), this;
          },
          set(o, s) {
            !t && !je(s) && !Mt(s) && (s = ie(s));
            const r = ie(this), { has: l, get: a } = Un(r);
            let f = l.call(r, o);
            f || (o = ie(o), f = l.call(r, o));
            const c = a.call(r, o);
            return r.set(o, s), f ? Pt(s, c) && pt(r, "set", o, s) : pt(r, "add", o, s), this;
          },
          delete(o) {
            const s = ie(this), { has: r, get: l } = Un(s);
            let a = r.call(s, o);
            a || (o = ie(o), a = r.call(s, o)), l && l.call(s, o);
            const f = s.delete(o);
            return a && pt(s, "delete", o, void 0), f;
          },
          clear() {
            const o = ie(this), s = o.size !== 0, r = o.clear();
            return s && pt(o, "clear", void 0, void 0), r;
          }
        }), [
          "keys",
          "values",
          "entries",
          Symbol.iterator
        ].forEach((o) => {
          n[o] = ua(o, e, t);
        }), n;
      }
      function Oo(e, t) {
        const n = fa(e, t);
        return (i, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? i : Reflect.get(oe(n, o) && o in i ? n : i, o, s);
      }
      const da = {
        get: Oo(false, false)
      }, pa = {
        get: Oo(false, true)
      }, ha = {
        get: Oo(true, false)
      };
      const pr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap();
      function _a(e) {
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
      function ma(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : _a(Fl(e));
      }
      function Ro(e) {
        return Mt(e) ? e : Mo(e, false, la, da, pr);
      }
      function va(e) {
        return Mo(e, false, ca, pa, hr);
      }
      function _r(e) {
        return Mo(e, true, aa, ha, gr);
      }
      function Mo(e, t, n, i, o) {
        if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const s = ma(e);
        if (s === 0) return e;
        const r = o.get(e);
        if (r) return r;
        const l = new Proxy(e, s === 2 ? i : n);
        return o.set(e, l), l;
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
      function Io(e) {
        return e ? !!e.__v_raw : false;
      }
      function ie(e) {
        const t = e && e.__v_raw;
        return t ? ie(t) : e;
      }
      function wa(e) {
        return !oe(e, "__v_skip") && Object.isExtensible(e) && Qs(e, "__v_skip", true), e;
      }
      const we = (e) => fe(e) ? Ro(e) : e, li = (e) => fe(e) ? _r(e) : e;
      function be(e) {
        return e ? e.__v_isRef === true : false;
      }
      function pe(e) {
        return mr(e, false);
      }
      function ya(e) {
        return mr(e, true);
      }
      function mr(e, t) {
        return be(e) ? e : new ba(e, t);
      }
      class ba {
        constructor(t, n) {
          this.dep = new Eo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ie(t), this._value = n ? t : we(t), this.__v_isShallow = n;
        }
        get value() {
          return this.dep.track(), this._value;
        }
        set value(t) {
          const n = this._rawValue, i = this.__v_isShallow || je(t) || Mt(t);
          t = i ? t : ie(t), Pt(t, n) && (this._rawValue = t, this._value = i ? t : we(t), this.dep.trigger());
        }
      }
      function xa(e) {
        e.dep && e.dep.trigger();
      }
      function Pe(e) {
        return be(e) ? e.value : e;
      }
      const $a = {
        get: (e, t, n) => t === "__v_raw" ? e : Pe(Reflect.get(e, t, n)),
        set: (e, t, n, i) => {
          const o = e[t];
          return be(o) && !be(n) ? (o.value = n, true) : Reflect.set(e, t, n, i);
        }
      };
      function vr(e) {
        return Xt(e) ? e : new Proxy(e, $a);
      }
      function wr(e) {
        const t = V(e) ? new Array(e.length) : {};
        for (const n in e) t[n] = Ta(e, n);
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
          return ta(ie(this._object), this._key);
        }
      }
      function Ta(e, t, n) {
        const i = e[t];
        return be(i) ? i : new Sa(e, t, n);
      }
      class Ca {
        constructor(t, n, i) {
          this.fn = t, this.setter = n, this._value = void 0, this.dep = new Eo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
        }
        notify() {
          if (this.flags |= 16, !(this.flags & 8) && ue !== this) return or(this, true), true;
        }
        get value() {
          const t = this.dep.track();
          return lr(this), t && (t.version = this.dep.version), this._value;
        }
        set value(t) {
          this.setter && this.setter(t);
        }
      }
      function Pa(e, t, n = false) {
        let i, o;
        return K(e) ? i = e : (i = e.get, o = e.set), new Ca(i, o, n);
      }
      const Kn = {}, ai = /* @__PURE__ */ new WeakMap();
      let Ht;
      function Aa(e, t = false, n = Ht) {
        if (n) {
          let i = ai.get(n);
          i || ai.set(n, i = []), i.push(e);
        }
      }
      function Ea(e, t, n = le) {
        const { immediate: i, deep: o, once: s, scheduler: r, augmentJob: l, call: a } = n, f = (k) => o ? k : je(k) || o === false || o === 0 ? ht(k, 1) : ht(k);
        let c, u, h, g, w = false, v = false;
        if (be(e) ? (u = () => e.value, w = je(e)) : Xt(e) ? (u = () => f(e), w = true) : V(e) ? (v = true, w = e.some((k) => Xt(k) || je(k)), u = () => e.map((k) => {
          if (be(k)) return k.value;
          if (Xt(k)) return f(k);
          if (K(k)) return a ? a(k, 2) : k();
        })) : K(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
          if (h) {
            vt();
            try {
              h();
            } finally {
              wt();
            }
          }
          const k = Ht;
          Ht = c;
          try {
            return a ? a(e, 3, [
              g
            ]) : e(g);
          } finally {
            Ht = k;
          }
        } : u = rt, t && o) {
          const k = u, A = o === true ? 1 / 0 : o;
          u = () => ht(k(), A);
        }
        const _ = Ql(), C = () => {
          c.stop(), _ && _.active && $o(_.effects, c);
        };
        if (s && t) {
          const k = t;
          t = (...A) => {
            k(...A), C();
          };
        }
        let y = v ? new Array(e.length).fill(Kn) : Kn;
        const F = (k) => {
          if (!(!(c.flags & 1) || !c.dirty && !k)) if (t) {
            const A = c.run();
            if (o || w || (v ? A.some((z, G) => Pt(z, y[G])) : Pt(A, y))) {
              h && h();
              const z = Ht;
              Ht = c;
              try {
                const G = [
                  A,
                  y === Kn ? void 0 : v && y[0] === Kn ? [] : y,
                  g
                ];
                y = A, a ? a(t, 3, G) : t(...G);
              } finally {
                Ht = z;
              }
            }
          } else c.run();
        };
        return l && l(F), c = new nr(u), c.scheduler = r ? () => r(F, false) : F, g = (k) => Aa(k, false, c), h = c.onStop = () => {
          const k = ai.get(c);
          if (k) {
            if (a) a(k, 4);
            else for (const A of k) A();
            ai.delete(c);
          }
        }, t ? i ? F(true) : y = c.run() : r ? r(F.bind(null, true), true) : c.run(), C.pause = c.pause.bind(c), C.resume = c.resume.bind(c), C.stop = C, C;
      }
      function ht(e, t = 1 / 0, n) {
        if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
        if (n.add(e), t--, be(e)) ht(e.value, t, n);
        else if (V(e)) for (let i = 0; i < e.length; i++) ht(e[i], t, n);
        else if ($i(e) || Yt(e)) e.forEach((i) => {
          ht(i, t, n);
        });
        else if (Js(e)) {
          for (const i in e) ht(e[i], t, n);
          for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && ht(e[i], t, n);
        }
        return e;
      }
      function Hn(e, t, n, i) {
        try {
          return i ? e(...i) : e();
        } catch (o) {
          Bn(o, t, n);
        }
      }
      function ct(e, t, n, i) {
        if (K(e)) {
          const o = Hn(e, t, n, i);
          return o && So(o) && o.catch((s) => {
            Bn(s, t, n);
          }), o;
        }
        if (V(e)) {
          const o = [];
          for (let s = 0; s < e.length; s++) o.push(ct(e[s], t, n, i));
          return o;
        }
      }
      function Bn(e, t, n, i = true) {
        const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || le;
        if (t) {
          let l = t.parent;
          const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
          for (; l; ) {
            const c = l.ec;
            if (c) {
              for (let u = 0; u < c.length; u++) if (c[u](e, a, f) === false) return;
            }
            l = l.parent;
          }
          if (s) {
            vt(), Hn(s, null, 10, [
              e,
              a,
              f
            ]), wt();
            return;
          }
        }
        Oa(e, n, o, i, r);
      }
      function Oa(e, t, n, i = true, o = false) {
        if (o) throw e;
        console.error(e);
      }
      const Ee = [];
      let ot = -1;
      const Jt = [];
      let $t = null, Kt = 0;
      const yr = Promise.resolve();
      let ci = null;
      function No(e) {
        const t = ci || yr;
        return e ? t.then(this ? e.bind(this) : e) : t;
      }
      function Ra(e) {
        let t = ot + 1, n = Ee.length;
        for (; t < n; ) {
          const i = t + n >>> 1, o = Ee[i], s = An(o);
          s < e || s === e && o.flags & 2 ? t = i + 1 : n = i;
        }
        return t;
      }
      function ko(e) {
        if (!(e.flags & 1)) {
          const t = An(e), n = Ee[Ee.length - 1];
          !n || !(e.flags & 2) && t >= An(n) ? Ee.push(e) : Ee.splice(Ra(t), 0, e), e.flags |= 1, br();
        }
      }
      function br() {
        ci || (ci = yr.then($r));
      }
      function oo(e) {
        V(e) ? Jt.push(...e) : $t && e.id === -1 ? $t.splice(Kt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), br();
      }
      function es(e, t, n = ot + 1) {
        for (; n < Ee.length; n++) {
          const i = Ee[n];
          if (i && i.flags & 2) {
            if (e && i.id !== e.uid) continue;
            Ee.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
          }
        }
      }
      function xr(e) {
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
      function $r(e) {
        try {
          for (ot = 0; ot < Ee.length; ot++) {
            const t = Ee[ot];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Hn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
          }
        } finally {
          for (; ot < Ee.length; ot++) {
            const t = Ee[ot];
            t && (t.flags &= -2);
          }
          ot = -1, Ee.length = 0, xr(), ci = null, (Ee.length || Jt.length) && $r();
        }
      }
      let ve = null, Ai = null;
      function ui(e) {
        const t = ve;
        return ve = e, Ai = e && e.type.__scopeId || null, t;
      }
      function Ma(e) {
        Ai = e;
      }
      function Ia() {
        Ai = null;
      }
      const Na = (e) => Ge;
      function Ge(e, t = ve, n) {
        if (!t || e._n) return e;
        const i = (...o) => {
          i._d && fs(-1);
          const s = ui(t);
          let r;
          try {
            r = e(...o);
          } finally {
            ui(s), i._d && fs(1);
          }
          return r;
        };
        return i._n = true, i._c = true, i._d = true, i;
      }
      function ee(e, t) {
        if (ve === null) return e;
        const n = Ii(ve), i = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
          let [s, r, l, a = le] = t[o];
          s && (K(s) && (s = {
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
      function Dt(e, t, n, i) {
        const o = e.dirs, s = t && t.dirs;
        for (let r = 0; r < o.length; r++) {
          const l = o[r];
          s && (l.oldValue = s[r].value);
          let a = l.dir[i];
          a && (vt(), ct(a, n, 8, [
            e.el,
            l,
            e,
            t
          ]), wt());
        }
      }
      const ka = Symbol("_vte"), Da = (e) => e.__isTeleport;
      function Do(e, t) {
        e.shapeFlag & 6 && e.component ? (e.transition = t, Do(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
      }
      function zn(e, t) {
        return K(e) ? Se({
          name: e.name
        }, t, {
          setup: e
        }) : e;
      }
      function Sr(e) {
        e.ids = [
          e.ids[0] + e.ids[2]++ + "-",
          0,
          0
        ];
      }
      function fi(e, t, n, i, o = false) {
        if (V(e)) {
          e.forEach((w, v) => fi(w, t && (V(t) ? t[v] : t), n, i, o));
          return;
        }
        if (Qt(i) && !o) {
          i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && fi(e, t, n, i.component.subTree);
          return;
        }
        const s = i.shapeFlag & 4 ? Ii(i.component) : i.el, r = o ? null : s, { i: l, r: a } = e, f = t && t.r, c = l.refs === le ? l.refs = {} : l.refs, u = l.setupState, h = ie(u), g = u === le ? () => false : (w) => oe(h, w);
        if (f != null && f !== a && (ge(f) ? (c[f] = null, g(f) && (u[f] = null)) : be(f) && (f.value = null)), K(a)) Hn(a, l, 12, [
          r,
          c
        ]);
        else {
          const w = ge(a), v = be(a);
          if (w || v) {
            const _ = () => {
              if (e.f) {
                const C = w ? g(a) ? u[a] : c[a] : a.value;
                o ? V(C) && $o(C, s) : V(C) ? C.includes(s) || C.push(s) : w ? (c[a] = [
                  s
                ], g(a) && (u[a] = c[a])) : (a.value = [
                  s
                ], e.k && (c[e.k] = a.value));
              } else w ? (c[a] = r, g(a) && (u[a] = r)) : v && (a.value = r, e.k && (c[e.k] = r));
            };
            r ? (_.id = -1, Le(_, n)) : _();
          }
        }
      }
      Ci().requestIdleCallback;
      Ci().cancelIdleCallback;
      const Qt = (e) => !!e.type.__asyncLoader, Tr = (e) => e.type.__isKeepAlive;
      function La(e, t) {
        Cr(e, "a", t);
      }
      function Fa(e, t) {
        Cr(e, "da", t);
      }
      function Cr(e, t, n = ye) {
        const i = e.__wdc || (e.__wdc = () => {
          let o = n;
          for (; o; ) {
            if (o.isDeactivated) return;
            o = o.parent;
          }
          return e();
        });
        if (Ei(t, i, n), n) {
          let o = n.parent;
          for (; o && o.parent; ) Tr(o.parent.vnode) && Ha(i, t, n, o), o = o.parent;
        }
      }
      function Ha(e, t, n, i) {
        const o = Ei(t, e, i, true);
        Pr(() => {
          $o(i[t], o);
        }, n);
      }
      function Ei(e, t, n = ye, i = false) {
        if (n) {
          const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
            vt();
            const l = jt(n), a = ct(t, n, e, r);
            return l(), wt(), a;
          });
          return i ? o.unshift(s) : o.push(s), s;
        }
      }
      const yt = (e) => (t, n = ye) => {
        (!Rn || e === "sp") && Ei(e, (...i) => t(...i), n);
      }, Ba = yt("bm"), za = yt("m"), ja = yt("bu"), qa = yt("u"), Va = yt("bum"), Pr = yt("um"), Ua = yt("sp"), Wa = yt("rtg"), Ka = yt("rtc");
      function Ga(e, t = ye) {
        Ei("ec", e, t);
      }
      const Ar = "components", Ya = "directives";
      function En(e, t) {
        return Er(Ar, e, true, t) || e;
      }
      const Xa = Symbol.for("v-ndc");
      function Oi(e) {
        return Er(Ya, e);
      }
      function Er(e, t, n = true, i = false) {
        const o = ve || ye;
        if (o) {
          const s = o.type;
          if (e === Ar) {
            const l = Vc(s, false);
            if (l && (l === t || l === qe(t) || l === Ti(qe(t)))) return s;
          }
          const r = ts(o[e] || s[e], t) || ts(o.appContext[e], t);
          return !r && i ? s : r;
        }
      }
      function ts(e, t) {
        return e && (e[t] || e[qe(t)] || e[Ti(qe(t))]);
      }
      function Et(e, t, n, i) {
        let o;
        const s = n, r = V(e);
        if (r || ge(e)) {
          const l = r && Xt(e);
          let a = false, f = false;
          l && (a = !je(e), f = Mt(e), e = Pi(e)), o = new Array(e.length);
          for (let c = 0, u = e.length; c < u; c++) o[c] = t(a ? f ? li(we(e[c])) : we(e[c]) : e[c], c, void 0, s);
        } else if (typeof e == "number") {
          o = new Array(e);
          for (let l = 0; l < e; l++) o[l] = t(l + 1, l, void 0, s);
        } else if (fe(e)) if (e[Symbol.iterator]) o = Array.from(e, (l, a) => t(l, a, void 0, s));
        else {
          const l = Object.keys(e);
          o = new Array(l.length);
          for (let a = 0, f = l.length; a < f; a++) {
            const c = l[a];
            o[a] = t(e[c], c, a, s);
          }
        }
        else o = [];
        return o;
      }
      function gt(e, t, n = {}, i, o) {
        if (ve.ce || ve.parent && Qt(ve.parent) && ve.parent.ce) return t !== "default" && (n.name = t), L(), Fe(ae, null, [
          _e("slot", n, i)
        ], 64);
        let s = e[t];
        s && s._c && (s._d = false), L();
        const r = s && Or(s(n)), l = n.key || r && r.key, a = Fe(ae, {
          key: (l && !Je(l) ? l : `_${t}`) + ""
        }, r || [], r && e._ === 1 ? 64 : -2);
        return !o && a.scopeId && (a.slotScopeIds = [
          a.scopeId + "-s"
        ]), s && s._c && (s._d = true), a;
      }
      function Or(e) {
        return e.some((t) => sn(t) ? !(t.type === Qe || t.type === ae && !Or(t.children)) : true) ? e : null;
      }
      const so = (e) => e ? Zr(e) ? Ii(e) : so(e.parent) : null, yn = Se(/* @__PURE__ */ Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => so(e.parent),
        $root: (e) => so(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => Mr(e),
        $forceUpdate: (e) => e.f || (e.f = () => {
          ko(e.update);
        }),
        $nextTick: (e) => e.n || (e.n = No.bind(e.proxy)),
        $watch: (e) => wc.bind(e)
      }), Ki = (e, t) => e !== le && !e.__isScriptSetup && oe(e, t), Ja = {
        get({ _: e }, t) {
          if (t === "__v_skip") return true;
          const { ctx: n, setupState: i, data: o, props: s, accessCache: r, type: l, appContext: a } = e;
          let f;
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
              if (Ki(i, t)) return r[t] = 1, i[t];
              if (o !== le && oe(o, t)) return r[t] = 2, o[t];
              if ((f = e.propsOptions[0]) && oe(f, t)) return r[t] = 3, s[t];
              if (n !== le && oe(n, t)) return r[t] = 4, n[t];
              ro && (r[t] = 0);
            }
          }
          const c = yn[t];
          let u, h;
          if (c) return t === "$attrs" && $e(e.attrs, "get", ""), c(e);
          if ((u = l.__cssModules) && (u = u[t])) return u;
          if (n !== le && oe(n, t)) return r[t] = 4, n[t];
          if (h = a.config.globalProperties, oe(h, t)) return h[t];
        },
        set({ _: e }, t, n) {
          const { data: i, setupState: o, ctx: s } = e;
          return Ki(o, t) ? (o[t] = n, true) : i !== le && oe(i, t) ? (i[t] = n, true) : oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
        },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: o, propsOptions: s } }, r) {
          let l;
          return !!n[r] || e !== le && oe(e, r) || Ki(t, r) || (l = s[0]) && oe(l, r) || oe(i, r) || oe(yn, r) || oe(o.config.globalProperties, r);
        },
        defineProperty(e, t, n) {
          return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
        }
      };
      function ns(e) {
        return V(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
      }
      function Qa(e) {
        const t = Hc();
        let n = e();
        return fo(), So(n) && (n = n.catch((i) => {
          throw jt(t), i;
        })), [
          n,
          () => jt(t)
        ];
      }
      let ro = true;
      function Za(e) {
        const t = Mr(e), n = e.proxy, i = e.ctx;
        ro = false, t.beforeCreate && is(t.beforeCreate, e, "bc");
        const { data: o, computed: s, methods: r, watch: l, provide: a, inject: f, created: c, beforeMount: u, mounted: h, beforeUpdate: g, updated: w, activated: v, deactivated: _, beforeDestroy: C, beforeUnmount: y, destroyed: F, unmounted: k, render: A, renderTracked: z, renderTriggered: G, errorCaptured: $, serverPrefetch: M, expose: D, inheritAttrs: H, components: te, directives: de, filters: re } = t;
        if (f && ec(f, i, null), r) for (const X in r) {
          const J = r[X];
          K(J) && (i[X] = J.bind(n));
        }
        if (o) {
          const X = o.call(n, n);
          fe(X) && (e.data = Ro(X));
        }
        if (ro = true, s) for (const X in s) {
          const J = s[X], xe = K(J) ? J.bind(n, n) : K(J.get) ? J.get.bind(n, n) : rt, Vt = !K(J) && K(J.set) ? J.set.bind(n) : rt, kt = He({
            get: xe,
            set: Vt
          });
          Object.defineProperty(i, X, {
            enumerable: true,
            configurable: true,
            get: () => kt.value,
            set: (Ze) => kt.value = Ze
          });
        }
        if (l) for (const X in l) Rr(l[X], i, n, X);
        if (a) {
          const X = K(a) ? a.call(n) : a;
          Reflect.ownKeys(X).forEach((J) => {
            rc(J, X[J]);
          });
        }
        c && is(c, e, "c");
        function ne(X, J) {
          V(J) ? J.forEach((xe) => X(xe.bind(n))) : J && X(J.bind(n));
        }
        if (ne(Ba, u), ne(za, h), ne(ja, g), ne(qa, w), ne(La, v), ne(Fa, _), ne(Ga, $), ne(Ka, z), ne(Wa, G), ne(Va, y), ne(Pr, k), ne(Ua, M), V(D)) if (D.length) {
          const X = e.exposed || (e.exposed = {});
          D.forEach((J) => {
            Object.defineProperty(X, J, {
              get: () => n[J],
              set: (xe) => n[J] = xe
            });
          });
        } else e.exposed || (e.exposed = {});
        A && e.render === rt && (e.render = A), H != null && (e.inheritAttrs = H), te && (e.components = te), de && (e.directives = de), M && Sr(e);
      }
      function ec(e, t, n = rt) {
        V(e) && (e = lo(e));
        for (const i in e) {
          const o = e[i];
          let s;
          fe(o) ? "default" in o ? s = Qn(o.from || i, o.default, true) : s = Qn(o.from || i) : s = Qn(o), be(s) ? Object.defineProperty(t, i, {
            enumerable: true,
            configurable: true,
            get: () => s.value,
            set: (r) => s.value = r
          }) : t[i] = s;
        }
      }
      function is(e, t, n) {
        ct(V(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
      }
      function Rr(e, t, n, i) {
        let o = i.includes(".") ? Ur(n, i) : () => n[i];
        if (ge(e)) {
          const s = t[e];
          K(s) && Be(o, s);
        } else if (K(e)) Be(o, e.bind(n));
        else if (fe(e)) if (V(e)) e.forEach((s) => Rr(s, t, n, i));
        else {
          const s = K(e.handler) ? e.handler.bind(n) : t[e.handler];
          K(s) && Be(o, s, e);
        }
      }
      function Mr(e) {
        const t = e.type, { mixins: n, extends: i } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: r } } = e.appContext, l = s.get(t);
        let a;
        return l ? a = l : !o.length && !n && !i ? a = t : (a = {}, o.length && o.forEach((f) => di(a, f, r, true)), di(a, t, r)), fe(t) && s.set(t, a), a;
      }
      function di(e, t, n, i = false) {
        const { mixins: o, extends: s } = t;
        s && di(e, s, n, true), o && o.forEach((r) => di(e, r, n, true));
        for (const r in t) if (!(i && r === "expose")) {
          const l = tc[r] || n && n[r];
          e[r] = l ? l(e[r], t[r]) : t[r];
        }
        return e;
      }
      const tc = {
        data: os,
        props: ss,
        emits: ss,
        methods: _n,
        computed: _n,
        beforeCreate: Ce,
        created: Ce,
        beforeMount: Ce,
        mounted: Ce,
        beforeUpdate: Ce,
        updated: Ce,
        beforeDestroy: Ce,
        beforeUnmount: Ce,
        destroyed: Ce,
        unmounted: Ce,
        activated: Ce,
        deactivated: Ce,
        errorCaptured: Ce,
        serverPrefetch: Ce,
        components: _n,
        directives: _n,
        watch: ic,
        provide: os,
        inject: nc
      };
      function os(e, t) {
        return t ? e ? function() {
          return Se(K(e) ? e.call(this, this) : e, K(t) ? t.call(this, this) : t);
        } : t : e;
      }
      function nc(e, t) {
        return _n(lo(e), lo(t));
      }
      function lo(e) {
        if (V(e)) {
          const t = {};
          for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
          return t;
        }
        return e;
      }
      function Ce(e, t) {
        return e ? [
          ...new Set([].concat(e, t))
        ] : t;
      }
      function _n(e, t) {
        return e ? Se(/* @__PURE__ */ Object.create(null), e, t) : t;
      }
      function ss(e, t) {
        return e ? V(e) && V(t) ? [
          .../* @__PURE__ */ new Set([
            ...e,
            ...t
          ])
        ] : Se(/* @__PURE__ */ Object.create(null), ns(e), ns(t ?? {})) : t;
      }
      function ic(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = Se(/* @__PURE__ */ Object.create(null), e);
        for (const i in t) n[i] = Ce(e[i], t[i]);
        return n;
      }
      function Ir() {
        return {
          app: null,
          config: {
            isNativeTag: Dl,
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
      let oc = 0;
      function sc(e, t) {
        return function(i, o = null) {
          K(i) || (i = Se({}, i)), o != null && !fe(o) && (o = null);
          const s = Ir(), r = /* @__PURE__ */ new WeakSet(), l = [];
          let a = false;
          const f = s.app = {
            _uid: oc++,
            _component: i,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: Kc,
            get config() {
              return s.config;
            },
            set config(c) {
            },
            use(c, ...u) {
              return r.has(c) || (c && K(c.install) ? (r.add(c), c.install(f, ...u)) : K(c) && (r.add(c), c(f, ...u))), f;
            },
            mixin(c) {
              return s.mixins.includes(c) || s.mixins.push(c), f;
            },
            component(c, u) {
              return u ? (s.components[c] = u, f) : s.components[c];
            },
            directive(c, u) {
              return u ? (s.directives[c] = u, f) : s.directives[c];
            },
            mount(c, u, h) {
              if (!a) {
                const g = f._ceVNode || _e(i, o);
                return g.appContext = s, h === true ? h = "svg" : h === false && (h = void 0), e(g, c, h), a = true, f._container = c, c.__vue_app__ = f, Ii(g.component);
              }
            },
            onUnmount(c) {
              l.push(c);
            },
            unmount() {
              a && (ct(l, f._instance, 16), e(null, f._container), delete f._container.__vue_app__);
            },
            provide(c, u) {
              return s.provides[c] = u, f;
            },
            runWithContext(c) {
              const u = Zt;
              Zt = f;
              try {
                return c();
              } finally {
                Zt = u;
              }
            }
          };
          return f;
        };
      }
      let Zt = null;
      function rc(e, t) {
        if (ye) {
          let n = ye.provides;
          const i = ye.parent && ye.parent.provides;
          i === n && (n = ye.provides = Object.create(i)), n[e] = t;
        }
      }
      function Qn(e, t, n = false) {
        const i = ye || ve;
        if (i || Zt) {
          let o = Zt ? Zt._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
          if (o && e in o) return o[e];
          if (arguments.length > 1) return n && K(t) ? t.call(i && i.proxy) : t;
        }
      }
      const Nr = {}, kr = () => Object.create(Nr), Dr = (e) => Object.getPrototypeOf(e) === Nr;
      function lc(e, t, n, i = false) {
        const o = {}, s = kr();
        e.propsDefaults = /* @__PURE__ */ Object.create(null), Lr(e, t, o, s);
        for (const r in e.propsOptions[0]) r in o || (o[r] = void 0);
        n ? e.props = i ? o : va(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
      }
      function ac(e, t, n, i) {
        const { props: o, attrs: s, vnode: { patchFlag: r } } = e, l = ie(o), [a] = e.propsOptions;
        let f = false;
        if ((i || r > 0) && !(r & 16)) {
          if (r & 8) {
            const c = e.vnode.dynamicProps;
            for (let u = 0; u < c.length; u++) {
              let h = c[u];
              if (Ri(e.emitsOptions, h)) continue;
              const g = t[h];
              if (a) if (oe(s, h)) g !== s[h] && (s[h] = g, f = true);
              else {
                const w = qe(h);
                o[w] = ao(a, l, w, g, e, false);
              }
              else g !== s[h] && (s[h] = g, f = true);
            }
          }
        } else {
          Lr(e, t, o, s) && (f = true);
          let c;
          for (const u in l) (!t || !oe(t, u) && ((c = Nt(u)) === u || !oe(t, c))) && (a ? n && (n[u] !== void 0 || n[c] !== void 0) && (o[u] = ao(a, l, u, void 0, e, true)) : delete o[u]);
          if (s !== l) for (const u in s) (!t || !oe(t, u)) && (delete s[u], f = true);
        }
        f && pt(e.attrs, "set", "");
      }
      function Lr(e, t, n, i) {
        const [o, s] = e.propsOptions;
        let r = false, l;
        if (t) for (let a in t) {
          if (mn(a)) continue;
          const f = t[a];
          let c;
          o && oe(o, c = qe(a)) ? !s || !s.includes(c) ? n[c] = f : (l || (l = {}))[c] = f : Ri(e.emitsOptions, a) || (!(a in i) || f !== i[a]) && (i[a] = f, r = true);
        }
        if (s) {
          const a = ie(n), f = l || le;
          for (let c = 0; c < s.length; c++) {
            const u = s[c];
            n[u] = ao(o, a, u, f[u], e, !oe(f, u));
          }
        }
        return r;
      }
      function ao(e, t, n, i, o, s) {
        const r = e[n];
        if (r != null) {
          const l = oe(r, "default");
          if (l && i === void 0) {
            const a = r.default;
            if (r.type !== Function && !r.skipFactory && K(a)) {
              const { propsDefaults: f } = o;
              if (n in f) i = f[n];
              else {
                const c = jt(o);
                i = f[n] = a.call(null, t), c();
              }
            } else i = a;
            o.ce && o.ce._setProp(n, i);
          }
          r[0] && (s && !l ? i = false : r[1] && (i === "" || i === Nt(n)) && (i = true));
        }
        return i;
      }
      const cc = /* @__PURE__ */ new WeakMap();
      function Fr(e, t, n = false) {
        const i = n ? cc : t.propsCache, o = i.get(e);
        if (o) return o;
        const s = e.props, r = {}, l = [];
        let a = false;
        if (!K(e)) {
          const c = (u) => {
            a = true;
            const [h, g] = Fr(u, t, true);
            Se(r, h), g && l.push(...g);
          };
          !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
        }
        if (!s && !a) return fe(e) && i.set(e, Gt), Gt;
        if (V(s)) for (let c = 0; c < s.length; c++) {
          const u = qe(s[c]);
          rs(u) && (r[u] = le);
        }
        else if (s) for (const c in s) {
          const u = qe(c);
          if (rs(u)) {
            const h = s[c], g = r[u] = V(h) || K(h) ? {
              type: h
            } : Se({}, h), w = g.type;
            let v = false, _ = true;
            if (V(w)) for (let C = 0; C < w.length; ++C) {
              const y = w[C], F = K(y) && y.name;
              if (F === "Boolean") {
                v = true;
                break;
              } else F === "String" && (_ = false);
            }
            else v = K(w) && w.name === "Boolean";
            g[0] = v, g[1] = _, (v || oe(g, "default")) && l.push(u);
          }
        }
        const f = [
          r,
          l
        ];
        return fe(e) && i.set(e, f), f;
      }
      function rs(e) {
        return e[0] !== "$" && !mn(e);
      }
      const Lo = (e) => e[0] === "_" || e === "$stable", Fo = (e) => V(e) ? e.map(Ve) : [
        Ve(e)
      ], uc = (e, t, n) => {
        if (t._n) return t;
        const i = Ge((...o) => Fo(t(...o)), n);
        return i._c = false, i;
      }, Hr = (e, t, n) => {
        const i = e._ctx;
        for (const o in e) {
          if (Lo(o)) continue;
          const s = e[o];
          if (K(s)) t[o] = uc(o, s, i);
          else if (s != null) {
            const r = Fo(s);
            t[o] = () => r;
          }
        }
      }, Br = (e, t) => {
        const n = Fo(t);
        e.slots.default = () => n;
      }, zr = (e, t, n) => {
        for (const i in t) (n || !Lo(i)) && (e[i] = t[i]);
      }, fc = (e, t, n) => {
        const i = e.slots = kr();
        if (e.vnode.shapeFlag & 32) {
          const o = t._;
          o ? (zr(i, t, n), n && Qs(i, "_", o, true)) : Hr(t, i);
        } else t && Br(e, t);
      }, dc = (e, t, n) => {
        const { vnode: i, slots: o } = e;
        let s = true, r = le;
        if (i.shapeFlag & 32) {
          const l = t._;
          l ? n && l === 1 ? s = false : zr(o, t, n) : (s = !t.$stable, Hr(t, o)), r = t;
        } else t && (Br(e, t), r = {
          default: 1
        });
        if (s) for (const l in o) !Lo(l) && r[l] == null && delete o[l];
      }, Le = Mc;
      function pc(e) {
        return hc(e);
      }
      function hc(e, t) {
        const n = Ci();
        n.__VUE__ = true;
        const { insert: i, remove: o, patchProp: s, createElement: r, createText: l, createComment: a, setText: f, setElementText: c, parentNode: u, nextSibling: h, setScopeId: g = rt, insertStaticContent: w } = e, v = (d, p, m, S = null, b = null, x = null, I = void 0, R = null, O = !!p.dynamicChildren) => {
          if (d === p) return;
          d && !Tt(d, p) && (S = Vn(d), Ze(d, b, x, true), d = null), p.patchFlag === -2 && (O = false, p.dynamicChildren = null);
          const { type: T, ref: j, shapeFlag: N } = p;
          switch (T) {
            case Mi:
              _(d, p, m, S);
              break;
            case Qe:
              C(d, p, m, S);
              break;
            case Zn:
              d == null && y(p, m, S, I);
              break;
            case ae:
              te(d, p, m, S, b, x, I, R, O);
              break;
            default:
              N & 1 ? A(d, p, m, S, b, x, I, R, O) : N & 6 ? de(d, p, m, S, b, x, I, R, O) : (N & 64 || N & 128) && T.process(d, p, m, S, b, x, I, R, O, fn);
          }
          j != null && b && fi(j, d && d.ref, x, p || d, !p);
        }, _ = (d, p, m, S) => {
          if (d == null) i(p.el = l(p.children), m, S);
          else {
            const b = p.el = d.el;
            p.children !== d.children && f(b, p.children);
          }
        }, C = (d, p, m, S) => {
          d == null ? i(p.el = a(p.children || ""), m, S) : p.el = d.el;
        }, y = (d, p, m, S) => {
          [d.el, d.anchor] = w(d.children, p, m, S, d.el, d.anchor);
        }, F = ({ el: d, anchor: p }, m, S) => {
          let b;
          for (; d && d !== p; ) b = h(d), i(d, m, S), d = b;
          i(p, m, S);
        }, k = ({ el: d, anchor: p }) => {
          let m;
          for (; d && d !== p; ) m = h(d), o(d), d = m;
          o(p);
        }, A = (d, p, m, S, b, x, I, R, O) => {
          p.type === "svg" ? I = "svg" : p.type === "math" && (I = "mathml"), d == null ? z(p, m, S, b, x, I, R, O) : M(d, p, b, x, I, R, O);
        }, z = (d, p, m, S, b, x, I, R) => {
          let O, T;
          const { props: j, shapeFlag: N, transition: B, dirs: W } = d;
          if (O = d.el = r(d.type, x, j && j.is, j), N & 8 ? c(O, d.children) : N & 16 && $(d.children, O, null, S, b, Gi(d, x), I, R), W && Dt(d, null, S, "created"), G(O, d, d.scopeId, I, S), j) {
            for (const ce in j) ce !== "value" && !mn(ce) && s(O, ce, null, j[ce], x, S);
            "value" in j && s(O, "value", null, j.value, x), (T = j.onVnodeBeforeMount) && it(T, S, d);
          }
          W && Dt(d, null, S, "beforeMount");
          const Q = gc(b, B);
          Q && B.beforeEnter(O), i(O, p, m), ((T = j && j.onVnodeMounted) || Q || W) && Le(() => {
            T && it(T, S, d), Q && B.enter(O), W && Dt(d, null, S, "mounted");
          }, b);
        }, G = (d, p, m, S, b) => {
          if (m && g(d, m), S) for (let x = 0; x < S.length; x++) g(d, S[x]);
          if (b) {
            let x = b.subTree;
            if (p === x || Kr(x.type) && (x.ssContent === p || x.ssFallback === p)) {
              const I = b.vnode;
              G(d, I, I.scopeId, I.slotScopeIds, b.parent);
            }
          }
        }, $ = (d, p, m, S, b, x, I, R, O = 0) => {
          for (let T = O; T < d.length; T++) {
            const j = d[T] = R ? St(d[T]) : Ve(d[T]);
            v(null, j, p, m, S, b, x, I, R);
          }
        }, M = (d, p, m, S, b, x, I) => {
          const R = p.el = d.el;
          let { patchFlag: O, dynamicChildren: T, dirs: j } = p;
          O |= d.patchFlag & 16;
          const N = d.props || le, B = p.props || le;
          let W;
          if (m && Lt(m, false), (W = B.onVnodeBeforeUpdate) && it(W, m, p, d), j && Dt(p, d, m, "beforeUpdate"), m && Lt(m, true), (N.innerHTML && B.innerHTML == null || N.textContent && B.textContent == null) && c(R, ""), T ? D(d.dynamicChildren, T, R, m, S, Gi(p, b), x) : I || J(d, p, R, null, m, S, Gi(p, b), x, false), O > 0) {
            if (O & 16) H(R, N, B, m, b);
            else if (O & 2 && N.class !== B.class && s(R, "class", null, B.class, b), O & 4 && s(R, "style", N.style, B.style, b), O & 8) {
              const Q = p.dynamicProps;
              for (let ce = 0; ce < Q.length; ce++) {
                const se = Q[ce], ke = N[se], Re = B[se];
                (Re !== ke || se === "value") && s(R, se, ke, Re, b, m);
              }
            }
            O & 1 && d.children !== p.children && c(R, p.children);
          } else !I && T == null && H(R, N, B, m, b);
          ((W = B.onVnodeUpdated) || j) && Le(() => {
            W && it(W, m, p, d), j && Dt(p, d, m, "updated");
          }, S);
        }, D = (d, p, m, S, b, x, I) => {
          for (let R = 0; R < p.length; R++) {
            const O = d[R], T = p[R], j = O.el && (O.type === ae || !Tt(O, T) || O.shapeFlag & 198) ? u(O.el) : m;
            v(O, T, j, null, S, b, x, I, true);
          }
        }, H = (d, p, m, S, b) => {
          if (p !== m) {
            if (p !== le) for (const x in p) !mn(x) && !(x in m) && s(d, x, p[x], null, b, S);
            for (const x in m) {
              if (mn(x)) continue;
              const I = m[x], R = p[x];
              I !== R && x !== "value" && s(d, x, R, I, b, S);
            }
            "value" in m && s(d, "value", p.value, m.value, b);
          }
        }, te = (d, p, m, S, b, x, I, R, O) => {
          const T = p.el = d ? d.el : l(""), j = p.anchor = d ? d.anchor : l("");
          let { patchFlag: N, dynamicChildren: B, slotScopeIds: W } = p;
          W && (R = R ? R.concat(W) : W), d == null ? (i(T, m, S), i(j, m, S), $(p.children || [], m, j, b, x, I, R, O)) : N > 0 && N & 64 && B && d.dynamicChildren ? (D(d.dynamicChildren, B, m, b, x, I, R), (p.key != null || b && p === b.subTree) && jr(d, p, true)) : J(d, p, m, j, b, x, I, R, O);
        }, de = (d, p, m, S, b, x, I, R, O) => {
          p.slotScopeIds = R, d == null ? p.shapeFlag & 512 ? b.ctx.activate(p, m, S, I, O) : re(p, m, S, b, x, I, O) : Te(d, p, O);
        }, re = (d, p, m, S, b, x, I) => {
          const R = d.component = Fc(d, S, b);
          if (Tr(d) && (R.ctx.renderer = fn), Bc(R, false, I), R.asyncDep) {
            if (b && b.registerDep(R, ne, I), !d.el) {
              const O = R.subTree = _e(Qe);
              C(null, O, p, m);
            }
          } else ne(R, d, p, m, b, x, I);
        }, Te = (d, p, m) => {
          const S = p.component = d.component;
          if (Tc(d, p, m)) if (S.asyncDep && !S.asyncResolved) {
            X(S, p, m);
            return;
          } else S.next = p, S.update();
          else p.el = d.el, S.vnode = p;
        }, ne = (d, p, m, S, b, x, I) => {
          const R = () => {
            if (d.isMounted) {
              let { next: N, bu: B, u: W, parent: Q, vnode: ce } = d;
              {
                const tt = qr(d);
                if (tt) {
                  N && (N.el = ce.el, X(d, N, I)), tt.asyncDep.then(() => {
                    d.isUnmounted || R();
                  });
                  return;
                }
              }
              let se = N, ke;
              Lt(d, false), N ? (N.el = ce.el, X(d, N, I)) : N = ce, B && Jn(B), (ke = N.props && N.props.onVnodeBeforeUpdate) && it(ke, Q, N, ce), Lt(d, true);
              const Re = as(d), et = d.subTree;
              d.subTree = Re, v(et, Re, u(et.el), Vn(et), d, b, x), N.el = Re.el, se === null && Ho(d, Re.el), W && Le(W, b), (ke = N.props && N.props.onVnodeUpdated) && Le(() => it(ke, Q, N, ce), b);
            } else {
              let N;
              const { el: B, props: W } = p, { bm: Q, m: ce, parent: se, root: ke, type: Re } = d, et = Qt(p);
              Lt(d, false), Q && Jn(Q), !et && (N = W && W.onVnodeBeforeMount) && it(N, se, p), Lt(d, true);
              {
                ke.ce && ke.ce._injectChildStyle(Re);
                const tt = d.subTree = as(d);
                v(null, tt, m, S, d, b, x), p.el = tt.el;
              }
              if (ce && Le(ce, b), !et && (N = W && W.onVnodeMounted)) {
                const tt = p;
                Le(() => it(N, se, tt), b);
              }
              (p.shapeFlag & 256 || se && Qt(se.vnode) && se.vnode.shapeFlag & 256) && d.a && Le(d.a, b), d.isMounted = true, p = m = S = null;
            }
          };
          d.scope.on();
          const O = d.effect = new nr(R);
          d.scope.off();
          const T = d.update = O.run.bind(O), j = d.job = O.runIfDirty.bind(O);
          j.i = d, j.id = d.uid, O.scheduler = () => ko(j), Lt(d, true), T();
        }, X = (d, p, m) => {
          p.component = d;
          const S = d.vnode.props;
          d.vnode = p, d.next = null, ac(d, p.props, S, m), dc(d, p.children, m), vt(), es(d), wt();
        }, J = (d, p, m, S, b, x, I, R, O = false) => {
          const T = d && d.children, j = d ? d.shapeFlag : 0, N = p.children, { patchFlag: B, shapeFlag: W } = p;
          if (B > 0) {
            if (B & 128) {
              Vt(T, N, m, S, b, x, I, R, O);
              return;
            } else if (B & 256) {
              xe(T, N, m, S, b, x, I, R, O);
              return;
            }
          }
          W & 8 ? (j & 16 && un(T, b, x), N !== T && c(m, N)) : j & 16 ? W & 16 ? Vt(T, N, m, S, b, x, I, R, O) : un(T, b, x, true) : (j & 8 && c(m, ""), W & 16 && $(N, m, S, b, x, I, R, O));
        }, xe = (d, p, m, S, b, x, I, R, O) => {
          d = d || Gt, p = p || Gt;
          const T = d.length, j = p.length, N = Math.min(T, j);
          let B;
          for (B = 0; B < N; B++) {
            const W = p[B] = O ? St(p[B]) : Ve(p[B]);
            v(d[B], W, m, null, b, x, I, R, O);
          }
          T > j ? un(d, b, x, true, false, N) : $(p, m, S, b, x, I, R, O, N);
        }, Vt = (d, p, m, S, b, x, I, R, O) => {
          let T = 0;
          const j = p.length;
          let N = d.length - 1, B = j - 1;
          for (; T <= N && T <= B; ) {
            const W = d[T], Q = p[T] = O ? St(p[T]) : Ve(p[T]);
            if (Tt(W, Q)) v(W, Q, m, null, b, x, I, R, O);
            else break;
            T++;
          }
          for (; T <= N && T <= B; ) {
            const W = d[N], Q = p[B] = O ? St(p[B]) : Ve(p[B]);
            if (Tt(W, Q)) v(W, Q, m, null, b, x, I, R, O);
            else break;
            N--, B--;
          }
          if (T > N) {
            if (T <= B) {
              const W = B + 1, Q = W < j ? p[W].el : S;
              for (; T <= B; ) v(null, p[T] = O ? St(p[T]) : Ve(p[T]), m, Q, b, x, I, R, O), T++;
            }
          } else if (T > B) for (; T <= N; ) Ze(d[T], b, x, true), T++;
          else {
            const W = T, Q = T, ce = /* @__PURE__ */ new Map();
            for (T = Q; T <= B; T++) {
              const De = p[T] = O ? St(p[T]) : Ve(p[T]);
              De.key != null && ce.set(De.key, T);
            }
            let se, ke = 0;
            const Re = B - Q + 1;
            let et = false, tt = 0;
            const dn = new Array(Re);
            for (T = 0; T < Re; T++) dn[T] = 0;
            for (T = W; T <= N; T++) {
              const De = d[T];
              if (ke >= Re) {
                Ze(De, b, x, true);
                continue;
              }
              let nt;
              if (De.key != null) nt = ce.get(De.key);
              else for (se = Q; se <= B; se++) if (dn[se - Q] === 0 && Tt(De, p[se])) {
                nt = se;
                break;
              }
              nt === void 0 ? Ze(De, b, x, true) : (dn[nt - Q] = T + 1, nt >= tt ? tt = nt : et = true, v(De, p[nt], m, null, b, x, I, R, O), ke++);
            }
            const Go = et ? _c(dn) : Gt;
            for (se = Go.length - 1, T = Re - 1; T >= 0; T--) {
              const De = Q + T, nt = p[De], Yo = De + 1 < j ? p[De + 1].el : S;
              dn[T] === 0 ? v(null, nt, m, Yo, b, x, I, R, O) : et && (se < 0 || T !== Go[se] ? kt(nt, m, Yo, 2) : se--);
            }
          }
        }, kt = (d, p, m, S, b = null) => {
          const { el: x, type: I, transition: R, children: O, shapeFlag: T } = d;
          if (T & 6) {
            kt(d.component.subTree, p, m, S);
            return;
          }
          if (T & 128) {
            d.suspense.move(p, m, S);
            return;
          }
          if (T & 64) {
            I.move(d, p, m, fn);
            return;
          }
          if (I === ae) {
            i(x, p, m);
            for (let N = 0; N < O.length; N++) kt(O[N], p, m, S);
            i(d.anchor, p, m);
            return;
          }
          if (I === Zn) {
            F(d, p, m);
            return;
          }
          if (S !== 2 && T & 1 && R) if (S === 0) R.beforeEnter(x), i(x, p, m), Le(() => R.enter(x), b);
          else {
            const { leave: N, delayLeave: B, afterLeave: W } = R, Q = () => {
              d.ctx.isUnmounted ? o(x) : i(x, p, m);
            }, ce = () => {
              N(x, () => {
                Q(), W && W();
              });
            };
            B ? B(x, Q, ce) : ce();
          }
          else i(x, p, m);
        }, Ze = (d, p, m, S = false, b = false) => {
          const { type: x, props: I, ref: R, children: O, dynamicChildren: T, shapeFlag: j, patchFlag: N, dirs: B, cacheIndex: W } = d;
          if (N === -2 && (b = false), R != null && (vt(), fi(R, null, m, d, true), wt()), W != null && (p.renderCache[W] = void 0), j & 256) {
            p.ctx.deactivate(d);
            return;
          }
          const Q = j & 1 && B, ce = !Qt(d);
          let se;
          if (ce && (se = I && I.onVnodeBeforeUnmount) && it(se, p, d), j & 6) kl(d.component, m, S);
          else {
            if (j & 128) {
              d.suspense.unmount(m, S);
              return;
            }
            Q && Dt(d, null, p, "beforeUnmount"), j & 64 ? d.type.remove(d, p, m, fn, S) : T && !T.hasOnce && (x !== ae || N > 0 && N & 64) ? un(T, p, m, false, true) : (x === ae && N & 384 || !b && j & 16) && un(O, p, m), S && Wo(d);
          }
          (ce && (se = I && I.onVnodeUnmounted) || Q) && Le(() => {
            se && it(se, p, d), Q && Dt(d, null, p, "unmounted");
          }, m);
        }, Wo = (d) => {
          const { type: p, el: m, anchor: S, transition: b } = d;
          if (p === ae) {
            Nl(m, S);
            return;
          }
          if (p === Zn) {
            k(d);
            return;
          }
          const x = () => {
            o(m), b && !b.persisted && b.afterLeave && b.afterLeave();
          };
          if (d.shapeFlag & 1 && b && !b.persisted) {
            const { leave: I, delayLeave: R } = b, O = () => I(m, x);
            R ? R(d.el, x, O) : O();
          } else x();
        }, Nl = (d, p) => {
          let m;
          for (; d !== p; ) m = h(d), o(d), d = m;
          o(p);
        }, kl = (d, p, m) => {
          const { bum: S, scope: b, job: x, subTree: I, um: R, m: O, a: T, parent: j, slots: { __: N } } = d;
          ls(O), ls(T), S && Jn(S), j && V(N) && N.forEach((B) => {
            j.renderCache[B] = void 0;
          }), b.stop(), x && (x.flags |= 8, Ze(I, d, p, m)), R && Le(R, p), Le(() => {
            d.isUnmounted = true;
          }, p), p && p.pendingBranch && !p.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve());
        }, un = (d, p, m, S = false, b = false, x = 0) => {
          for (let I = x; I < d.length; I++) Ze(d[I], p, m, S, b);
        }, Vn = (d) => {
          if (d.shapeFlag & 6) return Vn(d.component.subTree);
          if (d.shapeFlag & 128) return d.suspense.next();
          const p = h(d.anchor || d.el), m = p && p[ka];
          return m ? h(m) : p;
        };
        let zi = false;
        const Ko = (d, p, m) => {
          d == null ? p._vnode && Ze(p._vnode, null, null, true) : v(p._vnode || null, d, p, null, null, null, m), p._vnode = d, zi || (zi = true, es(), xr(), zi = false);
        }, fn = {
          p: v,
          um: Ze,
          m: kt,
          r: Wo,
          mt: re,
          mc: $,
          pc: J,
          pbc: D,
          n: Vn,
          o: e
        };
        return {
          render: Ko,
          hydrate: void 0,
          createApp: sc(Ko)
        };
      }
      function Gi({ type: e, props: t }, n) {
        return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
      }
      function Lt({ effect: e, job: t }, n) {
        n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
      }
      function gc(e, t) {
        return (!e || e && !e.pendingBranch) && t && !t.persisted;
      }
      function jr(e, t, n = false) {
        const i = e.children, o = t.children;
        if (V(i) && V(o)) for (let s = 0; s < i.length; s++) {
          const r = i[s];
          let l = o[s];
          l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = St(o[s]), l.el = r.el), !n && l.patchFlag !== -2 && jr(r, l)), l.type === Mi && (l.el = r.el), l.type === Qe && !l.el && (l.el = r.el);
        }
      }
      function _c(e) {
        const t = e.slice(), n = [
          0
        ];
        let i, o, s, r, l;
        const a = e.length;
        for (i = 0; i < a; i++) {
          const f = e[i];
          if (f !== 0) {
            if (o = n[n.length - 1], e[o] < f) {
              t[i] = o, n.push(i);
              continue;
            }
            for (s = 0, r = n.length - 1; s < r; ) l = s + r >> 1, e[n[l]] < f ? s = l + 1 : r = l;
            f < e[n[s]] && (s > 0 && (t[i] = n[s - 1]), n[s] = i);
          }
        }
        for (s = n.length, r = n[s - 1]; s-- > 0; ) n[s] = r, r = t[r];
        return n;
      }
      function qr(e) {
        const t = e.subTree.component;
        if (t) return t.asyncDep && !t.asyncResolved ? t : qr(t);
      }
      function ls(e) {
        if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
      }
      const mc = Symbol.for("v-scx"), vc = () => Qn(mc);
      function Be(e, t, n) {
        return Vr(e, t, n);
      }
      function Vr(e, t, n = le) {
        const { immediate: i, deep: o, flush: s, once: r } = n, l = Se({}, n), a = t && i || !t && s !== "post";
        let f;
        if (Rn) {
          if (s === "sync") {
            const g = vc();
            f = g.__watcherHandles || (g.__watcherHandles = []);
          } else if (!a) {
            const g = () => {
            };
            return g.stop = rt, g.resume = rt, g.pause = rt, g;
          }
        }
        const c = ye;
        l.call = (g, w, v) => ct(g, c, w, v);
        let u = false;
        s === "post" ? l.scheduler = (g) => {
          Le(g, c && c.suspense);
        } : s !== "sync" && (u = true, l.scheduler = (g, w) => {
          w ? g() : ko(g);
        }), l.augmentJob = (g) => {
          t && (g.flags |= 4), u && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
        };
        const h = Ea(e, t, l);
        return Rn && (f ? f.push(h) : a && h()), h;
      }
      function wc(e, t, n) {
        const i = this.proxy, o = ge(e) ? e.includes(".") ? Ur(i, e) : () => i[e] : e.bind(i, i);
        let s;
        K(t) ? s = t : (s = t.handler, n = t);
        const r = jt(this), l = Vr(o, s.bind(i), n);
        return r(), l;
      }
      function Ur(e, t) {
        const n = t.split(".");
        return () => {
          let i = e;
          for (let o = 0; o < n.length && i; o++) i = i[n[o]];
          return i;
        };
      }
      const yc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${Nt(t)}Modifiers`];
      function bc(e, t, ...n) {
        if (e.isUnmounted) return;
        const i = e.vnode.props || le;
        let o = n;
        const s = t.startsWith("update:"), r = s && yc(i, t.slice(7));
        r && (r.trim && (o = n.map((c) => ge(c) ? c.trim() : c)), r.number && (o = n.map(si)));
        let l, a = i[l = ji(t)] || i[l = ji(qe(t))];
        !a && s && (a = i[l = ji(Nt(t))]), a && ct(a, e, 6, o);
        const f = i[l + "Once"];
        if (f) {
          if (!e.emitted) e.emitted = {};
          else if (e.emitted[l]) return;
          e.emitted[l] = true, ct(f, e, 6, o);
        }
      }
      function Wr(e, t, n = false) {
        const i = t.emitsCache, o = i.get(e);
        if (o !== void 0) return o;
        const s = e.emits;
        let r = {}, l = false;
        if (!K(e)) {
          const a = (f) => {
            const c = Wr(f, t, true);
            c && (l = true, Se(r, c));
          };
          !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
        }
        return !s && !l ? (fe(e) && i.set(e, null), null) : (V(s) ? s.forEach((a) => r[a] = null) : Se(r, s), fe(e) && i.set(e, r), r);
      }
      function Ri(e, t) {
        return !e || !xi(t) ? false : (t = t.slice(2).replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, Nt(t)) || oe(e, t));
      }
      function as(e) {
        const { type: t, vnode: n, proxy: i, withProxy: o, propsOptions: [s], slots: r, attrs: l, emit: a, render: f, renderCache: c, props: u, data: h, setupState: g, ctx: w, inheritAttrs: v } = e, _ = ui(e);
        let C, y;
        try {
          if (n.shapeFlag & 4) {
            const k = o || i, A = k;
            C = Ve(f.call(A, k, c, u, g, h, w)), y = l;
          } else {
            const k = t;
            C = Ve(k.length > 1 ? k(u, {
              attrs: l,
              slots: r,
              emit: a
            }) : k(u, null)), y = t.props ? l : $c(l);
          }
        } catch (k) {
          bn.length = 0, Bn(k, e, 1), C = _e(Qe);
        }
        let F = C;
        if (y && v !== false) {
          const k = Object.keys(y), { shapeFlag: A } = F;
          k.length && A & 7 && (s && k.some(xo) && (y = Sc(y, s)), F = rn(F, y, false, true));
        }
        return n.dirs && (F = rn(F, null, false, true), F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs), n.transition && Do(F, n.transition), C = F, ui(_), C;
      }
      function xc(e, t = true) {
        let n;
        for (let i = 0; i < e.length; i++) {
          const o = e[i];
          if (sn(o)) {
            if (o.type !== Qe || o.children === "v-if") {
              if (n) return;
              n = o;
            }
          } else return;
        }
        return n;
      }
      const $c = (e) => {
        let t;
        for (const n in e) (n === "class" || n === "style" || xi(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
      }, Sc = (e, t) => {
        const n = {};
        for (const i in e) (!xo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
        return n;
      };
      function Tc(e, t, n) {
        const { props: i, children: o, component: s } = e, { props: r, children: l, patchFlag: a } = t, f = s.emitsOptions;
        if (t.dirs || t.transition) return true;
        if (n && a >= 0) {
          if (a & 1024) return true;
          if (a & 16) return i ? cs(i, r, f) : !!r;
          if (a & 8) {
            const c = t.dynamicProps;
            for (let u = 0; u < c.length; u++) {
              const h = c[u];
              if (r[h] !== i[h] && !Ri(f, h)) return true;
            }
          }
        } else return (o || l) && (!l || !l.$stable) ? true : i === r ? false : i ? r ? cs(i, r, f) : true : !!r;
        return false;
      }
      function cs(e, t, n) {
        const i = Object.keys(t);
        if (i.length !== Object.keys(e).length) return true;
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          if (t[s] !== e[s] && !Ri(n, s)) return true;
        }
        return false;
      }
      function Ho({ vnode: e, parent: t }, n) {
        for (; t; ) {
          const i = t.subTree;
          if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
          else break;
        }
      }
      const Kr = (e) => e.__isSuspense;
      let co = 0;
      const Cc = {
        name: "Suspense",
        __isSuspense: true,
        process(e, t, n, i, o, s, r, l, a, f) {
          if (e == null) Ac(t, n, i, o, s, r, l, a, f);
          else {
            if (s && s.deps > 0 && !e.suspense.isInFallback) {
              t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
              return;
            }
            Ec(e, t, n, i, o, r, l, a, f);
          }
        },
        hydrate: Oc,
        normalize: Rc
      }, Pc = Cc;
      function On(e, t) {
        const n = e.props && e.props[t];
        K(n) && n();
      }
      function Ac(e, t, n, i, o, s, r, l, a) {
        const { p: f, o: { createElement: c } } = a, u = c("div"), h = e.suspense = Gr(e, o, i, t, u, n, s, r, l, a);
        f(null, h.pendingBranch = e.ssContent, u, null, i, h, s, r), h.deps > 0 ? (On(e, "onPending"), On(e, "onFallback"), f(null, e.ssFallback, t, n, i, null, s, r), en(h, e.ssFallback)) : h.resolve(false, true);
      }
      function Ec(e, t, n, i, o, s, r, l, { p: a, um: f, o: { createElement: c } }) {
        const u = t.suspense = e.suspense;
        u.vnode = t, t.el = e.el;
        const h = t.ssContent, g = t.ssFallback, { activeBranch: w, pendingBranch: v, isInFallback: _, isHydrating: C } = u;
        if (v) u.pendingBranch = h, Tt(h, v) ? (a(v, h, u.hiddenContainer, null, o, u, s, r, l), u.deps <= 0 ? u.resolve() : _ && (C || (a(w, g, n, i, o, null, s, r, l), en(u, g)))) : (u.pendingId = co++, C ? (u.isHydrating = false, u.activeBranch = v) : f(v, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = c("div"), _ ? (a(null, h, u.hiddenContainer, null, o, u, s, r, l), u.deps <= 0 ? u.resolve() : (a(w, g, n, i, o, null, s, r, l), en(u, g))) : w && Tt(h, w) ? (a(w, h, n, i, o, u, s, r, l), u.resolve(true)) : (a(null, h, u.hiddenContainer, null, o, u, s, r, l), u.deps <= 0 && u.resolve()));
        else if (w && Tt(h, w)) a(w, h, n, i, o, u, s, r, l), en(u, h);
        else if (On(t, "onPending"), u.pendingBranch = h, h.shapeFlag & 512 ? u.pendingId = h.component.suspenseId : u.pendingId = co++, a(null, h, u.hiddenContainer, null, o, u, s, r, l), u.deps <= 0) u.resolve();
        else {
          const { timeout: y, pendingId: F } = u;
          y > 0 ? setTimeout(() => {
            u.pendingId === F && u.fallback(g);
          }, y) : y === 0 && u.fallback(g);
        }
      }
      function Gr(e, t, n, i, o, s, r, l, a, f, c = false) {
        const { p: u, m: h, um: g, n: w, o: { parentNode: v, remove: _ } } = f;
        let C;
        const y = Ic(e);
        y && t && t.pendingBranch && (C = t.pendingId, t.deps++);
        const F = e.props ? zl(e.props.timeout) : void 0, k = s, A = {
          vnode: e,
          parent: t,
          parentComponent: n,
          namespace: r,
          container: i,
          hiddenContainer: o,
          deps: 0,
          pendingId: co++,
          timeout: typeof F == "number" ? F : -1,
          activeBranch: null,
          pendingBranch: null,
          isInFallback: !c,
          isHydrating: c,
          isUnmounted: false,
          effects: [],
          resolve(z = false, G = false) {
            const { vnode: $, activeBranch: M, pendingBranch: D, pendingId: H, effects: te, parentComponent: de, container: re } = A;
            let Te = false;
            A.isHydrating ? A.isHydrating = false : z || (Te = M && D.transition && D.transition.mode === "out-in", Te && (M.transition.afterLeave = () => {
              H === A.pendingId && (h(D, re, s === k ? w(M) : s, 0), oo(te));
            }), M && (v(M.el) === re && (s = w(M)), g(M, de, A, true)), Te || h(D, re, s, 0)), en(A, D), A.pendingBranch = null, A.isInFallback = false;
            let ne = A.parent, X = false;
            for (; ne; ) {
              if (ne.pendingBranch) {
                ne.effects.push(...te), X = true;
                break;
              }
              ne = ne.parent;
            }
            !X && !Te && oo(te), A.effects = [], y && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !G && t.resolve()), On($, "onResolve");
          },
          fallback(z) {
            if (!A.pendingBranch) return;
            const { vnode: G, activeBranch: $, parentComponent: M, container: D, namespace: H } = A;
            On(G, "onFallback");
            const te = w($), de = () => {
              A.isInFallback && (u(null, z, D, te, M, null, H, l, a), en(A, z));
            }, re = z.transition && z.transition.mode === "out-in";
            re && ($.transition.afterLeave = de), A.isInFallback = true, g($, M, null, true), re || de();
          },
          move(z, G, $) {
            A.activeBranch && h(A.activeBranch, z, G, $), A.container = z;
          },
          next() {
            return A.activeBranch && w(A.activeBranch);
          },
          registerDep(z, G, $) {
            const M = !!A.pendingBranch;
            M && A.deps++;
            const D = z.vnode.el;
            z.asyncDep.catch((H) => {
              Bn(H, z, 0);
            }).then((H) => {
              if (z.isUnmounted || A.isUnmounted || A.pendingId !== z.suspenseId) return;
              z.asyncResolved = true;
              const { vnode: te } = z;
              po(z, H), D && (te.el = D);
              const de = !D && z.subTree.el;
              G(z, te, v(D || z.subTree.el), D ? null : w(z.subTree), A, r, $), de && _(de), Ho(z, te.el), M && --A.deps === 0 && A.resolve();
            });
          },
          unmount(z, G) {
            A.isUnmounted = true, A.activeBranch && g(A.activeBranch, n, z, G), A.pendingBranch && g(A.pendingBranch, n, z, G);
          }
        };
        return A;
      }
      function Oc(e, t, n, i, o, s, r, l, a) {
        const f = t.suspense = Gr(t, i, n, e.parentNode, document.createElement("div"), null, o, s, r, l, true), c = a(e, f.pendingBranch = t.ssContent, n, f, s, r);
        return f.deps === 0 && f.resolve(false, true), c;
      }
      function Rc(e) {
        const { shapeFlag: t, children: n } = e, i = t & 32;
        e.ssContent = us(i ? n.default : n), e.ssFallback = i ? us(n.fallback) : _e(Qe);
      }
      function us(e) {
        let t;
        if (K(e)) {
          const n = on && e._c;
          n && (e._d = false, L()), e = e(), n && (e._d = true, t = Ne, Yr());
        }
        return V(e) && (e = xc(e)), e = Ve(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
      }
      function Mc(e, t) {
        t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : oo(e);
      }
      function en(e, t) {
        e.activeBranch = t;
        const { vnode: n, parentComponent: i } = e;
        let o = t.el;
        for (; !o && t.component; ) t = t.component.subTree, o = t.el;
        n.el = o, i && i.subTree === n && (i.vnode.el = o, Ho(i, o));
      }
      function Ic(e) {
        const t = e.props && e.props.suspensible;
        return t != null && t !== false;
      }
      const ae = Symbol.for("v-fgt"), Mi = Symbol.for("v-txt"), Qe = Symbol.for("v-cmt"), Zn = Symbol.for("v-stc"), bn = [];
      let Ne = null;
      function L(e = false) {
        bn.push(Ne = e ? null : []);
      }
      function Yr() {
        bn.pop(), Ne = bn[bn.length - 1] || null;
      }
      let on = 1;
      function fs(e, t = false) {
        on += e, e < 0 && Ne && t && (Ne.hasOnce = true);
      }
      function Xr(e) {
        return e.dynamicChildren = on > 0 ? Ne || Gt : null, Yr(), on > 0 && Ne && Ne.push(e), e;
      }
      function q(e, t, n, i, o, s) {
        return Xr(E(e, t, n, i, o, s, true));
      }
      function Fe(e, t, n, i, o) {
        return Xr(_e(e, t, n, i, o, true));
      }
      function sn(e) {
        return e ? e.__v_isVNode === true : false;
      }
      function Tt(e, t) {
        return e.type === t.type && e.key === t.key;
      }
      const Jr = ({ key: e }) => e ?? null, ei = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ge(e) || be(e) || K(e) ? {
        i: ve,
        r: e,
        k: t,
        f: !!n
      } : e : null);
      function E(e, t = null, n = null, i = 0, o = null, s = e === ae ? 0 : 1, r = false, l = false) {
        const a = {
          __v_isVNode: true,
          __v_skip: true,
          type: e,
          props: t,
          key: t && Jr(t),
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
          shapeFlag: s,
          patchFlag: i,
          dynamicProps: o,
          dynamicChildren: null,
          appContext: null,
          ctx: ve
        };
        return l ? (Bo(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ge(n) ? 8 : 16), on > 0 && !r && Ne && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Ne.push(a), a;
      }
      const _e = Nc;
      function Nc(e, t = null, n = null, i = 0, o = null, s = false) {
        if ((!e || e === Xa) && (e = Qe), sn(e)) {
          const l = rn(e, t, true);
          return n && Bo(l, n), on > 0 && !s && Ne && (l.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = l : Ne.push(l)), l.patchFlag = -2, l;
        }
        if (Uc(e) && (e = e.__vccOpts), t) {
          t = Qr(t);
          let { class: l, style: a } = t;
          l && !ge(l) && (t.class = We(l)), fe(a) && (Io(a) && !V(a) && (a = Se({}, a)), t.style = At(a));
        }
        const r = ge(e) ? 1 : Kr(e) ? 128 : Da(e) ? 64 : fe(e) ? 4 : K(e) ? 2 : 0;
        return E(e, t, n, i, o, r, s, true);
      }
      function Qr(e) {
        return e ? Io(e) || Dr(e) ? Se({}, e) : e : null;
      }
      function rn(e, t, n = false, i = false) {
        const { props: o, ref: s, patchFlag: r, children: l, transition: a } = e, f = t ? zo(o || {}, t) : o, c = {
          __v_isVNode: true,
          __v_skip: true,
          type: e.type,
          props: f,
          key: f && Jr(f),
          ref: t && t.ref ? n && s ? V(s) ? s.concat(ei(t)) : [
            s,
            ei(t)
          ] : ei(t) : s,
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
        return a && i && Do(c, a.clone(c)), c;
      }
      function Ae(e = " ", t = 0) {
        return _e(Mi, null, e, t);
      }
      function kc(e, t) {
        const n = _e(Zn, null, e);
        return n.staticCount = t, n;
      }
      function st(e = "", t = false) {
        return t ? (L(), Fe(Qe, null, e)) : _e(Qe, null, e);
      }
      function Ve(e) {
        return e == null || typeof e == "boolean" ? _e(Qe) : V(e) ? _e(ae, null, e.slice()) : sn(e) ? St(e) : _e(Mi, null, String(e));
      }
      function St(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
      }
      function Bo(e, t) {
        let n = 0;
        const { shapeFlag: i } = e;
        if (t == null) t = null;
        else if (V(t)) n = 16;
        else if (typeof t == "object") if (i & 65) {
          const o = t.default;
          o && (o._c && (o._d = false), Bo(e, o()), o._c && (o._d = true));
          return;
        } else {
          n = 32;
          const o = t._;
          !o && !Dr(t) ? t._ctx = ve : o === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
        }
        else K(t) ? (t = {
          default: t,
          _ctx: ve
        }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
          Ae(t)
        ]) : n = 8);
        e.children = t, e.shapeFlag |= n;
      }
      function zo(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const i = e[n];
          for (const o in i) if (o === "class") t.class !== i.class && (t.class = We([
            t.class,
            i.class
          ]));
          else if (o === "style") t.style = At([
            t.style,
            i.style
          ]);
          else if (xi(o)) {
            const s = t[o], r = i[o];
            r && s !== r && !(V(s) && s.includes(r)) && (t[o] = s ? [].concat(s, r) : r);
          } else o !== "" && (t[o] = i[o]);
        }
        return t;
      }
      function it(e, t, n, i = null) {
        ct(e, t, 7, [
          n,
          i
        ]);
      }
      const Dc = Ir();
      let Lc = 0;
      function Fc(e, t, n) {
        const i = e.type, o = (t ? t.appContext : e.appContext) || Dc, s = {
          uid: Lc++,
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
          scope: new Jl(true),
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
          propsOptions: Fr(i, o),
          emitsOptions: Wr(i, o),
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
        return s.ctx = {
          _: s
        }, s.root = t ? t.root : s, s.emit = bc.bind(null, s), e.ce && e.ce(s), s;
      }
      let ye = null;
      const Hc = () => ye || ve;
      let pi, uo;
      {
        const e = Ci(), t = (n, i) => {
          let o;
          return (o = e[n]) || (o = e[n] = []), o.push(i), (s) => {
            o.length > 1 ? o.forEach((r) => r(s)) : o[0](s);
          };
        };
        pi = t("__VUE_INSTANCE_SETTERS__", (n) => ye = n), uo = t("__VUE_SSR_SETTERS__", (n) => Rn = n);
      }
      const jt = (e) => {
        const t = ye;
        return pi(e), e.scope.on(), () => {
          e.scope.off(), pi(t);
        };
      }, fo = () => {
        ye && ye.scope.off(), pi(null);
      };
      function Zr(e) {
        return e.vnode.shapeFlag & 4;
      }
      let Rn = false;
      function Bc(e, t = false, n = false) {
        t && uo(t);
        const { props: i, children: o } = e.vnode, s = Zr(e);
        lc(e, i, s, t), fc(e, o, n || t);
        const r = s ? zc(e, t) : void 0;
        return t && uo(false), r;
      }
      function zc(e, t) {
        const n = e.type;
        e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ja);
        const { setup: i } = n;
        if (i) {
          vt();
          const o = e.setupContext = i.length > 1 ? qc(e) : null, s = jt(e), r = Hn(i, e, 0, [
            e.props,
            o
          ]), l = So(r);
          if (wt(), s(), (l || e.sp) && !Qt(e) && Sr(e), l) {
            if (r.then(fo, fo), t) return r.then((a) => {
              po(e, a);
            }).catch((a) => {
              Bn(a, e, 0);
            });
            e.asyncDep = r;
          } else po(e, r);
        } else el(e);
      }
      function po(e, t, n) {
        K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = vr(t)), el(e);
      }
      function el(e, t, n) {
        const i = e.type;
        e.render || (e.render = i.render || rt);
        {
          const o = jt(e);
          vt();
          try {
            Za(e);
          } finally {
            wt(), o();
          }
        }
      }
      const jc = {
        get(e, t) {
          return $e(e, "get", ""), e[t];
        }
      };
      function qc(e) {
        const t = (n) => {
          e.exposed = n || {};
        };
        return {
          attrs: new Proxy(e.attrs, jc),
          slots: e.slots,
          emit: e.emit,
          expose: t
        };
      }
      function Ii(e) {
        return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vr(wa(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in yn) return yn[n](e);
          },
          has(t, n) {
            return n in t || n in yn;
          }
        })) : e.proxy;
      }
      function Vc(e, t = true) {
        return K(e) ? e.displayName || e.name : e.name || t && e.__name;
      }
      function Uc(e) {
        return K(e) && "__vccOpts" in e;
      }
      const He = (e, t) => Pa(e, t, Rn);
      function Wc(e, t, n) {
        const i = arguments.length;
        return i === 2 ? fe(t) && !V(t) ? sn(t) ? _e(e, null, [
          t
        ]) : _e(e, t) : _e(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && sn(n) && (n = [
          n
        ]), _e(e, t, n));
      }
      const Kc = "3.5.16";
      let ho;
      const ds = typeof window < "u" && window.trustedTypes;
      if (ds) try {
        ho = ds.createPolicy("vue", {
          createHTML: (e) => e
        });
      } catch {
      }
      const tl = ho ? (e) => ho.createHTML(e) : (e) => e, Gc = "http://www.w3.org/2000/svg", Yc = "http://www.w3.org/1998/Math/MathML", dt = typeof document < "u" ? document : null, ps = dt && dt.createElement("template"), Xc = {
        insert: (e, t, n) => {
          t.insertBefore(e, n || null);
        },
        remove: (e) => {
          const t = e.parentNode;
          t && t.removeChild(e);
        },
        createElement: (e, t, n, i) => {
          const o = t === "svg" ? dt.createElementNS(Gc, e) : t === "mathml" ? dt.createElementNS(Yc, e) : n ? dt.createElement(e, {
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
            ps.innerHTML = tl(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
            const l = ps.content;
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
      }, Jc = Symbol("_vtc");
      function Qc(e, t, n) {
        const i = e[Jc];
        i && (t = (t ? [
          t,
          ...i
        ] : [
          ...i
        ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
      }
      const hi = Symbol("_vod"), nl = Symbol("_vsh"), hn = {
        beforeMount(e, { value: t }, { transition: n }) {
          e[hi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : gn(e, t);
        },
        mounted(e, { value: t }, { transition: n }) {
          n && t && n.enter(e);
        },
        updated(e, { value: t, oldValue: n }, { transition: i }) {
          !t != !n && (i ? t ? (i.beforeEnter(e), gn(e, true), i.enter(e)) : i.leave(e, () => {
            gn(e, false);
          }) : gn(e, t));
        },
        beforeUnmount(e, { value: t }) {
          gn(e, t);
        }
      };
      function gn(e, t) {
        e.style.display = t ? e[hi] : "none", e[nl] = !t;
      }
      const Zc = Symbol(""), eu = /(^|;)\s*display\s*:/;
      function tu(e, t, n) {
        const i = e.style, o = ge(n);
        let s = false;
        if (n && !o) {
          if (t) if (ge(t)) for (const r of t.split(";")) {
            const l = r.slice(0, r.indexOf(":")).trim();
            n[l] == null && ti(i, l, "");
          }
          else for (const r in t) n[r] == null && ti(i, r, "");
          for (const r in n) r === "display" && (s = true), ti(i, r, n[r]);
        } else if (o) {
          if (t !== n) {
            const r = i[Zc];
            r && (n += ";" + r), i.cssText = n, s = eu.test(n);
          }
        } else t && e.removeAttribute("style");
        hi in e && (e[hi] = s ? i.display : "", e[nl] && (i.display = "none"));
      }
      const hs = /\s*!important$/;
      function ti(e, t, n) {
        if (V(n)) n.forEach((i) => ti(e, t, i));
        else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
        else {
          const i = nu(e, t);
          hs.test(n) ? e.setProperty(Nt(i), n.replace(hs, ""), "important") : e[i] = n;
        }
      }
      const gs = [
        "Webkit",
        "Moz",
        "ms"
      ], Yi = {};
      function nu(e, t) {
        const n = Yi[t];
        if (n) return n;
        let i = qe(t);
        if (i !== "filter" && i in e) return Yi[t] = i;
        i = Ti(i);
        for (let o = 0; o < gs.length; o++) {
          const s = gs[o] + i;
          if (s in e) return Yi[t] = s;
        }
        return t;
      }
      const _s = "http://www.w3.org/1999/xlink";
      function ms(e, t, n, i, o, s = Gl(t)) {
        i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_s, t.slice(6, t.length)) : e.setAttributeNS(_s, t, n) : n == null || s && !Zs(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Je(n) ? String(n) : n);
      }
      function vs(e, t, n, i, o) {
        if (t === "innerHTML" || t === "textContent") {
          n != null && (e[t] = t === "innerHTML" ? tl(n) : n);
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
          l === "boolean" ? n = Zs(n) : n == null && l === "string" ? (n = "", r = true) : l === "number" && (n = 0, r = true);
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
      function iu(e, t, n, i) {
        e.removeEventListener(t, n, i);
      }
      const ws = Symbol("_vei");
      function ou(e, t, n, i, o = null) {
        const s = e[ws] || (e[ws] = {}), r = s[t];
        if (i && r) r.value = i;
        else {
          const [l, a] = su(t);
          if (i) {
            const f = s[t] = au(i, o);
            Ct(e, l, f, a);
          } else r && (iu(e, l, r, a), s[t] = void 0);
        }
      }
      const ys = /(?:Once|Passive|Capture)$/;
      function su(e) {
        let t;
        if (ys.test(e)) {
          t = {};
          let i;
          for (; i = e.match(ys); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
        }
        return [
          e[2] === ":" ? e.slice(3) : Nt(e.slice(2)),
          t
        ];
      }
      let Xi = 0;
      const ru = Promise.resolve(), lu = () => Xi || (ru.then(() => Xi = 0), Xi = Date.now());
      function au(e, t) {
        const n = (i) => {
          if (!i._vts) i._vts = Date.now();
          else if (i._vts <= n.attached) return;
          ct(cu(i, n.value), t, 5, [
            i
          ]);
        };
        return n.value = e, n.attached = lu(), n;
      }
      function cu(e, t) {
        if (V(t)) {
          const n = e.stopImmediatePropagation;
          return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = true;
          }, t.map((i) => (o) => !o._stopped && i && i(o));
        } else return t;
      }
      const bs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uu = (e, t, n, i, o, s) => {
        const r = o === "svg";
        t === "class" ? Qc(e, i, r) : t === "style" ? tu(e, n, i) : xi(t) ? xo(t) || ou(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : fu(e, t, i, r)) ? (vs(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ms(e, t, i, r, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ge(i)) ? vs(e, qe(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ms(e, t, i, r));
      };
      function fu(e, t, n, i) {
        if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && bs(t) && K(n));
        if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
        if (t === "width" || t === "height") {
          const o = e.tagName;
          if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
        }
        return bs(t) && ge(n) ? false : t in e;
      }
      const ln = (e) => {
        const t = e.props["onUpdate:modelValue"] || false;
        return V(t) ? (n) => Jn(t, n) : t;
      };
      function du(e) {
        e.target.composing = true;
      }
      function xs(e) {
        const t = e.target;
        t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
      }
      const mt = Symbol("_assign"), gi = {
        created(e, { modifiers: { lazy: t, trim: n, number: i } }, o) {
          e[mt] = ln(o);
          const s = i || o.props && o.props.type === "number";
          Ct(e, t ? "change" : "input", (r) => {
            if (r.target.composing) return;
            let l = e.value;
            n && (l = l.trim()), s && (l = si(l)), e[mt](l);
          }), n && Ct(e, "change", () => {
            e.value = e.value.trim();
          }), t || (Ct(e, "compositionstart", du), Ct(e, "compositionend", xs), Ct(e, "change", xs));
        },
        mounted(e, { value: t }) {
          e.value = t ?? "";
        },
        beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: o, number: s } }, r) {
          if (e[mt] = ln(r), e.composing) return;
          const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? si(e.value) : e.value, a = t ?? "";
          l !== a && (document.activeElement === e && e.type !== "range" && (i && t === n || o && e.value.trim() === a) || (e.value = a));
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
      }, il = {
        deep: true,
        created(e, { value: t, modifiers: { number: n } }, i) {
          const o = $i(t);
          Ct(e, "change", () => {
            const s = Array.prototype.filter.call(e.options, (r) => r.selected).map((r) => n ? si(Mn(r)) : Mn(r));
            e[mt](e.multiple ? o ? new Set(s) : s : s[0]), e._assigning = true, No(() => {
              e._assigning = false;
            });
          }), e[mt] = ln(i);
        },
        mounted(e, { value: t }) {
          $s(e, t);
        },
        beforeUpdate(e, t, n) {
          e[mt] = ln(n);
        },
        updated(e, { value: t }) {
          e._assigning || $s(e, t);
        }
      };
      function $s(e, t) {
        const n = e.multiple, i = V(t);
        if (!(n && !i && !$i(t))) {
          for (let o = 0, s = e.options.length; o < s; o++) {
            const r = e.options[o], l = Mn(r);
            if (n) if (i) {
              const a = typeof l;
              a === "string" || a === "number" ? r.selected = t.some((f) => String(f) === String(l)) : r.selected = Xl(t, l) > -1;
            } else r.selected = t.has(l);
            else if (nn(Mn(r), t)) {
              e.selectedIndex !== o && (e.selectedIndex = o);
              return;
            }
          }
          !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
        }
      }
      function Mn(e) {
        return "_value" in e ? e._value : e.value;
      }
      const pu = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      }, ol = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
        return n[i] || (n[i] = (o) => {
          if (!("key" in o)) return;
          const s = Nt(o.key);
          if (t.some((r) => r === s || pu[r] === s)) return e(o);
        });
      }, hu = Se({
        patchProp: uu
      }, Xc);
      let Ss;
      function gu() {
        return Ss || (Ss = pc(hu));
      }
      const sl = (...e) => {
        const t = gu().createApp(...e), { mount: n } = t;
        return t.mount = (i) => {
          const o = mu(i);
          if (!o) return;
          const s = t._component;
          !K(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
          const r = n(o, false, _u(o));
          return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
        }, t;
      };
      function _u(e) {
        if (e instanceof SVGElement) return "svg";
        if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
      }
      function mu(e) {
        return ge(e) ? document.querySelector(e) : e;
      }
      const vu = zn({
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
          const n = e, i = t, o = pe(false), s = pe(50), r = pe(false), l = pe(0), a = pe(), f = He({
            get() {
              return n.percent ?? s.value;
            },
            set($) {
              i("update:percent", $), s.value = $;
            }
          });
          f.value = Number(n.initialPercent);
          const c = He(() => n.isHorizontal ? "top-pane" : "left-pane"), u = He(() => n.isHorizontal ? "bottom-pane" : "right-pane"), h = He(() => n.isHorizontal ? `${f.value}% auto 1fr / none` : `none / ${f.value}% auto 1fr`), g = He(() => o.value ? "none" : "auto");
          function w() {
            r.value || i("splitter-click");
          }
          function v($) {
            l.value = n.isHorizontal ? $.offsetY : $.offsetX, C();
          }
          function _() {
            l.value = 0, C();
          }
          function C() {
            o.value = true, r.value = false, y();
          }
          function y() {
            document.body.addEventListener("mousemove", k), document.body.addEventListener("touchmove", F), document.body.addEventListener("touchend", z, {
              once: true
            }), document.body.addEventListener("mouseup", z, {
              once: true
            });
          }
          function F($) {
            o.value && A($.touches[0]);
          }
          function k($) {
            $.buttons && $.buttons === 0 && (o.value = false, G()), o.value && A($);
          }
          function A($) {
            let M = l.value, D = a.value, H = 0;
            if (n.isHorizontal) {
              for (M += D.offsetTop; D.offsetParent; ) D = D.offsetParent, M += D.offsetTop;
              H = Math.floor(($.pageY - M) / a.value.offsetHeight * 1e4) / 100;
            } else {
              for (M += D.offsetLeft; D.offsetParent; ) D = D.offsetParent, M += D.offsetLeft;
              H = Math.floor(($.pageX - M) / a.value.offsetWidth * 1e4) / 100;
            }
            H > 0 && H < 100 && (f.value = H, r.value = true);
          }
          function z() {
            o.value = false, G();
          }
          function G() {
            document.body.removeEventListener("touchmove", F), document.body.removeEventListener("mousemove", k);
          }
          return ($, M) => (L(), q("div", {
            style: At({
              userSelect: g.value,
              gridTemplate: h.value
            }),
            class: We([
              "vue-splitter",
              {
                horizontal: $.isHorizontal,
                vertical: !$.isHorizontal
              }
            ]),
            ref_key: "containerRef",
            ref: a
          }, [
            E("div", {
              class: We([
                "splitter-pane",
                c.value
              ])
            }, [
              gt($.$slots, "left-pane"),
              gt($.$slots, "top-pane")
            ], 2),
            E("div", {
              class: We([
                "splitter",
                {
                  active: o.value
                }
              ]),
              onMousedown: v,
              onTouchstartPassive: _,
              onClick: w
            }, null, 34),
            E("div", {
              class: We([
                "splitter-pane",
                u.value
              ])
            }, [
              gt($.$slots, "right-pane"),
              gt($.$slots, "bottom-pane")
            ], 2)
          ], 6));
        }
      }), wu = {
        __name: "SearchResultsItem",
        props: [
          "cfg",
          "item"
        ],
        emits: [
          "cfg_update"
        ],
        setup(e, { emit: t }) {
          const n = t, i = pe(null);
          function o(r, l, a) {
            console.log("adding requirement", l, a, r), a != null && a.length > 0 ? (r.add_requirement(l, a), n("cfg_update")) : console.log("attempt to add a requirement without a value, was: ", a);
          }
          function s(r, l) {
            console.log("adding import/export", l, r), r.add_import_export(l), n("cfg_update");
          }
          return (r, l) => {
            const a = Oi("tooltip");
            return L(), q(ae, null, [
              ee((L(), q("div", null, [
                Ae(Ie(e.item.display), 1)
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
                  onKeyup: l[0] || (l[0] = ol((f) => o(e.cfg, e.item.id, i.value), [
                    "enter"
                  ])),
                  "onUpdate:modelValue": l[1] || (l[1] = (f) => i.value = f)
                }, null, 544), [
                  [
                    gi,
                    i.value
                  ]
                ]),
                ee((L(), q("button", {
                  onClick: l[2] || (l[2] = (f) => o(e.cfg, e.item.id, i.value))
                }, l[4] || (l[4] = [
                  Ae("Requirement")
                ]))), [
                  [
                    a,
                    "Add " + e.item.display + " as a requirement, you must specify a non-empty value"
                  ]
                ]),
                ee((L(), q("button", {
                  onClick: l[3] || (l[3] = (f) => s(e.cfg, e.item.id))
                }, l[5] || (l[5] = [
                  Ae("Import/Export")
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
      const _Oe = class _Oe {
        constructor(t) {
          this.type = t;
        }
        is_intermediate() {
          return this.type == _Oe.INTERMEDIATE;
        }
        is_req() {
          return this.type == _Oe.REQUIREMENT;
        }
        is_io() {
          return this.type == _Oe.IMPORT_EXPORT;
        }
        req_quantity() {
          return null;
        }
      };
      __publicField(_Oe, "INTERMEDIATE", "intermediate");
      __publicField(_Oe, "IMPORT_EXPORT", "import_export");
      __publicField(_Oe, "REQUIREMENT", "requirement");
      let Oe = _Oe;
      class yu extends Oe {
        constructor(t) {
          super(Oe.REQUIREMENT), this.req = t;
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
      class Ts extends Oe {
        constructor(t) {
          super(Oe.IMPORT_EXPORT), this.item = t;
        }
        id() {
          return this.item.id;
        }
        display() {
          return this.item.display;
        }
      }
      class bu extends Oe {
        constructor(t) {
          super(Oe.INTERMEDIATE), this.item = t;
        }
        id() {
          return this.item.id;
        }
        display() {
          return this.item.display;
        }
      }
      const xu = {
        for: "requirement"
      }, $u = {
        key: 0
      }, Su = [
        "disabled"
      ], Tu = {
        for: "import_export"
      }, Cu = {
        for: "intermediate"
      }, Pu = {
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
          const n = t, i = pe(e.stack.req_quantity()), o = pe(e.stack.type);
          return e.stack.is_req() && console.log("stack quantity", e.stack), console.log("stack", e.stack, e.stack.is_req(), e.stack.is_io(), e.stack.is_intermediate()), Be(o, (s) => {
            switch (console.log("change in type", o, e.stack.id(), "req val", i.value), s) {
              case Oe.REQUIREMENT:
                e.cfg.add_requirement(e.stack.id(), i.value), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
                break;
              case Oe.IMPORT_EXPORT:
                e.cfg.add_import_export(e.stack.id()), e.cfg.remove_requirement(e.stack.id()), n("cfg_update");
                break;
              case Oe.INTERMEDIATE:
                e.cfg.remove_requirement(e.stack.id()), e.cfg.remove_import_export(e.stack.id()), n("cfg_update");
            }
          }), Be(i, (s) => {
            console.log("requirement value updated", e.stack.id(), o.value, s), o.value == "requirement" && (e.cfg.update_requirement(e.stack.id(), s), n("cfg_update"));
          }), (s, r) => {
            const l = Oi("tooltip");
            return L(), q(ae, null, [
              ee((L(), q("div", null, [
                Ae(" [icon] " + Ie(e.stack.display()), 1)
              ])), [
                [
                  l,
                  "id: " + e.stack.id()
                ]
              ]),
              E("div", null, [
                ee((L(), q("button", {
                  onClick: r[0] || (r[0] = (a) => n("make_item", e.stack.id()))
                }, r[6] || (r[6] = [
                  Ae("Make")
                ]))), [
                  [
                    l,
                    "Search for processes that have " + e.stack.display() + " as an output."
                  ]
                ]),
                ee((L(), q("button", {
                  onClick: r[1] || (r[1] = (a) => n("use_item", e.stack.id()))
                }, r[7] || (r[7] = [
                  Ae("Use")
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
                    id: "requirement",
                    value: "requirement",
                    "onUpdate:modelValue": r[2] || (r[2] = (a) => o.value = a)
                  }, null, 512), [
                    [
                      Ji,
                      o.value
                    ]
                  ]),
                  ee((L(), q("label", xu, r[8] || (r[8] = [
                    Ae(" Requirement")
                  ]))), [
                    [
                      l,
                      "Set " + e.stack.display() + " as a requirement"
                    ]
                  ]),
                  e.stack.is_req() ? (L(), q("span", $u, [
                    r[9] || (r[9] = Ae(" \xA0 ")),
                    ee(E("input", {
                      type: "text",
                      size: "5",
                      "onUpdate:modelValue": r[3] || (r[3] = (a) => i.value = a),
                      disabled: o.value != Pe(Oe).REQUIREMENT
                    }, null, 8, Su), [
                      [
                        gi,
                        i.value,
                        void 0,
                        {
                          lazy: true,
                          number: true
                        }
                      ],
                      [
                        l,
                        "Set a requirement of X per second for " + e.stack.display() + (o.value == Pe(Oe).REQUIREMENT ? "" : " (disabled because " + e.stack.display() + " is not marked as a requirement)")
                      ]
                    ]),
                    r[10] || (r[10] = Ae(" per second "))
                  ])) : st("", true)
                ]),
                E("div", null, [
                  ee(E("input", {
                    type: "radio",
                    id: "import_export",
                    value: "import_export",
                    "onUpdate:modelValue": r[4] || (r[4] = (a) => o.value = a)
                  }, null, 512), [
                    [
                      Ji,
                      o.value
                    ]
                  ]),
                  ee((L(), q("label", Tu, r[11] || (r[11] = [
                    Ae(" Import/Export")
                  ]))), [
                    [
                      l,
                      "Use an infinite source or sink for " + e.stack.display()
                    ]
                  ])
                ]),
                E("div", null, [
                  ee(E("input", {
                    type: "radio",
                    id: "intermediate",
                    value: "intermediate",
                    "onUpdate:modelValue": r[5] || (r[5] = (a) => o.value = a)
                  }, null, 512), [
                    [
                      Ji,
                      o.value
                    ]
                  ]),
                  ee((L(), q("label", Cu, r[12] || (r[12] = [
                    Ae(" Intermediate")
                  ]))), [
                    [
                      l,
                      e.stack.display() + " should have a net zero produce & consume"
                    ]
                  ])
                ])
              ]),
              r[13] || (r[13] = E("div", {
                class: "items_fw"
              }, [
                E("hr")
              ], -1))
            ], 64);
          };
        }
      };
      class Au {
        constructor(t, n, i) {
          this.duration = t, this.input = n, this.output = i;
        }
      }
      const Ni = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [i, o] of t) n[i] = o;
        return n;
      }, Eu = {
        id: "name"
      }, Ou = {
        id: "in"
      }, Ru = {
        class: "proc_io"
      }, Mu = {
        id: "out"
      }, Iu = {
        class: "proc_io"
      }, Nu = {
        class: "proc_buttons"
      }, ku = [
        "id",
        "open"
      ], Du = {
        class: "input_options"
      }, Lu = [
        "value"
      ], Fu = {
        class: "input_options"
      }, Hu = [
        "value"
      ], Bu = {
        class: "input_options"
      }, zu = [
        "value"
      ], ju = {
        class: "input_options"
      }, qu = {
        class: "factory_select"
      }, Vu = [
        "value"
      ], Uu = {
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
          } : e.active_proc), o = He(() => i.value.process), s = He(() => e.id_prefix + "-" + o.value.id + "-modifiers"), r = pe(null), l = He({
            get() {
              return console.log("modifiers get 1", i.value.process.id, r.value), r.value == null && (r.value = new Au(i.value.duration_multiplier, i.value.inputs_multiplier, i.value.outputs_multiplier)), console.log("modifiers get 2", i.value.process.id, r.value), r.value;
            }
          });
          function a(v, _) {
            console.log("update modifier", v, _), r.value[_] = v.target.value;
          }
          Be(r, (v, _) => {
            _ != null && (console.log("modifiers_stash update 1", v, r.value), r.value = v, n("modifier_update", o.value.id, c.value, Number(v.duration), Number(v.input), Number(v.output)), console.log("modifiers_stash update 2", v, r.value));
          }, {
            deep: true
          });
          const f = He(() => e.cfg.factories_for_process(i.value.process.id)), c = pe(null), u = pe(null), h = He({
            get() {
              return console.log("factory_id 1", c.value, u.value, i.value.process.display, i.value.factory.id, f.value), (c.value == null || i.value.process.id != u.value) && (i.value.factory.id != null ? c.value = i.value.factory.id : f.value.length > 0 && (c.value = f.value[0].id)), u.value = i.value.process.id, console.log("factory_id 2", c.value, u.value, i.value.factory.id, f.value), c.value;
            },
            set(v) {
              console.log("factory_id change 1", v, c.value, o.value.id, f.value, e.cfg.factories_for_process(o.value.id)), c.value = v, n("modifier_update", i.value.process.id, v, Number(r.value.duration), Number(r.value.input), Number(r.value.output)), console.log("factory_id change 2", v, c.value, o.value.id, f.value, e.cfg.factories_for_process(o.value.id));
            }
          }), g = pe(false);
          function w(v) {
            g.value = v.newState == "open";
          }
          return (v, _) => {
            const C = Oi("tooltip");
            return L(), q(ae, null, [
              ee((L(), q("div", Eu, [
                Ae(Ie(o.value.display), 1)
              ])), [
                [
                  C,
                  "id: " + i.value.process.id
                ]
              ]),
              E("div", null, Ie(o.value.duration) + "s ", 1),
              E("div", Ou, [
                (L(true), q(ae, null, Et(i.value.process.inputs, (y) => (L(), q("div", Ru, [
                  E("div", null, Ie(y.quantity), 1),
                  ee((L(), q("div", null, [
                    Ae(Ie(y.item.display), 1)
                  ])), [
                    [
                      C,
                      "id: " + y.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              E("div", Mu, [
                (L(true), q(ae, null, Et(i.value.process.outputs, (y) => (L(), q("div", Iu, [
                  E("div", null, Ie(y.quantity), 1),
                  ee((L(), q("div", null, [
                    Ae(Ie(y.item.display), 1)
                  ])), [
                    [
                      C,
                      "id: " + y.item.id
                    ]
                  ])
                ]))), 256))
              ]),
              E("div", Nu, [
                gt(v.$slots, "action_button", {
                  factory_id: c.value,
                  modifiers: l.value
                }, void 0, true)
              ]),
              E("details", {
                id: s.value,
                open: g.value,
                onToggle: _[0] || (_[0] = (y) => w(y))
              }, _[5] || (_[5] = [
                E("summary", null, "modifiers", -1)
              ]), 40, ku),
              ee(E("div", Du, [
                E("input", {
                  type: "text",
                  size: "4",
                  onBlur: _[1] || (_[1] = (y) => a(y, "duration")),
                  value: l.value.duration
                }, null, 40, Lu)
              ], 512), [
                [
                  hn,
                  g.value
                ]
              ]),
              ee(E("div", Fu, [
                E("input", {
                  type: "text",
                  size: "4",
                  onBlur: _[2] || (_[2] = (y) => a(y, "input")),
                  value: l.value.input
                }, null, 40, Hu)
              ], 512), [
                [
                  hn,
                  g.value
                ]
              ]),
              ee(E("div", Bu, [
                E("input", {
                  type: "text",
                  size: "4",
                  onBlur: _[3] || (_[3] = (y) => a(y, "output")),
                  value: l.value.output
                }, null, 40, zu)
              ], 512), [
                [
                  hn,
                  g.value
                ]
              ]),
              ee(E("div", ju, _[6] || (_[6] = [
                E("span", null, "factory", -1)
              ]), 512), [
                [
                  hn,
                  g.value
                ]
              ]),
              ee(E("div", qu, [
                ee(E("select", {
                  "onUpdate:modelValue": _[4] || (_[4] = (y) => h.value = y)
                }, [
                  _[7] || (_[7] = E("option", {
                    disabled: "",
                    value: ""
                  }, "Select a factory type", -1)),
                  (L(true), q(ae, null, Et(f.value, (y) => (L(), q("option", {
                    key: y.id,
                    value: y.id
                  }, Ie(y.display), 9, Vu))), 128))
                ], 512), [
                  [
                    il,
                    h.value,
                    void 0,
                    {
                      lazy: true
                    }
                  ]
                ])
              ], 512), [
                [
                  hn,
                  g.value
                ]
              ]),
              _[8] || (_[8] = E("hr", {
                class: "proc_fw"
              }, null, -1))
            ], 64);
          };
        }
      }, rl = Ni(Uu, [
        [
          "__scopeId",
          "data-v-a2083010"
        ]
      ]), Wu = [
        "open"
      ], Ku = {
        class: "input_options"
      }, Gu = {
        class: "items"
      }, Yu = {
        key: 0,
        class: "items_fw"
      }, Xu = {
        key: 0,
        class: "proc"
      }, Ju = [
        "onClick"
      ], Qu = {
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
          function i() {
            console.log("CC handle_cfg_update"), n("cfg_update");
          }
          function o(c, u, h, g, w) {
            console.log("CC handle_modifier_update", c, u, h, g, w), e.cfg.update_modifiers(c, u, h, g, w), n("cfg_update");
          }
          function s(c, u) {
            n("fold_update", c, u);
          }
          function r(c) {
            console.log("CC handle make item", c), n("make_item", c);
          }
          function l(c) {
            console.log("CC handle use item", c), n("use_item", c);
          }
          function a(c) {
            let u = c.get_requirements().map((_) => (console.log("requirement", _.item.id, _.quantity), _)).map((_) => new yu(_)).map((_) => (console.log("  ", _), _)), h = c.get_imports_exports().map((_) => (console.log("io", _.id), _)).map((_) => new Ts(_)).map((_) => (console.log("  ", _), _)), g = c.get_intermediate_items().map((_) => (console.log("intermediate", _.id), _)).map((_) => new bu(_)).map((_) => (console.log("  ", _), _)), w = c.get_defaulted_items().map((_) => (console.log("defaulted", _.id), _)).map((_) => new Ts(_)).map((_) => (console.log("  ", _), _));
            return u.concat(h).concat(g).concat(w).sort((_, C) => _.display().localeCompare(C.display()));
          }
          function f(c, u) {
            console.log("removing", u), c.remove_process(u), n("cfg_update");
          }
          return (c, u) => (L(), q("details", {
            id: "current-configuration",
            open: e.folds["current-configuration"],
            onToggle: u[0] || (u[0] = (h) => n("fold_update", h))
          }, [
            u[10] || (u[10] = E("summary", {
              class: "header"
            }, "Current Configuration", -1)),
            E("div", Ku, [
              u[2] || (u[2] = E("h3", null, "Data Set", -1)),
              u[3] || (u[3] = E("hr", null, null, -1)),
              E("span", null, Ie(e.dataset ? e.dataset.description() : ""), 1),
              u[4] || (u[4] = E("br", null, null, -1)),
              u[5] || (u[5] = E("br", null, null, -1)),
              u[6] || (u[6] = E("h3", null, "Items", -1)),
              E("div", Gu, [
                a(e.cfg).length > 0 ? (L(), q("hr", Yu)) : st("", true),
                (L(true), q(ae, null, Et(a(e.cfg), (h) => (L(), Fe(Pu, {
                  onCfg_update: i,
                  onUse_item: l,
                  onMake_item: r,
                  stack: h,
                  cfg: e.cfg
                }, null, 8, [
                  "stack",
                  "cfg"
                ]))), 256))
              ]),
              u[7] || (u[7] = E("br", null, null, -1)),
              u[8] || (u[8] = E("br", null, null, -1)),
              u[9] || (u[9] = E("h3", null, "Processes", -1)),
              e.cfg.get_processes().length > 0 ? (L(), q("div", Xu, [
                u[1] || (u[1] = kc('<hr class="proc_fw" data-v-864c8c32><div class="proc_header_d" data-v-864c8c32>Duration</div><div class="proc_header_i" data-v-864c8c32>Inputs</div><div class="proc_header_o" data-v-864c8c32>Outputs</div><hr class="proc_fw" data-v-864c8c32>', 5)),
                (L(true), q(ae, null, Et(e.cfg.get_processes(), (h) => (L(), Fe(rl, {
                  onModifier_update: o,
                  onFold_update: s,
                  active_proc: h,
                  cfg: e.cfg,
                  folds: e.folds,
                  id_prefix: "search"
                }, {
                  action_button: Ge(() => [
                    E("button", {
                      onClick: (g) => f(e.cfg, h.process.id)
                    }, "Remove", 8, Ju)
                  ]),
                  _: 2
                }, 1032, [
                  "active_proc",
                  "cfg",
                  "folds"
                ]))), 256))
              ])) : st("", true)
            ])
          ], 40, Wu));
        }
      }, Zu = Ni(Qu, [
        [
          "__scopeId",
          "data-v-864c8c32"
        ]
      ]), ef = [
        "open"
      ], tf = {
        class: "input_options"
      }, nf = [
        "value"
      ], of = [
        "disabled"
      ], sf = [
        "disabled"
      ], rf = [
        "open"
      ], lf = {
        class: "input_options"
      }, af = {
        class: "search_results"
      }, cf = {
        class: "proc"
      }, uf = {
        key: 0,
        class: "proc_fw"
      }, ff = {
        key: 1,
        class: "proc_header_d"
      }, df = {
        key: 2,
        class: "proc_header_i"
      }, pf = {
        key: 3,
        class: "proc_header_o"
      }, hf = {
        key: 4,
        class: "proc_fw"
      }, gf = [
        "onClick"
      ], _f = {
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
        async setup(e, { emit: t }) {
          let n, i;
          const o = t, s = e, { _0: r, cfg_fu: l } = wr(s), { cfg: a, _1: f, folds: c } = s;
          class u {
            constructor(M) {
              this._raw = M;
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
          }
          let h = ([n, i] = Qa(() => fetch("data/datasets.json").then(($) => {
            if (!$.ok) throw new Error("failed to fetch the list of data sets");
            return $.json();
          }).then(($) => (console.log($), $.datasets.map((M) => new u(M))))), n = await n, i(), n);
          console.log("fetched datasets", h.map(($) => ({
            style: $.style(),
            id: $.id(),
            description: $.description()
          })));
          const g = pe(""), w = pe(null);
          Be(g, ($) => {
            let M = h.find((D) => D.id() == $);
            w.value = M, console.log("Updating config with", $, M), a.update_data_set($, M.style());
          });
          const v = pe(""), _ = pe([]);
          Be(v, ($) => {
            console.log("Item search for", $), $.length >= 3 && (_.value = a.search_items($), console.log("search results items", _));
          });
          const C = pe(""), y = pe([]);
          Be(C, ($) => {
            console.log("Process search for", $), $.length >= 3 && (y.value = a.search_processes($), console.log("search results processes", y));
          }), Be(_, ($) => {
            console.log("item results changed", $), (y.value.length > 0 || $.length > 0) && o("fold_update", "search-results", true);
          }), Be(y, ($) => {
            console.log("proc results changed", $), (_.value.length > 0 || $.length > 0) && o("fold_update", "search-results", true);
          });
          function F() {
            console.log("C handle_cfg_update"), C.value = "", y.value = [], v.value = "", _.value = [], o("cfg_update");
          }
          function k($) {
            console.log("C handle make item", $), y.value = a.search_processes_by_output($);
          }
          function A($) {
            console.log("C handle use item", $), y.value = a.search_processes_by_input($);
          }
          function z($, M, D, H) {
            console.log("adding process", M, H, $), C.value = "", y.value = [];
            let te = $.add_process(M, D, H.duration, H.input, H.output);
            console.log("add process result", te, $, $.get_processes()), o("fold_update", "search-results", false), o("cfg_update");
          }
          function G($, M) {
            o("fold_update", $, M);
          }
          return ($, M) => {
            const D = Oi("tooltip");
            return L(), q(ae, null, [
              E("details", {
                id: "get-started",
                open: Pe(c)["get-started"],
                onToggle: M[3] || (M[3] = (H) => o("fold_update", H, null))
              }, [
                M[9] || (M[9] = E("summary", {
                  class: "header"
                }, "Get Started", -1)),
                E("div", tf, [
                  ee((L(), q("div", null, M[5] || (M[5] = [
                    E("label", {
                      for: "selectDataSet"
                    }, "Data Set:", -1)
                  ]))), [
                    [
                      D,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  ee((L(), q("div", null, [
                    ee(E("select", {
                      "onUpdate:modelValue": M[0] || (M[0] = (H) => g.value = H)
                    }, [
                      M[6] || (M[6] = E("option", {
                        disabled: "",
                        value: ""
                      }, "Select a data set", -1)),
                      (L(true), q(ae, null, Et(Pe(h), (H) => (L(), q("option", {
                        value: H.id()
                      }, Ie(H.description()), 9, nf))), 256))
                    ], 512), [
                      [
                        il,
                        g.value
                      ]
                    ])
                  ])), [
                    [
                      D,
                      "Start here, find the game and version that you need"
                    ]
                  ]),
                  ee((L(), q("div", null, M[7] || (M[7] = [
                    E("label", {
                      for: "item_search"
                    }, " Item Search:", -1)
                  ]))), [
                    [
                      D,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  ee((L(), q("div", null, [
                    ee(E("input", {
                      id: "item_search",
                      type: "text",
                      disabled: g.value == "",
                      "onUpdate:modelValue": M[1] || (M[1] = (H) => v.value = H)
                    }, null, 8, of), [
                      [
                        gi,
                        v.value
                      ]
                    ])
                  ])), [
                    [
                      D,
                      "Start by looking for an output item that you need"
                    ]
                  ]),
                  ee((L(), q("div", null, M[8] || (M[8] = [
                    E("label", {
                      for: "process_search"
                    }, " Process Search:", -1)
                  ]))), [
                    [
                      D,
                      "Start by looking for a process that you want to use"
                    ]
                  ]),
                  ee((L(), q("div", null, [
                    ee(E("input", {
                      id: "process_search",
                      type: "text",
                      disabled: g.value == "",
                      "onUpdate:modelValue": M[2] || (M[2] = (H) => C.value = H)
                    }, null, 8, sf), [
                      [
                        gi,
                        C.value
                      ]
                    ])
                  ])), [
                    [
                      D,
                      "Start by looking for a process that you want to use"
                    ]
                  ])
                ])
              ], 40, ef),
              E("details", {
                open: Pe(c)["search-results"],
                onToggle: M[4] || (M[4] = (H) => o("fold_update", "search-results"))
              }, [
                M[10] || (M[10] = E("summary", {
                  class: "header"
                }, "Search Results", -1)),
                E("div", lf, [
                  (L(true), q(ae, null, Et(_.value, (H) => (L(), Fe(wu, {
                    onCfg_update: F,
                    item: H,
                    cfg: Pe(a)
                  }, null, 8, [
                    "item",
                    "cfg"
                  ]))), 256)),
                  E("div", af, [
                    E("div", cf, [
                      y.value.length > 0 ? (L(), q("hr", uf)) : st("", true),
                      y.value.length > 0 ? (L(), q("div", ff, "Duration")) : st("", true),
                      y.value.length > 0 ? (L(), q("div", df, "Inputs")) : st("", true),
                      y.value.length > 0 ? (L(), q("div", pf, "Outputs")) : st("", true),
                      y.value.length > 0 ? (L(), q("hr", hf)) : st("", true),
                      (L(true), q(ae, null, Et(y.value, (H) => (L(), Fe(rl, {
                        proc: H,
                        cfg: Pe(a),
                        folds: Pe(c),
                        onFold_update: G,
                        id_prefix: "search"
                      }, {
                        action_button: Ge(({ factory_id: te, modifiers: de }) => [
                          E("button", {
                            onClick: (re) => z(Pe(a), H.id, te, de)
                          }, "Add", 8, gf)
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
              ], 40, rf),
              (L(), Fe(Zu, {
                onCfg_update: F,
                onUse_item: A,
                onMake_item: k,
                onFold_update: G,
                dataset: w.value,
                key: Pe(l),
                cfg: Pe(a),
                folds: Pe(c)
              }, null, 8, [
                "dataset",
                "cfg",
                "folds"
              ]))
            ], 64);
          };
        }
      }, mf = Ni(_f, [
        [
          "__scopeId",
          "data-v-cd0146af"
        ]
      ]), vf = {
        __name: "GraphRender",
        props: [
          "cfg",
          "cfg_fu"
        ],
        setup(e) {
          const t = e, { _0: n, cfg_fu: i } = wr(t), { cfg: o, _1: s } = t;
          return Be(i, (r) => {
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
          }), (r, l) => (L(), q(ae, null, [
            l[0] || (l[0] = E("div", {
              id: "vis"
            }, null, -1)),
            E("div", null, Ie(Pe(i)), 1)
          ], 64));
        }
      }, wf = "/assets/proc_rs_bg-CT6-FJan.wasm", yf = async (e = {}, t) => {
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
      let P;
      function bf(e) {
        P = e;
      }
      function jn(e) {
        const t = P.__externref_table_alloc();
        return P.__wbindgen_export_2.set(t, e), t;
      }
      function ki(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          const i = jn(n);
          P.__wbindgen_exn_store(i);
        }
      }
      const xf = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let ll = new xf("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      ll.decode();
      let Gn = null;
      function ni() {
        return (Gn === null || Gn.byteLength === 0) && (Gn = new Uint8Array(P.memory.buffer)), Gn;
      }
      function cn(e, t) {
        return e = e >>> 0, ll.decode(ni().subarray(e, e + t));
      }
      function qn(e) {
        return e == null;
      }
      const Cs = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => {
        P.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
      });
      function $f(e, t, n, i) {
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
            --o.cnt === 0 ? (P.__wbindgen_export_3.get(o.dtor)(l, o.b), Cs.unregister(o)) : o.a = l;
          }
        };
        return s.original = o, Cs.register(s, o, o), s;
      }
      function go(e) {
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
          o > 0 && (s += go(e[0]));
          for (let r = 1; r < o; r++) s += ", " + go(e[r]);
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
      const Sf = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let ii = new Sf("utf-8");
      const Tf = typeof ii.encodeInto == "function" ? function(e, t) {
        return ii.encodeInto(e, t);
      } : function(e, t) {
        const n = ii.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function me(e, t, n) {
        if (n === void 0) {
          const l = ii.encode(e), a = t(l.length, 1) >>> 0;
          return ni().subarray(a, a + l.length).set(l), he = l.length, a;
        }
        let i = e.length, o = t(i, 1) >>> 0;
        const s = ni();
        let r = 0;
        for (; r < i; r++) {
          const l = e.charCodeAt(r);
          if (l > 127) break;
          s[o + r] = l;
        }
        if (r !== i) {
          r !== 0 && (e = e.slice(r)), o = n(o, i, i = r + e.length * 3, 1) >>> 0;
          const l = ni().subarray(o + r, o + i), a = Tf(e, l);
          r += a.written, o = n(o, i, r, 1) >>> 0;
        }
        return he = r, o;
      }
      let Wt = null;
      function _i() {
        return (Wt === null || Wt.buffer.detached === true || Wt.buffer.detached === void 0 && Wt.buffer !== P.memory.buffer) && (Wt = new DataView(P.memory.buffer)), Wt;
      }
      function U(e) {
        const t = P.__wbindgen_export_2.get(e);
        return P.__externref_table_dealloc(e), t;
      }
      function Cf(e, t, n) {
        P.closure761_externref_shim(e, t, n);
      }
      function Pf(e, t, n, i) {
        P.closure773_externref_shim(e, t, n, i);
      }
      const Af = [
        "same-origin",
        "no-cors",
        "cors",
        "navigate"
      ], Ps = typeof FinalizationRegistry > "u" ? {
        register: () => {
        },
        unregister: () => {
        }
      } : new FinalizationRegistry((e) => P.__wbg_graphconfiguration_free(e >>> 0, 1));
      class Ef {
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, Ps.unregister(this), t;
        }
        free() {
          const t = this.__destroy_into_raw();
          P.__wbg_graphconfiguration_free(t, 0);
        }
        constructor() {
          const t = P.graphconfiguration_new();
          return this.__wbg_ptr = t >>> 0, Ps.register(this, this.__wbg_ptr, this), this;
        }
        dehydrate() {
          const t = P.graphconfiguration_dehydrate(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        reset() {
          const t = P.graphconfiguration_reset(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        rehydrate(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he;
          return P.graphconfiguration_rehydrate(this.__wbg_ptr, n, i);
        }
        get_current_data_set() {
          return P.graphconfiguration_get_current_data_set(this.__wbg_ptr);
        }
        can_render() {
          const t = P.graphconfiguration_can_render(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        add_requirement(t, n) {
          const i = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), o = he, s = P.graphconfiguration_add_requirement(this.__wbg_ptr, i, o, n);
          if (s[2]) throw U(s[1]);
          return U(s[0]);
        }
        update_requirement(t, n) {
          const i = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), o = he, s = P.graphconfiguration_update_requirement(this.__wbg_ptr, i, o, n);
          if (s[2]) throw U(s[1]);
          return U(s[0]);
        }
        remove_requirement(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_remove_requirement(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        get_requirements() {
          const t = P.graphconfiguration_get_requirements(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        add_import_export(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_add_import_export(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        remove_import_export(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_remove_import_export(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        get_imports_exports() {
          const t = P.graphconfiguration_get_imports_exports(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        add_process(t, n, i, o, s) {
          const r = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), l = he, a = me(n, P.__wbindgen_malloc, P.__wbindgen_realloc), f = he, c = P.graphconfiguration_add_process(this.__wbg_ptr, r, l, a, f, i, o, s);
          if (c[2]) throw U(c[1]);
          return U(c[0]);
        }
        remove_process(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_remove_process(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        update_modifiers(t, n, i, o, s) {
          const r = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), l = he, a = me(n, P.__wbindgen_malloc, P.__wbindgen_realloc), f = he, c = P.graphconfiguration_update_modifiers(this.__wbg_ptr, r, l, a, f, i, o, s);
          if (c[2]) throw U(c[1]);
          return U(c[0]);
        }
        get_processes() {
          const t = P.graphconfiguration_get_processes(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        factories_for_process(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_factories_for_process(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        get_defaulted_items() {
          const t = P.graphconfiguration_get_defaulted_items(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        get_intermediate_items() {
          const t = P.graphconfiguration_get_intermediate_items(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        update_data_set(t, n) {
          const i = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), o = he, s = me(n, P.__wbindgen_malloc, P.__wbindgen_realloc), r = he;
          return P.graphconfiguration_update_data_set(this.__wbg_ptr, i, o, s, r);
        }
        search_items(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_search_items(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        search_processes(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_search_processes(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        search_processes_by_output(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_search_processes_by_output(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        search_processes_by_input(t) {
          const n = me(t, P.__wbindgen_malloc, P.__wbindgen_realloc), i = he, o = P.graphconfiguration_search_processes_by_input(this.__wbg_ptr, n, i);
          if (o[2]) throw U(o[1]);
          return U(o[0]);
        }
        calculate() {
          P.graphconfiguration_calculate(this.__wbg_ptr);
        }
        to_digraph() {
          const t = P.graphconfiguration_to_digraph(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        get_initial_matrix() {
          const t = P.graphconfiguration_get_initial_matrix(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
        get_reduced_matrix() {
          const t = P.graphconfiguration_get_reduced_matrix(this.__wbg_ptr);
          if (t[2]) throw U(t[1]);
          return U(t[0]);
        }
      }
      function Of() {
        return ki(function(e, t) {
          return e.call(t);
        }, arguments);
      }
      function Rf() {
        return ki(function(e, t, n) {
          return e.call(t, n);
        }, arguments);
      }
      function Mf(e, t) {
        return e.fetch(t);
      }
      function If(e) {
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
      function kf(e, t) {
        console.log(cn(e, t));
      }
      function Df(e, t) {
        try {
          var n = {
            a: e,
            b: t
          }, i = (s, r) => {
            const l = n.a;
            n.a = 0;
            try {
              return Pf(l, n.b, s, r);
            } finally {
              n.a = l;
            }
          };
          return new Promise(i);
        } finally {
          n.a = n.b = 0;
        }
      }
      function Lf() {
        return new Object();
      }
      function Ff() {
        return new Array();
      }
      function Hf(e, t) {
        return new Function(cn(e, t));
      }
      function Bf() {
        return ki(function(e, t, n) {
          return new Request(cn(e, t), n);
        }, arguments);
      }
      function zf(e) {
        queueMicrotask(e);
      }
      function jf(e) {
        return e.queueMicrotask;
      }
      function qf(e) {
        return Promise.resolve(e);
      }
      function Vf(e, t, n) {
        e[t >>> 0] = n;
      }
      function Uf(e, t, n) {
        e[t] = n;
      }
      function Wf(e, t, n) {
        e.method = cn(t, n);
      }
      function Kf(e, t) {
        e.mode = Af[t];
      }
      function Gf() {
        const e = typeof global > "u" ? null : global;
        return qn(e) ? 0 : jn(e);
      }
      function Yf() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return qn(e) ? 0 : jn(e);
      }
      function Xf() {
        const e = typeof self > "u" ? null : self;
        return qn(e) ? 0 : jn(e);
      }
      function Jf() {
        const e = typeof window > "u" ? null : window;
        return qn(e) ? 0 : jn(e);
      }
      function Qf() {
        return ki(function(e) {
          return e.text();
        }, arguments);
      }
      function Zf(e, t) {
        return e.then(t);
      }
      function ed(e, t, n) {
        return e.then(t, n);
      }
      function td(e) {
        return BigInt.asUintN(64, e);
      }
      function nd(e) {
        const t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, true) : false;
      }
      function id(e, t, n) {
        return $f(e, t, 762, Cf);
      }
      function od(e, t) {
        const n = go(t), i = me(n, P.__wbindgen_malloc, P.__wbindgen_realloc), o = he;
        _i().setInt32(e + 4 * 1, o, true), _i().setInt32(e + 4 * 0, i, true);
      }
      function sd() {
        const e = P.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
      }
      function rd(e) {
        return typeof e == "function";
      }
      function ld(e) {
        return e === void 0;
      }
      function ad(e) {
        return e;
      }
      function cd(e, t) {
        const n = t, i = typeof n == "string" ? n : void 0;
        var o = qn(i) ? 0 : me(i, P.__wbindgen_malloc, P.__wbindgen_realloc), s = he;
        _i().setInt32(e + 4 * 1, s, true), _i().setInt32(e + 4 * 0, o, true);
      }
      function ud(e, t) {
        return cn(e, t);
      }
      function fd(e, t) {
        throw new Error(cn(e, t));
      }
      URL = globalThis.URL;
      const Y = await yf({
        "./proc_rs_bg.js": {
          __wbg_log_c235e79815fc436a: kf,
          __wbindgen_string_new: ud,
          __wbindgen_string_get: cd,
          __wbindgen_number_new: ad,
          __wbindgen_bigint_from_u64: td,
          __wbg_set_3f1d0b984ed272ed: Uf,
          __wbg_instanceof_Window_def73ea0955fc569: Nf,
          __wbg_fetch_b7bf320f681242d2: Mf,
          __wbg_setmethod_3c5280fe5d890842: Wf,
          __wbg_setmode_5dc300b865044b65: Kf,
          __wbg_newwithstrandinit_06c535e0a867c635: Bf,
          __wbg_instanceof_Response_f2cc20d9f7dfd644: If,
          __wbg_text_7805bea50de2af49: Qf,
          __wbg_queueMicrotask_97d92b4fcc8a61c5: zf,
          __wbg_queueMicrotask_d3219def82552485: jf,
          __wbindgen_is_function: rd,
          __wbindgen_cb_drop: nd,
          __wbg_new_78feb108b6472713: Ff,
          __wbg_newnoargs_105ed471475aaf50: Hf,
          __wbg_call_672a4d21634d4a24: Of,
          __wbg_new_405e22f390576ce2: Lf,
          __wbindgen_is_undefined: ld,
          __wbg_set_37837023f3d740e8: Vf,
          __wbg_call_7cccdd69e0791ae2: Rf,
          __wbg_new_23a2665fac83c611: Df,
          __wbg_resolve_4851785c9c5f573d: qf,
          __wbg_then_44b73946d2fb3e7d: Zf,
          __wbg_then_48b406749878a531: ed,
          __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: Yf,
          __wbg_static_accessor_SELF_37c5d418e4bf5819: Xf,
          __wbg_static_accessor_WINDOW_5de37043a91a9c40: Jf,
          __wbg_static_accessor_GLOBAL_88a902d13a557d07: Gf,
          __wbindgen_debug_string: od,
          __wbindgen_throw: fd,
          __wbindgen_closure_wrapper3187: id,
          __wbindgen_init_externref_table: sd
        }
      }, wf), dd = Y.memory, pd = Y.stuff, hd = Y.__wbg_graphconfiguration_free, gd = Y.graphconfiguration_new, _d = Y.graphconfiguration_dehydrate, md = Y.graphconfiguration_reset, vd = Y.graphconfiguration_rehydrate, wd = Y.graphconfiguration_get_current_data_set, yd = Y.graphconfiguration_can_render, bd = Y.graphconfiguration_add_requirement, xd = Y.graphconfiguration_update_requirement, $d = Y.graphconfiguration_remove_requirement, Sd = Y.graphconfiguration_get_requirements, Td = Y.graphconfiguration_add_import_export, Cd = Y.graphconfiguration_remove_import_export, Pd = Y.graphconfiguration_get_imports_exports, Ad = Y.graphconfiguration_add_process, Ed = Y.graphconfiguration_remove_process, Od = Y.graphconfiguration_update_modifiers, Rd = Y.graphconfiguration_get_processes, Md = Y.graphconfiguration_factories_for_process, Id = Y.graphconfiguration_get_defaulted_items, Nd = Y.graphconfiguration_get_intermediate_items, kd = Y.graphconfiguration_update_data_set, Dd = Y.graphconfiguration_search_items, Ld = Y.graphconfiguration_search_processes, Fd = Y.graphconfiguration_search_processes_by_output, Hd = Y.graphconfiguration_search_processes_by_input, Bd = Y.graphconfiguration_calculate, zd = Y.graphconfiguration_to_digraph, jd = Y.graphconfiguration_get_initial_matrix, qd = Y.graphconfiguration_get_reduced_matrix, Vd = Y.__wbindgen_exn_store, Ud = Y.__externref_table_alloc, Wd = Y.__wbindgen_export_2, Kd = Y.__wbindgen_export_3, Gd = Y.__wbindgen_malloc, Yd = Y.__wbindgen_realloc, Xd = Y.__externref_table_dealloc, Jd = Y.closure761_externref_shim, Qd = Y.closure773_externref_shim, al = Y.__wbindgen_start, Zd = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: Ud,
        __externref_table_dealloc: Xd,
        __wbg_graphconfiguration_free: hd,
        __wbindgen_exn_store: Vd,
        __wbindgen_export_2: Wd,
        __wbindgen_export_3: Kd,
        __wbindgen_malloc: Gd,
        __wbindgen_realloc: Yd,
        __wbindgen_start: al,
        closure761_externref_shim: Jd,
        closure773_externref_shim: Qd,
        graphconfiguration_add_import_export: Td,
        graphconfiguration_add_process: Ad,
        graphconfiguration_add_requirement: bd,
        graphconfiguration_calculate: Bd,
        graphconfiguration_can_render: yd,
        graphconfiguration_dehydrate: _d,
        graphconfiguration_factories_for_process: Md,
        graphconfiguration_get_current_data_set: wd,
        graphconfiguration_get_defaulted_items: Id,
        graphconfiguration_get_imports_exports: Pd,
        graphconfiguration_get_initial_matrix: jd,
        graphconfiguration_get_intermediate_items: Nd,
        graphconfiguration_get_processes: Rd,
        graphconfiguration_get_reduced_matrix: qd,
        graphconfiguration_get_requirements: Sd,
        graphconfiguration_new: gd,
        graphconfiguration_rehydrate: vd,
        graphconfiguration_remove_import_export: Cd,
        graphconfiguration_remove_process: Ed,
        graphconfiguration_remove_requirement: $d,
        graphconfiguration_reset: md,
        graphconfiguration_search_items: Dd,
        graphconfiguration_search_processes: Ld,
        graphconfiguration_search_processes_by_input: Hd,
        graphconfiguration_search_processes_by_output: Fd,
        graphconfiguration_to_digraph: zd,
        graphconfiguration_update_data_set: kd,
        graphconfiguration_update_modifiers: Od,
        graphconfiguration_update_requirement: xd,
        memory: dd,
        stuff: pd
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      bf(Zd);
      al();
      const ep = {
        __name: "App",
        setup(e) {
          const t = ya(new Ef()), n = pe(0);
          if (window.location.hash) {
            let l = new URLSearchParams(window.location.hash.substring(1));
            console.log("params", l);
            var i = document.querySelector("#viz");
            i.addEventListener("load", function() {
              l.has("s0") ? t.value.rehydrate(l.get("s0")).then((a) => {
                console.log("rehydrate result", a), r("get-started", !t.value.can_render()), r("current-configuration", t.value.can_render()), n.value++;
              }) : (console.log("reset: no parameter"), t.value.reset(), n.value++);
            });
          } else console.log("reset: no fragment"), t.value.reset(), n.value++;
          function o() {
            console.log("A handle_cfg_update"), r("get-started", !t.value.can_render()), r("current-configuration", t.value.can_render());
            let l = t.value.dehydrate();
            console.log("serialised", l), l && window.location.replace("#s0=" + l), xa(t), n.value++;
          }
          const s = pe({
            "get-started": !t.value.can_render(),
            "current-configuration": t.value.can_render()
          });
          function r(l, a) {
            console.log("fold update 1", l, a, s.value, l);
            let f = null;
            l.target ? f = l.target.id : f = l, typeof a < "u" && a != null ? s.value[f] = a : s[f] = !s[f], console.log("fold update 2", f, a, s.value, l);
          }
          return (l, a) => (L(), q(ae, null, [
            a[0] || (a[0] = E("header", null, [
              E("h1", null, [
                E("a", {
                  href: "#",
                  onclick: "window.location.assign('#'); window.location.reload()"
                }, "Process Calculator")
              ])
            ], -1)),
            a[1] || (a[1] = E("br", null, null, -1)),
            E("main", null, [
              _e(Pe(vu), null, {
                "left-pane": Ge(() => [
                  (L(), Fe(Pc, null, {
                    default: Ge(() => [
                      _e(mf, {
                        cfg: t.value,
                        cfg_fu: n.value,
                        folds: s.value,
                        onCfg_update: o,
                        onFold_update: r
                      }, null, 8, [
                        "cfg",
                        "cfg_fu",
                        "folds"
                      ])
                    ]),
                    _: 1
                  }))
                ]),
                "right-pane": Ge(() => [
                  _e(vf, {
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
      }, tp = Ni(ep, [
        [
          "__scopeId",
          "data-v-5e4ac74a"
        ]
      ]), np = [
        "top",
        "right",
        "bottom",
        "left"
      ], As = [
        "start",
        "end"
      ], Es = np.reduce((e, t) => e.concat(t, t + "-" + As[0], t + "-" + As[1]), []), In = Math.min, Bt = Math.max, ip = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      }, op = {
        start: "end",
        end: "start"
      };
      function _o(e, t, n) {
        return Bt(e, In(t, n));
      }
      function qt(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function ut(e) {
        return e.split("-")[0];
      }
      function Ye(e) {
        return e.split("-")[1];
      }
      function cl(e) {
        return e === "x" ? "y" : "x";
      }
      function jo(e) {
        return e === "y" ? "height" : "width";
      }
      const sp = /* @__PURE__ */ new Set([
        "top",
        "bottom"
      ]);
      function _t(e) {
        return sp.has(ut(e)) ? "y" : "x";
      }
      function qo(e) {
        return cl(_t(e));
      }
      function ul(e, t, n) {
        n === void 0 && (n = false);
        const i = Ye(e), o = qo(e), s = jo(o);
        let r = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
        return t.reference[s] > t.floating[s] && (r = vi(r)), [
          r,
          vi(r)
        ];
      }
      function rp(e) {
        const t = vi(e);
        return [
          mi(e),
          t,
          mi(t)
        ];
      }
      function mi(e) {
        return e.replace(/start|end/g, (t) => op[t]);
      }
      const Os = [
        "left",
        "right"
      ], Rs = [
        "right",
        "left"
      ], lp = [
        "top",
        "bottom"
      ], ap = [
        "bottom",
        "top"
      ];
      function cp(e, t, n) {
        switch (e) {
          case "top":
          case "bottom":
            return n ? t ? Rs : Os : t ? Os : Rs;
          case "left":
          case "right":
            return t ? lp : ap;
          default:
            return [];
        }
      }
      function up(e, t, n, i) {
        const o = Ye(e);
        let s = cp(ut(e), n === "start", i);
        return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(mi)))), s;
      }
      function vi(e) {
        return e.replace(/left|right|bottom|top/g, (t) => ip[t]);
      }
      function fp(e) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...e
        };
      }
      function fl(e) {
        return typeof e != "number" ? fp(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        };
      }
      function xn(e) {
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
      function Ms(e, t, n) {
        let { reference: i, floating: o } = e;
        const s = _t(t), r = qo(t), l = jo(r), a = ut(t), f = s === "y", c = i.x + i.width / 2 - o.width / 2, u = i.y + i.height / 2 - o.height / 2, h = i[l] / 2 - o[l] / 2;
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
              y: u
            };
            break;
          case "left":
            g = {
              x: i.x - o.width,
              y: u
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
            g[r] -= h * (n && f ? -1 : 1);
            break;
          case "end":
            g[r] += h * (n && f ? -1 : 1);
            break;
        }
        return g;
      }
      const dp = async (e, t, n) => {
        const { placement: i = "bottom", strategy: o = "absolute", middleware: s = [], platform: r } = n, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(t));
        let f = await r.getElementRects({
          reference: e,
          floating: t,
          strategy: o
        }), { x: c, y: u } = Ms(f, i, a), h = i, g = {}, w = 0;
        for (let v = 0; v < l.length; v++) {
          const { name: _, fn: C } = l[v], { x: y, y: F, data: k, reset: A } = await C({
            x: c,
            y: u,
            initialPlacement: i,
            placement: h,
            strategy: o,
            middlewareData: g,
            rects: f,
            platform: r,
            elements: {
              reference: e,
              floating: t
            }
          });
          c = y ?? c, u = F ?? u, g = {
            ...g,
            [_]: {
              ...g[_],
              ...k
            }
          }, A && w <= 50 && (w++, typeof A == "object" && (A.placement && (h = A.placement), A.rects && (f = A.rects === true ? await r.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          }) : A.rects), { x: c, y: u } = Ms(f, h, a)), v = -1);
        }
        return {
          x: c,
          y: u,
          placement: h,
          strategy: o,
          middlewareData: g
        };
      };
      async function Di(e, t) {
        var n;
        t === void 0 && (t = {});
        const { x: i, y: o, platform: s, rects: r, elements: l, strategy: a } = e, { boundary: f = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: h = false, padding: g = 0 } = qt(t, e), w = fl(g), _ = l[h ? u === "floating" ? "reference" : "floating" : u], C = xn(await s.getClippingRect({
          element: (n = await (s.isElement == null ? void 0 : s.isElement(_))) == null || n ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
          boundary: f,
          rootBoundary: c,
          strategy: a
        })), y = u === "floating" ? {
          x: i,
          y: o,
          width: r.floating.width,
          height: r.floating.height
        } : r.reference, F = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), k = await (s.isElement == null ? void 0 : s.isElement(F)) ? await (s.getScale == null ? void 0 : s.getScale(F)) || {
          x: 1,
          y: 1
        } : {
          x: 1,
          y: 1
        }, A = xn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: y,
          offsetParent: F,
          strategy: a
        }) : y);
        return {
          top: (C.top - A.top + w.top) / k.y,
          bottom: (A.bottom - C.bottom + w.bottom) / k.y,
          left: (C.left - A.left + w.left) / k.x,
          right: (A.right - C.right + w.right) / k.x
        };
      }
      const pp = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          const { x: n, y: i, placement: o, rects: s, platform: r, elements: l, middlewareData: a } = t, { element: f, padding: c = 0 } = qt(e, t) || {};
          if (f == null) return {};
          const u = fl(c), h = {
            x: n,
            y: i
          }, g = qo(o), w = jo(g), v = await r.getDimensions(f), _ = g === "y", C = _ ? "top" : "left", y = _ ? "bottom" : "right", F = _ ? "clientHeight" : "clientWidth", k = s.reference[w] + s.reference[g] - h[g] - s.floating[w], A = h[g] - s.reference[g], z = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(f));
          let G = z ? z[F] : 0;
          (!G || !await (r.isElement == null ? void 0 : r.isElement(z))) && (G = l.floating[F] || s.floating[w]);
          const $ = k / 2 - A / 2, M = G / 2 - v[w] / 2 - 1, D = In(u[C], M), H = In(u[y], M), te = D, de = G - v[w] - H, re = G / 2 - v[w] / 2 + $, Te = _o(te, re, de), ne = !a.arrow && Ye(o) != null && re !== Te && s.reference[w] / 2 - (re < te ? D : H) - v[w] / 2 < 0, X = ne ? re < te ? re - te : re - de : 0;
          return {
            [g]: h[g] + X,
            data: {
              [g]: Te,
              centerOffset: re - Te - X,
              ...ne && {
                alignmentOffset: X
              }
            },
            reset: ne
          };
        }
      });
      function hp(e, t, n) {
        return (e ? [
          ...n.filter((o) => Ye(o) === e),
          ...n.filter((o) => Ye(o) !== e)
        ] : n.filter((o) => ut(o) === o)).filter((o) => e ? Ye(o) === e || (t ? mi(o) !== o : false) : true);
      }
      const gp = function(e) {
        return e === void 0 && (e = {}), {
          name: "autoPlacement",
          options: e,
          async fn(t) {
            var n, i, o;
            const { rects: s, middlewareData: r, placement: l, platform: a, elements: f } = t, { crossAxis: c = false, alignment: u, allowedPlacements: h = Es, autoAlignment: g = true, ...w } = qt(e, t), v = u !== void 0 || h === Es ? hp(u || null, g, h) : h, _ = await Di(t, w), C = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, y = v[C];
            if (y == null) return {};
            const F = ul(y, s, await (a.isRTL == null ? void 0 : a.isRTL(f.floating)));
            if (l !== y) return {
              reset: {
                placement: v[0]
              }
            };
            const k = [
              _[ut(y)],
              _[F[0]],
              _[F[1]]
            ], A = [
              ...((i = r.autoPlacement) == null ? void 0 : i.overflows) || [],
              {
                placement: y,
                overflows: k
              }
            ], z = v[C + 1];
            if (z) return {
              data: {
                index: C + 1,
                overflows: A
              },
              reset: {
                placement: z
              }
            };
            const G = A.map((D) => {
              const H = Ye(D.placement);
              return [
                D.placement,
                H && c ? D.overflows.slice(0, 2).reduce((te, de) => te + de, 0) : D.overflows[0],
                D.overflows
              ];
            }).sort((D, H) => D[1] - H[1]), M = ((o = G.filter((D) => D[2].slice(0, Ye(D[0]) ? 2 : 3).every((H) => H <= 0))[0]) == null ? void 0 : o[0]) || G[0][0];
            return M !== l ? {
              data: {
                index: C + 1,
                overflows: A
              },
              reset: {
                placement: M
              }
            } : {};
          }
        };
      }, _p = function(e) {
        return e === void 0 && (e = {}), {
          name: "flip",
          options: e,
          async fn(t) {
            var n, i;
            const { placement: o, middlewareData: s, rects: r, initialPlacement: l, platform: a, elements: f } = t, { mainAxis: c = true, crossAxis: u = true, fallbackPlacements: h, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: w = "none", flipAlignment: v = true, ..._ } = qt(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const C = ut(o), y = _t(l), F = ut(l) === l, k = await (a.isRTL == null ? void 0 : a.isRTL(f.floating)), A = h || (F || !v ? [
              vi(l)
            ] : rp(l)), z = w !== "none";
            !h && z && A.push(...up(l, v, w, k));
            const G = [
              l,
              ...A
            ], $ = await Di(t, _), M = [];
            let D = ((i = s.flip) == null ? void 0 : i.overflows) || [];
            if (c && M.push($[C]), u) {
              const re = ul(o, r, k);
              M.push($[re[0]], $[re[1]]);
            }
            if (D = [
              ...D,
              {
                placement: o,
                overflows: M
              }
            ], !M.every((re) => re <= 0)) {
              var H, te;
              const re = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1, Te = G[re];
              if (Te && (!(u === "alignment" ? y !== _t(Te) : false) || D.every((J) => _t(J.placement) === y ? J.overflows[0] > 0 : true))) return {
                data: {
                  index: re,
                  overflows: D
                },
                reset: {
                  placement: Te
                }
              };
              let ne = (te = D.filter((X) => X.overflows[0] <= 0).sort((X, J) => X.overflows[1] - J.overflows[1])[0]) == null ? void 0 : te.placement;
              if (!ne) switch (g) {
                case "bestFit": {
                  var de;
                  const X = (de = D.filter((J) => {
                    if (z) {
                      const xe = _t(J.placement);
                      return xe === y || xe === "y";
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
              if (o !== ne) return {
                reset: {
                  placement: ne
                }
              };
            }
            return {};
          }
        };
      }, mp = /* @__PURE__ */ new Set([
        "left",
        "top"
      ]);
      async function vp(e, t) {
        const { placement: n, platform: i, elements: o } = e, s = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), r = ut(n), l = Ye(n), a = _t(n) === "y", f = mp.has(r) ? -1 : 1, c = s && a ? -1 : 1, u = qt(t, e);
        let { mainAxis: h, crossAxis: g, alignmentAxis: w } = typeof u == "number" ? {
          mainAxis: u,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: u.mainAxis || 0,
          crossAxis: u.crossAxis || 0,
          alignmentAxis: u.alignmentAxis
        };
        return l && typeof w == "number" && (g = l === "end" ? w * -1 : w), a ? {
          x: g * c,
          y: h * f
        } : {
          x: h * f,
          y: g * c
        };
      }
      const wp = function(e) {
        return e === void 0 && (e = 0), {
          name: "offset",
          options: e,
          async fn(t) {
            var n, i;
            const { x: o, y: s, placement: r, middlewareData: l } = t, a = await vp(t, e);
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
      }, yp = function(e) {
        return e === void 0 && (e = {}), {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: i, placement: o } = t, { mainAxis: s = true, crossAxis: r = false, limiter: l = {
              fn: (_) => {
                let { x: C, y } = _;
                return {
                  x: C,
                  y
                };
              }
            }, ...a } = qt(e, t), f = {
              x: n,
              y: i
            }, c = await Di(t, a), u = _t(ut(o)), h = cl(u);
            let g = f[h], w = f[u];
            if (s) {
              const _ = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", y = g + c[_], F = g - c[C];
              g = _o(y, g, F);
            }
            if (r) {
              const _ = u === "y" ? "top" : "left", C = u === "y" ? "bottom" : "right", y = w + c[_], F = w - c[C];
              w = _o(y, w, F);
            }
            const v = l.fn({
              ...t,
              [h]: g,
              [u]: w
            });
            return {
              ...v,
              data: {
                x: v.x - n,
                y: v.y - i,
                enabled: {
                  [h]: s,
                  [u]: r
                }
              }
            };
          }
        };
      }, bp = function(e) {
        return e === void 0 && (e = {}), {
          name: "size",
          options: e,
          async fn(t) {
            var n, i;
            const { placement: o, rects: s, platform: r, elements: l } = t, { apply: a = () => {
            }, ...f } = qt(e, t), c = await Di(t, f), u = ut(o), h = Ye(o), g = _t(o) === "y", { width: w, height: v } = s.floating;
            let _, C;
            u === "top" || u === "bottom" ? (_ = u, C = h === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = u, _ = h === "end" ? "top" : "bottom");
            const y = v - c.top - c.bottom, F = w - c.left - c.right, k = In(v - c[_], y), A = In(w - c[C], F), z = !t.middlewareData.shift;
            let G = k, $ = A;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && ($ = F), (i = t.middlewareData.shift) != null && i.enabled.y && (G = y), z && !h) {
              const D = Bt(c.left, 0), H = Bt(c.right, 0), te = Bt(c.top, 0), de = Bt(c.bottom, 0);
              g ? $ = w - 2 * (D !== 0 || H !== 0 ? D + H : Bt(c.left, c.right)) : G = v - 2 * (te !== 0 || de !== 0 ? te + de : Bt(c.top, c.bottom));
            }
            await a({
              ...t,
              availableWidth: $,
              availableHeight: G
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
      const Is = Math.min, $n = Math.max, wi = Math.round;
      function dl(e) {
        const t = lt(e);
        let n = parseFloat(t.width), i = parseFloat(t.height);
        const o = e.offsetWidth, s = e.offsetHeight, r = wi(n) !== o || wi(i) !== s;
        return r && (n = o, i = s), {
          width: n,
          height: i,
          fallback: r
        };
      }
      function It(e) {
        return hl(e) ? (e.nodeName || "").toLowerCase() : "";
      }
      let Yn;
      function pl() {
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
      function hl(e) {
        return e instanceof ze(e).Node;
      }
      function Ns(e) {
        return typeof ShadowRoot > "u" ? false : e instanceof ze(e).ShadowRoot || e instanceof ShadowRoot;
      }
      function Li(e) {
        const { overflow: t, overflowX: n, overflowY: i, display: o } = lt(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && ![
          "inline",
          "contents"
        ].includes(o);
      }
      function xp(e) {
        return [
          "table",
          "td",
          "th"
        ].includes(It(e));
      }
      function mo(e) {
        const t = /firefox/i.test(pl()), n = lt(e), i = n.backdropFilter || n.WebkitBackdropFilter;
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
      function gl() {
        return !/^((?!chrome|android).)*safari/i.test(pl());
      }
      function Vo(e) {
        return [
          "html",
          "body",
          "#document"
        ].includes(It(e));
      }
      function _l(e) {
        return Ot(e) ? e : e.contextElement;
      }
      const ml = {
        x: 1,
        y: 1
      };
      function tn(e) {
        const t = _l(e);
        if (!at(t)) return ml;
        const n = t.getBoundingClientRect(), { width: i, height: o, fallback: s } = dl(t);
        let r = (s ? wi(n.width) : n.width) / i, l = (s ? wi(n.height) : n.height) / o;
        return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), {
          x: r,
          y: l
        };
      }
      function Nn(e, t, n, i) {
        var o, s;
        t === void 0 && (t = false), n === void 0 && (n = false);
        const r = e.getBoundingClientRect(), l = _l(e);
        let a = ml;
        t && (i ? Ot(i) && (a = tn(i)) : a = tn(e));
        const f = l ? ze(l) : window, c = !gl() && n;
        let u = (r.left + (c && ((o = f.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / a.x, h = (r.top + (c && ((s = f.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / a.y, g = r.width / a.x, w = r.height / a.y;
        if (l) {
          const v = ze(l), _ = i && Ot(i) ? ze(i) : i;
          let C = v.frameElement;
          for (; C && i && _ !== v; ) {
            const y = tn(C), F = C.getBoundingClientRect(), k = getComputedStyle(C);
            F.x += (C.clientLeft + parseFloat(k.paddingLeft)) * y.x, F.y += (C.clientTop + parseFloat(k.paddingTop)) * y.y, u *= y.x, h *= y.y, g *= y.x, w *= y.y, u += F.x, h += F.y, C = ze(C).frameElement;
          }
        }
        return {
          width: g,
          height: w,
          top: h,
          right: u + g,
          bottom: h + w,
          left: u,
          x: u,
          y: h
        };
      }
      function Rt(e) {
        return ((hl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
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
      function vl(e) {
        return Nn(Rt(e)).left + Fi(e).scrollLeft;
      }
      function kn(e) {
        if (It(e) === "html") return e;
        const t = e.assignedSlot || e.parentNode || Ns(e) && e.host || Rt(e);
        return Ns(t) ? t.host : t;
      }
      function wl(e) {
        const t = kn(e);
        return Vo(t) ? t.ownerDocument.body : at(t) && Li(t) ? t : wl(t);
      }
      function yi(e, t) {
        var n;
        t === void 0 && (t = []);
        const i = wl(e), o = i === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ze(i);
        return o ? t.concat(s, s.visualViewport || [], Li(i) ? i : []) : t.concat(i, yi(i));
      }
      function ks(e, t, n) {
        return t === "viewport" ? xn(function(i, o) {
          const s = ze(i), r = Rt(i), l = s.visualViewport;
          let a = r.clientWidth, f = r.clientHeight, c = 0, u = 0;
          if (l) {
            a = l.width, f = l.height;
            const h = gl();
            (h || !h && o === "fixed") && (c = l.offsetLeft, u = l.offsetTop);
          }
          return {
            width: a,
            height: f,
            x: c,
            y: u
          };
        }(e, n)) : Ot(t) ? xn(function(i, o) {
          const s = Nn(i, true, o === "fixed"), r = s.top + i.clientTop, l = s.left + i.clientLeft, a = at(i) ? tn(i) : {
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
          const o = Rt(i), s = Fi(i), r = i.ownerDocument.body, l = $n(o.scrollWidth, o.clientWidth, r.scrollWidth, r.clientWidth), a = $n(o.scrollHeight, o.clientHeight, r.scrollHeight, r.clientHeight);
          let f = -s.scrollLeft + vl(i);
          const c = -s.scrollTop;
          return lt(r).direction === "rtl" && (f += $n(o.clientWidth, r.clientWidth) - l), {
            width: l,
            height: a,
            x: f,
            y: c
          };
        }(Rt(e)));
      }
      function Ds(e) {
        return at(e) && lt(e).position !== "fixed" ? e.offsetParent : null;
      }
      function Ls(e) {
        const t = ze(e);
        let n = Ds(e);
        for (; n && xp(n) && lt(n).position === "static"; ) n = Ds(n);
        return n && (It(n) === "html" || It(n) === "body" && lt(n).position === "static" && !mo(n)) ? t : n || function(i) {
          let o = kn(i);
          for (; at(o) && !Vo(o); ) {
            if (mo(o)) return o;
            o = kn(o);
          }
          return null;
        }(e) || t;
      }
      function $p(e, t, n) {
        const i = at(t), o = Rt(t), s = Nn(e, true, n === "fixed", t);
        let r = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = {
          x: 0,
          y: 0
        };
        if (i || !i && n !== "fixed") if ((It(t) !== "body" || Li(o)) && (r = Fi(t)), at(t)) {
          const a = Nn(t, true);
          l.x = a.x + t.clientLeft, l.y = a.y + t.clientTop;
        } else o && (l.x = vl(o));
        return {
          x: s.left + r.scrollLeft - l.x,
          y: s.top + r.scrollTop - l.y,
          width: s.width,
          height: s.height
        };
      }
      const Sp = {
        getClippingRect: function(e) {
          let { element: t, boundary: n, rootBoundary: i, strategy: o } = e;
          const s = n === "clippingAncestors" ? function(f, c) {
            const u = c.get(f);
            if (u) return u;
            let h = yi(f).filter((_) => Ot(_) && It(_) !== "body"), g = null;
            const w = lt(f).position === "fixed";
            let v = w ? kn(f) : f;
            for (; Ot(v) && !Vo(v); ) {
              const _ = lt(v), C = mo(v);
              (w ? C || g : C || _.position !== "static" || !g || ![
                "absolute",
                "fixed"
              ].includes(g.position)) ? g = _ : h = h.filter((y) => y !== v), v = kn(v);
            }
            return c.set(f, h), h;
          }(t, this._c) : [].concat(n), r = [
            ...s,
            i
          ], l = r[0], a = r.reduce((f, c) => {
            const u = ks(t, c, o);
            return f.top = $n(u.top, f.top), f.right = Is(u.right, f.right), f.bottom = Is(u.bottom, f.bottom), f.left = $n(u.left, f.left), f;
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
          if ((o || !o && i !== "fixed") && ((It(n) !== "body" || Li(s)) && (r = Fi(n)), at(n))) {
            const f = Nn(n);
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
          return at(e) ? dl(e) : e.getBoundingClientRect();
        },
        getOffsetParent: Ls,
        getDocumentElement: Rt,
        getScale: tn,
        async getElementRects(e) {
          let { reference: t, floating: n, strategy: i } = e;
          const o = this.getOffsetParent || Ls, s = this.getDimensions;
          return {
            reference: $p(t, await o(n), i),
            floating: {
              x: 0,
              y: 0,
              ...await s(n)
            }
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => lt(e).direction === "rtl"
      }, Tp = (e, t, n) => {
        const i = /* @__PURE__ */ new Map(), o = {
          platform: Sp,
          ...n
        }, s = {
          ...o.platform,
          _c: i
        };
        return dp(e, t, {
          ...o,
          platform: s
        });
      };
      function yl(e, t) {
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? yl(e[n], t[n]) : e[n] = t[n]);
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
      function Cp(e) {
        const t = [
          e
        ];
        let n = Xe.themes[e] || {};
        do
          n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Xe.themes[n.$extend] || {}) : n = null;
        while (n);
        return t.map((i) => `v-popper--theme-${i}`);
      }
      function Fs(e) {
        const t = [
          e
        ];
        let n = Xe.themes[e] || {};
        do
          n.$extend ? (t.push(n.$extend), n = Xe.themes[n.$extend] || {}) : n = null;
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
      let bl = false;
      typeof window < "u" && typeof navigator < "u" && (bl = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
      const xl = [
        "auto",
        "top",
        "bottom",
        "left",
        "right"
      ].reduce((e, t) => e.concat([
        t,
        `${t}-start`,
        `${t}-end`
      ]), []), Hs = {
        hover: "mouseenter",
        focus: "focus",
        click: "click",
        touch: "touchstart",
        pointer: "pointerdown"
      }, Bs = {
        hover: "mouseleave",
        focus: "blur",
        click: "click",
        touch: "touchend",
        pointer: "pointerup"
      };
      function zs(e, t) {
        const n = e.indexOf(t);
        n !== -1 && e.splice(n, 1);
      }
      function Qi() {
        return new Promise((e) => requestAnimationFrame(() => {
          requestAnimationFrame(e);
        }));
      }
      const Ue = [];
      let Ft = null;
      const js = {};
      function qs(e) {
        let t = js[e];
        return t || (t = js[e] = []), t;
      }
      let vo = function() {
      };
      typeof window < "u" && (vo = window.Element);
      function Z(e) {
        return function(t) {
          return Dn(t.theme, e);
        };
      }
      const Zi = "__floating-vue__popper", $l = () => zn({
        name: "VPopper",
        provide() {
          return {
            [Zi]: {
              parentPopper: this
            }
          };
        },
        inject: {
          [Zi]: {
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
            validator: (e) => xl.includes(e)
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
              vo,
              Boolean
            ],
            default: Z("container")
          },
          boundary: {
            type: [
              String,
              vo
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
            return (e = this[Zi]) == null ? void 0 : e.parentPopper;
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
            (this.distance || this.skidding) && e.middleware.push(wp({
              mainAxis: this.distance,
              crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(gp({
              alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(yp({
              padding: this.overflowPadding,
              boundary: this.boundary,
              crossAxis: this.shiftCrossAxis
            })), !t && this.flip && e.middleware.push(_p({
              padding: this.overflowPadding,
              boundary: this.boundary
            }))), e.middleware.push(pp({
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
                  let a, f;
                  return s.startsWith("top") || s.startsWith("bottom") ? a = o.reference.width : f = o.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = a != null ? `${a}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = f != null ? `${f}px` : null, {
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
            (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(bp({
              boundary: this.boundary,
              padding: this.overflowPadding,
              apply: ({ availableWidth: i, availableHeight: o }) => {
                this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = o != null ? `${o}px` : null;
              }
            })));
            const n = await Tp(this.$_referenceNode, this.$_popperNode, e);
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
            clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Qi(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
              ...yi(this.$_referenceNode),
              ...yi(this.$_popperNode)
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
            for (const t of Fs(this.theme)) qs(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await Qi(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
          },
          async $_applyHide(e = false) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = true, this.$_hideInProgress = false;
              return;
            }
            if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
            this.skipTransition = e, zs(Ue, this), Ue.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of Fs(this.theme)) {
              const i = qs(n);
              zs(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
            }
            Ft === this && (Ft = null), this.isShown = false, this.$_applyAttrsToTarget({
              "aria-describedby": void 0,
              "data-popper-shown": void 0
            }), clearTimeout(this.$_disposeTimer);
            const t = this.disposeTimeout;
            t !== null && (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
            }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await Qi(), this.classes.hideFrom = false, this.classes.hideTo = true;
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
            this.$_registerTriggerListeners(this.$_targetNodes, Hs, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([
              this.$_popperNode
            ], Hs, this.popperTriggers, this.popperShowTriggers, e);
            const t = (n) => {
              n.usedByTooltip || this.hide({
                event: n
              });
            };
            this.$_registerTriggerListeners(this.$_targetNodes, Bs, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([
              this.$_popperNode
            ], Bs, this.popperTriggers, this.popperHideTriggers, t);
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
            if (Sn >= e.left && Sn <= e.right && Tn >= e.top && Tn <= e.bottom) {
              const t = this.$_popperNode.getBoundingClientRect(), n = Sn - bt, i = Tn - xt, o = t.left + t.width / 2 - bt + (t.top + t.height / 2) - xt + t.width + t.height, s = bt + n * o, r = xt + i * o;
              return Xn(bt, xt, s, r, t.left, t.top, t.left, t.bottom) || Xn(bt, xt, s, r, t.left, t.top, t.right, t.top) || Xn(bt, xt, s, r, t.right, t.top, t.right, t.bottom) || Xn(bt, xt, s, r, t.left, t.bottom, t.right, t.bottom);
            }
            return false;
          }
        },
        render() {
          return this.$slots.default(this.slotData);
        }
      });
      if (typeof document < "u" && typeof window < "u") {
        if (bl) {
          const e = an ? {
            passive: true,
            capture: true
          } : true;
          document.addEventListener("touchstart", (t) => Vs(t, true), e), document.addEventListener("touchend", (t) => Us(t, true), e);
        } else window.addEventListener("mousedown", (e) => Vs(e, false), true), window.addEventListener("click", (e) => Us(e, false), true);
        window.addEventListener("resize", Ap);
      }
      function Vs(e, t) {
        if (Xe.autoHideOnMousedown) Sl(e, t);
        else for (let n = 0; n < Ue.length; n++) {
          const i = Ue[n];
          try {
            i.mouseDownContains = i.popperNode().contains(e.target);
          } catch {
          }
        }
      }
      function Us(e, t) {
        Xe.autoHideOnMousedown || Sl(e, t);
      }
      function Sl(e, t) {
        const n = {};
        for (let i = Ue.length - 1; i >= 0; i--) {
          const o = Ue[i];
          try {
            const s = o.containsGlobalTarget = o.mouseDownContains || o.popperNode().contains(e.target);
            o.pendingHide = false, requestAnimationFrame(() => {
              if (o.pendingHide = false, !n[o.randomId] && Ws(o, s, e)) {
                if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
                  let l = o.parentPopper;
                  for (; l; ) n[l.randomId] = true, l = l.parentPopper;
                  return;
                }
                let r = o.parentPopper;
                for (; r && Ws(r, r.containsGlobalTarget, e); ) r.$_handleGlobalClose(e, t), r = r.parentPopper;
              }
            });
          } catch {
          }
        }
      }
      function Ws(e, t, n) {
        return n.closeAllPopover || n.closePopover && t || Pp(e, n) && !t;
      }
      function Pp(e, t) {
        if (typeof e.autoHide == "function") {
          const n = e.autoHide(t);
          return e.lastAutoHide = n, n;
        }
        return e.autoHide;
      }
      function Ap() {
        for (let e = 0; e < Ue.length; e++) Ue[e].$_computePosition();
      }
      let bt = 0, xt = 0, Sn = 0, Tn = 0;
      typeof window < "u" && window.addEventListener("mousemove", (e) => {
        bt = Sn, xt = Tn, Sn = e.clientX, Tn = e.clientY;
      }, an ? {
        passive: true
      } : void 0);
      function Xn(e, t, n, i, o, s, r, l) {
        const a = ((r - o) * (t - s) - (l - s) * (e - o)) / ((l - s) * (n - e) - (r - o) * (i - t)), f = ((n - e) * (t - s) - (i - t) * (e - o)) / ((l - s) * (n - e) - (r - o) * (i - t));
        return a >= 0 && a <= 1 && f >= 0 && f <= 1;
      }
      const Ep = {
        extends: $l()
      }, Hi = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [i, o] of t) n[i] = o;
        return n;
      };
      function Op(e, t, n, i, o, s) {
        return L(), q("div", {
          ref: "reference",
          class: We([
            "v-popper",
            {
              "v-popper--shown": e.slotData.isShown
            }
          ])
        }, [
          gt(e.$slots, "default", Wl(Qr(e.slotData)))
        ], 2);
      }
      const Rp = Hi(Ep, [
        [
          "render",
          Op
        ]
      ]);
      function Mp() {
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
      let oi;
      function wo() {
        wo.init || (wo.init = true, oi = Mp() !== -1);
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
          wo(), No(() => {
            this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
          });
          const e = document.createElement("object");
          this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", oi && this.$el.appendChild(e), e.data = "about:blank", oi || this.$el.appendChild(e);
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
            this._resizeObject && this._resizeObject.onload && (!oi && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
          }
        }
      };
      const Ip = Na();
      Ma("data-v-b329ee4c");
      const Np = {
        class: "resize-observer",
        tabindex: "-1"
      };
      Ia();
      const kp = Ip((e, t, n, i, o, s) => (L(), Fe("div", Np)));
      Bi.render = kp;
      Bi.__scopeId = "data-v-b329ee4c";
      Bi.__file = "src/components/ResizeObserver.vue";
      const Tl = (e = "theme") => ({
        computed: {
          themeClass() {
            return Cp(this[e]);
          }
        }
      }), Dp = zn({
        name: "VPopperContent",
        components: {
          ResizeObserver: Bi
        },
        mixins: [
          Tl()
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
      }), Lp = [
        "id",
        "aria-hidden",
        "tabindex",
        "data-popper-placement"
      ], Fp = {
        ref: "inner",
        class: "v-popper__inner"
      }, Hp = E("div", {
        class: "v-popper__arrow-outer"
      }, null, -1), Bp = E("div", {
        class: "v-popper__arrow-inner"
      }, null, -1), zp = [
        Hp,
        Bp
      ];
      function jp(e, t, n, i, o, s) {
        const r = En("ResizeObserver");
        return L(), q("div", {
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
          onKeyup: t[2] || (t[2] = ol((l) => e.autoHide && e.$emit("hide"), [
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
            E("div", Fp, [
              e.mounted ? (L(), q(ae, {
                key: 0
              }, [
                E("div", null, [
                  gt(e.$slots, "default")
                ]),
                e.handleResize ? (L(), Fe(r, {
                  key: 0,
                  onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
                })) : st("", true)
              ], 64)) : st("", true)
            ], 512),
            E("div", {
              ref: "arrow",
              class: "v-popper__arrow-container",
              style: At(e.result ? {
                left: e.toPx(e.result.arrow.x),
                top: e.toPx(e.result.arrow.y)
              } : void 0)
            }, zp, 4)
          ], 4)
        ], 46, Lp);
      }
      const Cl = Hi(Dp, [
        [
          "render",
          jp
        ]
      ]), Pl = {
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
      let yo = function() {
      };
      typeof window < "u" && (yo = window.Element);
      const qp = zn({
        name: "VPopperWrapper",
        components: {
          Popper: Rp,
          PopperContent: Cl
        },
        mixins: [
          Pl,
          Tl("finalTheme")
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
              yo,
              Boolean
            ],
            default: void 0
          },
          boundary: {
            type: [
              String,
              yo
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
      function Vp(e, t, n, i, o, s) {
        const r = En("PopperContent"), l = En("Popper");
        return L(), Fe(l, zo({
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
          default: Ge(({ popperId: a, isShown: f, shouldMountContent: c, skipTransition: u, autoHide: h, show: g, hide: w, handleResize: v, onResize: _, classes: C, result: y }) => [
            gt(e.$slots, "default", {
              shown: f,
              show: g,
              hide: w
            }),
            _e(r, {
              ref: "popperContent",
              "popper-id": a,
              theme: e.finalTheme,
              shown: f,
              mounted: c,
              "skip-transition": u,
              "auto-hide": h,
              "handle-resize": v,
              classes: C,
              result: y,
              onHide: w,
              onResize: _
            }, {
              default: Ge(() => [
                gt(e.$slots, "popper", {
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
      const Uo = Hi(qp, [
        [
          "render",
          Vp
        ]
      ]), Up = {
        ...Uo,
        name: "VDropdown",
        vPopperTheme: "dropdown"
      }, Wp = {
        ...Uo,
        name: "VMenu",
        vPopperTheme: "menu"
      }, Kp = {
        ...Uo,
        name: "VTooltip",
        vPopperTheme: "tooltip"
      }, Gp = zn({
        name: "VTooltipDirective",
        components: {
          Popper: $l(),
          PopperContent: Cl
        },
        mixins: [
          Pl
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
      }), Yp = [
        "innerHTML"
      ], Xp = [
        "textContent"
      ];
      function Jp(e, t, n, i, o, s) {
        const r = En("PopperContent"), l = En("Popper");
        return L(), Fe(l, zo({
          ref: "popper"
        }, e.$attrs, {
          theme: e.theme,
          "target-nodes": e.targetNodes,
          "popper-node": () => e.$refs.popperContent.$el,
          onApplyShow: e.onShow,
          onApplyHide: e.onHide
        }), {
          default: Ge(({ popperId: a, isShown: f, shouldMountContent: c, skipTransition: u, autoHide: h, hide: g, handleResize: w, onResize: v, classes: _, result: C }) => [
            _e(r, {
              ref: "popperContent",
              class: We({
                "v-popper--tooltip-loading": e.loading
              }),
              "popper-id": a,
              theme: e.theme,
              shown: f,
              mounted: c,
              "skip-transition": u,
              "auto-hide": h,
              "handle-resize": w,
              classes: _,
              result: C,
              onHide: g,
              onResize: v
            }, {
              default: Ge(() => [
                e.html ? (L(), q("div", {
                  key: 0,
                  innerHTML: e.finalContent
                }, null, 8, Yp)) : (L(), q("div", {
                  key: 1,
                  textContent: Ie(e.finalContent)
                }, null, 8, Xp))
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
      const Qp = Hi(Gp, [
        [
          "render",
          Jp
        ]
      ]), Al = "v-popper--has-tooltip";
      function Zp(e, t) {
        let n = e.placement;
        if (!n && t) for (const i of xl) t[i] && (n = i);
        return n || (n = Dn(e.theme || "tooltip", "placement")), n;
      }
      function El(e, t, n) {
        let i;
        const o = typeof t;
        return o === "string" ? i = {
          content: t
        } : t && o === "object" ? i = t : i = {
          content: false
        }, i.placement = Zp(i, n), i.targetNodes = () => [
          e
        ], i.referenceNode = () => e, i;
      }
      let eo, Ln, eh = 0;
      function th() {
        if (eo) return;
        Ln = pe([]), eo = sl({
          name: "VTooltipDirectiveApp",
          setup() {
            return {
              directives: Ln
            };
          },
          render() {
            return this.directives.map((t) => Wc(Qp, {
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
        document.body.appendChild(e), eo.mount(e);
      }
      function nh(e, t, n) {
        th();
        const i = pe(El(e, t, n)), o = pe(false), s = {
          id: eh++,
          options: i,
          shown: o
        };
        return Ln.value.push(s), e.classList && e.classList.add(Al), e.$_popper = {
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
      function Ol(e) {
        if (e.$_popper) {
          const t = Ln.value.indexOf(e.$_popper.item);
          t !== -1 && Ln.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
        }
        e.classList && e.classList.remove(Al);
      }
      function Ks(e, { value: t, modifiers: n }) {
        const i = El(e, t, n);
        if (!i.content || Dn(i.theme || "tooltip", "disabled")) Ol(e);
        else {
          let o;
          e.$_popper ? (o = e.$_popper, o.options.value = i) : o = nh(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? o.show() : o.hide());
        }
      }
      const ih = {
        beforeMount: Ks,
        updated: Ks,
        beforeUnmount(e) {
          Ol(e);
        }
      };
      function Gs(e) {
        e.addEventListener("mousedown", bi), e.addEventListener("click", bi), e.addEventListener("touchstart", Rl, an ? {
          passive: true
        } : false);
      }
      function Ys(e) {
        e.removeEventListener("mousedown", bi), e.removeEventListener("click", bi), e.removeEventListener("touchstart", Rl), e.removeEventListener("touchend", Ml), e.removeEventListener("touchcancel", Il);
      }
      function bi(e) {
        const t = e.currentTarget;
        e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
      }
      function Rl(e) {
        if (e.changedTouches.length === 1) {
          const t = e.currentTarget;
          t.$_vclosepopover_touch = true;
          const n = e.changedTouches[0];
          t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", Ml), t.addEventListener("touchcancel", Il);
        }
      }
      function Ml(e) {
        const t = e.currentTarget;
        if (t.$_vclosepopover_touch = false, e.changedTouches.length === 1) {
          const n = e.changedTouches[0], i = t.$_vclosepopover_touchPoint;
          e.closePopover = Math.abs(n.screenY - i.screenY) < 20 && Math.abs(n.screenX - i.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
        }
      }
      function Il(e) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = false;
      }
      const oh = {
        beforeMount(e, { value: t, modifiers: n }) {
          e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Gs(e);
        },
        updated(e, { value: t, oldValue: n, modifiers: i }) {
          e.$_closePopoverModifiers = i, t !== n && (typeof t > "u" || t ? Gs(e) : Ys(e));
        },
        beforeUnmount(e) {
          Ys(e);
        }
      };
      function sh(e, t = {}) {
        e.$_vTooltipInstalled || (e.$_vTooltipInstalled = true, yl(Xe, t), e.directive("tooltip", ih), e.directive("close-popper", oh), e.component("VTooltip", Kp), e.component("VDropdown", Up), e.component("VMenu", Wp));
      }
      const rh = {
        version: "5.2.2",
        install: sh,
        options: Xe
      }, lh = {
        viz: "viz-lite.js"
      };
      Object.entries(lh).forEach((e) => {
        let t = document.head.querySelector(`[src="${e[1]}"`);
        t || (t = document.createElement("script"), t.setAttribute("id", e[0]), t.setAttribute("src", e[1]), t.setAttribute("type", "text/javascript"), document.head.appendChild(t));
      });
      sl(tp).use(rh).mount("#app");
    })();
  }
});
export default require_stdin();

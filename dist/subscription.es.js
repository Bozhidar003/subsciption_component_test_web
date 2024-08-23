var Pa = { exports: {} }, yr = {}, Ei = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function zf() {
  if (Sa) return M;
  Sa = 1;
  var R = Symbol.for("react.element"), A = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), xe = Symbol.for("react.strict_mode"), Ce = Symbol.for("react.profiler"), Fe = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Se = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), q = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object" ? null : (c = q && c[q] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var He = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, G = {};
  function W(c, v, O) {
    this.props = c, this.context = v, this.refs = G, this.updater = O || He;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, W.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function yn() {
  }
  yn.prototype = W.prototype;
  function sn(c, v, O) {
    this.props = c, this.context = v, this.refs = G, this.updater = O || He;
  }
  var Je = sn.prototype = new yn();
  Je.constructor = sn, We(Je, W.prototype), Je.isPureReactComponent = !0;
  var he = Array.isArray, qe = Object.prototype.hasOwnProperty, ke = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(c, v, O) {
    var D, I = {}, j = null, $ = null;
    if (v != null) for (D in v.ref !== void 0 && ($ = v.ref), v.key !== void 0 && (j = "" + v.key), v) qe.call(v, D) && !Pe.hasOwnProperty(D) && (I[D] = v[D]);
    var V = arguments.length - 2;
    if (V === 1) I.children = O;
    else if (1 < V) {
      for (var Z = Array(V), je = 0; je < V; je++) Z[je] = arguments[je + 2];
      I.children = Z;
    }
    if (c && c.defaultProps) for (D in V = c.defaultProps, V) I[D] === void 0 && (I[D] = V[D]);
    return { $$typeof: R, type: c, key: j, ref: $, props: I, _owner: ke.current };
  }
  function Pn(c, v) {
    return { $$typeof: R, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === R;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return v[O];
    });
  }
  var an = /\/+/g;
  function Ie(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yn("" + c.key) : v.toString(36);
  }
  function be(c, v, O, D, I) {
    var j = typeof c;
    (j === "undefined" || j === "boolean") && (c = null);
    var $ = !1;
    if (c === null) $ = !0;
    else switch (j) {
      case "string":
      case "number":
        $ = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case R:
          case A:
            $ = !0;
        }
    }
    if ($) return $ = c, I = I($), c = D === "" ? "." + Ie($, 0) : D, he(I) ? (O = "", c != null && (O = c.replace(an, "$&/") + "/"), be(I, v, O, "", function(je) {
      return je;
    })) : I != null && (gn(I) && (I = Pn(I, O + (!I.key || $ && $.key === I.key ? "" : ("" + I.key).replace(an, "$&/") + "/") + c)), v.push(I)), 1;
    if ($ = 0, D = D === "" ? "." : D + ":", he(c)) for (var V = 0; V < c.length; V++) {
      j = c[V];
      var Z = D + Ie(j, V);
      $ += be(j, v, O, Z, I);
    }
    else if (Z = X(c), typeof Z == "function") for (c = Z.call(c), V = 0; !(j = c.next()).done; ) j = j.value, Z = D + Ie(j, V++), $ += be(j, v, O, Z, I);
    else if (j === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return $;
  }
  function cn(c, v, O) {
    if (c == null) return c;
    var D = [], I = 0;
    return be(c, D, "", "", function(j) {
      return v.call(O, j, I++);
    }), D;
  }
  function ze(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ne = { current: null }, S = { transition: null }, T = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: S, ReactCurrentOwner: ke };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: cn, forEach: function(c, v, O) {
    cn(c, function() {
      v.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var v = 0;
    return cn(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return cn(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!gn(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, M.Component = W, M.Fragment = m, M.Profiler = Ce, M.PureComponent = sn, M.StrictMode = xe, M.Suspense = H, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, M.act = _, M.cloneElement = function(c, v, O) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var D = We({}, c.props), I = c.key, j = c.ref, $ = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (j = v.ref, $ = ke.current), v.key !== void 0 && (I = "" + v.key), c.type && c.type.defaultProps) var V = c.type.defaultProps;
      for (Z in v) qe.call(v, Z) && !Pe.hasOwnProperty(Z) && (D[Z] = v[Z] === void 0 && V !== void 0 ? V[Z] : v[Z]);
    }
    var Z = arguments.length - 2;
    if (Z === 1) D.children = O;
    else if (1 < Z) {
      V = Array(Z);
      for (var je = 0; je < Z; je++) V[je] = arguments[je + 2];
      D.children = V;
    }
    return { $$typeof: R, type: c.type, key: I, ref: j, props: D, _owner: $ };
  }, M.createContext = function(c) {
    return c = { $$typeof: Ne, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: Fe, _context: c }, c.Consumer = c;
  }, M.createElement = $e, M.createFactory = function(c) {
    var v = $e.bind(null, c);
    return v.type = c, v;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(c) {
    return { $$typeof: se, render: c };
  }, M.isValidElement = gn, M.lazy = function(c) {
    return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: ze };
  }, M.memo = function(c, v) {
    return { $$typeof: Se, type: c, compare: v === void 0 ? null : v };
  }, M.startTransition = function(c) {
    var v = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = v;
    }
  }, M.unstable_act = _, M.useCallback = function(c, v) {
    return ne.current.useCallback(c, v);
  }, M.useContext = function(c) {
    return ne.current.useContext(c);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(c) {
    return ne.current.useDeferredValue(c);
  }, M.useEffect = function(c, v) {
    return ne.current.useEffect(c, v);
  }, M.useId = function() {
    return ne.current.useId();
  }, M.useImperativeHandle = function(c, v, O) {
    return ne.current.useImperativeHandle(c, v, O);
  }, M.useInsertionEffect = function(c, v) {
    return ne.current.useInsertionEffect(c, v);
  }, M.useLayoutEffect = function(c, v) {
    return ne.current.useLayoutEffect(c, v);
  }, M.useMemo = function(c, v) {
    return ne.current.useMemo(c, v);
  }, M.useReducer = function(c, v, O) {
    return ne.current.useReducer(c, v, O);
  }, M.useRef = function(c) {
    return ne.current.useRef(c);
  }, M.useState = function(c) {
    return ne.current.useState(c);
  }, M.useSyncExternalStore = function(c, v, O) {
    return ne.current.useSyncExternalStore(c, v, O);
  }, M.useTransition = function() {
    return ne.current.useTransition();
  }, M.version = "18.3.1", M;
}
var ka;
function za() {
  return ka || (ka = 1, Ei.exports = zf()), Ei.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Tf() {
  if (Ea) return yr;
  Ea = 1;
  var R = za(), A = Symbol.for("react.element"), m = Symbol.for("react.fragment"), xe = Object.prototype.hasOwnProperty, Ce = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(se, H, Se) {
    var me, q = {}, X = null, He = null;
    Se !== void 0 && (X = "" + Se), H.key !== void 0 && (X = "" + H.key), H.ref !== void 0 && (He = H.ref);
    for (me in H) xe.call(H, me) && !Fe.hasOwnProperty(me) && (q[me] = H[me]);
    if (se && se.defaultProps) for (me in H = se.defaultProps, H) q[me] === void 0 && (q[me] = H[me]);
    return { $$typeof: A, type: se, key: X, ref: He, props: q, _owner: Ce.current };
  }
  return yr.Fragment = m, yr.jsx = Ne, yr.jsxs = Ne, yr;
}
Pa.exports = Tf();
var vn = Pa.exports, Ci = {}, Ta = { exports: {} }, De = {}, _i = { exports: {} }, xi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function Lf() {
  return _a || (_a = 1, function(R) {
    function A(S, T) {
      var _ = S.length;
      S.push(T);
      e: for (; 0 < _; ) {
        var c = _ - 1 >>> 1, v = S[c];
        if (0 < Ce(v, T)) S[c] = T, S[_] = v, _ = c;
        else break e;
      }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function xe(S) {
      if (S.length === 0) return null;
      var T = S[0], _ = S.pop();
      if (_ !== T) {
        S[0] = _;
        e: for (var c = 0, v = S.length, O = v >>> 1; c < O; ) {
          var D = 2 * (c + 1) - 1, I = S[D], j = D + 1, $ = S[j];
          if (0 > Ce(I, _)) j < v && 0 > Ce($, I) ? (S[c] = $, S[j] = _, c = j) : (S[c] = I, S[D] = _, c = D);
          else if (j < v && 0 > Ce($, _)) S[c] = $, S[j] = _, c = j;
          else break e;
        }
      }
      return T;
    }
    function Ce(S, T) {
      var _ = S.sortIndex - T.sortIndex;
      return _ !== 0 ? _ : S.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Fe = performance;
      R.unstable_now = function() {
        return Fe.now();
      };
    } else {
      var Ne = Date, se = Ne.now();
      R.unstable_now = function() {
        return Ne.now() - se;
      };
    }
    var H = [], Se = [], me = 1, q = null, X = 3, He = !1, We = !1, G = !1, W = typeof setTimeout == "function" ? setTimeout : null, yn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Je(S) {
      for (var T = m(Se); T !== null; ) {
        if (T.callback === null) xe(Se);
        else if (T.startTime <= S) xe(Se), T.sortIndex = T.expirationTime, A(H, T);
        else break;
        T = m(Se);
      }
    }
    function he(S) {
      if (G = !1, Je(S), !We) if (m(H) !== null) We = !0, ze(qe);
      else {
        var T = m(Se);
        T !== null && ne(he, T.startTime - S);
      }
    }
    function qe(S, T) {
      We = !1, G && (G = !1, yn($e), $e = -1), He = !0;
      var _ = X;
      try {
        for (Je(T), q = m(H); q !== null && (!(q.expirationTime > T) || S && !Yn()); ) {
          var c = q.callback;
          if (typeof c == "function") {
            q.callback = null, X = q.priorityLevel;
            var v = c(q.expirationTime <= T);
            T = R.unstable_now(), typeof v == "function" ? q.callback = v : q === m(H) && xe(H), Je(T);
          } else xe(H);
          q = m(H);
        }
        if (q !== null) var O = !0;
        else {
          var D = m(Se);
          D !== null && ne(he, D.startTime - T), O = !1;
        }
        return O;
      } finally {
        q = null, X = _, He = !1;
      }
    }
    var ke = !1, Pe = null, $e = -1, Pn = 5, gn = -1;
    function Yn() {
      return !(R.unstable_now() - gn < Pn);
    }
    function an() {
      if (Pe !== null) {
        var S = R.unstable_now();
        gn = S;
        var T = !0;
        try {
          T = Pe(!0, S);
        } finally {
          T ? Ie() : (ke = !1, Pe = null);
        }
      } else ke = !1;
    }
    var Ie;
    if (typeof sn == "function") Ie = function() {
      sn(an);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), cn = be.port2;
      be.port1.onmessage = an, Ie = function() {
        cn.postMessage(null);
      };
    } else Ie = function() {
      W(an, 0);
    };
    function ze(S) {
      Pe = S, ke || (ke = !0, Ie());
    }
    function ne(S, T) {
      $e = W(function() {
        S(R.unstable_now());
      }, T);
    }
    R.unstable_IdlePriority = 5, R.unstable_ImmediatePriority = 1, R.unstable_LowPriority = 4, R.unstable_NormalPriority = 3, R.unstable_Profiling = null, R.unstable_UserBlockingPriority = 2, R.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, R.unstable_continueExecution = function() {
      We || He || (We = !0, ze(qe));
    }, R.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < S ? Math.floor(1e3 / S) : 5;
    }, R.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, R.unstable_getFirstCallbackNode = function() {
      return m(H);
    }, R.unstable_next = function(S) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = X;
      }
      var _ = X;
      X = T;
      try {
        return S();
      } finally {
        X = _;
      }
    }, R.unstable_pauseExecution = function() {
    }, R.unstable_requestPaint = function() {
    }, R.unstable_runWithPriority = function(S, T) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var _ = X;
      X = S;
      try {
        return T();
      } finally {
        X = _;
      }
    }, R.unstable_scheduleCallback = function(S, T, _) {
      var c = R.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? c + _ : c) : _ = c, S) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = _ + v, S = { id: me++, callback: T, priorityLevel: S, startTime: _, expirationTime: v, sortIndex: -1 }, _ > c ? (S.sortIndex = _, A(Se, S), m(H) === null && S === m(Se) && (G ? (yn($e), $e = -1) : G = !0, ne(he, _ - c))) : (S.sortIndex = v, A(H, S), We || He || (We = !0, ze(qe))), S;
    }, R.unstable_shouldYield = Yn, R.unstable_wrapCallback = function(S) {
      var T = X;
      return function() {
        var _ = X;
        X = T;
        try {
          return S.apply(this, arguments);
        } finally {
          X = _;
        }
      };
    };
  }(xi)), xi;
}
var xa;
function Rf() {
  return xa || (xa = 1, _i.exports = Lf()), _i.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Of() {
  if (Ca) return De;
  Ca = 1;
  var R = za(), A = Rf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var xe = /* @__PURE__ */ new Set(), Ce = {};
  function Fe(e, n) {
    Ne(e, n), Ne(e + "Capture", n);
  }
  function Ne(e, n) {
    for (Ce[e] = n, e = 0; e < n.length; e++) xe.add(n[e]);
  }
  var se = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, Se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, me = {}, q = {};
  function X(e) {
    return H.call(q, e) ? !0 : H.call(me, e) ? !1 : Se.test(e) ? q[e] = !0 : (me[e] = !0, !1);
  }
  function He(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > "u" || He(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return !1;
  }
  function G(e, n, t, r, l, o, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    W[n] = new G(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var yn = /[\-:]([a-z])/g;
  function sn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      yn,
      sn
    );
    W[n] = new G(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(yn, sn);
    W[n] = new G(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(yn, sn);
    W[n] = new G(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Je(e, n, t, r) {
    var l = W.hasOwnProperty(n) ? W[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (We(n, t, l, r) && (t = null), r || l === null ? X(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var he = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qe = Symbol.for("react.element"), ke = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      c = n && n[1] || "";
    }
    return `
` + c + e;
  }
  var O = !1;
  function D(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (p) {
          r = p;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
        for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
      }
    } finally {
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function I(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = D(e.type, !1), e;
      case 11:
        return e = D(e.type.render, !1), e;
      case 1:
        return e = D(e.type, !0), e;
      default:
        return "";
    }
  }
  function j(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pe:
        return "Fragment";
      case ke:
        return "Portal";
      case Pn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yn:
        return (e.displayName || "Context") + ".Consumer";
      case gn:
        return (e._context.displayName || "Context") + ".Provider";
      case an:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case cn:
        return n = e.displayName || null, n !== null ? n : j(e.type) || "Memo";
      case ze:
        n = e._payload, e = e._init;
        try {
          return j(e(n));
        } catch {
        }
    }
    return null;
  }
  function $(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return j(n);
      case 8:
        return n === $e ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function V(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Z(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function je(e) {
    var n = Z(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, o = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function gr(e) {
    e._valueTracker || (e._valueTracker = je(e));
  }
  function Ni(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = Z(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function wr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zl(e, n) {
    var t = n.checked;
    return _({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Pi(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = V(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function zi(e, n) {
    n = n.checked, n != null && Je(e, "checked", n, !1);
  }
  function Tl(e, n) {
    zi(e, n);
    var t = V(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ll(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ll(e, n.type, V(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Ti(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Ll(e, n, t) {
    (n !== "number" || wr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function ut(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + V(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Rl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Li(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: V(t) };
  }
  function Ri(e, n) {
    var t = V(n.value), r = V(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Oi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Mi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ol(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Sr, Di = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function Mt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Dt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ra = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dt).forEach(function(e) {
    Ra.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Dt[n] = Dt[e];
    });
  });
  function Fi(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + n).trim() : n + "px";
  }
  function Ii(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Fi(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Oa = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, n) {
    if (n) {
      if (Oa[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Dl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fl = null;
  function Il(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var jl = null, st = null, at = null;
  function ji(e) {
    if (e = tr(e)) {
      if (typeof jl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), jl(e.stateNode, e.type, n));
    }
  }
  function Ui(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Ai() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, ji(e), n) for (e = 0; e < n.length; e++) ji(n[e]);
    }
  }
  function Vi(e, n) {
    return e(n);
  }
  function Bi() {
  }
  var Ul = !1;
  function Hi(e, n, t) {
    if (Ul) return e(n, t);
    Ul = !0;
    try {
      return Vi(e, n, t);
    } finally {
      Ul = !1, (st !== null || at !== null) && (Bi(), Ai());
    }
  }
  function Ft(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Wr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Al = !1;
  if (se) try {
    var It = {};
    Object.defineProperty(It, "passive", { get: function() {
      Al = !0;
    } }), window.addEventListener("test", It, It), window.removeEventListener("test", It, It);
  } catch {
    Al = !1;
  }
  function Ma(e, n, t, r, l, o, i, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var jt = !1, kr = null, Er = !1, Vl = null, Da = { onError: function(e) {
    jt = !0, kr = e;
  } };
  function Fa(e, n, t, r, l, o, i, u, s) {
    jt = !1, kr = null, Ma.apply(Da, arguments);
  }
  function Ia(e, n, t, r, l, o, i, u, s) {
    if (Fa.apply(this, arguments), jt) {
      if (jt) {
        var p = kr;
        jt = !1, kr = null;
      } else throw Error(m(198));
      Er || (Er = !0, Vl = p);
    }
  }
  function Xn(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Wi(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function $i(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function ja(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === t) return $i(l), e;
          if (o === r) return $i(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = o;
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === t) {
            i = !0, t = l, r = o;
            break;
          }
          if (u === r) {
            i = !0, r = l, t = o;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === t) {
              i = !0, t = o, r = l;
              break;
            }
            if (u === r) {
              i = !0, r = o, t = l;
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Qi(e) {
    return e = ja(e), e !== null ? Ki(e) : null;
  }
  function Ki(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Ki(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Yi = A.unstable_scheduleCallback, Xi = A.unstable_cancelCallback, Ua = A.unstable_shouldYield, Aa = A.unstable_requestPaint, re = A.unstable_now, Va = A.unstable_getCurrentPriorityLevel, Bl = A.unstable_ImmediatePriority, Gi = A.unstable_UserBlockingPriority, _r = A.unstable_NormalPriority, Ba = A.unstable_LowPriority, Zi = A.unstable_IdlePriority, xr = null, fn = null;
  function Ha(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function") try {
      fn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var en = Math.clz32 ? Math.clz32 : Qa, Wa = Math.log, $a = Math.LN2;
  function Qa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wa(e) / $a | 0) | 0;
  }
  var Cr = 64, Nr = 4194304;
  function Ut(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Pr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = Ut(u) : (o &= i, o !== 0 && (r = Ut(o)));
    } else i = t & ~l, i !== 0 ? r = Ut(i) : o !== 0 && (r = Ut(o));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - en(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Ka(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ya(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - en(o), u = 1 << i, s = l[i];
      s === -1 ? (!(u & t) || u & r) && (l[i] = Ka(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function Hl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ji() {
    var e = Cr;
    return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
  }
  function Wl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - en(n), e[n] = t;
  }
  function Xa(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - en(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function $l(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - en(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var B = 0;
  function qi(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var bi, Ql, eu, nu, tu, Kl = !1, zr = [], zn = null, Tn = null, Ln = null, Vt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Rn = [], Ga = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ru(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        Vt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(n.pointerId);
    }
  }
  function Ht(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Ql(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Za(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = Ht(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = Ht(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Ln = Ht(Ln, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Vt.set(o, Ht(Vt.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Bt.set(o, Ht(Bt.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function lu(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Wi(t), n !== null) {
            e.blockedOn = n, tu(e.priority, function() {
              eu(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Xl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Fl = r, t.target.dispatchEvent(r), Fl = null;
      } else return n = tr(t), n !== null && Ql(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function ou(e, n, t) {
    Tr(e) && t.delete(n);
  }
  function Ja() {
    Kl = !1, zn !== null && Tr(zn) && (zn = null), Tn !== null && Tr(Tn) && (Tn = null), Ln !== null && Tr(Ln) && (Ln = null), Vt.forEach(ou), Bt.forEach(ou);
  }
  function Wt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Kl || (Kl = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, Ja)));
  }
  function $t(e) {
    function n(l) {
      return Wt(l, e);
    }
    if (0 < zr.length) {
      Wt(zr[0], e);
      for (var t = 1; t < zr.length; t++) {
        var r = zr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && Wt(zn, e), Tn !== null && Wt(Tn, e), Ln !== null && Wt(Ln, e), Vt.forEach(n), Bt.forEach(n), t = 0; t < Rn.length; t++) r = Rn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && (t = Rn[0], t.blockedOn === null); ) lu(t), t.blockedOn === null && Rn.shift();
  }
  var ct = he.ReactCurrentBatchConfig, Lr = !0;
  function qa(e, n, t, r) {
    var l = B, o = ct.transition;
    ct.transition = null;
    try {
      B = 1, Yl(e, n, t, r);
    } finally {
      B = l, ct.transition = o;
    }
  }
  function ba(e, n, t, r) {
    var l = B, o = ct.transition;
    ct.transition = null;
    try {
      B = 4, Yl(e, n, t, r);
    } finally {
      B = l, ct.transition = o;
    }
  }
  function Yl(e, n, t, r) {
    if (Lr) {
      var l = Xl(e, n, t, r);
      if (l === null) fo(e, n, r, Rr, t), ru(e, r);
      else if (Za(l, e, n, t, r)) r.stopPropagation();
      else if (ru(e, r), n & 4 && -1 < Ga.indexOf(e)) {
        for (; l !== null; ) {
          var o = tr(l);
          if (o !== null && bi(o), o = Xl(e, n, t, r), o === null && fo(e, n, r, Rr, t), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else fo(e, n, r, null, t);
    }
  }
  var Rr = null;
  function Xl(e, n, t, r) {
    if (Rr = null, e = Il(r), e = Gn(e), e !== null) if (n = Xn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Wi(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Rr = e, null;
  }
  function iu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Va()) {
          case Bl:
            return 1;
          case Gi:
            return 4;
          case _r:
          case Ba:
            return 16;
          case Zi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null, Gl = null, Or = null;
  function uu() {
    if (Or) return Or;
    var e, n = Gl, t = n.length, r, l = "value" in On ? On.value : On.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dr() {
    return !0;
  }
  function su() {
    return !1;
  }
  function Ue(e) {
    function n(t, r, l, o, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Dr : su, this.isPropagationStopped = su, this;
    }
    return _(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Dr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Dr);
    }, persist: function() {
    }, isPersistent: Dr }), n;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Zl = Ue(ft), Qt = _({}, ft, { view: 0, detail: 0 }), ec = Ue(Qt), Jl, ql, Kt, Fr = _({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: eo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Kt && (Kt && e.type === "mousemove" ? (Jl = e.screenX - Kt.screenX, ql = e.screenY - Kt.screenY) : ql = Jl = 0, Kt = e), Jl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ql;
  } }), au = Ue(Fr), nc = _({}, Fr, { dataTransfer: 0 }), tc = Ue(nc), rc = _({}, Qt, { relatedTarget: 0 }), bl = Ue(rc), lc = _({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = Ue(lc), ic = _({}, ft, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), uc = Ue(ic), sc = _({}, ft, { data: 0 }), cu = Ue(sc), ac = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, cc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, fc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function dc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = fc[e]) ? !!n[e] : !1;
  }
  function eo() {
    return dc;
  }
  var pc = _({}, Qt, { key: function(e) {
    if (e.key) {
      var n = ac[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: eo, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), mc = Ue(pc), hc = _({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fu = Ue(hc), vc = _({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eo }), yc = Ue(vc), gc = _({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wc = Ue(gc), Sc = _({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kc = Ue(Sc), Ec = [9, 13, 27, 32], no = se && "CompositionEvent" in window, Yt = null;
  se && "documentMode" in document && (Yt = document.documentMode);
  var _c = se && "TextEvent" in window && !Yt, du = se && (!no || Yt && 8 < Yt && 11 >= Yt), pu = " ", mu = !1;
  function hu(e, n) {
    switch (e) {
      case "keyup":
        return Ec.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function xc(e, n) {
    switch (e) {
      case "compositionend":
        return vu(n);
      case "keypress":
        return n.which !== 32 ? null : (mu = !0, pu);
      case "textInput":
        return e = n.data, e === pu && mu ? null : e;
      default:
        return null;
    }
  }
  function Cc(e, n) {
    if (dt) return e === "compositionend" || !no && hu(e, n) ? (e = uu(), Or = Gl = On = null, dt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return du && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Nc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Nc[e.type] : n === "textarea";
  }
  function gu(e, n, t, r) {
    Ui(r), n = Vr(n, "onChange"), 0 < n.length && (t = new Zl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Gt = null;
  function Pc(e) {
    Iu(e, 0);
  }
  function Ir(e) {
    var n = yt(e);
    if (Ni(n)) return e;
  }
  function zc(e, n) {
    if (e === "change") return n;
  }
  var wu = !1;
  if (se) {
    var to;
    if (se) {
      var ro = "oninput" in document;
      if (!ro) {
        var Su = document.createElement("div");
        Su.setAttribute("oninput", "return;"), ro = typeof Su.oninput == "function";
      }
      to = ro;
    } else to = !1;
    wu = to && (!document.documentMode || 9 < document.documentMode);
  }
  function ku() {
    Xt && (Xt.detachEvent("onpropertychange", Eu), Gt = Xt = null);
  }
  function Eu(e) {
    if (e.propertyName === "value" && Ir(Gt)) {
      var n = [];
      gu(n, Gt, e, Il(e)), Hi(Pc, n);
    }
  }
  function Tc(e, n, t) {
    e === "focusin" ? (ku(), Xt = n, Gt = t, Xt.attachEvent("onpropertychange", Eu)) : e === "focusout" && ku();
  }
  function Lc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ir(Gt);
  }
  function Rc(e, n) {
    if (e === "click") return Ir(n);
  }
  function Oc(e, n) {
    if (e === "input" || e === "change") return Ir(n);
  }
  function Mc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var nn = typeof Object.is == "function" ? Object.is : Mc;
  function Zt(e, n) {
    if (nn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!H.call(n, l) || !nn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function _u(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xu(e, n) {
    var t = _u(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = _u(t);
    }
  }
  function Cu(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Cu(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Nu() {
    for (var e = window, n = wr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = wr(e.document);
    }
    return n;
  }
  function lo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Dc(e) {
    var n = Nu(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Cu(t.ownerDocument.documentElement, t)) {
      if (r !== null && lo(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = xu(t, o);
          var i = xu(
            t,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Fc = se && "documentMode" in document && 11 >= document.documentMode, pt = null, oo = null, Jt = null, io = !1;
  function Pu(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    io || pt == null || pt !== wr(r) || (r = pt, "selectionStart" in r && lo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Vr(oo, "onSelect"), 0 < r.length && (n = new Zl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function jr(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: jr("Animation", "AnimationEnd"), animationiteration: jr("Animation", "AnimationIteration"), animationstart: jr("Animation", "AnimationStart"), transitionend: jr("Transition", "TransitionEnd") }, uo = {}, zu = {};
  se && (zu = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Ur(e) {
    if (uo[e]) return uo[e];
    if (!mt[e]) return e;
    var n = mt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in zu) return uo[e] = n[t];
    return e;
  }
  var Tu = Ur("animationend"), Lu = Ur("animationiteration"), Ru = Ur("animationstart"), Ou = Ur("transitionend"), Mu = /* @__PURE__ */ new Map(), Du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mn(e, n) {
    Mu.set(e, n), Fe(n, [e]);
  }
  for (var so = 0; so < Du.length; so++) {
    var ao = Du[so], Ic = ao.toLowerCase(), jc = ao[0].toUpperCase() + ao.slice(1);
    Mn(Ic, "on" + jc);
  }
  Mn(Tu, "onAnimationEnd"), Mn(Lu, "onAnimationIteration"), Mn(Ru, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(Ou, "onTransitionEnd"), Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]), Fe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Fe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Fe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Fe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Fe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uc = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function Fu(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ia(r, n, void 0, e), e.currentTarget = null;
  }
  function Iu(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, p = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
          Fu(l, u, p), o = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, p = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
          Fu(l, u, p), o = s;
        }
      }
    }
    if (Er) throw e = Vl, Er = !1, Vl = null, e;
  }
  function K(e, n) {
    var t = n[go];
    t === void 0 && (t = n[go] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (ju(n, e, 2, !1), t.add(r));
  }
  function co(e, n, t) {
    var r = 0;
    n && (r |= 4), ju(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Ar]) {
      e[Ar] = !0, xe.forEach(function(t) {
        t !== "selectionchange" && (Uc.has(t) || co(t, !1, e), co(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, co("selectionchange", !1, n));
    }
  }
  function ju(e, n, t, r) {
    switch (iu(n)) {
      case 1:
        var l = qa;
        break;
      case 4:
        l = ba;
        break;
      default:
        l = Yl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Al || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function fo(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          i = i.return;
        }
        for (; u !== null; ) {
          if (i = Gn(u), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Hi(function() {
      var p = o, y = Il(t), g = [];
      e: {
        var h = Mu.get(e);
        if (h !== void 0) {
          var k = Zl, x = e;
          switch (e) {
            case "keypress":
              if (Mr(t) === 0) break e;
            case "keydown":
            case "keyup":
              k = mc;
              break;
            case "focusin":
              x = "focus", k = bl;
              break;
            case "focusout":
              x = "blur", k = bl;
              break;
            case "beforeblur":
            case "afterblur":
              k = bl;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = au;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = tc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = yc;
              break;
            case Tu:
            case Lu:
            case Ru:
              k = oc;
              break;
            case Ou:
              k = wc;
              break;
            case "scroll":
              k = ec;
              break;
            case "wheel":
              k = kc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = uc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = fu;
          }
          var C = (n & 4) !== 0, le = !C && e === "scroll", f = C ? h !== null ? h + "Capture" : null : h;
          C = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Ft(a, f), w != null && C.push(er(a, w, d)))), le) break;
            a = a.return;
          }
          0 < C.length && (h = new k(h, x, null, t, y), g.push({ event: h, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && t !== Fl && (x = t.relatedTarget || t.fromElement) && (Gn(x) || x[wn])) break e;
          if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (x = t.relatedTarget || t.toElement, k = p, x = x ? Gn(x) : null, x !== null && (le = Xn(x), x !== le || x.tag !== 5 && x.tag !== 6) && (x = null)) : (k = null, x = p), k !== x)) {
            if (C = au, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (C = fu, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), le = k == null ? h : yt(k), d = x == null ? h : yt(x), h = new C(w, a + "leave", k, t, y), h.target = le, h.relatedTarget = d, w = null, Gn(y) === p && (C = new C(f, a + "enter", x, t, y), C.target = d, C.relatedTarget = le, w = C), le = w, k && x) n: {
              for (C = k, f = x, a = 0, d = C; d; d = ht(d)) a++;
              for (d = 0, w = f; w; w = ht(w)) d++;
              for (; 0 < a - d; ) C = ht(C), a--;
              for (; 0 < d - a; ) f = ht(f), d--;
              for (; a--; ) {
                if (C === f || f !== null && C === f.alternate) break n;
                C = ht(C), f = ht(f);
              }
              C = null;
            }
            else C = null;
            k !== null && Uu(g, h, k, C, !1), x !== null && le !== null && Uu(g, le, x, C, !0);
          }
        }
        e: {
          if (h = p ? yt(p) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file") var N = zc;
          else if (yu(h)) if (wu) N = Oc;
          else {
            N = Lc;
            var P = Tc;
          }
          else (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = Rc);
          if (N && (N = N(e, p))) {
            gu(g, N, t, y);
            break e;
          }
          P && P(e, h, p), e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && Ll(h, "number", h.value);
        }
        switch (P = p ? yt(p) : window, e) {
          case "focusin":
            (yu(P) || P.contentEditable === "true") && (pt = P, oo = p, Jt = null);
            break;
          case "focusout":
            Jt = oo = pt = null;
            break;
          case "mousedown":
            io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            io = !1, Pu(g, t, y);
            break;
          case "selectionchange":
            if (Fc) break;
          case "keydown":
          case "keyup":
            Pu(g, t, y);
        }
        var z;
        if (no) e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
        else dt ? hu(e, t) && (L = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (L = "onCompositionStart");
        L && (du && t.locale !== "ko" && (dt || L !== "onCompositionStart" ? L === "onCompositionEnd" && dt && (z = uu()) : (On = y, Gl = "value" in On ? On.value : On.textContent, dt = !0)), P = Vr(p, L), 0 < P.length && (L = new cu(L, e, null, t, y), g.push({ event: L, listeners: P }), z ? L.data = z : (z = vu(t), z !== null && (L.data = z)))), (z = _c ? xc(e, t) : Cc(e, t)) && (p = Vr(p, "onBeforeInput"), 0 < p.length && (y = new cu("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = z));
      }
      Iu(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Vr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Ft(e, t), o != null && r.unshift(er(e, o, l)), o = Ft(e, n), o != null && r.push(er(e, o, l))), e = e.return;
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Uu(e, n, t, r, l) {
    for (var o = n._reactName, i = []; t !== null && t !== r; ) {
      var u = t, s = u.alternate, p = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && p !== null && (u = p, l ? (s = Ft(t, o), s != null && i.unshift(er(t, s, u))) : l || (s = Ft(t, o), s != null && i.push(er(t, s, u)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Ac = /\r\n?/g, Vc = /\u0000|\uFFFD/g;
  function Au(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ac, `
`).replace(Vc, "");
  }
  function Br(e, n, t) {
    if (n = Au(n), Au(e) !== n && t) throw Error(m(425));
  }
  function Hr() {
  }
  var po = null, mo = null;
  function ho(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var vo = typeof setTimeout == "function" ? setTimeout : void 0, Bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Vu = typeof Promise == "function" ? Promise : void 0, Hc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vu < "u" ? function(e) {
    return Vu.resolve(null).then(e).catch(Wc);
  } : vo;
  function Wc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function yo(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), $t(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    $t(n);
  }
  function Dn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Bu(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2), dn = "__reactFiber$" + vt, nr = "__reactProps$" + vt, wn = "__reactContainer$" + vt, go = "__reactEvents$" + vt, $c = "__reactListeners$" + vt, Qc = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[dn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[wn] || t[dn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Bu(e); e !== null; ) {
          if (t = e[dn]) return t;
          e = Bu(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[dn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var wo = [], gt = -1;
  function Fn(e) {
    return { current: e };
  }
  function Y(e) {
    0 > gt || (e.current = wo[gt], wo[gt] = null, gt--);
  }
  function Q(e, n) {
    gt++, wo[gt] = e.current, e.current = n;
  }
  var In = {}, ve = Fn(In), Te = Fn(!1), Zn = In;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return In;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Le(e) {
    return e = e.childContextTypes, e != null;
  }
  function $r() {
    Y(Te), Y(ve);
  }
  function Hu(e, n, t) {
    if (ve.current !== In) throw Error(m(168));
    Q(ve, n), Q(Te, t);
  }
  function Wu(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, $(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || In, Zn = ve.current, Q(ve, e), Q(Te, Te.current), !0;
  }
  function $u(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Wu(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, Y(Te), Y(ve), Q(ve, e)) : Y(Te), Q(Te, t);
  }
  var Sn = null, Kr = !1, So = !1;
  function Qu(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function Kc(e) {
    Kr = !0, Qu(e);
  }
  function jn() {
    if (!So && Sn !== null) {
      So = !0;
      var e = 0, n = B;
      try {
        var t = Sn;
        for (B = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Kr = !1;
      } catch (l) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), Yi(Bl, jn), l;
      } finally {
        B = n, So = !1;
      }
    }
    return null;
  }
  var St = [], kt = 0, Yr = null, Xr = 0, Qe = [], Ke = 0, Jn = null, kn = 1, En = "";
  function qn(e, n) {
    St[kt++] = Xr, St[kt++] = Yr, Yr = e, Xr = n;
  }
  function Ku(e, n, t) {
    Qe[Ke++] = kn, Qe[Ke++] = En, Qe[Ke++] = Jn, Jn = e;
    var r = kn;
    e = En;
    var l = 32 - en(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - en(n) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, kn = 1 << 32 - en(n) + l | t << l | r, En = o + e;
    } else kn = 1 << o | t << l | r, En = e;
  }
  function ko(e) {
    e.return !== null && (qn(e, 1), Ku(e, 1, 0));
  }
  function Eo(e) {
    for (; e === Yr; ) Yr = St[--kt], St[kt] = null, Xr = St[--kt], St[kt] = null;
    for (; e === Jn; ) Jn = Qe[--Ke], Qe[Ke] = null, En = Qe[--Ke], Qe[Ke] = null, kn = Qe[--Ke], Qe[Ke] = null;
  }
  var Ae = null, Ve = null, J = !1, tn = null;
  function Yu(e, n) {
    var t = Ze(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Xu(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = Dn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: kn, overflow: En } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ae = e, Ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _o(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function xo(e) {
    if (J) {
      var n = Ve;
      if (n) {
        var t = n;
        if (!Xu(e, n)) {
          if (_o(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = Ae;
          n && Xu(e, n) ? Yu(r, t) : (e.flags = e.flags & -4097 | 2, J = !1, Ae = e);
        }
      } else {
        if (_o(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, J = !1, Ae = e;
      }
    }
  }
  function Gu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ae = e;
  }
  function Gr(e) {
    if (e !== Ae) return !1;
    if (!J) return Gu(e), J = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !ho(e.type, e.memoizedProps)), n && (n = Ve)) {
      if (_o(e)) throw Zu(), Error(m(418));
      for (; n; ) Yu(e, n), n = Dn(n.nextSibling);
    }
    if (Gu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ve = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Ae ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zu() {
    for (var e = Ve; e; ) e = Dn(e.nextSibling);
  }
  function Et() {
    Ve = Ae = null, J = !1;
  }
  function Co(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  var Yc = he.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, n._stringRef = o, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Ju(e) {
    var n = e._init;
    return n(e._payload);
  }
  function qu(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Qn(f, a), f.index = 0, f.sibling = null, f;
    }
    function o(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = vi(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var N = d.type;
      return N === Pe ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ze && Ju(N) === a.type) ? (w = l(a, d.props), w.ref = rr(f, a, d), w.return = f, w) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = yi(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, N) {
      return a === null || a.tag !== 7 ? (a = it(d, f.mode, w, N), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = vi("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case qe:
            return d = Sl(a.type, a.key, a.props, null, f.mode, d), d.ref = rr(f, null, a), d.return = f, d;
          case ke:
            return a = yi(a, f.mode, d), a.return = f, a;
          case ze:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Ot(a) || T(a)) return a = it(a, f.mode, d, null), a.return = f, a;
        Zr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var N = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return N !== null ? null : u(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            return d.key === N ? s(f, a, d, w) : null;
          case ke:
            return d.key === N ? p(f, a, d, w) : null;
          case ze:
            return N = d._init, h(
              f,
              a,
              N(d._payload),
              w
            );
        }
        if (Ot(d) || T(d)) return N !== null ? null : y(f, a, d, w, null);
        Zr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, u(a, f, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case qe:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, N);
          case ke:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, N);
          case ze:
            var P = w._init;
            return k(f, a, d, P(w._payload), N);
        }
        if (Ot(w) || T(w)) return f = f.get(d) || null, y(a, f, w, N, null);
        Zr(a, w);
      }
      return null;
    }
    function x(f, a, d, w) {
      for (var N = null, P = null, z = a, L = a = 0, fe = null; z !== null && L < d.length; L++) {
        z.index > L ? (fe = z, z = null) : fe = z.sibling;
        var U = h(f, z, d[L], w);
        if (U === null) {
          z === null && (z = fe);
          break;
        }
        e && z && U.alternate === null && n(f, z), a = o(U, a, L), P === null ? N = U : P.sibling = U, P = U, z = fe;
      }
      if (L === d.length) return t(f, z), J && qn(f, L), N;
      if (z === null) {
        for (; L < d.length; L++) z = g(f, d[L], w), z !== null && (a = o(z, a, L), P === null ? N = z : P.sibling = z, P = z);
        return J && qn(f, L), N;
      }
      for (z = r(f, z); L < d.length; L++) fe = k(z, f, L, d[L], w), fe !== null && (e && fe.alternate !== null && z.delete(fe.key === null ? L : fe.key), a = o(fe, a, L), P === null ? N = fe : P.sibling = fe, P = fe);
      return e && z.forEach(function(Kn) {
        return n(f, Kn);
      }), J && qn(f, L), N;
    }
    function C(f, a, d, w) {
      var N = T(d);
      if (typeof N != "function") throw Error(m(150));
      if (d = N.call(d), d == null) throw Error(m(151));
      for (var P = N = null, z = a, L = a = 0, fe = null, U = d.next(); z !== null && !U.done; L++, U = d.next()) {
        z.index > L ? (fe = z, z = null) : fe = z.sibling;
        var Kn = h(f, z, U.value, w);
        if (Kn === null) {
          z === null && (z = fe);
          break;
        }
        e && z && Kn.alternate === null && n(f, z), a = o(Kn, a, L), P === null ? N = Kn : P.sibling = Kn, P = Kn, z = fe;
      }
      if (U.done) return t(
        f,
        z
      ), J && qn(f, L), N;
      if (z === null) {
        for (; !U.done; L++, U = d.next()) U = g(f, U.value, w), U !== null && (a = o(U, a, L), P === null ? N = U : P.sibling = U, P = U);
        return J && qn(f, L), N;
      }
      for (z = r(f, z); !U.done; L++, U = d.next()) U = k(z, f, L, U.value, w), U !== null && (e && U.alternate !== null && z.delete(U.key === null ? L : U.key), a = o(U, a, L), P === null ? N = U : P.sibling = U, P = U);
      return e && z.forEach(function(Pf) {
        return n(f, Pf);
      }), J && qn(f, L), N;
    }
    function le(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Pe && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            e: {
              for (var N = d.key, P = a; P !== null; ) {
                if (P.key === N) {
                  if (N = d.type, N === Pe) {
                    if (P.tag === 7) {
                      t(f, P.sibling), a = l(P, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (P.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ze && Ju(N) === P.type) {
                    t(f, P.sibling), a = l(P, d.props), a.ref = rr(f, P, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, P);
                  break;
                } else n(f, P);
                P = P.sibling;
              }
              d.type === Pe ? (a = it(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, f = w);
            }
            return i(f);
          case ke:
            e: {
              for (P = d.key; a !== null; ) {
                if (a.key === P) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = yi(d, f.mode, w), a.return = f, f = a;
            }
            return i(f);
          case ze:
            return P = d._init, le(f, a, P(d._payload), w);
        }
        if (Ot(d)) return x(f, a, d, w);
        if (T(d)) return C(f, a, d, w);
        Zr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = vi(d, f.mode, w), a.return = f, f = a), i(f)) : t(f, a);
    }
    return le;
  }
  var _t = qu(!0), bu = qu(!1), Jr = Fn(null), qr = null, xt = null, No = null;
  function Po() {
    No = xt = qr = null;
  }
  function zo(e) {
    var n = Jr.current;
    Y(Jr), e._currentValue = n;
  }
  function To(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Ct(e, n) {
    qr = e, No = xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Re = !0), e.firstContext = null);
  }
  function Ye(e) {
    var n = e._currentValue;
    if (No !== e) if (e = { context: e, memoizedValue: n, next: null }, xt === null) {
      if (qr === null) throw Error(m(308));
      xt = e, qr.dependencies = { lanes: 0, firstContext: e };
    } else xt = xt.next = e;
    return n;
  }
  var bn = null;
  function Lo(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function es(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Lo(n)) : (t.next = l.next, l.next = t), n.interleaved = t, _n(e, r);
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Ro(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ns(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function xn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, F & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, _n(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Lo(r)) : (n.next = l.next, l.next = n), r.interleaved = n, _n(e, t);
  }
  function br(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, $l(e, t);
    }
  }
  function ts(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, o = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          o === null ? l = o = i : o = o.next = i, t = t.next;
        } while (t !== null);
        o === null ? l = o = n : o = o.next = n;
      } else l = o = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function el(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, p = s.next;
      s.next = null, i === null ? o = p : i.next = p, i = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = p : u.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var g = l.baseState;
      i = 0, y = p = s = null, u = o;
      do {
        var h = u.lane, k = u.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var x = e, C = u;
            switch (h = n, k = t, C.tag) {
              case 1:
                if (x = C.payload, typeof x == "function") {
                  g = x.call(k, g, h);
                  break e;
                }
                g = x;
                break e;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = C.payload, h = typeof x == "function" ? x.call(k, g, h) : x, h == null) break e;
                g = _({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
        } else k = { eventTime: k, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, i |= h;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else o === null && (l.shared.lanes = 0);
      tt |= i, e.lanes = i, e.memoizedState = g;
    }
  }
  function rs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var lr = {}, pn = Fn(lr), or = Fn(lr), ir = Fn(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Oo(e, n) {
    switch (Q(ir, n), Q(or, e), Q(pn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ol(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ol(n, e);
    }
    Y(pn), Q(pn, n);
  }
  function Nt() {
    Y(pn), Y(or), Y(ir);
  }
  function ls(e) {
    et(ir.current);
    var n = et(pn.current), t = Ol(n, e.type);
    n !== t && (Q(or, e), Q(pn, t));
  }
  function Mo(e) {
    or.current === e && (Y(pn), Y(or));
  }
  var b = Fn(0);
  function nl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Do = [];
  function Fo() {
    for (var e = 0; e < Do.length; e++) Do[e]._workInProgressVersionPrimary = null;
    Do.length = 0;
  }
  var tl = he.ReactCurrentDispatcher, Io = he.ReactCurrentBatchConfig, nt = 0, ee = null, ie = null, ae = null, rl = !1, ur = !1, sr = 0, Xc = 0;
  function ye() {
    throw Error(m(321));
  }
  function jo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!nn(e[t], n[t])) return !1;
    return !0;
  }
  function Uo(e, n, t, r, l, o) {
    if (nt = o, ee = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, tl.current = e === null || e.memoizedState === null ? qc : bc, e = t(r, l), ur) {
      o = 0;
      do {
        if (ur = !1, sr = 0, 25 <= o) throw Error(m(301));
        o += 1, ae = ie = null, n.updateQueue = null, tl.current = ef, e = t(r, l);
      } while (ur);
    }
    if (tl.current = il, n = ie !== null && ie.next !== null, nt = 0, ae = ie = ee = null, rl = !1, n) throw Error(m(300));
    return e;
  }
  function Ao() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function mn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ae === null ? ee.memoizedState = ae = e : ae = ae.next = e, ae;
  }
  function Xe() {
    if (ie === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ie.next;
    var n = ae === null ? ee.memoizedState : ae.next;
    if (n !== null) ae = n, ie = e;
    else {
      if (e === null) throw Error(m(310));
      ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, ae === null ? ee.memoizedState = ae = e : ae = ae.next = e;
    }
    return ae;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Vo(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = ie, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((nt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (u = s = g, i = r) : s = s.next = g, ee.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? i = r : s.next = u, nn(r, n.memoizedState) || (Re = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ee.lanes |= o, tt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Bo(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      nn(o, n.memoizedState) || (Re = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function os() {
  }
  function is(e, n) {
    var t = ee, r = Xe(), l = n(), o = !nn(r.memoizedState, l);
    if (o && (r.memoizedState = l, Re = !0), r = r.queue, Ho(as.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ae !== null && ae.memoizedState.tag & 1) {
      if (t.flags |= 2048, cr(9, ss.bind(null, t, r, l, n), void 0, null), ce === null) throw Error(m(349));
      nt & 30 || us(t, n, l);
    }
    return l;
  }
  function us(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function ss(e, n, t, r) {
    n.value = t, n.getSnapshot = r, cs(n) && fs(e);
  }
  function as(e, n, t) {
    return t(function() {
      cs(n) && fs(e);
    });
  }
  function cs(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !nn(e, t);
    } catch {
      return !0;
    }
  }
  function fs(e) {
    var n = _n(e, 1);
    n !== null && un(n, e, 1, -1);
  }
  function ds(e) {
    var n = mn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = Jc.bind(null, ee, e), [n.memoizedState, e];
  }
  function cr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ps() {
    return Xe().memoizedState;
  }
  function ll(e, n, t, r) {
    var l = mn();
    ee.flags |= e, l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ol(e, n, t, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ie !== null) {
      var i = ie.memoizedState;
      if (o = i.destroy, r !== null && jo(r, i.deps)) {
        l.memoizedState = cr(n, t, o, r);
        return;
      }
    }
    ee.flags |= e, l.memoizedState = cr(1 | n, t, o, r);
  }
  function ms(e, n) {
    return ll(8390656, 8, e, n);
  }
  function Ho(e, n) {
    return ol(2048, 8, e, n);
  }
  function hs(e, n) {
    return ol(4, 2, e, n);
  }
  function vs(e, n) {
    return ol(4, 4, e, n);
  }
  function ys(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function gs(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ol(4, 4, ys.bind(null, n, e), t);
  }
  function Wo() {
  }
  function ws(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && jo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Ss(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && jo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function ks(e, n, t) {
    return nt & 21 ? (nn(t, n) || (t = Ji(), ee.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = t);
  }
  function Gc(e, n) {
    var t = B;
    B = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Io.transition;
    Io.transition = {};
    try {
      e(!1), n();
    } finally {
      B = t, Io.transition = r;
    }
  }
  function Es() {
    return Xe().memoizedState;
  }
  function Zc(e, n, t) {
    var r = Wn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, _s(e)) xs(n, t);
    else if (t = es(e, n, t, r), t !== null) {
      var l = _e();
      un(t, e, r, l), Cs(t, n, r);
    }
  }
  function Jc(e, n, t) {
    var r = Wn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (_s(e)) xs(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, nn(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Lo(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = es(e, n, l, r), t !== null && (l = _e(), un(t, e, r, l), Cs(t, n, r));
    }
  }
  function _s(e) {
    var n = e.alternate;
    return e === ee || n !== null && n === ee;
  }
  function xs(e, n) {
    ur = rl = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Cs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, $l(e, t);
    }
  }
  var il = { readContext: Ye, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, qc = { readContext: Ye, useCallback: function(e, n) {
    return mn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ye, useEffect: ms, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ll(
      4194308,
      4,
      ys.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ll(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ll(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = mn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = mn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Zc.bind(null, ee, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = mn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ds, useDebugValue: Wo, useDeferredValue: function(e) {
    return mn().memoizedState = e;
  }, useTransition: function() {
    var e = ds(!1), n = e[0];
    return e = Gc.bind(null, e[1]), mn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ee, l = mn();
    if (J) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ce === null) throw Error(m(349));
      nt & 30 || us(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, ms(as.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, cr(9, ss.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = mn(), n = ce.identifierPrefix;
    if (J) {
      var t = En, r = kn;
      t = (r & ~(1 << 32 - en(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = Xc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, bc = {
    readContext: Ye,
    useCallback: ws,
    useContext: Ye,
    useEffect: Ho,
    useImperativeHandle: gs,
    useInsertionEffect: hs,
    useLayoutEffect: vs,
    useMemo: Ss,
    useReducer: Vo,
    useRef: ps,
    useState: function() {
      return Vo(ar);
    },
    useDebugValue: Wo,
    useDeferredValue: function(e) {
      var n = Xe();
      return ks(n, ie.memoizedState, e);
    },
    useTransition: function() {
      var e = Vo(ar)[0], n = Xe().memoizedState;
      return [e, n];
    },
    useMutableSource: os,
    useSyncExternalStore: is,
    useId: Es,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Ye, useCallback: ws, useContext: Ye, useEffect: Ho, useImperativeHandle: gs, useInsertionEffect: hs, useLayoutEffect: vs, useMemo: Ss, useReducer: Bo, useRef: ps, useState: function() {
    return Bo(ar);
  }, useDebugValue: Wo, useDeferredValue: function(e) {
    var n = Xe();
    return ie === null ? n.memoizedState = e : ks(n, ie.memoizedState, e);
  }, useTransition: function() {
    var e = Bo(ar)[0], n = Xe().memoizedState;
    return [e, n];
  }, useMutableSource: os, useSyncExternalStore: is, useId: Es, unstable_isNewReconciler: !1 };
  function rn(e, n) {
    if (e && e.defaultProps) {
      n = _({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function $o(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : _({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var ul = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = _e(), l = Wn(e), o = xn(r, l);
    o.payload = n, t != null && (o.callback = t), n = An(e, o, l), n !== null && (un(n, e, l, r), br(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = _e(), l = Wn(e), o = xn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = An(e, o, l), n !== null && (un(n, e, l, r), br(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = _e(), r = Wn(e), l = xn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = An(e, l, r), n !== null && (un(n, e, r, t), br(n, e, r));
  } };
  function Ns(e, n, t, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, o) : !0;
  }
  function Ps(e, n, t) {
    var r = !1, l = In, o = n.contextType;
    return typeof o == "object" && o !== null ? o = Ye(o) : (l = Le(n) ? Zn : ve.current, r = n.contextTypes, o = (r = r != null) ? wt(e, l) : In), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ul, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function zs(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && ul.enqueueReplaceState(n, n.state, null);
  }
  function Qo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Ro(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = Ye(o) : (o = Le(n) ? Zn : ve.current, l.context = wt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && ($o(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && ul.enqueueReplaceState(l, l.state, null), el(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pt(e, n) {
    try {
      var t = "", r = n;
      do
        t += I(r), r = r.return;
      while (r);
      var l = t;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Ko(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Yo(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var nf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ts(e, n, t) {
    t = xn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      ml || (ml = !0, si = r), Yo(e, n);
    }, t;
  }
  function Ls(e, n, t) {
    t = xn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Yo(e, n);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      Yo(e, n), typeof r != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function Rs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = vf.bind(null, e, n, t), n.then(e, e));
  }
  function Os(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ms(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = xn(-1, 1), n.tag = 2, An(t, n, 1))), t.lanes |= 1), e);
  }
  var tf = he.ReactCurrentOwner, Re = !1;
  function Ee(e, n, t, r) {
    n.child = e === null ? bu(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Ds(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return Ct(n, l), r = Uo(e, n, t, r, o, l), t = Ao(), e !== null && !Re ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && t && ko(n), n.flags |= 1, Ee(e, n, r, l), n.child);
  }
  function Fs(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !hi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Is(e, n, o, r, l)) : (e = Sl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(i, r) && e.ref === n.ref) return Cn(e, n, l);
    }
    return n.flags |= 1, e = Qn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Is(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zt(o, r) && e.ref === n.ref) if (Re = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Re = !0);
      else return n.lanes = e.lanes, Cn(e, n, l);
    }
    return Xo(e, n, t, r, l);
  }
  function js(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Tt, Be), Be |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Q(Tt, Be), Be |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, Q(Tt, Be), Be |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, Q(Tt, Be), Be |= r;
    return Ee(e, n, l, t), n.child;
  }
  function Us(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Xo(e, n, t, r, l) {
    var o = Le(t) ? Zn : ve.current;
    return o = wt(n, o), Ct(n, l), t = Uo(e, n, t, r, o, l), r = Ao(), e !== null && !Re ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && r && ko(n), n.flags |= 1, Ee(e, n, t, l), n.child);
  }
  function As(e, n, t, r, l) {
    if (Le(t)) {
      var o = !0;
      Qr(n);
    } else o = !1;
    if (Ct(n, l), n.stateNode === null) al(e, n), Ps(n, t, r), Qo(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, u = n.memoizedProps;
      i.props = u;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Ye(p) : (p = Le(t) ? Zn : ve.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== p) && zs(n, i, r, p), Un = !1;
      var h = n.memoizedState;
      i.state = h, el(n, r, i, l), s = n.memoizedState, u !== r || h !== s || Te.current || Un ? (typeof y == "function" && ($o(n, t, y, r), s = n.memoizedState), (u = Un || Ns(n, t, u, r, h, s, p)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, ns(e, n), u = n.memoizedProps, p = n.type === n.elementType ? u : rn(n.type, u), i.props = p, g = n.pendingProps, h = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ye(s) : (s = Le(t) ? Zn : ve.current, s = wt(n, s));
      var k = t.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== g || h !== s) && zs(n, i, r, s), Un = !1, h = n.memoizedState, i.state = h, el(n, r, i, l);
      var x = n.memoizedState;
      u !== g || h !== x || Te.current || Un ? (typeof k == "function" && ($o(n, t, k, r), x = n.memoizedState), (p = Un || Ns(n, t, p, r, h, x, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), i.props = r, i.state = x, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Go(e, n, t, r, o, l);
  }
  function Go(e, n, t, r, l, o) {
    Us(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && $u(n, t, !1), Cn(e, n, o);
    r = n.stateNode, tf.current = n;
    var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = _t(n, e.child, null, o), n.child = _t(n, null, u, o)) : Ee(e, n, u, o), n.memoizedState = r.state, l && $u(n, t, !0), n.child;
  }
  function Vs(e) {
    var n = e.stateNode;
    n.pendingContext ? Hu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Hu(e, n.context, !1), Oo(e, n.containerInfo);
  }
  function Bs(e, n, t, r, l) {
    return Et(), Co(l), n.flags |= 256, Ee(e, n, t, r), n.child;
  }
  var Zo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hs(e, n, t) {
    var r = n.pendingProps, l = b.current, o = !1, i = (n.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Q(b, l & 1), e === null)
      return xo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = kl(i, r, 0, null), e = it(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Jo(t), n.memoizedState = Zo, e) : qo(n, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return rf(e, n, i, r, u, l, t);
    if (o) {
      o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Qn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Qn(u, o) : (o = it(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Jo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Zo, r;
    }
    return o = e.child, e = o.sibling, r = Qn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function qo(e, n) {
    return n = kl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function sl(e, n, t, r) {
    return r !== null && Co(r), _t(n, e.child, null, t), e = qo(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function rf(e, n, t, r, l, o, i) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Ko(Error(m(422))), sl(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = kl({ mode: "visible", children: r.children }, l, 0, null), o = it(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && _t(n, e.child, null, i), n.child.memoizedState = Jo(i), n.memoizedState = Zo, o);
    if (!(n.mode & 1)) return sl(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(m(419)), r = Ko(o, r, void 0), sl(e, n, i, r);
    }
    if (u = (i & e.childLanes) !== 0, Re || u) {
      if (r = ce, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, _n(e, l), un(r, e, l, -1));
      }
      return mi(), r = Ko(Error(m(421))), sl(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = yf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Ve = Dn(l.nextSibling), Ae = n, J = !0, tn = null, e !== null && (Qe[Ke++] = kn, Qe[Ke++] = En, Qe[Ke++] = Jn, kn = e.id, En = e.overflow, Jn = n), n = qo(n, r.children), n.flags |= 4096, n);
  }
  function Ws(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), To(e.return, n, t);
  }
  function bo(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function $s(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (Ee(e, n, r.children, t), r = b.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ws(e, t, n);
        else if (e.tag === 19) Ws(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Q(b, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && nl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), bo(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        bo(n, !0, t, null, o);
        break;
      case "together":
        bo(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function al(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Cn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Qn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function lf(e, n, t) {
    switch (n.tag) {
      case 3:
        Vs(n), Et();
        break;
      case 5:
        ls(n);
        break;
      case 1:
        Le(n.type) && Qr(n);
        break;
      case 4:
        Oo(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        Q(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (Q(b, b.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Hs(e, n, t) : (Q(b, b.current & 1), e = Cn(e, n, t), e !== null ? e.sibling : null);
        Q(b, b.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return $s(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Q(b, b.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, js(e, n, t);
    }
    return Cn(e, n, t);
  }
  var Qs, ei, Ks, Ys;
  Qs = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, ei = function() {
  }, Ks = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(pn.current);
      var o = null;
      switch (t) {
        case "input":
          l = zl(e, l), r = zl(e, r), o = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Rl(e, l), r = Rl(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ml(t, r);
      var i;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var u = l[p];
        for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Ce.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (u = l?.[p], r.hasOwnProperty(p) && s !== u && (s != null || u != null)) if (p === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
          for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
        } else t || (o || (o = []), o.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Ce.hasOwnProperty(p) ? (s != null && p === "onScroll" && K("scroll", e), o || u === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Ys = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function fr(e, n) {
    if (!J) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function ge(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function of(e, n, t) {
    var r = n.pendingProps;
    switch (Eo(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ge(n), null;
      case 1:
        return Le(n.type) && $r(), ge(n), null;
      case 3:
        return r = n.stateNode, Nt(), Y(Te), Y(ve), Fo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, tn !== null && (fi(tn), tn = null))), ei(e, n), ge(n), null;
      case 5:
        Mo(n);
        var l = et(ir.current);
        if (t = n.type, e !== null && n.stateNode != null) Ks(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return ge(n), null;
          }
          if (e = et(pn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[dn] = n, r[nr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                K("cancel", r), K("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) K(qt[l], r);
                break;
              case "source":
                K("error", r);
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  r
                ), K("load", r);
                break;
              case "details":
                K("toggle", r);
                break;
              case "input":
                Pi(r, o), K("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, K("invalid", r);
                break;
              case "textarea":
                Li(r, o), K("invalid", r);
            }
            Ml(t, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Br(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Ce.hasOwnProperty(i) && u != null && i === "onScroll" && K("scroll", r);
            }
            switch (t) {
              case "input":
                gr(r), Ti(r, o, !0);
                break;
              case "textarea":
                gr(r), Oi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mi(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[dn] = n, e[nr] = r, Qs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Dl(t, r), t) {
                case "dialog":
                  K("cancel", e), K("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  K("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) K(qt[l], e);
                  l = r;
                  break;
                case "source":
                  K("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  K(
                    "error",
                    e
                  ), K("load", e), l = r;
                  break;
                case "details":
                  K("toggle", e), l = r;
                  break;
                case "input":
                  Pi(e, r), l = zl(e, r), K("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), K("invalid", e);
                  break;
                case "textarea":
                  Li(e, r), l = Rl(e, r), K("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Ii(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Di(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ce.hasOwnProperty(o) ? s != null && o === "onScroll" && K("scroll", e) : s != null && Je(e, o, s, i));
              }
              switch (t) {
                case "input":
                  gr(e), Ti(e, r, !1);
                  break;
                case "textarea":
                  gr(e), Oi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + V(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? ut(e, !!r.multiple, o, !1) : r.defaultValue != null && ut(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return ge(n), null;
      case 6:
        if (e && n.stateNode != null) Ys(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = et(ir.current), et(pn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[dn] = n, (o = r.nodeValue !== t) && (e = Ae, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[dn] = n, n.stateNode = r;
        }
        return ge(n), null;
      case 13:
        if (Y(b), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (J && Ve !== null && n.mode & 1 && !(n.flags & 128)) Zu(), Et(), n.flags |= 98560, o = !1;
          else if (o = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[dn] = n;
            } else Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ge(n), o = !1;
          } else tn !== null && (fi(tn), tn = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || b.current & 1 ? ue === 0 && (ue = 3) : mi())), n.updateQueue !== null && (n.flags |= 4), ge(n), null);
      case 4:
        return Nt(), ei(e, n), e === null && bt(n.stateNode.containerInfo), ge(n), null;
      case 10:
        return zo(n.type._context), ge(n), null;
      case 17:
        return Le(n.type) && $r(), ge(n), null;
      case 19:
        if (Y(b), o = n.memoizedState, o === null) return ge(n), null;
        if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) fr(o, !1);
        else {
          if (ue !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (i = nl(e), i !== null) {
              for (n.flags |= 128, fr(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return Q(b, b.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && re() > Lt && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), fr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !J) return ge(n), null;
          } else 2 * re() - o.renderingStartTime > Lt && t !== 1073741824 && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = re(), n.sibling = null, t = b.current, Q(b, r ? t & 1 | 2 : t & 1), n) : (ge(n), null);
      case 22:
      case 23:
        return pi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Be & 1073741824 && (ge(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ge(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function uf(e, n) {
    switch (Eo(n), n.tag) {
      case 1:
        return Le(n.type) && $r(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Nt(), Y(Te), Y(ve), Fo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Mo(n), null;
      case 13:
        if (Y(b), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return Y(b), null;
      case 4:
        return Nt(), null;
      case 10:
        return zo(n.type._context), null;
      case 22:
      case 23:
        return pi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var cl = !1, we = !1, sf = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      te(e, n, r);
    }
    else t.current = null;
  }
  function ni(e, n, t) {
    try {
      t();
    } catch (r) {
      te(e, n, r);
    }
  }
  var Xs = !1;
  function af(e, n) {
    if (po = Lr, e = Nu(), lo(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0, u = -1, s = -1, p = 0, y = 0, g = e, h = null;
          n: for (; ; ) {
            for (var k; g !== t || l !== 0 && g.nodeType !== 3 || (u = i + l), g !== o || r !== 0 && g.nodeType !== 3 || (s = i + r), g.nodeType === 3 && (i += g.nodeValue.length), (k = g.firstChild) !== null; )
              h = g, g = k;
            for (; ; ) {
              if (g === e) break n;
              if (h === t && ++p === l && (u = i), h === o && ++y === r && (s = i), (k = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = k;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (mo = { focusedElem: e, selectionRange: t }, Lr = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
    else for (; E !== null; ) {
      n = E;
      try {
        var x = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (x !== null) {
              var C = x.memoizedProps, le = x.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? C : rn(n.type, C), le);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = n.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (w) {
        te(n, n.return, w);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, E = e;
        break;
      }
      E = n.return;
    }
    return x = Xs, Xs = !1, x;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && ni(n, t, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ti(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Gs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Gs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[dn], delete n[nr], delete n[go], delete n[$c], delete n[Qc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Zs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Js(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ri(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ri(e, n, t), e = e.sibling; e !== null; ) ri(e, n, t), e = e.sibling;
  }
  function li(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (li(e, n, t), e = e.sibling; e !== null; ) li(e, n, t), e = e.sibling;
  }
  var de = null, ln = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) qs(e, n, t), t = t.sibling;
  }
  function qs(e, n, t) {
    if (fn && typeof fn.onCommitFiberUnmount == "function") try {
      fn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        we || zt(t, n);
      case 6:
        var r = de, l = ln;
        de = null, Vn(e, n, t), de = r, ln = l, de !== null && (ln ? (e = de, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : de.removeChild(t.stateNode));
        break;
      case 18:
        de !== null && (ln ? (e = de, t = t.stateNode, e.nodeType === 8 ? yo(e.parentNode, t) : e.nodeType === 1 && yo(e, t), $t(e)) : yo(de, t.stateNode));
        break;
      case 4:
        r = de, l = ln, de = t.stateNode.containerInfo, ln = !0, Vn(e, n, t), de = r, ln = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!we && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && ni(t, n, i), l = l.next;
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (!we && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          te(t, n, u);
        }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (we = (r = we) || t.memoizedState !== null, Vn(e, n, t), we = r) : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function bs(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new sf()), n.forEach(function(r) {
        var l = gf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function on(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, i = n, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              de = u.stateNode, ln = !1;
              break e;
            case 3:
              de = u.stateNode.containerInfo, ln = !0;
              break e;
            case 4:
              de = u.stateNode.containerInfo, ln = !0;
              break e;
          }
          u = u.return;
        }
        if (de === null) throw Error(m(160));
        qs(o, i, l), de = null, ln = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        te(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) ea(n, e), n = n.sibling;
  }
  function ea(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (on(n, e), hn(e), r & 4) {
          try {
            dr(3, e, e.return), fl(3, e);
          } catch (C) {
            te(e, e.return, C);
          }
          try {
            dr(5, e, e.return);
          } catch (C) {
            te(e, e.return, C);
          }
        }
        break;
      case 1:
        on(n, e), hn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (on(n, e), hn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Mt(l, "");
          } catch (C) {
            te(e, e.return, C);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && zi(l, o), Dl(u, i);
            var p = Dl(u, o);
            for (i = 0; i < s.length; i += 2) {
              var y = s[i], g = s[i + 1];
              y === "style" ? Ii(l, g) : y === "dangerouslySetInnerHTML" ? Di(l, g) : y === "children" ? Mt(l, g) : Je(l, y, g, p);
            }
            switch (u) {
              case "input":
                Tl(l, o);
                break;
              case "textarea":
                Ri(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null ? ut(l, !!o.multiple, k, !1) : h !== !!o.multiple && (o.defaultValue != null ? ut(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : ut(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (C) {
            te(e, e.return, C);
          }
        }
        break;
      case 6:
        if (on(n, e), hn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (C) {
            te(e, e.return, C);
          }
        }
        break;
      case 3:
        if (on(n, e), hn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          $t(n.containerInfo);
        } catch (C) {
          te(e, e.return, C);
        }
        break;
      case 4:
        on(n, e), hn(e);
        break;
      case 13:
        on(n, e), hn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ui = re())), r & 4 && bs(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (we = (p = we) || y, on(n, e), we = p) : on(n, e), hn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (E = e, y = e.child; y !== null; ) {
            for (g = E = y; E !== null; ) {
              switch (h = E, k = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, h, h.return);
                  break;
                case 1:
                  zt(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, x.props = n.memoizedProps, x.state = n.memoizedState, x.componentWillUnmount();
                    } catch (C) {
                      te(r, t, C);
                    }
                  }
                  break;
                case 5:
                  zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ra(g);
                    continue;
                  }
              }
              k !== null ? (k.return = h, E = k) : ra(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = g.stateNode, s = g.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Fi("display", i));
                } catch (C) {
                  te(e, e.return, C);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (C) {
                te(e, e.return, C);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        on(n, e), hn(e), r & 4 && bs(e);
        break;
      case 21:
        break;
      default:
        on(
          n,
          e
        ), hn(e);
    }
  }
  function hn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Zs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mt(l, ""), r.flags &= -33);
            var o = Js(e);
            li(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = Js(e);
            ri(e, u, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        te(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function cf(e, n, t) {
    E = e, na(e);
  }
  function na(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || cl;
        if (!i) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || we;
          u = cl;
          var p = we;
          if (cl = i, (we = s) && !p) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? la(l) : s !== null ? (s.return = i, E = s) : la(l);
          for (; o !== null; ) E = o, na(o), o = o.sibling;
          E = l, cl = u, we = p;
        }
        ta(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : ta(e);
    }
  }
  function ta(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              we || fl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !we) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : rn(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = n.updateQueue;
              o !== null && rs(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                rs(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var p = n.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && $t(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          we || n.flags & 512 && ti(n);
        } catch (h) {
          te(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ra(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              fl(4, n);
            } catch (s) {
              te(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                te(n, l, s);
              }
            }
            var o = n.return;
            try {
              ti(n);
            } catch (s) {
              te(n, o, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ti(n);
            } catch (s) {
              te(n, i, s);
            }
        }
      } catch (s) {
        te(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var u = n.sibling;
      if (u !== null) {
        u.return = n.return, E = u;
        break;
      }
      E = n.return;
    }
  }
  var ff = Math.ceil, dl = he.ReactCurrentDispatcher, oi = he.ReactCurrentOwner, Ge = he.ReactCurrentBatchConfig, F = 0, ce = null, oe = null, pe = 0, Be = 0, Tt = Fn(0), ue = 0, pr = null, tt = 0, pl = 0, ii = 0, mr = null, Oe = null, ui = 0, Lt = 1 / 0, Nn = null, ml = !1, si = null, Bn = null, hl = !1, Hn = null, vl = 0, hr = 0, ai = null, yl = -1, gl = 0;
  function _e() {
    return F & 6 ? re() : yl !== -1 ? yl : yl = re();
  }
  function Wn(e) {
    return e.mode & 1 ? F & 2 && pe !== 0 ? pe & -pe : Yc.transition !== null ? (gl === 0 && (gl = Ji()), gl) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : iu(e.type)), e) : 1;
  }
  function un(e, n, t, r) {
    if (50 < hr) throw hr = 0, ai = null, Error(m(185));
    At(e, t, r), (!(F & 2) || e !== ce) && (e === ce && (!(F & 2) && (pl |= t), ue === 4 && $n(e, pe)), Me(e, r), t === 1 && F === 0 && !(n.mode & 1) && (Lt = re() + 500, Kr && jn()));
  }
  function Me(e, n) {
    var t = e.callbackNode;
    Ya(e, n);
    var r = Pr(e, e === ce ? pe : 0);
    if (r === 0) t !== null && Xi(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Xi(t), n === 1) e.tag === 0 ? Kc(ia.bind(null, e)) : Qu(ia.bind(null, e)), Hc(function() {
        !(F & 6) && jn();
      }), t = null;
      else {
        switch (qi(r)) {
          case 1:
            t = Bl;
            break;
          case 4:
            t = Gi;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = Zi;
            break;
          default:
            t = _r;
        }
        t = ma(t, oa.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function oa(e, n) {
    if (yl = -1, gl = 0, F & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = Pr(e, e === ce ? pe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = wl(e, r);
    else {
      n = r;
      var l = F;
      F |= 2;
      var o = sa();
      (ce !== e || pe !== n) && (Nn = null, Lt = re() + 500, lt(e, n));
      do
        try {
          mf();
          break;
        } catch (u) {
          ua(e, u);
        }
      while (!0);
      Po(), dl.current = o, F = l, oe !== null ? n = 0 : (ce = null, pe = 0, n = ue);
    }
    if (n !== 0) {
      if (n === 2 && (l = Hl(e), l !== 0 && (r = l, n = ci(e, l))), n === 1) throw t = pr, lt(e, 0), $n(e, r), Me(e, re()), t;
      if (n === 6) $n(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !df(l) && (n = wl(e, r), n === 2 && (o = Hl(e), o !== 0 && (r = o, n = ci(e, o))), n === 1)) throw t = pr, lt(e, 0), $n(e, r), Me(e, re()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ot(e, Oe, Nn);
            break;
          case 3:
            if ($n(e, r), (r & 130023424) === r && (n = ui + 500 - re(), 10 < n)) {
              if (Pr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                _e(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = vo(ot.bind(null, e, Oe, Nn), n);
              break;
            }
            ot(e, Oe, Nn);
            break;
          case 4:
            if ($n(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - en(r);
              o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ff(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = vo(ot.bind(null, e, Oe, Nn), r);
              break;
            }
            ot(e, Oe, Nn);
            break;
          case 5:
            ot(e, Oe, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Me(e, re()), e.callbackNode === t ? oa.bind(null, e) : null;
  }
  function ci(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = wl(e, n), e !== 2 && (n = Oe, Oe = t, n !== null && fi(n)), e;
  }
  function fi(e) {
    Oe === null ? Oe = e : Oe.push.apply(Oe, e);
  }
  function df(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!nn(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function $n(e, n) {
    for (n &= ~ii, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - en(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ia(e) {
    if (F & 6) throw Error(m(327));
    Rt();
    var n = Pr(e, 0);
    if (!(n & 1)) return Me(e, re()), null;
    var t = wl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Hl(e);
      r !== 0 && (n = r, t = ci(e, r));
    }
    if (t === 1) throw t = pr, lt(e, 0), $n(e, n), Me(e, re()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ot(e, Oe, Nn), Me(e, re()), null;
  }
  function di(e, n) {
    var t = F;
    F |= 1;
    try {
      return e(n);
    } finally {
      F = t, F === 0 && (Lt = re() + 500, Kr && jn());
    }
  }
  function rt(e) {
    Hn !== null && Hn.tag === 0 && !(F & 6) && Rt();
    var n = F;
    F |= 1;
    var t = Ge.transition, r = B;
    try {
      if (Ge.transition = null, B = 1, e) return e();
    } finally {
      B = r, Ge.transition = t, F = n, !(F & 6) && jn();
    }
  }
  function pi() {
    Be = Tt.current, Y(Tt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Bc(t)), oe !== null) for (t = oe.return; t !== null; ) {
      var r = t;
      switch (Eo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $r();
          break;
        case 3:
          Nt(), Y(Te), Y(ve), Fo();
          break;
        case 5:
          Mo(r);
          break;
        case 4:
          Nt();
          break;
        case 13:
          Y(b);
          break;
        case 19:
          Y(b);
          break;
        case 10:
          zo(r.type._context);
          break;
        case 22:
        case 23:
          pi();
      }
      t = t.return;
    }
    if (ce = e, oe = e = Qn(e.current, null), pe = Be = n, ue = 0, pr = null, ii = pl = tt = 0, Oe = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++) if (t = bn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        t.pending = r;
      }
      bn = null;
    }
    return e;
  }
  function ua(e, n) {
    do {
      var t = oe;
      try {
        if (Po(), tl.current = il, rl) {
          for (var r = ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          rl = !1;
        }
        if (nt = 0, ae = ie = ee = null, ur = !1, sr = 0, oi.current = null, t === null || t.return === null) {
          ue = 1, pr = n, oe = null;
          break;
        }
        e: {
          var o = e, i = t.return, u = t, s = n;
          if (n = pe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = u, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = Os(i);
            if (k !== null) {
              k.flags &= -257, Ms(k, i, u, o, n), k.mode & 1 && Rs(o, p, n), n = k, s = p;
              var x = n.updateQueue;
              if (x === null) {
                var C = /* @__PURE__ */ new Set();
                C.add(s), n.updateQueue = C;
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Rs(o, p, n), mi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (J && u.mode & 1) {
            var le = Os(i);
            if (le !== null) {
              !(le.flags & 65536) && (le.flags |= 256), Ms(le, i, u, o, n), Co(Pt(s, u));
              break e;
            }
          }
          o = s = Pt(s, u), ue !== 4 && (ue = 2), mr === null ? mr = [o] : mr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = Ts(o, s, n);
                ts(o, f);
                break e;
              case 1:
                u = s;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bn === null || !Bn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var w = Ls(o, u, n);
                  ts(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ca(t);
      } catch (N) {
        n = N, oe === t && t !== null && (oe = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sa() {
    var e = dl.current;
    return dl.current = il, e === null ? il : e;
  }
  function mi() {
    (ue === 0 || ue === 3 || ue === 2) && (ue = 4), ce === null || !(tt & 268435455) && !(pl & 268435455) || $n(ce, pe);
  }
  function wl(e, n) {
    var t = F;
    F |= 2;
    var r = sa();
    (ce !== e || pe !== n) && (Nn = null, lt(e, n));
    do
      try {
        pf();
        break;
      } catch (l) {
        ua(e, l);
      }
    while (!0);
    if (Po(), F = t, dl.current = r, oe !== null) throw Error(m(261));
    return ce = null, pe = 0, ue;
  }
  function pf() {
    for (; oe !== null; ) aa(oe);
  }
  function mf() {
    for (; oe !== null && !Ua(); ) aa(oe);
  }
  function aa(e) {
    var n = pa(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps, n === null ? ca(e) : oe = n, oi.current = null;
  }
  function ca(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = uf(t, n), t !== null) {
          t.flags &= 32767, oe = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ue = 6, oe = null;
          return;
        }
      } else if (t = of(t, n, Be), t !== null) {
        oe = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        oe = n;
        return;
      }
      oe = n = e;
    } while (n !== null);
    ue === 0 && (ue = 5);
  }
  function ot(e, n, t) {
    var r = B, l = Ge.transition;
    try {
      Ge.transition = null, B = 1, hf(e, n, t, r);
    } finally {
      Ge.transition = l, B = r;
    }
    return null;
  }
  function hf(e, n, t, r) {
    do
      Rt();
    while (Hn !== null);
    if (F & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (Xa(e, o), e === ce && (oe = ce = null, pe = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || hl || (hl = !0, ma(_r, function() {
      return Rt(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = Ge.transition, Ge.transition = null;
      var i = B;
      B = 1;
      var u = F;
      F |= 4, oi.current = null, af(e, t), ea(t, e), Dc(mo), Lr = !!po, mo = po = null, e.current = t, cf(t), Aa(), F = u, B = i, Ge.transition = o;
    } else e.current = t;
    if (hl && (hl = !1, Hn = e, vl = l), o = e.pendingLanes, o === 0 && (Bn = null), Ha(t.stateNode), Me(e, re()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ml = !1, e = si, si = null, e;
    return vl & 1 && e.tag !== 0 && Rt(), o = e.pendingLanes, o & 1 ? e === ai ? hr++ : (hr = 0, ai = e) : hr = 0, jn(), null;
  }
  function Rt() {
    if (Hn !== null) {
      var e = qi(vl), n = Ge.transition, t = B;
      try {
        if (Ge.transition = null, B = 16 > e ? 16 : e, Hn === null) var r = !1;
        else {
          if (e = Hn, Hn = null, vl = 0, F & 6) throw Error(m(331));
          var l = F;
          for (F |= 4, E = e.current; E !== null; ) {
            var o = E, i = o.child;
            if (E.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, o);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, E = g;
                    else for (; E !== null; ) {
                      y = E;
                      var h = y.sibling, k = y.return;
                      if (Gs(y), y === p) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = k, E = h;
                        break;
                      }
                      E = k;
                    }
                  }
                }
                var x = o.alternate;
                if (x !== null) {
                  var C = x.child;
                  if (C !== null) {
                    x.child = null;
                    do {
                      var le = C.sibling;
                      C.sibling = null, C = le;
                    } while (C !== null);
                  }
                }
                E = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
            else e: for (; E !== null; ) {
              if (o = E, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  dr(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, E = f;
                break e;
              }
              E = o.return;
            }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, E = d;
            else e: for (i = a; E !== null; ) {
              if (u = E, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fl(9, u);
                }
              } catch (N) {
                te(u, u.return, N);
              }
              if (u === i) {
                E = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                w.return = u.return, E = w;
                break e;
              }
              E = u.return;
            }
          }
          if (F = l, jn(), fn && typeof fn.onPostCommitFiberRoot == "function") try {
            fn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        B = t, Ge.transition = n;
      }
    }
    return !1;
  }
  function fa(e, n, t) {
    n = Pt(t, n), n = Ts(e, n, 1), e = An(e, n, 1), n = _e(), e !== null && (At(e, 1, n), Me(e, n));
  }
  function te(e, n, t) {
    if (e.tag === 3) fa(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        fa(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
          e = Pt(t, e), e = Ls(n, e, 1), n = An(n, e, 1), e = _e(), n !== null && (At(n, 1, e), Me(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function vf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = _e(), e.pingedLanes |= e.suspendedLanes & t, ce === e && (pe & t) === t && (ue === 4 || ue === 3 && (pe & 130023424) === pe && 500 > re() - ui ? lt(e, 0) : ii |= t), Me(e, n);
  }
  function da(e, n) {
    n === 0 && (e.mode & 1 ? (n = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : n = 1);
    var t = _e();
    e = _n(e, n), e !== null && (At(e, n, t), Me(e, t));
  }
  function yf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), da(e, t);
  }
  function gf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), da(e, t);
  }
  var pa;
  pa = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Te.current) Re = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Re = !1, lf(e, n, t);
      Re = !!(e.flags & 131072);
    }
    else Re = !1, J && n.flags & 1048576 && Ku(n, Xr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        al(e, n), e = n.pendingProps;
        var l = wt(n, ve.current);
        Ct(n, t), l = Uo(null, n, r, e, l, t);
        var o = Ao();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Le(r) ? (o = !0, Qr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ro(n), l.updater = ul, n.stateNode = l, l._reactInternals = n, Qo(n, r, e, t), n = Go(null, n, r, !0, o, t)) : (n.tag = 0, J && o && ko(n), Ee(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (al(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Sf(r), e = rn(r, e), l) {
            case 0:
              n = Xo(null, n, r, e, t);
              break e;
            case 1:
              n = As(null, n, r, e, t);
              break e;
            case 11:
              n = Ds(null, n, r, e, t);
              break e;
            case 14:
              n = Fs(null, n, r, rn(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Xo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), As(e, n, r, l, t);
      case 3:
        e: {
          if (Vs(n), e === null) throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, ns(e, n), el(n, r, null, t);
          var i = n.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = Pt(Error(m(423)), n), n = Bs(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Pt(Error(m(424)), n), n = Bs(e, n, r, t, l);
            break e;
          } else for (Ve = Dn(n.stateNode.containerInfo.firstChild), Ae = n, J = !0, tn = null, t = bu(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = Cn(e, n, t);
              break e;
            }
            Ee(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ls(n), e === null && xo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ho(r, l) ? i = null : o !== null && ho(r, o) && (n.flags |= 32), Us(e, n), Ee(e, n, i, t), n.child;
      case 6:
        return e === null && xo(n), null;
      case 13:
        return Hs(e, n, t);
      case 4:
        return Oo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : Ee(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Ds(e, n, r, l, t);
      case 7:
        return Ee(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ee(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ee(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, Q(Jr, r._currentValue), r._currentValue = i, o !== null) if (nn(o.value, i)) {
            if (o.children === l.children && !Te.current) {
              n = Cn(e, n, t);
              break e;
            }
          } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = xn(-1, t & -t), s.tag = 2;
                    var p = o.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), To(
                    o.return,
                    t,
                    n
                  ), u.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(m(341));
              i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), To(i, t, n), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === n) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          Ee(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Ct(n, t), l = Ye(l), r = r(l), n.flags |= 1, Ee(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = rn(r, n.pendingProps), l = rn(r.type, l), Fs(e, n, r, l, t);
      case 15:
        return Is(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), al(e, n), n.tag = 1, Le(r) ? (e = !0, Qr(n)) : e = !1, Ct(n, t), Ps(n, r, l), Qo(n, r, l, t), Go(null, n, r, !0, e, t);
      case 19:
        return $s(e, n, t);
      case 22:
        return js(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ma(e, n) {
    return Yi(e, n);
  }
  function wf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ze(e, n, t, r) {
    return new wf(e, n, t, r);
  }
  function hi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sf(e) {
    if (typeof e == "function") return hi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === an) return 11;
      if (e === cn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function Sl(e, n, t, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") hi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Pe:
        return it(t.children, l, o, n);
      case $e:
        i = 8, l |= 8;
        break;
      case Pn:
        return e = Ze(12, t, n, l | 2), e.elementType = Pn, e.lanes = o, e;
      case Ie:
        return e = Ze(13, t, n, l), e.elementType = Ie, e.lanes = o, e;
      case be:
        return e = Ze(19, t, n, l), e.elementType = be, e.lanes = o, e;
      case ne:
        return kl(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case gn:
            i = 10;
            break e;
          case Yn:
            i = 9;
            break e;
          case an:
            i = 11;
            break e;
          case cn:
            i = 14;
            break e;
          case ze:
            i = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = Ze(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function it(e, n, t, r) {
    return e = Ze(7, e, r, n), e.lanes = t, e;
  }
  function kl(e, n, t, r) {
    return e = Ze(22, e, r, n), e.elementType = ne, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function vi(e, n, t) {
    return e = Ze(6, e, null, n), e.lanes = t, e;
  }
  function yi(e, n, t) {
    return n = Ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function kf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function gi(e, n, t, r, l, o, i, u, s) {
    return e = new kf(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ze(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ro(o), e;
  }
  function Ef(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ke, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ha(e) {
    if (!e) return In;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Le(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Le(t)) return Wu(e, t, n);
    }
    return n;
  }
  function va(e, n, t, r, l, o, i, u, s) {
    return e = gi(t, r, !0, e, l, o, i, u, s), e.context = ha(null), t = e.current, r = _e(), l = Wn(t), o = xn(r, l), o.callback = n ?? null, An(t, o, l), e.current.lanes = l, At(e, l, r), Me(e, r), e;
  }
  function El(e, n, t, r) {
    var l = n.current, o = _e(), i = Wn(l);
    return t = ha(t), n.context === null ? n.context = t : n.pendingContext = t, n = xn(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = An(l, n, i), e !== null && (un(e, l, i, o), br(e, l, i)), i;
  }
  function _l(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ya(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function wi(e, n) {
    ya(e, n), (e = e.alternate) && ya(e, n);
  }
  function _f() {
    return null;
  }
  var ga = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Si(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = Si.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    El(e, n, null, null);
  }, xl.prototype.unmount = Si.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        El(null, e, null, null);
      }), n[wn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = nu();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++) ;
      Rn.splice(t, 0, e), t === 0 && lu(e);
    }
  };
  function ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function wa() {
  }
  function xf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = _l(i);
          o.call(p);
        };
      }
      var i = va(n, r, e, 0, null, !1, !1, "", wa);
      return e._reactRootContainer = i, e[wn] = i.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var p = _l(s);
        u.call(p);
      };
    }
    var s = gi(e, 0, !1, null, null, !1, !1, "", wa);
    return e._reactRootContainer = s, e[wn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      El(n, s, t, r);
    }), s;
  }
  function Nl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = _l(i);
          u.call(s);
        };
      }
      El(n, i, e, l);
    } else i = xf(t, n, e, l, r);
    return _l(i);
  }
  bi = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && ($l(n, t | 1), Me(n, re()), !(F & 6) && (Lt = re() + 500, jn()));
        }
        break;
      case 13:
        rt(function() {
          var r = _n(e, 1);
          if (r !== null) {
            var l = _e();
            un(r, e, 1, l);
          }
        }), wi(e, 1);
    }
  }, Ql = function(e) {
    if (e.tag === 13) {
      var n = _n(e, 134217728);
      if (n !== null) {
        var t = _e();
        un(n, e, 134217728, t);
      }
      wi(e, 134217728);
    }
  }, eu = function(e) {
    if (e.tag === 13) {
      var n = Wn(e), t = _n(e, n);
      if (t !== null) {
        var r = _e();
        un(t, e, n, r);
      }
      wi(e, n);
    }
  }, nu = function() {
    return B;
  }, tu = function(e, n) {
    var t = B;
    try {
      return B = e, n();
    } finally {
      B = t;
    }
  }, jl = function(e, n, t) {
    switch (n) {
      case "input":
        if (Tl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Ni(r), Tl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ri(e, t);
        break;
      case "select":
        n = t.value, n != null && ut(e, !!t.multiple, n, !1);
    }
  }, Vi = di, Bi = rt;
  var Cf = { usingClientEntryPoint: !1, Events: [tr, yt, Wr, Ui, Ai, di] }, vr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nf = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Qi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance || _f, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      xr = Pl.inject(Nf), fn = Pl;
    } catch {
    }
  }
  return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cf, De.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ki(n)) throw Error(m(200));
    return Ef(e, n, null, t);
  }, De.createRoot = function(e, n) {
    if (!ki(e)) throw Error(m(299));
    var t = !1, r = "", l = ga;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = gi(e, 1, !1, null, null, t, !1, r, l), e[wn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new Si(n);
  }, De.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Qi(n), e = e === null ? null : e.stateNode, e;
  }, De.flushSync = function(e) {
    return rt(e);
  }, De.hydrate = function(e, n, t) {
    if (!Cl(n)) throw Error(m(200));
    return Nl(null, e, n, !0, t);
  }, De.hydrateRoot = function(e, n, t) {
    if (!ki(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", i = ga;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = va(n, null, e, 1, t ?? null, l, !1, o, i), e[wn] = n.current, bt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, De.render = function(e, n, t) {
    if (!Cl(n)) throw Error(m(200));
    return Nl(null, e, n, !1, t);
  }, De.unmountComponentAtNode = function(e) {
    if (!Cl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Nl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, De.unstable_batchedUpdates = di, De.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Cl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Nl(e, n, t, !1, r);
  }, De.version = "18.3.1-next-f1338f8080-20240426", De;
}
function La() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(La);
    } catch (R) {
      console.error(R);
    }
}
La(), Ta.exports = Of();
var Mf = Ta.exports, Na = Mf;
Ci.createRoot = Na.createRoot, Ci.hydrateRoot = Na.hydrateRoot;
const Df = ':host{--font-primary: "Roboto", sans-serif;--color-primary: #f44336}.subscription{text-align:center;padding:10px;max-width:400px;border-radius:6px;background-color:#fff;box-shadow:0 10px 15px -3px #0000001a;font-family:Roboto,sans-serif}.subscription__title{font-family:var(--external-font-primary, var(--font-primary));color:var(--external-color-primary, var(--color-primary))}.subscription__greeting{font-size:20px;margin:0 0 20px}.subscription__input{box-sizing:border-box;width:100%;padding:10px;border:1px solid #ccc;border-radius:6px;margin-bottom:10px}.subscription__mentions{font-size:14px;color:#666}', Ff = ({
  username: R,
  shouldDisplayMentions: A
}) => /* @__PURE__ */ vn.jsxs(vn.Fragment, { children: [
  /* @__PURE__ */ vn.jsx("style", { children: Df }),
  /* @__PURE__ */ vn.jsxs("div", { className: "subscription", children: [
    /* @__PURE__ */ vn.jsx("h2", { className: "subscription__title", children: "Subscription" }),
    /* @__PURE__ */ vn.jsxs("p", { className: "subscription__greeting", children: [
      "Hello ",
      R,
      "!"
    ] }),
    /* @__PURE__ */ vn.jsx("label", { htmlFor: "email", children: /* @__PURE__ */ vn.jsx(
      "input",
      {
        id: "email",
        type: "email",
        className: "subscription__input",
        placeholder: "Enter your email"
      }
    ) }),
    A && /* @__PURE__ */ vn.jsx("p", { className: "subscription__mentions", children: "My mention should be display here..." })
  ] })
] }), If = (R) => R.replace(/-([a-z])/g, (A, m) => m.toUpperCase());
class jf extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const A = this.getPropsFromAttributes();
    Ci.createRoot(this.shadowRoot).render(/* @__PURE__ */ vn.jsx(Ff, { ...A }));
  }
  getPropsFromAttributes() {
    const A = {};
    for (let m = 0; m < this.attributes.length; m++) {
      const xe = this.attributes[m];
      A[If(xe.name)] = xe.value;
    }
    return A;
  }
}
customElements.define("my-subscription", jf);

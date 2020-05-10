function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-gems-calculator-container></app-gems-calculator-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gems-calculator-container/gems-calculator-container.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gems-calculator-container/gems-calculator-container.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGemsCalculatorContainerGemsCalculatorContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <mat-card class=\"container\" mat-elevation-z8>\n\n    <mat-card-header>\n      <div mat-card-avatar class=\"header-icon\">\n        <mat-icon>flare_outline</mat-icon>\n      </div>\n      <mat-card-title>Gem Fusion Calculator <mat-icon class=\"info\"\n          matTooltip=\"Help you to calculate how many lv.5 gem and fusion are needed and how much (diamonds) will cost you\">\n          info_outline</mat-icon>\n      </mat-card-title>\n      <mat-card-subtitle>A Simple Utility Tool for Dragan Raja</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n      <!-- Block 1 -->\n      <span class=\"level-description\">1. Lv. of gem you need to combine</span>\n      <div class=\"gem-selection-container\">\n        <div class=\"target-selection-container\">\n          <img [src]=\"getGemImage(currentLevel)\">\n          <div class=\"combine-lv-selector\">\n            <button mat-button (click)=\"leveldown('current')\" [disabled]=\"currentLevel === 1\">\n              <mat-icon>arrow_left</mat-icon>\n            </button>\n            <span>Lv.{{currentLevel}}</span>\n            <button mat-button (click)=\"levelup('current')\" [disabled]=\"currentLevel === 16\">\n              <mat-icon>arrow_right</mat-icon>\n            </button>\n          </div>\n          <span class=\"level-description\">Current Gem Lv.<br>(min. lv: 1, max. lv:16)</span>\n        </div>\n        <mat-icon class=\"arrow\">arrow_forward</mat-icon>\n        <div class=\"target-selection-container\">\n          <img [src]=\"getGemImage(combineLevel)\">\n          <div class=\"combine-lv-selector\">\n            <button mat-button (click)=\"leveldown('target')\" [disabled]=\"combineLevel === 5\">\n              <mat-icon>arrow_left</mat-icon>\n            </button>\n            <span>Lv.{{combineLevel}}</span>\n            <button mat-button (click)=\"levelup('target')\" [disabled]=\"currentLevel === 17\">\n              <mat-icon>arrow_right</mat-icon>\n            </button>\n          </div>\n          <span class=\"level-description\">Target Upgrade Lv.<br>(min. lv: 5, max. lv:17)</span>\n        </div>\n      </div>\n      <!-- Block 2 -->\n      <span class=\"level-description\">\n        <hr>2. Material owned in your inventory</span>\n\n      <div class=\"materials\">\n        <div *ngIf=\"materials.length === 0 && fusionOwned === 0\" style=\"margin-left: 1rem;color:lightgray\">(No material owned)</div>\n        <div *ngFor=\"let m of materials\">\n          <div class=\"gem\">\n            <span class=\"close\" (click)=\"removeMaterial(m)\">&times;</span>\n            <img [src]=\"getGemImage(m.level)\">\n            <div class=\"gem-description\">\n              <span>{{'Lv.' + m.level}} x </span>\n              <input matInput [value]=\"m.amount\" class=\"number-of-gems\" (input)=\"gemAmountChange($event.data,m)\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"fusion\" *ngIf=\"fusionOwned > 0\">\n          <span class=\"fclose\" (click)=\"removeFusion()\">&times;</span>\n          <img src=\"../../../assets/fusion_essence.JPG\">\n          <div class=\"gem-description\">\n            <span>{{'Fusion x ' + fusionOwned}}</span>\n          </div>\n        </div>\n      </div>\n\n      <mat-form-field style=\"margin-left: 1rem;\">\n        <mat-label style=\"color:white\">Add Owned Gem(s)</mat-label>\n        <mat-select (selectionChange)=\"selectedLevel($event.value)\" [(value)]=\"selectedGem\">\n          <mat-option *ngFor=\" let i of gemLevelOptions\" [value]=\"i\">\n            {{'Lv.' + i}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-mini-fab (click)=\"addMaterial()\" class=\"add\">+</button>\n\n      <mat-form-field style=\"margin-left: 1rem;\">\n        <mat-label style=\"color:white\">Add Owned Fusion(s)</mat-label>\n        <mat-select (selectionChange)=\"selectedFusionAmount($event.value)\" [(value)]=\"selectedFusion\">\n          <mat-option *ngFor=\"let f of counter(255); let i = index\" [value]=\"i+1\">\n            {{i+1}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-mini-fab (click)=\"addFusion()\" class=\"add\">+</button>\n\n      <!-- Result -->\n      <div class=\"result\" *ngIf=\"calculated\">\n        <span>\n          <hr>Result </span>\n        <div class=\"sub-header\">\n          <span class='level-description'>Material needed:</span>\n          <span class='level-description'>Total Diamonds Cost:</span>\n        </div>\n\n        <div class=\"result-content\">\n          <div class=\"result-items\">\n            <div *ngIf=\"result.gem > 1\" class=\"item\">\n              <img [src]=\"getGemImage(5)\">\n              <div class=\"item-description\">\n                <span>Lv5 x {{result.gem}}</span>\n              </div>\n            </div>\n            <div *ngIf=\"result.gem < 1\" class=\"item\">\n              <img [src]=\"getGemImage(1)\">\n              <div class=\"item-description\">\n                <span>Lv1 x {{result.gem * 16}}</span>\n              </div>\n            </div>\n            <div class=\"item\">\n              <img src=\"../../../assets/fusion_essence.JPG\">\n              <div class=\"item-description\">\n                <span>fusion x {{result.fusion}}</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"result-items\">\n            <div class=\"item\">\n              <img src=\"../../../assets/diamond.JPG\">\n              <div class=\"item-description\">\n                <span>{{result.diamond}}</span>\n              </div>\n              <mat-radio-group aria-label=\"count gems/fusion seperately\" [(ngModel)]=\"filterSelection\"\n              (change)=\"radioChange($event.value)\">\n                <mat-radio-button value=\"0\">All</mat-radio-button>\n                <mat-radio-button value=\"1\">Gems Only</mat-radio-button>\n                <mat-radio-button value=\"2\">Fusions Only</mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-flat-button class=\"reset\" (click)=\"reset()\">Reset</button>\n      <button mat-flat-button class=\"calculate\" (click)=\"calculate()\">Calculate</button>\n    </mat-card-actions>\n  </mat-card>\n  <span style=\"margin-top:0.5rem;color:lightgray;font-size: 0.8rem; \">Created by LadidaX @ S24 Dawn, Dragon Raja</span>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'gem-calculator';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_gems_calculator_container_gems_calculator_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/gems-calculator-container/gems-calculator-container.component */
    "./src/app/components/gems-calculator-container/gems-calculator-container.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_gems_calculator_container_gems_calculator_container_component__WEBPACK_IMPORTED_MODULE_5__["GemsCalculatorContainerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/gems-calculator-container/gems-calculator-container.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/gems-calculator-container/gems-calculator-container.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGemsCalculatorContainerGemsCalculatorContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n  background-color: #19232f;\n}\n.wrapper .container {\n  margin-top: 20px;\n  background-image: linear-gradient(to right, rgba(87, 118, 154, 0.5), #48627f, #293b53);\n  color: white;\n}\n.wrapper .container .header-icon {\n  color: #00ffd9;\n}\n.wrapper .container .info {\n  vertical-align: sub;\n  color: burlywood;\n}\n.wrapper .container mat-card-subtitle {\n  color: lightgray;\n}\n.wrapper .container .gem-selection-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper .container .gem-selection-container .arrow {\n  margin-top: -4rem;\n  color: blanchedalmond;\n  text-shadow: 1px 1px black;\n}\n.wrapper .container .gem-selection-container .target-selection-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 0.5rem;\n}\n.wrapper .container .gem-selection-container .target-selection-container img {\n  width: 4rem;\n  height: 4rem;\n}\n.wrapper .container .gem-selection-container .target-selection-container .combine-lv-selector {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.5rem;\n}\n.wrapper .container .gem-selection-container .target-selection-container .combine-lv-selector button {\n  min-width: 10px;\n  width: 20px;\n  height: 30px;\n  margin: 0 0.2rem 0 0.2rem;\n}\n.wrapper .container .gem-selection-container .target-selection-container .combine-lv-selector span {\n  font-size: 0.9rem;\n  padding: 3px;\n}\n.wrapper .container .gem-selection-container .target-selection-container .combine-lv-selector mat-icon {\n  vertical-align: sub;\n  text-align: left;\n  width: 20px !important;\n  margin-left: -12px;\n}\n.wrapper .container .gem-selection-container .target-selection-container .level-description {\n  margin-top: 0.5rem;\n  color: lightblue;\n  font-size: 0.8rem;\n  text-align: center;\n}\n.wrapper .container .materials {\n  display: flex;\n  flex-direction: row;\n  margin: 0.5rem 0 0.5rem 0;\n  flex-wrap: wrap;\n  max-width: 400px;\n}\n.wrapper .container .materials .gem, .wrapper .container .materials .fusion {\n  display: flex;\n  flex-direction: column;\n  margin-left: 1rem;\n  position: relative;\n}\n.wrapper .container .materials .gem img, .wrapper .container .materials .fusion img {\n  width: 4rem;\n  height: 4rem;\n}\n.wrapper .container .materials .gem .close, .wrapper .container .materials .fusion .close {\n  cursor: pointer;\n  color: white;\n  z-index: 100;\n  position: absolute;\n  right: 0.8rem;\n}\n.wrapper .container .materials .gem .fclose, .wrapper .container .materials .fusion .fclose {\n  cursor: pointer;\n  color: white;\n  z-index: 100;\n  position: absolute;\n  right: 0.4rem;\n}\n.wrapper .container .materials .gem .gem-description, .wrapper .container .materials .fusion .gem-description {\n  margin-top: 0.5rem;\n}\n.wrapper .container .materials .gem .gem-description .number-of-gems, .wrapper .container .materials .fusion .gem-description .number-of-gems {\n  border-bottom: 1px solid black;\n  max-width: 2rem;\n  vertical-align: baseline;\n  text-align: center;\n}\n.wrapper .container .add {\n  margin-left: 1rem;\n  background: #26758a;\n  color: white;\n}\n.wrapper .container .result .sub-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 90%;\n  margin-top: 0.5rem;\n}\n.wrapper .container .result .level-description {\n  color: lightblue;\n  font-size: 0.8rem;\n  text-align: center;\n}\n.wrapper .container .result .result-content {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.3rem;\n  max-width: 450px;\n  justify-content: space-between;\n}\n.wrapper .container .result .result-content .result-items {\n  display: flex;\n  flex-direction: row;\n  width: 120px;\n  justify-content: space-around;\n}\n.wrapper .container .result .result-content .result-items img {\n  width: 3rem;\n  height: 3rem;\n}\n.wrapper .container .result .result-content .result-items .item-description {\n  text-align: left;\n  font-size: 0.8rem;\n}\n.wrapper .container .result .result-content .result-items mat-radio-group {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50px;\n  justify-content: space-between;\n}\n.wrapper .container mat-card-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 0.3rem;\n}\n.wrapper .container mat-card-actions button {\n  color: white;\n  border-radius: 2px;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n.wrapper .container mat-card-actions .reset {\n  background: #c1593f;\n}\n.wrapper .container mat-card-actions .calculate {\n  background: #28ac92;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW1zLWNhbGN1bGF0b3ItY29udGFpbmVyL0M6XFxwZXJzb25hbFxcQW5ndWxhclxcZ2VtLWNhbGN1bGF0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdlbXMtY2FsY3VsYXRvci1jb250YWluZXJcXGdlbXMtY2FsY3VsYXRvci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2Vtcy1jYWxjdWxhdG9yLWNvbnRhaW5lci9nZW1zLWNhbGN1bGF0b3ItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQVFBLHNGQUFBO0VBQ0EsWUFBQTtBQ0xSO0FESFE7RUFDSSxjQUFBO0FDS1o7QURIUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNLWjtBRERRO0VBQ0ksZ0JBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0daO0FERlk7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNJaEI7QURGWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0loQjtBREhnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDS3BCO0FESGdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNLcEI7QURKb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ014QjtBREpvQjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ014QjtBREpvQjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTXhCO0FESGdCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNLcEI7QURBUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVo7QUREWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHaEI7QURGZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lwQjtBREZnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0lwQjtBREZnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0lwQjtBREZnQjtFQUNJLGtCQUFBO0FDSXBCO0FESG9CO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0t4QjtBREVRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBWjtBRElZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGaEI7QURJWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDRmhCO0FER2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDRHBCO0FERW9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBeEI7QURFb0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQXhCO0FERW9CO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNBeEI7QURRUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTlo7QURPWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMaEI7QURPWTtFQUNJLG1CQUFBO0FDTGhCO0FET1k7RUFDSSxtQkFBQTtBQ0xoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2Vtcy1jYWxjdWxhdG9yLWNvbnRhaW5lci9nZW1zLWNhbGN1bGF0b3ItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyMzJmO1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAuaGVhZGVyLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDAsIDI1NSwgMjE3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgICAgICAgICBjb2xvcjogYnVybHl3b29kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoODcsIDExOCwgMTU0LCAwLjUpLCAjNDg2MjdmLCAjMjkzYjUzKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2VtLXNlbGVjdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLmFycm93IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhcmdldC1zZWxlY3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tYmluZS1sdi1zZWxlY3RvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjJyZW0gMCAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGV2ZWwtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdGVyaWFscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgLmdlbSwgLmZ1c2lvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MC44cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZjbG9zZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MC40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLm51bWJlci1vZi1nZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmFkZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjY3NThhO1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXN1bHQge1xyXG4gICAgICAgICAgICAuc3ViLWhlYWRlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlc3VsdC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgLnJlc3VsdC1pdGVtc3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLml0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXJhZGlvLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVzZXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE5MywgODksIDYzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FsY3VsYXRlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOGFjOTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyMzJmO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg4NywgMTE4LCAxNTQsIDAuNSksICM0ODYyN2YsICMyOTNiNTMpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5oZWFkZXItaWNvbiB7XG4gIGNvbG9yOiAjMDBmZmQ5O1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuaW5mbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIGNvbG9yOiBidXJseXdvb2Q7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmdlbS1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5nZW0tc2VsZWN0aW9uLWNvbnRhaW5lciAuYXJyb3cge1xuICBtYXJnaW4tdG9wOiAtNHJlbTtcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmdlbS1zZWxlY3Rpb24tY29udGFpbmVyIC50YXJnZXQtc2VsZWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5nZW0tc2VsZWN0aW9uLWNvbnRhaW5lciAudGFyZ2V0LXNlbGVjdGlvbi1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmdlbS1zZWxlY3Rpb24tY29udGFpbmVyIC50YXJnZXQtc2VsZWN0aW9uLWNvbnRhaW5lciAuY29tYmluZS1sdi1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmdlbS1zZWxlY3Rpb24tY29udGFpbmVyIC50YXJnZXQtc2VsZWN0aW9uLWNvbnRhaW5lciAuY29tYmluZS1sdi1zZWxlY3RvciBidXR0b24ge1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMCAwLjJyZW0gMCAwLjJyZW07XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5nZW0tc2VsZWN0aW9uLWNvbnRhaW5lciAudGFyZ2V0LXNlbGVjdGlvbi1jb250YWluZXIgLmNvbWJpbmUtbHYtc2VsZWN0b3Igc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nOiAzcHg7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5nZW0tc2VsZWN0aW9uLWNvbnRhaW5lciAudGFyZ2V0LXNlbGVjdGlvbi1jb250YWluZXIgLmNvbWJpbmUtbHYtc2VsZWN0b3IgbWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5nZW0tc2VsZWN0aW9uLWNvbnRhaW5lciAudGFyZ2V0LXNlbGVjdGlvbi1jb250YWluZXIgLmxldmVsLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBjb2xvcjogbGlnaHRibHVlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAubWF0ZXJpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAubWF0ZXJpYWxzIC5nZW0sIC53cmFwcGVyIC5jb250YWluZXIgLm1hdGVyaWFscyAuZnVzaW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm1hdGVyaWFscyAuZ2VtIGltZywgLndyYXBwZXIgLmNvbnRhaW5lciAubWF0ZXJpYWxzIC5mdXNpb24gaW1nIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm1hdGVyaWFscyAuZ2VtIC5jbG9zZSwgLndyYXBwZXIgLmNvbnRhaW5lciAubWF0ZXJpYWxzIC5mdXNpb24gLmNsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC44cmVtO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAubWF0ZXJpYWxzIC5nZW0gLmZjbG9zZSwgLndyYXBwZXIgLmNvbnRhaW5lciAubWF0ZXJpYWxzIC5mdXNpb24gLmZjbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNHJlbTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm1hdGVyaWFscyAuZ2VtIC5nZW0tZGVzY3JpcHRpb24sIC53cmFwcGVyIC5jb250YWluZXIgLm1hdGVyaWFscyAuZnVzaW9uIC5nZW0tZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5tYXRlcmlhbHMgLmdlbSAuZ2VtLWRlc2NyaXB0aW9uIC5udW1iZXItb2YtZ2VtcywgLndyYXBwZXIgLmNvbnRhaW5lciAubWF0ZXJpYWxzIC5mdXNpb24gLmdlbS1kZXNjcmlwdGlvbiAubnVtYmVyLW9mLWdlbXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1heC13aWR0aDogMnJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5hZGQge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgYmFja2dyb3VuZDogIzI2NzU4YTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAucmVzdWx0IC5zdWItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5yZXN1bHQgLmxldmVsLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnJlc3VsdCAucmVzdWx0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnJlc3VsdCAucmVzdWx0LWNvbnRlbnQgLnJlc3VsdC1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5yZXN1bHQgLnJlc3VsdC1jb250ZW50IC5yZXN1bHQtaXRlbXMgaW1nIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnJlc3VsdCAucmVzdWx0LWNvbnRlbnQgLnJlc3VsdC1pdGVtcyAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAucmVzdWx0IC5yZXN1bHQtY29udGVudCAucmVzdWx0LWl0ZW1zIG1hdC1yYWRpby1ncm91cCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud3JhcHBlciAuY29udGFpbmVyIG1hdC1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG59XG4ud3JhcHBlciAuY29udGFpbmVyIG1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgbWF0LWNhcmQtYWN0aW9ucyAucmVzZXQge1xuICBiYWNrZ3JvdW5kOiAjYzE1OTNmO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciBtYXQtY2FyZC1hY3Rpb25zIC5jYWxjdWxhdGUge1xuICBiYWNrZ3JvdW5kOiAjMjhhYzkyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/gems-calculator-container/gems-calculator-container.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/gems-calculator-container/gems-calculator-container.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: GemsCalculatorContainerComponent */

  /***/
  function srcAppComponentsGemsCalculatorContainerGemsCalculatorContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GemsCalculatorContainerComponent", function () {
      return GemsCalculatorContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GemsCalculatorContainerComponent = /*#__PURE__*/function () {
      function GemsCalculatorContainerComponent() {
        _classCallCheck(this, GemsCalculatorContainerComponent);

        this.currentLevel = 1;
        this.combineLevel = 5;
        this.materials = [];
        this.fusionOwned = 0;
        this.selectedGem = undefined;
        this.selectedFusion = undefined;
        this.gemLevelOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.result = {
          gem: 0,
          fusion: 0,
          diamond: 0
        };
        this.calculated = false;
        this.filterSelection = '0';
      }

      _createClass(GemsCalculatorContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getGemImage",
        value: function getGemImage(level) {
          switch (level) {
            case 1:
            case 2:
              return '../../../assets/fire_1-2.JPG';

            case 3:
            case 4:
              return '../../../assets/fire_3-4.JPG';

            case 5:
            case 6:
            case 7:
              return '../../../assets/fire_5-7.JPG';

            case 8:
            case 9:
            case 10:
            case 11:
              return '../../../assets/fire_8-11.JPG';

            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
              return '../../../assets/fire_12-17.JPG';
          }
        }
      }, {
        key: "levelup",
        value: function levelup(type) {
          if (type === 'current') {
            if (this.currentLevel < 16) {
              this.currentLevel += 1;
            }
          } else {
            if (this.combineLevel < 17) {
              this.combineLevel += 1;
            }
          }
        }
      }, {
        key: "leveldown",
        value: function leveldown(type) {
          if (type === 'current') {
            if (this.currentLevel > 1) {
              this.currentLevel -= 1;
            }
          } else {
            if (this.combineLevel > 5) {
              this.combineLevel -= 1;
            }
          }
        }
      }, {
        key: "selectedLevel",
        value: function selectedLevel(level) {
          this.selectedGem = level;
          console.log(level);
        }
      }, {
        key: "selectedFusionAmount",
        value: function selectedFusionAmount(n) {
          this.selectedFusion = n;
        }
      }, {
        key: "counter",
        value: function counter(i) {
          return new Array(i);
        }
      }, {
        key: "addMaterial",
        value: function addMaterial() {
          var _this = this;

          if (this.selectedGem !== undefined) {
            this.materials.push({
              level: this.selectedGem,
              amount: 1
            });
            this.gemLevelOptions = this.gemLevelOptions.filter(function (option) {
              return !_this.materials.map(function (material) {
                return material.level;
              }).some(function (level) {
                return option === level;
              });
            });
            this.selectedGem = undefined;
          }
        }
      }, {
        key: "gemAmountChange",
        value: function gemAmountChange(amount, m) {
          var found = this.materials.indexOf(m);

          if (found !== -1) {
            this.materials[found].amount = amount;
          }
        }
      }, {
        key: "removeMaterial",
        value: function removeMaterial(m) {
          var found = this.materials.indexOf(m);

          if (found !== -1) {
            this.materials.splice(found, 1);
          }
        }
      }, {
        key: "addFusion",
        value: function addFusion() {
          this.fusionOwned = this.selectedFusion;
        }
      }, {
        key: "removeFusion",
        value: function removeFusion() {
          this.fusionOwned = 0;
        }
      }, {
        key: "calculate",
        value: function calculate() {
          this.calculated = false; //set result gem,fusion,diamond

          this.result.gem = (Math.pow(2, this.combineLevel - 1) - this.currentTotalGems() - Math.pow(2, this.currentLevel - 1)) / 16;
          console.log('gem', Math.pow(2, this.combineLevel - 1), this.result.gem);
          this.result.fusion = this.combineLevel > 10 ? Math.pow(2, this.combineLevel - 9) - Math.pow(2, this.currentLevel - 9) - this.fusionOwned : this.combineLevel === 10 ? 1 : 0;
          this.result.diamond = this.result.gem * 48 + this.result.fusion * 247;
          this.calculated = true;
        }
      }, {
        key: "currentTotalGems",
        value: function currentTotalGems() {
          var total = 0;
          this.materials.forEach(function (gem) {
            total += Math.pow(2, gem.level - 1) * gem.amount;
            console.log(gem.amount);
          });
          console.log(total);
          return total;
        }
      }, {
        key: "radioChange",
        value: function radioChange(option) {
          this.calculated = false;
          console.log(option);

          switch (+option) {
            case 0:
              this.result.diamond = this.result.gem * 48 + this.result.fusion * 247;
              console.log('all', this.result.diamond);
              break;

            case 1:
              this.result.diamond = this.result.gem * 48;
              console.log('gem', this.result.diamond);
              break;

            case 2:
              this.result.diamond = this.result.fusion * 247;
              console.log('fusion', this.result.diamond);
              break;
          }

          console.log('diamond', this.result.diamond);
          this.calculated = true;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.currentLevel = 1;
          this.combineLevel = 5;
          this.selectedGem = undefined;
          this.selectedFusion = undefined;
          this.gemLevelOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
          this.materials = [];
          this.fusionOwned = 0;
          this.result = {
            gem: 0,
            fusion: 0,
            diamond: 0
          };
          this.calculated = false;
        }
      }]);

      return GemsCalculatorContainerComponent;
    }();

    GemsCalculatorContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gems-calculator-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gems-calculator-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gems-calculator-container/gems-calculator-container.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gems-calculator-container.component.scss */
      "./src/app/components/gems-calculator-container/gems-calculator-container.component.scss"))["default"]]
    })], GemsCalculatorContainerComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\personal\Angular\gem-calculator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared-module/current-employees/current-employees.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared-module/current-employees/current-employees.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CurrentEmployeesComponent */

  /***/
  function srcAppSharedModuleCurrentEmployeesCurrentEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentEmployeesComponent", function () {
      return CurrentEmployeesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CurrentEmployeesComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r1, " ");
      }
    }

    var CurrentEmployeesComponent = function CurrentEmployeesComponent() {
      _classCallCheck(this, CurrentEmployeesComponent);

      this.employeeList = [];
    };

    CurrentEmployeesComponent.ɵfac = function CurrentEmployeesComponent_Factory(t) {
      return new (t || CurrentEmployeesComponent)();
    };

    CurrentEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrentEmployeesComponent,
      selectors: [["current-employees"]],
      inputs: {
        employeeList: "employeeList"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"]],
      template: function CurrentEmployeesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentEmployeesComponent_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeeList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentEmployeesComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'current-employees',
        templateUrl: './current-employees.component.html'
      }]
    }], null, {
      employeeList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/current-positions/current-positions.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared-module/current-positions/current-positions.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CurrentPositionsComponent */

  /***/
  function srcAppSharedModuleCurrentPositionsCurrentPositionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentPositionsComponent", function () {
      return CurrentPositionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CurrentPositionsComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var position_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r3, " ");
      }
    }

    var CurrentPositionsComponent = function CurrentPositionsComponent() {
      _classCallCheck(this, CurrentPositionsComponent);

      this.positionList = [];
    };

    CurrentPositionsComponent.ɵfac = function CurrentPositionsComponent_Factory(t) {
      return new (t || CurrentPositionsComponent)();
    };

    CurrentPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrentPositionsComponent,
      selectors: [["current-positions"]],
      inputs: {
        positionList: "positionList"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"]],
      template: function CurrentPositionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentPositionsComponent_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positionList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentPositionsComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'current-positions',
        templateUrl: './current-positions.component.html'
      }]
    }], null, {
      positionList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/new-employees/new-employees.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared-module/new-employees/new-employees.component.ts ***!
    \************************************************************************/

  /*! exports provided: NewEmployeesComponent */

  /***/
  function srcAppSharedModuleNewEmployeesNewEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewEmployeesComponent", function () {
      return NewEmployeesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewEmployeesComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewEmployeesComponent_li_1_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var employee_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.ack(employee_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acknowledge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r5, " ");
      }
    }

    var NewEmployeesComponent =
    /*#__PURE__*/
    function () {
      function NewEmployeesComponent() {
        _classCallCheck(this, NewEmployeesComponent);

        this.newEmpList = [];
        this.ackEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NewEmployeesComponent, [{
        key: "ack",
        value: function ack(employee) {
          this.ackEmployee.emit(employee);
        }
      }]);

      return NewEmployeesComponent;
    }();

    NewEmployeesComponent.ɵfac = function NewEmployeesComponent_Factory(t) {
      return new (t || NewEmployeesComponent)();
    };

    NewEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewEmployeesComponent,
      selectors: [["new-employees"]],
      inputs: {
        newEmpList: "newEmpList"
      },
      outputs: {
        ackEmployee: "ackEmployee"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"], [1, "btn", 3, "click"]],
      template: function NewEmployeesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewEmployeesComponent_li_1_Template, 4, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newEmpList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEmployeesComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'new-employees',
        templateUrl: './new-employees.component.html'
      }]
    }], null, {
      newEmpList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ackEmployee: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/new-positions/new-positions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared-module/new-positions/new-positions.component.ts ***!
    \************************************************************************/

  /*! exports provided: NewPositionsComponent */

  /***/
  function srcAppSharedModuleNewPositionsNewPositionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPositionsComponent", function () {
      return NewPositionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewPositionsComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPositionsComponent_li_1_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var position_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.ack(position_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acknowledge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var position_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r9, " ");
      }
    }

    var NewPositionsComponent =
    /*#__PURE__*/
    function () {
      function NewPositionsComponent() {
        _classCallCheck(this, NewPositionsComponent);

        this.newPosList = [];
        this.ackPositions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NewPositionsComponent, [{
        key: "ack",
        value: function ack(position) {
          this.ackPositions.emit(position);
        }
      }]);

      return NewPositionsComponent;
    }();

    NewPositionsComponent.ɵfac = function NewPositionsComponent_Factory(t) {
      return new (t || NewPositionsComponent)();
    };

    NewPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewPositionsComponent,
      selectors: [["new-positions"]],
      inputs: {
        newPosList: "newPosList"
      },
      outputs: {
        ackPositions: "ackPositions"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"], [1, "btn", 3, "click"]],
      template: function NewPositionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPositionsComponent_li_1_Template, 4, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newPosList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPositionsComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'new-positions',
        templateUrl: './new-positions.component.html'
      }]
    }], null, {
      newPosList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ackPositions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/shared-module/shared.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared-module/shared.module.ts ***!
    \************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./current-employees/current-employees.component */
    "./src/app/shared-module/current-employees/current-employees.component.ts");
    /* harmony import */


    var _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./current-positions/current-positions.component */
    "./src/app/shared-module/current-positions/current-positions.component.ts");
    /* harmony import */


    var _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./new-employees/new-employees.component */
    "./src/app/shared-module/new-employees/new-employees.component.ts");
    /* harmony import */


    var _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-positions/new-positions.component */
    "./src/app/shared-module/new-positions/new-positions.component.ts");

    var components = [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"], _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"], _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
      declarations: [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"], _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"], _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
      exports: [_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_2__["CurrentEmployeesComponent"], _current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_3__["CurrentPositionsComponent"], _new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_4__["NewEmployeesComponent"], _new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_5__["NewPositionsComponent"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        declarations: components,
        exports: components
      }]
    }], null, null);
    /***/

  }
}]); //# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
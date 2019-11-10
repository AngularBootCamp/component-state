(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["do-do-module"],{

/***/ "./src/app/do/do.component.ts":
/*!************************************!*\
  !*** ./src/app/do/do.component.ts ***!
  \************************************/
/*! exports provided: DoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoComponent", function() { return DoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/do/employee-list/employee-list.component.ts");
/* harmony import */ var _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position-list/position-list.component */ "./src/app/do/position-list/position-list.component.ts");




class DoComponent {
}
DoComponent.ɵfac = function DoComponent_Factory(t) { return new (t || DoComponent)(); };
DoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoComponent, selectors: [["do-example"]], decls: 3, vars: 0, consts: [[1, "two-across"]], template: function DoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "employee-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "position-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"], _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_2__["PositionListComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'do-example',
                templateUrl: './do.component.html'
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/do/do.module.ts":
/*!*********************************!*\
  !*** ./src/app/do/do.module.ts ***!
  \*********************************/
/*! exports provided: DoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoModule", function() { return DoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _do_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./do.component */ "./src/app/do/do.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/do/employee-list/employee-list.component.ts");
/* harmony import */ var _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./position-list/position-list.component */ "./src/app/do/position-list/position-list.component.ts");









const doRoutes = [{ path: '', component: _do_component__WEBPACK_IMPORTED_MODULE_4__["DoComponent"] }];
class DoModule {
}
DoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DoModule });
DoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DoModule_Factory(t) { return new (t || DoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(doRoutes),
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DoModule, { declarations: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
        _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__["PositionListComponent"],
        _do_component__WEBPACK_IMPORTED_MODULE_4__["DoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
                    _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__["PositionListComponent"],
                    _do_component__WEBPACK_IMPORTED_MODULE_4__["DoComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(doRoutes),
                    _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/do/employee-list/employee-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/do/employee-list/employee-list.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-module/current-employees/current-employees.component */ "./src/app/shared-module/current-employees/current-employees.component.ts");
/* harmony import */ var _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-module/new-employees/new-employees.component */ "./src/app/shared-module/new-employees/new-employees.component.ts");




class EmployeeListComponent {
    constructor() {
        this.currentEmployees = [
            'Alice Anderson',
            'Billy Burton',
            'Carol Carson',
            'David Dennison'
        ];
        this.newEmployees = ['Erin Ericcson', 'Frank Ferdinand'];
    }
    ackEmployee(employee) {
        this.newEmployees = this.newEmployees.filter(curEmployee => curEmployee !== employee);
        this.currentEmployees.push(employee);
    }
}
EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(); };
EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeListComponent, selectors: [["employee-list"]], decls: 10, vars: 2, consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "employeeList"], [3, "newEmpList", "ackEmployee"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "current-employees", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "new-employees", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackEmployee", function EmployeeListComponent_Template_new_employees_ackEmployee_9_listener($event) { return ctx.ackEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employeeList", ctx.currentEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newEmpList", ctx.newEmployees);
    } }, directives: [_shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_1__["CurrentEmployeesComponent"], _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_2__["NewEmployeesComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'employee-list',
                templateUrl: './employee-list.component.html'
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/do/position-list/position-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/do/position-list/position-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PositionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListComponent", function() { return PositionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-module/current-positions/current-positions.component */ "./src/app/shared-module/current-positions/current-positions.component.ts");
/* harmony import */ var _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-module/new-positions/new-positions.component */ "./src/app/shared-module/new-positions/new-positions.component.ts");




class PositionListComponent {
    constructor() {
        this.currentPositions = [
            'Copier',
            'Secretary to Customer Design Spec Engineer',
            'Tester',
            'Phone Bank Worker'
        ];
        this.newPositions = ['Manager', 'Break Room Attendant'];
    }
    ackPosition(position) {
        this.newPositions = this.newPositions.filter(curPosition => curPosition !== position);
        this.currentPositions.push(position);
    }
}
PositionListComponent.ɵfac = function PositionListComponent_Factory(t) { return new (t || PositionListComponent)(); };
PositionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PositionListComponent, selectors: [["position-list"]], decls: 10, vars: 2, consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "positionList"], [3, "newPosList", "ackPositions"]], template: function PositionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "current-positions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "new-positions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackPositions", function PositionListComponent_Template_new_positions_ackPositions_9_listener($event) { return ctx.ackPosition($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("positionList", ctx.currentPositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPosList", ctx.newPositions);
    } }, directives: [_shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_1__["CurrentPositionsComponent"], _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_2__["NewPositionsComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'position-list',
                templateUrl: './position-list.component.html'
            }]
    }], null, null);


/***/ })

}]);
//# sourceMappingURL=do-do-module-es2015.js.map
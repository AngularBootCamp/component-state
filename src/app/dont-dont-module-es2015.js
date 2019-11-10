(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dont-dont-module"],{

/***/ "./src/app/dont/dont.component.ts":
/*!****************************************!*\
  !*** ./src/app/dont/dont.component.ts ***!
  \****************************************/
/*! exports provided: DontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DontComponent", function() { return DontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/dont/employee-list/employee-list.component.ts");
/* harmony import */ var _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position-list/position-list.component */ "./src/app/dont/position-list/position-list.component.ts");




/*
  Notice the bloat this top level component has taken on. It needs
  to "own" the data in order to make the appropriate modifications.
  Problems: file size/scope, mixing of concerns, all other problems
  associated with monoliths.
*/
class DontComponent {
    constructor() {
        this.currentEmployees = [
            'Alice Anderson',
            'Billy Burton',
            'Carol Carson',
            'David Dennison'
        ];
        this.newEmployees = ['Erin Ericcson', 'Frank Ferdinand'];
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
    ackEmployee(employee) {
        this.newEmployees = this.newEmployees.filter(curEmployee => curEmployee !== employee);
        this.currentEmployees.push(employee);
    }
    ackAll() {
        this.newPositions.forEach(pos => this.currentPositions.push(pos));
        this.newPositions = [];
        this.newEmployees.forEach(emp => this.currentEmployees.push(emp));
        this.newEmployees = [];
    }
}
DontComponent.ɵfac = function DontComponent_Factory(t) { return new (t || DontComponent)(); };
DontComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DontComponent, selectors: [["dont-example"]], decls: 5, vars: 4, consts: [[1, "two-across"], [3, "curEmployees", "newEmployees", "ackEmployee"], [3, "curPositions", "newPositions", "ackPosition"], [1, "btn", 3, "click"]], template: function DontComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "employee-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackEmployee", function DontComponent_Template_employee_list_ackEmployee_1_listener($event) { return ctx.ackEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "position-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackPosition", function DontComponent_Template_position_list_ackPosition_2_listener($event) { return ctx.ackPosition($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DontComponent_Template_button_click_3_listener($event) { return ctx.ackAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Acknowledge All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("curEmployees", ctx.currentEmployees)("newEmployees", ctx.newEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("curPositions", ctx.currentPositions)("newPositions", ctx.newPositions);
    } }, directives: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"], _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_2__["PositionListComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DontComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dont-example',
                templateUrl: './dont.component.html'
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/dont/dont.module.ts":
/*!*************************************!*\
  !*** ./src/app/dont/dont.module.ts ***!
  \*************************************/
/*! exports provided: DontModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DontModule", function() { return DontModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _dont_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dont.component */ "./src/app/dont/dont.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/dont/employee-list/employee-list.component.ts");
/* harmony import */ var _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./position-list/position-list.component */ "./src/app/dont/position-list/position-list.component.ts");









const dontRoutes = [{ path: '', component: _dont_component__WEBPACK_IMPORTED_MODULE_4__["DontComponent"] }];
class DontModule {
}
DontModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DontModule });
DontModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DontModule_Factory(t) { return new (t || DontModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dontRoutes),
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DontModule, { declarations: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
        _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__["PositionListComponent"],
        _dont_component__WEBPACK_IMPORTED_MODULE_4__["DontComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DontModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
                    _position_list_position_list_component__WEBPACK_IMPORTED_MODULE_6__["PositionListComponent"],
                    _dont_component__WEBPACK_IMPORTED_MODULE_4__["DontComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dontRoutes),
                    _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/dont/employee-list/employee-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dont/employee-list/employee-list.component.ts ***!
  \***************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-module/current-employees/current-employees.component */ "./src/app/shared-module/current-employees/current-employees.component.ts");
/* harmony import */ var _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-module/new-employees/new-employees.component */ "./src/app/shared-module/new-employees/new-employees.component.ts");




/*

  Notice that the component becomes a pass through...
  Q: So why not just remove the component?
  A: Why use multiple components at all?

*/
class EmployeeListComponent {
    constructor() {
        this.curEmployees = [];
        this.newEmployees = [];
        this.ackEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ackEmp(employee) {
        this.ackEmployee.emit(employee);
    }
}
EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(); };
EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeListComponent, selectors: [["employee-list"]], inputs: { curEmployees: "curEmployees", newEmployees: "newEmployees" }, outputs: { ackEmployee: "ackEmployee" }, decls: 10, vars: 2, consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "employeeList"], [3, "newEmpList", "ackEmployee"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackEmployee", function EmployeeListComponent_Template_new_employees_ackEmployee_9_listener($event) { return ctx.ackEmp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employeeList", ctx.curEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newEmpList", ctx.newEmployees);
    } }, directives: [_shared_module_current_employees_current_employees_component__WEBPACK_IMPORTED_MODULE_1__["CurrentEmployeesComponent"], _shared_module_new_employees_new_employees_component__WEBPACK_IMPORTED_MODULE_2__["NewEmployeesComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'employee-list',
                templateUrl: './employee-list.component.html'
            }]
    }], null, { curEmployees: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newEmployees: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ackEmployee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


/***/ }),

/***/ "./src/app/dont/position-list/position-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dont/position-list/position-list.component.ts ***!
  \***************************************************************/
/*! exports provided: PositionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListComponent", function() { return PositionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-module/current-positions/current-positions.component */ "./src/app/shared-module/current-positions/current-positions.component.ts");
/* harmony import */ var _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-module/new-positions/new-positions.component */ "./src/app/shared-module/new-positions/new-positions.component.ts");




/*

  Notice that the component becomes a pass through...
  Q: So why not just remove the component?
  A: Why use multiple components at all?

*/
class PositionListComponent {
    constructor() {
        this.curPositions = [];
        this.newPositions = [];
        this.ackPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ackPos(position) {
        this.ackPosition.emit(position);
    }
}
PositionListComponent.ɵfac = function PositionListComponent_Factory(t) { return new (t || PositionListComponent)(); };
PositionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PositionListComponent, selectors: [["position-list"]], inputs: { curPositions: "curPositions", newPositions: "newPositions" }, outputs: { ackPosition: "ackPosition" }, decls: 10, vars: 2, consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [3, "positionList"], [3, "newPosList", "ackPositions"]], template: function PositionListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ackPositions", function PositionListComponent_Template_new_positions_ackPositions_9_listener($event) { return ctx.ackPos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("positionList", ctx.curPositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPosList", ctx.newPositions);
    } }, directives: [_shared_module_current_positions_current_positions_component__WEBPACK_IMPORTED_MODULE_1__["CurrentPositionsComponent"], _shared_module_new_positions_new_positions_component__WEBPACK_IMPORTED_MODULE_2__["NewPositionsComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'position-list',
                templateUrl: './position-list.component.html'
            }]
    }], null, { curPositions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPositions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ackPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


/***/ })

}]);
//# sourceMappingURL=dont-dont-module-es2015.js.map
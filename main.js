(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/countries/countries.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'countries', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_1__["CountriesComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">COVID-19 Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"countries\">Countries</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'covid19-tracker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/countries/countries.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_13__);














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _countries_countries_component__WEBPACK_IMPORTED_MODULE_11__["CountriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_13__["Ng2OrderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/countries/countries.component.css":
/*!***************************************************!*\
  !*** ./src/app/countries/countries.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding: 2rem 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/countries/countries.component.html":
/*!****************************************************!*\
  !*** ./src/app/countries/countries.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron align-content-center\">\n  <h2 class=\"display-4 text-center\">COVID-19 Tracker Countries Vice</h2>\n  <hr class=\"my-2\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"form-group col-6 mx-auto\">\n        <select id=\"c\" class=\"form-control\" #country (change)=\"onSelectCountry(country.value)\">\n          <option value=\"\"> -- Select Country --</option>\n          <option *ngFor=\"let country of countries\" value=\"{{country}}\">{{ country }}</option>\n        </select>\n\n      </div>\n    </div>\n    <div class=\"col\">\n      <h2 class=\"text-center\">{{selectedCountry}}</h2>\n    </div>\n  </div>\n  <hr class=\"my-2\">\n\n  <div class=\"row\">\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3>Confirmed</h3>\n        </div>\n        <div class=\"value\">\n          {{ confirmed | number}}\n        </div>\n      </div>\n    </div>\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3> Deaths</h3>\n        </div>\n        <div class=\"value\">\n          {{ deaths | number}}\n        </div>\n      </div>\n    </div>\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3>Recovered</h3>\n        </div>\n        <div class=\"value\">\n          {{ recovered | number}}\n        </div>\n      </div>\n    </div>\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3>Active</h3>\n        </div>\n        <div class=\"value\">\n          {{ active | number}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class=\"my-2\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <input class=\"float-left m-2 p-2\" type=\"text\" name=\"stateName\" placeholder=\"Search\" [(ngModel)]=\"stateName\"\n        (ngModelChange)=\"search()\">\n      <pagination-controls class=\"float-right  m-2 p-2\" (pageChange)=\"p=$event\"></pagination-controls>\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th (click)=\"sort('state')\" class=\"w-25\">State&nbsp;<i class=\"fa fa-sort\"></i></th>\n            <th (click)=\"sort('confirmed')\">Confirmed&nbsp;<i class=\"fa fa-sort\"></i></th>\n            <th (click)=\"sort('deaths')\">Deaths&nbsp;<i class=\"fa fa-sort\"></i></th>\n            <th (click)=\"sort('active')\">Active&nbsp;<i class=\"fa fa-sort\"></i></th>\n            <th (click)=\"sort('recovered')\">Recovered&nbsp;<i class=\"fa fa-sort\"></i></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let states of countryWiseState | orderBy: key: reverse |  paginate: {itemsPerPage: 7, currentPage: p}\">\n            <td>{{ states.state }}</td>\n            <td>{{ states.confirmed }}</td>\n            <td>{{ states.deaths }}</td>\n            <td>{{ states.active }}</td>\n            <td>{{ states.recovered }}</td>\n          </tr>\n        </tbody>\n      </table>\n\n\n    </div>\n    <div class=\"col\">\n      <google-chart [data]=\"lineChart\"></google-chart>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/countries/countries.component.ts":
/*!**************************************************!*\
  !*** ./src/app/countries/countries.component.ts ***!
  \**************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(data) {
        this.data = data;
        this.p = 1;
        this.countries = [];
        this.confirmed = 0;
        this.active = 0;
        this.deaths = 0;
        this.recovered = 0;
        this.selectedCountry = "India";
        this.lineChart = {
            chartType: 'LineChart'
        };
        this.key = "state";
        this.reverse = false;
    }
    CountriesComponent.prototype.updateChart = function () {
        var dataTable = [];
        dataTable.push(['Date', 'Cases']);
        this.selectDateWiseData[this.selectedCountry].forEach(function (res) {
            dataTable.push([res.date, res.cases]);
        });
        this.lineChart = {
            chartType: 'LineChart',
            dataTable: dataTable,
            options: {
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
                height: 500
            }
        };
    };
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.data.getGlobalData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.globalData = result;
            result.forEach(function (res) {
                _this.countries.push(res.country);
            });
        })), this.data.getStateWiseDate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.globalDataCountryWise = result;
        })), this.data.getDateWiseData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.selectDateWiseData = result;
        }))).subscribe({
            complete: function () {
                _this.onSelectCountry(_this.selectedCountry);
                _this.updateChart();
            }
        });
    };
    CountriesComponent.prototype.search = function () {
        var _this = this;
        if (this.stateName == '') {
            this.ngOnInit();
        }
        else {
            this.countryWiseState = this.countryWiseState.filter(function (res) {
                return res.state.toLocaleLowerCase().match(_this.stateName.toLocaleLowerCase());
            });
        }
    };
    CountriesComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CountriesComponent.prototype.onSelectCountry = function (country) {
        var _this = this;
        this.selectedCountry = country;
        this.globalData.forEach(function (cs) {
            if (cs.country === _this.selectedCountry) {
                _this.confirmed = cs.confirmed;
                _this.active = cs.active;
                _this.deaths = cs.deaths;
                _this.recovered = cs.recovered;
            }
        });
        this.countryWiseState = this.globalDataCountryWise[country];
        this.updateChart();
    };
    CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/countries/countries.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui.statistic > .value, .ui.statistics .statistic > .value {\r\n    font-size: 2.5rem !important;\r\n}\r\n\r\n.jumbotron {\r\n    padding: 2rem 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS5zdGF0aXN0aWMgPiAudmFsdWUsIC51aS5zdGF0aXN0aWNzIC5zdGF0aXN0aWMgPiAudmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h2 class=\"display-4 text-center\">COVID-19 Worldwide Tracker</h2>\n  <hr class=\"my-2\">\n  <div class=\"row\">\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3>Confirmed</h3>\n        </div>\n        <div class=\"value\">\n          {{ confirmed | number}}\n        </div>\n      </div>\n    </div>\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3> Deaths</h3>\n        </div>\n        <div class=\"value\">\n          {{ deaths | number}}\n        </div>\n      </div>\n    </div>\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3>Recovered</h3>\n        </div>\n        <div class=\"value\">\n          {{ recovered | number}}\n        </div>\n      </div>\n    </div>\n    <div class=\"card col p-3 m-1\">\n      <div class=\"ui statistic\">\n        <div class=\"label\">\n          <h3>Active</h3>\n        </div>\n        <div class=\"value\">\n          {{ active | number}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class=\"my-2\">\n  <div class=\"ui form\">\n    <div class=\"inline fields\">\n      <label for=\"caseType\">Select Case Type:</label>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input type=\"radio\" value=\"confirmed\" id=\"confirmed\" name=\"caseType\" checked=\"\" tabindex=\"0\" class=\"hidden\">\n          <label for=\"confirmed\">Confirmed</label>\n        </div>\n      </div>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input type=\"radio\" value=\"deaths\" id=\"deaths\" name=\"caseType\" tabindex=\"0\" class=\"hidden\">\n          <label for=\"deaths\">Deaths</label>\n        </div>\n      </div>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input type=\"radio\" value=\"active\" id=\"active\" name=\"caseType\" tabindex=\"0\" class=\"hidden\">\n          <label for=\"active\">Active</label>\n        </div>\n      </div>\n      <div class=\"field\">\n        <div class=\"ui radio checkbox\">\n          <input type=\"radio\" value=\"recovered\" id=\"recovered\" name=\"caseType\" tabindex=\"0\" class=\"hidden\">\n          <label for=\"recovered\">Recovered</label>\n        </div>\n      </div>\n    </div>\n\n    <hr class=\"my-4\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <google-chart [data]=\"pieChart\"></google-chart>\n      </div>\n      <div class=\"col\">\n        <google-chart [data]=\"columnChart\"></google-chart>\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.confirmed = 0;
        this.active = 0;
        this.deaths = 0;
        this.recovered = 0;
        this.pieChart = {
            chartType: 'PieChart'
        };
        this.columnChart = {
            chartType: 'ColumnChart'
        };
    }
    HomeComponent.prototype.onSelect = function (event) {
        console.log(event.target.value);
        var selectedValue = event.target.value;
        this.initChart(selectedValue);
    };
    HomeComponent.prototype.initChart = function (selectedValue) {
        var dataTable = [];
        dataTable.push(['country', 'cases']);
        this.globalData.forEach(function (cs) {
            if (selectedValue == 'recovered') {
                if (cs.recovered > 500000) {
                    dataTable.push([
                        cs.country, cs.recovered
                    ]);
                }
            }
            else if (selectedValue == 'deaths') {
                if (cs.deaths > 25000) {
                    dataTable.push([
                        cs.country, cs.deaths
                    ]);
                }
            }
            else if (selectedValue == 'active') {
                if (cs.active > 100000) {
                    dataTable.push([
                        cs.country, cs.active
                    ]);
                }
            }
            else {
                if (cs.confirmed > 500000) {
                    dataTable.push([
                        cs.country, cs.confirmed
                    ]);
                }
            }
        });
        this.pieChart = {
            chartType: 'PieChart',
            dataTable: dataTable,
            //firstRowIsData: true,
            options: {
                height: 250,
                animation: {
                    duration: 1000,
                    easing: 'out',
                }
            },
        };
        this.columnChart = {
            chartType: 'ColumnChart',
            dataTable: dataTable,
            //firstRowIsData: true,
            options: {
                height: 250,
                animation: {
                    duration: 1000,
                    easing: 'out',
                }
            },
        };
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getGlobalData().subscribe({
            next: function (result) {
                _this.globalData = result;
                result.forEach(function (cs) {
                    if (!Number.isNaN(cs.confirmed)) {
                        _this.confirmed += cs.confirmed;
                        _this.active += cs.active;
                        _this.deaths += cs.deaths;
                        _this.recovered += cs.recovered;
                    }
                });
                _this.initChart();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('change', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomeComponent.prototype, "onSelect", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  navbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
        this.todayDate = new Date();
        this.yesterdayDate = new Date(this.todayDate.setDate(this.todayDate.getDate() - 2));
        this.yesterdayDateString = this.yesterdayDate.toLocaleDateString().split('/').join('-');
        this.globalDataURL = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + ("0" + this.yesterdayDateString).slice(0, 10) + ".csv";
        this.dateWiseData = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
    }
    DataServiceService.prototype.getGlobalData = function () {
        return this.http.get(this.globalDataURL, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var raw = {};
            var data = [];
            var rows = result.split('\n');
            rows.splice(0, 1);
            rows.forEach(function (row) {
                var cols = row.split(/,(?=\S)/g);
                var cs = {
                    country: cols[3],
                    confirmed: +cols[7],
                    deaths: +cols[8],
                    recovered: +cols[9],
                    active: +cols[10],
                };
                var temp = raw[cs.country];
                if (temp) {
                    temp.deaths = cs.deaths + temp.deaths;
                    temp.recovered = cs.recovered + temp.recovered;
                    temp.active = cs.active + temp.active;
                    temp.confirmed = cs.confirmed + temp.confirmed;
                    raw[cs.country] = temp;
                }
                else {
                    raw[cs.country] = cs;
                }
                // console.log(cols)
            });
            return Object.values(raw);
        }));
    };
    DataServiceService.prototype.getDateWiseData = function () {
        return this.http.get(this.dateWiseData, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var rows = result.split('\n');
            var mainData = [];
            var headers = rows[0];
            var dates = headers.split(/,(?=\S)/g);
            dates.splice(0, 4);
            rows.splice(0, 1);
            rows.forEach(function (row) {
                var cols = row.split(/,(?=\S)/g);
                var con = cols[1];
                cols.splice(0, 4);
                mainData[con] = [];
                cols.forEach(function (value, index) {
                    var dw = {
                        cases: +value,
                        country: con,
                        date: new Date(Date.parse(dates[index]))
                    };
                    mainData[con].push(dw);
                });
            });
            return mainData;
        }));
    };
    DataServiceService.prototype.getStateWiseDate = function () {
        return this.http.get(this.globalDataURL, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var raw = [];
            var countryWiseArray = [];
            var rows = res.split('\n');
            rows.splice(0, 1);
            rows.forEach(function (row) {
                var cols = row.split(/,(?=\S)/g);
                var cases = {
                    state: cols[2],
                    country: cols[3],
                    confirmed: +cols[7],
                    deaths: +cols[8],
                    recovered: +cols[9],
                    active: +cols[10],
                };
                raw.push(cases);
            });
            var groupBy = function (array, key) {
                return array.reduce(function (result, currentValue) {
                    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
                    return result;
                }, {});
            };
            var dataByCountry = groupBy(raw, "country");
            var dataByCountryUS = {};
            dataByCountry["US"].forEach(function (stateRow) {
                var temp = dataByCountryUS[stateRow.state];
                if (temp) {
                    temp.deaths = stateRow.deaths + temp.deaths;
                    temp.recovered = stateRow.recovered + temp.recovered;
                    temp.active = stateRow.active + temp.active;
                    temp.confirmed = stateRow.confirmed + temp.confirmed;
                    dataByCountryUS[stateRow.state] = temp;
                }
                else {
                    dataByCountryUS[stateRow.state] = stateRow;
                }
            });
            dataByCountry["US"] = Object.values(dataByCountryUS);
            return dataByCountry;
        }));
    };
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\Angular\Application\Tracker Application\covid19-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
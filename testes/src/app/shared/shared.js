"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var platform_browser_1 = require("@angular/platform-browser");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule],
            declarations: [],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

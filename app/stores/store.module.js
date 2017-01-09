"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_routing_module_1 = require("../routes/app-routing.module");
var store_list_component_1 = require("./store-list.component");
var store_filter_pipe_1 = require("./store-filter.pipe");
var store_field_filter_pipe_1 = require("./store-field-filter.pipe");
var store_orderBy_filter_pipe_1 = require("./store-orderBy-filter.pipe");
var store_service_1 = require("./store.service");
var shared_module_1 = require("../shared/shared.module");
var StoreModule = (function () {
    function StoreModule() {
    }
    return StoreModule;
}());
StoreModule = __decorate([
    core_1.NgModule({
        declarations: [
            store_list_component_1.StoreListComponent,
            store_filter_pipe_1.StoreFilterPipe,
            store_field_filter_pipe_1.StoreFieldFilterPipe,
            store_orderBy_filter_pipe_1.StoreOrderByFilterPipe
        ],
        imports: [
            app_routing_module_1.AppRoutingModule,
            shared_module_1.SharedModule
        ],
        providers: [
            store_service_1.StoreService
        ]
    }),
    __metadata("design:paramtypes", [])
], StoreModule);
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map
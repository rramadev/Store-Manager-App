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
var StoreOrderByFilterPipe = (function () {
    function StoreOrderByFilterPipe() {
    }
    StoreOrderByFilterPipe.prototype.transform = function (value, orderBy) {
        orderBy = orderBy ? orderBy.toLocaleLowerCase() : null;
        return orderBy ? (function () {
            // Sort Function
            value.sort(function (a, b) {
                if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
                    return -1;
                }
                else if (a[orderBy].toLowerCase() > b[orderBy].toLowerCase()) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            return value;
        }()) : value;
    };
    return StoreOrderByFilterPipe;
}());
StoreOrderByFilterPipe = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    }),
    __metadata("design:paramtypes", [])
], StoreOrderByFilterPipe);
exports.StoreOrderByFilterPipe = StoreOrderByFilterPipe;
//# sourceMappingURL=product-filter-store-orderBy.pipe.js.map
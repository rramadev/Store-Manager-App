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
var store_service_1 = require("./store.service");
var StoreListComponent = (function () {
    function StoreListComponent(_storeService) {
        this._storeService = _storeService;
        this.pageTitle = 'Store List';
        this.imageWidth = 70;
        this.imageMargin = 2;
        this.showImage = false;
        this.placeholderFilter = 'Introduce a filter...';
    }
    StoreListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    StoreListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getStores()
            .subscribe(function (stores) { return _this.stores = stores; }, function (error) { return _this.errorMessage = error; }, function () {
            // Set default filter
            _this.orderByFilter = 'name';
            // Remove duplicated addresses
            var noDuplicateStores = [];
            var addresses = [];
            var key = "";
            for (var _i = 0, _a = _this.stores; _i < _a.length; _i++) {
                var store = _a[_i];
                key = store['address'];
                if (addresses.indexOf(key) === -1) {
                    addresses.push(key);
                    noDuplicateStores.push(store);
                }
            }
            ;
            _this.stores = noDuplicateStores.slice();
            // Set default store image
            for (var _b = 0, _c = _this.stores; _b < _c.length; _b++) {
                var store = _c[_b];
                store['imageUrl'] = "https://openclipart.org/download/216947/bread-and-banana02.svg";
            }
            ;
        });
    };
    StoreListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Store List: ' + message;
    };
    return StoreListComponent;
}());
StoreListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/stores/store-list.component.html',
        styleUrls: ['app/stores/store-list.component.css']
    }),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreListComponent);
exports.StoreListComponent = StoreListComponent;
//# sourceMappingURL=store-list.component.js.map
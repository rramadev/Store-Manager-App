(function (_angular_platformBrowserDynamic,_angular_core,_angular_platformBrowser,_angular_http,_angular_router,_angular_forms,angularInMemoryWebApi,_angular_common,_angular_material,ng2Ui) {
'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome to the Store Manager App';
    }
    WelcomeComponent = __decorate([
        _angular_core.Component({
            template: "\uFEFF<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    {{pageTitle}}\n  </div>\n  <div class=\"panel-body\"  >\n    <div class=\"row\">\n      <img src=\"assets/images/sm-logo.png\" class=\"img-responsive center-block logo\"/>\n    </div>\n  </div>\n</div>\n",
            styles: [""]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var root = createCommonjsModule(function (module, exports) {
"use strict";
/**
 * window: browser in DOM main thread
 * self: browser in WebWorker
 * global: Node.js/other
 */
exports.root = (typeof window == 'object' && window.window === window && window
    || typeof self == 'object' && self.self === self && self
    || typeof commonjsGlobal == 'object' && commonjsGlobal.global === commonjsGlobal && commonjsGlobal);
if (!exports.root) {
    throw new Error('RxJS could not find any global context (window, self, global)');
}

});

function isFunction(x) {
    return typeof x === 'function';
}
var isFunction_2 = isFunction;


var isFunction_1$1 = {
	isFunction: isFunction_2
};

var isArray_1$1 = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });


var isArray = {
	isArray: isArray_1$1
};

function isObject(x) {
    return x != null && typeof x === 'object';
}
var isObject_2 = isObject;


var isObject_1$1 = {
	isObject: isObject_2
};

// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject_1$2 = { e: {} };


var errorObject = {
	errorObject: errorObject_1$2
};

var errorObject_1$1 = errorObject;
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1$1.errorObject.e = e;
        return errorObject_1$1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
var tryCatch_2 = tryCatch;



var tryCatch_1$1 = {
	tryCatch: tryCatch_2
};

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends$2(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
var UnsubscriptionError_2 = UnsubscriptionError;


var UnsubscriptionError_1$1 = {
	UnsubscriptionError: UnsubscriptionError_2
};

var isArray_1 = isArray;
var isObject_1 = isObject_1$1;
var isFunction_1$3 = isFunction_1$1;
var tryCatch_1 = tryCatch_1$1;
var errorObject_1 = errorObject;
var UnsubscriptionError_1 = UnsubscriptionError_1$1;
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1$3.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
var Subscription_2 = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}


var Subscription_1$1 = {
	Subscription: Subscription_2
};

var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};


var Observer = {
	empty: empty
};

var root_1$2 = root;
var Symbol = root_1$2.root.Symbol;
var $$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';


var rxSubscriber = {
	$$rxSubscriber: $$rxSubscriber
};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = isFunction_1$1;
var Subscription_1 = Subscription_1$1;
var Observer_1$1 = Observer;
var rxSubscriber_1$1 = rxSubscriber;
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends$1(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1$1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1$1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1$1.$$rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
var Subscriber_2 = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends$1(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            context = observerOrNext;
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = this.unsubscribe.bind(this);
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));


var Subscriber_1$1 = {
	Subscriber: Subscriber_2
};

var Subscriber_1 = Subscriber_1$1;
var rxSubscriber_1 = rxSubscriber;
var Observer_1 = Observer;
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
var toSubscriber_2 = toSubscriber;


var toSubscriber_1$1 = {
	toSubscriber: toSubscriber_2
};

var root_1$3 = root;
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
var getSymbolObservable_1 = getSymbolObservable;
var $$observable = getSymbolObservable(root_1$3.root);


var observable = {
	getSymbolObservable: getSymbolObservable_1,
	$$observable: $$observable
};

var root_1 = root;
var toSubscriber_1 = toSubscriber_1$1;
var observable_1 = observable;
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.$$observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
var Observable_2 = Observable;


var Observable_1$1 = {
	Observable: Observable_2
};

var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1$4 = Observable_1$1;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ScalarObservable = (function (_super) {
    __extends$4(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
        _super.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
        if (scheduler) {
            this._isScalar = false;
        }
    }
    ScalarObservable.create = function (value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
        var done = state.done, value = state.value, subscriber = state.subscriber;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            });
        }
        else {
            subscriber.next(value);
            if (!subscriber.closed) {
                subscriber.complete();
            }
        }
    };
    return ScalarObservable;
}(Observable_1$4.Observable));
var ScalarObservable_2 = ScalarObservable;


var ScalarObservable_1$2 = {
	ScalarObservable: ScalarObservable_2
};

var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1$5 = Observable_1$1;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends$5(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following to the console:
     * // x is equal to the count on the interval eg(0,1,2,3,...)
     * // x will occur every 1000ms
     * // if x % 2 is equal to 1 print abc
     * // if x % 2 is not equal to 1 nothing will be output
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1$5.Observable));
var EmptyObservable_2 = EmptyObservable;


var EmptyObservable_1$2 = {
	EmptyObservable: EmptyObservable_2
};

function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
var isScheduler_2 = isScheduler;


var isScheduler_1$2 = {
	isScheduler: isScheduler_2
};

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1$3 = Observable_1$1;
var ScalarObservable_1$1 = ScalarObservable_1$2;
var EmptyObservable_1$1 = EmptyObservable_1$2;
var isScheduler_1$1 = isScheduler_1$2;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends$3(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` IScheduler, which means the `next`
     * notifications are sent synchronously, although with a different IScheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1$1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1$1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1$1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1$3.Observable));
var ArrayObservable_2 = ArrayObservable;


var ArrayObservable_1$1 = {
	ArrayObservable: ArrayObservable_2
};

var __extends$7 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1$3 = Subscriber_1$1;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends$7(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1$3.Subscriber));
var OuterSubscriber_2 = OuterSubscriber;


var OuterSubscriber_1$1 = {
	OuterSubscriber: OuterSubscriber_2
};

var isArrayLike_1$1 = (function (x) { return x && typeof x.length === 'number'; });


var isArrayLike = {
	isArrayLike: isArrayLike_1$1
};

function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
var isPromise_2 = isPromise;


var isPromise_1$1 = {
	isPromise: isPromise_2
};

var root_1$5 = root;
function symbolIteratorPonyfill(root$$1) {
    var Symbol = root$$1.Symbol;
    if (typeof Symbol === 'function') {
        if (!Symbol.iterator) {
            Symbol.iterator = Symbol('iterator polyfill');
        }
        return Symbol.iterator;
    }
    else {
        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
        var Set_1 = root$$1.Set;
        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
            return '@@iterator';
        }
        var Map_1 = root$$1.Map;
        // required for compatability with es6-shim
        if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                    return key;
                }
            }
        }
        return '@@iterator';
    }
}
var symbolIteratorPonyfill_1 = symbolIteratorPonyfill;
var $$iterator = symbolIteratorPonyfill(root_1$5.root);


var iterator = {
	symbolIteratorPonyfill: symbolIteratorPonyfill_1,
	$$iterator: $$iterator
};

var __extends$8 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1$4 = Subscriber_1$1;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends$8(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1$4.Subscriber));
var InnerSubscriber_2 = InnerSubscriber;


var InnerSubscriber_1$1 = {
	InnerSubscriber: InnerSubscriber_2
};

var root_1$4 = root;
var isArrayLike_1 = isArrayLike;
var isPromise_1 = isPromise_1$1;
var isObject_1$3 = isObject_1$1;
var Observable_1$7 = Observable_1$1;
var iterator_1 = iterator;
var InnerSubscriber_1 = InnerSubscriber_1$1;
var observable_1$1 = observable;
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
        return null;
    }
    if (result instanceof Observable_1$7.Observable) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
        }
        else {
            return result.subscribe(destination);
        }
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
            destination.next(result[i]);
        }
        if (!destination.closed) {
            destination.complete();
        }
    }
    else if (isPromise_1.isPromise(result)) {
        result.then(function (value) {
            if (!destination.closed) {
                destination.next(value);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            root_1$4.root.setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (result && typeof result[iterator_1.$$iterator] === 'function') {
        var iterator$$1 = result[iterator_1.$$iterator]();
        do {
            var item = iterator$$1.next();
            if (item.done) {
                destination.complete();
                break;
            }
            destination.next(item.value);
            if (destination.closed) {
                break;
            }
        } while (true);
    }
    else if (result && typeof result[observable_1$1.$$observable] === 'function') {
        var obs = result[observable_1$1.$$observable]();
        if (typeof obs.subscribe !== 'function') {
            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        var value = isObject_1$3.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = ("You provided " + value + " where a stream was expected.")
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        destination.error(new TypeError(msg));
    }
    return null;
}
var subscribeToResult_2 = subscribeToResult;


var subscribeToResult_1$1 = {
	subscribeToResult: subscribeToResult_2
};

var __extends$6 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = OuterSubscriber_1$1;
var subscribeToResult_1 = subscribeToResult_1$1;
/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return this.lift(new MergeAllOperator(concurrent));
}
var mergeAll_2 = mergeAll;
var MergeAllOperator = (function () {
    function MergeAllOperator(concurrent) {
        this.concurrent = concurrent;
    }
    MergeAllOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeAllSubscriber(observer, this.concurrent));
    };
    return MergeAllOperator;
}());
var MergeAllOperator_1 = MergeAllOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeAllSubscriber = (function (_super) {
    __extends$6(MergeAllSubscriber, _super);
    function MergeAllSubscriber(destination, concurrent) {
        _super.call(this, destination);
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
    }
    MergeAllSubscriber.prototype._next = function (observable) {
        if (this.active < this.concurrent) {
            this.active++;
            this.add(subscribeToResult_1.subscribeToResult(this, observable));
        }
        else {
            this.buffer.push(observable);
        }
    };
    MergeAllSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeAllSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
var MergeAllSubscriber_1 = MergeAllSubscriber;


var mergeAll_1$1 = {
	mergeAll: mergeAll_2,
	MergeAllOperator: MergeAllOperator_1,
	MergeAllSubscriber: MergeAllSubscriber_1
};

var Observable_1$6 = Observable_1$1;
var isScheduler_1$4 = isScheduler_1$2;
var ArrayObservable_1$3 = ArrayObservable_1$1;
var mergeAll_1 = mergeAll_1$1;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return this.lift.call(concatStatic.apply(void 0, [this].concat(observables)));
}
var concat_2 = concat;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from given
 * Observable and then moves on to the next.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * `concat` joins multiple Observables together, by subscribing to them one at a time and
 * merging their results into the output Observable. You can pass either an array of
 * Observables, or put them directly as arguments. Passing an empty array will result
 * in Observable that completes immediately.
 *
 * `concat` will subscribe to first input Observable and emit all its values, without
 * changing or affecting them in any way. When that Observable completes, it will
 * subscribe to then next Observable passed and, again, emit its values. This will be
 * repeated, until the operator runs out of Observables. When last input Observable completes,
 * `concat` will complete as well. At any given moment only one Observable passed to operator
 * emits values. If you would like to emit values from passed Observables concurrently, check out
 * {@link merge} instead, especially with optional `concurrent` parameter. As a matter of fact,
 * `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.
 *
 * Note that if some input Observable never completes, `concat` will also never complete
 * and Observables following the one that did not complete will never be subscribed. On the other
 * hand, if some Observable simply completes immediately after it is subscribed, it will be
 * invisible for `concat`, which will just move on to the next Observable.
 *
 * If any Observable in chain errors, instead of passing control to the next Observable,
 * `concat` will error immediately as well. Observables that would be subscribed after
 * the one that emitted error, never will.
 *
 * If you pass to `concat` the same Observable many times, its stream of values
 * will be "replayed" on every subscription, which means you can repeat given Observable
 * as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious,
 * you can always use {@link repeat}.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = Rx.Observable.concat(timer, sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 *
 * @example <caption>Concatenate an array of 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = Rx.Observable.concat([timer1, timer2, timer3]); // note that array is passed
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 *
 * @example <caption>Concatenate the same Observable to repeat it</caption>
 * const timer = Rx.Observable.interval(1000).take(2);
 *
 * Rx.Observable.concat(timer, timer) // concating the same Observable!
 * .subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('...and it is done!')
 * );
 *
 * // Logs:
 * // 0 after 1s
 * // 1 after 2s
 * // 0 after 3s
 * // 1 after 4s
 * // "...and it is done!" also after 4s
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} input1 An input Observable to concatenate with others.
 * @param {ObservableInput} input2 An input Observable to concatenate with others.
 * More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @static true
 * @name concat
 * @owner Observable
 */
function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1$4.isScheduler(args[observables.length - 1])) {
        scheduler = args.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1$6.Observable) {
        return observables[0];
    }
    return new ArrayObservable_1$3.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
}
var concatStatic_1 = concatStatic;


var concat_1$1 = {
	concat: concat_2,
	concatStatic: concatStatic_1
};

var ArrayObservable_1 = ArrayObservable_1$1;
var ScalarObservable_1 = ScalarObservable_1$2;
var EmptyObservable_1 = EmptyObservable_1$2;
var concat_1 = concat_1$1;
var isScheduler_1 = isScheduler_1$2;
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith$2() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
    }
    else {
        scheduler = null;
    }
    var len = array.length;
    if (len === 1) {
        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
    }
    else if (len > 1) {
        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
    }
    else {
        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
    }
}
var startWith_2 = startWith$2;


var startWith_1$1 = {
	startWith: startWith_2
};

var Observable_1 = Observable_1$1;
var startWith_1 = startWith_1$1;
Observable_1.Observable.prototype.startWith = startWith_1.startWith;

var StoreListMapDialogComponent = (function () {
    function StoreListMapDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    StoreListMapDialogComponent.prototype.onMarker = function (evt) {
        var marker = evt.target;
        marker.ng2MapComponent.openInfoWindow('iw', marker, { name: this.name });
    };
    StoreListMapDialogComponent = __decorate([
        _angular_core.Component({
            template: "<div md-dialog-title class=\"md-dialog-title-store\">\n  Store Location:\n  <a class=\"btn btn-warning btn-sm\" style=\"width:80px\"\n  (click)=\"dialogRef.close()\">\n    <i class=\"glyphicon glyphicon-remove\"></i> Close\n  </a>\n</div>\n\n<md-dialog-content class=\"md-dialog-content-store\">\n  <md-card>\n    <ng2-map center=\"{{address}}\">\n      <marker position=\"{{address}}\" draggable=\"true\" (click)=\"onMarker($event)\"></marker>\n      <info-window id=\"iw\">Store: [[name]]</info-window>\n    </ng2-map>\n  </md-card>\n</md-dialog-content>\n"
        })
    ], StoreListMapDialogComponent);
    return StoreListMapDialogComponent;
}());

var StoreListComponent = (function () {
    function StoreListComponent(storeService, dialog) {
        this.storeService = storeService;
        this.dialog = dialog;
        this.pageTitle = 'Store List';
        this.imageWidth = 60;
        this.imageMargin = 2;
        this.showImage = true;
        this.showTools = true;
        this.showBar = false;
        this.updated = false;
        this.updateMessage = ' - Store Updated!';
        this.deleted = false;
        this.deleteMessage = ' - Store Deleted!';
        this.storeNoDuplicateFilter = 'address';
        this.placeholderFilter = 'Looking for...';
        this.errorMessage = '';
        this.storeFilterInput = '';
        this.storeFilterMsg = '';
        this.orderByFilter = 'name';
        this.cityFilterInput = '';
        this.cityList = [
            'Berlin',
            'Bochum',
            'Darmstadt',
            'Gelsenkirchen',
            'Hamburg',
            'Kiel',
            'Köln',
            'München',
            'Trier',
            'Witten'
        ];
        this.startCityCtrl();
    }
    StoreListComponent.prototype.startCityCtrl = function () {
        var _this = this;
        this.cityCtrl = new _angular_forms.FormControl();
        this.filteredCities = this.cityCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterCitiesInput(name); });
    };
    StoreListComponent.prototype.filterCitiesInput = function (val) {
        return val ?
            this.cityList.filter(function (s) { return new RegExp(val, 'gi').test(s); })
            : this.cityList;
    };
    StoreListComponent.prototype.setFilterValue = function (input, type) {
        type === 'search' ? (this.cityCtrl.setValue(''),
            this.storeFilterMsg = '- Filtered by: ',
            this.storeFilterInput = input,
            this.storeFilterFields = ['name', 'address']) : (this.cityFilterInput = '',
            this.storeFilterMsg = '- Filtered by city: ',
            this.storeFilterInput = this.cityCtrl.value,
            this.storeFilterFields = ['address']);
    };
    StoreListComponent.prototype.displayFilter = function () {
        return this.storeFilterMsg + this.storeFilterInput;
    };
    StoreListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    StoreListComponent.prototype.getStores = function () {
        var _this = this;
        this.storeService.getStores().subscribe(function (stores) { return _this.stores = stores; }, function (error) { return _this.errorMessage = error; }, function () {
            if (_this.showBar) {
                _this.showBar = false;
                _this.deleted = true;
            }
            
            // Set default filter
            // this.orderByFilter = 'name';
            // Set default store image
            // for (let store of this.stores) {
            // 	store['imageUrl'] =
            // 	 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png';
            // };
            // Remove duplicated addresses
            // var noDuplicateStores = [];
            // var addresses = [];
            // var key = "";
            // for (let store of this.stores) {
            //   key = store['address'];
            //   if (addresses.indexOf(key) === -1) {
            //     addresses.push(key);
            //     noDuplicateStores.push(store);
            //   }
            // };
            // Remove duplicated addresses
            // Using filter method
            var addressList = [];
            var noDuplicateStores = _this.stores.filter(function (store) {
                return (addressList.indexOf(store['address']) === -1) ?
                    addressList.push(store['address'])
                    : false;
            });
            _this.stores = noDuplicateStores.slice();
            // Filter JSON by fields
            // let filteredObject = {},
            // filteredArray = [],
            // p = new Set(Object.keys(this.stores[0])),
            // blacklist: string[] = ['styleUrl', 'ExtendedData'];
            // blacklist.forEach(a => p.delete(a));
            // for (var i in this.stores) {
            // 	filteredObject['id'] = i;
            // 	p.forEach(k => filteredObject[k] = this.stores[i][k]);
            // 	filteredArray.push(filteredObject);
            // 	filteredObject = {};
            // }
            // console.log(JSON.stringify(filteredArray));
            // Create Cities List
            // let citiesList = this.stores.reduce((acc,curr) => {
            // 	let posi = curr.description.indexOf('- Stadt:') + 9;
            // 	let posf = curr.description.indexOf('<br>Adresse - Staat');
            // 	let city = curr.description.substring(posi, posf);
            // 	if (acc.indexOf(city)===-1) {
            // 		acc.push(city);
            // 	}
            // 	return acc;
            // }, []);
        });
    };
    StoreListComponent.prototype.deleteStore = function (id) {
        var _this = this;
        this.showBar = true;
        this.deleted = false;
        this.storeService.deleteStore(id).subscribe(function (result) {
            _this.getStores();
            // let updatedStores = this.stores.filter(store => store.id !== id);
            // this.stores = JSON.parse(JSON.stringify(updatedStores));
        }, function (error) {
            _this.errorMessage = error;
            _this.showBar = false;
        });
    };
    StoreListComponent.prototype.openDialog = function (address, name) {
        var dialogRef = this.dialog.open(StoreListMapDialogComponent);
        dialogRef.componentInstance.address = address;
        dialogRef.componentInstance.name = name;
    };
    StoreListComponent.prototype.ngOnInit = function () {
        this.getStores();
    };
    StoreListComponent = __decorate([
        _angular_core.Component({
            template: "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    {{pageTitle}} <span *ngIf=\"storeFilterInput.length\"> {{displayFilter()}}</span>\n    <md-progress-bar *ngIf=\"showBar\" color=\"accent\" mode=\"indeterminate\"></md-progress-bar>\n    <span *ngIf=\"updated\" class=\"updated\">\n       {{updateMessage}}\n      <span class=\"glyphicon glyphicon-ok-circle\"></span>\n    </span>\n    <span *ngIf=\"deleted\" class=\"deleted\">\n       {{deleteMessage}}\n      <span class=\"glyphicon glyphicon-remove-circle\"></span>\n    </span>\n  </div>\n  <div class=\"panel-body\">\n    <md-card>\n      <div class=\"row\">\n        <div class=\"form-group col-md-3\">\n          <md-input-container>\n            <input mdInput placeholder=\"City\" [mdAutocomplete]=\"auto\" [formControl]=\"cityCtrl\" #cityFilter (keyup)=\"setFilterValue(cityFilter.value, 'city')\" />\n          </md-input-container>\n          <md-autocomplete #auto=\"mdAutocomplete\">\n            <md-option *ngFor=\"let city of filteredCities | async\" [value]=\"city\" (click)=\"setFilterValue(city, 'city')\">\n              {{ city }}\n            </md-option>\n          </md-autocomplete>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"sel1\">Search:</label>\n          <input id=\"sel1\" type=\"text\" class=\"form-control\"  [placeholder]=\"placeholderFilter\" [(ngModel)]=\"cityFilterInput\" #searchFilter (keyup)=\"setFilterValue(searchFilter.value, 'search')\" />\n        </div>\n        <div class=\"form-group col-md-5\">\n          <label for=\"sel3\">Order By:</label>\n          <select id=\"sel3\" class=\"form-control\" [(ngModel)]=\"orderByFilter\">\n            <option value=\"name\" selected>Store Name</option>\n            <option value=\"address\">Store Address</option>\n          </select>\n        </div>\n      </div>\n    </md-card>\n    <div class=\"table-responsive\">\n      <table class=\"table\" *ngIf=\"stores && stores.length\">\n        <thead>\n          <tr>\n            <th>\n              <button class=\"btn btn-primary btn-sm\" (click)=\"toggleImage()\">\n                {{showImage ? \"Hide\" : \"Show\"}} Image\n              </button>\n            </th>\n            <th>Index</th>\n            <th>Store</th>\n            <th>Address</th>\n            <th>\n              <md-slide-toggle class=\"md-slide-toggle-store\" [(ngModel)]=\"showTools\">\n              </md-slide-toggle>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let store of stores  |\n                storeFieldFilter:storeNoDuplicateFilter | storeFilter:storeFilterInput:storeFilterFields | orderBy:orderByFilter;\n                let i = index\">\n            <td>\n              <img *ngIf=\"showImage\" [src]=\"store.imageUrl\" [title]=\"store.name\" [style.width.px]=\"imageWidth\" [style.margin.px]=\"imageMargin\">\n            </td>\n            <td>{{ i+1 }}</td>\n            <td>{{ store.name }}</td>\n            <td>{{ store.address }}</td>\n            <td>\n              <div *ngIf=\"showTools\">\n                <div class=\"showTools\">\n                <a href=\"#\" class=\"btn btn-info btn-sm\" (click)=\"$event.preventDefault(); openDialog(store.address, store.name)\">\n                  <span class=\"glyphicon glyphicon-map-marker\"></span> Map\n                </a>\n                </div>\n                <div class=\"showTools\">\n                <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n                  <md-icon>more_vert</md-icon>\n                </button>\n                <md-menu #menu=\"mdMenu\">\n                  <button md-menu-item>\n                    <md-icon>border_color</md-icon>\n                    <span>Edit</span>\n                  </button>\n                  <button md-menu-item (click)=\"deleteStore(store.id)\">\n                    <md-icon>delete</md-icon>\n                    <span>Delete</span>\n                  </button>\n                  <button md-menu-item disabled>\n                    <md-icon>build</md-icon>\n                    <span>Config</span>\n                  </button>\n                </md-menu>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
            styles: ["table {\n  margin: 20px;\n}\nthead {\n    color: #337AB7;\n}\ntd {\n  vertical-align: middle;\n}\n"]
        })
    ], StoreListComponent);
    return StoreListComponent;
}());

var appRoutes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'stores', component: StoreListComponent },
    // { path: 'products', component: ProductListComponent },
    // { path: 'product/:id',
    //     canActivate: [ ProductDetailGuard ],
    //     component: ProductDetailComponent },
    // Default
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // Wildcard
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_router.RouterModule.forRoot(appRoutes)
            ],
            exports: [_angular_router.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            {
                'id': 1,
                'productName': 'Food Big Salad',
                'productCode': '71300',
                'releaseDate': '2013-11-23',
                'description': 'This glitch clipart is about food, big, salad.',
                'price': 15.95,
                'starRating': 2.2,
                'imageUrl': 'assets/images/products/food-big-salad.jpg'
            },
            {
                'id': 2,
                'productName': 'Food Fruit Salad',
                'productCode': '45842',
                'releaseDate': '2014-11-23',
                'description': 'This glitch clipart is about food, fruit, salad.',
                'price': 21.95,
                'starRating': 4.5,
                'imageUrl': 'assets/images/products/food-fruit-salad.jpg'
            },
            {
                'id': 3,
                'productName': 'Food Obvious Panini',
                'productCode': '128443',
                'releaseDate': '2015-11-23',
                'description': 'This glitch clipart is about food, obvious, panini.',
                'price': 18.95,
                'starRating': 3.8,
                'imageUrl': 'assets/images/products/food-obvious-panini.jpg'
            },
            {
                'id': 4,
                'productName': 'Food Fancy Cheese',
                'productCode': '11247',
                'releaseDate': '2016-11-23',
                'description': '15-inch steel blade hand saw',
                'price': 10.95,
                'starRating': 2.7,
                'imageUrl': 'assets/images/products/food-fancy-cheese.jpg'
            },
            {
                'id': 5,
                'productName': 'Fast Food Menu',
                'productCode': '135029',
                'releaseDate': '2011-07-19',
                'description': 'Standard fast food menu',
                'price': 15.95,
                'starRating': 3.5,
                'imageUrl': 'assets/images/products/fast-food-menu.jpg'
            },
            {
                'id': 6,
                'productName': 'Food Snack Pack',
                'productCode': '59273',
                'releaseDate': '2011-07-19',
                'description': 'Standard food Snack Pack',
                'price': 12.95,
                'starRating': 4.5,
                'imageUrl': 'assets/images/products/food-snack-pack.jpg'
            },
            {
                'id': 7,
                'productName': 'Sushi Food',
                'productCode': '125029',
                'releaseDate': '2011-07-19',
                'description': 'Standard shushi food',
                'price': 25.95,
                'starRating': 4.8,
                'imageUrl': 'assets/images/products/osechi.jpg'
            }
        ];
        var stores = [{ 'id': '0', 'name': 'Adolph\'s Café', 'description': 'Adresse - Adresse: 559 Neusser Straße<br>Adresse - Postleitzahl: 50737<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': '559 Neusser Straße 50737 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '1', 'name': 'Adolph\'s Gasthaus', 'description': 'Adresse - Adresse: Rüdellstraße 1<br>Adresse - Postleitzahl: 50737<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Rüdellstraße 1 50737 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '2', 'name': 'Ahoi', 'description': 'Adresse - Adresse: Ditmar-Koel-Straße 16<br>Adresse - Postleitzahl: 20459<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Ditmar-Koel-Straße 16 20459 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '3', 'name': 'Alte Welt Siralti', 'description': 'Adresse - Adresse: Wissmannstraße 44<br>Adresse - Postleitzahl: 12049<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Wissmannstraße 44 12049 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '4', 'name': 'Amma Catering', 'description': 'Adresse - Adresse: Bundesallee 192<br>Adresse - Postleitzahl: 10717<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Bundesallee 192 10717 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '5', 'name': 'Anand', 'description': 'Adresse - Adresse: Albrechtstraße 12<br>Adresse - Postleitzahl: 10117<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Albrechtstraße 12 10117 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '6', 'name': 'Anantha Raja', 'description': 'Adresse - Adresse: 16 Zossener Straße<br>Adresse - Postleitzahl: 10961<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '16 Zossener Straße 10961 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '7', 'name': 'Arjun', 'description': 'Adresse - Adresse: Königin-Elisabeth-Straße 8<br>Adresse - Postleitzahl: 14059<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Königin-Elisabeth-Straße 8 14059 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '8', 'name': 'Aura', 'description': 'Adresse - Adresse: 46 Greifswalder Straße<br>Adresse - Postleitzahl: 10405<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '46 Greifswalder Straße 10405 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '9', 'name': 'Aviva Catering', 'description': 'Adresse - Adresse: Bernhardstraße 18<br>Adresse - Postleitzahl: 10715<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Bernhardstraße 18 10715 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '10', 'name': 'B\'s', 'description': 'Adresse - Adresse: Kiehlufer 85<br>Adresse - Postleitzahl: 12059<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Kiehlufer 85 12059 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '11', 'name': 'Bab Al Hara Orientalisches Eiscafé', 'description': 'Adresse - Adresse: Sonnenallee 70<br>Adresse - Postleitzahl: 12045<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Sonnenallee 70 12045 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '12', 'name': 'Back & Snack', 'description': 'Adresse - Adresse: Lieselotte-Berger-Straße 34<br>Adresse - Postleitzahl: 12355<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Lieselotte-Berger-Straße 34 12355 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '13', 'name': 'Back Shop', 'description': 'Adresse - Adresse: Paul-Heyse-Straße 4<br>Adresse - Postleitzahl: 10407<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Paul-Heyse-Straße 4 10407 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '14', 'name': 'Bäcker Günstig', 'description': 'Adresse - Adresse: Augustenstr. 38<br>Adresse - Postleitzahl: 24143<br>Adresse - Stadt: Kiel<br>Adresse - Staat: <br>Adresse - Land: Deutschland', 'address': 'Augustenstr. 38 24143 Kiel Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '15', 'name': 'Bäckerei Café Moin Moin', 'description': 'Adresse - Adresse: Griesstraße 1<br>Adresse - Postleitzahl: 20535<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Griesstraße 1 20535 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '16', 'name': 'Backshop Cafe TIRO', 'description': 'Adresse - Adresse: Am Westpark 8<br>Adresse - Postleitzahl: 81373<br>Adresse - Stadt: München<br>Adresse - Staat: Bayern<br>Adresse - Land: Germany', 'address': 'Am Westpark 8 81373 München Bayern Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '17', 'name': 'Banat Bäckerei', 'description': 'Adresse - Adresse: Gneisenaustraße 85<br>Adresse - Postleitzahl: 10961<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Gneisenaustraße 85 10961 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '18', 'name': 'Barkett', 'description': 'Adresse - Adresse: Czeminskistraße 10<br>Adresse - Postleitzahl: 10829<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Czeminskistraße 10 10829 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '19', 'name': 'Berlin Burrito Company Kastanienallee', 'description': 'Adresse - Adresse: Kastanienallee 59<br>Adresse - Postleitzahl: 10119<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Kastanienallee 59 10119 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '20', 'name': 'Berlin Burrito Company Pallasstraße', 'description': 'Adresse - Adresse: Pallasstraße 21<br>Adresse - Postleitzahl: 10781<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Pallasstraße 21 10781 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '21', 'name': 'Bistro Milou', 'description': 'Adresse - Adresse: Bundesstraße 96<br>Adresse - Postleitzahl: 20144<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Deutschland', 'address': 'Bundesstraße 96 20144 Hamburg Hamburg Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '22', 'name': 'Bistro Münzburg', 'description': 'Adresse - Adresse: 11 Münzplatz<br>Adresse - Postleitzahl: 20097<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': '11 Münzplatz 20097 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '23', 'name': 'Black Cat', 'description': 'Adresse - Adresse: Prenzlauer Allee 48<br>Adresse - Postleitzahl: 10405<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Prenzlauer Allee 48 10405 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '24', 'name': 'Blueberry Coffees', 'description': 'Adresse - Adresse: Uhlandstraße 167<br>Adresse - Postleitzahl: 10719<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Uhlandstraße 167 10719 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '25', 'name': 'Bottega Nr. 6', 'description': 'Adresse - Adresse: Richardstraße 6<br>Adresse - Postleitzahl: 12043<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Richardstraße 6 12043 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '26', 'name': 'Brammibal\'s Vegan Donuts', 'description': 'Adresse - Adresse: Maybachufer 8<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Maybachufer 8 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '27', 'name': 'Brasserie La Bonne Franquette', 'description': 'Adresse - Adresse: Chausseestraße 110<br>Adresse - Postleitzahl: 10115<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Chausseestraße 110 10115 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '28', 'name': 'Brauhaus Quetsch', 'description': 'Adresse - Adresse: Hauptstraße 7<br>Adresse - Postleitzahl: 50996<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Hauptstraße 7 50996 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '29', 'name': 'Brezel Bar', 'description': 'Adresse - Adresse: Friesenstraße 2<br>Adresse - Postleitzahl: 10965<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Friesenstraße 2 10965 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '30', 'name': 'Bunte Burger Food Bar', 'description': 'Adresse - Adresse: Hospeltstraße 1<br>Adresse - Postleitzahl: 50825<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Hospeltstraße 1 50825 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '31', 'name': 'Café 53', 'description': 'Adresse - Adresse: Weidenallee 53<br>Adresse - Postleitzahl: 20357<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Weidenallee 53 20357 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '32', 'name': 'Café am Markt', 'description': 'Adresse - Adresse: 166 Köpenicker Straße<br>Adresse - Postleitzahl: 12355<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '166 Köpenicker Straße 12355 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '33', 'name': 'Café Amira', 'description': 'Adresse - Adresse: Eppendorfer Weg 255<br>Adresse - Postleitzahl: 20251<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Eppendorfer Weg 255 20251 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '34', 'name': 'Café Bäckerei', 'description': 'Adresse - Adresse: 56 Grünberger Straße<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '56 Grünberger Straße 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '35', 'name': 'Café Bäckerei Kollwitz', 'description': 'Adresse - Adresse: Sredzkistraße 51<br>Adresse - Postleitzahl: 10435<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Sredzkistraße 51 10435 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '36', 'name': 'Café Backshop Sonnenwinkel', 'description': 'Adresse - Adresse: Gäblerstraße 96<br>Adresse - Postleitzahl: 13086<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Gäblerstraße 96 13086 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '37', 'name': 'Café Bahar', 'description': 'Adresse - Adresse: 504 Aachener Straße<br>Adresse - Postleitzahl: 50933<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': '504 Aachener Straße 50933 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '38', 'name': 'Café Basecamp', 'description': 'Adresse - Adresse: Mittelstraße 51<br>Adresse - Postleitzahl: 10117<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Mittelstraße 51 10117 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '39', 'name': 'Café Berio', 'description': 'Adresse - Adresse: Maaßenstraße 7<br>Adresse - Postleitzahl: 10777<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Maaßenstraße 7 10777 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '40', 'name': 'Café Chaussee', 'description': 'Adresse - Adresse: Eimsbütteler Chaussee 71<br>Adresse - Postleitzahl: 20259<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Eimsbütteler Chaussee 71 20259 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '41', 'name': 'Café Corner', 'description': 'Adresse - Adresse: Grafenstraße 35<br>Adresse - Postleitzahl: 64283<br>Adresse - Stadt: Darmstadt<br>Adresse - Staat: Hessen<br>Adresse - Land: Deutschland', 'address': 'Grafenstraße 35 64283 Darmstadt Hessen Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '42', 'name': 'Café Cup Arkona', 'description': 'Adresse - Adresse: 10 Arkonaplatz<br>Adresse - Postleitzahl: 10435<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '10 Arkonaplatz 10435 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '43', 'name': 'Café David', 'description': 'Adresse - Adresse: Grindelhof 63<br>Adresse - Postleitzahl: 20146<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Grindelhof 63 20146 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '44', 'name': 'Café Einstein', 'description': 'Adresse - Adresse: Friedrichstraße 206<br>Adresse - Postleitzahl: 10969<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Friedrichstraße 206 10969 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '45', 'name': 'Café FreiRaum', 'description': 'Adresse - Adresse: Katzbachstraße 24<br>Adresse - Postleitzahl: 10965<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Katzbachstraße 24 10965 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '46', 'name': 'Café Fromme', 'description': 'Adresse - Adresse: 122 Breite Straße<br>Adresse - Postleitzahl: 50667<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': '122 Breite Straße 50667 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '47', 'name': 'Café Hilde', 'description': 'Adresse - Adresse: 22 Metzer Straße<br>Adresse - Postleitzahl: 10405<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '22 Metzer Straße 10405 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '48', 'name': 'Café Ines', 'description': 'Adresse - Adresse: Julius-Vosseler-Straße 42<br>Adresse - Postleitzahl: 22527<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Julius-Vosseler-Straße 42 22527 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '49', 'name': 'Cafe Insonne GbR', 'description': 'Adresse - Adresse: Windscheidstraße 22<br>Adresse - Postleitzahl: 10627<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Windscheidstraße 22 10627 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '50', 'name': 'Café Kuchen', 'description': 'Adresse - Adresse: 6 Wiesbadener Straße<br>Adresse - Postleitzahl: 12161<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '6 Wiesbadener Straße 12161 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '51', 'name': 'Cafe Milou', 'description': 'Adresse - Adresse: Poelchaukamp 19<br>Adresse - Postleitzahl: 22301<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Deutschland', 'address': 'Poelchaukamp 19 22301 Hamburg Hamburg Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '52', 'name': 'Café Morgestund', 'description': 'Adresse - Adresse: Mundsburger Damm 36<br>Adresse - Postleitzahl: 22087<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Mundsburger Damm 36 22087 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '53', 'name': 'Café Naugarder', 'description': 'Adresse - Adresse: 45 Naugarder Straße<br>Adresse - Postleitzahl: 10409<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '45 Naugarder Straße 10409 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '54', 'name': 'Café Nix Verstehen', 'description': 'Adresse - Adresse: Oranienstraße 64<br>Adresse - Postleitzahl: 10969<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Oranienstraße 64 10969 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '55', 'name': 'Café Pastelaria', 'description': 'Adresse - Adresse: Grindelallee 168<br>Adresse - Postleitzahl: 20144<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Grindelallee 168 20144 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '56', 'name': 'Café Rosenrot', 'description': 'Adresse - Adresse: Ossietzkystraße 2<br>Adresse - Postleitzahl: 13187<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Ossietzkystraße 2 13187 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '57', 'name': 'Café Schöneweile', 'description': 'Adresse - Adresse: Reinbeckstraße 9<br>Adresse - Postleitzahl: 12459<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Reinbeckstraße 9 12459 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '58', 'name': 'Café Schönhausen', 'description': 'Adresse - Adresse: Florastraße 27<br>Adresse - Postleitzahl: 13187<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Florastraße 27 13187 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '59', 'name': 'Café Sha', 'description': 'Adresse - Adresse: Daimlerstraße 12<br>Adresse - Postleitzahl: 22763<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Daimlerstraße 12 22763 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '60', 'name': 'Cafe Strauss', 'description': 'Adresse - Adresse: Wiesenstraße 46<br>Adresse - Postleitzahl: 20255<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Deutschland', 'address': 'Wiesenstraße 46 20255 Hamburg Hamburg Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '61', 'name': 'Café Susam', 'description': 'Adresse - Adresse: Beusselstraße 77<br>Adresse - Postleitzahl: 10553<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Beusselstraße 77 10553 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '62', 'name': 'Cafe Tietz & Cie', 'description': 'Adresse - Adresse: Potsdamer Straße 77<br>Adresse - Postleitzahl: 10785<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Potsdamer Straße 77 10785 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '63', 'name': 'Café Trainspot', 'description': 'Adresse - Adresse: Am Lokdepot 1<br>Adresse - Postleitzahl: 10965<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Am Lokdepot 1 10965 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '64', 'name': 'Café Von Luck Auerbachstraße', 'description': 'Adresse - Adresse: Auerbachstraße 10<br>Adresse - Postleitzahl: 14193<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Auerbachstraße 10 14193 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '65', 'name': 'Café Von Luck Von-Luck-Straße', 'description': 'Adresse - Adresse: Von-Luck-Straße 27<br>Adresse - Postleitzahl: 14129<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Von-Luck-Straße 27 14129 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '66', 'name': 'Caffè al Volo', 'description': 'Adresse - Adresse: Hudtwalckerstraße 18<br>Adresse - Postleitzahl: 22299<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Hudtwalckerstraße 18 22299 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '67', 'name': 'Cake', 'description': 'Adresse - Adresse: Prenzlauer Allee 229<br>Adresse - Postleitzahl: 10405<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Prenzlauer Allee 229 10405 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '68', 'name': 'Carisma Bakery', 'description': 'Adresse - Adresse: 19 Joachimsthaler Straße<br>Adresse - Postleitzahl: 10719<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '19 Joachimsthaler Straße 10719 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '69', 'name': 'Chakra Café', 'description': 'Adresse - Adresse: Susannenstraße 11<br>Adresse - Postleitzahl: 20357<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Susannenstraße 11 20357 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '70', 'name': 'Charlie’s Vegan Food', 'description': 'Adresse - Adresse: Oranienstraße 187<br>Adresse - Postleitzahl: 10999<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Oranienstraße 187 10999 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '71', 'name': 'Chelany', 'description': 'Adresse - Adresse: Friedelstraße 41<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Friedelstraße 41 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '72', 'name': 'China Garten', 'description': 'Adresse - Adresse: Aktienstraße 334<br>Adresse - Postleitzahl: 45473<br>Adresse - Stadt: Mülheim an der Ruhr<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Aktienstraße 334 45473 Mülheim an der Ruhr Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '73', 'name': 'China Restaurant Chen Dynasty', 'description': 'Adresse - Adresse: Ostseestraße 79<br>Adresse - Postleitzahl: 10409<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Ostseestraße 79 10409 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '74', 'name': 'China Restaurant Shanghai', 'description': 'Adresse - Adresse: 66 Cranger Straße<br>Adresse - Postleitzahl: 45894<br>Adresse - Stadt: Gelsenkirchen<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': '66 Cranger Straße 45894 Gelsenkirchen Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '75', 'name': 'Chopan', 'description': 'Adresse - Adresse: Steindamm 32<br>Adresse - Postleitzahl: 20099<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Steindamm 32 20099 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '76', 'name': 'City Backhaus', 'description': 'Adresse - Adresse: Großer Burstah 6<br>Adresse - Postleitzahl: 20457<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Großer Burstah 6 20457 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '77', 'name': 'City Brötchen Stehcafé', 'description': 'Adresse - Adresse: Michaelisstraße 2<br>Adresse - Postleitzahl: 20459<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Michaelisstraße 2 20459 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '78', 'name': 'Club Astoria', 'description': 'Adresse - Adresse: Guts-Muths-Weg 3<br>Adresse - Postleitzahl: 50933<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Guts-Muths-Weg 3 50933 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '79', 'name': 'Coco Liebe', 'description': 'Adresse - Adresse: Richardstraße 107<br>Adresse - Postleitzahl: 12043<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Richardstraße 107 12043 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '80', 'name': 'Coffee Oase', 'description': 'Adresse - Adresse: 32 Breite Straße<br>Adresse - Postleitzahl: 14199<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '32 Breite Straße 14199 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '81', 'name': 'Colombina Café', 'description': 'Adresse - Adresse: 25 Wörther Straße<br>Adresse - Postleitzahl: 10405<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '25 Wörther Straße 10405 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '82', 'name': 'Crazy Crêpes Café', 'description': 'Adresse - Adresse: Fehlerstraße 1<br>Adresse - Postleitzahl: 12161<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Fehlerstraße 1 12161 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '83', 'name': 'Cubandres', 'description': 'Adresse - Adresse: Prenzlauer Allee 189<br>Adresse - Postleitzahl: 10405<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Prenzlauer Allee 189 10405 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '84', 'name': 'DAILY You', 'description': 'Adresse - Adresse: Colditzstraße 34<br>Adresse - Postleitzahl: 12099<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Colditzstraße 34 12099 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '85', 'name': 'DAILY You Marzahn', 'description': 'Adresse - Adresse: 3 Meeraner Straße<br>Adresse - Postleitzahl: 12681<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '3 Meeraner Straße 12681 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '86', 'name': 'DAILY You Moabit', 'description': 'Adresse - Adresse: Alt-Moabit 96D<br>Adresse - Postleitzahl: 10559<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Alt-Moabit 96D 10559 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '87', 'name': 'Deichgraf', 'description': 'Adresse - Adresse: Nordufer 10<br>Adresse - Postleitzahl: 13353<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Nordufer 10 13353 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '88', 'name': 'Der Platzhirsch', 'description': 'Adresse - Adresse: 6 Granseer Straße<br>Adresse - Postleitzahl: 10435<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '6 Granseer Straße 10435 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '89', 'name': 'Die Belegschaft', 'description': 'Adresse - Adresse: Zimmerstraße 23<br>Adresse - Postleitzahl: 10969<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Zimmerstraße 23 10969 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '90', 'name': 'Die Unverpackt Trier GmbH', 'description': 'Adresse - Adresse: Paulinstraße 65  <br>Adresse - Postleitzahl: 54292<br>Adresse - Stadt: Trier<br>Adresse - Staat: Rheinland-Pfalz<br>Adresse - Land: Deutschland', 'address': 'Paulinstraße 65   54292 Trier Rheinland-Pfalz Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '91', 'name': 'DönerTime', 'description': 'Adresse - Adresse: Beim Strohhause 24<br>Adresse - Postleitzahl: 20097<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Beim Strohhause 24 20097 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '92', 'name': 'Drachen City', 'description': 'Adresse - Adresse: Perlenpfuhl 6<br>Adresse - Postleitzahl: 50667<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Perlenpfuhl 6 50667 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '93', 'name': 'Ela\'s Back & Café', 'description': 'Adresse - Adresse: Mariannenstraße 36<br>Adresse - Postleitzahl: 10999<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Mariannenstraße 36 10999 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '94', 'name': 'Emma Kiosque', 'description': 'Adresse - Adresse: Am Südpark 0<br>Adresse - Postleitzahl: 50968<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Am Südpark 0 50968 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '95', 'name': 'Enno´s Backwerk', 'description': 'Adresse - Adresse: Tangstedter Landstraße 34<br>Adresse - Postleitzahl: 22415<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Deutschland', 'address': 'Tangstedter Landstraße 34 22415 Hamburg Hamburg Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '96', 'name': 'Fechtner', 'description': 'Adresse - Adresse: Torstraße 114<br>Adresse - Postleitzahl: 10119<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Torstraße 114 10119 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '97', 'name': 'FELD\'s Salat', 'description': 'Adresse - Adresse: Poolstraße 34<br>Adresse - Postleitzahl: 20355<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Poolstraße 34 20355 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '98', 'name': 'Fellfisch', 'description': 'Adresse - Adresse: 120 Emser Straße<br>Adresse - Postleitzahl: 12051<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '120 Emser Straße 12051 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '99', 'name': 'Fidelio', 'description': 'Adresse - Adresse: Moorhof 11<br>Adresse - Postleitzahl: 22399<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Moorhof 11 22399 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '100', 'name': 'Fishtank', 'description': 'Adresse - Adresse: Kiehlufer 75<br>Adresse - Postleitzahl: 12059<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Kiehlufer 75 12059 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '101', 'name': 'Fitbar', 'description': 'Adresse - Adresse: 15 Karl-Liebknecht-Straße<br>Adresse - Postleitzahl: 10178<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': '15 Karl-Liebknecht-Straße 10178 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '102', 'name': 'Fresh Food Factory', 'description': 'Adresse - Adresse: Wendenstraße 8<br>Adresse - Postleitzahl: 20097<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Wendenstraße 8 20097 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '103', 'name': 'Fresh Vitamins & More', 'description': 'Adresse - Adresse: 9 Spandauer Straße<br>Adresse - Postleitzahl: 10178<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '9 Spandauer Straße 10178 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '104', 'name': 'Frühstück & Cafe', 'description': 'Adresse - Adresse: 8 Kaltenkirchener Straße<br>Adresse - Postleitzahl: 22769<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': '8 Kaltenkirchener Straße 22769 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '105', 'name': 'Future Breakfast ISLA + Katie James', 'description': 'Adresse - Adresse: Hermannstraße 37<br>Adresse - Postleitzahl: 12049<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Hermannstraße 37 12049 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '106', 'name': 'Gantert Konditorei &  Bäckerei', 'description': 'Adresse - Adresse: Eppendorfer Weg 250<br>Adresse - Postleitzahl: 20251<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Eppendorfer Weg 250 20251 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '107', 'name': 'Gastwerk im Engelshof', 'description': 'Adresse - Adresse: Oberstraße 96<br>Adresse - Postleitzahl: 51149<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Oberstraße 96 51149 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '108', 'name': 'Golightly Coffee Bar', 'description': 'Adresse - Adresse: Friesenstraße 22<br>Adresse - Postleitzahl: 10965<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Friesenstraße 22 10965 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '109', 'name': 'Gong Gan', 'description': 'Adresse - Adresse: 2 Schwedter Straße<br>Adresse - Postleitzahl: 10119<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '2 Schwedter Straße 10119 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '110', 'name': 'Goodies', 'description': 'Adresse - Adresse: 69 Warschauer Straße<br>Adresse - Postleitzahl: 10243<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '69 Warschauer Straße 10243 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '111', 'name': 'Graf', 'description': 'Adresse - Adresse: Martin-Luther-Straße 8<br>Adresse - Postleitzahl: 10777<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Martin-Luther-Straße 8 10777 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '112', 'name': 'GreenGurus', 'description': 'Adresse - Adresse: Adalbertstraße 8<br>Adresse - Postleitzahl: 10999<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Adalbertstraße 8 10999 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '113', 'name': 'Grill Lokanta', 'description': 'Adresse - Adresse: Kaiserdamm 22<br>Adresse - Postleitzahl: 14057<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Kaiserdamm 22 14057 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '114', 'name': 'Gute Stube', 'description': 'Adresse - Adresse: Wandsbeker Chaussee 40<br>Adresse - Postleitzahl: 22089<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Wandsbeker Chaussee 40 22089 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '115', 'name': 'Harbour Bakery', 'description': 'Adresse - Adresse: 3 Bei den Sankt Pauli-Landungsbrücken<br>Adresse - Postleitzahl: 20359<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': '3 Bei den Sankt Pauli-Landungsbrücken 20359 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '116', 'name': 'Haweli', 'description': 'Adresse - Adresse: Höninger Weg 125<br>Adresse - Postleitzahl: 50969<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Höninger Weg 125 50969 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '117', 'name': 'Hepcats\'  Corner', 'description': 'Adresse - Adresse: Schinkestraße 14<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Schinkestraße 14 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '118', 'name': 'Herings im Martinswinkel', 'description': 'Adresse - Adresse: Fischmarkt 9<br>Adresse - Postleitzahl: 50667<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Fischmarkt 9 50667 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '119', 'name': 'Ho Ho', 'description': 'Adresse - Adresse: Leineweberstraße 42<br>Adresse - Postleitzahl: 45468<br>Adresse - Stadt: Mülheim an der Ruhr<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Leineweberstraße 42 45468 Mülheim an der Ruhr Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '120', 'name': 'Hoang Asia', 'description': 'Adresse - Adresse: Alfred-Kowalke-Straße 38<br>Adresse - Postleitzahl: 10315<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Alfred-Kowalke-Straße 38 10315 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '121', 'name': 'Hongfu', 'description': 'Adresse - Adresse: Hultschiner Damm 118<br>Adresse - Postleitzahl: 12623<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Hultschiner Damm 118 12623 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '122', 'name': 'Hot POinT', 'description': 'Adresse - Adresse: Salierring 44<br>Adresse - Postleitzahl: 50677<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Salierring 44 50677 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '123', 'name': 'Huawei Kantine', 'description': 'Adresse - Adresse: Willy-Brandt-Allee 20<br>Adresse - Postleitzahl: 53113<br>Adresse - Stadt: Bonn<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Willy-Brandt-Allee 20 53113 Bonn Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '124', 'name': 'Hüftgold', 'description': 'Adresse - Adresse: Neue Bahnhofstraße 29<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Neue Bahnhofstraße 29 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '125', 'name': 'Ima Blumenthal', 'description': 'Adresse - Adresse: Crellestraße 22A<br>Adresse - Postleitzahl: 10827<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Crellestraße 22A 10827 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '126', 'name': 'India Foods Singh GmbH', 'description': 'Adresse - Adresse: Bouchéstraße 12<br>Adresse - Postleitzahl: 12435<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Bouchéstraße 12 12435 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '127', 'name': 'Joseph’s', 'description': 'Adresse - Adresse: Bundesallee 1<br>Adresse - Postleitzahl: 10719<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Bundesallee 1 10719 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '128', 'name': 'Jubel Feine Patisserie', 'description': 'Adresse - Adresse: Hufelandstraße 10<br>Adresse - Postleitzahl: 10407<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Hufelandstraße 10 10407 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '129', 'name': 'Juli Restaurant', 'description': 'Adresse - Adresse: Schloßschmidstraße 5<br>Adresse - Postleitzahl: 80639<br>Adresse - Stadt: München<br>Adresse - Staat: Bayern<br>Adresse - Land: Germany', 'address': 'Schloßschmidstraße 5 80639 München Bayern Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '130', 'name': 'Kafé Local', 'description': 'Adresse - Adresse: Weyertal 32<br>Adresse - Postleitzahl: 50937<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Weyertal 32 50937 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '131', 'name': 'Kaiser Garten', 'description': 'Adresse - Adresse: Annenstraße 111<br>Adresse - Postleitzahl: 58453<br>Adresse - Stadt: Witten<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Annenstraße 111 58453 Witten Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '132', 'name': 'Karadeniz', 'description': 'Adresse - Adresse: <br>Adresse - Postleitzahl: <br>Adresse - Stadt: <br>Adresse - Staat: <br>Adresse - Land: ', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '133', 'name': 'Kartoffelpfanne', 'description': 'Adresse - Adresse: Burgherrenstraße 11<br>Adresse - Postleitzahl: 12101<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Burgherrenstraße 11 12101 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '134', 'name': 'Kaspi', 'description': 'Adresse - Adresse: 12 Grünberger Straße<br>Adresse - Postleitzahl: 10243<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '12 Grünberger Straße 10243 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '135', 'name': 'Kervan Simit', 'description': 'Adresse - Adresse: Beim Strohhause 34<br>Adresse - Postleitzahl: 20097<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Beim Strohhause 34 20097 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '136', 'name': 'Kingdo', 'description': 'Adresse - Adresse: Leonorenstraße 60<br>Adresse - Postleitzahl: 12247<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Leonorenstraße 60 12247 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '137', 'name': 'Klas Bäckerei', 'description': 'Adresse - Adresse: Naunynstraße 2<br>Adresse - Postleitzahl: 10997<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Naunynstraße 2 10997 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '138', 'name': 'Klötze & Schinken', 'description': 'Adresse - Adresse: Bürknerstraße 12<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Bürknerstraße 12 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '139', 'name': 'Koshari Ahl Kairo', 'description': 'Adresse - Adresse: Kapuzinerstraße 35<br>Adresse - Postleitzahl: 80469<br>Adresse - Stadt: München<br>Adresse - Staat: Bayern<br>Adresse - Land: Germany', 'address': 'Kapuzinerstraße 35 80469 München Bayern Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '140', 'name': 'Koyote', 'description': 'Adresse - Adresse: Admiralstraße 20<br>Adresse - Postleitzahl: 10999<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Admiralstraße 20 10999 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '141', 'name': 'Kremanski', 'description': 'Adresse - Adresse: Adalbertstraße 96<br>Adresse - Postleitzahl: 10999<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Adalbertstraße 96 10999 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '142', 'name': 'La Parrilla', 'description': 'Adresse - Adresse: Albrechtstraße 11<br>Adresse - Postleitzahl: 10117<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Albrechtstraße 11 10117 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '143', 'name': 'La Villa Henkenberg', 'description': 'Adresse - Adresse: Henkenbergstraße 145<br>Adresse - Postleitzahl: 44797<br>Adresse - Stadt: Bochum<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Henkenbergstraße 145 44797 Bochum Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '144', 'name': 'Landhaus Alt-Mariendorf', 'description': 'Adresse - Adresse: Alt-Mariendorf 45<br>Adresse - Postleitzahl: 12107<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Alt-Mariendorf 45 12107 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '145', 'name': 'LauRes', 'description': 'Adresse - Adresse: Kreuzweg 12<br>Adresse - Postleitzahl: 20099<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Kreuzweg 12 20099 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '146', 'name': 'Le Bretagne', 'description': 'Adresse - Adresse: 15 Marheinekeplatz<br>Adresse - Postleitzahl: 10961<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '15 Marheinekeplatz 10961 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '147', 'name': 'Leckerback', 'description': 'Adresse - Adresse: Mehringdamm 51<br>Adresse - Postleitzahl: 10961<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Mehringdamm 51 10961 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '148', 'name': 'Lexis Café Weinbar', 'description': 'Adresse - Adresse: 77 Danziger Straße<br>Adresse - Postleitzahl: 10405<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': '77 Danziger Straße 10405 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '149', 'name': 'Liberda Fürbringerstraße', 'description': 'Adresse - Adresse: Fürbringerstraße 30<br>Adresse - Postleitzahl: 10961<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Fürbringerstraße 30 10961 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '150', 'name': 'Liberda Pflügerstraße', 'description': 'Adresse - Adresse: Pflügerstraße 67<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Pflügerstraße 67 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '151', 'name': 'Liebe(R) Essen', 'description': 'Adresse - Adresse: Oberlandstraße 26<br>Adresse - Postleitzahl: 12099<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Oberlandstraße 26 12099 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '152', 'name': 'LilliSu', 'description': 'Adresse - Adresse: Große Rainstraße 18<br>Adresse - Postleitzahl: 22765<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Große Rainstraße 18 22765 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '153', 'name': 'Limu', 'description': 'Adresse - Adresse: Bellealliancestraße 38<br>Adresse - Postleitzahl: 20259<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Bellealliancestraße 38 20259 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '154', 'name': 'Löffel-Gabel-Fingerfood Event & Catering GmbH', 'description': 'Adresse - Adresse: Parsevalstr. 11<br>Adresse - Postleitzahl: 40489<br>Adresse - Stadt: Düsseldorf<br>Adresse - Staat: <br>Adresse - Land: Deutschland', 'address': 'Parsevalstr. 11 40489 Düsseldorf Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '155', 'name': 'Macarons de Stéphane', 'description': 'Adresse - Adresse: Gärtnerstraße 13<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Gärtnerstraße 13 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '156', 'name': 'MadaMe', 'description': 'Adresse - Adresse: 10 Mehringplatz<br>Adresse - Postleitzahl: 10969<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '10 Mehringplatz 10969 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '157', 'name': 'Mahlzeit Live', 'description': 'Adresse - Adresse: Albert-Einstein-Ring 8<br>Adresse - Postleitzahl: 22761<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Albert-Einstein-Ring 8 22761 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '158', 'name': 'Majestic', 'description': 'Adresse - Adresse: Kistlerhofstraße 251<br>Adresse - Postleitzahl: 81379<br>Adresse - Stadt: München<br>Adresse - Staat: Bayern<br>Adresse - Land: Germany', 'address': 'Kistlerhofstraße 251 81379 München Bayern Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '159', 'name': 'Mama\'s Food', 'description': 'Adresse - Adresse: Stromstraße 52<br>Adresse - Postleitzahl: 10551<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Stromstraße 52 10551 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '160', 'name': 'Masala', 'description': 'Adresse - Adresse: Slabystraße 25<br>Adresse - Postleitzahl: 12459<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Slabystraße 25 12459 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '161', 'name': 'Melek Bäckerei', 'description': 'Adresse - Adresse: Yorckstraße 13<br>Adresse - Postleitzahl: 10965<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Yorckstraße 13 10965 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '162', 'name': 'Mercan', 'description': 'Adresse - Adresse: Wiener Straße 10<br>Adresse - Postleitzahl: 10999<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Wiener Straße 10 10999 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '163', 'name': 'Mert Bäckerei Hobrechtstraße', 'description': 'Adresse - Adresse: Hobrechtstraße 38<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Hobrechtstraße 38 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '164', 'name': 'Mert Bäckerei Körtestraße', 'description': 'Adresse - Adresse: Körtestraße 12<br>Adresse - Postleitzahl: 10967<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Körtestraße 12 10967 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '165', 'name': 'Mia y Leo', 'description': 'Adresse - Adresse: Jagowstraße 26<br>Adresse - Postleitzahl: 10555<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Jagowstraße 26 10555 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '166', 'name': 'Mierenback & Café', 'description': 'Adresse - Adresse: 11 Mierendorffplatz<br>Adresse - Postleitzahl: 10589<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '11 Mierendorffplatz 10589 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '167', 'name': 'Milch & Zucker', 'description': 'Adresse - Adresse: 70 Warschauer Straße<br>Adresse - Postleitzahl: 10243<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '70 Warschauer Straße 10243 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '168', 'name': 'Miss Ploff', 'description': 'Adresse - Adresse: Eulerstraße 9<br>Adresse - Postleitzahl: 13357<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Eulerstraße 9 13357 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '169', 'name': 'Mom’s Kitchen', 'description': 'Adresse - Adresse: Turmstraße 53<br>Adresse - Postleitzahl: 10551<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Turmstraße 53 10551 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '170', 'name': 'Moosland', 'description': 'Adresse - Adresse: Bäumerplan 28<br>Adresse - Postleitzahl: 12101<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Bäumerplan 28 12101 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '171', 'name': 'Mosaique', 'description': 'Adresse - Adresse: Knesebeckstraße 20<br>Adresse - Postleitzahl: 10623<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Knesebeckstraße 20 10623 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '172', 'name': 'Naveenapath', 'description': 'Adresse - Adresse: 22 Tegeler Straße<br>Adresse - Postleitzahl: 13353<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '22 Tegeler Straße 13353 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '173', 'name': 'No Need For Fancy Names', 'description': 'Adresse - Adresse: 20 Zossener Straße<br>Adresse - Postleitzahl: 10961<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '20 Zossener Straße 10961 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '174', 'name': 'Nuni\'s - Edel & Kühn', 'description': 'Adresse - Adresse: 1 Eberswalder Straße<br>Adresse - Postleitzahl: 10437<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': '1 Eberswalder Straße 10437 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '175', 'name': 'Olivia Schokoladen & Tartes', 'description': 'Adresse - Adresse: Wühlischstraße 30<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Wühlischstraße 30 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '176', 'name': 'Omori', 'description': 'Adresse - Adresse: 219 Castroper Straße<br>Adresse - Postleitzahl: 44791<br>Adresse - Stadt: Bochum<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': '219 Castroper Straße 44791 Bochum Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '177', 'name': 'Orient ESSpress Döner & Feinkost Imbiss', 'description': 'Adresse - Adresse: 26 Zossener Straße<br>Adresse - Postleitzahl: 10961<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '26 Zossener Straße 10961 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '178', 'name': 'Panaelme', 'description': 'Adresse - Adresse: Steckelhörn 12<br>Adresse - Postleitzahl: 20457<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Steckelhörn 12 20457 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '179', 'name': 'pennycakes', 'description': 'Adresse - Adresse: Alter Militärring 68<br>Adresse - Postleitzahl: 50933<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Alter Militärring 68 50933 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '180', 'name': 'Philo', 'description': 'Adresse - Adresse: Grindelallee 161<br>Adresse - Postleitzahl: 20146<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Grindelallee 161 20146 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '181', 'name': 'Populus Coffee', 'description': 'Adresse - Adresse: Maybachufer 20<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Maybachufer 20 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '182', 'name': 'Prünster', 'description': 'Adresse - Adresse: Pintschallee 24A<br>Adresse - Postleitzahl: 12347<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Pintschallee 24A 12347 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '183', 'name': 'Punjabi', 'description': 'Adresse - Adresse: Gabriel-Max-Straße 2<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Gabriel-Max-Straße 2 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '184', 'name': 'Qing Dao', 'description': 'Adresse - Adresse: 4 Mindener Straße<br>Adresse - Postleitzahl: 50679<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': '4 Mindener Straße 50679 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '185', 'name': 'Red Sun', 'description': 'Adresse - Adresse: Am Königshof 6<br>Adresse - Postleitzahl: 40822<br>Adresse - Stadt: Mettmann<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Am Königshof 6 40822 Mettmann Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '186', 'name': 'Rendezvous', 'description': 'Adresse - Adresse: Heinsbergstraße 11A<br>Adresse - Postleitzahl: 50674<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Heinsbergstraße 11A 50674 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '187', 'name': 'Restaurant Hof Zwei im Mövenpick Hotel', 'description': 'Adresse - Adresse: 3 Schöneberger Straße<br>Adresse - Postleitzahl: 10963<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': '3 Schöneberger Straße 10963 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '188', 'name': 'Restaurant Landhaus Botanischer Garten', 'description': 'Adresse - Adresse: Unter den Eichen 8<br>Adresse - Postleitzahl: 12203<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Unter den Eichen 8 12203 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '189', 'name': 'Restaurant Mustang Gastronomiebetrieb GmbH', 'description': 'Adresse - Adresse: Mariendorfer Damm 296<br>Adresse - Postleitzahl: 12107<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Mariendorfer Damm 296 12107 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '190', 'name': 'Restaurant Opera', 'description': 'Adresse - Adresse: Leonorenstraße 18<br>Adresse - Postleitzahl: 12247<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Leonorenstraße 18 12247 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '191', 'name': 'Restaurant Slavia', 'description': 'Adresse - Adresse: Am Bollwerk 7<br>Adresse - Postleitzahl: 50667<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nrw<br>Adresse - Land: Deutschland', 'address': 'Am Bollwerk 7 50667 Köln Nrw Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '192', 'name': 'Restaurant Wawel', 'description': 'Adresse - Adresse: Neuköllner Straße 243<br>Adresse - Postleitzahl: 12357<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Neuköllner Straße 243 12357 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '193', 'name': 'Rises Delicacies', 'description': 'Adresse - Adresse: Veteranenstraße 25<br>Adresse - Postleitzahl: 10119<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Veteranenstraße 25 10119 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '194', 'name': 'Roter Lotus', 'description': 'Adresse - Adresse: Sandstraße 2<br>Adresse - Postleitzahl: 45964<br>Adresse - Stadt: Gladbeck<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Sandstraße 2 45964 Gladbeck Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '195', 'name': 'Saint Louis', 'description': 'Adresse - Adresse: Deutzer Freiheit 89<br>Adresse - Postleitzahl: 50679<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Deutzer Freiheit 89 50679 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '196', 'name': 'Sakura', 'description': 'Adresse - Adresse: 204 Castroper Straße<br>Adresse - Postleitzahl: 44791<br>Adresse - Stadt: Bochum<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': '204 Castroper Straße 44791 Bochum Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '197', 'name': 'SANDWICHart I Leibnitzstraße', 'description': 'Adresse - Adresse: Leibnizstraße 60<br>Adresse - Postleitzahl: 10629<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Leibnizstraße 60 10629 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '198', 'name': 'SANDWICHart II Seydelstraße', 'description': 'Adresse - Adresse: Seydelstraße 21<br>Adresse - Postleitzahl: 10117<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Seydelstraße 21 10117 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '199', 'name': 'SchlemmerOase', 'description': 'Adresse - Adresse: Helmholtzstraße 22<br>Adresse - Postleitzahl: 10587<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Helmholtzstraße 22 10587 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '200', 'name': 'Sichuan', 'description': 'Adresse - Adresse: Albrechtstraße 92<br>Adresse - Postleitzahl: 12167<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Albrechtstraße 92 12167 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '201', 'name': 'Sichuan Gourmet', 'description': 'Adresse - Adresse: 124 Osdorfer Straße<br>Adresse - Postleitzahl: 12207<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '124 Osdorfer Straße 12207 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '202', 'name': 'Simit Evi', 'description': 'Adresse - Adresse: Müllerstraße 147<br>Adresse - Postleitzahl: 13353<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Müllerstraße 147 13353 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '203', 'name': 'Small Coffee Lounge', 'description': 'Adresse - Adresse: Gärtnerstraße 10<br>Adresse - Postleitzahl: 20253<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Gärtnerstraße 10 20253 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '204', 'name': 'SO.CAL drink & dine', 'description': 'Adresse - Adresse: Occamstraße 7<br>Adresse - Postleitzahl: 80802<br>Adresse - Stadt: München<br>Adresse - Staat: Bayern<br>Adresse - Land: Germany', 'address': 'Occamstraße 7 80802 München Bayern Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '205', 'name': 'Stadthotel Restaurant Smutje', 'description': 'Adresse - Adresse: Neuer Weg 89<br>Adresse - Postleitzahl: 26506<br>Adresse - Stadt: Norden<br>Adresse - Staat: Deutschland<br>Adresse - Land: Niedersachsen', 'address': 'Neuer Weg 89 26506 Norden Deutschland Niedersachsen', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '206', 'name': 'Stadtteil Café', 'description': 'Adresse - Adresse: 33 Edinburger Straße<br>Adresse - Postleitzahl: 13349<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '33 Edinburger Straße 13349 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '207', 'name': 'Stenz', 'description': 'Adresse - Adresse: Lindwurmstraße 122<br>Adresse - Postleitzahl: 80337<br>Adresse - Stadt: München<br>Adresse - Staat: Bayern<br>Adresse - Land: Germany', 'address': 'Lindwurmstraße 122 80337 München Bayern Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '208', 'name': 'Sushi And Friends', 'description': 'Adresse - Adresse: Sterndamm 57<br>Adresse - Postleitzahl: 12487<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Sterndamm 57 12487 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '209', 'name': 'Sweet Café Bakery', 'description': 'Adresse - Adresse: Kopernikusstraße 20<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Kopernikusstraße 20 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '210', 'name': 'Tamar', 'description': 'Adresse - Adresse: 58 Rigaer Straße<br>Adresse - Postleitzahl: 10247<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '58 Rigaer Straße 10247 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '211', 'name': 'Tehranchi Feinkost', 'description': 'Adresse - Adresse: Ballindamm 40<br>Adresse - Postleitzahl: 20095<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Deutschland', 'address': 'Ballindamm 40 20095 Hamburg Hamburg Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '212', 'name': 'Teras Café', 'description': 'Adresse - Adresse: Piccoloministraße 407<br>Adresse - Postleitzahl: 51067<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Piccoloministraße 407 51067 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '213', 'name': 'Thai-Huong-Snack', 'description': 'Adresse - Adresse: Heinrich-Heine-Platz 12<br>Adresse - Postleitzahl: 10179<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Heinrich-Heine-Platz 12 10179 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '214', 'name': 'Thoi Lai Quan', 'description': 'Adresse - Adresse: 85 Lübecker Straße<br>Adresse - Postleitzahl: 22087<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': '85 Lübecker Straße 22087 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '215', 'name': 'TMK Service GmbH - bejuicy - kaltgepresste Säfte', 'description': 'Adresse - Adresse: 1 Kemperplatz<br>Adresse - Postleitzahl: 10785<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': '1 Kemperplatz 10785 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '216', 'name': 'Tokio Sushi Großer Burstah', 'description': 'Adresse - Adresse: Großer Burstah 42<br>Adresse - Postleitzahl:  20457<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: <br>Adresse - Land: ', 'address': 'Großer Burstah 42  20457 Hamburg', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '217', 'name': 'Tondo', 'description': 'Adresse - Adresse: Tonndorfer Hauptstraße 59<br>Adresse - Postleitzahl: 22045<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Tonndorfer Hauptstraße 59 22045 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '218', 'name': 'Traum Back', 'description': 'Adresse - Adresse: Anzengruberstraße 6<br>Adresse - Postleitzahl: 12043<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Anzengruberstraße 6 12043 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '219', 'name': 'treemans store, bakery & coffee', 'description': 'Adresse - Adresse: 69 Dachauer Straße<br>Adresse - Postleitzahl: 80335<br>Adresse - Stadt: München<br>Adresse - Staat: Bayern<br>Adresse - Land: Germany', 'address': '69 Dachauer Straße 80335 München Bayern Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '220', 'name': 'Turnhalle Holteistraße GmbH & Co. KG', 'description': 'Adresse - Adresse: Holteistraße 6-9<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Holteistraße 6-9 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '221', 'name': 'Two Planets', 'description': 'Adresse - Adresse: Hermannstraße 230<br>Adresse - Postleitzahl: 12049<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Hermannstraße 230 12049 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '222', 'name': 'U-Back', 'description': 'Adresse - Adresse: Frankfurter Allee 193<br>Adresse - Postleitzahl: 10365<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Frankfurter Allee 193 10365 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '223', 'name': 'Velicious', 'description': 'Adresse - Adresse: Lenbachstraße 13B<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Lenbachstraße 13B 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '224', 'name': 'Via Nova', 'description': 'Adresse - Adresse: 9 Revaler Straße<br>Adresse - Postleitzahl: 10245<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': '9 Revaler Straße 10245 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '225', 'name': 'Vielfalter - Yoga & Lifestyle', 'description': 'Adresse - Adresse: Brunnenstraße 147<br>Adresse - Postleitzahl: 10115<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Brunnenstraße 147 10115 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '226', 'name': 'Vis-à-Vis', 'description': 'Adresse - Adresse: Derfflingerstraße 19<br>Adresse - Postleitzahl: 10785<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Derfflingerstraße 19 10785 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '227', 'name': 'Vuture Vood', 'description': 'Adresse - Adresse: Ehrlichstraße 68<br>Adresse - Postleitzahl: 10318<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Ehrlichstraße 68 10318 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '228', 'name': 'Wale Können Fliegen', 'description': 'Adresse - Adresse: Hobrechtstraße 24<br>Adresse - Postleitzahl: 12047<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Hobrechtstraße 24 12047 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '229', 'name': 'Weinwirtschaft in der Akademie der Künste', 'description': 'Adresse - Adresse: Hanseatenweg 10<br>Adresse - Postleitzahl: 10557<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Hanseatenweg 10 10557 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '230', 'name': 'Weltküche', 'description': 'Adresse - Adresse: Graefestraße 18<br>Adresse - Postleitzahl: 10967<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Graefestraße 18 10967 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '231', 'name': 'Yummy Town', 'description': 'Adresse - Adresse: Höninger Weg 218B<br>Adresse - Postleitzahl: 50969<br>Adresse - Stadt: Köln<br>Adresse - Staat: Nordrhein-Westfalen<br>Adresse - Land: Germany', 'address': 'Höninger Weg 218B 50969 Köln Nordrhein-Westfalen Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '232', 'name': 'Zhou\'s Five Lichtenberg', 'description': 'Adresse - Adresse: Marktstraße 6<br>Adresse - Postleitzahl: 10317<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Deutschland', 'address': 'Marktstraße 6 10317 Berlin Berlin Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '233', 'name': 'Zhou’s Five Moabit', 'description': 'Adresse - Adresse: Stephanstraße 41<br>Adresse - Postleitzahl: 10559<br>Adresse - Stadt: Berlin<br>Adresse - Staat: Berlin<br>Adresse - Land: Germany', 'address': 'Stephanstraße 41 10559 Berlin Berlin Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '234', 'name': 'Zum Quarkbällchen Berne Marktplatz', 'description': 'Adresse - Adresse: Hermann-Balk-Straße<br>Adresse - Postleitzahl: 22147<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Deutschland', 'address': 'Hermann-Balk-Straße 22147 Hamburg Hamburg Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '235', 'name': 'Zum Quarkbällchen Schmalzbäckerei Burgwedel Busbahnhof', 'description': 'Adresse - Adresse: Walter-Jungleib-Straße 1<br>Adresse - Postleitzahl: 22457<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Deutschland', 'address': 'Walter-Jungleib-Straße 1 22457 Hamburg Hamburg Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '236', 'name': 'Zum Quarkbällchen Winterhuder Marktplatz Mi', 'description': 'Adresse - Adresse: Winterhuder Marktplatz<br>Adresse - Postleitzahl: 22299<br>Adresse - Stadt: Hamburg<br>Adresse - Staat: Hamburg<br>Adresse - Land: Germany', 'address': 'Winterhuder Marktplatz 22299 Hamburg Hamburg Germany', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }, { 'id': '237', 'name': 'Zur Mühle', 'description': 'Adresse - Adresse: Mühlenweg 1<br>Adresse - Postleitzahl: 21465<br>Adresse - Stadt: Reinbek<br>Adresse - Staat: Schleswig-Holstein<br>Adresse - Land: Deutschland', 'address': 'Mühlenweg 1 21465 Reinbek Schleswig-Holstein Deutschland', 'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png' }];
        return { products, stores };
    };
    return InMemoryDataService;
}());

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (message) {
        console.log('Log.info: ' + message);
    };
    LoggerService.prototype.error = function (message) {
        console.error('Log.error: ' + message);
    };
    LoggerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        this.error(errMsg);
        return Observable_2.throw(error.json().error || 'Server error');
    };
    LoggerService = __decorate([
        _angular_core.Injectable()
    ], LoggerService);
    return LoggerService;
}());

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}

var CoreModule = (function () {
    function CoreModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        _angular_core.NgModule({
            declarations: [],
            imports: [
                angularInMemoryWebApi.InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 300 })
            ],
            exports: [],
            providers: [
                LoggerService
            ]
        }),
        __param(0, _angular_core.Optional()),
        __param(0, _angular_core.SkipSelf())
    ], CoreModule);
    return CoreModule;
}());

var RatingComponent = (function () {
    function RatingComponent(loggerService) {
        this.loggerService = loggerService;
        this.ratingClicked = new _angular_core.EventEmitter();
    }
    RatingComponent.prototype.ngOnChanges = function () {
        this.ratingWidth = this.rating * 86 / 5;
    };
    RatingComponent.prototype.onClick = function () {
        this.loggerService.log('Rating clicked [' + this.rating + ']');
        this.ratingClicked.emit("User rating is up to [" + this.rating + "]");
    };
    __decorate([
        _angular_core.Input()
    ], RatingComponent.prototype, "rating");
    __decorate([
        _angular_core.Output()
    ], RatingComponent.prototype, "ratingClicked");
    RatingComponent = __decorate([
        _angular_core.Component({
            selector: 'sm-shared-rating',
            template: "<div class=\"crop\" [style.width.px]=\"ratingWidth\" [title]=\"rating\" (click)=\"onClick()\">\n  <div style=\"width: 86px\">\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n  </div>\n</div>\n",
            styles: [".crop {\n  overflow: hidden;\n}\ndiv {\n  cursor: pointer;\n}\n"]
        })
    ], RatingComponent);
    return RatingComponent;
}());

var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        _angular_core.NgModule({
            declarations: [RatingComponent],
            imports: [
                _angular_material.MaterialModule.forRoot()
            ],
            exports: [
                _angular_common.CommonModule,
                _angular_forms.FormsModule,
                _angular_forms.ReactiveFormsModule,
                _angular_material.MaterialModule,
                RatingComponent
            ],
            providers: [
                _angular_material.MdSnackBar
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 70;
        this.imageMargin = 2;
        this.gridRows = 2;
        this.gridRatio = '3:3';
        this.showImage = false;
        this.placeholderFilter = 'Looking for...';
        this.listFilter = '';
        this.errorMessage = '';
    }
    ProductListComponent.prototype.onResize = function (width) {
        this.gridRows = width > 1300 ? 3
            : width > 900 ? 2
                : 1;
        this.gridRatio = width > 1300 ? '3:3'
            : width > 1150 ? '4:3'
                : width > 900 ? '3:3'
                    : '4:3';
    };
    ProductListComponent.prototype.getWindowWidth = function () {
        return window.innerWidth;
    };
    ProductListComponent.prototype.displayFilter = function () {
        return '- Filtered by: ' + this.listFilter;
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.onResize(this.getWindowWidth());
    };
    ProductListComponent = __decorate([
        _angular_core.Component({
            template: "<div class=\"panel panel-primary\" (window:resize)=\"onResize($event.target.innerWidth)\">\n  <div class=\"panel-heading\">\n    {{pageTitle}} <span *ngIf=\"listFilter.length\"> {{displayFilter()}}</span>\n  </div>\n  <div class=\"panel-body\">\n    <md-card>\n      <div class=\"row\">\n        <div class=\"form-group col-md-4\">\n          <label for=\"sel1\">Search:</label>\n          <input id=\"sel1\" type=\"text\" class=\"form-control\"\n          [(ngModel)]=\"listFilter\" [placeholder]=\"placeholderFilter\" />\n        </div>\n      </div>\n    </md-card>\n\n    <md-card *ngIf=\"products && (\n                    (!products.length) ||\n                    ((products | productFilter:listFilter).length ===0)\n                    )\" class=\"results\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <span class=\"glyphicon glyphicon-ban-circle\" aria-hidden=\"true\"></span>\n          No results found\n        </div>\n      </div>\n    </md-card>\n\n    <md-grid-list *ngIf=\"products && products.length\" class=\"md-grid-list-product\" [cols]=\"gridRows\" [rowHeight]=\"gridRatio\" gutterSize=\"15px\"  >\n      <md-grid-tile\n        *ngFor=\"let product of products |\n          productFilter:listFilter;\n          let i = index\"\n        [colspan]=\"1\"\n        [rowspan]=\"1\">\n\n        <md-card mdCardBorder class=\"md-card-product\" [routerLink]=\"['/products', product.id]\">\n          <img md-card-image id=\"product{{i}}\" [src]=\"product.imageUrl\" [title]=\"product.productName\">\n          <md-card-header>\n            <md-card-title class=\"md-card-title-product\">\n              <md-chip-list>\n                <md-chip color=\"primary\" selected=\"true\">\n                  {{product.productName}}\n                </md-chip>\n                <md-chip color=\"accent\" selected=\"false\">\n                  <b>{{ product.price | currency:\"EUR\":true:\"1.2-2\"}}</b>\n                </md-chip>\n              </md-chip-list>\n            </md-card-title>\n          </md-card-header>\n          <md-card-content class=\"md-card-content-product\">\n            <sm-shared-rating\n              [rating]=\"product.starRating\" (ratingClicked)=\"onRatingClicked($event)\">\n            </sm-shared-rating>\n            {{product.description}}\n          </md-card-content>\n        </md-card>\n\n      </md-grid-tile>\n    </md-grid-list>\n\n    <!-- <div class=\"table-responsive\">\n      <table class=\"table\" *ngIf=\"products && products.length\">\n        <thead>\n          <tr>\n            <th>\n              <button class=\"btn btn-primary\" (click)=\"toggleImage()\">\n                  {{showImage ? \"Hide\" : \"Show\"}} Image\n              </button>\n            </th>\n            <th>Index</th>\n            <th>Product</th>\n            <th>Code</th>\n            <th>Released</th>\n            <th>Price</th>\n            <th>User Rating</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products |\n                productFilter:listFilter;\n                let i = index\">\n            <td>\n              <img *ngIf=\"showImage\" [src]=\"product.imageUrl\" [title]=\"product.productName\" [style.width.px]=\"imageWidth\" [style.margin.px]=\"imageMargin\">\n            </td>\n            <td>{{ i+1 }}</td>\n            <td>\n              <a [routerLink]=\"['/product', product.id]\">\n                  {{product.productName}}\n              </a>\n            </td>\n            <td>{{ product.productCode | lowercase }}</td>\n            <td>{{ product.releaseDate }}</td>\n            <td>{{ product.price | currency:\"EUR\":true:\"1.2-2\"}}</td>\n            <td>\n              <sm-shared-rating\n                [rating]=\"product.starRating\" (ratingClicked)=\"onRatingClicked($event)\">\n              </sm-shared-rating>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>-->\n\n  </div>\n</div>\n",
            styles: ["table {\n  margin: 20px;\n}\nthead {\n    color: #337AB7;\n}\ntd {\n  vertical-align: middle;\n}\n"]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());

var ProductDetailDialogComponent = (function () {
    function ProductDetailDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ProductDetailDialogComponent.prototype.ngOnInit = function () {
        this.editProduct = Object.assign({}, this.product);
    };
    ProductDetailDialogComponent = __decorate([
        _angular_core.Component({
            selector: 'product-detail-dialog',
            template: "<div md-dialog-title>\n  Edit Product Details:\n</div>\n\n<md-dialog-content>\n  <md-card>\n    <md-input-container class=\"md-input-container-product\">\n      <input mdInput #name=\"ngModel\" placeholder=\"Name\" [(ngModel)]=\"editProduct.productName\" required>\n    </md-input-container>\n    <md-input-container class=\"md-input-container-product\">\n      <textarea mdInput id=\"description\" placeholder=\"Description\" [(ngModel)]=\"editProduct.description\">\n      </textarea>\n    </md-input-container>\n    <md-input-container class=\"md-input-container-product\">\n      <input mdInput #price=\"ngModel\" placeholder=\"Price \u20AC\" [(ngModel)]=\"editProduct.price\" required>\n    </md-input-container>\n    Rating [{{editProduct.starRating | number : '1.1-1'}}]\n    <md-slider [min]=\"0\" [max]=\"5\" [step]=\"0.1\" [thumb-label]=\"true\" [(ngModel)]=\"editProduct.starRating\">\n    </md-slider>\n  </md-card>\n</md-dialog-content>\n\n<md-dialog-actions class=\"md-dialog-actions-product\">\n  <button type=\"button\" class=\"btn btn-success\" style=\"width:80px\" (click)=\"dialogRef.close(this.editProduct)\"\n  [disabled]=\"!name.valid || !price.valid\">\n    <i class=\"glyphicon glyphicon-edit\"></i> Save\n  </button>\n  <button type=\"button\" class=\"btn btn-danger\" style=\"width:80px\"\n  (click)=\"dialogRef.close('cancel')\">\n    <i class=\"glyphicon glyphicon-remove\"></i> Cancel\n  </button>\n</md-dialog-actions>\n",
            styles: [".ng-valid[required], .ng-valid.required {\n  border-right: 3px solid #42A948; /* green */\n}\n.ng-invalid:not(md-input-container) {\n  border-right: 3px solid #a94442; /* red */\n}\n"]
        })
    ], ProductDetailDialogComponent);
    return ProductDetailDialogComponent;
}());

var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router, productService, dialog, loggerService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.dialog = dialog;
        this.loggerService = loggerService;
        this.pageTitle = '';
        this.errorMessage = '';
        this.showBar = false;
        this.updated = false;
        this.updateMessage = ' - Updated!';
        this.deleted = false;
        this.deleteMessage = ' - Deleted!';
    }
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.setTitle(message);
    };
    ProductDetailComponent.prototype.setTitle = function (message) {
        if (message === void 0) { message = ''; }
        this.pageTitle = "Product Detail: " + this.product.productName + " " + message;
    };
    ProductDetailComponent.prototype.openDialog = function () {
        var _this = this;
        this.updated = false;
        var dialogRef = this.dialog.open(ProductDetailDialogComponent);
        dialogRef.componentInstance.product = this.product;
        dialogRef.afterClosed().subscribe(function (result) {
            (typeof result === 'object') ? (_this.showBar = true,
                _this.updateProduct(result))
                : _this.updated = false;
        });
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) {
            _this.product = product;
            _this.setTitle();
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.updateProduct = function (product) {
        var _this = this;
        this.productService.updateProduct(product).subscribe(function (result) {
            _this.product = Object.assign({}, product);
            _this.showBar = false;
            _this.updated = true;
        }, function (error) {
            _this.errorMessage = error;
            _this.showBar = false;
        });
    };
    ProductDetailComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.updated = false;
        this.showBar = true;
        this.productService.deleteProduct(id).subscribe(function (result) {
            // this.product = undefined;
            _this.showBar = false;
            _this.deleted = true;
            _this.setTitle();
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subcription = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ProductDetailComponent = __decorate([
        _angular_core.Component({
            template: "<div class=\"panel panel-primary\" *ngIf=\"product\">\n  <div class=\"panel-heading\" style=\"font-size:large\">\n    {{pageTitle}}\n    <md-progress-bar *ngIf=\"showBar\" color=\"accent\" mode=\"indeterminate\"></md-progress-bar>\n    <span *ngIf=\"updated\" class=\"updated\">\n       {{updateMessage}}\n      <span class=\"glyphicon glyphicon-ok-circle\"></span>\n    </span>\n    <span *ngIf=\"deleted\" class=\"deleted\">\n       {{deleteMessage}}\n      <span class=\"glyphicon glyphicon-remove-circle\"></span>\n    </span>\n  </div>\n\n  <div class=\"panel-body\">\n    <md-card *ngIf=\"!deleted\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">Name:</div>\n            <div class=\"col-md-6\">{{product.productName}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">Code:</div>\n            <div class=\"col-md-6\">{{product.productCode}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">Description:</div>\n            <div class=\"col-md-6\">{{product.description}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">Released:</div>\n            <div class=\"col-md-6\">{{product.releaseDate}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">Price:</div>\n            <div class=\"col-md-6\">{{product.price|currency:'EUR':true:\"1.2-2\"}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">Rating:</div>\n            <div class=\"col-md-6\">\n              <sm-shared-rating\n                [rating]=\"product.starRating\" (ratingClicked)=\"onRatingClicked($event)\">\n              </sm-shared-rating>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <img class=\"center-block img-responsive\" [style.width.px]=\"200\" [style.margin.px]=\"2\" [src]=\"product.imageUrl\" [title]=\"product.productName\">\n        </div>\n      </div>\n    </md-card>\n    <md-card class=\"md-card-buttons\">\n      <a class=\"btn btn-default\" (click)=\"onBack()\" style=\"width:80px\">\n        <i class=\"glyphicon glyphicon-chevron-left\"></i> Back\n      </a>\n      <a class=\"btn btn-primary\" style=\"width:80px\" (click)=\"openDialog()\" *ngIf=\"!deleted\">\n        <i class=\"glyphicon glyphicon-edit\"></i> Edit\n      </a>\n      <a class=\"btn btn-danger\" style=\"width:80px\" (click)=\"deleteProduct(product.id)\" *ngIf=\"!deleted\">\n        <i class=\"glyphicon glyphicon-remove\"></i> Delete\n      </a>\n    </md-card>\n  </div>\n</div>\n",
            styles: [""]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());

var ProductDetailGuard = (function () {
    function ProductDetailGuard(router) {
        this.router = router;
    }
    ProductDetailGuard.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this.router.navigate(['/products']);
            return false;
        }
        
        return true;
    };
    ProductDetailGuard = __decorate([
        _angular_core.Injectable()
    ], ProductDetailGuard);
    return ProductDetailGuard;
}());

var productRoutes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent }
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_router.RouterModule.forChild(productRoutes)
            ],
            exports: [_angular_router.RouterModule]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());

var ProductFilterPipe = (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (productList, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? productList.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : productList;
    };
    ProductFilterPipe = __decorate([
        _angular_core.Pipe({
            name: 'productFilter'
        })
    ], ProductFilterPipe);
    return ProductFilterPipe;
}());

var __extends$9 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1$3 = OuterSubscriber_1$1;
var subscribeToResult_1$3 = subscribeToResult_1$1;
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch$2(selector) {
    var operator = new CatchOperator(selector);
    var caught = this.lift(operator);
    return (operator.caught = caught);
}
var _catch_2 = _catch$2;
var CatchOperator = (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CatchSubscriber = (function (_super) {
    __extends$9(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        _super.call(this, destination);
        this.selector = selector;
        this.caught = caught;
    }
    // NOTE: overriding `error` instead of `_error` because we don't want
    // to have this flag this subscriber as `isStopped`. We can mimic the
    // behavior of the RetrySubscriber (from the `retry` operator), where
    // we unsubscribe from our source chain, reset our Subscriber flags,
    // then subscribe to the selector result.
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            this.add(subscribeToResult_1$3.subscribeToResult(this, result));
        }
    };
    return CatchSubscriber;
}(OuterSubscriber_1$3.OuterSubscriber));


var _catch_1 = {
	_catch: _catch_2
};

var Observable_1$8 = Observable_1$1;
var catch_1 = _catch_1;
Observable_1$8.Observable.prototype.catch = catch_1._catch;
Observable_1$8.Observable.prototype._catch = catch_1._catch;

var __extends$10 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1$5 = Subscriber_1$1;
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do$2(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
var _do_2 = _do$2;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends$10(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1$5.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1$5.Subscriber));


var _do_1 = {
	_do: _do_2
};

var Observable_1$9 = Observable_1$1;
var do_1 = _do_1;
Observable_1$9.Observable.prototype.do = do_1._do;
Observable_1$9.Observable.prototype._do = do_1._do;

var __extends$11 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1$6 = Subscriber_1$1;
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map$2(project, thisArg) {
    if (typeof project !== 'function') {
        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
}
var map_2 = map$2;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
var MapOperator_1 = MapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapSubscriber = (function (_super) {
    __extends$11(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        _super.call(this, destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    // NOTE: This looks unoptimized, but it's actually purposefully NOT
    // using try/catch optimizations.
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1$6.Subscriber));


var map_1$1 = {
	map: map_2,
	MapOperator: MapOperator_1
};

var Observable_1$10 = Observable_1$1;
var map_1 = map_1$1;
Observable_1$10.Observable.prototype.map = map_1.map;

var __extends$14 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends$14(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
var ObjectUnsubscribedError_2 = ObjectUnsubscribedError;


var ObjectUnsubscribedError_1$2 = {
	ObjectUnsubscribedError: ObjectUnsubscribedError_2
};

var __extends$15 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1$5 = Subscription_1$1;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends$15(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1$5.Subscription));
var SubjectSubscription_2 = SubjectSubscription;


var SubjectSubscription_1$2 = {
	SubjectSubscription: SubjectSubscription_2
};

var __extends$13 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1$12 = Observable_1$1;
var Subscriber_1$7 = Subscriber_1$1;
var Subscription_1$4 = Subscription_1$1;
var ObjectUnsubscribedError_1$1 = ObjectUnsubscribedError_1$2;
var SubjectSubscription_1$1 = SubjectSubscription_1$2;
var rxSubscriber_1$2 = rxSubscriber;
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends$13(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1$7.Subscriber));
var SubjectSubscriber_1 = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends$13(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1$2.$$rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1$4.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1$4.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1$1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1$12.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1$12.Observable));
var Subject_2 = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends$13(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1$4.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
var AnonymousSubject_1 = AnonymousSubject;


var Subject_1$1 = {
	SubjectSubscriber: SubjectSubscriber_1,
	Subject: Subject_2,
	AnonymousSubject: AnonymousSubject_1
};

var __extends$18 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1$6 = Subscription_1$1;
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends$18(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1$6.Subscription));
var Action_2 = Action;


var Action_1$1 = {
	Action: Action_2
};

var __extends$17 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1$6 = root;
var Action_1 = Action_1$1;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends$17(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1$6.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // clear the interval id
        return root_1$6.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
var AsyncAction_2 = AsyncAction;


var AsyncAction_1$1 = {
	AsyncAction: AsyncAction_2
};

var __extends$16 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = AsyncAction_1$1;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends$16(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
var QueueAction_2 = QueueAction;


var QueueAction_1$1 = {
	QueueAction: QueueAction_2
};

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
var Scheduler_2 = Scheduler;


var Scheduler_1$1 = {
	Scheduler: Scheduler_2
};

var __extends$20 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = Scheduler_1$1;
var AsyncScheduler = (function (_super) {
    __extends$20(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
var AsyncScheduler_2 = AsyncScheduler;


var AsyncScheduler_1$1 = {
	AsyncScheduler: AsyncScheduler_2
};

var __extends$19 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = AsyncScheduler_1$1;
var QueueScheduler = (function (_super) {
    __extends$19(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
var QueueScheduler_2 = QueueScheduler;


var QueueScheduler_1$1 = {
	QueueScheduler: QueueScheduler_2
};

var QueueAction_1 = QueueAction_1$1;
var QueueScheduler_1 = QueueScheduler_1$1;
/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
var queue_1$1 = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);


var queue = {
	queue: queue_1$1
};

var Observable_1$13 = Observable_1$1;
/**
 * Represents a push-based event or value that an {@link Observable} can emit.
 * This class is particularly useful for operators that manage notifications,
 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
 * others. Besides wrapping the actual delivered value, it also annotates it
 * with metadata of, for instance, what type of push message it is (`next`,
 * `error`, or `complete`).
 *
 * @see {@link materialize}
 * @see {@link dematerialize}
 * @see {@link observeOn}
 *
 * @class Notification<T>
 */
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    /**
     * Delivers to the given `observer` the value wrapped by this Notification.
     * @param {Observer} observer
     * @return
     */
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    /**
     * Given some {@link Observer} callbacks, deliver the value represented by the
     * current Notification to the correctly corresponding callback.
     * @param {function(value: T): void} next An Observer `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    /**
     * Takes an Observer or its individual callback functions, and calls `observe`
     * or `do` methods accordingly.
     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
     * the `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    /**
     * Returns a simple Observable that just delivers the notification represented
     * by this Notification instance.
     * @return {any}
     */
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Observable_1$13.Observable.of(this.value);
            case 'E':
                return Observable_1$13.Observable.throw(this.error);
            case 'C':
                return Observable_1$13.Observable.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    /**
     * A shortcut to create a Notification instance of the type `next` from a
     * given value.
     * @param {T} value The `next` value.
     * @return {Notification<T>} The "next" Notification representing the
     * argument.
     */
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return this.undefinedValueNotification;
    };
    /**
     * A shortcut to create a Notification instance of the type `error` from a
     * given error.
     * @param {any} [err] The `error` error.
     * @return {Notification<T>} The "error" Notification representing the
     * argument.
     */
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    /**
     * A shortcut to create a Notification instance of the type `complete`.
     * @return {Notification<any>} The valueless "complete" Notification.
     */
    Notification.createComplete = function () {
        return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
var Notification_2 = Notification;


var Notification_1$1 = {
	Notification: Notification_2
};

var __extends$21 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1$8 = Subscriber_1$1;
var Notification_1 = Notification_1$1;
/**
 * @see {@link Notification}
 *
 * @param scheduler
 * @param delay
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return this.lift(new ObserveOnOperator(scheduler, delay));
}
var observeOn_2 = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
var ObserveOnOperator_1 = ObserveOnOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ObserveOnSubscriber = (function (_super) {
    __extends$21(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
}(Subscriber_1$8.Subscriber));
var ObserveOnSubscriber_1 = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
var ObserveOnMessage_1 = ObserveOnMessage;


var observeOn_1$1 = {
	observeOn: observeOn_2,
	ObserveOnOperator: ObserveOnOperator_1,
	ObserveOnSubscriber: ObserveOnSubscriber_1,
	ObserveOnMessage: ObserveOnMessage_1
};

var __extends$12 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = Subject_1$1;
var queue_1 = queue;
var Subscription_1$3 = Subscription_1$1;
var observeOn_1 = observeOn_1$1;
var ObjectUnsubscribedError_1 = ObjectUnsubscribedError_1$2;
var SubjectSubscription_1 = SubjectSubscription_1$2;
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends$12(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscription = Subscription_1$3.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscription = Subscription_1$3.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
var ReplaySubject_2 = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());


var ReplaySubject_1$1 = {
	ReplaySubject: ReplaySubject_2
};

var __extends$22 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1$3 = Subject_1$1;
var Observable_1$14 = Observable_1$1;
var Subscriber_1$9 = Subscriber_1$1;
var Subscription_1$7 = Subscription_1$1;
/**
 * @class ConnectableObservable<T>
 */
var ConnectableObservable = (function (_super) {
    __extends$22(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1$7.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1$7.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
}(Observable_1$14.Observable));
var ConnectableObservable_2 = ConnectableObservable;
var connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subscribe: { value: ConnectableObservable.prototype._subscribe },
    getSubject: { value: ConnectableObservable.prototype.getSubject },
    connect: { value: ConnectableObservable.prototype.connect },
    refCount: { value: ConnectableObservable.prototype.refCount }
};
var ConnectableSubscriber = (function (_super) {
    __extends$22(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1$3.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends$22(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        ///
        // Compare the local RefCountSubscriber's connection Subscription to the
        // connection Subscription on the shared ConnectableObservable. In cases
        // where the ConnectableObservable source synchronously emits values, and
        // the RefCountSubscriber's downstream Observers synchronously unsubscribe,
        // execution continues to here before the RefCountOperator has a chance to
        // supply the RefCountSubscriber with the shared connection Subscription.
        // For example:
        // ```
        // Observable.range(0, 10)
        //   .publish()
        //   .refCount()
        //   .take(5)
        //   .subscribe();
        // ```
        // In order to account for this case, RefCountSubscriber should only dispose
        // the ConnectableObservable's shared connection Subscription if the
        // connection Subscription exists, *and* either:
        //   a. RefCountSubscriber doesn't have a reference to the shared connection
        //      Subscription yet, or,
        //   b. RefCountSubscriber's connection Subscription reference is identical
        //      to the shared connection Subscription
        ///
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1$9.Subscriber));


var ConnectableObservable_1$1 = {
	ConnectableObservable: ConnectableObservable_2,
	connectableObservableDescriptor: connectableObservableDescriptor
};

var ConnectableObservable_1 = ConnectableObservable_1$1;
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the results of invoking a specified selector on items
 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate subject through
 * which the source sequence's elements will be multicast to the selector function
 * or Subject to push source elements into.
 * @param {Function} [selector] - Optional selector function that can use the multicasted source stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the given source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable} An Observable that emits the results of invoking the selector
 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
 * the underlying stream.
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
        subjectFactory = subjectOrSubjectFactory;
    }
    else {
        subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
    }
    if (typeof selector === 'function') {
        return this.lift(new MulticastOperator(subjectFactory, selector));
    }
    var connectable = Object.create(this, ConnectableObservable_1.connectableObservableDescriptor);
    connectable.source = this;
    connectable.subjectFactory = subjectFactory;
    return connectable;
}
var multicast_2 = multicast;
var MulticastOperator = (function () {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}());
var MulticastOperator_1 = MulticastOperator;


var multicast_1$1 = {
	multicast: multicast_2,
	MulticastOperator: MulticastOperator_1
};

var ReplaySubject_1 = ReplaySubject_1$1;
var multicast_1 = multicast_1$1;
/**
 * @param bufferSize
 * @param windowTime
 * @param scheduler
 * @return {ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay$2(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
}
var publishReplay_2 = publishReplay$2;


var publishReplay_1$1 = {
	publishReplay: publishReplay_2
};

var Observable_1$11 = Observable_1$1;
var publishReplay_1 = publishReplay_1$1;
Observable_1$11.Observable.prototype.publishReplay = publishReplay_1.publishReplay;

var ProductService = (function () {
    function ProductService(http, logger) {
        this.http = http;
        this.logger = logger;
        // private productUrl = 'api/products/products.json';
        this.productUrl = 'api/products'; // URL to web api
    }
    ProductService.prototype.getProducts = function () {
        // if (!this.products) {
        this.products = this.http.get(this.productUrl)
            .map(function (response) { return response.json().data || {}; })
            .publishReplay(1)
            .refCount()
            .catch(this.logger.handleError);
        // }
        return this.products;
    };
    ProductService.prototype.getProduct = function (id) {
        var url = this.productUrl + "/" + id;
        this.product = this.http.get(url)
            .map(function (response) { return response.json().data || {}; })
            .catch(this.logger.handleError);
        return this.product;
        // return this.getProducts()
        // .map((products: IProduct[]) => products.find(p => p.id === id));
    };
    ProductService.prototype.updateProduct = function (product) {
        var url = this.productUrl + "/" + product.id;
        var headers = new _angular_http.Headers({ 'Content-Type': 'application/json' });
        var options = new _angular_http.RequestOptions({ headers: headers });
        this.product = this.http.put(url, JSON.stringify(product), options)
            .map(function (response) { return response.json(); })
            .catch(this.logger.handleError);
        return this.product;
    };
    ProductService.prototype.deleteProduct = function (id) {
        var url = this.productUrl + "/" + id;
        this.product = this.http.delete(url)
            .map(function (response) { return response.json(); })
            .catch(this.logger.handleError);
        return this.product;
    };
    ProductService = __decorate([
        _angular_core.Injectable()
    ], ProductService);
    return ProductService;
}());

var ProductListMdCardDirective = (function () {
    function ProductListMdCardDirective(el) {
        this.el = el;
    }
    ProductListMdCardDirective.prototype.onMouseEnter = function () {
        this.setBorder();
    };
    ProductListMdCardDirective.prototype.onMouseLeave = function () {
        this.deleteBorder();
    };
    ProductListMdCardDirective.prototype.setBorder = function () {
        this.el.nativeElement.style.boxShadow = '2px 2px 5px 5px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)';
        // this.el.nativeElement.style.borderRadius = '12px';
    };
    ProductListMdCardDirective.prototype.deleteBorder = function () {
        this.el.nativeElement.style.boxShadow = '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)';
        // this.el.nativeElement.style.borderRadius = '2px';
    };
    __decorate([
        _angular_core.HostListener('mouseenter')
    ], ProductListMdCardDirective.prototype, "onMouseEnter");
    __decorate([
        _angular_core.HostListener('mouseleave')
    ], ProductListMdCardDirective.prototype, "onMouseLeave");
    ProductListMdCardDirective = __decorate([
        _angular_core.Directive({
            selector: '[mdCardBorder]'
        })
    ], ProductListMdCardDirective);
    return ProductListMdCardDirective;
}());

var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        _angular_core.NgModule({
            declarations: [
                ProductListComponent,
                ProductDetailComponent,
                ProductDetailDialogComponent,
                ProductFilterPipe,
                ProductListMdCardDirective
            ],
            imports: [
                ProductRoutingModule,
                SharedModule
            ],
            entryComponents: [
                ProductDetailDialogComponent
            ],
            providers: [
                ProductService,
                ProductDetailGuard
            ]
        })
    ], ProductModule);
    return ProductModule;
}());

var StoreFilterPipe = (function () {
    function StoreFilterPipe() {
    }
    StoreFilterPipe.prototype.transform = function (stores, filterBy, filterFields) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? stores.filter(function (store) {
            return filterFields.some(function (field) {
                return (store[field].toLocaleLowerCase().indexOf(filterBy) !== -1) ?
                    true : false;
            });
            // if ((store.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
            // || (store.address.toLocaleLowerCase().indexOf(filterBy) !== -1))
            // {
            //   return true;
            // } else {
            //   return false;
            // }
        }) : stores;
    };
    StoreFilterPipe = __decorate([
        _angular_core.Pipe({
            name: 'storeFilter'
        })
    ], StoreFilterPipe);
    return StoreFilterPipe;
}());

var StoreFieldFilterPipe = (function () {
    function StoreFieldFilterPipe() {
    }
    StoreFieldFilterPipe.prototype.transform = function (stores, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? stores.filter(function (store) {
            return store.hasOwnProperty(filterBy);
        }) : stores;
    };
    StoreFieldFilterPipe = __decorate([
        _angular_core.Pipe({
            name: 'storeFieldFilter'
        })
    ], StoreFieldFilterPipe);
    return StoreFieldFilterPipe;
}());

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
    StoreOrderByFilterPipe = __decorate([
        _angular_core.Pipe({
            name: 'orderBy'
        })
    ], StoreOrderByFilterPipe);
    return StoreOrderByFilterPipe;
}());

var StoreService = (function () {
    // private stores: Observable<IStore[]>;
    // private store: Observable<IStore>;
    function StoreService(http, logger) {
        this.http = http;
        this.logger = logger;
        // private storeUrl = 'api/data/stores.json';
        this.storeUrl = 'api/stores';
    }
    StoreService.prototype.getStores = function () {
        // if (!this.stores) {
        return this.http.get(this.storeUrl)
            .map(function (response) { return response.json().data || {}; })
            .publishReplay(1)
            .refCount()
            .catch(this.logger.handleError);
        // }
        // return this.stores;
    };
    StoreService.prototype.deleteStore = function (id) {
        var url = this.storeUrl + "/" + id;
        return this.http.delete(url)
            .map(function (response) { return response.json(); })
            .catch(this.logger.handleError);
    };
    StoreService = __decorate([
        _angular_core.Injectable()
    ], StoreService);
    return StoreService;
}());

var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        _angular_core.NgModule({
            declarations: [
                StoreListComponent,
                StoreListMapDialogComponent,
                StoreFilterPipe,
                StoreFieldFilterPipe,
                StoreOrderByFilterPipe
            ],
            imports: [
                SharedModule,
                ng2Ui.Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB53S10hi3txW2AQX1MqPS0yFsT5wTaWDk' })
            ],
            entryComponents: [
                StoreListMapDialogComponent
            ],
            providers: [
                StoreService
            ]
        })
    ], StoreModule);
    return StoreModule;
}());

var AppComponent = (function () {
    function AppComponent(snackBar) {
        this.snackBar = snackBar;
        this.pageTitle = 'Store Manager';
        this.snackBarMsg = 'Store Manager App v1.0.0 | github.com/rramadev';
    }
    AppComponent.prototype.openSnackBar = function () {
        this.snackBar.open(this.snackBarMsg, '| Close', {
            duration: 3000
        });
    };
    AppComponent = __decorate([
        _angular_core.Component({
            selector: 'sm-app',
            template: "<header>\n  <nav class='navbar'>\n    <ul class='nav navbar-nav'>\n      <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n      <li><a [routerLink]=\"['/stores']\">Store List</a></li>\n      <li><a [routerLink]=\"['/products']\">Product List</a></li>\n      <li><a id=\"about\" (click)=\"openSnackBar()\">About</a></li>\n    </ul>\n  </nav>\n</header>\n\n<section class='container main'>\n  <router-outlet></router-outlet>\n\n  <footer>\n    <div class=\"footer\">\n      <p id=\"footerText\">Angular2 Demo - Store Manager App v1.0.0 - github.com/rramadev &copy; 2017.</p>\n    </div>\n  </footer>\n</section>\n"
        })
    ], AppComponent);
    return AppComponent;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        _angular_core.NgModule({
            declarations: [
                AppComponent,
                WelcomeComponent
            ],
            imports: [
                _angular_platformBrowser.BrowserModule,
                _angular_http.HttpModule,
                CoreModule,
                SharedModule,
                ProductModule,
                StoreModule,
                AppRoutingModule
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    _angular_core.enableProdMode();
}
_angular_platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });

}(vendor._angular_platformBrowserDynamic,vendor._angular_core,vendor._angular_platformBrowser,vendor._angular_http,vendor._angular_router,vendor._angular_forms,vendor._angular_in_memory_web_api,vendor._angular_common,vendor._angular_material,vendor._ng2_ui));

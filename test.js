// Operator (Returns a new Observable)
function map(transformFn) {
  const inputObservable = this;
  const outputObservable = createObservable(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function(x) {
        const y = transformFn(x);
        outputObserver.next(y);
      },
      error: e => outputObserver.error(e),
      complete: e => outputObserver.complete()
    });
  });
  return outputObservable;
};

// Create Observable Object
function createObservable(subscribeFn) {
  return {
    subscribe: subscribeFn,
    map: map
  }
};

// New Observable Object from Array
const arrayObservable = createObservable(function subscribe(observer) {
  [1, 2, 3].forEach(observer.next);
  observer.complete();
});

// const clickObservable = {
//   subscribe: function subscribe(observer) {
//     document.addEventListener('click', observer.next);
//   }
// };

// Observer Object with CB Functions
// const observer = {
//   next: function nextCB(data, i, a) {
//     console.log(`Received: ${data}`);
//   },
//   error: function errorCB(err) {
//     console.log(err);
//   },
//   complete: function completeCB() {
//     console.log('Done!');
//   }
// };
const observer = {
  next: (data, i, a) => console.log(`Received: ${data}`),
  error: (err) => console.log(err),
  complete: () => console.log('Done!')
};

// Subscribe to Observable
arrayObservable
  .map(x => x*2)
  .map(x => x+10)
  .subscribe(observer);

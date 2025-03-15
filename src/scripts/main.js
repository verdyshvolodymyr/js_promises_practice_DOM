'use strict';

const div = document.createElement('div');
const body = document.querySelector('body');

div.dataset.qa = 'notification';

const firstPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', () => {
    resolve();
    div.classList = 'success';
    div.textContent = 'First promise was resolved';
  });

  setTimeout(() => {
    reject(Error());
    div.classList = 'error';
    div.textContent = 'First promise was rejected';
  }, 3000);
});

const secondPromise = new Promise((resolve, reject) => {
  document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
      resolve('Second promise was resolved');
    } else if (e.button === 2) {
      resolve('Second promise was resolved');
    }
  });
});

body.append(div);

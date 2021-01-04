'use strict';

let date = new Date();
date.setDate(date.getDate() + 7);

let setCookie = '';
setCookie += 'CookieName = ABC;';
setCookie += 'expires = ' + date.toUTCString();

document.cookie = setCookie;

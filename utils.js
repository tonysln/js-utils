/* 
 * JavaScript Utilities
 */


const _id = (id) => return document.getElementById(id);
const _class = (className) => return document.getElementsByClassName(className);
const append = (parent, el) => parent.append(el);
const after = (target, el) => target.after(el);
const before = (target, el) => target.before(el);
const empty = (el) => el.replaceChildren();

const addClass = (el, className) => el.classList.add(className);
const remClass = (el, className) => el.classList.remove(className);
const hasClass = (el, className) => return el.classList.includes(className);
const replClass = (el, oldClassName, newClassName) => el.classList.replace(oldClassName, newClassName);
const toglClass = (el, className) => el.classList.toggle(className);

const hide = (el) => el.style.display = 'none';
const show = (el) => el.style.display = '';
const toggle = (el) => {
  if (el.style.display == 'none') {
    el.style.display = '';
  } else {
    el.style.display = 'none';
  }
};

const getJSON = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const postJSON = async (url, data) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

const html = (el, data) => el.innerHTML = data;
const generateElements = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.children;
};


function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};


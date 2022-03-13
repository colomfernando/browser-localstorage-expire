# browser-localStorage

[![npm
version](https://img.shields.io/npm/v/browser-localstorage-expire.svg?style=flat-square)](https://www.npmjs.org/package/browser-localstorage-expire)


## Installation

```js
npm i -S browser-localstorage-expire
```

```js
yarn add browser-localstorage-expire
```

## Usage
function for manage cache from localstorage with expiration

**Returns**: function get and set  
**Example**  
```js
const localCache = browserLocalstorage();
```

* [browserLocalstorage](#module_browserLocalstorage) ⇒
    * [~getItem](#module_browserLocalstorage..getItem) ⇒
    * [~setItem](#module_browserLocalstorage..setItem)

<a name="module_browserLocalstorage..getItem"></a>

### browserLocalstorage~getItem ⇒
function for get data in localstorage

**Kind**: inner property of [<code>browserLocalstorage</code>](#module_browserLocalstorage)  
**Returns**: data from localstorage  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | name key for localstorage |

**Example**  
```js
const localCache = browserLocalstorage();
localCache.localgetItem('data')
```
<a name="module_browserLocalstorage..setItem"></a>

### browserLocalstorage~setItem
function for save data in localstorage

**Kind**: inner property of [<code>browserLocalstorage</code>](#module_browserLocalstorage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | name key for localstorage |
| value | <code>\*</code> |  | data to save in localstorage |
| [expiry] | <code>number</code> | <code>5</code> | time of expiration in minutes |

**Example**  
```js
const localCache = browserLocalstorage();
localCache.setItem('data', [{ country: 2 }], 5);
```

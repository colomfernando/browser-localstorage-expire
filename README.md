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
<p>module for manage cache from localstorage with expiration</p>

**Returns**: <p>methods getItem and saveItem</p>  
**Example**  
```js
const localCache = browserLocalstorage();
```

* [browserLocalstorage](#module_browserLocalstorage) ⇒
    * [~getItem(name)](#module_browserLocalstorage..getItem) ⇒
    * [~setItem(name, value, [expiry])](#module_browserLocalstorage..setItem) ⇒

<a name="module_browserLocalstorage..getItem"></a>

### browserLocalstorage~getItem(name) ⇒
<p>function for get data in localstorage</p>

**Kind**: inner method of [<code>browserLocalstorage</code>](#module_browserLocalstorage)  
**Returns**: <p>data from localstorage</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>name key for localstorage</p> |

**Example**  
```js
const localCache = browserLocalstorage();
localCache.localGetItem('data')
```
<a name="module_browserLocalstorage..setItem"></a>

### browserLocalstorage~setItem(name, value, [expiry]) ⇒
<p>function for save data in localstorage</p>

**Kind**: inner method of [<code>browserLocalstorage</code>](#module_browserLocalstorage)  
**Returns**: <p>void</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | <p>name key for localstorage</p> |
| value | <code>\*</code> |  | <p>data to save in localstorage</p> |
| [expiry] | <code>number</code> | <code>5</code> | <p>time of expiration in minutes</p> |

**Example**  
```js
const localCache = browserLocalstorage();
localCache.setItem('data', [{ country: 2 }], 5);
```

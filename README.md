# browser-localStorage

[![Build
Status](https://travis-ci.com/colomfernando/browser-localstorage.svg?branch=master)](https://travis-ci.com/colomfernando/browser-localstorage)

https://img.shields.io/npm/v/browser-localstorage-expire

package localStorage


<a name="module_browserLocalstorage"></a>

## browserLocalstorage ⇒
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
setItem() // 		getItem('data') // [{ country: 2 }]
```
<a name="module_browserLocalstorage..setItem"></a>

### browserLocalstorage~setItem
function for save data in localstorage

**Kind**: inner property of [<code>browserLocalstorage</code>](#module_browserLocalstorage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | name key for localstorage |
| value | <code>number</code> |  | data to save in localstorage |
| [expiry] | <code>number</code> | <code>5</code> | time of expiration in minutes |

**Example**  
```js
setItem() // 		setItem('data', [{ country: 2 }], 5);
```

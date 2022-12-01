# JS

## Scoping

### Use var to make elements accesible in a loop **block**

```js
const Gameboard = (name1, name2) => {
    var getPlayer1Name = () => name1;
    var getPlayer2Name  = () => name2;
}
```
# ALL Library in NatureJS

## The Fisrt Is DataBase
In this databse is data inmemory not have file in your project
In THIS IS SAMPLE DATABASE
* If You Use The DataBase 
(its use hashes)
* If You Use The DataBases
(Not Use Hashes)
* ! WARNING !
* IF YOU USE DataBase you
Can't use array in Database
* If You Use DataBases You
Data Is Not Encrypt
*/
// Example All
/*
* In This nothing for use
* let db = new DataBase();
* db.PushPrimaryIncrement(new Vector3D or new Vector2D);
* or
* db.PushData(new Vector3D or new Vector2D);
* What Is Vector3D and Vector2D
* Vector In This Is Array in Array
* If You Use Vector3D you use 
* [[array],[array],[array]];
* or
* If You Use Vector2D you use
* [[array],[array]]
* And I Have Ventor Again Is Function
* But This Return Array Not Have Value
* Exampel
* let x = Vector2DS(); // In This You can use Vector3DS To;
* x[0].push("jhon");
* x[1].push("mary");
* console.log(x[0][0]);
* out put is : jhon
* or You can use new Vector
* Example
* var x = 10, b = 5;
* let x = new Vector2D(a, b);
* console.log(x[0][0]);
(out put 10)
*/
/*
+###########+###########+
# DataBase  # Syntax    #
+###########+###########+
# QueryValue(primary)   #
# PushData(object)      #
# GetLength()           #
# DeleteData(primary)   #
# PushPrimaryIncrement  #
+#######################+
If You Use This DataBase
(Can't value array)
PushData({
  primary : 'name',
  value : 'value'
});
PushPrimaryIncrement('value');
this PushPrimaryIncrement
this is increment primary
-------------------------
| 0 -> 1 -> 2 -> 3 -> 4 |
-------------------------
*/
/*
+###########+###########+
# DataBases # Syntax    #
+###########+###########+
# QueryValue(primary)   #
# PushData(object)      #
# GetLength()           #
# DeleteData(primary)   #
# PushPrimaryIncrement  #
+#######################+
If You Use This DataBase
(Can value array)
PushData({
  primary : 'name',
  value : 'value'
});
PushPrimaryIncrement('value');
this PushPrimaryIncrement
this is increment primary
 -------------------------
| 0 -> 1 -> 2 -> 3 -> 4 |
-------------------------
*/

// Script Source No. 1
let db = new DataBase();
db.PushPrimaryIncrement('hello mars');
db.PushData({
  primary : 1, // You Can Make String
  value : 'hello world' // You Can Make integer or anything but Cant Array
});

// Looping Source No. 1
console.log('This Is db source');
console.log('==========');
for(let i = 0; i < db.GetLength(); i++){
  console.log(db.QueryValue(i));
}
console.log('==========');
               
// Script Source No. 2
let dbs = new DataBases();
dbs.PushPrimaryIncrement('hello mars');
dbs.PushData({
  primary : 1, // You Can Make String
  value : 'hello world' // You Can Make integer or anything but Cant Array
});
               
// Looping Source No. 2
console.log('This Is dbs source');
console.log('==========');
for(let i = 0; i < dbs.GetLength(); i++){
  console.log(dbs.QueryValue(i));
}
console.log('==========');

dbs.PushData({
  primary : 2,
  value : new Vector2D('hello, ', 'world')
});

let stringMain = "";

for(let i = 0; i < 2; i++){
  stringMain += dbs.QueryValue(2)[i];
}
console.log(stringMain);
               
dbs.DeleteData(1);
console.log(dbs.Vector2D);

# How TO Import CDN
`In New Version : let db = Import.Lib(DataBase)`

How To Use API / FETCH
`In New Version : Nature.FetchAPIFunc(url, function)`
or sample live
`
function GetAPI($) {
      console.log($);
}
Nature.FetchAPIFunc(urlm GetAPI);
`

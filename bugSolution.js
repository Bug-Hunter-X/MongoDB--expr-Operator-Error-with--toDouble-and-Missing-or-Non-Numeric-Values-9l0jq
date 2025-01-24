```javascript
const query = {
  $expr: {
    $or: [
      { $eq: [ '$price', null ] },
      { $and: [
        { $isNumber: { $toDouble: '$price' } },
        { $gt: [ { $toDouble: '$price' }, 100 ] }
      ] }
    ]
  }
}
db.collection.find(query); 
```
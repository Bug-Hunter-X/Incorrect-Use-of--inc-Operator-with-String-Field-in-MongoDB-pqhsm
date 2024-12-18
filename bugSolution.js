```javascript
// Correct use of $inc operator with a numeric field
db.collection.updateOne({name: "John"}, {$inc: {age: 1}});

//Alternative solution using $set operator:
//Convert string to number before incrementing
db.collection.findOneAndUpdate(
  { name: "John" },
  {
    $set: {
      age: parseInt(db.collection.findOne({name: "John"}).age) + 1,
    },
  }
);
```
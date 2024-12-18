# Incorrect Use of $inc Operator with String Field in MongoDB

This example demonstrates an incorrect use of the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field, but in this case, it is used with a string field, leading to an error or unexpected behavior.

## Bug

The code attempts to increment the `age` field, which is a string, using the `$inc` operator. This will result in an error because the `$inc` operator only works with numeric fields.

## Solution

To fix this issue, ensure that the `age` field is of a numeric type (e.g., int or double). You can cast the string value to a number before using `$inc`, or use the `$set` operator to directly update the field with the incremented value.

# Link Apprenticeship Coding Exercise For Nulogy
A library for determining markup for repackaging existing products based on resources and labour.

## Dependencies
node >= 4.6

## How to run tests

```
npm install
npm test
```

## Examples
To determine the total price replace the following variable with the intended
values. The type of materials available are: drug, food, electronic.

```
calculations.calculateTotal(base price, number of people, type of material);
```

### Example 1:
    calculations.calculateTotal(1299.99, 3, food);
    // 1591.58

### Example 2:
    calculations.calculateTotal(5432.00, 1, drug);
    // 6199.81

### Example 3:
    calculations.calculateTotal(12456.95, 4, books);
    // 13707.63

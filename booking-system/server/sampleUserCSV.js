const fs = require("fs");

const sampleData = [
  { id: 1, name: 'Karen', module: 'ee2033', matricno: 'a0101234a', group: 2, username: 'karenthia', password: 'karenthia01' },
  { id: 2, name: 'Bernerd', module: 'ee3131c', matricno: 'a0101234b', group: 1, username: 'bernerdtan', password: 'bernerdtan01' },
  { id: 3, name: 'Karen', module: 'ee2033', matricno: 'a0101234c', group: 2, username: 'karenthia', password: 'karenthia01' },
  { id: 4, name: 'Karen', module: 'ee4218', matricno: 'a0101234d', group: 2, username: 'karenthia', password: 'karenthia01' },
  { id: 5, name: 'Karen', module: 'ee2033', matricno: 'a0101234e', group: 3, username: 'karenthia', password: 'karenthia01' }
];

let csv = 'name,age,location\n';

data.forEach(function(row) {
  csv += row.name + ',' + row.age + ',' + row.location + '\n';
});

fs.writeFileSync('data.csv', csv);

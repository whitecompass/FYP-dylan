const fs = require("fs");

const sampleData = [
  { id: 1, name: 'Karen', module: 'ee2033', matricno: 'a0101234a', role:'student', group: 2, username: 'karenthia', password: 'karenthia01' },
  { id: 2, name: 'Bernerd', module: 'ee3131c', matricno: 'a0101234b', role:'student', group: 1, username: 'bernerdtan', password: 'bernerdtan01' },
  { id: 3, name: 'Thomas', module: 'ee2033', matricno: 'a0101234c', role:'student', group: 2, username: 'thomasbong', password: 'thomasbong01' },
  { id: 4, name: 'Ken', module: 'ee4218', matricno: 'a0101234d', role:'student', group: 2, username: 'kenlim', password: 'kenlim01' },
  { id: 5, name: 'Claudia', module: 'ee2033', matricno: 'a0101234e', role:'student', group: 3, username: 'claudiawong', password: 'claudiawong01' }
];

let csv = 'id,name,module,matricno,role,group,username,password\n';

data.forEach(function(row) {
  csv += row.id + ',' + row.name + ',' + row.module + ',' + row.matricno + ',' + row.role + ',' + row.group + ',' + row.username + ',' + row.password + '\n';
});

fs.writeFileSync('data.csv', csv);

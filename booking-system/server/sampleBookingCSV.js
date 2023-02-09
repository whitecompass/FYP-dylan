const fs = require("fs");

const sampleData = [
  { id: 1, name: 'Karen', group: 2, Start_time: 'karenthia', End_time: 'karenthia01' },
  { id: 2, name: 'Bernerd', group: 1, Start_time: 'bernerdtan', End_time: 'bernerdtan01' },
  { id: 3, name: 'Thomas', group: 2, Start_time: 'thomasbong', End_time: 'thomasbong01' },
  { id: 4, name: 'Ken', group: 2, Start_time: 'kenlim', End_time: 'kenlim01' },
  { id: 5, name: 'Claudia', group: 3, Start_time: 'claudiawong', End_time: 'claudiawong01' }
];

let csv = 'id,name,module,matricno,role,group,username,password\n';

data.forEach(function(row) {
  csv += row.id + ',' + row.name + ',' + row.module + ',' + row.matricno + ',' + row.role + ',' + row.group + ',' + row.username + ',' + row.password + '\n';
});

fs.writeFileSync('data.csv', csv);

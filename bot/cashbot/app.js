const fs = require('fs');
const clArgs = require('command-line-args');

const optionsDefinitions = [
  { name: 'name', type: String },
  { name: 'order', type: String },
  { name: 'pay', type: Number },
  { name: 'exit', type: Boolean },
  { name: 'undo_clear', type: Boolean }
];

const options = clArgs(optionsDefinitions);

const getDB = fs.readFileSync('db.json');
const getBackup = fs.readFileSync('backup.json');
const data = JSON.parse(getDB);
const backup = JSON.parse(getBackup);

const backupWrite = () => {
  fs.writeFileSync('backup.json', JSON.stringify(data));
};
const dbWrite = () => {
  fs.writeFileSync('db.json', JSON.stringify(data));
};

const { name, order, pay, exit, undo_clear } = options;

const _clearData = (_option, all) => {
  all = _option ? 0 : 1;

  if (all) {
    data.name = '';
    data.order = '';
    data.pay = '';
    dbWrite(data);
    console.log('Cleared all data.');
  } else {
    if (_option === name) {
      data.name = '';
      console.log('Cleared name.');
    } else if (_option === order) {
      data.order = '';
      console.log('Cleared order.');
    } else if (_option === pay) {
      data.pay = '';
      console.log('Cleared pay.');
    } else {
      console.log('Invalid option.');
    }
    dbWrite(data);
  }
};

const _undo_clear = () => {
  data.name = backup.name;
  data.order = backup.order;
  data.pay = backup.pay;
  dbWrite(data);
  console.log('Data recovered.');
};

const cost = (_order, _cost, _tax) => {
  _tax = 0.0825;
  if (_order === 'games') {
    _cost = 50.0;
  } else if (_order === 'movies') {
    _cost = 30.0;
  } else if (_order === 'music') {
    _cost = 20.0;
  } else {
    _cost = 0.0;
  }

  return (_cost + _cost * _tax).toFixed(2);
};

if (name) {
  data.name = name;
  console.log(`Hey, ${name}! We got games, movies, and music!`);
  dbWrite(data);
  backupWrite(data);
} else if (order) {
  data.order = order;
  console.log(
    `Okay, so the total is $${cost(data.order)}. How much will you pay?`
  );
  dbWrite(data);
  backupWrite(data);
} else if (pay) {
  data.pay = pay;
  if (pay < cost(data.order)) {
    console.log(
      `Okay, so the total is $${cost(data.order)}. How much will you pay?`
    );
  } else {
    console.log(
      `Your change is $${(data.pay - cost(data.order)).toFixed(
        2
      )}, thanks for coming --exit to get the order`
    );
  }
  dbWrite(data);
  backupWrite(data);
} else if (exit) {
  console.log(data);
  console.log('Goodbye');
  _clearData();
} else if (undo_clear) {
  _undo_clear();
} else {
  console.log('What is your name?');
}

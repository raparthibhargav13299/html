// const result = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve('Task Completed');
//   } else {
//     reject('Error Occurred');
//   }
// });

// result.then(msg => {
//   console.log(msg);
// }).catch(msg => {
//   console.error(msg);
// });

const items = ["Item1", "Item2"];

const GetItems = () => {
  setTimeout(() => {
    items.map((value) => {
      console.log(value);
    });
  }, 2000);
};
// GetItems();
const AddItem = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      items.push(item);
      let error = false;
      if (!error) {
        resolve('Item Added');
      } else {
        reject('Error');
      }
    }, 3000);
  });
}

// AddItem('Item3')
//   .then(GetItems)
//   .catch(msg => console.log(msg));

const RunTasks = async () => {
  await AddItem('Item3');
  GetItems();
}

RunTasks();

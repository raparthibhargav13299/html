const items = ["Item1", "Item2"];

const GetItems = () => {
    setTimeout(() => {
        items.map((value) => {
            console.log(value);
        });
    }, 2000);
};
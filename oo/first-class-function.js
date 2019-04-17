var emp = {
	name: 'juntao',
	addr: '123 victoria st'
};

var array = [1, 2, 3, 4, 5];
array.map(function(item){
	return item * 2;	
});

var staff = [
	{name: 'abruzzi', age: 24},
	{name: 'bajmine', age: 30},
	{name: 'chris', age: 25}
];

staff.map(function(item){
	return item.name.toUpperCase();
});
//Level 1
map();

north();
north();

//Level 2
map();

while (east()==true) east();


//Level 3
map();

while (isFree('south')) {
	south();  
	east();
};

//Level 4
map();

var i;
for(i = 0; i < 14; i++){
	if (isFree('east')==true)
		east();
	else
		south();
}

//Level 5
map();
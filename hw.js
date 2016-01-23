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

var i;
for(i=0; i<10; i++){
	if (isFree('east')==true) 
		east();
	else
		south();
}
for (i=0; i<6; i++){
	if (isFree('west')==true)
		west();
	else
		south();
}
for (i=0; i<10; i++){
	if (isFree('west')==true)
		west();
	else
		north();
}
for (i=0; i<11; i++){
	if (isFree('south')==true)
		south();
	else
		east();
}
		

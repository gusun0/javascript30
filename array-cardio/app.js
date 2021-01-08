    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    /* Mi forma 
    const filtro = n => n.year >= '1500' && n.year <= 1600;
    r = inventors.filter(filtro);
    console.log(r);

    */ 

    const fifteen = inventors.filter(function (inventor) {
      if(inventor.year >= 1500 && inventor.year < 1600){
	      return true;
      }else{
	      return false;
      } 
    });

    console.table(fifteen);
  
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const fullNames = inventors.map(n => `${n.first} ${n.last}`);;
    console.table(fullNames);


    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngestA

    const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1); 
    console.table(ordered);
/*
    const ordered2 = inventors.sort((a,b) => {
            console.log(b.year);
	    if(a.year > b.year){
		    return 1;
	    }
	    else 
	    {
		    return -1;
	    }
    });
    console.log(ordered2);
*/

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

   /* Forma # 1
    var totalYears = 0;
    //console.log(inventors.length);
    len = inventors.length;

    for( var i = 0; i < len; i++){
	    totalYears += inventors[i].year;
    }
    console.log(totalYears);
    */

   // inventors.forEach(n => console.log(n));
    /* Forma # 2 */
    const totalYears = inventors.reduce((total,inventor) => {
	//    console.log(total);
        return total + (inventor.passed - inventor.year); 
    },0); 
    console.log(`Total: ${totalYears}`);
  

    // 5. Sort the inventors by years lived
    /*  Mi versión */ 
/*
    const edad = inventors.map( n => n.passed - n.year)
    redad = edad.sort(); 
    console.table(redad); 
*/
   console.log('Problema #5 ');
   console.table(inventors);
   const oldest = inventors.sort((a,b) => {
	 //  console.log(`a: ${a.passed} - ${a.year}`);
	 //  console.log(`b: ${b.passed} - ${b.year}`);
	   const lastGuy = a.passed - a.year;
	  // console.log(`lastGuy: ${lastGuy}`);
	   const nextGuy = b.passed - b.year;
	   //console.log(`nextGuy: ${nextGuy}`);

	   if(lastGuy > nextGuy){
		   return -1;
	   }else{
		   return 1;
	   }
	   
   
   });
   console.table(oldest);




    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    //  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
   /* 
    const category = document.querySelector('.mw-category');
    // Arrar.from es para convetirlo a un array
    const links = Array.from(category.querySelectorAll('a'));
    const rel = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
*/


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    console.table(people);

    const alpha = people.sort((lastOne, nextOne) => {
	   // console.log(`lastOne: ${lastOne}`);
	   // console.log(`nextOne: ${nextOne}`);
	   const [aLast,aFirst] = lastOne.split(', ');
	   const [bLast,bFirst] = nextOne.split(', ');
	   //console.log(aLast);
	   //console.log(bLast);
	   return aLast > bLast ? 1 : -1;
	   

    });

   console.log(alpha);


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function(obj,item) {
    if(!obj[item]){
	    obj[item] = 0;
    }
    obj[item]++;
    return obj;
    },{});

   console.log(transportation);
    

function getFinalResult() {
	const pairs = [90, 10, 1, 2, 3, 4, 5, 10, 1, 90, 90, 90, 10, 22];
	let arrOfCheckedValues = []; // wrzucamy tu wartości bez dubli
	let arrOfObjects = []; // wrzucamy tu object {id, value} bez dubli
	let finalResult; // ostateczny wynik, liczba

	for (let i = 0; i < pairs.length; i++) {

		if (arrOfCheckedValues.indexOf(pairs[i]) === -1) {
			// filtrujemy wskazaną wartość na tablicy
			const value = pairs.filter(item => item === pairs[i]); 

			// wrzucamy na nową tablicę objekt bez dubli
			arrOfObjects.push({ id:pairs[i], value: value.length }); 

			// wrzucamy wartość którą już sprawdziliśmy przefiltrowaliśmy
			arrOfCheckedValues.push(pairs[i]); 
		}
	}

	// sumujemy liczby powtórzeń
    finalResult = arrOfObjects.reduce((acc, obj) => {
        return acc + obj.value
    }, 0)

	// zwracamy końcowy wynik
	return finalResult;
}

// przypisujemy wartość do stałej
const answer = getFinalResult();
console.log(answer); // logujemy wynik - powinno wyjść 14

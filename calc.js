function getFinalResult() {
	const pairs = [90, 10, 1, 2, 3, 4, 5, 10, 1, 90, 90, 90, 10, 22];
	let arrOfCheckedValues = [];
	let arrOfObjects = [];
	let finalResult;

	for (let i = 0; i < pairs.length; i++) {

		if (arrOfCheckedValues.indexOf(pairs[i]) === -1) {
			const value = pairs.filter(item => item === pairs[i]);

			arrOfObjects.push({ id:pairs[i], value: value.length });

			arrOfCheckedValues.push(pairs[i]);
		}
	}

    
    finalResult = arrOfObjects.reduce((acc, obj) => {
        return acc+obj.value
    }, 0)

	return finalResult;
}

const answer = getFinalResult();
console.log(answer);

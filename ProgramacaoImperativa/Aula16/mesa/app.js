let funcao = (a, b) => {
    for (let i = 1; i <= 10; i++) {
        if ((i % a === 0) && (i % b === 0)) {
            console.log('FizzBuzz', i)
        } else if (i % b === 0) {
            console.log('Buzz', i);
        } else if (i % a === 0) {
            console.log('Fizz', i)
        }
    }

}
funcao(2, 3);
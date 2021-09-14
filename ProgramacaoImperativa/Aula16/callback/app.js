const somar = (numeroA, numeroB) => numeroA + numeroB;
const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);
calculadora(5,6,somar);
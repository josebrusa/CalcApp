import { useRef, useState } from "react"

enum Opertator {
    add,
    subtract,
    multiply,
    divide
}


export const useCalculator = () => {

    const [ number, setNumber ] = useState('0')
    const [ prevNumber, setPrevNumber ] = useState('0')

    const lastOperation = useRef<Opertator>()

    const buildNumber = (numberString: string) => {


        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberString === '.') {

                return setNumber(number + numberString)
            }

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString)
            };

            if (numberString !== '0' && !number.includes('.')) {

                return setNumber(numberString)
            }

            if (numberString === '0' && !number.includes('.')) {

                return
            }

            return setNumber(number + numberString)

        }

        setNumber(number + numberString)

    }

    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
    }

    const deleteOperation = () => {

        let currentSign = ''
        let temporalNumber = number

        if (number.includes('-')) {
            currentSign = '-'
            temporalNumber = number.substring(1)
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1))
        }

        setNumber('0')
    }

    const toggleSign = () => {

        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        } else {
            return setNumber('-' + number)
        }
    }

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
        }

        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Opertator.divide
    }

    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Opertator.multiply
    }

    const subtractOperation = () => {
        setLastNumber()
        lastOperation.current = Opertator.subtract
    }

    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Opertator.add
    }

    const calculateResult = () => {

        const num1 = Number(number)
        const num2 = Number(prevNumber)

        switch (lastOperation.current) {
            case Opertator.add:
                setNumber(`${num1 + num2}`)
                break;
            case Opertator.subtract:
                setNumber(`${num2 - num1}`)
                break;
            case Opertator.multiply:
                setNumber(`${num1 * num2}`)
                break;
            case Opertator.divide:
                setNumber(`${num2 / num1}`)
                break;
        }

        setPrevNumber('0')
    }


    return {
        //Properties
        number,
        prevNumber,
        //Method
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult
    }
}
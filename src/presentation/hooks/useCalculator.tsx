import { useState } from "react"


export const useCalculator = () => {

    const [ number, setNumber ] = useState('0')

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




    return {
        //Properties
        number,
        //Method
        buildNumber,
        clean,
        deleteOperation,
        toggleSign
    }
}

const depositMoney = (amt) => {

    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amt,
        })
    }

}


const withdrawMoney = (amt) => {

    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amt,
        })
    }

}


export default depositMoney;
export { withdrawMoney };




import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import depositMoney from "../State/Actions/index";
import { withdrawMoney } from "../State/Actions/index";



const Shop = () => {

    const dispatch = useDispatch();

    return (
        <Container>
             Withdraw Money by Clicking Here
            <Button variant="outline-info mx-3 my-3" onClick={ () => { dispatch(withdrawMoney(100)) } }> - </Button> <br />
            Deposit Money by Clicking Here &nbsp;
            <Button variant="outline-info mx-3" onClick={ () => { dispatch(depositMoney(100)) } }> + </Button>
        </Container>
    )
}



export default Shop;


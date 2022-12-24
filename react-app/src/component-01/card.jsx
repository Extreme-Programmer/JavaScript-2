import React, { Component } from 'react'
import "./card.css";


export default class ContactCard extends Component {
    render() {
        return (
            <div className="contactCard">
                <div className="punchHole"></div>
                <div className="logo"></div>
                <div className="proprietor">
                    <b>
                        Md Abdullah Aman
                    </b>
                    <br />
                    proprietor
                </div>
                <div className="company"><b>CLIMAX COMPUTER</b></div>
                <div className="divider"></div>
                <div className="address">
                    <i>
                        address1: tekala, doulotpur, kushtia<br />
                        mobile number: 021546879646, 014565486544, 01898646645<br />
                        email: faheekwljeflsf@gmai;.com
                    </i>
                </div>
            </div>
        )
    }
}

import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

function Footer() {
    return (
        <CDBFooter className="shadow">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap mt-auto"
                style={{ width: '90%'}}
                type="text/css" 
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src="https://t3.ftcdn.net/jpg/04/06/91/92/360_F_406919209_O9Sy4SKu3dVx0mE3RqYfCH5hqMwVWbOk.jpg"
                            width="80px"
                        />
                        <span className="ml-4 h6 mb-0 font-weight-bold">Kirrawee Art Gallery</span>
                    </a>
                </CDBBox>
                <CDBBox>
                    <small className="ml-1">&copy; Kirrawee Art Gallery, 2022. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer
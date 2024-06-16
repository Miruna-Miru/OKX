import React, { useState } from 'react';
import Navv from './Navv';
import { Stack, Col, Container, Row, Image, Dropdown, Figure} from 'react-bootstrap';
import Apple from '../assets/apple-logo.png';
import Google from '../assets/google.png';
import Telegram from '../assets/telegram.png';
import Wallet from '../assets/wallet.png';
import BlackCol from './BlackCol';
import QRCode from '../assets/WithoutCss.png'; 

const countryCodes = ['+91', '+92', '+82', '+978'];

export default function Login() {
    const [activeMethod, setActiveMethod] = useState('email');
    const [selectedCode, setSelectedCode] = useState('+91');

    const handleMethodChange = (method) => {
        setActiveMethod(method);
    }

    const handleCodeChange = (code) => {
        setSelectedCode(code);
    }

    return (
        <div className='login-bdy'>
            <Navv />
            <Container>
                <Row className='d-flex flex-wrap'>
                    <Col xs={12} md={6} className='blk-col'>
                        <BlackCol />
                    </Col>
                    <Col xs={12} md={6} className='white-col'>
                        <div className='login-container'>
                            <h2>Log In</h2>
                            <Stack direction='horizontal' gap={3} className='mb-3'>
                                <p
                                    className={`p-2 ${activeMethod === 'phone' ? 'active-method' : ''}`}
                                    onClick={() => handleMethodChange('phone')}
                                >
                                    Phone
                                </p>
                                <p
                                    className={`p-2 ${activeMethod === 'email' ? 'active-method' : ''}`}
                                    onClick={() => handleMethodChange('email')}
                                >
                                    Email/Sub-account
                                </p>
                                <p
                                    className={`p-2 ${activeMethod === 'qrcode' ? 'active-method' : ''}`}
                                    onClick={() => handleMethodChange('qrcode')}
                                >
                                    QR Code
                                </p>
                            </Stack>

                            {activeMethod === 'email' && (
                                <>
                                    <input className='form-control mb-3' type="text" placeholder="Enter email" />
                                    <button className='btn btn-primary w-100 mb-3 nxt-btn' disabled>Next</button>
                                </>
                            )}
                            {activeMethod === 'phone' && (
                                <>
                                    <div className='phone-input mb-3'>
                                        <Dropdown onSelect={handleCodeChange} className='country-code-dropdown'>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                {selectedCode}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {countryCodes.map((code, index) => (
                                                    <Dropdown.Item key={index} eventKey={code}>{code}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <input className='form-control' type="text" placeholder="Enter phone number" />
                                    </div>
                                    <button className='btn btn-primary w-100 mb-3 nxt-btn' disabled>Next</button>
                                </>
                            )}
                            {activeMethod === 'qrcode' && (
                                <div className='qr-container'>
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLSHvyvuLwsd5BvCpY7-lzHQUR9Dzyh6G-Q&s" alt='QR Code' fluid width={100} height={100}/>
                                </div>
                            )}

                            <p className='text-center dont-have-account'>
                                Don't have an account? <span className='signup-link' onClick={() => window.location.href = '/signup'}>Sign Up</span>
                            </p>
                            <p className='text-center or-continue-with'>
                                <span className='line'></span> or continue with <span className='line'></span>
                            </p>
                            <Stack direction='horizontal' gap={2} className='justify-content-center'>
                                <button className='btn round-btn'><Image src={Google} alt='Google' roundedCircle width={20} height={20}  /> <Figure.Caption>Google</Figure.Caption></button>
                                <button className='btn round-btn'><Image src={Apple} alt='Apple' roundedCircle width={20} height={20} /><Figure.Caption>Apple</Figure.Caption></button>
                                <button className='btn round-btn'><Image src={Telegram} alt='Telegram' roundedCircle width={20} height={20} /><Figure.Caption>Telegram</Figure.Caption></button>
                                <button className='btn round-btn'><Image src={Wallet} alt='Wallet' roundedCircle width={20} height={20} /><Figure.Caption>Wallet</Figure.Caption></button>
                            </Stack>
                        </div>
                       <center><p className='recap'>This site is protected by Google reCAPTCHA to ensure you're not a bot <span><b>Learn More</b></span></p></center> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

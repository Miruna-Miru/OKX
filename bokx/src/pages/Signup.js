import React, { useState } from 'react';
import Navv from './Navv';
import { Col, Container, Row, Dropdown, Form, Button } from 'react-bootstrap';
import BlackCol from './BlackCol';

export default function Signup() {
  const countries = ['India', 'France', 'USA', 'UK', 'Nepal'];
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className='signup-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col className='blk-col' xs={12} md={6}>
            <BlackCol />
          </Col>
          <Col className='white-col' xs={12} md={6}>
            <div className='signup-container'>
              <h2>Let's get you started</h2>
              <h6>Select the country/region that exactly matches the one on your ID or proof of address</h6>

              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Country or region of residence</Form.Label>
                  <Dropdown onSelect={handleCountryChange} className='country-code-dropdown'>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      {selectedCountry}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {countries.map((country, index) => (
                        <Dropdown.Item key={index} eventKey={country}>
                          {country}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {/* Row for Password and Confirm Password */}
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Confirm password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className='mb-3' controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label={
                      <span style={{ color: 'grey' }}>
                        By creating an account, I agree to{' '}
                        <u onClick={() => window.location.href = '/terms-and-conditions'}>
                          OKX Terms of Service, Risk and Compliance, and privacy policy statements
                        </u>
                      </span>
                    }
                    checked={agreed}
                    onChange={handleCheckboxChange}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className='w-100 signup-btn' 
                  disabled={!agreed}
                  style={{ backgroundColor: agreed ? 'blue' : 'grey', borderColor: agreed ? 'blue' : 'grey' }}
                >
                  Next
                </Button>
                
              </Form>
            </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
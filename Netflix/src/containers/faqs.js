import React, {useState} from 'react';
import {Accordion, OptForm} from '../components/'
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer(){
    const [emailAddress, setEmailAddress] = useState();
    const [error, setError] = useState('');

    const isInvalid = emailAddress == '';
    const handleHome = (event) => {
        event.preventDefault();

    }

    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item => 
                <Accordion.Item key = {item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>   
            )}
            <Accordion.Item />
            
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break/>
                <OptForm.Input 
                    placeholder = "Email address" 
                    value = {emailAddress}
                    onChange= {({ target }) => setEmailAddress(target.value)}
                />
                <OptForm.Button disabled = {isInvalid} type = "button">
                    Get Started
                </OptForm.Button>
                <OptForm.Break/>
                {error && <OptForm.Error>{error}</OptForm.Error>}
            </OptForm>
            
        </Accordion>
    );
}
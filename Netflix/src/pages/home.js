import React, {useState} from 'react'; 
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import {Feature, OptForm} from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer';



export default function Home(){
    const [emailAddress, setEmailAddress] = useState('');
    const [error, setError] = useState('');

    const isInvalid = emailAddress == '';
    

    return (
        <>
            <HeaderContainer>
                <Feature>
                    
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
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
                        <OptForm.Break/>

                    </OptForm>
                </Feature>
                
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
    
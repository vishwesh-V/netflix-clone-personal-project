import styled from 'styled-components/macro';

import {Link as ReactRouterLink} from 'react-router-dom';

//display: flex;
//flex-direction: column;
//min-height: 660px;
//background-color: rgba(0, 0, 0, 0.75);
//box-radius: border-box;
//border-radius: 5px;
//width: 100%;
//margin: auto;
//max-width: 450px;
//padding: 60px 68px 40px;

//margin-bottom: 100px;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 515px;
    background-color: rgba(0, 0, 0, 0.75);
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    margin: 0 auto;
    max-width: 450px;
    padding: 68px 60px 40px 68px;
    margin-bottom: 90px;
    
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    

`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 10px 0;
    padding: 0;

    
    
`;

export const Text = styled.p`
    margin-top: 11px;
    font-size: 16px;
    color: #8c8c8c;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    
`;

export const TextSmall = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
    margin-bottom: 150px;

`;

export const Link = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }

`;

export const Input = styled.input`
    box-sizing: border-box;
    font-size: 16px;
    display: block;
    appearance: none;
    width: 100%;
    height: 50px;
    font: inherit;
    margin: 0;
    margin-top: 14px;
    background: #333;
    border-radius: 4px;
    border: 0;
    color: white;
    line-height: 50px;
    box-shadow: none;
    box-shadow: none;
    padding: 16px 20px 16px;
    width: 98%;

    &:last-of-type{
        margin-bottom: 30px;
        
    }
`;

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 12px;
    padding: 16px;
    width: 98%;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        
    }

`;


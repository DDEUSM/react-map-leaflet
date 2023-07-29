import styled from "styled-components";

const shadow_color = `rgba(128, 128, 128, 0.418)`;
const orange_color = `orange`;
const darkBlue = `#084A6A`;
const transition_pattern = `ease-in-out .2s`;

export const Paragraph = styled.p`    
    color : ${darkBlue};
`;

export const Main = styled.main`
    position : relative;
    display : flex;    
    background-color : white;
    height : 100svh;
    width : 100%;
    overflow-y: hidden;
    @media (max-width : 600px){
        justify-content : center;
    }
`;

export const MapRightSection = styled.section`
    height : 100%;
    width : 100%;
    z-index : 1;    
`;

export const Form = styled.form`
    position : absolute;
    left : 4px;
    display : flex;
    align-items : center;
    justify-content : center;
    width : 580px;  
    margin-top : 85px;  
    background-color: white;    
    border-radius: 10px;
    box-shadow: 0px 3px 5px 1px ${shadow_color};
    padding : 4px;   
    z-index : 2;     
    @media (max-width : 600px){
        width : 96%;       
        left : auto;   
    }
`;

export const InputLocale = styled.input`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 40px;
    padding : 2px;
    border : none;
    border-radius : 10px;  
    font-size : 14.5px;      
    color : gray;
    outline : none;

`;

export const DeleteText = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;    
    font-size :  1.2em;
    
    font-weight : light;
    color : orange;    
    height : 24px;
    width : 24px;
    padding : 2px;
    transition : ${transition_pattern};
    background-color : transparent;
    border : none;
    margin-right : 4px;
    cursor : pointer;    
    border-radius : 50%;
    border : 1px solid orange;
    &:hover {
        background-color : orange;
        color : white;
    }
`;

export const Button = styled.button`
    background-color : #00000000;
    border : none;    
    padding: 0px 10px;    
`;

export const Divider = styled.div`
    height: 30px;
    width : 1px;
    background-color : #c4c4c4;
`;

interface ResultContainerProps {
    visible : boolean;    
}

export const ResultContainer = styled.div<ResultContainerProps>`
    position : absolute;    
    top : 58px;    
    display : flex;
    flex-direction : column;  
    align-items : center;
    justify-content : center;
    height : 485px;
    width : 580px;  
    padding :1px 4px;
    border-radius: 10px; 
    background-color : white;   
    transition : all ease-in .4s;
    margin-left : ${({ visible } : ResultContainerProps) => {
        return (visible?(`4px`):(`-1200px`))
    }};
    margin-top : 85px;  
    z-index : 2;
    box-shadow: 0px 3px 5px 1px ${shadow_color};

    @media (max-width : 600px){
        width : 96%;           
        margin-left : ${({ visible } : ResultContainerProps) => {
            return (visible?(`0`):(`-1200px`))
        }}; 
    }
    
`;

export const SubTitle = styled.h3`    
    font-weight : 500;
    color: ${orange_color};    
    margin : 0px;    
    background-color : white;    
    padding : 12px 0px;
    
`;

export const ResultList = styled.ul`    
    display : flex;
    flex-direction : column;          
    height : 500px;
    width : calc(100% - 2px);
    margin : 0px;
    padding : 1px;
    style : none;
    transition : ${transition_pattern};
    overflow-y: auto;    
    background-color : white;    
    border: 1px solid rgb(223, 223, 223);
    border-radius: 8px;
`;


export const LocaleContainer = styled.li`
    display : flex;    
    align-items : center;
    gap: 4px;
    width : calc(100% - 20px);
    height : 76px;
    padding: 0px 4px;
    background-color : white;    
    color : ${darkBlue};    
    flex : none;
    cursor : pointer;    
    border-bottom : 1px solid #c4c4c4;
    border-left : 4px solid transparent;    
    border-radius : 8px;
    transition : ${transition_pattern};
    font-size : 14px;
    line-height: 140%;    
    &:hover {        
        border-left : 4px solid ${orange_color};         
        border-bottom : 1px solid ${orange_color};
        color : ${darkBlue};            
    } 

    @media (max-width : 510px){
        font-size : 12px;
        height : 95px;
        &:hover {
            border-left : 4px solid transparent;         
            border-bottom : 1px solid #c4c4c4;
            color : ${darkBlue};   
        }             
    }
`;

export const BlurLimit = styled.div`
    position : absolute;
    bottom : 0;
    opacity : .90;
    background-color : white;
    height : 10px;
    width : 95%;    
    border-radius : 18px;
`;

export const AddressInfoBox = styled.div`
    height : 80px;
    width : ;
`;

type BoxProps = {
    visible : boolean;
}

export const SelectedAddresBox = styled.div<BoxProps>`    
    display : flex;
    text-align : left;
    gap : 4px;
    justify-content : flex-start;
    align-items : center;
    position : absolute;
    bottom : 75%;
    height : 95px;
    width : 580px;  
    padding: 0px 4px;  
    color: white;
    background-color : #00B2FF;  
    border-radius : 10px;  
    font-size : 14px;
    line-height: 140%; 
    transition : ${transition_pattern};
    margin-left : ${({ visible } : ResultContainerProps) => {
        return (visible?(`4px`):(`-1200px`))
    }};
    z-index: 2;

    @media (max-width : 600px) {
        bottom : 4px;
        margin-bottom : ${({ visible } : BoxProps) => {
            return (visible?(`0px`):(`-95px`))
        }}; 
        margin-left : 0px;
        font-size : 12px;
        width : calc(100% - 16px);  

    }
   
`;
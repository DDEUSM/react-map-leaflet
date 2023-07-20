import styled,{ createGlobalStyle} from "styled-components"
const shadow_color = `#cecebf`;
const orange_color = `#E89B25`;
const darkBlue = `#084A6A`;
const transition_pattern = `ease-in-out .2s`;


export const Paragraph = styled.p`
    
    color : ${darkBlue};
`;

export const Main = styled.main`
    display : flex;    
    background-color : white;
    height : 100vh;
    width : 100%;

    @media (max-width : 600px){
        justify-content : center;
    }
`;

export const MapRightSection = styled.section`
    height : 100%;
    width : 100%;
    z-index : 1;    
`;

export const LocaleLeftSection = styled.section`
    position : absolute;    
    display: flex;
    flex-direction: column;             
    height: 100%;
    width : 580px;       
    z-index : 2;
    margin-left: 5px;

    @media (max-width : 600px){
        width : 99%;
        margin : 0px;
    }
`;

export const SearchContainer = styled.div`    
    display: flex;
    flex-direction: column;    
    height : 540px;
    gap : 4px;
    width: 100%;            
    margin-top : 85px;    
    border-radius : 20px;
`;

export const Form = styled.form`
    display : flex;
    align-items : center;
    justify-content : center;
    max-width : calc(100% - 8px);    
    background-color: white;    
    border-radius: 15px;
    box-shadow: 0px 3px 5px 1px ${shadow_color};
    padding : 4px;    
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
position : relative;
    display : flex;
    flex-direction : column;  
    align-items : center;
    justify-content : center;
    height : 89%;
    width : 100%;    
    border-radius: 15px; 
    background-color : white;   
    transition : all ease-in .4s;
    margin-left : ${({ visible } : ResultContainerProps) => {
        return visible?(`0px`):(`-590px`)
    }};
    
`;

export const SubTitle = styled.h3`    
    font-weight : 500;
    color: ${orange_color};    
    margin : 0px;    
    background-color : white;    
    padding : 12px 0px;
    
`;

export const ResultList = styled.ul`
    position : relative;
    display : flex;
    flex-direction : column;
    align-items : center;
    
    height : 89%;
    width : 100%;
    margin : 0px;
    padding : 0px;
    style : none;
    transition : ${transition_pattern};
    overflow: auto;    
    background-color : white;    
    border-bottom-left-radius : 15px;
    border-bottom-right-radius : 15px;
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
        font-size : 13.5px;           ;
        height : 95px;
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
import "../../App.css";
import { useState, useRef, useEffect } from 'react';

export default function PreLoader(){

    const [is_loading, setLoad] = useState<boolean>(true);
    const timer_ref = useRef<any>(null);

    function maxTimeLoad(){
        timer_ref.current = setTimeout(() => {
            setLoad(!is_loading)
            console.log(timer_ref.current);
        }, 2000);        
    }

    useEffect(() => {
        maxTimeLoad();
    },[]);

    return (
        <>            
            {is_loading?(
                <svg className="svgCircle">
                    <circle cx="40" cy="40" r="40">                
                    </circle>            
                </svg>
            ):(
                <p>Nenhum Endereço foi Encontrado.</p>
            )}
        </>
    )
}
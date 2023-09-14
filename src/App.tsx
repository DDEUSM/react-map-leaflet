
import Map from './components/Map';
import MarkerIcon from './assets/marker.png';
import { useState, useRef, useEffect} from 'react';
import { debounce } from 'lodash';

import { AddresDetailsType } from "./types/Api_types";

import { Main, MapRightSection, InputLocale, Form, ResultContainer, SubTitle, LocaleContainer, ResultList, DeleteText, BlurLimit, SelectedAddresBox } from "./components/MainComponents";

import PreLoader from './components/PreLoader';


const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search?';

export default function App(){

  const [ input_address, setAddress ] = useState("");
  const [ address_data, setData ] = useState<AddresDetailsType[]>();
  const [ selected_address, setAddressDetails ] = useState<AddresDetailsType>();
  const [ isOpen, openModal ] = useState(false);
  const [ typing, setStatusTyping ] = useState(false);
  const debounceRef = useRef<any>(null);
  

  async function searchAddress( input_value : string ){

    const params = {
      q : input_value,
      format : "json",
      addressdetails : "1",
      polygon_geojson : "0",
    } 
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method : "GET",
      redirect : "follow" as RequestRedirect
    }
    const result_req = await fetch(`${NOMINATIM_URL}${queryString}`, requestOptions)
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.log(`error: ${err}`));

    setData(result_req);
  }

  function searchDelay(){
    if(debounceRef.current){
      debounceRef.current.cancel();
    }
    debounceRef.current = debounce((e) => {       
      if(e.target.value.length > 0){
        searchAddress( e.target.value );   
        console.log(e.target.value); 
      }        
    }, 400);
    return debounceRef.current;  
  }

  useEffect(() => {
    setStatusTyping(false);
  },[])

  return (
    <div>
      <Main>
          
            <Form onSubmit={((e) => {e.preventDefault()})}>

              <InputLocale 
                type="text"
                placeholder="Digite um endereço"
                onClick={() => openModal(true)} 
                onBlur={() => openModal(false)}                                        
                onChange={(e) => {
                  setStatusTyping(true);
                  setAddress(e.target.value)
                  if(e.target.value.length > 0){
                    openModal(true);
                  }else{
                    openModal(false);
                  }
                  searchDelay()(e)
                }}                       
                value={input_address}     
              />

              {input_address.length > 0?
              (
                  <DeleteText type="button" 
                    onClick={() => {
                      setAddress("")
                      ,setData([])
                      ,openModal(false)
                    }}
                  >
                    x
                  </DeleteText>
              ):(
                <>
                </>
              )
              }
                                      
            </Form>
            <ResultContainer visible={isOpen}>
              <SubTitle>
                Resultados da Pesquisa
              </SubTitle>
              
              <ResultList>              
              {address_data?.length?(
                address_data.map((address) => {
                  return (
                    <LocaleContainer key={address.place_id} 
                      onClick={() => {setAddressDetails(address), openModal(false)}}
                    >
                      <img src={MarkerIcon} height={30} width={30} alt="icon Marker"/>
                      {address.display_name} 
                                      
                    </LocaleContainer> 
                  )
                })):(
                  typing?(
                    <PreLoader/>
                  ):(
                    <></>
                  )                                      
                )                
              }                    
              </ResultList>                         
              <BlurLimit />
            </ResultContainer>
               
        <MapRightSection>
          <Map lat={selected_address?.lat} lon={selected_address?.lon}/>
        </MapRightSection>
        
        <SelectedAddresBox visible={isOpen?(false):(true)}>
          <img src={MarkerIcon} height={30} width={30} alt="icon Marker"/>
          { selected_address?(selected_address.display_name):('Sem localização atual') }
        </SelectedAddresBox>
        
      </Main>
    </div>
  )
}
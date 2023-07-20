export type AddresDetailsType = {
    
    "address": {
        "city": string;
        "city_district": string;
        "construction": string;
        "continent": string;
        "country": string;
        "country_code": string;
        "house_number": string;
        "neighbourhood": string;
        "postcode": string;
        "public_building": string;
        "state": string;
        "suburb": string;
    };
    "boundingbox": string[];
    "class": string;
    "display_name": string;
    "importance": string;
    "lat": string;
    "licence": string;
    "lon": string;
    "osm_id": string;
    "osm_type": string;
    "place_id": string;
    "svg": string;
    "type": string;   
}

export type MapProps = {
    lat? : string;
    lon? : string;
}




import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./map.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import { Link } from "react-router-dom"

//Add the access token here
mapboxgl.accessToken = "pk.eyJ1Ijoia2FyYW4xMDEwMCIsImEiOiJja3ltcXZkYWgzaTN4MnFvOHRwNXhrYTB0In0.2I6lGzC4QADtL0ZTiGE9HA";

const Map = () => {
    const mapContainerRef = useRef(null);
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [zoom, setZoom] = useState(5);


    navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
        enableHighAccuracy: true,
    });

    //When the position is fetched successfully.
    function successPosition(position) {
        //Mapbox receives longitude and latitude from Geolocation API
        setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
    }

    //When there is an error in fetching the position the position with these coordinates is mocked.
    function errorPosition() {
        setLongitude(12.9716)
        setLatitude(77.5946)
    }

    // This gets fired up when the application loads
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [latitude, longitude],
            zoom: zoom,
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving'
        })

        //This adds zoom button and compass
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        map.addControl(directions, 'top-left');

        map.on("move", () => {
            setLongitude(map.getCenter().longitude);
            setLatitude(map.getCenter().latitude);
            setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <div>
                <nav className="flexing navbar navbar-dark bg-dark">
                <Link className="text-gray-100 text-1xl" to ="/">Home</Link>
                    <span className="navbar-brand mb-0 h1 mx-auto">Just Serach</span>
                </nav>
            </div>
            <div className="map__container" ref={mapContainerRef} />
        </div>
    );
};

export default Map;
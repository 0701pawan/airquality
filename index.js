function updateMap()
{
    fetch("https://api.thingspeak.com/channels/986549/feeds.json?results=2")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.channel)
        //console.log(rsp.feed.temperature)
        latitude=rsp.channel.latitude;
        longitude=rsp.channel.longitude;
        console.log(rsp.channel)
         console.log(latitude)
         console.log(longitude)
         console.log(rsp.feeds[0].field1)
         color = 'rgb(255,0,0)';
         temp="TEMPERATURE";
        
         new mapboxgl.Marker({
            draggable: false,
            color: color
        })

            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML( '<p>'+ "TEMPERATURE"  +": "+ rsp.feeds[0].field1  + '</p>'+'<p>'+"HUMIDITY"+": "  + rsp.feeds[0].field2  + '</p> '+'<p>'+"MQ135" + ": " + rsp.feeds[0].field3  + '</p>'+'<p>'+"MQ2" + ': ' + rsp.feeds[0].field4  + '</p><p>'+"PPM(CO2)" + ': ' + rsp.feeds[0].field5  + '</p>'))
            .addTo(map)
    })
}
updateMap();
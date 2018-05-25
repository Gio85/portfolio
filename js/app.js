$(() => {

  const $map = $('.map');
  let map = null;
  const myStyle = [
    {
      'featureType': 'administrative',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#e85113'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#ffffff'
        },
        {
          'weight': 6
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#cd0064'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#cd0064'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text',
      'stylers': [
        {
          'color': '#cd0064'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'all',
      'stylers': [
        {
          'lightness': 20
        },
        {
          'color': '#efe9e4'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'landscape.man_made',
      'elementType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#f0e4d3'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'hue': '#11ff00'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'lightness': 100
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'hue': '#4cff00'
        },
        {
          'saturation': 58
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'lightness': -100
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'lightness': 100
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#36c889'
        },
        {
          'lightness': -25
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#efe9e4'
        },
        {
          'lightness': -40
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#efe9e4'
        },
        {
          'lightness': -10
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#efe9e4'
        },
        {
          'lightness': -20
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#19a0d8'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'lightness': -100
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'lightness': 100
        }
      ]
    }
  ];

  function initMap() {
    const latLng = { lat: 51.515213, lng: -0.1278 };
    map = new google.maps.Map($map.get(0), {
      zoom: 10,
      center: latLng,
      styles: myStyle
    });
    const contentString = '<div class="infowindow"><h5>Ciao</h5><p>Send me an email.</p></div>';
    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: {
        url: 'img/marker.png',
        scaledSize: new google.maps.Size(60, 50)
      }
    });
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  }

  initMap();
})
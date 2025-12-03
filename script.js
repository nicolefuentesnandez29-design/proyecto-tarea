document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([21.61929, -101.19919], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var puntos = [
        {
            nombre: 'Punto 1',
            coords: [20.694, -88.90],
            imageUrl: 'https://i.imgur.com/joxR1a9.jpeg'
        },
        {
            nombre: 'Punto 2',
            coords: [18.65, -97.76],
            imageUrl: 'https://i.imgur.com/ry2Ftfl.jpeg'
        },
        {
            nombre: 'Punto 3',
            coords: [19.2321, -99.1983],
            imageUrl: 'https://i.imgur.com/lJf9bgi.jpeg'
        },
        {
            nombre: 'Punto 4',
            coords: [20.6148, -100.3793],
            imageUrl: 'https://i.imgur.com/iwGNKDC.jpeg'
        },
        {
            nombre: 'Punto 5',
            coords: [19.228, -101.857],
            imageUrl: 'https://i.imgur.com/MLPwtyH.jpeg'
        },
        {
            nombre: 'Punto 6',
            coords: [16.473, -92.549],
            imageUrl: 'https://i.imgur.com/c5qHW4b.jpeg'
        },
        {
            nombre: 'Punto 7',
            coords: [17.87, -96.83],
            imageUrl: 'https://i.imgur.com/iVbgyZz.jpeg'
        },
        {
            nombre: 'Punto 2.1',
            coords: [17.22, -98.22],
            imageUrl: 'https://i.imgur.com/QkBW3Ne.jpeg'
        },
        {
            nombre: 'Punto 2.2',
            coords: [18.156, -92.637],
            imageUrl: 'https://i.imgur.com/BfyE1Wa.jpeg'
        },
        {
            nombre: 'Punto 2.3',
            coords: [19.849, -97.262],
            imageUrl: 'https://i.imgur.com/bo3n5jD.jpeg'
        },
        {
            nombre: 'Punto 2.4',
            coords: [28.54, -106.00],
            imageUrl: 'https://i.imgur.com/D1b6VgU.jpeg'
        },
        {
            nombre: 'Punto 2.5',
            coords: [18.00, -100.00],
            imageUrl: 'https://i.imgur.com/Up1qSLX.jpeg'
        },
        {
            nombre: 'Punto 2.6',
            coords: [16.19, -94.26],
            imageUrl: 'https://i.imgur.com/kGn0Vf5.jpeg'
        },
        {
            nombre: 'Punto 3.1',
            coords: [25.36666667, -100.55],
            imageUrl: 'https://i.imgur.com/6q9nN9b.jpeg'
        },
        {
            nombre: 'Punto 3.2',
            coords: [16.404, -96.954],
            imageUrl: 'https://i.imgur.com/NwFnTE0.jpeg'
        },
        {
            nombre: 'Punto 3.3',
            coords: [17.759, -89.681],
            imageUrl: 'https://i.imgur.com/aWYbK5c.jpeg'
        },
        {
            nombre: 'Punto 3.5',
            coords: [15.612, -93.120],
            imageUrl: 'https://i.imgur.com/5alzB94.jpeg'
        },
        {
            nombre: 'Punto 3.4',
            coords: [20.838, -101.157],
            imageUrl: 'https://i.imgur.com/QeZVl0t.jpeg'
        },
        {
            nombre: 'Punto 3.6',
            coords: [31.269, -110.940],
            imageUrl: 'https://i.imgur.com/TOemtJT.jpeg'
        },
        {
            nombre: 'Punto 3.7',
            coords: [17.8566, -97.1906],
            imageUrl: 'https://i.imgur.com/tlupj8U.jpeg'
        }
    ];

    puntos.forEach(function(punto) {
        L.marker(punto.coords).addTo(map)
            .bindPopup('<b>' + punto.nombre + '</b><br><img src="' + punto.imageUrl + '" width="200">');
    });
});
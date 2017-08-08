(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [{
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Dodecahedron',
            canPurchase: false,
            soldOut: false,
            images: [{
                    full: 'images/dodeca-01-full.jpg',
                    thumb: 'images/dodeca-01-thumb.jpg'
                },
                {
                    full: 'images/dodeca-02-full.jpg',
                    thumb: 'images/dodeca-02-thumb.jpg'
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Pentagonal Gem',
            canPurchase: false,
            soldOut: false,
            images: [{
                    full: 'images/penta-01-full.jpg',
                    thumb: 'images/penta-01-thumb.jpg'
                },
                {
                    full: 'images/penta-02-full.jpg',
                    thumb: 'images/penta-02-thumb.jpg'
                }
            ]
        }
    ];
})();

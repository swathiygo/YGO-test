# USER
## Register User

Register a new user.

    URL: http://localhost:5000/api/v1/auth/register

    Method: POST

    URL Params:
        Required:
                name:[string]
                gender:[string]
                address:[string]
                phone:[number]     
                password:[string]
        Optional:
                user_photo:[string]
                email:[string]

    Data Params:
                {
                    "name": "Swathi",
                    "gender": "Female",
                    "address": "12/29 Titan Township",
                    "phone": "9443890663",
                    "email": "swathi@gmail.com",
                    "password": "123456"
                }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjkyNjc3ZWI2OWFlMTZmYzNhZDJhNyIsImlhdCI6MTYzMDA4Njc3Nn0.UlUycZPK5j-Z2SLW9UbCITLCOjjZwFrZIYganLUY7Tw"
                }

    Error Response:
        Code: 400 BAD REQUEST
        Content: {
                    "success": false,
                    "error": "Please add a name"/ "Please select gender"/ "Please add an address"/ "Please add an phone number"/ "Please add a password"
                }

## User Login

user login with phone number and password.

    URL: http://localhost:5000/api/v1/auth/login

    Method: POST

    URL Params:
        Required:
                phone:[number]     
                password:[string]

    Data Params:
                {
                    "phone": "9443890663 ",
                    "password": "123456"
                }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjkyNjc3ZWI2OWFlMTZmYzNhZDJhNyIsImlhdCI6MTYzMDA4NzE3NX0.5p0gQlEqnbLwaA31sv5JVxFRIQv4_--yumsCAOV1y68"
                }

    Error Response:
        Code: 401 UNAUTHORIZED
        Content: {
                    "success": false,
                    "error": "Invalid credentials"
                }

    OR
        Code: 400 BAD REQUEST
        Content: {
                    "success": false,
                    "error": "Please provide an phone number and password"
                }

## Get current user

Display the current user who is logged in.

    URL: http://localhost:5000/api/v1/auth/me

    Method: GET

    URL Params:None
            
    Data Params:None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "user_photo": "no-photo.jpg",
                        "_id": "614c22bd8716e10c487bb602",
                        "name": "DavidMathew",
                        "gender": "Male",
                        "address": "S.America",
                        "phone": 1234567890,
                        "email": "hello@gmail.com",
                        "createdAt": "2021-09-23T06:46:21.988Z",
                        "__v": 0
                    }
                }

    Error Response:
        Code: 401 UNAUTHORIZED
        Content: {
                    "success": false,
                    "error": "Not authorized to access this route"
                }

## Update user details

Update User credentials. User can update name, phone number, email, address.

    URL: http://localhost:5000/api/v1/auth/updatedetails

    Method: PUT

    URL Params:
        Required:
                {
                   name:[string]
                   address:[string]
                   phone:[number]
                }
        Optional:
                {
                    email:[string]
                }       
            
    Data Params:
                {
                    "name": "DavidMathew",
                    "address":"S.America",
                    "email":"hello@gmail.com",
                    "phone": "1234567890"
                }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "user_photo": "no-photo.jpg",
                        "_id": "614c22bd8716e10c487bb602",
                        "name": "DavidMathew",
                        "gender": "Male",
                        "address": "S.America",
                        "phone": 1234567890,
                        "email": "hello@gmail.com",
                        "createdAt": "2021-09-23T06:46:21.988Z",
                        "__v": 0
                    }
                }
        
    Error Response:
        Code: 400 BAD REQUEST
        Content: {
                    "success": false,
                    "error": "Please add an phone number"/"Please add a name"/"Please add an address"
                }

        OR
        Code: 401 UNAUTHORIZED
        Content: {
                    "success": false,
                    "error": "Not authorized to access this route"
                }

## Update password

Update user password and phone number. 

    URL: http://localhost:5000/api/v1/auth/updatepassword

    Method: PUT

    URL Params:
        Required:
                {
                    currentPassword:[string]
                    newPassword:[string]
                }
            
    Data Params:
                {
                     "currentPassword": "123456",
                    "newPassword": "654321"
                }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjkyNjc3ZWI2OWFlMTZmYzNhZDJhNyIsImlhdCI6MTYzMDA4NzE3NX0.5p0gQlEqnbLwaA31sv5JVxFRIQv4_--yumsCAOV1y68"
                }

    Error Response:
        Code: 401 UNAUTHORIZED
        Content: {
                    "success": false,
                    "error": "Invalid credentials"
                }

    OR
        Code: 400 BAD REQUEST
        Content: {
                    "success": false,
                    "error": "Please provide an phone number and password"
                }

    OR
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "Cannot read property 'id' of null"
                }

# SHOPS
## Add Shop

Adds a new shop with a id.

    URL: http://localhost:5000/api/v1/shops

    Method: POST

    URL Params:
        Required:
                name:[string]
                description:[string]
                owner_name:[string]
                address:[string]
                product_category:[string]
                shop_category:[string]
                service:[string]
                status:[boolean]
        Optional:
                phone:[number]
                email:[string]
                documents:[string]
                shop_rating:[string]
                shop_reviews:[string]
                location

    Data Params:
            {
                "name": "Kingson Stores ",
                "description": "Local grocery shop located in Titan Township",
                "owner_name": "Muthuvel",
                "address": "Muthuvel Stores, Titan Township, Mathigiri, Hosur",
                "product_category": ["Diary", "Vegetables", "Fruits"],
                "shop_category": ["Grocery", "Stationary"],
                "service": ["Delivery"],
                "status": true
            }
    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "shop_photo": "no-photo.jpg",
                        "documents": "no-photo.jpg",
                        "product_category": [
                            "Diary",
                            "Vegetables",
                            "Fruits"
                        ],
                        "shop_category": [
                            "Grocery",
                            "Stationary"
                        ],
                        "service": [
                            "Delivery"
                        ],
                        "status": true,
                        "_id": "614c143b32617239c0c8486d",
                        "name": "Kingson Stores",
                        "description": "Local grocery shop located in Titan Township",
                        "owner_name": "Muthuvel",
                        "address": "Muthuvel Stores, Titan Township, Mathigiri, Hosur",
                        "slug": "kingson-stores",
                        "__v": 0,
                        "id": "614c143b32617239c0c8486d"
                    }
                }
    Error Response:
        Code: 400 BAD REQUEST
        Content: {
                    {
                        "success": false,
                        "error": "Please add a shop name"/"Please add a description"/"Please add an address"/"Please add owners name"/"Please add a product category"/"Please add a shop category"/"Please choose delivery/Take-away"/"Please add a valid email"
                    }
                }

## Get all shops

To display all the stores in the database.

    URL: http://localhost:5000/api/v1/shops

    Method: GET

    URL Params: None
       
    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "count": 2,
                    "pagination": {},
                    "data": [
                        {
                            "shop_photo": "no-photo.jpg",
                            "documents": "no-photo.jpg",
                            "_id": "61150a9bec8f4737c8f52425",
                            "name": "Muthuvel Stores",
                            "product_category": ..........
                        },
                        {
                            "shop_photo": "no-photo.jpg",
                            "documents": "no-photo.jpg",
                            "_id": "614c143b32617239c0c8486d",
                            "name": "Kingson Stores",
                            "product_category": ..........
                        }   ]
                 }

    Error Response:
        Code: 
        Content:

## Delete a shop

Delete a shop with it's shop id.

    URL: http://localhost:5000/api/v1/shops/<shop-id>

    Method: DELETE

    URL Params:None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {}
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: {
                    "success": false,
                    "error": "Item not found with id of 614c1883004c4629304254b"
                }

# PRODUCTS
## Add product

Add a product to a particular shop with shop id.

    URL: http://localhost:5000/api/v1/shops/<shop-id>/products

    Method: POST

    URL Params:
        Required:
                product_name:[string]
                price:[number]
                product_bio:[string]
                product_description:[string]
                stock:[boolean]
                product_category:[string]
        Optional:
                product_photo:[string]
                product_details:[string]
                discount:[number]
                replace:[boolean]
                return:[boolean]
                product_rating:[number]
                product_reviews:[string]

    Data Params:
        {
            "product_name": "Phone",
            "price": "30000",
            "discount": "10",
            "product_bio": "OnePlus Nord",
            "product_details": "6Gb RAM, 256Gb storage",
            "product_description": "Brand new product, good display",
            "stock": true,
            "product_category": "Electronics",
            "replace": true,
            "return": false,
            "product_rating": "4.5",
            "prodcut_reviews": "Good"
        }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "product_photo": "no-photo.jpg",
                        "stock": true,
                        "replace": true,
                        "return": false,
                        "_id": "614c2ada8716e10c487bb61f",
                        "product_name": "Phone",
                        "price": 30000,
                        "discount": 10,
                        "product_bio": "OnePlus Nord",
                        "product_details": "6Gb RAM, 256Gb storage",
                        "product_description": "Brand new product, good display",
                        "product_category": "Electronics",
                        "product_rating": 4.5,
                        "shop": "614c143b32617239c0c8486d",
                        "createdAt": "2021-09-23T07:20:58.627Z",
                        "__v": 0
                    }
                }

    Error Response:
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "No shop with the id of 610e0eae1bfafe15980eacda"
                }

    OR
        Code: 404 NOT FOUND
        Content:{
                    "success": false,
                    "error": "Item not found with id of 61150aafecf4737c8f52428"
                }
    OR
        Code: 400 BAD REQUEST
        Content: {
                    "success": false,
                    "error": "Please add a product name"/"Please add a the price of the product"/"Please add a description"/"Please add a bio for the product"/"Please enter the product category"
                }

## Get all products

Get all the product details of all the shops.

    URL: http://localhost:5000/api/v1/products

    Method: POST

    URL Params: None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content:  {
                    "success": true,
                    "count": 4,
                    "data": [
                        {
                            "product_photo": "no-photo.jpg",
                            "stock": true,
                            "replace": true,
                            "return": false,
                            "_id": "6128f9f99432653028a4bffc",
                            "product_name": "Pillow",
                            "price": 90,
                            "discount": 10,
                            "product_bio": "Tata Suagr",
                            "product_details": "500g, 20cmx30cm",
                            "product_description": "Very good quality sugar",
                            "product_category": "Grocery",
                            "product_rating": 3.5,
                            "shop": {
                                "shop_category": [
                                    "Grocery",
                                    "Stationary"
                                ],
                                "_id": "61150a9bec8f4737c8f52425",
                                "name": "Muthuvel Stores",
                                "description": "Local grocery shop located in Titan Township",
                                "id": "61150a9bec8f4737c8f52425"
                            },
                            "createdAt": "2021-08-27T14:43:05.526Z",
                            "__v": 0
                        },
                        { .......},{........ },{........}
                    ]
                }  
     Error Response:
        Code: 
        Content:

##  Get all product of a shop

Get all the product from a particular store using shop id.

    URL: http://localhost:5000/api/v1/shops/<shop-id>/products

    Method: GET

    URL Params: None
    
    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "count": 0,
                    "data": []
                }
                OR
                {
                    "success": true,
                    "count": 2,
                    "data": [
                        {
                            "product_photo": "no-photo.jpg",
                            "stock": true,
                            "replace": true,
                            "return": false,
                            "_id": "614c2ada8716e10c487bb61f",
                            "product_name": "Phone",
                            "price": 30000,
                            "discount": 10,
                            "product_bio": "OnePlus Nord",
                            "product_details": "6Gb RAM, 256Gb storage",
                            "product_description": "Brand new product, good display",
                            "product_category": "Electronics",
                            "product_rating": 4.5,
                            "shop": "614c143b32617239c0c8486d",
                            "createdAt": "2021-09-23T07:20:58.627Z",
                            "__v": 0
                        },
                        {......}
                    ]
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: {
                    "success": false,
                    "error": "Item not found with id of 614c143b32617239c0c8486"
                }

## Get single product

Get a single product of any shop using product id.

    URL: http://localhost:5000/api/v1/products/<product_id>

    Method: GET

    URL Params: None
    
    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "product_photo": "no-photo.jpg",
                        "stock": true,
                        "replace": true,
                        "return": false,
                        "_id": "6128f9f99432653028a4bffc",
                        "product_name": "Pillow",
                        "price": 90,
                        "discount": 10,
                        "product_bio": "Tata Suagr",
                        "product_details": "500g, 20cmx30cm",
                        "product_description": "Very good quality sugar",
                        "product_category": "Grocery",
                        "product_rating": 3.5,
                        "shop": {
                            "shop_category": [
                                "Grocery",
                                "Stationary"
                            ],
                            "_id": "61150a9bec8f4737c8f52425",
                            "name": "Muthuvel Stores",
                            "description": "Local grocery shop located in Titan Township",
                            "id": "61150a9bec8f4737c8f52425"
                        },
                        "createdAt": "2021-08-27T14:43:05.526Z",
                        "__v": 0     
                }

    Error Response:
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "No product with the id of 610d78cd8199543fb829104b"
                }
        OR
        Code: 404 NOT FOUND
        Content:{
                    "success": false,
                    "error": "Item not found with id of 6128f9f99432653028a4bff"
                }

## Update product details

Update product details of a particular product with product id.

    URL: http://localhost:5000/api/v1/products/<product_id>

    Method: PUT

    URL Params: 
        Optional: {
                    product_name:[string]
                    price:[number]
                    discount:[number]
                    product_bio:[string]
                    product_description:[string]
                    product_details:[string]
                    product_category:[string]
                    product_rating:[number]
                    product_reviews:[string]
            }
    
    Data Params: {
                    "product_name":"soft pillow",
                    "price":"220",
                    "discount":"25",
                    "product_bio":"good pillow",
                    "product_details": "700g, 30cmx30cm",
                    "product_description": "Good sugar",
                    "product_category": "Grocery"
                }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "product_photo": "no-photo.jpg",
                        "stock": true,
                        "replace": true,
                        "return": false,
                        "_id": "6128f9f99432653028a4bffc",
                        "product_name": "soft pillow",
                        "price": 220,
                        "discount": 25,
                        "product_bio": "good pillow",
                        "product_details": "700g, 30cmx30cm",
                        "product_description": "Good sugar",
                        "product_category": "Grocery",
                        "product_rating": 3.5,
                        "shop": "61150a9bec8f4737c8f52425",
                        "createdAt": "2021-08-27T14:43:05.526Z",
                        "__v": 0
                    }
                }

    Error Response:
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "No product with the id of 610d785d8199543fb8291048"
                } 
        OR
        Code: 404 NOT FOUND
        Content:{
                    "success": false,
                    "error": "Item not found with id of 6128f9f99432653028a4bff"
                }
        
## Delete a product

Delete a product of any shop with product id.

    URL: http://localhost:5000/api/v1/products/<product-id>

    Method: DELETE

    URL Params:None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {}
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: {
                    "success": false,
                    "error": "Item not found with id of 614c1883004c4629304254b"
                }
        OR
        Code: 500 INTERNAL SERVER ERROR
        Content:{
                    "success": false,
                    "error": "No product with the id of 610d785d8199543fb8291048"
                }

# ADS
## Add ad

Adds a ad to a particular product.

    URL: http://localhost:5000/api/v1/products/<product-id>/ads

    Method: POST

    URL Params:
        Required:
                ad_name:[string]
                enable:[boolean]
        Optional:
                ad_description:[string]

    Data Params:
        {
            "ad_name": "sugar 1+1",
            "ad_description": "suagr packet buy one get one free",
            "enable": true
        }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "enable": true,
                        "_id": "6128f5959432653028a4bfe6",
                        "ad_name": "sugar 1+1",
                        "ad_description": "suagr packet buy one get one free",
                        "product": "61150aafec8f4737c8f52428",
                        "createdAt": "2021-08-27T14:24:21.913Z",
                        "__v": 0
                    }
                }

    Error Response:
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "No product with the id of 610e0eae1bfafe15980eacda"
                }

    OR
        Code: 404 NOT FOUND
        Content:{
                    "success": false,
                    "error": "Item not found with id of 61150aafecf4737c8f52428"
                }
    OR
        Code: 400 BAD REQUEST
        Content: {
                    "success": false,
                    "error": "Please add a Advertisement name"
                }

## Get all ads

Get all the ads available with product id.

    URL: http://localhost:5000/api/v1/ads

    Method: GET

    URL Params: None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "count": 4,
                    "data": [
                        {
                            "enable": true,
                            "_id": "611695423daed73b18aee379",
                            "ad_name": "sugar 1+1",
                            "ad_description": "suagr packet buy one get one free",
                            "product": {
                                "_id": "61150aafec8f4737c8f52428",
                                "product_name": "Sugar",
                                "price": 90
                            },
                            "createdAt": "2021-08-13T15:52:34.481Z",
                            "__v": 0
                        }, ....
                  }

    Error Response:
        Code: 
        Content: 

## Get particular ad

Get a single ad with the ad id.

    URL: http://localhost:5000/api/v1/ads/<ad-id>

    Method: GET

    URL Params: None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "enable": true,
                        "_id": "6128fa119432653028a4bfff",
                        "ad_name": "sugar 1+1",
                        "ad_description": "suagr packet buy one get one free",
                        "product": {
                            "_id": "6128f9f99432653028a4bffc",
                            "product_name": "Sugar",
                            "price": 90
                        },
                        "createdAt": "2021-08-27T14:43:29.836Z",
                        "__v": 0
                    }
                }

    Error Response:
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "No ad with the id of 61169f969299991cc833bfc9"
                }

## Get ads of a product

Get all the ads available for a product with the product id.

    URL: http://localhost:5000/api/v1/products/<product-id>/ads

    Method: GET

    URL Params: None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "count": 2,
                    "data": [
                        {
                            "enable": true,
                            "_id": "6128fa119432653028a4bfff",
                            "ad_name": "salt 1+1",
                            "ad_description": "suagr packet buy one get one free",
                            "product": "6128f9f99432653028a4bffc",
                            "createdAt": "2021-08-27T14:43:29.836Z",
                            "__v": 0
                        },....
                    ]
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: {
                    "success": false,
                    "error": "Item not found with id of 6128f9f99432653028a4ffc"
                }

# DEALS
## Add deal

Adds a deal to a particular product.

    URL: http://localhost:5000/api/v1/products/<product-id>/deals

    Method: POST

    URL Params:
        Required:
                deal_name:[string]
                enable:[boolean]       
        Optional:
                deal_description:[string]
                discount:[number]
                deal_photo:[string]

    Data Params:
        {
            "deal_name": "BUY 1 GET 1 FREE",
            "deal_description": "Goodday buscuit",
            "discount": "7",
            "enable": true
        }

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "deal_photo": "no-photo.jpg",
                        "enable": true,
                        "_id": "614c1eb98716e10c487bb5f6",
                        "deal_name": "BUY 1 GET 1 FREE",
                        "deal_description": "Goodday buscuit",
                        "discount": 7,
                        "product": "6128f9f99432653028a4bffc",
                        "createdAt": "2021-09-23T06:29:13.124Z",
                        "__v": 0
                    }
                }

    Error Response:
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "No product with the id of 610e0eae1bfafe15980eacda"
                }

    OR
        Code: 404 NOT FOUND
        Content:{
                    "success": false,
                    "error": "Item not found with id of 6128f9f99432653028a4bff"
                }

## Get all deals

Get all the ads available with product id.

    URL: http://localhost:5000/api/v1/deals

    Method: GET

    URL Params: None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "count": 2,
                    "data": [
                        {
                            "deal_photo": "no-photo.jpg",
                            "enable": true,
                            "_id": "611697f26c8102317c5cf64d",
                            "deal_name": "sugar +2",
                            "deal_description": "sugar packets",
                            "discount": 10,
                            "product": null,
                            "createdAt": "2021-08-13T16:04:02.627Z",
                            "__v": 0
                        },
                        {
                            "deal_photo": "no-photo.jpg",
                            "enable": true,
                            "_id": "614c1eb98716e10c487bb5f6",
                            "deal_name": "BUY 1 GET 1 FREE",
                            "deal_description": "Goodday buscuit",
                            "discount": 7,
                            "product": {
                                "_id": "6128f9f99432653028a4bffc",
                                "product_name": "Pillow",
                                "price": 90
                            },
                            "createdAt": "2021-09-23T06:29:13.124Z",
                            "__v": 0
                        }   ]
                  }

    Error Response:
        Code: 
        Content: 

## Get particular deal

Get a single ad with the ad id.

    URL: http://localhost:5000/api/v1/deals/<deal-id>

    Method: GET

    URL Params: None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                    "success": true,
                    "data": {
                        "deal_photo": "no-photo.jpg",
                        "enable": true,
                        "_id": "611697f26c8102317c5cf64d",
                        "deal_name": "sugar +2",
                        "deal_description": "sugar packets",
                        "discount": 10,
                        "product": null,
                        "createdAt": "2021-08-13T16:04:02.627Z",
                        "__v": 0
                    }
                }

    Error Response:
        Code: 500 INTERNAL SERVER ERROR
        Content: {
                    "success": false,
                    "error": "No deal with the id of 61169f969299991cc833bfc9"
                }

    OR
        Code: 404 NOT FOUND
        Content: {
                    "success": false,
                    "error": "Item not found with id of 611697f26c8102317c5cf64"
                }


## Get deals of a product

Get all the ads available for a product with the product id.

    URL: http://localhost:5000/api/v1/products/<product_id>/deals

    Method: GET

    URL Params: None

    Data Params: None

    Success Response:
        Code: 200 OK
        Content: {
                   "success": true,
                    "count": 0,
                    "data": []
                }
                OR
                {
                    "success": true,
                    "count": 1,
                    "data": [
                        {
                            "deal_photo": "no-photo.jpg",
                            "enable": true,
                            "_id": "614c1eb98716e10c487bb5f6",
                            "deal_name": "BUY 1 GET 1 FREE",
                            "deal_description": "Goodday buscuit",
                            "discount": 7,
                            "product": "6128f9f99432653028a4bffc",
                            "createdAt": "2021-09-23T06:29:13.124Z",
                            "__v": 0
                        }  ]
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: {
                    "success": false,
                    "error": "Item not found with id of 6128f9f99432653028a4ffc"
                }


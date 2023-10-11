# blog-app

![Screenshot 2023-10-10 225641](https://github.com/itsronalds/blog-app/assets/77751686/adcaf307-8249-4ae8-b255-b6e3d63f7187)

## Overview
Project related to a blog application where the following actions can be performed:

- Users will be able to register
- Create posts
- Update post
- Edit profile data

## Requirements
You must have installed on your PC: 

- Node.js v16.0.0
- Yarn Package Manager
- [Cloudinary](https://cloudinary.com/) Account

## Clone
```$
git clone https://github.com/itsronalds/blog-app.git
```

## Setup server environment variables
In the .env.example file you will see some variables created, you will create an .env file in the server folder and paste the variables from the .env.example, only this time you will have to put the data from:

- The database
- Cloudinary credentials
- The JWT signature

## Install dependencies
- Client
```$
cd blog-app &&
cd client &&
yarn
```
- Server
```$
cd blog-app &&
cd server &&
yarn
```

## Run server
```$
cd server &&
yarn run dev
```

## Run client
```
cd client &&
yarn start
```

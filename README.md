# MyMap

## Introduction to the Room Rental Website

### Inspiration 🌞

Many people, especially students, people who have just moved to the city or those whose jobs require frequent travel, have difficulty finding suitable accommodation. Having to go to many places, ask many people and verify information is a time-consuming and laborious process.

### What It Does 🎯

Our website is designed to help customers easily search for and rent rooms that meet their needs. With the support of advanced map technology, we provide an intuitive and convenient platform to accurately and quickly locate rooms.

### Key Features 🔧

1. **Interactive Map**:
   - Using an intuitive map, customers can easily search for rooms in their desired areas.
   - The map clearly displays the locations of rooms, giving customers an overview of the surrounding area.

2. **Search Based on Needs**:
   - Smart search filters allow customers to select rooms based on various criteria such as price, area, amenities, and proximity to important locations.
   - Customers can save their favorite choices for easy comparison and decision-making.

3. **Online Communication**:
   - The messaging and online calling functions enable customers to contact landlords quickly and conveniently.
   - Instant notification systems ensure customers do not miss any important information.

4. **Stable Pricing**:
   - We are committed to providing competitive and transparent pricing.
   - Pricing information is updated regularly to ensure accuracy and fairness.

### Benefits for Users 🚀

- **Time-Saving**: With map technology and smart search systems, customers can quickly find suitable rooms without spending much time traveling.
- **Convenience and Safety**: Online communication allows customers to comfortably ask questions and confirm information before visiting the room, reducing risks and increasing safety.
- **Diverse and Accurate Information**: All information about rooms is carefully reviewed, ensuring reliability and accuracy.

### How we built it 🤞🏿
The project was primarily built with the MERN stack (MongoDB, ExpressJS and ReactJS, and NodeJS).
Prisma to communicate with database, cookie-parser to authority user.
You can use openssl rand -base64 32 to generate jwt_URL.
dompurify to clean HTML and keep it safe, ...


## Setup Development Environment
Run three different Shells for backend (nodeJS), frontend (react app) and socket.io

### ReactJs

- cd -> ./frontend

- Create a .env file with sample_env

-   Ex:REACT_API_HERE_KEY=yourKeyHere ...

- Install npm packages and start the project
-> npm i 
-> npm run dev

### NodeJs

- cd -> ./api

- Install npm packages and start the project
-> npm i 
-> npx prisma db push
-> npm run dev

### Socket.io

- cd -> ./socket

- Install npm packages and start the project
-> npm i 
-> npm run dev

### And download Console Ninja

## Link Tutorial: ...

## Website Features Description

### 1. **Interactive Map**
   - **Intuitive Search**: The website features an interactive map that allows users to search for rooms in their desired areas easily. Users can zoom in and out, drag the map, and click on specific locations to see available rooms.
   - **Location Overview**: The map provides a clear visual representation of the room locations, giving users an overview of the area, nearby amenities, transportation options, and neighborhood characteristics.
   - **Geolocation**: Users can enable geolocation services to find rooms near their current location, making it convenient for those looking for nearby accommodations. (developing)

### 2. **Search Based on Needs**
   - **Smart Filters**: The search functionality includes smart filters that let users narrow down their options based on various criteria such as price range, room size, number of bedrooms, availability of amenities (e.g., Wi-Fi, parking, air conditioning), and proximity to specific locations (e.g., universities, offices, public transportation).
   - **Customizable Search**: Users can customize their search preferences and save them for future use, making it easy to find rooms that meet their specific needs. 
   - **Comparison Tool**: The website offers a comparison tool where users can compare multiple rooms side-by-side based on their features, prices, and locations. (developing)

### 3. **Online Communication**
   - **Messaging System**: An integrated messaging system allows users to communicate directly with landlords or property managers. Users can ask questions, request more information, and schedule viewings through the platform.
   - **Video Calls**: The website supports video calls, enabling virtual tours of rooms and face-to-face communication with landlords, which is particularly useful for remote users. (developing)
   - **Notifications**: Users receive instant notifications for new messages.

### 4. **Stable Pricing**
   - **Transparent Pricing**: The website provides transparent pricing for all listed rooms, including any additional costs such as utilities, maintenance fees, or security deposits. This helps users make informed decisions without hidden surprises.
   - **Regular Updates**: Pricing information is regularly updated to reflect current market conditions, ensuring that users have access to accurate and fair prices.
   - **Discounts and Offers**: Users can find special discounts and promotional offers on selected rooms, making it easier to find budget-friendly options.

### Additional Features
- **Detailed Listings**: Each room listing includes comprehensive details such as high-quality photos, floor plans, descriptions of the property, nearby amenities, and terms of rental agreements.
- **Customer Support**: Dedicated customer support is available to assist users with any issues or questions they may have during their search and rental process. (developing)
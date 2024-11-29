import React from "react";
import { SocialIcon } from "react-social-icons";
import weatherImg from "./assets/weatherview.png";
import bookSearchImg from "./assets/book-search.png";
import recipeFinderImg from "./assets/recipe-finder.jpg";

export const contactLinks = [
    {name: 'GitHub', link: "https://github.com/oadegokee", icon: () => <SocialIcon url="https://github.com/oadegokee" />},
    {name: 'LinkedIn', link: "www.linkedin.com/in/olaoluwaadegoke", icon: () => <SocialIcon url="https://www.linkedin.com/in/olaoluwaadegoke" />},
    {name: 'Email', link: "mailto:laoluadegoke@icloud.com", icon: () => <SocialIcon network="email" />},
    {name: 'Medium', link: "https://medium.com/@Laoluadegoke", icon: () => <SocialIcon url="https://medium.com/@Laoluadegoke" />}
]

export const projects = [
    {
        projectImage: weatherImg, 
        name: "Weather Website", 
        description: "I developed a responsive weather website, allowing users to check the current weather and forecast for their location. The website includes an auto-suggest feature for searching by city name or zip code, supports unit switching between Fahrenheit and Celsius, and integrates real-time weather data via the OpenWeather Maps API.",
        languages: "HTML, CSS, JavaScript, React, OpenWeather Maps API, Geoapify API, GitHub", 
        projectUrl: "https://oadegokee.github.io/weatherview/",
        demoUrl: "https://www.youtube.com/watch?v=ooNGEONtrIw"
    },

    {
        projectImage: recipeFinderImg, 
        name: "Android Recipe App", 
        description: "I developed a recipe app that lets users explore and search for various recipes. The app uses MealDB's API, granting users access to various recipes and accompanying YouTube videos, if available. I also implemented an SQLite Database, allowing users to add and save their own recipes directly within the application.",
        languages: "Java, MealDB API, GitHub, Android Studio", 
        projectUrl: "https://github.com/oadegokee/Recipe_Finder",
        demoUrl: ""
    },

    {
        projectImage: bookSearchImg, 
        name: "Book Search Website", 
        description: "I collaborated with other software engineering students to create a book finder website where users can search for books based on title, author, ISBN, or genre. To provide users with accurate and up to date information, we integrated the Google Books API, which provides access to a large database of books.",
        languages: "HTML, CSS, JavaScript, JQuery, GitHub, Google Books API", 
        projectUrl: "https://oadegokee.github.io/2021_BookNet/",
        demoUrl: ""
    }
]
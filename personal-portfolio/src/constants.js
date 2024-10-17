import React from "react";
import { SocialIcon } from "react-social-icons";
import weatherImg from "./assets/weather.png";
import bookSearchImg from "./assets/book-search.png";
import recipeFinderImg from "./assets/recipe-finder.jpg";

export const contactLinks = [
    {name: 'GitHub', link: "https://github.com/oadegokee", icon: () => <SocialIcon url="https://github.com/oadegokee" />},
    {name: 'LinkedIn', link: "www.linkedin.com/in/olaoluwaadegoke", icon: () => <SocialIcon url="https://www.linkedin.com/in/olaoluwaadegoke" />},
    {name: 'Email', link: "mailto:laoluadegoke@icloud.com", icon: () => <SocialIcon network="email" />}
]

export const projects = [
    {
        projectImage: weatherImg, 
        name: "Weather Website", 
        description: "I developed a weather website that lets users check the current weather and forecast of their location. Users can conveniently search for a specific location using either the city name or zip code. Additionally, they have the flexibility to switch between Fahrenheit and Celsius. ",
        languages: "HTML, CSS, JavaScript, Open Weather Maps API, GitHub", 
        projectUrl: "https://oadegokee.github.io/weathercast/"
    },

    {
        projectImage: recipeFinderImg, 
        name: "Android Recipe App", 
        description: "I developed a recipe app using Java that lets users explore and search for various recipes. The app uses MealDB's API, granting users access to various recipes and accompanying YouTube videos, if available. I also implemented an SQLite Database, allowing users to add and save their own recipes directly within the application.",
        languages: "Java, MealDB API, GitHub, Android Studio", 
        projectUrl: "https://github.com/oadegokee/Recipe_Finder"
    },

    {
        projectImage: bookSearchImg, 
        name: "Book Search Website", 
        description: "I collaborated with other software engineering students to create a book finder website where users can search for books based on title, author, ISBN, or genre. To provide users with accurate and up to date information, we integrated the Google Books API, which provides access to a large database of books.",
        languages: "HTML, CSS, JavaScript, JQuery, GitHub, Google Books API", 
        projectUrl: "https://oadegokee.github.io/2021_BookNet/"
    }
]
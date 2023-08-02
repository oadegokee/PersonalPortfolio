import React from "react";
import { SocialIcon } from "react-social-icons";
import weatherImg from "./assets/weather.png";
import bookSearchImg from "./assets/book-search.png";
import recipeFinderImg from "./assets/recipe-finder.jpg";

export const contactLinks = [
    {name: 'GitHub', link: "https://github.com/oadegokee", icon: () => <SocialIcon url="https://github.com/oadegokee" />},
    {name: 'LinkedIn', link: "www.linkedin.com/in/olaoluwaadegoke", icon: () => <SocialIcon url="https://www.linkedin.com/in/olaoluwaadegoke" />}
]

export const projects = [
    {
        projectImage: weatherImg, 
        name: "Weather Website", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        languages: "HTML, CSS, JavaScript, Git", 
        projectUrl: "https://oadegokee.github.io/weathercast/"
    },

    {
        projectImage: bookSearchImg, 
        name: "Book Search Website", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        languages: "HTML, CSS, JavaScript, JQuery, Git", 
        projectUrl: "https://oadegokee.github.io/2021_BookNet/"
    },

    {
        projectImage: recipeFinderImg, 
        name: "Android Recipe App", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        languages: "Java, MealDB API, Git, Android Studio", 
        projectUrl: "https://oadegokee.github.io/2021_BookNet/"
    }
]
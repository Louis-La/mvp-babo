# babo - Minimum Viable Project

**Application Demo Video (2 mins)**

[![gif video](https://media4.giphy.com/media/gV1hUZqd9zdeOpCFCH/giphy.gif)](https://www.youtube.com/watch?v=iqsAlkkk-k4)

---

**Full-stack**
* Front-end: HTML5, CSS, Boostrap, React.js, Adobe
* Back-end: Express, MySQL, AWS EC2
---

**Overview**

This minimum viable project is called "babo" and it is a web application allows the users to view nearby boba shops. In addition, users can view a full list of drinks available in each shop, as well as the price and individual reviews/ratings of them. This aids the users in making their decision on which drink to get, based on reviews and the overall ratings.

---

**Description**

*Components*

* All Stores Nearby

This application has three main components to it. The first is the list of all the nearby boba shops within a zip code radius. Currently, the application is pull its data from a set of mock dataset with fake shop names/brands. Each "card" shows the brand's logo, the overall store rating, address, and the last time the drink list data has been updated. Upon clicking on the name or the logo, the component re-renders and shows the user a list/images of all the drinks in the selected store.

* Drink List Of a Selected Store

The second component has a separate card for each drink. And each drink has their name, average rating, and price. Clicking a drink will open up a modal showing all the reviews by customers. The reviews includes the commenter's name, comment, and a rating from 0 - 10. All these ratings are averaged and used to determine the rating of drink. This modal also allows the user to write their own review if the user is logged in (login feature/function is in progress).

* Overall Top Drinks

The third component is located on the right side of the homepage, showing the overall top drinks from all the nearby shops. The overall top drinks is determined by iterating over every shop and their drinks list and finds the drinks with the highest ratings. As more reviews/ratings are written by customers, the top drinks list will automatically re-render to show the latest most popular drinks.

* Newsletter (in progress)

At the bottom of the page, there is an input section for the user to input their email to subscribe to a weekly/monthly newsletter. The newsletter will notify the users of new stores opening near them as well as promotions occuring.

* Search Bar (in progress)

Allows the user to search for boba shops by zip code, drink name, or shop name.

* Authentication (in progress)

Users can signup for an account to put in their own comments/ratings for the drinks and stores. In addition, the boba business owners can login to adjust their drinks list (but cannot remove or modify their customers' reviews).

---

**Installation**

1) Install all packages by running the following commands in your terminal.
```
npm install
```
2) Start the server.
```
npm run server
```
3) On a separate terminal, run webpack.
```
npm run webpack
```

---

**MySQL Schema**

---

**Roadmap - future enhancements**

Some potential and upcoming features include:
* Verification symbol for businesses that have verified their store with the application
* Feature that allows existing or future boba stores to apply to have their store featured on the front
* Image carousel banner with new drinks/updates
* Mobile friendly application

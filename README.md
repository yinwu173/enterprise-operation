# Enterprise Operation

## User Story

* AS A social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data.

### Acceptance Criteria

* WHEN I enter the command to invoke the application THEN my server is started and the Mongoose models are synced to the MongoDB database.

* WHEN I open API GET routes in Insomnia for users and thoughts THEN the data for each of these routes is displayed in a formatted JSON.

* WHEN I test API POST, PUT, and DELETE routes in Insomnia THEN I am able to successfully create, update, and delete users and thoughts in my database.

* WHEN I test API POST and DELETE routes in Insomnia THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Table Of Contents
- [Installation](#installation)
- [Resources](#resources)
- [Link](#link)

### Installation

* To install Mongoose package: npm i mongoose

* To install Express package: npm i express

### Resources

* For the lines of code from 17-21 of User.js, I received help utilizing the [Mongoose - Email Address Validation with Regex](https://blog.bounceless.io/mastering-email-validation-in-mongoose-syntax-uniqueness-and-beyond/) resource. The `validate` property will check to determine whether the email address inputted matches the regex for a valid email format.

### Link

* Walkthrough Video Link: 
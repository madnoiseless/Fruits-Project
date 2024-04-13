# Fruits Project

This project is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB. It allows you to manage a collection of fruits, their ratings, and reviews. The project includes a `Person` model that has a relationship with the `Fruit` model.

## Getting Started

1. Install the required dependencies:
```bash
npm install
```
1. Set up your MongoDB connection by creating a `.env` file in the root directory and adding the following line:
```bash
MONGODB_URI=mongodb://localhost:27017/fruitsDB
```
1. Start the server:
```bash
npm start
```
The server will run on `http://localhost:3000`.

## Models

The project has two models: `Fruit` and `Person`.

### Fruit

A fruit has the following properties:

- `name`: String (required)
- `rating`: Number (1-10, default: 0)
- `review`: String

### Person

A person has the following properties:

- `name`: String (required)
- `age`: Number (required)
- `favouriteFruit`: `fruitSchema` (required)

## Endpoints

The following endpoints are available:

- `POST /fruits/seed`: Seeds the database with sample fruits.
- `GET /fruits`: Retrieves all fruits from the database.
- `GET /fruits/:name`: Retrieves a fruit by name.
- `POST /fruits`: Adds a new fruit to the database.
- `PUT /fruits/:name`: Updates a fruit's rating and review by name.
- `DELETE /fruits/:name`: Deletes a fruit by name.
- `POST /people/seed`: Seeds the database with sample people and their favorite fruits.
- `GET /people`: Retrieves all people from the database.
- `PUT /people/:name`: Updates a person's favorite fruit by name.

## Technologies Used

- Node.js: The JavaScript runtime used to execute the server-side code.
- Express: A web application framework for Node.js that simplifies the process of building web applications.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, which provides a way to interact with MongoDB databases using JavaScript.
- MongoDB: A NoSQL document-based database used to store the project's data.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make the necessary changes and add them: `git add .`
4. Commit the changes: `git commit -m 'Add your commit message'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your personal or commercial projects.

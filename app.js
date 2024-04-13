const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const appleData = {
  name: "Apple",
  rating: 8,
  review: "Juicy and crisp, perfect for a healthy snack!",
};

const newApple = new Fruit(appleData);

// newApple
//   .save()
//   .then(() => {
//     console.log("Apple saved successfully!");
//   })
//   .catch((error) => {
//     console.error("Error saving apple:", error);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

const fruitsData = [
  {
    name: "Kiwi",
    rating: 9,
    review: "Tasty and nutritious, great for a vitamin C boost!",
  },
  {
    name: "Orange",
    rating: 8,
    review: "Juicy and refreshing, perfect for a glass of orange juice!",
  },
  {
    name: "Banana",
    rating: 7,
    review: "Sweet and creamy, a great snack on-the-go!",
  },
  {
    name: "Pineapple",
    rating: 9,
    review:
      "Tropical and juicy, perfect for adding a tropical twist to your meals!",
  },
  {
    name: "Mango",
    rating: 8,
    review: "Sweet and tangy, a delicious addition to smoothies and desserts!",
  },
];

// Fruit.collection
//   .insertMany(fruitsData)
//   .then((result) => {
//     console.log(
//       `Successfully inserted ${result.insertedCount} fruits into the database.`
//     );
//   })
//   .catch((error) => {
//     console.error("Error inserting fruits:", error);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

// Fruit.find({})
//   .then((fruits) => {
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching fruits:", error);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

// Fruit.findOneAndUpdate(
//   { name: "Banana" },
//   { $set: { rating: 8, review: "Sweet and creamy, perfect for a sandwich!" } },
//   { new: true }
// )
//   .then((updatedFruit) => {
//     console.log("Updated fruit:", updatedFruit);
//   })
//   .catch((error) => {
//     console.error("Error updating the fruit:", error);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

// Fruit.find({ name: { $in: ["Apple", "Kiwi", "Orange"] } })
//   .then((fruits) => {
//     const peopleData = [
//       {
//         name: "John Doe",
//         age: 28,
//         favouriteFruit: fruits.find((fruit) => fruit.name === "Orange"),
//       },
//       {
//         name: "Jane Smith",
//         age: 32,
//         favouriteFruit: fruits.find((fruit) => fruit.name === "Kiwi"),
//       },
//       {
//         name: "Alice Johnson",
//         age: 24,
//         favouriteFruit: fruits.find((fruit) => fruit.name === "Apple"),
//       },
//     ];

//     const peopleToInsert = peopleData.map((person) => new Person(person));

//     return Person.insertMany(peopleToInsert);
//   })
//   .then(() => console.log("People inserted successfully."))
//   .catch((error) => console.error("Error inserting people:", error))
//   .finally(() => mongoose.connection.close());

// Fruit.find({ name: { $in: ["Mango"] } })
//   .then((fruits) => {
//     const peopleData = [
//       {
//         name: "John Doe",
//         age: 28,
//         favouriteFruit: fruits.find((fruit) => fruit.name === "Mango"),
//       },
//     ];

//     const peopleToUpdate = peopleData.map((person) => new Person(person));

//     return Person.findOneAndUpdate(
//       { name: "John Doe" },
//       { $set: { favouriteFruit: peopleToUpdate[0].favouriteFruit } }
//     );
//   })
//   .then(() => console.log("People updated successfully."))
//   .catch((error) => console.error("Error updating people:", error))
//   .finally(() => mongoose.connection.close());

// (async function () {
//   try {
//     await Fruit.deleteOne({ name: "Apple" });
//     console.log("Succesfully deleted the document");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     mongoose.connection.close();
//   }
// })();

// (async function () {
//   try {
//     await Fruit.deleteMany({ name: "Apple" });
//     console.log("Succesfully deleted the documents");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     mongoose.connection.close();
//   }
// })();

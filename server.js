const express = require('express')
const es6Renderer = require('express-es6-template-engine')
const foods = require('./foods')
const countries = require('./countries')
const app = express()
const port = 3001

const partials = {
  head: '/partials/head',
  footer: '/partials/footer',
  nav: '/partials/nav'
}

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    locals: {
      title: 'AmazingSite.com',
      foods: foods
    },
    partials: partials
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    locals: {
      title: 'AmazingSite.com » About',
      countries: countries
    },
    partials: partials
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

















// const express = require('express')
// const app = express()
// const port = 3001

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/friends', (req, res) => {
//   // loop over friends
//   const friendsHtmlArray = friends.map((friend) => {
//     // make friend html for each friend (map)
//     return `<li>${friend.name} (
//       <a href="/friends/${friend.handle}">@${friend.handle}</a>)
//     </li>`
//   })
//   // send back combined html
//   res.send(friendsHtmlArray.join(''))
// })

// app.get('/friends/:handle', (req, res) => {
//   // use the route param to find the right user
//   const foundFriend = friends.find((friend) => {
//     // check if friend handle is the same as the one
//     // we are looking for
//     return friend.handle == req.params.handle
//   })
//   // send back just that user's info
//   res.send(`<h1>${foundFriend.name}</h1>
//     <h2>@${foundFriend.handle}</h2>
//   `)
// })

// app.get('/api/v1/friends', (req, res) => {
//   res.json(friends)
// })

// app.get('/api/v1/friends/:handle', (req, res) => {
//   const foundFriend = friends.find((friend) => {
//     return friend.handle == req.params.handle
//   })
//   if (foundFriend) {
//     res.json(foundFriend)
//   } else {
//     res.status(404)
//     res.json({ error: 'Not found' })
//   }
// })

// app.get('/pets/:petName', (req, res) => {
//   res.send(`hello ${req.params.petName}`)
// })

// app.get('/breakfast', (req, res) => {
//   const breakfasts = [
//     'pancakes', 'waffles', 'chicken & waffles', 'french toast', 'cereal',
//     'shrimp n grits', 'oatmeal', 'oats', 'taylor ham', 'coco puffs', 'bagel'
//   ]
//   const randomBreakfast = breakfasts[Math.floor(Math.random() * breakfasts.length)]
//   let order = randomBreakfast
//   if (req.query.side) {
//     order += ' with a side of ' + req.query.side
//   }
//   if (req.query.drink) {
//     order += ` and ${req.query.drink} to drink`
//   }
//   res.send(order)
// })

// app.get('/contactcard', (req, res) => {
//   // get firstName and lastName from query string and store in variables
//   const { firstName, lastName } = req.query
//   // if firstName and lastName are not provided, send back error
//   if (!firstName || !lastName) {
//     res.status(400)
//     res.send('Please provide a first and last name')
//   } else {
//     // otherwise, send back a contact card
//     // create email from firstName and lastName
//     const email = firstName[0] + '.' + lastName + '@ecorp.com'
//     // create username from firstName and lastName
//     const username = firstName[0] + firstName[1] + firstName[2] + '_' + lastName
//     // send back contact card html
//     res.send(`
//       <h1>Hello, ${firstName} ${lastName}</h1>
//       <h2>${email}</h2>
//       <h2>${username}</h2>
//     `)
//   }
// })

// app.get('/foods', (req, res) => {
//   // list of foods
//   const foods = [
//     'apple', 'bagel', 'batter', 'beans', 'beer', 'biscuit', 'bread', 'broth',
//     'burger', 'butter', 'cake', 'candy', 'caramel', 'caviar', 'cheese', 'chili',
//     'chocolate', 'cider', 'cobbler', 'cocoa', 'coffee', 'cookie', 'cream',
//     'croissant', 'crumble', 'cuisine', 'curd', 'dessert', 'dish', 'drink',
//     'eggs', 'entree', 'filet', 'fish', 'flour', 'foie gras', 'food', 'glaze',
//     'grill', 'hamburger', 'ice', 'juice', 'ketchup', 'kitchen', 'lard',
//     'liquor', 'margarine', 'marinade', 'mayo', 'mayonnaise', 'meat', 'milk',
//     'mousse', 'muffin', 'mushroom', 'noodle', 'nut', 'oil', 'olive', 'omelette',
//     'pan', 'pasta', 'paste', 'pastry', 'pie', 'pizza', 'plate', 'pot',
//     'poutine', 'pudding', 'raclette', 'recipe', 'rice', 'salad', 'salsa',
//     'sandwich', 'sauce', 'seasoning', 'skillet', 'soda', 'soup', 'soy', 'spice',
//     'steak', 'stew', 'syrup', 'tartar', 'taste', 'tea', 'toast', 'vinegar',
//     'waffle', 'water', 'wheat', 'wine', 'wok', 'yeast', 'yogurt'
//   ]
//   // get the search term from the query string
//   const search = req.query.search
//   // if search term is not provided
//   if (!search) {
//     // send back all the foods
//     res.json(foods)
//   } else {
//     // filter the foods array to only include foods that contain the search term
//     // Note: the filter method will keep an item in the array if the callback function returns true
//     const results = foods.filter((food) => {
//       // return true if current food contains search term
//       return food.toLowerCase().search(search.toLowerCase()) !== -1
//     })
//     // send back the results
//     res.send(results)
//   }
// })

// app.get('/allfoods', (req, res) => {
//   const foods = [
//     'apple', 'bagel', 'batter', 'beans', 'beer', 'biscuit', 'bread', 'broth',
//     'burger', 'butter', 'cake', 'candy', 'caramel', 'caviar', 'cheese', 'chili',
//     'chocolate', 'cider', 'cobbler', 'cocoa', 'coffee', 'cookie', 'cream',
//     'croissant', 'crumble', 'cuisine', 'curd', 'dessert', 'dish', 'drink',
//     'eggs', 'entree', 'filet', 'fish', 'flour', 'foie gras', 'food', 'glaze',
//     'grill', 'hamburger', 'ice', 'juice', 'ketchup', 'kitchen', 'lard',
//     'liquor', 'margarine', 'marinade', 'mayo', 'mayonnaise', 'meat', 'milk',
//     'mousse', 'muffin', 'mushroom', 'noodle', 'nut', 'oil', 'olive', 'omelette',
//     'pan', 'pasta', 'paste', 'pastry', 'pie', 'pizza', 'plate', 'pot',
//     'poutine', 'pudding', 'raclette', 'recipe', 'rice', 'salad', 'salsa',
//     'sandwich', 'sauce', 'seasoning', 'skillet', 'soda', 'soup', 'soy', 'spice',
//     'steak', 'stew', 'syrup', 'tartar', 'taste', 'tea', 'toast', 'vinegar',
//     'waffle', 'water', 'wheat', 'wine', 'wok', 'yeast', 'yogurt'
//   ]

//   const foodsHtml = foods.map((food) => {
//     return `<li>${food}</li>`
//   }).join('')
//   res.send(`<ul>${foodsHtml}</ul>`)
// })

// app.get('*', (req, res) => {
//   res.status(404)
//   res.send('404 page not found')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
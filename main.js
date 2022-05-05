console.log('JS connected')

const getResidents = () => {
  axios.get('https://swapi.dev/api/planets/2')
  .then(res => {
    const {residents} = res.data

    residents.forEach(url => {
      axios.get(url)
      .then(res => {
        console.log(res.data)

        let person = document.createElement('h2')
        person.textContent = res.data.name

        document.querySelector('#resident-display').appendChild(person)
      })
    });
  })
}

document.getElementById('get-residents').addEventListener('click', getResidents)


//Answers From Part 1 & 2:
// Part 1 Solutions:

// Part 1 solution 1: https://swapi.dev/api/people/4/

// Part 1 solution 2: https://swapi.dev/api/planets or https://swapi.dev/api/planets/2

// Part 1 solution 3: https://swapi.dev/api/starships/ or https://swapi.dev/api/starships/5

// Part 1 solution 4: https://swapi.dev/api/people/2

// Part 1 solution 5: https://swapi.dev/api/people/10

// Part 1 solution 6: https://swapi.dev/api/starships/?search=Millennium Falcon

// Part 2 Solutions:

// Part 2 solution 1: Body
				
// 				Expected:
// 				{ 
// 				“id”:
// 				“text”:
// 				“date”:
// 				}


// Part 2 solution 2: { 
// 				“id”:
// 				“text”:
// 				“date”:
// 				}

// Part 2 solution 3: https://practiceapi.devmountain.com/api/posts?id=555

// Part 2 solution 4: Code 200 Returns an Array of filtered posts
// 			       Code 409 request query is missing required text property

// Part 2 solution 5: [Post] https://practiceapi.devmountain.com/api/posts
					
// 					{
//    						 "id": 963,
//    						 "text": "hello f22",
//     						"date": "04 May 2022"
// 					}
// Part 2 solution 6: [PUT] https://practiceapi.devmountain.com/api/posts?id=963

// 							{
// 							"id": 963,
//    						 	"text": "hello f22",
//     							"date": "04 May 2022"
// 							}
// Part 2 solution 7: https://practiceapi.devmountain.com/api/posts/filter?text=blue

// Part 2 solution 8: application/json; charset=utf-8, content-type

// Part 2 solution 9: Request was missing req.query.id or req.body.text (reason for a 409 response)

// Part 2 solution 10: query filters everything and we get all objects with that text
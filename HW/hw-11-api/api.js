

//
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(({carts} )=> {
//             for (const cart of carts) {
//             let cartCreator= document.createElement('div')
//             cartCreator.classList.add('cartOne')
//             let ul = document.createElement('ul')
//             let li = document.createElement('li')
//             let bi =  li.innerText = cart.id + ' '  + ' ' + cart.discountedTotal + ' ' + cart.total
//             const ol = document.createElement('ol')
//             for (const product of cart.products) {
//                 let li = document.createElement('li')
//                 li.innerText = product.id + ' ' + product.title + ' ' + product.price
//                 ol.appendChild(li)
//
//
//             }
//         document.body.append(cartCreator, ul, li, ol)
//         }
//     })


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes})=> {
        for (const recipe of recipes) {
            let div = document.createElement('div')
            let ol = document.createElement('ol')
            ol.innerText = recipe.rating + ' ' + recipe.name + ' ' + recipe.cuisine
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement('li')
                li.innerText = ingredient
                ol.appendChild(li)
            }
            document.body.append(div, ol)
        }
    })

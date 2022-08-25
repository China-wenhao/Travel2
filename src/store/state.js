// let defaultCity = '上海'
// try {
//   if(localStorage.city){
//     defaultCity = localStorage.city
//   }
// }catch(e){
//     console.log(e.message)
// }

// export default {
//     city:defaultCity      
// }

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(e);
}

export default {
  city: defaultCity
}
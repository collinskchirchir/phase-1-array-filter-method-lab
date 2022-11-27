// Sample Data
const drivers = [
   {
     name: 'Bobby',
     hometown: 'Pittsburgh' },
   {
     name: 'Sammy',
     hometown: 'New York' } ,
   {
     name: 'Sally',
     hometown: 'Cleveland' },
   {
     name: 'Annette',
     hometown: 'Los Angeles' },
   {
     name: 'Bobby',
     hometown: 'Tampa Bay' }
 ];

 function findMatching(collection, value)
 {
    return collection.filter(name => name.toLowerCase() == value.toLowerCase());
}
 function fuzzyMatch(collection, value)
 {
   return collection.filter(name => name.slice(0, 2) == value)
}
function matchName(collection, value)
{
   return collection.filter(driver => driver.name == value)
}

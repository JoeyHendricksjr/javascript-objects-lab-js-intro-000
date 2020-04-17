var recipes = {
  eggs: 3,
  flour: '4 cups',
  oil: '2 cups'
};
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

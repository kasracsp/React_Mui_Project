const isInFavorites=(key,state)=>{
  const isIn=!!state.find(item=>item.id === key)
  return isIn
}

export {isInFavorites}
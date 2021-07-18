
export const updateObjectInArray = (item, userId, objPropName, newObjectProps) => {
   return item.map(u => {
      if (u[objPropName] === userId) {
         return {...u, ...newObjectProps}
      }
      return u;
   })
}

export const required = value => {

   if (value) return undefined

   return `please, write something...`
}

export const maxLengthCreator = (maxLength) => value => {

   if (value && value.length > maxLength) return `Max lengths ${maxLength} symbols`

   return undefined
}


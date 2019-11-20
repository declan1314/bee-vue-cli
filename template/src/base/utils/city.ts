export const saveCode2Name = (code2Name: {}) => {
  localStorage.setItem('code2Name4City', JSON.stringify(code2Name))
}

export const getNameByCode = (code) => {
  const code2Name = JSON.parse(localStorage.getItem('code2Name4City'))
  return code2Name[code]
}

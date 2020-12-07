
//HW2
  //2.1
  const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
}
const arr = []
    for(let key in citiesAndCountries){
    const result = citiesAndCountries[key]
    arr.push(`${key} - это ${citiesAndCountries[key]}`)
}
console.log(arr)

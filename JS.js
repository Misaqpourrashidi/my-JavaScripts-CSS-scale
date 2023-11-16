
	// SCROLL PRODUCT

	const slider = document.querySelector(".scroll_product")
	let isDown = false
	let startX
	let scrollLeft


	slider.addEventListener('mousedown', (e) =>{
		isDown = true
		startX = e.pageX - slider.offsetLeft
		scrollLeft = slider.scrollLeft
	})
	slider.addEventListener('mouseleave', () =>{
		isDown = false
	})
	slider.addEventListener('mouseup', () =>{
		isDown = false
	})
	slider.addEventListener('mousemove', (e) =>{
		if(!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft
		const walk = (x - startX)
		console.log(`walk${walk}`)
		slider.scrollLeft = scrollLeft - walk
		console.log(`scrollLeft${slider.scrollLeft}`)
	})



	// PRICE RANGE


	const rangeInput = document.getElementById('range__input')
	const details = document.querySelectorAll(".detail")


	const rangeInputSlider = () =>{
		const rangeNumber = document.getElementById('range__number')
		rangeInput.addEventListener('input', rangeInputSlider)
		rangeNumber.textContent = rangeInput.value
		// NOTE: if there was a match it will filter as code below

		details.forEach(function(detail){
			if(detail.id <= rangeInput.value){
				detail.style.display = 'flex'
			}else{
				detail.style.display = 'none'
			}
		})
	}
	rangeInputSlider()

	// NOTE: after click the button it will filter

	// filter.addEventListener('click', function(){
	// 	childs.forEach(function(child){
	// 		const price = Number(child.id);
	// 		if(price <= rangeInput.value){
	// 			child.style.display = 'block';
	// 		}else{
	// 			child.style.display = 'none';
	// 		}
	// 	})
	// })



const filterDiscount = document.querySelector(".filter_discount")
const detail = document.querySelectorAll(".detail")

detail.forEach(function(div){
	filterDiscount.addEventListener('click', function() {
		if(!div.classList.contains("div")){
			if(!div.querySelector(".discount")){
				div.style.display = 'none'
				div.classList.add("div")
			}	
		}else{
			div.style.display = 'flex'
			div.classList.remove("div")	
		}
	})
})

const filterName = document.querySelector(".filter_name .name")
const hideName = document.querySelector(".hide_name")
const hideNameDiv = document.querySelectorAll(".hide_name div")

filterName.addEventListener('click', function(){
	hideNameDiv.forEach(function(hnd){
		if(!hnd.classList.contains("not")){
			hideName.style.height = 'auto'
			hideName.style.display = 'block'
			hnd.classList.add("not")
		}else{
			hideName.style.height = '0px'
			hideName.style.display = 'none'
			hnd.classList.remove("not")
		}
	})
})

const detailName = document.querySelectorAll(".detail .name")

hideNameDiv.forEach(function(hnd){
	hnd.addEventListener('click', function(){
		details.forEach(function(detail){
			const name = detail.querySelector(".name")
			if(hnd.textContent === name.textContent){
				detail.style.display = 'flex'
			}else{
				if(hnd.textContent.includes('ALL')){
					detail.style.display = 'flex'
				}else{
					detail.style.display = 'none'
				}
			}
		})
	})
})


const filterPrice = document.querySelector(".filter_price .price")
const filterPriceRange = document.querySelector(".filter_price .range")

filterPrice.addEventListener('click', function(){
	if(!filterPriceRange.classList.contains("div")){
		filterPriceRange.style.display = "block"
		filterPriceRange.classList.add("div")
	}else{
		filterPriceRange.style.display = "none"
		filterPriceRange.classList.remove("div")
	}
})

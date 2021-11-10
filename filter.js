const menu = [
    {
        id: 1,
        title : 'buttermilk pancakes',
        category: 'breakfast',
        price : '33.56',
        img: './img/beans.png',
        desc : ` This is a special delicacy prepared with special face of honour
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo iusto laboriosam odit eveniet labore 
        corrupti neque esse dolorum et hic!`,
    },
    {
        id : 2,
        title : 'buttermilk pancakes',
        category: 'lunch',
        price : '33.56',
        img: './img/hero1.png',
        desc : ` This is a special delicacy prepared with special face of honour
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo iusto laboriosam odit eveniet labore 
        corrupti neque esse dolorum et hic!`,
    },
    {
        id : 3,
        title : 'Double Dinner',
        category: 'lunch',
        price : '39.56',
        img: './img/hero1.png',
        desc : ` This is a special delicacy prepared with special face of honour
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo iusto laboriosam odit eveniet labore 
        corrupti neque esse dolorum et hic!`,
    },
    {
        id : 4,
        title : 'milk shake',
        category: 'dessert',
        price : '33.56',
        img: './img/special-3.png',
        desc : ` This is a special delicacy prepared with special face of honour
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo iusto laboriosam odit eveniet labore 
        corrupti neque esse dolorum et hic!`,
    },
    {
        id : 5,
        title :'fried rice',
        category: 'lunch',
        price : '45',
        img: './img/special-5.png',
        desc : ` This is a special delicacy prepared with special face of honour
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo iusto laboriosam odit eveniet labore 
        corrupti neque esse dolorum et hic!`,
    },
    {
        id : 6,
        title : 'doughnut',
        category: 'breakfast',
        price: '22.55',
        img: './img/special-6.png',
        desc : ` This is a special delicacy prepared with special face of honour
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo iusto laboriosam odit eveniet labore 
        corrupti neque esse dolorum et hic!`,
    },
    {
        id : 7,
        title: 'sweet pancakes',
        category: 'dessert',
        price : '22.55',
        img: './img/special-3.png',
        desc : ` This is a special delicacy prepared with special face of honour
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo iusto laboriosam odit eveniet labore 
        corrupti neque esse dolorum et hic!`,
    },
];
const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded', function(){
    // console.log('shake and bake');
    displayMenuItem(menu);
   
});


filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id; 
        const menuCategory = menu.filter( function(menuItem){
        if(menuItem.category===category){
         return menuItem;
        };
        });
        // console.log(menuCategory)
        if(category === 'all'){
        displayMenuItem(menu);
        }
        else{
            displayMenuItem(menuCategory);
        };

    });
    // console.log(menuItem)
    
});


function displayMenuItem(menuItem){
    let displayMenu = menu.map( function (item){
        
        return ` <article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        <div class="item-info">
            <header class="head">
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}
            </p>
        </div>
    </article>` ;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML= displayMenu;
}
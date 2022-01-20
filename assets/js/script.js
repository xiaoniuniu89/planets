const hamburger = document.querySelector('.hamburger')
const dropdown = document.querySelector('.nav-dropdown')
const mTabs = document.querySelector('.mobile-tabs')
const mTabItems = document.querySelectorAll('.mobile-tab-link')
const lNavItems = document.querySelectorAll('.navlink-bg')
const planetPic = document.querySelectorAll('.planet-pic')
const overviewPic = document.querySelector('.overview-pic')
const surfacePic = document.querySelector('.surface-pic')


hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('hide');
    mTabs.classList.toggle('hide');
    hamburger.classList.toggle('change-grey')
})

// console.log(mTabItems)

function clearActiveTab() {
    mTabItems.forEach(mTabItem =>{
        if(!mTabItem.classList.contains('inactive')){
            mTabItem.classList.add('inactive')
        }
    })
}

function clearHidden() {
    planetPic.forEach(planetItem =>{
        if(!planetItem.classList.contains('hide')){
            planetItem.classList.add('hide')
        }
    })
}

function addDisplay(target) {
            planetPic.forEach(planetItem => {
                if(target === 'surface'){
                    overviewPic.classList.toggle('hide');
                    surfacePic.classList.toggle('hide')
                }else {
                    if(planetItem.classList.contains(target)){
                        planetItem.classList.toggle('hide')
                    }
                }
                
            })
        
}



mTabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        clearActiveTab()
        clearHidden()
        addDisplay(e.target.innerHTML)
        e.target.classList.toggle('inactive')
        console.log(e.target)
    })
})





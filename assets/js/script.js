

const hamburger = document.querySelector('.hamburger')
const dropdown = document.querySelector('.nav-dropdown')
const mTabs = document.querySelector('.mobile-tabs')
const lTabs = document.querySelector('.tabs-lg')
const lTabItems = document.querySelectorAll('.big-tab-link')
const mTabItems = document.querySelectorAll('.mobile-tab-link')
const lNavItems = document.querySelectorAll('.navlink-bg')
const planetPic = document.querySelectorAll('.planet-pic')
const planetTxt = document.querySelectorAll('.info-txt')
const overviewPic = document.querySelector('.overview-pic')
const surfacePic = document.querySelector('.surface-pic')
const surfaceTxt = document.querySelector('.surface-txt')


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

function clearActiveTabBig() {
    lTabItems.forEach(lTabItem =>{
        if(!lTabItem.classList.contains('inactive')){
            lTabItem.classList.add('inactive')
        }
    })
}

function clearHidden() {
    planetPic.forEach(planetItem =>{
        if(!planetItem.classList.contains('hide')){
            planetItem.classList.add('hide')
        }
    })
    planetTxt.forEach(planetItem =>{
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
                }else if(planetItem.classList.contains(target)){
                    planetItem.classList.toggle('hide')
                } 
                
            })
            planetTxt.forEach(planetItem => {
                if(target === 'surface'){
                    surfaceTxt.classList.toggle('hide')
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


lTabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        clearActiveTabBig()
        clearHidden()
        if(tab.classList.contains('overview')){
            addDisplay('overview')
        } else if(tab.classList.contains('structure')){
            addDisplay('structure')
        } else if(tab.classList.contains('surface')){
            addDisplay('surface')
        }
        tab.classList.toggle('inactive')
        console.log(e.target)
    })
})


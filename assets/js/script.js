const hamburger = document.querySelector('.hamburger')
const dropdown = document.querySelector('.nav-dropdown')
const mTabs = document.querySelector('.mobile-tabs')
const mTabItems = document.querySelectorAll('.mobile-tab-link')

hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('hide');
    mTabs.classList.toggle('hide');
    hamburger.classList.toggle('change-grey')
})

// console.log(mTabItems)

function clearActiveTab() {
    mTabItems.forEach(mTabItem =>{
        if(mTabItem.classList.contains('active')){
            mTabItem.classList.remove('active')
        }
    })
}



mTabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        clearActiveTab()
        e.target.classList.toggle('active')
    })
})


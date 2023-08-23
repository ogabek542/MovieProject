import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'


const Trending = () => {

    const onTabsChange = (tab) =>{

    }

  return (
    <div className='carouselSelection'>
        <ContentWrapper>
            <span className="carousrlTitle">Trending</span>
            <SwitchTabs data={["Day","Week"]} onTabsChange={onTabsChange}/>
        </ContentWrapper>
    </div>
  )
}

export default Trending
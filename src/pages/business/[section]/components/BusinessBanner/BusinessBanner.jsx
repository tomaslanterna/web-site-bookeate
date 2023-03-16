import React from 'react'
import BusinessBannerContainer from './styled-components/BusinessBannerContainer';
import Image from 'next/image';
import BusinessImageContainer from './styled-components/BusinessImageContainer';
import BusinessNavContainer from './styled-components/BusinessNavContainer';
import Icon from '@/components/Icon/Icon';

const BusinessBanner = ({business}) => {
  return (
    <BusinessBannerContainer>
        <BusinessImageContainer>
            <Image alt='BusinessProfileImage' src={business.shopImg} width={'150'} height={'150'}/>
        </BusinessImageContainer>
        <BusinessNavContainer>
            <Icon img={'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/marcador-de-posicion.png?alt=media&token=8b4d6d3d-6ee6-4ebe-b7fc-351b0aca11df'}/>
            <Icon img={'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/informacion%20(1).png?alt=media&token=92e7cc24-f7a2-4418-8df5-7bd301637545'}/>
        </BusinessNavContainer>
    </BusinessBannerContainer>
  )
}

export default BusinessBanner
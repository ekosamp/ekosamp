import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledImage } from './style'
import { Loader } from '../../style/shared'

const ProfileIntroSection = ({ content }) => 
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledImage 
      src="/images/profile/ekosamp-portrait.png"
      alt="Eko Samp - Graphic Designer"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/ekosamp-portrait-square.png 1x',
          '/images/profile/ekosamp-portrait-square-2x.png 2x',
          '/images/profile/ekosamp-portrait-square-3x.png 3x'
        ]
      },{
        srcset: [
          '/images/profile/ekosamp-portrait.png 1x',
          '/images/profile/ekosamp-portrait-2x.png 2x',
          '/images/profile/ekosamp-portrait-3x.png 3x'
        ]       
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
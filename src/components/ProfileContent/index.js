import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, ClientsList } from './style'

export default ({ data }) => {
  const { clients, events, mentions, articles } = data
  
  return (
      <ContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
           content={() => 
            <>            
              <p>We are young peoples whose passionate creating unique digital graphics. Illustration, Typography, Web Design, Graphic Design. Need some help with your project? Hire us.</p>
              <p> If you have any questions, feel free to contact with me or add me on <a href="https://www.linkedin.com/in/eko-saputro-18ba8a18b/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
            </>
          }
        />
        <ListsSection>
        
          {articles.edges.length > 0 && 
            <ProfileList 
              title='Project Font Free'
              list={() => articles.edges.map(({ article }, i) => (
                <ProfileListItem 
                  key={i}
                  {...article}
                />
              ))}
            />}
            {mentions.edges.length > 0 && 
            <ProfileList 
              title='Paid Font'
              list={() => mentions.edges.map(({ mention }, i) => (
                <ProfileListItem 
                  key={i}
                  {...mention}
                />
              ))}
            />}
         
        </ListsSection>
      </ContentWrapper>
  )
}
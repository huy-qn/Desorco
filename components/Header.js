import React from 'react'
import styled from 'styled-components'
import {
    borders, 
    borderColor
} from 'styled-system'
import Link from 'next/link'
import { 
    Flex, 
    Box, 
    Heading, 
    Button, 
    Text } from 'rebass'
import { AuthorsAlphabet } from '../components/Utils'
import { NavLink } from './extends'

const headerLinks = [
    {
        href: '/',
        title: 'Home'
    }
]

export const HeaderWrapper = styled(Box)`
    ${borders}
    ${borderColor}
`

const Header = (props) => {
    return (
    <>
    <HeaderWrapper
        bg='white'
        color='black'
        p={[3]}
        borderBottom='2px solid'
        borderColor='lightgray'
        css={{
            maxWidth: '768px',
            margin: '0 auto'
        }}
    >
        <Flex
            alignItems='center'
        >   
                <Link href={'/'}>
                    <Heading is="h1">Cosmo Quotes</Heading>
                </Link>
        <Box>
            <Flex
                flexWrap='wrap'
            >
                {headerLinks.map((item, index) => 
                    <Link href={item.href} key={index}>
                        <NavLink>{item.title}</NavLink>
                    </Link>
                    )}
            </Flex>
        </Box>
        </Flex>
    <Box display="block">
        <Text 
            fontSize={0}
            ml={2}
            lineHeight={3}
        >
            Browse authors by first character
        </Text>
        <AuthorsAlphabet 
            currentCharacter={props.currentCharacter}
        />
    </Box>
    </HeaderWrapper>
    </>
)}

export default Header


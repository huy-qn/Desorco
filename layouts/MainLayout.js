import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { fontFamily } from 'styled-system'
import { Box, Button } from 'rebass'
import theme from '../layouts/theme'
import Header from '../components/Header'

const SiteBody = styled.div`
    ${fontFamily}
`

const Container = props => 
    <Box
        p={2}
        css={{
            maxWidth: '768px',
            margin: '0 auto'
        }}
    >
        {props.children}
    </Box>

const MainLayout = (props) => (
    <ThemeProvider theme={theme}>
        <SiteBody
            fontFamily='sans'
        >
            <Header
                currentCharacter={props.currentCharacter}
            />
            <Container>
                {props.children}
            </Container>
        </SiteBody>
    </ThemeProvider>
)

export default MainLayout
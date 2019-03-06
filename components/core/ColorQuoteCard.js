import React from 'react'
import { Box, Text } from 'rebass'
import { borders, borderRadius } from 'styled-system'
import styled from 'styled-components'

export const QuoteCard = styled(Box)`
    ${borders}
    ${borderRadius}
`

export default props => (
    <Box
        p={3}
        width={[1/3]}
    >
        <QuoteCard
            color='black'
            p={3}
            borderRadius={4}
            shadow={1}
            fontSize={[3]}
        >
            <Text
                lineHeight={[0]}
            >{props.quote}</Text>
        </QuoteCard>
    </Box>
)
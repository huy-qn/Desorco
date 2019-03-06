import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import {
    Link,
} from 'rebass'

export const Container = props =>
  <Box
    {...props}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />

export const NavLink = props =>
  <Link
    px={2}
    py={1}
    color='inherit'
    {...props}
    css={{
      display: 'inline-block',
      '&:hover': {
          cursor: 'pointer'
      }
    }}
  />
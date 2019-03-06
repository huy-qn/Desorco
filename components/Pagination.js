import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { borders, borderColor, borderRadius } from "styled-system";
import { Flex, Box, Text, Button } from "rebass";

export const Page = styled(Box)`
    ${borders}
    ${borderColor}
    ${borderRadius}
`;

export default props => {
  return (
    <Flex my={4}>
      <PrevButton {...props} />
      <Button>
        {props.currentPage > props.maxPage ? props.maxPage : props.currentPage}
      </Button>
      <NextButton {...props} />
    </Flex>
  );
};

const PrevButton = props => (
  <Box
    css={{
      display: props.currentPage <= 1 ? "none" : "inline-block"
    }}
  >
    <Link
      href={`${
        props.currentPage > props.maxPage
          ? Number(props.maxPage - 1)
          : Number(props.currentPage) - 1
      }`}
    >
      <Button mr={2}>
        <Text>Prev</Text>
      </Button>
    </Link>
  </Box>
);

const NextButton = props => (
  <Box
    css={{
      display: props.currentPage >= props.maxPage ? "none" : "inline-block"
    }}
  >
    <Link href={`${Number(props.currentPage) + 1}`}>
      <Button ml={2}>Next</Button>
    </Link>
  </Box>
);

import React from "react";
import { Flex, Box, Text } from "rebass";
import { ChevronRight } from "react-feather";
import { domain } from "../lib/load-db";
import Link from "next/link";
import styled from "styled-components";
import { borderRadius } from "styled-system";
import LazyLoad from "react-lazyload";
import { Spring } from "react-spring";
import {
  Twitter,
  Facebook,
  Reddit,
  Whatsapp,
  Telegram
} from "react-social-sharing";
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

export const AuthorLink = props => {
  const { authorName, authorSlug, authorId } = props;
  return (
    <Link href={`/author/${authorId}-${authorSlug}/1`}>
      <Text fontSize={2} fontWeight="bold" color="blue" lineHeight={2}>
        {authorName}
      </Text>
    </Link>
  );
};

export const QuoteLink = props => {
  const { quoteId, children } = props;
  return <Link href={`/quote/${quoteId}`}>{children}</Link>;
};

export const TopicLink = props => {
  const { topicName, children } = props;
  return <Link href={`/topic/${topicName}/1`}><a rel="noopener" alt={`${topicName} quote`}>{children}</a></Link>;
};

export const Bread = props => {
  const {
    authorName,
    authorId,
    shortenQuote,
    quote,
    authorSlug,
    quoteId,
    page
  } = props;
  return (
    <Flex alignItems="flex-start" my={2} flexDirection={["column", "row"]}>
      <Flex alignItems="center" my={1}>
        <Link href="/">
          <Text color="blue">Quotes Home </Text>
        </Link>
        <ChevronRight size={16} />
      </Flex>
      {authorName || quote ? (
        <>
          <Flex alignItems="center" my={1}>
            <Text>Authors </Text>
            <ChevronRight size={16} />
          </Flex>
          <Flex alignItems="center" my={1}>
            <Link href={`/authors/${authorName[0]}/1`}>
              <Text color="blue">{authorName[0]}</Text>
            </Link>
            <ChevronRight size={16} />
          </Flex>
          <Flex alignItems="center" my={1}>
            <Link href={`/author/${authorId}-${authorSlug}/1`}>
              <Text color="blue">{authorName}</Text>
            </Link>
            <ChevronRight size={16} />
          </Flex>
          <Text my={1}>{shortenQuote}</Text>
        </>
      ) : null}
    </Flex>
  );
};

export const AuthorsAlphabet = props => {
  return (
    <>
      {/* googleoff: all */}
      <HorizontalScrollWrapper currentCharacter={props.currentCharacter}>
        {alphabet.map((character, index) => (
          <CharacterCard
            key={index}
            character={character}
            currentCharacter={props.currentCharacter}
          />
        ))}
      </HorizontalScrollWrapper>
      {/* googleon: all */}
    </>
  );
};

const HorizontalScrollWrapper = props => {
  return (
    <Flex
      pb={3}
      css={{
        maxWidth: "768px",
        margin: "0 auto",
        backgroundColor: "white",
        flexWrap: "wrap",
        "-webkit-overflow-scrolling": "touch"
      }}
    >
      {props.children}
    </Flex>
  );
};

const CharacterCard = props => (
  <Link href={`/authors/${props.character}/1`}>
    <Text
      fontSize="10px"
      color={props.character === props.currentCharacter ? "white" : "black"}
      bg={props.character === props.currentCharacter ? "black" : "white"}
      p={1}
      my={1}
      mx={1}
      css={{
        border: "solid 1px #333",
        minWidth: "30px",
        textAlign: "center",
        "&:hover": {
          backgroundColor: "black",
          color: "white"
        }
      }}
      fontWeight="bold"
    >
      {props.character}
    </Text>
  </Link>
);

const Image = styled.img`
  ${borderRadius}
`;
export const AuthorPhotoBox = ({ altText, imgSrc }) => (
  <LazyLoad height={200}>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <Box  ml={3} mr={1} mt={[3, 3, 0]}>
          <Image onError={(e) => {e.target.style.display = "none"}} style={props} alt={altText} src={imgSrc} borderRadius={2} width="100px"/>
        </Box>
      )}
    </Spring>
  </LazyLoad>
);

export const SocialSharingBox = ({ content, quoteId }) => {
  const styles = {
    background: "black"
  };

  return (
    <LazyLoad height={80}>
      <Flex fontSize={0} mt={4} justifyContent="flex-start" flexWrap="wrap">
        <Twitter
          message={content}
          link={`${domain}/quote/${quoteId}`}
          solid
          style={styles}
        />
        <Facebook link={`${domain}/quote/${quoteId}`} solid style={styles} />
        <Reddit link={`${domain}/quote/${quoteId}`} solid style={styles} />
        <Whatsapp link={`${domain}/quote/${quoteId}`} solid style={styles} />
        <Telegram link={`${domain}/quote/${quoteId}`} solid style={styles} />
      </Flex>
    </LazyLoad>
  );
};

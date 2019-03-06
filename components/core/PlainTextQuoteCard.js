import React from "react";
import { Flex, Box, Text } from "rebass";
import { borders, borderRadius } from "styled-system";
import styled from "styled-components";
import { AuthorLink, AuthorPhotoBox, QuoteLink, SocialSharingBox, TopicLink } from "../Utils";
import { getAuthorPhotoByAuthorId, shortenQuote } from "../../lib/load-db";
import Quote from "../../pages/quote";

export const QuoteCard = styled(Box)`
  ${borders}
  ${borderRadius}
`;

const PlainTextQuoteCard = ({...props}) => {
  const { quoteData, withLink, withAuthorProfilePhoto,style } = props;
  const {
    author_id,
    author_name,
    quote_id,
    quote,
    slug,
    key1,
    key2,
    key3
  } = quoteData;
  let imgUrl = getAuthorPhotoByAuthorId(author_id);
  return (
    <QuoteCard
      border={"solid 1px"}
      borderRadius={2}
      color="black"
      p={3}
      mb={4}
      fontSize={[3]}
      style={style}
    >
      <Flex 
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
      >
        <Box width={withAuthorProfilePhoto ? [1, 1, 4 / 5] : [1]}>
          {withLink ? (
            <QuoteLink quoteId={quote_id}>
              <Text lineHeight={[0]}>{quote}</Text>
            </QuoteLink>
          ) : (
            <Text lineHeight={[0]}>{quote}</Text>
          )}
          <Box>
            <AuthorLink
              authorName={author_name}
              authorId={author_id}
              authorSlug={slug}
            />
            <Flex mt={2} fontSize={1}>
              {key1 !== "NULL" ?  (<Text mr={2}><TopicLink topicName={key1}>{key1}</TopicLink></Text>) : null}
              {key2 !== "NULL" ?  (<Text mr={2}><TopicLink topicName={key2}>{key2}</TopicLink></Text>) : null}
              {key3 !== "NULL" ?  (<Text mr={2}><TopicLink topicName={key3}>{key3}</TopicLink></Text>) : null}
            </Flex>
          </Box>
        </Box>
        {withAuthorProfilePhoto 
          ? <AuthorPhotoBox 
              altText={`${author_name} photo`}
              imgSrc={imgUrl} 
            /> 
          : null
        }
      </Flex>     
      <SocialSharingBox 
        content={`${author_name}: "${shortenQuote(quote)}"`}
        quoteId={quote_id}
      />
    </QuoteCard>
  );
};
export default PlainTextQuoteCard;

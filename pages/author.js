import React from "react";
import { Flex, Box, Text } from "rebass";
import { withRouter } from "next/router";
import Head from "next/head";
import Pagination from "../components/Pagination";
import { getQuotesByAuthorId, getAuthorPhotoByAuthorId } from "../lib/load-db";
import Layout from "../layouts/MainLayout";
import PlainTextQuoteCard from "../components/core/PlainTextQuoteCard";
import { AuthorPhotoBox } from "../components/Utils";
import LazyLoad from 'react-lazyload'

const Author = withRouter(props => {
  // Prepare all the page numbers for the author page
  let pages = [];

  for (let i = 0; i < props.maxPage; i++) {
    pages.push(i + 1);
  }

  return (
    <>
      <Head>
        <title>{props.totalAuthorQuotes} quotes from {props.authorName} | Cosmo Quote</title>
        <meta
          name="title"
          content={`${props.totalAuthorQuotes} quotes from ${
            props.router.query.authorName
          } | Cosmo Quote`}
        />
      </Head>
      <Layout>
        <Flex
          flexDirection={["column", "row"]}
        >
          {props.authorPhotoStatus === 1 ? (
            <AuthorPhotoBox imgSrc={props.authorPhotoImgUrl} />
          ) : null}
          <AuthorName text={props.authorName} />
        </Flex>
        <>
          {props.quotes.map((item, index) => (
            <LazyLoad height={300}>
            <Box key={index} width={[1]} my={[2]}>
              <PlainTextQuoteCard
                withLink={true}
                withAuthorProfilePhoto={false}
                quoteData={item}
              />
            </Box>
            </LazyLoad>
          ))}
        </>

        {/* Pagination */}
        <Pagination
          pages={pages}
          currentAuthorId={props.authorId}
          currentAuthorNameSlug={props.authorNameSlug}
          currentPage={props.currentPage}
        />
      </Layout>
    </>
  );
});

const AuthorName = props => (
  <Flex my={3}>
    <Text fontSize={2} mr={2}>
      Author
    </Text>
    <Text fontSize={2} fontWeight="bold">
      {props.text}
    </Text>
  </Flex>
);

Author.getInitialProps = async context => {
  const { authorId, authorName, page = page || "1" } = context.query;
  const json = await getQuotesByAuthorId(authorId, page);
  console.log(json.total);
  return {
    authorId,
    authorName: json.quotes[0].author_name,
    authorPhotoStatus: json.quotes[0].image_flag,
    authorPhotoImgUrl: getAuthorPhotoByAuthorId(authorId),
    authorNameSlug: authorName,
    quotes: json.quotes,
    maxPage: json.maxpage,
    totalAuthorQuotes: json.total,
    currentPage: page
  };
};

export default Author;

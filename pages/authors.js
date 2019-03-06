import React from "react";
import { Flex, Text, Box, Button } from "rebass";
import Link from "next/link";
import Head from "next/head";
import { withRouter } from "next/router";

import {
  getAuthorsByCharacter,
  getTopAuthorsByCharacter
} from "../lib/load-db";

import Pagination from "../components/Pagination";
import Layout from "../layouts/MainLayout";

const Authors = withRouter(props => {
  // // Prepare all the page numbers for the author page
  // let pages = [0,1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <Head>
        <title>
          Quote Authors whose first name starting with letter{" "}
          {props.currentCharacter} | Cosmo Quote
        </title>
        <meta
          name="title"
          content={`BEST 20 QUOTES FROM ${
            props.router.query.authorName
          } | Cosmo Quote`}
        />
      </Head>
      <Layout currentCharacter={props.currentCharacter}>
        <Text>
          Authors Whose First Name Starting With Letter {props.currentCharacter}
        </Text>
        <TopAuthors data={props.topAuthors} />
        <AllAuthors data={props.authors} />

        {/* Pagination */}
        <Pagination
          // pages={pages}
          currentAuthorId={props.authorId}
          currentAuthorNameSlug={props.authorNameSlug}
          currentPage={props.currentPage}
          maxPage={props.maxPage}
        />
      </Layout>
    </>
  );
});

const AllAuthors = props => {
  return (
    <>
      <Text fontWeight="bold" fontSize={[2]} lineHeight={[3]}>
        All Other Authors
      </Text>
      <Flex flexWrap="wrap">
        {props.data.map((author, index) => (
          <Link
            href={`/author/${author.author_id}-${author.slug}/1`}
            key={author.slug + index}
          >
            <Box width={[1 / 2, 1 / 4]}>
              <Text lineHeight={[0]}>{author.author_name}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </>
  );
};

const TopAuthors = props => {
  return (
    <>
      <Text fontWeight="bold" fontSize={[2]} lineHeight={[3]}>
        Most Popular Authors
      </Text>
      <Flex flexWrap="wrap">
        {props.data.map((author, index) => (
          <Link
            href={`/author/${author.author_id}-${author.slug}/1`}
            key={author.slug + index}
          >
            <Box width={[1 / 2, 1 / 4]}>
              <Text lineHeight={[0]}>{author.author_name}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </>
  );
};

Authors.getInitialProps = async context => {
  const { character, page = page || 1 } = context.query;
  const jsonTopAuthors = await getTopAuthorsByCharacter(character);
  const jsonAllAuthors = await getAuthorsByCharacter(character, page);
  return {
    currentCharacter: character,
    authors: jsonAllAuthors.authors,
    topAuthors: jsonTopAuthors.authors,
    totalAuthors: jsonAllAuthors.total,
    maxPage: jsonAllAuthors.maxpage,
    currentPage: page
  };
};

export default Authors;

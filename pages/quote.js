import React from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import LazyLoad from "react-lazyload";
import { Box, Text, Heading } from "rebass";
import Layout from "../layouts/MainLayout";
import { getQuoteByQuoteId, domain, getAuthorPhotoByAuthorId } from "../lib/load-db";
import PhotoQuote from "../components/PhotoQuote";
import PlainTextQuoteCard from "../components/core/PlainTextQuoteCard";
import { Bread } from "../components/Utils";
import { Spring } from "react-spring";

const Quote = withRouter(props => {
  const { quoteData } = props;
  const {
    author_id,
    author_name,
    image_flag,
    quote,
    quote_id,
    slug,
    key1
  } = quoteData;
  const shortenQuote = quote ? quote.substring(0, 44) + "..." : null;
  return (
    <>
      <Head>
        <title>
          {author_name} {key1} quote: "{shortenQuote}"
        </title>
        <link rel="canonical" href={`${domain}${props.router.asPath}`} />
        <meta name="title" content={`${author_name}: ${shortenQuote}`} />
        <meta
          name="Description"
          content={`${key1} quote from ${author_name}: ${quote}`}
        />
        <meta property="og:site_name" content="Cosmo Quotes" />
        <meta
          property="og:title"
          content={`Cosmo Quotes — ${author_name}: ${shortenQuote}`}
        />
        <meta property="og:description" content={`${quote}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${domain}${props.router.asPath}`} />
        <meta property="og:image" content={getAuthorPhotoByAuthorId(author_id)} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${author_name} Quote`} />
        <meta
          property="twitter:description"
          content={`A quote from ${author_name}`}
        />
        <meta property="twitter:domain" content={`${domain}`} />
        <meta property="twitter:image:src" content={getAuthorPhotoByAuthorId(author_id)}/>
      </Head>
      <Layout>
        <Bread
          page="quote"
          authorSlug={slug}
          authorId={author_id}
          authorName={author_name}
          shortenQuote={shortenQuote}
        />
        <Heading is="h2" fontSize={4} my={3}>
          {author_name} Quote
        </Heading>
        <LazyLoad height={300}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <PlainTextQuoteCard
                withLink={false}
                withAuthorProfilePhoto={image_flag ? true : false}
                quoteData={quoteData}
                style={props}
              />
            )}
          </Spring>
        </LazyLoad>

        <Heading is="h3" fontSize={3} lineHeight={3}>
          Photo Quote
        </Heading>
        <PhotoQuote
          quoteId={quote_id}
          quoteText={quote}
          quoteAuthor={author_name}
        />
      </Layout>
    </>
  );
});

Quote.getInitialProps = async context => {
  const { quoteId } = context.query;
  const json = await getQuoteByQuoteId(quoteId);
  return {
    quoteData: json.quotes[0],
    quoteId: quoteId
  };
};

export default Quote;

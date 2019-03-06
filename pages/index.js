import Layout from "../layouts/MainLayout";
import Head from "next/head";
import { Spring } from "react-spring";
import LazyLoad from "react-lazyload";
import { Flex, Box, Text } from "rebass";
import { getRandomQuotes, domain } from "../lib/load-db";
import PlainTextQuoteCard from "../components/core/PlainTextQuoteCard";

const Index = props => (
  <>
    <Head>
      <title> Cosmo Quotes </title>
      <link rel="canonical" href={`${domain}`} />
      <meta name="Description" content={`Top Quotes You Don't Want To Miss`} />
    </Head>
    <Layout>
      <Flex flexWrap="wrap" width={[1]}>
        {props.quotes.map((item, index) => (
          <Box key={index} width={[1]} my={[2]}>
            <PlainTextQuoteCard
              withLink={true}
              withAuthorProfilePhoto={item.image_flag === 1 ? true : false}
              quoteData={item}
            />
          </Box>
        ))}
      </Flex>
    </Layout>
  </>
);

Index.getInitialProps = async context => {
  const json = await getRandomQuotes();
  // need to check all author photo statuses here before render
  return { quotes: json.quotes };
};
export default Index;

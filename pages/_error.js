import Layout from "../layouts/MainLayout";
import Head from "next/head";
import { Flex, Box, Text } from "rebass";
import { getRandomQuotes, domain } from "../lib/load-db";
import PlainTextQuoteCard from "../components/core/PlainTextQuoteCard";

export default class Error extends React.Component {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    const randomQuoteJson = await getRandomQuotes()
    return { statusCode, quoteData: randomQuoteJson.quotes[0] };
  }

  render() {
    return (
      <>
        <Head>
          <title> Cosmo Quotes </title>
          <link rel="canonical" href={`${domain}`} />
          <meta
            name="Description"
            content={`Top Quotes You Don't Want To Miss`}
          />
        </Head>
        <Layout>
            <Box my={5}>
                {this.props.statusCode 
                    ? <Text fontSize={5} align="center">An error <b>{this.props.statusCode}</b> occurred on server</Text>
                    : <Text fontSize={5} align="center">An error occurred on client</Text>
                }
            </Box>
            <Text fontSize={2}>Here is a random quote for you</Text>
            <Flex flexWrap="wrap" width={[1]}>
                <Box width={[1]} my={[2]}>
                    <PlainTextQuoteCard
                    withLink={true}
                    withAuthorProfilePhoto={this.props.quoteData.image_flag === 1 ? true : false}
                    quoteData={this.props.quoteData}
                    />
                </Box>
            </Flex>
        </Layout>
      </>
    );
  }
}

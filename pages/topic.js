import React from "react";
import { Box } from "rebass";
import { withRouter } from "next/router";
import Layout from "../layouts/MainLayout";
import PlainTextQuoteCard from "../components/core/PlainTextQuoteCard";
import { getQuotesByTopic, getAuthorPhotoStatusByAuthorId } from "../lib/load-db";

const Topic = withRouter(props => {
    console.log(props.authorsPhotosStatus)
  return (
    <>
      <Layout>
        <>
            <h2>{props.topicName} Quotes</h2>
          {props.quotes.map((item, index) => (
            <Box key={index} width={[1]} my={[2]}>
              <PlainTextQuoteCard
                withLink={true}
                withAuthorProfilePhoto={true}
                quoteData={item}
              />
            </Box>
          ))}
        </>
      </Layout>
    </>
  );
});

Topic.getInitialProps = async context => {
  const { topicName } = context.query;
  const json = await getQuotesByTopic(topicName);

  return {
    topicName,
    quotes: json.quotes
  };
};

export default Topic;

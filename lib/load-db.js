import fetch from "isomorphic-unfetch";
export const APIurl = "https://avgmind.com";
export const domain = "https://desorco.com";

export default async () => {
  const res = await fetch(`${APIurl}/api/author/1/10`);
  const authorsJson = await res.json();

  return authorsJson;
};

// get Authors Methods
export const getAuthorsByCharacter = async (character, pageNumber) => {
  const res = await fetch(`${APIurl}/api/author/${character}/${pageNumber}`);
  const authorsJson = await res.json();
  return authorsJson;
};

export const getAuthorPhotoByAuthorId = authorId => {
  const authorProfilePhoto = `${APIurl}/uploads/images/${authorId}.jpg`;
  return authorProfilePhoto;
};

export const getAuthorPhotoStatusByAuthorId = async authorId => {
  const res = await fetch(
    `${APIurl}/api/quote_author/${authorId}/1`
  );
  const json = await res.json();
  return json
}

export const getTopAuthorsByCharacter = async character => {
  const res = await fetch(`${APIurl}/api/top/author/${character}`);
  const authorsJson = await res.json();

  return authorsJson;
};

// get Quotes Methods
export const getQuotesByAuthorId = async (authorId, pageNumber) => {
  const res = await fetch(
    `${APIurl}/api/quote_author/${authorId}/${pageNumber}`
  );
  const quotesJson = await res.json();
  return quotesJson;
};

export const getQuoteByQuoteId = async quoteId => {
  const res = await fetch(`${APIurl}/api/quote/${quoteId}`);
  const quoteJson = await res.json();
  return quoteJson;
};

export const getRandomQuotes = async () => {
  const res = await fetch(`${APIurl}/api/random_quote`);
  const quoteJson = await res.json();
  return quoteJson;
};

export const shortenQuote = (quote) => {
  return quote ? quote.substring(0, 44) + "..." : null;
}


//get Topics Methods

export const getQuotesByTopic = async (topic) => {
  const res = await fetch(`${APIurl}/api/topic/${topic}/1`);
  const quoteJson = await res.json()
  return quoteJson
}
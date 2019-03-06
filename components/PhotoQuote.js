import React, { Component } from 'react';
import { Box, Flex, Image, Text } from 'rebass'
import domtoimg from 'dom-to-image'

class PhotoQuote extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: null
        }
        this.el = React.createRef()
    }

    createImage = () => {
        domtoimg.toPng(this.el.current)
            .then(dataUrl => {
                this.setState({
                    url: dataUrl
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.createImage()
    }

    render() {
        return this.state.url === null  && this.props.quoteText !== undefined
            ? (
                <>
                    <Box ref={this.el}>
                        <ModelWithoutPhotoComponent 
                            quoteText={this.props.quoteText}
                            quoteAuthor={this.props.quoteAuthor}
                        />
                    </Box>
                </>
                ) 
            : (
                <>
                    <a href={`/quote/${this.props.quoteId}`} title={`${this.props.quoteAuthor} quote: ${this.props.quoteText}`}>
                        <img src={this.state.url} alt={`${this.props.quoteAuthor} quote: ${this.props.quoteText}`}/>
                    </a>
                </>
            )
    }
}

const ModelWithoutPhotoComponent = props => {
    let colors = ["black","darkorange","#08AD01","#6300A5","blue"]
    let randomColorIndex = Math.floor(Math.random() * colors.length)

    return (
        <>
            <Box 
                width={[1]}
                bg={colors[randomColorIndex]}
                color="white"
                p={3}
            >
                <Text
                    fontWeight="bold"
                    fontSize={2}
                    p={3}
                    lineHeight={0}
                    textAlign='center'
                >
                    "{props.quoteText}"
                </Text>
                <Text
                    fontSize={3}
                    lineHeight={3}
                    fontWeight='bold'
                    fontFamily='serif'
                    textAlign='center'
                >
                    — {props.quoteAuthor}
                </Text>
            </Box>        
        </>
)}

const ModelComponent = props => (
    <>
        <Box width="800px">
            <Flex 
                bg='black' 
                color='white'
                alignItems='center'
            >
                <Image
                    width={[ 1/3, 1/3, 1/3 ]}
                    height="100px"
                    src='https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'
                    borderRadius={8}
                />
                <Box width={[ 2/3, 2/3, 2/3 ]}>
                    <Text
                        fontWeight="bold"
                        fontSize={2}
                        p={3}
                        lineHeight={0}
                        textAlign='center'
                    >
                        "{props.quoteText}"
                    </Text>
                    <Text
                        fontSize={3}
                        fontWeight='bold'
                        fontFamily='serif'
                        textAlign='center'
                    >
                        — {props.quoteAuthor}
                    </Text>
                </Box>
            </Flex>
        </Box>
    </>    
)

export default PhotoQuote

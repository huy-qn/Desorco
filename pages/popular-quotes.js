import Layout from '../layouts/MainLayout'
import { Flex } from 'rebass'
import { Container } from '../components/extends'
import ColorQuoteCard from '../components/core/ColorQuoteCard'

const MockData = [
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    },
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    },
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    },
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    },
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    },
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    },
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    },
    {
        text: 'In eu do laboris Lorem reprehenderit. Ut deserunt voluptate ex anim ea sit anim laborum culpa non nostrud. Id do velit nostrud exercitation magna cillum ullamco. Veniam aliquip minim et ut enim qui ullamco labore irure occaecat minim in. Esse minim dolor nostrud officia aliqua culpa aliqua ut sint ea dolor aliquip sunt ea. Consequat occaecat esse exercitation nostrud aliquip dolor incididunt.'
    }
]

export default props => (
    <Layout>
        <Container>
            <Flex
                flexWrap='wrap'
            >
                {MockData.map((item,index) => 
                    <ColorQuoteCard quote={item.text} key={index}/>
                )}
            </Flex>
        </Container>
    </Layout>
)


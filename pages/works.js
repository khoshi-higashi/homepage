import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

// import thumbHighlight from '../public/images/highlight_eyecatch.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='highlight' title='highlight' thumbnail='' />
                    {/* <WorkGridItem id='highlight' title='highlight' thumbnail={thumbHighlight} /> */}
                    A book highlight app
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
import {
  Container,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import ProjectCards from "../components/ProjectCards"
import robotlogo from "../images/logos/robotlogo.jpg"
import ecommLogo from "../images/logos/robotlogo.jpg"

const projects = [{
  id: 0,
  name: 'Bet Robot',
  githubId: '@roboapostas - Privated',
  githubUrl: 'https://github.com/alangomessilva/roboapostas',
  hashtags: ["Football", "Node", "Bet"],
  description:
    'This Robot, maked in NodeJs, make football Hints for apply in Bets House! ',
  logo: robotlogo.toString()
},
{
  id: 1,
  name: 'E-Commerce POC ',
  githubId: 'EcommercePoc',
  githubUrl: 'https://github.com/alangomessilva/',
  hashtags: ["Ecomm", "Poc", "Java"],
  description:
    'E-Commerce POC - Building ',
  logo: ecommLogo.toString()
},
{
  id: 2,
  name: 'Hybris Addon Poc',
  githubId: 'hybrisAddon',
  githubUrl: 'https://github.com/alangomessilva/hybrisAddon',
  hashtags: ["Ecomm", "Hybris", "Java"],
  description:
    'Addon to Hybris - Building ',
  logo: ecommLogo.toString()
}
]

export default function Projects() {
  return (
    <Container maxW={'2x1'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        py={{ base: 80, md: 20 }}
        p={4}>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map((cardInfo, index) => (
            <ProjectCards key={cardInfo.id} {...cardInfo}></ProjectCards>
          ))} 


        </SimpleGrid>
      </Stack>
    </Container>
  );
}
;
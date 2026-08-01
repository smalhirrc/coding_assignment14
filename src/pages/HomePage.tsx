import styled from 'styled-components';

import HeroImage from '../components/heroimage';
import Card from '../components/card';
import Label from '../components/label';
import Text from '../components/text';

import portfolioData from '../data/portfolioData';

const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const SkillList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const HomePage = () => {
  const { basicInformation, work, skills } = portfolioData;

  return (
    <>
      <HeroImage
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
        title={basicInformation.name}
        subtitle={basicInformation.title}
      />

      <PageContainer>
        <Section>
          <Label text="About Me" />

          <div style={{ marginTop: '1rem' }}>
            <Text text={basicInformation.bio} />
          </div>
        </Section>

        <Section>
          <Label text="Course Projects" />

          <CardGrid>
            {work.map(project => (
              <div key={project.title}>
                <Card title={project.title} description={project.description} />

                <div style={{ marginTop: '0.75rem' }}>
                  <Text text={`Image: ${project.imageUrl}`} />

                  <Text text={`Project Link: ${project.projectLink}`} />

                  <Text
                    text={`Technologies: ${project.technologies.join(', ')}`}
                  />
                </div>
              </div>
            ))}
          </CardGrid>
        </Section>

        <Section>
          <Label text="Skills" />

          <div style={{ marginTop: '1rem' }}>
            <Text text={skills.description} />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Label text="Languages & Frameworks" />

            <SkillList>
              {skills.languagesFrameworks.map(skill => (
                <ListItem key={skill}>
                  <Text text={skill} />
                </ListItem>
              ))}
            </SkillList>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Label text="Development Tools" />

            <SkillList>
              {skills.tools.map(tool => (
                <ListItem key={tool}>
                  <Text text={tool} />
                </ListItem>
              ))}
            </SkillList>
          </div>
        </Section>
      </PageContainer>
    </>
  );
};

export default HomePage;

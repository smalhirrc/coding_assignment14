import styled from 'styled-components';

import Card from '../components/card';
import Img from '../components/img';
import Table from '../components/table';
import Text from '../components/text';

import portfolioData from '../data/portfolioData';

const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const ResourceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ResourceCard = styled.div`
  max-width: 400px;
`;

const SetupPage = () => {
  const { resources, developerSetup } = portfolioData;

  const setupHeaders = ['Category', 'Configuration'];

  const setupData = [
    ['VS Code Extensions', developerSetup.vscodeExtensions.join(', ')],
    ['Terminal Setup', developerSetup.terminalSetup.join(', ')],
    ['Preferred Font', developerSetup.preferredEditorFont],
  ];

  return (
    <PageContainer>
      <Section>
        <Text text="Programming Resources" fontSize="2rem" />

        <div style={{ marginTop: '2rem' }}>
          <ResourceGrid>
            {resources.map(resource => (
              <ResourceCard key={resource.title}>
                <Img
                  src="https://placehold.co/400x220"
                  alt={resource.title}
                  width="100%"
                />

                <div style={{ marginTop: '1rem' }}>
                  <Card
                    title={`${resource.image} ${resource.title}`}
                    description={resource.summary}
                  />

                  <div style={{ marginTop: '0.75rem' }}>
                    <Text text={`Resource Link: ${resource.link}`} />
                  </div>
                </div>
              </ResourceCard>
            ))}
          </ResourceGrid>
        </div>
      </Section>

      <Section>
        <Text text="Developer Setup" fontSize="2rem" />

        <div style={{ marginTop: '2rem' }}>
          <Table
            headers={setupHeaders}
            data={setupData}
            footer={['Environment', 'Ready for Development']}
          />
        </div>
      </Section>
    </PageContainer>
  );
};

export default SetupPage;

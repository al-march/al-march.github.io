import {Page} from '@pages/Page';
import {Badge, Divider, Row} from '@solsy/ui';

export const ResumePage = () => {
  return (
    <Page>
      <div class="max-w-2xl mx-auto p-8">
        <h1 class="text-4xl font-semibold">Resume</h1>

        <Divider />

        <h2 class="text-2xl font-semibold">Опыт работы</h2>

        <Row orientation="col" class="gap-6 py-4">
          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">VK</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur eius maxime non?
              </p>

              <Row class="gap-2 pt-2 flex-wrap">
                <Badge color="primary">Angular</Badge>
                <Badge color="secondary">Angular.js</Badge>
                <Badge color="primary">Webpack</Badge>
                <Badge color="secondary">Java</Badge>
                <Badge color="primary">npm</Badge>
              </Row>
            </div>
          </div>

          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">МТС</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur eius maxime non?
              </p>

              <Row class="gap-2 pt-2 flex-wrap">
                <Badge color="primary">Angular</Badge>
                <Badge color="secondary">Angular Material</Badge>
                <Badge color="primary">NgXs</Badge>
                <Badge color="secondary">Node.js</Badge>
              </Row>
            </div>
          </div>

          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">FMedia</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur eius maxime non?
              </p>

              <Row class="gap-2 pt-2 flex-wrap">
                <Badge color="primary">Angular</Badge>
                <Badge color="secondary">Angular Material</Badge>
                <Badge color="primary">Docker</Badge>
              </Row>
            </div>
          </div>
        </Row>

        <Divider />
      </div>
    </Page>
  );
};

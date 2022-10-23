import {Icon} from '@shared/components/icon';
import {Badge} from '@solsy/ui';

export const TechSection = () => {
  return (
    <section>
      <div class="flex flex-wrap gap-2 py-2">
        <Badge size="lg" class="gap-2" color="primary">
          <Icon>
            <i class="fa-brands fa-html5" />
          </Icon>

          <p>Html 5</p>
        </Badge>

        <Badge size="lg" class="gap-2" color="secondary">
          <Icon>
            <i class="fa-brands fa-sass" />
          </Icon>

          <p>Scss</p>
        </Badge>

        <Badge size="lg" class="gap-2" color="primary">
          <Icon>
            <i class="fa-brands fa-js" />
          </Icon>

          <p>JavaScript</p>
        </Badge>

        <Badge size="lg" class="gap-2" color="secondary">
          <Icon>
            <i class="fa-brands fa-node" />
          </Icon>

          <p>Node.js</p>
        </Badge>

        <Badge size="lg" class="gap-2" color="primary">
          <Icon>
            <i class="fa-brands fa-angular" />
          </Icon>

          <p>Angular</p>
        </Badge>
      </div>

      <div class="py-4 flex flex-wrap gap-2">
        <Badge color="primary">TypeScript</Badge>
        <Badge color="secondary">Tailwind</Badge>
        <Badge color="primary">Solid.js</Badge>
        <Badge color="secondary">Webpack</Badge>
        <Badge color="primary">Git</Badge>
      </div>
    </section>
  );
};

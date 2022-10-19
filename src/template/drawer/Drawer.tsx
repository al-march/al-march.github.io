import {Icon} from '@shared/components/icon';
import {Button, Row} from '@solsy/ui';

export const Drawer = () => {
  return (
    <nav class="p-2 bg-base-300 shadow-lg h-full">
      <Row orientation="col" class="gap-2">
        <Button color="ghost" square>
          <Icon name="home" />
        </Button>
        <Button color="ghost" square>
          <Icon name="menu" />
        </Button>
      </Row>
    </nav>
  );
};

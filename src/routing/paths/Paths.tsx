import {ContactPage} from '@pages/contact';
import {HomePage} from '@pages/home';
import {ResumePage} from '@pages/resume';
import {RouteProps} from '@solidjs/router';

class PathProps {
  href: string;

  constructor(
    public path: RouteProps['path'],
    public component: RouteProps['component'],
    public data?: RouteProps['data']
  ) {
    this.href = this.path.toString();
  }
}

export enum PathsEnum {
  HOME,
  RESUME,
  CONTACT,
}

type Paths = keyof typeof PathsEnum;

export const Paths: Record<Paths, PathProps> = {
  HOME: new PathProps('/', HomePage),
  RESUME: new PathProps('/resume', ResumePage),
  CONTACT: new PathProps('/contact', ContactPage),
};

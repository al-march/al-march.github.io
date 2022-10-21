import {ContactPage} from '@pages/contact';
import {HomePage} from '@pages/home';
import {ResumePage} from '@pages/resume';
import {RouteProps} from '@solidjs/router';

export const Sections: Record<string, RouteProps> = {
  HOME: {
    path: '/',
    component: HomePage,
  },
  RESUME: {
    path: '/resume',
    component: ResumePage,
  },
  CONTACT: {
    path: '/contact',
    component: ContactPage,
  },
};

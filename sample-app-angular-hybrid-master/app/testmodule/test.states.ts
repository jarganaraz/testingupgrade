import { TestComponent } from './test.component';

/**
 * This state allows the user to set their application preferences
 */
export const testState = {
  parent: 'app',
  name: 'test',
  url: '/test',
  component: TestComponent,
  // Mark this state as requiring authentication.  See ../global/requiresAuth.hook.js.
  data: { requiresAuth: true }
};

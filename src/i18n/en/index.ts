import type { BaseTranslation } from '../i18n-types';

const en = {
  auth: {
    welcome: 'Welcome Back',
    logoutUsername: 'Logout ({username:string})',
    registerHere: "Don't have an account? <>Register here<>",
    notFound404: '404: Not Found',
    gone: "It's gone",
    backTo: 'Go back to {isLoggedIn|{true: home, false: login}}',
  },
  home: {
    title: 'Svelte App using:',
    sortBtn: 'Sort Buttons',
    clock: 'Clock',
    toggleClock: 'Toggle Clock',
    clickToggleClock: 'Click toggle clock to restart the clock',
    changeLang: 'Change Language',
    getStarted: 'Get Started',
  },
  todo: {
    backTo: 'Go back to {target:string}',
  },
  forms: {
    username: 'Username',
    usernamePlaceholder: 'Your username...',
    password: 'Password',
    passwordPlaceholder: 'Your password...',
    error: '{icon:string} Form error',
    loginLoading: 'Logging in...',
    login: 'Login',
    register: 'Register',
    add: 'Add {icon:string}',
    remove: 'Remove {icon:string}',
    limit: 'Limit',
    todoPlaceholder: 'What should you do next...',
  },
  common: {
    loading: 'Loading...',
    list: '{0:string} List',
    xDetail: '{feature:string} Detail',
    xCreateSuccess: '{feature:string} successfully created',
    xCreateError: '{feature:string} failed to create',
    xUpdateSuccess: '{feature:string} successfully updated',
    xUpdateError: '{feature:string} failed to update',
    xDeleteSuccess: '{feature:string} successfully deleted',
    xDeleteError: '{feature:string} failed to delete',
    error: '❌ {module:string|capitalize} error',
    noPageContent: 'No Page Content',
    appName: 'Svelte Template',
    theme: 'Theme',
    add: 'Add {icon:string}',
    update: 'Update {icon:string}',
    remove: 'Remove {icon:string}',
    empty: 'Empty Data',
  },
  success: {
    action: '{module:string} successfully {action:string}',
  },
  error: {
    minLength: '{field:string} must contain at least {length:number} characters',
    passwordMinLength: 'password must contain at least 6 characters',
    action: '{module:string} failed to {action:string}',
  },
} satisfies BaseTranslation;

export default en;

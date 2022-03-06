// aws setup
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { urlOpener } from './urlOpener';

const awsSetup = () => {
  Amplify.configure({
    ...awsconfig,
    Analytics: {
      disabled: true,
    },
    oauth: {
      ...awsconfig.oauth,
      urlOpener,
    },
  });
};

awsSetup();

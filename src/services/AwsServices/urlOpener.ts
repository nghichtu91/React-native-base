import InAppBrowser, { RedirectResult } from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';

export const urlOpener = async (urlAuth: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  try {
    const { type, url }: RedirectResult = (await InAppBrowser.openAuth(
      urlAuth,
      redirectUrl,
      {
        modalPresentationStyle: 'fullScreen',
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: false,
        ephemeralWebSession: false,
      },
    )) as RedirectResult;

    if (type === 'success') {
      Linking.openURL(url);
    }
  } catch (error) {
    console.log(error);
  }
};

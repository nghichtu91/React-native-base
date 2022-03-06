import {
  InitialState,
  NavigationContainerRef,
  NavigationContainer,
  ParamListBase,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { InteractionManager } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

export interface DevPersistedNavigationContainerProps
  extends React.ComponentProps<typeof NavigationContainer> {
  persistKey: string;
}

function DevPersistedNavigationContainerImpl(
  {
    persistKey,
    onStateChange,
    ...others
  }: DevPersistedNavigationContainerProps,
  forwardedRef: React.Ref<NavigationContainerRef<ParamListBase>>,
) {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();
  // eslint-disable-next-line prettier/prettier
  const persistInteractionRef = React.useRef<{ cancel:() => void } | null>(null);
  const onStateChangeInternal = React.useCallback(
    (state) => {
      const persistState = async () => {
        persistInteractionRef.current = null;
        try {
          await AsyncStorage.setItem(persistKey, JSON.stringify(state));
        } catch (ex) {
          console.warn(`Failed to persist state. ${ex.message}`);
        }
      };

      if (persistInteractionRef.current !== null) {
        persistInteractionRef.current.cancel();
      }

      if (state != null) {
        persistInteractionRef.current =
          InteractionManager.runAfterInteractions(persistState);
      }

      if (onStateChange != null) {
        onStateChange(state);
      }
    },
    [onStateChange, persistKey],
  );

  React.useEffect(() => {
    const loadPersistedState = async () => {
      try {
        const jsonString = await AsyncStorage.getItem(persistKey);
        if (jsonString != null) {
          setInitialState(JSON.parse(jsonString));
        }
        setIsReady(true);
      } catch (ex) {
        console.warn(`Failed to load state. ${ex.message}`);
        setIsReady(true);
      }
    };
    loadPersistedState();
  }, [persistKey]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      {...others}
      key={persistKey}
      ref={forwardedRef}
      initialState={initialState}
      onStateChange={onStateChangeInternal}
      onReady={() => RNBootSplash.hide()}
    />
  );
}

const DevPersistedNavigationContainer = __DEV__
  ? React.forwardRef(DevPersistedNavigationContainerImpl)
  : NavigationContainer;

export default DevPersistedNavigationContainer;

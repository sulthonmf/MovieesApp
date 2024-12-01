import type { StackScreenProps } from '@react-navigation/stack';
import type { Paths } from '@/navigation/paths';

export type RootStackParamList = {
  [Paths.Account]: undefined;
  [Paths.AuthStack]: undefined;
  [Paths.Example]: undefined;
  [Paths.ForgotPassword]: undefined;
  [Paths.Home]: undefined;
  [Paths.Landing]: undefined;
  [Paths.Login]: undefined;
  [Paths.MainTabs]: undefined;
  [Paths.MovieList]: undefined;
  [Paths.SignUp]: undefined;
  [Paths.Startup]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

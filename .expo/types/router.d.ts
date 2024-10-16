/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/details.component` | `/(tabs)/explore` | `/(tabs)/gesture-handler` | `/(tabs)/home.component` | `/(tabs)/navigation.component` | `/_sitemap` | `/details.component` | `/explore` | `/gesture-handler` | `/home.component` | `/navigation.component`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

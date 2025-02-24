/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/error`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(guest)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(guest)'}/guestTabs/profile` | `/guestTabs/profile`; params?: Router.UnknownInputParams; } | { pathname: `/signin`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/error`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(guest)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(guest)'}/guestTabs/profile` | `/guestTabs/profile`; params?: Router.UnknownOutputParams; } | { pathname: `/signin`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/error${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(guest)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(guest)'}/guestTabs/profile${`?${string}` | `#${string}` | ''}` | `/guestTabs/profile${`?${string}` | `#${string}` | ''}` | `/signin${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/error`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(guest)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(guest)'}/guestTabs/profile` | `/guestTabs/profile`; params?: Router.UnknownInputParams; } | { pathname: `/signin`; params?: Router.UnknownInputParams; };
    }
  }
}

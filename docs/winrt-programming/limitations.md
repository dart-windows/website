---
sidebar_position: 3
---

# Limitations

## Asynchronous methods that report progress

There are two types of asynchronous methods that report progress:

- Methods that do not have a result object but report progress to callback
  listeners (see the [IAsyncActionWithProgress] interface).
- Methods that have a result object and also report progress to callback
  listeners (see the [IAsyncOperationWithProgress] interface).

:::caution

It's worth noting that neither of these are currently supported, and supporting
them would require a significant amount of effort and may require the
introduction of new language features. As a result, support for these is
unlikely to be available in the near future.

:::

## Events

WinRT events are used to notify interested parties when something of
significance happens. An event is defined as a pair of add/remove listener
methods with matching name and delegate type.

For example, the [NetworkInformation] class has an event called
[NetworkStatusChanged], which is triggered when the network status changes for
a connection.

:::caution

However, WinRT events are not supported yet, and supporting them would require
a significant amount of effort and may require the introduction of new language
features. As a result, support for WinRT events is unlikely to be available in
the near future.

:::

## Unsupported WinRT APIs

Although you can use most WinRT APIs in your app, there are two main sets of
WinRT APIs that aren't supported, or have restrictions:

- APIs that have dependencies on user interface (UI) features that were
  designed for use only in a Universal Windows Platform (UWP) app.
-	APIs that require [package identity]. Such APIs are supported only in apps
	that are packaged using [MSIX].

:::note

Please refer to the [Windows Runtime APIs not supported in desktop apps] page
for more information.

:::

[IAsyncActionWithProgress]: https://learn.microsoft.com/en-us/uwp/api/windows.foundation.iasyncactionwithprogress-1
[IAsyncOperationWithProgress]: https://learn.microsoft.com/en-us/uwp/api/windows.foundation.iasyncoperationwithprogress-2
[MSIX]: https://learn.microsoft.com/en-us/windows/msix/
[NetworkInformation]: https://learn.microsoft.com/en-us/uwp/api/windows.networking.connectivity.networkinformation
[NetworkStatusChanged]: https://learn.microsoft.com/en-us/uwp/api/windows.networking.connectivity.networkinformation.networkstatuschanged
[package identity]: https://learn.microsoft.com/en-us/windows/apps/desktop/modernize/package-identity-overview
[Windows Runtime APIs not supported in desktop apps]: https://learn.microsoft.com/en-us/windows/apps/desktop/modernize/desktop-to-uwp-supported-api

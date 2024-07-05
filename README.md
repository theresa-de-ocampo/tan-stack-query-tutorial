# Learning TanStack Query

- [Overview](https://www.youtube.com/watch?v=8K1N3fE-cDs)

## `staleTime` vs `cacheTime`

**Stale Time**: The duration until a query transitions from fresh to stale. As long as the query is fresh, data will always be read from the cache - no network requests will happen! If the query is stale (which per default is _instantly_), you will still get data from the cache, but a background refresh can happen under certain conditions.

**Cache Time**: The duration until inactive queries will be removed from the cache. This defaults to 5 minutes. Queries transition to the inactive state as soon as there are no observers registered, so when all components which use the query have unmounted.

[Read More About Caching](https://tanstack.com/query/latest/docs/framework/react/guides/caching)

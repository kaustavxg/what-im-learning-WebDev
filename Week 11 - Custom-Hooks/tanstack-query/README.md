# 🧠 Learning TanStack Query

In this project, we explored how **TanStack Query** is much **better and faster** than the normal data fetching method using `fetch()` in React.

## 🚀 What We Built
We fetched product data from the **[DummyJSON API](https://dummyjson.com/products)** and created a small **[product listing website](https://tanstack-query-sand.vercel.app/)** to understand how data fetching works.

## 🆚 Comparison
We compared two approaches:
1. **Normal Fetching (using `useEffect` and `useState`)**
2. **Fetching with TanStack Query (`useQuery`)**

This helped us understand how TanStack Query simplifies data fetching, caching, and updating.

## ⚙️ Key Concepts Learned
- **Caching:** How TanStack Query caches fetched data automatically for better performance.  
- **staleTime:** The duration for which cached data is considered *fresh* before being refetched.  
- **useParams:** Used to dynamically fetch data based on route parameters.  
- **Automatic Refetching:** TanStack Query intelligently refetches stale data when needed.  

## 💡 Takeaway
TanStack Query provides:
- Faster performance through smart caching  
- Cleaner and more maintainable code  
- Built-in state management for API calls  

Overall, it makes React applications **more efficient and developer-friendly**.

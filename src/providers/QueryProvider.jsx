import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QuerytProvider({children}) {
    const qeryClient = new QueryClient()
    return (
        <QueryClientProvider client={qeryClient} >
            {children}
        </QueryClientProvider>
    );
}
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { queryClient } from "./lib/queryClient";
//import { TodoList } from "./components/TodoList";
import { ErrorFallback } from "./components/ErrorFallback";

function BuggyComponent() {
  throw new Error("테스트용 에러");
  return <div>이 내용은 보이지 않을 것입니다</div>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          queryClient.invalidateQueries({ queryKey: ["todos"] });
        }}
      >
        <h1>Todo 리스트</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BuggyComponent />
        </ErrorBoundary>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

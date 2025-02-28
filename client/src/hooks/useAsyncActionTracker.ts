import { useState, useCallback } from "react";

export type AsyncAction<ParameterType, ReturnType = void> = ParameterType extends void
  ? () => Promise<ReturnType>
  : (params: ParameterType) => Promise<ReturnType>;

export type AsyncActionTrackerParams<ParameterType, ReturnType> = {
  action: AsyncAction<ParameterType, ReturnType>;
  initialState?: ReturnType;
  initialLoadingState?: boolean;
};

/**
 *
 * @param action
 * @param initialState
 * @param supressLoadingIndicator use for polling action where each polling should not trigger UI to show loading status but rather should kept previous data
 */
export const useAsyncActionTracker = <ReturnType, ParameterType = void>({
  action,
  initialState,
  initialLoadingState = false,
}: AsyncActionTrackerParams<ParameterType, ReturnType>) => {
  const [isLoading, setIsLoading] = useState(initialLoadingState);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<ReturnType | undefined>(initialState);

  const setStateToLoading = useCallback(() => {
    setIsLoading(true);
    setError(undefined);
    setData(undefined);
  }, []);

  const setStateToSucceeded = useCallback(
    (result: ReturnType) => {
      setData(result);
      setIsLoading(false);
      setError(undefined);
    },
    []
  );

  const setStateToError = useCallback((err: Error | string) => {
    setIsLoading(false);
    setError(typeof err === "string" ? err : err.message);
    setData(undefined);
  }, []);

  const execute = useCallback(
    async (parameter: ParameterType): Promise<ReturnType | undefined> => {
      try {
        setStateToLoading();
        const preview = await action(parameter);
        setStateToSucceeded(preview);
        return preview;
      } catch (e) {
        setStateToError(e);
      }

      return undefined;
    },
    [action, setStateToError, setStateToLoading, setStateToSucceeded]
  );

  const reset = useCallback(() => {
    setIsLoading(initialLoadingState);
    setError(undefined);
    setData(initialState);
  }, [initialLoadingState, initialState]);

  return { data, error, isLoading, execute, reset };
};

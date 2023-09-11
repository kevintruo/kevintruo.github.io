export const sleep = (m: any, controller?: AbortController) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, m);
    if (controller) {
      const abortListener = ({ target }: any) => {
        controller.signal.removeEventListener("abort", abortListener);
        reject(target.reason);
      };
      controller.signal.addEventListener("abort", abortListener);
    }
  });
};

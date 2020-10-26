export function debounce(func: Function, delay: number): Function {
  let timeout: ReturnType<typeof setTimeout>;

  return function() {
    // @ts-ignore
    const context = this;
    const args = arguments;
    console.log(' ------------context', context);
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

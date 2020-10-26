
export interface AutoCompleteConfig {
  data: Promise<any> | any;
  keys?: string[];
  debounceTime?: number;
}

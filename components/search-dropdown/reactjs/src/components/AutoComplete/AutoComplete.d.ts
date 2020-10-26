
export interface AutoCompleteConfig {
  data: {
    src: Promise<any> | any;
    keys?: string[];
  };
}

export interface HttpErrorReponse {
  headers:    Headers;
  status:     number;
  statusText: string;
  url:        string;
  ok:         boolean;
  name:       string;
  message:    string;
  error:      Error;
}

export interface Error {
  data:    null;
  result:  boolean;
  message: string;
}

export interface Headers {
  normalizedNames: NormalizedNames;
  lazyUpdate:      null;
}

export interface NormalizedNames {
}

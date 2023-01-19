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
  Data:    null;
  Result:  boolean;
  Message: string;
}

export interface Headers {
  normalizedNames: NormalizedNames;
  lazyUpdate:      null;
}

export interface NormalizedNames {
}

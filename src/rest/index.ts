import { cryptoClient, ICryptoClient } from "./crypto/index.js";
import { forexClient, IForexClient } from "./forex/index.js";
import { referenceClient, IReferenceClient } from "./reference/index.js";
import { optionsClient, IOptionsClient } from "./options/index.js";
import { stocksClient, IStocksClient } from "./stocks/index.js";
import { IRequestOptions } from "./transport/request.js";
export * from "./crypto/index.js";
export * from "./forex/index.js";
export * from "./reference/index.js";
export * from "./options/index.js";
export * from "./stocks/index.js";

export interface IRestClient {
  crypto: ICryptoClient;
  forex: IForexClient;
  reference: IReferenceClient;
  options: IOptionsClient;
  stocks: IStocksClient;
}

export const restClient = (apiKey, apiBase?: string, options?: IRequestOptions): IRestClient => ({
  crypto: cryptoClient(apiKey, apiBase, options),
  forex: forexClient(apiKey, apiBase, options),
  reference: referenceClient(apiKey, apiBase, options),
  options: optionsClient(apiKey, apiBase, options),
  stocks: stocksClient(apiKey, apiBase, options),
});

export default restClient;

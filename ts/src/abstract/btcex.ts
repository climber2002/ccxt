// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    publicGetGetLastTradesByCurrency (params?: {}): Promise<implicitReturnType>;
    publicGetGetLastTradesByInstrument (params?: {}): Promise<implicitReturnType>;
    publicGetGetOrderBook (params?: {}): Promise<implicitReturnType>;
    publicGetTickers (params?: {}): Promise<implicitReturnType>;
    publicGetGetInstruments (params?: {}): Promise<implicitReturnType>;
    publicGetGetTradingviewChartData (params?: {}): Promise<implicitReturnType>;
    publicGetCmcSpotSummary (params?: {}): Promise<implicitReturnType>;
    publicGetCmcSpotTicker (params?: {}): Promise<implicitReturnType>;
    publicGetCmcSpotOrderbook (params?: {}): Promise<implicitReturnType>;
    publicGetCmcMarketTrades (params?: {}): Promise<implicitReturnType>;
    publicGetCmcContracts (params?: {}): Promise<implicitReturnType>;
    publicGetCmcContractOrderbook (params?: {}): Promise<implicitReturnType>;
    publicGetCoinGeckoSpotPairs (params?: {}): Promise<implicitReturnType>;
    publicGetCoinGeckoSpotTicker (params?: {}): Promise<implicitReturnType>;
    publicGetCoinGeckoSpotOrderbook (params?: {}): Promise<implicitReturnType>;
    publicGetCoinGeckoMarketTrades (params?: {}): Promise<implicitReturnType>;
    publicGetCoinGeckoContracts (params?: {}): Promise<implicitReturnType>;
    publicGetCoinGeckoContractOrderbook (params?: {}): Promise<implicitReturnType>;
    publicGetGetPerpetualLeverageBracket (params?: {}): Promise<implicitReturnType>;
    publicGetGetPerpetualLeverageBracketAll (params?: {}): Promise<implicitReturnType>;
    publicPostAuth (params?: {}): Promise<implicitReturnType>;
    privateGetGetDepositRecord (params?: {}): Promise<implicitReturnType>;
    privateGetGetWithdrawRecord (params?: {}): Promise<implicitReturnType>;
    privateGetGetPosition (params?: {}): Promise<implicitReturnType>;
    privateGetGetPositions (params?: {}): Promise<implicitReturnType>;
    privateGetGetOpenOrdersByCurrency (params?: {}): Promise<implicitReturnType>;
    privateGetGetOpenOrdersByInstrument (params?: {}): Promise<implicitReturnType>;
    privateGetGetOrderHistoryByCurrency (params?: {}): Promise<implicitReturnType>;
    privateGetGetOrderHistoryByInstrument (params?: {}): Promise<implicitReturnType>;
    privateGetGetOrderState (params?: {}): Promise<implicitReturnType>;
    privateGetGetUserTradesByCurrency (params?: {}): Promise<implicitReturnType>;
    privateGetGetUserTradesByInstrument (params?: {}): Promise<implicitReturnType>;
    privateGetGetUserTradesByOrder (params?: {}): Promise<implicitReturnType>;
    privateGetGetPerpetualUserConfig (params?: {}): Promise<implicitReturnType>;
    privatePostLogout (params?: {}): Promise<implicitReturnType>;
    privatePostGetAssetsInfo (params?: {}): Promise<implicitReturnType>;
    privatePostAddWithdrawAddress (params?: {}): Promise<implicitReturnType>;
    privatePostBuy (params?: {}): Promise<implicitReturnType>;
    privatePostSell (params?: {}): Promise<implicitReturnType>;
    privatePostCancel (params?: {}): Promise<implicitReturnType>;
    privatePostCancelAllByCurrency (params?: {}): Promise<implicitReturnType>;
    privatePostCancelAllByInstrument (params?: {}): Promise<implicitReturnType>;
    privatePostClosePosition (params?: {}): Promise<implicitReturnType>;
    privatePostAdjustPerpetualLeverage (params?: {}): Promise<implicitReturnType>;
    privatePostAdjustPerpetualMarginType (params?: {}): Promise<implicitReturnType>;
    privatePostSubmitTransfer (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange

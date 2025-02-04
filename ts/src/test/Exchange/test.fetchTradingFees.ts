
import testTradingFee from './base/test.tradingFee.js';

async function testFetchTradingFees (exchange) {
    const method = 'fetchTradingFees';
    const fees = await exchange.fetchTradingFees ();
    const symbols = Object.keys (fees);
    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        testTradingFee (exchange, method, symbol, fees[symbol]);
    }
}

export default testFetchTradingFees;

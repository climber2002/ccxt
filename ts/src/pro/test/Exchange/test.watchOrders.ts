'use strict';

// ----------------------------------------------------------------------------

import assert from 'assert';
import testOrder from '../../../test/Exchange/base/test.order.js';
import errors from '../../../base/errors.js';

/*  ------------------------------------------------------------------------ */

export default async (exchange, symbol) => {

    // log (symbol.green, 'watching orders...')

    const method = 'watchOrders';

    if (!exchange.has[method]) {
        console.log (exchange.id, 'does not support', method + '() method');
        return;
    }

    let response = undefined;

    let now = Date.now ();
    const ends = now + 10000;

    while (now < ends) {

        try {

            response = await exchange[method] (symbol);

            now = Date.now ();

            assert (response instanceof Array);

            console.log (exchange.iso8601 (now), exchange.id, symbol.green, method, (Object.values (response).length.toString () as any).green, 'orders');

            // log.noLocate (asTable (response))

            for (let i = 0; i < response.length; i++) {
                const order = response[i];
                testOrder (exchange, method, order, symbol, now);
            }
        } catch (e) {

            if (!(e instanceof errors.NetworkError)) {
                throw e;
            }

            now = Date.now ();
        }
    }

    return response;
};

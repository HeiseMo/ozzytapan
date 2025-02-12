'use client';

import { useEffect } from 'react';

export default function ShopifyBuyButton() {
  useEffect(() => {
    // Initialize Shopify Buy Button
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy) return;
      const client = window.ShopifyBuy.buildClient({
        domain: 'm1u23q-pv.myshopify.com',
        storefrontAccessToken: 'd37f9a2324d11ac170adbb1916582e3d',
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '9761073398098',
          node: document.getElementById('product-component-1730502534279'),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            // ... your existing options ...
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px"
                  },
                  "text-align": "left"
                },
                // ... rest of your styles ...
              }
            }
          }
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return <div id="product-component-1730502534279"></div>;
}

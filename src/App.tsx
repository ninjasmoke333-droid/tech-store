import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechStoreLanding from './components/tech-store';
import StoreFindStore from './components/Store/find-store';
import StoreOrderStatus from './components/Store/order-status';
import StoreShopLatest from './components/Store/shop-latest';
import AppleiPad from './components/Apple/iPad';
import AppleiPhone from './components/Apple/iPhone';
import AppleMac from './components/Apple/Mac';
import AsusRogPhone9Pro from './components/Asus/rog-phone-9-pro';
import AsusRogZephyrus from './components/Asus/rog-zephyrus';
import AsusZenfone12Ultra from './components/Asus/zenfone-12-ultra';
import OnePlusOnePlus15 from './components/OnePlus/oneplus15';
import OnePlusOnePlusNord5 from './components/OnePlus/oneplus-nord-5';
import OnePlusOnePlusPad3 from './components/OnePlus/oneplus-pad-3';
import RazerRazerBasiliskV3 from './components/Razer/razer-basilisk-v3';
import RazerRazerblade18 from './components/Razer/razerblade-18';
import RazerRazerPhone2 from './components/Razer/razer-phone-2';
import SamsungS25Ultra from './components/Samsung/S25Ultra';
import SamsungTabS11 from './components/Samsung/TabS11';
import SamsungWatch8 from './components/Samsung/Watch8';
import SupportCommunity from './components/Support/community';
import SupportContactUs from './components/Support/contact-us';
import SupportTechnicalSupport from './components/Support/technical-support';
import AccessoriesHeadphones from './components/Accessories/headphones';
import AccessoriesMouseKeyboards from './components/Accessories/mouse-keyboards';
import AccessoriesSmartglasses from './components/Accessories/smartglasses';
import VivoPad5Pro from './components/Vivo/pad-5-pro';
import VivoWatch5 from './components/Vivo/watch-5';
import VivoX300Series from './components/Vivo/x300-series';
import XiaomiXiaomi15TPro from './components/Xiaomi/xiaomi-15t-pro';
import XiaomiXiaomi17Ultra from './components/Xiaomi/xiaomi-17-ultra';
import XiaomiXiaomiPad7Ultra from './components/Xiaomi/xiaomi-pad-7-ultra';
import ShoppingCart from './components/shopping/shopping-cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TechStoreLanding />} />
          <Route path="/store/find-store" element={<StoreFindStore />} />
          <Route path="/store/order-status" element={<StoreOrderStatus />} />
          <Route path="/store/shop-latest" element={<StoreShopLatest />} />
          <Route path="/apple/ipad" element={<AppleiPad />} />
          <Route path="/apple/iphone" element={<AppleiPhone />} />
          <Route path="/apple/mac" element={<AppleMac />} />
          <Route path="/asus/rog-phone-9-pro" element={<AsusRogPhone9Pro />} />
          <Route path="/asus/rog-zephyrus" element={<AsusRogZephyrus />} />
          <Route path="/asus/zenfone-12-ultra" element={<AsusZenfone12Ultra />} />
          <Route path="/oneplus/oneplus15" element={<OnePlusOnePlus15 />} />
          <Route path="/oneplus/oneplus-nord-5" element={<OnePlusOnePlusNord5 />} />
          <Route path="/oneplus/oneplus-pad-3" element={<OnePlusOnePlusPad3 />} />
          <Route path="/razer/razer-basilisk-v3" element={<RazerRazerBasiliskV3 />} />
          <Route path="/razer/razerblade-18" element={<RazerRazerblade18 />} />
          <Route path="/razer/razer-phone-2" element={<RazerRazerPhone2 />} />
          <Route path="/samsung/s25ultra" element={<SamsungS25Ultra />} />
          <Route path="/samsung/tabs11" element={<SamsungTabS11 />} />
          <Route path="/samsung/watch8" element={<SamsungWatch8 />} />
          <Route path="/support/community" element={<SupportCommunity />} />
          <Route path="/support/contact-us" element={<SupportContactUs />} />
          <Route path="/support/technical-support" element={<SupportTechnicalSupport />} />
          <Route path="/accessories/headphones" element={<AccessoriesHeadphones />} />
          <Route path="/accessories/mouse-keyboards" element={<AccessoriesMouseKeyboards />} />
          <Route path="/accessories/smartglasses" element={<AccessoriesSmartglasses />} />
          <Route path="/vivo/pad-5-pro" element={<VivoPad5Pro />} />
          <Route path="/vivo/watch-5" element={<VivoWatch5 />} />
          <Route path="/vivo/x300-series" element={<VivoX300Series />} />
          <Route path="/xiaomi/xiaomi-15t-pro" element={<XiaomiXiaomi15TPro />} />
          <Route path="/xiaomi/xiaomi-17-ultra" element={<XiaomiXiaomi17Ultra />} />
          <Route path="/xiaomi/xiaomi-pad-7-ultra" element={<XiaomiXiaomiPad7Ultra />} />
          <Route path="/shopping/shopping-cart" element={<ShoppingCart />} />
          <Route path="/shopping/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

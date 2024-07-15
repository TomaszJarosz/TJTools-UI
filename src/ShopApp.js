import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Shop from "./shop/ShopContent";
import TopHeader from "./material-ui/header/TopHeader";
import ShopDashboard from "./shop/page/dashboard/Dashboard";
import Orders from "./shop/page/orders/Orders";
import Customers from "./shop/page/customers/Customers";
import Reports from "./shop/page/reports/Reports";
import Integrations from "./shop/page/integrations/Integrations";
import ReportsCurrentMonth from "./shop/page/reports/ReportsCurrentMonth";
import ReportsLastQuarter from "./shop/page/reports/ReportsLastQuarter";
import ReportsYearEndSale from "./shop/page/reports/ReportsYearEndSale";
import Cart from "./shop/page/cart/Cart";
import Notifications from "./shop/page/notifications/Notifications";
import Profile from "./shop/page/profile/Profile";
import ShopMain from "./shop/page/shop/shop-main/ShopMain";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Dashboard from "./material-ui/templates/dashboard-material/Dashboard";
import Album from "./material-ui/templates/album/Album";
import Blog from "./material-ui/templates/blog/Blog";
import Pricing from "./material-ui/templates/pricing/Pricing";
import SignIn from "./material-ui/templates/signin/SignIn";
import SignInSide from "./material-ui/templates/signinside/SignInSide";
import SignUp from "./material-ui/templates/signup/SignUp";
import StickyFooter from "./material-ui/templates/stickyfooter/StickyFooter";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
function ShopApp() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <TopHeader/>
                <Routes>
                    <Route path="/" element={<Shop/>}/>
                    <Route path="/shop" element={<Shop/>}>
                        <Route index element={<ShopMain/>}/>
                        <Route path="/shop/cart" element={<Cart/>}/>
                        <Route path="/shop/notifications" element={<Notifications/>}/>
                        <Route path="/shop/profile" element={<Profile/>}/>
                        <Route path="/shop/dashboard" element={<ShopDashboard/>}/>
                        <Route path="/shop/orders" element={<Orders/>}/>
                        <Route path="/shop/customers" element={<Customers/>}/>
                        <Route path="/shop/integrations" element={<Integrations/>}/>
                        <Route path="/shop/reports" element={<Reports/>}/>
                        <Route path="/shop/reports/current-month" element={<ReportsCurrentMonth/>}/>
                        <Route path="/shop/reports/last-quarter" element={<ReportsLastQuarter/>}/>
                        <Route path="/shop/reports/end-year-sale" element={<ReportsYearEndSale/>}/>
                    </Route>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/album" element={<Album/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signinside" element={<SignInSide/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/stickyfooter" element={<StickyFooter/>}/>
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default ShopApp;

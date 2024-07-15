import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import TopHeader from "./shop/header/TopHeader";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
function ShopApp() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <TopHeader/>

            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default ShopApp;

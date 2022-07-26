import React from 'react'
import Skeleton from "react-loading-skeleton";


const OrderSkeleton = () => <span style={{ display: "grid", gap: "16px", }}>
    <Skeleton borderRadius={8} height={60} />
    <Skeleton borderRadius={8} height={110} />
    <Skeleton borderRadius={8} height={110} />
    <Skeleton borderRadius={8} height={110} />
    <Skeleton borderRadius={8} height={80} />
</span>

export default OrderSkeleton
import React from 'react'
import Skeleton from "react-loading-skeleton";
import theme from "../../styles/theme";
import { MediaMatch } from "../MediaMatch";

const ProductSkeleton = () => <>
    <MediaMatch lessThan={theme.media.small}>
        <div style={{ display: "grid", gap: "8px" }}>
            <Skeleton borderRadius={8} height={260} />
            <Skeleton borderRadius={8} height={42} />
            <Skeleton borderRadius={8} height={100} />
        </div>
    </MediaMatch>
    <MediaMatch greaterThan={theme.media.small}>
        <div style={{ display: "grid", gap: "16px" }}>
            <Skeleton borderRadius={8} height={360} />
            <Skeleton borderRadius={8} height={42} />
            <Skeleton borderRadius={8} height={150} />
        </div>
    </MediaMatch>
</>
export default ProductSkeleton
import React from 'react';
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons';

export default function Rating({ rating }) {
    const renderStar = (index) => {
        const flr = Math.floor(rating.rate);
        if (index < flr) return <StarFill />

        if (index === flr && index < rating.rate) return <StarHalf />

        return <Star />
    }

    return (
        <div className="rating" title={ `${rating.rate} out of ${rating.count} votes` }>
            { Array(5).fill(null).map((s, i) => {
                return renderStar(i);
            })}
        </div>
    )
}

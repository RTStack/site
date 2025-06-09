type StarRatingProps = {
  rating: number;
  max?: number;
  size?: number;
};

export const StarRating = ({ rating, max = 5, size = 18 }: StarRatingProps) => {
  const hasDecimal = rating % 1;
  const halfStar = hasDecimal >= 0.25 && hasDecimal < 0.75;
  const roundUp = hasDecimal >= 0.75;
  const fullStars = Math.floor(rating) + (roundUp ? 1 : 0);
  const emptyStars = max - fullStars - (halfStar ? 1 : 0);

  const Star = ({ fill }: { fill: string }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={fill} d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z" />
    </svg>
  );

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} fill="#FFA645" />);
  }

  if (halfStar) {
    stars.push(
      <div key="half" className="relative w-[18px] h-[18px]">
        <div className="absolute top-0 left-0 w-[9px] h-full overflow-hidden">
          <Star fill="#FFA645" />
        </div>
        <div className="absolute top-0 right-0 w-[9px] h-full overflow-hidden">
          <div className="scale-x-[-1]">
            <Star fill="#D1D5DB" />
          </div>
        </div>
      </div>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} fill="#D1D5DB" />);
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

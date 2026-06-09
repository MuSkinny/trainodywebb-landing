import { getDictionary } from "@/lib/dictionary";
import { StarHalfIcon, StarIcon, StarOffIcon } from "lucide-react";

const TestimonialAvatars = async ({ lang }: { lang: any }) => {
  const starts_number = 5;
  const testimonials_number = 20;

  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-row items-center gap-0.5">
        {[...Array(starts_number)].map((_: any, i: number) => (
          <StarIcon className="w-3.5" fill="#97D731" stroke="none" key={i} />
        ))}
      </div>
      <span className="text-xs md:text-sm font-medium text-foreground/80">
        20+ {dict.hero.badgeReviewText}
      </span>
    </div>
  );
};

export default TestimonialAvatars;

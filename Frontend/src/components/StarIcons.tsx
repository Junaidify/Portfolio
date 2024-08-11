import { HStack, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const StarIcons = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <HStack spacing={1}>
      {Array.from({ length: fullStars }, (_, index) => (
        <Icon
          key={`full-${index}`}
          as={StarIcon}
          color="yellow.400"
          boxSize={6}
        />
      ))}
      {hasHalfStar && (
        <Icon
          as={StarIcon}
          color="yellow.400"
          boxSize={6}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 17.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </Icon>
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
        <Icon
          key={`empty-${index}`}
          as={StarIcon}
          color="gray.300"
          boxSize={6}
        />
      ))}
    </HStack>
  );
};

import { Link } from 'expo-router';
import React from 'react';

import type { Post } from '@/api';
import { Box } from '@/components/ui/box';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';

type Props = Post;

const images = [
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515386474292-47555758ef2e?auto=format&fit=crop&w=800&q=80',
  'https://plus.unsplash.com/premium_photo-1666815503002-5f07a44ac8fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
];

export const Card = ({ title, body, id }: Props) => {
  return (
    <Link href={`/feed/${id}`} asChild>
      <Pressable>
        <Box className="m-2 overflow-hidden rounded-xl border border-neutral-300 bg-white dark:bg-neutral-900">
          <Image
            className="h-56 w-full overflow-hidden rounded-t-xl"
            resizeMode="cover"
            size="none"
            source={{
              uri: images[Math.floor(Math.random() * images.length)],
            }}
          />

          <Box className="p-2">
            <Text className="py-3 text-2xl">{title}</Text>
            <Text numberOfLines={3} className="leading-snug text-gray-600">
              {body}
            </Text>
          </Box>
        </Box>
      </Pressable>
    </Link>
  );
};

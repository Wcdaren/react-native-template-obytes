import { Env } from '@env';
import { Github, HeartHandshake } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

import { FocusAwareStatusBar } from '@/components/focus-aware-status-bar';
import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { LanguageItem } from '@/components/settings/language-item';
import { ThemeItem } from '@/components/settings/theme-item';
import { GlobeIcon, Icon, ShareIcon, StarIcon } from '@/components/ui/icon';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { translate, useAuth } from '@/lib';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#a3a3a3' : '#737373';
  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <VStack className="flex-1 px-4 pt-16">
          <Text className="text-xl font-bold">
            {translate('settings.title')}
          </Text>
          <ItemsContainer title="settings.generale">
            <LanguageItem />
            <ThemeItem />
          </ItemsContainer>

          <ItemsContainer title="settings.about">
            <Item text="settings.app_name" value={Env.NAME} />
            <Item text="settings.version" value={Env.VERSION} />
          </ItemsContainer>

          <ItemsContainer title="settings.support_us">
            <Item
              text="settings.share"
              icon={<Icon as={ShareIcon} style={{ color: iconColor }} />}
              onPress={() => {}}
            />
            <Item
              text="settings.rate"
              icon={<Icon as={StarIcon} style={{ color: iconColor }} />}
              onPress={() => {}}
            />
            <Item
              text="settings.support"
              icon={<Icon as={HeartHandshake} style={{ color: iconColor }} />}
              onPress={() => {}}
            />
          </ItemsContainer>

          <ItemsContainer title="settings.links">
            <Item text="settings.privacy" onPress={() => {}} />
            <Item text="settings.terms" onPress={() => {}} />
            <Item
              text="settings.github"
              icon={<Icon as={Github} style={{ color: iconColor }} />}
              onPress={() => {}}
            />
            <Item
              text="settings.website"
              icon={<Icon as={GlobeIcon} style={{ color: iconColor }} />}
              onPress={() => {}}
            />
          </ItemsContainer>

          <VStack className="my-8">
            <ItemsContainer>
              <Item text="settings.logout" onPress={signOut} />
            </ItemsContainer>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}

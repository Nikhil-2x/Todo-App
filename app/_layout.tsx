import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

const url = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!url) throw new Error("Missing Convex URL");

const convex = new ConvexReactClient(url, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}

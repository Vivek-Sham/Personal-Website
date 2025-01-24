import Script from "next/script";

export const UmamiAnalytics = () => {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) {
    console.warn("Umami Website ID is not set. Analytics will not be tracked.");
    return <></>;
  }
  return (
    <Script
      async
      src="https://cloud.umami.is/script.js"
      data-website-id={websiteId}
    />
  );
};

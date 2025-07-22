export const isActiveLinkAdvanced = (linkUrl: string, currentPath: string): boolean => {
  // Remove trailing slash for comparison
  const cleanLinkUrl = linkUrl.replace(/\/$/, "") || "/";
  const cleanCurrentPath = currentPath.replace(/\/$/, "") || "/";

  // Exact match
  if (cleanLinkUrl === cleanCurrentPath) {
    return true;
  }

  // Check if current path starts with link URL (for nested routes)
  if (cleanLinkUrl !== "/" && cleanCurrentPath.startsWith(cleanLinkUrl + "/")) {
    return true;
  }

  return false;
};

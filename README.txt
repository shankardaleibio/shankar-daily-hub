# Shankar Daily Hub — Website + Chrome Install

## Files
- `index.html` — complete website
- `manifest.json` — Chrome install/PWA metadata
- `sw.js` — offline cache and update handling
- `icon-192.png`, `icon-512.png` — app icons

## Publish on GitHub Pages (Android phone)
1. Open your repository: https://github.com/shankardaleibio/shankar-daily-hub
2. Upload/replace all five files in the repository root (same folder as `index.html`).
3. Commit the changes.
4. In GitHub: repository → Settings → Pages → confirm deployment from your main branch/root.
5. Wait for deployment, then open: https://shankardaleibio.github.io/shankar-daily-hub/
6. Test the website online once before installing.

## Install from Chrome (not an APK)
1. Open the published website in Google Chrome on Android.
2. Tap Chrome's three-dot menu (⋮).
3. Tap **Install app** or **Add to Home screen** (the wording varies by Chrome version).
4. Confirm **Install** / **Add**.
5. Open **Daily Hub** from your home screen/app list.

## Notes
- Offline mode works after the website has loaded and the service worker has installed successfully.
- Tasks, notes, expenses, shopping list and habits are saved in this browser's local storage.
- Data is not automatically synced between devices or browsers. Export a JSON backup in Settings.
- Clearing Chrome site data can erase locally stored app data.
- This is a website/PWA package; it does not build an APK.

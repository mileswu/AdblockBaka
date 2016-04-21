# AdblockBaka
#### *A very simple adblocker for Microsoft Edge*
While it is nowhere near as sophisticated as more fully-featured adblockers such as [Adblock Plus](https://adblockplus.org/) or [uBlock Origin](https://github.com/gorhill/uBlock), unfortunately these are not available for Microsoft Edge yet.
This is quite simple and will not block all ads, but it will block most and this is much better than nothing.

<img src="https://i.imgur.com/pS4PLHU.png" alt="screenshot" width="50%">
<img src="https://i.imgur.com/XVVhoQY.png" alt="screenshot" width="50%">

## How to install
1. Be running Windows 10 Insider Preview that has support for extensions in Microsoft Edge
2. Download [latest version ZIP](https://github.com/mileswu/AdblockBaka/archive/master.zip) and extract it
3. Run `build.bat` by double-clicking
4. In Microsoft Edge, press action button (top right - ...) -> Extensions -> Load Extension
5. Navigate to where you extracted the ZIP and select the `AdblockBaka.extension` folder

## Feedback
Feel free to create an issue or a pull request on Github if you have comments, feedback or improvements.

## Details
This blocks all URL patterns that are listed in the [Easylist general block list](https://hg.adblockplus.org/easylist/file/tip/easylist/easylist_general_block.txt) which should block most ads (such as banner ads from ad networks).
More advanced techniques like CSS injection/hiding etc. are not implemented, so more inline ads won't be blocked (an example would that sponsored search results on Google are not hidden as these are part of the page and not loaded as an external 'ad')

The `build.bat` is necessary to set the permissions on the extension.
For some reason MS Edge expects certain permissions or it will refuse to load the extension.

## License
The AdblockBaka extension itelf is licensed under the BSD License (see `LICENSE`)
The blocking list used is from the [EasyList](https://easylist.github.io/) authors and licensed under [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/)

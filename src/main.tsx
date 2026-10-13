// The entry immediately.run runs (`package.json` → `main`). It boots the SDK with
// Grove's component vocabulary so the MDX in `content/` renders through it.
import { boot } from '@immediately-run/sdk/boot';
import { GROVE_MDX } from '@immediately-run/grove';
import App from './App';

boot({ mdxComponents: GROVE_MDX, children: <App /> });

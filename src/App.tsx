// peterneumark.com: the whole site is the stock Grove wiki over `content/`.
// The engine is a pinned npm dependency (Grove's M3 "thin shell" mode), so
// upgrading Grove is a version bump in package.json, never a re-merge.

import { GroveApp } from '@immediately-run/grove';
import '@immediately-run/grove/styles.css';

export default function App() {
  return <GroveApp />;
}

export const modifierSymbols = {
  command: '⌘',
  option: '⌥',
  control: '⌃',
  shift: '⇧',
  fn: 'fn',
  capslock: '⇪',
  escape: '⎋',
  tab: '⇥',
  delete: '⌫',
  return: '⏎',
  space: 'Space',
  arrowup: '▲',
  arrowdown: '▼',
  arrowleft: '◀',
  arrowright: '▶'
};

export const categories = [
  { id: 'common', title: 'Common Shortcuts', icon: '🌟' },
  { id: 'finder', title: 'Finder & System', icon: '📁' },
  { id: 'text', title: 'Text Editing', icon: '✍️' },
  { id: 'sleep', title: 'Sleep & Log Out', icon: '🌙' },
  { id: 'accessibility', title: 'Accessibility', icon: '♿' }
];

export const shortcuts = [
  // --- COMMON SHORTCUTS ---
  {
    id: 'common-cut',
    keys: ['command', 'x'],
    label: '⌘ + X',
    description: 'Cut the selected item and copy it to the Clipboard.',
    category: 'common'
  },
  {
    id: 'common-copy',
    keys: ['command', 'c'],
    label: '⌘ + C',
    description: 'Copy the selected item to the Clipboard. This also works for files in the Finder.',
    category: 'common'
  },
  {
    id: 'common-paste',
    keys: ['command', 'v'],
    label: '⌘ + V',
    description: 'Paste the contents of the Clipboard into the current document or app. This also works for files in the Finder.',
    category: 'common'
  },
  {
    id: 'common-undo',
    keys: ['command', 'z'],
    label: '⌘ + Z',
    description: 'Undo the previous command. Press Shift-Command-Z to Redo.',
    category: 'common'
  },
  {
    id: 'common-redo',
    keys: ['command', 'shift', 'z'],
    label: '⇧ + ⌘ + Z',
    description: 'Redo the previously undone action.',
    category: 'common'
  },
  {
    id: 'common-select-all',
    keys: ['command', 'a'],
    label: '⌘ + A',
    description: 'Select All items.',
    category: 'common'
  },
  {
    id: 'common-find',
    keys: ['command', 'f'],
    label: '⌘ + F',
    description: 'Find items in a document or open a Find window.',
    category: 'common'
  },
  {
    id: 'common-find-next',
    keys: ['command', 'g'],
    label: '⌘ + G',
    description: 'Find Again: Find the next occurrence of the item found previously. Press Shift-Command-G to find the previous occurrence.',
    category: 'common'
  },
  {
    id: 'common-find-prev',
    keys: ['command', 'shift', 'g'],
    label: '⇧ + ⌘ + G',
    description: 'Find Previous: Find the previous occurrence of the search item.',
    category: 'common'
  },
  {
    id: 'common-hide',
    keys: ['command', 'h'],
    label: '⌘ + H',
    description: 'Hide the windows of the front app. To view the front app but hide all other apps, press Option-Command-H.',
    category: 'common'
  },
  {
    id: 'common-hide-others',
    keys: ['command', 'option', 'h'],
    label: '⌥ + ⌘ + H',
    description: 'Hide windows of all apps except the frontmost app.',
    category: 'common'
  },
  {
    id: 'common-minimize',
    keys: ['command', 'm'],
    label: '⌘ + M',
    description: 'Minimise the front window to the Dock. Press Option-Command-M to minimise all windows of the front app.',
    category: 'common'
  },
  {
    id: 'common-minimize-all',
    keys: ['command', 'option', 'm'],
    label: '⌥ + ⌘ + M',
    description: 'Minimise all windows of the frontmost app to the Dock.',
    category: 'common'
  },
  {
    id: 'common-open',
    keys: ['command', 'o'],
    label: '⌘ + O',
    description: 'Open the selected item, or open a dialogue to select a file to open.',
    category: 'common'
  },
  {
    id: 'common-print',
    keys: ['command', 'p'],
    label: '⌘ + P',
    description: 'Open a print dialogue to print the current document.',
    category: 'common'
  },
  {
    id: 'common-quit',
    keys: ['command', 'q'],
    label: '⌘ + Q',
    description: 'Quit the current app.',
    category: 'common'
  },
  {
    id: 'common-save',
    keys: ['command', 's'],
    label: '⌘ + S',
    description: 'Save the current document.',
    category: 'common'
  },
  {
    id: 'common-tab',
    keys: ['command', 't'],
    label: '⌘ + T',
    description: 'Open a new tab in the active application.',
    category: 'common'
  },
  {
    id: 'common-close',
    keys: ['command', 'w'],
    label: '⌘ + W',
    description: 'Close the front window. Press Option-Command-W to close all windows of the app.',
    category: 'common'
  },
  {
    id: 'common-close-all',
    keys: ['command', 'option', 'w'],
    label: '⌥ + ⌘ + W',
    description: 'Close all open windows of the active application.',
    category: 'common'
  },
  {
    id: 'common-force-quit',
    keys: ['command', 'option', 'escape'],
    label: '⌥ + ⌘ + ⎋',
    description: 'Force quit an app (opens the Force Quit Applications window).',
    category: 'common'
  },
  {
    id: 'common-spotlight',
    keys: ['command', 'space'],
    label: '⌘ + Space',
    description: 'Show or hide the Spotlight search field. Press Option-Command-Space bar to perform a Spotlight search from a Finder window.',
    category: 'common'
  },
  {
    id: 'common-spotlight-finder',
    keys: ['command', 'option', 'space'],
    label: '⌥ + ⌘ + Space',
    description: 'Open a Spotlight search window directly in the Finder.',
    category: 'common'
  },
  {
    id: 'common-emoji',
    keys: ['control', 'command', 'space'],
    label: '⌃ + ⌘ + Space',
    description: 'Show the Character Viewer, from which you can choose emoji and other symbols (or press Fn-E).',
    category: 'common'
  },
  {
    id: 'common-emoji-fn',
    keys: ['fn', 'e'],
    label: 'fn + E',
    description: 'Show the Character Viewer (alternative to Control-Command-Space).',
    category: 'common'
  },
  {
    id: 'common-fullscreen',
    keys: ['control', 'command', 'f'],
    label: '⌃ + ⌘ + F',
    description: 'Toggle full screen mode, if supported by the app.',
    category: 'common'
  },
  {
    id: 'common-quicklook',
    keys: ['space'],
    label: 'Space',
    description: 'Use Quick Look to preview the selected item.',
    category: 'common'
  },
  {
    id: 'common-switch-app',
    keys: ['command', 'tab'],
    label: '⌘ + ⇥',
    description: 'Switch to the next most recently used app among your open apps.',
    category: 'common'
  },
  {
    id: 'common-switch-window',
    keys: ['command', '`'],
    label: '⌘ + `',
    description: 'Switch between the windows of the application you are currently using.',
    category: 'common'
  },
  {
    id: 'common-screenshot-panel',
    keys: ['command', 'shift', '5'],
    label: '⇧ + ⌘ + 5',
    description: 'Take a screenshot or make a screen recording in macOS Mojave or later.',
    category: 'common'
  },
  {
    id: 'common-screenshot-screen',
    keys: ['command', 'shift', '3'],
    label: '⇧ + ⌘ + 3',
    description: 'Take a screenshot of the entire screen.',
    category: 'common'
  },
  {
    id: 'common-screenshot-portion',
    keys: ['command', 'shift', '4'],
    label: '⇧ + ⌘ + 4',
    description: 'Take a screenshot of a selected portion of your screen.',
    category: 'common'
  },
  {
    id: 'common-new-folder',
    keys: ['command', 'shift', 'n'],
    label: '⇧ + ⌘ + N',
    description: 'Create a new empty folder in the Finder.',
    category: 'common'
  },
  {
    id: 'common-folder-selected',
    keys: ['control', 'command', 'n'],
    label: '⌃ + ⌘ + N',
    description: 'Create a new folder that contains the currently selected items in Finder.',
    category: 'common'
  },
  {
    id: 'common-settings',
    keys: ['command', ','],
    label: '⌘ + ,',
    description: 'Open settings (preferences) for the front app.',
    category: 'common'
  },
  {
    id: 'common-quick-note',
    keys: ['fn', 'q'],
    label: 'fn + Q',
    description: 'Create a Quick Note in Notes app.',
    category: 'common'
  },

  // --- SLEEP, LOG OUT & SHUT DOWN ---
  {
    id: 'sleep-lock',
    keys: ['command', 'control', 'q'],
    label: '⌃ + ⌘ + Q',
    description: 'Lock your screen immediately.',
    category: 'sleep'
  },
  {
    id: 'sleep-logout-prompt',
    keys: ['command', 'shift', 'q'],
    label: '⇧ + ⌘ + Q',
    description: 'Log out of your macOS user account with a confirmation dialogue.',
    category: 'sleep'
  },
  {
    id: 'sleep-logout-immediate',
    keys: ['command', 'option', 'shift', 'q'],
    label: '⇧ + ⌥ + ⌘ + Q',
    description: 'Log out of your macOS user account immediately without confirming.',
    category: 'sleep'
  },
  {
    id: 'sleep-displays',
    keys: ['control', 'shift', 'power'],
    label: '⌃ + ⇧ + Power',
    description: 'Put your displays to sleep (on built-in keyboards without Touch ID).',
    category: 'sleep'
  },
  {
    id: 'sleep-restart-dialog',
    keys: ['control', 'power'],
    label: '⌃ + Power',
    description: 'Show a dialogue asking whether you want to restart, sleep or shut down.',
    category: 'sleep'
  },
  {
    id: 'sleep-force-restart',
    keys: ['control', 'command', 'power'],
    label: '⌃ + ⌘ + Power',
    description: 'Force your Mac to restart without prompting to save open files.',
    category: 'sleep'
  },
  {
    id: 'sleep-force-shutdown',
    keys: ['control', 'option', 'command', 'power'],
    label: '⌃ + ⌥ + ⌘ + Power',
    description: 'Quit all apps, then shut down your Mac.',
    category: 'sleep'
  },

  // --- FINDER & SYSTEM ---
  {
    id: 'finder-duplicate',
    keys: ['command', 'd'],
    label: '⌘ + D',
    description: 'Duplicate the selected files.',
    category: 'finder'
  },
  {
    id: 'finder-eject',
    keys: ['command', 'e'],
    label: '⌘ + E',
    description: 'Eject the selected disk or volume.',
    category: 'finder'
  },
  {
    id: 'finder-find',
    keys: ['command', 'f'],
    label: '⌘ + F',
    description: 'Start a Spotlight search in the Finder window.',
    category: 'finder'
  },
  {
    id: 'finder-info',
    keys: ['command', 'i'],
    label: '⌘ + I',
    description: 'Show the Get Info window for a selected file.',
    category: 'finder'
  },
  {
    id: 'finder-refresh',
    keys: ['command', 'r'],
    label: '⌘ + R',
    description: 'Show original file for alias. In other apps, refresh or reload. In Software Update, check for updates.',
    category: 'finder'
  },
  {
    id: 'finder-go-computer',
    keys: ['command', 'shift', 'c'],
    label: '⇧ + ⌘ + C',
    description: 'Open the Computer window in Finder.',
    category: 'finder'
  },
  {
    id: 'finder-go-desktop',
    keys: ['command', 'shift', 'd'],
    label: '⇧ + ⌘ + D',
    description: 'Open the Desktop folder in Finder.',
    category: 'finder'
  },
  {
    id: 'finder-go-recents',
    keys: ['command', 'shift', 'f'],
    label: '⇧ + ⌘ + F',
    description: 'Open the Recents window, showing all recently changed or viewed files.',
    category: 'finder'
  },
  {
    id: 'finder-go-folder',
    keys: ['command', 'shift', 'g'],
    label: '⇧ + ⌘ + G',
    description: 'Open a Go to Folder window.',
    category: 'finder'
  },
  {
    id: 'finder-go-home',
    keys: ['command', 'shift', 'h'],
    label: '⇧ + ⌘ + H',
    description: 'Open the Home folder of the current macOS user account.',
    category: 'finder'
  },
  {
    id: 'finder-go-icloud',
    keys: ['command', 'shift', 'i'],
    label: '⇧ + ⌘ + I',
    description: 'Open iCloud Drive folder.',
    category: 'finder'
  },
  {
    id: 'finder-go-network',
    keys: ['command', 'shift', 'k'],
    label: '⇧ + ⌘ + K',
    description: 'Open the Network window.',
    category: 'finder'
  },
  {
    id: 'finder-go-downloads',
    keys: ['command', 'option', 'l'],
    label: '⌥ + ⌘ + L',
    description: 'Open the Downloads folder.',
    category: 'finder'
  },
  {
    id: 'finder-go-documents',
    keys: ['command', 'shift', 'o'],
    label: '⇧ + ⌘ + O',
    description: 'Open the Documents folder.',
    category: 'finder'
  },
  {
    id: 'finder-toggle-preview',
    keys: ['command', 'shift', 'p'],
    label: '⇧ + ⌘ + P',
    description: 'Show or hide the Preview pane in Finder windows.',
    category: 'finder'
  },
  {
    id: 'finder-go-airdrop',
    keys: ['command', 'shift', 'r'],
    label: '⇧ + ⌘ + R',
    description: 'Open the AirDrop window.',
    category: 'finder'
  },
  {
    id: 'finder-toggle-tabbar',
    keys: ['command', 'shift', 't'],
    label: '⇧ + ⌘ + T',
    description: 'Show or hide the tab bar in Finder windows.',
    category: 'finder'
  },
  {
    id: 'finder-dock-selected',
    keys: ['command', 'option', 'control', 'shift', 't'],
    label: '⌃ + ⇧ + ⌥ + ⌘ + T',
    description: 'Add selected Finder item to the Dock (OS X Mavericks or later).',
    category: 'finder'
  },
  {
    id: 'finder-go-utilities',
    keys: ['command', 'shift', 'u'],
    label: '⇧ + ⌘ + U',
    description: 'Open the Utilities folder.',
    category: 'finder'
  },
  {
    id: 'finder-toggle-dock',
    keys: ['command', 'option', 'd'],
    label: '⌥ + ⌘ + D',
    description: 'Show or hide the Dock.',
    category: 'finder'
  },
  {
    id: 'finder-add-sidebar',
    keys: ['control', 'command', 't'],
    label: '⌃ + ⌘ + T',
    description: 'Add the selected item to the sidebar in Finder.',
    category: 'finder'
  },
  {
    id: 'finder-pathbar',
    keys: ['command', 'option', 'p'],
    label: '⌥ + ⌘ + P',
    description: 'Hide or show the path bar in Finder windows.',
    category: 'finder'
  },
  {
    id: 'finder-sidebar',
    keys: ['command', 'option', 's'],
    label: '⌥ + ⌘ + S',
    description: 'Hide or show the Sidebar in Finder windows.',
    category: 'finder'
  },
  {
    id: 'finder-statusbar',
    keys: ['command', '/'],
    label: '⌘ + /',
    description: 'Hide or show the status bar in Finder windows.',
    category: 'finder'
  },
  {
    id: 'finder-view-options',
    keys: ['command', 'j'],
    label: '⌘ + J',
    description: 'Show View Options for Finder.',
    category: 'finder'
  },
  {
    id: 'finder-connect-server',
    keys: ['command', 'k'],
    label: '⌘ + K',
    description: 'Open the Connect to Server window.',
    category: 'finder'
  },
  {
    id: 'finder-make-alias',
    keys: ['control', 'command', 'a'],
    label: '⌃ + ⌘ + A',
    description: 'Make an alias of the selected item.',
    category: 'finder'
  },
  {
    id: 'finder-new-window',
    keys: ['command', 'n'],
    label: '⌘ + N',
    description: 'Open a new Finder window.',
    category: 'finder'
  },
  {
    id: 'finder-new-smartfolder',
    keys: ['command', 'option', 'n'],
    label: '⌥ + ⌘ + N',
    description: 'Create a new Smart Folder.',
    category: 'finder'
  },
  {
    id: 'finder-toggle-toolbar',
    keys: ['command', 'option', 't'],
    label: '⌥ + ⌘ + T',
    description: 'Show or hide the toolbar when a single tab is open in the current Finder window.',
    category: 'finder'
  },
  {
    id: 'finder-paste-move',
    keys: ['command', 'option', 'v'],
    label: '⌥ + ⌘ + V',
    description: 'Move files in the Clipboard from original location to current location (cut and paste files).',
    category: 'finder'
  },
  {
    id: 'finder-quick-look-slideshow',
    keys: ['command', 'option', 'y'],
    label: '⌥ + ⌘ + Y',
    description: 'View a Quick Look slideshow of the selected files.',
    category: 'finder'
  },
  {
    id: 'finder-view-icons',
    keys: ['command', '1'],
    label: '⌘ + 1',
    description: 'View the items in the Finder window as icons.',
    category: 'finder'
  },
  {
    id: 'finder-view-list',
    keys: ['command', '2'],
    label: '⌘ + 2',
    description: 'View the items in a Finder window as a list.',
    category: 'finder'
  },
  {
    id: 'finder-view-columns',
    keys: ['command', '3'],
    label: '⌘ + 3',
    description: 'View the items in a Finder window in columns.',
    category: 'finder'
  },
  {
    id: 'finder-view-gallery',
    keys: ['command', '4'],
    label: '⌘ + 4',
    description: 'View the items in a Finder window in a gallery.',
    category: 'finder'
  },
  {
    id: 'finder-prev-folder',
    keys: ['command', '['],
    label: '⌘ + [',
    description: 'Go to the previous folder.',
    category: 'finder'
  },
  {
    id: 'finder-next-folder',
    keys: ['command', ']'],
    label: '⌘ + ]',
    description: 'Go to the next folder.',
    category: 'finder'
  },
  {
    id: 'finder-parent-folder',
    keys: ['command', 'arrowup'],
    label: '⌘ + ▲',
    description: 'Open the folder that contains the current folder.',
    category: 'finder'
  },
  {
    id: 'finder-parent-folder-window',
    keys: ['control', 'command', 'arrowup'],
    label: '⌃ + ⌘ + ▲',
    description: 'Open the folder that contains the current folder in a new window.',
    category: 'finder'
  },
  {
    id: 'finder-open-selected',
    keys: ['command', 'arrowdown'],
    label: '⌘ + ▼',
    description: 'Open the selected item.',
    category: 'finder'
  },
  {
    id: 'finder-open-folder-list',
    keys: ['arrowright'],
    label: '▶',
    description: 'Open the selected folder. This only works when in list view.',
    category: 'finder'
  },
  {
    id: 'finder-close-folder-list',
    keys: ['arrowleft'],
    label: '◀',
    description: 'Close the selected folder. This only works when in list view.',
    category: 'finder'
  },
  {
    id: 'finder-trash',
    keys: ['command', 'delete'],
    label: '⌘ + ⌫',
    description: 'Move the selected item to the Bin.',
    category: 'finder'
  },
  {
    id: 'finder-empty-trash',
    keys: ['command', 'shift', 'delete'],
    label: '⇧ + ⌘ + ⌫',
    description: 'Empty the Bin with confirmation.',
    category: 'finder'
  },
  {
    id: 'finder-empty-trash-now',
    keys: ['command', 'option', 'shift', 'delete'],
    label: '⇧ + ⌥ + ⌘ + ⌫',
    description: 'Empty the Bin without confirmation dialogue.',
    category: 'finder'
  },
  {
    id: 'finder-displays-settings',
    keys: ['option', 'brightnessup'],
    label: '⌥ + Brightness Up',
    description: 'Open Displays settings.',
    category: 'finder'
  },
  {
    id: 'finder-missioncontrol-settings',
    keys: ['option', 'missioncontrol'],
    label: '⌥ + Mission Control',
    description: 'Open Mission Control settings.',
    category: 'finder'
  },
  {
    id: 'finder-sound-settings',
    keys: ['option', 'volumeup'],
    label: '⌥ + Volume Up',
    description: 'Open Sound settings.',
    category: 'finder'
  },
  {
    id: 'finder-keyboard-settings',
    keys: ['option', 'keyboardbrightnessup'],
    label: '⌥ + Keyboard Brightness Up',
    description: 'Open Keyboard settings.',
    category: 'finder'
  },
  {
    id: 'system-dock-fn',
    keys: ['fn', 'a'],
    label: 'fn + A',
    description: 'Show or hide the Dock.',
    category: 'finder'
  },
  {
    id: 'system-control-center',
    keys: ['fn', 'c'],
    label: 'fn + C',
    description: 'Show or hide Control Centre.',
    category: 'finder'
  },
  {
    id: 'system-dictation',
    keys: ['fn', 'd'],
    label: 'fn + D',
    description: 'Start or stop dictation.',
    category: 'finder'
  },
  {
    id: 'system-notifications',
    keys: ['fn', 'n'],
    label: 'fn + N',
    description: 'Show or hide Notification Centre.',
    category: 'finder'
  },
  {
    id: 'system-launchpad',
    keys: ['fn', 'shift', 'a'],
    label: 'fn + ⇧ + A',
    description: 'Show or hide Apps (Launchpad) in macOS Tahoe 26 or later.',
    category: 'finder'
  },
  {
    id: 'system-keyboard-viewer',
    keys: ['fn', 'fn'],
    label: 'fn (double tap)',
    description: 'Open the Character Viewer (Siri or Dictation depending on preferences).',
    category: 'finder'
  },
  {
    id: 'system-siri',
    keys: ['command', 'command'],
    label: '⌘ (double tap)',
    description: 'Open or close Type to Siri.',
    category: 'finder'
  },
  {
    id: 'system-input-source',
    keys: ['control', 'space'],
    label: '⌃ + Space',
    description: 'Select the previous input source. Control-Option-Space selects the next.',
    category: 'finder'
  },

  // --- TEXT EDITING ---
  {
    id: 'text-bold',
    keys: ['command', 'b'],
    label: '⌘ + B',
    description: 'Boldface the selected text, or turn boldfacing on or off.',
    category: 'text'
  },
  {
    id: 'text-italic',
    keys: ['command', 'i'],
    label: '⌘ + I',
    description: 'Italicise the selected text, or turn italics on or off.',
    category: 'text'
  },
  {
    id: 'text-link',
    keys: ['command', 'k'],
    label: '⌘ + K',
    description: 'Add a web link.',
    category: 'text'
  },
  {
    id: 'text-underline',
    keys: ['command', 'u'],
    label: '⌘ + U',
    description: 'Underline the selected text or turn underlining on or off.',
    category: 'text'
  },
  {
    id: 'text-fonts',
    keys: ['command', 't'],
    label: '⌘ + T',
    description: 'Show or hide the Fonts window.',
    category: 'text'
  },
  {
    id: 'text-define',
    keys: ['control', 'command', 'd'],
    label: '⌃ + ⌘ + D',
    description: 'Show or hide the definition of the selected word.',
    category: 'text'
  },
  {
    id: 'text-grammar',
    keys: ['command', 'shift', ':'],
    label: '⇧ + ⌘ + :',
    description: 'Show the Spelling and Grammar window.',
    category: 'text'
  },
  {
    id: 'text-misspelt',
    keys: ['command', ';'],
    label: '⌘ + ;',
    description: 'Find misspelt words in the document.',
    category: 'text'
  },
  {
    id: 'text-delete-word',
    keys: ['option', 'delete'],
    label: '⌥ + ⌫',
    description: 'Delete the word to the left of the insertion point.',
    category: 'text'
  },
  {
    id: 'text-delete-left',
    keys: ['control', 'h'],
    label: '⌃ + H',
    description: 'Delete the character to the left of the insertion point. Or use Delete.',
    category: 'text'
  },
  {
    id: 'text-delete-right',
    keys: ['control', 'd'],
    label: '⌃ + D',
    description: 'Delete the character to the right of the insertion point. Or use Fn-Delete.',
    category: 'text'
  },
  {
    id: 'text-forward-delete',
    keys: ['fn', 'delete'],
    label: 'fn + ⌫',
    description: 'Forward delete on keyboards that do not have a Forward Delete key.',
    category: 'text'
  },
  {
    id: 'text-cut-paragraph',
    keys: ['control', 'k'],
    label: '⌃ + K',
    description: 'Cut the text between the insertion point and the end of the line or paragraph.',
    category: 'text'
  },
  {
    id: 'text-paste-paragraph',
    keys: ['control', 'y'],
    label: '⌃ + Y',
    description: 'Paste text previously cut by Control-K.',
    category: 'text'
  },
  {
    id: 'text-page-up',
    keys: ['fn', 'arrowup'],
    label: 'fn + ▲',
    description: 'Page Up: Scroll up one page.',
    category: 'text'
  },
  {
    id: 'text-page-down',
    keys: ['fn', 'arrowdown'],
    label: 'fn + ▼',
    description: 'Page Down: Scroll down one page.',
    category: 'text'
  },
  {
    id: 'text-home',
    keys: ['fn', 'arrowleft'],
    label: 'fn + ◀',
    description: 'Home: Scroll to the beginning of a document.',
    category: 'text'
  },
  {
    id: 'text-end',
    keys: ['fn', 'arrowright'],
    label: 'fn + ▶',
    description: 'End: Scroll to the end of a document.',
    category: 'text'
  },
  {
    id: 'text-jump-begin',
    keys: ['command', 'arrowup'],
    label: '⌘ + ▲',
    description: 'Move the insertion point to the beginning of the document.',
    category: 'text'
  },
  {
    id: 'text-jump-end',
    keys: ['command', 'arrowdown'],
    label: '⌘ + ▼',
    description: 'Move the insertion point to the end of the document.',
    category: 'text'
  },
  {
    id: 'text-line-start',
    keys: ['command', 'arrowleft'],
    label: '⌘ + ◀',
    description: 'Move the insertion point to the beginning of the current line.',
    category: 'text'
  },
  {
    id: 'text-line-end',
    keys: ['command', 'arrowright'],
    label: '⌘ + ▶',
    description: 'Move the insertion point to the end of the current line.',
    category: 'text'
  },
  {
    id: 'text-word-left',
    keys: ['option', 'arrowleft'],
    label: '⌥ + ◀',
    description: 'Move the insertion point to the beginning of the previous word.',
    category: 'text'
  },
  {
    id: 'text-word-right',
    keys: ['option', 'arrowright'],
    label: '⌥ + ▶',
    description: 'Move the insertion point to the end of the next word.',
    category: 'text'
  },
  {
    id: 'text-select-to-start',
    keys: ['command', 'shift', 'arrowup'],
    label: '⇧ + ⌘ + ▲',
    description: 'Select the text between the insertion point and the beginning of the document.',
    category: 'text'
  },
  {
    id: 'text-select-to-end',
    keys: ['command', 'shift', 'arrowdown'],
    label: '⇧ + ⌘ + ▼',
    description: 'Select the text between the insertion point and the end of the document.',
    category: 'text'
  },
  {
    id: 'text-select-to-line-start',
    keys: ['command', 'shift', 'arrowleft'],
    label: '⇧ + ⌘ + ◀',
    description: 'Select the text between the insertion point and the beginning of the current line.',
    category: 'text'
  },
  {
    id: 'text-select-to-line-end',
    keys: ['command', 'shift', 'arrowright'],
    label: '⇧ + ⌘ + ▶',
    description: 'Select the text between the insertion point and the end of the current line.',
    category: 'text'
  },
  {
    id: 'text-select-up',
    keys: ['shift', 'arrowup'],
    label: '⇧ + ▲',
    description: 'Extend text selection to the line above at the nearest horizontal position.',
    category: 'text'
  },
  {
    id: 'text-select-down',
    keys: ['shift', 'arrowdown'],
    label: '⇧ + ▼',
    description: 'Extend text selection to the line below at the nearest horizontal position.',
    category: 'text'
  },
  {
    id: 'text-select-left',
    keys: ['shift', 'arrowleft'],
    label: '⇧ + ◀',
    description: 'Extend text selection one character to the left.',
    category: 'text'
  },
  {
    id: 'text-select-right',
    keys: ['shift', 'arrowright'],
    label: '⇧ + ▶',
    description: 'Extend text selection one character to the right.',
    category: 'text'
  },
  {
    id: 'text-select-paragraph-up',
    keys: ['option', 'shift', 'arrowup'],
    label: '⇧ + ⌥ + ▲',
    description: 'Extend text selection to the beginning of the current paragraph.',
    category: 'text'
  },
  {
    id: 'text-select-paragraph-down',
    keys: ['option', 'shift', 'arrowdown'],
    label: '⇧ + ⌥ + ▼',
    description: 'Extend text selection to the end of the current paragraph.',
    category: 'text'
  },
  {
    id: 'text-select-word-left',
    keys: ['option', 'shift', 'arrowleft'],
    label: '⇧ + ⌥ + ◀',
    description: 'Extend text selection to the beginning of the current word.',
    category: 'text'
  },
  {
    id: 'text-select-word-right',
    keys: ['option', 'shift', 'arrowright'],
    label: '⇧ + ⌥ + ▶',
    description: 'Extend text selection to the end of the current word.',
    category: 'text'
  },
  {
    id: 'text-control-a',
    keys: ['control', 'a'],
    label: '⌃ + A',
    description: 'Move cursor to the beginning of the line or paragraph.',
    category: 'text'
  },
  {
    id: 'text-control-e',
    keys: ['control', 'e'],
    label: '⌃ + E',
    description: 'Move cursor to the end of the line or paragraph.',
    category: 'text'
  },
  {
    id: 'text-align-left',
    keys: ['command', '{'],
    label: '⌘ + {',
    description: 'Left align text.',
    category: 'text'
  },
  {
    id: 'text-align-right',
    keys: ['command', '}'],
    label: '⌘ + }',
    description: 'Right align text.',
    category: 'text'
  },
  {
    id: 'text-align-center',
    keys: ['command', 'shift', '|'],
    label: '⇧ + ⌘ + |',
    description: 'Centre align text.',
    category: 'text'
  },
  {
    id: 'text-copy-style',
    keys: ['command', 'option', 'c'],
    label: '⌥ + ⌘ + C',
    description: 'Copy Style: Copy the formatting settings of the selected item to the Clipboard.',
    category: 'text'
  },
  {
    id: 'text-paste-style',
    keys: ['command', 'option', 'v'],
    label: '⌥ + ⌘ + V',
    description: 'Paste Style: Apply the copied style to the selected item.',
    category: 'text'
  },
  {
    id: 'text-paste-match-style',
    keys: ['command', 'option', 'shift', 'v'],
    label: '⇧ + ⌥ + ⌘ + V',
    description: 'Paste and Match Style: Apply the style of the surrounding content to the pasted item.',
    category: 'text'
  },
  {
    id: 'text-font-decrease',
    keys: ['command', 'shift', '-'],
    label: '⇧ + ⌘ + -',
    description: 'Decrease the size of the selected font item.',
    category: 'text'
  },
  {
    id: 'text-font-increase',
    keys: ['command', 'shift', '+'],
    label: '⇧ + ⌘ + +',
    description: 'Increase the size of the selected font item.',
    category: 'text'
  },

  // --- ACCESSIBILITY ---
  {
    id: 'access-invert',
    keys: ['control', 'option', 'command', '8'],
    label: '⌃ + ⌥ + ⌘ + 8',
    description: 'Invert colours on the screen.',
    category: 'accessibility'
  },
  {
    id: 'access-contrast-dec',
    keys: ['control', 'option', 'command', ','],
    label: '⌃ + ⌥ + ⌘ + ,',
    description: 'Reduce contrast on display.',
    category: 'accessibility'
  },
  {
    id: 'access-contrast-inc',
    keys: ['control', 'option', 'command', '.'],
    label: '⌃ + ⌥ + ⌘ + .',
    description: 'Increase contrast on display.',
    category: 'accessibility'
  },
  {
    id: 'access-focus-menu',
    keys: ['control', 'f2'],
    label: '⌃ + F2',
    description: 'Move focus to the menu bar (or Fn-Control-F2).',
    category: 'accessibility'
  },
  {
    id: 'access-focus-dock',
    keys: ['control', 'f3'],
    label: '⌃ + F3',
    description: 'Move focus to the Dock (or Fn-Control-F3).',
    category: 'accessibility'
  },
  {
    id: 'access-focus-window',
    keys: ['control', 'f4'],
    label: '⌃ + F4',
    description: 'Move focus to the active window or next window (or Fn-Control-F4).',
    category: 'accessibility'
  },
  {
    id: 'access-focus-toolbar',
    keys: ['control', 'f5'],
    label: '⌃ + F5',
    description: 'Move focus to the window toolbar (or Fn-Control-F5).',
    category: 'accessibility'
  },
  {
    id: 'access-focus-floating',
    keys: ['control', 'f6'],
    label: '⌃ + F6',
    description: 'Move focus to the floating window (or Fn-Control-F6).',
    category: 'accessibility'
  },
  {
    id: 'access-focus-status',
    keys: ['control', 'f8'],
    label: '⌃ + F8',
    description: 'Move focus to the status menu in the menu bar (or Fn-Control-F8).',
    category: 'accessibility'
  },
  {
    id: 'access-panel',
    keys: ['command', 'option', 'f5'],
    label: '⌥ + ⌘ + F5',
    description: 'Show the Accessibility Shortcuts panel (or triple-press Touch ID).',
    category: 'accessibility'
  }
];

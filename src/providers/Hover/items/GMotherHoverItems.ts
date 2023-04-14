// eslint-disable-next-line @typescript-eslint/naming-convention
const GMotherHoverItems = [
    {
        word: 'unsafeWindow',
        contents: [
            {
                add: 'code',
                value: 'var unsafeWindow: Window & typeof globalThis'
            },
            {
                add: 'markdown',
                value: 'The `unsafeWindow` object provides full access to the pages javascript functions and variables.'
            }
        ]
    },
    {
        word: 'GM',
        contents: [
            {
                add: 'code',
                value: 'var GM: { [key: string]: GM_info | (...args: any[]) => any }'
            },
            {
                add: 'markdown',
                value: 'Provides `GM.*` APIs.'
            }
        ]
    }
];

export default GMotherHoverItems;

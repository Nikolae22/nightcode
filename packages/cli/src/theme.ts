export type ThemeColors={
    primary:string;
    planMode:string;
    selection:string;
    thinking:string;
    success:string;
    error:string;
    info:string;
    background:string;
    surface:string;
    dialogSurface:string;
    thinkingBorder:string;
    dimSeparator:string;
}

export type Theme={
    name:string;
    colors: ThemeColors;
}

export const THEMES: Theme[] = [
    {
        name: 'Nightfox',
        colors: {
            primary: '#719cd6',
            planMode: '#dbc475',
            selection: '#2b3b51',
            thinking: '#9d7cd8',
            success: '#81b29a',
            error: '#c94f6d',
            info: '#7dcfff',
            background: '#192330',
            surface: '#202e42',
            dialogSurface: '#24344f',
            thinkingBorder: '#58497a',
            dimSeparator: '#293e56'
        }
    },
    {
        name: 'Nordic Chill',
        colors: {
            primary: '#88c0d0',         // Blu ghiaccio tipico di Nord
            planMode: '#ebcb8b',        // Giallo Nord
            selection: '#434c5e',       // Grigio-blu scuro per selezione
            thinking: '#b48ead',        // Viola Nord
            success: '#a3be8c',         // Verde salvia Nord
            error: '#bf616a',           // Rosso Nord
            info: '#81a1c1',            // Blu chiaro
            background: '#2e3440',      // Grigio scuro polare
            surface: '#3b4252',         // Superficie leggermente più chiara
            dialogSurface: '#434c5e',   // Modali
            thinkingBorder: '#7d6177',  // Bordo viola sfumato
            dimSeparator: '#4c566a'     // Separatori chiari
        }
    },
    {
        name: 'Dracula',
        colors: {
            primary: '#ff79c6',         // Rosa vibrante Dracula
            planMode: '#f1fa8c',        // Giallo
            selection: '#44475a',       // Grigio viola selezione
            thinking: '#bd93f9',        // Viola classico
            success: '#50fa7b',         // Verde neon
            error: '#ff5555',           // Rosso
            info: '#8be9fd',            // Cyan
            background: '#282a36',      // Sfondo classico Dracula
            surface: '#1e1f29',         // Superfici più scure
            dialogSurface: '#343746',   // Modali
            thinkingBorder: '#6d5391',  // Bordo viola opaco
            dimSeparator: '#44475a'     // Separatori
        }
    },
    {
        name: 'Cyberpunk 2077',
        colors: {
            primary: '#fcee0a',         // Giallo Cyberpunk iconico
            planMode: '#ff0055',        // Rosa/Magenta neon
            selection: '#2c1654',       // Viola profondo per selezione
            thinking: '#00f0ff',        // Cyan elettrico
            success: '#00ff66',         // Verde acido
            error: '#ff3333',           // Rosso neon
            info: '#00bfff',            // Blu elettrico
            background: '#03030d',      // Quasi nero assoluto
            surface: '#120e2e',         // Viola scurissimo per superfici
            dialogSurface: '#1a153b',   // Modali viola
            thinkingBorder: '#0099aa',  // Bordo cyan controllato
            dimSeparator: '#322256'     // Bordi e linee guida
        }
    },
    {
        name: 'GitHub Dark',
        colors: {
            primary: '#58a6ff',         // Blu GitHub
            planMode: '#d29922',        // Oro GitHub
            selection: '#1f6feb',       // Blu selezione
            thinking: '#bc8cff',        // Viola GitHub
            success: '#3fb950',         // Verde GitHub
            error: '#f85149',           // Rosso GitHub
            info: '#2f81f7',            // Info blu
            background: '#0d1117',      // Sfondo classico GitHub Dark
            surface: '#161b22',         // Box e liste
            dialogSurface: '#21262d',   // Modali
            thinkingBorder: '#6e40aa',  // Bordo thinking
            dimSeparator: '#30363d'     // Bordi e separatori standard
        }
    },
    {
        name: 'Gruvbox Dark',
        colors: {
            primary: '#fe8019',         // Arancione retro Gruvbox
            planMode: '#fabd2f',        // Giallo caldo
            selection: '#504945',       // Grigio marrone selezione
            thinking: '#d3869b',        // Rosa antico / magenta
            success: '#b8bb26',         // Verde oliva
            error: '#fb4934',           // Rosso opaco
            info: '#83a598',            // Blu sbiadito
            background: '#282828',      // Sfondo scuro "pastello"
            surface: '#1d2021',         // Superfici scure
            dialogSurface: '#32302f',   // Modali
            thinkingBorder: '#8f5363',  // Bordo thinking
            dimSeparator: '#3c3836'     // Separatori della terra
        }
    },
    {
        name: 'Matrix (Hacker)',
        colors: {
            primary: '#00ff00',         // Verde fosforo puro
            planMode: '#00dd00',        // Verde leggermente meno acceso
            selection: '#003300',       // Verde scurissimo selezione
            thinking: '#33ff33',        // Verde brillante
            success: '#22cc22',         // Successo verde
            error: '#ff0033',           // Errore rosso per contrasto
            info: '#00aaff',            // Cyan per info
            background: '#000d00',      // Sfondo matrice quasi nero
            surface: '#001a00',         // Superfici verde scuro
            dialogSurface: '#002600',   // Modali
            thinkingBorder: '#00aa00',  // Bordo verde
            dimSeparator: '#004400'     // Separatori a griglia verde
        }
    },
    {
        name: 'Solarized Dark',
        colors: {
            primary: '#268bd2',         // Blu Solarized
            planMode: '#b58900',        // Giallo Solarized
            selection: '#073642',       // Grigio/Verde selezione
            thinking: '#6c71c4',        // Violetto
            success: '#859900',         // Verde oliva chiaro
            error: '#dc322f',           // Rosso
            info: '#2aa198',            // Cyan
            background: '#002b36',      // Sfondo petrolio scuro iconico
            surface: '#073642',         // Superfici interne
            dialogSurface: '#586e75',   // Modali (testo a contrasto)
            thinkingBorder: '#4d5191',  // Bordo pensando
            dimSeparator: '#0bcb87'     // Separatori
        }
    },
    {
        name: 'One Dark Pro',
        colors: {
            primary: '#61afef',         // Azzurro Atom/VSCode Pro
            planMode: '#e5c07b',        // Giallo caldo
            selection: '#3e4451',       // Grigio selezione
            thinking: '#c678dd',        // Viola One Dark
            success: '#98c379',         // Verde One Dark
            error: '#e06c75',           // Rosso One Dark
            info: '#4b5263',            // Grigio blu info
            background: '#282c34',      // Sfondo bilanciato scuro
            surface: '#21252b',         // Pannelli scuri
            dialogSurface: '#2c313c',   // Finestre di dialogo
            thinkingBorder: '#8e50a1',  // Bordo viola
            dimSeparator: '#181a1f'     // Bordi sottili
        }
    },
    {
        name: 'Monokai Retro',
        colors: {
            primary: '#66d9ef',         // Cyan Monokai
            planMode: '#e6db74',        // Giallo sabbia
            selection: '#49483e',       // Grigio fango selezione
            thinking: '#ae81ff',        // Viola Monokai
            success: '#a6e22e',         // Verde acido Monokai
            error: '#f92672',           // Magenta Monokai
            info: '#66d9ef',            // Info cyan
            background: '#272822',      // Sfondo classico marrone/grigio
            surface: '#1e1f1c',         // Superfici interne più scure
            dialogSurface: '#3e3d32',   // Modali
            thinkingBorder: '#7d59b8',  // Bordo per lo stato di caricamento
            dimSeparator: '#3e3d32'     // Linee di divisione
        }
    },
    {
        name: 'Minimal Light',
        colors: {
            primary: '#0969da',         // Blu pulito corporate
            planMode: '#9a6700',        // Oro spento
            selection: '#add6ff',       // Celeste chiaro selezione
            thinking: '#8250df',        // Viola pulito
            success: '#1a7f37',         // Verde scuro leggibile
            error: '#cf222e',           // Rosso scuro leggibile
            info: '#24292f',            // Grigio scuro per info
            background: '#ffffff',      // Bianco puro
            surface: '#f6f8fa',         // Grigio chiarissimo per liste/card
            dialogSurface: '#eaeef2',   // Modali grigie controllate
            thinkingBorder: '#c3a6ff',  // Bordo viola tenue
            dimSeparator: '#d0d7de'     // Linee di divisione grigie classiche
        }
    }
];

export const DEFAULT_THEME= THEMES.find((t)=>t.name === "Nightfox")
export const groups = [
  {grp1: ['Constant', 'Directory']},
  {grp2: ['Statement']},
  {grp3: ['Nontext', 'Specialkey']},
  {grp4: ['Comment', 'LineNr']},
  {grp5: ['Type']},
  {grp6: ['Special']},
  {grp7: ['Identifier', 'Preproc']},
  {grp8: ['ModeMsg', 'Normal', 'Question', 'TabLineFill', 'Title']},
  {grp9: ['CursorLine **', 'CursorLineNr *', 'Folded', 'FoldColumn']},
  {grp10: ["Pmenu", "PmenuSbar", "StatusLine", "StatusLineTerm", "TabLineSel", "Visual"]},
  {grp11: ["PmenuThumb", "PmenuSel", "StatusLineNC", "StatusLineTermNC", "TabLine"]},
  {grp12: ["DiffDelete", "Error", "ErrorMsg"]},
  {grp13: ["DiffAdd", "DiffChange", "IncSearch *", "MatchParen *", "Search"]},
]

export const themes = {
  defaultDark: {
    theme: 'defaultDark', background: 'dark',
    grp1: {fgCode: 214, bgCode: 256}, grp2: {fgCode: 149, bgCode: 256},
    grp3: {fgCode: 67, bgCode: 256}, grp4: {fgCode: 245, bgCode: 256},
    grp5: {fgCode: 123, bgCode: 256}, grp6: {fgCode: 205, bgCode: 256},
    grp7: {fgCode: 75, bgCode: 256}, grp8: {fgCode: 15, bgCode: 233},
    grp9: {fgCode: 245, bgCode: 236}, grp10: {fgCode: 0, bgCode: 252},
    grp11: {fgCode: 0, bgCode: 245}, grp12: {fgCode: 15, bgCode: 9},
    grp13: {fgCode: 0, bgCode: 214},
  },
  defaultLight: {
    theme: 'defaultLight', background: 'light',
    grp1: {fgCode: 94, bgCode: 256}, grp2: {fgCode: 124, bgCode: 256},
    grp3: {fgCode: 133, bgCode: 256}, grp4: {fgCode: 240, bgCode: 256},
    grp5: {fgCode: 28, bgCode: 256}, grp6: {fgCode: 128, bgCode: 256},
    grp7: {fgCode: 12, bgCode: 256}, grp8: {fgCode: 237, bgCode: 230},
    grp9: {fgCode: 233, bgCode: 255}, grp10: {fgCode: 0, bgCode: 245},
    grp11: {fgCode: 0, bgCode: 252}, grp12: {fgCode: 253, bgCode: 160},
    grp13: {fgCode: 234, bgCode: 87},
  }
}

export const samples = {
  'diff_error': [
    { 0: [[11,' index.html '],[10, ' '],[8,'2'],[10, ' Story1 '],[11, ' s/App.js '],[8,'                                       '],[11,'X']]},
    { 1: [[9,'  '],[4,' 1 '],[8,'Lorem Ipsum.'],[3,'$'],[8,'                  '],[-8, '|'],[9,'  '],[4,' 1 '],[8,'Lorem Ipsum.'],[3,'$']]},
    { 2: [[9,'  '],[4,' 2 '],[8,'Vivamus tellus.'],[3,'$'],[8,'               '],[-8, '|'],[9,'  '],[4,' 2 '],[8,'Vivamus tellus.'],[3,'$']]},
    { 3: [[9,'  '],[4,' 3 '],[13,'Donec '],[12,'Hello '],[13,'cursus.$           '],[-8, '|'],[9,'  '],[4,' 3 '],[13,'Donec cursus.$                ']]},
    { 4: [[9,'  '],[4,' 4 '],[8,'Sed a rutrum.'],[3,'$'],[8,'                 '],[-8, '|'],[9,'  '],[4,' 4 '],[8,'Sed a rutrum.'],[3,'$']]},
    { 5: [[9,'  '],[4,' 5 '],[8,'Mauris ac turpis magna.'],[3,'$'],[8,'       '],[-8, '|'],[9,'  '],[4,' 5 '],[8,'Mauris ac turpis magna.'],[3,'$']]},
    { 6: [[9,'  '],[4,' 6 '],[13,'Nunc feugiat.$                 '],[-8, '|'],[9,'  '],[4,' 6 '],[13,'Nunc '],[12,'World! '],[13,'feugiat.$         ']]},
    { 7: [[9,'  '],[4,' 7 '],[8,'Praesent lacinia.'],[3,'$'],[8,'             '],[-8, '|'],[9,'  '],[4,' 7 '],[8,'Praesent lacinia.'],[3,'$']]},
    { 8: [[9,'  ',9],[4,' 8 ',9],[8,'Aenean aliquam ',9],['Cursor','a'],[8,'t.',9],[3,'$',9],[8,'            ',9],[-8, '|'],[9,'  ',9],[4,' 8 ',9],[8,'Aenean aliquam at.',9],[3,'$           ',9]]},
    { 9: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {10: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {11: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {12: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {13: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {14: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {15: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {16: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {17: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {18: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {19: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {20: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {21: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {22: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {23: [[3,'~'],[8,'                                   '],[-8, '|'],                 [3,'~']]},
    {24: [[10,'Story1                               '],[11,'Story2                             ']]},
    {25: [[12,'E492: Not an editor command: abcdefg'],[8,'                                    ']]},
  ],
  'fold_search': [
    { 0: [[11,' '],[8,'2'],[11,' NERD_tree_1  s/Code.js '],[10, ' index.html '],[11, ' s/App.js '],[8,'                       '],[11,'X']]},
    { 1: [[4,'<!DOCTYPE html>'],[3,'$']]},
    { 2: [[7,'<'],[2,'html'],[8,' '],[5,'lang'],[7,'='],[1,'"en"'],[7,'>'],[3,'$']]},
    { 3: [[7,'<'],[2,'head'],[7,'>'],[3,'$']]},
    { 4: [[9,'+---  2 lines: <meta charset="UTF-8">-------------------------------']]},
    { 5: [[7,'</'],[2,'head'],[7,'>'],[3,'$']]},
    { 6: [[7,'<'],[2,'body'],[7,'>'],[3,'$']]},
    { 7: [[8,'  '],[7,'<'],[2,'div'],[8,' '],[5,'id'],[7,'='],[1,'"message"'],[7,'>'],[8,'Hello World!'],[7,'</'],[2,'div'],[7,'>'],[3,'$']]},
    { 8: [[8,'  '],[7,'<'],[2,'script'],[7,'>'],[3,'$']]},
    { 9: [[8,'    '],[5,'document'],[6,'.getElementById'],[8,'('],[1,'"message"'],[8,')'],[6,'.innerHTML'],[8,' '],[7,'='],[8,' '],[1,'"Goodbye!"'],[3,'$']]},
    {10: [[8,'    '],['Cursor','c'],[13,'onst'],[8,' '],[6,'a'],[8, ' '],[7,'='],[8,' 1']]},
    {11: [[8,'    '],[13,'const'],[8,' '],[6,'b'],[8, ' '],[7,'='],[8,' 2']]},
    {12: [[8,'    '],[13,'const'],[8,' '],[6,'c'],[8, ' '],[7,'='],[8,' 3']]},
    {13: [[8,'  '],[7,'</'],[2,'script'],[7,'>']]},
    {14: [[7,'</'],[2,'body'],[7,'>'],[3,'$']]},
    {24: [[3,'~']]},
    {25: [[8,'/const                                        ']]},
  ],
  'nerdtree_visual': [
    { 0: [[10,' NERD_tree_1 '],[11, ' s/Code.js index.html  s/App.js '],[8,'                          '],[11,'X']]},
    { 1: [[1,'" Press ? for help'],[3,'$']]},
    { 2: [[3,'$']]},
    { 3: [[1,'.. (up a dir)'],[3,'$']]},
    { 4: [[2,'/home/tkiat/Git/vim-custom-theme/'],[3,'$']]},
    { 5: [[1,'▸ .git/'],[3,'$']]},
    { 6: [[1,'▸ build/'],[3,'$']]},
    { 7: [[1,'▸ node_modules/'],[3,'$']]},
    { 8: [[1,'▸ public/'],[3,'$']]},
    { 9: [[1,'▾ src/'],[3,'$']]},
    {10: [[8,'    App.js'],[3,'$']]},
    {11: [[8,'    CodeSample.js'],[3,'$']]},
    {12: [[8,'    ColorGroup.js'],[3,'$']]},
    {13: [[8,'    con'],[10,'stants'],['Cursor',''],[8,'.js'],[3,'$']]},
    {14: [[8,'    index.css'],[3,'$']]},
    {15: [[8,'    index.js'],[3,'$']]},
    {16: [[8,'    Square.js'],[3,'$']]},
    {17: [[8,'  .gitignore'],[3,'$']]},
    {18: [[8,'  LICENSE'],[3,'$']]},
    {19: [[8,'  package-lock.json'],[3,'$']]},
    {20: [[8,'  package.json'],[3,'$']]},
    {21: [[8,'  README.md'],[3,'$']]},
    {24: [[3,'~']]},
    {25: [[8,'-- VISUAL --                                        ']]},
  ],
  'pmenu': [
    { 0: [[11,' '],[8,'2'],[11,' NERD_tree_1  s/Code.js '],[10, ' index.html '],[11, ' s/App.js '],[8,'                       '],[11,'X']]},
    { 1: [[4,'<!DOCTYPE html>'],[3,'$']]},
    { 2: [[7,'<'],[2,'html'],[8,' '],[5,'lang'],[7,'='],[1,'"en"'],[7,'>'],[3,'$']]},
    { 3: [[7,'<'],[2,'head'],[7,'>'],[3,'$']]},
    { 4: [[8,'  '],[7,'<'],[2,'meta'],[8,' '],[5,'charset'],[7,'='],[1,'"UTF-8"'],[7,'>'],[3,'$']]},
    { 5: [[8,'  '],[7,'<'],[2,'title'],[7,'>'],[8,'Document'],[7,'</'],[2,'title'],[7,'>'],[3,'$']]},
    { 6: [[7,'</'],[2,'head'],[7,'>'],[3,'$']]},
    { 7: [[7,'<'],[2,'body'],[7,'>'],[3,'$']]},
    { 8: [[8,'  '],[7,'<'],[2,'div'],[8,' '],[5,'id'],[7,'='],[1,'"message"'],[7,'>'],[8,'Hello World!'],[7,'</'],[2,'div'],[7,'>'],[3,'$']]},
    { 9: [[8,'  '],[7,'<'],[2,'script'],[7,'>'],[3,'$']]},
    {10: [[8,'    '],[5,'document'],[6,'.getElementById'],[8,'('],[1,'"message"'],[8,')'],[6,'.innerHTML'],[8,' '],[7,'='],[8,' '],[1,'"Goodbye!"'],[3,'$']]},
    {11: [[8,'    ',9],[5,'document',9],[6,'.getElementById',9],[8,'(',9],['Cursor','$'],[8,'                                       ',9]]},
    {12: [[8,'    '],[2,'const'],[8,' '],[6,'a'],[8,' '],[10,' getElementById(              '],[11,' ']]},
    {13: [[8,'    '],[2,'const'],[8,' '],[6,'b'],[8,' '],[11,' getElementByClassName(       '],[11,' ']]},
    {14: [[8,'    '],[2,'const'],[8,' '],[6,'c'],[8,' '],[10,' getElementByName(            '],[11,' ']]},
    {15: [[8,'    '],[2,'const'],[8,' '],[6,'d'],[8,' '],[10,' getElementByTagName(         '],[11,' ']]},
    {16: [[8,'    '],[2,'const'],[8,' '],[6,'e'],[8,' '],[10,' getElementByTagNameNS(       '],[11,' ']]},
    {17: [[8,'    '],[2,'const'],[8,' '],[6,'f'],[8,' '],[10,' images                       '],[11,' ']]},
    {18: [[8,'    '],[2,'const'],[8,' '],[6,'g'],[8,' '],[10,' plugins                      '],[10,' ']]},
    {19: [[8,'    '],[2,'const'],[8,' '],[6,'h'],[8,' '],[10,' scrollingElement             '],[10,' ']]},
    {20: [[8,'  '],[7,'</'],[2,'script'],[7,'>'],[3,'$'],[10,' designMode                   '],[10,' ']]},
    {21: [[7,'</'],[2,'body'],[7,'>'],[3,'$'],[8,'    '],[10,' nextSibling                  '],[10,' ']]},
    {24: [[3,'~']]},
    {25: [[8,'-- Omni completion (^O^N^P) match 2 of 16                              ']]},
  ],
}

export const getHighlightColor = (code) => {
  return (0 <= code && code <= 255) ? XTERM256COLORS[code] : "Transparent"
}

export const getLabelColor = (index) => {
  return (WHITE_FONT_INDEX[index] === 1) ? '#fff' : '#000'
}

const WHITE_FONT_INDEX = [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
const XTERM256COLORS = ["#000000", "#800000", "#008000", "#808000", "#000080", "#800080", "#008080", "#c0c0c0", "#808080", "#ff0000", "#00ff00", "#ffff00", "#0000ff", "#ff00ff", "#00ffff", "#ffffff", "#000000", "#00005f", "#000087", "#0000af", "#0000d7", "#0000ff", "#005f00", "#005f5f", "#005f87", "#005faf", "#005fd7", "#005fff", "#008700", "#00875f", "#008787", "#0087af", "#0087d7", "#0087ff", "#00af00", "#00af5f", "#00af87", "#00afaf", "#00afd7", "#00afff", "#00d700", "#00d75f", "#00d787", "#00d7af", "#00d7d7", "#00d7ff", "#00ff00", "#00ff5f", "#00ff87", "#00ffaf", "#00ffd7", "#00ffff", "#5f0000", "#5f005f", "#5f0087", "#5f00af", "#5f00d7", "#5f00ff", "#5f5f00", "#5f5f5f", "#5f5f87", "#5f5faf", "#5f5fd7", "#5f5fff", "#5f8700", "#5f875f", "#5f8787", "#5f87af", "#5f87d7", "#5f87ff", "#5faf00", "#5faf5f", "#5faf87", "#5fafaf", "#5fafd7", "#5fafff", "#5fd700", "#5fd75f", "#5fd787", "#5fd7af", "#5fd7d7", "#5fd7ff", "#5fff00", "#5fff5f", "#5fff87", "#5fffaf", "#5fffd7", "#5fffff", "#870000", "#87005f", "#870087", "#8700af", "#8700d7", "#8700ff", "#875f00", "#875f5f", "#875f87", "#875faf", "#875fd7", "#875fff", "#878700", "#87875f", "#878787", "#8787af", "#8787d7", "#8787ff", "#87af00", "#87af5f", "#87af87", "#87afaf", "#87afd7", "#87afff", "#87d700", "#87d75f", "#87d787", "#87d7af", "#87d7d7", "#87d7ff", "#87ff00", "#87ff5f", "#87ff87", "#87ffaf", "#87ffd7", "#87ffff", "#af0000", "#af005f", "#af0087", "#af00af", "#af00d7", "#af00ff", "#af5f00", "#af5f5f", "#af5f87", "#af5faf", "#af5fd7", "#af5fff", "#af8700", "#af875f", "#af8787", "#af87af", "#af87d7", "#af87ff", "#afaf00", "#afaf5f", "#afaf87", "#afafaf", "#afafd7", "#afafff", "#afd700", "#afd75f", "#afd787", "#afd7af", "#afd7d7", "#afd7ff", "#afff00", "#afff5f", "#afff87", "#afffaf", "#afffd7", "#afffff", "#d70000", "#d7005f", "#d70087", "#d700af", "#d700d7", "#d700ff", "#d75f00", "#d75f5f", "#d75f87", "#d75faf", "#d75fd7", "#d75fff", "#d78700", "#d7875f", "#d78787", "#d787af", "#d787d7", "#d787ff", "#d7af00", "#d7af5f", "#d7af87", "#d7afaf", "#d7afd7", "#d7afff", "#d7d700", "#d7d75f", "#d7d787", "#d7d7af", "#d7d7d7", "#d7d7ff", "#d7ff00", "#d7ff5f", "#d7ff87", "#d7ffaf", "#d7ffd7", "#d7ffff", "#ff0000", "#ff005f", "#ff0087", "#ff00af", "#ff00d7", "#ff00ff", "#ff5f00", "#ff5f5f", "#ff5f87", "#ff5faf", "#ff5fd7", "#ff5fff", "#ff8700", "#ff875f", "#ff8787", "#ff87af", "#ff87d7", "#ff87ff", "#ffaf00", "#ffaf5f", "#ffaf87", "#ffafaf", "#ffafd7", "#ffafff", "#ffd700", "#ffd75f", "#ffd787", "#ffd7af", "#ffd7d7", "#ffd7ff", "#ffff00", "#ffff5f", "#ffff87", "#ffffaf", "#ffffd7", "#ffffff", "#080808", "#121212", "#1c1c1c", "#262626", "#303030", "#3a3a3a", "#444444", "#4e4e4e", "#585858", "#606060", "#666666", "#767676", "#808080", "#8a8a8a", "#949494", "#9e9e9e", "#a8a8a8", "#b2b2b2", "#bcbcbc", "#c6c6c6", "#d0d0d0", "#dadada", "#e4e4e4", "#eeeeee"]
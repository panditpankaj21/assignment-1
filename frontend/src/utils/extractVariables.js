
export const extractVariables = (text) => {
  if (!text) return [];

  const matches = text.matchAll(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g);
  const foundVars = Array.from(matches, (m) => m[1]);

  const reservedWords = new Set([
    "break","case","catch","class","const","continue","debugger","default","delete","do","else",
    "enum","export","extends","false","finally","for","function","if","import","in","instanceof",
    "new","null","return","super","switch","this","throw","true","try","typeof","var","void",
    "while","with","yield","let","await","static","implements","interface","package","private",
    "protected","public","arguments","eval"
  ]);

  return Array.from(new Set(foundVars.filter(v => !reservedWords.has(v))));
};

import { testLetBehavior } from "./const-and-variables/let.js";
import { testConstBehavior } from "./const-and-variables/const.js";
import { testVarBehavior } from "./const-and-variables/var.js";
import { testTemplateStringBehavior } from "./strings/template-string.js";

console.group('# 2. Constants and variables');
testLetBehavior();
testConstBehavior();
testVarBehavior();
console.groupEnd();

console.group('# 3. Strings');
testTemplateStringBehavior();
console.groupEnd();

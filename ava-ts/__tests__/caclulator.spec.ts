import {ExecutionContext, default as test} from "ava";
import {sum} from "../src/calculator";

test('should summarize two numbers', (t: ExecutionContext) => {
  t.is(sum(1, 2,), 3);
});
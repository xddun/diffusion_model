/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as tf from '../index';
import { ALL_ENVS, describeWithFlags } from '../jasmine_util';
import { expectArraysClose } from '../test_util';
describeWithFlags('upperBound', ALL_ENVS, () => {
    it('test1D', async () => {
        // Tests against numpy generated data.
        const NUMPY_DATA = {
            'float32': [
                [
                    -725.0505981445312, -721.4473266601562, -669.2916259765625,
                    -460.14422607421875, -304.4682922363281, -302.20330810546875,
                    -204.64633178710938, -143.817626953125, 243.3914337158203,
                    247.34442138671875, 326.88299560546875, 451.9959716796875,
                    501.62420654296875, 501.8848571777344, 614.7825927734375,
                    766.6121826171875, 791.7724609375, 806.8038330078125,
                    855.0171508789062, 929.6801147460938
                ],
                [
                    -795.3311157226562, -171.88803100585938, 388.8003234863281,
                    -171.64146423339844, -900.0930786132812, 71.79280853271484,
                    327.58929443359375, 29.77822494506836, 889.1895141601562,
                    173.11007690429688
                ],
                [0, 7, 11, 7, 0, 8, 11, 8, 19, 8]
            ],
            'int32': [
                [
                    -968, -867, -751, -725, -655, -346, -285, 54, 246, 381,
                    393, 423, 507, 510, 771, 817, 846, 858, 865, 994
                ],
                [-770, 898, -100, 156, -183, -525, 806, 147, -994, 234],
                [2, 19, 7, 8, 7, 5, 15, 8, 0, 8]
            ]
        };
        for (const dtype of ['float32', 'int32']) {
            const [sortedSequence, values, npAns] = NUMPY_DATA[dtype];
            const result = tf.upperBound(sortedSequence, values);
            expectArraysClose(await result.data(), npAns);
        }
    });
    it('upperBound2D', async () => {
        for (const dtype of ['float32', 'int32']) {
            const sortedSequence = tf.tensor2d([[0, 3, 9, 9, 10], [1, 2, 3, 4, 5]], undefined, dtype);
            const values = tf.tensor2d([[2, 4, 9], [0, 2, 6]], undefined, dtype);
            const correctAns = [[1, 2, 4], [0, 2, 5]];
            const result = tf.upperBound(sortedSequence, values);
            expectArraysClose(await result.data(), correctAns);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXJfYm91bmRfdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvb3BzL3VwcGVyX2JvdW5kX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0IsT0FBTyxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUM3QyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3RCLHNDQUFzQztRQUN0QyxNQUFNLFVBQVUsR0FBRztZQUNqQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsQ0FBQyxpQkFBaUIsRUFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCO29CQUMzRCxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0I7b0JBQzVELENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRyxpQkFBaUI7b0JBQzFELGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLGlCQUFpQjtvQkFDMUQsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUcsaUJBQWlCO29CQUMxRCxpQkFBaUIsRUFBSSxjQUFjLEVBQU0saUJBQWlCO29CQUMxRCxpQkFBaUIsRUFBSSxpQkFBaUI7aUJBQ3ZDO2dCQUNEO29CQUNFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUI7b0JBQzFELENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUI7b0JBQzFELGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQjtvQkFDeEQsa0JBQWtCO2lCQUNuQjtnQkFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNsQztZQUNELE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUcsR0FBRyxFQUFFLEdBQUc7b0JBQ3ZELEdBQUcsRUFBRyxHQUFHLEVBQUcsR0FBRyxFQUFHLEdBQUcsRUFBRyxHQUFHLEVBQUcsR0FBRyxFQUFHLEdBQUcsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7aUJBQ3hEO2dCQUNELENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakM7U0FDRixDQUFDO1FBQ0YsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQVUsRUFBRztZQUNsRCxNQUFNLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFckQsaUJBQWlCLENBQUMsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDNUIsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQVUsRUFBRztZQUNsRCxNQUFNLGNBQWMsR0FDaEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXJELGlCQUFpQixDQUFDLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0ICogYXMgdGYgZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtBTExfRU5WUywgZGVzY3JpYmVXaXRoRmxhZ3N9IGZyb20gJy4uL2phc21pbmVfdXRpbCc7XG5pbXBvcnQge2V4cGVjdEFycmF5c0Nsb3NlfSBmcm9tICcuLi90ZXN0X3V0aWwnO1xuXG5kZXNjcmliZVdpdGhGbGFncygndXBwZXJCb3VuZCcsIEFMTF9FTlZTLCAoKSA9PiB7XG4gIGl0KCd0ZXN0MUQnLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gVGVzdHMgYWdhaW5zdCBudW1weSBnZW5lcmF0ZWQgZGF0YS5cbiAgICBjb25zdCBOVU1QWV9EQVRBID0ge1xuICAgICAgJ2Zsb2F0MzInOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtNzI1LjA1MDU5ODE0NDUzMTIsICAtNzIxLjQ0NzMyNjY2MDE1NjIsIC02NjkuMjkxNjI1OTc2NTYyNSxcbiAgICAgICAgICAtNDYwLjE0NDIyNjA3NDIxODc1LCAtMzA0LjQ2ODI5MjIzNjMyODEsIC0zMDIuMjAzMzA4MTA1NDY4NzUsXG4gICAgICAgICAgLTIwNC42NDYzMzE3ODcxMDkzOCwgLTE0My44MTc2MjY5NTMxMjUsICAyNDMuMzkxNDMzNzE1ODIwMyxcbiAgICAgICAgICAyNDcuMzQ0NDIxMzg2NzE4NzUsICAzMjYuODgyOTk1NjA1NDY4NzUsIDQ1MS45OTU5NzE2Nzk2ODc1LFxuICAgICAgICAgIDUwMS42MjQyMDY1NDI5Njg3NSwgIDUwMS44ODQ4NTcxNzc3MzQ0LCAgNjE0Ljc4MjU5Mjc3MzQzNzUsXG4gICAgICAgICAgNzY2LjYxMjE4MjYxNzE4NzUsICAgNzkxLjc3MjQ2MDkzNzUsICAgICA4MDYuODAzODMzMDA3ODEyNSxcbiAgICAgICAgICA4NTUuMDE3MTUwODc4OTA2MiwgICA5MjkuNjgwMTE0NzQ2MDkzOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTc5NS4zMzExMTU3MjI2NTYyLCAtMTcxLjg4ODAzMTAwNTg1OTM4LCAzODguODAwMzIzNDg2MzI4MSxcbiAgICAgICAgICAtMTcxLjY0MTQ2NDIzMzM5ODQ0LCAtOTAwLjA5MzA3ODYxMzI4MTIsIDcxLjc5MjgwODUzMjcxNDg0LFxuICAgICAgICAgIDMyNy41ODkyOTQ0MzM1OTM3NSwgMjkuNzc4MjI0OTQ1MDY4MzYsIDg4OS4xODk1MTQxNjAxNTYyLFxuICAgICAgICAgIDE3My4xMTAwNzY5MDQyOTY4OFxuICAgICAgICBdLFxuICAgICAgICBbMCwgNywgMTEsIDcsIDAsIDgsIDExLCA4LCAxOSwgOF1cbiAgICAgIF0sXG4gICAgICAnaW50MzInOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtOTY4LCAtODY3LCAtNzUxLCAtNzI1LCAtNjU1LCAtMzQ2LCAtMjg1LCA1NCwgIDI0NiwgMzgxLFxuICAgICAgICAgIDM5MywgIDQyMywgIDUwNywgIDUxMCwgIDc3MSwgIDgxNywgIDg0NiwgIDg1OCwgODY1LCA5OTRcbiAgICAgICAgXSxcbiAgICAgICAgWy03NzAsIDg5OCwgLTEwMCwgMTU2LCAtMTgzLCAtNTI1LCA4MDYsIDE0NywgLTk5NCwgMjM0XSxcbiAgICAgICAgWzIsIDE5LCA3LCA4LCA3LCA1LCAxNSwgOCwgMCwgOF1cbiAgICAgIF1cbiAgICB9O1xuICAgIGZvciAoY29uc3QgZHR5cGUgb2YgWydmbG9hdDMyJywgJ2ludDMyJ10gYXMgY29uc3QgKSB7XG4gICAgICBjb25zdCBbc29ydGVkU2VxdWVuY2UsIHZhbHVlcywgbnBBbnNdID0gTlVNUFlfREFUQVtkdHlwZV07XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRmLnVwcGVyQm91bmQoc29ydGVkU2VxdWVuY2UsIHZhbHVlcyk7XG5cbiAgICAgIGV4cGVjdEFycmF5c0Nsb3NlKGF3YWl0IHJlc3VsdC5kYXRhKCksIG5wQW5zKTtcbiAgICB9XG4gIH0pO1xuXG4gIGl0KCd1cHBlckJvdW5kMkQnLCBhc3luYyAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBkdHlwZSBvZiBbJ2Zsb2F0MzInLCAnaW50MzInXSBhcyBjb25zdCApIHtcbiAgICAgIGNvbnN0IHNvcnRlZFNlcXVlbmNlID1cbiAgICAgICAgICB0Zi50ZW5zb3IyZChbWzAsIDMsIDksIDksIDEwXSwgWzEsIDIsIDMsIDQsIDVdXSwgdW5kZWZpbmVkLCBkdHlwZSk7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB0Zi50ZW5zb3IyZChbWzIsIDQsIDldLCBbMCwgMiwgNl1dLCB1bmRlZmluZWQsIGR0eXBlKTtcbiAgICAgIGNvbnN0IGNvcnJlY3RBbnMgPSBbWzEsIDIsIDRdLCBbMCwgMiwgNV1dO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSB0Zi51cHBlckJvdW5kKHNvcnRlZFNlcXVlbmNlLCB2YWx1ZXMpO1xuXG4gICAgICBleHBlY3RBcnJheXNDbG9zZShhd2FpdCByZXN1bHQuZGF0YSgpLCBjb3JyZWN0QW5zKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXX0=
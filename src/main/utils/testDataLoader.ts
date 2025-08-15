import * as fs from 'fs';
import * as path from 'path';

export class TestDataLoader {
static loadJSON<T>(fileName: string): T {
const filePath = path.resolve(__dirname, '../../test/resources/testData', fileName);
const fileData = fs.readFileSync(filePath, 'utf-8');
return JSON.parse(fileData) as T;
}
}
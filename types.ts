export interface TestCase {
  id: string;
  scenario: string;
  expectedResult: string;
  type: 'Positive' | 'Negative';
}

export interface ModuleData {
  name: string;
  cases: TestCase[];
}

export type TabType = 'Customer' | 'Prospect' | 'Quotation';
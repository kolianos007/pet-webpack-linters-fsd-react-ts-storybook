export const localStorageMockForTest = () => {
  const store: Record<string, string> = {};

  const localStorageMock = {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => (store[key] = value)),
    removeItem: jest.fn((key: string) => delete store[key]),
  };

  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  return localStorageMock;
};

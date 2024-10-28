// setupTests.js
import "@testing-library/jest-dom";

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

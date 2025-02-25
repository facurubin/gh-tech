import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  useSearchParams: () => ({
    get: () => jest.fn(),
  }),
}));

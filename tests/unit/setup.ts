import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => { cleanup(); vi.restoreAllMocks() })
vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} unobserve() {} })

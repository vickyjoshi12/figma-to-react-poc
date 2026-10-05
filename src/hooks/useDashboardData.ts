import { useEffect, useState } from 'react'
import { getDashboardData } from '../services/dashboardService'
import type { DashboardData } from '../types/dashboard'

interface DashboardDataState {
  data: DashboardData | null
  isLoading: boolean
  error: Error | null
}

export function useDashboardData(): DashboardDataState {
  const [state, setState] = useState<DashboardDataState>({
    data: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    let isActive = true

    getDashboardData()
      .then((data) => {
        if (isActive) {
          setState({ data, isLoading: false, error: null })
        }
      })
      .catch((error: unknown) => {
        if (isActive) {
          setState({
            data: null,
            isLoading: false,
            error: error instanceof Error ? error : new Error(String(error)),
          })
        }
      })

    return () => {
      isActive = false
    }
  }, [])

  return state
}

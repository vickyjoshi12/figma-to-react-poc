import { useDashboardData } from '../hooks/useDashboardData'
import DashboardContent from '../features/dashboard/components/DashboardContent'
import DashboardLayout from '../layouts/DashboardLayout'

function DashboardPage() {
  const { data, error, isLoading } = useDashboardData()

  return (
    <DashboardLayout navigationItems={data?.navigationItems ?? []}>
      {data ? (
        <DashboardContent data={data} />
      ) : (
        <p aria-live="polite" className="dashboard-data-message">
          {isLoading ? 'Loading dashboard…' : `Unable to load dashboard data: ${error?.message ?? 'Unknown error'}`}
        </p>
      )}
    </DashboardLayout>
  )
}

export default DashboardPage

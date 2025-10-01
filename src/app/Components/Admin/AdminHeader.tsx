'use client'

export default function AdminHeader() {
  return (
    <header className="bg-white shadow-sm border-bottom">
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <h1 className="h4 mb-0 text-dark">Image Management Dashboard</h1>
          </div>
          
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-primary">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

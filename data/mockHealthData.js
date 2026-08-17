// Local mock data source for the health-check page.
// No external API is used here — the assignment spec does not require
// one, and this file stands in for a future backend/API response shape.
// Each record represents the status of a system area the real app will
// eventually depend on (e.g. donor records, blood bank inventory sync).

export const mockHealthData = [
  { id: "donor-data", label: "Donor Records Source", status: "ok" },
  { id: "blood-bank-data", label: "Blood Bank Inventory Source", status: "ok" },
  { id: "district-list", label: "District Reference Data", status: "ok" },
  { id: "blood-group-list", label: "Blood Group Reference Data", status: "ok" },
];

// Simulates an async fetch so the page demonstrates rendering
// asynchronously-loaded data, as required by the assignment, without
// calling out to any real external service.
export async function fetchMockHealthData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockHealthData), 50);
  });
}

const MOCK_API_DELAY_MS = 700;

export async function simulateApiDelay() {
  // Artificial delay used only to simulate realistic API/database latency in this demo project.
  await new Promise((resolve) => setTimeout(resolve, MOCK_API_DELAY_MS));
}

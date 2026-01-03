import ExampleClient from './ExampleClient';

export default function ExamplePage() {
  // Server-side logic (e.g., SEO, initial data fetching) would happen here.
  return (
    <div className="p-8">
      <h2 className="mb-4 text-xl text-gray-500">Server Page Wrapper</h2>
      <ExampleClient />
    </div>
  );
}

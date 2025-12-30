import { Link } from 'react-router-dom';

function Home({ user }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Minimal Full-Stack Boilerplate
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          SQLite database, Express.js backend, React frontend with Tailwind CSS.
          Clean, minimal, and ready to build upon.
        </p>

        {!user ? (
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Sign In
            </Link>
          </div>
        ) : (
          <Link
            to="/dashboard"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Go to Dashboard
          </Link>
        )}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-3xl mb-4">🗄️</div>
          <h3 className="text-lg font-semibold mb-2">SQLite Database</h3>
          <p className="text-gray-600 text-sm">Lightweight, file-based database perfect for development and small applications.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-lg font-semibold mb-2">Express.js API</h3>
          <p className="text-gray-600 text-sm">Fast, minimalist backend with JWT authentication and RESTful endpoints.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-3xl mb-4">⚛️</div>
          <h3 className="text-lg font-semibold mb-2">React Frontend</h3>
          <p className="text-gray-600 text-sm">Modern React with hooks, routing, and clean component architecture.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-3xl mb-4">🎨</div>
          <h3 className="text-lg font-semibold mb-2">Tailwind CSS</h3>
          <p className="text-gray-600 text-sm">Utility-first CSS framework for rapid UI development.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
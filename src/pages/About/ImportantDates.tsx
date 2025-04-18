
import { CalendarClock } from "lucide-react";

const ImportantDates = () => {
  const dates = [
    {
      event: "Paper Submission Deadline",
      date: "May 15, 2025",
      description: "Last date to submit full papers for review"
    },
    {
      event: "Notification of Acceptance",
      date: "June 30, 2025",
      description: "Authors will be notified about paper acceptance"
    },
    {
      event: "Early Bird Registration",
      date: "July 15, 2025",
      description: "Deadline for early bird registration with discounted rates"
    },
    {
      event: "Camera Ready Submission",
      date: "August 1, 2025",
      description: "Submission of final camera-ready papers"
    },
    {
      event: "Conference Dates",
      date: "September 15-17, 2025",
      description: "Main conference days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Important Dates</h1>
          <p className="text-lg text-gray-600">
            Mark your calendar for these key deadlines and events
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {dates.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <CalendarClock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.event}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{item.date}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;

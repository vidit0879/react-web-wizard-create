
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const scheduleData = {
  "day1": [
    {
      time: "9:00 - 10:30",
      title: "Opening Ceremony & Keynote Address",
      speaker: "Dr. Sarah Johnson",
      location: "Main Hall",
      type: "keynote"
    },
    {
      time: "11:00 - 12:30",
      title: "Next Generation Photovoltaic Materials",
      speaker: "Prof. Michael Chang",
      location: "Hall A",
      type: "presentation"
    },
    {
      time: "13:30 - 15:00",
      title: "Solar Policy Development: Global Perspectives",
      speaker: "Panel Discussion",
      location: "Hall B",
      type: "panel"
    },
    {
      time: "15:30 - 17:00",
      title: "Solar Integration with Smart Grids",
      speaker: "Carlos Rodriguez",
      location: "Workshop Room 1",
      type: "workshop"
    }
  ],
  "day2": [
    {
      time: "9:00 - 10:30",
      title: "Solar for Developing Nations",
      speaker: "Dr. Amara Osei",
      location: "Main Hall",
      type: "keynote"
    },
    {
      time: "11:00 - 12:30",
      title: "Storage Solutions for Solar Energy",
      speaker: "Dr. James Wilson",
      location: "Hall A",
      type: "presentation"
    },
    {
      time: "13:30 - 15:00",
      title: "Accelerating Commercial Solar Adoption",
      speaker: "Industry Panel",
      location: "Hall B",
      type: "panel"
    },
    {
      time: "15:30 - 17:00",
      title: "Solar Installation Certification Workshop",
      speaker: "Technical Team",
      location: "Workshop Room 2",
      type: "workshop"
    }
  ],
  "day3": [
    {
      time: "9:00 - 10:30",
      title: "Future of Solar Technology",
      speaker: "Prof. Elena Rodriguez",
      location: "Main Hall",
      type: "keynote"
    },
    {
      time: "11:00 - 12:30",
      title: "Solar in Architecture and Urban Planning",
      speaker: "Architect David Chen",
      location: "Hall A",
      type: "presentation"
    },
    {
      time: "13:30 - 15:00",
      title: "Investment Opportunities in Solar Energy",
      speaker: "Finance Panel",
      location: "Hall B",
      type: "panel"
    },
    {
      time: "15:30 - 17:00",
      title: "Closing Ceremony & Awards",
      speaker: "Organizing Committee",
      location: "Main Hall",
      type: "special"
    }
  ]
};

const ProgramSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conference Program</h2>
          <div className="w-24 h-1 bg-solar-yellow mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Explore our comprehensive program of keynotes, workshops, panels, and networking events
          </p>
        </div>
        
        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="day1">Day 1 - April 14</TabsTrigger>
            <TabsTrigger value="day2">Day 2 - April 15</TabsTrigger>
            <TabsTrigger value="day3">Day 3 - April 16</TabsTrigger>
          </TabsList>
          
          {Object.keys(scheduleData).map((day) => (
            <TabsContent value={day} key={day} className="space-y-4">
              {scheduleData[day].map((event, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-solar-blue">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-solar-blue" />
                        <span className="text-sm font-medium text-solar-blue">{event.time}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center mb-3">
                        <Users className="w-4 h-4 mr-2 text-gray-600" />
                        <span className="text-gray-600">{event.speaker}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-3 md:mt-0">
                      <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className={`text-xs font-semibold inline-block py-1 px-2 rounded-full uppercase ${
                      event.type === 'keynote' ? 'bg-solar-yellow text-gray-900' :
                      event.type === 'panel' ? 'bg-solar-blue text-white' :
                      event.type === 'workshop' ? 'bg-solar-green text-white' :
                      'bg-gray-200 text-gray-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-10">
          <button className="bg-solar-blue hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
            Download Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

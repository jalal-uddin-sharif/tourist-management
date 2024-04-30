import React from "react";

const Traveltips = () => {
  return (
    <div className="container mx-auto">
      <div className="border-l-2  border-success my-6 px-3">
        <h1 className="text-3xl font-medium">Travel Tips</h1>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Packing Tips --> */}
          <li class="bg-white shadow-md p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Packing Tips
            </h3>
            <p class="text-gray-700">
            Pack light, pack smart! Consider the destination, weather, and activities planned. Choose versatile clothing items that can be mixed and matched. Don't forget essentials like chargers, medications, and travel documents. Roll clothes to save space and use packing cubes for organization. Remember, less is often more when it comes to packing!
            </p>
          </li>
          {/* <!-- Health & Safety --> */}
          <li class="bg-white shadow-md p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Health & Safety
            </h3>
            <p class="text-gray-700">
            Prioritize your well-being while traveling. Stay hydrated, get enough rest, and eat nutritious meals. Research local health risks and consider necessary vaccinations or medications. Always carry a basic first aid kit. Be aware of your surroundings, trust your instincts, and avoid risky situations. Keep important documents secure and have emergency contacts handy. Your safety and health are paramount wherever your journey takes you.
            </p>
          </li>
          <li class="bg-white shadow-md p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Communication Tips
            </h3>
            <p class="text-gray-700">
            Effective communication can enhance your travel experience. Learn basic phrases in the local language to show respect and make connections. Use translation apps for easy communication. Consider purchasing a local SIM card or international roaming plan for reliable communication. Keep important contact information handy, including addresses, emergency contacts, and embassy details. Stay connected with loved ones through messaging apps or social media to share your adventures and stay informed.
            </p>
          </li>
        </ul>
      
    </div>
  );
};

export default Traveltips;

import React from 'react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    position: 'CEO',
    bio: 'John Doe is the visionary leader behind our company, bringing years of experience in business management and strategic planning.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    bio: 'Jane Smith leads our technology team with a focus on innovation and technical excellence, ensuring our solutions are cutting-edge.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Michael Johnson',
    position: 'COO',
    bio: 'Michael Johnson oversees our operations, ensuring efficiency and quality in all aspects of our business operations.',
    image: 'https://via.placeholder.com/150',
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-2">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

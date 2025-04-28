import React from 'react';

interface AgencyCardProps {
  name: string;
  description: string;
  website: string;
  phone: string;
  email: string;
  address: string;
}

const AgencyCard: React.FC<AgencyCardProps> = ({
  name,
  description,
  website,
  phone,
  email,
  address,
}) => {
  return (
    <div className="agency-card p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="contact-info mt-2">
        <p>
          <strong>Website:</strong> <a href={website}>{website}</a>
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
    </div>
  );
};

export default AgencyCard;

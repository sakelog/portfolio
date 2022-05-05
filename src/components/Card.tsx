import React from 'react';

export const CardHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="border-b border-gray py-2 overflow-hidden">
    {children}
  </div>
);

export const CardBody = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="p-2 row-span-2 overflow-hidden">
    {children}
  </div>
);

export const Card = ({
  children: [header, body],
}: {
  children: [
    header: React.ReactNode,
    body: React.ReactNode
  ];
}) => (
  <section
    className="border-2 border-gray rounded-md p-4 
    overflow-hidden"
  >
    {header}
    {body}
  </section>
);

export default { Card, CardHeader, CardBody };

import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

// RenderLeader Functional Component

function RenderLeader(props) {
    const leaders = props.leaders.map((leader) => {
        return (
            <Media>
                <Media left href="#">
                  <Media object data-src={leader.image} alt={leader.name} />
                </Media>
            <Media body>
              <Media heading>
                {leader.name}
              </Media>
            </Media>
          </Media>
        );
    })
    return(
        {leaders}
    );
}
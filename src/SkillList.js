import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

const SkillList = (props) => {
  return (
    <CardColumns>

      <Card>
        <CardImg top width="10%" src="/images/nodejs.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="10%" src="/images/nodejs.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>


      <Card>
        <CardImg top width="10%" src="/images/nodejs.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>


      <Card>
        <CardImg top width="10%" src="/images/nodejs.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>


      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>


      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>


      <Card>
        <CardImg top width="10%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        </CardBody>
      </Card>


      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>

    </CardColumns>
  );
};

export default SkillList;
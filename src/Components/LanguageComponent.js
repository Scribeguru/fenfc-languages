import { React, useState } from 'react'
import { Row, Col, Collapse, UncontrolledCollapse, Button, Form, Input } from 'reactstrap';


export default function Language() {

  const [isCollapsed, setCollapsed] = useState(false);

  function toggleCollapse() {
    setCollapsed(isCollapsed => isCollapsed = !isCollapsed);
  }

  function insertVids() {
    let s1 = [];
    let title = ['Edna Elias – Inuinnaqtun', 'Roman Young – Swampy Cree', 'Emily EdenShaw – Haida', 'Karliin Aariak – Inuktut', 'Lily Mckay-Carriere and Bertha Mckay – Swampy Cree Children’s Songs', 'Brennen Ferguson – Tuscarora', 'Gloria and Bill Williams – Onondaga', 'Ryder Cote – Algonquin', 'Lotunt Honyust – Oneida', 'Damian Webster – Seneca', 'Tahnee Bennett – Mohawk', 'Andrea Doolan and Herb Morvan – Nisga’a', 'Jacob Doreen – Mohawk, Cayuga, and Onondaga', 'His Honour the Honourable Russ Mirasty, Lieutenant Governor of Saskatchewan and Her Honour, Donna Mirasty – Swampy Cree and Woodland Cree', 'Elizabeth Fran Henry – Cayuga', 'Angeline King – Ojibwe', 'Aiyana Twigg – Ktunaxa and Blackfoot', 'Rory Housty – Heiltsuk', 'Nicole Norris – Hul’q’umi’num', 'Chief Ian Campbell – Squamish', 'Kim, Megan, Marissa – FENFC Seneca Language Learners', 'Sandy, Laura, Schuyler, Calvin, Marilu and Gajijagw – FENFC Tuscarora Language Learners', 'Chriset, Brytnee, Jody and Dawn – FENFC Mohawk Language Learners', 'Dean, Catherine, Emma and Nessa – FENFC Ojibwe Language Learners', 'Daniel, Deb, Keri, Karen, Jija, and Juliete – FENFC Mohawk Language Learners group 2', 'Audra Moloney and George Paul – Mi’kmaq', 'Her Excellency the Right Honourable Mary Simon, Governor General of Canada – Inuktitut'];

    for (let i = 1; i <= title.length; i++) {

      s1.push(
        <>
          <hr />
          <div className='episode my-5' id={`toggler${i}`}>
            <u><h5>S1E{i}</h5></u>
            <br />
            <h4>{title[i - 1]}</h4>
          </div>
          <UncontrolledCollapse toggler={`#toggler${i}`}>
            <video className='img-fluid' src={`./language-speaker-series-2022/S01e${i}.mp4`} type='video/mp4' preload='none' poster='/DILL2.png' controls />
          </UncontrolledCollapse>
        </>
      );
    }
    return s1.map(vid => {
      return <span key={vid.id}>{vid}</span>;
    });
  }


  return (
    <>
      <div className='main-container'>
        <Row>
          <Col className='sub-header text-center'>
            <h2><em>Fort Erie Native Friendship Centre Presents</em></h2>
            <h1>FENFC Spotlight Series on Indigenous Languages and Speakers</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              In Season One of this spotlight series there are 27 episodes, 20 different Indigenous Languages, and over 30 Language Speakers and Learners. This spotlight series has been created in recognition of <a href='https://www.un.org/development/desa/indigenouspeoples/indigenous-languages.html' target='_blank'>United Nations Decade of Indigenous Languages 2022-2032</a>, and shows that the beautiful Indigenous Languages are still alive, albeit threatened.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center my-5'>
            <video className='img-fluid' src='./language-speaker-series-2022/welcome.mp4' type='video/mp4' poster='/welcomeposter.png' controls />
          </Col>
        </Row>
        <Row className='text-center pb-5'>
          <Col>
            <Button className='btn btn-xl mb-3' color='light' onClick={toggleCollapse}>Season One</Button>
            <Collapse isOpen={isCollapsed}>
              {insertVids()}
            </Collapse>
            <hr />
          </Col>
        </Row>
        <Form action="https://formsubmit.co/language2@fenfc.org" method="POST" className='mb-5 text-center'>
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <h5 className='text-start'>Leave us a comment</h5>
          <Row>
            <Col sm='5'>
              <Input type="email" name="email" placeholder='Your email here' required />
            </Col>
            <Col sm='5'>
              <Input type="text" name="comment" placeholder='Your comment here' required />
            </Col>
            <Col className='text-start'>
              <Button type="submit" color="light">Send</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <footer>
        <Row className='text-center'>
          <Col md='3' className='mt-5'>
            <a href='https://www.fnccec.ca/' target='_blank'><img className='img-fluid FNCCEC' src='/FNCCEC.png' /></a>
          </Col>
          <Col md='3' className='mt-5'>
            <a href='https://www.nibtrust.ca/' target='_blank'><img className='img-fluid NIB' src='/NIBtrust.png' /></a>
          </Col>
          <Col md='3' className='mt-5'>
            <a href='https://ofifc.org/' target='_blank'><img className='img-fluid OFIFC' src='/OFIFC.jpg' /></a>
          </Col>
          <Col md='3' className='mt-5'>
            <a href='https://www.canada.ca/en.html' target='_blank'><img className='img-fluid Canada' src='/Canada.jpg' /></a>
          </Col>
        </Row>
      </footer>
    </>
  );
}
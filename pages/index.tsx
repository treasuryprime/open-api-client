import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import MethodChip from '../components/MethodChip'
import Panel from '../components/Panel'
import ApiDoc from './api-section.mdx';
import EndpointMethod from '../components/EndpointMethod'
import SplitSection from '../components/SplitSection'
import Left from '../components/Left'
import Right from '../components/Right'
import Parameter from '../components/Parameter'
import EndpointDoc from './endpoint.mdx';
import ParameterDoc from './parameter.mdx';
import RequestBodySectionDoc from './request-body-section.mdx';
import ParametersSectionDoc from './parameters-section.mdx';

import data from '../public/data.json';

const DocsPage = (props: any) => {
  const components = {
    MethodChip,
    Panel,
    EndpointMethod,
    SplitSection,
    Left,
    Right,
    Parameter,
    EndpointDoc,
    ParameterDoc,
    RequestBodySectionDoc,
    ParametersSectionDoc,
  };

  return <ApiDoc components={components} path={props.path} data={props.data} />;
}

const Home: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      {Object.entries(data.paths).map(([path, data], index) => <DocsPage key={index} path={path} data={data} />)}
    </div>
  )
}

export default Home

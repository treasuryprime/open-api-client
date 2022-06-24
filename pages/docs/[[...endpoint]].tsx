import { useRouter } from 'next/router';

import MethodChip from '../../components/MethodChip'
import Panel from '../../components/Panel'
import ApiDoc from '../api-section.mdx';
import EndpointMethod from '../../components/EndpointMethod'
import SplitSection from '../../components/SplitSection'
import Left from '../../components/Left'
import Right from '../../components/Right'
import Parameter from '../../components/Parameter'
import EndpointDoc from '../endpoint.mdx';
import ParameterDoc from '../parameter.mdx';
import RequestBodySectionDoc from '../request-body-section.mdx';
import ParametersSectionDoc from '../parameters-section.mdx';

import styles from '../../styles/Home.module.css'

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

import data from '../../public/data.json';
import Navigation from '../../components/Navigation';

const Page = () => {
  const router = useRouter();
  const { endpoint } = router.query;
  const endpointDocs = Object.entries(data.paths).find((entry) => entry[0] === endpoint);
  console.log(endpointDocs);
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        {endpointDocs && <DocsPage path={endpoint} data={endpointDocs[1]} />}
      </div>
    </>
  );
}

export default Page;
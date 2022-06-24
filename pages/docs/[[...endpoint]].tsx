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

import * as jsxRuntime from 'react/jsx-runtime';

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
import { compile, run } from '@mdx-js/mdx';
import { useEffect, useState } from 'react';

const convertMarkdown = async (data: Object) => {
  const result = {} as any;
  for (const [key, value] of Object.entries(data)) {
    if (key === 'summary' || key === 'description') {
      const { default: Content } = await run(await compile(value, { outputFormat: 'function-body' }), jsxRuntime);
      result[key] = Content;
    } else if (value !== null && typeof value === 'object') {
      result[key] = await convertMarkdown(value);
    } else {
      result[key] = value;
    }
  };
  return result;
}

const Page = () => {
  const [Test, setSet] = useState({} as any);
  const router = useRouter();
  const { endpoint } = router.query;
  const endpointDocs = Object.keys(Test).length > 2 && Object.entries(Test.paths).find((entry) => entry[0] === endpoint);

  useEffect(() => {
    const getTest = async () => {
      setSet(await convertMarkdown(data));
    };
    getTest();
  }, [data]);

  console.log(Test);

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
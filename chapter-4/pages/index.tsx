import Question from "./questions";
import { getServerSideProps as getServerSidePropsQuestions } from "./questions";
export function getServerSideProps(context: any) {
  return getServerSidePropsQuestions(context);
}
export default function Home(props: any) {
  return <Question {...props} />;
}

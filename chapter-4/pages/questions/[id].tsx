import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Question } from ".";
import Card from "../../components/card";

const QuestionDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

function QuestionDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState<Question>({} as Question);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
      );

      const result = await data.json();

      if (result) {
        setQuestion(result.items[0]);
        setLoading(false);
      }
    }
    id && fetchData();
  }, [id]);
  return (
    <>
      <Head>
        <title>{question.title}</title>
      </Head>
      <QuestionDetailContainer>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <Card
            title={question.title}
            views={question.view_count}
            answers={question.answer_count}
          />
        )}
      </QuestionDetailContainer>
    </>
  );
}

export default QuestionDetail;

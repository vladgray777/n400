import questions from '../questions.json';

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const { questionId, answer } = await request.json();

    const question = questions[questionId];

    if (!question) {
      return new Response(
        JSON.stringify({ error: 'Question not found' }),
        { headers: { 'Content-Type': 'application/json' }, status: 404 }
      );
    }

    // Check if the provided answer is in the array of acceptable answers
    const correct = question.answers.some(a => a.toLowerCase() === answer.toLowerCase());

    return new Response(JSON.stringify({ correct }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

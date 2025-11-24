import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// In a real scenario, ensure process.env.API_KEY is replaced by the bundler or environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = 'gemini-2.5-flash';

const SINDY_SYSTEM_INSTRUCTION = `
당신은 '신디(Sindy)'입니다. 부부 멘탈케어 플랫폼의 따뜻하고 공감 능력 뛰어난 AI 상담사입니다.
당신의 역할은 사용자의 부부 관계 고민, 육아 스트레스, 커플 갈등 등을 들어주고, 공감하며, 적절한 신디의 서비스(상담, 셀프케어, 워크북)를 추천해주는 것입니다.

페르소나:
- 말투: 부드럽고 다정하며 존댓말을 사용합니다. (~해요, ~인가요?)
- 태도: 판단하지 않고 먼저 공감합니다. 해결책을 바로 제시하기보다 감정을 읽어주세요.
- 핵심 가치: "관계는 배울 수 있고, 회복될 수 있어요."

답변 가이드:
1. 사용자의 감정에 먼저 공감해주세요. (예: "많이 속상하셨겠어요.", "그동안 정말 힘드셨군요.")
2. 너무 길지 않게, 대화하듯이 3~4문장 정도로 답변하세요.
3. 심각한 갈등 상황이라면 '신디 PRO 부부상담'을 추천하세요.
4. 가벼운 자기 점검이 필요해 보이면 '무료 심리테스트'나 '신디 GYM 셀프케어'를 추천하세요.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SINDY_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return result.text || "죄송해요, 잠시 연결이 원활하지 않아요. 다시 말씀해 주시겠어요?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "지금은 대화를 이어나가기 조금 어려워요. 잠시 후 다시 시도해 주세요.";
  }
};
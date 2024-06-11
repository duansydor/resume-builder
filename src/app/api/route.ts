import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyAaFRJRRUuwL2lLF0tNE2WKtfMAq6MPqPs");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: { temperature: 0.7, maxOutputTokens: 100 } });

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {

  const data = await request.json()
   const role = data.role
   const industry = data.industry
   const skills = data.skills
  const locale = data.locale

  const english = `Write ONLY a concise and impactful career goal statement for a resume. 
             I am applying for roles as a ${role} in the ${industry} industry. 
             My key skills include ${skills}. DO NOT INCLUDE ANY INTRODUCTION OR CONCLUSION.`;
  const portuguese = `Escreva em portugês APENAS uma declaração de objetivo de carreira concisa e impactante para um currículo. 
  Estou me candidatando a funções como ${role} na indústria de ${industry}. 
  Minhas principais habilidades incluem ${skills}. NÃO INCLUA QUALQUER INTRODUÇÃO OU CONCLUSÃO.`;


  const prompt = locale === 'pt'?portuguese:english
  const response = await model.generateContent([prompt]);
  const goalStatement = response; 
  return NextResponse.json({ goal:goalStatement }, { status: 200 });
}
import { NextResponse } from 'next/server';

const loveMessages = [
  "Amo seu olhar apaixonado, seu sorriso contagiante e sua voz que me faz te amar cada vez mais.",
  "Seu cuidado comigo é tão grande que me deixa cada vez mais apaixonado por você.",
  "Você é meu porto seguro, onde eu posso descansar e me sentir amado.",
  "A distância só faz aumentar o amor que sinto por você.",
  "Quando olho seu sorriso, meu coração acelera e meu tempo para. Amo você.",
  "Você é o amor da minha vida, e cada dia que passa só confirma isso.",
  "Você é a única pessoa do mundo que me faz sorrir todos os dias.",
  "Te darei todo meu amor, você é o meu mundo.",
  "Quanto te vi na USP a primeira vez, já senti que era algo muito especial. Eu te amo!",
  "Quando estou com você, sinto que tudo é possível. Você é a minha força.",
  "Mesmo com a distância, você está sempre no meu coração. Eu amo você!",
  "Você é minha companheira, minha melhor amiga e meu grande amor, tudo junto!",
  "Cada momento com você é um presente enviado por Deus. Eu te amo!",
  "Todos os dias penso em você e como será o nosso encontro e futuro juntos. Eu te amo!",
  "Meu amor por você é infinito. Irei te amar cada vez mais.",
  "Todo momento sinto vontade de te fazer feliz, e te ver sorrir é o melhor presente do mundo.",
  "Cada dia que passa, tenho mais certeza que você é o amor da minha vida.",
  "Obrigado por aparecer na minha vida, sempre rezei a Deus para me dar a oportunidade de te conhecer. Eu te amo!",
  "Meu amor por você é maior do que qualquer dificuldade que aparecer, vamos enfrentar tudo juntos!",
  "Você é meu maior tesouro, e eu vou te amar cada vez mais.",
];

export async function GET() { 
    const today = new Date();
    const endDate = new Date(process.env.NEXT_PUBLIC_MEETING_DATE || new Date());
    
    // Calcula a diferença em dias entre hoje e a data do encontro
    const timeDiff = endDate.getTime() - today.getTime();
    const daysUntilMeeting = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
    
    // Usa o número de dias restantes para determinar o índice da mensagem
    const messageIndex = daysUntilMeeting % loveMessages.length;

    return NextResponse.json({
      message: loveMessages[messageIndex],
      daysUntilMeeting: daysUntilMeeting,
    });
} 
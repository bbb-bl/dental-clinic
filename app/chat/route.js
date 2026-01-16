// app/api/chat/route.js
// This handles incoming chat messages and responds using OpenRouter + Claude
// For Next.js 15 App Router

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { clientId, conversationId, message, metadata } = body;

    // Validate required fields
    if (!clientId || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get client configuration
    const clientConfig = getClientConfig(clientId);

    // Build conversation history
    // In production, you'd fetch this from Firebase
    const conversationHistory = [];

    // Generate AI response using OpenRouter
    const aiResponse = await getAIResponse(clientConfig, message, conversationHistory);

    // Generate or use existing conversation ID
    const newConversationId = conversationId || generateConversationId();

    // In production, save to Firebase here:
    // await saveConversationToFirebase(newConversationId, clientId, message, aiResponse, metadata);

    // Check if lead is qualified
    const isQualified = checkIfQualified(message, aiResponse);

    // Return response
    return NextResponse.json({
      response: aiResponse,
      conversationId: newConversationId,
      qualified: isQualified
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

// Get client configuration
// TODO: Replace this with Firebase fetch
function getClientConfig(clientId) {
  // Default configuration for BrightSmile Dental
  const configs = {
    'test': {
      businessName: "BrightSmile Dental Clinic",
      industry: "Dental Practice",
      services: [
        "General Checkup & Cleaning ($150)",
        "Teeth Whitening Professional ($500)",
        "Dental Crowns & Bridges ($1,200-2,000)",
        "Root Canal Treatment ($800-1,500)",
        "Dental Implants ($2,500-4,000)",
        "Invisalign Clear Aligners ($4,000-6,000)",
        "Emergency Dental Care ($200+)"
      ],
      location: "123 Dental Street, Healthcare District",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
      bookingUrl: "https://dental-clinic-blush.vercel.app",
      tone: "Friendly, professional, and reassuring"
    },
    'default': {
      businessName: "BrightSmile Dental",
      industry: "Dental Clinic",
      services: ["General Checkup", "Teeth Whitening", "Dental Implants"],
      location: "Your Location",
      hours: "Mon-Fri 9am-5pm",
      bookingUrl: "https://dental-clinic-blush.vercel.app",
      tone: "Professional and helpful"
    }
  };

  return configs[clientId] || configs['default'];
}

// Generate AI response using OpenRouter
async function getAIResponse(clientConfig, userMessage, conversationHistory) {
  // Build system prompt
  const systemPrompt = `You are a friendly AI assistant for ${clientConfig.businessName}, a ${clientConfig.industry}.

BUSINESS DETAILS:
- Services: ${clientConfig.services.join(', ')}
- Location: ${clientConfig.location}
- Hours: ${clientConfig.hours}
- Website: ${clientConfig.bookingUrl}

YOUR ROLE:
1. Welcome patients warmly and professionally
2. Answer questions about dental services, pricing, location, and hours
3. Ask ONE qualifying question at a time to understand their needs
4. When they show interest, encourage them to book: "You can schedule an appointment directly at ${clientConfig.bookingUrl}"
5. Use a ${clientConfig.tone} tone

RULES:
- Keep responses to 2-3 sentences maximum
- Be helpful and informative but never pushy
- If they're ready to book, provide the website link
- For pricing questions, share the price ranges provided
- Always prioritize patient comfort and care

Respond naturally as a caring dental receptionist would.`;

  // Build messages array
  const messages = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory,
    { role: 'user', content: userMessage }
  ];

  try {
    // Call OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://dental-clinic-blush.vercel.app',
        'X-Title': 'BrightSmile Dental Chatbot'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3.5-sonnet', // Using Claude 3.5 Sonnet
        messages: messages,
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenRouter API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    
    // Extract the response text
    const aiMessage = data.choices?.[0]?.message?.content;
    
    if (!aiMessage) {
      throw new Error('No response from AI');
    }

    return aiMessage;

  } catch (error) {
    console.error('OpenRouter API Error:', error);
    // Fallback response if API fails
    return "Thanks for reaching out to BrightSmile Dental! We're experiencing high volume right now. Please call us at your convenience or visit our website to book an appointment.";
  }
}

// Check if conversation indicates a qualified lead
function checkIfQualified(userMessage, aiResponse) {
  const combinedText = (userMessage + ' ' + aiResponse).toLowerCase();
  
  // Check for service interest keywords
  const hasServiceInterest = 
    combinedText.includes('interested') || 
    combinedText.includes('book') || 
    combinedText.includes('appointment') ||
    combinedText.includes('schedule') ||
    combinedText.includes('need') ||
    combinedText.includes('want') ||
    combinedText.includes('whitening') ||
    combinedText.includes('cleaning') ||
    combinedText.includes('implant') ||
    combinedText.includes('checkup');
  
  // Check for timing keywords
  const hasTiming = 
    combinedText.includes('today') || 
    combinedText.includes('tomorrow') || 
    combinedText.includes('next week') ||
    combinedText.includes('monday') ||
    combinedText.includes('tuesday') ||
    combinedText.includes('wednesday') ||
    combinedText.includes('thursday') ||
    combinedText.includes('friday') ||
    combinedText.includes('saturday') ||
    combinedText.includes('sunday') ||
    combinedText.includes('asap') ||
    combinedText.includes('soon') ||
    combinedText.includes('this week') ||
    combinedText.includes('morning') ||
    combinedText.includes('afternoon');
  
  // Lead is qualified if they show interest AND mention timing
  return hasServiceInterest && hasTiming;
}

// Generate unique conversation ID
function generateConversationId() {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
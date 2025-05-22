export const mockConversations = [
  {
    id: '1',
    date: 'May 19, 2025',
    time: '11:30 AM',
    duration: '24 minutes',
    title: 'Work Anxiety Discussion',
    previewText: "I've been feeling really overwhelmed at work lately...",
    mood: 'Concerned',
    insights: [
      'Shows significant work-related anxiety',
      'Difficulty with boundary setting',
      'Potential for burnout if not addressed',
    ],
    messages: [
      {
        role: 'user',
        content:
          "I've been feeling really overwhelmed at work lately. There's so much to do and I feel like I can't keep up.",
      },
      {
        role: 'ai',
        content:
          'I understand how challenging that can feel. Being overwhelmed at work is something many people experience. Can you tell me more about what specifically feels most overwhelming?',
      },
      {
        role: 'user',
        content:
          "It's the constant stream of emails and meetings. I never get time to actually complete my tasks. And my manager keeps adding more to my plate.",
      },
      {
        role: 'ai',
        content:
          'That sounds really difficult - trying to stay on top of communications while also completing your core work, especially with new responsibilities being added. Have you been able to discuss your workload with your manager?',
      },
      {
        role: 'user',
        content: "No, I'm worried about seeming like I can't handle the job. Everyone else seems to manage fine.",
      },
      {
        role: 'ai',
        content:
          "It's common to worry about how we're perceived at work, but it's important to remember that we often don't see the full picture of how others are coping. Many people who \"seem fine\" might be struggling too. Would you feel comfortable discussing some specific time management strategies that might help?",
      },
      { role: 'user', content: 'Yes, I think that would be helpful. I need some practical ways to handle this.' },
      {
        role: 'ai',
        content:
          'Great. One approach many find helpful is time blocking. This involves designating specific periods for emails and meetings, and protecting other blocks of time for focused work. Would you like to explore how that might work in your schedule?',
      },
    ],
  },
  {
    id: '2',
    date: 'May 17, 2025',
    time: '4:15 PM',
    duration: '32 minutes',
    title: 'Sleep Pattern Analysis',
    previewText: "I've been having trouble sleeping lately. I keep waking up...",
    mood: 'Frustrated',
    insights: [
      'Sleep disruption likely linked to evening routine',
      'Screen use affecting sleep quality',
      'Potential alcohol impact on sleep cycles',
    ],
    messages: [
      {
        role: 'user',
        content:
          "I've been having trouble sleeping lately. I keep waking up in the middle of the night and can't fall back asleep.",
      },
      {
        role: 'ai',
        content:
          "I'm sorry to hear you're struggling with sleep disruptions. That can be really frustrating and affect your daytime functioning too. Can you share a bit more about your sleep routine and when these wake-ups typically occur?",
      },
      {
        role: 'user',
        content:
          "I usually go to bed around 11 PM and I wake up around 2 or 3 AM. Then I end up looking at my phone because I can't sleep, which probably makes it worse.",
      },
      {
        role: 'ai',
        content:
          "You're right that looking at your phone likely makes it harder to fall back asleep. The blue light from screens can suppress melatonin, which helps regulate sleep. What do you typically do in the hour or two before bedtime?",
      },
      {
        role: 'user',
        content:
          "I'm usually watching TV or scrolling through social media. Sometimes I'll have a glass of wine to help me relax.",
      },
      {
        role: 'ai',
        content:
          'Thank you for sharing that. Both screen time and alcohol can affect sleep quality, even if they might feel relaxing in the moment. Would you be open to trying some adjustments to your evening routine to see if they help with those middle-of-the-night wake-ups?',
      },
    ],
  },
  {
    id: '3',
    date: 'May 14, 2025',
    time: '10:00 AM',
    duration: '40 minutes',
    title: 'Relationship Boundaries',
    previewText: 'I need help with setting boundaries with my friend. She keeps...',
    mood: 'Conflicted',
    insights: [
      'Difficulty with personal boundaries',
      'Fear of relationship damage',
      'Pattern of people-pleasing behavior',
    ],
    messages: [
      {
        role: 'user',
        content:
          'I need help with setting boundaries with my friend. She keeps asking me to do things for her, and I feel bad saying no.',
      },
      {
        role: 'ai',
        content:
          "Setting boundaries can be really challenging, especially with people we care about. It's thoughtful that you're considering how to navigate this. Can you tell me a bit more about what kind of requests she makes and how they affect you?",
      },
      {
        role: 'user',
        content:
          "She asks me to drive her places, watch her dog last minute, or lend her money. I want to be a good friend, but it's becoming too much and I feel taken advantage of.",
      },
      {
        role: 'ai',
        content:
          "I can understand why you'd feel that way. It sounds like there's a pattern of requests that might be creating an imbalance in the friendship. Setting boundaries isn't about being unkind - it's about taking care of yourself while still being in the relationship. What makes it difficult for you to say no when these requests come up?",
      },
      {
        role: 'user',
        content:
          "I worry she'll be upset or think I don't care about her. We've been friends since childhood and I don't want to damage the relationship.",
      },
      {
        role: 'ai',
        content:
          "That makes a lot of sense - long-term friendships carry a lot of history and meaning, and it's natural to want to preserve that connection. Many people find that healthy boundaries actually strengthen relationships in the long run, though the transition can be uncomfortable. Would it help to talk about some ways to communicate boundaries that feel authentic to you?",
      },
    ],
  },
  {
    id: '4',
    date: 'May 10, 2025',
    time: '2:45 PM',
    duration: '28 minutes',
    title: 'Stress Management Techniques',
    previewText: 'My stress levels have been through the roof lately...',
    mood: 'Overwhelmed',
    insights: [
      'Current coping techniques insufficient',
      'Open to learning new strategies',
      'Showing awareness of stress impact',
    ],
    messages: [
      {
        role: 'user',
        content: 'My stress levels have been through the roof lately. I need some new techniques to manage it better.',
      },
      {
        role: 'ai',
        content:
          "I'm sorry to hear you've been experiencing such high stress levels. That can be really taxing both mentally and physically. I'd be happy to explore some techniques with you. First, could you share what you've tried already for stress management?",
      },
      {
        role: 'user',
        content:
          "I've tried some deep breathing and going for walks, but it doesn't seem to be enough with everything going on.",
      },
      {
        role: 'ai',
        content:
          "Thank you for sharing that. It's great that you've already incorporated some helpful strategies like breathing exercises and physical activity. When stress is particularly intense, we sometimes need to expand our toolkit. Would you be interested in exploring some additional approaches that might complement what you're already doing?",
      },
    ],
  },
  {
    id: '5',
    date: 'May 7, 2025',
    time: '9:15 AM',
    duration: '35 minutes',
    title: 'Self-Compassion Development',
    previewText: "I'm always so hard on myself. I can never seem to...",
    mood: 'Negative',
    insights: [
      'Strong pattern of self-criticism',
      'Double standard between self and others',
      'Potential for self-compassion practices',
    ],
    messages: [
      {
        role: 'user',
        content:
          "I'm always so hard on myself. I can never seem to meet my own standards and I constantly feel like I'm failing.",
      },
      {
        role: 'ai',
        content:
          "It sounds really painful to be caught in that cycle of self-criticism. Living with such high standards for yourself can be exhausting. I'm wondering, would you speak to a friend the way you speak to yourself when they make a mistake?",
      },
      {
        role: 'user',
        content:
          "No, I'm much kinder to others. I know it's a double standard but I can't seem to stop being so critical of myself.",
      },
      {
        role: 'ai',
        content:
          'That awareness is actually a really important first step. Many people who struggle with self-compassion find it much easier to extend kindness to others. Would you be willing to explore some practices that might help you start treating yourself with the same understanding you naturally offer to friends?',
      },
    ],
  },
];

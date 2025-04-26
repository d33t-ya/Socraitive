import Vapi from '@vapi-ai/web';

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
export const vapiToken = process.env.PRIVATE_VAPI_WEB_TOKEN!;

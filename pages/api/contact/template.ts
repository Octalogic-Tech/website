import { IFormData } from "../../../interfaces";

export const userTemplate = (name: string) => `
<h3>Hey ${name}!</h3>
<p>Thanks a bunch for getting in touch through our totally rad website's contact form.</p>
<p>We want you to know that we've got your message, and our dedicated team is already on it. We'll get back to you ASAP to help you out with anything you need - whether it's answering your questions, fixing a problem, or just shooting the breeze.</p>
<p>In the meantime, please feel free to explore our website further to learn more about our products/services and any additional information you may find useful. There's all sorts of cool stuff to discover, and who knows, you might stumble upon something that blows your mind!</p>
<p>We're absolutely stoked that you reached out to us. Stay awesome, and we'll be in touch soon!</p>
<br>
<span>Cheers,</span>
<br>
<span><strong>Glenn Fernandes</strong></span>
<br>
<span><strong>Co-Founder, Octalogic Tech</strong></span>
`;

export const adminTemplate = (payload: IFormData) => `
<p>Name: ${payload.name}</p>
<p>Email: ${payload.email}</p>
<p>Phone: ${payload.phone}</p>
<p>Message: ${payload.message}</p>
`;

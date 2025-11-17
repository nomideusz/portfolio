import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, message } = await request.json();

		// Validate input
		if (!name || !email || !message) {
			return json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{ error: 'Invalid email format' },
				{ status: 400 }
			);
		}

		// Send email using Resend
		const data = await resend.emails.send({
			from: 'Portfolio Contact Form <onboarding@resend.dev>',
			to: 'b.dymet@gmail.com',
			replyTo: email,
			subject: `New Contact Form Message from ${name}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`,
			text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
			`
		});

		return json({ success: true, data }, { status: 200 });
	} catch (error) {
		console.error('Error sending email:', error);
		return json(
			{ error: 'Failed to send message. Please try again.' },
			{ status: 500 }
		);
	}
};

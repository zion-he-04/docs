
export const templates = [
	{ 
		id: "b-d", 
		label: "Blank Document", 
		imageUrl: "/blank-document.svg",
		initialContent: ""
	},
	{ 
		id: "l", 
		label: "Letter", 
		imageUrl: "/letter.svg",
		initialContent: 
		`
		<h1>Business Letter</h1>

		<h2>Sender Information</h2>
		<p>
			Your Name<br>
			Your Address<br>
			City, State, ZIP Code<br>
			Your Email<br>
			Your Phone Number<br>
			Date
		</p>

		<h2>Recipient Information</h2>
		<p>
			Recipient's Name<br>
			Recipient's Title<br>
			Company Name (if applicable)<br>
			Company Address<br>
			City, State, ZIP Code
		</p>

		<h2>Salutation</h2>
		<p>
			Dear [Recipient's Name],
		</p>

		<h2>Introduction</h2>
		<p>
			A brief opening stating the purpose of the letter.
		</p>

		<h2>Main Content</h2>
		<p>
			Detailed explanation of your message, request, or information.
		</p>

		<h2>Conclusion</h2>
		<p>
			A closing statement summarizing your request or next steps.
		</p>

		<h2>Closing</h2>
		<p>
			Sincerely,<br>
			[Your Name]
		</p>
		`
	},
	{ 
		id: "r", 
		label: "Resume", 
		imageUrl: "/resume.svg",
		initialContent: 
		`
		<h1>Resume</h1>

		<h2>Personal Information</h2>
		<p>
			Full name, phone number, email, and LinkedIn profile (if applicable).
		</p>

		<h2>Summary</h2>
		<p>
			A brief professional summary highlighting key skills, experience, and career goals.
		</p>

		<h2>Education</h2>
		<p>
			Degree, university name, graduation year, and any honors or relevant coursework.
		</p>

		<h2>Work Experience</h2>
		<p>
			List of relevant job positions, including company name, job title, employment dates, and key responsibilities/achievements.
		</p>

		<h2>Skills</h2>
		<p>
			Technical and soft skills relevant to the job being applied for.
		</p>

		<h2>Projects</h2>
		<p>
			Brief descriptions of significant projects, including technologies used and outcomes.
		</p>

		<h2>Certifications & Awards</h2>
		<p>
			Relevant certifications, courses, and professional achievements.
		</p>

		<h2>Additional Information</h2>
		<p>
			Optional section for volunteering, extracurricular activities, or personal interests.
		</p>
		`
	},
	{ 
		id: "b-l", 
		label: "Business Letter", 
		imageUrl: "/business-letter.svg",
		initialContent: 
		`
		<h1>Business Letter</h1>

		<h2>Sender's Information</h2>
		<p>
			Your name, company name, address, phone number, and email.
		</p>

		<h2>Date</h2>
		<p>
			The date the letter is written.
		</p>

		<h2>Recipient's Information</h2>
		<p>
			Recipient's name, title, company name, and address.
		</p>

		<h2>Salutation</h2>
		<p>
			Formal greeting (e.g., "Dear [Recipient's Name],").
		</p>

		<h2>Opening Paragraph</h2>
		<p>
			Introduction stating the purpose of the letter.
		</p>

		<h2>Body Paragraph(s)</h2>
		<p>
			Details about the main topic, including any relevant background information, requests, or proposals.
		</p>

		<h2>Closing Paragraph</h2>
		<p>
			A polite conclusion summarizing the key points and a call to action if necessary.
		</p>

		<h2>Signature</h2>
		<p>
			Your name, title, and optionally a handwritten or digital signature.
		</p>
		`
	},
	{ 
		id: "c-l", 
		label: "Cover Letter", 
		imageUrl: "/cover-letter.svg",
		initialContent: 
		`
		<h1>Cover Letter</h1>

		<h2>Applicant Information</h2>
		<p>
			Your full name, contact details, and date.
		</p>

		<h2>Recipient Information</h2>
		<p>
			Hiring manager's name, company name, and company address.
		</p>

		<h2>Opening Paragraph</h2>
		<p>
			Introduction stating the position you are applying for and a brief summary of why you are a strong candidate.
		</p>

		<h2>Body Paragraph(s)</h2>
		<p>
			Detailed explanation of your relevant skills, experience, and achievements that align with the job requirements.
		</p>

		<h2>Closing Paragraph</h2>
		<p>
			A summary of why you are interested in the role, a call to action (e.g., request for an interview), and a polite thank you.
		</p>

		<h2>Signature</h2>
		<p>
			Your name and optionally a digital or handwritten signature.
		</p>
		`
	},
	{ 
		id: "p-p", 
		label: "Project Proposal", 
		imageUrl: "/project-proposal.svg",
		initialContent: 
		`
		<h1>Project Proposal</h1>

		<h2>Project Overview</h2>
		<p>
			A brief introduction to the project, including its purpose, goals, and significance.
		</p>

		<h2>Objectives</h2>
		<p>
			Key objectives and expected outcomes of the project.
		</p>

		<h2>Scope</h2>
		<p>
			Details on what the project will cover, including deliverables and limitations.
		</p>

		<h2>Methodology</h2>
		<p>
			Approach, strategies, and processes to be used in executing the project.
		</p>

		<h2>Timeline</h2>
		<p>
			A projected schedule outlining major milestones and deadlines.
		</p>

		<h2>Resources</h2>
		<p>
			Required personnel, tools, and materials needed to complete the project.
		</p>

		<h2>Budget</h2>
		<p>
			A breakdown of estimated costs and funding sources.
		</p>

		<h2>Risk Assessment</h2>
		<p>
			Potential risks and mitigation strategies.
		</p>

		<h2>Conclusion</h2>
		<p>
			A summary of key points and next steps for project approval.
		</p>
		`
	},
	{ 
		id: "s-p", 
		label: "Software Proposal", 
		imageUrl: "/software-proposal.svg",
		initialContent: 
		`
		<h1>Software Development Proposal</h1>

		<h2>Project Overview</h2>
		<p>
			Brief description of the proposed software development project.
		</p>

		<h2>Scope of Work</h2>
		<p>
			Outline of key features, functionalities, and deliverables.
		</p>

		<h2>Technology Stack</h2>
		<p>
			List of technologies and tools to be used in development.
		</p>

		<h2>Timeline</h2>
		<p>
			Estimated project milestones and completion schedule.
		</p>

		<h2>Budget</h2>
		<p>
			Cost breakdown and payment terms.
		</p>

		<h2>Conclusion</h2>
		<p>
			Summary of key points and next steps.
		</p>
		`
	},
];

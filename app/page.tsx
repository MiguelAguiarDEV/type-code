"use client";

import { useEffect, useState } from "react";
import TypingPractice from "@/components/TypingPractice";
import { getRandomSnippet } from "@/lib/snippets";

export default function Home() {
	const [codeSnippet, setCodeSnippet] = useState<string>("");

	useEffect(() => {
		const snippet = getRandomSnippet("javascript");
		if (snippet) {
			setCodeSnippet(snippet.code);
		}
	}, []);

	if (!codeSnippet) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div>Type Code Here</div>
			{/* Typing Practice */}
			<TypingPractice codeSnippet={codeSnippet} language={"javascript"} />
		</div>
	);
}


const feedback = "Great product! Fast delivery and amazing sound quality!";

const wordCount = feedback.trim().split(/\s+/).length;
const lowerFeedback = feedback.toLowerCase();

const hasNegativeWords =
    lowerFeedback.includes("bad") ||
    lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

if (hasNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

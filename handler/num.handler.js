const axios = require("axios");
const { isPrime, isPerfect, isArmstrong, digitSum, parity } = require("../app");

exports.numberHandler = async (req, res) => {
  const number = req.params.num;

  // Input validation
  if (!number || isNaN(number)) {
    return res.status(400).json({ number: "alphabet" || "undefined", error: true });
  }

  const num = parseInt(number, 10);

  // Fetch fun fact from Numbers API
  let funFact = "";
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    funFact = response.data;
  } catch (error) {
    funFact = "No fun fact available.";
  }

  // Prepare response
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(parity(num));

  res.json({
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: properties,
    digit_sum: digitSum(num),
    fun_fact: funFact,
  });
};

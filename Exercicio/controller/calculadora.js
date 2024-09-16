// controller/calculadora.js
function fSoma(num1, num2) {

        
        const resultado = num1 + num2;
        return resultado;    
};

const fSubtracao = async (req, res) => {
    try {
        const { num1, num2 } = req.body;
        const resultado = num1 - num2;
        res.json({ status: "ok", resultado });
    } catch (error) {
        res.status(500).json({ status: "erro", mensagem: error.message });
    }
};

const fMultiplicacao = async (req, res) => {
    try {
        const { num1, num2 } = req.body;
        const resultado = num1 * num2;
        res.json({ status: "ok", resultado });
    } catch (error) {
        res.status(500).json({ status: "erro", mensagem: error.message });
    }
};

const fDivisao = async (req, res) => {
    try {
        const { num1, num2 } = req.body;
        if (num2 === 0) {
            res.json({ status: "erro", mensagem: "Divisão por zero não permitida." });
        } else {
            const resultado = num1 / num2;
            res.json({ status: "ok", resultado });
        }
    } catch (error) {
        res.status(500).json({ status: "erro", mensagem: error.message });
    }
};

const fCalculo = async (req, res) => {
    try {
        const { operacao, num1, num2 } = req.body;

        // Basic validation
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return res.status(400).json({ status: "erro", mensagem: "Parâmetros inválidos." });
        }

        switch (operacao) {
            case "+":
                result =  fSoma(num1, num2);
                return res.json({ "status": "ok", "result": result });
            case "-":
                return fSubtracao(req, res);
            case "*":
                return fMultiplicacao(req, res);
            case "/":
                return fDivisao(req, res);
            default:
                return res.json({ status: "erro", mensagem: "Operação não suportada." });
        }
    } catch (error) {
        res.status(500).json({ status: "erro", mensagem: error.message });
    }
};

module.exports = {
    fSoma,
    fSubtracao,
    fMultiplicacao,
    fDivisao,
    fCalculo,
};

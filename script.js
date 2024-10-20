document.addEventListener('DOMContentLoaded', function() {
    // Lista de alimentos e calorias (valores em kcal por unidade)
    const foods = [
        // Bebidas
        { name: "7UP", unit: "uma lata (330ml)", calories: 149 },
        { name: "Abacate", unit: "metade (100g)", calories: 232 },
        { name: "Abacaxi em calda", unit: "uma taça (150g)", calories: 184 },
        { name: "Abacaxi", unit: "uma fatia (100g)", calories: 52 },
        { name: "Abóbora", unit: "um pires chá (100g)", calories: 12 },
        { name: "Açúcar mascavado", unit: "uma colher chá (4g)", calories: 14 },
        { name: "Açúcar", unit: "uma colher sopa (25g)", calories: 100 },
        { name: "Agrião", unit: "um prato sobremesa (25g)", calories: 6 },
        { name: "Água de coco", unit: "um copo médio (200ml)", calories: 41 },
        { name: "Água tônica", unit: "um copo médio (200ml)", calories: 35 },
        { name: "Aguardente", unit: "um copo médio (100ml)", calories: 231 },
        { name: "Cerveja", unit: "um copo (200ml)", calories: 98 },
        { name: "Cerveja s/ álcool", unit: "um copo (200ml)", calories: 44 },
        { name: "Champagne", unit: "uma taça (100ml)", calories: 70 },
        { name: "Coca-Cola", unit: "uma lata (330ml)", calories: 149 },
        { name: "Caipirinha", unit: "um copo (100ml)", calories: 260 },
        { name: "Gin", unit: "um copo (100ml)", calories: 230 },
        { name: "Rum", unit: "um copo (100ml)", calories: 231 },
        { name: "Vinho branco", unit: "um copo (150ml)", calories: 87 },
        { name: "Vinho tinto", unit: "um copo (150ml)", calories: 72 },
        { name: "Vodka", unit: "um copo (100ml)", calories: 230 },
        { name: "Red Bull", unit: "uma lata (250ml)", calories: 113 },
        { name: "Nestea", unit: "uma garrafa pequena (100ml)", calories: 32 },
        { name: "Fanta", unit: "um copo médio (200ml)", calories: 108 },
        { name: "Milk shake chocolate", unit: "um copo grande (300ml)", calories: 345 },
        { name: "Milk shake morango", unit: "um copo grande (300ml)", calories: 336 },
        { name: "Sumo de laranja", unit: "um copo médio (200ml)", calories: 90 },
        { name: "Sumo de tomate", unit: "um copo médio (200ml)", calories: 22 },
        { name: "Sumol", unit: "uma garrafa pequena (250ml)", calories: 108 },
        // Frutas
        { name: "Ameixa preta", unit: "uma (50g)", calories: 22 },
        { name: "Ameixa vermelha", unit: "uma (50g)", calories: 27 },
        { name: "Ameixa-passa", unit: "uma xícara chá (100g)", calories: 177 },
        { name: "Ananás", unit: "uma fatia (100g)", calories: 55 },
        { name: "Arando", unit: "uma porção (100g)", calories: 41 },
        { name: "Banana", unit: "uma média (100g)", calories: 85 },
        { name: "Manga", unit: "metade (130g)", calories: 91 },
        { name: "Mamão papaya", unit: "metade (130g)", calories: 88 },
        { name: "Manga", unit: "uma fatia (100g)", calories: 91 },
        { name: "Maçã", unit: "uma unid média (100g)", calories: 45 },
        { name: "Melancia", unit: "uma fatia (100g)", calories: 24 },
        { name: "Melão", unit: "uma fatia (100g)", calories: 30 },
        { name: "Limão", unit: "uma (60g)", calories: 22 },
        { name: "Pêra", unit: "uma média (100g)", calories: 38 },
        { name: "Pêssego", unit: "uma (100g)", calories: 30 },
        { name: "Romã", unit: "uma (150g)", calories: 105 },
        { name: "Tangerina", unit: "uma (100g)", calories: 50 },
        { name: "Uva", unit: "um cacho peq (100g)", calories: 61 },
        { name: "Uva passa", unit: "uma xícara chá (100g)", calories: 301 },
        // Carnes
        { name: "Almôndegas", unit: "uma (50g)", calories: 60 },
        { name: "Bife a cavalo", unit: "uma (140g)", calories: 196 },
        { name: "Bife à milanesa", unit: "uma (160g)", calories: 580 },
        { name: "Bife à parmegiana", unit: "uma (200g)", calories: 700 },
        { name: "Bife frito", unit: "uma (130g)", calories: 330 },
        { name: "Cheeseburger", unit: "uma (150g)", calories: 600 },
        { name: "Filete de frango", unit: "uma (120g)", calories: 128 },
        { name: "Filete mignon", unit: "uma (120g)", calories: 240 },
        { name: "Frango assado (peito)", unit: "uma (180g)", calories: 217 },
        { name: "Frango assado (coxa)", unit: "uma (40g)", calories: 48 },
        { name: "Frango assado (sobrecoxa)", unit: "uma (65g)", calories: 78 },
        { name: "Frango frito (filete)", unit: "uma (100g)", calories: 145 },
        { name: "Frango frito (coxa)", unit: "uma (40g)", calories: 58 },
        { name: "Hambúrger carne", unit: "um (100g)", calories: 248 },
        { name: "Hambúrger frango", unit: "um (100g)", calories: 234 },
        { name: "Hambúrger peixe", unit: "um (100g)", calories: 74 },
        { name: "Hambúrger peru", unit: "um (100g)", calories: 148 },
        { name: "Javali", unit: "uma porção (100g)", calories: 107 },
        { name: "Lombo de porco", unit: "uma fatia (100g)", calories: 363 },
        { name: "Picanha", unit: "uma fatia (100g)", calories: 250 },
        { name: "Pato", unit: "uma porção (100g)", calories: 288 },
        { name: "Porco (carne gorda)", unit: "uma porção (100g)", calories: 398 },
        { name: "Porco (carne magra)", unit: "uma porção (100g)", calories: 146 },
        { name: "Presunto cozido", unit: "uma fatia média (25g)", calories: 85 },
        { name: "Rosbife", unit: "uma fatia (40g)", calories: 66 },
        // Laticínios e Ovos
        { name: "Açúcar mascavado", unit: "uma colher chá (4g)", calories: 14 },
        { name: "Açúcar", unit: "uma colher sopa (25g)", calories: 100 },
        { name: "Azeite de Oliveira", unit: "uma colher sopa (10g)", calories: 90 },
        { name: "Bacon", unit: "uma colher sopa (25g)", calories: 142 },
        { name: "Brigadeiro", unit: "uma (30g)", calories: 100 },
        { name: "Creme de leite", unit: "uma colher sopa (30g)", calories: 75 },
        { name: "Farinha de milho", unit: "uma colher sopa (20g)", calories: 73 },
        { name: "Farinha de trigo", unit: "uma colher sopa (20g)", calories: 75 },
        { name: "Farelo de trigo", unit: "uma colher sopa (20g)", calories: 50 },
        { name: "Maionese comum", unit: "uma colher sopa (15g)", calories: 107 },
        { name: "Maionese light", unit: "uma colher sopa (15g)", calories: 50 },
        { name: "Molho branco", unit: "uma colher sopa (20g)", calories: 100 },
        { name: "Requeijão light", unit: "uma colher sopa (25g)", calories: 45 },
        { name: "Requeijão", unit: "uma colher sopa (25g)", calories: 24 },
        { name: "Ricota", unit: "uma fatia (25g)", calories: 45 },
        // Legumes e Verduras
        { name: "Agrião", unit: "um prato sobremesa (25g)", calories: 6 },
        { name: "Aipo", unit: "um pires (100g)", calories: 22 },
        { name: "Alho", unit: "um pires (100g)", calories: 124 },
        { name: "Alface", unit: "um pires (100g)", calories: 19 },
        { name: "Cenoura", unit: "uma média (100g)", calories: 37 },
        { name: "Chicória", unit: "um prato sobremesa (30g)", calories: 6 },
        { name: "Couve-de-bruxelas", unit: "um pires chá (100g)", calories: 59 },
        { name: "Couve-flor", unit: "um pires chá (100g)", calories: 25 },
        { name: "Couve-manteiga", unit: "um prato sobremesa (50g)", calories: 13 },
        { name: "Espinafre", unit: "um prato sobremesa (100g)", calories: 31 },
        { name: "Ervilha", unit: "uma colher sopa (20g)", calories: 18 },
        { name: "Grão-de-bico", unit: "um pires (100g)", calories: 338 },
        { name: "Lentilhas", unit: "um pires (100g)", calories: 325 },
        { name: "Milho", unit: "um pires (100g)", calories: 363 },
        { name: "Nabo", unit: "um (100g)", calories: 16 },
        { name: "Pepino", unit: "uma média (150g)", calories: 22 },
        { name: "Pimentão", unit: "uma (50g)", calories: 15 },
        { name: "Rabanete", unit: "um (10g)", calories: 2 },
        { name: "Repolho", unit: "um prato sobremesa (30g)", calories: 8 },
        { name: "Rúcula", unit: "um prato sobremesa (35g)", calories: 7 },
        // Outros Alimentos
        { name: "Coração de galinha", unit: "uma (20g)", calories: 27 },
        { name: "Cozido à Portuguesa", unit: "uma porção (100g)", calories: 150 },
        { name: "Feijoada", unit: "uma porção (300g)", calories: 456 },
        { name: "Salsicha comum", unit: "uma (50g)", calories: 165 },
        { name: "Salsicha de frango", unit: "uma (50g)", calories: 116 },
        { name: "Salsicha fresca", unit: "uma (100g)", calories: 296 },
        { name: "Salsicha fresca", unit: "uma (100g)", calories: 296 },
        // ... (Continue adicionando todos os alimentos da lista seguindo o mesmo padrão)
    ];

    const foodListContainer = document.querySelector('.food-list');

    // Função para renderizar a lista de alimentos
    function renderFoodList() {
        foods.forEach((food) => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');

            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.calories = food.calories;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${food.name} (${food.unit}) - ${food.calories} kcal`));

            foodItem.appendChild(label);

            foodListContainer.appendChild(foodItem);

            // Evento para recalcular as calorias quando o checkbox é marcado/desmarcado
            checkbox.addEventListener('change', calculateTotalCalories);
        });
    }

    // Função para calcular o total de calorias
    function calculateTotalCalories() {
        let totalCalories = 0;

        const checkboxes = document.querySelectorAll('.food-item input[type="checkbox"]');

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const calories = parseFloat(checkbox.dataset.calories);
                totalCalories += calories;
            }
        });

        // Atualizar o texto exibido
        document.getElementById('total-calories').textContent = `${totalCalories.toFixed(2)} kcal`;
    }

    // Inicializa a lista de alimentos
    renderFoodList();
});

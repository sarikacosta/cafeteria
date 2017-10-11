var produtos = 
				[ {"categoria": "Bebidas Quentes", "itens" : 
						[
							{"id":"1", "item":"Café Expresso", "preco":"R$4.00"},
							{"id":"2", "item":"Café Capuccino", "preco":"R$5.00"},
							{"id":"3", "item":"Chá de Ibisco", "preco":"R$5.00"},
							{"id":"4", "item":"Chá Preto", "preco":"R$3.00"},
							{"id":"5", "item":"Chá Verde", "preco":"R$3.00"},
							{"id":"6", "item":"Chá de Camomila", "preco":"R$3.00"},
							{"id":"7", "item":"Chá de Maçã", "preco":"R$3.00"},
							{"id":"8", "item":"Café Latte", "preco":"R$5.00"},
							{"id":"9", "item":"Chocolate Quente", "preco":"R$5.00"},
							{"id":"10", "item":"Café Mocaccino", "preco":"R$3.50"},
							{"id":"11", "item":"Mocha Latte", "preco":"R$4.00"},
							{"id":"12", "item":"Café Foam", "preco":"R$6.00"},
							{"id":"13", "item":"Tradicion Amendoa's Latte ", "preco":"R$8.00"}
						]
			  	  },
					{"categoria": "Bebidas Frias",	"itens" : 
						[
							{"id":"14", "item":"Suco de Laranja", "preco":"R$4.00"},
							{"id":"15", "item":"Suco de Abacaxi", "preco":"R$5.00"},
							{"id": "17", "item": "Refrigerantes", "preco": "R$5.00"},
							{"id": "18", "item": "Frapê de Morango", "preco": "R$5.00"},
							{"id": "19", "item": "Frapê de Uva", "preco": "R$5.00"},
							{"id": "20", "item": "Frapê de Nutella", "preco": "R$6.00"},
							{"id": "21", "item": "Milkshakes", "preco": "R$5.00"}
						]
					},
					{"categoria": "Lanches",	"itens" : 
						[
							{"id":"22", "item":"Misto quente", "preco":"R$4.00"},
							{"id":"23", "item":"Queijo quente", "preco":"R$3.50"},
							{"id":"24", "item":"Pão de Queijo", "preco":"R$2.00"},
							{"id":"25", "item":"Bauru de Salaminho", "preco":"R$4.00"},
							{"id":"26", "item":"Tradicion Especial", "preco":"R$5.50"}
						]
					}
				];
				
function carregarPedidos() {
				$("#pedidos tbody").empty();
					var total = 0;
					$.each(pedidos, function(indice, pedido){
						$("#pedidos tbody")
							.append($("<tr />")
								.attr("id", pedido.id)
								.append($("<td />").text(pedido.nome))
								.append($("<td />").text(pedido.quantidade))
								.append($("<td />").text(pedido.valorUnitario))
								.append($("<td />").text(pedido.valorTotal()))
								.append($("<td />")
									.append($("<span />")
										.addClass("glyphicon")
										.addClass("glyphicon-trash")
										.addClass("lixeira")
									)
								)
							);
						total = total + pedido.valorTotal();

					});

					$("#valor-total").text(total);
			}
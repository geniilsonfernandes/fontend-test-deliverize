import React from 'react'
import { useOrderContext } from '../../context/orderContext';
import { Base } from '../Base'
import { ProductCart } from '../../components/ProductCart';
import { Empty } from '../../components/Empty';
import * as S from './styles'

export const Cart = () => {
	const { cart, removeOrderToCart } = useOrderContext();

	const handleRemoveOrder = (value) => {
		removeOrderToCart(value)
	}
	return (
		<Base>
			<S.Main>
				<S.Head>
					Carrinho
				</S.Head>
				<S.Cart>
					{cart.length > 0 ?
						cart.map(item =>
							<ProductCart
								key={item.uid}
								amount={item.orderQuantity}
								uid={item.uid}
								name={item.name}
								additional={item.additional}
								onRemoveItem={handleRemoveOrder}
							/>)
						:
						<Empty message="Seu carrinho está vazio" erroMessage="volte para a loja e escolha produtos" />

					}

				</S.Cart>
			</S.Main>
		</Base>
	)
}

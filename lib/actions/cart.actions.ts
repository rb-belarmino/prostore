'use server'

import { cookies } from 'next/headers'
import { CartItem } from '@/types'
import { convertToPlainObject, formatError } from '../utils'
import { auth } from '@/auth'
import { prisma } from '@/db/prisma'
import { cartItemSchema } from '../validators'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function addItemToCart(data: CartItem) {
  try {
    // Check for cart cookie
    const sessionCartId = (await cookies()).get('sessionCartId')?.value
    if (!sessionCartId) throw new Error('Cart session not found')

    // Get session and user Id
    const session = await auth()
    const userId = session?.user?.id ? (session.user.id as string) : undefined

    // Get Cart
    const cart = await getMyCart()

    // Parse and validate item
    const item = cartItemSchema.parse(data)

    // Finding product in database
    const product = await prisma.product.findFirst({
      where: { id: item.productId }
    })

    // Testing
    console.log({
      'Session Cart ID': sessionCartId,
      'User ID': userId,
      'Item Requested': item,
      'Product Found': product
    })

    return {
      success: true,
      message: 'Item added to cart'
    }
  } catch (error) {
    return {
      success: false,
      message: formatError(error)
    }
  }
}

export async function getMyCart() {
  // Check for cart cookie
  const sessionCartId = (await cookies()).get('sessionCartId')?.value
  if (!sessionCartId) throw new Error('Cart session not found')

  // Get session and user Id
  const session = await auth()
  const userId = session?.user?.id ? (session.user.id as string) : undefined

  // Get user cart from database
  const cart = await prisma.cart.findFirst({
    where: userId ? { userId: userId } : { sessionCartId: sessionCartId }
  })

  if (!cart) return undefined

  // Convert Decimals and return
  return convertToPlainObject({
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    taxPrice: cart.taxPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
    totalPrice: cart.totalPrice.toString()
  })
}

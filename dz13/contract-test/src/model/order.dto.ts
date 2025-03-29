export type OrderStatus = 'placed' | 'approved' | 'delivered';

export class OrderDto {
    public constructor(
        public id: number,
        public petId: number,
        public quantity: number,
        public shipDate: string,
        public status: OrderStatus,
        public complete: boolean
    ) {}
}

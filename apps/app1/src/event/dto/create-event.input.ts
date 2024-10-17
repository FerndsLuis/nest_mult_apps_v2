import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  date: Date;

  @Field(() => Float, { description: 'Example field (placeholder)' })
  price: number;
}

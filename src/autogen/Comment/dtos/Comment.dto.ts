import { ApiProperty } from '@nestjs/swagger';

export class CommentCreate {
  @ApiProperty()
  content: string;
}

export class Comment {
  @ApiProperty()
  id: number;
  @ApiProperty()
  content: string;
}

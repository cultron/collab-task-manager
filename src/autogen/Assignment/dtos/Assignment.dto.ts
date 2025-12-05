import { ApiProperty } from '@nestjs/swagger';

export class AssignmentCreate {}

export class Assignment {
  @ApiProperty()
  id: number;
}

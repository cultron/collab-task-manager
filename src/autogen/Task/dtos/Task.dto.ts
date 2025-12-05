import { ApiProperty } from '@nestjs/swagger';

export class TaskCreate {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  status: string;
}

export class Task {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  status: string;
}

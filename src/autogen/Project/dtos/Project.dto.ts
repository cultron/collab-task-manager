import { ApiProperty } from '@nestjs/swagger';

export class ProjectCreate {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}

export class Project {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = await this.todoService.create(createTodoDto);
    return todo;
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Todo> {
    const todo = await this.todoService.findById(id);
    return todo;
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    const todos = await this.todoService.findAll();
    return todos;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatedTodo: Partial<Todo>,
  ): Promise<Todo> {
    const todo = await this.todoService.update(id, updatedTodo);
    return todo;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.todoService.remove(id);
  }
}

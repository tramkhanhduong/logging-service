
import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { ActionService } from '../action/action.service';

@Injectable()
export class SocketService implements OnModuleInit {
  private socket: Socket;

  constructor(
    private readonly actionService: ActionService
  ) {}

  onModuleInit() {
    // Initialize the socket in the onModuleInit method
    this.socket = io(process.env.BACKEND_DOMAIN || 'http://localhost:3000'); // Replace with your WebSocket server URL
    
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Define event handlers for the events you want to consume
    this.socket.on('user_action', (data: any) => {
      console.log('Received event:', data);

      // Create the log action with associated details
      this.actionService.createLogActionWithDetails(
        data.user_id,
        data.action_type,
        data.action_details,
      );
    });
  }

  // You can create methods to send messages to the WebSocket server if necessary
  sendClientEvent(data: any) {
    this.socket.emit('clientEvent', data);
  }
}
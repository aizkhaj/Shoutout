export class Message {
  userId: string;
  content: string;
  sentAt: any;
  roomId: string;

  constructor(userId, content, sentAt, roomId) {
    this.userId = userId;
    this.content = content;
    this.sentAt = sentAt;
    this.roomId = roomId;
  }
}

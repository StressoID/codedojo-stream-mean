import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChatService } from './chat.service';

const chatService = {
  messageSubject: {
    subscribe: () => ({}),
  },
  getMessages: () => ({
    subscribe: () => ({}),
  }),
  sendMessage: () => ({
    subscribe: () => ({}),
  }),
};
;

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ChatService, useValue: chatService }],
    });
  });

  it('should be created', inject([ChatService], (service) => {
    expect(service).toBeTruthy();
  }));
});

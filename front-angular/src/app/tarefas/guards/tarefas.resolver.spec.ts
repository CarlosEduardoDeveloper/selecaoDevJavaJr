import { TestBed } from '@angular/core/testing';

import { TarefasResolver } from './tarefas.resolver';

describe('TarefasResolver', () => {
  let resolver: TarefasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TarefasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

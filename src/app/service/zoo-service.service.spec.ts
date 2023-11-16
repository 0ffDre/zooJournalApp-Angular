import { TestBed } from '@angular/core/testing';
import { ZooServiceService } from './zoo-service.service';

describe('MusicServiceService', () => {
    let service: ZooServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ZooServiceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

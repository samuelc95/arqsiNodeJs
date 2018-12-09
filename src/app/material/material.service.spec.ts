import { TestBed, async, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { MaterialService } from './material.service';
import {Imaterial} from '../interfaces/material';
 
describe('MaterialService', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        MaterialService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('getMateriais', () => {
    it('should return an Observable<Array<Imaterial>>',
        inject([MaterialService, XHRBackend], (materialService, mockBackend) => {
        const mockResponse = {
          data: [
            { materialId: 0, nome: 'M0' },
            { materialId: 1, nome: 'M1' },
            { materialId: 2, nome: 'M2' },
            { materialId: 3, nome: 'M3' },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        materialService.getMateriais().subscribe((m) => {
          expect(m.length).toBe(4);
          expect(m[0].nome).toEqual('M0');
          expect(m[1].nome).toEqual('M1');
          expect(m[2].nome).toEqual('M2');
          expect(m[3].nome).toEqual('M3');
        });
    }));
  })
 
  describe('deleteMateriais', () => {
    it('should return an Observable<Array<Imaterial>>',
        inject([MaterialService, XHRBackend], (materialService, mockBackend) => {
        const mockResponse = {
          data: [
            { materialId: 0, nome: 'M0' },
            { materialId: 1, nome: 'M1' },
            { materialId: 2, nome: 'M2' },
            { materialId: 3, nome: 'M3' },
          ]
        };
 
        const result = {
          data: [
            { materialId: 0, nome: 'M0' },
            { materialId: 1, nome: 'M1' },
            { materialId: 3, nome: 'M3' },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        materialService.deleteMaterial(2).subscribe((m) => {
          expect(m.length).toBe(3);
          expect(m).toEqual(result);
        });
    }));
  });
    describe('addMateriais()', () => {
      it('should return an Observable<Array<Imaterial>>',
          inject([MaterialService, XHRBackend], (materialService, mockBackend) => {
 
          const mockResponse = {
            data: [
              { nome: 'M22' }
            ]
          };
 
          const result = {
            data: [
              {nome: 'M22' }
            ]
          };
 
          const mat: Imaterial = new Imaterial();
          mat.materialId = 22;
          mat.nome = 'M22';
 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          materialService.addMaterial(result).subscribe((m) => {
            expect(m.nome).toEqual(result.data[0].nome);
          });
 
      }));
  });
 
})
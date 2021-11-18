import { TestBed, tick } from '@angular/core/testing';

import { UserService } from './user-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { first } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user-model';
import { of } from 'rxjs';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingCtrl: HttpTestingController;
  let mockUsers: UserModel[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    userService = TestBed.inject(UserService);
    httpTestingCtrl = TestBed.inject(HttpTestingController);

    mockUsers = [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        username: 'Bret',
        website: 'hildegard.org',
        company: { name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets' },
        address: { city: 'Gwenborough', street: 'Kulas Light', suite: 'Apt. 556', zipcode: '92998-3874', geo: { lat: '-37.3159', lng: '81.1496' } }
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618"
          }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains"
        }
      }
    ]

  });

  it('deberia retornar todos los usuarios', (done: jest.DoneCallback) => {

    const spyUserService = jest.spyOn(userService, 'getUsers');

    spyUserService.mockReturnValueOnce(of(mockUsers));

    userService.getUsers().subscribe(users => {

      expect(users.length).toEqual(2);
      console.log(`Usuarios Length: ${users.length}`);
      done();

    }, () => done.fail());


    /*const request = httpTestingCtrl.expectOne('https://jsonplaceholder.typicode.com/users');

    console.log(request.request.url);

    request.flush(mockUsers);
    httpTestingCtrl.verify();
    tick();*/

    //expect(spyUserService).toHaveBeenCalled();

    /*try {
      userService.getUsers().subscribe(users => {
        expect(users).toEqual(mockUser);
        //expect(users.length).toEqual(10)
        console.log('ooooooooooo');
        done();
      });
    } catch (error) {
      done(error);
    }*/



    //const users = await userService.getUsers().toPromise();

    //console.log(users);


  /*userService.getUsers().subscribe(users => {

      expect(true).toBeFalsy()

      expect(users).toBeTruthy();

      expect(users.length).toBeLessThanOrEqual(500);

      const request = httpTestingCtrl.expectOne('https://jsonplaceholder.typicode.com/users');

      expect(request.request.method).toEqual('GET');

      request.flush({});

    });*/
  });


  it('deberia retornar un usuario por su id', () => {

    console.log(userService.findUserById(1).pipe(first()).toPromise());

  });


});

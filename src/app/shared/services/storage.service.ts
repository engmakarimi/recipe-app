import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setSaveList(id:string){
    let archives:unknown[]=this.getSaveList();
    archives.push(id);
    sessionStorage.setItem('archive',JSON.stringify(archives));
  }

  getSaveList():unknown[]{
    return JSON.parse(sessionStorage.getItem('archive') || '[]');
  }
}

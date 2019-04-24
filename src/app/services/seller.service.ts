import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserWallet } from '../models/user-wallet';
import { TableResult } from '../models/table-detail';
import { ReturnMessage } from '../models/message';

@Injectable({
    providedIn: 'root'
})
export class SellerService {

    constructor(private http: HttpClient) { }
    createTransaction(requestId: String, productName: String, quantity: Number, productCode: String, manufacturingDate: String, expiry: String, manufacturer: String, receiver: String, userAddress: String, amount: String) {
        return this.http.post<ReturnMessage>('http://localhost:3000/seller/user_transaction', {
            requestId: requestId,
            productName: productName,
            quantity: quantity,
            productCode: productCode,
            manufacturingDate: manufacturingDate,
            expiry: expiry,
            manufacturer: manufacturer,
            receiver: receiver,
            userAddress: userAddress,
            amount: amount
        })
    }

    getUserRequests(maxResultCount: number, pageNumber: number) {
        return this.http.get<TableResult>(`http://localhost:3000/seller/user_requests/${maxResultCount}/${pageNumber}`);
    }

    requestToSuppliers(productName: String, quantity: Number, publicKey: String, brand: String) {
        return this.http.post<ReturnMessage>('http://localhost:3000/seller/requests_to_suppliers', {
            productName: productName,
            quantity: quantity,
            publicKey: publicKey,
            brand: brand
        })
    }

    getRequests(publicKey: String) {
        return this.http.get<[]>(`http://localhost:3000/seller/requests/${publicKey}`);
    }

    getConsignment(publicKey: String, maxResultCount: number, pageNumber: number) {
        return this.http.get<TableResult>(`http://localhost:3000/seller/products/${publicKey}/${maxResultCount}/${pageNumber}`);
    }

    getBill(maxResultCount: Number, pageNumber: Number, publicKey: String, productName: String) {
        return this.http.get<TableResult>(`http://localhost:3000/supplier/products/${maxResultCount}/${pageNumber}/${publicKey}/${productName}`);
    }
}
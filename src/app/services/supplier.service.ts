import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserWallet } from '../models/user-wallet';
import { TableResult } from '../models/table-detail';
import { ReturnMessage } from '../models/message';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    constructor(private http: HttpClient) { }
    createTransaction(requestId: String, userAddress: String, supplier: String, listData: []) {
        return this.http.post<ReturnMessage>('http://localhost:3000/supplier/seller_transaction', {
            requestId: requestId,
            userAddress: userAddress,
            supplier: supplier,
            listData: listData
        })
    }

    getSellerRequests(maxResultCount: number, pageNumber: number) {
        return this.http.get<TableResult>(`http://localhost:3000/supplier/seller_requests/${maxResultCount}/${pageNumber}`);
    }

    createConsignmentDetail(productName: String, productCode: String, quantityOfAConsignment: Number, amount: Number, manufacturingDate: String, expiry: String, manufacturer: String, prodName: String) {
        return this.http.post<ReturnMessage>('http://localhost:3000/supplier/detail_consignment', {
            productName: productName,
            productCode: productCode,
            quantityOfAConsignment: quantityOfAConsignment,
            amount: amount,
            manufacturingDate: manufacturingDate,
            expiry: expiry,
            manufacturer: manufacturer,
            prodName: prodName
        })
    }

    getConsignmentDetail(maxResultCount: number, pageNumber: number) {
        return this.http.get<TableResult>(`http://localhost:3000/supplier/getConsignment_detail/${maxResultCount}/${pageNumber}`);
    }

    deleteConsignment(selectedConsignments: String) {
        return this.http.delete<ReturnMessage>(`http://localhost:3000/supplier/deleteConsignment/${selectedConsignments}`)
    }

    deleteSellerRequest(sellerRequest: {}) {
        return this.http.delete<[]>(`http://localhost:3000/supplier/deleteRequest/${sellerRequest}`);
    }
}
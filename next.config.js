/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
    env: {
        APIHOST: "https://stgadminapi.positrarx.com",
        AUTHAPIHOST: "https://stg-emrauth.healthorbit.com",
        LOGIN: "/api/v1/signin",
        FETCH_TASKS:"/api/v4/fetchActiveTasks",
        FETCH_ONLINE_CUSTOMER_USERS:"/api/v4/fetchCustomers",
        FETCH_ONLINE_CUSTOMER_PROFILE:"/api/v4/fetchCustomerProfile",
        FETCH_ONLINE_CUSTOMER_ADDRESS:"/api/v4/fetchCustomerAddresses",
        FETCH_ONLINE_CUSTOMER_ORDERS:"/api/v4/fetchCustomerOrders",
        SEARCH_CUSTOMER_BY_PHONE:"/api/v4/searchCustomersByPhone",
        FETCH_OFFLINE_CUSTOMER_ORDERS:"/api/v4/fetchCustomerOfflineOrders",
        FETCH_CUSTOMER_PURCHASE_INSIGHT:"/api/v4/fetchAnalyticsProduct",
        FETCH_ONLINE_CUSTOMER_OFFLINE:"/api/v4/fetchOflineCustomers",
        FETCH_CONTACT_DETAILS:"/api/v4/fetchContactDetails",
        UPDATE_CONTACT_DETAILS:"/api/v4/updateContactDetails",
        FETCH_SHIPPING_DETAILS:"/api/v4/fetchShipingEstimation",
        UPDATE_SHIPPING_DETAILS:"/api/v4/updateShipingEstimation",
        FETCH_VENDOR_LIST:"/api/v4/fetchVendors",
        ADD_VENDOR:"/api/v4/addVendor",
        FETCH_VENDOR_BY_ID:"/api/v4/fetchVendorById",
        EDIT_VENDOR:"/api/v4/editVendor",
        ADD_VENDOR_USER:"/api/v4/addVendorUser",
        ERROR_MSG:"This request unfortunately failed. We have alerted the concerned team for further investigation of the issue.",
        localKeyAES:"gJLifaf34gevH904",
        authServerPublicKey:
            "-----BEGIN PUBLIC KEY-----\n" +
            "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA1QlkUC8Cz8lprhIPmAMo\n" +
            "BP7ZbCBhPDHD7kwB+W5PKqlIGQRHBQfkxytPkn3DhVuo6P9TNiKmsImolcO+0zwj\n" +
            "cmzBG2rzdzkw9iAfUDCfXM9KQ5DHyhWPjztJwvRJYex5r0lfcPzwILgjd3IIq+If\n" +
            "n+1x8I8hIXKCqluuhZ8izYJJbKR992cQicUPZ6IEudSMHtW6wuVoToiJK8SfsQ59\n" +
            "2r3cjKb1TXsqvK0B/WyGLzhnAms0TOPHaYMI2OaG0oexiy3Z6aWWKUGqmuyoJUTd\n" +
            "lubFqWaX7/LCe7JgEJYu02rb2b8e208bk+8sozwy1LZwAMKeJF/cbVoX5vlxM9aQ\n" +
            "CyXxxgPA1b4n5X5RjJlZtMiaYA2RnAvJdJpBDQa15DNJ8cTFe/0IrSi1dhMivf42\n" +
            "UMJBQeyAAk60ij7cUCrSX6GkOubNP6xgrS4fbBAetmet0ByAbPZUYfMZYZpkV4eX\n" +
            "mElkfO/fqij6uBedDo3YzXTmVP6FiC4TL+58AJxD8PRYGOsFcBeGS1oMnDEBNC7S\n" +
            "YgO4tX8Q0w8dVbyk90+S1AOlnM4p1prn9HilzPlOwMhNNcc9VZnlVUKgeR2BJAD2\n" +
            "P0KksX+gWn9BTkGNZov1o7N9xdr3ttsZptNSlwBHv5eFyI2XEV61U5NvgbI6Qdrr\n" +
            "xFMelxRsAcUWVDI5gwHmHKkCAwEAAQ==\n" +
            "-----END PUBLIC KEY-----",
        responsePrivateKey:
            "-----BEGIN RSA PRIVATE KEY-----\n" +
            "MIIJJwIBAAKCAgEAyup5glo9uLWVzLcQQNZg+AQdorVGbG69gNylvrp/ysFinaec\n" +
            "vqtdMeshbTRTs48Ob+8fUiXuIHYJFY2/u/Ud6Of0YtmQfTekZKWCtuuXz1QEhK8H\n" +
            "LodObBX+aWfUUHiPuDCoVCqTqkT4gIhodWJT+j/9WhScpi1TP1Hvayt1LVhQ/VPm\n" +
            "58I4cE9HrA6i4Ed2r9Tq5s4zR9fEiYjVGY0NAPyjLCg2rg+mNCukCdu5uYKbMdB5\n" +
            "Nm8R1EtgheDCIj8S7YKTsNoPI0MaOOgly2l3HmMSB6oLWl2hgglJoB14s5wcNyVh\n" +
            "6sUqgwfEoPJouC0oCb7vheP1jsSxfCuvoBnll1jQxbtyHoxLuGU9ah+6e9AE/w/Y\n" +
            "mS78Rq+x07+1VmC75Qs/6FSlUT/z/W1PKpOLUFE10pZeAeIbdY5A/2mv/O4mZn1q\n" +
            "x/APXFFPDbrmgFWfnm1jAD5+BG18qrnRFm1UgPhRvbenusUSmYVeYK0r46BEKmcW\n" +
            "qN6xKeEwKMIs0VOvZDey8F16pQ36YnBmOGAjvnotMe3+Hd1v3Wq3khcR0+2+dwd2\n" +
            "ZER0zmHXSYnkXJQ0LOFg4xmjgGpeIWWq6/l5reGnQTHx24v2gVfnTBmK/LFgLaI8\n" +
            "0jDvchNMeIc0Hmmrue7Ir5tQvviHhGqjT2R5KVX2VoIekCvhEZcuQUB99d0CAwEA\n" +
            "AQKCAgA0MiBTcZcS3lLMOALMStjis1xUMEEPP2UrspZH+31H0HrnhugA+9+bKZqN\n" +
            "lro5JAFYta/e17brTrGDg9TgKmspMBFjJAfQzfFRmmmHWA7S3A/VeZhlVZTMpNOu\n" +
            "lXC9ymVdwdZq4BDf6aHqniwQldx4MOGgvFCXRm11ikQF00XvBhq/L0fkMceGzD3p\n" +
            "elJXUsqq7CAIgt4aCtyZbEM0sV249UOb5jQ6jff4z4kAqC6cE4aMR84GPIffjgwk\n" +
            "I+6MFKFvyvjmsxDVxzsFjGG8c0Ka5G0M36bP9enHo0/3Cd20heGUJd+MHm+TCPqB\n" +
            "VBmv1p3H8/9093CA6wOkpzAkBMVTtdD0kbQ5/YZjkuiM1il9zBMXKpG8fdMxZ0u0\n" +
            "fIE06UMJg4ECixNY6oDPn4LkX5hwvDg5tLFvYUwxPDoZfeKcBog1q/7fNdZFQCxH\n" +
            "uETgQ5/i3qBq6Q7vFqYkUJ3Stk9Z+wV97gutVRtQo5H4wWMvzfrzSfGaDCYw22F0\n" +
            "p6iUTVe8TgZWL+pACMqER6B4hU953KWLDbASKYYVeYII0xtJ6d9GpG3ggFzl6PMD\n" +
            "h+bj5+YguANfLqYyEHr3MdIgHm1Fxflpvpv5SMU86NrkO57/KCCt2bbZHyq6e87J\n" +
            "aLUILY8GOg6lZzSd/gwRY7y9mVEjySjuK3C7bTR4xTFXQxsZgQKCAQEA6WhNA7OV\n" +
            "l3pqJNvjFCmHiPY2w6QEw7k3wct0TLOj0twCAVz8G4WtNYIUqyPNCcwhW9j/BKT1\n" +
            "2SNXrXvR3+oGDw1XyvZ5XkFQm/FL/5CRntbxLdU7Ugf38iCd+9tKrH4CcVlnIWKJ\n" +
            "ioHBfOjxV5ezD8DV9vzwpTu6PKpj6BRV1O3s6Wd9LBvLAE6M5XIuCdU+fWKjDi/z\n" +
            "g5fVs64A2V3sRkPEwdIwTduUg2/IPwmiLPsc1jk4BciDubYEpqC/IXi1+vq+IIjV\n" +
            "QLO/I2bCx2ik4u1+NK5uWkYyFdorN2ESUMTvR11r8fToXDXu4HVaXHN6aAcRNjty\n" +
            "3OzKJDEWwy46UQKCAQEA3o6csqE7NZ/QZ0EgC4+t4iaTH2TapOlaZQeh/VpMrn6B\n" +
            "LIg7tCERgFnDF9bQNnyS9hOxgk6ntRcOmEiwpsbBXsaBSPdm01LfmkBzNqok44yI\n" +
            "tCkBER8ndTx6tIM3DZ2atMcu1oL6H45L6qe5klKKBU9I0o0CZSEMm7XJFkXbl1se\n" +
            "t16r+8IqtDBbwGU7a6hhnUCGYccPkdCDZK2Bu/wsVig6+lfOEFUJyxL5bXDjDvaZ\n" +
            "zkoXWd7srJI/9w4IguHVrxtPlpfEh1uTrL7H+BhHPKsGQO4blbq/yNL0mtW8owrg\n" +
            "Qw8Qq5sdLvsgIIvIx4havEwI8WWytLroc+X8WUFTzQKCAQA+9aGAlBqP57dmBeI0\n" +
            "+BbVPQT8tOuMGBQQNF9EqVhRcoMf9wMSMXbNbi9BEsEmGWgOLHRtvkmKrtvhsfqk\n" +
            "2a2UtdauqtmGMTwbNHV5lHeTTwtzf4cm03twVpgG7dowuTTTeng1Ky1KrUGR/gvL\n" +
            "wuHMKAoPO592Eqxj3NpiKcoVS7CSLRY4pa6WgJnE8o20nU7j541wMEMRhg1hEFiu\n" +
            "SYWIVpNmbNoWxlpDMg3j4ydZ1sqqhni0JqhRmeWbRNUJpFQCRUyv3fkYIOQ4GmoD\n" +
            "/BguFj3q2/psY27zMgxiPc8A9n5M08hgVd2vseSjq0QamBO2p+FerZ6INV85b/xh\n" +
            "3cBhAoIBAFq96PQIOxz9ITrIWel81pfrxHa7Z05v+rRQrWKgS72lxMNEdJtYFEux\n" +
            "zZLNui1NE5qTov+PVF/Im+HJWYVWaodbBmGaxekJ1DOPbapvKwVASoiyY0X43ty1\n" +
            "IQ6ypWK+zNJCmD1MP/FX0mpFoqsfTjkl/3ohlkVneT2PnAKhzwviUh7P0e2fWEwJ\n" +
            "n49NdzHJAKveICyDvjxkuP32pHviMK2cT5e87z7HfWu4O8y8h0eVklaC7QxukS83\n" +
            "ni78IMpEjByOVSAAl1fdJdP8IYptU7ZPwQf+TW76KrIWGTd8SCJuD8wnu1NMtlRu\n" +
            "fcXnWKDKXryBf+/02C1KO/btYbt+oE0CggEAOkuvc/Lr6BsLB3ay/39Stdg9RCtA\n" +
            "zQq8RpVOKF5+le7QwrpEYq/amH1wg2JnIy6YYV+MIETAmHWTQqV2fdoYIdGIwBrs\n" +
            "801YuFRBZCWhjz08G/JjOSMc8IoEMLolbZLhoH4RZrVPNXE5iPyho6Sin1zPLdN7\n" +
            "UYb33YAnJxSnTM9leFEsTgcawOLpVp7itdSb0Wj++rRMzq/GgzE67KTb3LTtjcd6\n" +
            "MeMI5mBpZVaYjxbOoaTXSze0lfU82BcV0aQeDXKZBoE7jV9V31k9EznEXbwjyWBG\n" +
            "m9F72p072VNzIwcnx7OE2Tl350sCUgMd/rz4VzEFbDFh03Ftc3lO4w58hw==\n" +
            "-----END RSA PRIVATE KEY-----"
    },
}

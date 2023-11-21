import axios from "axios";
import { IPostProduct, UsersProductsGetResult, IUsersProducts, UsersProduct, ProductDataGetResult } from "../../models/product";
import { UserGetResult } from "../../models/user";
import { formatDate } from "../utils/formUtils";

class ProductService {
    getProductByBarcode = async (barcode: string) => {
        const user = localStorage.getItem('user');
        if (!user) throw new Error('Usuário não logado');
        const userLoggedIn = JSON.parse(user) as UserGetResult;
        const product = await axios.get<ProductDataGetResult>(`https://helloelitxmq.com/api/product?searchable_field=barcode&value=${barcode}`, { headers: { Authorization: `Bearer ${userLoggedIn.token}` } });

        return product.data;
    };

    postProduct = async ({ barcode, name, brand, description, averagePrice, imageUrl, expirationDate, quantity }: IPostProduct) => {
        const user = localStorage.getItem("user");

        if (!user) throw new Error('Usuário não logado');

        const userLoggedIn = JSON.parse(user) as UserGetResult;

        const payload = {
            product: {
                barcode,
                name,
                brand,
                description,
                average_price: averagePrice,
                image_url: imageUrl,
            },
            expire_date: formatDate(expirationDate || new Date().toLocaleDateString()),
            quantity,
            user_id: userLoggedIn.id,
        }

        await axios.post("https://helloelitxmq.com/api/product/assign", payload, { headers: { Authorization: `Bearer ${userLoggedIn.token}` } });
    };

    getUserProducts = async (): Promise<IUsersProducts> => {
        const user = localStorage.getItem("user");

        if (!user) throw new Error('Usuário não logado');

        const userLoggedIn = JSON.parse(user) as UserGetResult;

        const response = await axios.get<UsersProductsGetResult>(
            `https://helloelitxmq.com/api/product/user/${userLoggedIn.id}`,
            { headers: { Authorization: `Bearer ${userLoggedIn.token}` } });

        return {
            expiresWithinWeek: response.data.expires_within_week,
            expiresBetweenOneAndTwoWeeks: response.data.expires_between_one_and_two_weeks,
            expiresMoreThanTwoWeeks: response.data.expires_more_than_two_weeks
        }

    };

    concatProducts = (productsList: IUsersProducts | undefined): UsersProduct[] => {
        if(!productsList) return [];
        return productsList.expiresWithinWeek.concat(productsList.expiresBetweenOneAndTwoWeeks, productsList.expiresMoreThanTwoWeeks);
    }
}

export default new ProductService();

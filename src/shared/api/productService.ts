import axios from "axios";
import { IPostProduct, UsersProductsGetResult, IUsersProducts, UsersProduct, ProductDataGetResult } from "../../models/product";
import { UserGetResult } from "../../models/user";
import { formatDate } from "../utils/formUtils";

class ProductService {
    getProductByBarcode = async (barcode: string) => {
        /*const product = {
            barcode: barcode,
            // barcode: "7896070511019",
            name: "PULLMAN TRADICIONAL",
            description:
                "Preparações à base de cereais, farinhas, amidos, féculas ou de leite; produtos de pastelaria - Produtos de padaria, pastelaria ou da indústria de bolachas e biscoitos, mesmo adicionados de cacau; hóstias, cápsulas vazias para medicamentos, obreias, pastas secas de farinha, amido ou fécula, em folhas, e produtos semelhantes -  Outros - Pão de forma",
            brand: null,
            average_price: 18.99,
            image_url: "https://cdn-cosmos.bluesoft.com.br/products/7896070511019",
        } as any;*/
        const user = localStorage.getItem('user');
        if (!user) throw new Error('Usuário não logado');
        const userLoggedIn = JSON.parse(user) as UserGetResult;
        const product = await axios.get<ProductDataGetResult>(`http://localhost:9999/api/product?searchable_field=barcode&value=${barcode}`, { headers: { Authorization: `Bearer ${userLoggedIn.token}` } });

        /*await new Promise<void>((resolve) =>
            setTimeout(() => {
                resolve();
            }, 2500)
        );*/

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

        const response = await axios.post("http://localhost:9999/api/product/assign",
            payload,
            { headers: { Authorization: `Bearer ${userLoggedIn.token}` } });
        await new Promise<void>((resolve) =>
            setTimeout(() => {
                resolve();
            }, 2500)
        );
        return response;
    };

    getUserProducts = async (): Promise<IUsersProducts> => {
        const user = localStorage.getItem("user");

        if (!user) throw new Error('Usuário não logado');

        const userLoggedIn = JSON.parse(user) as UserGetResult;

        const response = await axios.get<UsersProductsGetResult>(
            `http://localhost:9999/api/product/user/${userLoggedIn.id}`,
            { headers: { Authorization: `Bearer ${userLoggedIn.token}` } });

        return {
            expiresWithinWeek: response.data.expires_within_week,
            expiresBetweenOneAndTwoWeeks: response.data.expires_between_one_and_two_weeks,
            expiresMoreThanTwoWeeks: response.data.expires_more_than_two_weeks
        }

    };

    concatProducts = (productsList: IUsersProducts): UsersProduct[] => {
        return productsList.expiresWithinWeek.concat(productsList.expiresBetweenOneAndTwoWeeks, productsList.expiresMoreThanTwoWeeks);
    }
}

export default new ProductService();

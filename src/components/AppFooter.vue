<template>
    <footer class="container-fluid">
        <section class="upper-footer">
            <div v-for="info in bookingList" :key="index" class="bookings">
                <h2>Bookings</h2>
                <p>{{ info.address }}</p>
                <p>T: {{ info.tel }}</p>
                <p>Email: {{ info.mail }}</p>
            </div>
            <div class="information">
                <h2>Information</h2>
                <ul class="p-0">
                    <li v-for="info in infoList" :key="index"> {{ info.info }}</li>
                </ul>
            </div>
            <div class="support">
                <h2>Support</h2>
                <ul class="p-0">
                    <li v-for="link in supportList" :key="index"> {{ link.link }}</li>
                </ul>
            </div>
            <div class="newsletter">
                <h2>Newsletter</h2>
                <div class="mb-3">
                    <input type="email" id="exampleFormControlInput1" placeholder="Email">
                </div>
                <div class="mb-3">
                    <textarea id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                </div>
                <button class="my-button">Send Message</button>
            </div>
        </section>
        <section class="lower-footer">
            <p class="m-0">© 2023 All rigths Reserved. Developed by TemplateMela</p>
        </section>
    </footer>
</template>
<script>
export default {
    name:'AppFooter',
    components:{

    },
    data() {
        return {
            bookingList: [
                {
                    address: '502 New Design Str, Melbourne, San Francisco, CA 94110, United States Of America Australia',
                    tel: '1 123-456-789',
                    mail: 'demo@example.com'
                }      
            ],
            infoList: [
                {
                    info: 'Product Support'
                },
                {
                    info:'Checkout'
                },
                {
                    info:'Report Abuse'
                },
                {
                    info: 'Redeem Voucher'
                },
                {
                    info: 'Order Status'
                }
            ],
            supportList: [
                {
                    link: 'Policies & Rules'
                },
                {
                    link: 'Privacy Policy'
                },
                {
                    link: 'License Policy'
                },
                {
                    link: 'My Account'
                },
                {
                    link: 'Locality'
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    li{
        list-style: none;
        color: gray;
    }
    p{
        color: gray;
    }
    .upper-footer{
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
        padding: 5rem 0;

        h2{
            margin-bottom: 1rem;
        }
        li{
            margin-bottom: 1rem;
        }
    }
    .bookings{
        width: 20ch;
    }
    input, textarea{
        background-color: transparent;
        color: gray;
        border: 1px solid rgb(51, 51, 51);
        padding: .25rem;
        width: 300px;
    }
    .lower-footer{
        text-align: center;
        padding: 2rem 0;
        border-top: 1px solid rgb(51, 51, 51);
    }
</style>
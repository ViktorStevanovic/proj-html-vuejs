<template>
    <footer class="container-fluid">
        <section class="upper-footer">
            <div v-for="info in bookingList" class="bookings">
                <h3>Bookings</h3>
                <p>{{ info.address }}</p>
                <p>T: {{ info.tel }}</p>
                <p>Email: {{ info.mail }}</p>
                <div class="social-icons">
                    <svg class="thebase-svg-icon thebase-instagram-alt-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Instagram</title><path d="M7 1c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v10c0 1.657 0.673 3.158 1.757 4.243s2.586 1.757 4.243 1.757h10c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243v-10c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757zM7 3h10c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828v10c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172h-10c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828v-10c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM16.989 11.223c-0.15-0.972-0.571-1.857-1.194-2.567-0.754-0.861-1.804-1.465-3.009-1.644-0.464-0.074-0.97-0.077-1.477-0.002-1.366 0.202-2.521 0.941-3.282 1.967s-1.133 2.347-0.93 3.712 0.941 2.521 1.967 3.282 2.347 1.133 3.712 0.93 2.521-0.941 3.282-1.967 1.133-2.347 0.93-3.712zM15.011 11.517c0.122 0.82-0.1 1.609-0.558 2.227s-1.15 1.059-1.969 1.18-1.609-0.1-2.227-0.558-1.059-1.15-1.18-1.969 0.1-1.609 0.558-2.227 1.15-1.059 1.969-1.18c0.313-0.046 0.615-0.042 0.87-0.002 0.74 0.11 1.366 0.47 1.818 0.986 0.375 0.428 0.63 0.963 0.72 1.543zM17.5 7.5c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path>
                    </svg>
                    <svg class="thebase-svg-icon thebase-facebook-alt2-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28"><title>Facebook</title><path d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z"></path>
				    </svg>
                    <svg class="thebase-svg-icon thebase-twitter-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Twitter</title><path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
                    </svg>
                    <svg class="thebase-svg-icon thebase-youtube-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><title>YouTube</title><path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path>
                    </svg>
                </div>
            </div>
            <div class="information">
                <h3>Information</h3>
                <ul class="p-0">
                    <li v-for="info in infoList" :key="index"> {{ info.info }}</li>
                </ul>
            </div>
            <div class="support">
                <h3>Support</h3>
                <ul class="p-0">
                    <li v-for="link in supportList" :key="index"> {{ link.link }}</li>
                </ul>
            </div>
            <div class="newsletter">
                <h3>Newsletter</h3>
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
@use '../styles/partials/variables' as *;

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

        h3{
            margin-bottom: 2rem;
            text-transform: uppercase;
        }
        li{
            margin-bottom: 1rem;
            cursor: pointer;
            &:hover {
                color:$orange;
            }
        }
    }
    .social-icons svg{
            margin-right: 1rem;
            margin-top: .5rem;
            width: 20px;
            cursor: pointer;
            &:hover {
                fill:$orange;
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
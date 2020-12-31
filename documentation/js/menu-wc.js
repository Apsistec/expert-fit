'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/logo.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutUsPageModule.html" data-type="entity-link">AboutUsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutUsPageModule-93ef472ae40a223358a59831f5ff127f"' : 'data-target="#xs-components-links-module-AboutUsPageModule-93ef472ae40a223358a59831f5ff127f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutUsPageModule-93ef472ae40a223358a59831f5ff127f"' :
                                            'id="xs-components-links-module-AboutUsPageModule-93ef472ae40a223358a59831f5ff127f"' }>
                                            <li class="link">
                                                <a href="components/AboutUsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutUsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutUsPageRoutingModule.html" data-type="entity-link">AboutUsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminDashboardPageModule.html" data-type="entity-link">AdminDashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminDashboardPageModule-df3ef878a0faeef7edba5160efb60117"' : 'data-target="#xs-components-links-module-AdminDashboardPageModule-df3ef878a0faeef7edba5160efb60117"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminDashboardPageModule-df3ef878a0faeef7edba5160efb60117"' :
                                            'id="xs-components-links-module-AdminDashboardPageModule-df3ef878a0faeef7edba5160efb60117"' }>
                                            <li class="link">
                                                <a href="components/AdminDashboardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminDashboardPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListUsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminDashboardPageRoutingModule.html" data-type="entity-link">AdminDashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-96bdf4fd3cc868d0d36378180271ddd8"' : 'data-target="#xs-components-links-module-AppModule-96bdf4fd3cc868d0d36378180271ddd8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-96bdf4fd3cc868d0d36378180271ddd8"' :
                                            'id="xs-components-links-module-AppModule-96bdf4fd3cc868d0d36378180271ddd8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BenefitTrackerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BenefitTrackerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutPageModule.html" data-type="entity-link">CheckoutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CheckoutPageModule-febf9b4326eb24d6022e20bd2b6c0061"' : 'data-target="#xs-components-links-module-CheckoutPageModule-febf9b4326eb24d6022e20bd2b6c0061"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckoutPageModule-febf9b4326eb24d6022e20bd2b6c0061"' :
                                            'id="xs-components-links-module-CheckoutPageModule-febf9b4326eb24d6022e20bd2b6c0061"' }>
                                            <li class="link">
                                                <a href="components/CheckoutPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckoutPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutPageRoutingModule.html" data-type="entity-link">CheckoutPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPageModule.html" data-type="entity-link">ContactPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactPageModule-6a6167efc42e07b9941ae1feb9f9ce57"' : 'data-target="#xs-components-links-module-ContactPageModule-6a6167efc42e07b9941ae1feb9f9ce57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactPageModule-6a6167efc42e07b9941ae1feb9f9ce57"' :
                                            'id="xs-components-links-module-ContactPageModule-6a6167efc42e07b9941ae1feb9f9ce57"' }>
                                            <li class="link">
                                                <a href="components/ContactPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPageRoutingModule.html" data-type="entity-link">ContactPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerDashboardPageModule.html" data-type="entity-link">CustomerDashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomerDashboardPageModule-fcb2af1873f2790f1824e275f0d00c9b"' : 'data-target="#xs-components-links-module-CustomerDashboardPageModule-fcb2af1873f2790f1824e275f0d00c9b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomerDashboardPageModule-fcb2af1873f2790f1824e275f0d00c9b"' :
                                            'id="xs-components-links-module-CustomerDashboardPageModule-fcb2af1873f2790f1824e275f0d00c9b"' }>
                                            <li class="link">
                                                <a href="components/BasicContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasicContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancelServiceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CancelServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerDashboardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomerDashboardPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvoicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsfeedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsfeedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NutritionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NutritionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PremiumContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PremiumContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserTicketsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserTicketsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VideosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkoutsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkoutsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerDashboardPageRoutingModule.html" data-type="entity-link">CustomerDashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeeDashboardPageModule.html" data-type="entity-link">EmployeeDashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmployeeDashboardPageModule-27ff9c4e4b1b18f35477236740bc1916"' : 'data-target="#xs-components-links-module-EmployeeDashboardPageModule-27ff9c4e4b1b18f35477236740bc1916"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmployeeDashboardPageModule-27ff9c4e4b1b18f35477236740bc1916"' :
                                            'id="xs-components-links-module-EmployeeDashboardPageModule-27ff9c4e4b1b18f35477236740bc1916"' }>
                                            <li class="link">
                                                <a href="components/EmployeeDashboardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmployeeDashboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeeDashboardPageRoutingModule.html" data-type="entity-link">EmployeeDashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FaqPageModule.html" data-type="entity-link">FaqPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FaqPageModule-26db0d70f65fe1f796fe4adad70dc614"' : 'data-target="#xs-components-links-module-FaqPageModule-26db0d70f65fe1f796fe4adad70dc614"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FaqPageModule-26db0d70f65fe1f796fe4adad70dc614"' :
                                            'id="xs-components-links-module-FaqPageModule-26db0d70f65fe1f796fe4adad70dc614"' }>
                                            <li class="link">
                                                <a href="components/FaqPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FaqPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqPageRoutingModule.html" data-type="entity-link">FaqPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageModule.html" data-type="entity-link">ForgotPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgotPasswordPageModule-9d9b24501ed478b44b780509d26fcfe7"' : 'data-target="#xs-components-links-module-ForgotPasswordPageModule-9d9b24501ed478b44b780509d26fcfe7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgotPasswordPageModule-9d9b24501ed478b44b780509d26fcfe7"' :
                                            'id="xs-components-links-module-ForgotPasswordPageModule-9d9b24501ed478b44b780509d26fcfe7"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageRoutingModule.html" data-type="entity-link">ForgotPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GalleryPageModule.html" data-type="entity-link">GalleryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' : 'data-target="#xs-components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' :
                                            'id="xs-components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' }>
                                            <li class="link">
                                                <a href="components/GalleryPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GalleryPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GalleryPageRoutingModule.html" data-type="entity-link">GalleryPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-62543ba25d36ae083e5dd06298ea25d7"' : 'data-target="#xs-components-links-module-HomePageModule-62543ba25d36ae083e5dd06298ea25d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-62543ba25d36ae083e5dd06298ea25d7"' :
                                            'id="xs-components-links-module-HomePageModule-62543ba25d36ae083e5dd06298ea25d7"' }>
                                            <li class="link">
                                                <a href="components/BenefitTrackerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BenefitTrackerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageThreeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageThreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageTwoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageTwoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsPageModule.html" data-type="entity-link">ProductsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsPageModule-1da41ae0f9633926ff20daea57d56421"' : 'data-target="#xs-components-links-module-ProductsPageModule-1da41ae0f9633926ff20daea57d56421"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsPageModule-1da41ae0f9633926ff20daea57d56421"' :
                                            'id="xs-components-links-module-ProductsPageModule-1da41ae0f9633926ff20daea57d56421"' }>
                                            <li class="link">
                                                <a href="components/ProductsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsPageRoutingModule.html" data-type="entity-link">ProductsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedDirectivesModule.html" data-type="entity-link">SharedDirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' : 'data-target="#xs-directives-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' :
                                        'id="xs-directives-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' }>
                                        <li class="link">
                                            <a href="directives/BlinkDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlinkDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FadeHeaderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FadeHeaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HasPermissionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HasPermissionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideHeaderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HideHeaderDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' : 'data-target="#xs-pipes-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' :
                                            'id="xs-pipes-links-module-SharedDirectivesModule-eeac022d8f159aa7a673df10fdd8f434"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ToHttpsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToHttpsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0e4efdd0f68e5cb7cf64a7fa22c1dd8c"' : 'data-target="#xs-components-links-module-SharedModule-0e4efdd0f68e5cb7cf64a7fa22c1dd8c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0e4efdd0f68e5cb7cf64a7fa22c1dd8c"' :
                                            'id="xs-components-links-module-SharedModule-0e4efdd0f68e5cb7cf64a7fa22c1dd8c"' }>
                                            <li class="link">
                                                <a href="components/AboutAppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutAppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BenefitsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BenefitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopoverComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RatingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VideoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonialsPageModule.html" data-type="entity-link">TestimonialsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonialsPageModule-80faf3cb8fcbc0d5d110706ec0d19abd"' : 'data-target="#xs-components-links-module-TestimonialsPageModule-80faf3cb8fcbc0d5d110706ec0d19abd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonialsPageModule-80faf3cb8fcbc0d5d110706ec0d19abd"' :
                                            'id="xs-components-links-module-TestimonialsPageModule-80faf3cb8fcbc0d5d110706ec0d19abd"' }>
                                            <li class="link">
                                                <a href="components/TestimonialsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonialsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonialsPageRoutingModule.html" data-type="entity-link">TestimonialsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UnknownPageModule.html" data-type="entity-link">UnknownPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UnknownPageModule-0514c1eaca94bda512e8cff9e21dfe80"' : 'data-target="#xs-components-links-module-UnknownPageModule-0514c1eaca94bda512e8cff9e21dfe80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UnknownPageModule-0514c1eaca94bda512e8cff9e21dfe80"' :
                                            'id="xs-components-links-module-UnknownPageModule-0514c1eaca94bda512e8cff9e21dfe80"' }>
                                            <li class="link">
                                                <a href="components/UnknownPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnknownPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UnknownPageRoutingModule.html" data-type="entity-link">UnknownPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailModule.html" data-type="entity-link">VerifyEmailModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailRoutingModule.html" data-type="entity-link">VerifyEmailRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/VerifyEmailPage.html" data-type="entity-link">VerifyEmailPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link">ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CollectionService.html" data-type="entity-link">CollectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConferenceData.html" data-type="entity-link">ConferenceData</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FcmService.html" data-type="entity-link">FcmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link">MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link">NetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhotoService.html" data-type="entity-link">PhotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PopoverService.html" data-type="entity-link">PopoverService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link">ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeoService.html" data-type="entity-link">SeoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerService.html" data-type="entity-link">SpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link">StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StripeService.html" data-type="entity-link">StripeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TicketService.html" data-type="entity-link">TicketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateService.html" data-type="entity-link">UpdateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserData.html" data-type="entity-link">UserData</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorService.html" data-type="entity-link">InterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LoggedInGuard.html" data-type="entity-link">LoggedInGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PaidGuard.html" data-type="entity-link">PaidGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link">RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Admin.html" data-type="entity-link">Admin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Benefit.html" data-type="entity-link">Benefit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link">Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee.html" data-type="entity-link">Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FAQ.html" data-type="entity-link">FAQ</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GymLocation.html" data-type="entity-link">GymLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GymSession.html" data-type="entity-link">GymSession</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Photo.html" data-type="entity-link">Photo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rating.html" data-type="entity-link">Rating</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
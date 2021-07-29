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
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
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
                                            'data-target="#components-links-module-AboutUsPageModule-74b2b18c7d1c260b2dc35d74fc47aca4"' : 'data-target="#xs-components-links-module-AboutUsPageModule-74b2b18c7d1c260b2dc35d74fc47aca4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutUsPageModule-74b2b18c7d1c260b2dc35d74fc47aca4"' :
                                            'id="xs-components-links-module-AboutUsPageModule-74b2b18c7d1c260b2dc35d74fc47aca4"' }>
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
                                <a href="modules/AdminPageModule.html" data-type="entity-link">AdminPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPageModule-8f855977669baab9443f792873181b78"' : 'data-target="#xs-components-links-module-AdminPageModule-8f855977669baab9443f792873181b78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPageModule-8f855977669baab9443f792873181b78"' :
                                            'id="xs-components-links-module-AdminPageModule-8f855977669baab9443f792873181b78"' }>
                                            <li class="link">
                                                <a href="components/AdminDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPageRoutingModule.html" data-type="entity-link">AdminPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b8f49cc88b2723309ada759317d48309"' : 'data-target="#xs-components-links-module-AppModule-b8f49cc88b2723309ada759317d48309"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b8f49cc88b2723309ada759317d48309"' :
                                            'id="xs-components-links-module-AppModule-b8f49cc88b2723309ada759317d48309"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
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
                                <a href="modules/ChoicesPageModule.html" data-type="entity-link">ChoicesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChoicesPageModule-098f21b313f97c606a2521604441c652"' : 'data-target="#xs-components-links-module-ChoicesPageModule-098f21b313f97c606a2521604441c652"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChoicesPageModule-098f21b313f97c606a2521604441c652"' :
                                            'id="xs-components-links-module-ChoicesPageModule-098f21b313f97c606a2521604441c652"' }>
                                            <li class="link">
                                                <a href="components/ChoicesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChoicesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChoicesPageRoutingModule.html" data-type="entity-link">ChoicesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPageModule.html" data-type="entity-link">ContactPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactPageModule-a6a3bcd3184a2ebb71ef6d43ab54b7c0"' : 'data-target="#xs-components-links-module-ContactPageModule-a6a3bcd3184a2ebb71ef6d43ab54b7c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactPageModule-a6a3bcd3184a2ebb71ef6d43ab54b7c0"' :
                                            'id="xs-components-links-module-ContactPageModule-a6a3bcd3184a2ebb71ef6d43ab54b7c0"' }>
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
                                <a href="modules/FacilityPageModule.html" data-type="entity-link">FacilityPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FacilityPageModule-3b3511854763bc5c4d850eb7fb21964b"' : 'data-target="#xs-components-links-module-FacilityPageModule-3b3511854763bc5c4d850eb7fb21964b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FacilityPageModule-3b3511854763bc5c4d850eb7fb21964b"' :
                                            'id="xs-components-links-module-FacilityPageModule-3b3511854763bc5c4d850eb7fb21964b"' }>
                                            <li class="link">
                                                <a href="components/FacilityPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FacilityPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FacilityPageRoutingModule.html" data-type="entity-link">FacilityPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FaqPageModule.html" data-type="entity-link">FaqPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FaqPageModule-ce5cfac2debeea36a8602ed094231f35"' : 'data-target="#xs-components-links-module-FaqPageModule-ce5cfac2debeea36a8602ed094231f35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FaqPageModule-ce5cfac2debeea36a8602ed094231f35"' :
                                            'id="xs-components-links-module-FaqPageModule-ce5cfac2debeea36a8602ed094231f35"' }>
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
                                <a href="modules/GalleryPageModule.html" data-type="entity-link">GalleryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GalleryPageModule-de648b9783c202c0169577f4e816a6bf"' : 'data-target="#xs-components-links-module-GalleryPageModule-de648b9783c202c0169577f4e816a6bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GalleryPageModule-de648b9783c202c0169577f4e816a6bf"' :
                                            'id="xs-components-links-module-GalleryPageModule-de648b9783c202c0169577f4e816a6bf"' }>
                                            <li class="link">
                                                <a href="components/FileUploaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileUploaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GalleryPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GalleryPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageUploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhotoUploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PhotoUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhotosListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PhotosListComponent</a>
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
                                            'data-target="#components-links-module-HomePageModule-4066f76e9e613eee9a4954e114e14e81"' : 'data-target="#xs-components-links-module-HomePageModule-4066f76e9e613eee9a4954e114e14e81"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-4066f76e9e613eee9a4954e114e14e81"' :
                                            'id="xs-components-links-module-HomePageModule-4066f76e9e613eee9a4954e114e14e81"' }>
                                            <li class="link">
                                                <a href="components/BenefitsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BenefitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BenefitsTrackerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BenefitsTrackerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageFourComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageFourComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageThreeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageThreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageTwoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageTwoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntroVideoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntroVideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LineChartModule.html" data-type="entity-link">LineChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LineChartModule-251a71a7cf262db0d437f03f4027c2ac"' : 'data-target="#xs-components-links-module-LineChartModule-251a71a7cf262db0d437f03f4027c2ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LineChartModule-251a71a7cf262db0d437f03f4027c2ac"' :
                                            'id="xs-components-links-module-LineChartModule-251a71a7cf262db0d437f03f4027c2ac"' }>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalViewPageModule.html" data-type="entity-link">ModalViewPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalViewPageModule-af4e0ad4113530f744ddbdd1486b7886"' : 'data-target="#xs-components-links-module-ModalViewPageModule-af4e0ad4113530f744ddbdd1486b7886"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalViewPageModule-af4e0ad4113530f744ddbdd1486b7886"' :
                                            'id="xs-components-links-module-ModalViewPageModule-af4e0ad4113530f744ddbdd1486b7886"' }>
                                            <li class="link">
                                                <a href="components/ModalViewPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalViewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalViewPageRoutingModule.html" data-type="entity-link">ModalViewPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NutritionPageModule.html" data-type="entity-link">NutritionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NutritionPageModule-e0c5e8b0de1f8539aad5d62213a46218"' : 'data-target="#xs-components-links-module-NutritionPageModule-e0c5e8b0de1f8539aad5d62213a46218"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NutritionPageModule-e0c5e8b0de1f8539aad5d62213a46218"' :
                                            'id="xs-components-links-module-NutritionPageModule-e0c5e8b0de1f8539aad5d62213a46218"' }>
                                            <li class="link">
                                                <a href="components/NutritionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NutritionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NutritionPageRoutingModule.html" data-type="entity-link">NutritionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsPageModule.html" data-type="entity-link">ProductsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsPageModule-7ee21d8f19ff6fd668eca4c00cfee24f"' : 'data-target="#xs-components-links-module-ProductsPageModule-7ee21d8f19ff6fd668eca4c00cfee24f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsPageModule-7ee21d8f19ff6fd668eca4c00cfee24f"' :
                                            'id="xs-components-links-module-ProductsPageModule-7ee21d8f19ff6fd668eca4c00cfee24f"' }>
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
                                <a href="modules/SafetyPageModule.html" data-type="entity-link">SafetyPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafetyPageModule-3c8f1e822814b0b7e610da204d51e7dc"' : 'data-target="#xs-components-links-module-SafetyPageModule-3c8f1e822814b0b7e610da204d51e7dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafetyPageModule-3c8f1e822814b0b7e610da204d51e7dc"' :
                                            'id="xs-components-links-module-SafetyPageModule-3c8f1e822814b0b7e610da204d51e7dc"' }>
                                            <li class="link">
                                                <a href="components/SafetyPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafetyPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafetyPageRoutingModule.html" data-type="entity-link">SafetyPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedDirectivesModule.html" data-type="entity-link">SharedDirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' : 'data-target="#xs-directives-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' :
                                        'id="xs-directives-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' }>
                                        <li class="link">
                                            <a href="directives/HasPermissionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HasPermissionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' : 'data-target="#xs-pipes-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' :
                                            'id="xs-pipes-links-module-SharedDirectivesModule-6bad8664656591ce556321ad71c11084"' }>
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
                                            'data-target="#components-links-module-SharedModule-f95e8966a852cd167b0200f3327d4bca"' : 'data-target="#xs-components-links-module-SharedModule-f95e8966a852cd167b0200f3327d4bca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f95e8966a852cd167b0200f3327d4bca"' :
                                            'id="xs-components-links-module-SharedModule-f95e8966a852cd167b0200f3327d4bca"' }>
                                            <li class="link">
                                                <a href="components/AboutAppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutAppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhoneAuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PhoneAuthComponent</a>
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
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToggleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToggleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestimonialsPageModule.html" data-type="entity-link">TestimonialsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestimonialsPageModule-5c8b56fb0eaa8172b4ecc7fa7b3beeea"' : 'data-target="#xs-components-links-module-TestimonialsPageModule-5c8b56fb0eaa8172b4ecc7fa7b3beeea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestimonialsPageModule-5c8b56fb0eaa8172b4ecc7fa7b3beeea"' :
                                            'id="xs-components-links-module-TestimonialsPageModule-5c8b56fb0eaa8172b4ecc7fa7b3beeea"' }>
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
                                            'data-target="#components-links-module-UnknownPageModule-a7191d69d3a5f2f39fa5e4214f1ece87"' : 'data-target="#xs-components-links-module-UnknownPageModule-a7191d69d3a5f2f39fa5e4214f1ece87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UnknownPageModule-a7191d69d3a5f2f39fa5e4214f1ece87"' :
                                            'id="xs-components-links-module-UnknownPageModule-a7191d69d3a5f2f39fa5e4214f1ece87"' }>
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
                                <a href="modules/UserPageModule.html" data-type="entity-link">UserPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserPageModule-9a526903e7a95e515036ca4e477531d2"' : 'data-target="#xs-components-links-module-UserPageModule-9a526903e7a95e515036ca4e477531d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserPageModule-9a526903e7a95e515036ca4e477531d2"' :
                                            'id="xs-components-links-module-UserPageModule-9a526903e7a95e515036ca4e477531d2"' }>
                                            <li class="link">
                                                <a href="components/CancelServiceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CancelServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvoicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewReviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsFormComponent</a>
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
                                                <a href="components/SupportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserTicketsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserTicketsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebrtcComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WebrtcComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserPageRoutingModule.html" data-type="entity-link">UserPageRoutingModule</a>
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
                                <a href="components/ProductsPage.html" data-type="entity-link">ProductsPage</a>
                            </li>
                            <li class="link">
                                <a href="components/WebcamComponent.html" data-type="entity-link">WebcamComponent</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BenefitsService.html" data-type="entity-link">BenefitsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link">CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CollectionService.html" data-type="entity-link">CollectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseUploadService.html" data-type="entity-link">FirebaseUploadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirestoreService.html" data-type="entity-link">FirestoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link">LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link">MessageService</a>
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
                                    <a href="injectables/ReviewService.html" data-type="entity-link">ReviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScrollService.html" data-type="entity-link">ScrollService</a>
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
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
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
                                <a href="interfaces/Benefit.html" data-type="entity-link">Benefit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cart.html" data-type="entity-link">Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FAQ.html" data-type="entity-link">FAQ</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageData.html" data-type="entity-link">ImageData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MyData.html" data-type="entity-link">MyData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Phase.html" data-type="entity-link">Phase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Photo.html" data-type="entity-link">Photo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Price.html" data-type="entity-link">Price</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Review.html" data-type="entity-link">Review</a>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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
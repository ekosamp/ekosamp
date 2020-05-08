let content = [];content.push(document.write(unescape('<link href="https://www.cekpengiriman.com/widget/cpstyle.min.css" rel="stylesheet" type="text/css" />

<div class="widgetMainCP">
    <div class="tabs">
        <div class="resiTab tab-link current" data-tab="resi">Resi</div>
        <div class="domestikTab tab-link" data-tab="domestik">Domestik</div>
        <div class="mancanegaraTab tab-link" data-tab="mancanegara">Mancanegara</div>
        <div class="clear"></div>
    </div>

    <div class="tabs-content">
        <div id="resi" class="tab-content current">
            <div class="top">
                <div class="column nomor">
                    <input type="text" id="nomor" class="normalShadow" name="nomor" placeholder="Nomor resi" />
                </div>
                <div class="column kurir">
                    <select id="kurir" name="kurir" class="normalShadow">
                        <option value="" selected disabled>Kurir</option>
                        <option value="jne">Jalur Nugraha Ekakurir (JNE)</option>
                        <option value="pos">POS Indonesia (POS)</option>
                        <option value="tiki">Citra Van Titipan Kilat (TIKI)</option>
                        <option value="wahana">Wahana Prestasi Logistik (WAHANA)</option>
                        <option value="sicepat">SiCepat Express (SICEPAT)</option>
                        <option value="jnt">J&T Express (J&T)</option>
                       
                    </select>
                </div>
                <div class="column action">
                    <button>Cek Paket</button>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div id="domestik" class="tab-content">
            <div class="top">
                <div class="column asal">
                    <input type='text' placeholder='Kota asal' class='flexdatalistGetCity normalShadow' id="originDomestik" name="origin" data-selection-required='true' data-min-length='2' />
                </div>
                <div class="column tujuan">
                    <input type='text' placeholder='Kota tujuan' class='flexdatalistGetCity normalShadow' id="destinationDomestik" name="destination" data-selection-required='true' data-min-length='2'/>
                </div>
                <div class="column berat">
                    <input type="number" id="weightDomestik" class="normalShadow" name="weight" placeholder="Berat" />
                    <span>/gram</span>
                </div>
                <div class="column filter">
                    <div class="wrapFilter">
                        <div class="titleFilter"><span></span>Pilih Kurir</div>
                    </div>

                    <div class="showFilterWrap">
                        <div class="showFilter">
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="jne" value="jne" checked />
                                <label for="jne">JNE</label>
                            </div>
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="pos" value="pos" checked />
                                <label for="pos">POS</label>
                            </div>
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="tiki" value="tiki" checked />
                                <label for="tiki">TIKI</label>
                            </div>
                            
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="wahana" value="wahana"/>
                                <label for="wahana">WAHANA</label>
                            </div>
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="sicepat" value="sicepat" checked />
                                <label for="sicepat">SICEPAT</label>
                            </div>
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="jnt" value="jnt" checked />
                                <label for="jnt">JNT</label>
                            </div>
                        
                           
                        </div>
                    </div>

                </div>
                <div class="column action">
                    <button>Cek Ongkir</button>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div id="mancanegara" class="tab-content">
            <div class="top">
                <div class="column asal">
                    <input type='text' placeholder='Kota asal' class='flexdatalistGetOriginCountry normalShadow' id="originMancanegara" name="origin" data-selection-required='true' data-min-length='2' />
                </div>
                <div class="column tujuan">
                    <input type='text' placeholder='Negara Tujuan' class='flexdatalistGetCountry normalShadow' id="destinationMancanegara" name="destination" data-selection-required='true' data-min-length='2' />
                </div>
                <div class="column berat">
                    <input type="number" id="weightMancanegara" class="normalShadow" name="weight" placeholder="Berat" />
                    <span>/gram</span>
                </div>
                <div class="column filter">
                    <div class="wrapFilter">
                        <div class="titleFilter"><span></span>Pilih Kurir</div>
                    </div>

                    <div class="showFilterWrap">
                        <div class="showFilter">
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="jneI" value="jne" checked />
                                <label for="jneI">JNE</label>
                            </div>
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="posI" value="pos" checked />
                                <label for="posI">POS</label>
                            </div>
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="slisI" value="slis" checked />
                                <label for="slisI">SLIS</label>
                            </div>
                            <div class="listCheckbox">
                                <input class="apple-switch" type="checkbox" id="expedito" value="expedito" checked />
                                <label for="expedito">EXPEDITO</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="column action">
                    <button>Cek Ongkir</button>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>

<script src="https://www.cekpengiriman.com/widget/jquery-3.4.1.min.js"></script>
<script src="https://www.cekpengiriman.com/widget/cp.min.js"></script>'))
);document.getElementById("cp_widget_free").append(content);

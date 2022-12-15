//  Usefull links :
//  http://xpather.com/
//  https://developer.mozilla.org/en-US/docs/Web/API/XPathResult

(function loadData(){
    let xmlContent = '';
		let tableStudies = document.getElementById("studies");
		fetch('Study.xml').then((response)=>{
			response.text().then((xml)=>{
				xmlContent = xml;
				let parser = new DOMParser();
				let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                console.log(xmlDOM);
				let sys_System = xmlDOM.evaluate("//*[@alias='sys_System']", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.children[0].innerHTML;
                let sm_StudyName = xmlDOM.evaluate("//*[@alias='sm_Study']/name", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                let sm_StudyState = xmlDOM.evaluate("//*[@alias='sm_Study']/state", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                let sm_TaskKeyedName = xmlDOM.evaluate("//*[@alias='sm_Task']/keyed_name", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                let ar_SimulationResultResultName = xmlDOM.evaluate("//*[@alias='ar_SimulationResult']/ar_resultname", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                let ar_SimulationResultValue = xmlDOM.evaluate("//*[@alias='ar_SimulationResult']/ar_resultvalue", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                let ar_SimulationResultUnit = xmlDOM.evaluate("//*[@alias='ar_SimulationResult']/ar_resultunit", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                let ar_TargetMet = xmlDOM.evaluate("//*[@alias='ar_SimulationResult']/ar_target_met", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                let re_Requirement = xmlDOM.evaluate("//*[@alias='re_Requirement']/ar_conditionexp", xmlDOM, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;


                    let row = document.createElement('tr');
					//study
					let td = document.createElement('td');
					td.innerText = unEscape(sys_System);
					row.appendChild(td);

                    let td2 = document.createElement('td');
					td2.innerText = unEscape(sm_StudyName);
					row.appendChild(td2);

                    let td3 = document.createElement('td');
                    td3.innerText = unEscape(sm_StudyState);
                    row.appendChild(td3);

                    let td4 = document.createElement('td');
					td4.innerText = unEscape(sm_TaskKeyedName);
					row.appendChild(td4);

                    let td5 = document.createElement('td');
                    td5.innerText = unEscape(ar_SimulationResultResultName);
                    row.appendChild(td5);

                    let td6 = document.createElement('td');
                    td6.innerText = unEscape(ar_SimulationResultValue);
                    row.appendChild(td6);

                    let td7 = document.createElement('td');
                    td7.innerText = unEscape(ar_SimulationResultUnit);
                    row.appendChild(td7);

                    let td8 = document.createElement('td');
                    td8.innerText = unEscape(ar_TargetMet);
                    row.appendChild(td8);

                    let td9 = document.createElement('td');
                    td9.innerText = unEscape(re_Requirement)
                    row.appendChild(td9);

					tableStudies.children[1].appendChild(row);

					
				
			})
		});
})();


        function exportData() {
            export_table_to_csv("test.csv")
        }

        function unEscape(htmlStr) {
            htmlStr = htmlStr.replace(/&lt;/g , "<");	 
            htmlStr = htmlStr.replace(/&gt;/g , ">");     
            htmlStr = htmlStr.replace(/&quot;/g , "\"");  
            htmlStr = htmlStr.replace(/&#39;/g , "\'");   
            htmlStr = htmlStr.replace(/&amp;/g , "&");
            return htmlStr;
        }
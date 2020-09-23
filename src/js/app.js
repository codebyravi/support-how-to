
import contentLoaded from "content-loaded";
import SmoothScroll from "./imports/smoothScroll";


contentLoaded().then(() => {
  /**
   * Enable search
   */
  try {
    let lastRenderArgs;

const infiniteHits = instantsearch.connectors.connectInfiniteHits(
  (renderArgs, isFirstRender) => {
    const { hits, showMore, widgetParams } = renderArgs;
    const { container } = widgetParams;

    lastRenderArgs = renderArgs;

    if (isFirstRender) {
      const sentinel = document.createElement('div');
      container.appendChild(document.createElement('ul'));
      container.appendChild(sentinel);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !lastRenderArgs.isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinel);

      return;
    }

    container.querySelector('ul').innerHTML = hits
      .map(
        hit =>
          `<li>
            <div class="ais-Hits-item">
              <header class="hit-name">
                ${instantsearch.highlight({ attribute: 'name', hit })}
              </header>
              <img src="${hit.image}" align="left" />
              <p class="hit-description">
                ${instantsearch.highlight({ attribute: 'description', hit })}
              </p>
              <p class="hit-price">$${hit.price}</p>
            </div>
          </li>`
      )
      .join('');
  }
);
    const search = instantsearch({
      indexName: ALGOLIA_SUPPORT_INDEX,
      searchClient: algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY),
      searchFunction(helper) {
        const hitsContainer = document.querySelector('#hits');
        const paginationContainer = document.querySelector('#pagination');
        hitsContainer.style.display = helper.state.query === '' ? 'none' : '';
        paginationContainer.style.display = helper.state.query === '' ? 'none' : '';
        helper.search();
      },
    });
    search.addWidgets([
      instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: '',
        autofocus: true,
        showLoadingIndicator: true,
        searchAsYouType: true,
        wrapInput: false,
        magnifier: false,
        reset: false,
        poweredBy: false
      }),
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          item: function (data) {
            let returnResult = '';
            if (data.product) {
              returnResult = returnResult + `<p class="search-product"><a class="search-product-link" href="/support/how-to/">How-To</a> &nbsp; > 	&nbsp; <a href=/support/how-to/`+ data.product_url +`>` + data._highlightResult.product.value + `</a></p>`;
            } else {
              returnResult += `<span></span>`;
            }
            if (data.title) {
              returnResult = returnResult + `<h2>
              <a class="search-title" href=/support` + data.relpermalink + `>`
                +data._highlightResult.title.value+
              `</a>
              </h2>`;
            } else {
              returnResult += `<span></span>`;
            }
            if (data.summary) {
              returnResult = returnResult + `<a class="search-summary-link" href=/support` + data.relpermalink + `><p class="search-summary">` + data._highlightResult.summary.value + `</p></a>`;
            } else {
              returnResult += `<span></span>`;
            }
            if (data.created_by) {
              returnResult = returnResult + `<span class="search-author"> By &nbsp;`+ data._highlightResult.created_by.value + `</span>`
            } else {
              returnResult += `<span></span>`;
            }
            if (data.created_date) {
              returnResult = returnResult + `<span class="search-date">`+data._highlightResult.created_date.value + `</span>`
            } else {
              returnResult += `<span></span>`;
            }
            return returnResult;
          }
        },
      }),
      instantsearch.widgets.pagination({
        container: '#pagination',
      }),
    ]);
    search.start();
  } catch (err) {
    console.warn(err)
  }
  /**
   * Actvate smooth scrolling for the entire
   * website for hash links
   */
  SmoothScroll()

})
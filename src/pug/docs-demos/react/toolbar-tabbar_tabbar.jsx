import React, { useState } from 'react';
import { Page, Navbar, Toolbar, Link, Block, NavRight, Tabs, Tab } from 'framework7-react';

export default () => {
  const [isBottom, setIsBottom] = useState(true);
  return (
    <Page pageContent={false}>
      <Navbar title="Tabbar" backLink="Back">
        <NavRight>
          <Link
            iconIos="f7:arrow_up_arrow_down_circle_fill"
            iconAurora="f7:arrow_up_arrow_down_circle_fill"
            iconMd="material:compare_arrows"
            onClick={() => setIsBottom(!isBottom)}
          ></Link>
        </NavRight>
      </Navbar>

      <Toolbar tabbar position={isBottom ? 'bottom' : 'top'}>
        <Link tabLink="#tab-1" tabLinkActive>
          Tab 1
        </Link>
        <Link tabLink="#tab-2">Tab 2</Link>
        <Link tabLink="#tab-3">Tab 3</Link>
      </Toolbar>

      <Tabs>
        <Tab id="tab-1" className="page-content" tabActive>
          <Block>
            <p>Tab 1 content</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
              facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
              suscipit temporibus sequi iure ad laboriosam accusamus?
            </p>
            <p>
              Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
              blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus
              sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
              deleniti.
            </p>
            <p>
              Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
              est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet
              unde delectus a maiores nihil dolores? Natus, perferendis.
            </p>
            <p>
              Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
              perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
              ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
            </p>
            <p>
              Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
              ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
              explicabo, unde aliquid impedit! Adipisci!
            </p>
            <p>
              Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
              fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
              accusantium, officiis veniam nostrum cum cumque impedit.
            </p>
            <p>
              Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
              praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
              provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
            </p>
          </Block>
        </Tab>
        <Tab id="tab-2" className="page-content">
          <Block>
            <p>Tab 2 content</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
              facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
              suscipit temporibus sequi iure ad laboriosam accusamus?
            </p>
            <p>
              Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
              blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus
              sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
              deleniti.
            </p>
            <p>
              Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
              est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet
              unde delectus a maiores nihil dolores? Natus, perferendis.
            </p>
            <p>
              Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
              perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
              ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
            </p>
            <p>
              Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
              ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
              explicabo, unde aliquid impedit! Adipisci!
            </p>
            <p>
              Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
              fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
              accusantium, officiis veniam nostrum cum cumque impedit.
            </p>
            <p>
              Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
              praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
              provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
            </p>
          </Block>
        </Tab>
        <Tab id="tab-3" className="page-content">
          <Block>
            <p>Tab 3 content</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
              facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
              suscipit temporibus sequi iure ad laboriosam accusamus?
            </p>
            <p>
              Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
              blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus
              sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
              deleniti.
            </p>
            <p>
              Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
              est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet
              unde delectus a maiores nihil dolores? Natus, perferendis.
            </p>
            <p>
              Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
              perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
              ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
            </p>
            <p>
              Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
              ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
              explicabo, unde aliquid impedit! Adipisci!
            </p>
            <p>
              Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
              fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
              accusantium, officiis veniam nostrum cum cumque impedit.
            </p>
            <p>
              Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
              praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
              provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
            </p>
          </Block>
        </Tab>
      </Tabs>
    </Page>
  );
};

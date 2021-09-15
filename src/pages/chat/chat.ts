import { Contact, Input, Message, Sender } from '../../components';
import { createBlock } from '../../core/createBlock';

import './chat.scss';

const template = `
<div class="chat">
  <div class="panel">
     components.Search 
    <div class="contact-list">
       components.contactsList 
    </div>
  </div>
  <div class="main">
    <div class="main-field">
       components.messagesList 
    </div>
    <div class="wrapper">
       components.Sender 
    </div>
  </div>
  </div>
</div>
`;

export const Chat = () => {

  const components = {
    // contactsList: [
    //   Contact(),
    //   Contact(),
    //   Contact(),
    //   Contact(),
    //   Contact(),
    //   Contact(),
    //   Contact(),
    //   Contact(),
    //   Contact(),
    //   Contact()
    // ],
    // Search: Input({ label: 'Search' }),
    // messagesList: [
    //   Message({ text: 'My test message with mock text', class: 'my' }),
    //   Message({
    //     text: 'Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime, sit in.Odio deserunt porro nesciunt nostrum labore est rerum et.'
    //   }),
    //   Message({
    //     text: 'Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime'
    //   }),
    //   Message({
    //     text: 'Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime, sit in.Odio deserunt porro nesciunt nostrum labore est rerum et.'
    //   }),
    //   Message({
    //     text: 'Quae, ut commodi. Et eligendi quo atque, animi, earum harum veniam tempore eos repudiandae distinctio similique ullam amet quasi maxime'
    //   }),
    //   Message({ text: 'My test message with mock text', class: 'my' })
    // ],
    // Sender: Sender()
  };
  return createBlock({ components, template });
};

import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col gap-4">
      <Accordion
        title="Care este specificul berilor produse de Berăria Litra?"
        answer="Berăria Litra respectă Reinheitsgebot (Legea Purității Germane), utilizând doar ingrediente naturale: apă, malț, hamei și drojdie. Totuși, pentru beri sezoniere, adaugă ingrediente locale precum fructe sau condimente naturale. "
      />
      <Accordion 
        title="Ce inițiative educative are Berăria Litra pentru promovarea berii?"
        answer="Litra organizează tururi ghidate la fabrică, unde vizitatorii pot afla despre procesul de producție și pot degusta sortimente de bere."
      />
      <Accordion title="Cum contribuie Berăria Litra la cultura berii artizanale din Moldova?" 
      answer="Fiind fondată în 2013 de familia Litra, această berărie s-a remarcat prin producerea de beri artizanale de înaltă calitate și prin utilizarea tehnologiilor germane. De asemenea, participă la concursuri internaționale de prestigiu." />
    </div>
  );
};

export default FAQ;
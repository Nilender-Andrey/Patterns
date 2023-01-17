Паттерн Заместитель (Proxy pattern) предоставляет суррогатный объект, управляющий доступом к другому объекту. Выделяют несколько вариантов управления доступом в заместителях:

- удаленный заместитель управляет доступом к удаленному объекту;
- виртуальный заместитель управляет доступом к ресурсу, создание которого требует больших затрат ресурсов;
- защитный заместитель контролирует доступ к ресурсу в соответствии с системой привилегий.

Данный паттерн относится к структурным паттернам. Основная реализация основана на отложенной инициализации объекта. Данный паттерн полезно использовать там, где приходится работать с дорогими ресурсами, например, пусть создание реального объекта или его использование занимает много ресурсов, тогда прокси-объект может взять на себя часть обязанностей данного объекта с целью избегания лишних обращений к нему, например, прокси может иметь кэш, который можно отдавать клиентам на их запросы, вместо повторного обращения к ресурсам.
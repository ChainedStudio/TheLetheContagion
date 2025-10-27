global.nukelist = [
    'minecraft:shield',
    'modid:fluid',
    '@modid',
]

ServerEvents.tags('item', event => {
   event.removeAllTagsFrom(global.nukelist)
   event.add('caramel:nukelist', global.nukelist)
   event.add('c:hidden_from_recipe_viewers', global.nukelist)
})

ServerEvents.tags('fluid', event => {
   event.removeAllTagsFrom(global.nukelist)
   event.add('modpack:nukelist', global.nukelist)
   event.add('c:hidden_from_recipe_viewers', global.nukelist)
})

ServerEvents.recipes(event => {
   event.remove({ input: global.nukelist })
   event.remove({ output: global.nukelist })
})


// This below bit is optional, but makes reloading the nukelist easier by running the required commands.



PlayerEvents.chat(event => {
   if (event.message == 'nukelist reload') {
      event.server.runCommand(`tell @a Now reloading Nukelist scripts`)
      event.server.runCommand(`reload`)
      event.server.runCommand(`kubejs reload client_scripts`)
   }
})
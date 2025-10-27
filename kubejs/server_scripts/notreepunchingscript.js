// priority: 0

ServerEvents.recipes(event => {

  event.shapeless(
  Item.of('hot_iron:knapped_rock', 1),
  [
    '2x notreepunching:stone_loose_rock', 	        
  ])

})

LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:stone")
        .removeLoot("minecraft:cobblestone")
        .addLoot("notreepunching:stone_loose_rock")
        .limitCount([2, 4])
        
    event.addBlockLootModifier("minecraft:cobblestone")
        .removeLoot("minecraft:cobblestone")
        .addLoot("notreepunching:stone_loose_rock")
        .limitCount([2, 4])

    event.addBlockLootModifier("minecraft:leaves")
        .addLoot("minecraft:stick")
        .randomChance([7.5])
    
    event.addBlockLootModifier("minecraft:gravel")
        .removeLoot("minecraft:flint")
        .addLoot("minecraft:flint")
        .randomChance([2.5])

    event.addBlockLootModifier("minecraft:dirt")
        .addLoot("notreepunching:stone_loose_rock")
        .randomChance([1.0])

})






/**
 * Generated Tool: blocksTool_0554
 * Domain: Blocks
 * ID: 0554
 */
exports.blocksTool_0554 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0554:', error);
    throw error;
  }
};

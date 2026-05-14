/**
 * Generated Tool: blocksTool_0810
 * Domain: Blocks
 * ID: 0810
 */
exports.blocksTool_0810 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0810:', error);
    throw error;
  }
};

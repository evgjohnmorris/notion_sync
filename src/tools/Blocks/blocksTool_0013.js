/**
 * Generated Tool: blocksTool_0013
 * Domain: Blocks
 * ID: 0013
 */
exports.blocksTool_0013 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0013:', error);
    throw error;
  }
};

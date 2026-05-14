/**
 * Generated Tool: blocksTool_0003
 * Domain: Blocks
 * ID: 0003
 */
exports.blocksTool_0003 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0003:', error);
    throw error;
  }
};

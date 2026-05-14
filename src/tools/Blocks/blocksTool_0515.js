/**
 * Generated Tool: blocksTool_0515
 * Domain: Blocks
 * ID: 0515
 */
exports.blocksTool_0515 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0515:', error);
    throw error;
  }
};

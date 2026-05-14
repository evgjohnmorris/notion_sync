/**
 * Generated Tool: blocksTool_0425
 * Domain: Blocks
 * ID: 0425
 */
exports.blocksTool_0425 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0425:', error);
    throw error;
  }
};

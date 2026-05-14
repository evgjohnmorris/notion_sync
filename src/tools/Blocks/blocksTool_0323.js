/**
 * Generated Tool: blocksTool_0323
 * Domain: Blocks
 * ID: 0323
 */
exports.blocksTool_0323 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0323:', error);
    throw error;
  }
};

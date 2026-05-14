/**
 * Generated Tool: blocksTool_0366
 * Domain: Blocks
 * ID: 0366
 */
exports.blocksTool_0366 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0366:', error);
    throw error;
  }
};
